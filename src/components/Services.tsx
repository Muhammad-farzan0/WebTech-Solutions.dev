import { Reveal } from "./Reveal";
import { services } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-navy-900/5 dark:border-paper-50/5">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
            {"// services"}
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-navy-900 dark:text-white max-w-xl">
            Everything a product needs, one team.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white/60 dark:bg-ink-800/60 p-6 hover:border-blue-500/50 dark:hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-300">
                <span className="font-mono text-[11px] text-navy-900/40 dark:text-paper-50/40">
                  {s.tag}
                </span>
                <h3 className="mt-3 font-display font-semibold text-lg text-navy-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-navy-900/65 dark:text-paper-50/65">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
