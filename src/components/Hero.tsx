"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Circle } from "lucide-react";
import { stats } from "@/data/content";

const codeLines = [
  { indent: 0, text: "const studio = {" },
  { indent: 1, text: "name: 'WebTech Solutions'," },
  { indent: 1, text: "based: 'Pakistan'," },
  { indent: 1, text: "stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MERN']," },
  { indent: 1, text: "ships: true," },
  { indent: 0, text: "};" },
  { indent: 0, text: "" },
  { indent: 0, text: "export default studio.build(yourIdea);" },
];

function useTypedCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const currentLine = codeLines[visibleLines].text;
    if (visibleChars < currentLine.length) {
      const t = setTimeout(() => setVisibleChars((c) => c + 1), 18);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((l) => l + 1);
        setVisibleChars(0);
      }, 180);
      return () => clearTimeout(t);
    }
  }, [visibleChars, visibleLines]);

  return { visibleLines, visibleChars };
}

export function Hero() {
  const { visibleLines, visibleChars } = useTypedCode();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32 bg-dot-grid"
    >
      <div className="pointer-events-none absolute -top-32 right-[-10%] w-[560px] h-[560px] rounded-full bg-blue-500/10 dark:bg-sky-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] w-[420px] h-[420px] rounded-full bg-navy-900/5 dark:bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-navy-900/15 dark:border-sky-400/20 text-xs font-mono text-navy-900/70 dark:text-sky-300/80 mb-6"
          >
            <Circle size={8} className="fill-blue-500 text-blue-500" />
            Let&apos;s Connect! We reply to every inquiry within one business day.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-navy-900 dark:text-white"
          >
            We build software
            <br />
            that <span className="text-gradient">actually ships.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-navy-900/70 dark:text-paper-50/70 max-w-xl"
          >
            WebTech Solutions is a web development studio for founders and
            teams who want a product, not a project file. From first commit
            to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 font-semibold hover:bg-blue-600 dark:hover:bg-sky-300 transition-all hover:scale-[1.03]"
            >
              Start a project
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-navy-900/20 dark:border-paper-50/20 text-navy-900 dark:text-paper-50 font-semibold hover:border-blue-500 dark:hover:border-sky-400 transition-colors"
            >
              View our work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-semibold text-2xl text-navy-900 dark:text-white">
                  {s.value}
                </div>
                <div className="text-xs text-navy-900/60 dark:text-paper-50/60 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative animate-float"
        >
          <div className="rounded-2xl border border-navy-900/10 dark:border-sky-400/15 bg-navy-950 shadow-2xl shadow-navy-900/20 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs font-mono text-white/50">
                build.ts
              </span>
            </div>
            <div className="p-6 font-mono text-[13px] sm:text-sm leading-7 min-h-[260px]">
              {codeLines.slice(0, visibleLines + 1).map((line, i) => {
                const isCurrent = i === visibleLines;
                const text = isCurrent
                  ? line.text.slice(0, visibleChars)
                  : line.text;
                return (
                  <div
                    key={i}
                    style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                  >
                    <span className="text-sky-300">{text}</span>
                    {isCurrent && (
                      <span className="inline-block w-[7px] h-[15px] bg-sky-300 ml-0.5 align-middle animate-blink" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-xl bg-paper-50 dark:bg-ink-800 border border-navy-900/10 dark:border-sky-400/15 shadow-xl px-4 py-3">
            <div className="text-xs text-navy-900/60 dark:text-paper-50/60">
              Web
            </div>
            <div className="font-display font-semibold text-navy-900 dark:text-white text-sm">
              Developers
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
