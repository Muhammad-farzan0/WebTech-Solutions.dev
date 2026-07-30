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
import { siteConfig } from "@/data/site";

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
    google: "N-RyIHAdGB_ncqiSXNV18GRc-05LGmMviUVyQWfa3cY",
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
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/opengraph-image`,
  logo: `${siteConfig.url}/images/icon.png`,
  description:
    "Web development studio building Next.js products, custom WordPress builds, e-commerce, AI integration, and SEO for clients in Pakistan and abroad.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  email: siteConfig.email,
  telephone: siteConfig.phoneDisplay,
  // Add real business social profile URLs to siteConfig.socialProfiles (src/data/site.ts)
  // as you create/confirm them — Google uses this to connect the profiles to this entity.
  sameAs: siteConfig.socialProfiles,
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
