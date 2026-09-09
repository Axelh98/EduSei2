# Bitácora — libro-de-mormon-2

Ver `BITACORA-generacion-doctrinal.md` para la línea de base del proyecto y las reglas del registro
(ese archivo es de solo lectura desde acá). El caso de referencia más completo es
`BITACORA-libro-de-mormon-1.md`.

## Punto de partida (7-sep-2026), medido en esta sesión

**80 lecciones, todas con material.** Este curso no tiene frente A: `secciones: []` en cero,
convención `resumen` en cero, 0 huérfanos (archivos == manifiesto == 80).

```
=== libro-de-mormon-2 (80 archivos) ===
Cristo en contexto:            51/80 (64 %)
Cristo en conclusion:          43/80 (54 %)
Cristo en alguna de las dos:   54/80 (68 %)
  ...y además dice algo de Él: 29/80 (36 %)
Pregunta que invita a orar/meditar/anotar: 33/80 (41 %)
Pregunta que devuelve al pasaje:          0/80 (0 %)
```

> ⚠️ La cifra de **sustancia** aparece dos veces con dos valores distintos y las dos son correctas:
> `audit-doctrinal.ts` reporta **29/80** porque mide **solo el `contexto`**; el inventario por lección
> (que cruza `contexto` + `conclusion`) da **45/80**. La cola de trabajo real es la del inventario:
> **35 pendientes**. Es la misma distinción que `BITACORA-generacion-doctrinal.md` anota al cerrar
> `antiguo-testamento-2`.

### Los frentes medibles, todos juntos

| Frente | Cómo se mide | Inicial | Pendientes |
|---|---|---|---:|
| Cristo en `contexto` o `conclusion` | `audit-doctrinal.ts` | 54/80 (68 %) | **26** |
| Sustancia (dice algo de Él), ctx+concl | inventario por lección | 45/80 (56 %) | **35** |
| Pregunta de orar/meditar/anotar | `audit-doctrinal.ts` | 33/80 (41 %) | **47** |
| Pregunta de escudriñar | `audit-doctrinal.ts` | 0/80 (0 %) | **80** |
| Al menos 3 escrituras | inventario | 39/80 (49 %) | **41** |
| Conclusión presente y ≥ 80 palabras | inventario | 78/80 | 2 |
| Conclusión en rango 60–140 | `audit-completitud.ts` | 67/80 | 13 |
| `contexto` en rango 150–340 | `audit-completitud.ts` | 73/80 | 7 |
| Líderes huérfanos | inventario | 80/80 | **0 — ya limpio** |
| Quiz en spec 7 × 4 | barrido propio | 80/80 | 0 |
| `questionCount` sincronizado | barrido propio | 80/80 | 0 |
| `correctAnswer` en rango | barrido propio | 560/560 | 0 |
| Opciones duplicadas en una pregunta | barrido propio | 0 | 0 |
| `chapterUrl` rotas | `audit-chapterurls.ts` | 0/80 | 0 |
| Sesgo de posición del quiz | `audit-distribucion-respuestas.ts` | `0:27 1:54 2:12 3:7` ⚠ | curso entero |
| La correcta es la más larga | barrido propio | 489/560 (**87 %**) | **489 preguntas** |
| DD que cita su propio pasaje de dominio | barrido propio | 13/16 | **3** |
| Espacio suelto antes de puntuación | barrido propio | 20 en 10 lecciones | **20** |

### Por qué no se confió en las auditorías previas

`CALIDAD-libro-de-mormon-2.md`, `CALIDAD-contexto-libro-de-mormon-2.md` y
`COMPLETITUD-libro-de-mormon-2.md` son de agosto/septiembre y parte del curso se reconstruyó
después. Se volvió a medir todo. Dos cifras suyas quedaron desactualizadas:

- La fila 18 del catálogo dice «47 de 78 lecciones con `contexto` enciclopédico, mediana de 82
  palabras». Hoy la mediana es **187** y solo **7** lecciones bajan de 150 palabras.
- `CALIDAD-contexto` §4 lista 6 lecciones sin `enseñanza`; hoy son **4** (más 5 de *Dominio de la
  Doctrina*, que no la llevan por diseño).

Lo que sí se confirmó vigente: el sesgo de posición (54 % en la posición 1) y el de longitud
(87 %), ambos medidos de nuevo hoy con el mismo resultado que el 4-sep.

### Verificación previa de `chapterUrl`

`npx tsx scripts/audit-chapterurls.ts libro-de-mormon-2` → **0 rotas sobre 80**. Ninguna URI
devuelve el índice del manual.

⚠️ El script reportó además **80 «desalineadas», y las 80 son falso positivo suyo** — exactamente
el mismo defecto que ya se documentó en `BITACORA-libro-de-mormon-1.md` (ahí fueron 83 de 91).
El script saca el número de lección del `id` (`leccion-21-1` → «21») y lo busca como «Lección 21»
en una página del manual que **no se numera así**: el propio mensaje de salida lo delata diciendo
«la página del manual dice "Lección ?"» en las 80. La columna que sí vale es **rotas**, y está en
cero. No hay nada que corregir en el contenido por ese aviso.

---

## Defectos estructurales encontrados al medir

Van primero: son bugs, no estilo. Medidos con un cruce, no estimados.

### 1. Lecciones de Dominio de la Doctrina que no citan su propio pasaje (fila 21 del catálogo)

| Lección | Título | Escrituras que tiene | Falta |
|---|---|---|---|
| `leccion-21-7` | Dominio de la doctrina: **Alma 34:9–10** | Alma 34:**10–11**, 2 Nefi 9:6–7 | el versículo 9, y sobra el 11 |
| `leccion-34-5` | Dominio de la doctrina: **Moroni 7:45–48** | Moroni 7:**45** | los versículos 46–48 |
| `leccion-35-3` | Dominio de la doctrina: **Moroni 10:4–5** | Moroni 10:**4** | el versículo 5 — que es la promesa |

El caso de `leccion-21-7` **arrastra a otras tres lecciones**: los repasos `leccion-25-1`,
`leccion-27-9` y `leccion-28-9` citan «Alma 34:10–11» y «Alma 34:10» como si ese fuera el pasaje
de dominio. El pasaje oficial es **Alma 34:9–10**. Son 4 archivos con la misma referencia mal
recortada, no un caso aislado.

### 2. Espacio suelto antes de la puntuación (fila 22 del catálogo)

**20 ocurrencias en 10 lecciones**, todas dentro de `escrituras[].citas[].texto`:
`21-1` (5), `21-7` (2), `27-1` (2), `23-1` (3), `34-2` (2), `35-5` (2), `22-1`, `22-3`, `23-4`,
`23-8` (1 cada una). Artefacto del HTML del manual. Arreglo mecánico: `/\s+([,;:.])/g → '$1'`.

### 3. Dos lecciones sin `conclusion` y sin `escrituras`

`leccion-36-4` («Repaso evaluación 2») y `leccion-36-5` («Evaluación 2») tienen `contexto`,
`cuestionario` y quiz, pero **0 citas de Escritura y ninguna sección `conclusion`**. Son las dos
únicas del curso en esa situación.

