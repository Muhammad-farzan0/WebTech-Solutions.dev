import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";

// Basic in-memory rate limiting per server instance (best-effort; resets on redeploy/cold start).
// Good enough to stop a script from hammering the endpoint — not a substitute for a real
// rate-limiting service (e.g. Upstash) if this ever gets heavy traffic.
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    // Honeypot field — real users never fill this in; bots usually do.
    const company = String(body.company ?? "").trim();

    if (company) {
      // Silently succeed so the bot doesn't learn anything, but don't send an email.
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "That email address doesn't look valid." },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Tell us a little more about the project." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "That message is too long." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error(
        "RESEND_API_KEY is not set — see README.md for setup instructions."
      );
      return NextResponse.json(
        { error: "The contact form isn't fully configured yet. Please email us directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toAddress = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const fromAddress =
      process.env.CONTACT_FROM_EMAIL || "WebTech Solutions <onboarding@resend.dev>";

    const escape = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px;">
          <h2 style="margin-bottom: 4px;">New inquiry via webtechsolutions.dev</h2>
          <p style="color: #555;"><strong>Name:</strong> ${escape(name)}</p>
          <p style="color: #555;"><strong>Email:</strong> ${escape(email)}</p>
          <p style="color: #555; white-space: pre-wrap;"><strong>Message:</strong><br/>${escape(
            message
          )}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
