import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { FAQ } from "@/components/FAQ";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Reveal className="mx-auto max-w-6xl px-6 -mt-6 mb-6 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-500 dark:text-sky-400"
          >
            See every service in detail
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
        <Portfolio />
        <Reveal className="mx-auto max-w-6xl px-6 -mt-6 mb-6 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-500 dark:text-sky-400"
          >
            View all projects, including our gym & fitness sites
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
        <Process />
        <Testimonials />
        <Blog />
        <FAQ className="bg-paper-100/60 dark:bg-ink-950/40" />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
