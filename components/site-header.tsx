// components/site-header.tsx
"use client"

import { BookOpen } from "lucide-react"
import Link from "next/link"
import { LessonSearch } from "./lesson-search"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary md:h-10 md:w-10">
            <BookOpen className="h-4 w-4 text-primary-foreground md:h-5 md:w-5" />
          </div>
          {/* Nombre completo solo en desktop */}
          <div className="hidden md:block">
            <h1 className="text-base font-bold leading-tight text-foreground">
              Mi Seminario e Instituto
            </h1>
            <p className="text-[11px] text-muted-foreground">
              Escrituras · Doctrina · Evaluaciones
            </p>
          </div>
          {/* Nombre abreviado en mobile */}
          <div className="md:hidden">
            <h1 className="text-sm font-bold leading-tight text-foreground">MSI</h1>
            <p className="text-[10px] leading-none text-muted-foreground">
              Seminario e Instituto
            </p>
          </div>
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <LessonSearch />
        </div>

        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Inicio
          </Link>
          <Link
            href="/#categorias"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Cursos
          </Link>
          {/* Separador visual */}
          <div className="h-4 w-px bg-border" />
          <ThemeToggle />
        </nav>

        {/* Mobile: search + toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <div className="flex-1">
            <LessonSearch />
          </div>
        </div>
      </div>
    </header>
  )
}