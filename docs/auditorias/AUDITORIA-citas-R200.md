# Auditoría de citas — Religión 200 (La familia eterna)

Registro de la revisión de las citas de líderes de la Iglesia del curso `religion-200`.
Mismo criterio que [DyC-1](AUDITORIA-citas-DyC1.md), [R301](AUDITORIA-citas-R301.md),
[R225](AUDITORIA-citas-R225.md), [AT-1](AUDITORIA-citas-AT1.md),
[R250](AUDITORIA-citas-R250.md) y [Libro de Mormón](AUDITORIA-citas-libro-de-mormon.md).

**Estado: empezado.** El curso tiene **56 citas**. Se verificó la **única que el
detector marcaba con bandera de contenido** (`sin-link`). Las otras 55 siguen sin
revisar una por una.

---

## Panorama del curso

| Bandera | Al empezar | Ahora |
|---|---:|---:|
| `sin-link` | 1 | **0** |
| `link-no-oficial` | 0 | 1 |
| **Citas con problemas** | **1** | **1** |

El curso ya venía casi limpio: el arreglo estructural de `scripts/fix-citas-links.ts`
—que movió al campo `link` las URLs pegadas como texto plano dentro de `fuente`— lo
había llevado de 56 problemas a 1. La bandera que queda es **esperada, no un defecto**
(ver abajo).

---

## La cita verificada

### `r200-l02` — La función de los profetas de proclamar la doctrina de la familia eterna ✅ Textual, solo faltaba el link

- **Fuente declarada:** Presidente Russell M. Nelson, «The Love and Laws of God»,
  Devocional de la Universidad Brigham Young, 17 de septiembre de 2019, **pág. 3**,
  speeches.byu.edu — sin `link`.
- **Verificación:** el devocional **existe, es de esa fecha, y está publicado en
  español** en el sitio oficial de BYU Speeches con el título **«El amor y las leyes
  de Dios»**. El pasaje citado es **textual**: aparece en la sección IV del discurso,
  incluida la frase de cierre «Los profetas rara vez son populares, pero ¡siempre
  enseñaremos la verdad!».
- **Problema menor:** la `fuente` traía «pág. 3». **Un devocional no tiene páginas** —
  ese número no se podía verificar y no correspondía a nada. Se quitó, siguiendo la
  regla de no arrastrar números de página no verificados.
- **Acción tomada:** ✅ completada. Se puso el título en español, se quitó la página
  inventada y se agregó el `link` a la versión oficial en español. **No se tocó el
  texto** más allá de ajustar la puntuación final a la del original.

> **Presidente Russell M. Nelson** — «El amor y las leyes de Dios», Devocional de la Universidad Brigham Young, 17 de septiembre de 2019
>
> «A veces, a nosotros, como líderes de la Iglesia, se nos critica por aferrarnos firmemente a las leyes de Dios, por defender la doctrina del Salvador y por resistir las presiones sociales de nuestros días, pero nuestra comisión como Apóstoles ordenados es ir por todo el mundo a predicar Su evangelio a toda criatura. Es precisamente porque nos importan profundamente todos los hijos de Dios que proclamamos Su verdad. Es posible que no siempre le digamos a las personas lo que quieren oír. Los profetas rara vez son populares, pero ¡siempre enseñaremos la verdad!»
>
> `https://speeches.byu.edu/spa/talks/russell-m-nelson/el-amor-y-las-leyes-de-dios/`

**Sobre la bandera `link-no-oficial`:** el link apunta a `speeches.byu.edu`, no a
`churchofjesuschrist.org`. Es correcto igual: BYU Speeches es el archivo oficial de los
devocionales universitarios, y este discurso **no está publicado en la Biblioteca del
Evangelio**. El detector no distingue entre «fuera del dominio principal» y «fuera de
la Iglesia»; acá es lo primero. Mismo caso que `leccion-81` y `leccion-188` en
[AT-1](AUDITORIA-citas-AT1.md).

---

## Qué falta en este curso

- [ ] **Las 55 citas restantes.** No se revisaron una por una. Todas tienen `link`
      —muchos de ellos puestos por `fix-citas-links.ts` a partir de la URL que venía
      dentro de `fuente`—, así que la referencia existe; falta comprobar que el texto
      sea textual y que el autor sea el correcto.

## Cómo continuar

```bash
npx tsx scripts/extract-citas.ts religion-200        # panorama
npx tsx scripts/extract-citas.ts --json religion-200 # con banderas
npx tsx scripts/validate-content.ts                  # tras cada corrección
```

Las correcciones se aplican en `lib/content/religion-200/<lessonId>.json`.
