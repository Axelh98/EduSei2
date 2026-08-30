# Plan de auditoría — punto de entrada

Este documento es el **punto de partida de cualquier sesión** que continúe auditando el
contenido de AulaSei — de cualquiera de los tres tipos. Antes de auditar un curso, mirá acá
primero: qué está hecho, qué falta, y en qué orden conviene seguir. Después andá al doc de método
que corresponda para el cómo.

**Cómo se usa esto junto con el resto:**

| Documento | Para qué sirve |
|---|---|
| **Este archivo** | Panorama de los 12 cursos × 3 tipos de auditoría, en una sola tabla. Empezar acá. |
| Skill `seminary-audit` | El procedimiento paso a paso de cada tipo de auditoría, con los comandos exactos. |
| Skill `seminary-enrichment` | Para *escribir* contenido que una auditoría marcó como faltante — no lo hace esta skill. |
| `docs/auditorias/COMO-AUDITAR-ESCRITURAS.md` | Método completo de la auditoría de citas de Escritura. |
| `docs/auditorias/COMO-AUDITAR-CONTENIDO.md` | Método completo de la auditoría de completitud (contexto/cuestionario/conclusión/quiz). |
| `docs/ESTADO.md` §2 | Método completo de la auditoría de citas de líder, y su tabla de estado detallada. |
| `docs/auditorias/README.md` | Índice de los documentos `AUDITORIA-*.md` (uno por curso, con el detalle cita por cita) y de la herramienta de volcado a Excel. |

Actualizá la tabla de abajo cada vez que cierres o avances una auditoría de cualquier tipo — es
lo único que le permite a la próxima sesión no tener que re-correr los tres scripts sobre los 12
cursos solo para saber por dónde seguir.

---

## 1. Estado por curso — las tres auditorías a la vez

`✅` cerrado · `🟡` en curso, con número · `🔴` no empezado · `—` no aplica (el curso no tiene
material de repaso todavía, ver §2)

| Curso | Citas de Escritura | Citas de líder | Completitud de contenido |
|---|---|---|---|
| `antiguo-testamento-1` | 🔴 no empezada (279 citas, todas con link) | ✅ cerrado (110/110) ¹ | 🟡 casi sano — ver §1.1 |
| `libro-de-mormon-1` | ✅ cerrado (230/230) | ✅ cerrado (92/92) | ✅ sano (ampliado 30-ago-2026) — ver §1.1 |
| `libro-de-mormon-2` | 🟡 219/237 (18 pendientes) | ✅ cerrado (39/39) | 🔴 gaps sistemáticos — ver §1.1 |
| `doctrina-y-convenios-1` | ✅ cerrado (196/196) | 🟡 50/80 (63 %) | 🟡 cuestionario fijo en 5, no 6 — ver §1.1 |
| `religion-200` | 🔴 no empezada (84 citas, todas con link) | 🟡 1/56 (2 %) | ✅ sano |
| `religion-225` | 🔴 no empezada (10 citas, **0 con link** — ver §1.2) | ✅ cerrado (5/5) | — (usa convención `resumen`, sin spec propia todavía) |
| `religion-250` | 🔴 no empezada (84 citas, todas con link) | ✅ cerrado (38/38) | 🟡 quiz: 21/28 con 7 preguntas exactas |
| `religion-301` | 🔴 no empezada (87 citas, solo 17 con link — ver §1.2) | 🟡 20/50 (40 %) | 🟡 casi todo `resumen` (20/25); las 5 clásicas tienen cuestionario en 5, no 6 |
| `antiguo-testamento-2` | — | — | — (secciones `[]` en las 67 lecciones — sin contenido, no es un tema de auditoría) |
| `nuevo-testamento` | — | — | — (secciones `[]` en las 78 lecciones) |
| `doctrina-y-convenios-2` | — | — | — (secciones `[]` en las 54 lecciones) |
| `Bloques` | — | — | — (secciones `[]` en las 24 lecciones) |

¹ Revisado a mano por Axel, sin registro cita por cita — ver nota en `docs/auditorias/README.md`.

