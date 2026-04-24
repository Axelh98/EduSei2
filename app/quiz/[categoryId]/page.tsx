"use client"

import { useState, use, useMemo } from "react"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WeekCard } from "@/components/week-card"
import { getCategoryById, getTotalLessons, getTotalQuestions } from "@/lib/quiz-data"
import { ArrowLeft, BookOpen, FileQuestion, Calendar, Share2, X } from "lucide-react"
import Link from "next/link"

// --- IMPORTACIÓN DE RESÚMENES ---
import { leccionesResumidas } from "@/lib/data/antiguo-testamento-resumido"

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = use(params)
  const category = getCategoryById(categoryId)

  const [selectedLessons, setSelectedLessons] = useState<string[]>([])

  // --- LÓGICA DE UNIÓN DE DATOS ---
  // Unimos las lecciones del manual con el contenido resumido si existe
  const weeksWithExtraContent = useMemo(() => {
    if (!category) return []

    return category.weeks.map(week => ({
      ...week,
      lessons: week.lessons.map(lesson => {
        // Buscamos si hay un resumen para esta lección en particular
        const extraData = leccionesResumidas.find(l => l.id === lesson.id)
        
        return {
          ...lesson,
          // Inyectamos las secciones del resumen (esto habilitará el botón en LessonCard)
          secciones: extraData ? extraData.secciones : []
        }
      })
    }))
  }, [category])

  if (!category) {
    notFound()
  }

  const totalLessons = getTotalLessons(category)
  const totalQuestions = getTotalQuestions(category)

  const toggleLesson = (lessonId: string) => {
    setSelectedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const handleShare = () => {
    const baseUrl = window.location.origin
    const data = `${categoryId}:${selectedLessons.join(",")}`
    const finalUrl = `${baseUrl}/recuperar?data=${encodeURIComponent(data)}`
    
    const text = `Hola, aquí tienes las lecciones de Seminario que debes completar para ponerte al día: ${finalUrl}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pb-20">
        <section className="border-b border-border bg-card px-4 pb-10 pt-8 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
            <h1 className="font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
              {category.name}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {category.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">{category.weeks.length}</span>{" "}
                {category.weeks.length === 1 ? "semana" : "semanas"}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="font-medium">{totalLessons}</span>{" "}
                {totalLessons === 1 ? "lección" : "lecciones"}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileQuestion className="h-4 w-4 text-primary" />
                <span className="font-medium">{totalQuestions}</span> preguntas evaluativas
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            {/* CAMBIO CLAVE: Usamos weeksWithExtraContent en lugar de category.weeks */}
            {weeksWithExtraContent.map((week, index) => (
              <WeekCard
                key={week.id}
                week={week}
                categoryId={category.id}
                defaultOpen={index === 0}
                selectedLessons={selectedLessons}
                onToggleLesson={toggleLesson}
              />
            ))}
          </div>
        </section>
      </main>

      {/* BOTÓN FLOTANTE GLOBAL */}
      {selectedLessons.length > 0 && (
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card p-2 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3 px-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {selectedLessons.length}
            </span>
            <span className="text-sm font-medium hidden sm:inline">seleccionadas</span>
          </div>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            <Share2 className="h-4 w-4" />
            Compartir por WhatsApp
          </button>
          <button 
            onClick={() => setSelectedLessons([])}
            className="mr-2 rounded-full p-2 hover:bg-muted transition-colors"
            title="Limpiar selección"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      )}

      <SiteFooter />
    </div>
  )
}