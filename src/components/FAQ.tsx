"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { faqs } from "@/data/faq";

export function FAQ({
  title = "Common questions.",
  eyebrow = "// faq",
  className = "",
}: {
  title?: string;
  eyebrow?: string;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={`py-24 md:py-32 border-t border-navy-900/5 dark:border-paper-50/5 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-navy-900 dark:text-white">
            {title}
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-navy-900/10 dark:divide-paper-50/10 rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 overflow-hidden">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-[15px] text-navy-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-navy-900/40 dark:text-paper-50/40 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-6 text-navy-900/65 dark:text-paper-50/65">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
