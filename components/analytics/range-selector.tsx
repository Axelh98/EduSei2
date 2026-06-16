// components/admin/range-selector.tsx
"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useTransition } from "react"

export type Range = "7d" | "15d" | "30d" | "all"

const OPTIONS: { value: Range; label: string }[] = [
  { value: "7d",  label: "7 días" },
  { value: "15d", label: "15 días" },
  { value: "30d", label: "30 días" },
  { value: "all", label: "Todo" },
]

export function RangeSelector({ value }: { value: Range }) {
  const router    = useRouter()
  const pathname  = usePathname()
  const params    = useSearchParams()
  const [pending, startTransition] = useTransition()

  function set(r: Range) {
    const p = new URLSearchParams(params)
    p.set("range", r)
    startTransition(() => router.push(`${pathname}?${p.toString()}`))
  }

  return (
    <div
      className={[
        "flex items-center gap-1 rounded-full border border-border bg-card p-1 transition-opacity",
        pending && "opacity-60",
      ].filter(Boolean).join(" ")}
    >
      {OPTIONS.map(o => (
        <button
          key={o.value}
          onClick={() => set(o.value)}
          disabled={pending}
          className={[
            "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
            value === o.value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          ].join(" ")}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}