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
  {
    slug: "cost-to-build-a-saas-mvp-2026",
    title: "How Much Does It Cost to Build a SaaS MVP in 2026?",
    excerpt:
      "A realistic USD breakdown for founders scoping their first version — and where the budget actually goes.",
    date: "July 2026",
    readTime: "6 min read",
    tag: "pricing",
    content: [
      "Every founder asks some version of the same question before writing a single line of a spec: what's this actually going to cost? The honest answer is that it depends entirely on how much of the product is genuinely 'minimum' versus how much has quietly turned into a wishlist — and most of the budget conversations we have end up being about scope, not rate.",
      "A true MVP — one core workflow, authentication, a database, and a clean UI around it — typically lands in the low-to-mid thousands of dollars when built on a modern stack like Next.js with a managed database and auth provider rather than custom-built infrastructure. The cost driver isn't the framework, it's how many edge cases and secondary features get pulled into 'version one'.",
      "Where budgets actually go: roughly a third into the core data model and backend logic, a third into the UI and the interactions that make it feel like a real product rather than a form, and the remainder into auth, payments (if applicable), and deployment. Skipping a design system at this stage, which we've written about before, is the single most common way early costs balloon later.",
      "The features founders assume are 'small' are usually the ones that aren't: real-time updates, granular permissions, multi-tenant data isolation, and billing all sound like a checkbox but each carries real engineering weight. Naming these clearly during scoping — even if the answer is 'not in v1' — is what keeps a fixed quote fixed.",
      "The other lever is speed to a testable product. We default new builds to a modern, server-rendered stack specifically because it cuts weeks off the path from spec to something real users can click through, which matters more for an MVP than almost any other consideration — a technically impressive but six-month-late MVP has already lost the point of being minimum.",
      "If you're scoping an MVP right now, the most useful exercise isn't listing features — it's listing the one workflow a user has to complete for the product to have proven anything, and building only that, well.",
    ],
  },
  {
    slug: "ecommerce-website-cost-uk-small-business",
    title: "What Does an E-commerce Website Actually Cost for a UK Small Business?",
    excerpt:
      "Beyond the build fee — hosting, payment fees, and the GDPR basics that come with selling online in the UK.",
    date: "July 2026",
    readTime: "6 min read",
    tag: "pricing",
    content: [
      "Most UK small business owners pricing out an e-commerce site are really pricing out two different things without realising it: the one-off cost of the build, and the ongoing costs that come with actually running an online shop. Both matter, and quotes that only mention the first one tend to cause surprises later.",
      "The build itself — product catalogue, cart, and a proper checkout — is a well-scoped, fixed-cost project when it's built on established e-commerce tooling rather than something custom from scratch. What changes the number is catalogue size and whether inventory needs to sync with an existing till or stock system many small retailers already run.",
      "The ongoing costs that catch people out: payment processor fees (typically a small percentage plus a fixed fee per transaction), hosting, and any subscription for the e-commerce platform itself if it isn't self-hosted. None of these are large individually, but they belong in the same conversation as the build price, not a surprise in month two.",
      "GDPR is the other piece that's specifically a UK/EU concern and worth getting right from day one rather than retrofitting: a clear cookie consent banner, a privacy policy that actually reflects what data is collected at checkout, and not storing more customer data than the business needs. It's not complicated to build in from the start — it's expensive to bolt on after a customer complaint.",
      "Performance matters more for e-commerce than almost any other site type, because slow product pages measurably cost sales — we've written before about what actually moves the needle on load times, and for a shop specifically, image weight on product galleries is usually the single biggest lever.",
      "For a small UK business, the realistic path is a fixed-quote build scoped tightly to the actual product range at launch, with room to add categories later — not a large, all-features-included build that delays getting the shop live and earning.",
    ],
  },
  {
    slug: "bilingual-arabic-english-website-development-gulf",
    title: "Building Bilingual Arabic–English Websites for Gulf Businesses",
    excerpt:
      "RTL layout, trust signals, and what actually goes into a proper Arabic/English site — not just a translated homepage.",
    date: "July 2026",
    readTime: "6 min read",
    tag: "engineering",
    content: [
      "A genuinely bilingual site for a business in Saudi Arabia, the UAE, or elsewhere in the Gulf is a different build to an English site with a translated version bolted on — and it shows quickly to visitors when it's the latter. The two languages need to be treated as first-class from the project's structure, not as a translation pass at the end.",
      "The technical core of this is right-to-left (RTL) layout support. Arabic doesn't just need mirrored text — navigation, icons, form fields, and spacing all need to flip direction correctly, and this has to be built into the component layer from the start rather than patched with a handful of CSS overrides once the English site is 'done'.",
      "Typography is the other detail that's easy to get wrong: Arabic script needs its own font choice and line-height tuning, since a font optimised for Latin characters often renders Arabic text cramped or uneven. Getting this right is a small early decision that has an outsized effect on how professional the site feels to an Arabic-reading visitor.",
      "Content-wise, this isn't a literal translation exercise — pricing, contact expectations, and even the tone of the copy shift for a Gulf business audience, where trust signals like clear company information, local contact routes (WhatsApp is heavily used across the region), and professional Arabic copywriting matter more than a word-for-word English mirror.",
      "There's also a growing business context worth building for directly: Saudi Arabia's Vision 2030 push has meaningfully increased the number of local businesses digitising for the first time, many of whom specifically want a site that reads as credible to both Arabic-first and English-first customers rather than favouring one.",
      "Done properly, a bilingual build costs somewhat more than a single-language site — mainly in design and content time, not engineering complexity — but it opens a business to an audience a translated-afterthought site never quite convinces.",
    ],
  },
];
