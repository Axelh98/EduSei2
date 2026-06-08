"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, X } from "lucide-react"
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

// ─── Acordeón con animación real de altura ────────────────────────────────────
function AnimatedBody({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | "auto">(isOpen ? "auto" : 0)
  const [visible, setVisible] = useState(isOpen)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (!ref.current) return

    if (isOpen) {
      setVisible(true)
      const h = ref.current.scrollHeight
      setHeight(0)
      requestAnimationFrame(() => requestAnimationFrame(() => setHeight(h)))
    } else {
      setHeight(ref.current.scrollHeight)
      requestAnimationFrame(() => requestAnimationFrame(() => setHeight(0)))
    }
  }, [isOpen])

  const handleTransitionEnd = () => {
    if (isOpen) setHeight("auto")
    else setVisible(false)
  }

  if (!visible && !isOpen) return null

  return (
    <div
      style={{
        height: height === "auto" ? "auto" : `${height}px`,
        overflow: "hidden",
        transition: isFirstRender.current ? "none" : "height 260ms cubic-bezier(0.4,0,0.2,1)",
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div ref={ref}>{children}</div>
    </div>
  )
}

// ─── Barra de progreso de completadas en la semana ───────────────────────────
function WeekProgress({ done, total }: { done: number; total: number }) {
  if (total === 0 || done === 0) return null
  const pct = Math.round((done / total) * 100)
  return (
    <div className="mt-2 flex items-center gap-2">
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary/40 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="tabular-nums text-[9px] font-bold text-muted-foreground/50">
        {done}/{total}
      </span>
    </div>
  )
}

export function WeekCard({
  week,
  categoryId,
  defaultOpen = false,
  selectedLessons,
  onToggleLesson,
}: WeekCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [completados, setCompletados] = useState<string[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("seminario-completados") || "[]")
    setCompletados(saved)
  }, [])

  const lessonCount = week.lessons.length
  const countInWeek = week.lessons.filter((l) => selectedLessons.includes(l.id)).length
  const doneInWeek  = week.lessons.filter((l) =>
    completados.includes(`${categoryId}-${l.title}`)
  ).length

  const previewLessons = week.lessons.slice(0, 2)
  const extraCount     = lessonCount - 2

  const headerId = `week-${week.id}-header`
  const bodyId   = `week-${week.id}-body`

  const handleDeselectAll = (e: React.MouseEvent) => {
    e.stopPropagation()
    week.lessons.forEach((l) => {
      if (selectedLessons.includes(l.id)) onToggleLesson(l.id)
    })
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border bg-card transition-all duration-200",
        isOpen
          ? "border-border/80 shadow-sm"
          : "border-border hover:shadow-sm"
      )}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <button
        id={headerId}
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={bodyId}
        className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/30"
      >
        {/* Número — se rellena de primary cuando está abierto */}
        <div
          aria-hidden="true"
          className={cn(
            "flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg leading-none transition-all duration-200",
            isOpen ? "bg-primary shadow-sm shadow-primary/20" : "bg-primary/8"
          )}
        >
          <span className={cn(
            "text-[9px] font-bold uppercase tracking-widest select-none",
            isOpen ? "text-primary-foreground/70" : "text-primary/50"
          )}>
            Sem.
          </span>
          <span className={cn(
            "tabular-nums text-lg font-bold leading-tight",
            isOpen ? "text-primary-foreground" : "text-primary"
          )}>
            {week.id}
          </span>
        </div>

        {/* Contenido central */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold leading-snug text-foreground">
            {week.title}
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {week.dateRange}
            <span className="mx-1.5 text-border" aria-hidden="true">·</span>
            <span className="tabular-nums">{lessonCount}</span>{" "}
            {lessonCount === 1 ? "lección" : "lecciones"}
          </p>

          {/* Barra de progreso — solo si hay completadas */}
          <WeekProgress done={doneInWeek} total={lessonCount} />

          {/* Preview — solo cuando está cerrado */}
          {!isOpen && lessonCount > 0 && (
            <p className="mt-1.5 truncate text-[11px] text-muted-foreground/45">
              {previewLessons.map((l, i) => (
                <span key={l.id}>
                  {i > 0 && <span className="mx-1 text-muted-foreground/25">·</span>}
                  {l.title}
                </span>
              ))}
              {extraCount > 0 && (
                <span className="ml-1 text-muted-foreground/30">+{extraCount} más</span>
              )}
            </p>
          )}
        </div>

        {/* Derecha: badge de selección + chevron */}
        <div className="flex shrink-0 items-center gap-2 pt-0.5">
          {countInWeek > 0 && (
            <span className="flex items-center gap-1 rounded-full bg-primary/10 py-0.5 pl-2.5 pr-1.5 text-[10px] font-bold text-primary">
              {countInWeek} sel.
              <button
                onClick={handleDeselectAll}
                aria-label="Deseleccionar todas en esta semana"
                className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary/40"
              >
                <X className="h-2 w-2" />
              </button>
            </span>
          )}
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "h-4 w-4 text-muted-foreground/50 transition-transform duration-260",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </button>

      {/* ── Cuerpo con animación de altura real ─────────────────────────── */}
      <AnimatedBody isOpen={isOpen}>
        <div
          id={bodyId}
          role="region"
          aria-labelledby={headerId}
          className="border-t border-border"
        >
          <div className="flex flex-col gap-2 p-4">
            {week.lessons.map((lesson) => {
              const isSelected = selectedLessons.includes(lesson.id)

              return (
                <label
                  key={lesson.id}
                  htmlFor={`lesson-check-${lesson.id}`}
                  className={cn(
                    "flex cursor-pointer items-stretch gap-3 rounded-xl border p-0.5 transition-all duration-150",
                    isSelected
                      ? "border-primary/25 bg-primary/[0.03]"
                      : "border-transparent hover:border-border/60"
                  )}
                >
                  {/* Checkbox centrado verticalmente con el card */}
                  <div className="flex items-center pl-2.5">
                    <input
                      type="checkbox"
                      id={`lesson-check-${lesson.id}`}
                      checked={isSelected}
                      onChange={() => onToggleLesson(lesson.id)}
                      aria-label={`Seleccionar lección: ${lesson.title}`}
                      className="h-4 w-4 cursor-pointer rounded border-input bg-background text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <LessonCard lesson={lesson} categoryId={categoryId} />
                  </div>
                </label>
              )
            })}
          </div>
        </div>
      </AnimatedBody>
    </div>
  )
}