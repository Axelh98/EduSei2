import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WeekCard } from "@/components/week-card"
import { categories, getCategoryById, getTotalLessons, getTotalQuestions } from "@/lib/quiz-data"
import { ArrowLeft, BookOpen, FileQuestion, Calendar } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categoryId } = await params
  const category = getCategoryById(categoryId)
  if (!category) return { title: "No encontrado" }
  return {
    title: `${category.name} - Seminario Cuestionarios`,
    description: category.description,
  }
}

export function generateStaticParams() {
  return categories.map((category) => ({
    categoryId: category.id,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params
  const category = getCategoryById(categoryId)

  if (!category) {
    notFound()
  }

  const totalLessons = getTotalLessons(category)
  const totalQuestions = getTotalQuestions(category)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
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
                {totalLessons === 1 ? "leccion" : "lecciones"}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileQuestion className="h-4 w-4 text-primary" />
                <span className="font-medium">{totalQuestions}</span> preguntas
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            {category.weeks.map((week, index) => (
              <WeekCard
                key={week.id}
                week={week}
                categoryId={category.id}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
