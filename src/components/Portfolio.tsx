import Image from "next/image";
import { Reveal } from "./Reveal";
import { portfolio } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
  return (
    <section
      id="work"
      className="py-24 md:py-32 border-t border-navy-900/5 dark:border-paper-50/5 bg-paper-100/60 dark:bg-ink-950/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
            {"// work"}
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-navy-900 dark:text-white max-w-xl">
            Recent builds, real outcomes.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {portfolio.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <a
                href={p.link ?? "/work"}
                target={p.link ? "_blank" : undefined}
                rel={p.link ? "noopener noreferrer" : undefined}
                className="group relative block rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 overflow-hidden hover:border-blue-500/50 dark:hover:border-sky-400/50 transition-colors duration-300"
              >
                {p.image && (
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.name} — ${p.tag}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="relative p-7">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/[0.06] to-transparent" />
                <div className="relative flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[11px] text-navy-900/45 dark:text-paper-50/45">
                      {p.tag}
                    </span>
                    <h3 className="mt-2 font-display font-semibold text-xl text-navy-900 dark:text-white">
                      {p.name}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-navy-900/30 dark:text-paper-50/30 group-hover:text-blue-500 dark:group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
                  />
                </div>
                <p className="relative mt-4 text-sm text-navy-900/65 dark:text-paper-50/65">
                  {p.result}
                </p>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-navy-900/5 dark:bg-paper-50/5 text-navy-900/70 dark:text-paper-50/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
