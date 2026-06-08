"use client"
// components/editor/EditorForm.tsx

import { useState, useTransition, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LessonSelector }  from "./LessonSelector"
import { SeccionEditor }   from "./SeccionEditor"
import { QuestionEditor }  from "./QuestionEditor"
import { LessonPreview }   from "./Lessonpreview"
import { EditorGuide, useEditorGuide } from "./Editorguide"
import { useEditorState }  from "./useEditorState"
import { createOverride, updateOverride } from "@/actions/overrides"
import { getFullLesson, getLessonById, isFlatCategory } from "@/lib/quiz-data"
import type { LessonOverride } from "@/actions/overrides"
import type { Seccion, Question } from "@/lib/types"

const TIPOS_SECCION: { tipo: Seccion["tipo"]; label: string; desc: string }[] = [
  { tipo: "contexto",     label: "📖 Contexto",    desc: "Texto introductorio extenso" },
  { tipo: "enseñanza",    label: "💬 Enseñanza",    desc: "Cita de un líder de la Iglesia" },
  { tipo: "escrituras",   label: "📜 Escrituras",   desc: "Una o más citas bíblicas" },
  { tipo: "conclusion",   label: "✨ Conclusión",   desc: "Cierre de la lección" },
  { tipo: "cuestionario", label: "❓ Cuestionario", desc: "Preguntas de reflexión" },
]

interface OriginalLesson {
  title:     string
  secciones: Seccion[]
  questions: Question[]
}

interface Props {
  existing?: LessonOverride
}

