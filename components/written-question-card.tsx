// components/written-question-card.tsx
"use client"

import { useState, useEffect } from "react"
import { FileEdit, CheckCircle2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import type { Question } from "@/lib/types"
import { getWrittenAnswer, saveWrittenAnswer } from "@/lib/notes-storage"

interface WrittenQuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  categoryId: string
  lessonId: string
  onComplete: () => void
}

export function WrittenQuestionCard({
  question,
  questionNumber,
  totalQuestions,
  categoryId,
  lessonId,
  onComplete,
}: WrittenQuestionCardProps) {
  const [answer, setAnswer] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const saved = getWrittenAnswer(categoryId, lessonId, String(question.id))
    if (saved) {
      setAnswer(saved.answer)
      setIsSubmitted(true)
    }
  }, [categoryId, lessonId, question.id])

  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length
  const minWords = question.minWords || 20
  const canSubmit = wordCount >= minWords

  const handleSubmit = () => {
    saveWrittenAnswer(categoryId, lessonId, String(question.id), answer)
    setIsSubmitted(true)
    onComplete()
  }

  const handleEdit = () => {
    setIsSubmitted(false)
  }

  const progress = Math.min((wordCount / minWords) * 100, 100)

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
      <div className="mb-6 space-y-2">
        <div className="flex items-start gap-2">
          <FileEdit className="mt-1 h-5 w-5 text-primary" />
          <h3 className="flex-1 font-serif text-xl font-bold leading-relaxed text-foreground md:text-2xl">
            {question.question}
          </h3>
        </div>
        {question.prompt && (
          <p className="pl-7 text-sm text-muted-foreground">
            {question.prompt}
          </p>
        )}
      </div>

      {/* Answer textarea */}
      <div className="space-y-3">
        <Label htmlFor={`answer-${question.id}`} className="text-sm font-medium">
          Tu respuesta
        </Label>
        <Textarea
          id={`answer-${question.id}`}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={isSubmitted}
          placeholder="Escribe tu respuesta aquí..."
          className="min-h-[200px] resize-y"
        />

        {/* Word count and progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              {wordCount} {wordCount === 1 ? "palabra" : "palabras"}
              {!isSubmitted && ` (mínimo: ${minWords})`}
            </span>
            {!isSubmitted && (
              <span
                className={
                  canSubmit ? "text-green-600" : "text-muted-foreground"
                }
              >
                {canSubmit ? "✓ Listo para enviar" : `Faltan ${minWords - wordCount}`}
              </span>
            )}
          </div>
          {!isSubmitted && (
            <Progress value={progress} className="h-1" />
          )}
        </div>

        {/* Submit/Edit button */}
        {isSubmitted ? (
          <div className="flex items-center justify-between rounded-lg border border-green-500/20 bg-green-500/5 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-green-700">
              <CheckCircle2 className="h-4 w-4" />
              Respuesta guardada
            </div>
            <Button variant="outline" size="sm" onClick={handleEdit}>
              Editar
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="w-full"
            size="lg"
          >
            Guardar respuesta
          </Button>
        )}
      </div>

      {/* Reference after submit */}
      {isSubmitted && question.reference && (
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