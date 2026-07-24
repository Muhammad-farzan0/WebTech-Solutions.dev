import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found — WebTech Solutions",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32 bg-dot-grid min-h-[70vh] flex items-center">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="font-display font-semibold text-7xl md:text-8xl text-gradient">
            404
          </div>
          <h1 className="mt-4 font-display font-semibold text-2xl md:text-3xl text-navy-900 dark:text-white">
            This page doesn&apos;t exist — but a working site does.
          </h1>
          <p className="mt-4 text-navy-900/65 dark:text-paper-50/65">
            The page you&apos;re looking for may have moved or never existed.
            Let&apos;s get you back on track.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 font-semibold hover:bg-blue-600 dark:hover:bg-sky-300 transition-colors"
            >
              <Home size={16} />
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-navy-900/20 dark:border-paper-50/20 text-navy-900 dark:text-paper-50 font-semibold hover:border-blue-500 dark:hover:border-sky-400 transition-colors"
            >
              <Mail size={16} />
              Contact us
            </Link>
          </div>
          <Link
            href="/work"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 dark:text-sky-400"
          >
            Or browse our work
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
