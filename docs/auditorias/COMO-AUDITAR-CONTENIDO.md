# Cómo auditar contexto, cuestionario, conclusión y quiz

Guía de método para verificar que **el resto del material de una lección** —no las citas, que
tienen su propia guía (`COMO-AUDITAR-ESCRITURAS.md` para Escritura, `../ESTADO.md` §2 para citas
de líder)— cumple con las reglas de generación que exige `seminary-enrichment` y es razonablemente
consistente entre cursos. Cubre cuatro cosas: `contexto`, `cuestionario` (preguntas reflexivas),
`conclusion` y `questions` (quiz de opción múltiple).

> Nace de comparar `antiguo-testamento-1`, `libro-de-mormon-1` y `libro-de-mormon-2` en agosto de
> 2026 (ver §3, el primer hallazgo real). No había hasta entonces ninguna auditoría de estos
> cuatro elementos — `docs/ESTADO.md` los lista en "Lo que queda fuera del alcance actual" junto
> con `contexto`/`conclusion`/cuestionarios, marcados "nunca auditado".

---

## 1. Dos niveles de auditoría, porque no todo se puede contar

### Nivel 1 — Mecánico (completitud y forma)

Todo lo que se puede chequear contando, sin leer el contenido con criterio: ¿existe la sección?,
¿tiene la cantidad de ítems que pide la spec?, ¿el largo en palabras está en rango? Esto es
**100% automatizable** y ya tiene script:

```bash
npx tsx scripts/audit-completitud.ts <categoria> [...]           # una o varias categorías
npx tsx scripts/audit-completitud.ts --todos                     # las 12 categorías del proyecto
npx tsx scripts/audit-completitud.ts <categoria> --detalle       # lista lección por lección qué falla
```

Reglas que aplica (tomadas de `~/.claude/skills/seminary-enrichment/SKILL.md`):

| Elemento | Regla | Umbral del script |
|---|---|---|
| `contexto` | 200–320 palabras (150–260 en "Preparación para la Vida" y "Dominio de la Doctrina") | flag fuera de 150–340 |
| `enseñanza` | "Siempre incluí al menos una" | flag si 0, salvo `type: "Dominio de la Doctrina"` (ver nota) |
| `conclusion` | 80–130 palabras | flag fuera de 60–140, y flag si falta la sección entera |
| `cuestionario` (`preguntas`) | Exactamente 6, con roles 1–2 abridoras / 3–4 profundizadoras / 5–6 compromiso | flag si el conteo ≠ 6 |
| `questions` (quiz) | Exactamente 7, en 4 niveles cognitivos (2 recuerdo, 2 comprensión, 2 aplicación, 1 síntesis) | flag si el conteo ≠ 7, y flag si no hay ninguna |

**Nota — `type: "Dominio de la Doctrina"` no cuenta como defecto por no tener `enseñanza`:** la
propia tabla de `seminary-enrichment` no enfatiza cita de líder para ese tipo de lección (su
énfasis es memorización con comprensión). El script ya excluye estos casos del conteo de
"defectos reales" y los reporta aparte. Si extendés el script a otra regla, fijate primero si esa
regla también depende del `type` de la lección (`_manifest.json`) antes de tratar una diferencia
como error.

**Dos convenciones de contenido conviven en el proyecto** — el script las distingue:
- **Clásica** (`contexto` / `escrituras` / `enseñanza` / `conclusion` / `cuestionario`): la que
  genera `seminary-enrichment` y la que cubren las reglas de arriba.
- **`resumen`** (una sola sección con `bloques`: `parrafo`, `escritura`, `cita`, `doctrinal`,
  `reflexion`): la usan `religion-225` entero y parte de `religion-301`. **No tiene todavía una
  spec de largo documentada** — el script solo cuenta cuántas lecciones la usan, no valida su
  contenido. Si hace falta auditarla, primero hay que decidir con el usuario qué reglas aplican
  (¿cuántos bloques `cita`/`escritura` por lección? ¿hay un mínimo de palabras por `parrafo`?)
  antes de escribir un chequeo — no asumir que las reglas de la convención clásica trasladan.

### Nivel 2 — Cualitativo (¿el contenido es bueno?)

Lo que el conteo no ve: ¿el `contexto` realmente conecta con la vida de un adolescente, o son 250
palabras de relato sin aterrizaje?, ¿las 6 preguntas del cuestionario cumplen sus 3 roles o son 6
preguntas genéricas intercambiables?, ¿los distractores del quiz son plausibles (ver la tabla de
anti-patrones de `seminary-enrichment`) o descartables a simple vista?, ¿la `conclusion` termina
invitando a una acción concreta o se queda en una reflexión abstracta?

