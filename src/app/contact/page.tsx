import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — WebTech Solutions",
  description:
    "Tell us what you're building. WebTech Solutions replies to every inquiry within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-8 md:pt-48">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// get in touch"}
            </span>
            <h1 className="mt-3 font-display font-semibold text-3xl md:text-5xl text-navy-900 dark:text-white max-w-2xl">
              Let&apos;s build something that ships.
            </h1>
            <p className="mt-5 text-lg text-navy-900/70 dark:text-paper-50/70 max-w-xl">
              Tell us about your project — web app, WordPress build,
              e-commerce store, or something else entirely — and we&apos;ll
              reply within one business day.
            </p>
          </Reveal>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
