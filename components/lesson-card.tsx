"use client"

import Link from "next/link"
import { ArrowRight, FileText, ExternalLink } from "lucide-react"
import type { Lesson } from "@/lib/types"
import { cn } from "@/lib/utils"

interface LessonCardProps {
  lesson: Lesson
  categoryId: string
}

// Mapa de color de acento por tipo de lección — coincide con category-card.tsx
const TYPE_ACCENT: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme":     "#7F77DD",
  "Nuevo Testamento - Ven Sigueme":       "#1D9E75",
  "Libro de Mormón - Ven Sigueme":        "#378ADD",
  "Doctrina y Convenios - Ven Sigueme":   "#D85A30",
  "Bloque de Escrituras - Ven Sigueme":   "#888780",
  "Preparación para la Vida":             "#ef4444",
  "Dominio de la Doctrina":               "#f97316",
  "Especial":                             "#38bdf8",
  "Religión 250":                         "#BA7517",
  "Religión 225":                         "#D4537E",
  default:                                "#888780",
}

export function LessonCard({ lesson, categoryId }: LessonCardProps) {
  const accent = TYPE_ACCENT[lesson.type ?? "default"] ?? TYPE_ACCENT.default
  const numQuiz = lesson.questions?.length ?? 0
  const hasStudy = (lesson.secciones?.length ?? 0) > 0

  return (
    <div
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-card transition-all duration-200",
        "hover:shadow-md"
      )}
      style={{
        borderTop: `2.5px solid ${accent}`,
      }}
    >
      {/* Cuerpo principal */}
      <div className="flex flex-col gap-2 p-4">

        {/* Tipo — metadata pequeña arriba */}
        {lesson.type && (
          <span
            className="w-fit rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest"
            style={{
              backgroundColor: `${accent}12`,
              color: accent,
            }}
          >
            {lesson.type}
          </span>
        )}

        {/* Título — jerarquía principal */}
        <h4 className="text-sm font-bold leading-snug text-foreground">
          {lesson.title}
        </h4>

        {/* Descripción — secundaria, recortada */}
        {lesson.description && (
          <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-2">
            {lesson.description}
          </p>
        )}
      </div>

      {/* Footer de acciones */}
      <div className="mt-auto flex items-center justify-between gap-2 border-t border-border/60 px-4 py-2.5">
        {/* Acciones secundarias */}
        <div className="flex items-center gap-3">
          {hasStudy && (
            <Link
              href={`/quiz/${categoryId}/${lesson.id}/study`}
              className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide transition-colors hover:underline"
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
              className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground/60 transition-colors hover:text-muted-foreground"
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
            className="flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold text-white transition-all hover:brightness-110 active:scale-95"
            style={{ backgroundColor: accent }}
          >
            Quiz
            <span className="rounded bg-white/20 px-1 py-0.5 text-[9px] font-bold tabular-nums">
              {numQuiz}
            </span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        ) : (
          <span className="rounded-full border border-border px-3 py-1.5 text-[10px] text-muted-foreground/40">
            Próximamente
          </span>
        )}
      </div>
    </div>
  )
}