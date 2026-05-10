// components/study/lesson-notes.tsx
"use client"

import { useState, useEffect } from "react"
import { FileText, Save, Trash2 } from "lucide-react"
import { getLessonNote, saveLessonNote, deleteLessonNote } from "@/lib/notes-storage"

interface LessonNotesProps {
  categoryId: string
  lessonId: string
}

export function LessonNotes({ categoryId, lessonId }: LessonNotesProps) {
  const [content, setContent]       = useState("")
  const [lastSaved, setLastSaved]   = useState<string | null>(null)
  const [hasChanges, setHasChanges] = useState(false)
  const [saved, setSaved]           = useState(false)

  useEffect(() => {
    const note = getLessonNote(categoryId, lessonId)
    if (note) {
      setContent(note.content)
      setLastSaved(note.lastUpdated)
    }
  }, [categoryId, lessonId])

  const handleSave = () => {
    saveLessonNote(categoryId, lessonId, content)
    setLastSaved(new Date().toISOString())
    setHasChanges(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleDelete = () => {
    if (!confirm("¿Borrar esta nota? No se puede deshacer.")) return
    deleteLessonNote(categoryId, lessonId)
    setContent("")
    setLastSaved(null)
    setHasChanges(false)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      {/* Encabezado */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
            <FileText className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-sm font-bold text-foreground">Mis notas</span>
        </div>

        {content && (
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 text-[11px] text-muted-foreground/50 transition-colors hover:text-destructive"
          >
            <Trash2 className="h-3 w-3" />
            Borrar
          </button>
        )}
      </div>

      {/* Textarea */}
      <textarea
        value={content}
        onChange={(e) => { setContent(e.target.value); setHasChanges(true) }}
        placeholder="Escribe tus reflexiones, preguntas o ideas sobre esta lección..."
        rows={6}
        className="w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
      />

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground/50">
          {lastSaved
            ? `Guardada el ${new Date(lastSaved).toLocaleString("es-AR", {
                day: "numeric", month: "short",
                hour: "2-digit", minute: "2-digit",
              })}`
            : "Sin guardar aún"}
        </span>

        <button
          onClick={handleSave}
          disabled={!hasChanges}
          className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-[11px] font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95 disabled:opacity-40"
        >
          <Save className="h-3 w-3" />
          {saved ? "¡Guardado!" : "Guardar"}
        </button>
      </div>
    </div>
  )
}