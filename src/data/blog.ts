export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-we-moved-to-app-router",
    title: "Why We Moved Every New Build to Next.js App Router",
    excerpt:
      "Server components cut our average time-to-interactive by a third. Here's what changed in our workflow.",
    date: "June 2026",
    readTime: "6 min read",
    tag: "engineering",
    content: [
      "For the last few client builds, we defaulted to the Next.js App Router instead of the older Pages Router — and it's changed how we structure projects from the first commit, not just how routing works.",
      "The biggest shift is server components. Data fetching that used to happen client-side, with a loading spinner and a waterfall of requests, now happens on the server before a single byte reaches the browser. For content-heavy marketing sites, that alone noticeably improves how fast a page feels interactive, especially on the mid-range Android devices a lot of our clients' users are actually on.",
      "It also changes how we think about client-side JavaScript. Instead of marking a whole page as a client component because one button needs `useState`, the App Router lets us push interactivity down to the smallest possible component and keep everything else static. Less JavaScript shipped to the browser means less to parse and execute, which matters more on slower connections than on a developer's fibre line.",
      "Layouts are the other underrated win. Nested layouts mean a dashboard's sidebar or a marketing site's navbar doesn't re-render or re-fetch on every route change — it just persists, and only the page content inside it swaps out. For multi-page client sites, that alone removes a category of janky transitions we used to patch over with loading states.",
      "It isn't friction-free. The mental model for what runs on the server versus the client takes adjustment, and some third-party libraries built for the old client-rendered world need extra care to use correctly. But for anything we're starting fresh, the trade-off is worth it — faster initial loads, less shipped JavaScript, and a project structure that scales better as a site grows past a handful of pages.",
    ],
  },
  {
    slug: "cost-of-skipping-a-design-system",
    title: "The Real Cost of Skipping a Design System",
    excerpt:
      "Three client rebuilds we've done this year all started the same way: no shared components, no tokens.",
    date: "May 2026",
    readTime: "5 min read",
    tag: "process",
    content: [
      "A pattern shows up almost every time we take over an existing site: buttons that are visually identical but built three different ways in three different files. A blue that's `#0A1F44` in one place and `#0A1E43` in another, close enough that nobody noticed until a designer held two screenshots side by side.",
      "None of this is really about aesthetics — it's about how expensive it becomes to change anything later. Without a shared set of tokens (color, spacing, type scale) and a small library of reusable components, a request as simple as \"make our buttons a bit more rounded\" turns into a search-and-replace across dozens of files, hoping you didn't miss one.",
      "The fix isn't complicated, and it doesn't require a full design-system team. On every project now, we start with a token file — colors, font sizes, spacing units — defined once and referenced everywhere, plus a handful of base components (buttons, cards, form fields) that every page pulls from. It's maybe a day of extra setup at the start of a project.",
      "That one day pays for itself the first time a client asks for a site-wide change. What used to be a multi-hour hunt-and-fix task becomes a one-line edit to a config file. It also keeps a site visually consistent as more pages get added over time, instead of slowly drifting as different people (or different deadlines) touch different corners of the codebase.",
      "The clients who feel this most are the ones planning to keep adding to their site — a blog, new service pages, a redesigned section every year or two. A design system isn't overhead on a small project; it's what keeps a small project small as it grows.",
    ],
  },
  {
    slug: "core-web-vitals-pakistani-networks",
    title: "Core Web Vitals for Pakistani Networks",
    excerpt:
      "Designing for 3G realities in secondary cities — what actually moves the needle beyond a CDN.",
    date: "April 2026",
    readTime: "7 min read",
    tag: "performance",
    content: [
      "It's easy to test a site on office fibre, get a perfect Lighthouse score, and assume the job is done. Then a client in a secondary city mentions their site feels slow, and the gap between \"tested performance\" and \"real performance\" becomes obvious.",
      "A CDN helps, but it doesn't fix everything. If the connection between a user's phone and the nearest edge node is still a congested 3G or throttled 4G link, the bottleneck isn't where the CDN can reach — it's the last mile. What actually moves the needle there is reducing what has to travel down that last mile in the first place.",
      "Image weight is usually the biggest offender. We serve modern formats (WebP/AVIF) with explicit width/height to avoid layout shift, and lazy-load anything below the fold so the initial page load isn't blocked fetching images a visitor may never scroll to. On one e-commerce rebuild, this alone cut the initial page weight dramatically without touching the design.",
      "JavaScript is the second lever. Every third-party script — chat widgets, analytics, marketing pixels — adds parse and execution time on a low-end device, even after the network request finishes. We audit these on every project and cut anything that isn't earning its cost, deferring what's left until after the main content is interactive.",
      "Fonts are a smaller but real cost too. Self-hosting fonts (rather than pulling from a third-party font CDN) removes an extra DNS lookup and connection, and using `font-display: swap` means text renders immediately in a fallback font instead of staying invisible while a custom font downloads.",
      "None of this is exotic — it's mostly discipline about what gets added to a page and when it loads. But it's the difference between a site that scores well in a lab test and one that actually feels fast to someone on a 3G connection in a city outside the main metros, which is a real and large part of the audience for a lot of our clients' sites.",
    ],
  },
];
