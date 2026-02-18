"use client"

import { BookMarked, BookOpen, FileText, ScrollText, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import type { Category } from "@/lib/types"
import { getTotalLessons } from "@/lib/quiz-data"

const iconMap: Record<string, React.ElementType> = {
  scroll: ScrollText,
  "book-open": BookOpen,
  "book-marked": BookMarked,
  "file-text": FileText,
}

export function CategoryCard({ category }: { category: Category }) {
  const Icon = iconMap[category.icon] || BookOpen
  const totalLessons = getTotalLessons(category)

  return (
    <Link href={`/quiz/${category.id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 md:p-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg ${category.color} transition-transform duration-300 group-hover:scale-110`}
            >
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {category.weeks.length} {category.weeks.length === 1 ? "semana" : "semanas"}
              </span>
              <span className="text-xs text-muted-foreground">
                {totalLessons} {totalLessons === 1 ? "leccion" : "lecciones"}
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              {category.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {category.description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span>Ver lecciones</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
