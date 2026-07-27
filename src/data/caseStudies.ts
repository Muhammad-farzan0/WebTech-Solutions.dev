export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  link?: string;
  problem: string;
  solution: string;
  result: string;
  heroTag: string;
  image?: string;
}

// `image` paths are local — drop matching files into public/images/work/
// (see IMAGE-SOURCING.md for exactly what to download and where from).
export const caseStudies: CaseStudy[] = [
  {
    slug: "sofascene",
    name: "SofaScene",
    category: "E-commerce · SEO",
    heroTag: "Furniture Retail, UK",
    image: "/images/work/sofascene.jpg",
    summary:
      "A UK furniture retailer's e-commerce store rebuilt for organic growth — from an underperforming storefront to a search-driven sales channel.",
    stack: ["WordPress", "WooCommerce", "Technical SEO", "On-page & Off-page SEO"],
    problem:
      "SofaScene had a functional WooCommerce storefront, but it wasn't earning organic visibility. Product pages weren't structured for search, technical SEO fundamentals were missing, and the site was leaning entirely on paid traffic to move product.",
    solution:
      "We rebuilt the on-page SEO foundation — page structure, metadata, internal linking, and product-page templates — then ran a sustained off-page SEO push to build authority. Site performance and Core Web Vitals were optimized alongside the SEO work, since ranking gains mean little if the site is slow once visitors arrive.",
    result:
      "Organic traffic and search rankings grew substantially, translating into exceptional sales growth from channels that previously cost nothing to acquire — a durable improvement, not a paid-traffic spike that disappears when the budget stops.",
  },
  {
    slug: "dailynote",
    name: "DailyNote",
    category: "Web Application",
    heroTag: "Real-Time Collaborative Task Management",
    summary:
      "A full-stack task management platform with real-time collaboration, built and shipped entirely on free-tier infrastructure.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://daily-note-liard.vercel.app",
    image: "/images/work/dailynote.jpg",
    problem:
      "Teams needed a task board that updated live across users — without the overhead or cost of enterprise project-management tools, and without sacrificing features like time tracking or activity insight.",
    solution:
      "We built a MERN-stack application from the ground up: real-time collaborative boards, an automatic smart-timer system for tracking work, AI-assisted task descriptions to speed up planning, file attachments, and an analytics dashboard — all deployed on free-tier cloud infrastructure to keep running costs at zero.",
    result:
      "A production-ready collaborative tool that handles real-time updates across multiple users reliably, with zero hosting cost — proof that a lean stack, built correctly, can match the experience of much heavier commercial tools.",
  },
  {
    slug: "brave-gym",
    name: "BRAVE Gym",
    category: "Marketing Site · Fitness",
    heroTag: "Packages Mall, Lahore",
    summary:
      "A high-energy marketing site for Pakistan's first functional-training and combat-sports facility, built to match the brand's intensity.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://the-brave-gym.vercel.app/",
    image: "/images/work/brave-gym.jpg",
    problem:
      "BRAVE needed a site that didn't feel like a generic gym template — the brand's identity is built on intensity and functional training, and a soft corporate layout would have undersold it.",
    solution:
      "We designed and built dedicated program pages for strength & conditioning, combat sports, and CrossFit, paired with bold typography, motion, and a visual identity that carries the same energy as the gym floor itself.",
    result:
      "A site that reads as a natural extension of the brand rather than a bolted-on marketing page — built on Next.js and Tailwind for fast load times regardless of network conditions.",
  },
];
