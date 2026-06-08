// components/recovery/pending-lesson-card.tsx
// CAMBIOS: acepta overrideId y overrideData opcionales,
// muestra badge "Versión personalizada" y pasa overrideId en los links.

import { BookOpen, ArrowRight, FileText, ExternalLink, Sparkles } from "lucide-react"
import Link from "next/link"

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

export interface RecoveryLesson {
  categoryId:    string
  isFlat:        boolean
  tieneResumen:  boolean
  overrideId?:   string
  overrideData?: {
    title:         string | null
    seccionCount:  number
    questionCount: number
  }
  lesson: {
    id:         string
    title:      string
    type?:      string
    chapterUrl?: string
    unitTitle?:  string
  }
  category: {
    name: string
  }
}

interface PendingLessonCardProps {
  item:    RecoveryLesson
  rawData: string
}

export function PendingLessonCard({ item, rawData }: PendingLessonCardProps) {
  const accent = TYPE_ACCENT[item.lesson.type ?? "default"] ?? TYPE_ACCENT.default
  const hasOverride = !!item.overrideId

  // Los links al quiz/study incluyen el overrideId si existe
  const overrideParam = item.overrideId ? `&overrideId=${item.overrideId}` : ""
  const quizUrl  = `/quiz/${item.categoryId}/${item.lesson.id}?data=${rawData}${overrideParam}`
  const studyUrl = `/quiz/${item.categoryId}/${item.lesson.id}/study?data=${rawData}${overrideParam}`

  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:shadow-md"
      style={{ borderLeft: `3px solid ${accent}` }}
    >
      {/* Fila principal */}
      <div className="flex items-start gap-3 p-4">
        <div
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}15` }}
        >
          <BookOpen className="h-4 w-4" style={{ color: accent }} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              {item.category.name}
              {item.isFlat && item.lesson.unitTitle && (
                <span className="ml-1 font-normal normal-case">· {item.lesson.unitTitle}</span>
              )}
            </p>
            {/* Badge de versión personalizada */}
            {hasOverride && (
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-secondary border border-secondary/20">
                <Sparkles className="h-2.5 w-2.5" />
                Versión personalizada
              </span>
            )}
          </div>
          <h3 className="text-sm font-bold leading-snug text-foreground">
            {/* Si el override tiene título propio, mostrarlo */}
            {hasOverride && item.overrideData?.title
              ? item.overrideData.title
              : item.lesson.title}
          </h3>
          {hasOverride && item.overrideData?.title && (
            <p className="text-[11px] text-muted-foreground mt-0.5">
              {item.lesson.title}
            </p>
          )}
        </div>

        <Link
          href={quizUrl}
          className="flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-bold text-white transition-all hover:brightness-110 active:scale-95"
          style={{ backgroundColor: accent }}
        >
          Quiz
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Fila de acciones secundarias */}
      {(item.tieneResumen || item.lesson.chapterUrl) && (
        <div className="flex items-center gap-4 border-t border-border/50 bg-muted/20 px-4 py-2">
          {item.tieneResumen && (
            <Link
              href={studyUrl}
              className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide transition-colors"
              style={{ color: accent }}
            >
              <FileText className="h-3 w-3" />
              {hasOverride ? "Ver resumen personalizado" : "Repasar resumen"}
            </Link>
          )}
          {item.lesson.chapterUrl && (
            <Link
              href={item.lesson.chapterUrl}
              target="_blank"
              className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              <ExternalLink className="h-3 w-3" />
              Manual
            </Link>
          )}
        </div>
      )}
    </div>
  )
}