"use client"
// components/EditorOverrideCard.tsx

import Link from "next/link"
import { useState, useTransition } from "react"
import { deleteOverride } from "@/actions/overrides"
import type { LessonOverride } from "@/actions/overrides"

interface Props {
  override: LessonOverride
  isOwn:    boolean
}

export function EditorOverrideCard({ override, isOwn }: Props) {
  const [isPending, startTransition] = useTransition()
  const [confirmDelete, setConfirmDelete] = useState(false)

  const seccionCount  = Array.isArray(override.secciones) ? override.secciones.length : 0
  const questionCount = Array.isArray(override.questions)  ? override.questions.length : 0
  const formattedDate = new Date(override.updated_at).toLocaleDateString("es-AR", {
    day: "numeric", month: "short", year: "numeric",
  })

  function handleDelete() {
    if (!confirmDelete) { setConfirmDelete(true); return }
    startTransition(async () => {
      await deleteOverride(override.id)
      setConfirmDelete(false)
    })
  }

  return (
    <div className={`flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all duration-200 ${
      override.is_public ? "border-t-[3px] border-t-secondary" : "border-t-[3px] border-t-border"
    }`}>

      {/* Badge */}
      <div className="px-4 pt-4 pb-0">
        <span className="text-[11px] font-semibold text-muted-foreground">
          {override.is_public ? "🌐 Pública" : "🔒 Privada"}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 p-4 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
          {override.lesson_id}
        </p>
        <h3 className="font-serif text-base font-bold text-foreground leading-snug">
          {override.title || `Versión de ${override.lesson_id}`}
        </h3>
        <p className="text-xs text-muted-foreground">{override.category_id}</p>
        {!isOwn && override.profiles && (
          <p className="text-xs text-muted-foreground italic">por {override.profiles.full_name}</p>
        )}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60 mt-2">
          <span>{seccionCount} secc.</span>
          <span>·</span>
          <span>{questionCount} preg.</span>
          <span>·</span>
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-2 flex-wrap px-4 py-3 border-t border-border/60 bg-muted/20">
        {isOwn ? (
          <>
            <Link href={`/editor/${override.id}`}
              className="px-3 py-1.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Editar
            </Link>
            <button onClick={handleDelete} disabled={isPending}
              className={`px-3 py-1.5 text-sm font-semibold rounded-lg border transition-colors ${
                confirmDelete
                  ? "bg-destructive text-destructive-foreground border-destructive"
                  : "bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20"
              }`}>
              {isPending ? "..." : confirmDelete ? "¿Confirmar?" : "Eliminar"}
            </button>
            {confirmDelete && (
              <button onClick={() => setConfirmDelete(false)}
                className="px-3 py-1.5 text-sm text-muted-foreground border border-border rounded-lg hover:bg-muted transition-colors">
                Cancelar
              </button>
            )}
          </>
        ) : (
          <span className="text-xs text-muted-foreground/60 italic">
            Solo lectura — usala al asignar lecciones
          </span>
        )}
      </div>
    </div>
  )
}