Esto **no se automatiza** — hace falta leer. Método:

1. Corré primero el Nivel 1 para saber qué lecciones tienen forma correcta (no tiene sentido
   evaluar la calidad de un `contexto` de 73 palabras: ya se sabe que está incompleto).
2. Elegí una **muestra**, no las 700+ lecciones del proyecto: 3–5 lecciones por curso, priorizando
   las que el Nivel 1 ya marcó en rango (para juzgar calidad, no completitud) más 1–2 de las que
   marcó fuera de rango (para confirmar que el número bajo/alto viene acompañado de un problema
   real de contenido, no es solo un conteo raro).
3. Para cada una, contrastá contra el checklist de `seminary-enrichment` línea por línea: los
   anti-patrones de preguntas (§"Anti-patrones a evitar" y el checklist de 8 puntos antes de
   entregar un set), el test de "¿lo entendería un alumno de primer año...?" para el `contexto`,
   si la `conclusion` termina en invitación a la acción.
4. Registrá los hallazgos por muestra, no lección por lección — a diferencia de las citas, acá no
   hay una "fuente externa" única para verificar cada lección contra ella; el criterio es el de
   la propia skill de enriquecimiento.

---

## 2. Qué hacer con lo que encuentra el Nivel 1

- **Secciones faltantes o fuera de spec → tarea de `seminary-enrichment`, no de esta auditoría.**
  Esta guía (y `seminary-audit`) **detectan y documentan**; la corrección de contenido (escribir
  un `contexto` que falta, ampliar un `cuestionario` de 3 a 6 preguntas) la hace la skill de
  enriquecimiento, en otra sesión o a pedido explícito del usuario. No generes contenido nuevo
  como parte de una auditoría sin que el usuario lo pida — mezclar "detectar" con "escribir
  contenido pedagógico nuevo" sin avisar es fácil de hacer mal (la generación de `contexto`,
  preguntas y `conclusion` tiene sus propias reglas de tono y estructura que hay que seguir con
  cuidado, no producir apurado dentro de un chequeo).
- **Diferencias de convención entre cursos (ej. `libro-de-mormon-2` usa cuestionario de 3 en vez
  de 6) pueden ser una decisión de diseño, no un error** — sobre todo si el curso tiene lecciones
  de menor alcance (`libro-de-mormon-2` cubre medios capítulos o incluso un solo bloque de
  versículos por lección, contra capítulos enteros en `libro-de-mormon-1`). **Preguntale al
  usuario** antes de asumir que hay que igualar todo a la convención mayoritaria — puede que el
  curso más corto sea intencional y lo que falte sea solo la sección `conclusion` (ausente al
  100%, eso sí parece un gap real y no una decisión de diseño) y no el resto.

---

## 3. Primer hallazgo real (agosto de 2026): AT-1 vs LdM-1 vs LdM-2

| | `antiguo-testamento-1` | `libro-de-mormon-1` | `libro-de-mormon-2` |
|---|---:|---:|---:|
| Lecciones con material | 88 | 78 | 107 |
| `contexto` — palabras promedio (rango) | 237 (131–324) | 165 (83–291) | **73 (51–89)** |
| `enseñanza` — lecciones sin ninguna (excluyendo Dominio de la Doctrina) | 3 | 1 | **57** |
| `conclusion` — presente | 87/88 | 78/78 | **0/107** |
| `cuestionario` — preguntas (todas las lecciones) | 6 (100%) | mezcla: 3, 5, 6 | 3 (100%) |
| `questions` (quiz) — con preguntas / con 7 exactas | 82/88, 15 sin 7 | 77/78, todas con 7 | **62/107**, 41 sin 7 |
| `questions` con `reference`/`explanation` | 0 | 262 / 315 (de ~539) | 0 |

**`libro-de-mormon-2` es sistemáticamente más liviano que los otros dos cursos**, no en un par de
lecciones sueltas sino en el 100% de ellas: sin excepción, ninguna lección tiene `conclusion`, y
todas las que sí tienen `cuestionario` traen exactamente 3 preguntas en vez de 6. Esto **no es
ruido aleatorio de generación** — es una convención distinta de origen (probablemente una sesión
o proceso de generación anterior a las reglas actuales de `seminary-enrichment`, o un curso
generado con menos presupuesto de tiempo por lección). Además, 57 lecciones no "Dominio de la
Doctrina" no tienen ninguna cita de líder — la propia skill de enriquecimiento pide al menos una
siempre.

