import Link from "next/link"
import { ArrowRight, BookOpen, FileText, ExternalLink, GraduationCap } from "lucide-react"
import type { Lesson } from "@/lib/types"
import { cn } from "@/lib/utils"

interface LessonCardProps {
  lesson: Lesson
  categoryId: string
}

const typeColorMap: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme": "#0f172a", // Slate 900 para un look serio
  "Preparación para la Vida": "#dc2626", 
  "Dominio de la Doctrina": "#ea580c",
  "Especial": "#0284c7",
  "default": "#4b5563",
};

export function LessonCard({ lesson, categoryId }: LessonCardProps) {
  const lessonColor = typeColorMap[lesson.type] || typeColorMap["default"];

  const descripcionVista = lesson.secciones?.find(s => s.tipo === "contexto")?.contenido
    || lesson.description;

  const numQuiz = lesson.questions?.length || 0;

  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300",
        "hover:border-[var(--lesson-color)]/30 hover:shadow-xl hover:shadow-[var(--lesson-color)]/[0.06]",
        "dark:hover:bg-[var(--lesson-color)]/[0.02]"
      )}
      style={{ "--lesson-color": lessonColor } as React.CSSProperties}
    >
      {/* Indicador de color lateral sutil */}
      <div 
        className="absolute left-0 top-6 h-10 w-1 rounded-r-full transition-transform group-hover:scale-y-110" 
        style={{ backgroundColor: lessonColor }}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border"
              style={{
                backgroundColor: `${lessonColor}10`,
                borderColor: `${lessonColor}20`,
                color: lessonColor
              }}
            >
              {lesson.type}
            </span>
          </div>

          <h4 className="text-lg font-bold tracking-tight text-foreground group-hover:text-[var(--lesson-color)] transition-colors duration-300">
            {lesson.title}
          </h4>
          
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {descripcionVista}
          </p>
        </div>

        <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-muted/50 text-muted-foreground transition-all duration-300 group-hover:bg-[var(--lesson-color)] group-hover:text-white">
          <GraduationCap className="h-6 w-6" />
        </div>
      </div>

      {/* Footer de Acciones */}
      <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60">
        <div className="flex items-center gap-5">
          {lesson.secciones?.length > 0 && (
            <Link
              href={`/quiz/${categoryId}/${lesson.id}/study`}
              className="group/link flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-[var(--lesson-color)] transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-muted group-hover/link:bg-[var(--lesson-color)]/10">
                <FileText className="h-3.5 w-3.5" />
              </div>
              LECTURA
            </Link>
          )}
          
          {lesson.chapterUrl && (
            <Link
              href={lesson.chapterUrl}
              target="_blank"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Manual de Seminario
            </Link>
          )}
        </div>

        <Link
          href={`/quiz/${categoryId}/${lesson.id}`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-xs font-bold transition-all hover:bg-[var(--lesson-color)] hover:shadow-lg hover:shadow-[var(--lesson-color)]/20 active:scale-95"
        >
          PRACTICAR QUIZ
          <div className="flex items-center justify-center bg-background/20 rounded-md px-1.5 py-0.5 ml-1">
            {numQuiz}
          </div>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}