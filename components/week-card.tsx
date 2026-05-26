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
  selectedLessons: string[]
  onToggleLesson: (id: string) => void
}

export function WeekCard({
  week,
  categoryId,
  defaultOpen = false,
  selectedLessons,
  onToggleLesson,
}: WeekCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const countInWeek = week.lessons.filter((l) => selectedLessons.includes(l.id)).length
  const lessonCount = week.lessons.length

  const headerId = `week-${week.id}-header`
  const bodyId = `week-${week.id}-body`

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      {/* Header del acordeón */}
      <button
        id={headerId}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={bodyId}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/40"
      >
        {/* Número de semana */}
        <div
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/8 leading-none"
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/50">
            Sem.
          </span>
          <span className="text-lg font-bold text-primary leading-tight">
            {week.id}
          </span>
        </div>

        {/* Título y metadata */}
        <div className="flex-1 min-w-0">
          <h3 className="truncate text-sm font-bold text-foreground">
            {week.title}
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {week.dateRange}
            <span className="mx-1.5 text-border" aria-hidden="true">·</span>
            {lessonCount} {lessonCount === 1 ? "lección" : "lecciones"}
          </p>
        </div>

        {/* Indicadores a la derecha */}
        <div className="flex shrink-0 items-center gap-2">
          {countInWeek > 0 && (
            <span
              aria-live="polite"
              aria-label={`${countInWeek} ${countInWeek === 1 ? "lección marcada" : "lecciones marcadas"} en esta semana`}
              className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary"
            >
              {countInWeek} marcadas
            </span>
          )}
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "h-4 w-4 text-muted-foreground/60 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </button>

      {/* Cuerpo expandido */}
      {isOpen && (
        <div
          id={bodyId}
          role="region"
          aria-labelledby={headerId}
          className="border-t border-border animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {/* Instrucción de selección */}
          <p
            aria-hidden="true"
            className="border-b border-border/50 bg-muted/30 px-5 py-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60"
          >
            Seleccioná lecciones para compartir
          </p>

          <div className="flex flex-col gap-3 p-4">
            {week.lessons.map((lesson) => (
              <div key={lesson.id} className="flex items-start gap-3">
                <div className="flex h-10 w-5 shrink-0 items-center justify-center pt-3.5">
                  <input
                    type="checkbox"
                    id={`lesson-check-${lesson.id}`}
                    checked={selectedLessons.includes(lesson.id)}
                    onChange={() => onToggleLesson(lesson.id)}
                    aria-label={`Seleccionar lección: ${lesson.title}`}
                    className="h-4 w-4 cursor-pointer rounded border-input bg-background text-primary focus:ring-primary"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <LessonCard lesson={lesson} categoryId={categoryId} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}