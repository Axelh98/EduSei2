// components/study/lesson-notes.tsx
"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { FileText, Save, Trash2, CheckCheck, Loader2 } from "lucide-react"
import { getLessonNote, saveLessonNote, deleteLessonNote } from "@/lib/notes-storage"

interface LessonNotesProps {
  categoryId: string
  lessonId: string
}

type SaveStatus = "idle" | "saving" | "saved"

const DEBOUNCE_MS = 1500

export function LessonNotes({ categoryId, lessonId }: LessonNotesProps) {
  const [content, setContent]       = useState("")
  const [lastSaved, setLastSaved]   = useState<string | null>(null)
  const [status, setStatus]         = useState<SaveStatus>("idle")
  const debounceRef                 = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isFirstLoad                 = useRef(true)

  // ── Cargar nota guardada ────────────────────────────────────────────────
  useEffect(() => {
    const note = getLessonNote(categoryId, lessonId)
    if (note) {
      setContent(note.content)
      setLastSaved(note.lastUpdated)
    }
    isFirstLoad.current = false
  }, [categoryId, lessonId])

  // ── Autosave con debounce ───────────────────────────────────────────────
  const doSave = useCallback(
    (value: string) => {
      setStatus("saving")
      saveLessonNote(categoryId, lessonId, value)
      const now = new Date().toISOString()
      setLastSaved(now)
      setStatus("saved")
      // Volver a idle después de mostrar el checkmark
      setTimeout(() => setStatus("idle"), 2000)
    },
    [categoryId, lessonId],
  )

  const handleChange = (value: string) => {
    setContent(value)
    if (isFirstLoad.current) return

    // Cancelar el debounce anterior
    if (debounceRef.current) clearTimeout(debounceRef.current)

    setStatus("saving")
    debounceRef.current = setTimeout(() => {
      doSave(value)
    }, DEBOUNCE_MS)
  }

  // Guardar inmediatamente al desmontar si hay cambios pendientes
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  const handleDelete = () => {
    if (!confirm("¿Borrar esta nota? No se puede deshacer.")) return
    deleteLessonNote(categoryId, lessonId)
    setContent("")
    setLastSaved(null)
    setStatus("idle")
    if (debounceRef.current) clearTimeout(debounceRef.current)
  }

  // ── Indicador de estado ─────────────────────────────────────────────────
  const StatusIcon = () => {
    if (status === "saving") return <Loader2 className="h-3 w-3 animate-spin text-muted-foreground/60" />
    if (status === "saved")  return <CheckCheck className="h-3 w-3 text-green-500" />
    return null
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
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Escribe tus reflexiones, preguntas o ideas sobre esta lección..."
        rows={6}
        className="w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
      />

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/50">
          <StatusIcon />
          <span>
            {status === "saving" && "Guardando…"}
            {status === "saved"  && "Guardado"}
            {status === "idle"   && lastSaved
              ? `Guardada el ${new Date(lastSaved).toLocaleString("es-AR", {
                  day: "numeric", month: "short",
                  hour: "2-digit", minute: "2-digit",
                })}`
              : status === "idle" ? "Se guarda automáticamente" : ""}
          </span>
        </div>

        {/* Botón manual como fallback */}
        <button
          onClick={() => doSave(content)}
          disabled={!content || status === "saving"}
          className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-all hover:bg-muted hover:text-foreground disabled:opacity-30"
        >
          <Save className="h-3 w-3" />
          Guardar ya
        </button>
      </div>
    </div>
  )
}