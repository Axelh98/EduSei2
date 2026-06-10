"use client"
// components/editor/OverridesBrowser.tsx
// Listado de las versiones del maestro y de colegas, con búsqueda
// por texto y filtro por curso. Con muchas versiones, scrollear no
// alcanza — esto los hace encontrables.

import Link from "next/link"
import { useState, useMemo } from "react"
import { Search, Plus, X } from "lucide-react"
import { EditorOverrideCard } from "@/components/EditorOverrideCard"
import { categories } from "@/lib/quiz-data"
import type { LessonOverride } from "@/actions/overrides"

interface Props {
  myOverrides:     LessonOverride[]
  publicOverrides: LessonOverride[]
}

function normalize(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

function matchesFilters(
  o:        LessonOverride,
  query:    string,
  category: string,
): boolean {
  if (category && o.category_id !== category) return false
  if (!query) return true
  const q     = normalize(query)
  const title = normalize(o.title ?? "")
  const les   = normalize(o.lesson_id ?? "")
  const cat   = normalize(o.category_id ?? "")
  const author = normalize(o.profiles?.full_name ?? "")
  return title.includes(q) || les.includes(q) || cat.includes(q) || author.includes(q)
}

export function OverridesBrowser({ myOverrides, publicOverrides }: Props) {
  const [query, setQuery]       = useState("")
  const [category, setCategory] = useState("")

  const filteredMine   = useMemo(
    () => myOverrides.filter(o => matchesFilters(o, query, category)),
    [myOverrides, query, category]
  )
  const filteredPublic = useMemo(
    () => publicOverrides.filter(o => matchesFilters(o, query, category)),
    [publicOverrides, query, category]
  )

  const isFiltering = query.trim() !== "" || category !== ""
  const totalFiltered = filteredMine.length + filteredPublic.length

  return (
    <div className="flex flex-col gap-10">

      {/* ── Filtros ───────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscá por título, lección, autor…"
            className="w-full pl-10 pr-9 py-2.5 text-sm border border-input rounded-xl bg-card text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
              title="Limpiar búsqueda"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        <div className="relative sm:w-64">
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full appearance-none px-3 py-2.5 pr-8 text-sm border border-input rounded-xl bg-card text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
          >
            <option value="">Todos los cursos</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
        </div>
      </div>

      {isFiltering && (
        <div className="-mt-6 flex items-center gap-3">
          <p className="text-xs text-muted-foreground">
            {totalFiltered === 0
              ? "Ninguna versión coincide con los filtros."
              : `${totalFiltered} versión${totalFiltered !== 1 ? "es" : ""} coincide${totalFiltered !== 1 ? "n" : ""}.`}
          </p>
          <button
            type="button"
            onClick={() => { setQuery(""); setCategory("") }}
            className="text-xs font-semibold text-primary hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* ── Mis versiones ─────────────────────────────────── */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-baseline gap-3">
            <h2 className="font-serif text-2xl font-bold text-foreground tracking-tight">
              Mis versiones
            </h2>
            <span className="text-xs font-semibold text-muted-foreground">
              {isFiltering
                ? `${filteredMine.length} de ${myOverrides.length}`
                : `${myOverrides.length}`}
            </span>
          </div>
          <Link
            href="/editor/nuevo"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            <Plus className="h-4 w-4" />
            Nueva versión
          </Link>
        </div>

        {filteredMine.length === 0 ? (
          isFiltering ? (
            <p className="text-sm text-muted-foreground py-8 text-center border-2 border-dashed border-border rounded-2xl">
              No tenés versiones que coincidan con los filtros.
            </p>
          ) : (
            <div className="py-12 text-center border-2 border-dashed border-border rounded-2xl bg-card">
              <div className="text-4xl mb-3">📝</div>
              <p className="font-serif text-lg font-bold text-foreground mb-1">
                Todavía no creaste ninguna versión
              </p>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-5">
                Empezá con una lección del programa oficial y adaptala para tu clase.
              </p>
              <Link
                href="/editor/nuevo"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all active:scale-[0.98]"
              >
                <Plus className="h-4 w-4" />
                Crear mi primera versión
              </Link>
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMine.map(override => (
              <EditorOverrideCard key={override.id} override={override} isOwn />
            ))}
          </div>
        )}
      </section>

      {/* ── Versiones de colegas ──────────────────────────── */}
      {publicOverrides.length > 0 && (
        <section className="flex flex-col gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="font-serif text-2xl font-bold text-foreground tracking-tight">
              Versiones de colegas
            </h2>
            <span className="text-xs font-semibold text-muted-foreground">
              {isFiltering
                ? `${filteredPublic.length} de ${publicOverrides.length}`
                : `${publicOverrides.length}`}
            </span>
          </div>
          <p className="text-sm text-muted-foreground -mt-2">
            Otras versiones que podés ver y duplicar para adaptar a tu clase.
          </p>

          {filteredPublic.length === 0 ? (
            <p className="text-sm text-muted-foreground py-8 text-center border-2 border-dashed border-border rounded-2xl">
              Ninguna versión pública coincide con los filtros.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPublic.map(override => (
                <EditorOverrideCard key={override.id} override={override} isOwn={false} />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  )
}