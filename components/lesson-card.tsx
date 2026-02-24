import Link from "next/link"
import { FileQuestion, ArrowRight } from "lucide-react"
import type { Lesson } from "@/lib/types"

interface LessonCardProps {
  lesson: Lesson
  categoryId: string
  chapterUrl?: string
}

export function LessonCard({ lesson, categoryId, chapterUrl }: LessonCardProps) {
  return (
    <div className="group flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30 hover:bg-primary/5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
        <FileQuestion className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary">
          {lesson.title}
        </h4>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {lesson.description}
        </p>
        <p className="mt-1 text-xs font-medium text-primary/70">
          {lesson.questions.length} preguntas
        </p>

        {/* Botón extra para ir al capítulo */}
        {lesson.chapterUrl && (
          <Link
            href={lesson.chapterUrl}
            target="_blank"
            className="mt-2 inline-block rounded-md bg-primary px-3 py-1 text-xs font-medium text-white hover:bg-primary/80"
          >
            Ver capítulo
          </Link>
        )}
      </div>
      <Link
        href={`/quiz/${categoryId}/${lesson.id}`}
        className="shrink-0"
      >
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
      </Link>
    </div>
  )
}
