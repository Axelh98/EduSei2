"use client"
// app/quiz/[categoryId]/page.tsx
// CAMBIOS respecto al original:
//  - Importa OverridePicker y recovery-format
//  - handleShare ahora abre el picker antes de generar el link
//  - Si hay overrides seleccionados, usa formato v2; si no, usa el formato original
//  - Usa shareViaWhatsApp() para compatibilidad con Safari iOS
//  - Muestra toast indicando que el mensaje quedó copiado al portapapeles

import { useState, use, useMemo, useEffect } from "react"
import { createPortal } from "react-dom"
import { notFound, useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WeekCard } from "@/components/week-card"
import { FlatLessonList } from "@/components/flat-lesson-list"
import { OverridePicker } from "@/components/override-picker"
import {
  getCategoryById,
  getTotalLessons,
  getTotalQuestions,
  isFlatCategory,
  getSemesterSiblings,
  getWeeksWithExtendedContent,
  getLessonById,
} from "@/lib/quiz-data"
import {
  encodeRecoveryPayload,
  hasOverrides,
  type RecoveryItem,
} from "@/lib/recovery-format"
import { generateAssignmentMessage } from "@/lib/utils"
import { shareViaWhatsApp } from "@/lib/whatsapp-share"
import { trackLessonsShared } from "@/lib/analytics"
import { ArrowLeft, BookOpen, FileQuestion, Calendar, Layers, Share2, X, Check } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = use(params)
  const router = useRouter()
  const category = getCategoryById(categoryId)

  const [selectedLessons, setSelectedLessons] = useState<string[]>([])
  const [mounted, setMounted]     = useState(false)
  const [showPicker, setShowPicker] = useState(false)
  const [showCopiedToast, setShowCopiedToast] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Auto-ocultar el toast después de unos segundos
  useEffect(() => {
    if (!showCopiedToast) return
    const t = setTimeout(() => setShowCopiedToast(false), 4500)
    return () => clearTimeout(t)
  }, [showCopiedToast])

  // Necesario antes de los useMemo para que TypeScript estreche el tipo.
  if (!category) notFound()
  const cat = category!

  const semesterSiblings = useMemo(
    () => getSemesterSiblings(cat),
    [cat]
  )
  const activeSemester =
    !isFlatCategory(cat) && (cat as any)?.semester === 2 ? 2 : 1

  const weeksWithExtraContent = useMemo(() => {
    if (isFlatCategory(cat)) return []
    return getWeeksWithExtendedContent(cat)
  }, [cat])

  const totalLessons   = getTotalLessons(cat)
  const totalQuestions = getTotalQuestions(cat)
  const isFlat         = isFlatCategory(cat)

  const toggleLesson = (lessonId: string) => {
    setSelectedLessons(prev =>
      prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
    )
  }

  // ── Construir lista de lecciones seleccionadas con títulos ──
  const selectedLessonItems = useMemo(() => {
    return selectedLessons.flatMap(lessonId => {
      const result = getLessonById(categoryId, lessonId)
      if (!result) return []
      return [{ categoryId, lessonId, title: result.lesson.title }]
    })
  }, [selectedLessons, categoryId])

  // ── Share: abrir picker ────────────────────────────────────
  function handleShareClick() {
    setShowPicker(true)
  }

  // ── Share: confirmar desde el picker ──────────────────────
  function handlePickerConfirm(selections: Record<string, string | null>) {
    setShowPicker(false)

    const items: RecoveryItem[] = selectedLessonItems.map(lesson => ({
      categoryId:  lesson.categoryId,
      lessonId:    lesson.lessonId,
      overrideId:  selections[`${lesson.categoryId}-${lesson.lessonId}`] ?? undefined,
    }))

    const lessonTitles = selectedLessonItems.map(l => l.title)

    // Analytics
    trackLessonsShared({
      categoryId:   cat.id,
      categoryName: cat.name,
      lessonTitles,
      courseType:   cat.courseType,
    })

    let recoveryUrl: string
    const baseUrl = window.location.origin

    if (hasOverrides(items)) {
      const encoded = encodeRecoveryPayload(items)
      recoveryUrl = `${baseUrl}/recuperar?data=${encoded}`
    } else {
      const data = `${categoryId}:${selectedLessons.join(",")}`
      recoveryUrl = `${baseUrl}/recuperar?data=${encodeURIComponent(data)}`
    }

    const mensaje = generateAssignmentMessage(
      categoryId,
      cat.name,
      lessonTitles,
      recoveryUrl
    )

    // Compartir con compatibilidad mejorada en Safari iOS.
    // shareViaWhatsApp() debe ejecutarse sincrónicamente en este handler
    // (sin await previo) para que iOS Safari no bloquee la navegación.
    shareViaWhatsApp(mensaje)
    setShowCopiedToast(true)
  }

  // ── FAB ───────────────────────────────────────────────────
  const fab = mounted && selectedLessons.length > 0
    ? createPortal(
        <div
          role="region"
          aria-label="Lecciones seleccionadas"
          className="fixed bottom-8 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card p-2 shadow-2xl animate-in fade-in slide-in-from-bottom-4"
        >
          <div className="flex items-center gap-3 px-4">
            <span
              aria-hidden="true"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
            >
              {selectedLessons.length}
            </span>
            <span aria-hidden="true" className="text-sm font-medium hidden sm:inline">
              {selectedLessons.length === 1 ? "lección seleccionada" : "lecciones seleccionadas"}
            </span>
          </div>
          <button
            onClick={handleShareClick}
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-md sm:px-6"
          >
            <Share2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="sm:hidden">Asignar ({selectedLessons.length})</span>
            <span className="hidden sm:inline">Asignar por WhatsApp</span>
          </button>
          <button
            onClick={() => setSelectedLessons([])}
            aria-label="Limpiar selección"
            className="mr-2 rounded-full p-2 hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </button>
        </div>,
        document.body
      )
    : null

  // ── Portal del OverridePicker ─────────────────────────────
  const pickerPortal = mounted && showPicker
    ? createPortal(
        <OverridePicker
          lessons={selectedLessonItems}
          onShare={handlePickerConfirm}
          onCancel={() => setShowPicker(false)}
        />,
        document.body
      )
    : null

  // ── Toast: mensaje copiado al portapapeles ────────────────
  const copiedToast = mounted && showCopiedToast
    ? createPortal(
        <div
          role="status"
          aria-live="polite"
          className="fixed top-6 left-1/2 z-[10000] -translate-x-1/2 flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-2xl animate-in fade-in slide-in-from-top-4 max-w-sm"
        >
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
            <Check className="h-4 w-4 text-white" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">
              Mensaje copiado al portapapeles
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
              Si WhatsApp no muestra el texto automáticamente, pegalo en el chat (mantené presionado → Pegar).
            </p>
          </div>
          <button
            onClick={() => setShowCopiedToast(false)}
            aria-label="Cerrar"
            className="rounded-full p-1 hover:bg-muted transition-colors shrink-0"
          >
            <X className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          </button>
        </div>,
        document.body
      )
    : null

  return (
    <>
      {fab}
      {pickerPortal}
      {copiedToast}

      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1 pb-32">
          <section className="border-b border-border bg-card px-4 pb-10 pt-8 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver al inicio
              </Link>

              <h1 className="font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
                {cat.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {cat.description}
              </p>

              {/* Switcher de semestre */}
              {semesterSiblings && (
                <div
                  role="group"
                  aria-label="Seleccionar semestre"
                  className="mt-5 inline-flex rounded-lg border border-border bg-muted/50 p-1 gap-1"
                >
                  <button
                    onClick={() => { setSelectedLessons([]); router.replace(`/quiz/${semesterSiblings.sem1Id}`) }}
                    aria-pressed={activeSemester === 1}
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
                    onClick={() => { setSelectedLessons([]); router.replace(`/quiz/${semesterSiblings.sem2Id}`) }}
                    aria-pressed={activeSemester === 2}
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
                    <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="font-medium">{cat.weeks.length}</span>{" "}
                    {cat.weeks.length === 1 ? "semana" : "semanas"}
                  </div>
                )}
                {isFlat && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Layers className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="font-medium">
                      {new Set(cat.lessons.map((l: any) => l.unitTitle).filter(Boolean)).size}
                    </span>{" "}
                    unidades
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="font-medium">{totalLessons}</span>{" "}
                  {totalLessons === 1 ? "lección" : "lecciones"}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileQuestion className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="font-medium">{totalQuestions}</span> preguntas evaluativas
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-10 md:px-6">
            <div className="mx-auto max-w-4xl">
              {isFlat ? (
                <FlatLessonList
                  lessons={cat.lessons}
                  categoryId={cat.id}
                  selectedLessons={selectedLessons}
                  onToggleLesson={toggleLesson}
                />
              ) : (
                <div className="flex flex-col gap-4">
                  {weeksWithExtraContent.map((week, index) => (
                    <WeekCard
                      key={week.id}
                      week={week}
                      categoryId={cat.id}
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