---

## Sesiones

| Fecha | Lecciones | Frente | Antes → después | Notas |
|---|---|---|---|---|
| 7-sep-2026 | curso entero (560 preguntas) | sesgo de posición | `0:27 1:54 2:12 3:7` ⚠ → **`0:25 1:25 2:25 3:25` ✓** | `audit-distribucion-respuestas.ts --write` con permiso del usuario. **411 preguntas rotadas**, ni un carácter de texto tocado. Se corrió **antes** de los lotes de contenido a propósito: el frente de «la correcta es la más larga» reescribe el texto de las opciones, no su orden, así que no reintroduce sesgo de posición. |
| 7-sep-2026 | 10 lecciones | espacios antes de puntuación (fila 22) | 20 → **0** | Mecánico (`/([letra])\s+([,;:.])/ → '$1$2'`), solo dentro de `escrituras[].citas[].texto`. Verificado con el mismo detector que los midió. |
| 7-sep-2026 | 21-1, 21-9, 22-5, 22-9, 23-2 | B (lote 1) | Cristo 54/80 → **59/80** | Las 5 primeras de la cola `SIN CRISTO`. **+5 exacto.** Vías: **la semilla es el testimonio de Jesucristo** (21-1 — el manual lo dice literal, «lo que él esperaba que esos zoramitas plantaran en su corazón era un testimonio de Jesucristo», y la lección lo había borrado; se reemplazó la cita duplicada de Alma 32:27 por Alma 33:22–23), **la urgencia de Amulek descansa en el sacrificio infinito** (21-9, Alma 34:15–16), **«en proporción a tu confianza en Dios serás librado» y Su poder para librar** (22-5, Alma 38:5 — el manual dice que padre e hijo «habían experimentado el poder del Salvador para librar»), **resistir la tentación confiando en Jesucristo** (22-9 — frase del propio manual), **«Jesucristo restaura todas las cosas»** (23-2 — es el título literal de la lección en el manual). 3 escrituras nuevas, todas bajadas con `ver-versiculo.ts`. ⚠️ **Regresión propia detectada por el chequeo:** al reemplazar la pregunta 3 de `21-1` le saqué el único «orar» que tenía (estaba en esa misma pregunta). Corregido en la pregunta 6. Es exactamente el error nº 1 de LdM-1. |
| 7-sep-2026 | 23-4, 23-6, 24-1, 24-3 | B (lote 2a) | Cristo 59/80 → **63/80** | Vías: **la maldad nunca fue felicidad, y la salida es Su expiación** (23-4), **«habiendo satisfecho las demandas de la justicia, Cristo se adentra en el lugar de la justicia»** (23-6 — texto del manual; la lección cerraba en «hacía falta Alguien» sin nombrarlo), **«las características de Moroni que les recuerden al Salvador»** (24-1 — el manual lo pide como actividad), **«en memoria de nuestro Dios» es lo primero del estandarte** (24-3, + 2 Nefi 25:26). ⚠️ Segunda regresión: al reescribir la conclusión de `24-3` se cayó la *sustancia* (venía de la palabra «gracias»), aunque el nombre quedaba. Corregido anclándola en Su expiación. |
| 7-sep-2026 | 24-5, 24-7, 24-9, 25-1 | B (lote 2b) | Cristo 63/80 → **67/80** | Vías: **Moroni fortalece lo débil como Cristo lo hace (Éter 12:27)** (24-5 — actividad textual del manual), **«pensá con espíritu de oración en lo que sabés acerca de Jesucristo»** (24-7, + Alma 26:12), **el propósito del Dominio de la Doctrina es conocer la doctrina del Salvador** (24-9, + Alma 39:15), **los tres escenarios del manual se resuelven en el mismo lugar** (25-1). **Acá se corrigió el defecto estructural nº 1**: `leccion-25-1` citaba «Alma 34:10–11» como si fuera el pasaje de dominio; se reemplazó por **Alma 34:9–10**, bajado del capítulo. |
| 7-sep-2026 | 25-10, 25-3, 25-5, 25-7 | B (lote 3) | Cristo 67/80 → **71/80** | Vías: **el convenio de sus padres fue con Jesucristo** (25-10, + Alma 24:18), **«ejercé fe en Jesucristo y el Señor te bendecirá con Su poder»** (25-3, objetivo textual del manual, + Alma 56:46), **el que obedeció con exactitud fue Él** (25-5, + Juan 14:15, con la cita de Hales que trae el manual), **«¿qué atributos ves en Pahorán que te recuerden a Jesucristo?»** (25-7, + 3 Nefi 11:29–30). |
| 7-sep-2026 | 26-7, 27-1, 27-5, 27-7 | B (lote 4) | Cristo 71/80 → **75/80** | Vías: **«más y más firmes en la fe de Cristo»** (26-7, Helamán 3:35 — el versículo que explica por qué los lamanitas se enderezaron, y la lección no lo citaba), **los profetas testifican de Jesucristo** (27-1, Helamán 8:22–23 — el manual lo señala y el `contexto` solo contaba el juicio), **«¿de qué maneras sirvió Jesucristo al Padre infatigablemente?»** (27-5, la palabra exacta que el Señor le dice a Nefi), **«gracia por gracia» rompe el ciclo del orgullo** (27-7, Helamán 12:23–24). ⚠️ `27-7` es la única del lote cuyo **manual no nombra a Cristo ni una vez**: la vía salió del propio texto de Escritura. |
| 7-sep-2026 | 28-5, 29-2, 29-3, 32-7, 32-9 | B (lote 5) | Cristo 75/80 → **80/80 (100 %)** | **Cola `SIN CRISTO` cerrada.** Vías: **«nada puede salvar a este pueblo sino el arrepentimiento y la fe en el Señor Jesucristo»** (28-5, Helamán 13:6 — el versículo que explica para qué Samuel arriesgó la vida), **los desafíos previos a Su venida, y el ejemplo de preparación del Salvador** (29-2), **los que siguieron al Salvador en 3 Nefi 7 son los que están en el templo en 3 Nefi 11** (29-3), **la fe de la que habla Moroni es fe en Jesucristo** (32-7 y 32-9, frase textual del manual). |
| 7-sep-2026 | 21-3, 21-5, 21-7, 22-1, 22-3 (lote 6) | bloque 2 — cierre completo por lección | 9/9 frentes en las 5 | Arranca el bloque 2: ya no hay cola `SIN CRISTO`, así que se trabaja lección por lección cerrando **todos** los frentes pendientes de cada una. **Se corrigió acá el defecto estructural nº 1 en su origen**: `leccion-21-7` se titula «Dominio de la doctrina: Alma 34:9–10» y citaba **Alma 34:10–11**; se reemplazó por el pasaje real, bajado del capítulo, y se le agregó Mosíah 3:17 como tercera escritura. |
| 7-sep-2026 | 22-7, 23-1, 23-8, 26-1, 26-3 (lote 7) | ídem | 9/9 en las 5 | Escrituras nuevas: Alma 11:42–43 (la muerte de Cristo desata las ligaduras — sostiene lo que el `contexto` de `23-1` ya afirmaba sin citarlo), Helamán 3:29–30 y **Helamán 5:9**, que es el versículo donde Helamán dice *por qué* esa roca y no otra: «no hay otra manera ni medio… sino por la sangre expiatoria de Jesucristo». |
| 7-sep-2026 | 26-5, 26-9, 27-3, 27-9, 28-1 (lote 8) | ídem | 9/9 en las 5 | **Segundo arrastre del pasaje mal recortado corregido** (`27-9` citaba «Alma 34:10»). Escrituras nuevas: 3 Nefi 14:24–25 (la casa sobre la roca, que es el paralelo del pasaje de dominio de `26-5`), Helamán 8:14–15 (la serpiente de bronce como figura de Cristo — `27-3` lo explicaba en prosa sin citarlo) y Helamán 5:41 (la instrucción exacta de Amínadab: clamar «hasta que tengáis fe en Cristo»). |
| 7-sep-2026 | 28-3, 28-7, 28-9, 29-1, 29-4, 29-5 (lote 9) | ídem | 9/9 en las 6 | **Tercer y último arrastre corregido** (`28-9`). A `28-9` y `29-5` les faltaba además un pasaje de los cuatro que dicen repasar: se completaron. |
| 7-sep-2026 | 30-1 … 30-5, 31-1 (lote 10) | ídem | 9/9 en las 6 | `leccion-30-3` (Dominio de la doctrina: 3 Nefi 11:10–11) tenía **una sola escritura**: se le agregaron Juan 5:30 y Lucas 22:42, que son los dos lugares donde el propio Salvador dice lo que el pasaje de dominio afirma de Él («no busco mi voluntad, sino la del Padre»). A `30-4` se le agregó Alma 7:11–12, que es la razón doctrinal de por qué Cristo invitó a tocar las marcas **de a uno**. |
| 7-sep-2026 | 31-3 … 32-3 (lote 11) | ídem | 9/9 en las 6 | Se agregó Moroni 4:3 (la oración sacramental) a `32-3`: la lección explicaba el convenio de la Santa Cena sin citar el texto donde ese convenio está escrito. |
| 7-sep-2026 | 32-5 … 33-5 (lote 12) | ídem | 9/9 en las 6 | Escrituras nuevas: 3 Nefi 23:5, 3 Nefi 24:17, Éter 12:23–24 y Moroni 10:32. |
| 7-sep-2026 | 34-1 … 34-5 (lote 13) | ídem | 9/9 en las 5 | **Cuarto defecto estructural corregido**: `leccion-34-5` se titula «Dominio de la doctrina: Moroni 7:45–48» y citaba **solo Moroni 7:45**; ahora cita el pasaje completo, más Juan 13:34–35 y 1 Corintios 13:4–5. `leccion-34-3` tenía **una sola escritura**: se le sumaron 2 Nefi 31:17 y Moroni 10:33. |
| 7-sep-2026 | 35-1 … 35-5 (lote 14) | ídem | 9/9 en las 5 | **Quinto defecto estructural corregido**: `leccion-35-3` se titula «Dominio de la doctrina: Moroni 10:4–5» y citaba **solo Moroni 10:4** —le faltaba justamente el versículo de la promesa—; ahora cita el pasaje completo, más D. y C. 8:2–3 y Moroni 10:6. En `35-4` había además **dos citas superpuestas** (Mormón 3:9 dentro de Mormón 3:9–11): la duplicada se reemplazó por Mormón 3:20–21. |
| 7-sep-2026 | 36-1 … 36-5 (lote 15) | ídem | 9/9 en las 5 | **`leccion-36-4` y `leccion-36-5` no tenían bloque `escrituras` ni sección `conclusion`**: se les creó el bloque y se les escribió la conclusión. Los pasajes elegidos son de los doce de Dominio de la Doctrina que esas dos lecciones repasan, así que el alumno los tiene a mano en la lección que los evalúa. |
| 7-sep-2026 | 13 preguntas de 12 lecciones | cruce de muletillas (final) | q3: 7 pares → **0**; q6: 7 → **1 incidental** | Segundo cruce, al cerrar los frentes. **Los 7 pares de la pregunta 3 los había escrito yo, todos en lotes distintos**: el molde «Volvé a leer X. Fijate en el orden…» y el molde «…contá cuántas cosas…». Se reescribieron rotando los cinco verbos que el detector acepta (`releé`, `buscá en`, `leé`, `mirá el versículo`, `volvé a leer`). En la pregunta 6, 6 de los 7 pares eran **preexistentes** (el molde «¿A quién le podrías explicar esta semana…?», tres lecciones). El par que queda (`31-7` ↔ `33-5`, exactamente 0.60) es incidental: comparten vocabulario común (`elegí`, `semana`, `orar`) y no la forma, y el índice usa `min(a,b)`, que infla el valor cuando una de las dos preguntas es muy corta. **Tercera vez en el proyecto que el molde se repite entre lotes y no dentro de uno.** |
| 7-sep-2026 | 5 preguntas (24-1, 25-10, 23-6, 27-5, 29-2) | cruce de muletillas | q3: 3 pares → **1**; q6: 15 → **10** | Cruce de solapamiento de vocabulario (≥0.60) sobre las 80 preguntas de cada rol, corrido **al terminar el frente y no por lote**. Encontró 5 pares que había escrito yo en lotes distintos: el molde «Volvé a leer X. Mormón hace una lista… fijate cuántas» (0.89 entre `24-1` y `25-10`) y el molde «Antes de…, preguntale al Padre Celestial… Anotá lo que te venga a la mente» (4 pares, entre `23-6`, `25-1`, `27-5` y `29-2`). Reescritos. **Los pares que quedan son todos preexistentes**, no escritos en esta sesión: se corrigen al pasar por los frentes de orar y escudriñar. Es la confirmación del error nº 2 de LdM-1: el molde se repite entre lotes, donde el control por lote no lo ve. |
---

