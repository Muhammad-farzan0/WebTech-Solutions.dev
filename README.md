# WebTech Solutions

A Next.js 16 + TypeScript + Tailwind CSS v3 marketing site for a web/app development studio, built for deployment on Vercel.

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v3
- Framer Motion (animations)
- lucide-react (icons)
- Resend (contact form email delivery)
- Vercel AI SDK + Anthropic/OpenAI (chat widget)
- Self-hosted fonts via `@fontsource` (Space Grotesk, Inter, JetBrains Mono) — no external font requests at build or runtime

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## ⚠️ Before you launch — 4 things you need to configure

### 1. Contact form (Resend)
The contact form at `/contact` posts to `src/app/api/contact/route.ts`, which sends email via [Resend](https://resend.com). Without an API key, the form shows a friendly "not configured yet" error instead of crashing — but you need this working before launch.

1. Create a free Resend account at resend.com.
2. Get an API key from the dashboard.
3. Add it as an environment variable:
   - Locally: create `.env.local` in the project root with `RESEND_API_KEY=re_your_key_here`
   - On Vercel: Project Settings → Environment Variables → add `RESEND_API_KEY`
4. By default, mail sends from `WebTech Solutions <onboarding@resend.dev>` (Resend's shared sending domain, works immediately) to `muhammadfarzan58@gmail.com`. To use your own domain and inbox:
   - Verify your domain in Resend (Domains → Add Domain, add the DNS records they give you)
   - Set `CONTACT_FROM_EMAIL="WebTech Solutions <muhammadfarzan58@gmail.com>"` and `CONTACT_TO_EMAIL="your-real-inbox@webtechsolutions.dev"` as env vars

The route already includes basic rate limiting (5 submissions per IP per 10 minutes) and a honeypot field to filter obvious bots.

### 2. Chat widget (bottom-right)
The floating "Ask us anything" widget calls `src/app/api/chat/route.ts`, which streams a response from an LLM using the [Vercel AI SDK](https://ai-sdk.dev). It's scoped with a system prompt built from your own services/pricing/FAQ data (`src/data/*`), so it only talks about what your studio actually offers — not a generic open-ended chatbot.

Until a key is set, the widget stays fully visible and functional but shows a friendly "not configured yet, use WhatsApp/contact form instead" message rather than erroring.

**Your setup: bluesminds.com** — this runs [New API](https://newapi.openedapi.com), a self-hosted gateway that exposes an OpenAI-compatible endpoint in front of multiple model providers. Set:
```bash
CUSTOM_AI_API_KEY=your_bluesminds_key
CUSTOM_AI_BASE_URL=https://api.bluesminds.com/v1
CUSTOM_AI_MODEL=gpt-5.2-chat   # or grok-4.5 — whatever channel/model your dashboard has configured
```
Swap `CUSTOM_AI_MODEL` any time to switch models — no code edit needed. Model names must match exactly what's configured in your bluesminds.com dashboard.

**Alternatives** (used automatically if `CUSTOM_AI_API_KEY` isn't set, in this order): Vercel AI Gateway (`AI_GATEWAY_API_KEY` + `AI_GATEWAY_MODEL`), then direct `ANTHROPIC_API_KEY`, then `OPENAI_API_KEY`.

Add whichever you use the same way as `RESEND_API_KEY` above (`.env.local` locally, Vercel env vars in production).

> ⚠️ A note on the key you shared in chat: treat it as exposed. If `api.bluesminds.com` lets you regenerate/revoke keys from its dashboard, it's worth doing that and using the new one only via `.env.local` / Vercel env vars going forward — never pasted directly into a conversation.

### 3. WhatsApp number
`src/data/site.ts` has a **placeholder** WhatsApp number (`923000000000`). Update `whatsappNumber` there with your real number in international format, digits only, no `+` or spaces (e.g. a number `+92 300 1234567` becomes `923001234567`). This one constant feeds the floating WhatsApp button (bottom-left), the footer icon, and anywhere else the number appears.

### 4. Google Analytics & Search Console (optional but recommended)
- **Analytics**: create a GA4 property, get your Measurement ID (`G-XXXXXXX`), and set it as env var `NEXT_PUBLIC_GA_ID`. The `GoogleAnalytics` component only loads the tracking script when this is set — nothing is sent otherwise.
- **Search Console**: verify ownership at [search.google.com/search-console](https://search.google.com/search-console) using the "HTML tag" method, then paste the content value into the commented-out `verification.google` field in `src/app/layout.tsx`.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Next.js (auto-detected).
4. Add the environment variables from above (`RESEND_API_KEY` at minimum).
5. Deploy.

Or from the CLI:

```bash
npm install -g vercel
vercel
```

## Site structure

```
/                     Homepage
/about                Company story, values, certifications
/services             Full service breakdown
/work                 Portfolio, filterable by category
/case-studies         Case study index
/case-studies/[slug]  Problem → solution → result detail pages
/pricing              Feature-comparison pricing tiers + FAQ
/blog                 Blog index
/blog/[slug]          Individual posts
/contact              Contact form + map + details
```

## Customizing

- **Copy & content**: `src/data/content.ts` (services, portfolio, testimonials, stats), `src/data/faq.ts`, `src/data/pricing.ts`, `src/data/caseStudies.ts`, `src/data/blog.ts`, `src/data/certifications.ts`.
- **Business details**: `src/data/site.ts` — one place for email, phone, WhatsApp number, and address. Everything else reads from here.
- **Colors**: the `navy` / `blue` / `sky` / `paper` scales in `tailwind.config.ts`.
- **Logo/icon**: the navbar/footer mark and all favicons use the bracket-only icon (`public/images/icon.png`, no wordmark baked in — the brand name is live text in `Navbar.tsx`/`Footer.tsx`, so renaming the company is just a text edit, not an image edit). Replace `public/images/icon.png`, `src/app/icon.png`, `src/app/apple-icon.png`, and the generated sizes in `public/icon-*.png` / `public/favicon.ico`. If you swap the source image, regenerate the set with ImageMagick:
  ```bash
  for size in 16 32 48 180 192 512; do
    convert public/images/icon.png -resize ${size}x${size} public/icon-${size}.png
  done
  convert public/images/icon.png -resize 32x32 -define icon:auto-resize=16,32,48 public/favicon.ico
  cp public/icon-180.png src/app/apple-icon.png
  ```
- **Testimonials**: `src/data/content.ts` — currently placeholder quotes, clearly marked with a comment. Swap in real client quotes as you collect them.
- **Certifications**: `src/data/certifications.ts` — double-check exact certificate titles/issuers/years against your real certificates before publishing; some fields were filled in from a rough description and are marked with a `TODO`.
- **Map**: the embedded map in `Contact.tsx` points to "Rawalpindi, Punjab, Pakistan" — update the `q=` query param in the iframe `src` to your exact address.
- **Chat widget system prompt**: `src/app/api/chat/route.ts` builds its instructions from `src/data/content.ts`, `src/data/pricing.ts`, and `src/data/faq.ts` automatically — update those files and the assistant's knowledge updates too, no prompt editing needed.

## Notes
- Dark/light mode persists via `localStorage` and respects the system preference on first visit.
- All animations respect `prefers-reduced-motion`.
- Every route has a `loading.tsx` (skeleton state) and the app has a global `error.tsx` and a styled `not-found.tsx` (404).
- `sitemap.ts` auto-includes every blog post and case study — no manual updates needed when you add new ones to their respective data files.