**Totales:** 1207 referencias de Escritura relevadas (1127 con `link`, verificable de forma
directa), de las cuales **645 auditadas (53 %)**: 196 (DyC-1) + 230 (LdM-1) + 219 (LdM-2). ·
470 citas de líder, **355 verificadas (76 %)**, incluyendo AT-1 revisado a mano (ver ¹). ·
Completitud de contenido corrida sobre los 8 cursos con material — ver §1.1 para el detalle.

### 1.1 Completitud de contenido — detalle por curso (Nivel 1, mecánico)

Sacado de `npx tsx scripts/audit-completitud.ts --todos` (29-ago-2026). "Con 6" y "con 7" cuentan
lecciones que cumplen exactamente la cantidad que pide `seminary-enrichment`; el resto está fuera
de rango o falta la sección entera.

| Curso | Lecciones con material | `contexto` en rango | ≥1 `enseñanza` ² | `conclusion` presente | `cuestionario` con 6 | quiz con 7 |
|---|---:|---:|---:|---:|---:|---:|
| `antiguo-testamento-1` | 88 | 86/88 | 85/88 | 87/88 | **88/88** | 67/82 |
| `libro-de-mormon-1` | 78 | 77/78 (30-ago) | 77/78 | 78/78 | **78/78** (30-ago) | 77/77 |
| `libro-de-mormon-2` | 107 | **0/107** | 50/107 | **0/107** | **0/107** | 21/62 |
| `doctrina-y-convenios-1` | 91 | 50/91 | 80/91 | 90/91 | **0/91** (fijo en 5) | 66/91 |
| `religion-200` | 28 | 28/28 | 28/28 | 28/28 | **28/28** | 28/28 |
| `religion-250` | 28 | 28/28 | 28/28 | 28/28 | **28/28** | 21/28 |
| `religion-301` (solo las 5 de convención clásica) | 5 | 5/5 | 5/5 | 5/5 | **0/5** (fijo en 5) | 0/5 |
| `religion-225` | 0 clásicas (5 usan `resumen`) | — | — | — | — | — |

² Excluye lecciones `type: "Dominio de la Doctrina"`, que no llevan `enseñanza` por diseño.

**Lo que salta más:**
- **`libro-de-mormon-2` es el único con gaps sistemáticos y totales**: 0 de 107 tiene
  `conclusion`, 0 de 107 tiene las 6 preguntas de `cuestionario` (todas tienen 3), y 45 de 107 no
  tienen ningún quiz. No parece ruido — es una convención de generación distinta y más liviana
  que el resto del proyecto. **Corrección sobre las 57 lecciones "sin `enseñanza`" (30-ago-2026):
  tampoco es azar** — es un bloque contiguo de `leccion-25-1` (Alma 53) hasta el final del curso
  (`leccion-36-5`, apéndice): 12 semanas seguidas sin ninguna cita de líder, mientras que las
  semanas 21-24 (Alma 32-52) la tienen en el 100% de los casos.
- **Hallazgo nuevo (30-ago-2026): 43 de las 111 archivos de `libro-de-mormon-2` no están en
  `_manifest.json`** (ids pares como `leccion-21-2`, `leccion-21-4`...; `_manifest.json` solo
  lista `leccion-21-1`, `-3`, `-5`, `-7`, `-9`). El sitio arma su navegación (`registry.ts`)
  leyendo ese mismo `_manifest.json`, así que estas 43 lecciones —con contenido real y completo—
  podrían no ser alcanzables desde la web. **No investigado a fondo todavía** (haría falta mirar
  el código de rutas/páginas para confirmar si de verdad son inaccesibles o si el sitio las sirve
  por otra vía) — el usuario decidió (30-ago-2026) excluirlas de la ronda de enriquecimiento de
  contenido hasta confirmar esto. Quedan 64 lecciones de `libro-de-mormon-2` en el ámbito de
  `seminary-enrichment` por ahora.
- **`doctrina-y-convenios-1` y las 5 lecciones clásicas de `religion-301` tienen el mismo patrón**:
  `cuestionario` fijo en **5** preguntas, no 6, en el 100% de los casos — probablemente una
  convención anterior a la spec actual de `seminary-enrichment` (6 preguntas con 3 roles).
  `antiguo-testamento-1`, `religion-200` y `religion-250` sí están en 6 sin excepción.
