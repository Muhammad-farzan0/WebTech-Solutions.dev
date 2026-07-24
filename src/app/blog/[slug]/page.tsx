import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} — WebTech Solutions`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const index = blogPosts.findIndex((p) => p.slug === slug);
  const next = blogPosts[(index + 1) % blogPosts.length];

  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 md:pt-48 md:pb-32">
        <article className="mx-auto max-w-2xl px-6">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-navy-900/60 dark:text-paper-50/60 hover:text-blue-500 dark:hover:text-sky-400 transition-colors"
            >
              <ArrowLeft size={14} />
              All posts
            </Link>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-navy-900/45 dark:text-paper-50/45">
              <span className="uppercase tracking-wide">{post.tag}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-navy-900 dark:text-white leading-tight">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-5">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-[15px] leading-7 text-navy-900/75 dark:text-paper-50/75"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-16 pt-8 border-t border-navy-900/10 dark:border-paper-50/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href={`/blog/${next.slug}`}
                className="group flex-1 min-w-0"
              >
                <div className="text-xs text-navy-900/45 dark:text-paper-50/45">
                  Next up
                </div>
                <div className="mt-1 font-display font-semibold text-navy-900 dark:text-white truncate group-hover:text-blue-500 dark:group-hover:text-sky-400 transition-colors">
                  {next.title}
                </div>
              </Link>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 text-sm font-semibold hover:bg-blue-600 dark:hover:bg-sky-300 transition-colors"
              >
                Start a project
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
