"use client"
// components/editor/LessonPreview.tsx
// Muestra el contenido original de la lección seleccionada.
// El estado "cargada" se trackea por índice de origen (lo maneja
// EditorForm), no por comparación de JSON: así una sección editada
// sigue figurando como traída al editor y no se duplica por error.

import { useState } from "react"
import { Download, BookOpen, MessageSquare, FileText, HelpCircle, Sparkles, ChevronDown, ChevronUp, Check } from "lucide-react"
import type { Seccion, Question } from "@/lib/types"

interface OriginalLesson {
  title:     string
  secciones: Seccion[]
  questions: Question[]
}

interface Props {
  lesson:            OriginalLesson
  loadedSeccionIdx:  Set<number>   // índices del original ya traídos al editor
  loadedQuestionIdx: Set<number>
  onLoadAll:         () => void
  onLoadSecciones:   () => void
  onLoadQuestions:   () => void
  onLoadSeccion:     (index: number) => void
  onLoadQuestion:    (index: number) => void
}

const TIPO_ICON: Record<Seccion["tipo"], React.ElementType> = {
  contexto:     BookOpen,
  enseñanza:    MessageSquare,
  escrituras:   FileText,
  conclusion:   Sparkles,
  cuestionario: HelpCircle,
  resumen:      FileText,
}

const TIPO_LABEL: Record<Seccion["tipo"], string> = {
  contexto:     "Contexto",
  enseñanza:    "Enseñanza",
  escrituras:   "Escrituras",
  conclusion:   "Conclusión",
  cuestionario: "Cuestionario",
  resumen:      "Resumen",
}

// Preview corto del contenido de una sección
function seccionPreview(sec: Seccion): string {
  switch (sec.tipo) {
    case "contexto":
    case "conclusion":
      if (!sec.contenido) return ""
      return sec.contenido.slice(0, 120).trim() + (sec.contenido.length > 120 ? "…" : "")
    case "enseñanza":
      return sec.texto ? `"${sec.texto.slice(0, 100).trim()}…" — ${sec.autor || ""}` : ""
    case "escrituras":
      return sec.citas?.map(c => c.referencia).filter(Boolean).join(", ") || ""
    case "cuestionario":
      return `${sec.preguntas?.length ?? 0} pregunta${(sec.preguntas?.length ?? 0) !== 1 ? "s" : ""}`
    default:
      return ""
  }
}

