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

// Hook para disparar animaciones CSS en respuestas
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
      // Shake suave
      el.animate(
        [
          { transform: "translateX(0)"   },
          { transform: "translateX(-6px)" },
          { transform: "translateX(5px)"  },
          { transform: "translateX(-4px)" },
          { transform: "translateX(3px)"  },
          { transform: "translateX(0)"   },
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
        "flex items-center gap-3 rounded-lg border px-4 py-3.5 text-left text-sm font-medium transition-all md:text-base",
        !hasSubmitted && !isSelected &&
          "border-border bg-background text-foreground hover:border-primary/40 hover:bg-muted/50",
        !hasSubmitted && isSelected &&
          "border-primary bg-primary/5 text-foreground ring-1 ring-primary",
        showCorrect &&
          "border-success bg-success/5 text-foreground",
        showIncorrect &&
          "border-destructive bg-destructive/5 text-foreground",
        hasSubmitted && !showCorrect && !showIncorrect &&
          "border-border bg-background text-muted-foreground opacity-60"
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors",
          !hasSubmitted && !isSelected && "border-border text-muted-foreground",
          !hasSubmitted && isSelected  && "border-primary bg-primary text-primary-foreground",
          showCorrect                  && "border-success bg-success text-success-foreground",
          showIncorrect                && "border-destructive bg-destructive text-destructive-foreground",
          hasSubmitted && !showCorrect && !showIncorrect && "border-border text-muted-foreground"
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
      <span>{option}</span>
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
  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8">
      {/* Progress indicator */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          Pregunta {questionNumber} de {totalQuestions}
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {questionNumber}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question */}
      <h3 className="mb-6 font-serif text-xl font-bold leading-relaxed text-foreground md:text-2xl">
        {question.question}
      </h3>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => {
          const isSelected   = selectedAnswer === index
          const isCorrect    = index === question.correctAnswer
          const showCorrect  = hasSubmitted && isCorrect
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
        <div className="mt-5 animate-in fade-in slide-in-from-bottom-2 duration-300 rounded-lg bg-muted/60 px-4 py-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Referencia: </span>
            {question.reference}
          </p>
        </div>
      )}
    </div>
  )
}