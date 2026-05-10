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

// ─── Keys ─────────────────────────────────────────────────────────────────────

const NOTES_KEY   = "msi-lesson-notes"
const ANSWERS_KEY = "msi-written-answers"

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

// ─── Exportación / importación completa ──────────────────────────────────────

export function exportAllData() {
  const data = {
    version:        "1.0",
    exportDate:     new Date().toISOString(),
    notes:          parseJSON<LessonNote>(NOTES_KEY),
    writtenAnswers: parseJSON<WrittenAnswer>(ANSWERS_KEY),
    completados:    JSON.parse(localStorage.getItem("seminario-completados") || "[]"),
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement("a")
  a.href     = url
  a.download = `msi-backup-${new Date().toLocaleDateString("es-AR").replace(/\//g, "-")}.json`
  a.click()
  URL.revokeObjectURL(url)
}

export function importAllData(file: File): Promise<void> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string)
        if (!data.version) throw new Error("Archivo inválido")
        if (data.notes)          persistJSON(NOTES_KEY,   data.notes)
        if (data.writtenAnswers) persistJSON(ANSWERS_KEY, data.writtenAnswers)
        if (data.completados)    localStorage.setItem("seminario-completados", JSON.stringify(data.completados))
        resolve()
      } catch {
        reject(new Error("No se pudo leer el archivo de backup"))
      }
    }
    reader.readAsText(file)
  })
}