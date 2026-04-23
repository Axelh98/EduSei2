"use client"

import { useState, use, useMemo } from "react" // Añadimos useMemo por rendimiento
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WeekCard } from "@/components/week-card"
import { getCategoryById, getTotalLessons, getTotalQuestions } from "@/lib/quiz-data"
// --- IMPORTANTE: Importa tus lecciones resumidas ---
import { leccionesResumidas } from "@/lib/data/antiguo-testamento-resumido" 
import { ArrowLeft, BookOpen, FileQuestion, Calendar, Share2, X } from "lucide-react"
import Link from "next/link"

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = use(params)
  const category = getCategoryById(categoryId)

  const [selectedLessons, setSelectedLessons] = useState<string[]>([])

  // --- LÓGICA DE UNIÓN DE DATOS ---
  // Usamos useMemo para que no se procese la unión en cada renderizado innecesariamente
  const weeksWithContent = useMemo(() => {
    if (!category) return []

    return category.weeks.map(week => ({
      ...week,
      lessons: week.lessons.map(lesson => {
        // Buscamos si existe contenido resumido para esta lección específica
        const contenidoExtra = leccionesResumidas.find(l => l.id === lesson.id)
        
        return {
          ...lesson,
          // Inyectamos las secciones si existen, si no, un array vacío
          secciones: contenidoExtra ? contenidoExtra.secciones : []
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
    const text = `Hola, aquí tienes las lecciones de Seminario que debes completar: ${finalUrl}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pb-20">
        <section className="border-b border-border bg-card px-4 pb-10 pt-8 md:px-6">
          {/* ... (Cabecera igual que antes) ... */}
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
            {/* ... Resto de la cabecera ... */}
          </div>
        </section>

        <section className="px-4 py-10 md:px-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            {/* CAMBIO AQUÍ: Usamos weeksWithContent en lugar de category.weeks */}
            {weeksWithContent.map((week, index) => (
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

      {/* ... (Botón flotante igual que antes) ... */}
      <SiteFooter />
    </div>
  )
}