export function EditorForm({ existing }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError]            = useState<string | null>(null)
  const [showAddMenu, setShowAddMenu]= useState(false)
  const [activeTab, setActiveTab]    = useState<"secciones" | "preguntas">("secciones")
  const [originalLesson, setOriginalLesson] = useState<OriginalLesson | null>(null)

  const { showGuide, dismissGuide } = useEditorGuide()

  const {
    state, setField, loadFromLesson,
    addSeccion, updateSeccion, removeSeccion, moveSeccion,
    addQuestion, updateQuestion, removeQuestion,
  } = useEditorState(
    existing ? {
      categoryId: existing.category_id,
      lessonId:   existing.lesson_id,
      title:      existing.title ?? "",
      secciones:  existing.secciones,
      questions:  existing.questions,
      isPublic:   existing.is_public,
    } : undefined
  )

  const isEditing = !!existing

  // ── Cargar contenido original cuando cambia la lección ────
  useEffect(() => {
    if (!state.categoryId || !state.lessonId) {
      setOriginalLesson(null)
      return
    }

    const result = getLessonById(state.categoryId, state.lessonId)
    if (!result) { setOriginalLesson(null); return }

    const { lesson, category } = result
    const questions: Question[] = lesson.questions ?? []

    // Para Instituto (FlatCategory): las secciones viven directamente
    // en la lección — las tomamos de ahí.
    // Para Seminario: getFullLesson fusiona con el EXTENDED_CONTENT_MAP
    // (resúmenes enriquecidos). Si no hay resumen extendido, usa las
    // secciones base de la lección (puede ser []).
    let secciones: Seccion[] = (lesson.secciones ?? []) as Seccion[]

    if (!isFlatCategory(category)) {
      // Seminario — intentar obtener las secciones enriquecidas
      const fullLesson = getFullLesson(state.categoryId, state.lessonId)
      if (fullLesson?.secciones?.length) {
        secciones = fullLesson.secciones as Seccion[]
      }
    }

    setOriginalLesson({
      title:     lesson.title,
      secciones,
      questions,
    })
  }, [state.categoryId, state.lessonId])

  // ── Handlers para LessonPreview ───────────────────────────
  function handleLoadAll() {
    if (!originalLesson) return
    loadFromLesson(originalLesson.secciones, originalLesson.questions)
  }

  function handleLoadSecciones() {
    if (!originalLesson) return
    loadFromLesson(originalLesson.secciones, state.questions)
  }

  function handleLoadQuestions() {
    if (!originalLesson) return
    loadFromLesson(state.secciones, originalLesson.questions)
  }

  function handleLoadSeccion(seccion: Seccion) {
    updateSeccion(state.secciones.length, seccion)
    // addSeccion no toma Seccion directamente, así que usamos setField
    setField("secciones", [...state.secciones, seccion])
  }

  function handleLoadQuestion(question: Question) {
    setField("questions", [...state.questions, { ...question, id: state.questions.length + 1 }])
  }

  // ── Submit ────────────────────────────────────────────────
  async function handleSubmit() {
    setError(null)
    if (!state.categoryId || !state.lessonId) {
      setError("Seleccioná un curso y una lección antes de guardar.")
      return
    }
    const formData = new FormData()
    formData.set("category_id", state.categoryId)
    formData.set("lesson_id",   state.lessonId)
    formData.set("title",       state.title)
    formData.set("secciones",   JSON.stringify(state.secciones))
    formData.set("questions",   JSON.stringify(state.questions))
    formData.set("is_public",   String(state.isPublic))

    startTransition(async () => {
      const result = isEditing
        ? await updateOverride(existing.id, formData)
        : await createOverride(formData)
      if ("error" in result && result.error) { setError(result.error); return }
      router.push("/editor")
    })
  }

  // ── Mostrar guía si es creación nueva ─────────────────────
  if (!isEditing && showGuide) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] min-h-[calc(100dvh-52px)]">
        {/* Sidebar bloqueado con vista previa */}
        <aside className="bg-card border-b lg:border-b-0 lg:border-r border-border opacity-40 pointer-events-none select-none">
          <div className="flex flex-col gap-6 p-6">
            <h2 className="font-serif text-xl font-bold text-foreground">Nueva versión</h2>
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Lección base</p>
              <div className="h-10 rounded-lg bg-muted animate-pulse" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Título</p>
              <div className="h-10 rounded-lg bg-muted animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-muted animate-pulse" />
              <div className="h-10 rounded-lg bg-muted animate-pulse" />
            </div>
          </div>
        </aside>
        {/* Guía en el panel principal */}
        <EditorGuide onDismiss={dismissGuide} />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] min-h-[calc(100dvh-52px)]">

      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside className="bg-card border-b lg:border-b-0 lg:border-r border-border lg:sticky lg:top-[52px] lg:h-[calc(100dvh-52px)] lg:overflow-y-auto">
        <div className="flex flex-col gap-6 p-6">

          <h2 className="font-serif text-xl font-bold text-foreground tracking-tight">
            {isEditing ? "Editar versión" : "Nueva versión"}
          </h2>

          {/* Lección base */}
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Lección base
            </p>
            <LessonSelector
              categoryId={state.categoryId}
              lessonId={state.lessonId}
              onChange={(cat, les) => {
                setField("categoryId", cat)
                setField("lessonId", les)
                // Al cambiar lección, limpiar el contenido del editor
                if (!isEditing) {
                  setField("secciones", [])
                  setField("questions", [])
                }
              }}
              disabled={isEditing}
            />
            {isEditing && (
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                La lección no se puede cambiar después de crear el override.
              </p>
            )}
          </div>

          {/* Título personalizado */}
          <div className="flex flex-col gap-2">
            <label htmlFor="ef-title" className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Título{" "}
              <span className="font-normal normal-case tracking-normal italic text-muted-foreground/60">(opcional)</span>
            </label>
            <input
              id="ef-title"
              type="text"
              value={state.title}
              placeholder="Si lo dejás vacío, se usa el título original"
              onChange={e => setField("title", e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Visibilidad */}
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Visibilidad
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: false, label: "🔒 Privada" },
                { value: true,  label: "🌐 Pública"  },
              ].map(({ value, label }) => (
                <button
                  key={String(value)}
                  type="button"
                  onClick={() => setField("isPublic", value)}
                  className={`py-2 px-3 text-sm font-semibold rounded-lg border transition-all ${
                    state.isPublic === value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              {state.isPublic
                ? "Otros maestros pueden verla y usarla al asignar lecciones."
                : "Solo vos podés verla y asignarla a tus alumnos."}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { num: state.secciones.length, label: "secciones" },
              { num: state.questions.length, label: "preguntas" },
            ].map(({ num, label }) => (
              <div key={label} className="bg-muted/50 border border-border rounded-lg p-3 text-center">
                <span className="block text-2xl font-bold font-serif text-foreground">{num}</span>
                <span className="block text-[11px] text-muted-foreground mt-0.5">{label}</span>
              </div>
            ))}
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 px-3 py-2.5 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
              <span className="font-bold">!</span> {error}
            </div>
          )}

          {/* Acciones */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isPending}
              className="w-full py-3 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
            >
              {isPending ? "Guardando..." : isEditing ? "Guardar cambios" : "Crear versión"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/editor")}
              className="w-full py-2.5 text-sm border border-border rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </aside>

      {/* ── Panel principal ──────────────────────────────────── */}
      <main className="flex flex-col min-h-[calc(100dvh-52px)]">

        {/* Tabs */}
        <div className="flex border-b border-border bg-card sticky top-[52px] z-10">
          {(["secciones", "preguntas"] as const).map(tab => {
            const isActive = activeTab === tab
            const count = tab === "secciones" ? state.secciones.length : state.questions.length
            const label = tab === "secciones" ? "Secciones de contenido" : "Preguntas del quiz"
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 -mb-px transition-colors ${
                  isActive
                    ? "text-foreground border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {label}
                <span className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold border transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted border-border text-muted-foreground"
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Contenido */}
        <div className="flex-1 flex flex-col gap-4 p-6 lg:p-8 max-w-3xl pb-20">

          {/* Panel de contenido original — aparece cuando hay lección seleccionada */}
          {originalLesson && !isEditing && (
            <LessonPreview
              lesson={originalLesson}
              onLoadAll={handleLoadAll}
              onLoadSecciones={handleLoadSecciones}
              onLoadQuestions={handleLoadQuestions}
              onLoadSeccion={handleLoadSeccion}
              onLoadQuestion={handleLoadQuestion}
              currentSecciones={state.secciones}
              currentQuestions={state.questions}
            />
          )}

          {/* Empty states */}
          {activeTab === "secciones" && state.secciones.length === 0 && !originalLesson && (
            <div className="py-16 text-center border-2 border-dashed border-border rounded-2xl bg-card">
              <div className="text-4xl mb-3">📄</div>
              <p className="font-serif text-lg font-bold text-foreground mb-1">Sin secciones todavía</p>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                Seleccioná una lección en el panel izquierdo para ver su contenido original, o agregá secciones desde cero.
              </p>
            </div>
          )}
          {activeTab === "secciones" && state.secciones.length === 0 && originalLesson && (
            <div className="py-8 text-center border-2 border-dashed border-border rounded-2xl bg-card">
              <p className="text-sm text-muted-foreground">
                Cargá secciones del contenido original de arriba, o agregá nuevas desde cero.
              </p>
            </div>
          )}
          {activeTab === "preguntas" && state.questions.length === 0 && (
            <div className="py-8 text-center border-2 border-dashed border-border rounded-2xl bg-card">
              <div className="text-3xl mb-2">❓</div>
              <p className="text-sm text-muted-foreground">
                {originalLesson
                  ? "Cargá preguntas del contenido original de arriba, o agregá nuevas."
                  : "Seleccioná una lección o agregá preguntas desde cero."}
              </p>
            </div>
          )}

          {/* Listas */}
          <div className="flex flex-col gap-3">
            {activeTab === "secciones" && state.secciones.map((sec, i) => (
              <SeccionEditor
                key={i} seccion={sec} index={i} total={state.secciones.length}
                onChange={s => updateSeccion(i, s)}
                onRemove={() => removeSeccion(i)}
                onMoveUp={() => moveSeccion(i, i - 1)}
                onMoveDown={() => moveSeccion(i, i + 1)}
              />
            ))}
            {activeTab === "preguntas" && state.questions.map((q, i) => (
              <QuestionEditor
                key={i} question={q} index={i} total={state.questions.length}
                onChange={updated => updateQuestion(i, updated)}
                onRemove={() => removeQuestion(i)}
              />
            ))}
          </div>

          {/* Botón agregar */}
          {(state.secciones.length > 0 || state.questions.length > 0 || originalLesson) && (
            <div className="relative">
              <button
                type="button"
                onClick={() => activeTab === "preguntas" ? addQuestion() : setShowAddMenu(m => !m)}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border-2 border-dashed border-border rounded-xl text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                + Agregar {activeTab === "secciones" ? "sección nueva" : "pregunta nueva"}
              </button>

              {showAddMenu && activeTab === "secciones" && (
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-20 min-w-[280px] overflow-hidden animate-in fade-in slide-in-from-top-1 duration-100">
                  {TIPOS_SECCION.map(({ tipo, label, desc }, idx) => (
                    <button
                      key={tipo}
                      type="button"
                      onClick={() => { addSeccion(tipo); setShowAddMenu(false) }}
                      className={`flex flex-col gap-0.5 w-full px-4 py-3 text-left hover:bg-muted transition-colors ${
                        idx < TIPOS_SECCION.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="text-sm font-semibold text-foreground">{label}</span>
                      <span className="text-xs text-muted-foreground">{desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}