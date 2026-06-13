// app/quiz/[categoryId]/[lessonId]/study/page.tsx
import { notFound } from "next/navigation"
import { getCategoryById, isFlatCategory } from "@/lib/quiz-data"
import { leccionesResumidasAT } from "@/lib/data/antiguo-testamento-primer-semestre"
import { leccionesResumidasLM } from "@/lib/data/libro-de-mormon-primer-semestre"
import { leccionesResumidasLM2 } from "@/lib/data/libro-de-mormon-2-semestre"
import { doctrinasConveniosLeccionesResumen } from "@/lib/data/doctrinas-convenios/DC-resumentotal"
import { leccionesResumidasR250 } from "@/lib/data/religion-250/religion-250-resumen"
import { leccionesResumidasR200 } from "@/lib/data/religion-200/religion-200-resumen"
import { fetchPublicOverride } from "@/lib/override-resolver"
import { StudyClient } from "./study-client"
import type { Metadata } from "next"
import type { Seccion } from "@/lib/types"

interface StudyPageProps {
  params:       Promise<{ categoryId: string; lessonId: string }>
  searchParams: Promise<{ data?: string; overrideId?: string }>
}

// ─── Helper de datos estáticos ────────────────────────────────────────────────

function findLessonData(categoryId: string, lessonId: string) {
  const category = getCategoryById(categoryId)

  if (category && isFlatCategory(category)) {
    const lesson = category.lessons.find((l) => l.id === lessonId)
    if (lesson?.secciones?.length) {
      return {
        title:        lesson.title,
        secciones:    lesson.secciones as Seccion[],
        categoryName: category.name,
        courseType:   category.courseType,
      }
    }
  }

  const resumeMap: Record<string, typeof leccionesResumidasAT> = {
    "antiguo-testamento-1":    leccionesResumidasAT,
    "antiguo-testamento-2":    leccionesResumidasAT,
    "libro-de-mormon-1":       leccionesResumidasLM,
    "libro-de-mormon-2":       leccionesResumidasLM2,
    "doctrina-y-convenios-1":  doctrinasConveniosLeccionesResumen,
    "religion-250":            leccionesResumidasR250,
    "religion-200":            leccionesResumidasR200,
  }
  const source = resumeMap[categoryId]
  if (source) {
    const r = source.find((l) => l.id === lessonId)
    if (r) {
      return {
        title:        r.title,
        secciones:    r.secciones as Seccion[],
        categoryName: category?.name ?? categoryId,
        courseType:   category?.courseType ?? "seminario",
      }
    }
  }

  return null
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: StudyPageProps): Promise<Metadata> {
  const { categoryId, lessonId } = await params
  const data = findLessonData(categoryId, lessonId)
  if (!data) return { title: "Repaso no encontrado" }
  return {
    title:       `Repaso: ${data.title}`,
    description: `Material de estudio para la lección ${data.title}`,
  }
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default async function StudyPage({ params, searchParams }: StudyPageProps) {
  const { categoryId, lessonId }          = await params
  const { data: recoveryData, overrideId } = await searchParams

  // 1. Datos base (título, categoryName, courseType)
  const lessonData = findLessonData(categoryId, lessonId)
  if (!lessonData) notFound()

  // 2. Si hay overrideId, intentar cargar las secciones del maestro
  let secciones = lessonData.secciones
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
    />
  )
}