`libro-de-mormon-1` está más cerca de la spec. `libro-de-mormon-1` es además el único de los tres
cursos que usa los campos opcionales `reference`/`explanation` del quiz — una riqueza adicional
que ni `antiguo-testamento-1` ni `libro-de-mormon-2` aprovechan, útil para dar contexto a la
respuesta correcta.

**Corrección (29-ago-2026, `--detalle`): la inconsistencia de `libro-de-mormon-1` NO es "casos
sueltos"** como se pensaba al escribir el párrafo de arriba — es un **bloque contiguo de 30
lecciones** (semanas 10 a 15 del `_manifest.json`, de `mosiah-5-1-5` a `alma-7-14-27`) generado
bajo una convención más liviana que el resto del curso:

| Semana | Lecciones | `cuestionario` | `contexto` |
|---|---|---:|---|
| 10 | `mosiah-5-1-5`, `mosiah-5-6-15`, `mosiah-7-8`, `mosiah-9-10`, `repaso-dd-2` | 3 preguntas | 91–130 palabras |
| 11 | `mosiah-11-17-intro`, `mosiah-12-13`, `mosiah-14-16`, `evalua-4-repaso-dd3`, `repaso-dd-4` | 5 preguntas | 125–145 palabras |
| 12 | `mosiah-19-20`, `mosiah-21-24-p1`, `mosiah-21-24-p2`, `mosiah-18`, `dd-mosiah-18-8-10` | 5 preguntas | 88–117 palabras |
| 13 | `mosiah-26`, `mosiah-27-1-24`, `mosiah-27-24-37`, `mosiah-28`, `repaso-dd-5-6` | 5 preguntas | 96–122 palabras |
| 14 | `alma-1-1-18`, `alma-1-19-33`, `alma-2-3`, `alma-4`, `repaso-dd-7-8` | 3 preguntas | 90–108 palabras |
| 15 | `alma-5-1-32`, `alma-5-33-62`, `alma-7-1-13`, `dd-alma-7-11-13`, `alma-7-14-27` | 5 preguntas | 90–145 palabras |

**Resuelto (30-ago-2026, vía `seminary-enrichment`):** a pedido explícito del usuario, se amplió
`contexto` (a 200–320 palabras en las lecciones "Ven Sígueme", 150–260 en las "Dominio de la
Doctrina") y `cuestionario` (a exactamente 6 preguntas, con los roles 1–2 abridoras / 3–4
profundizadoras / 5–6 de compromiso) en las 30 lecciones de la tabla de arriba, más `conclusion`
en las 5 que también estaban cortas (`alma-1-1-18`, `alma-1-19-33`, `alma-2-3`,
`mosiah-27-24-37`, `repaso-dd-7-8`). No se tocó `escrituras`, `enseñanza` ni `questions`. Trabajo
hecho en 3 lotes paralelos de 10 lecciones. `audit-completitud.ts libro-de-mormon-1` post-cambio:
`cuestionario` 0/78 fuera de rango (antes 30), `contexto` 1/78 fuera de rango (antes 31 — el único
que queda es `dd-2-nefi-28-30`, semana 7, caso aislado no relacionado con este bloque, no tocado a
propósito). `validate-content.ts` corrió limpio (el único hallazgo, `_auditoria-snapshot-original.json`,
es un archivo de snapshot preexistente ajeno a las lecciones). Quedan sin tocar, por ser casos
aislados fuera del alcance de este pedido: `alma-10-11` sin `enseñanza` y `conocimiento-espiritual-1`
sin quiz.

Fuera de este bloque (semanas 1–9 y 16 en adelante, 48 lecciones) el curso cumple la spec actual
casi sin excepción — solo quedan 3 casos sueltos genuinos, sin relación con el bloque: `contexto`
de `dd-2-nefi-28-30` (semana 7) en 143 palabras (7 por debajo del rango, único caso aislado),
`alma-10-11` (semana 16) sin ninguna cita de líder, y `conocimiento-espiritual-1` (semana 1) sin
preguntas de quiz. `conclusion` fuera de rango (5 casos: `alma-1-1-18`, `alma-1-19-33`, `alma-2-3`,
`mosiah-27-24-37`, `repaso-dd-7-8`) también cae dentro del bloque de semanas 10–15, no fuera.

