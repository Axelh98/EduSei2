"use client"

import { useState, useCallback } from "react"
import { getSavedStudentName, saveStudentName } from "@/lib/utils"

/**
 * Hook para compartir por WhatsApp sin window.prompt().
 *
 * Uso:
 *   const { modalNode, shareToWhatsApp } = useShareWithName()
 *
 *   // En el JSX, renderizar modalNode en cualquier lugar del árbol:
 *   return <>{modalNode}<button onClick={() => shareToWhatsApp(mensaje)}>Compartir</button></>
 *
 * Flujo:
 *   - Si hay nombre guardado → window.open() inmediato (sin interrupciones, iOS-safe)
 *   - Si no hay nombre → muestra modal propio → guarda nombre → window.open()
 *
 * El truco para iOS: guardamos la URL de WhatsApp en una ref ANTES de mostrar
 * el modal, y la abrimos con un <a> que el usuario "clickea" programáticamente
 * dentro del handler del botón "Confirmar" — así el contexto de gesto de usuario
 * se mantiene en toda la cadena.
 */
export function useShareWithName() {
  const [modalOpen, setModalOpen] = useState(false)
  const [pendingUrl, setPendingUrl] = useState<string | null>(null)

  const openWhatsApp = useCallback((url: string) => {
    // Crear un <a> temporal y disparar el click — más confiable que window.open en iOS
    const a = document.createElement("a")
    a.href = url
    a.target = "_blank"
    a.rel = "noopener noreferrer"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }, [])

  /**
   * Llamar desde el onClick del botón de compartir.
   * @param buildMessage función que recibe el nombre y devuelve el texto del mensaje
   */
  const shareToWhatsApp = useCallback(
    (buildMessage: (nombre: string) => string) => {
      const savedName = getSavedStudentName()

      if (savedName) {
        // Nombre ya guardado → abrir directo, sin interrupciones
        const mensaje = buildMessage(savedName)
        const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`
        openWhatsApp(url)
      } else {
        // No hay nombre → mostrar modal
        // Guardamos el builder para usarlo cuando el usuario confirme
        setPendingUrl(null)
        // Usamos una ref-like trick: guardamos el builder en state
        // como string placeholder, y lo reconstruimos en onConfirm
        setModalOpen(true)
        // Guardamos el buildMessage como efecto secundario a través de closure
        // usando el estado pendingUrl como señal, y el builder como parámetro
        // del handler onConfirm que se pasa al modal
        _pendingBuilder = buildMessage
      }
    },
    [openWhatsApp]
  )

  const handleConfirm = useCallback(
    (nombre: string) => {
      saveStudentName(nombre)
      setModalOpen(false)

      if (_pendingBuilder) {
        const mensaje = _pendingBuilder(nombre)
        const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`
        // Pequeño delay para que el modal se cierre antes de abrir WhatsApp
        // Esto evita conflictos de foco en iOS Safari
        setTimeout(() => openWhatsApp(url), 80)
        _pendingBuilder = null
      }
    },
    [openWhatsApp]
  )

  const handleCancel = useCallback(() => {
    setModalOpen(false)
    _pendingBuilder = null
  }, [])

  return {
    modalOpen,
    handleConfirm,
    handleCancel,
    shareToWhatsApp,
  }
}

// Variable módulo para el builder pendiente
// (no necesita ser state porque no dispara re-renders)
let _pendingBuilder: ((nombre: string) => string) | null = null