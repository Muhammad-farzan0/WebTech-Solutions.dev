import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies — WebTech Solutions",
  description:
    "Problem, solution, and result — a closer look at how we approached real client projects.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// case studies"}
            </span>
            <h1 className="mt-3 font-display font-semibold text-4xl md:text-5xl text-navy-900 dark:text-white max-w-2xl">
              The problem, the build, the result.
            </h1>
            <p className="mt-4 text-navy-900/65 dark:text-paper-50/65 max-w-xl">
              A closer look at how a few of our projects actually came
              together — not just the finished screenshot.
            </p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.08}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block h-full rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-8 hover:border-blue-500/50 dark:hover:border-sky-400/50 transition-colors duration-300"
                >
                  <span className="font-mono text-[11px] text-navy-900/45 dark:text-paper-50/45">
                    {study.category}
                  </span>
                  <h2 className="mt-2 font-display font-semibold text-2xl text-navy-900 dark:text-white">
                    {study.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-navy-900/65 dark:text-paper-50/65">
                    {study.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-blue-500 dark:text-sky-400">
                    Read the case study
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
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
