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
</content>
</invoke>
<invoke name="AskUserQuestion">
<parameter name="questions">[{"question":"El sesgo de posición del quiz (54 % de las respuestas en la posición 1) se corrige con `audit-distribucion-respuestas.ts libro-de-mormon-2 --write`. Es mecánico y seguro: rota el array de `options` y reindexa `correctAnswer`, sin tocar un carácter de texto. Pero alcanza las 560 preguntas del curso entero, no solo las que voy a trabajar. ¿Lo corro?","header":"Sesgo de pos.","multiSelect":false,"options":[{"label":"Sí, corrélo ahora (Recomendado)","description":"Lo corro antes de empezar los lotes de contenido. Después, cuando reescriba el texto de las opciones para el frente de «la correcta es la más larga», no vuelve a introducir sesgo de posición porque ese frente cambia el texto, no el orden."},{"label":"Sí, pero al final","description":"Trabajo todos los frentes de contenido primero y lo corro como último paso. Riesgo bajo, pero si algún lote reescribe un quiz entero, el resultado final hay que volver a medirlo igual."},{"label":"No, dejalo como está","description":"El curso queda adivinable respondiendo siempre la segunda opción (54 % de acierto sin leer). Este frente quedaría fuera del 100 %."}]}]
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
