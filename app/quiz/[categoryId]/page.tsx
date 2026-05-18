"use client"

import { useState, use, useMemo, useEffect } from "react"
import { createPortal } from "react-dom"
import { notFound, useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WeekCard } from "@/components/week-card"
import { FlatLessonList } from "@/components/flat-lesson-list"
import { getCategoryById, getTotalLessons, getTotalQuestions, isFlatCategory } from "@/lib/quiz-data"
import { generateAssignmentMessage } from "@/lib/utils"
import { ArrowLeft, BookOpen, FileQuestion, Calendar, Layers, Share2, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { leccionesResumidasAT } from "@/lib/data/antiguo-testamento-resumido"
import { leccionesResumidasLM } from "@/lib/data/libro-de-mormon-resumido"

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

// IDs que forman parte del mismo curso de DyC
const DYC_IDS = ["doctrina-y-convenios-1", "doctrina-y-convenios-2"]

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = use(params)
  const router = useRouter()
  const category = getCategoryById(categoryId)

  const [selectedLessons, setSelectedLessons] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const isDyC = DYC_IDS.includes(categoryId)
  const activeSemester = categoryId === "doctrina-y-convenios-1" ? 1 : 2

  const weeksWithExtraContent = useMemo(() => {
    if (!category || isFlatCategory(category)) return []

    const resumidas =
      categoryId === "antiguo-testamento"
        ? leccionesResumidasAT
        : categoryId === "libro-de-mormon"
        ? leccionesResumidasLM
        : []

    return category.weeks.map((week) => ({
      ...week,
      lessons: week.lessons.map((lesson) => {
        const extraData = resumidas.find((l) => l.id === lesson.id)
        return {
          ...lesson,
          secciones: extraData ? extraData.secciones : (lesson.secciones ?? []),
        }
      }),
    }))
  }, [category, categoryId])

  if (!category) {
    notFound()
  }

  const totalLessons = getTotalLessons(category)
  const totalQuestions = getTotalQuestions(category)
  const isFlat = isFlatCategory(category)

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
    const recoveryUrl = `${baseUrl}/recuperar?data=${encodeURIComponent(data)}`

    const lessonTitles: string[] = []
    if (isFlat) {
      selectedLessons.forEach((id) => {
        const lesson = category.lessons.find((l) => l.id === id)
        if (lesson) lessonTitles.push(lesson.title)
      })
    } else {
      selectedLessons.forEach((id) => {
        for (const week of category.weeks) {
          const lesson = week.lessons.find((l) => l.id === id)
          if (lesson) { lessonTitles.push(lesson.title); break }
        }
      })
    }

    const mensaje = generateAssignmentMessage(
      categoryId,
      category.name,
      lessonTitles,
      recoveryUrl
    )

    window.open(`https://wa.me/?text=${encodeURIComponent(mensaje)}`, "_blank")
  }

  const fab = mounted && selectedLessons.length > 0
    ? createPortal(
        <div className="fixed bottom-8 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card p-2 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3 px-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {selectedLessons.length}
            </span>
            <span className="text-sm font-medium hidden sm:inline">
              {selectedLessons.length === 1 ? "lección seleccionada" : "lecciones seleccionadas"}
            </span>
          </div>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            <Share2 className="h-4 w-4" />
            Asignar por WhatsApp
          </button>
          <button
            onClick={() => setSelectedLessons([])}
            className="mr-2 rounded-full p-2 hover:bg-muted transition-colors"
            title="Limpiar selección"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>,
        document.body
      )
    : null

  return (
    <>
      {fab}
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1 pb-32">
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

              {/* Switcher de semestre — solo para DyC */}
              {isDyC && (
                <div className="mt-5 inline-flex rounded-lg border border-border bg-muted/50 p-1 gap-1">
                  <button
                    onClick={() => {
                      setSelectedLessons([])
                      router.replace("/quiz/doctrina-y-convenios-1")
                    }}
                    className={cn(
                      "rounded-md px-4 py-1.5 text-sm font-semibold transition-all",
                      activeSemester === 1
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    1° Semestre
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLessons([])
                      router.replace("/quiz/doctrina-y-convenios-2")
                    }}
                    className={cn(
                      "rounded-md px-4 py-1.5 text-sm font-semibold transition-all",
                      activeSemester === 2
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    2° Semestre
                  </button>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-6">
                {!isFlat && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">{category.weeks.length}</span>{" "}
                    {category.weeks.length === 1 ? "semana" : "semanas"}
                  </div>
                )}
                {isFlat && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Layers className="h-4 w-4 text-primary" />
                    <span className="font-medium">
                      {new Set(category.lessons.map((l) => l.unitTitle).filter(Boolean)).size}
                    </span>{" "}
                    unidades
                  </div>
                )}
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
            <div className="mx-auto max-w-4xl">
              {isFlat ? (
                <FlatLessonList
                  lessons={category.lessons}
                  categoryId={category.id}
                  selectedLessons={selectedLessons}
                  onToggleLesson={toggleLesson}
                />
              ) : (
                <div className="flex flex-col gap-4">
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
              )}
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}