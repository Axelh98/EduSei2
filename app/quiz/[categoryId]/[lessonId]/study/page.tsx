// app/quiz/[categoryId]/[lessonId]/study/page.tsx
import { notFound } from "next/navigation"
import { getCategoryById, getLessonById } from "@/lib/quiz-data"
import { getLessonContent } from "@/lib/content/loader"
import { fetchPublicOverride } from "@/lib/override-resolver"
import { StudyClient } from "./study-client"
import type { Metadata } from "next"
import type { Seccion } from "@/lib/types"

interface StudyPageProps {
  params:       Promise<{ categoryId: string; lessonId: string }>
  searchParams: Promise<{ data?: string; overrideId?: string }>
}

// ─── Helper de datos ──────────────────────────────────────────────────────────
//
// El mapa categoryId → contenido vive en lib/content/sources.ts; aquí ya no
// se replica. Precedencia: gana el archivo de contenido del curso, y si la
// lección no está ahí se usan las secciones de la lección base.

async function findLessonData(categoryId: string, lessonId: string) {
  const category = getCategoryById(categoryId)
  const base     = getLessonById(categoryId, lessonId)
  const content  = await getLessonContent(categoryId, lessonId)

  const secciones = (content?.secciones ?? []) as Seccion[]

  // Sin material de repaso no hay página de estudio (igual que antes).
  if (!secciones.length) return null

  return {
    title:        base?.lesson.title ?? "",
    secciones,
    categoryName: category?.name ?? categoryId,
    courseType:   category?.courseType ?? "seminario",
    chapterUrl:   base?.lesson.chapterUrl,
  }
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: StudyPageProps): Promise<Metadata> {
  const { categoryId, lessonId } = await params
  const data = await findLessonData(categoryId, lessonId)
  if (!data) return { title: "Repaso no encontrado" }
  return {
    title:       `Repaso: ${data.title}`,
    description: `Material de estudio para la lección ${data.title}`,
  }
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default async function StudyPage({ params, searchParams }: StudyPageProps) {
  const { categoryId, lessonId }           = await params
  const { data: recoveryData, overrideId } = await searchParams

  // 1. Datos base (título, categoryName, courseType)
  const lessonData = await findLessonData(categoryId, lessonId)
  if (!lessonData) notFound()

  // 2. Si hay overrideId, intentar cargar las secciones del maestro
  let secciones   = lessonData.secciones
  let lessonTitle = lessonData.title

  if (overrideId) {
    const override = await fetchPublicOverride(overrideId)
    if (override && override.secciones.length > 0) {
      secciones = override.secciones
      if (override.title) lessonTitle = override.title
    }
  }

  return (
    <StudyClient
      categoryId={categoryId}
      categoryName={lessonData.categoryName}
      lessonId={lessonId}
      lessonTitle={lessonTitle}
      secciones={secciones}
      courseType={lessonData.courseType as "seminario" | "instituto"}
      recoveryData={recoveryData}
      chapterUrl={lessonData.chapterUrl}
    />
  )
}
