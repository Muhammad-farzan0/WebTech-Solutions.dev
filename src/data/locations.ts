export interface LocationPage {
  slug: string;
  country: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroIntro: string;
  localContext: {
    heading: string;
    paragraphs: string[];
  };
  whyUs: { title: string; description: string }[];
  focusServices: string[];
  relatedCaseStudySlug?: string;
  relatedWorkNote: string;
  faqs: { question: string; answer: string }[];
  testimonialIndex: number; // index into the `testimonials` array in content.ts
  ctaHeading: string;
}

export const locationPages: LocationPage[] = [
  {
    slug: "usa",
    country: "United States",
    metaTitle: "Web Development Company for U.S. Businesses — WebTech Solutions",
    metaDescription:
      "Next.js, WordPress, and e-commerce development for U.S. founders and small businesses — fixed quotes, async-friendly delivery, no timezone friction.",
    h1: "Web development for U.S. founders and small businesses.",
    heroIntro:
      "We build Next.js products, WordPress sites, and Shopify/WooCommerce storefronts for U.S.-based startups and small businesses — priced in USD, delivered on a fixed timeline, with weekly async updates so a 9–10 hour time difference never becomes a bottleneck.",
    localContext: {
      heading: "How we work with U.S. clients",
      paragraphs: [
        "Most of our client conversations happen async — a shared Slack or WhatsApp thread, weekly Loom-style progress updates, and a scheduled call every one or two weeks at a time that works for your team, usually late morning Eastern. Nobody is waiting on a same-timezone daily standup for a marketing site or an MVP build.",
        "Pricing is quoted in USD and fixed after a short discovery call — no hourly billing surprises. For SaaS founders specifically, we default new builds to Next.js with a managed database and auth provider (rather than custom backend infrastructure) because it's the fastest path from spec to a testable product, which matters more for a U.S. startup validating an idea than a technically exhaustive v1.",
        "We're comfortable working alongside a U.S.-based designer, marketing agency, or in-house PM if you already have one — we plug into an existing team's workflow rather than requiring you to restructure around ours.",
      ],
    },
    whyUs: [
      {
        title: "Fixed USD quotes, no hourly guessing",
        description:
          "You get one number after discovery, not an hours estimate that grows mid-project.",
      },
      {
        title: "Async-first delivery",
        description:
          "Weekly written/video updates mean progress doesn't depend on overlapping work hours.",
      },
      {
        title: "Modern stack by default",
        description:
          "Next.js/TypeScript for speed-to-market — the same stack choice we've written about for SaaS MVP costing.",
      },
      {
        title: "Direct communication",
        description:
          "You talk to the person building it, not an account manager relaying messages.",
      },
    ],
    focusServices: ["web", "ai", "seo"],
    relatedCaseStudySlug: "dailynote",
    relatedWorkNote:
      "DailyNote — a full-stack MERN task-management platform with real-time collaboration — is the clearest example of the kind of lean, fast-shipped product build U.S. founders usually come to us for.",
    faqs: [
      {
        question: "Can you work within U.S. business hours if we need real-time calls?",
        answer:
          "Yes — we regularly schedule calls in the late-morning-to-afternoon Eastern window. Most day-to-day communication is async by design, but live calls are never off the table.",
      },
      {
        question: "Do you invoice in USD?",
        answer:
          "Yes, quotes and invoices are in USD. Payment is staged — deposit, milestone, balance on delivery — the same structure detailed on our pricing page.",
      },
      {
        question: "Can you integrate with our existing U.S. tools (Stripe, HubSpot, etc.)?",
        answer:
          "Yes — Stripe for payments, common auth providers, and most mainstream SaaS APIs integrate cleanly into a Next.js build. Tell us what you're already using during discovery.",
      },
    ],
    testimonialIndex: 1,
    ctaHeading: "Scoping a U.S. project? Let's talk numbers and timeline.",
  },
  {
    slug: "uk",
    country: "United Kingdom",
    metaTitle: "E-commerce & Web Development for UK Businesses — WebTech Solutions",
    metaDescription:
      "WooCommerce, Shopify, and Next.js development for UK small businesses — proven organic-SEO results for a UK furniture retailer, GDPR-aware builds.",
    h1: "E-commerce and web development for UK businesses.",
    heroIntro:
      "We've shipped e-commerce platforms for two UK furniture retailers and driven measurable organic sales growth through technical and on-page SEO — not just built the storefront and walked away.",
    localContext: {
      heading: "What UK clients specifically ask us for",
      paragraphs: [
        "GDPR compliance comes up in nearly every UK e-commerce conversation, and it's built in from the start rather than bolted on: a clear cookie consent banner, a privacy policy that reflects what's actually collected at checkout, and no storing more customer data than the business needs.",
        "Catalogue size and stock-sync with an existing till or inventory system is usually the real cost driver for UK retailers moving online, more than the storefront build itself — we scope this explicitly during discovery rather than quoting a flat number that ignores it.",
        "For SofaScene, a UK furniture retailer, the work went beyond the build: we rebuilt on-page SEO foundations — metadata, internal linking, product-page templates — then ran a sustained off-page push, which is what actually moved organic sales, not the storefront alone.",
      ],
    },
    whyUs: [
      {
        title: "Proven UK e-commerce track record",
        description:
          "Two UK furniture retailers shipped and, for one, a full SEO campaign with substantial organic growth.",
      },
      {
        title: "GDPR built in, not bolted on",
        description:
          "Cookie consent, data-minimal checkout flows, and a privacy policy that matches reality from day one.",
      },
      {
        title: "SEO isn't an afterthought",
        description:
          "Every storefront ships with on-page SEO foundations already in place — see our SofaScene case study.",
      },
      {
        title: "GBP quotes, standard payment terms",
        description: "Deposit, milestone, balance — quoted and invoiced the way UK small businesses expect.",
      },
    ],
    focusServices: ["shop", "seo", "web"],
    relatedCaseStudySlug: "sofascene",
    relatedWorkNote:
      "SofaScene — a UK furniture retailer's WooCommerce rebuild that moved from paid-traffic dependence to durable organic sales growth — is the fullest example of how we approach a UK e-commerce engagement.",
    faqs: [
      {
        question: "Can you sync the online store with our existing till/inventory system?",
        answer:
          "Often, yes — this is one of the first things we scope on a discovery call, since it's usually the actual cost driver for a UK retailer moving online, not the storefront build itself.",
      },
      {
        question: "Do you handle GDPR compliance basics?",
        answer:
          "Yes — cookie consent, a privacy policy matched to what's actually collected at checkout, and data-minimal defaults are standard on every UK build, not an optional add-on.",
      },
      {
        question: "Do you only build on WordPress/WooCommerce, or Shopify too?",
        answer:
          "Both — we pick the platform based on catalogue size, existing systems, and budget, and say plainly which one fits your case rather than defaulting to one.",
      },
    ],
    testimonialIndex: 2,
    ctaHeading: "Ready to move your UK store from paid traffic to organic growth?",
  },
  {
    slug: "pakistan",
    country: "Pakistan",
    metaTitle: "Web Development Company in Pakistan — WebTech Solutions, Rawalpindi",
    metaDescription:
      "Rawalpindi-based web & app development studio — Next.js, WordPress, e-commerce, and a proven run of gym & fitness sites across Lahore, Islamabad, and Rawalpindi.",
    h1: "Pakistan's web development studio for founders and local businesses.",
    heroIntro:
      "Based in Rawalpindi, we build for Pakistani businesses directly — from a five-site run of gym and fitness-club platforms across Lahore, Islamabad, and Rawalpindi to full-stack SaaS products, with no timezone gap and in-person meetings on request.",
    localContext: {
      heading: "Built around how Pakistani businesses actually work",
      paragraphs: [
        "Network conditions outside the major metros are a real design constraint, not a footnote — we've written specifically about optimizing Core Web Vitals for Pakistani networks, and it shapes every build: image weight, third-party script audits, and self-hosted fonts, so a site tested on office fibre still feels fast on 3G in a secondary city.",
        "Payment is typically structured in PKR with a deposit to start, a milestone partway through, and the balance on delivery — the same terms whether the client is a Lahore fitness brand or an Islamabad startup.",
        "We work directly with the business owner or a small internal team, not through layers of account management — most first conversations happen over WhatsApp, and we can meet in person around Islamabad/Rawalpindi when that's useful.",
      ],
    },
    whyUs: [
      {
        title: "Local, not offshore",
        description: "Rawalpindi-based — no cross-continent handoffs, meetings on request.",
      },
      {
        title: "A proven fitness-brand track record",
        description: "Five gym and fitness-club sites shipped across Lahore, Islamabad, and Rawalpindi.",
      },
      {
        title: "Built for real Pakistani network conditions",
        description: "Performance work tuned for 3G/4G realities outside the main metros, not just lab scores.",
      },
      {
        title: "WhatsApp-first communication",
        description: "Talk to us the way you already talk to everyone else — no rigid ticketing system.",
      },
    ],
    focusServices: ["web", "cms", "design"],
    relatedCaseStudySlug: "brave-gym",
    relatedWorkNote:
      "BRAVE Gym in Lahore's Packages Mall — Pakistan's first functional-training and combat-sports facility — is one of five fitness-brand sites we've built across Lahore, Islamabad, and Rawalpindi.",
    faqs: [
      {
        question: "Can we meet in person?",
        answer:
          "Yes — we're based in Rawalpindi and can meet around Islamabad/Rawalpindi directly, or run the whole project over WhatsApp and calls if that's easier for you.",
      },
      {
        question: "Do you quote in PKR?",
        answer:
          "Yes — pricing and payment terms are in PKR for local clients, staged as a deposit, a milestone, and the balance on delivery.",
      },
      {
        question: "We've seen your gym website work — do you only build fitness sites?",
        answer:
          "No — fitness brands are one strong track record among several. We also build SaaS products, WordPress sites, e-commerce stores, and AI-integrated platforms; gym sites just happen to be a repeatable pattern we've refined.",
      },
    ],
    testimonialIndex: 0,
    ctaHeading: "Based in Pakistan and ready to start? Let's talk on WhatsApp.",
  },
  {
    slug: "uae",
    country: "United Arab Emirates",
    metaTitle: "Bilingual Arabic–English Web Development for UAE Businesses — WebTech Solutions",
    metaDescription:
      "RTL-ready, bilingual Arabic–English websites and e-commerce for UAE businesses — built for Dubai and Abu Dhabi audiences, WhatsApp-first, Gulf trust signals included.",
    h1: "Bilingual Arabic–English websites for UAE businesses.",
    heroIntro:
      "A genuinely bilingual site for a Dubai or Abu Dhabi business is a different build to an English site with a translated version bolted on — right-to-left layout, Gulf-appropriate trust signals, and WhatsApp as a primary contact channel, built in from the structure up, not patched on afterward.",
    localContext: {
      heading: "What a proper UAE build actually requires",
      paragraphs: [
        "Right-to-left (RTL) support has to be in the component layer from day one — navigation, icons, form fields, and spacing all flip direction correctly, not just the body text. Retrofitting RTL onto an English-first site after the fact almost always shows.",
        "Typography matters more than it first appears: a font tuned for Latin characters often renders Arabic script cramped or uneven, so Arabic gets its own font choice and line-height tuning rather than reusing the English site's type scale.",
        "Trust signals differ from a Western-market site too — clear company information, WhatsApp as a primary contact route (heavily used across the UAE), and professionally written Arabic copy (not machine-translated English) matter more here than they would on a US or UK site.",
      ],
    },
    whyUs: [
      {
        title: "RTL built in from the structure, not patched on",
        description: "Component-level right-to-left support, not a CSS override pass at the end.",
      },
      {
        title: "Real Arabic copywriting",
        description: "Professionally written Arabic content, not a machine translation of the English site.",
      },
      {
        title: "WhatsApp-first contact flow",
        description: "The primary contact channel across the region, wired in as a first-class feature.",
      },
      {
        title: "E-commerce & corporate experience",
        description: "Storefront and corporate-site builds for international clients including Dubai and the UK.",
      },
    ],
    focusServices: ["web", "shop", "design"],
    relatedWorkNote:
      "Alifah Enterprise — a corporate site built for a Dubais-based electronics supplier — reflects the same international, trust-signal-first approach we bring to a UAE build.",
    faqs: [
      {
        question: "Do you write the Arabic content yourselves or need us to provide it?",
        answer:
          "We work with professionally written Arabic copy rather than machine translation — you can provide existing Arabic content, or we can help source and structure it as part of the build.",
      },
      {
        question: "Is the RTL layout a real flip or just mirrored text?",
        answer:
          "A real flip — navigation, icons, forms, and spacing all mirror correctly, because it's built into the component layer, not added as a CSS patch once the English site is done.",
      },
      {
        question: "Can you integrate UAE-specific payment gateways?",
        answer:
          "Yes — for e-commerce builds we integrate the payment and shipping providers relevant to the UAE market as part of scoping during discovery.",
      },
    ],
    testimonialIndex: 3,
    ctaHeading: "Building for a Dubai or Abu Dhabi audience? Let's scope it properly.",
  },
  {
    slug: "saudi-arabia",
    country: "Saudi Arabia",
    metaTitle: "Web Development for Saudi Arabia Businesses — WebTech Solutions",
    metaDescription:
      "Bilingual Arabic–English websites and e-commerce for Saudi businesses digitizing under Vision 2030 — RTL builds, WhatsApp-first, credible to both language audiences.",
    h1: "Web development for Saudi businesses going digital.",
    heroIntro:
      "Saudi Arabia's Vision 2030 push has meaningfully increased how many local businesses are digitizing for the first time — we build sites that read as credible to both Arabic-first and English-first customers, not one favoring the other.",
    localContext: {
      heading: "Building for a Vision 2030-era Saudi business",
      paragraphs: [
        "A growing number of Saudi businesses are online for the first time rather than rebuilding an existing site, which changes the brief: the priority is usually a credible, trustworthy first digital presence — clear company information, professional Arabic and English copy, and a straightforward path to contact — over feature complexity.",
        "As with the wider Gulf, right-to-left layout support and WhatsApp as a primary contact channel aren't optional extras; they're baseline expectations for a Saudi audience, built into the site's structure from the start.",
        "Content and tone shift for a Saudi business audience specifically — this isn't a literal English-to-Arabic translation pass, it's separate, professionally written copy in both languages that reads naturally to each audience.",
      ],
    },
    whyUs: [
      {
        title: "First-digital-presence experience",
        description: "Built for businesses digitizing for the first time, not just rebuilding an existing site.",
      },
      {
        title: "Bilingual from the ground up",
        description: "Separate, professional Arabic and English copy — not a translated afterthought.",
      },
      {
        title: "RTL and WhatsApp as baseline, not add-ons",
        description: "Structural right-to-left support and WhatsApp contact built in from day one.",
      },
      {
        title: "Fixed quotes, staged payment",
        description: "A clear number after discovery and a deposit/milestone/balance structure.",
      },
    ],
    focusServices: ["web", "cms", "design"],
    relatedWorkNote:
      "Our bilingual Gulf build process — covered in more depth in our blog post on Arabic–English websites — is the same approach we bring to a Saudi-market site: RTL from the component layer up, not a translation pass at the end.",
    faqs: [
      {
        question: "We don't have an existing website — can you build our first one from scratch?",
        answer:
          "Yes — this is common for Saudi businesses digitizing for the first time. We'll walk through discovery the same way regardless of whether you're rebuilding or starting fresh.",
      },
      {
        question: "Do you provide the Arabic copywriting or do we need to?",
        answer:
          "We can help source and write professional Arabic copy as part of the build, or work from Arabic content you already have — either way, it's never a raw translation of the English version.",
      },
      {
        question: "Can you set up WhatsApp as our main contact channel on the site?",
        answer:
          "Yes — a floating WhatsApp contact button with a pre-filled message is standard on every build, since it's the primary way customers reach a business across the region.",
      },
    ],
    testimonialIndex: 3,
    ctaHeading: "Digitizing your business for the first time? Let's start with discovery.",
  },
];
