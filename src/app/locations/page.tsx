import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { locationPages } from "@/data/locations";

export const metadata: Metadata = {
  title: "Where We Work — WebTech Solutions",
  description:
    "WebTech Solutions builds for clients in the United States, United Kingdom, Pakistan, UAE, and Saudi Arabia — see how we work in each market.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// where we work"}
            </span>
            <h1 className="mt-4 font-display font-semibold text-4xl sm:text-5xl tracking-tight text-navy-900 dark:text-white">
              Built for clients across five markets.
            </h1>
            <p className="mt-6 text-lg text-navy-900/70 dark:text-paper-50/70 max-w-2xl">
              Same team, same process — tailored to how each market actually
              works: currency, compliance, language, and communication style.
            </p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {locationPages.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 0.05}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group block rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-8 hover:border-blue-500 dark:hover:border-sky-400 transition-colors"
                >
                  <h2 className="font-display font-semibold text-xl text-navy-900 dark:text-white">
                    {loc.country}
                  </h2>
                  <p className="mt-2 text-sm text-navy-900/65 dark:text-paper-50/65">
                    {loc.heroIntro}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 dark:text-sky-400">
                    Learn more
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
