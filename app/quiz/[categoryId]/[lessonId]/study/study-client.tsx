// app/quiz/[categoryId]/[lessonId]/study/study-client.tsx
"use client"

import type { Seccion } from "@/lib/types"
import { useExportPDF } from "@/hooks/use-export-pdf"
import { getLessonNote } from "@/lib/notes-storage"
import { getSavedStudentName } from "@/lib/utils"
import { StudyHeader } from "@/components/study/study-header"
import { SeccionView } from "@/components/study/seccion-view"
import { LessonNotes } from "@/components/study/lesson-notes"
import { StudyCta } from "@/components/study/study-cta"

interface StudyClientProps {
  categoryId: string
  categoryName: string
  lessonId: string
  lessonTitle: string
  secciones: Seccion[]
  recoveryData?: string
}

export function StudyClient({
  categoryId,
  categoryName,
  lessonId,
  lessonTitle,
  secciones,
  recoveryData,
}: StudyClientProps) {
  const { isExporting, exportToPDF } = useExportPDF()

  const backUrl = recoveryData
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`

  const handleExport = () => {
    const notes = getLessonNote(categoryId, lessonId)
    exportToPDF({
      categoryName,
      lessonTitle,
      secciones,
      notes: notes?.content,
      studentName: getSavedStudentName() || undefined,
    })
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <StudyHeader
        backUrl={backUrl}
        recoveryData={recoveryData}
        isExporting={isExporting}
        onExport={handleExport}
      />

      <main className="mx-auto max-w-2xl px-5 pt-10">
        <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
          {lessonTitle}
        </h1>

        <div className="mb-10 mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
          <div className="h-1 w-1 rounded-full bg-primary/20" />
        </div>

        <div className="space-y-10">
          {secciones.map((seccion, idx) => (
            <section
              key={idx}
              className="animate-in fade-in slide-in-from-bottom-3 duration-500"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <SeccionView seccion={seccion} />
            </section>
          ))}
        </div>

        <div className="mt-12">
          <LessonNotes categoryId={categoryId} lessonId={lessonId} />
        </div>

        <StudyCta
          categoryId={categoryId}
          lessonId={lessonId}
          recoveryData={recoveryData}
        />
      </main>
    </div>
  )
}