import { BookOpen, GraduationCap, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 pb-20 pt-24 md:px-6 md:pb-28 md:pt-32">

      {/* ── Capa 1: gradiente angular para dar profundidad ───────────────── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/75" />

      {/* ── Capa 2: orbes de luz — atmosféricos, no decorativos ─────────── */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-white/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-1/3 h-80 w-80 rounded-full bg-white/[0.08] blur-2xl" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-64 w-64 rounded-full bg-white/[0.04] blur-2xl" />

      {/* ── Capa 3: líneas horizontales sutiles — más visibles que el pattern anterior ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lines" width="100%" height="48" patternUnits="userSpaceOnUse">
              <line x1="0" y1="47" x2="100%" y2="47" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>

      {/* ── Regla diagonal decorativa — elemento que rompe la caja ───────── */}
      <div
        className="pointer-events-none absolute -bottom-1 left-0 right-0 h-12 bg-background"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />

      {/* ── Contenido ────────────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-3xl text-center">

        {/* Badges con diferenciación visual: uno sólido, uno con borde */}
        <div className="mb-8 flex items-center justify-center gap-3 flex-wrap">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 ring-1 ring-primary-foreground/25 backdrop-blur-sm">
            <BookOpen className="h-3.5 w-3.5 text-primary-foreground/90" />
            <span className="text-xs font-semibold tracking-wide text-primary-foreground">
              Seminario
            </span>
          </div>
          {/* Instituto: borde externo diferente para distinguir visualmente */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 backdrop-blur-sm">
            <GraduationCap className="h-3.5 w-3.5 text-primary-foreground/70" />
            <span className="text-xs font-semibold tracking-wide text-primary-foreground/90">
              Instituto
            </span>
          </div>
        </div>

        {/* Eyebrow label — orientación editorial */}
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground/50">
          Aula SEI · Estudio de Escrituras
        </p>

        <h2 className="font-serif text-4xl font-bold leading-[1.15] text-primary-foreground md:text-5xl lg:text-6xl">
          Estudia las Escrituras{" "}
          <em className="not-italic text-primary-foreground/80">a tu ritmo</em>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          Cuestionarios interactivos de Seminario e Instituto. Lee, aprende y reporta
          tu avance — desde donde estés.
        </p>

        <a
          href="#categorias"
          className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-bold text-primary transition-all hover:bg-primary-foreground/93 hover:shadow-xl hover:shadow-black/20 active:scale-95"
        >
          Explorar Cursos
          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}