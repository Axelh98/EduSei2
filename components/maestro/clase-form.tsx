// components/maestro/clase-form.tsx
"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Save } from "lucide-react"
import { crearClase, actualizarClase, type Clase } from "@/actions/clases"
import { categories } from "@/lib/quiz-data"
import { isFlatCategory } from "@/lib/types"

interface Props {
  mode:    "create" | "edit"
  clase?:  Clase
}

const inputClass = "w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
const labelClass = "text-[11px] font-bold uppercase tracking-widest text-muted-foreground"

export function ClaseForm({ mode, clase }: Props) {
  const router = useRouter()
  const [error, setError]     = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const [courseType, setCourseType]  = useState(clase?.course_type ?? "seminario")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null); setSuccess(null)
    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      if (mode === "create") {
        const result = await crearClase(formData)
        console.log("[ClaseForm] Resultado de crearClase:", result)

        if (!result) {
          setError("El servidor no respondió. Revisá la consola del servidor.")
          return
        }
        if ("error" in result && result.error) {
          setError(result.error)
          return
        }
        if ("id" in result && result.id) {
          // Éxito: navegamos al detalle
          router.push(`/maestro/clases/${result.id}`)
          return
        }
        setError("Respuesta inesperada del servidor.")
      } else {
        const result = await actualizarClase(clase!.id, formData)
        console.log("[ClaseForm] Resultado de actualizarClase:", result)

        if (result?.error) setError(result.error)
        else if (result?.success) {
          setSuccess(result.success)
          router.refresh()
        }
      }
    })
  }

  const cursosFiltrados = categories.filter(c => c.courseType === courseType)

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className={labelClass}>Nombre de la clase *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          defaultValue={clase?.name}
          placeholder="Seminario Mañana, DyC Lun-Mié, etc."
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="course_type" className={labelClass}>Programa *</label>
          <div className="relative">
            <select
              id="course_type"
              name="course_type"
              required
              value={courseType}
              onChange={e => setCourseType(e.target.value)}
              className={`${inputClass} appearance-none pr-8 cursor-pointer`}
            >
              <option value="seminario">Seminario</option>
              <option value="instituto">Instituto</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="category_id" className={labelClass}>
            Curso <span className="font-normal normal-case tracking-normal italic text-muted-foreground/60">(opcional)</span>
          </label>
          <div className="relative">
            <select
              id="category_id"
              name="category_id"
              defaultValue={clase?.category_id ?? ""}
              className={`${inputClass} appearance-none pr-8 cursor-pointer`}
            >
              <option value="">Sin curso específico</option>
              {cursosFiltrados.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}{!isFlatCategory(c) && c.semester ? ` (${c.semester}° sem.)` : ""}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▾</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="schedule" className={labelClass}>
            Horario <span className="font-normal normal-case tracking-normal italic text-muted-foreground/60">(opcional)</span>
          </label>
          <input
            id="schedule"
            name="schedule"
            type="text"
            defaultValue={clase?.schedule ?? ""}
            placeholder="Lun-Vie 18hs"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="period" className={labelClass}>
            Período <span className="font-normal normal-case tracking-normal italic text-muted-foreground/60">(opcional)</span>
          </label>
          <input
            id="period"
            name="period"
            type="text"
            defaultValue={clase?.period ?? ""}
            placeholder="2026 S1"
            className={inputClass}
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 px-3 py-2.5 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
          <span className="font-bold">!</span> {error}
        </div>
      )}

      {success && (
        <div className="px-3 py-2.5 bg-success/10 border border-success/20 rounded-lg text-sm text-success-foreground">
          ✓ {success}
        </div>
      )}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-all active:scale-[0.98]"
        >
          <Save className="h-4 w-4" />
          {isPending
            ? "Guardando..."
            : mode === "create" ? "Crear clase" : "Guardar cambios"}
        </button>
      </div>
    </form>
  )
}