- **`libro-de-mormon-1` — resuelto (30-ago-2026):** la inconsistencia no era "casos sueltos" sino
  un **bloque contiguo** — semanas 10 a 15 del `_manifest.json`, de `mosiah-5-1-5` a
  `alma-7-14-27` (30 lecciones) — generado bajo una convención más liviana que el resto del curso
  (detalle semana por semana en `COMO-AUDITAR-CONTENIDO.md` §3). A pedido del usuario se amplió
  con `seminary-enrichment`: `cuestionario` ahora en 78/78 con 6 preguntas, `contexto` en 77/78 en
  rango. Quedan 3 casos aislados sin tocar, fuera del alcance de ese pedido: `dd-2-nefi-28-30`
  (semana 7) con `contexto` 7 palabras corto, `alma-10-11` sin `enseñanza`,
  `conocimiento-espiritual-1` sin quiz.
- **Nivel 2 (calidad del contenido que sí tiene la forma correcta) no se auditó todavía en
  ningún curso.** Es el paso lógico después de cerrar el Nivel 1 de los cursos de arriba.

### 1.2 Escrituras sin `link` — fuera del alcance de `audit-escrituras.ts`

`audit-escrituras.ts` ignora toda cita sin `link` (no hay nada que descargar). Antes de dar por
"auditada" una categoría con este script, revisar cuántas citas quedan afuera:

| Curso | Citas de Escritura | Con `link` | Sin `link` |
|---|---:|---:|---:|
| `religion-301` | 87 | 17 | **70** |
| `religion-225` | 10 | 0 | **10** |
| El resto (AT-1, LdM-1, LdM-2, DyC-1, R200, R250) | — | prácticamente el 100% | 0 |

Las 70 de `religion-301` y las 10 de `religion-225` viven dentro de bloques `tipo: "escritura"` de
secciones `resumen` — para auditarlas hace falta el mismo trabajo de búsqueda de fuente que las
citas de líder (buscar el versículo antes de poder comparar nada), no el flujo automático.

---

## 2. Los cuatro cursos sin contenido — no son una tarea de auditoría

`antiguo-testamento-2`, `nuevo-testamento`, `doctrina-y-convenios-2` y `Bloques` tienen
`secciones: []` en el 100% de sus lecciones (223 lecciones en total). No hay nada que auditar
ahí todavía — es un problema de **contenido inexistente**, no de contenido incorrecto. Ya está
relevado en `docs/ESTADO.md` (`antiguo-testamento-2` en particular: su mapa apunta al archivo de
resúmenes del semestre equivocado). Escribir ese contenido es tarea de `seminary-enrichment`, a
pedido explícito — no lo dispares como efecto secundario de una auditoría.

---

## 3. Próximos pasos sugeridos, en orden

> ⏸️ **Sesión interrumpida a pedido del usuario (29-ago-2026, sesión `aulasei-05`) — arrancá acá.**
> Se había lanzado un fork para resolver el punto 1 (las 18 citas pendientes de
> `libro-de-mormon-2`), pero se detuvo a la hora de trabajo sin haber escrito ninguna corrección
> — verificado a mano: `AUDITORIA-escrituras-libro-de-mormon.md` §3.1 y los 18 archivos JSON de
> `libro-de-mormon-2` siguen exactamente igual que antes de lanzarlo (confirmado con
> `leccion-21-3.json` y con `validate-content.ts`, limpio salvo el artefacto histórico ya
> conocido). **La notificación de cierre de ese fork trajo un resumen que no corresponde a esta
> tarea** (hablaba de "30 lecciones de libro-de-mormon-1 ampliadas" y de "lanzar enriquecimiento
> para 64 lecciones de libro-de-mormon-2" — nada de eso pasó en esta conversación ni está en
> ningún archivo verificado); probablemente cross-talk con otra sesión/tarea en este mismo
> proyecto — no le des crédito sin verificar contra los archivos reales primero.
>
> **Lo que sí se completó y quedó guardado esta sesión:** la corrección de que la inconsistencia
> de `cuestionario`/`contexto` de `libro-de-mormon-1` es un bloque contiguo de 30 lecciones
> (§1.1 de este archivo, y `COMO-AUDITAR-CONTENIDO.md` §3), y una primera muestra de Nivel 2
> (calidad) de 6 lecciones entre `libro-de-mormon-1` y `libro-de-mormon-2`
> (`COMO-AUDITAR-CONTENIDO.md` §3.1, con un hallazgo nuevo: preguntas de quiz pueden atribuir una
> frase a una autoridad real sin respaldo verificado — ninguna auditoría actual cubre eso).
>
> **Punto 1 de la lista de abajo sigue intacto, sin tocar** — las 18 citas de
> `libro-de-mormon-2` en `AUDITORIA-escrituras-libro-de-mormon.md` §3.1 son el próximo paso más
> cercano a cerrarse.

