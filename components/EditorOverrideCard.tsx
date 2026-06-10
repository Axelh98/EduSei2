"use client"
// components/EditorOverrideCard.tsx

import Link from "next/link"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { X, BookOpen, MessageSquare, FileText, HelpCircle, Sparkles, Eye, Copy, Globe, Lock } from "lucide-react"
import { deleteOverride, duplicateOverride, toggleOverrideVisibility } from "@/actions/overrides"
import type { LessonOverride } from "@/actions/overrides"
import type { Seccion, Question } from "@/lib/types"

interface Props {
  override: LessonOverride
  isOwn:    boolean
}

// ── Tipos de sección ──────────────────────────────────────────

const TIPO_ICON: Record<string, React.ElementType> = {
  contexto:     BookOpen,
  enseñanza:    MessageSquare,
  escrituras:   FileText,
  conclusion:   Sparkles,
  cuestionario: HelpCircle,
  resumen:      FileText,
}

const TIPO_LABEL: Record<string, string> = {
  contexto:     "Contexto",
  enseñanza:    "Enseñanza",
  escrituras:   "Escrituras",
  conclusion:   "Conclusión",
  cuestionario: "Cuestionario",
  resumen:      "Resumen",
}

// ── Preview de una sección ────────────────────────────────────

function SeccionPreviewItem({ sec }: { sec: Seccion }) {
  const Icon = TIPO_ICON[sec.tipo] ?? BookOpen
  const label = TIPO_LABEL[sec.tipo] ?? sec.tipo

  let preview = ""
  switch (sec.tipo) {
    case "contexto":
    case "conclusion":
      preview = sec.contenido?.slice(0, 200).trim() ?? ""
      if (sec.contenido && sec.contenido.length > 200) preview += "…"
      break
    case "enseñanza":
      preview = sec.texto
        ? `"${sec.texto.slice(0, 150).trim()}${sec.texto.length > 150 ? "…" : ""}" — ${sec.autor ?? ""}`
        : ""
      break
    case "escrituras":
      preview = sec.citas?.map(c => c.referencia).filter(Boolean).join(", ") ?? ""
      break
    case "cuestionario":
      preview = sec.preguntas?.slice(0, 2).join(" / ") ?? ""
      break
    default:
      preview = ""
  }

  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 flex-shrink-0 mt-0.5">
        <Icon className="h-3.5 w-3.5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground mb-0.5">
          {label}
        </p>
        {preview ? (
          <p className="text-xs text-foreground leading-relaxed">{preview}</p>
        ) : (
          <p className="text-xs text-muted-foreground italic">Sin contenido</p>
        )}
      </div>
    </div>
  )
}

// ── Modal de vista de detalle ─────────────────────────────────

