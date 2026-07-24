import { Reveal } from "./Reveal";
import { process } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-navy-900/5 dark:border-paper-50/5">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
            {"// process"}
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-navy-900 dark:text-white max-w-xl">
            Four stages. No surprises.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-4 gap-px bg-navy-900/10 dark:bg-paper-50/10 rounded-2xl overflow-hidden">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08} className="bg-paper-50 dark:bg-ink-900 p-7">
              <span className="font-mono text-sm text-navy-900/30 dark:text-paper-50/30">
                {p.step}
              </span>
              <h3 className="mt-4 font-display font-semibold text-lg text-navy-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-navy-900/65 dark:text-paper-50/65">
                {p.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
