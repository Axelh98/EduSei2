"use client"

import Link from "next/link"
import { ArrowRight, FileText, ExternalLink, CheckCircle2, Clock } from "lucide-react"
import type { Lesson } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface LessonCardProps {
  lesson: Lesson
  categoryId: string
}

const TYPE_ACCENT: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme":   "#7F77DD",
  "Nuevo Testamento - Ven Sigueme":     "#1D9E75",
  "Libro de Mormón - Ven Sigueme":      "#378ADD",
  "Doctrina y Convenios - Ven Sigueme": "#D85A30",
  "Bloque de Escrituras - Ven Sigueme": "#888780",
  "Preparación para la Vida":           "#ef4444",
  "Dominio de la Doctrina":             "#f97316",
  "Especial":                           "#38bdf8",
  "Religión 250":                       "#BA7517",
  "Religión 225":                       "#D4537E",
  default:                              "#888780",
}

// Abreviaturas para el tipo — evita el badge larguísimo
const TYPE_SHORT: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme":   "AT",
  "Nuevo Testamento - Ven Sigueme":     "NT",
  "Libro de Mormón - Ven Sigueme":      "LM",
  "Doctrina y Convenios - Ven Sigueme": "DyC",
  "Bloque de Escrituras - Ven Sigueme": "Bloque",
  "Preparación para la Vida":           "Prep.",
  "Dominio de la Doctrina":             "Doctrina",
  "Especial":                           "Especial",
  "Religión 250":                       "Rel. 250",
  "Religión 225":                       "Rel. 225",
}

// Estima minutos de lectura del quiz (~30 seg por pregunta)
function estimateMinutes(questionCount: number): string {
  if (questionCount === 0) return ""
  const mins = Math.max(2, Math.round(questionCount * 0.5))
  return `~${mins} min`
}

export function LessonCard({ lesson, categoryId }: LessonCardProps) {
  const accent    = TYPE_ACCENT[lesson.type ?? "default"] ?? TYPE_ACCENT.default
  const shortType = TYPE_SHORT[lesson.type ?? ""] ?? lesson.type ?? ""
  const numQuiz   = lesson.questions?.length ?? 0
  const hasStudy  = (lesson.secciones?.length ?? 0) > 0
  const estTime   = estimateMinutes(numQuiz)

  // Estado de completado desde localStorage
  const [isDone, setIsDone] = useState(false)
  useEffect(() => {
    const saved: string[] = JSON.parse(localStorage.getItem("seminario-completados") || "[]")
    setIsDone(saved.includes(`${categoryId}-${lesson.title}`))
  }, [categoryId, lesson.title])

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border bg-card",
        "transition-all duration-200",
        isDone
          ? "border-green-500/20 opacity-80"
          : "border-border hover:-translate-y-px hover:shadow-md hover:border-border/80"
      )}
    >
      {/* Borde izquierdo coloreado — más impacto que el top */}
      <div
        className="absolute inset-y-0 left-0 w-[3px] rounded-l-xl transition-all duration-200 group-hover:w-1"
        style={{ backgroundColor: isDone ? "#22c55e" : accent }}
      />

      {/* Cuerpo principal */}
      <div className="flex items-start gap-3 px-4 pb-3 pt-4 pl-5">

        {/* Columna izquierda: dot de tipo + título */}
        <div className="flex-1 min-w-0">

          {/* Fila de metadata compacta */}
          <div className="mb-1.5 flex items-center gap-2">
            {/* Dot coloreado + sigla — reemplaza el badge largo */}
            {shortType && (
              <span className="flex items-center gap-1">
                <span
                  className="h-1.5 w-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: accent }}
                />
                <span
                  className="text-[9px] font-black uppercase tracking-widest"
                  style={{ color: accent }}
                >
                  {shortType}
                </span>
              </span>
            )}

            {/* Tiempo estimado */}
            {estTime && (
              <span className="flex items-center gap-1 text-[9px] text-muted-foreground/50">
                <Clock className="h-2.5 w-2.5" />
                {estTime}
              </span>
            )}

            {/* Badge de completado */}
            {isDone && (
              <span className="ml-auto flex items-center gap-1 text-[9px] font-bold text-green-600">
                <CheckCircle2 className="h-3 w-3" />
                Completada
              </span>
            )}
          </div>

          {/* Título */}
          <h4
            className={cn(
              "text-sm font-bold leading-snug [text-wrap:pretty]",
              isDone ? "text-muted-foreground line-through decoration-muted-foreground/40" : "text-foreground"
            )}
          >
            {lesson.title}
          </h4>

          {/* Descripción */}
          {lesson.description && (
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground/70 line-clamp-2 [text-wrap:pretty]">
              {lesson.description}
            </p>
          )}
        </div>
      </div>

      {/* Footer de acciones — separador visual limpio */}
      <div className="mt-auto flex items-center justify-between gap-2 border-t border-border/50 bg-muted/20 px-4 py-2.5 pl-5">

        {/* Acciones secundarias */}
        <div className="flex items-center gap-3">
          {hasStudy && (
            <Link
              href={`/quiz/${categoryId}/${lesson.id}/study`}
              className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide transition-all hover:opacity-70"
              style={{ color: accent }}
            >
              <FileText className="h-3 w-3" />
              Repasar
            </Link>
          )}
          {lesson.chapterUrl && (
            <Link
              href={lesson.chapterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              <ExternalLink className="h-3 w-3" />
              Manual
            </Link>
          )}
        </div>

        {/* CTA principal */}
        {numQuiz > 0 ? (
          <Link
            href={`/quiz/${categoryId}/${lesson.id}`}
            aria-label={`Hacer quiz de ${lesson.title} — ${numQuiz} preguntas`}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5",
              "text-[11px] font-bold text-white transition-all",
              "hover:brightness-110 active:scale-95 shadow-sm",
              isDone && "opacity-60"
            )}
            style={{ backgroundColor: isDone ? "#22c55e" : accent }}
          >
            {isDone ? "Rehacer" : "Quiz"}
            <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold tabular-nums">
              {numQuiz}
            </span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        ) : (
          <span className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-[10px] text-muted-foreground/40">
            Próximamente
          </span>
        )}
      </div>
    </div>
  )
}