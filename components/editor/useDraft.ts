"use client"
// components/editor/useDraft.ts
// Autoguardado de borrador en localStorage. Es la red de seguridad:
// si el maestro cierra la pestaña o navega sin guardar, al volver
// puede recuperar lo que estaba escribiendo.

import { useState, useEffect, useCallback, useRef } from "react"
import type { EditorState } from "./useEditorState"

interface StoredDraft {
  state:   EditorState
  savedAt: number
}

const PREFIX = "msi-editor-draft:"

function hasContent(s: EditorState): boolean {
  return s.secciones.length > 0 || s.questions.length > 0 || s.title.trim() !== ""
}

export function useDraft(key: string, state: EditorState, isDirty: boolean) {
  const draftKey = PREFIX + key
  const [pendingDraft, setPendingDraft] = useState<StoredDraft | null>(null)
  const decidedRef = useRef(false)

  // Al montar: ¿hay un borrador guardado de una sesión anterior?
  useEffect(() => {
    try {
      const raw = localStorage.getItem(draftKey)
      if (!raw) return
      const parsed = JSON.parse(raw) as StoredDraft
      if (parsed?.state && hasContent(parsed.state)) {
        setPendingDraft(parsed)
      } else {
        localStorage.removeItem(draftKey)
      }
    } catch {
      localStorage.removeItem(draftKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftKey])

  // Autoguardar (debounced) cada vez que hay cambios sin guardar.
  // No pisamos el borrador pendiente hasta que el maestro decida.
  useEffect(() => {
    if (pendingDraft && !decidedRef.current) return
    if (!isDirty || !hasContent(state)) return

    const t = setTimeout(() => {
      try {
        localStorage.setItem(draftKey, JSON.stringify({ state, savedAt: Date.now() }))
      } catch { /* storage lleno o bloqueado: ignorar */ }
    }, 1200)

    return () => clearTimeout(t)
  }, [state, isDirty, draftKey, pendingDraft])

  const clearDraft = useCallback(() => {
    decidedRef.current = true
    try { localStorage.removeItem(draftKey) } catch { /* noop */ }
    setPendingDraft(null)
  }, [draftKey])

  // El maestro eligió restaurar: devolvemos el estado y cerramos el banner
  const consumeDraft = useCallback((): EditorState | null => {
    decidedRef.current = true
    const s = pendingDraft?.state ?? null
    setPendingDraft(null)
    return s
  }, [pendingDraft])

  return { pendingDraft, clearDraft, consumeDraft }
}