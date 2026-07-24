// ─── Home teaser services (short cards) ────────────────────────────────────
export const services = [
  {
    tag: "web",
    title: "Web Development",
    description:
      "Full-stack products on the MERN stack and Next.js — real-time boards, dashboards, and internal tools built to production standard.",
  },
  {
    tag: "cms",
    title: "WordPress Development",
    description:
      "Custom builds on Salient with ACF, WPBakery, and automated marketing workflows — sites your team can actually edit.",
  },
  {
    tag: "shop",
    title: "E-commerce Development",
    description:
      "Storefronts built to convert, with SEO baked in from day one — not bolted on after launch.",
  },
  {
    tag: "ai",
    title: "AI Integration & Design",
    description:
      "AI-assisted features, Firebase pipelines, and prompt-engineered product visuals that make a site look and work premium.",
  },
];

// ─── Full service detail (for /services page) ──────────────────────────────
export const serviceDetails = [
  {
    tag: "web",
    title: "Web Development",
    summary: "Full-stack products, built to hold up in production.",
    description:
      "We build web apps and dashboards on the MERN stack and Next.js/TypeScript — from first component to deployed product. Real-time collaboration, authentication, analytics dashboards, and clean REST APIs, all shipped on modern cloud infrastructure.",
    features: [
      "React, Next.js & TypeScript front-ends",
      "Node.js / Express REST APIs",
      "MongoDB data modelling & schema design",
      "Real-time features — live boards, notifications, activity feeds",
      "Authentication & role-based authorization",
      "Analytics dashboards & data visualization",
      "CI/CD and deployment on Vercel",
    ],
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    tag: "cms",
    title: "WordPress Development",
    summary: "Custom WordPress builds your team can actually manage.",
    description:
      "We build and customize WordPress sites on the Salient theme with child themes and ACF for dynamic, client-editable content. Pages are assembled in WPBakery, forms carry real conditional logic, and marketing runs on autopilot once the site ships.",
    features: [
      "Salient theme customization & child themes",
      "Advanced Custom Fields (ACF) for editable content",
      "WPBakery page building & modular layouts",
      "Multi-step forms with conditional logic (Fluent Forms, eForms)",
      "Marketing automation via FluentCRM",
      "Support & ticketing integration (ThriveDesk)",
      "Product configurators & FPD (Fancy Product Designer) integration",
      "Custom shortcodes, CSS, and UI fixes without breaking existing styles",
    ],
    tools: [
      "WordPress",
      "Salient",
      "ACF",
      "WPBakery",
      "Fluent Forms",
      "FluentCRM",
      "ThriveDesk",
    ],
  },
  {
    tag: "shop",
    title: "E-commerce Development",
    summary: "Storefronts built to convert, not just launch.",
    description:
      "We've built and grown e-commerce platforms for retail brands from the ground up — catalog structure, checkout flow, and the on-page SEO that turns organic traffic into orders.",
    features: [
      "Full e-commerce storefront builds",
      "Product catalog & variant setup",
      "Conversion-focused UX & checkout flow",
      "Payment & shipping integration",
      "On-page & off-page SEO for organic sales growth",
      "Performance optimization for Core Web Vitals",
    ],
    tools: ["WordPress / WooCommerce", "Shopify", "SEO", "Google Analytics"],
  },
  {
    tag: "ai",
    title: "AI Integration & Automation",
    summary: "Practical AI, wired into real products.",
    description:
      "We integrate AI where it actually earns its place in a product — assistants that draft content inline, data pipelines that store and structure AI-generated output, and automations that remove manual busywork.",
    features: [
      "AI-assisted description & content generation",
      "Firebase / Firestore data pipelines for AI-generated content",
      "Third-party AI model integration (Hugging Face and others)",
      "Prompt engineering for production use-cases",
      "Workflow automation to cut manual data entry",
    ],
    tools: ["Firebase", "Firestore", "Hugging Face", "Prompt Engineering"],
  },
  {
    tag: "design",
    title: "Graphic Design & Visual Branding",
    summary: "Visuals that make a storefront look premium.",
    description:
      "From logo design to 2D/3D product renders, we create the visual assets that carry a brand across a website — thumbnails, mockups, shadow overlays, and AI-assisted product photography where a real photoshoot isn't practical.",
    features: [
      "Logo design & brand identity",
      "2D/3D product visualization & mockups",
      "Marketing thumbnails & social assets",
      "AI-assisted product image generation (prompt engineering with Higgsfield.ai)",
      "Shadow overlays & base mockups for e-commerce catalogs",
    ],
    tools: ["Adobe Illustrator", "Higgsfield.ai", "Prompt Engineering"],
  },
  {
    tag: "seo",
    title: "SEO & Performance",
    summary: "Technical SEO that turns traffic into customers.",
    description:
      "Technical SEO, Core Web Vitals, and content structure so the site you paid for actually gets found — and actually converts once it's found.",
    features: [
      "Technical & on-page SEO audits",
      "Off-page SEO & authority building",
      "Core Web Vitals optimization",
      "Search ranking & organic traffic growth",
      "Analytics & tracking setup",
    ],
    tools: ["Google Search Console", "Google Analytics", "Core Web Vitals"],
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map your goals, users, and constraints before a single pixel is placed.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Stack, data model, and component system get planned — the boring part that prevents rewrites.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Weekly demos, typed code, and version control from commit one.",
  },
  {
    step: "04",
    title: "Ship & Support",
    description:
      "Deployed to production, monitored, and handed off with documentation you'll actually use.",
  },
];

