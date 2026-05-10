// lib/notes-storage.ts

// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface LessonNote {
  categoryId: string
  lessonId: string
  content: string
  lastUpdated: string
}

export interface WrittenAnswer {
  categoryId: string
  lessonId: string
  questionId: string
  answer: string
  lastUpdated: string
}

export interface BackupData {
  version: string
  exportDate: string
  studentName: string
  notes: LessonNote[]
  writtenAnswers: WrittenAnswer[]
  // "seminario-completados" guarda AMBOS programas (seminario + instituto)
  // con el formato "categoryId-lessonTitle"
  completados: string[]
}

// ─── Keys ─────────────────────────────────────────────────────────────────────

const NOTES_KEY      = "msi-lesson-notes"
const ANSWERS_KEY    = "msi-written-answers"
const COMPLETADOS_KEY = "seminario-completados"   // usado para ambos programas
const STUDENT_KEY    = "msi-student-name"

// ─── Helpers internos ─────────────────────────────────────────────────────────

function parseJSON<T>(key: string): T[] {
  if (typeof window === "undefined") return []
  try {
    return JSON.parse(localStorage.getItem(key) || "[]")
  } catch {
    return []
  }
}

function persistJSON<T>(key: string, data: T[]) {
  if (typeof window === "undefined") return
  localStorage.setItem(key, JSON.stringify(data))
}

// ─── Notas ────────────────────────────────────────────────────────────────────

export function getLessonNote(categoryId: string, lessonId: string): LessonNote | null {
  return parseJSON<LessonNote>(NOTES_KEY).find(
    (n) => n.categoryId === categoryId && n.lessonId === lessonId
  ) ?? null
}

export function saveLessonNote(categoryId: string, lessonId: string, content: string) {
  const notes = parseJSON<LessonNote>(NOTES_KEY)
  const idx   = notes.findIndex(
    (n) => n.categoryId === categoryId && n.lessonId === lessonId
  )
  const note: LessonNote = {
    categoryId, lessonId, content,
    lastUpdated: new Date().toISOString(),
  }
  if (idx >= 0) notes[idx] = note
  else notes.push(note)
  persistJSON(NOTES_KEY, notes)
}

export function deleteLessonNote(categoryId: string, lessonId: string) {
  persistJSON(
    NOTES_KEY,
    parseJSON<LessonNote>(NOTES_KEY).filter(
      (n) => !(n.categoryId === categoryId && n.lessonId === lessonId)
    )
  )
}

// ─── Respuestas escritas ──────────────────────────────────────────────────────

export function getWrittenAnswer(
  categoryId: string,
  lessonId: string,
  questionId: string
): WrittenAnswer | null {
  return parseJSON<WrittenAnswer>(ANSWERS_KEY).find(
    (a) =>
      a.categoryId === categoryId &&
      a.lessonId   === lessonId   &&
      a.questionId === questionId
  ) ?? null
}

export function saveWrittenAnswer(
  categoryId: string,
  lessonId: string,
  questionId: string,
  answer: string
) {
  const answers = parseJSON<WrittenAnswer>(ANSWERS_KEY)
  const idx     = answers.findIndex(
    (a) =>
      a.categoryId === categoryId &&
      a.lessonId   === lessonId   &&
      a.questionId === questionId
  )
  const entry: WrittenAnswer = {
    categoryId, lessonId, questionId, answer,
    lastUpdated: new Date().toISOString(),
  }
  if (idx >= 0) answers[idx] = entry
  else answers.push(entry)
  persistJSON(ANSWERS_KEY, answers)
}

export function deleteWrittenAnswer(
  categoryId: string,
  lessonId: string,
  questionId: string
) {
  persistJSON(
    ANSWERS_KEY,
    parseJSON<WrittenAnswer>(ANSWERS_KEY).filter(
      (a) => !(
        a.categoryId === categoryId &&
        a.lessonId   === lessonId   &&
        a.questionId === questionId
      )
    )
  )
}

