"use client"
// components/editor/useEditorState.ts

import { useState, useCallback } from "react"
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

export function useEditorState(initial?: Partial<EditorState>) {
  const [state, setState] = useState<EditorState>({ ...EMPTY_STATE, ...initial })

  // ── Campo simple ─────────────────────────────────────────
  const setField = useCallback(<K extends keyof EditorState>(
    key: K, value: EditorState[K]
  ) => {
    setState(s => ({ ...s, [key]: value }))
  }, [])

  // ── Cargar contenido original de una lección ──────────────
  // Se llama cuando el maestro selecciona una lección y quiere
  // partir del contenido existente como base de edición.
  const loadFromLesson = useCallback((secciones: Seccion[], questions: Question[]) => {
    setState(s => ({ ...s, secciones, questions }))
  }, [])

  // ── Secciones ────────────────────────────────────────────
  const addSeccion = useCallback((tipo: Seccion["tipo"]) => {
    setState(s => ({ ...s, secciones: [...s.secciones, buildEmptySeccion(tipo)] }))
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
          id:            s.questions.length + 1,
          question:      "",
          type:          "multiple" as const,
          options:       ["", "", "", ""],
          correctAnswer: 0,
          explanation:   "",
        },
      ],
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
    setField,
    loadFromLesson,
    addSeccion,
    updateSeccion,
    removeSeccion,
    moveSeccion,
    addQuestion,
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