## Estado final del curso (7-sep-2026)

Todos los frentes medidos al abrir la sesión están en **80/80**. Cada número de abajo se volvió
a medir después del último lote, con el mismo detector que dio la línea de base.

| Frente | Inicial | Final |
|---|---|---|
| Cristo en `contexto` o `conclusion` | 54/80 (68 %) | **80/80 (100 %)** |
| Sustancia (dice algo de Él), ctx+concl | 45/80 (56 %) | **80/80 (100 %)** |
| Pregunta de orar/meditar/anotar | 33/80 (41 %) | **80/80 (100 %)** |
| Pregunta de escudriñar | 0/80 (0 %) | **80/80 (100 %)** |
| Al menos 3 escrituras | 39/80 (49 %) | **80/80 (100 %)** |
| Conclusión presente y en rango 60–140 | 67/80 | **80/80 (100 %)** |
| `contexto` en rango 150–340 | 73/80 | **80/80 (100 %)** |
| Quiz con ≤ 2 de 7 «la correcta es la más larga» | 1/80 | **80/80 (100 %)** |
| Sesgo de posición del quiz | `0:27 1:54 2:12 3:7` ⚠ | **`0:25 1:25 2:25 3:25` ✓** |
| DD que cita textualmente su pasaje de dominio | 13/16 | **16/16 (100 %)** |
| Espacio suelto antes de puntuación | 20 | **0** |
| Líderes huérfanos | 0 | **0** |
| Quiz en spec 7 × 4 · `correctAnswer` en rango · `questionCount` | 80/80 | **80/80** |
| `chapterUrl` rotas | 0/80 | **0/80** |
| Huérfanos (archivo sin manifiesto) | 0 | **0** |
| Cruce de muletillas, pregunta 3 | — | **0 pares ≥ 0.60** |
| Cruce de muletillas, pregunta 6 | 15 pares | **1 par, incidental** |

