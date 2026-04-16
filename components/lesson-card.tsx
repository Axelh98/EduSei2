import Link from "next/link"
import { FileQuestion, ArrowRight } from "lucide-react"
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
  // 1. Obtener el color hexadecimal base
  const lessonColor = typeColorMap[lesson.type] || typeColorMap["default"];

  return (
    <div 
      className={cn(
        "group flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 ease-in-out",
        // EFECTOS HOVER PROFESIONALES:
        // 1. Borde sutil del color de la lección (con baja opacidad)
        "hover:border-[var(--lesson-color)]/40",
        // 2. Fondo muy tenue del color de la lección
        "hover:bg-[var(--lesson-color)]/[0.03]",
        // 3. Sombra suave para dar profundidad
        "hover:shadow-lg hover:shadow-[var(--lesson-color)]/[0.08]"
      )}
      // 2. Inyectar la variable CSS inline
      style={{ "--lesson-color": lessonColor } as React.CSSProperties}
    >
      
      {/* Icono con sutil cambio de fondo al hacer hover */}
      <div 
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-300 group-hover:bg-[var(--lesson-color)]/[0.1] group-hover:text-[var(--lesson-color)]"
      >
        <FileQuestion className="h-5 w-5" />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <h4 className="text-base font-semibold text-foreground group-hover:text-[var(--lesson-color)] transition-colors duration-300">
            {lesson.title}
          </h4>
          
          {/* Badge con el color exacto y texto contrastante */}
          <span 
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold border uppercase tracking-wider transition-all"
            style={{ 
                backgroundColor: `${lessonColor}10`, // Fondo con 10% opacidad (hex + 10)
                borderColor: `${lessonColor}30`,      // Borde con 30% opacidad
                color: lessonColor                    // Texto del color base
            }}
          >
            {lesson.type}
          </span>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
          {lesson.description}
        </p>

        <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-muted-foreground/80">
              {lesson.questions.length} preguntas
            </span>

            {/* Ajusté lesson.chapterUrl asumiendo que viene dentro de lesson */}
            {lesson.chapterUrl && (
              <Link
                href={lesson.chapterUrl}
                target="_blank"
                className="text-xs font-semibold text-primary underline-offset-4 hover:underline"
              >
                Ver capítulo
              </Link>
            )}
        </div>
      </div>

      <Link
        href={`/quiz/${categoryId}/${lesson.id}`}
        className="shrink-0 p-2 rounded-full bg-muted/50 transition-all group-hover:bg-[var(--lesson-color)]/[0.1]"
      >
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[var(--lesson-color)]" />
      </Link>
    </div>
  )
}