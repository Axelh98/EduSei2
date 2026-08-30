# Auditoría de citas de Escritura — Libro de Mormón (1 y 2)

Auditoría del corpus de **referencias de Escritura** (secciones `tipo: "escrituras"`, campo
`citas` con `referencia`/`texto`/`link`) de `libro-de-mormon-1` y `libro-de-mormon-2`, con el
método de [`COMO-AUDITAR-ESCRITURAS.md`](COMO-AUDITAR-ESCRITURAS.md) (scripts
`audit-escrituras.ts` + `fix-escrituras.ts`).

**Fecha:** 29 de agosto de 2026.
**Alcance:** `libro-de-mormon-1` (91 lecciones, 230 citas de escritura) y `libro-de-mormon-2`
(111 lecciones, 237 citas de escritura). Total: **467 citas**.
**Estado:** 🟡 casi cerrado. `libro-de-mormon-1`: **230/230** (229 `OK` + 1 falso positivo del
script ya revisado a mano). `libro-de-mormon-2`: **219 de 237** `OK` o corregidas y verificadas,
quedan **18 pendientes** de investigación adicional (§3.1, §5).

---

## 0. Contexto: `libro-de-mormon-1` ya tenía una auditoría previa (2026-08-28)

Antes de arrancar esta sesión se encontraron dos archivos dentro de
`lib/content/libro-de-mormon-1/` (`_AUDITORIA-ESCRITURAS-README.md` y
`_auditoria-snapshot-original.json`) que documentan una auditoría manual completa hecha un día
antes, vía `seminary-enrichment`, cita por cita con WebFetch (no con los scripts de
`COMO-AUDITAR-ESCRITURAS.md`, que no existían todavía). Resultado de esa sesión: **230/230
citas confirmadas o corregidas**, con **16 anomalías de referencia/versículo** dejadas
explícitamente pendientes de decisión humana (el `texto` se ajustó para coincidir con la
`referencia`/`link` tal como estaban, pero no se cambió la referencia misma).

Esta auditoría:
1. **Corre igual el script sobre `libro-de-mormon-1`**, como verificación independiente de que
   el trabajo manual de esa sesión quedó consistente (texto ↔ ancla del link).
2. **Retoma las 16 anomalías pendientes** listadas en ese README, con el mismo criterio de
   "nunca restituir texto de memoria" (§4.3 de `COMO-AUDITAR-ESCRITURAS.md`).
3. Hace el trabajo nuevo completo en **`libro-de-mormon-2`**, que no tenía ninguna auditoría de
   escrituras previa.

No se borró ni modificó ninguno de los dos archivos previos — quedan como registro histórico.

---

## 1. Progreso

| Curso | Citas | Corregidas en esta sesión | Pendientes | Estado |
|---|---:|---:|---:|---|
| `libro-de-mormon-1` | 230 | 4 (2 nuevas + 2 de las 16 heredadas) | 0 | ✅ cerrado |
| `libro-de-mormon-2` | 237 | ~65 | 18 | 🟡 casi cerrado |

Ver §5 para el detalle completo y la metodología de cada tanda de correcciones.

## 2. Historial de avance

- **29-ago-2026, arranque** — Se detecta la auditoría previa de `libro-de-mormon-1` (28-ago).
  Se corre `audit-escrituras.ts` sobre ambos cursos.
- **`libro-de-mormon-1`**: el script confirma 228/230 `OK` (la auditoría manual previa quedó
  bien). Los 2 restantes se resolvieron a mano, verificados contra el HTML real descargado:
  - `plan-de-salvacion.json` (Alma 12:25, 30) — el texto guardado en realidad combina
    versículos 25, **29** y 30 (verbatim los tres), pero la referencia/link omitían el 29.
    Corregido a **"Alma 12:25, 29–30"**, link `id=p25,p29-p30#p25`.
  - `portada-libro-mormon.json` — el script proponía reemplazar la cita completa por casi toda
    la portada (falso positivo: no hay ancla de versículo, así que cualquier ventana grande
    "empata"). Se rechazó esa propuesta. Verificado a mano contra el HTML real: el texto tenía
    un error genuino ("planchas **tomadas** de las planchas de Nefi" → el original dice
    "planchas, **tomado** de las planchas de Nefi", el subtítulo real) y una oración cortada a
    mitad de camino (le faltaba "...que se manifiesta a sí mismo a todas las naciones"). Ambas
    corregidas.
