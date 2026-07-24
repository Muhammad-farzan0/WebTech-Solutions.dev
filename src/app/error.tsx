"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled route error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-paper-50 dark:bg-ink-900 px-6">
      <div className="text-center max-w-md">
        <div className="font-display font-semibold text-5xl text-navy-900 dark:text-white">
          Something broke.
        </div>
        <p className="mt-4 text-navy-900/65 dark:text-paper-50/65">
          That&apos;s on us, not you. Try again, or head back home — if it keeps
          happening, let us know.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy-900 dark:bg-sky-400 text-white dark:text-navy-950 font-semibold hover:bg-blue-600 dark:hover:bg-sky-300 transition-colors"
          >
            <RefreshCw size={16} />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-navy-900/20 dark:border-paper-50/20 text-navy-900 dark:text-paper-50 font-semibold hover:border-blue-500 dark:hover:border-sky-400 transition-colors"
          >
            <Home size={16} />
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