// ─── Featured projects for the home page teaser ────────────────────────────
export const portfolio = [
  {
    name: "DailyNote",
    tag: "Task Management · MERN Stack",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    result:
      "Real-time collaborative boards with smart timers, AI descriptions, and analytics dashboards.",
    link: "https://daily-note-liard.vercel.app",
  },
  {
    name: "SofaScene",
    tag: "E-commerce · Furniture Retail (UK)",
    stack: ["WordPress", "WooCommerce", "SEO"],
    result:
      "On-page & off-page SEO drove exceptional organic sales growth for a UK furniture retailer.",
  },
  {
    name: "BRAVE Gym",
    tag: "Fitness · Marketing Site",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    result:
      "Pakistan's first functional-training & combat-sports gym, with a site built to match the brand's energy.",
    link: "https://the-brave-gym.vercel.app/",
  },
  {
    name: "Apricus Technical Solutions",
    tag: "Corporate · Engineering Consultancy",
    stack: ["WordPress", "Custom Design"],
    result:
      "A professional site highlighting premium supply-sourcing and engineering services.",
  },
];

// ─── Full project set, grouped, for /work ──────────────────────────────────
export const projectCategories = [
  {
    title: "Web Applications",
    tag: "SaaS · Web Apps",
    description:
      "Full-stack products built on the MERN stack — from real-time collaboration to secure data isolation.",
    projects: [
      {
        name: "DailyNote",
        tag: "Real-Time Collaborative Task Management",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        description:
          "A task management system with real-time collaborative boards, an automatic smart-timer system, AI-assisted task descriptions, file attachments, and an interactive analytics dashboard — deployed entirely on free-tier cloud infrastructure.",
        link: "https://daily-note-liard.vercel.app",
        github: "https://github.com/Muhammad-farzan0/DailyNote",
      },
      {
        name: "NewsApp",
        tag: "News Aggregator",
        stack: ["React", "NewsAPI"],
        description:
          "A dynamic news aggregator with categorized sections — sports, entertainment, politics, and social — enabling tailored browsing of global articles.",
      },
      {
        name: "Notes Web-App",
        tag: "Secure Note-Taking Platform",
        stack: ["MongoDB", "Express", "React", "Node.js"],
        description:
          "A secure note-taking application with authenticated CRUD functionality and strict data isolation — every user's notes stay private, backed by a RESTful API and a responsive React front-end.",
      },
    ],
  },
  {
    title: "E-commerce",
    tag: "Retail · Online Stores",
    description:
      "Storefronts built and optimized for UK-based furniture retailers.",
    projects: [
      {
        name: "SofaScene",
        tag: "Furniture Retail, UK",
        stack: ["WordPress", "WooCommerce", "SEO"],
        description:
          "A fully functional e-commerce platform for a UK furniture retailer, later optimized with on-page and off-page SEO — driving exceptional sales growth through improved organic traffic and search rankings.",
      },
      {
        name: "Sofas n Beds",
        tag: "Furniture Retail, UK",
        stack: ["WordPress", "WooCommerce"],
        description:
          "Design and launch of an e-commerce website for a UK-based furniture retailer, built around a clean catalog structure and conversion-focused layout.",
      },
    ],
  },
  {
    title: "Corporate Websites",
    tag: "Business · Marketing Sites",
    description:
      "Professional sites for consultancy and supply businesses across two continents.",
    projects: [
      {
        name: "Apricus Technical Solutions",
        tag: "Supply Sourcing & Engineering Consultancy",
        stack: ["WordPress", "Custom Design"],
        description:
          "A professional corporate website highlighting premium supply-sourcing and engineering consultancy services.",
      },
      {
        name: "Alifah Enterprise",
        tag: "Electronics Supplier, Singapore",
        stack: ["WordPress", "Custom Design"],
        description:
          "A sleek, efficient website for a Singapore-based supplier of electronic components, projectors, and IP cameras.",
      },
    ],
  },
  {
    title: "AI & Data Platforms",
    tag: "Applied AI",
    description:
      "Production data pipelines connecting AI models to real front-ends.",
    projects: [
      {
        name: "ImagineX.ai",
        tag: "AI Image Data Platform",
        stack: ["Firebase", "Firestore", "React"],
        description:
          "Collected and structured AI-generated image data — prompts, negative prompts, and image URLs from multiple external sources — into Firebase Firestore, with integrated external AI models automating the data flow end to end.",
      },
    ],
  },
  {
    title: "R&D / Innovation Lab",
    tag: "Applied Research",
    description:
      "Deep-tech exploration outside client work — AI and IoT applied to real-world problems.",
    projects: [
      {
        name: "SolarAI",
        tag: "IoT-Enabled Solar Panel Optimization",
        stack: ["TensorFlow", "CNNs", "OpenCV", "Flutter", "IoT"],
        description:
          "An AI-driven system to detect and resolve solar panel defects — cracks, hotspots — in real time. IoT sensors feed deep-learning models for defect detection, paired with a Flutter interface for real-time alerts, achieving high detection accuracy and reduced energy wastage.",
      },
    ],
  },
];

