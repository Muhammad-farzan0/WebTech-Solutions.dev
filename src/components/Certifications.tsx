import { Reveal } from "./Reveal";
import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section className="py-24 md:py-32 border-t border-navy-900/5 dark:border-paper-50/5">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
            {"// certifications"}
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-navy-900 dark:text-white max-w-xl">
            Trained for the stack we build on.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-6">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 dark:bg-sky-400/10 grid place-items-center">
                  <Award size={18} className="text-blue-500 dark:text-sky-400" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-base text-navy-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-navy-900/55 dark:text-paper-50/55">
                  {cert.issuer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
