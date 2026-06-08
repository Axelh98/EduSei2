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
          {/* Logo — shimmer decorativo, más identidad */}
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-primary md:h-10 md:w-10">
            <BookOpen className="relative z-10 h-4 w-4 text-primary-foreground md:h-5 md:w-5" />
            {/* Shimmer diagonal que da sensación de material */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          </div>

          {/* Desktop: nombre completo — consistente con "Aula SEI" */}
          <div className="hidden md:block">
            <h1 className="text-base font-bold leading-tight text-foreground">
              Aula SEI
            </h1>
            <p className="text-[11px] text-muted-foreground">
              Escrituras · Instituto
            </p>
          </div>

          {/* Mobile: también "Aula SEI" para consistencia de marca */}
          <div className="md:hidden">
            <h1 className="text-sm font-bold leading-tight text-foreground">Aula SEI</h1>
          </div>
        </Link>

        {/* Search centrado en desktop */}
        <div className="hidden flex-1 justify-center md:flex">
          <LessonSearch />
        </div>

        {/* Nav desktop */}
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
          <div className="h-4 w-px bg-border" aria-hidden="true" />
          <ThemeToggle />
        </nav>

        {/* Mobile: toggle + search */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <LessonSearch />
        </div>
      </div>
    </header>
  )
}