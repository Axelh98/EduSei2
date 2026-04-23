"use client"

import { use } from "react"
import { notFound, useRouter } from "next/navigation"
import dynamic from "next/dynamic" // Necesario para evitar errores de versión/SSR
import { crucigramas } from "@/lib/data/crucigramas"
import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

// Importación dinámica del componente Crossword
// Esto soluciona el conflicto de React 19 y evita errores de hidratación (SSR)
const Crossword = dynamic(() => import("@jaredreisinger/react-crossword"), {
  ssr: false,
  loading: () => (
    <div className="flex h-64 items-center justify-center italic text-muted-foreground">
      Cargando tablero...
    </div>
  ),
})

export default function CrosswordPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = use(params)
  const data = crucigramas[lessonId]
  const router = useRouter()

  if (!data) {
    notFound()
  }

  // Transformación de datos al formato plano que requiere la librería
  const crosswordData = {
    across: data.words
      .filter((w) => w.direction === "horizontal")
      .reduce((acc, w) => ({
        ...acc,
        [w.number]: { clue: w.clue, answer: w.answer, row: w.row, col: w.col },
      }), {}),
    down: data.words
      .filter((w) => w.direction === "vertical")
      .reduce((acc, w) => ({
        ...acc,
        [w.number]: { clue: w.clue, answer: w.answer, row: w.row, col: w.col },
      }), {}),
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Cabecera de navegación */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Button 
              variant="ghost" 
              onClick={() => router.back()} 
              className="mb-2 p-0 hover:bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a la lección
            </Button>
            <h1 className="font-serif text-2xl font-bold md:text-3xl">
              Crucigrama: {data.lessonId} 
            </h1>
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()}
            className="border-orange-200 text-orange-700 hover:bg-orange-50"
          >
            <RotateCcw className="mr-2 h-4 w-4" /> Reiniciar
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contenedor del Juego */}
          <div className="lg:col-span-2 crossword-container">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm md:p-8">
              <Crossword 
                data={crosswordData} 
                theme={{
                  columnBreakpoint: '768px',
                  gridBackground: 'transparent',
                  cellBackground: 'hsl(var(--card))',
                  cellBorder: 'hsl(var(--border))',
                  textColor: 'hsl(var(--foreground))',
                  numberColor: 'hsl(var(--primary))',
                  focusBackground: 'hsl(var(--primary) / 0.2)',
                  highlightBackground: 'hsl(var(--primary) / 0.1)',
                }}
              />
            </div>
          </div>

          {/* Barra Lateral de Instrucciones */}
          <div className="space-y-4">
            <div className="rounded-xl border border-orange-100 bg-orange-50 p-6">
              <h3 className="font-bold text-orange-800">¿Cómo jugar?</h3>
              <ul className="mt-2 space-y-2 text-sm text-orange-700">
                <li>• Haz clic en un número o pista para escribir.</li>
                <li>• La palabra se marcará en verde al completarse correctamente.</li>
                <li>• Puedes usar las flechas del teclado para navegar.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Estilos Globales para personalización profunda */}
      <style jsx global>{`
        .crossword-container svg {
          max-width: 100%;
          height: auto;
        }
        .crossword-container .clue.correct {
          color: #10b981 !important;
          text-decoration: line-through;
          opacity: 0.6;
        }
        .direction h3 {
          font-family: ui-serif, Georgia, serif;
          font-weight: bold;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
          border-bottom: 2px solid hsl(var(--primary) / 0.3);
          display: inline-block;
        }
      `}</style>
    </div>
  )
}