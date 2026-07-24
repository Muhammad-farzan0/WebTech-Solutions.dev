"use client";

import { useState } from "react";
import { ArrowUpRight, Dumbbell, FolderGit2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { projectCategories, gymProjects } from "@/data/content";

interface UnifiedProject {
  name: string;
  tag: string;
  stack: string[];
  description: string;
  link?: string;
  github?: string;
}

interface UnifiedCategory {
  title: string;
  tag: string;
  description: string;
  icon?: typeof Dumbbell;
  projects: UnifiedProject[];
}

const gymCategory: UnifiedCategory = {
  title: "Gym & Fitness Websites",
  tag: "Fitness · Marketing Sites",
  description:
    "A dedicated run of gym and fitness-club sites across Lahore, Islamabad, and Rawalpindi — each with its own service breakdown, class schedules, and membership flow.",
  icon: Dumbbell,
  projects: gymProjects.map((g) => ({
    name: g.name,
    tag: g.location,
    stack: [],
    description: g.description,
    link: g.link,
  })),
};

const categories: UnifiedCategory[] = [
  ...projectCategories.map((c) => ({
    title: c.title,
    tag: c.tag,
    description: c.description,
    projects: c.projects.map((p) => ({
      name: p.name,
      tag: p.tag,
      stack: p.stack,
      description: p.description,
      link: "link" in p ? p.link : undefined,
      github: "github" in p ? p.github : undefined,
    })),
  })),
  gymCategory,
];

export function WorkGrid() {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...categories.map((c) => c.title)];
  const visible =
    active === "All" ? categories : categories.filter((c) => c.title === active);

  return (
    <>
      <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === tab
                ? "bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 border-navy-900 dark:border-sky-400"
                : "border-navy-900/15 dark:border-paper-50/15 text-navy-900/70 dark:text-paper-50/70 hover:border-blue-500 dark:hover:border-sky-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </Reveal>

      {visible.map((cat, ci) => (
        <section key={cat.title} className="mt-16">
          <Reveal>
            <div className="flex items-center gap-2">
              {cat.icon && (
                <cat.icon size={16} className="text-blue-500 dark:text-sky-400" />
              )}
              <span className="font-mono text-[11px] text-navy-900/40 dark:text-paper-50/40">
                {cat.tag}
              </span>
            </div>
            <h2 className="mt-2 font-display font-semibold text-2xl md:text-3xl text-navy-900 dark:text-white">
              {cat.title}
            </h2>
            <p className="mt-2 text-sm text-navy-900/60 dark:text-paper-50/60 max-w-xl">
              {cat.description}
            </p>
          </Reveal>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.projects.map((p, i) => (
              <Reveal key={p.name} delay={0.05 + i * 0.05 + ci * 0.02}>
                <div className="group relative block h-full rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-7 overflow-hidden hover:border-blue-500/50 dark:hover:border-sky-400/50 transition-colors duration-300">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/[0.06] to-transparent" />
                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-[11px] text-navy-900/45 dark:text-paper-50/45">
                        {p.tag}
                      </span>
                      <h3 className="mt-2 font-display font-semibold text-xl text-navy-900 dark:text-white">
                        {p.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.name} on GitHub`}
                          className="text-navy-900/30 dark:text-paper-50/30 hover:text-blue-500 dark:hover:text-sky-400 transition-colors"
                        >
                          <FolderGit2 size={18} />
                        </a>
                      )}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.name} live site`}
                          className="text-navy-900/30 dark:text-paper-50/30 hover:text-blue-500 dark:hover:text-sky-400 transition-colors"
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="relative mt-4 text-sm leading-6 text-navy-900/65 dark:text-paper-50/65">
                    {p.description}
                  </p>
                  {p.stack.length > 0 && (
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
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
