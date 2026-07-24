import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Users, Zap, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Certifications } from "@/components/Certifications";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/data/content";

export const metadata: Metadata = {
  title: "About — WebTech Solutions",
  description:
    "WebTech Solutions is a Rawalpindi-based web & app development studio. Here's our story, how we work, and why clients stick with us.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Outcomes over deliverables",
    description:
      "A site that looks finished but doesn't load fast or rank isn't done. We measure success by what the site does for you after launch.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed quotes, no scope creep",
    description:
      "We scope a project properly before quoting it, so the number we give you at the start is the number you pay at the end.",
  },
  {
    icon: Zap,
    title: "Built to actually perform",
    description:
      "Core Web Vitals, clean data models, and typed code aren't optional extras — they're how we build everything, by default.",
  },
  {
    icon: Users,
    title: "Direct communication",
    description:
      "No account managers relaying messages. You talk to the people actually writing the code, from discovery call to handoff.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32">
        <section className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// about"}
            </span>
            <h1 className="mt-3 font-display font-semibold text-4xl md:text-5xl text-navy-900 dark:text-white max-w-2xl">
              We build software that ships — and keeps working.
            </h1>
            <p className="mt-6 text-lg text-navy-900/70 dark:text-paper-50/70 max-w-2xl leading-relaxed">
              WebTech Solutions is a web and app development studio based in
              Rawalpindi, Pakistan. We work across the full stack — custom
              Next.js and MERN applications, WordPress builds, e-commerce
              storefronts, and the AI-assisted features that make a product
              feel current — for clients in Pakistan, the UK, and Singapore.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-semibold text-2xl md:text-3xl text-navy-900 dark:text-white">
                  {s.value}
                </div>
                <div className="text-xs text-navy-900/60 dark:text-paper-50/60 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-6 mt-24 md:mt-32 grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// how we started"}
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl text-navy-900 dark:text-white">
              Our story
            </h2>
            <div className="mt-5 space-y-4 text-navy-900/70 dark:text-paper-50/70 leading-relaxed">
              <p>
                WebTech Solutions started the way most good dev shops do — building
                real products for real clients, one project at a time, and
                learning what actually holds up in production versus what
                only looks good in a portfolio screenshot.
              </p>
              <p>
                That range shows in the work: a real-time collaborative task
                manager built on the MERN stack, e-commerce storefronts for
                UK furniture retailers that needed to actually rank and sell,
                a roster of Pakistani gym and fitness brands that needed
                sites with real energy, and corporate sites for engineering
                and supply consultancies across two continents.
              </p>
              <p>
                What ties it together isn&apos;t a single stack or template —
                it&apos;s the same discipline applied to every build: proper
                architecture before code, honest timelines, and a site that
                still performs well a year after launch, not just on demo
                day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// why teams choose us"}
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl text-navy-900 dark:text-white">
              How we work
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-5"
                >
                  <v.icon size={20} className="text-blue-500 dark:text-sky-400" />
                  <h3 className="mt-3 font-display font-semibold text-sm text-navy-900 dark:text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-navy-900/65 dark:text-paper-50/65">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal className="mx-auto max-w-6xl px-6 mt-24 md:mt-32">
          <div className="rounded-3xl bg-navy-900 dark:bg-navy-950 px-8 py-14 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-20" />
            <div className="relative">
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-white max-w-lg mx-auto">
                Want to see if we&apos;re the right fit for your project?
              </h2>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-sky-400 text-navy-950 font-semibold hover:bg-sky-300 transition-all hover:scale-[1.03]"
              >
                Let&apos;s talk
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </main>

      <Certifications />
      <Footer />
    </>
  );
}
