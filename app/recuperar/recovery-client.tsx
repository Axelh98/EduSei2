// app/recuperar/recovery-client.tsx
"use client"

import { useState, useEffect, useMemo } from "react"
import { BookOpen, ChevronDown } from "lucide-react"
import { getLessonById, isFlatCategory, getCategoryById } from "@/lib/quiz-data"
import { leccionesResumidasAT } from "@/lib/data/antiguo-testamento-primer-semestre"
import { leccionesResumidasLM } from "@/lib/data/libro-de-mormon-primer-semestre"
import { leccionesResumidasLM2 } from "@/lib/data/libro-de-mormon-2-semestre"
import { religion301Lecciones } from "@/lib/data/religion-301/indexlecciones"
import { generateWhatsAppReport } from "@/lib/utils"
import { useShareWithName } from "@/hooks/use-share-with-name"
import { StudentNameModal } from "@/components/student-name-modal"
import { RecoveryDashboard } from "@/components/recovery/recovery-dashboard"
import { PendingLessonCard } from "@/components/recovery/pending-lesson-card"
import { CompletedLessonCard } from "@/components/recovery/completed-lesson-card"
import { saveRecoveryPlan } from "@/lib/recovery-storage"
import { cn } from "@/lib/utils"
import type { RecoveryLesson } from "@/components/recovery/pending-lesson-card"

interface RecoveryClientProps {
  rawData: string
}

function parseLessons(rawData: string): RecoveryLesson[] {
  if (!rawData) return []

  return decodeURIComponent(rawData)
    .split("|")
    .filter(Boolean)
    .flatMap((group) => {
      const [categoryId, lessonIdsRaw] = group.split(":")
      const category = getCategoryById(categoryId)
      const isFlat   = category ? isFlatCategory(category) : false

      return lessonIdsRaw.split(",").flatMap((lId) => {
        const result = getLessonById(categoryId, lId)
        if (!result) return []

        const tieneResumen = isFlat
          ? (result.lesson.secciones ?? []).length > 0
          : leccionesResumidasAT.some((r) => r.id === lId) ||
            leccionesResumidasLM.some((r) => r.id === lId) ||
            leccionesResumidasLM2.some((r) => r.id === lId) ||
            religion301Lecciones.some((r) => r.id === lId)

        return [{
          categoryId,
          isFlat,
          tieneResumen,
          lesson: {
            id:         result.lesson.id,
            title:      result.lesson.title,
            type:       result.lesson.type,
            chapterUrl: result.lesson.chapterUrl,
            unitTitle:  (result.lesson as any).unitTitle,
          },
          category: { name: result.category.name },
        } satisfies RecoveryLesson]
      })
    })
}

export function RecoveryClient({ rawData }: RecoveryClientProps) {
  const [completados,   setCompletados]   = useState<string[]>([])
  const [showCompleted, setShowCompleted] = useState(false)

  const { modalOpen, handleConfirm, handleCancel, shareToWhatsApp } = useShareWithName()

  useEffect(() => {
    // Guardar el plan para que la home muestre el banner
    if (rawData) saveRecoveryPlan(rawData)

    // Cargar lecciones completadas
    const saved = JSON.parse(localStorage.getItem("seminario-completados") || "[]")
    setCompletados(saved)
  }, [rawData])

  const lessons = useMemo(() => parseLessons(rawData), [rawData])

  const pending   = lessons.filter((l) => !completados.includes(`${l.categoryId}-${l.lesson.title}`))
  const completed = lessons.filter((l) =>  completados.includes(`${l.categoryId}-${l.lesson.title}`))
  const done       = completed.length
  const total      = lessons.length
  const percentage = total > 0 ? Math.round((done / total) * 100) : 0
  const allDone    = done === total && total > 0

  const handleShare = () => {
    shareToWhatsApp((nombre) =>
      generateWhatsAppReport(lessons, completados, percentage, nombre)
    )
  }

  return (
    <>
      <StudentNameModal
        isOpen={modalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <header className="mb-8">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground/50">
          Plan de recuperación
        </p>
        <h1 className="font-serif text-2xl font-bold text-foreground">
          Tu camino al día
        </h1>
      </header>

      <RecoveryDashboard
        percentage={percentage}
        done={done}
        total={total}
        pendingCount={pending.length}
        allDone={allDone}
        onShare={handleShare}
      />

      {pending.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {pending.length}
            </span>
            Por completar
          </h2>
          <div className="flex flex-col gap-3">
            {pending.map((item, i) => (
              <PendingLessonCard key={i} item={item} rawData={rawData} />
            ))}
          </div>
        </section>
      )}

      {completed.length > 0 && (
        <section>
          <button
            onClick={() => setShowCompleted((v) => !v)}
            className="mb-3 flex w-full items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-[10px] font-bold text-green-600">
              {done}
            </span>
            Completadas
            <ChevronDown className={cn(
              "ml-auto h-3.5 w-3.5 transition-transform duration-200",
              showCompleted && "rotate-180"
            )} />
          </button>

          {showCompleted && (
            <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
              {completed.map((item, i) => (
                <CompletedLessonCard key={i} item={item} />
              ))}
            </div>
          )}
        </section>
      )}

      {total === 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
          <BookOpen className="mb-3 h-8 w-8 text-muted-foreground/30" />
          <p className="font-medium text-muted-foreground">No hay lecciones asignadas</p>
          <p className="mt-1 text-sm text-muted-foreground/60">
            Pedile a tu maestro que comparta un plan de recuperación.
          </p>
        </div>
      )}
    </>
  )
}