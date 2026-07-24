import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { pricingTiers, pricingNotes } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing — WebTech Solutions",
  description:
    "Simple, transparent pricing for web and app development — from portfolio sites to full e-commerce stores.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// pricing"}
            </span>
            <h1 className="mt-3 font-display font-semibold text-4xl md:text-5xl text-navy-900 dark:text-white">
              Simple pricing, no surprises.
            </h1>
            <p className="mt-5 text-navy-900/65 dark:text-paper-50/65">
              Clear starting ranges for every project size — final quote is
              confirmed after a short discovery call based on your exact
              scope.
            </p>
          </Reveal>

          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={`h-full flex flex-col rounded-3xl p-8 border transition-colors ${
                    tier.highlighted
                      ? "border-blue-500 dark:border-sky-400 bg-navy-900 dark:bg-navy-950 text-white relative"
                      : "border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-sky-400 text-navy-950 text-xs font-semibold">
                      Most popular
                    </span>
                  )}
                  <h2
                    className={`font-display font-semibold text-xl ${
                      tier.highlighted ? "text-white" : "text-navy-900 dark:text-white"
                    }`}
                  >
                    {tier.name}
                  </h2>
                  <p
                    className={`mt-3 font-display font-semibold text-3xl ${
                      tier.highlighted ? "text-sky-400" : "text-blue-500 dark:text-sky-400"
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`mt-2 text-sm ${
                      tier.highlighted
                        ? "text-paper-50/70"
                        : "text-navy-900/60 dark:text-paper-50/60"
                    }`}
                  >
                    {tier.tagline}
                  </p>
                  <p
                    className={`mt-4 text-xs font-mono uppercase tracking-wide ${
                      tier.highlighted
                        ? "text-sky-300"
                        : "text-blue-500 dark:text-sky-400"
                    }`}
                  >
                    Best for
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      tier.highlighted
                        ? "text-paper-50/80"
                        : "text-navy-900/70 dark:text-paper-50/70"
                    }`}
                  >
                    {tier.bestFor}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${
                            tier.highlighted
                              ? "text-sky-400"
                              : "text-blue-500 dark:text-sky-400"
                          }`}
                        />
                        <span
                          className={
                            tier.highlighted
                              ? "text-paper-50/85"
                              : "text-navy-900/75 dark:text-paper-50/75"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-8 w-full text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                      tier.highlighted
                        ? "bg-sky-400 text-navy-950 hover:bg-sky-300"
                        : "bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 hover:bg-blue-600 dark:hover:bg-sky-300"
                    }`}
                  >
                    Request a quote
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-paper-100/60 dark:bg-ink-800/60 p-6">
              <ul className="space-y-2.5">
                {pricingNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-2.5 text-sm text-navy-900/65 dark:text-paper-50/65"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 dark:bg-sky-400 shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 text-center">
            <p className="text-navy-900/65 dark:text-paper-50/65">
              Not sure which tier fits? Tell us about the project and we&apos;ll
              recommend one.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 dark:text-sky-400"
            >
              Get a free quote
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </main>

      <FAQ />
      <Footer />
    </>
  );
}