"use client"
// components/override-picker.tsx
// Modal que aparece cuando el maestro va a compartir lecciones.
// Permite elegir qué versión (override) usar para cada lección seleccionada.
// Hace fetch anónimo de los overrides disponibles para cada lección.

import { useState, useEffect } from "react"
import { X, Check, BookOpen, Globe, Lock, ChevronDown, Loader2 } from "lucide-react"

const SUPABASE_URL      = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// ── Tipos ─────────────────────────────────────────────────────

interface LessonItem {
  categoryId: string
  lessonId:   string
  title:      string
}

interface OverrideOption {
  id:          string
  title:       string | null
  is_public:   boolean
  author_name: string
  seccionCount: number
  questionCount: number
}

interface OverrideSelection {
  [lessonKey: string]: string | null  // lessonKey → overrideId | null (original)
}

interface Props {
  lessons:  LessonItem[]
  onShare:  (selections: OverrideSelection) => void
  onCancel: () => void
}

// ── Fetch de overrides disponibles para una lección ───────────

async function fetchOverridesForLesson(
  categoryId: string,
  lessonId:   string
): Promise<OverrideOption[]> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return []

  try {
    const url = `${SUPABASE_URL}/rest/v1/lesson_overrides?category_id=eq.${encodeURIComponent(categoryId)}&lesson_id=eq.${encodeURIComponent(lessonId)}&is_public=eq.true&select=id,title,is_public,secciones,questions,profiles(full_name)`

    const res = await fetch(url, {
      headers: {
        "apikey":        SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Accept":        "application/json",
      },
      cache: "no-store",
    })

    if (!res.ok) return []
    const data = await res.json()

    return data.map((row: any) => ({
      id:            row.id,
      title:         row.title,
      is_public:     row.is_public,
      author_name:   row.profiles?.full_name ?? "Desconocido",
      seccionCount:  Array.isArray(row.secciones) ? row.secciones.length : 0,
      questionCount: Array.isArray(row.questions)  ? row.questions.length  : 0,
    }))
  } catch {
    return []
  }
}

// ── Componente selector de una lección ───────────────────────

function LessonOverrideRow({
  lesson,
  selected,
  onSelect,
}: {
  lesson:   LessonItem
  selected: string | null  // null = original, string = overrideId
  onSelect: (overrideId: string | null) => void
}) {
  const [overrides, setOverrides] = useState<OverrideOption[]>([])
  const [loading, setLoading]     = useState(true)
  const [open, setOpen]           = useState(false)
  const lessonKey = `${lesson.categoryId}-${lesson.lessonId}`

  useEffect(() => {
    fetchOverridesForLesson(lesson.categoryId, lesson.lessonId).then(data => {
      setOverrides(data)
      setLoading(false)
    })
  }, [lesson.categoryId, lesson.lessonId])

  const selectedOverride = overrides.find(o => o.id === selected)
  const hasOverrides     = overrides.length > 0

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      {/* Nombre de la lección */}
      <div className="flex items-start gap-3 px-4 py-3 bg-muted/30 border-b border-border">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0 mt-0.5">
          <BookOpen className="h-3.5 w-3.5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
            {lesson.categoryId}
          </p>
          <p className="text-sm font-semibold text-foreground leading-snug">
            {lesson.title}
          </p>
        </div>
      </div>

      {/* Selector de versión */}
      <div className="px-4 py-3">
        {loading ? (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            Buscando versiones personalizadas...
          </div>
        ) : !hasOverrides ? (
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold">
              <Check className="h-3.5 w-3.5" />
              Versión original
            </span>
            <span className="text-xs text-muted-foreground">
              No hay versiones personalizadas para esta lección
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              ¿Qué versión querés asignar?
            </p>

            {/* Opción: original */}
            <button
              type="button"
              onClick={() => onSelect(null)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left transition-all ${
                selected === null
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-border/80 hover:bg-muted/30"
              }`}
            >
              <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${
                selected === null ? "border-primary bg-primary" : "border-border"
              }`}>
                {selected === null && <Check className="h-3 w-3 text-primary-foreground" />}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Versión original</p>
                <p className="text-xs text-muted-foreground">Contenido estándar del curso</p>
              </div>
            </button>

            {/* Opciones: overrides */}
            {overrides.map(override => (
              <button
                key={override.id}
                type="button"
                onClick={() => onSelect(override.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left transition-all ${
                  selected === override.id
                    ? "border-secondary bg-secondary/5"
                    : "border-border hover:border-border/80 hover:bg-muted/30"
                }`}
              >
                <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${
                  selected === override.id ? "border-secondary bg-secondary" : "border-border"
                }`}>
                  {selected === override.id && <Check className="h-3 w-3 text-secondary-foreground" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {override.title || `Versión personalizada`}
                    </p>
                    <Globe className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    por {override.author_name} · {override.seccionCount} secc. · {override.questionCount} preg.
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Modal principal ───────────────────────────────────────────

export function OverridePicker({ lessons, onShare, onCancel }: Props) {
  const [selections, setSelections] = useState<OverrideSelection>(() =>
    Object.fromEntries(lessons.map(l => [`${l.categoryId}-${l.lessonId}`, null]))
  )

  function handleSelect(categoryId: string, lessonId: string, overrideId: string | null) {
    setSelections(prev => ({ ...prev, [`${categoryId}-${lessonId}`]: overrideId }))
  }

  const customCount = Object.values(selections).filter(v => v !== null).length

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-150"
        onClick={onCancel}
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg mx-4 animate-in fade-in slide-in-from-bottom-4 duration-200 sm:slide-in-from-bottom-0 sm:zoom-in-95">
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[85dvh] flex flex-col">

          {/* Header */}
          <div className="flex items-start justify-between gap-3 px-6 py-5 border-b border-border flex-shrink-0">
            <div>
              <h2 className="font-serif text-lg font-bold text-foreground">
                Asignar lecciones
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {lessons.length} lección{lessons.length !== 1 ? "es" : ""} seleccionada{lessons.length !== 1 ? "s" : ""}
                {customCount > 0 && (
                  <span className="ml-1.5 inline-flex items-center gap-1 text-secondary font-semibold">
                    · {customCount} con versión personalizada
                  </span>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={onCancel}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Lista de lecciones */}
          <div className="overflow-y-auto flex-1 px-6 py-4 flex flex-col gap-3">
            {lessons.map(lesson => (
              <LessonOverrideRow
                key={`${lesson.categoryId}-${lesson.lessonId}`}
                lesson={lesson}
                selected={selections[`${lesson.categoryId}-${lesson.lessonId}`] ?? null}
                onSelect={overrideId => handleSelect(lesson.categoryId, lesson.lessonId, overrideId)}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3 px-6 py-4 border-t border-border flex-shrink-0 bg-muted/20">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-2.5 text-sm font-semibold border border-border rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => onShare(selections)}
              className="flex-1 py-2.5 text-sm font-bold rounded-xl bg-[#25D366] text-white hover:brightness-105 active:scale-[0.98] transition-all"
            >
              Enviar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}