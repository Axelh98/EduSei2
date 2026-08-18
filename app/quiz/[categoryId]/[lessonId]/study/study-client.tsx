// app/quiz/[categoryId]/[lessonId]/study/study-client.tsx
"use client"

import { useEffect } from "react"
import { SeccionView } from "@/components/study/seccion-view"
import { LessonNotes } from "@/components/study/lesson-notes"
import { StudyCta } from "@/components/study/study-cta"
import { StudyHeader } from "@/components/study/study-header"
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
}: StudyClientProps) {

  const backUrl = recoveryData
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`

  const { isExporting, exportToPDF } = useExportPDF()

  useReadingProgress("study-content")

  useEffect(() => {
    trackStudyOpened({ categoryId, categoryName, lessonId, lessonTitle, courseType })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          </div>

          {secciones.length > 0 ? (
            <div className="space-y-10">
              {secciones.map((seccion, i) => (
                <SeccionView key={i} seccion={seccion} />
              ))}
            </div>
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
        </div>
      </main>
    </div>
  )
}