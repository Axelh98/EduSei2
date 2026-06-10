"use client"
// components/editor/useEditorState.ts

import { useState, useCallback, useRef } from "react"
import type { Seccion, Question } from "@/lib/types"

export interface EditorState {
  categoryId: string
  lessonId:   string
  title:      string
  secciones:  Seccion[]
  questions:  Question[]
  isPublic:   boolean
}

const EMPTY_STATE: EditorState = {
  categoryId: "",
  lessonId:   "",
  title:      "",
  secciones:  [],
  questions:  [],
  isPublic:   false,
}

// id único para preguntas nuevas: max(id existente) + 1.
// Evita colisiones cuando se borra y se vuelve a agregar.
function nextQuestionId(questions: Question[]): number {
  return questions.reduce((max, q) => Math.max(max, q.id ?? 0), 0) + 1
}

export function useEditorState(initial?: Partial<EditorState>) {
  const [state, setState] = useState<EditorState>({ ...EMPTY_STATE, ...initial })

  // Snapshot del estado inicial para detectar cambios sin guardar
  const initialJson = useRef(JSON.stringify({ ...EMPTY_STATE, ...initial }))
  const isDirty = JSON.stringify(state) !== initialJson.current

  // Después de guardar (o restaurar borrador) re-anclamos el snapshot
  const markClean = useCallback(() => {
    setState(s => {
      initialJson.current = JSON.stringify(s)
      return s
    })
  }, [])

  // ── Campo simple ─────────────────────────────────────────
  const setField = useCallback(<K extends keyof EditorState>(
    key: K, value: EditorState[K]
  ) => {
    setState(s => ({ ...s, [key]: value }))
  }, [])

  // ── Reemplazar todo el estado (restaurar borrador) ────────
  const replaceState = useCallback((next: EditorState) => {
    setState(next)
  }, [])

  // ── Cargar contenido original de una lección ──────────────
  const loadFromLesson = useCallback((secciones: Seccion[], questions: Question[]) => {
    setState(s => ({
      ...s,
      secciones,
      // re-numerar ids para garantizar unicidad
      questions: questions.map((q, i) => ({ ...q, id: i + 1 })),
    }))
  }, [])

  // ── Secciones ────────────────────────────────────────────
  const addSeccion = useCallback((tipo: Seccion["tipo"]) => {
    setState(s => ({ ...s, secciones: [...s.secciones, buildEmptySeccion(tipo)] }))
  }, [])

  // Agregar una sección ya armada (desde el contenido original)
  const addSeccionExistente = useCallback((seccion: Seccion) => {
    setState(s => ({ ...s, secciones: [...s.secciones, seccion] }))
  }, [])

  const updateSeccion = useCallback((idx: number, seccion: Seccion) => {
    setState(s => {
      const secciones = [...s.secciones]
      secciones[idx] = seccion
      return { ...s, secciones }
    })
  }, [])

  const removeSeccion = useCallback((idx: number) => {
    setState(s => ({ ...s, secciones: s.secciones.filter((_, i) => i !== idx) }))
  }, [])

  const moveSeccion = useCallback((from: number, to: number) => {
    setState(s => {
      if (to < 0 || to >= s.secciones.length) return s
      const secciones = [...s.secciones]
      const [moved] = secciones.splice(from, 1)
      secciones.splice(to, 0, moved)
      return { ...s, secciones }
    })
  }, [])

  // ── Preguntas ────────────────────────────────────────────
  const addQuestion = useCallback(() => {
    setState(s => ({
      ...s,
      questions: [
        ...s.questions,
        {
          id:            nextQuestionId(s.questions),
          question:      "",
          type:          "multiple" as const,
          options:       ["", "", "", ""],
          correctAnswer: 0,
          explanation:   "",
        },
      ],
    }))
  }, [])

  // Agregar una pregunta ya armada (desde el contenido original)
  const addQuestionExistente = useCallback((question: Question) => {
    setState(s => ({
      ...s,
      questions: [...s.questions, { ...question, id: nextQuestionId(s.questions) }],
    }))
  }, [])

  const updateQuestion = useCallback((idx: number, q: Question) => {
    setState(s => {
      const questions = [...s.questions]
      questions[idx] = q
      return { ...s, questions }
    })
  }, [])

  const removeQuestion = useCallback((idx: number) => {
    setState(s => ({ ...s, questions: s.questions.filter((_, i) => i !== idx) }))
  }, [])

  return {
    state,
    isDirty,
    markClean,
    setField,
    replaceState,
    loadFromLesson,
    addSeccion,
    addSeccionExistente,
    updateSeccion,
    removeSeccion,
    moveSeccion,
    addQuestion,
    addQuestionExistente,
    updateQuestion,
    removeQuestion,
  }
}

function buildEmptySeccion(tipo: Seccion["tipo"]): Seccion {
  switch (tipo) {
    case "contexto":    return { tipo, contenido: "" }
    case "conclusion":  return { tipo, contenido: "" }
    case "enseñanza":   return { tipo, autor: "", fuente: "", texto: "" }
    case "escrituras":  return { tipo, citas: [{ referencia: "", texto: "" }] }
    case "cuestionario":return { tipo, preguntas: [""] }
    case "resumen":     return { tipo, bloques: [] }
    default:            return { tipo: "contexto", contenido: "" }
  }
}