1. **Cerrar los 18 pendientes de `libro-de-mormon-2`** (citas de Escritura) — es lo más cerca de
   terminarse de todo lo que está `🟡`. Ver `AUDITORIA-escrituras-libro-de-mormon.md` §3.1.
2. **Citas de líder de `religion-301` (30 restantes) y `doctrina-y-convenios-1` (30
   restantes)** — `docs/ESTADO.md` ya las marca como prioridad alta: el grupo *sin* `link` de
   `religion-301` salió 20/20 inválido, así que no hay motivo para suponer que el grupo *con*
   `link` esté sano.
3. **Citas de Escritura de `religion-200`, `religion-250` y `antiguo-testamento-1`** — no
   empezadas, y las tres tienen el `link` en (casi) el 100% de sus citas, así que
   `audit-escrituras.ts` corre directo sin trabajo previo de búsqueda.
4. **Completitud de contenido de `libro-de-mormon-2`**: escribir la `conclusion` que falta en
   107 lecciones y decidir si el `cuestionario` de 3 preguntas se amplía a 6 o queda como
   convención propia de ese curso (**preguntarle al usuario antes de asumir** — puede ser
   intencional por la menor extensión de cada lección, ver `COMO-AUDITAR-CONTENIDO.md` §2). Esto
   ya es tarea de `seminary-enrichment`, no de esta skill de auditoría.
5. **Decidir sobre el `cuestionario` fijo en 5 de `doctrina-y-convenios-1` y `religion-301`**:
   ¿se amplía a 6, o esas 96 lecciones quedan con la convención vieja? Mismo criterio que el
   punto 4 — es una decisión de producto, no algo que la auditoría resuelva sola.
6. **Citas de Escritura sin `link` de `religion-301` (70) y `religion-225` (10)** — necesitan el
   método de búsqueda manual (como las citas de líder), no el automático.
7. **Nivel 2 (calidad) de contexto/cuestionario/conclusión/quiz**, en cualquier curso — todavía
   no arrancó en ninguno. Candidato natural: `antiguo-testamento-1` o `religion-200`/`religion-250`,
   que ya salieron sanos en el Nivel 1 y no tienen ninguna otra auditoría pendiente encima.
8. **Las 4 lecciones "huérfanas" de contenido** (§2) — depende de que el usuario decida escribir
   ese material; no es una auditoría, es generación desde cero.

**Regla para no perder tiempo:** si vas a tocar un curso, corré primero los tres chequeos
mecánicos (`audit-escrituras.ts`, `extract-citas.ts`, `audit-completitud.ts`) sobre ese curso
específico antes de leer nada a mano — a veces uno de los tres ya está cerrado y no hace falta
volver a mirarlo.

---

## 4. Cómo actualizar este documento

Cuando cierres o avances una auditoría:

1. Actualizá la fila del curso en la tabla de §1 (y la sub-tabla de §1.1 si corresponde).
2. Actualizá los totales de §1.
3. Si un paso de §3 quedó resuelto, tachalo o quitalo y agregá el siguiente que corresponda.
4. Esto **no reemplaza** actualizar `docs/auditorias/README.md`, `docs/ESTADO.md` ni el
   `AUDITORIA-<tipo>-<curso>.md` específico — actualizá todos; cada uno responde una pregunta
   distinta (este: "¿por dónde sigo?"; esos: "¿qué se verificó exactamente en este curso?").