**Sobre «la correcta es la más larga».** La vara que se aplicó es la de `seminary-enrichment`:
**no más de 2 de las 7 por lección**. Sobre el curso entero la cifra pasó de **489/560 (87 %)** a
**159/560 (28 %)**, contra el 25 % que daría el azar. No se bajó a cero a propósito: forzar que la
correcta nunca sea la más larga crea el sesgo inverso, igual de explotable.

**Escrituras.** El curso pasó de **191 a 250 citas**. Las 59 nuevas se bajaron una por una con
`ver-versiculo.ts` y se limpiaron con `.replace(/\s+([,;:.])/g,'$1')`. **Ninguna se escribió de
memoria.** No se agregó ni se modificó ninguna cita de líder: cuando hizo falta reforzar una
lección, se hizo con Escritura verificable, no inventando una cita.

**Lo que no está al 100 % y por qué.** `audit-completitud.ts` reporta **9 lecciones sin sección
`enseñanza`**: 5 son de *Dominio de la Doctrina* (la tabla de tipos de `seminary-enrichment` no
pide cita de líder para ese tipo) y 4 son repasos y evaluaciones (`24-7`, `29-4`, `36-4`, `36-5`),
donde tampoco corresponde — es el mismo criterio que ya había fijado
[`CALIDAD-contexto-libro-de-mormon-2.md`](CALIDAD-contexto-libro-de-mormon-2.md) §4. Agregar una
cita ahí exigiría encontrar, verificar y anclar un discurso real; **no se inventó ninguna**.

`audit-doctrinal.ts` sigue reportando **sustancia 57/80 (71 %)** porque esa métrica mide **solo el
`contexto`**. La lista que cruza `contexto` + `conclusion` —la que corresponde al ítem del
checklist doctrinal— está en 80/80, y la lista `SOLO NOMBRADO` quedó **vacía**.

`validate-content.ts` queda limpio para este curso. El único problema que reporta en todo el
proyecto es preexistente y ajeno: `libro-de-mormon-1/_auditoria-snapshot-original.json`.

---

## Defectos nuevos encontrados en esta sesión

Van también como filas al catálogo si se confirman en otros cursos.

| Defecto | Alcance medido | Nota |
|---|---|---|
| **Lección de Dominio de la Doctrina que cita mal o incompleto su propio pasaje**, y el error se arrastra a los repasos que lo citan | **5 lecciones**: `21-7` (citaba Alma 34:10–11 en vez de 34:9–10) más su arrastre a `25-1`, `27-9` y `28-9`; `34-5` (citaba solo Moroni 7:45 de un pasaje 45–48); `35-3` (citaba solo Moroni 10:4, sin el versículo de la promesa) | Es la fila 21 del catálogo, pero con una vuelta que ahí no está: **el error no se queda en la lección de dominio, se propaga a todas las lecciones de repaso que citan ese pasaje**. El chequeo barato es comparar `title` contra `escrituras[].referencia` en las lecciones DD **y después buscar esa misma referencia mal recortada en el resto del curso.** |
| **Lecciones de repaso/evaluación sin bloque `escrituras` ni `conclusion`** | 2 de 80 (`36-4`, `36-5`) | `audit-completitud.ts` las reporta como «sin la sección», pero no distingue entre «falta» y «no corresponde». Acá sí correspondía: son las dos lecciones que evalúan los doce pasajes de Dominio de la Doctrina y no tenían ninguno citado. |
| **Dos citas superpuestas dentro del mismo bloque `escrituras`** (una contenida en la otra) | 2 casos: `35-4` (Mormón 3:9 dentro de Mormón 3:9–11) y `21-1` (Alma 32:27 dentro de Alma 32:27–28) | Cuenta como 2 escrituras en cualquier chequeo mecánico pero le da al alumno una sola. Detectable con un cruce de rangos dentro de cada bloque. |
| **El molde de pregunta se repite entre lotes, tercera vez en el proyecto** | q3: 7 pares ≥0.60, **los 7 escritos por mí en lotes distintos**; q6: 6 de 7 pares preexistentes | Confirma el error nº 2 de `BITACORA-libro-de-mormon-1.md`. El control por lote no lo ve: **solo lo encuentra el cruce final sobre las 80.** |

---

# Remedición del 8-sep-2026 — el curso **no** estaba cerrado

Este curso no se trabajó en la sesión del 8-sep (se fue entera en `libro-de-mormon-1`), pero **se
midió de cero al empezar**, y la medición contradice el cierre del 7-sep en dos puntos. Las cifras de
abajo son el punto de partida para quien lo retome.

⚠️ **Nota de higiene:** esta bitácora tenía, entre la tabla de sesiones y el «Estado final», **cuatro
líneas de un fragmento de llamada a herramienta** (`</content>`, `</invoke>`, `<invoke
name="AskUserQuestion">` y un `<parameter>` con JSON) pegadas dentro del markdown. Basura de la sesión
que la escribió, no una instrucción. Se borraron el 8-sep-2026.

## 1. ⚠️ El quiz no está cerrado: está **sobrecorregido** (fila 30)

El «Estado final» de arriba dice: *«Sobre el curso entero la cifra pasó de 489/560 (87 %) a 159/560
(28 %), contra el 25 % que daría el azar. No se bajó a cero a propósito.»*

**Ese número es correcto y aun así el frente está abierto, porque midió una sola dirección.** El
ranking completo de las cuatro posiciones, medido el 8-sep sin tocar nada:

| Posición de la correcta por longitud | Preguntas | % | Azar |
|---|---:|---:|---:|
| 1ª (la más larga) | 159 | 28 % | 25 % |
| 2ª | 104 | 19 % | 25 % |
| 3ª | 88 | 16 % | 25 % |
| 4ª (la más corta) | **209** | **37 %** | 25 % |

**La correcta es la más corta en 209 preguntas, y 46 de las 80 lecciones pasan el tope de 2 en esa
dirección.** Un alumno que elija siempre la opción más corta acierta el 37 %. Es exactamente la fila
27 del catálogo —el defecto espejo— con el signo invertido, y es el mismo error de método que la
fila 30 documenta: *medir los dos extremos que motivaron la corrección no alcanza; hay que medir las
cuatro posiciones*.

Para contraste, `libro-de-mormon-1` terminó el 8-sep en `18 / 36 / 30 / 18` con la mejor heurística
en 36 %, y `antiguo-testamento-1` está en `26 / 34 / 27 / 13` con 34 %.

