"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { Week } from "@/lib/types"
import { LessonCard } from "./lesson-card"
import { cn } from "@/lib/utils"

interface WeekCardProps {
  week: Week
  categoryId: string
  defaultOpen?: boolean
}

export function WeekCard({ week, categoryId, defaultOpen = false }: WeekCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted/50"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
            {week.id}
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {week.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {week.dateRange}
              {" -- "}
              {week.lessons.length}
              {week.lessons.length === 1 ? " leccion" : " lecciones"}
            </p>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="flex flex-col gap-2 border-t border-border px-5 py-4">
          {week.lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              categoryId={categoryId}
            />
          ))}
        </div>
      )}
    </div>
  )
}
