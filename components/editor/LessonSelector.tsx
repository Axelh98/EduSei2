"use client"
// components/editor/LessonSelector.tsx

import { useState, useEffect } from "react"
import { categories, getTotalLessons } from "@/lib/quiz-data"
import { isFlatCategory } from "@/lib/types"
import type { Category } from "@/lib/types"

interface Props {
  categoryId: string
  lessonId:   string
  onChange:   (categoryId: string, lessonId: string) => void
  disabled?:  boolean
}

const selectClass = "w-full appearance-none px-3 py-2.5 pr-8 text-sm border border-input rounded-lg bg-background text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"

export function LessonSelector({ categoryId, lessonId, onChange, disabled }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    categories.find(c => c.id === categoryId) ?? null
  )

  useEffect(() => {
    setSelectedCategory(categories.find(c => c.id === categoryId) ?? null)
  }, [categoryId])

  function handleCategoryChange(id: string) {
    const cat = categories.find(c => c.id === id) ?? null
    setSelectedCategory(cat)
    onChange(id, "")
  }

  const lessons = selectedCategory
    ? isFlatCategory(selectedCategory)
      ? selectedCategory.lessons
      : selectedCategory.weeks.flatMap(w => w.lessons)
    : []

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

        {/* Categoría */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Curso
          </label>
          <div className="relative">
            <select
              value={categoryId}
              onChange={e => handleCategoryChange(e.target.value)}
              disabled={disabled}
              className={selectClass}
            >
              <option value="">Seleccioná un curso...</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                  {!isFlatCategory(cat) && cat.semester ? ` (${cat.semester}° sem.)` : ""}
                  {" — "}
                  {cat.courseType === "seminario" ? "Seminario" : "Instituto"}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
          </div>
          {selectedCategory && (
            <p className="text-[11px] text-muted-foreground">
              {getTotalLessons(selectedCategory)} lecciones disponibles
            </p>
          )}
        </div>

        {/* Lección */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Lección
          </label>
          <div className="relative">
            <select
              value={lessonId}
              onChange={e => onChange(categoryId, e.target.value)}
              disabled={disabled || !categoryId}
              className={selectClass}
            >
              <option value="">
                {categoryId ? "Seleccioná una lección..." : "Primero elegí un curso"}
              </option>
              {lessons.map(lesson => (
                <option key={lesson.id} value={lesson.id}>
                  {lesson.title}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
          </div>
        </div>
      </div>
    </div>
  )
}