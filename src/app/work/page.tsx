import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work — WebTech Solutions",
  description:
    "Web apps, e-commerce platforms, corporate sites, AI data platforms, and a run of gym & fitness websites — real builds, real outcomes.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// work"}
            </span>
            <h1 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-navy-900 dark:text-white max-w-2xl">
              Recent builds, real outcomes.
            </h1>
            <p className="mt-5 text-lg text-navy-900/70 dark:text-paper-50/70 max-w-xl">
              A cross-section of products we&apos;ve shipped — web apps,
              e-commerce, corporate sites, applied AI, and a full run of gym
              & fitness brands. Filter by category, or browse everything.
            </p>
          </Reveal>

          <WorkGrid />
        </div>

        <div className="mt-24">
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
