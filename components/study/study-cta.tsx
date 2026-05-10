// components/study/study-cta.tsx
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface StudyCtaProps {
  categoryId: string
  lessonId: string
  recoveryData?: string
}

export function StudyCta({ categoryId, lessonId, recoveryData }: StudyCtaProps) {
  const quizUrl = `/quiz/${categoryId}/${lessonId}${
    recoveryData ? `?data=${encodeURIComponent(recoveryData)}` : ""
  }`

  return (
    <div className="mt-20 text-center">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
          ¿Listo para la evaluación?
        </p>
        <div className="h-px flex-1 bg-border" />
      </div>

      <Link
        href={quizUrl}
        className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-10 text-sm font-black text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl active:scale-95"
      >
        Hacer el Quiz Evaluativo
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  )
}