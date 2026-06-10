"use client"
// components/editor/EditorForm.tsx

import { useState, useTransition, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Eye, AlertTriangle, History, Eraser, Save } from "lucide-react"
import { LessonSelector }  from "./LessonSelector"
import { SeccionEditor }   from "./SeccionEditor"
import { QuestionEditor }  from "./QuestionEditor"
import { LessonPreview }   from "./Lessonpreview"
import { StudentPreview }  from "./StudentPreview"
import { EditorGuide, useEditorGuide } from "./Editorguide"
import { useEditorState }  from "./useEditorState"
import { useDraft }        from "./useDraft"
import { validateLesson }  from "./validateLesson"
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
  const [error, setError]             = useState<string | null>(null)
  const [showAddMenu, setShowAddMenu] = useState(false)
  const [activeTab, setActiveTab]     = useState<"secciones" | "preguntas">("secciones")
  const [originalLesson, setOriginalLesson] = useState<OriginalLesson | null>(null)
  const [showStudentPreview, setShowStudentPreview] = useState(false)
  const [validationIssues, setValidationIssues] = useState<string[] | null>(null)
  const [startedBlank, setStartedBlank] = useState(false)

  // Tracking por índice de origen: qué partes del original ya están en el editor
  const [loadedSeccionIdx,  setLoadedSeccionIdx]  = useState<Set<number>>(new Set())
  const [loadedQuestionIdx, setLoadedQuestionIdx] = useState<Set<number>>(new Set())

  const { showGuide, dismissGuide } = useEditorGuide()

  const {
    state, isDirty, markClean, setField, replaceState, loadFromLesson,
    addSeccion, addSeccionExistente, updateSeccion, removeSeccion, moveSeccion,
    addQuestion, addQuestionExistente, updateQuestion, removeQuestion,
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
  const savedRef  = useRef(false) // evita la guarda de salida después de guardar

  // ── Borrador local (red de seguridad) ─────────────────────
  const draftKey = isEditing ? `existing-${existing!.id}` : "nuevo"
  const { pendingDraft, clearDraft, consumeDraft } = useDraft(draftKey, state, isDirty)

  function handleRestoreDraft() {
    const draft = consumeDraft()
    if (!draft) return
    replaceState(draft)
    // Tras restaurar, asumimos que todo el original "puede" estar cargado;
    // dejamos los sets como están y el maestro carga lo que falte.
  }

  // ── Aviso al cerrar pestaña / recargar con cambios sin guardar ──
  useEffect(() => {
    function handler(e: BeforeUnloadEvent) {
      if (isDirty && !savedRef.current) {
        e.preventDefault()
        e.returnValue = ""
      }
    }
    window.addEventListener("beforeunload", handler)
    return () => window.removeEventListener("beforeunload", handler)
  }, [isDirty])

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

    // Instituto (FlatCategory): secciones directamente en la lección.
    // Seminario: getFullLesson fusiona con EXTENDED_CONTENT_MAP.
    let secciones: Seccion[] = (lesson.secciones ?? []) as Seccion[]

    if (!isFlatCategory(category)) {
      const fullLesson = getFullLesson(state.categoryId, state.lessonId)
      if (fullLesson?.secciones?.length) {
        secciones = fullLesson.secciones as Seccion[]
      }
    }

    setOriginalLesson({ title: lesson.title, secciones, questions })
  }, [state.categoryId, state.lessonId])

  // ── Auto-carga del original (lo que promete la guía) ──────
  // Al elegir lección en una versión nueva, traemos el contenido
  // original automáticamente. "Empezar en blanco" lo deshace.
  useEffect(() => {
    if (isEditing || !originalLesson || pendingDraft || startedBlank) return
    if (state.secciones.length > 0 || state.questions.length > 0) return

    loadFromLesson(originalLesson.secciones, originalLesson.questions)
    setLoadedSeccionIdx(new Set(originalLesson.secciones.map((_, i) => i)))
    setLoadedQuestionIdx(new Set(originalLesson.questions.map((_, i) => i)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalLesson, pendingDraft, startedBlank, isEditing])

  function handleLessonChange(cat: string, les: string) {
    setField("categoryId", cat)
    setField("lessonId", les)
    if (!isEditing) {
      setField("secciones", [])
      setField("questions", [])
      setLoadedSeccionIdx(new Set())
      setLoadedQuestionIdx(new Set())
      setStartedBlank(false) // nueva lección, nuevo default: auto-cargar
    }
  }

  function handleStartBlank() {
    setField("secciones", [])
    setField("questions", [])
    setLoadedSeccionIdx(new Set())
    setLoadedQuestionIdx(new Set())
    setStartedBlank(true)
  }

  // ── Handlers para LessonPreview (por índice de origen) ────
  function handleLoadAll() {
    if (!originalLesson) return
    loadFromLesson(originalLesson.secciones, originalLesson.questions)
    setLoadedSeccionIdx(new Set(originalLesson.secciones.map((_, i) => i)))
    setLoadedQuestionIdx(new Set(originalLesson.questions.map((_, i) => i)))
  }

  function handleLoadSecciones() {
    if (!originalLesson) return
    const missing = originalLesson.secciones.filter((_, i) => !loadedSeccionIdx.has(i))
    missing.forEach(addSeccionExistente)
    setLoadedSeccionIdx(new Set(originalLesson.secciones.map((_, i) => i)))
  }

  function handleLoadQuestions() {
    if (!originalLesson) return
    originalLesson.questions.forEach((q, i) => {
      if (!loadedQuestionIdx.has(i)) addQuestionExistente(q)
    })
    setLoadedQuestionIdx(new Set(originalLesson.questions.map((_, i) => i)))
  }

  function handleLoadSeccion(i: number) {
    if (!originalLesson) return
    addSeccionExistente(originalLesson.secciones[i])
    setLoadedSeccionIdx(prev => new Set(prev).add(i))
  }

  function handleLoadQuestion(i: number) {
    if (!originalLesson) return
    addQuestionExistente(originalLesson.questions[i])
    setLoadedQuestionIdx(prev => new Set(prev).add(i))
  }

  // ── Drag & drop de secciones (nativo, sin dependencias) ───
  const [dragIdx, setDragIdx]         = useState<number | null>(null)
  const [dragEnabled, setDragEnabled] = useState<number | null>(null)

  // ── Guardar ───────────────────────────────────────────────
  const doSave = useCallback(() => {
    setError(null)
    setValidationIssues(null)

    const formData = new FormData()
    formData.set("category_id", state.categoryId)
    formData.set("lesson_id",   state.lessonId)
    formData.set("title",       state.title)
    formData.set("secciones",   JSON.stringify(state.secciones))
    formData.set("questions",   JSON.stringify(state.questions))
    formData.set("is_public",   String(state.isPublic))

    startTransition(async () => {
      const result = isEditing
        ? await updateOverride(existing!.id, formData)
        : await createOverride(formData)
      if ("error" in result && result.error) { setError(result.error); return }
      savedRef.current = true
      markClean()
      clearDraft()
      router.push("/editor")
    })
  }, [state, isEditing, existing, router, markClean, clearDraft])

  function handleSubmit() {
    setError(null)
    if (!state.categoryId || !state.lessonId) {
      setError("Seleccioná un curso y una lección antes de guardar.")
      return
    }
    const issues = validateLesson(state)
    if (issues.length > 0) {
      setValidationIssues(issues)
      return
    }
    doSave()
  }

  function handleCancel() {
    if (isDirty && !savedRef.current) {
      const ok = window.confirm(
        "Tenés cambios sin guardar. Quedó un borrador guardado en este dispositivo, " +
        "pero los cambios no se publicaron.\n\n¿Salir igual?"
      )
      if (!ok) return
    }
    router.push("/editor")
  }

  // ── Mostrar guía si es creación nueva ─────────────────────
  if (!isEditing && showGuide) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] min-h-[calc(100dvh-52px)]">
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
        <EditorGuide onDismiss={dismissGuide} />
      </div>
    )
  }

  const seccionTabEmpty  = activeTab === "secciones" && state.secciones.length === 0
  const questionTabEmpty = activeTab === "preguntas" && state.questions.length === 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] min-h-[calc(100dvh-52px)]">

      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside className="bg-card border-b lg:border-b-0 lg:border-r border-border lg:sticky lg:top-[52px] lg:h-[calc(100dvh-52px)] lg:overflow-y-auto">
        <div className="flex flex-col gap-6 p-6">

          <div className="flex items-center justify-between gap-2">
            <h2 className="font-serif text-xl font-bold text-foreground tracking-tight">
              {isEditing ? "Editar versión" : "Nueva versión"}
            </h2>
            {isDirty && !savedRef.current && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-secondary bg-secondary/10 rounded-full px-2 py-1">
                Sin guardar
              </span>
            )}
          </div>

          {/* Lección base */}
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Lección base
            </p>
            <LessonSelector
              categoryId={state.categoryId}
              lessonId={state.lessonId}
              onChange={handleLessonChange}
              disabled={isEditing}
            />
            {isEditing && (
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                La lección no se puede cambiar después de crear la versión.
                Si necesitás otra lección, creá una versión nueva.
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

          {/* Acciones (desktop) */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setShowStudentPreview(true)}
              disabled={state.secciones.length === 0 && state.questions.length === 0}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold border border-border rounded-xl text-foreground hover:border-primary/40 hover:bg-muted/40 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Eye className="h-4 w-4" />
              Ver como alumno
            </button>
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
              onClick={handleCancel}
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
                className={`flex items-center gap-2 px-4 sm:px-6 py-4 text-sm font-semibold border-b-2 -mb-px transition-colors ${
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
        <div className="flex-1 flex flex-col gap-4 p-4 sm:p-6 lg:p-8 max-w-3xl pb-28 lg:pb-20">

          {/* Banner: borrador recuperable */}
          {pendingDraft && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-3.5 rounded-xl border border-secondary/30 bg-secondary/5 animate-in fade-in duration-200">
              <div className="flex items-start gap-2.5 flex-1">
                <History className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Encontramos un borrador sin guardar
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Guardado el {new Date(pendingDraft.savedAt).toLocaleString("es-AR", {
                      day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
                    })}. Podés retomarlo o descartarlo.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={clearDraft}
                  className="px-3 py-2 text-xs font-semibold border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  Descartar
                </button>
                <button
                  type="button"
                  onClick={handleRestoreDraft}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all active:scale-[0.98]"
                >
                  Restaurar borrador
                </button>
              </div>
            </div>
          )}

          {/* Panel de contenido original */}
          {originalLesson && !isEditing && (
            <>
              <LessonPreview
                lesson={originalLesson}
                loadedSeccionIdx={loadedSeccionIdx}
                loadedQuestionIdx={loadedQuestionIdx}
                onLoadAll={handleLoadAll}
                onLoadSecciones={handleLoadSecciones}
                onLoadQuestions={handleLoadQuestions}
                onLoadSeccion={handleLoadSeccion}
                onLoadQuestion={handleLoadQuestion}
              />
              {(state.secciones.length > 0 || state.questions.length > 0) && (
                <button
                  type="button"
                  onClick={handleStartBlank}
                  className="self-start flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors"
                >
                  <Eraser className="h-3.5 w-3.5" />
                  Vaciar y empezar en blanco
                </button>
              )}
            </>
          )}

          {/* Empty states */}
          {seccionTabEmpty && !originalLesson && (
            <div className="py-16 text-center border-2 border-dashed border-border rounded-2xl bg-card">
              <div className="text-4xl mb-3">📄</div>
              <p className="font-serif text-lg font-bold text-foreground mb-1">Sin secciones todavía</p>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                Seleccioná una lección en el panel izquierdo para traer su contenido original, o agregá secciones desde cero.
              </p>
            </div>
          )}
          {seccionTabEmpty && originalLesson && (
            <div className="py-8 text-center border-2 border-dashed border-border rounded-2xl bg-card">
              <p className="text-sm text-muted-foreground">
                Cargá secciones del contenido original de arriba, o agregá nuevas desde cero.
              </p>
            </div>
          )}
          {questionTabEmpty && (
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
              <div
                key={i}
                draggable={dragEnabled === i}
                onDragStart={() => setDragIdx(i)}
                onDragOver={e => e.preventDefault()}
                onDrop={() => {
                  if (dragIdx !== null && dragIdx !== i) moveSeccion(dragIdx, i)
                  setDragIdx(null)
                  setDragEnabled(null)
                }}
                onDragEnd={() => { setDragIdx(null); setDragEnabled(null) }}
                className={`transition-opacity ${dragIdx === i ? "opacity-40" : ""}`}
              >
                <SeccionEditor
                  seccion={sec} index={i} total={state.secciones.length}
                  onChange={s => updateSeccion(i, s)}
                  onRemove={() => removeSeccion(i)}
                  onMoveUp={() => moveSeccion(i, i - 1)}
                  onMoveDown={() => moveSeccion(i, i + 1)}
                  dragHandleProps={{
                    onMouseDown:  () => setDragEnabled(i),
                    onMouseUp:    () => setDragEnabled(null),
                    onTouchStart: () => setDragEnabled(i),
                  }}
                />
              </div>
            ))}
            {activeTab === "preguntas" && state.questions.map((q, i) => (
              <QuestionEditor
                key={q.id ?? i} question={q} index={i} total={state.questions.length}
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
                <div className="absolute bottom-full left-0 mb-2 bg-card border border-border rounded-xl shadow-lg z-20 min-w-[280px] overflow-hidden animate-in fade-in slide-in-from-bottom-1 duration-100">
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

      {/* ── Barra de guardado en mobile (siempre visible) ──── */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 flex items-center gap-3 px-4 py-3 bg-card/95 backdrop-blur-md border-t border-border">
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] text-muted-foreground truncate">
            {state.secciones.length} secc. · {state.questions.length} preg.
          </span>
          {isDirty && !savedRef.current && (
            <span className="text-[10px] font-bold uppercase tracking-wide text-secondary">Sin guardar</span>
          )}
        </div>
        <button
          type="button"
          onClick={() => setShowStudentPreview(true)}
          disabled={state.secciones.length === 0 && state.questions.length === 0}
          className="ml-auto flex items-center justify-center w-10 h-10 rounded-xl border border-border text-foreground disabled:opacity-40 transition-colors"
          title="Ver como alumno"
        >
          <Eye className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isPending}
          className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-all active:scale-[0.98]"
        >
          <Save className="h-4 w-4" />
          {isPending ? "Guardando..." : "Guardar"}
        </button>
      </div>

      {/* ── Modal: vista del alumno ───────────────────────── */}
      {showStudentPreview && (
        <StudentPreview
          title={state.title || originalLesson?.title || "Lección"}
          secciones={state.secciones}
          questions={state.questions}
          onClose={() => setShowStudentPreview(false)}
        />
      )}

      {/* ── Modal: avisos de validación ───────────────────── */}
      {validationIssues && (
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-150"
            onClick={() => setValidationIssues(null)}
          />
          <div className="relative w-full max-w-md mx-4 animate-in fade-in slide-in-from-bottom-4 duration-200 sm:slide-in-from-bottom-0 sm:zoom-in-95">
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[80dvh] flex flex-col">
              <div className="flex items-center gap-2.5 px-5 py-4 border-b border-border flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <h2 className="font-serif text-base font-bold text-foreground">
                    Hay contenido incompleto
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Podés guardar igual, pero los alumnos verían estos huecos:
                  </p>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-4">
                <ul className="flex flex-col gap-2">
                  {validationIssues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                      <span className="text-secondary font-bold flex-shrink-0 mt-px">•</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-3 px-5 py-4 border-t border-border flex-shrink-0 bg-muted/20">
                <button
                  type="button"
                  onClick={() => setValidationIssues(null)}
                  className="flex-1 py-2.5 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]"
                >
                  Revisar y corregir
                </button>
                <button
                  type="button"
                  onClick={doSave}
                  disabled={isPending}
                  className="flex-1 py-2.5 text-sm font-semibold border border-border rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 transition-colors"
                >
                  {isPending ? "Guardando..." : "Guardar igual"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}