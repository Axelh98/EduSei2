import Link from "next/link"
import { FileQuestion, ArrowRight, BookOpen, FileText, ExternalLink } from "lucide-react"
import type { Lesson } from "@/lib/types"
import { cn } from "@/lib/utils" 

interface LessonCardProps {
  lesson: Lesson
  categoryId: string
}

const typeColorMap: Record<string, string> = {
  "Antiguo Testamento - Ven Sigueme": "#18181b", 
  "Nuevo Testamento - Ven Sigueme": "#27272a", 
  "Libro de Mormon - Ven Sigueme": "#3f3f46", 
  "Doctrina y Convenios - Ven Sigueme": "#52525b",
  "Preparación para la Vida": "#ef4444", 
  "Dominio de la Doctrina": "#f97316",
  "Especial": "#38bdf8",      
  "Día Flexible": "#a855f7",
  "default": "#71717a",
};

export function LessonCard({ lesson, categoryId }: LessonCardProps) {
  const lessonColor = typeColorMap[lesson.type] || typeColorMap["default"];

  // Lógica híbrida para descripción y conteo
  const descripcionVista = lesson.secciones?.find(s => s.tipo === "contexto")?.contenido || lesson.description;
  const numQuiz = lesson.questions?.length || 0;

  return (
    <div 
      className={cn(
        "group flex flex-col gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 ease-in-out",
        "hover:border-[var(--lesson-color)]/40 hover:bg-[var(--lesson-color)]/[0.02] hover:shadow-lg hover:shadow-[var(--lesson-color)]/[0.08]"
      )}
      style={{ "--lesson-color": lessonColor } as React.CSSProperties}
    >
      <div className="flex items-start gap-4">
        {/* Icono Principal */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-300 group-hover:bg-[var(--lesson-color)]/[0.1] group-hover:text-[var(--lesson-color)]">
          <BookOpen className="h-6 w-6" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h4 className="text-base font-bold text-foreground group-hover:text-[var(--lesson-color)] transition-colors duration-300 truncate">
              {lesson.title}
            </h4>
            <span 
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold border uppercase tracking-wider"
              style={{ 
                  backgroundColor: `${lessonColor}10`,
                  borderColor: `${lessonColor}30`, 
                  color: lessonColor 
              }}
            >
              {lesson.type}
            </span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {descripcionVista}
          </p>
        </div>
      </div>

      {/* Footer con Acciones Separadas */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          {lesson.secciones?.length > 0 && (
            <Link
              href={`/quiz/${categoryId}/${lesson.id}/study`}
              className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--lesson-color)] hover:opacity-70 transition-all uppercase tracking-tight"
            >
              <FileText className="h-3.5 w-3.5" />
              Repasar Lectura
            </Link>
          )}
          
          {lesson.chapterUrl && (
            <Link
              href={lesson.chapterUrl}
              target="_blank"
              className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Manual
            </Link>
          )}
        </div>

        <Link
          href={`/quiz/${categoryId}/${lesson.id}`}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[var(--lesson-color)] text-white text-[11px] font-bold hover:brightness-110 transition-all shadow-md active:scale-95"
        >
          PRACTICAR QUIZ
          <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
            {numQuiz}
          </span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}