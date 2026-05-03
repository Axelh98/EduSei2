"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, HelpCircle, Award, Calendar } from "lucide-react"
import { categories, getTotalLessons, getTotalQuestions, isFlatCategory } from "@/lib/quiz-data"

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function StatItem({
  icon: Icon,
  target,
  label,
}: {
  icon: React.ElementType
  target: number
  label: string
}) {
  const { count, ref } = useCountUp(target)

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 text-center"
    >
      <Icon className="h-6 w-6 text-secondary" />
      <span className="text-2xl font-bold tabular-nums text-foreground md:text-3xl">
        {count.toLocaleString("es-AR")}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

export function StatsSection() {
  const totalWeeks = categories.reduce((acc, c) => {
    if (isFlatCategory(c)) return acc
    return acc + c.weeks.length
  }, 0)
  const totalLessons = categories.reduce((acc, c) => acc + getTotalLessons(c), 0)
  const totalQuestions = categories.reduce((acc, c) => acc + getTotalQuestions(c), 0)

  const stats = [
    { icon: BookOpen,     target: categories.length, label: "Categorías"  },
    { icon: Calendar,     target: totalWeeks,         label: "Semanas"     },
    { icon: Award,        target: totalLessons,        label: "Lecciones"   },
    { icon: HelpCircle,   target: totalQuestions,      label: "Preguntas"   },
  ]

  return (
    <section className="border-y border-border bg-muted/50 px-4 py-12 md:px-6">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}