- **`libro-de-mormon-2`** (sin auditoría previa): primera pasada del script sobre sus 237 citas
  dio 100 `OK`, 23 `AUTO_CORREGIBLE` (aplicados sin cambios, todos recall ≥ 0.85) y **114
  `REVISAR_MANUAL`** — un patrón muy distinto a Doctrina y Convenios 1 y a la propia
  `libro-de-mormon-1`: cerca de la mitad de las citas no coincidían con su ancla.
  - De esas 114, se identificaron **47 con alta confianza** (mejor candidato dentro del mismo
    capítulo, en el mismo rango de versículos ya citado o a ≤2 de distancia, con recall ≥ 0.6)
    y se aplicaron en bloque tras revisar la simulación completa a mano.
  - **Se descartó un umbral más bajo** (0.45) tras encontrar un falso positivo real: la cita de
    "3 Nefi 12:19-20" tenía un candidato con recall 0.25 que, verificado contra el capítulo
    descargado, no correspondía en absoluto (el contenido guardado — "Cualquiera que quebrante
    uno de estos mandamientos será tenido por el menor..." — no existe en 3 Nefi 12 en absoluto;
    se parece a Mateo 5:19, que 3 Nefi 12:18-19 reemplaza por un texto distinto). Con el umbral
    en 0.6 no volvió a aparecer un caso así en la muestra revisada.
  - Quedan **67 `REVISAR_MANUAL`** en `libro-de-mormon-2`. Un subconjunto ya identificado
    (ver hallazgo debajo) corresponde a citas cuyo **`link` apunta al capítulo equivocado por
    completo** — no un versículo cercano, sino otro capítulo o incluso otro libro — por lo que
    la búsqueda del script (que solo mira dentro del mismo capítulo) no encuentra nada bueno.
    Ejemplo verificado: `leccion-21-10`, referencia "3 Nefi 15:9", texto guardado "Yo soy la luz
    y la vida del mundo; y he bebido de aquella copa amarga que el Padre me ha dado" — ese texto
    es en realidad **3 Nefi 11:11**, no existe nada parecido en 3 Nefi 15.

---