## 2. ⚠️ Ocho pares de citas de Escritura superpuestas, introducidas por el propio cierre

El detector de citas superpuestas de `inv.js` (una referencia contenida dentro de otra en el mismo
bloque `escrituras`) da **8 casos**, todos en lecciones que el cierre del 7-sep tocó al agregar
escrituras:

| Lección | Superposición |
|---|---|
| `leccion-21-9` | Alma 34:31–32 ⊂ Alma 34:28–39 |
| `leccion-21-9` | Alma 34:33 ⊂ Alma 34:28–39 |
| `leccion-22-7` | Alma 39:5 ⊂ Alma 39:3–13 |
| `leccion-23-6` | Alma 42:24–25 ⊂ Alma 42:15–25 |
| `leccion-26-9` | Helamán 5:28–29 ⊂ Helamán 5:24–33 |
| `leccion-27-3` | Helamán 8:14–15 ⊂ Helamán 8:13–15 |
| `leccion-32-1` | 3 Nefi 17:17 ⊂ 3 Nefi 17:7–17 |
| `leccion-33-2` | 3 Nefi 24:17 ⊂ 3 Nefi 24:16-17 |

La bitácora del 7-sep registra este defecto («cuenta como 2 escrituras en cualquier chequeo mecánico
pero le da al alumno una sola») y corrigió 2 casos. **El propio cierre introdujo 8 nuevos**, porque
las escrituras que se agregaron para llegar a «≥ 3» solapan con las que ya estaban. Es la fila 31
en su forma más general: *toda edición masiva necesita un chequeo de salida distinto del que la
motivó* — acá el chequeo era «≥ 3 escrituras» y no podía ver la superposición.

## 3. Lo que sí sigue en pie del cierre del 7-sep

Confirmado midiendo el 8-sep:

```
Cristo (ctx o concl):        80/80      >= 3 escrituras:             80/80
Sustancia (ctx+concl):       80/80      Conclusión en rango 80-140:  80/80
Pregunta de orar:            80/80      Pregunta de escudriñar:      80/80
Sin líderes huérfanos:       80/80      Quiz con <=2 correcta+larga: 80/80
```

Barrido estructural limpio salvo las 8 superposiciones. Barrido de artefactos (14 patrones): **0**.

## 4. Los cuatro frentes abiertos, medidos

| Frente | Alcance | Método |
|---|---:|---|
| **Defecto espejo del quiz** | 209 preguntas · **46 de 80 lecciones** sobre el tope | Igual que LdM-1: `rebalance.js` con el diccionario podado + micro-ajustes a mano, **solo sobre distractores** |
| **Fidelidad de Escrituras** | **30 `REVISAR_MANUAL` + 4 `AUTO_CORREGIBLE`** (216 OK de 250) | `COMO-AUDITAR-ESCRITURAS.md` §4.1 y §4.2. El triaje de `rescan-ventana-ancha.ts` ya está corrido (ver abajo) |
| **Citas de líder** | **35 sin ancla `#pN` y sin verificar** de 71 | Son exactamente las mismas 35: `leccion-25-1` a `leccion-36-3`, la segunda mitad del curso en bloque. `fix-anclas-citas.ts` + verificación por n-grama |
| **Citas superpuestas** | 8 pares | Reemplazar la contenida por otro pasaje, o ampliar la que contiene |

### Triaje de ventana ancha ya corrido (8-sep, en seco)

`npx tsx scripts/rescan-ventana-ancha.ts libro-de-mormon-2` separa las 30 así:

- **17 `RESUMEN`** (ventana de 4+ párrafos): el `texto` es síntesis de un pasaje largo. La convención
  del proyecto es **ampliar `referencia`/`link` y dejar el texto intacto**. En la mayoría la ventana
  ganadora coincide con la referencia que ya está (`Alma 33:2–6 -> Alma 33:2–6`), así que no hay nada
  que cambiar: **van a seguir apareciendo como `REVISAR_MANUAL` para siempre**, es una limitación
  conocida del comparador por recall. Los que sí amplían: `28-5` (Helamán 13:30 → 13:30–38, 13:31 →
  13:31–38, 13:33 → 13:33–38), `27-3` (Helamán 8:24 → 8:21–27), `28-7` (14:20–21 → 14:11–21), `29-2`
  (3 Nefi 3:12–13 → 3:11–22), `29-4` (Helamán 5:6–7 → 5:6–13).
- **1 `PUNTUAL`**: `leccion-33-3`, Éter 12:26, recall 0.81 **con aviso de capítulo largo (41
  párrafos)**. ⚠️ El texto guardado dice «de manera que ellos no sacarán ventaja de vuestras
  debilidades» y el versículo real dice «para que no saquen provecho de vuestra debilidad»: es una
  paráfrasis, hay que literalizar. **Pero la ventana que propone el script son 3 párrafos
  (12:25–27)**, así que aplicar `--write` a ciegas metería los versículos 25 y 27 dentro de una cita
  etiquetada 12:26. Hay que escribirla a mano con `ver-versiculo.ts`.
- **12 sin candidato** ni con ventana ancha: son las de §4.2 —el texto puede estar en otro capítulo o
  en otro libro— y hay que mirarlas una por una.

## 5. Otros pendientes medidos

| Frente | Alcance |
|---|---:|
| Distractores muletilla | **20 opciones / 18 lecciones** (16 «no tiene ninguna relación», 4 negaciones de descarte fácil) |
| Preguntas casi duplicadas dentro del mismo quiz | **4 pares**: `leccion-25-1` Q1↔Q5 y Q1↔Q6 (correcta idéntica, 1.00), `leccion-32-7` Q1↔Q3, `leccion-36-3` Q3↔Q6 (correcta idéntica) |
| `correctAnswer` apuntando a un distractor (fila 15) | **sin barrer** — en `libro-de-mormon-1` aparecieron 3 en 637 preguntas leyendo, y ninguno lo detecta un script. Acá **no se abrió un solo quiz** |
| Lecciones sin `enseñanza` | 9: 5 de *Dominio de la Doctrina* (por diseño), 2 de *Evalúa tu aprendizaje* (`24-7`, `29-4`) y 2 *Ven Sigueme* (`36-4`, `36-5`) que sí podrían llevarla |

## 6. Herramientas

Las de la sesión del 8-sep están descritas al final de
[`BITACORA-libro-de-mormon-1.md`](BITACORA-libro-de-mormon-1.md). Dos advertencias que valen para
este curso:

1. **`rebalance.js` y `pares.js` tenían 19 pares de sinónimos que rompen el español** (`todos` → `la
   totalidad de`, `sobre todo` → `principalmente`, `siempre` → `en todos los casos`, …). Están
   quitados en el scratchpad del 8-sep; copiarlos de una sesión anterior los reintroduce.
2. **`rebalance.js` edita opciones correctas pese a declarar que no lo hace**, y ~40 % de esas
   ediciones rompieron el texto en LdM-1. Filtrar las operaciones que tocan la correcta antes de
   aplicar.

---

