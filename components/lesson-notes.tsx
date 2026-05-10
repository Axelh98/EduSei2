// components/lesson-notes.tsx
"use client"

import { useState, useEffect } from "react"
import { Save, Trash2, FileText } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getLessonNote, saveLessonNote, deleteLessonNote } from "@/lib/notes-storage"
import { useToast } from "@/hooks/use-toast"

interface LessonNotesProps {
  categoryId: string
  lessonId: string
}

export function LessonNotes({ categoryId, lessonId }: LessonNotesProps) {
  const [content, setContent] = useState("")
  const [lastSaved, setLastSaved] = useState<string | null>(null)
  const [hasChanges, setHasChanges] = useState(false)
  const { toast } = useToast()

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
    toast({
      title: "Nota guardada",
      description: "Tus reflexiones se guardaron correctamente",
    })
  }

  const handleDelete = () => {
    if (confirm("¿Querés borrar tu nota? Esta acción no se puede deshacer.")) {
      deleteLessonNote(categoryId, lessonId)
      setContent("")
      setLastSaved(null)
      setHasChanges(false)
      toast({
        title: "Nota eliminada",
        description: "Tu nota fue borrada",
      })
    }
  }

  const handleChange = (value: string) => {
    setContent(value)
    setHasChanges(true)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <CardTitle>Mis Notas</CardTitle>
          </div>
          {content && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
        <CardDescription>
          Escribe tus reflexiones, preguntas o ideas sobre esta lección
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="lesson-notes">Tus reflexiones</Label>
          <Textarea
            id="lesson-notes"
            value={content}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="¿Qué aprendiste? ¿Qué preguntas tenés? ¿Cómo aplicarás esto en tu vida?"
            className="min-h-[200px] resize-y"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            {lastSaved && (
              <span>
                Última modificación:{" "}
                {new Date(lastSaved).toLocaleString("es-AR", {
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            )}
          </div>
          <Button
            onClick={handleSave}
            disabled={!hasChanges}
            className="gap-2"
          >
            <Save className="h-4 w-4" />
            {hasChanges ? "Guardar cambios" : "Guardado"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}