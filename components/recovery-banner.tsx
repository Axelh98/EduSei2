// components/recovery-banner.tsx
"use client"

import { useEffect, useState } from "react"
import { ArrowRight, BookOpen, X } from "lucide-react"
import Link from "next/link"
import { getRecoveryPlan, clearRecoveryPlan } from "@/lib/recovery-storage"
import { getLessonById, getCategoryById, isFlatCategory } from "@/lib/quiz-data"

interface PlanSummary {
  url: string
  total: number
  pending: number
}

function parseSummary(rawData: string): PlanSummary {
  const url = `/recuperar?data=${encodeURIComponent(rawData)}`

  // Contar lecciones totales del plan
  const total = decodeURIComponent(rawData)
    .split("|")
    .filter(Boolean)
    .reduce((acc, group) => {
      const [, lessonIdsRaw] = group.split(":")
      return acc + (lessonIdsRaw?.split(",").length ?? 0)
    }, 0)

  // Contar pendientes comparando con completados en localStorage
  const completados: string[] = JSON.parse(
    localStorage.getItem("seminario-completados") || "[]"
  )

  const pending = decodeURIComponent(rawData)
    .split("|")
    .filter(Boolean)
    .reduce((acc, group) => {
      const [categoryId, lessonIdsRaw] = group.split(":")
      return acc + lessonIdsRaw.split(",").filter((lId) => {
        const result = getLessonById(categoryId, lId)
        if (!result) return false
        return !completados.includes(`${categoryId}-${result.lesson.title}`)
      }).length
    }, 0)

  return { url, total, pending }
}

export function RecoveryBanner() {
  const [summary, setSummary] = useState<PlanSummary | null>(null)

  useEffect(() => {
    const plan = getRecoveryPlan()
    if (!plan) return
    setSummary(parseSummary(plan.rawData))
  }, [])

  if (!summary || summary.pending === 0) return null

  return (
    <div className="mx-4 mt-4 md:mx-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
          {/* Ícono */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-4 w-4 text-primary" />
          </div>

          {/* Texto */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground leading-snug">
              Tenés lecciones pendientes
            </p>
            <p className="text-xs text-muted-foreground">
              {summary.pending} de {summary.total}{" "}
              {summary.total === 1 ? "lección" : "lecciones"} por completar
            </p>
          </div>

          {/* CTA */}
          <Link
            href={summary.url}
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
          >
            Ver mi plan
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Cerrar */}
          <button
            onClick={() => {
              clearRecoveryPlan()
              setSummary(null)
            }}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-muted-foreground/50 transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Cerrar"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}