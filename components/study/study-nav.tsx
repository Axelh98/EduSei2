// components/study/study-nav.tsx
//
// Navegación entre repasos: la salida hacia adelante que la vista de estudio
// no tenía. Los destinos los resuelve getAdjacentStudyLessons() en el
// servidor, que ya descarta las lecciones sin repaso.

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export interface StudyNeighbor {
  id: string
  title: string
}

interface StudyNavProps {
  categoryId: string
  prev?: StudyNeighbor | null
  next?: StudyNeighbor | null
  /** Se preserva para no perder el plan de recuperación al saltar de lección. */
  recoveryData?: string
  variant?: "full" | "compact"
  /** Margen del bloque: arriba del contenido y al final del repaso no llevan el mismo aire. */
  className?: string
}

function urlDe(categoryId: string, lessonId: string, recoveryData?: string) {
  const qs = recoveryData ? `?data=${encodeURIComponent(recoveryData)}` : ""
  return `/quiz/${categoryId}/${lessonId}/study${qs}`
}

export function StudyNav({
  categoryId,
  prev,
  next,
  recoveryData,
  variant = "full",
  className = "mt-16",
}: StudyNavProps) {
  if (!prev && !next) return null

  // ── Compacta: dos flechas sueltas, para el header ──────────────────────────
  if (variant === "compact") {
    const base =
      "flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-all hover:bg-muted"
    return (
      <div className="flex items-center gap-1.5">
        {prev ? (
          <Link
            href={urlDe(categoryId, prev.id, recoveryData)}
            className={base}
            aria-label={`Repaso anterior: ${prev.title}`}
            title={prev.title}
          >
            <ChevronLeft className="h-4 w-4" />
          </Link>
        ) : (
          <span className={`${base} opacity-30`} aria-hidden="true">
            <ChevronLeft className="h-4 w-4" />
          </span>
        )}
        {next ? (
          <Link
            href={urlDe(categoryId, next.id, recoveryData)}
            className={base}
            aria-label={`Repaso siguiente: ${next.title}`}
            title={next.title}
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <span className={`${base} opacity-30`} aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </span>
        )}
      </div>
    )
  }

  // ── Completa: dos tarjetas con el título del destino ───────────────────────
  const tarjeta =
    "group flex flex-1 items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-left transition-all hover:border-primary/40 hover:bg-muted"

  return (
    <nav
      className={`${className} flex flex-col gap-3 sm:flex-row`}
      aria-label="Navegación entre repasos"
    >
      {prev ? (
        <Link href={urlDe(categoryId, prev.id, recoveryData)} className={tarjeta}>
          <ChevronLeft className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-x-0.5" />
          <span className="min-w-0">
            <span className="block text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/50">
              Anterior
            </span>
            <span className="block truncate text-sm font-semibold text-foreground">
              {prev.title}
            </span>
          </span>
        </Link>
      ) : (
        <div className="hidden flex-1 sm:block" />
      )}

      {next ? (
        <Link
          href={urlDe(categoryId, next.id, recoveryData)}
          className={`${tarjeta} sm:justify-end sm:text-right`}
        >
          <span className="min-w-0 sm:order-1">
            <span className="block text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/50">
              Siguiente
            </span>
            <span className="block truncate text-sm font-semibold text-foreground">
              {next.title}
            </span>
          </span>
          <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 sm:order-2" />
        </Link>
      ) : (
        <div className="hidden flex-1 sm:block" />
      )}
    </nav>
  )
}
