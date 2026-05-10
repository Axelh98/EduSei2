// components/recovery/completed-lesson-card.tsx
import { CheckCircle2 } from "lucide-react"
import type { RecoveryLesson } from "./pending-lesson-card"

interface CompletedLessonCardProps {
  item: RecoveryLesson
}

export function CompletedLessonCard({ item }: CompletedLessonCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-green-500/15 bg-green-500/[0.03] px-4 py-3">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />

      <div className="min-w-0 flex-1">
        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
          {item.category.name}
        </p>
        <p className="text-sm font-medium leading-snug text-muted-foreground/70 line-through">
          {item.lesson.title}
        </p>
      </div>

      <span className="shrink-0 text-[10px] font-black uppercase tracking-widest text-green-600">
        ✓ Lista
      </span>
    </div>
  )
}