"use client"

import { ArrowRight, Calendar, BookOpen, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Category } from "@/lib/types"
import { getTotalLessons, getTotalQuestions, isFlatCategory } from "@/lib/quiz-data"

// ─── Paleta de identidad por categoría ───────────────────────────────────────

type CategoryTheme = {
  stripe: string
  iconBg: string
  iconColor: string
  sigla: string
  siglaBg: string
  siglaText: string
}

const SEMINARIO_THEMES: Record<string, CategoryTheme> = {
  "antiguo-testamento": {
    stripe: "#7F77DD",
    iconBg: "#EEEDFE",
    iconColor: "#534AB7",
    sigla: "AT",
    siglaBg: "#EEEDFE",
    siglaText: "#3C3489",
  },
  "nuevo-testamento": {
    stripe: "#1D9E75",
    iconBg: "#E1F5EE",
    iconColor: "#0F6E56",
    sigla: "NT",
    siglaBg: "#E1F5EE",
    siglaText: "#085041",
  },
  "libro-de-mormon": {
    stripe: "#378ADD",
    iconBg: "#E6F1FB",
    iconColor: "#185FA5",
    sigla: "LM",
    siglaBg: "#E6F1FB",
    siglaText: "#0C447C",
  },
  "doctrina-y-convenios": {
    stripe: "#D85A30",
    iconBg: "#FAECE7",
    iconColor: "#993C1D",
    sigla: "DyC",
    siglaBg: "#FAECE7",
    siglaText: "#711B13",
  },
  "Bloques": {
    stripe: "#888780",
    iconBg: "#F1EFE8",
    iconColor: "#5F5E5A",
    sigla: "Bloque",
    siglaBg: "#F1EFE8",
    siglaText: "#2C2C2A",
  },
}

const INSTITUTO_FUNDAMENTAL_THEME = {
  stripe: "#BA7517",
  iconBg: "#FAEEDA",
  iconColor: "#854F0B",
  trackBg: "#FAEEDA",
  trackText: "#412402",
}

const INSTITUTO_ELECTIVO_THEME = {
  stripe: "#D4537E",
  iconBg: "#FBEAF0",
  iconColor: "#993556",
  trackBg: "#FBEAF0",
  trackText: "#4B1528",
}

// ─── Ícono SVG inline por categoría ──────────────────────────────────────────

function CategoryIcon({ categoryId, color }: { categoryId: string; color: string }) {
  switch (categoryId) {
    case "antiguo-testamento":
      return (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
          <path d="M4 3h9l3 3v11H4V3z" stroke={color} strokeWidth="1.2" fill="none" />
          <path d="M13 3v3h3" stroke={color} strokeWidth="1.2" fill="none" />
          <path d="M7 9h6M7 12h4" stroke={color} strokeWidth="1" strokeLinecap="round" />
        </svg>
      )
    case "libro-de-mormon":
      return (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="3" width="14" height="14" rx="2" stroke={color} strokeWidth="1.2" fill="none" />
          <path d="M7 7h6M7 10h6M7 13h4" stroke={color} strokeWidth="1" strokeLinecap="round" />
        </svg>
      )
    case "doctrina-y-convenios":
      return (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
          <path d="M10 3L3 8v9h14V8L10 3z" stroke={color} strokeWidth="1.2" fill="none" strokeLinejoin="round" />
          <path d="M8 17v-5h4v5" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case "nuevo-testamento":
      return (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.2" fill="none" />
          <path d="M10 6v8M6 10h8" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )
    case "Bloques":
      return (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="3" width="6" height="6" rx="1" stroke={color} strokeWidth="1.2" fill="none" />
          <rect x="11" y="3" width="6" height="6" rx="1" stroke={color} strokeWidth="1.2" fill="none" />
          <rect x="3" y="11" width="6" height="6" rx="1" stroke={color} strokeWidth="1.2" fill="none" />
          <rect x="11" y="11" width="6" height="6" rx="1" stroke={color} strokeWidth="1.2" fill="none" />
        </svg>
      )
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
          <path d="M10 3l7 4v6l-7 4-7-4V7l7-4z" stroke={color} strokeWidth="1.2" fill="none" strokeLinejoin="round" />
          <path d="M10 3v14M3 7l7 4 7-4" stroke={color} strokeWidth="1" strokeLinecap="round" />
        </svg>
      )
  }
}

// ─── Componente principal ─────────────────────────────────────────────────────

