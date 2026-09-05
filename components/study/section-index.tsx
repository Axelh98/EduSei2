// components/study/section-index.tsx
//
// Índice de las secciones del repaso. En una lección larga —y en clase, con
// los alumnos esperando— saltar a "Cuestionario" no debería costar un scroll
// de pantalla y media.

"use client"

import { useEffect, useState } from "react"
import type { Seccion } from "@/lib/types"

const ETIQUETAS: Record<string, string> = {
  contexto: "Contexto",
  escrituras: "Escrituras",
  enseñanza: "Enseñanza",
  conclusion: "Conclusión",
  cuestionario: "Cuestionario",
  resumen: "Resumen",
}

export function SectionIndex({ secciones }: { secciones: Seccion[] }) {
  const [activa, setActiva] = useState(0)

  useEffect(() => {
    const nodos = secciones
      .map((_, i) => document.getElementById(`sec-${i}`))
      .filter((n): n is HTMLElement => n !== null)
    if (nodos.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // La activa es la primera que esté entrando por arriba del viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (!visible) return
        const i = nodos.indexOf(visible.target as HTMLElement)
        if (i !== -1) setActiva(i)
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 }
    )

    nodos.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [secciones])

  // Con una sola sección no hay nada que indexar.
  if (secciones.length < 2) return null

  return (
    <nav
      className="-mx-4 mb-10 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Secciones de la lección"
    >
      <ul className="flex items-center gap-1.5">
        {secciones.map((seccion, i) => {
          const esActiva = i === activa
          return (
            <li key={i}>
              <a
                href={`#sec-${i}`}
                aria-current={esActiva ? "true" : undefined}
                className={[
                  "block whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                  esActiva
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:bg-muted hover:text-foreground",
                ].join(" ")}
              >
                {ETIQUETAS[seccion.tipo] ?? seccion.tipo}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
