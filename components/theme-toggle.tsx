// components/theme-toggle.tsx
"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar hydration mismatch
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-8 w-8" />

  const cycle = () => {
    if (theme === "light")  setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor
  const label =
    theme === "light" ? "Cambiar a modo oscuro" :
    theme === "dark"  ? "Usar preferencia del sistema" :
    "Cambiar a modo claro"

  return (
    <button
      onClick={cycle}
      aria-label={label}
      title={label}
      className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
    >
      <Icon className="h-4 w-4" />
    </button>
  )
}