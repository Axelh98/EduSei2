"use client"

import { Trophy, RotateCcw, Home, Star, BookOpen, ListChecks } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Lesson } from "@/lib/types"
import { useEffect } from "react"

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
  lessonTitle,
  recoveryData,
  onRetry,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)
  const result = getResultMessage(percentage)
  const ResultIcon = result.icon

  useEffect(() => {
    // Si aprobó (más de 60%), guardamos el progreso
    if (percentage >= 60) {
      const storageKey = "seminario-completados"
      // Manejo de errores por si el storage está vacío o corrupto
      const rawData = localStorage.getItem(storageKey)
      const completados = rawData ? JSON.parse(rawData) : []
      
      // 👈 CORRECCIÓN: Usamos categoryId directamente, sin "props."
      const lessonKey = `${categoryId}-${lessonTitle}` 
      
      if (!completados.includes(lessonKey)) {
        completados.push(lessonKey)
        localStorage.setItem(storageKey, JSON.stringify(completados))
      }
    }
  }, [percentage, categoryId, lessonTitle])

  const backUrl = recoveryData 
    ? `/recuperar?data=${encodeURIComponent(recoveryData)}`
    : `/quiz/${categoryId}`;

  const shareText = encodeURIComponent(
    `📊 Resultado del Quiz\n\n📚 ${categoryName}\n📖 ${lessonTitle}\n\n✅ ${score}/${totalQuestions}\n🔥 ${percentage}%\n\n¿Podés superarme? 😏`
  )

  const whatsappUrl = `https://wa.me/?text=${shareText}`

  return (
    <div className="mx-auto max-w-lg rounded-xl border border-border bg-card p-8 text-center md:p-10">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <ResultIcon className={cn("h-10 w-10", result.color)} />
      </div>

      <h2 className={cn("font-serif text-2xl font-bold md:text-3xl", result.color)}>
        {result.text}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{categoryName}</p>

      <div className="my-8">
        <div className="text-6xl font-bold text-foreground md:text-7xl">
          {percentage}
          <span className="text-2xl text-muted-foreground">%</span>
        </div>
        <p className="mt-2 text-muted-foreground">
          {score} de {totalQuestions} respuestas correctas
        </p>
      </div>

      <div className="mb-8 h-3 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000",
            percentage >= 80 ? "bg-success" : percentage >= 60 ? "bg-secondary" : "bg-destructive"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <RotateCcw className="h-4 w-4" />
          Intentar de nuevo
        </button>

        <Link
          href={backUrl}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          {recoveryData ? (
            <>
              <ListChecks className="h-4 w-4" />
              Volver a mi plan
            </>
          ) : (
            <>
              <Home className="h-4 w-4" />
              Volver a lecciones
            </>
          )}
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-4 w-4 fill-white">
            <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.888.76 5.6 2.08 7.96L0 32l7.84-2.048A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16.004C32 7.56 24.836.396 16 .396zm0 29.208c-2.544 0-4.92-.688-6.968-1.88l-.496-.296-4.656 1.216 1.24-4.544-.32-.528A13.86 13.86 0 012.136 16.4c0-7.664 6.24-13.904 13.864-13.904 7.656 0 13.896 6.24 13.896 13.904 0 7.64-6.24 13.864-13.896 13.864zm7.616-10.336c-.416-.208-2.464-1.216-2.848-1.36-.384-.144-.664-.208-.944.208-.28.416-1.08 1.36-1.32 1.64-.24.28-.48.312-.896.104-.416-.208-1.76-.648-3.352-2.064-1.24-1.104-2.08-2.464-2.32-2.88-.24-.416-.024-.64.184-.848.184-.184.416-.48.624-.72.208-.24.28-.416.416-.688.136-.28.072-.52-.032-.72-.104-.208-.944-2.272-1.296-3.112-.344-.832-.696-.72-.944-.736l-.8-.016c-.28 0-.72.104-1.096.52-.376.416-1.44 1.408-1.44 3.44 0 2.032 1.48 4 1.688 4.28.208.28 2.92 4.464 7.08 6.256.992.432 1.768.688 2.376.88 1 .32 1.912.28 2.632.168.8-.12 2.464-1.008 2.816-1.984.352-.976.352-1.816.248-1.984-.104-.168-.384-.264-.8-.472z"/>
          </svg>
          Compartir
        </a>
      </div>
    </div>
  )
}