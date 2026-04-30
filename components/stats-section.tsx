import { BookOpen, HelpCircle, Award, Calendar } from "lucide-react"
import { categories, getTotalLessons, getTotalQuestions, isFlatCategory } from "@/lib/quiz-data"

export function StatsSection() {
  const totalWeeks = categories.reduce((acc, c) => {
    if (isFlatCategory(c)) return acc
    return acc + c.weeks.length
  }, 0)
  const totalLessons = categories.reduce((acc, c) => acc + getTotalLessons(c), 0)
  const totalQuestions = categories.reduce((acc, c) => acc + getTotalQuestions(c), 0)

  const stats = [
    {
      icon: BookOpen,
      value: String(categories.length),
      label: "Categorias",
    },
    {
      icon: Calendar,
      value: String(totalWeeks),
      label: "Semanas",
    },
    {
      icon: Award,
      value: String(totalLessons),
      label: "Lecciones",
    },
    {
      icon: HelpCircle,
      value: String(totalQuestions),
      label: "Preguntas",
    },
  ]

  return (
    <section className="border-y border-border bg-muted/50 px-4 py-12 md:px-6">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <stat.icon className="h-6 w-6 text-secondary" />
            <span className="text-2xl font-bold text-foreground md:text-3xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}