// ─── Gym & fitness websites ─────────────────────────────────────────────────
export const gymProjects = [
  {
    name: "Muscle Fitness Club",
    location: "Lahore",
    description:
      "A ladies & gents gym site built around imported equipment and expert coaching — service pages for kettlebell training, weightlifting, gymnastics, and striking, plus a full gallery and membership flow.",
    link: "https://muscle-fitness-gym-f.vercel.app/",
  },
  {
    name: "Metafitnosis",
    location: "Islamabad, F-6 Markaz",
    description:
      "A boutique personal-training studio site — coach profiles, a weekly class-schedule filter by program and location, and a success-stories section for a facility training clients since 2006.",
    link: "https://metafitnosis-gym.vercel.app/",
  },
  {
    name: "BRAVE Gym",
    location: "Packages Mall, Lahore",
    description:
      "Pakistan's first functional-training and combat-sports facility — program pages for strength & conditioning, combat sports, and CrossFit, built with a high-energy visual identity to match the brand.",
    link: "https://the-brave-gym.vercel.app/",
  },
  {
    name: "BodyTech",
    location: "Lahore — EME, Rahbar & Bahria Town",
    description:
      "A multi-branch gym platform with a location-and-service filterable class timetable across three branches, separate ladies & gents wings, and a member-testimonials section.",
    link: "https://bodytech-gym.vercel.app/",
  },
  {
    name: "Longevity Health Club",
    location: "Rawalpindi",
    description:
      "A gents & ladies health club site with service breakdowns for kettlebell, weightlifting, and personal training, plus a full photo gallery of the facility.",
    link: "https://longevitygym.vercel.app/",
  },
];

// ⚠️ PLACEHOLDER TESTIMONIALS — swap these for real client quotes as soon as
// you have them (a short WhatsApp/email message works fine, doesn't need to
// be formal). Keep the same {quote, name, role} shape.
export const testimonials = [
  {
    quote:
      "“DailyNote simplified task management, improved collaboration, boosted productivity, and helped our team meet deadlines with ease and confidence.",
    name: "Muhammad F",
    role: "Founder, Tech Solutions",
  },

  {
    quote:
      "WebTech Solutions rebuilt our dashboard in 3 weeks and it hasn't gone down once since launch. Communication was direct and honest the entire way.",
    name: "Saqib Khan",
    role: "COO, Meridian Freight",
  },
  {
    quote:
      "They understood our users better than we did. The e-commerce rebuild paid for itself in the first month through conversion alone.",
    name: "M. Asif",
    role: "Founder, UK Furniture Retailer",
  },
  {
    quote:
      "Clean code, clear estimates, no scope creep. Exactly what a small team needs from an outside dev shop.",
    name: "Kamran Cheema",
    role: "Furqan Enterprises, Lahore",
  },
];

export const stats = [
  { value: "15+", label: "Websites & apps shipped" },
  { value: "5", label: "Fitness brands launched" },
  { value: "MERN", label: "Full-stack, end to end" },
  { value: "<1s", label: "Median load time" },
];
