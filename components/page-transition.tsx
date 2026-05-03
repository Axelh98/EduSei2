"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: React.ReactNode
}

/**
 * Envuelve el contenido de la página con un fade-in suave al cambiar de ruta.
 * Usar en app/layout.tsx envolviendo {children}.
 *
 * No usa framer-motion ni librerías externas — solo la Web Animations API
 * que ya viene en todos los navegadores modernos.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.animate(
      [
        { opacity: 0, transform: "translateY(6px)" },
        { opacity: 1, transform: "translateY(0)"   },
      ],
      {
        duration: 220,
        easing: "ease-out",
        fill: "both",
      }
    )
  }, [pathname])

  return (
    <div ref={ref} style={{ willChange: "opacity, transform" }}>
      {children}
    </div>
  )
}