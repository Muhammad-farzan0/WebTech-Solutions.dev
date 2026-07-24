import Link from "next/link";
import { Reveal } from "./Reveal";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export function Blog() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-24 md:py-32 border-t border-navy-900/5 dark:border-paper-50/5 bg-paper-100/60 dark:bg-ink-950/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// notes"}
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-navy-900 dark:text-white max-w-xl">
              From the build log.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 dark:text-sky-400 hover:gap-2.5 transition-all"
          >
            View all posts
            <ArrowRight size={14} />
          </Link>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-7 hover:border-blue-500/50 dark:hover:border-sky-400/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 text-xs font-mono text-navy-900/45 dark:text-paper-50/45">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 font-display font-semibold text-lg text-navy-900 dark:text-white leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-navy-900/65 dark:text-paper-50/65">
                  {post.excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 dark:text-sky-400">
                  Read more
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
