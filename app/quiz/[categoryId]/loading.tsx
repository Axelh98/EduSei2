// app/quiz/[categoryId]/loading.tsx
export default function CategoryLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-background animate-pulse">
      {/* Header skeleton */}
      <div className="h-[57px] border-b border-border bg-card" />

      {/* Hero section skeleton */}
      <div className="border-b border-border bg-card px-4 pb-10 pt-8 md:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Back link */}
          <div className="mb-6 h-4 w-28 rounded-full bg-muted" />

          {/* Title */}
          <div className="h-9 w-2/3 rounded-xl bg-muted" />
          <div className="mt-3 h-4 w-full max-w-lg rounded-full bg-muted" />
          <div className="mt-1 h-4 w-1/2 max-w-sm rounded-full bg-muted" />

          {/* Stats row */}
          <div className="mt-6 flex flex-wrap gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-muted" />
                <div className="h-4 w-20 rounded-full bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weeks skeleton */}
      <div className="px-4 py-10 md:px-6">
        <div className="mx-auto max-w-4xl flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border bg-card"
              style={{ opacity: 1 - i * 0.12 }}
            >
              <div className="flex items-center gap-4 px-5 py-4">
                <div className="h-11 w-11 rounded-lg bg-muted" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-1/2 rounded-full bg-muted" />
                  <div className="h-3 w-1/3 rounded-full bg-muted" />
                </div>
                <div className="h-4 w-4 rounded bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}