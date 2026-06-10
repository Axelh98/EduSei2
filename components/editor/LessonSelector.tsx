"use client"
// components/editor/LessonSelector.tsx
// Curso: select normal (pocas opciones).
// Lección: combobox con búsqueda — con 30+ lecciones, escribir
// "fe" y filtrar es mucho más rápido que scrollear un <select>.

import { useState, useEffect, useMemo, useRef } from "react"
import { Search, Check, ChevronDown } from "lucide-react"
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

function normalize(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

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

  const lessons = useMemo(() => (
    selectedCategory
      ? isFlatCategory(selectedCategory)
        ? selectedCategory.lessons
        : selectedCategory.weeks.flatMap(w => w.lessons)
      : []
  ), [selectedCategory])

  // ── Combobox de lección ─────────────────────────────────
  const [query, setQuery] = useState("")
  const [open, setOpen]   = useState(false)
  const [highlight, setHighlight] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const selectedLesson = lessons.find(l => l.id === lessonId) ?? null

  // Sincronizar el texto del input con la lección elegida
  useEffect(() => {
    setQuery(selectedLesson?.title ?? "")
  }, [selectedLesson?.id, selectedLesson?.title])

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    // Si el texto coincide exacto con la lección elegida, mostrar todas
    if (!q || (selectedLesson && normalize(selectedLesson.title) === q)) return lessons
    return lessons.filter(l => normalize(l.title).includes(q))
  }, [lessons, query, selectedLesson])

  // Cerrar al hacer click afuera
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
        setQuery(selectedLesson?.title ?? "")
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [selectedLesson])

  function selectLesson(id: string, title: string) {
    onChange(categoryId, id)
    setQuery(title)
    setOpen(false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter")) { setOpen(true); return }
    if (!open) return
    if (e.key === "Escape") { setOpen(false); setQuery(selectedLesson?.title ?? ""); return }
    if (e.key === "ArrowDown") { e.preventDefault(); setHighlight(h => Math.min(h + 1, filtered.length - 1)) }
    if (e.key === "ArrowUp")   { e.preventDefault(); setHighlight(h => Math.max(h - 1, 0)) }
    if (e.key === "Enter" && filtered[highlight]) {
      e.preventDefault()
      selectLesson(filtered[highlight].id, filtered[highlight].title)
    }
  }

  return (
    <div className="flex flex-col gap-3">

      {/* Curso */}
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

      {/* Lección — combobox con búsqueda */}
      <div className="flex flex-col gap-1.5" ref={wrapperRef}>
        <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          Lección
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
          <input
            type="text"
            value={query}
            disabled={disabled || !categoryId}
            placeholder={categoryId ? "Buscá una lección..." : "Primero elegí un curso"}
            onChange={e => { setQuery(e.target.value); setOpen(true); setHighlight(0) }}
            onFocus={() => { if (categoryId) setOpen(true) }}
            onKeyDown={handleKeyDown}
            role="combobox"
            aria-expanded={open}
            className="w-full pl-9 pr-8 py-2.5 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="button"
            tabIndex={-1}
            disabled={disabled || !categoryId}
            onClick={() => setOpen(v => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground disabled:opacity-40"
          >
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>

          {open && categoryId && (
            <div className="absolute top-full left-0 right-0 mt-1.5 max-h-64 overflow-y-auto bg-card border border-border rounded-xl shadow-lg z-30 animate-in fade-in slide-in-from-top-1 duration-100">
              {filtered.length === 0 ? (
                <p className="px-4 py-3 text-xs text-muted-foreground">
                  No hay lecciones que coincidan con "{query}".
                </p>
              ) : (
                filtered.map((lesson, i) => {
                  const isSelected = lesson.id === lessonId
                  return (
                    <button
                      key={lesson.id}
                      type="button"
                      onClick={() => selectLesson(lesson.id, lesson.title)}
                      onMouseEnter={() => setHighlight(i)}
                      className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-left text-sm transition-colors ${
                        i === highlight ? "bg-muted" : ""
                      } ${isSelected ? "text-primary font-semibold" : "text-foreground"}`}
                    >
                      {isSelected
                        ? <Check className="h-3.5 w-3.5 flex-shrink-0" />
                        : <span className="w-3.5 flex-shrink-0" />}
                      <span className="truncate">{lesson.title}</span>
                    </button>
                  )
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}