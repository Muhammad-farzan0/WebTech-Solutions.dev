import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 px-6">
      <Reveal className="mx-auto max-w-5xl rounded-3xl bg-navy-900 dark:bg-navy-950 relative overflow-hidden px-8 py-16 text-center">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-20" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-white">
            Ready to build something that lasts?
          </h2>
          <p className="mt-4 text-paper-50/65 max-w-md mx-auto">
            Tell us about your project and we&apos;ll reply with next steps
            within one business day.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-400 text-navy-950 font-semibold hover:bg-sky-300 transition-all hover:scale-[1.03]"
          >
            Get a free quote
            <ArrowRight size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
