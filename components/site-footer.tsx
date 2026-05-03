import { BookOpen } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-center md:px-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            Mi Seminario e Instituto
          </span>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          Recurso educativo de La Iglesia de Jesucristo de los Santos de los
          Últimos Días para el estudio personal de las Escrituras, Seminario e
          Instituto.
        </p>
        <p className="text-xs text-muted-foreground/60">
          {"© "}
          {new Date().getFullYear()}
          {" Mi Seminario e Instituto. Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  )
}