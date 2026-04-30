"use client"

import { useState } from "react"
import { categories } from "@/lib/quiz-data"
import { CategoryCard } from "./category-card"
import type { Category } from "@/lib/types"
import { GraduationCap, BookOpen, Star, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

type MainTab = "seminario" | "instituto"
type InstituteTab = "fundamental" | "electivo"

export function CategoriesSection() {
  const [mainTab, setMainTab] = useState<MainTab>("seminario")
  const [instituteTab, setInstituteTab] = useState<InstituteTab>("fundamental")

  const seminarioCourses = categories.filter((c) => c.courseType === "seminario")
  const institutoFundamentales = categories.filter(
    (c) => c.courseType === "instituto" && c.instituteTrack === "fundamental"
  )
  const institutoElectivos = categories.filter(
    (c) => c.courseType === "instituto" && c.instituteTrack === "electivo"
  )

  const visibleCourses: Category[] =
    mainTab === "seminario"
      ? seminarioCourses
      : instituteTab === "fundamental"
      ? institutoFundamentales
      : institutoElectivos

  return (
    <section id="categorias" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">

        {/* Encabezado */}
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Elige tu estudio
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Categorías de Estudio
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Selecciona entre cursos de Seminario e Instituto. Cada lección incluye
            cuestionarios y material de repaso.
          </p>
        </div>

        {/* Tabs principales: Seminario / Instituto */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-xl border border-border bg-muted/50 p-1 gap-1">
            <button
              onClick={() => setMainTab("seminario")}
              className={cn(
                "flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all",
                mainTab === "seminario"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <BookOpen className="h-4 w-4" />
              Seminario
              <span className={cn(
                "ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold",
                mainTab === "seminario"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}>
                {seminarioCourses.length}
              </span>
            </button>

            <button
              onClick={() => setMainTab("instituto")}
              className={cn(
                "flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all",
                mainTab === "instituto"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <GraduationCap className="h-4 w-4" />
              Instituto
              <span className={cn(
                "ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold",
                mainTab === "instituto"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}>
                {institutoFundamentales.length + institutoElectivos.length}
              </span>
            </button>
          </div>
        </div>

        {/* Subtabs de Instituto (Fundamentales / Electivos) */}
        {mainTab === "instituto" && (
          <div className="mb-8 flex justify-center gap-3">
            <button
              onClick={() => setInstituteTab("fundamental")}
              className={cn(
                "flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold transition-all",
                instituteTab === "fundamental"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              <Star className="h-3 w-3" />
              Fundamentales
              <span className="opacity-70">({institutoFundamentales.length})</span>
            </button>

            <button
              onClick={() => setInstituteTab("electivo")}
              className={cn(
                "flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold transition-all",
                instituteTab === "electivo"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              <Sparkles className="h-3 w-3" />
              Electivos
              <span className="opacity-70">({institutoElectivos.length})</span>
            </button>
          </div>
        )}

        {/* Grid de tarjetas */}
        {visibleCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {visibleCourses.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
            <Sparkles className="mb-3 h-8 w-8 text-muted-foreground/40" />
            <p className="font-medium text-muted-foreground">Próximamente</p>
            <p className="mt-1 text-sm text-muted-foreground/60">
              Estamos preparando los cursos electivos.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}