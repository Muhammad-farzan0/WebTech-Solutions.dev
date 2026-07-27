import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { locationPages } from "@/data/locations";
import { serviceDetails, testimonials } from "@/data/content";
import { caseStudies } from "@/data/caseStudies";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return locationPages.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationPages.find((l) => l.slug === slug);
  if (!loc) return {};

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      type: "website",
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = locationPages.find((l) => l.slug === slug);
  if (!loc) notFound();

  const relatedCaseStudy = loc.relatedCaseStudySlug
    ? caseStudies.find((c) => c.slug === loc.relatedCaseStudySlug)
    : undefined;
  const focusServiceDetails = serviceDetails.filter((s) =>
    loc.focusServices.includes(s.tag)
  );
  const testimonial = testimonials[loc.testimonialIndex] ?? testimonials[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: loc.country,
    name: loc.h1,
    description: loc.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {`// ${loc.country}`}
            </span>
            <h1 className="mt-4 font-display font-semibold text-4xl sm:text-5xl leading-[1.1] tracking-tight text-navy-900 dark:text-white">
              {loc.h1}
            </h1>
            <p className="mt-6 text-lg text-navy-900/70 dark:text-paper-50/70">
              {loc.heroIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 font-semibold hover:bg-blue-600 dark:hover:bg-sky-300 transition-all"
              >
                Start a project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-navy-900/20 dark:border-paper-50/20 text-navy-900 dark:text-paper-50 font-semibold hover:border-blue-500 dark:hover:border-sky-400 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-4xl px-6 mt-20">
          <Reveal>
            <h2 className="font-display font-semibold text-2xl text-navy-900 dark:text-white">
              {loc.localContext.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {loc.localContext.paragraphs.map((p, i) => (
                <p key={i} className="text-navy-900/70 dark:text-paper-50/70 leading-7">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-4xl px-6 mt-20">
          <Reveal>
            <h2 className="font-display font-semibold text-2xl text-navy-900 dark:text-white mb-6">
              Why teams in {loc.country} work with us
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {loc.whyUs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-6"
                >
                  <CheckCircle2 size={18} className="text-blue-500 dark:text-sky-400 mb-3" />
                  <h3 className="font-display font-semibold text-navy-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-900/65 dark:text-paper-50/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {focusServiceDetails.length > 0 && (
          <div className="mx-auto max-w-4xl px-6 mt-20">
            <Reveal>
              <h2 className="font-display font-semibold text-2xl text-navy-900 dark:text-white mb-6">
                Services most relevant to {loc.country} clients
              </h2>
              <div className="grid gap-4">
                {focusServiceDetails.map((s) => (
                  <div
                    key={s.tag}
                    className="rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-6"
                  >
                    <h3 className="font-display font-semibold text-navy-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-navy-900/65 dark:text-paper-50/65">
                      {s.summary}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        <div className="mx-auto max-w-4xl px-6 mt-20">
          <Reveal>
            <div className="rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-8">
              <p className="text-navy-900/75 dark:text-paper-50/75 leading-7">
                {loc.relatedWorkNote}
              </p>
              {relatedCaseStudy && (
                <Link
                  href={`/case-studies/${relatedCaseStudy.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 dark:text-sky-400 hover:underline"
                >
                  Read the {relatedCaseStudy.name} case study
                  <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-4xl px-6 mt-20">
          <Reveal>
            <blockquote className="rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-8">
              <p className="text-lg text-navy-900/80 dark:text-paper-50/80 leading-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-navy-900 dark:text-white">
                — {testimonial.name}
              </footer>
            </blockquote>
          </Reveal>
        </div>

        <div className="mx-auto max-w-4xl px-6 mt-20">
          <Reveal>
            <h2 className="font-display font-semibold text-2xl text-navy-900 dark:text-white mb-6">
              Questions from {loc.country} clients
            </h2>
            <div className="space-y-4">
              {loc.faqs.map((f) => (
                <div
                  key={f.question}
                  className="rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-6"
                >
                  <h3 className="font-semibold text-navy-900 dark:text-white">{f.question}</h3>
                  <p className="mt-2 text-sm text-navy-900/65 dark:text-paper-50/65 leading-6">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-4xl px-6 mt-20 text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-navy-900 dark:text-white">
              {loc.ctaHeading}
            </h2>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 font-semibold hover:bg-blue-600 dark:hover:bg-sky-300 transition-all"
            >
              Get a free quote
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
