import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — WebTech Solutions",
  description:
    "Notes on Next.js, performance, and web development from the WebTech Solutions build log.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="font-mono text-xs text-blue-500 dark:text-sky-400">
              {"// notes"}
            </span>
            <h1 className="mt-3 font-display font-semibold text-4xl md:text-5xl text-navy-900 dark:text-white max-w-2xl">
              From the build log.
            </h1>
            <p className="mt-4 text-navy-900/65 dark:text-paper-50/65 max-w-xl">
              Notes on what we&apos;re building, what broke, and what we&apos;d do
              differently — written as we ship, not as marketing copy after
              the fact.
            </p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-800 p-7 hover:border-blue-500/50 dark:hover:border-sky-400/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 text-xs font-mono text-navy-900/45 dark:text-paper-50/45">
                    <span className="uppercase tracking-wide">{post.tag}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="mt-4 font-display font-semibold text-lg text-navy-900 dark:text-white leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-navy-900/65 dark:text-paper-50/65 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-navy-900/45 dark:text-paper-50/45">
                      {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 dark:text-sky-400">
                      Read
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16 text-center">
            <p className="text-sm text-navy-900/55 dark:text-paper-50/55">
              Have a project in mind instead of a blog post to read?
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 dark:text-sky-400"
            >
              Get in touch
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