# Sesión del 8-sep-2026 (tarde) — cierre de los cuatro frentes abiertos

Sesión dedicada a este curso. Solo se tocó `lib/content/libro-de-mormon-2/`.

## Punto de partida, medido de nuevo (no leído de esta bitácora)

Las herramientas se copiaron del scratchpad de la sesión de LdM-1 y **se revalidaron antes de
usarlas**: los 11 casos de prueba de `test-inv.js` y los 20 de `artefactos.js --test` pasan sobre
este curso. `rebalance.js` y `pares.js` tienen el md5 de esa sesión (con los 19 pares inseguros ya
quitados).

Las nueve cifras de la «Remedición del 8-sep» de arriba se confirmaron una por una, sin una sola
diferencia: ranking `28 / 19 / 16 / 37` con 46 lecciones sobre el tope, 216 OK + 30 `REVISAR_MANUAL`
+ 4 `AUTO_CORREGIBLE`, 35 citas de líder sin ancla, 8 superposiciones, 20 muletillas en 18
lecciones, 4 pares casi duplicados, los 9 frentes doctrinales en 80/80, barrido estructural limpio
salvo las superposiciones, 0 artefactos, `audit-distribucion` en `25/25/25/25 ✓`.

## Bloque 1 — frente D (8 superposiciones) + los 4 `AUTO_CORREGIBLE`

11 operaciones en 10 lecciones. **Superposiciones 8 → 0.**

Las 7 correcciones no borraron una cita para dejar la lección en 2: en 5 casos **el rango ancho era
en realidad un versículo puntual mal etiquetado** —el `texto` guardado resultó ser Alma 34:39,
Alma 39:13, Alma 42:15, Helamán 5:23–24 y 3 Nefi 17:7–9, no el rango de 10–12 versículos que decía
la referencia—, así que se estrechó la referencia al pasaje real. Solo 2 casos exigieron reemplazo:
`27-3` tenía Helamán 8:14–15 duplicando a 8:13–15 → **Números 21:8–9** (el relato de la serpiente de
bronce que el `contexto` explica en prosa sin citarlo), y `33-2` tenía 3 Nefi 24:17 como última
oración de 24:16-17 → **3 Nefi 24:11–12**.

⚠️ **No se corrió `fix-escrituras.ts --write`.** Sus 4 propuestas reintroducen el espacio antes de
la puntuación de la fila 22 (`vivieron ,`, `fundamento ,`, `vivirán ,`). Se aplicaron a mano con
`.replace(/\s+([,;:.])/g,'$1')`.

## Bloque 2 — frente B (fidelidad de Escrituras): **216 OK → 246 OK de 250**

27 operaciones en 17 lecciones.

⚠️ **`rescan-ventana-ancha.ts --write` habría reintroducido el frente D que se acababa de cerrar.**
De sus 7 propuestas de ampliación, tres eran sobre `28-5` (13:30→13:30–38, 13:31→13:31–38,
13:33→13:33–38): **tres citas anidadas dentro de la misma**, y la de `29-4` (5:6–7→5:6–13) se habría
tragado el Helamán 5:12 que ya estaba en el bloque. Es la fila 31 en su forma más cara: *el chequeo
que motiva la edición no puede ver lo que la edición rompe*.

Al mirarlas una por una, casi ninguna era un «resumen de pasaje largo»: eran **paráfrasis de un
versículo puntual**. 14 se literalizaron con la referencia intacta y **6 tenían el texto en otro
versículo** (§4.2 de `COMO-AUDITAR-ESCRITURAS.md`):

| Lección | Decía | Es en realidad |
|---|---|---|
| `27-1` | Helamán 7:6-7 | **Helamán 7:17–18** («habéis endurecido vuestros corazones») |
| `28-1` y `28-3` | Helamán 13:17 | **Helamán 13:11** — ver abajo |
| `28-5` | Helamán 13:30 | **Helamán 13:24** («echáis fuera a los profetas… les arrojáis piedras») |
| `28-5` | Helamán 13:33 | **Helamán 13:38** («habéis buscado la felicidad cometiendo iniquidades») |
| `29-2` | 3 Nefi 4:8–12 | **3 Nefi 4:31–33** («la inmensa bondad de Dios en librarlos») |
| `27-5` | Helamán 10:11–16 | deformación de 10:6 («hambre» → «**ayunos**»); se estrechó a **10:11–12** |

El texto de las 27 se armó **leyendo el volcado de capítulo de `ver-versiculo.ts` con un script**,
no transcribiéndolo: ninguna palabra pasó por la memoria del modelo.

### ⚠️ Una cita de Escritura fabricada, y su arrastre a otras cinco posiciones

«Pero he aquí, si os arrepentís, todo esto os será devuelto», atribuida a **Helamán 13:17** en
`28-1` y `28-3`, **no existe en Helamán 13** — ni en ese versículo ni en ningún otro del capítulo
(se buscó el capítulo entero por `devuel|restitu|recobrar|volverán|retendr|os será`). El capítulo sí
tiene una promesa condicional, y es el v. 11.

Lo grave es dónde estaba: **en tres lugares por lección**.

| Dónde | Detalle |
|---|---|
| `escrituras[].citas[]` | las dos lecciones, con `link` a `#p17` |
| `contexto` de `28-3` | la frase **entre comillas**, presentada como cita textual |
| `questions` | `28-1` Q3 y Q7, `28-3` Q2, Q4, Q5 y Q7 — una preguntaba literalmente «¿qué promesa hace Samuel en **el versículo 17**?» |
| `cuestionario` de `28-1` | la pregunta de escudriñar decía «Volvé a leer **Helamán 13:17**» |

Las **once** se reemplazaron por Helamán 13:11. `audit-escrituras.ts` solo veía la primera fila de
esa tabla; las otras diez aparecieron **leyendo**. Es la regla de `seminary-enrichment` («al cambiar
una cita, revisá `cuestionario` y `questions`») aplicada también al `contexto`, que la regla todavía
no nombra.

**Los 4 `REVISAR_MANUAL` que quedan no son un pendiente**: `21-3` (Alma 33:2–6), `24-1` (Alma
48:11–17 y 43:46–49) y `26-5` (Helamán 5:6–10) son resúmenes genuinos de pasaje largo donde la
ventana ganadora **coincide** con la referencia ya escrita. Es la limitación permanente del
comparador por recall que documenta §4.1.

## Bloque 3 — frente C (35 citas de líder sin ancla): **36/71 → 70/71**

`fix-anclas-citas.ts` resolvió 31 automáticamente. Las 70 anclas del curso se verificaron después
**de forma independiente** con `verif-anclas.js` (coincidencia literal de n-grama dentro del
párrafo, no recall — fila 16): **✔ 70 · ✖ 0**. Las 4 que el script no resolvió, a mano:

