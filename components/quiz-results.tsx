"use client"

import { Trophy, RotateCcw, Home, Star, BookOpen } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface QuizResultsProps {
  score: number
  totalQuestions: number
  categoryName: string
  categoryId: string
  onRetry: () => void
}

function getResultMessage(percentage: number) {
  if (percentage === 100) return { text: "Perfecto", icon: Star, color: "text-secondary" }
  if (percentage >= 80) return { text: "Excelente", icon: Trophy, color: "text-secondary" }
  if (percentage >= 60) return { text: "Bien hecho", icon: BookOpen, color: "text-primary" }
  return { text: "Sigue estudiando", icon: BookOpen, color: "text-muted-foreground" }
}

export function QuizResults({
  score,
  totalQuestions,
  categoryName,
  categoryId,
  onRetry,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)
  const result = getResultMessage(percentage)
  const ResultIcon = result.icon

  return (
    <div className="mx-auto max-w-lg rounded-xl border border-border bg-card p-8 text-center md:p-10">
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <ResultIcon className={cn("h-10 w-10", result.color)} />
      </div>

      {/* Result */}
      <h2 className={cn("font-serif text-2xl font-bold md:text-3xl", result.color)}>
        {result.text}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{categoryName}</p>

      {/* Score */}
      <div className="my-8">
        <div className="text-6xl font-bold text-foreground md:text-7xl">
          {percentage}
          <span className="text-2xl text-muted-foreground">%</span>
        </div>
        <p className="mt-2 text-muted-foreground">
          {score} de {totalQuestions} respuestas correctas
        </p>
      </div>

      {/* Score bar */}
      <div className="mb-8 h-3 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000",
            percentage >= 80 ? "bg-success" : percentage >= 60 ? "bg-secondary" : "bg-destructive"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <RotateCcw className="h-4 w-4" />
          Intentar de nuevo
        </button>
        <Link
          href={`/quiz/${categoryId}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          <Home className="h-4 w-4" />
          Volver a lecciones
        </Link>
      </div>
    </div>
  )
}
