# Completitud de contenido — Doctrina y Convenios, segundo semestre

Registro de la generación de contenido de `doctrina-y-convenios-2`, que hasta el 1-sep-2026
tenía `secciones: []` en las 54 lecciones de su manifiesto.

Método: skill `seminary-enrichment`, con el chequeo de cierre que pide
[`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md) §3 después de cada tanda
(`audit-completitud.ts`, `audit-escrituras.ts`, `audit-autores-quiz.ts`, `validate-content.ts`).

**Estado: CERRADO (1-sep-2026). 48 de 48 lecciones generadas y verificadas.**

---

## 1. Lo primero que hubo que arreglar: el manifiesto estaba roto

Antes de poder generar una sola lección hubo que corregir tres cosas del `_manifest.json`.

### 1.1 Los 54 `chapterUrl` (todos mal)

| Problema | Cantidad |
|---|---:|
| `chapterUrl` **ausente** | 42 |
| Apuntaba a las **Escrituras** en vez de al manual del maestro | 9 |
| Apuntaba a un **slug inexistente** del manual | 3 |

Los tres del último grupo son el caso más engañoso, el mismo que documentó
`COMPLETITUD-libro-de-mormon-2.md`: `…/doctrine-and-covenants-seminary-teacher-manual/113-evaluate-your-learning-5`
—sin el `-2025` en el nombre del manual— devuelve **HTTP 200** y redirige en silencio a otra
página. No salta como error.

Se extrajo el índice real del manual de 2025 y se mapearon las 54 lecciones a su slug correcto.
**Verificado: las 54 URLs devuelven 200 y la ruta final coincide con la pedida** (sin redirección).

### 1.2 Ocho lecciones duplicadas con `doctrina-y-convenios-1`

Al cruzar los `chapterUrl` de los dos cursos apareció que **8 lecciones del manual estaban
asignadas a los dos semestres a la vez**: DyC-1 las cubría en sus semanas 18–20 y DyC-2 volvía a
empezar por ellas en sus semanas 21–23.

| Lección del manual | DyC-1 | DyC-2 |
|---|---|---|
| 261 · D. y C. 71 | `82-dc-71` (S18) | `doctrina-y-convenios-71` (S21) |
| 262 · Práctica del Dominio 5 | `83-dominio-practica-5` (S18) | `pr-ctica-…-5` (S21) |
| 263 · Evalúa tu aprendizaje 5 | `84-evalua-aprendizaje-5` (S18) | `eval-a-tu-aprendizaje-5` (S21) |
| 271 · D. y C. 76:1–19 | `85-dc-76-1-19` (S19) | `…-76-1-19` (S22) |
| 272 · D. y C. 76:19–24 | `86-dc-76-19-24` (S19) | `…-76-19-24` (S22) |
| 273 · D. y C. 76:50–70 | `87-dc-76-50-70` (S19) | `…-76-50-70` (S22) |
| 281 · D. y C. 78 | `89-dc-78` (S20) | `…-78` (S23) |
| 282 · D. y C. 79–80 | `90-dc-79-80` (S20) | `…-79-80` (S23) |

Al mismo tiempo, **faltaban dos lecciones que el manual sí tiene**: 302 (D. y C. 84:33–44) y
303 (D. y C. 84:49–102).

**Decisión del usuario (1-sep-2026): corregir el manifiesto.** DyC-2 pasa a cubrir exactamente
las lecciones 291 a 443 del manual —las 48 que siguen a donde termina DyC-1—, distribuidas en las
mismas 19 semanas y con las mismas fechas que ya tenía el calendario.

Los 8 archivos duplicados **no se borraron**: quedan en `lib/content/doctrina-y-convenios-2/`
fuera del manifiesto, igual que los huérfanos de `libro-de-mormon-2`. Seis de ellos alcanzaron a
recibir contenido completo antes de la corrección, por si en el futuro se decide usarlos como
material de repaso. Los dos restantes (`doctrina-y-convenios-78` y `doctrina-y-convenios-79-80`)
siguen con `secciones: []`; son los únicos archivos del directorio sin contenido, y no forman
parte del curso.

### 1.3 Dos títulos que no coincidían con el manual

- `doctrina-y-convenios-94-96` decía «Doctrina y Convenios 94–96»; la lección del manual es
  **D. y C. 95**. Título corregido (el `id` del archivo se conservó para no romper enlaces).
- `doctrina-y-convenios-88-76-80-117-126` decía «117–126»; el manual dice **117–141**.

---

## 2. Estado final: cerrado

| Chequeo | Resultado |
|---|---|
| `audit-completitud.ts` | contexto 54/54 en rango · enseñanza 54/54 · conclusión 54/54 en rango · cuestionario 54/54 con 6 · quiz 54/54 con 7 |
| `audit-escrituras.ts` | **162 citas de Escritura → 162 OK** |
| Citas de líder | **54 verificadas por recall contra el discurso descargado**, casi todas con 1.00; el `link` quedó anclado al párrafo exacto |
| `audit-autores-quiz.ts` | 0 atribuciones sin respaldo en las lecciones del manifiesto |
| `audit-distribucion-respuestas.ts` | 0:24 % · 1:26 % · 2:25 % · 3:24 % ✓ |
| `validate-content.ts` | limpio |

Las citas de líder salieron, en todos los casos, del **manual oficial de Seminario de la propia
lección**, que es el método que recomienda `seminary-audit` §2. Tres de ellas apuntan a la página
del manual en lugar de al discurso original, porque el original no está en línea en español o la
página no se puede descargar: el devocional de Ballard de 2014 (la página de `broadcasts` devuelve
503), la cita de Maxwell de *Liahona* de abril de 2001, y el artículo de Oaks «Sins and Mistakes»
(*Ensign*, solo en inglés). Es el mismo criterio que ya se había usado en `77-dc-64-1-17` de
DyC-1: el `link` va a la página oficial **en español donde ese texto se puede leer palabra por
palabra**, y la `fuente` conserva la referencia original.

---

## 3. Método usado, y dos lecciones aprendidas

Por cada lección:

1. Se descarga la página del **manual del maestro** (el `chapterUrl` ya corregido) y se extraen el
   contexto histórico y **las citas de líder que el manual usa en esa misma lección**.
2. Se **descargan los versículos** y se copia el texto **literal**.
3. Se resuelve el `link` del discurso buscándolo en el índice de su conferencia.
4. Se escribe la lección y se aplica con un generador que **verifica la cita de líder por recall
   contra el discurso descargado** y ancla el `link` al párrafo exacto. Si el recall baja de 0.85,
   la cita no se aplica y queda marcada para revisión.
5. Se corre `audit-escrituras.ts` sobre la categoría antes de pasar a la tanda siguiente.

> ⚠️ **Lección 1: descargar primero, escribir después.** En dos ocasiones se escribieron versículos
> *antes* de descargarlos, confiando en la memoria (D. y C. 82:1, 82:7 y 90:5). Los tres salieron
> mal, y `audit-escrituras.ts` los detectó de inmediato. Es exactamente el defecto de la fila 10 de
> `CICLO-GENERACION-AUDITORIA.md`, aplicado a Escrituras en vez de a citas de líder: **la regla no
> falla, falla la disciplina de ejecución**. Correr el script al cerrar cada tanda —y no al final
> del curso— es lo que hizo que el costo del error fuera de minutos.

> ⚠️ **Lección 2: el verificador de recall justifica su costo.** Cuatro citas quedaron sin aplicar
> porque el slug del discurso era incorrecto o el texto no era literal (Maxwell, Eyring, Nelson en
> D. y C. 115, Bednar en 101:43–101). Sin ese paso, las cuatro habrían entrado al curso con un
> `link` roto o un texto reescrito, que es precisamente lo que la auditoría de DyC-1 tardó tres
> sesiones en encontrar a mano.

---

## 4. Un defecto del corpus que apareció al cerrar este curso

Al medir la calidad de Nivel 2 apareció algo que ningún chequeo anterior detectaba: **la posición
de la respuesta correcta estaba fuertemente sesgada**. En este curso, recién generado, el 99 % de
las respuestas caía en las posiciones 0 o 1.

El barrido sobre los 12 cursos mostró que **no era un problema de esta tanda sino del corpus
entero**: 11 de 12 cursos resultaron adivinables, con dos casos extremos —`antiguo-testamento-2`
con el 96 % de sus respuestas en la posición 1 y `nuevo-testamento` con el 95 %—. Responder
siempre la segunda opción aprobaba esos cursos completos sin leer una sola pregunta.

Se creó **`scripts/audit-distribucion-respuestas.ts`**, que mide el sesgo y lo corrige rotando el
array de `options` sin tocar una sola letra del texto:

```bash
npx tsx scripts/audit-distribucion-respuestas.ts --todos           # mide
npx tsx scripts/audit-distribucion-respuestas.ts <categoria> --write   # corrige
```

`doctrina-y-convenios-1` y `doctrina-y-convenios-2` ya están corregidos (~25 % por posición).
**Los otros 9 cursos siguen pendientes** — ver `PLAN-DE-AUDITORIA.md` §3.

---

## 5. Qué queda de este curso

- Nada en completitud, Escrituras ni citas de líder: el curso está cerrado.
- Pendiente de decisión de producto: **el manual del maestro continúa después de D. y C. 127–128**
  (secciones 130 a 138, la Proclamación sobre la Familia, los Artículos de Fe, El Cristo Viviente
  y las lecciones de Preparación para la Vida). El calendario de DyC-2 termina en la semana 39 con
  127–128, así que ese material no está en ningún curso del sitio. Si el segundo semestre real se
  extiende más allá de noviembre, hay que agregar semanas al manifiesto y generar esas lecciones.