export function CategoryCard({ category }: { category: Category }) {
  const totalLessons = getTotalLessons(category)
  const totalQuestions = getTotalQuestions(category)
  const isFlat = isFlatCategory(category)
  const isComingSoon = category.id === "nuevo-testamento"

  const isSeminario = category.courseType === "seminario"
  const track = (category as any).instituteTrack as "fundamental" | "electivo" | undefined

  let stripe = "#888780"
  let iconBg = "#F1EFE8"
  let iconColor = "#5F5E5A"

  if (isSeminario) {
    const t = SEMINARIO_THEMES[category.id]
    if (t) { stripe = t.stripe; iconBg = t.iconBg; iconColor = t.iconColor }
  } else {
    const t = track === "electivo" ? INSTITUTO_ELECTIVO_THEME : INSTITUTO_FUNDAMENTAL_THEME
    stripe = t.stripe; iconBg = t.iconBg; iconColor = t.iconColor
  }

  const unitCount = isFlat
    ? new Set((category as any).lessons.map((l: any) => l.unitTitle).filter(Boolean)).size
    : 0

  return (
    <Link
      href={isComingSoon ? "#" : `/quiz/${category.id}`}
      className={`group block ${isComingSoon ? "pointer-events-none" : ""}`}
    >
      <div
        className="relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={{
          // Borde izquierdo en lugar de superior — más impacto visual
          boxShadow: `inset 3px 0 0 ${stripe}`,
          // Gradiente de fondo muy sutil que "pertenece" al color de la categoría
          background: `linear-gradient(135deg, ${stripe}06 0%, transparent 45%)`,
        }}
      >
        {/* Borde exterior en hover */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 ring-1 transition-opacity duration-300 group-hover:opacity-100"
          style={{ "--ring-color": stripe, boxShadow: `0 0 0 1px ${stripe}30` } as React.CSSProperties}
        />

        <div className="flex flex-col gap-3 p-5">

          {/* Fila superior: ícono + badges */}
          <div className="flex items-start justify-between gap-3">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
              style={{
                backgroundColor: iconBg,
                // Glow del color de la categoría bajo el ícono
                boxShadow: `0 4px 14px ${stripe}35`,
              }}
            >
              <CategoryIcon categoryId={category.id} color={iconColor} />
            </div>

            <div className="flex flex-wrap items-center justify-end gap-1.5">
              {/* Badge de programa */}
              {isSeminario ? (
                <span
                  className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{ backgroundColor: "#EEEDFE", color: "#3C3489", border: "0.5px solid #AFA9EC" }}
                >
                  Seminario
                </span>
              ) : track === "electivo" ? (
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{
                    backgroundColor: INSTITUTO_ELECTIVO_THEME.trackBg,
                    color: INSTITUTO_ELECTIVO_THEME.trackText,
                    border: `0.5px solid ${INSTITUTO_ELECTIVO_THEME.stripe}40`,
                  }}
                >
                  <Sparkles className="h-2.5 w-2.5" />
                  Electivo
                </span>
              ) : (
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{
                    backgroundColor: INSTITUTO_FUNDAMENTAL_THEME.trackBg,
                    color: INSTITUTO_FUNDAMENTAL_THEME.trackText,
                    border: `0.5px solid ${INSTITUTO_FUNDAMENTAL_THEME.stripe}40`,
                  }}
                >
                  <Star className="h-2.5 w-2.5" />
                  Fundamental
                </span>
              )}

              {/* Badge sigla Seminario */}
              {isSeminario && SEMINARIO_THEMES[category.id] && (
                <span
                  className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold"
                  style={{
                    backgroundColor: SEMINARIO_THEMES[category.id].siglaBg,
                    color: SEMINARIO_THEMES[category.id].siglaText,
                  }}
                >
                  {SEMINARIO_THEMES[category.id].sigla}
                </span>
              )}

              {/* Badge sigla Instituto */}
              {!isSeminario && (
                <span
                  className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold"
                  style={{
                    backgroundColor: track === "electivo"
                      ? INSTITUTO_ELECTIVO_THEME.trackBg
                      : INSTITUTO_FUNDAMENTAL_THEME.trackBg,
                    color: track === "electivo"
                      ? INSTITUTO_ELECTIVO_THEME.trackText
                      : INSTITUTO_FUNDAMENTAL_THEME.trackText,
                  }}
                >
                  {category.shortName}
                </span>
              )}

              {isComingSoon && (
                <span
                  className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{ backgroundColor: "#FEF3C7", color: "#92400E", border: "0.5px solid #FCD34D" }}
                >
                  🚧 Próximamente
                </span>
              )}
            </div>
          </div>

          {/* Título y descripción */}
          <div>
            <h3 className="text-base font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-[var(--accent)]"
                style={{ "--accent": stripe } as React.CSSProperties}>
              {category.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {category.description}
            </p>
          </div>
        </div>

        {/* Footer con métricas */}
        <div className="mt-auto flex items-center justify-between border-t border-border/60 px-5 py-3">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {!isFlat && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" style={{ color: stripe }} />
                {(category as any).weeks.length} semanas
              </span>
            )}
            {isFlat && unitCount > 0 && (
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" style={{ color: stripe }} />
                {unitCount} unidades
              </span>
            )}
            <span>{totalLessons} lecciones</span>
            <span className="hidden sm:inline">{totalQuestions} preguntas</span>
          </div>

          <span
            className="flex items-center gap-1 text-xs font-bold opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
            style={{ color: stripe }}
          >
            Ver
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}