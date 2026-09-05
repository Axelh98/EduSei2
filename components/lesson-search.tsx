// components/lesson-search.tsx
//
// Buscador de lecciones. Antes solo miraba `title` y `description` del
// manifiesto y sin normalizar acentos, así que "helaman" no encontraba
// "Helamán" y no había forma de llegar a una lección por su cita o por su
// tema. Ahora busca contra lib/content/search-index.json, que agrega las
// referencias de Escritura, los autores citados y las palabras clave de cada
// lección.
//
// El índice pesa ~275 KB, así que entra por dynamic import la primera vez que
// se abre el diálogo — nunca en el bundle inicial. Ver la advertencia de
// lib/quiz-data.ts sobre el corpus en el cliente.
//
// Regenerarlo con: npx tsx scripts/build-search-index.ts

"use client"

import { useState, useMemo, useEffect, useCallback } from "react"
import { Search, BookOpen, Calendar, Loader2, FileText, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/quiz-data"
import { normalizeText } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SearchEntry {
  c: string; l: string; w: number | null
  t: string; d: string
  r: string[]; a: string[]; k: string[]
  s: boolean
}

interface SearchResult extends SearchEntry {
  score: number
  /** Qué hizo que apareciera: se muestra bajo el título. */
  motivo?: string
}

const MAX_RESULTADOS = 25

// Nombre del curso a partir del categoryId. `categories` son metadatos, no
// contenido: ya está en el cliente.
const NOMBRE_CURSO = new Map(categories.map((c) => [c.id, c.name]))

/**
 * Puntúa una lección contra los términos buscados. Exige que **todos** los
 * términos peguen en algún campo (AND), y pondera por dónde pegaron: el
 * título vale más que una palabra suelta del contexto.
 */
function puntuar(
  entry: SearchEntry,
  terminos: string[],
  queryEntera: string
): SearchResult | null {
  const titulo = normalizeText(entry.t)
  const descripcion = normalizeText(entry.d)
  const referencias = entry.r.map(normalizeText)
  const autores = entry.a.map(normalizeText)

  let score = 0
  let motivo: string | undefined

  if (titulo.includes(queryEntera)) score += 100

  for (const termino of terminos) {
    let mejor = 0
    if (titulo.includes(termino)) mejor = 20
    const ref = referencias.find((r) => r.includes(termino))
    if (ref && mejor < 15) {
      mejor = 15
      motivo ??= `Cita ${entry.r.join(", ")}`
    }
    const autor = autores.find((a) => a.includes(termino))
    if (autor && mejor < 12) {
      mejor = 12
      motivo ??= `Cita a ${entry.a.join(", ")}`
    }
    if (descripcion.includes(termino) && mejor < 6) mejor = 6
    if (entry.k.includes(termino) && mejor < 4) {
      mejor = 4
      motivo ??= `Trata sobre "${termino}"`
    }

    if (mejor === 0) return null // un término sin match descarta la lección
    score += mejor
  }

  return { ...entry, score, motivo }
}

export function LessonSearch() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [indice, setIndice] = useState<SearchEntry[] | null>(null)
  const [cargando, setCargando] = useState(false)

  // El índice se trae la primera vez que se abre el diálogo.
  useEffect(() => {
    if (!open || indice || cargando) return
    setCargando(true)
    import("@/lib/content/search-index.json")
      .then((mod) => setIndice((mod.default ?? mod) as unknown as SearchEntry[]))
      .catch(() => setIndice([]))
      .finally(() => setCargando(false))
  }, [open, indice, cargando])

  // ⌘K / Ctrl+K — el <kbd> del botón venía prometiéndolo sin implementarlo.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const results = useMemo<SearchResult[]>(() => {
    if (!indice || query.trim().length < 2) return []
    const queryEntera = normalizeText(query.trim())
    const terminos = queryEntera.split(/\s+/).filter(Boolean)

    return indice
      .map((entry) => puntuar(entry, terminos, queryEntera))
      .filter((r): r is SearchResult => r !== null)
      .sort((a, b) => b.score - a.score || a.t.localeCompare(b.t))
      .slice(0, MAX_RESULTADOS)
  }, [indice, query])

  const navegar = useCallback(
    (url: string) => {
      setOpen(false)
      setQuery("")
      router.push(url)
    },
    [router]
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative w-full justify-start text-sm text-muted-foreground md:w-64"
        >
          <Search className="mr-2 h-4 w-4" />
          <span>Buscar lecciones...</span>
          <kbd className="pointer-events-none absolute right-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 md:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-0 p-0">
        <DialogHeader className="px-4 pb-4 pt-5">
          <DialogTitle>Buscar Lecciones</DialogTitle>
        </DialogHeader>
        {/* shouldFilter={false}: el filtrado y el orden los decide `puntuar`. */}
        <Command className="rounded-lg border-0 shadow-none" shouldFilter={false}>
          <CommandInput
            placeholder="Título, cita ('Helamán 5:12'), autor o tema..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList className="max-h-[400px]">
            <CommandEmpty>
              {cargando ? (
                <span className="flex items-center justify-center gap-2 py-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Cargando el índice...
                </span>
              ) : query.trim().length < 2 ? (
                "Escribe al menos 2 caracteres para buscar"
              ) : (
                "No se encontraron lecciones"
              )}
            </CommandEmpty>
            {results.length > 0 && (
              <CommandGroup
                heading={`${results.length}${results.length === MAX_RESULTADOS ? "+" : ""} resultados`}
              >
                {results.map((result) => {
                  const urlRepaso = `/quiz/${result.c}/${result.l}/study`
                  const urlQuiz = `/quiz/${result.c}/${result.l}`
                  return (
                    <CommandItem
                      key={`${result.c}-${result.l}`}
                      value={`${result.c}-${result.l}`}
                      onSelect={() => navegar(result.s ? urlRepaso : urlQuiz)}
                      className="flex flex-col items-start gap-1 py-3"
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 shrink-0 text-primary" />
                        <span className="font-medium">{result.t}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pl-6">
                        <Badge variant="secondary" className="text-[10px]">
                          {NOMBRE_CURSO.get(result.c) ?? result.c}
                        </Badge>
                        {result.w !== null && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            Semana {result.w}
                          </span>
                        )}
                      </div>

                      <p className="line-clamp-1 pl-6 text-xs text-muted-foreground">
                        {result.motivo ?? result.d}
                      </p>

                      <div className="flex gap-2 pl-6 pt-1">
                        {result.s && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              navegar(urlRepaso)
                            }}
                            className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary transition-colors hover:bg-primary/20"
                          >
                            <FileText className="h-3 w-3" />
                            Ver repaso
                          </button>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            navegar(urlQuiz)
                          }}
                          className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          Ir al quiz
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
