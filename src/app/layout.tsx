import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://webtechsolutions.dev"),
  title: {
    default: "WebTech Solutions — We Build Software That Ships",
    template: "%s",
  },
  description:
    "WebTech Solutions is a Pakistan-based web development studio. Next.js builds, custom WordPress, e-commerce, and AI-integrated products — no bloat, no filler.",
  keywords: [
    "web development Pakistan",
    "software house Pakistan",
    "Next.js developers Pakistan",
    "WordPress development Pakistan",
    "WebTech Solutions",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    // ⚠️ PLACEHOLDER — paste the content value Google Search Console gives you
    // (Settings → Ownership verification → HTML tag method), then remove this comment.
    // google: "your-search-console-verification-code",
  },
  openGraph: {
    type: "website",
    title: "WebTech Solutions — We Build Software That Ships",
    description:
      "A Pakistan-based web development studio building Next.js products, custom WordPress builds, e-commerce, and AI-integrated features.",
    url: "https://webtechsolutions.dev",
    siteName: "WebTech Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebTech Solutions — We Build Software That Ships",
    description:
      "A Pakistan-based web development studio building Next.js products, custom WordPress builds, e-commerce, and AI-integrated features.",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('webtech-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WebTech Solutions",
  url: "https://webtechsolutions.dev",
  image: "https://webtechsolutions.dev/opengraph-image",
  description:
    "Web development studio building Next.js products, custom WordPress builds, e-commerce, AI integration, and SEO for clients in Pakistan and abroad.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  email: "hello@webtechsolutions.dev",
  sameAs: [],
  serviceType: [
    "Web Development",
    "WordPress Development",
    "E-commerce Development",
    "AI Integration",
    "Graphic Design",
    "SEO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <ThemeProvider>
          {children}
          <WhatsAppButton />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