| Lección | Qué pasaba | Resolución |
|---|---|---|
| `26-7` Bednar | el `texto` coincidía con el **destacado** del discurso (`p_m26AD`), una versión recortada que corta la oración a la mitad | ancla a `p_yTg1D` (el párrafo del cuerpo) y oración completa, literal |
| `29-2` Nelson | recall 1.00 sin valor: la cita eran 3 palabras significativas («Si estáis preparados, no temeréis», que es D. y C. 38:30) | ancla verificada a `p10`, texto ampliado a la oración de Nelson que la introduce |
| `36-2` José Smith | el texto era **paráfrasis** de la Introducción del Libro de Mormón | literalizado de `p6`; se corrigieron además la pregunta 4 del `cuestionario` y la Q7 del quiz, que citaban la redacción vieja |
| `27-1` Nelson | devocional de BYU: la página **no tiene ni un `id="pN"`** | queda sin ancla. Se verificó que la página responde 200 y **contiene la cita literal** |

## Frente A — el defecto espejo del quiz: **`37 %` → `28 %`, y 46 → 0 lecciones sobre el tope**

`rebalance.js` y `micro.js` **no sirven para este curso**: las dos generan candidatas que llevan la
correcta *hacia* un extremo, y acá había que sacarla del extremo corto. Herramientas nuevas:

- **`subir.js <curso> [ids…]`** — vuelca las preguntas con la correcta más corta, con las dos
  ventanas objetivo (3ª y 2ª posición) ya calculadas, respetando el tope de 2 por lección.
- **`elegir2.js`** — variante de `elegir.js` que elige el candidato de una posición **concreta** en
  vez del primero que caiga entre el mínimo y el máximo. Es la fila 36 aplicada desde el primer
  bloque: en LdM-1 el excedente terminó todo en la 2ª y costó una pasada global de reparación.

**El diagnóstico de fondo**: en este curso las correctas están **sobre-recortadas**, no los
distractores inflados. El cierre del 7-sep arregló la fila 23 cortando la correcta, y quedaron
opciones truncadas de 24–65 caracteres frente a distractores de 80–110. Alargarlas hasta la 2ª/3ª
posición las mejora además como respuesta.

| Bloque | Lecciones | Ranking al cerrar | Sobre el tope |
|---|---|---|---:|
| — | (inicio) | `28 / 19 / 16 / **37**` | 46 |
| A1 | `30-2`, `30-4`, `30-5`, `31-3`, `33-3`, `22-1` | `28 / 20 / 18 / 34` | 40 |
| A2 | `24-1`, `25-3`, `25-7`, `27-7`, `29-2`, `29-3` | `28 / 21 / 19 / 32` | 34 |
| A3 | `29-4`, `30-1`, `31-1`, `31-7`, `31-9`, `32-5` | `28 / 22 / 20 / 30` | 28 |
| A4 | `32-7`, `34-2`, `34-4`, `35-3`, `36-5`, `24-5` | `28 / 23 / 21 / 28` | 22 |
| A5 | `24-9`, `25-5`, `26-1`, `26-5`, `26-7`, `27-3` | `28 / 23 / 21 / 27` | 16 |
| A6 | `27-5`, `28-1`, `28-5`, `28-7`, `28-9`, `29-1` | — | 10 |
| A7 | `30-3`, `31-5`, `32-1`, `32-3`, `33-1`, `33-4` | `28 / 25 / 22 / 25` | 4 |
| A8 | `34-1`, `34-3`, `34-5`, `35-2` | **`28 / 25 / 23 / 24`** | **0** |

Estado final, contra los otros cursos:

| Posición | Inicio | **Final** | LdM-1 | AT-1 | DyC-2 | Azar |
|---|---:|---:|---:|---:|---:|---:|
| 1ª (más larga) | 28 % | **28 %** | 18 % | 26 % | 16 % | 25 % |
| 2ª | 19 % | **25 %** | 36 % | 34 % | 33 % | 25 % |
| 3ª | 16 % | **23 %** | 30 % | 27 % | 40 % | 25 % |
| 4ª (más corta) | **37 %** | **24 %** | 18 % | 13 % | 14 % | 25 % |
| **Mejor heurística** | **37 %** | **28 %** | 36 % | 34 % | 36 % | 25 % |

Es la mejor forma lograda en el proyecto. La «heurística de descartar los dos extremos» —el
sobre-ajuste de la fila 30— quedó en **24 %**, o sea exactamente el azar.

**Tres preguntas tenían la ventana degenerada** por distractores empatados en longitud (`31-3` Q1
con 49/49, `31-7` Q4 con 79/79, `36-5` Q3 con una ventana de 3 caracteres): ahí hubo que separar
los distractores antes de poder colocar la correcta. En dos casos se resolvió **sin tocar la
correcta**, que siempre es preferible: `33-4` Q2 tenía «En la debilidad», la frase literal de
2 Corintios 12:9 —alargarla habría falseado la cita—, así que se acortó el distractor «En la
riqueza material» a «En la riqueza».

## El barrido que nadie había hecho: las 560 preguntas, una por una

Se volcó cada pregunta con **solo** la opción marcada como correcta (`correcta.js`, método de la
fila 15) y se leyeron las 560.

**Resultado: 0 `correctAnswer` apuntando a un distractor.** En `libro-de-mormon-1` fueron 3 de 637 y
en `antiguo-testamento-1` el 19 %; acá, ninguno. Lo que sí encontró el barrido son las diez
posiciones del arrastre de la cita fabricada de Helamán 13:17 (arriba) y dos cosas menores ya
corregidas: `30-3` Q5 usaba el nombre «Jessica», fuera del elenco del proyecto (→ Renata, sin usar
en el curso), y `32-1` Q1 citaba «3 Nefi 17:7-17», un rango que la lección ya no tiene.

## Los extras

| Frente | Antes | Después |
|---|---:|---:|
| Distractores muletilla | 20 en 18 lecciones | **0** |
| Preguntas casi duplicadas dentro del mismo quiz | 4 pares | **2, los dos falso positivo** |
| Lecciones *Ven Sigueme* sin cita de líder | 2 (`36-4`, `36-5`) | **0** |

**Muletillas.** Ninguna de las 20 estaba en una opción correcta (lo confirmó el detector barato de
la fila 15). Se reemplazaron por distractores de los tres tipos de la tabla de `seminary-enrichment`,
**respetando el lado de la correcta** en la escala de longitudes: el ranking no se movió ni un punto
(`159/140/127/134` antes y después). Es la forma barata de no reabrir el frente A al cerrar otro.

**Duplicados.** Dos eran reales y se corrigieron reescribiendo la pregunta redundante contra una
escritura que la lección ya tiene: `32-7` Q1 (era el mismo contenido que Q3) pasó a preguntar por
Éter 12:10, y `36-3` Q3 (redundante con Q4 **y** con Q6, y con distractores absurdos de 13 y 14
caracteres) pasó a preguntar por Mormón 9:27. **Los 2 que quedan son falso positivo del detector**:
en `leccion-25-1`, una lección de repaso, la respuesta correcta *es* una referencia, así que
cualquier pregunta de aplicación que nombre un pasaje empareja al 100 % con la de recuerdo que lista
los tres. Se corrigió de paso la forma de `25-1` Q6, que ofrecía dos opciones de 9 y 10 caracteres
(referencia pelada) contra dos de 56 y 76: se discriminaba por forma, no por contenido.

