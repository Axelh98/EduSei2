"use client"

import { cn } from "@/lib/utils"
import type { Question } from "@/lib/types"
import { CheckCircle2, XCircle } from "lucide-react"
import { useEffect, useRef } from "react"

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  selectedAnswer: number | null
  hasSubmitted: boolean
  onSelectAnswer: (index: number) => void
}

function useAnswerAnimation(hasSubmitted: boolean, isCorrect: boolean) {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!hasSubmitted || !ref.current) return
    const el = ref.current

    if (isCorrect) {
      el.animate(
        [
          { transform: "scale(1)",    backgroundColor: "transparent" },
          { transform: "scale(1.02)", backgroundColor: "rgba(34,197,94,0.08)" },
          { transform: "scale(1)",    backgroundColor: "transparent" },
        ],
        { duration: 400, easing: "ease-out" }
      )
    } else {
      el.animate(
        [
          { transform: "translateX(0)"    },
          { transform: "translateX(-6px)" },
          { transform: "translateX(5px)"  },
          { transform: "translateX(-4px)" },
          { transform: "translateX(3px)"  },
          { transform: "translateX(0)"    },
        ],
        { duration: 320, easing: "ease-out" }
      )
    }
  }, [hasSubmitted, isCorrect])

  return ref
}

function AnswerOption({
  option,
  index,
  isSelected,
  hasSubmitted,
  isCorrect,
  showCorrect,
  showIncorrect,
  onSelect,
}: {
  option: string
  index: number
  isSelected: boolean
  hasSubmitted: boolean
  isCorrect: boolean
  showCorrect: boolean
  showIncorrect: boolean
  onSelect: () => void
}) {
  const ref = useAnswerAnimation(
    hasSubmitted && (showCorrect || showIncorrect),
    showCorrect
  )

  return (
    <button
      ref={ref}
      onClick={onSelect}
      disabled={hasSubmitted}
      className={cn(
        // Base: bordes redondeados más generosos, padding equilibrado
        "flex items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left text-sm font-medium",
        "transition-all duration-150 md:text-base",
        // Estado idle — sin selección
        !hasSubmitted && !isSelected &&
          "border-border bg-background text-foreground hover:border-primary/40 hover:bg-muted/40",
        // ↑ micro-lift al seleccionar antes de verificar
        !hasSubmitted && isSelected &&
          "border-primary bg-primary/5 text-foreground ring-1 ring-primary scale-[1.01]",
        // Post-verificación: correcto
        showCorrect &&
          "border-success/60 bg-success/5 text-foreground shadow-[0_0_0_1px_rgba(34,197,94,0.2)]",
        // Post-verificación: incorrecto
        showIncorrect &&
          "border-destructive/60 bg-destructive/5 text-foreground",
        // Opciones no involucradas post-verificación
        hasSubmitted && !showCorrect && !showIncorrect &&
          "border-border bg-background text-muted-foreground opacity-50 cursor-default"
      )}
    >
      {/* Badge de letra — más grande, monoespaciado, con más presencia */}
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          "font-mono text-xs font-black tracking-tight transition-all duration-150",
          !hasSubmitted && !isSelected && "border border-border text-muted-foreground",
          !hasSubmitted && isSelected  && "border-0 bg-primary text-primary-foreground shadow-sm",
          showCorrect  && "border-0 bg-success text-success-foreground",
          showIncorrect && "border-0 bg-destructive text-destructive-foreground",
          hasSubmitted && !showCorrect && !showIncorrect && "border border-border/50 text-muted-foreground/50"
        )}
      >
        {showCorrect ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : showIncorrect ? (
          <XCircle className="h-4 w-4" />
        ) : (
          String.fromCharCode(65 + index)
        )}
      </span>
      <span className="leading-snug">{option}</span>
    </button>
  )
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  hasSubmitted,
  onSelectAnswer,
}: QuestionCardProps) {
  const progress = (questionNumber / totalQuestions) * 100

  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8">

      {/* Progress indicator */}
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          Pregunta{" "}
          <span className="tabular-nums font-bold text-foreground">{questionNumber}</span>
          {" "}de{" "}
          <span className="tabular-nums">{totalQuestions}</span>
        </span>
        {/* Contador circular — más carácter que el badge plano */}
        <div
          className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground"
          style={{
            // Anillo de progreso via conic-gradient
            background: `conic-gradient(var(--primary) ${progress}%, transparent ${progress}%)`,
            padding: "2px",
          }}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-card text-[11px] font-black text-foreground">
            {questionNumber}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question */}
      <h3 className="mb-6 font-serif text-xl font-bold leading-relaxed text-foreground md:text-2xl [text-wrap:pretty]">
        {question.question}
      </h3>

      {/* Options */}
      <div className="flex flex-col gap-2.5">
        {question.options.map((option, index) => {
          const isSelected    = selectedAnswer === index
          const isCorrect     = index === question.correctAnswer
          const showCorrect   = hasSubmitted && isCorrect
          const showIncorrect = hasSubmitted && isSelected && !isCorrect

          return (
            <AnswerOption
              key={index}
              option={option}
              index={index}
              isSelected={isSelected}
              hasSubmitted={hasSubmitted}
              isCorrect={isCorrect}
              showCorrect={showCorrect}
              showIncorrect={showIncorrect}
              onSelect={() => !hasSubmitted && onSelectAnswer(index)}
            />
          )
        })}
      </div>

      {/* Reference after submit */}
      {hasSubmitted && question.reference && (
        <div className="mt-5 animate-in fade-in slide-in-from-bottom-2 duration-300 rounded-xl border border-border/60 bg-muted/40 px-4 py-3.5">
          <p className="text-sm text-muted-foreground [text-wrap:pretty]">
            <span className="font-bold text-foreground">Referencia: </span>
            {question.reference}
          </p>
        </div>
      )}
    </div>
  )
}