// components/quiz-results.tsx
"use client"

import { Trophy, RotateCcw, Home, Star, BookOpen, ListChecks, Share2 } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { generateSingleQuizReport } from "@/lib/utils"
import { useShareWithName } from "@/hooks/use-share-with-name"
import { StudentNameModal } from "@/components/student-name-modal"
import { useConfetti } from "@/hooks/use-confetti"

interface QuizResultsProps {
  score: number
  totalQuestions: number
  categoryName: string
  categoryId: string
  lessonTitle: string
  onRetry: () => void
  recoveryData?: string | null
}

function getResultMessage(percentage: number) {
  if (percentage === 100) return { text: "¡Perfecto!",      icon: Star,     color: "text-yellow-500" }
  if (percentage >= 80)  return { text: "Excelente",        icon: Trophy,   color: "text-secondary"  }
  if (percentage >= 60)  return { text: "Aprobado",         icon: BookOpen, color: "text-primary"    }
  return                        { text: "Animos! Lo Haras Mejor La Próxima", icon: BookOpen, color: "text-muted-foreground" }
}

export function QuizResults({
  score,
  totalQuestions,
  categoryName,
  categoryId,
  lessonTitle,
  recoveryData,
  onRetry,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)
  const result     = getResultMessage(percentage)
  const ResultIcon = result.icon
  const isPerfect  = percentage === 100

  const { modalOpen, handleConfirm, handleCancel, shareToWhatsApp } = useShareWithName()
  const { fire: fireConfetti } = useConfetti()

  // ── Marcar como completada en localStorage ────────────────────────────
  useEffect(() => {
    if (percentage >= 60) {
      const storageKey  = "seminario-completados"
      const rawData     = localStorage.getItem(storageKey)
      const completados = rawData ? JSON.parse(rawData) : []
      const lessonKey   = `${categoryId}-${lessonTitle}`
      if (!completados.includes(lessonKey)) {
        completados.push(lessonKey)
        localStorage.setItem(storageKey, JSON.stringify(completados))
      }
    }
  }, [percentage, categoryId, lessonTitle])

  // ── Confetti para 100% ────────────────────────────────────────────────
  useEffect(() => {
    if (!isPerfect) return
    // Pequeño delay para que la tarjeta aparezca primero
    const t = setTimeout(() => {
      fireConfetti()
    }, 350)
    return () => clearTimeout(t)
  }, [isPerfect, fireConfetti])

  const handleShare = () => {
    shareToWhatsApp((nombre) =>
      generateSingleQuizReport(
        categoryName,
        lessonTitle,
        score,
        totalQuestions,
        percentage,
        nombre
      )
    )
  }

  const backUrl = recoveryData
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`

  return (
    <>
      <StudentNameModal
        isOpen={modalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <div
        className={cn(
          "mx-auto max-w-lg rounded-xl border bg-card p-8 text-center md:p-10 shadow-sm",
          "animate-in fade-in slide-in-from-bottom-4 duration-500",
          isPerfect && "border-yellow-400/40 dark:border-yellow-500/30",
        )}
      >
        {/* Ícono animado */}
        <div
          className={cn(
            "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full",
            isPerfect
              ? "bg-yellow-400/15 ring-4 ring-yellow-400/30 animate-pulse"
              : "bg-muted",
          )}
        >
          <ResultIcon className={cn("h-10 w-10", result.color)} />
        </div>

        {/* Título */}
        <h2
          className={cn(
            "font-serif text-2xl font-bold md:text-3xl",
            result.color,
            isPerfect && "animate-in zoom-in-75 duration-500",
          )}
        >
          {result.text}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{categoryName}</p>
        <p className="text-xs text-muted-foreground/60">{lessonTitle}</p>

        {/* Score grande */}
        <div className="my-8">
          <div
            className={cn(
              "text-6xl font-bold text-foreground md:text-7xl tabular-nums",
              "animate-in zoom-in-90 duration-700 delay-200",
            )}
          >
            {percentage}
            <span className="text-2xl text-muted-foreground">%</span>
          </div>
          <p className="mt-2 text-muted-foreground">
            {score} de {totalQuestions} respuestas correctas
          </p>
        </div>

        {/* Barra de progreso animada */}
        <div className="mb-8 h-3 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-1000 ease-out",
              percentage === 100 ? "bg-yellow-400" :
              percentage >= 80   ? "bg-green-500"  :
              percentage >= 60   ? "bg-blue-500"   : "bg-red-500"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Mensaje especial para 100% */}
        {isPerfect && (
          <div className="mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300 rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-3">
            <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-400">
              🌟 ¡Respondiste todas las preguntas correctamente!
            </p>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
          >
            <RotateCcw className="h-4 w-4" />
            Reintentar
          </button>

          <Link
            href={backUrl}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-muted active:scale-95"
          >
            {recoveryData ? <ListChecks className="h-4 w-4" /> : <Home className="h-4 w-4" />}
            {recoveryData ? "Mi Plan" : "Inicio"}
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95"
          >
            <Share2 className="h-4 w-4" />
            Compartir resultado
          </button>
        </div>
      </div>
    </>
  )
}