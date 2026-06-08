"use client"
// components/editor/QuestionEditor.tsx

import type { Question } from "@/lib/types"

interface Props {
  question: Question
  index:    number
  total:    number
  onChange: (q: Question) => void
  onRemove: () => void
}

const LETTERS = ["A", "B", "C", "D"]
const inputClass = "w-full px-3 py-2 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"

export function QuestionEditor({ question, index, onChange, onRemove }: Props) {
  const type = question.type ?? "multiple"
  const optionCount = type === "truefalse" ? 2 : 4
  const options = question.options ?? Array(optionCount).fill("")

  function setOption(i: number, val: string) {
    const next = [...options]; next[i] = val
    onChange({ ...question, options: next })
  }

  function handleTypeChange(newType: "multiple" | "truefalse") {
    if (newType === "truefalse") {
      onChange({ ...question, type: newType, options: ["Verdadero", "Falso"], correctAnswer: 0 })
    } else {
      onChange({ ...question, type: newType, options: ["", "", "", ""], correctAnswer: 0 })
    }
  }

  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/40 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center h-5 px-2 rounded bg-secondary text-secondary-foreground text-[10px] font-extrabold tracking-wide">
            P{index + 1}
          </span>
          <div className="flex border border-border rounded-lg overflow-hidden">
            {(["multiple", "truefalse"] as const).map(t => (
              <button key={t} type="button" onClick={() => handleTypeChange(t)}
                className={`px-3 py-1 text-xs font-semibold transition-colors ${
                  type === t
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-muted-foreground hover:text-foreground"
                }`}>
                {t === "multiple" ? "Opción múltiple" : "V / F"}
              </button>
            ))}
          </div>
        </div>
        <button type="button" onClick={onRemove}
          className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-border text-destructive hover:bg-destructive/10 hover:border-destructive/30 text-sm transition-colors">
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-4">

        {/* Enunciado */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
            Pregunta
          </label>
          <textarea value={question.question} rows={2}
            placeholder="Escribí la pregunta..."
            onChange={e => onChange({ ...question, question: e.target.value })}
            className="w-full px-3 py-2.5 text-sm leading-relaxed border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-y transition-all" />
        </div>

        {/* Opciones */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Opciones — clic en el círculo para marcar la correcta
          </label>
          <div className="flex flex-col gap-2">
            {options.slice(0, optionCount).map((opt, i) => {
              const isCorrect = question.correctAnswer === i
              return (
                <div key={i} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border transition-colors ${
                  isCorrect
                    ? "border-success/40 bg-success/5"
                    : "border-border bg-background"
                }`}>
                  <button type="button"
                    onClick={() => onChange({ ...question, correctAnswer: i })}
                    className={`flex-shrink-0 text-lg leading-none transition-colors ${
                      isCorrect ? "text-success" : "text-muted-foreground/40 hover:text-secondary"
                    }`}
                    title="Marcar como correcta">
                    {isCorrect ? "●" : "○"}
                  </button>
                  <span className="text-[11px] font-bold text-muted-foreground w-3.5 flex-shrink-0">
                    {LETTERS[i]}
                  </span>
                  {type === "truefalse" ? (
                    <span className="text-sm text-foreground">{opt}</span>
                  ) : (
                    <input type="text" value={opt}
                      placeholder={`Opción ${LETTERS[i]}...`}
                      onChange={e => setOption(i, e.target.value)}
                      className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/40 outline-none min-w-0" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Referencia y explicación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
              Referencia <span className="font-normal normal-case tracking-normal text-muted-foreground/50">(opcional)</span>
            </label>
            <input type="text" value={question.reference ?? ""}
              placeholder="Éxodo 3:14"
              onChange={e => onChange({ ...question, reference: e.target.value })}
              className={inputClass} />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
              Explicación <span className="font-normal normal-case tracking-normal text-muted-foreground/50">(opcional)</span>
            </label>
            <input type="text" value={question.explanation ?? ""}
              placeholder="Se muestra si el alumno falla..."
              onChange={e => onChange({ ...question, explanation: e.target.value })}
              className={inputClass} />
          </div>
        </div>
      </div>
    </div>
  )
}