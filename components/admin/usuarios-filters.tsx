// components/admin/usuarios-filters.tsx
"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Search, X } from "lucide-react"
import { useState, useTransition } from "react"
import { ROLE_LABELS } from "@/components/shared/role-badge"
import type { UserRole } from "@/actions/usuarios"

interface Props {
  initialSearch?: string
  initialRole?:   UserRole | "all"
}

export function UsuariosFilters({ initialSearch = "", initialRole = "all" }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(initialSearch)
  const [role, setRole]     = useState<UserRole | "all">(initialRole)
  const [, startTransition] = useTransition()

  function applyFilters(nextSearch: string, nextRole: UserRole | "all") {
    const params = new URLSearchParams(searchParams.toString())
    if (nextSearch) params.set("search", nextSearch)
    else params.delete("search")
    if (nextRole !== "all") params.set("role", nextRole)
    else params.delete("role")
    startTransition(() => router.push(`/admin/usuarios?${params.toString()}`))
  }

  function clearFilters() {
    setSearch("")
    setRole("all")
    startTransition(() => router.push("/admin/usuarios"))
  }

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault()
    applyFilters(search, role)
  }

  const hasFilters = search !== "" || role !== "all"

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <form onSubmit={handleSearchSubmit} className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar por nombre..."
          className="w-full pl-10 pr-9 py-2.5 text-sm border border-input rounded-xl bg-card text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
        {search && (
          <button
            type="button"
            onClick={() => { setSearch(""); applyFilters("", role) }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </form>

      <div className="relative sm:w-56">
        <select
          value={role}
          onChange={e => {
            const next = e.target.value as UserRole | "all"
            setRole(next)
            applyFilters(search, next)
          }}
          className="w-full appearance-none px-3 py-2.5 pr-8 text-sm border border-input rounded-xl bg-card text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
        >
          <option value="all">Todos los roles</option>
          {(Object.entries(ROLE_LABELS) as [UserRole, string][]).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          Limpiar
        </button>
      )}
    </div>
  )
}
