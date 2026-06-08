// components/quiz-client.tsx
"use client"

import { useState, useCallback } from "react"
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react"
import Link from "next/link"
import type { Question } from "@/lib/types"
import { QuestionCard } from "./question-card"
import { QuizResults } from "./quiz-results"
import { useSearchParams } from "next/navigation"
import { useShuffledQuestions } from "@/hooks/use-shuffled-questions"
import { useQuizAttempts } from "@/hooks/use-quiz-attempts"
import { trackQuizCompleted } from "@/lib/analytics"
import { getSavedStudentName } from "@/lib/utils"
import { cn } from "@/lib/utils"

interface QuizClientProps {
  questions:    Question[]
  categoryName: string
  categoryId:   string
  lessonTitle:  string
  lessonId:     string
  courseType:   "seminario" | "instituto"
}

export function QuizClient({
  questions,
  categoryName,
  categoryId,
  lessonTitle,
  lessonId,
  courseType,
}: QuizClientProps) {
  const searchParams = useSearchParams()
  const recoveryData = searchParams.get("data")
  const [attemptKey, setAttemptKey] = useState(0)

  const backUrl = recoveryData
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`

  const shuffledQuestions = useShuffledQuestions(questions, attemptKey)

  const { attempts, maxAttempts, isBlocked, registerAttempt, loaded } =
    useQuizAttempts(categoryId, lessonTitle)

  const [currentQuestion, setCurrentQuestion]     = useState(0)
  const [selectedAnswers, setSelectedAnswers]      = useState<(number | null)[]>(
    new Array(shuffledQuestions.length).fill(null)
  )
  const [submittedQuestions, setSubmittedQuestions] = useState<boolean[]>(
    new Array(shuffledQuestions.length).fill(false)
  )
  const [isFinished, setIsFinished] = useState(false)

  const handleSelectAnswer = useCallback(
    (index: number) => {
      setSelectedAnswers((prev) => {
        const next = [...prev]
        next[currentQuestion] = index
        return next
      })
    },
    [currentQuestion]
  )

  const handleSubmitAnswer = useCallback(() => {
    setSubmittedQuestions((prev) => {
      const next = [...prev]
      next[currentQuestion] = true
      return next
    })
  }, [currentQuestion])

  const handleNext = useCallback(() => {
    if (currentQuestion < shuffledQuestions.length - 1)
      setCurrentQuestion((prev) => prev + 1)
  }, [currentQuestion, shuffledQuestions.length])

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0)
      setCurrentQuestion((prev) => prev - 1)
  }, [currentQuestion])

  const handleFinish = useCallback(() => {
    setSubmittedQuestions(new Array(shuffledQuestions.length).fill(true))
    registerAttempt()
    setIsFinished(true)

    const score      = selectedAnswers.reduce<number>((acc, answer, index) => {
      if (answer === shuffledQuestions[index].correctAnswer) return acc + 1
      return acc
    }, 0)
    const total      = shuffledQuestions.length
    const percentage = Math.round((score / total) * 100)

    trackQuizCompleted({
      categoryId, categoryName, lessonId, lessonTitle,
      studentName: getSavedStudentName() || "Anónimo",
      score, total, percentage, courseType,
    })
  }, [shuffledQuestions, selectedAnswers, registerAttempt, categoryId, categoryName, lessonId, lessonTitle, courseType])

  const handleRetry = useCallback(() => {
    setAttemptKey((prev) => prev + 1)
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(shuffledQuestions.length).fill(null))
    setSubmittedQuestions(new Array(shuffledQuestions.length).fill(false))
    setIsFinished(false)
  }, [shuffledQuestions.length])

  const score            = selectedAnswers.reduce<number>((acc, answer, index) => {
    if (answer === shuffledQuestions[index].correctAnswer) return acc + 1
    return acc
  }, 0)
  const allSubmitted     = submittedQuestions.every(Boolean)
  const currentAnswered  = selectedAnswers[currentQuestion] !== null
  const currentSubmitted = submittedQuestions[currentQuestion]
  const isLast           = currentQuestion === shuffledQuestions.length - 1

  // Preguntas sin responder para resaltar en los pills
  const unanswered = shuffledQuestions
    .map((_, i) => i)
    .filter((i) => selectedAnswers[i] === null && !submittedQuestions[i])

  // Tiempo estimado restante
  const remainingUnanswered = unanswered.length
  const estMinsLeft = remainingUnanswered > 0
    ? `~${Math.max(1, Math.round(remainingUnanswered * 0.5))} min restante${remainingUnanswered === 1 ? "" : "s"}`
    : null

  if (!loaded) return null

  if (isBlocked) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <span className="text-3xl">🔒</span>
        </div>
        <h2 className="font-serif text-2xl font-bold text-foreground">Límite alcanzado</h2>
        <p className="mt-3 text-muted-foreground [text-wrap:pretty]">
          Ya realizaste este quiz{" "}
          <strong>{maxAttempts} {maxAttempts === 1 ? "vez" : "veces"}</strong>.
          Consultá a tu instructor para continuar.
        </p>
        <p className="mt-1 text-sm text-muted-foreground/60 tabular-nums">
          {attempts} de {maxAttempts} intentos usados
        </p>
        <Link
          href={backUrl}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-muted active:scale-95"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Link>
      </div>
    )
  }

  if (isFinished) {
    return (
      <QuizResults
        score={score}
        totalQuestions={shuffledQuestions.length}
        categoryName={categoryName}
        categoryId={categoryId}
        lessonTitle={lessonTitle}
        onRetry={handleRetry}
        recoveryData={recoveryData}
      />
    )
  }

  return (
    <div className="mx-auto max-w-2xl">

      {/* Back link */}
      <Link
        href={backUrl}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {recoveryData ? "Volver a mi plan" : `Volver a ${categoryName}`}
      </Link>

      {/* Header con tiempo estimado */}
      <div className="mb-6">
        <p className="mb-1 text-sm font-medium text-primary">{categoryName}</p>
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl [text-wrap:balance]">
          {lessonTitle}
        </h2>
        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground/60">
          <span className="tabular-nums">
            Intento {attempts + 1} de {maxAttempts}
          </span>
          {estMinsLeft && (
            <>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {estMinsLeft}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Pills de navegación — más grandes en mobile, con highlight para sin responder */}
      <div className="mb-6 flex flex-wrap gap-2">
        {shuffledQuestions.map((_, index) => {
          const isAnswered   = selectedAnswers[index] !== null
          const isSubmitted  = submittedQuestions[index]
          const isCorrect    = isSubmitted && selectedAnswers[index] === shuffledQuestions[index].correctAnswer
          const isCurrent    = index === currentQuestion
          const isUnanswered = !isAnswered && !isSubmitted && allSubmitted === false

          return (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              aria-label={`Ir a pregunta ${index + 1}`}
              aria-current={isCurrent ? "step" : undefined}
              className={cn(
                // Más grandes: 36x36 en mobile (vs 32x32 antes)
                "flex h-9 w-9 items-center justify-center rounded-full",
                "text-xs font-bold transition-all duration-150",
                isCurrent
                  ? "scale-110 bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background shadow-sm"
                  : isSubmitted && isCorrect
                  ? "bg-green-500 text-white"
                  : isSubmitted && !isCorrect
                  ? "bg-destructive text-destructive-foreground"
                  : isAnswered
                  ? "bg-secondary text-secondary-foreground"
                  // Highlight para preguntas sin responder cuando quedan pocas
                  : unanswered.length <= 3 && unanswered.includes(index)
                  ? "bg-amber-500/15 text-amber-700 ring-1 ring-amber-500/40 animate-pulse"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {index + 1}
            </button>
          )
        })}
      </div>

      {/* Mensaje de preguntas sin responder — visible y accionable */}
      {isLast && !allSubmitted && currentSubmitted && unanswered.length > 0 && (
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <span className="text-amber-600 text-sm">⚠️</span>
          <p className="text-sm text-amber-700 dark:text-amber-400">
            Todavía tenés{" "}
            <strong className="tabular-nums">{unanswered.length}</strong>{" "}
            {unanswered.length === 1 ? "pregunta sin responder" : "preguntas sin responder"}.
            Los números parpadeantes te indican cuáles son.
          </p>
        </div>
      )}

      <QuestionCard
        question={shuffledQuestions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={shuffledQuestions.length}
        selectedAnswer={selectedAnswers[currentQuestion]}
        hasSubmitted={currentSubmitted}
        onSelectAnswer={handleSelectAnswer}
      />

      {/* Navegación */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Anterior
        </button>

        <div className="flex items-center gap-3">
          {/* Verificar — ahora con más urgencia visual */}
          {!currentSubmitted && currentAnswered && (
            <button
              onClick={handleSubmitAnswer}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-95"
            >
              <Check className="h-4 w-4" />
              Verificar
            </button>
          )}

          {currentSubmitted && !isLast && (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Siguiente
              <ArrowRight className="h-4 w-4" />
            </button>
          )}

          {isLast && allSubmitted && (
            <button
              onClick={handleFinish}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-95"
            >
              Ver resultados
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}