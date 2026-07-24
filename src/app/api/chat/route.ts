import { streamText, convertToModelMessages, gateway, type UIMessage } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";
import { siteConfig } from "@/data/site";
import { services, process as buildProcess } from "@/data/content";
import { pricingTiers } from "@/data/pricing";
import { faqs } from "@/data/faq";

export const maxDuration = 30;

function buildSystemPrompt() {
  const serviceList = services
    .map((s) => `- ${s.title}: ${s.description}`)
    .join("\n");

  const processList = buildProcess
    .map((p) => `${p.step}. ${p.title} — ${p.description}`)
    .join("\n");

  const tierList = pricingTiers
    .map(
      (t) =>
        `- ${t.name}: ${t.tagline} Best for: ${t.bestFor} Includes: ${t.features.join(", ")}.`
    )
    .join("\n");

  const faqList = faqs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n");

  return `You are the website assistant for ${siteConfig.name} (${siteConfig.url}), a web & app development studio based in ${siteConfig.address}.

Your job is to help visitors understand what the studio does, point them to the right page, and gently move genuine leads toward getting in touch — without being pushy or salesy.

## Services
${serviceList}

## Process
${processList}

## Pricing tiers (feature comparison only — never invent a specific dollar/rupee figure; every quote is fixed after a discovery call)
${tierList}

## Frequently asked questions
${faqList}

## Contact
- Email: ${siteConfig.email}
- WhatsApp / phone: ${siteConfig.phoneDisplay}
- Contact form: ${siteConfig.url}/contact

## Rules
- Keep answers short — 2-4 sentences for most questions. This is a chat widget, not an essay.
- Never invent a specific price. If asked for a number, explain quotes are fixed after a short discovery call and suggest the /pricing page or the contact form.
- If someone describes a real project or asks "how much" / "can you build X", encourage them to use the contact form at /contact or WhatsApp — don't try to close the sale yourself.
- If you don't know something about the company, say so plainly and suggest contacting the team directly — don't guess or make up details.
- You can discuss general web/software development topics helpfully, but steer back to how ${siteConfig.name} can help when relevant.
- Never claim to be human. If asked, say you're the site's assistant.`;
}

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const model = process.env.CUSTOM_AI_API_KEY
      ? createOpenAI({
          apiKey: process.env.CUSTOM_AI_API_KEY,
          baseURL: process.env.CUSTOM_AI_BASE_URL || "https://api.bluesminds.com/v1",
        }).chat(process.env.CUSTOM_AI_MODEL || "gpt-5.2-chat")
      : process.env.AI_GATEWAY_API_KEY
        ? gateway(process.env.AI_GATEWAY_MODEL || "openai/gpt-5.2-chat")
        : process.env.ANTHROPIC_API_KEY
          ? anthropic("claude-3-5-haiku-latest")
          : process.env.OPENAI_API_KEY
            ? openai("gpt-4o-mini")
            : null;

    if (!model) {
      console.error(
        "No AI provider configured — set CUSTOM_AI_API_KEY (recommended for this project), AI_GATEWAY_API_KEY, ANTHROPIC_API_KEY, or OPENAI_API_KEY. See README.md."
      );
      return Response.json(
        {
          error:
            "The chat assistant isn't fully configured yet. Please use the contact form or WhatsApp instead.",
        },
        { status: 500 }
      );
    }

    const result = streamText({
      model,
      system: buildSystemPrompt(),
      messages: await convertToModelMessages(messages),
      abortSignal: req.signal,
    });

    return result.toUIMessageStreamResponse({
      onError: (error) => {
        console.error("Chat stream error:", error);
        return "Something went wrong generating a response. Please try again or reach out via WhatsApp.";
      },
    });
  } catch (err) {
    console.error("Chat route error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
