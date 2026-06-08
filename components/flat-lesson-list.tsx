"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, FileText, ExternalLink, CheckCircle2, Clock } from "lucide-react"
import type { FlatLesson } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface FlatLessonListProps {
  lessons: FlatLesson[]
  categoryId: string
  selectedLessons: string[]
  onToggleLesson: (id: string) => void
}

// Colores de acento por courseType — se hereda del contexto de categoría
// Usamos el mismo mapa que lesson-card para consistencia
const TYPE_ACCENT: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme":   "#7F77DD",
  "Nuevo Testamento - Ven Sigueme":     "#1D9E75",
  "Libro de Mormón - Ven Sigueme":      "#378ADD",
  "Doctrina y Convenios - Ven Sigueme": "#D85A30",
  "Preparación para la Vida":           "#ef4444",
  "Dominio de la Doctrina":             "#f97316",
  "Religión 250":                       "#BA7517",
  "Religión 225":                       "#D4537E",
  default:                              "#BA7517", // instituto fallback
}

function getAccent(lesson: FlatLesson): string {
  return TYPE_ACCENT[lesson.type ?? "default"] ?? TYPE_ACCENT.default
}

// ─── Header de unidad con barra de progreso ───────────────────────────────────
function UnitHeader({
  title,
  index,
  total,
  done,
  accent,
}: {
  title: string
  index: number
  total: number
  done: number
  accent: string
}) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div className="flex items-start gap-3">
        {/* Número grande como elemento decorativo de fondo */}
        <div
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accent}15` }}
        >
          <span
            className="text-base font-black tabular-nums"
            style={{ color: accent }}
          >
            {index + 1}
          </span>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-widest text-foreground">
            {title}
          </h2>
          <p className="mt-0.5 text-[10px] text-muted-foreground/60 tabular-nums">
            {total} {total === 1 ? "lección" : "lecciones"}
            {done > 0 && (
              <span className="ml-1.5 font-bold text-green-600">
                · {done} completada{done > 1 ? "s" : ""}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Barra de progreso de la unidad */}
      {total > 0 && (
        <div className="flex shrink-0 flex-col items-end gap-1">
          <span className="text-[9px] font-black tabular-nums" style={{ color: accent }}>
            {pct}%
          </span>
          <div className="h-1 w-24 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{ width: `${pct}%`, backgroundColor: accent }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Card de lección individual ───────────────────────────────────────────────
function FlatLessonItem({
  lesson,
  categoryId,
  isSelected,
  isDone,
  onToggle,
}: {
  lesson: FlatLesson
  categoryId: string
  isSelected: boolean
  isDone: boolean
  onToggle: () => void
}) {
  const accent    = getAccent(lesson)
  const hasQuiz   = lesson.questions.length > 0
  const hasStudy  = (lesson.secciones ?? []).length > 0
  const checkId   = `lesson-check-${lesson.id}`
  const numQuiz   = lesson.questions.length
  const estMins   = numQuiz > 0 ? `~${Math.max(2, Math.round(numQuiz * 0.5))} min` : ""

  return (
    <div className="flex items-stretch gap-3">
      {/* Checkbox — centrado verticalmente */}
      <div className="flex items-center pt-0.5">
        <input
          type="checkbox"
          id={checkId}
          checked={isSelected}
          onChange={onToggle}
          aria-label={`Seleccionar lección: ${lesson.title}`}
          className="h-4 w-4 cursor-pointer rounded border-input bg-background text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
      </div>

      {/* Card */}
      <label
        htmlFor={checkId}
        className={cn(
          "group flex flex-1 cursor-pointer flex-col overflow-hidden rounded-xl border",
          "transition-all duration-200",
          isDone
            ? "border-green-500/20 bg-green-500/[0.02] opacity-75"
            : isSelected
            ? "border-primary/25 bg-primary/[0.02]"
            : "border-border bg-card hover:-translate-y-px hover:border-border/80 hover:shadow-md"
        )}
        style={isSelected && !isDone ? { borderColor: `${accent}40` } : {}}
      >
        {/* Cuerpo */}
        <div className="flex items-start gap-3 px-4 py-3.5">
          {/* Ícono de estado */}
          <div
            className={cn(
              "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200",
              isDone
                ? "bg-green-500"
                : "group-hover:scale-105"
            )}
            style={!isDone ? { backgroundColor: `${accent}15` } : {}}
          >
            {isDone ? (
              <CheckCircle2 className="h-4 w-4 text-white" />
            ) : (
              <BookOpen className="h-4 w-4" style={{ color: accent }} />
            )}
          </div>

          <div className="flex-1 min-w-0">
            {/* Metadata row */}
            <div className="mb-1 flex items-center gap-2">
              {estMins && (
                <span className="flex items-center gap-1 text-[9px] text-muted-foreground/50">
                  <Clock className="h-2.5 w-2.5" />
                  {estMins}
                </span>
              )}
            </div>

            {/* Título */}
            <span
              className={cn(
                "text-sm font-bold leading-snug [text-wrap:pretty]",
                isDone
                  ? "text-muted-foreground line-through decoration-muted-foreground/40"
                  : "text-foreground"
              )}
            >
              {lesson.title}
            </span>

            {lesson.description && (
              <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground/70 [text-wrap:pretty]">
                {lesson.description}
              </p>
            )}
          </div>
        </div>

        {/* Footer de acciones */}
        <div className="flex items-center gap-2 border-t border-border/50 bg-muted/20 px-4 py-2.5">
          {lesson.chapterUrl && (
            <Link
              href={lesson.chapterUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 rounded-lg bg-muted px-2.5 py-1.5 text-[10px] font-medium text-muted-foreground transition-colors hover:bg-muted/80"
            >
              <ExternalLink className="h-3 w-3" />
              Manual
            </Link>
          )}

          {hasStudy && (
            <Link
              href={`/quiz/${categoryId}/${lesson.id}/study`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[10px] font-bold transition-colors"
              style={{
                backgroundColor: `${accent}12`,
                color: accent,
              }}
            >
              <FileText className="h-3 w-3" />
              Repasar
            </Link>
          )}

          {hasQuiz ? (
            <Link
              href={`/quiz/${categoryId}/${lesson.id}`}
              onClick={(e) => e.stopPropagation()}
              aria-label={`Hacer quiz de ${lesson.title} — ${numQuiz} preguntas`}
              className={cn(
                "ml-auto flex items-center gap-1.5 rounded-full px-4 py-1.5",
                "text-[11px] font-bold text-white shadow-sm",
                "transition-all hover:brightness-110 active:scale-95"
              )}
              style={{ backgroundColor: isDone ? "#22c55e" : accent }}
            >
              {isDone ? "Rehacer" : "Quiz"}
              <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] tabular-nums">
                {numQuiz}
              </span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          ) : (
            <span className="ml-auto rounded-full border border-border px-3 py-1.5 text-[10px] text-muted-foreground/40">
              Quiz próximamente
            </span>
          )}
        </div>
      </label>
    </div>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────
export function FlatLessonList({
  lessons,
  categoryId,
  selectedLessons,
  onToggleLesson,
}: FlatLessonListProps) {
  const [completados, setCompletados] = useState<string[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("seminario-completados") || "[]")
    setCompletados(saved)
  }, [])

  // Agrupar por unidad
  const units = lessons.reduce<Map<string, FlatLesson[]>>((acc, lesson) => {
    const key = lesson.unitTitle ?? "Lecciones"
    if (!acc.has(key)) acc.set(key, [])
    acc.get(key)!.push(lesson)
    return acc
  }, new Map())

  return (
    <div className="flex flex-col gap-12">
      {Array.from(units.entries()).map(([unitTitle, unitLessons], unitIndex) => {
        // Calcular completadas por unidad para el progress header
        const doneInUnit = unitLessons.filter((l) =>
          completados.includes(`${categoryId}-${l.title}`)
        ).length
        // Acento de la primera lección de la unidad (consistente por unidad)
        const unitAccent = getAccent(unitLessons[0])

        return (
          <section key={unitTitle} aria-labelledby={`unit-heading-${unitIndex}`}>
            <UnitHeader
              title={unitTitle}
              index={unitIndex}
              total={unitLessons.length}
              done={doneInUnit}
              accent={unitAccent}
            />

            <div className="flex flex-col gap-2.5">
              {unitLessons.map((lesson) => {
                const isDone = completados.includes(`${categoryId}-${lesson.title}`)
                return (
                  <FlatLessonItem
                    key={lesson.id}
                    lesson={lesson}
                    categoryId={categoryId}
                    isSelected={selectedLessons.includes(lesson.id)}
                    isDone={isDone}
                    onToggle={() => onToggleLesson(lesson.id)}
                  />
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}