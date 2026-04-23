"use client"

import { useState, use, useMemo } from "react" // Añadido useMemo
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WeekCard } from "@/components/week-card"
import { getCategoryById, getTotalLessons, getTotalQuestions } from "@/lib/quiz-data"
import { ArrowLeft, BookOpen, FileQuestion, Calendar, Share2, X } from "lucide-react"
import Link from "next/link"

// Importamos el archivo de resúmenes
import { leccionesResumidas } from "@/lib/data/antiguo-testamento-resumido"

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = use(params)
  const category = getCategoryById(categoryId)
  const [selectedLessons, setSelectedLessons] = useState<string[]>([])

  // UNIÓN DE DATOS: Inyectamos los resúmenes en las lecciones de la categoría
  const weeksWithContent = useMemo(() => {
    if (!category) return []
    return category.weeks.map(week => ({
      ...week,
      lessons: week.lessons.map(lesson => {
        const extra = leccionesResumidas.find(l => l.id === lesson.id)
        return {
          ...lesson,
          secciones: extra ? extra.secciones : []
        }
      })
    }))
  }, [category])

  if (!category) notFound()

  const totalLessons = getTotalLessons(category)
  const totalQuestions = getTotalQuestions(category)

  const toggleLesson = (lessonId: string) => {
    setSelectedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    )
  }

  const handleShare = () => {
    const baseUrl = window.location.origin
    const data = `${categoryId}:${selectedLessons.join(",")}`
    const finalUrl = `${baseUrl}/recuperar?data=${encodeURIComponent(data)}`
    window.open(`https://wa.me/?text=${encodeURIComponent(`Hola, completa estas lecciones: ${finalUrl}`)}`, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pb-20">
        <section className="border-b border-border bg-card px-4 pb-10 pt-8 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Volver al inicio
            </Link>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{category.name}</h1>
            {/* ... Resto de metadatos (Calendar, BookOpen, etc) ... */}
          </div>
        </section>

        <section className="px-4 py-10 md:px-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            {/* USAMOS weeksWithContent AQUÍ */}
            {weeksWithContent.map((week, index) => (
              <WeekCard
                key={week.id}
                week={week}
                categoryId={categoryId}
                defaultOpen={index === 0}
                selectedLessons={selectedLessons}
                onToggleLesson={toggleLesson}
              />
            ))}
          </div>
        </section>
      </main>

      {/* ... (Botón flotante igual que antes) ... */}
      <SiteFooter />
    </div>
  )
}