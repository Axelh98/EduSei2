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
  selectedLessons: string[]        // Estado recibido del padre
  onToggleLesson: (id: string) => void // Función recibida del padre
}

export function WeekCard({ 
  week, 
  categoryId, 
  defaultOpen = false,
  selectedLessons,
  onToggleLesson
}: WeekCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  // Contamos cuántas lecciones de ESTA semana específica están seleccionadas
  const countInWeek = week.lessons.filter(l => selectedLessons.includes(l.id)).length

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
              {week.lessons.length === 1 ? " lección" : " lecciones"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {countInWeek > 0 && (
            <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
              {countInWeek} marcadas
            </span>
          )}
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </button>

      {isOpen && (
        <div className="flex flex-col gap-3 border-t border-border px-5 py-4 animate-in fade-in zoom-in-95 duration-200">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
            Selecciona lecciones para compartir
          </p>
          
          {week.lessons.map((lesson) => (
            <div key={lesson.id} className="flex items-start gap-3">
              <div className="pt-3"> {/* Alineación con el centro de la primera línea de la card */}
                <input
                  type="checkbox"
                  checked={selectedLessons.includes(lesson.id)}
                  onChange={() => onToggleLesson(lesson.id)}
                  className="h-5 w-5 cursor-pointer rounded border-input bg-background text-primary focus:ring-primary"
                />
              </div>
              <div className="flex-1">
                <LessonCard
                  lesson={lesson}
                  categoryId={categoryId}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}