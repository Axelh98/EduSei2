// hooks/use-export-pdf.ts
"use client"

import { useState } from "react"
import type { Seccion } from "@/lib/types"
import { getLessonNote } from "@/lib/notes-storage"
import { buildLessonPdf } from "@/lib/pdf/lesson-pdf"

export interface ExportOptions {
  categoryName: string
  lessonTitle:  string
  secciones:    Seccion[]
  categoryId:   string
  lessonId:     string
  studentName?: string
  chapterUrl?:  string
}

export function useExportPDF() {
  const [isExporting, setIsExporting] = useState(false)

  const exportToPDF = async (options: ExportOptions) => {
    setIsExporting(true)
    try {
      const { categoryId, lessonId, ...resto } = options
      const savedNote = getLessonNote(categoryId, lessonId)

      const pdf = await buildLessonPdf({ ...resto, notes: savedNote?.content ?? "" })

      const fileName = options.lessonTitle
        .slice(0, 50)
        .replace(/[^\w\sáéíóúñ]/gi, "")
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase()
      pdf.save(`${fileName}.pdf`)
    } catch (err) {
      console.error("Error al exportar PDF:", err)
    } finally {
      setIsExporting(false)
    }
  }

  return { isExporting, exportToPDF }
}
