import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services#web" },
      { label: "WordPress Development", href: "/services#cms" },
      { label: "E-commerce Development", href: "/services#shop" },
      { label: "SEO & Performance", href: "/services#seo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/pricing#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-paper-50">
      <div className="mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 lg:gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/icon.png"
              alt="WebTech Solutions"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="font-display font-semibold text-lg">
              WebTech<span className="text-sky-400"> Solutions</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-paper-50/60 max-w-xs">
            A web development studio in Rawalpindi, Pakistan, building
            products for teams who want to ship, not just plan.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-9 h-9 grid place-items-center rounded-full border border-paper-50/15 hover:border-sky-400 hover:text-sky-400 transition-colors"
              aria-label="Email WebTech Solutions"
            >
              <Mail size={16} />
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 grid place-items-center rounded-full border border-paper-50/15 hover:border-sky-400 hover:text-sky-400 transition-colors"
              aria-label="Message WebTech Solutions on WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-sm text-paper-50/90">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper-50/60 hover:text-sky-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-paper-50/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper-50/50">
          <p>© {new Date().getFullYear()} WebTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
