import { Reveal } from "./Reveal";
import { testimonials } from "@/data/content";

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-32 border-t border-navy-900/5 dark:border-paper-50/5 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
            {"// client notes"}
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-navy-900 dark:text-white max-w-xl">
            What clients say after launch.
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-paper-50 dark:from-ink-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-paper-50 dark:from-ink-900 to-transparent z-10" />
        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[360px] shrink-0 rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-7"
            >
              <div className="text-blue-500 dark:text-sky-400 mb-3 font-display text-2xl">
                &ldquo;
              </div>
              <p className="text-sm leading-6 text-navy-900/75 dark:text-paper-50/75">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-navy-900/10 dark:bg-paper-50/10 grid place-items-center font-mono text-xs text-navy-900/60 dark:text-paper-50/60">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-navy-900/55 dark:text-paper-50/55">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
