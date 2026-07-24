export function PageLoading() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32 min-h-[60vh]">
      <div className="mx-auto max-w-6xl px-6 animate-pulse">
        <div className="h-3 w-24 rounded bg-navy-900/10 dark:bg-paper-50/10" />
        <div className="mt-4 h-10 w-2/3 max-w-md rounded bg-navy-900/10 dark:bg-paper-50/10" />
        <div className="mt-3 h-4 w-1/2 max-w-sm rounded bg-navy-900/10 dark:bg-paper-50/10" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-44 rounded-2xl border border-navy-900/10 dark:border-paper-50/10 bg-navy-900/5 dark:bg-paper-50/5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