export function LessonPreview({
  lesson,
  loadedSeccionIdx,
  loadedQuestionIdx,
  onLoadAll,
  onLoadSecciones,
  onLoadQuestions,
  onLoadSeccion,
  onLoadQuestion,
}: Props) {
  const [expandSecciones, setExpandSecciones] = useState(false)
  const [expandQuestions, setExpandQuestions] = useState(false)

  const hasSecciones = lesson.secciones.length > 0
  const hasQuestions = lesson.questions.length > 0

  const loadedSeccionesCount = loadedSeccionIdx.size
  const loadedQuestionsCount = loadedQuestionIdx.size
  const allLoaded =
    loadedSeccionesCount >= lesson.secciones.length &&
    loadedQuestionsCount >= lesson.questions.length

  return (
    <div className="border border-primary/20 bg-primary/[0.02] rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">

      {/* Header */}
      <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-primary/15 bg-primary/[0.03]">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 flex-shrink-0 mt-0.5">
            <BookOpen className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary/70 mb-0.5">
              Contenido original
            </p>
            <h3 className="text-sm font-bold text-foreground leading-snug">
              {lesson.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {lesson.secciones.length} sección{lesson.secciones.length !== 1 ? "es" : ""} · {lesson.questions.length} pregunta{lesson.questions.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Cargar todo */}
        <button
          type="button"
          onClick={onLoadAll}
          disabled={allLoaded}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
            allLoaded
              ? "bg-primary/10 text-primary cursor-default"
              : "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]"
          }`}
        >
          {allLoaded ? (
            <><Check className="h-3.5 w-3.5" /> Cargado</>
          ) : (
            <><Download className="h-3.5 w-3.5" /> Cargar todo</>
          )}
        </button>
      </div>

      <div className="divide-y divide-border/50">

        {/* ── Secciones ─────────────────────────────────────── */}
        {hasSecciones && (
          <div>
            <button
              type="button"
              onClick={() => setExpandSecciones(v => !v)}
              className="flex items-center justify-between w-full px-5 py-3 text-left hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">
                  Secciones de contenido
                </span>
                <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary border border-primary/20">
                  {lesson.secciones.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {loadedSeccionesCount > 0 && (
                  <span className="text-[11px] text-primary font-semibold">
                    {loadedSeccionesCount} cargadas
                  </span>
                )}
                {expandSecciones
                  ? <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  : <ChevronDown className="h-4 w-4 text-muted-foreground" />
                }
              </div>
            </button>

            {expandSecciones && (
              <div className="px-5 pb-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onLoadSecciones}
                  disabled={loadedSeccionesCount >= lesson.secciones.length}
                  className="self-start flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-border rounded-lg text-muted-foreground hover:border-primary/40 hover:text-foreground disabled:opacity-40 disabled:cursor-default transition-colors mb-1"
                >
                  <Download className="h-3 w-3" />
                  Cargar todas las secciones
                </button>

                {lesson.secciones.map((sec, i) => {
                  const Icon = TIPO_ICON[sec.tipo] ?? BookOpen
                  const isLoaded = loadedSeccionIdx.has(i)
                  const preview = seccionPreview(sec)

                  return (
                    <div
                      key={i}
                      className={`flex items-start gap-3 rounded-xl border p-3 transition-colors ${
                        isLoaded
                          ? "border-primary/20 bg-primary/[0.03]"
                          : "border-border bg-card hover:border-border/80"
                      }`}
                    >
                      <div className={`flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0 mt-0.5 ${
                        isLoaded ? "bg-primary/10" : "bg-muted"
                      }`}>
                        <Icon className={`h-3.5 w-3.5 ${isLoaded ? "text-primary" : "text-muted-foreground"}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                            {TIPO_LABEL[sec.tipo]}
                          </span>
                          {isLoaded && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-primary">
                              <Check className="h-2.5 w-2.5" /> En el editor
                            </span>
                          )}
                        </div>
                        {preview && (
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                            {preview}
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => onLoadSeccion(i)}
                        disabled={isLoaded}
                        className={`flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
                          isLoaded
                            ? "text-primary bg-primary/10 cursor-default"
                            : "text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground"
                        }`}
                      >
                        {isLoaded ? <Check className="h-3 w-3" /> : <Download className="h-3 w-3" />}
                        {isLoaded ? "Cargada" : "Cargar"}
                      </button>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* ── Preguntas ──────────────────────────────────────── */}
        {hasQuestions && (
          <div>
            <button
              type="button"
              onClick={() => setExpandQuestions(v => !v)}
              className="flex items-center justify-between w-full px-5 py-3 text-left hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">
                  Preguntas del quiz
                </span>
                <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold bg-secondary/10 text-secondary border border-secondary/20">
                  {lesson.questions.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {loadedQuestionsCount > 0 && (
                  <span className="text-[11px] text-secondary font-semibold">
                    {loadedQuestionsCount} cargadas
                  </span>
                )}
                {expandQuestions
                  ? <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  : <ChevronDown className="h-4 w-4 text-muted-foreground" />
                }
              </div>
            </button>

            {expandQuestions && (
              <div className="px-5 pb-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onLoadQuestions}
                  disabled={loadedQuestionsCount >= lesson.questions.length}
                  className="self-start flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-border rounded-lg text-muted-foreground hover:border-secondary/40 hover:text-foreground disabled:opacity-40 disabled:cursor-default transition-colors mb-1"
                >
                  <Download className="h-3 w-3" />
                  Cargar todas las preguntas
                </button>

                {lesson.questions.map((q, i) => {
                  const isLoaded = loadedQuestionIdx.has(i)
                  const typeLabel = q.type === "truefalse" ? "V/F" : "Múltiple"

                  return (
                    <div
                      key={i}
                      className={`flex items-start gap-3 rounded-xl border p-3 transition-colors ${
                        isLoaded
                          ? "border-secondary/20 bg-secondary/[0.03]"
                          : "border-border bg-card"
                      }`}
                    >
                      <span className={`flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-extrabold mt-0.5 ${
                        isLoaded ? "bg-secondary/15 text-secondary" : "bg-muted text-muted-foreground"
                      }`}>
                        {i + 1}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className={`text-[10px] font-bold uppercase tracking-wide rounded px-1.5 py-0.5 ${
                            isLoaded ? "bg-secondary/10 text-secondary" : "bg-muted text-muted-foreground"
                          }`}>
                            {typeLabel}
                          </span>
                          {isLoaded && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-secondary">
                              <Check className="h-2.5 w-2.5" /> En el editor
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-foreground leading-relaxed line-clamp-2">
                          {q.question}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onLoadQuestion(i)}
                        disabled={isLoaded}
                        className={`flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
                          isLoaded
                            ? "text-secondary bg-secondary/10 cursor-default"
                            : "text-muted-foreground border border-border hover:border-secondary/40 hover:text-foreground"
                        }`}
                      >
                        {isLoaded ? <Check className="h-3 w-3" /> : <Download className="h-3 w-3" />}
                        {isLoaded ? "Cargada" : "Cargar"}
                      </button>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Sin contenido */}
        {!hasSecciones && !hasQuestions && (
          <div className="px-5 py-8 text-center">
            <p className="text-sm text-muted-foreground">
              Esta lección no tiene contenido original cargado todavía.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}