// components/lesson-search.tsx
"use client"

import { useState, useMemo } from "react"
import { Search, BookOpen, Calendar, X } from "lucide-react"
import Link from "next/link"
import { categories, isFlatCategory } from "@/lib/quiz-data"
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

interface SearchResult {
  lessonId: string
  lessonTitle: string
  categoryId: string
  categoryName: string
  weekTitle?: string
  description: string
}

export function LessonSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    if (!query || query.length < 2) return []

    const searchResults: SearchResult[] = []
    const lowerQuery = query.toLowerCase()

    categories.forEach((category) => {
      if (isFlatCategory(category)) {
        category.lessons.forEach((lesson) => {
          if (
            lesson.title.toLowerCase().includes(lowerQuery) ||
            lesson.description.toLowerCase().includes(lowerQuery)
          ) {
            searchResults.push({
              lessonId: lesson.id,
              lessonTitle: lesson.title,
              categoryId: category.id,
              categoryName: category.name,
              description: lesson.description,
            })
          }
        })
      } else {
        category.weeks.forEach((week) => {
          week.lessons.forEach((lesson) => {
            if (
              lesson.title.toLowerCase().includes(lowerQuery) ||
              lesson.description.toLowerCase().includes(lowerQuery)
            ) {
              searchResults.push({
                lessonId: lesson.id,
                lessonTitle: lesson.title,
                categoryId: category.id,
                categoryName: category.name,
                weekTitle: `Semana ${week.id}: ${week.title}`,
                description: lesson.description,
              })
            }
          })
        })
      }
    })

    return searchResults.slice(0, 20) // Limitar a 20 resultados
  }, [query])

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
        <Command className="rounded-lg border-0 shadow-none">
          <CommandInput
            placeholder="Escribe el nombre de una lección..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList className="max-h-[400px]">
            <CommandEmpty>
              {query.length < 2
                ? "Escribe al menos 2 caracteres para buscar"
                : "No se encontraron lecciones"}
            </CommandEmpty>
            {results.length > 0 && (
              <CommandGroup heading={`${results.length} resultados`}>
                {results.map((result) => (
                  <CommandItem
                    key={`${result.categoryId}-${result.lessonId}`}
                    onSelect={() => {
                      setOpen(false)
                      setQuery("")
                    }}
                    asChild
                  >
                    <Link
                      href={`/quiz/${result.categoryId}/${result.lessonId}`}
                      className="flex flex-col gap-1 py-3"
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 shrink-0 text-primary" />
                        <span className="font-medium">{result.lessonTitle}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 pl-6">
                        <Badge variant="secondary" className="text-[10px]">
                          {result.categoryName}
                        </Badge>
                        {result.weekTitle && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {result.weekTitle}
                          </span>
                        )}
                      </div>
                      <p className="line-clamp-1 pl-6 text-xs text-muted-foreground">
                        {result.description}
                      </p>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}