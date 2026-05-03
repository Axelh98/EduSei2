import { BookOpen, ClipboardCheck, Share2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Lee y repasa",
    description:
      "Accedé al resumen de la lección antes de empezar. Cada lección incluye escrituras clave, contexto y puntos doctrinales.",
    audience: "Estudiantes y maestros",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Hacé el quiz",
    description:
      "Respondé las preguntas evaluativas de la lección. Al alcanzar 60% o más, la lección queda marcada como completada.",
    audience: "Estudiantes",
  },
  {
    number: "03",
    icon: Share2,
    title: "Reportá tu avance",
    description:
      "Compartí tu progreso por WhatsApp con tu maestro. Los maestros también pueden asignar lecciones específicas para recuperación.",
    audience: "Estudiantes y maestros",
  },
]

export function HowItWorksSection() {
  return (
    <section className="border-b border-border bg-card px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            ¿Cómo funciona?
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Tres pasos para ponerte al día
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1

            return (
              <div key={step.number} className="relative flex flex-col gap-4">
                {/* Connector line between steps (desktop only) */}
                {!isLast && (
                  <div
                    className="absolute left-[calc(100%+0px)] top-6 hidden h-px w-6 bg-border md:block"
                    aria-hidden
                  />
                )}

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-border select-none">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <span className="mt-auto inline-flex w-fit items-center rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {step.audience}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}