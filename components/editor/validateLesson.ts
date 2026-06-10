// components/editor/validateLesson.ts
// Validación amable antes de guardar. No bloquea: avisa qué está
// incompleto para que el maestro decida si guarda igual o revisa.

import type { EditorState } from "./useEditorState"

const LETTERS = ["A", "B", "C", "D"]

export function validateLesson(state: EditorState): string[] {
  const issues: string[] = []

  // ── Preguntas del quiz ────────────────────────────────────
  state.questions.forEach((q, i) => {
    const n = i + 1
    const type = q.type ?? "multiple"

    if (!q.question?.trim()) {
      issues.push(`La pregunta ${n} no tiene enunciado.`)
    }

    if (type === "multiple") {
      const opts = (q.options ?? []).slice(0, 4)
      const empty = opts
        .map((o, oi) => (!o?.trim() ? LETTERS[oi] : null))
        .filter(Boolean)
      if (opts.length < 4 || empty.length > 0) {
        issues.push(`La pregunta ${n} tiene opciones vacías${empty.length ? ` (${empty.join(", ")})` : ""}.`)
      }
      const correct = (q.options ?? [])[q.correctAnswer ?? 0]
      if (correct !== undefined && !String(correct).trim()) {
        issues.push(`En la pregunta ${n}, la respuesta correcta apunta a una opción vacía.`)
      }
    }
  })

  // ── Secciones de contenido ────────────────────────────────
  state.secciones.forEach((sec, i) => {
    const n = i + 1
    switch (sec.tipo) {
      case "contexto":
      case "conclusion":
        if (!sec.contenido?.trim()) issues.push(`La sección ${n} (${sec.tipo}) está vacía.`)
        break
      case "enseñanza":
        if (!sec.texto?.trim()) issues.push(`La sección ${n} (enseñanza) no tiene texto de cita.`)
        break
      case "escrituras":
        if (!sec.citas?.length) {
          issues.push(`La sección ${n} (escrituras) no tiene citas.`)
        } else if (sec.citas.some(c => !c.referencia?.trim() && !c.texto?.trim())) {
          issues.push(`La sección ${n} (escrituras) tiene una cita sin referencia ni texto.`)
        }
        break
      case "cuestionario":
        if (!sec.preguntas?.length || sec.preguntas.every(p => !p.trim())) {
          issues.push(`La sección ${n} (cuestionario) no tiene preguntas escritas.`)
        }
        break
    }
  })

  if (state.secciones.length === 0 && state.questions.length === 0) {
    issues.push("La versión no tiene ni secciones ni preguntas. Los alumnos verían una lección vacía.")
  }

  return issues
}