function OverrideDetailModal({
  override,
  onClose,
  onDuplicate,
  isDuplicating,
}: {
  override: LessonOverride
  onClose: () => void
  onDuplicate: () => void
  isDuplicating: boolean
}) {
  const secciones: Seccion[]  = Array.isArray(override.secciones) ? override.secciones as Seccion[] : []
  const questions: Question[] = Array.isArray(override.questions)  ? override.questions as Question[] : []

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-150"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg mx-4 animate-in fade-in slide-in-from-bottom-4 duration-200 sm:slide-in-from-bottom-0 sm:zoom-in-95">
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[85dvh] flex flex-col">

          {/* Header */}
          <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-border flex-shrink-0">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">
                {override.lesson_id}
              </p>
              <h2 className="font-serif text-base font-bold text-foreground leading-snug">
                {override.title || `Versión de ${override.lesson_id}`}
              </h2>
              {override.profiles && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  por {override.profiles.full_name}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Contenido */}
          <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">

            {secciones.length > 0 && (
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Secciones · {secciones.length}
                </p>
                <div className="flex flex-col gap-2">
                  {secciones.map((sec, i) => (
                    <SeccionPreviewItem key={i} sec={sec} />
                  ))}
                </div>
              </div>
            )}

            {questions.length > 0 && (
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Preguntas del quiz · {questions.length}
                </p>
                <div className="flex flex-col gap-2">
                  {questions.map((q, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
                      <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md bg-secondary/10 text-secondary text-[10px] font-extrabold mt-0.5">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className={`inline-block text-[10px] font-bold uppercase tracking-wide rounded px-1.5 py-0.5 mb-1 ${
                          q.type === "truefalse"
                            ? "bg-muted text-muted-foreground"
                            : "bg-secondary/10 text-secondary"
                        }`}>
                          {q.type === "truefalse" ? "V/F" : "Múltiple"}
                        </span>
                        <p className="text-xs text-foreground leading-relaxed">{q.question}</p>
                        {q.options && (
                          <div className="mt-1.5 flex flex-col gap-1">
                            {q.options.map((opt, oi) => (
                              <p key={oi} className={`text-[11px] leading-snug ${
                                q.correctAnswer === oi
                                  ? "text-success font-semibold"
                                  : "text-muted-foreground"
                              }`}>
                                {q.correctAnswer === oi ? "✓ " : "○ "}{opt}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {secciones.length === 0 && questions.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-8">
                Esta versión no tiene contenido cargado.
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3 px-5 py-4 border-t border-border flex-shrink-0 bg-muted/20">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 text-sm font-semibold border border-border rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              Cerrar
            </button>
            <button
              type="button"
              onClick={onDuplicate}
              disabled={isDuplicating}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
            >
              <Copy className="h-4 w-4" />
              {isDuplicating ? "Duplicando…" : "Duplicar y editar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Tarjeta principal ─────────────────────────────────────────

export function EditorOverrideCard({ override, isOwn }: Props) {
  const router = useRouter()
  const [isPending,     startTransition]   = useTransition()
  const [isDuplicating, startDuplicating]  = useTransition()
  const [isToggling,    startToggling]     = useTransition()
  const [confirmDelete, setConfirmDelete]  = useState(false)
  const [showDetail,    setShowDetail]     = useState(false)

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

  function handleDuplicate() {
    startDuplicating(async () => {
      const result = await duplicateOverride(override.id)
      if ("id" in result) {
        setShowDetail(false)
        router.push(`/editor/nuevo/${result.id}`)
      }
    })
  }

  function handleToggleVisibility() {
    startToggling(async () => {
      await toggleOverrideVisibility(override.id)
      router.refresh()
    })
  }

  return (
    <>
      <div className={`flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all duration-200 ${
        override.is_public ? "border-t-[3px] border-t-secondary" : "border-t-[3px] border-t-border"
      }`}>

        {/* Badge de visibilidad — para versiones propias es un toggle */}
        <div className="px-4 pt-4 pb-0">
          {isOwn ? (
            <button
              type="button"
              onClick={handleToggleVisibility}
              disabled={isToggling}
              title={override.is_public ? "Pasar a privada" : "Pasar a pública"}
              className={`inline-flex items-center gap-1.5 text-[11px] font-semibold rounded-full px-2.5 py-1 border transition-colors disabled:opacity-50 ${
                override.is_public
                  ? "border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20"
                  : "border-border bg-muted/40 text-muted-foreground hover:bg-muted"
              }`}
            >
              {override.is_public
                ? <><Globe className="h-3 w-3" /> Pública</>
                : <><Lock className="h-3 w-3" /> Privada</>}
              <span className="text-[10px] opacity-60">{isToggling ? "…" : "· cambiar"}</span>
            </button>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
              <Globe className="h-3 w-3" /> Pública
            </span>
          )}
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
              <Link href={`/editor/nuevo/${override.id}`}
                className="px-3 py-1.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Editar
              </Link>
              <button
                type="button"
                onClick={handleDuplicate}
                disabled={isDuplicating}
                title="Crear una variante de esta versión"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold border border-border rounded-lg text-muted-foreground hover:border-primary/40 hover:text-foreground disabled:opacity-60 transition-colors"
              >
                <Copy className="h-3.5 w-3.5" />
                {isDuplicating ? "…" : "Duplicar"}
              </button>
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
            <>
              <button
                type="button"
                onClick={() => setShowDetail(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold border border-border rounded-lg text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                <Eye className="h-3.5 w-3.5" />
                Ver
              </button>
              <button
                type="button"
                onClick={handleDuplicate}
                disabled={isDuplicating}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-60 transition-colors"
              >
                <Copy className="h-3.5 w-3.5" />
                {isDuplicating ? "…" : "Duplicar"}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Modal de detalle */}
      {showDetail && (
        <OverrideDetailModal
          override={override}
          onClose={() => setShowDetail(false)}
          onDuplicate={handleDuplicate}
          isDuplicating={isDuplicating}
        />
      )}
    </>
  )
}