- **Hallazgo clave de esta tanda:** una parte de los `REVISAR_MANUAL` de `libro-de-mormon-2` no
  eran versículos "casi correctos" sino citas que **apuntaban al capítulo equivocado por
  completo** — el texto guardado era real y literal, pero pertenecía a otro libro/capítulo, a
  veces reutilizado (con distinta paráfrasis) en dos lecciones distintas bajo dos referencias
  distintas, ambas erróneas. Ejemplos verificados y corregidos:
  - `leccion-21-10` "3 Nefi 15:9" → en realidad **3 Nefi 11:11** ("Yo soy la luz y la vida del
    mundo; y he bebido de la amarga copa...").
  - `leccion-21-5` y `leccion-21-7`, ambas citaban "Alma 34:9-10"/"Alma 34:10" con el mismo texto
    → en realidad **2 Nefi 9:6–7** ("es preciso que sea una expiación infinita...").
  - `leccion-22-7` y `leccion-22-9`, ambas "Alma 39:9" con el mismo texto → en realidad
    **Alma 42:30** ("No trates de excusarte en lo más mínimo a causa de tus pecados...").
  - `leccion-26-1` "Helamán 3:35" y `leccion-26-3` "Helamán 3:33-34" (textos distintos) → ambas
    en realidad **Alma 13:12** ("santificados por el Espíritu Santo... entraron en el reposo del
    Señor su Dios").
  - `leccion-21-4` "3 Nefi 12:19-20" ("cualquiera que quebrante uno de estos mandamientos...") →
    ese pasaje no existe en 3 Nefi (que reemplaza esa parte del Sermón del Monte por texto
    distinto); es en realidad **Mateo 5:19**.
  - `leccion-22-5` "Alma 37:33" → en realidad **Alma 38:10-11** (consejo de Alma a Shiblón, no a
    Helamán).
  - `leccion-23-5` "3 Nefi 24:16-17" — la referencia ya era correcta, solo hacía falta
    literalizar el texto (paráfrasis de Malaquías 3:16-17 citado en 3 Nefi).
- Cada corrección de este tipo se verificó descargando el capítulo hipotetizado y comparando
  palabra por palabra antes de escribir — nunca se restituyó texto de memoria sin confirmar.
- Quedan **~18 casos** de este tipo todavía sin resolver en `libro-de-mormon-2` — ver sección
  "Pendientes" más abajo, se sigue trabajando en ellos.

## 3. Estado de `libro-de-mormon-2` al cierre de esta sesión

| Estado | Citas |
|---|---:|
| `OK` (coincide con el ancla) | 188 |
| Corregidas — versículo/capítulo puntual mal citado, ahora literal | ~34 |
| Corregidas — referencia ampliada a todo el pasaje resumido (texto sin tocar, decisión del usuario) | 31 |
| **Pendientes de revisión humana** (no se encontró una fuente convincente) | **18** |
| **Total** | **237** |

### 3.1 Pendientes reales (no es un versículo cercano — puede ser otro capítulo, otro libro, o una síntesis sin fuente única)

Cada una se buscó en su propio capítulo (ventanas de hasta 12 párrafos) y, cuando hubo una
hipótesis razonable, en capítulos relacionados — pero ninguna se escribió sin verificar contra
el texto real descargado. Quedan así porque no se encontró nada que calzara con confianza:

| Lección | Referencia actual | Texto guardado |
|---|---|---|
| `leccion-21-3` | Alma 33:11 | "Si te vuelves al Hijo con todo tu corazón, y ejercitas tu fe en mí, entonces se te concederá misericordia." (no está en Alma 33 ni 34 — se buscó en todo el capítulo, sin éxito) |
| `leccion-24-2` | 3 Nefi 27:21 | "Edificados sobre mi evangelio, las puertas del infierno no prevalecerán contra vosotros." — parece una **mezcla** de dos versículos reales distintos: "edificados sobre mi evangelio" es 3 Nefi 27:9 literal; "las puertas del infierno no prevalecerán" es de 3 Nefi 11:39 (con "mi roca", no "mi evangelio"). Ningún versículo único contiene ambas frases. |
| `leccion-24-3` | Alma 46:20-21 | "Quienquiera que guardase esta causa verdadera, el Señor no permitiría que cayeran." |
| `leccion-24-5` | Alma 48:23 | "Dios preparó a este pueblo para su destrucción, a menos que se arrepintieran." |
| `leccion-25-4` | Alma 57:27 | "Ahora bien, nunca se había visto tan gran milagro entre todos los nefitas." |
| `leccion-25-7` | Mormón 3:11 | "Vi que se acercaba el día de la gracia para ellos..." |
| `leccion-25-7` | Mormón 3:12-14 | "Es por la maldad por la que los destruyen. Fueron reprendidos una y otra vez..." |
| `leccion-25-9` | Mormón 6:20 | "Mi alma se aflige con tristeza sempiterna por su caída, porque eran una vez un pueblo delectable." (Mormón 6:17-19 real dice "bello pueblo", tema parecido, palabras distintas) |
| `leccion-26-4` | Mormón 8:14 | "Escribo unas pocas palabras más, contrarias a lo que había supuesto..." |
| `leccion-26-6` | Mormón 8:35-36 | "¿Por qué os habéis adornado con lo que no tiene vida...?" (Mormón 8:37-39 real es muy parecido temáticamente pero con otras palabras — recall 0.55, quedó justo debajo del umbral de esta pasada) |
| `leccion-27-1` | Helamán 7:6-7 | "Lamento la dureza de vuestros corazones..." |
| `leccion-28-1` | Helamán 16:2 | "Creyeron todos aquellos que fueron al encuentro de Nefi..." |
| `leccion-28-2` | Helamán 13:17 | "Pero he aquí, si os arrepentís, todo esto os será devuelto." (Helamán 13:11 real — "yo desviaré mi ira" — es tema afín pero no calza literal) |
| `leccion-28-4` | Helamán 14:5 | "Vendrá a redimir a los que crean en su nombre..." |
| `leccion-29-2` | 3 Nefi 5:3 | "Se arrepintieron de todos sus pecados, y obraron justicia ante el Señor; y fueron prosperados." |
| `leccion-29-3` | 3 Nefi 6:14-15 | "Algunos de los de la iglesia se envanecieron con motivo de sus inmensas riquezas..." |
| `leccion-29-4` | DyC 84:85 | "Ni la mente ha concebido las grandes cosas que el Señor tiene reservadas para los que lo aman." — el candidato de ventana ancha (DyC 84:110-118) se verificó a mano y **no tiene relación real** (habla de obispos viajando); descartado explícitamente. |
| `leccion-30-1` | 3 Nefi 10:10 | "Ahora bien, todos los que no fueron muertos por las armas de guerra..." |

**Para retomar:** cada una necesita el método de `COMO-AUDITAR-ESCRITURAS.md` §4.2 — abrir el
`chapterUrl` de la lección (`_manifest.json`) y ver qué cita usa el manual oficial ahí, o hacer
una búsqueda de texto más amplia (capítulos vecinos, otros libros) que la que alcanza el script
(limitado al capítulo que señala el `link` actual).

## 4. Cierre de las 16 anomalías heredadas de `libro-de-mormon-1`

Se revisaron una por una contra el capítulo real descargado. Resultado: **14 de las 16 ya
estaban correctas** — el `texto` ya era literal y encajaba con el `referencia`/`link` actuales
(la corrección de la sesión del 28-ago ya las había resuelto bien; el README interno solo no
se había actualizado para reflejarlo). Verificadas exactas contra el HTML real: `alma-5-1-32`
(Alma 5:15), `testigos-libro-mormon` (2 Nefi 27:12–14, Éter 5:2–4, D. y C. 5:7), `testimonio-jose-smith`
(2 Nefi 27:12–13, Éter 5:2–4), `repaso-dd-4` (Jacob 4:6), `repaso-dd-5-6` (Jacob 2:18-19),
`jacob-5-54-77-6-1-13` (Jacob 6:12), `mosiah-12-13` (Mosíah 12:34, 13:12, 13:24 — de hecho forman
una secuencia correcta y coherente de los Diez Mandamientos), `mosiah-19-20` (Mosíah 19:20),
`alma-1-19-33` (Alma 1:27), `jacob-1` (Jacob 1:6–8), `2-nefi-2-26-30` (2 Nefi 2:30),
`adquirir-conocimiento-3` (Jacob 7:10–12), `repaso-dd-1` (2 Nefi 32:8–9), y las otras dos citas de
`portada-libro-mormon` (1 Nefi 13:40–41, 2 Nefi 29:8, Mormón 5:14).

Nota: donde la anomalía original mencionaba una pregunta de `questions`/`quiz` con una referencia
distinta a la de la cita (ej. `jacob-5-54-77-6-1-13`, `mosiah-19-20`, `2-nefi-2-26-30`), eso queda
**fuera de alcance** de esta auditoría (solo cubre `citas[].texto` en secciones `escrituras` — ver
§0 del README interno).

**2 de las 16 sí tenían un error real**, corregidos y verificados contra el capítulo real:

- `mosiah-11-17-intro.json` — "Mosíah 12:33" (Abinadí citando el inicio de los Diez
  Mandamientos) no encajaba con el contexto de la lección (idolatría, riquezas, fornicación del
  pueblo de Noé). El texto real de **Mosíah 12:29** sí encaja exactamente con ese tema. Corregido:
  referencia, link y texto (ahora literal de 12:29).
- `portada-libro-mormon.json` — la cita de la propia portada tenía "planchas **tomadas**" (error:
  el subtítulo real dice "planchas, **tomado** de las planchas de Nefi") y terminaba a mitad de
  una oración. Corregido (ver §2).

## 5. Estado final

Categorías **no se superponen** (suman el total de citas de cada curso):

| Curso | Citas | `OK` (coincide con el ancla) | Verificada y correcta, pero seguirá marcada `REVISAR_MANUAL` ¹ | Pendiente de revisión humana |
|---|---:|---:|---:|---:|
| `libro-de-mormon-1` | 230 | 229 ² | 0 | 0 |
| `libro-de-mormon-2` | 237 | 188 | 31 | 18 |
| **Total** | **467** | **417** | **31** | **18** |

De las 417 `OK`, **69 se corrigieron en esta sesión** (4 en `libro-de-mormon-1` + ~65 en
`libro-de-mormon-2`, entre correcciones puntuales de versículo/capítulo y las de alta confianza
aplicadas en bloque); el resto ya venían correctas de auditorías previas o eran citas sin
problema desde el origen.

¹ Son resúmenes cortos que condensan un pasaje largo (decisión del usuario en esta sesión:
ampliar `referencia`/`link` al rango real y no tocar el `texto`, ver §3). El comparador de
`audit-escrituras.ts` mide recall de palabras contra todo el rango citado, así que un resumen
de una frase sobre 10 versículos nunca va a alcanzar el umbral de 0.9 — quedan marcadas
`REVISAR_MANUAL` para siempre por diseño del script, no porque falte trabajo.
² El caso restante de `libro-de-mormon-1` es un falso positivo conocido del script (la cita de
la portada del Libro de Mormón, sin ancla de versículo — ver §2); se revisó a mano y no requiere
cambio.

**Ningún texto se restituyó de memoria** — cada corrección (las ~69 de esta sesión, más las de
la sesión previa de `libro-de-mormon-1`) se verificó descargando el capítulo real y comparando
antes de escribir, siguiendo el mismo criterio que costó caro saltarse en auditorías anteriores
(§6 de `AUDITORIA-citas-libro-de-mormon.md`).

**Quedan 18 pendientes** en `libro-de-mormon-2` (§3.1) para una sesión futura, con más tiempo
para consultar el `chapterUrl` de cada lección o ampliar la búsqueda a otros libros.
