// app/quiz/[categoryId]/[lessonId]/study/loading.tsx
export default function StudyLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-background animate-pulse">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 border-b border-border bg-card/90 px-4 py-3">
        <div className="mx-auto max-w-2xl flex items-center justify-between">
          <div className="h-4 w-20 rounded-full bg-muted" />
          <div className="h-3 w-28 rounded-full bg-muted" />
          <div className="h-8 w-28 rounded-full bg-muted" />
        </div>
      </div>

      {/* Reading progress bar placeholder */}
      <div className="h-0.5 w-0 bg-primary" />

      <main className="flex-1 px-4 py-10">
        <div className="mx-auto max-w-2xl">
          {/* Category label */}
          <div className="mb-2 h-3 w-20 rounded-full bg-muted" />
          {/* Lesson title */}
          <div className="h-9 w-3/4 rounded-xl bg-muted" />
          <div className="mt-1 h-9 w-1/2 rounded-xl bg-muted" />

          {/* Sections */}
          <div className="mt-10 space-y-10">
            {/* Section 1 - context paragraph */}
            <div className="space-y-3">
              <div className="h-5 w-full rounded-lg bg-muted" />
              <div className="h-5 w-full rounded-lg bg-muted" />
              <div className="h-5 w-4/5 rounded-lg bg-muted" />
              <div className="h-5 w-3/4 rounded-lg bg-muted" />
            </div>

            {/* Section 2 - scripture block */}
            <div className="rounded-2xl border border-primary/15 bg-primary/[0.03] p-5 space-y-3">
              <div className="h-3 w-24 rounded-full bg-muted" />
              <div className="h-5 w-full rounded-lg bg-muted" />
              <div className="h-5 w-5/6 rounded-lg bg-muted" />
            </div>

            {/* Section 3 - quote block */}
            <div className="rounded-2xl bg-muted/50 p-7 space-y-4">
              <div className="h-3 w-28 rounded-full bg-muted" />
              <div className="h-6 w-full rounded-lg bg-muted" />
              <div className="h-6 w-4/5 rounded-lg bg-muted" />
              <div className="h-6 w-2/3 rounded-lg bg-muted" />
              <div className="mt-4 h-4 w-40 rounded-full bg-muted ml-auto" />
            </div>

            {/* Section 4 - doctrinal bullets */}
            <div className="space-y-3">
              <div className="h-3 w-36 rounded-full bg-muted" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                  <div className="h-5 flex-1 rounded-lg bg-muted" style={{ opacity: 1 - (i - 1) * 0.15 }} />
                </div>
              ))}
            </div>

            {/* Section 5 - paragraphs */}
            <div className="space-y-3">
              <div className="h-5 w-full rounded-lg bg-muted" />
              <div className="h-5 w-11/12 rounded-lg bg-muted" />
              <div className="h-5 w-5/6 rounded-lg bg-muted" />
            </div>
          </div>

          {/* Notes skeleton */}
          <div className="mt-14 rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-muted" />
              <div className="h-4 w-20 rounded-full bg-muted" />
            </div>
            <div className="h-32 w-full rounded-xl bg-muted" />
          </div>

          {/* CTA skeleton */}
          <div className="mt-20 text-center">
            <div className="mx-auto h-14 w-64 rounded-full bg-muted" />
          </div>
        </div>
      </main>
    </div>
  )
}