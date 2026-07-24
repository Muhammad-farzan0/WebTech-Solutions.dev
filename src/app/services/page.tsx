import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { serviceDetails } from "@/data/content";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — WebTech Solutions",
  description:
    "Web development, WordPress builds, e-commerce, AI integration, graphic design, and SEO — everything a product needs, one team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// services"}
            </span>
            <h1 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-navy-900 dark:text-white max-w-2xl">
              Everything a product needs, one team.
            </h1>
            <p className="mt-5 text-lg text-navy-900/70 dark:text-paper-50/70 max-w-xl">
              From first commit to production — and everything that keeps a
              site converting after launch.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-col gap-6">
            {serviceDetails.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div
                  id={s.tag}
                  className="scroll-mt-28 rounded-3xl border border-navy-900/10 dark:border-paper-50/10 bg-white/60 dark:bg-ink-800/60 p-8 md:p-10"
                >
                  <div className="grid md:grid-cols-[1.1fr_1fr] gap-10">
                    <div>
                      <span className="font-mono text-[11px] text-navy-900/40 dark:text-paper-50/40">
                        {s.tag}
                      </span>
                      <h2 className="mt-3 font-display font-semibold text-2xl md:text-3xl text-navy-900 dark:text-white">
                        {s.title}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-blue-500 dark:text-sky-400">
                        {s.summary}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-navy-900/70 dark:text-paper-50/70">
                        {s.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {s.tools.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-navy-900/5 dark:bg-paper-50/5 text-navy-900/70 dark:text-paper-50/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display font-semibold text-sm text-navy-900/50 dark:text-paper-50/50 uppercase tracking-wide">
                        What&apos;s included
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-navy-900/75 dark:text-paper-50/75">
                            <Check
                              size={16}
                              className="mt-0.5 shrink-0 text-blue-500 dark:text-sky-400"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-16 flex justify-center">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-navy-900/20 dark:border-paper-50/20 text-navy-900 dark:text-paper-50 font-semibold hover:border-blue-500 dark:hover:border-sky-400 transition-colors"
            >
              See it applied — view our work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-24">
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
