import { categories } from "@/lib/quiz-data"
import { CategoryCard } from "./category-card"

export function CategoriesSection() {
  return (
    <section id="categorias" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Elige tu estudio
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Categorías de Estudio
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Selecciona una categoria para explorar sus semanas y lecciones.
            Cada leccion contiene un cuestionario con preguntas del manual
            de Seminario.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}


