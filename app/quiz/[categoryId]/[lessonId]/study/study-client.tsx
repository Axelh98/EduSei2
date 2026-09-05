// app/quiz/[categoryId]/[lessonId]/study/study-client.tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SeccionView } from "@/components/study/seccion-view"
import { LessonNotes } from "@/components/study/lesson-notes"
import { StudyCta } from "@/components/study/study-cta"
import { StudyHeader } from "@/components/study/study-header"
import { StudyNav, type StudyNeighbor } from "@/components/study/study-nav"
import { SectionIndex } from "@/components/study/section-index"
import { useExportPDF } from "@/hooks/use-export-pdf"
import { useReadingProgress } from "@/hooks/use-reading-progress"
import { trackStudyOpened } from "@/lib/analytics"
import type { Seccion } from "@/lib/types"

interface StudyClientProps {
  categoryId:    string
  categoryName:  string
  lessonId:      string
  lessonTitle:   string
  secciones:     Seccion[]
  courseType:    "seminario" | "instituto"
  recoveryData?: string
  chapterUrl?:   string
  lessonType?:   "preparacion-para-la-vida" | "antiguo-testamento" | "nuevo-testamento"
  prevLesson?:   StudyNeighbor | null
  nextLesson?:   StudyNeighbor | null
}

export function StudyClient({
  categoryId,
  categoryName,
  lessonId,
  lessonTitle,
  secciones,
  courseType,
  recoveryData,
  chapterUrl,
  lessonType,
  prevLesson,
  nextLesson,
}: StudyClientProps) {

  const router = useRouter()

  const backUrl = recoveryData
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`

  const { isExporting, exportToPDF } = useExportPDF()

  useReadingProgress("study-content")

  useEffect(() => {
    trackStudyOpened({ categoryId, categoryName, lessonId, lessonTitle, courseType })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Flechas del teclado: preparar la semana entera sin tocar el mouse.
  // No se activan mientras se escribe en las notas ni con un modificador
  // apretado (Alt+← es "atrás" del navegador).
  useEffect(() => {
    const irA = (lessonId: string) => {
      const qs = recoveryData ? `?data=${encodeURIComponent(recoveryData)}` : ""
      router.push(`/quiz/${categoryId}/${lessonId}/study${qs}`)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return

      const el = document.activeElement as HTMLElement | null
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return

      if (e.key === "ArrowLeft" && prevLesson) { e.preventDefault(); irA(prevLesson.id) }
      if (e.key === "ArrowRight" && nextLesson) { e.preventDefault(); irA(nextLesson.id) }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [categoryId, prevLesson, nextLesson, recoveryData, router])

  // FIX: pasar categoryId y lessonId para que el hook lea las notas del storage
  const handleExport = () => {
    exportToPDF({ categoryName, lessonTitle, secciones, categoryId, lessonId, chapterUrl })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <StudyHeader
        backUrl={backUrl}
        recoveryData={recoveryData}
        isExporting={isExporting}
        onExport={handleExport}
        categoryId={categoryId}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />

      <main className="flex-1 px-4 py-10">
        <div className="mx-auto max-w-2xl" id="study-content">

          <div className="mb-10">
            <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
              {categoryName}
            </p>
            <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {lessonTitle}
            </h1>
            {chapterUrl && (
              <a
                href={chapterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary/70 underline-offset-2 hover:text-primary hover:underline transition-colors"
              >
                Abrir en el manual oficial ↗
              </a>
            )}

            {/* Las mismas tarjetas que al final: saltar de lección sin tener
                que leer el repaso entero primero. */}
            <StudyNav
              categoryId={categoryId}
              prev={prevLesson}
              next={nextLesson}
              recoveryData={recoveryData}
              className="mt-8"
            />
          </div>

          {secciones.length > 0 ? (
            <>
              <SectionIndex secciones={secciones} />
              <div className="space-y-10">
                {secciones.map((seccion, i) => (
                  <section key={i} id={`sec-${i}`} className="scroll-mt-24">
                    <SeccionView seccion={seccion} />
                  </section>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-16 text-center">
              <span className="text-3xl">📖</span>
              <p className="font-medium text-muted-foreground">
                Resumen no disponible todavía
              </p>
              <p className="text-sm text-muted-foreground/60">
                Estamos preparando el contenido de esta lección.
              </p>
            </div>
          )}

          <div className="mt-14">
            <LessonNotes categoryId={categoryId} lessonId={lessonId} />
          </div>

          <StudyCta
            categoryId={categoryId}
            lessonId={lessonId}
            recoveryData={recoveryData}
          />

          <StudyNav
            categoryId={categoryId}
            prev={prevLesson}
            next={nextLesson}
            recoveryData={recoveryData}
          />
        </div>
      </main>
    </div>
  )
}