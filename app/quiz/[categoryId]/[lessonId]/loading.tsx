// app/quiz/[categoryId]/[lessonId]/loading.tsx
export default function LessonLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-background animate-pulse">
      {/* Header skeleton */}
      <div className="h-[57px] border-b border-border bg-card" />

      <main className="flex-1 px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-2xl">
          {/* Back link */}
          <div className="mb-6 h-4 w-32 rounded-full bg-muted" />

          {/* Category label */}
          <div className="mb-2 h-3 w-24 rounded-full bg-muted" />
          {/* Title */}
          <div className="h-8 w-3/4 rounded-xl bg-muted" />
          <div className="mt-2 h-4 w-full max-w-sm rounded-full bg-muted" />
          <div className="mt-1 h-3 w-32 rounded-full bg-muted" />

          {/* Question pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-8 w-8 rounded-full bg-muted" style={{ opacity: 1 - i * 0.07 }} />
            ))}
          </div>

          {/* Question card */}
          <div className="mt-6 rounded-xl border border-border bg-card p-6 md:p-8">
            {/* Progress header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="h-4 w-32 rounded-full bg-muted" />
              <div className="h-8 w-8 rounded-full bg-muted" />
            </div>
            {/* Progress bar */}
            <div className="mb-6 h-1.5 w-full rounded-full bg-muted" />

            {/* Question text */}
            <div className="mb-6 space-y-2">
              <div className="h-6 w-full rounded-xl bg-muted" />
              <div className="h-6 w-4/5 rounded-xl bg-muted" />
              <div className="h-6 w-2/3 rounded-xl bg-muted" />
            </div>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-14 rounded-lg border border-border bg-muted"
                  style={{ opacity: 1 - (i - 1) * 0.1 }}
                />
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="mt-6 flex items-center justify-between">
            <div className="h-10 w-28 rounded-lg bg-muted" />
            <div className="h-10 w-32 rounded-lg bg-muted" />
          </div>
        </div>
      </main>
    </div>
  )
}