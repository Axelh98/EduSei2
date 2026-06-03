// hooks/use-reading-progress.ts
"use client"

import { useEffect, useRef } from "react"

export function useReadingProgress(contentId: string) {
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Crear o reutilizar el elemento de progreso
    let bar = document.getElementById("reading-progress")
    if (!bar) {
      bar = document.createElement("div")
      bar.id = "reading-progress"
      document.body.prepend(bar)
    }

    const content = document.getElementById(contentId)

    const update = () => {
      const scrollTop    = window.scrollY
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight
      const raw          = docHeight > 0 ? scrollTop / docHeight : 0
      const pct          = Math.min(Math.max(raw, 0), 1) * 100
      if (bar) bar.style.width = `${pct}%`
    }

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    update() // estado inicial

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      // Limpiar la barra al salir de la página de estudio
      if (bar) bar.style.width = "0%"
    }
  }, [contentId])
}