Esto encaja con el mismo patrón que `doctrina-y-convenios-1` y `religion-301` (cuestionario fijo
en una convención anterior a la spec de 6 preguntas) — la diferencia es que en `libro-de-mormon-1`
el bloque afectado es solo una porción del curso (30/78), no el 100%, y alterna entre 3 y 5 en vez
de quedar fijo en un solo número. Sigue siendo, como en esos otros cursos, una decisión de
producto pendiente (¿ampliar estas 30 a 6 preguntas y contexto en rango, o dejarlas como
convención de esa etapa de generación?), no algo que esta auditoría resuelva sola.

**No se llegó a auditar el Nivel 2 (calidad)** de ninguno de los tres cursos en esta pasada — el
hallazgo de arriba es enteramente de completitud/forma. Sería el siguiente paso lógico.

## 3.1 Primera muestra de Nivel 2 (29-ago-2026): LdM-1 y LdM-2

Primera vez que se lee contenido con criterio en vez de solo contar. Muestra de 6 lecciones: 3 de
`libro-de-mormon-1` (`mosiah-5-1-5`, dentro del bloque de convención liviana de §3; `jacob-1` y
`alma-9`, ambas fuera del bloque y en rango) y 3 de `libro-de-mormon-2` (`leccion-21-1`,
`leccion-22-1`, `leccion-25-4`).

**Lo que se sostiene bien:** en las 6 lecciones, el `contexto`, el `cuestionario` y el quiz que sí
existen son de buena calidad — no genéricos ni recortados a las apuradas. El `cuestionario`
respeta los tres roles (abridora / profundización / compromiso) incluso donde tiene solo 3
preguntas en vez de 6 (ej. `leccion-25-4`: "¿qué te enseña...?" → "¿cómo interpretás...?" → "¿en
qué situaciones de tu vida...?"). El quiz usa buenos escenarios de aplicación con nombres
(Thiago, Renata, Valentina, Sofía, Luca, Guadalupe, Tomás) y distractores plausibles, no
descartables a simple vista, en ambos cursos por igual — la calidad pareja contradice la
hipótesis de que el bloque liviano de `libro-de-mormon-1` o el `libro-de-mormon-2` completo sean
"peores", son más bien **incompletos, no de menor calidad** en lo que sí tienen.

**Hallazgo nuevo — zona ciega de la auditoría de citas de líder:** en `jacob-1`, la pregunta 2 del
quiz atribuye al presidente Eyring la frase "permitimos que el poder de Dios fluya a través de
nosotros", que **no aparece** en el `texto` guardado en la sección `enseñanza` de esa misma
lección (que es del mismo autor pero dice algo distinto: "Dependerá de nuestra diligencia...
esa magnificación llegará en pequeños pasos"). Puede ser una paráfrasis de otra parte real del
mismo discurso, o puede no serlo — no se verificó contra la fuente porque **las preguntas de
`questions` no llevan `link` ni se cubren en `COMO-AUDITAR-ESCRITURAS.md` ni en `../ESTADO.md` §2**
(ambas auditorías de citas solo miran las secciones `enseñanza`/`escrituras`, no las afirmaciones
atribuidas dentro de las preguntas de opción múltiple). El README ya advierte que las preguntas de
quiz "no guardan de dónde salieron" — este caso muestra que el problema no es solo de trazabilidad
sino potencialmente de exactitud: una pregunta puede citar a una autoridad real con una frase que
esa persona nunca dijo en esa fuente, y ninguna de las tres auditorías actuales lo detectaría. No
se investigó más a fondo si es correcto o no — queda como candidato a revisar si se decide ampliar
el alcance de la auditoría de citas de líder a las preguntas de quiz.

**Confirmado por lectura directa (no solo por conteo):** las 3 lecciones de `libro-de-mormon-2`
muestreadas no tienen `conclusion` (0/3, consistente con 0/107), y `leccion-25-4` tampoco tiene
`enseñanza` ni ninguna pregunta de quiz — combinación de gaps en una sola lección, no solo uno a la
vez. En `libro-de-mormon-1`, la lección del bloque liviano (`mosiah-5-1-5`) sí tiene `enseñanza`,
`conclusion` en rango y un quiz de 7 preguntas con `reference`/`explanation` igual de bueno que las
lecciones fuera del bloque — confirma que ahí el gap es puntual (cuestionario y contexto cortos),
no una degradación general de esa tanda de generación.

---

## 4. Comandos

```bash
npx tsx scripts/audit-completitud.ts <categoria> [...] [--detalle]
npx tsx scripts/audit-completitud.ts --todos [--detalle]
npx tsx scripts/validate-content.ts             # correr después de cualquier corrección
```
