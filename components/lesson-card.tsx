import Link from "next/link"
import { FileQuestion, ArrowRight, Grid3X3 } from "lucide-react" // Importamos Grid3X3
import type { Lesson } from "@/lib/types"
import { hasCrossword } from "@/lib/quiz-data" // Importamos la función verificadora

interface LessonCardProps {
  lesson: Lesson
  categoryId: string
  chapterUrl?: string
}

export function LessonCard({ lesson, categoryId, chapterUrl }: LessonCardProps) {
  const showCrossword = hasCrossword(lesson.id)

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

        <div className="mt-3 flex flex-wrap gap-2">
          {/* Botón de Capítulo (Existente) */}
          {lesson.chapterUrl && (
            <Link
              href={lesson.chapterUrl}
              target="_blank"
              className="rounded-md bg-primary px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary/80"
            >
              Ver capítulo
            </Link>
          )}

          {showCrossword && (
            <Link
              href={`/juegos/crucigrama/${lesson.id}`}
              className="flex items-center gap-1.5 rounded-md bg-orange-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-700 transition-colors hover:bg-orange-200 border border-orange-200"
            >
              <Grid3X3 className="h-3.5 w-3.5" />
              Crucigrama
            </Link>
          )}
        </div>
      </div>
      <Link
        href={`/quiz/${categoryId}/${lesson.id}`}
        className="shrink-0"
      >
        <ArrowRight className="h-7 w-7 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
      </Link>
    </div>
  )
}