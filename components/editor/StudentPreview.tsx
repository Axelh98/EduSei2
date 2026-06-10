"use client"
// components/editor/StudentPreview.tsx
// "Ver como alumno": renderiza la versión tal cual la va a ver el
// estudiante. Da confianza antes de guardar, publicar o asignar.

import { useState } from "react"
import { X, BookOpen, MessageSquare, FileText, Sparkles, HelpCircle, Eye, EyeOff } from "lucide-react"
import type { Seccion, Question } from "@/lib/types"

interface Props {
  title:     string
  secciones: Seccion[]
  questions: Question[]
  onClose:   () => void
}

function SeccionView({ sec }: { sec: Seccion }) {
  switch (sec.tipo) {
    case "contexto":
    case "conclusion":
      return (
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary">
            {sec.tipo === "contexto"
              ? <BookOpen className="h-4 w-4" />
              : <Sparkles className="h-4 w-4" />}
            <h3 className="text-[11px] font-bold uppercase tracking-widest">
              {sec.tipo === "contexto" ? "Contexto" : "Conclusión"}
            </h3>
          </div>
          <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
            {sec.contenido || <span className="italic text-muted-foreground">Sin contenido</span>}
          </p>
        </section>
      )

    case "enseñanza":
      return (
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary">
            <MessageSquare className="h-4 w-4" />
            <h3 className="text-[11px] font-bold uppercase tracking-widest">Enseñanza</h3>
          </div>
          <blockquote className="border-l-2 border-primary/40 pl-4 py-1">
            <p className="font-serif text-base text-foreground leading-relaxed italic">
              "{sec.texto || "…"}"
            </p>
            {(sec.autor || sec.fuente) && (
              <footer className="mt-2 text-xs text-muted-foreground">
                — {sec.autor}{sec.fuente ? `, ${sec.fuente}` : ""}
              </footer>
            )}
          </blockquote>
        </section>
      )

    case "escrituras":
      return (
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary">
            <FileText className="h-4 w-4" />
            <h3 className="text-[11px] font-bold uppercase tracking-widest">Escrituras</h3>
          </div>
          <div className="flex flex-col gap-3">
            {(sec.citas ?? []).map((cita, i) => (
              <div key={i} className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="text-xs font-bold text-primary mb-1">{cita.referencia}</p>
                <p className="text-sm text-foreground leading-relaxed">{cita.texto}</p>
              </div>
            ))}
          </div>
        </section>
      )

    case "cuestionario":
      return (
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary">
            <HelpCircle className="h-4 w-4" />
            <h3 className="text-[11px] font-bold uppercase tracking-widest">Para reflexionar</h3>
          </div>
          <ol className="flex flex-col gap-2">
            {(sec.preguntas ?? []).map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground leading-relaxed">
                <span className="font-bold text-primary flex-shrink-0">{i + 1}.</span>
                {p}
              </li>
            ))}
          </ol>
        </section>
      )

    default:
      return (
        <p className="text-xs text-muted-foreground italic">
          (Sección de tipo "{sec.tipo}" — se muestra con su formato propio en la lección real)
        </p>
      )
  }
}

export function StudentPreview({ title, secciones, questions, onClose }: Props) {
  const [showAnswers, setShowAnswers] = useState(false)

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-150"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl mx-4 animate-in fade-in slide-in-from-bottom-4 duration-200 sm:slide-in-from-bottom-0 sm:zoom-in-95">
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[88dvh] flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-border flex-shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest flex-shrink-0">
                <Eye className="h-3 w-3" />
                Vista del alumno
              </span>
              <h2 className="font-serif text-base font-bold text-foreground truncate">
                {title || "Lección"}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Contenido — simula la página del alumno */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 flex flex-col gap-8 bg-background">

            <h1 className="font-serif text-2xl font-bold text-foreground leading-tight">
              {title || "Lección"}
            </h1>

            {secciones.length === 0 && questions.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-10">
                Esta versión todavía no tiene contenido. El alumno vería una lección vacía.
              </p>
            )}

            {secciones.map((sec, i) => (
              <SeccionView key={i} sec={sec} />
            ))}

            {/* Quiz */}
            {questions.length > 0 && (
              <section className="flex flex-col gap-4 border-t border-border pt-8">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Quiz · {questions.length} pregunta{questions.length !== 1 ? "s" : ""}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowAnswers(v => !v)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    {showAnswers ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                    {showAnswers ? "Ocultar respuestas" : "Mostrar respuestas"}
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {questions.map((q, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-4">
                      <p className="text-sm font-semibold text-foreground mb-3">
                        <span className="text-primary mr-1.5">{i + 1}.</span>
                        {q.question || <span className="italic text-muted-foreground">Sin enunciado</span>}
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {(q.options ?? []).map((opt, oi) => {
                          const isCorrect = showAnswers && q.correctAnswer === oi
                          return (
                            <div key={oi} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border text-sm transition-colors ${
                              isCorrect
                                ? "border-success/40 bg-success/5 text-success font-semibold"
                                : "border-border text-foreground"
                            }`}>
                              <span className={`flex-shrink-0 text-base leading-none ${
                                isCorrect ? "text-success" : "text-muted-foreground/40"
                              }`}>
                                {isCorrect ? "●" : "○"}
                              </span>
                              {opt || <span className="italic text-muted-foreground">Opción vacía</span>}
                            </div>
                          )
                        })}
                      </div>
                      {showAnswers && q.explanation && (
                        <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">Explicación: </span>
                          {q.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border flex-shrink-0 bg-muted/20">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              Volver al editor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}