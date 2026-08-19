import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { QuizClient } from "@/components/quiz-client"
import { getLessonById } from "@/lib/quiz-data"
import { getLessonContent } from "@/lib/content/loader"
import type { Metadata } from "next"

interface LessonPageProps {
  params: Promise<{ categoryId: string; lessonId: string }>
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { categoryId, lessonId } = await params
  const result = getLessonById(categoryId, lessonId)
  if (!result) return { title: "Leccion no encontrada" }
  return {
    title: `${result.lesson.title} - ${result.category.name}`,
    description: result.lesson.description,
  }
}

export default async function LessonQuizPage({ params }: LessonPageProps) {
  const { categoryId, lessonId } = await params
  const result = getLessonById(categoryId, lessonId)

  if (!result) {
    notFound()
  }

  const { lesson, category } = result

  // El catálogo solo trae metadatos; las preguntas se cargan acá, ya en el
  // servidor, para que no viajen al navegador las de los demás cursos.
  const content = await getLessonContent(categoryId, lessonId)
  const questions = content?.questions ?? lesson.questions

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 px-4 py-8 md:px-6 md:py-12">
        <QuizClient
          questions={questions}
          categoryName={category.name}
          categoryId={category.id}
          lessonId={lessonId}
          lessonTitle={lesson.title}
          courseType="seminario"
        />
      </main>
      <SiteFooter />
    </div>
  )
}


