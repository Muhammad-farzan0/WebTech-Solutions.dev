"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper-50/85 dark:bg-ink-900/85 backdrop-blur-md border-b border-navy-900/10 dark:border-sky-400/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/icon.png"
            alt="WebTech Solutions"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <span className="font-display font-semibold text-lg tracking-tight text-navy-900 dark:text-paper-50">
            WebTech <span className="text-blue-500">Solutions</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors group ${
                  active
                    ? "text-navy-900 dark:text-white"
                    : "text-navy-900/80 dark:text-paper-50/80 hover:text-navy-900 dark:hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-200 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-9 h-9 grid place-items-center rounded-full border border-navy-900/15 dark:border-paper-50/15 text-navy-900 dark:text-paper-50 hover:border-blue-500 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            href="/contact"
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 hover:bg-blue-600 dark:hover:bg-sky-300 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="lg:hidden text-navy-900 dark:text-paper-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mx-6 mt-4 rounded-2xl bg-paper-50 dark:bg-ink-800 border border-navy-900/10 dark:border-paper-50/10 p-6 flex flex-col gap-4 shadow-xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-navy-900 dark:text-paper-50 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-navy-900/10 dark:border-paper-50/10">
            <button
              onClick={toggle}
              className="flex items-center gap-2 text-sm text-navy-900 dark:text-paper-50"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold px-4 py-2 rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
