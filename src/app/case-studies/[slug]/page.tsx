import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  return {
    title: `${study.name} Case Study — WebTech Solutions`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

const sections = [
  { key: "problem" as const, label: "The problem" },
  { key: "solution" as const, label: "What we built" },
  { key: "result" as const, label: "The result" },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-navy-900/60 dark:text-paper-50/60 hover:text-blue-500 dark:hover:text-sky-400 transition-colors"
            >
              <ArrowLeft size={14} />
              All case studies
            </Link>

            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
                {study.category}
              </span>
              <span className="text-navy-900/30 dark:text-paper-50/30">·</span>
              <span className="text-xs text-navy-900/55 dark:text-paper-50/55">
                {study.heroTag}
              </span>
            </div>

            <h1 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-navy-900 dark:text-white">
              {study.name}
            </h1>
            <p className="mt-4 text-lg text-navy-900/70 dark:text-paper-50/70 leading-relaxed">
              {study.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {study.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-navy-900/5 dark:bg-paper-50/5 text-navy-900/70 dark:text-paper-50/70"
                >
                  {s}
                </span>
              ))}
            </div>

            {study.link && (
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 dark:text-sky-400"
              >
                Visit the live site
                <ExternalLink size={13} />
              </a>
            )}
          </Reveal>

          <div className="mt-14 space-y-10">
            {sections.map((section, i) => (
              <Reveal key={section.key} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-blue-500/10 dark:bg-sky-400/10 grid place-items-center font-mono text-xs text-blue-500 dark:text-sky-400">
                    {i + 1}
                  </div>
                  <div>
                    <h2 className="font-display font-semibold text-lg text-navy-900 dark:text-white">
                      {section.label}
                    </h2>
                    <p className="mt-2 text-[15px] leading-7 text-navy-900/70 dark:text-paper-50/70">
                      {study[section.key]}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-16 pt-8 border-t border-navy-900/10 dark:border-paper-50/10 text-center">
            <p className="text-navy-900/65 dark:text-paper-50/65">
              Have a project with a similar shape?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 text-sm font-semibold hover:bg-blue-600 dark:hover:bg-sky-300 transition-colors"
            >
              Start a conversation
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