// ─── Exportación ─────────────────────────────────────────────────────────────
// Incluye TODOS los datos: notas, respuestas, completados (seminario+instituto)
// y nombre del estudiante

export function exportAllData() {
  if (typeof window === "undefined") return

  const backup: BackupData = {
    version:        "1.1",
    exportDate:     new Date().toISOString(),
    studentName:    localStorage.getItem(STUDENT_KEY) ?? "",
    notes:          parseJSON<LessonNote>(NOTES_KEY),
    writtenAnswers: parseJSON<WrittenAnswer>(ANSWERS_KEY),
    // Esta key almacena lecciones completadas de AMBOS programas
    completados:    parseJSON<string>(COMPLETADOS_KEY),
  }

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement("a")
  a.href     = url
  a.download = `msi-backup-${new Date().toLocaleDateString("es-AR").replace(/\//g, "-")}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// ─── Importación ─────────────────────────────────────────────────────────────
// Compatible con v1.0 (solo seminario) y v1.1 (seminario + instituto)

export function importAllData(file: File): Promise<{ imported: string[] }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onerror = () => reject(new Error("No se pudo leer el archivo"))

    reader.onload = (e) => {
      try {
        const raw  = e.target?.result
        if (typeof raw !== "string") throw new Error("Archivo inválido")

        const data = JSON.parse(raw) as Partial<BackupData>
        if (!data.version) throw new Error("El archivo no es un backup de MSI")

        const imported: string[] = []

        // Notas
        if (Array.isArray(data.notes) && data.notes.length > 0) {
          // Merge: no pisar notas existentes más recientes
          const existing = parseJSON<LessonNote>(NOTES_KEY)
          for (const incoming of data.notes) {
            const idx = existing.findIndex(
              (n) => n.categoryId === incoming.categoryId && n.lessonId === incoming.lessonId
            )
            if (idx < 0) {
              existing.push(incoming)
            } else if (new Date(incoming.lastUpdated) > new Date(existing[idx].lastUpdated)) {
              existing[idx] = incoming
            }
          }
          persistJSON(NOTES_KEY, existing)
          imported.push(`${data.notes.length} notas`)
        }

        // Respuestas escritas
        if (Array.isArray(data.writtenAnswers) && data.writtenAnswers.length > 0) {
          const existing = parseJSON<WrittenAnswer>(ANSWERS_KEY)
          for (const incoming of data.writtenAnswers) {
            const idx = existing.findIndex(
              (a) =>
                a.categoryId === incoming.categoryId &&
                a.lessonId   === incoming.lessonId   &&
                a.questionId === incoming.questionId
            )
            if (idx < 0) existing.push(incoming)
            else if (new Date(incoming.lastUpdated) > new Date(existing[idx].lastUpdated)) {
              existing[idx] = incoming
            }
          }
          persistJSON(ANSWERS_KEY, existing)
          imported.push(`${data.writtenAnswers.length} respuestas escritas`)
        }

        // Completados — funciona para seminario e instituto por igual
        // ya que ambos usan la misma key "seminario-completados"
        if (Array.isArray(data.completados) && data.completados.length > 0) {
          const existing = new Set(parseJSON<string>(COMPLETADOS_KEY))
          for (const entry of data.completados) existing.add(entry)
          persistJSON(COMPLETADOS_KEY, Array.from(existing))
          imported.push(`${data.completados.length} lecciones completadas`)
        }

        // Nombre del estudiante (solo si no hay uno guardado ya)
        if (data.studentName && !localStorage.getItem(STUDENT_KEY)) {
          localStorage.setItem(STUDENT_KEY, data.studentName)
          imported.push("nombre del estudiante")
        }

        resolve({ imported })
      } catch (err) {
        reject(err instanceof Error ? err : new Error("Error al procesar el backup"))
      }
    }

    reader.readAsText(file)
  })
}