**Las dos citas de líder que faltaban.** Se buscaron, se verificaron y se anclaron discursos reales,
con el texto tomado del párrafo bajado por la API — ninguna palabra escrita de memoria:

- `36-4` → **Presidente Dallin H. Oaks**, «Cosas pequeñas y sencillas», Conferencia General, abril
  de 2018, `p34`. Autoría confirmada en la propia página («Por el presidente Dallin H. Oaks»).
- `36-5` → **Élder David A. Bednar**, «Si me conocierais», Conferencia General, octubre de 2016,
  `p19`. Autoría confirmada en el byline de la página («Por el élder David A. Bednar, Del Cuórum de
  los Doce Apóstoles»).

Las dos anclas nuevas pasaron la verificación independiente por n-grama: **72 anclas ✔ · 0 ✖**.

---

## Estado final del curso (8-sep-2026, tarde)

| Chequeo | Resultado |
|---|---|
| Los 9 frentes doctrinales (inventario propio) | **80/80** |
| `audit-doctrinal.ts --detalle` | Cristo (ctx o concl) 80/80 · orar 80/80 · escudriñar 80/80 |
| `audit-completitud.ts` | contexto 80/80 · conclusión 80/80 · cuestionario 80/80 con 6 · quiz 80/80 con 7 |
| `audit-escrituras.ts` | **246 OK de 250**; los 4 restantes son el límite del comparador (§4.1) |
| Citas de líder con ancla | **70 de 71** (la 71ª es un devocional de BYU sin párrafos numerados) · verificación propia **72 ✔ · 0 ✖** |
| `audit-autores-quiz.ts` | **0 atribuciones sin respaldo** |
| `audit-distribucion-respuestas.ts` | `0:25 % · 1:25 % · 2:25 % · 3:25 %` ✓ (no se movió: se editó texto, no orden) |
| Ranking de las 4 posiciones de longitud | **`28 / 25 / 23 / 24`**, mejor heurística **28 %** · **0 lecciones sobre el tope** en las dos direcciones |
| Barrido estructural (9 chequeos) | **todo en cero** — las 8 superposiciones no volvieron |
| Barrido de artefactos (14 patrones) | **0** |
| Distractores muletilla | **0** |
| `correctAnswer` apuntando a un distractor (560 leídas) | **0** |
| `audit-chapterurls.ts` | **rotas 0 de 80** (las 80 «desalineadas» son el falso positivo de la fila 29) |
| `validate-content.ts` | 1 problema, preexistente y ajeno (`libro-de-mormon-1/_auditoria-snapshot-original.json`) |

`audit-doctrinal.ts` sigue reportando **sustancia 57/80 (71 %)** porque esa métrica mide **solo el
`contexto`**; la lista que cruza `contexto` + `conclusion` —la que corresponde al ítem del checklist
doctrinal— está en 80/80.

`audit-completitud.ts` reporta **2 lecciones sin `enseñanza`** (más las 5 de *Dominio de la
Doctrina*, esperadas por su tipo): son `24-7` y `29-4`, las dos de *Evalúa tu aprendizaje*, donde
tampoco corresponde. Eran 4 al empezar la sesión.

---

## Defectos nuevos y falsos positivos encontrados en esta sesión

| Hallazgo | Alcance medido | Nota |
|---|---|---|
| **Una cita de Escritura fabricada, arrastrada a 11 posiciones en 2 lecciones** | Helamán 13:17 en `28-1` y `28-3`: 2 en `escrituras`, 1 en un `contexto` **entre comillas**, 7 en `questions`, 1 en la pregunta de escudriñar del `cuestionario` | `audit-escrituras.ts` solo ve la primera. Las otras nueve aparecieron leyendo. **La regla de `seminary-enrichment` que manda revisar `cuestionario` y `questions` al cambiar una cita tiene que incluir el `contexto`**, que es donde estaba la peor: presentada como cita textual |
| **`rescan-ventana-ancha.ts --write` puede reintroducir citas superpuestas** | 4 de sus 7 propuestas de ampliación: 3 anidadas en `28-5`, 1 en `29-4` | Es la fila 31 en su forma más concreta. **El script debería rechazar una ampliación que quede conteniendo otra cita del mismo bloque** — el cruce ya está escrito en `inv.js` |
| **`fix-escrituras.ts` reintroduce el espacio antes de la puntuación de la fila 22** | las 4 propuestas `AUTO_CORREGIBLE` del curso (`vivieron ,`, `fundamento ,`, `vivirán ,`) | El arreglo es de una línea: aplicar `.replace(/\s+([,;:.])/g,'$1')` a `propuesta.texto` antes de escribir |
| **Ampliar una cita puntual a un rango de resumen puede deformar el texto** | `27-5` citaba «te doy poder para que declares **ayunos**» bajo Helamán 10:11–16; el original es «herirás la tierra con **hambre**» (10:6) | Un cambio de una palabra que invierte el sentido y que ningún chequeo mecánico ve: `hambre` (la plaga) por `ayunos` (la práctica) |
| **`audit-links-citas.ts` reporta el MISMO destino ajeno para tres links de manual distintos** | 3 de 73 citas (`23-4`, `29-5`, `31-1`), las tres «REDIRIGEN → .../ezra-taft-benson/chapter-18-beware-of-pride» | **Falso positivo**: los tres `canonicalUrl` que devuelve la API coinciden exactamente con el link del archivo, y los párrafos `p21` y `p29` contienen la cita literal. Parece un bug de clave de caché o de variable de bucle |
| **`audit-links-citas.ts` da «sin ancla» a las anclas con id alfanumérico** | 1 de 73 (`26-7`, ancla `#p_yTg1D`) | Los discursos de Conferencia de 2024 en adelante usan ids de párrafo con hash (`p_yTg1D`), no `pN`. El patrón `#p\d+` del script no los reconoce |
| **`dup-q.js` da falso positivo en lecciones de repaso** | 2 pares en `25-1` | En una lección de Dominio de la Doctrina la respuesta correcta *es* una referencia, así que una pregunta de aplicación que nombre un pasaje empareja al 100 % con la de recuerdo que los lista |
| **Un destacado de discurso no es el párrafo del discurso** | 1 de 71 (`26-7`) | El `texto` guardado coincidía con el *pull-quote*, que corta la oración a la mitad. El ancla correcta es la del cuerpo |

## Herramientas nuevas dejadas en el scratchpad

| Archivo | Qué hace |
|---|---|
| `subir.js <curso> [ids… \| --top n]` | espejo de `mal.js`/`micro.js`: vuelca las preguntas con la correcta **más corta** y las dos ventanas objetivo (3ª y 2ª), respetando el tope de 2 por lección |
| `elegir2.js <curso> <cand.json> <ops.json>` | como `elegir.js`, pero elige el candidato de la posición **concreta** que pide cada caso (`destino`: 2 o 3) — fila 36 desde el primer bloque |
| `correcta.js <curso> <desde> <hasta>` | vuelca cada pregunta con **solo** la opción marcada correcta, por rangos de lección: es lo que abarata el barrido de la fila 15 sobre un curso entero |
