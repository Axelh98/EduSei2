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
        // "backwards" y no "both": con "both" el translateY(0) final quedaba
        // aplicado para siempre, y cualquier transform en un ancestro convierte
        // a ese ancestro en la referencia de los `position: fixed` de adentro.
        // Los modales `fixed inset-0` y las barras fijas se posicionaban contra
        // la página entera en vez de contra la pantalla.
        fill: "backwards",
      }
    )
  }, [pathname])

  return (
    // Sin `will-change: transform` por el mismo motivo: también crea un
    // bloque contenedor para los `fixed` descendientes.
    <div ref={ref}>
      {children}
    </div>
  )
}