# Bitácora de generación bajo las reglas doctrinales

Registro del trabajo de contenido posterior al **6 de septiembre de 2026**, fecha en la que
`seminary-enrichment` incorporó la Regla superior de centralidad en Jesucristo, la pregunta de
escudriñar y la regla del Espíritu Santo, y `seminary-audit` incorporó la auditoría doctrinal.

Este archivo es el **control de avance**: se escribe *a medida que se trabaja*, no al final. Si una
sesión se corta, la siguiente tiene que poder retomar leyendo solo esto.

---

## Cómo usar esta bitácora

**Al empezar un lote**, agregá una fila a la tabla de sesiones con la fecha, el curso y las lecciones
que vas a tocar. **Al terminarlo**, completá el resultado. Una fila por lote, no una por lección.

Antes de tocar el primer lote de un curso, corré la medición y anotá el punto de partida:

```bash
npx tsx scripts/audit-doctrinal.ts <curso>
npx tsx scripts/audit-doctrinal.ts <curso> --detalle   # la cola de trabajo, lección por lección
```

Al cerrar el lote, volvé a correrla y anotá el resultado. Si el número no se movió, el lote no
sirvió y hay que entender por qué antes de seguir: es la única forma de que la bitácora sirva de
control y no de diario.

---

## Línea de base (6 de septiembre de 2026)

Medición de `audit-doctrinal.ts --todos` **antes** de cualquier corrección. Las columnas son:
lecciones de convención clásica, cuántas nombran a Cristo en `contexto` o `conclusion`, cuántas
dicen además algo sobre Él, cuántas tienen una pregunta que invita a orar o meditar, y cuántas
tienen una pregunta que devuelve al pasaje.

> ⚠️ **La columna «Orar» de esta tabla se midió con un detector roto** (ver la fila de defectos
> del 6-sep-2026): contaba «ahora», «describir» y «mejorar» como invitaciones a orar, e inflaba
> el resultado al doble. Los valores de abajo son los que se anotaron ese día; los reales, ya con
> `audit-doctrinal.ts` corregido, están en la columna «Orar (real)».

| Curso | Lecciones | Cristo | Sustancia | Orar | Orar (real) | Escudriñar | Sin Cristo (absoluto) |
|---|---|---|---|---|---|---|---|
| doctrina-y-convenios-2 | 54 | 30 % | 13 % | 50 % | **26 %** | 0 % | 38 |
| religion-301 | 5 | 40 % | 0 % | 80 % | **40 %** | 0 % | 3 |
| antiguo-testamento-1 | 88 | 44 % | 26 % | 64 % | **34 %** | 1 % | 49 |
| doctrina-y-convenios-1 | 91 | 45 % | 20 % | 56 % | **25 %** | 0 % | 50 |
| antiguo-testamento-2 | 67 | 55 % | 25 % | 61 % | **33 %** | 0 % | 30 |
| religion-200 | 28 | 61 % | 29 % | 46 % | **25 %** | 0 % | 11 |
| libro-de-mormon-2 | 80 | 68 % | 36 % | 61 % | **41 %** | 0 % | 26 |
| libro-de-mormon-1 | 78 | 74 % | 36 % | 51 % | **21 %** | 0 % | 20 |
| religion-250 | 28 | 93 % | 68 % | 64 % | **21 %** | 4 % | 2 |
| **TOTAL** | **519** | **56 %** | **29 %** | **58 %** | **29 %** | **0 %** | **229** |

**Cursos sin material de estudio** (tienen quiz pero `secciones: []`, así que no aparecen arriba):

| Curso | Lecciones sin secciones | Tienen quiz |
|---|---|---|
| nuevo-testamento | 78 | sí, las 78 |
| religion-225 | 23 | no |
| doctrina-y-convenios-2 | 2 | — |

---

## Orden de trabajo sugerido

Dos frentes distintos. Conviene no mezclarlos dentro de un mismo lote.

**Frente A — generar lo que falta.** `nuevo-testamento` (78 lecciones): el alumno responde un quiz
sobre doctrina que el sitio nunca le enseñó. Es el defecto más grave del proyecto y es generación
limpia, sin riesgo de romper nada existente.

**Frente B — corregir lo escrito.** Por volumen absoluto, no por porcentaje:
`doctrina-y-convenios-1` (50), `antiguo-testamento-1` (49), `doctrina-y-convenios-2` (38).

---

## Sesiones

| Fecha | Curso | Lecciones | Frente | Cristo antes → después | Escudriñar antes → después | Notas |
|---|---|---|---|---|---|---|
| 6-sep-2026 | antiguo-testamento-1 | **todo el curso (89)** | B | 39/88 (44 %) → **89/89 (100 %)** | 1/88 (1 %) → **89/89 (100 %)** | **Curso cerrado salvo el quiz.** Sustancia 26 % → 96 %; orar 34 % → 100 % (con el detector ya corregido). Forma completa: contexto 89/89 en rango, conclusión 89/89 en rango, cuestionario 89/89 con 6 preguntas, **enseñanza 0 sin cita** (se agregaron 3, verificadas contra el discurso original). Se generó `leccion-64`, la única con `secciones: []`, desde el manual oficial. Se corrigieron además: 42 espacios sueltos (fila 22), **6 `chapterUrl` rotos** (fila 19, con script nuevo), **7 citas sin ancla** (fila 16, con script nuevo), 14 citas de Escritura parafraseadas + 4 arrastres (ver [AUDITORIA-escrituras-AT1.md](AUDITORIA-escrituras-AT1.md)) y 4 typos. **Y un defecto del propio `audit-doctrinal.ts`**: la métrica de «orar» estaba inflada al doble en los 9 cursos. Pendiente, por decisión del usuario: el frente de quiz (70 con sesgo de longitud, 14 fuera de spec, 6 ausentes) |
| 6-sep-2026 | antiguo-testamento-1 | 162, 163, 164, 169, 172 | B | 39/88 (44 %) → **44/88 (50 %)** | 1/88 (1 %) → **6/88 (7 %)** | Las 5 salieron de las cuatro listas de defecto. Sustancia 23 → 28, orar 56 → 57 (solo 164 fallaba ese ítem). **El detector de escudriñar reconoció las 5 preguntas nuevas, +5 exacto: primer caso positivo real desde que existe el script.** Al revisar `questions` apareció un defecto nuevo — ver la tabla siguiente. |
| 6-sep-2026 | antiguo-testamento-2 | 101, 104, 109, 110, 111 | B | 37/67 (55 %) → **42/67 (63 %)** | 0/67 (0 %) → **5/67 (7 %)** | Las 5 primeras de la cola `SIN CRISTO EN CONTEXTO NI CONCLUSION`. Sustancia 17 → 22, orar 41 → 42 (solo 110 fallaba ese ítem); +5 exacto en las tres columnas que dependían del lote. Vías usadas: **título** (101: Jehová de los Salmos = Jesucristo, y cada título del Salmo 18:2 dice algo de Él), **símbolo** (104: el cordero del templo → el Cordero, y 3 Nefi 9:20), **Su ejemplo** (109: Mateo 14:23 y 26:39), **atributo probado** (110: 2 Nefi 26:24), **Su victoria sobre la muerte** (111: 3 Nefi 27:19). Se escribió con el texto del manual delante (API v3, no `web_fetch`). Quiz reescrito a la spec en las 5 (7 × 4, era 5 × 3 — fila 24) y `questionCount` actualizado. Un defecto nuevo — ver la tabla siguiente. |
| 6-sep-2026 | antiguo-testamento-2 | 116, 117, 118, 119, 120 | B | 42/67 (63 %) → **47/67 (70 %)** | 5/67 (7 %) → **10/67 (15 %)** | Las cinco de Isaías. Vías: **tronco de Isaí = Cristo** (116, D. y C. 113:1–2 — el `contexto` saltaba a José Smith sin decir de qué raíz salía), **Su victoria sobre la muerte** (117), **el Salvador citando a Isaías 29:13 en la Primera Visión** (118, JS—H 1:19), **el que dice «no temas» es el que calmó la tormenta** (119, Marcos 4:39–40), **«Jehová… y su Redentor»** (120, el versículo completo de Isaías 44:6). Quiz reescrito a la spec en las 5. |
| 6-sep-2026 | antiguo-testamento-2 | 121, 130, 131, 135, 137 | B | 47/67 (70 %) → **52/67 (78 %)** | 10/67 (15 %) → **15/67 (22 %)** | Vías: **las palmas grabadas son las de las marcas de los clavos** (121, 3 Nefi 11:14), **Cristo ordenado desde antes de la fundación del mundo** (130, 1 Pedro 1:19–20), **«fuente de aguas vivas» es un título Suyo** (131 — lo pide el manual explícitamente: «busca un título del Salvador que podría representar el agua»), **las Escrituras dan testimonio de Él** (135, Juan 5:39), **Él usó pasajes memorizados en la tentación** (137, Mateo 4:4). |
| 6-sep-2026 | antiguo-testamento-2 | 173, 175, 182, 184, 186 | B | 52/67 (78 %) → **57/67 (85 %)** | 15/67 (22 %) → **20/67 (30 %)** | Las cinco de *Preparación para la Vida*, el tipo que la skill señala como el que más se aleja de Él. Vías: **hijos de Cristo por convenio** (173, Mosíah 5:7), **el convenio abrahámico se cumple en Él** (175, Gálatas 3:16), **«comprados por precio» y Su resurrección** (182, 1 Corintios 6:19–20), **«venid a mí» + «sabe según la carne cómo socorrer»** (184, Mateo 11:28–30 y Alma 7:11–12), **Su respuesta bajo la peor provocación posible** (186, Lucas 23:34). Ver el defecto nuevo: en dos de estas cinco, **el subtítulo del manual nombra a Jesucristo y la lección del sitio lo había borrado**. |
| 6-sep-2026 | antiguo-testamento-2 | 189, 191, 196, 207, 92 | B | 57/67 (85 %) → **62/67 (93 %)** | 20/67 (30 %) → **25/67 (37 %)** | Vías: **«Yo soy… la verdad», así que toda verdad lleva a Él** (189, Juan 14:6 + D. y C. 93:36), **Él es el mentor perfecto** (191 — el manual lo dice: «esos relatos nos remiten a nuestros mentores perfectos»; Moisés 7:35 «Varón de Consejo» + Mateo 11:29), **el encargo viene con «yo estoy con vosotros»** (196, Mateo 28:19–20), **la voz de los siervos es la Suya** (207, D. y C. 1:38), **restaurar lo que quedó en ruinas es Su oficio** (92, Lucas 4:18). Segunda `chapterUrl` rota del curso (191). |
| 6-sep-2026 | antiguo-testamento-2 | 93, 94, 95, 96, 99 | B | 62/67 (93 %) → **67/67 (100 %)** | 25/67 (37 %) → **30/67 (45 %)** | **Cierre de la cola: no queda ninguna lección del curso sin Cristo en `contexto` o `conclusion`.** Vías: **Él «afirmó su rostro» y no se bajó de Su obra** (93, Lucas 9:51), **«para esto he llegado a esta hora»** (94, Juan 12:27 — el paralelo textual exacto de Ester 4:14), **Ester intercede una vez ante un rey; Él intercede por vos ante el Padre** (95, D. y C. 45:3–5), **el Jehová en cuyo nombre venció David** (96), **«yo sé que mi Redentor vive»** (99, Job 19:25 — el versículo más conocido del libro faltaba en la lección). Orar 37 → 41, sustancia 36 → 39. |

| 6-sep-2026 | antiguo-testamento-2 | 97, 115, 122, 127, 132 | B | 67/67 — | 30/67 (45 %) → **35/67 (52 %)** | Primer lote sobre la lista **`SOLO NOMBRADO`** (12 lecciones que nombraban a Cristo sin decir nada de Él). Acá no hay que insertar Su nombre —ya estaba—, sino darle contenido: **el que sufrió sin merecerlo** (97, Isaías 53:3–5 junto a «en él confiaré»), **la Luz que no se puede renombrar** (115, Juan 8:12 + la prueba de Moroni 7:16–17), **el Jehová a quien Josué promete servir** (122), **el día de reposo es el de Su resurrección y la Santa Cena** (127, D. y C. 59:9), **«os haré pescadores de hombres»** (132, Mateo 4:19 retoma la imagen de Jeremías 16:16). |
| 6-sep-2026 | antiguo-testamento-2 | 138, 140, 176, 181, 197 | B | 67/67 — | 35/67 (52 %) → **40/67 (60 %)** | Sustancia 39 → 46, orar 41 → 50. Vías: **el atalaya avisa, pero el Buen Pastor sale a buscar** (138, Ezequiel 34:11,16 + Juan 10:11), **el valle de huesos anticipa la resurrección** (140), **«no vino para ser servido, sino para servir»** (176, Mateo 20:28), **«mi paz os doy» dicho la peor noche + «yo he vencido al mundo»** (181, Juan 14:27 y 16:33), **«yo soy la luz que debéis sostener en alto»** (197, 3 Nefi 18:24 — saca la presión de tener que ser uno el ejemplo perfecto). |
| 6-sep-2026 | antiguo-testamento-2 | 199, 200 | B | 67/67 — | 40/67 (60 %) → **42/67 (63 %)** | Cierre de la lista `SOLO NOMBRADO`: **queda vacía**. Vías: **el Consolador «dará testimonio de mí»** (199, Juan 15:26 — el Espíritu no respalda tus argumentos, confirma lo que decís de Él), **«si me amáis, guardad mis mandamientos» + Él obedeció primero** (200, Juan 14:15 con Juan 5:30 y Hebreos 5:8). |

| 6-sep-2026 | antiguo-testamento-2 | **las 25 restantes** (98, 102–108, 112–114, 123–125, 128, 129, 133, 134, 136, 139, 141, 183, 185, 187, 198, 208) | B | 67/67 — | 42/67 (63 %) → **67/67 (100 %)** | **Curso cerrado.** Las 25 no estaban en ninguna cola doctrinal: les faltaba la pregunta de escudriñar y tenían el quiz de la convención vieja (5 × 3). En 5 lotes se les escribió la pregunta 3 anclada a una referencia de su propio bloque `escrituras`, se reforzó la invitación a orar/anotar en las de compromiso, y se reescribió el quiz completo a la spec. Orar 50 → **67/67**, escudriñar 42 → **67/67**, quiz 42 → **67/67 en 7 × 4**. Se amplió el `contexto` de `leccion-133` (134 → 256 palabras), el último fuera de rango del curso. **El sesgo de posición se resolvió solo:** al reescribir los 67 quiz, el curso pasó de «96 % adivinable en la posición 1» a **0:21 / 1:28 / 2:29 / 3:22 ✓**, sin necesidad de correr `--write`. Se limpió también la última ocurrencia de la fila 22 (espacio antes de puntuación, en el texto de D. y C. 98 de `leccion-108`). |

**Estado final de `antiguo-testamento-2` — las cinco columnas al 100 %:**
Cristo 67/67 · orar 67/67 · escudriñar 67/67 · contexto 67/67 en rango · conclusión 67/67 en rango ·
cuestionario 67/67 con 6 preguntas · quiz 67/67 en 7 × 4 · distribución de respuestas sin sesgo ·
`SOLO NOMBRADO` vacía · 0 espacios antes de puntuación · `validate-content.ts` limpio.
Sustancia queda en 47/67 (70 %), pero esa cifra mide **solo el `contexto`**: la lista que cruza
contexto y conclusión está en cero. Sin barrer todavía en este curso: las anclas `#pN` de las 61
citas de líder (fila 16) y la auditoría de fidelidad de las citas de Escritura.

**Total de la segunda tanda (12 lecciones, 3 lotes):** sustancia 39 → **47/67 (70 %)**, escudriñar 30 → **42/67 (63 %)**,
orar 41 → **50/67 (75 %)**, y la lista `SOLO NOMBRADO` de 12 → **0**. Las 12 llevan quiz nuevo a la spec y
`questionCount` sincronizado; chequeos de cierre (líderes huérfanos, distractores duplicados, `correctAnswer`,
opciones ≠ 4, espacios antes de puntuación) todos en cero.

**Estado del curso al cerrar la sesión:** Cristo **67/67**, `SOLO NOMBRADO` **0**, sustancia 47, orar 50,
escudriñar 42. Completitud: contexto 67/67 (1 fuera de rango: `leccion-133`), conclusión 67/67 en rango,
cuestionario 67/67 con 6 preguntas, **quiz 42/67 en la spec de 7 × 4** (quedan 25 con la convención vieja).
Sesgo de posición del curso: **96 % → 48 %** solo por las 37 lecciones reescritas; el resto se cierra con
`npx tsx scripts/audit-distribucion-respuestas.ts antiguo-testamento-2 --write`, que **no se corrió** porque
alcanza lecciones fuera de las dos colas trabajadas.

**Total de la primera tanda (25 lecciones, 5 lotes):** Cristo 42 → **67/67 (100 %)**, escudriñar 5 → **30/67 (45 %)**,
orar 23 → **41/67 (61 %)**, sustancia 22 → **39/67 (58 %)**. Las 25 llevan quiz nuevo a la spec
(7 × 4, correcta repartida en 0–3, correcta más larga ≤ 2 de 7) y `questionCount` sincronizado.
Chequeos de cierre sobre las 25, todos en cero: líderes huérfanos, distractores duplicados,
`correctAnswer` fuera de rango, espacios antes de puntuación. 41 nombres distintos en los
escenarios de aplicación, ninguno repetido más de dos veces.

| 7-sep-2026 | libro-de-mormon-1 | **todo el curso (91)** | A + B | 58/78 (74 %) → **91/91 (100 %)** | 0/78 (0 %) → **91/91 (100 %)** | **Segundo curso cerrado en las tres columnas doctrinales.** Orar 15/78 → **91/91**; sustancia (`SOLO NOMBRADO`) 18 pendientes → **0**. Se cerraron además ocho frentes de forma: conclusión en rango 46/78 → 91/91, ≥3 escrituras 65/78 → 91/91, líderes huérfanos 62/78 → 91/91, anclas `#pN` 94/104 → **104/104**, `chapterUrl` rotas **0 de 91** (primer curso barrido y limpio en la fila 19), y el sesgo de posición del quiz de **56 % → 23/26/25/25 ✓**. **Frente A incluido:** se generaron desde cero las **13 lecciones que tenían quiz pero `secciones: []`**, con 46 citas de Escritura y 9 de líder, todas verificadas. Defectos nuevos: un **corrimiento de quiz entre lecciones vecinas** (3 lecciones, fila 26 del catálogo) y **tres falsos positivos de instrumento** (filas 27-29). **Pendiente: el sesgo de longitud del quiz quedó en 400/637 (63 %), desde 77 %** — 69 lecciones sin tocar, ver [`BITACORA-libro-de-mormon-1.md`](BITACORA-libro-de-mormon-1.md) |

---

## Defectos nuevos encontrados al generar

Si aparece un defecto sistemático que las reglas actuales no previenen, va acá **y** como fila en
`CICLO-GENERACION-AUDITORIA.md`, y se refuerza la regla correspondiente en `seminary-enrichment`.
Un defecto que solo se corrige en las lecciones ya escritas vuelve a aparecer en la próxima tanda.

| Fecha | Defecto | Regla que debería haberlo evitado | Qué se cambió |
|---|---|---|---|
| 6-sep-2026 | **El detector de «invita a orar/meditar/anotar» de `audit-doctrinal.ts` contaba palabras corrientes.** `/or[áa]\b/` matchea el final de «ahora», «hora» y «Pahorán»; `/orar/` el de «mejorar» y «llorar»; `/oraci[óo]n/` el de «adoración» y «colaboración»; `/escrib[íi]/` el de «describir»; `/impresi[óo]n/` el de «impresionante» | Ninguna regla de generación: es un defecto **del instrumento de medición**, no del contenido. La categoría es la de la fila 20 del catálogo (la skill describía mal el entorno), aplicada esta vez a un script | Se corrigió `audit-doctrinal.ts` con lookarounds sobre una clase explícita de letras españolas — agregar `\b` no alcanza, porque en JS las vocales acentuadas no son carácter de palabra (el mismo motivo ya documentado ahí para `MANDA_AL_TEXTO`). **Alcance: 302 de 519 lecciones contadas (58 %) contra 153 reales (29 %): la métrica estaba inflada al doble en los 9 cursos**, y «ahora» sola explicaba 92 falsos positivos. La línea de base de arriba quedó con las dos cifras |
| 6-sep-2026 | **`chapterUrl` que no existe y aun así responde HTTP 200.** La de `leccion-104` apuntaba a `33-psalms-1-46/335-psalm-51`; la lección del Salmo 51 vive en `34-psalms-49-86/341-psalm-51`. La API del manual no devuelve 404 para la URI mala: devuelve **el índice completo del manual** (406 KB) con estado 200, y `content.uri` trae la URI del índice, no la pedida | Fila 19 del catálogo (`chapterUrl` que apunta a otra lección) ya describía el defecto, pero **no tiene regla en la skill ni script**, y es el mismo patrón silencioso de la fila 17 aplicado al manual en vez de a los discursos | Se corrigió la URL en el manifiesto. **El cruce es de segundos y no está hecho en ningún curso**: pedir cada `chapterUrl` a `language-pages/type/content` y comparar el `uri` devuelto contra el pedido; si difieren, la URL no existe. Se encontró de casualidad, al bajar el texto del manual para escribir el lote |
| 6-sep-2026 | **El subtítulo del manual nombra a Jesucristo y la lección del sitio lo borró.** En *Preparación para la Vida*, el manual titula la 184 «Manejar el estrés y la ansiedad: **Jesucristo puede ayudarnos** a manejar el estrés y la ansiedad» y la 186 «Resolver los sentimientos de ira: **Responder a la ira siguiendo al Salvador**»; la 191 dice que los relatos «nos remiten a **nuestros mentores perfectos: el Padre Celestial y Jesucristo**», y la 131 pide textualmente «busca **un título del Salvador** que podría representar el agua». Las cuatro lecciones del sitio conservaban el tema y perdían al sujeto | La Regla superior corrige el resultado, pero la causa está antes: **la generación tomó el tema del manual y descartó su encabezado doctrinal**. Es el mismo patrón de la fila 18 (se sintetiza sin la fuente delante), agravado porque acá la fuente traía la conexión ya escrita | Se restauró la conexión en las 25 lecciones de la tanda usando el texto del manual. **Sugerencia de regla para `SKILL.md`: leer el subtítulo de la lección del manual antes de escribir el `contexto` y, si nombra a Jesucristo, esa es la vía de la Regla superior — no hay que inventar otra.** Es gratis y evita el trabajo de reconstruirla después |
| 6-sep-2026 | **Segunda `chapterUrl` rota del mismo curso** (`leccion-191`: `664-seeking-a-mentor` en vez de `664-finding-a-mentor`), encontrada esta vez **a propósito**, corriendo el cruce sobre las 25 de la cola antes de escribir | Fila 19 del catálogo | Confirma que el defecto es sistemático y no anecdótico: **2 de 30 URLs verificadas en un solo curso (6,7 %)**. El cruce corrió en segundos sobre las 25 y es el que hay que industrializar: pedir cada `chapterUrl` a la API y comparar el `uri` devuelto. **Sigue sin correrse en los 11 cursos restantes** |
| 6-sep-2026 | **Quiz de convención anterior**: 5 preguntas de 3 opciones, distractores de descarte fácil ("Solo sentarte y esperar a que el maestro hable") y la correcta más larga en 5 de 5. Encontrado en `leccion-169` al revisar `questions` como pide el flujo del frente B | La spec de `questions` pide 7 preguntas × 4 opciones desde siempre, pero **ningún script cruzaba la cantidad de opciones**: `audit-completitud.ts` cuenta preguntas y no mira `options.length`, y `audit-distribucion-respuestas.ts` mide posiciones sobre el array que encuentra, sea de 2, 3 o 4 | Se reescribió el quiz de `leccion-169` a la spec (7 × 4, correcta repartida en 0-3, correcta más larga 0/7) y se actualizó `questionCount` en el manifiesto. **Alcance medido en todo el proyecto: 94 lecciones en 4 cursos**, `antiguo-testamento-2` con las 67. Fila 24 del catálogo. No se corrigió fuera del lote |

---

## Pendientes conocidos al abrir la bitácora

- ~~La **pregunta de escudriñar** está al 0 % en todo el corpus~~ — **resuelto el 6-sep-2026 en el
  primer lote (AT-1, 5 lecciones).** El detector reconoció las 5 preguntas escritas bajo la regla
  nueva: el contador pasó de 1/88 a 6/88, +5 exacto, y ninguna de las 5 quedó en la lista de
  faltantes. La forma que funciona es literal: **`Volvé a leer <referencia exacta del bloque
  escrituras> …`** — el detector exige un verbo de lectura *y* la referencia, y compara contra
  `escrituras.citas[].referencia` de la propia lección, así que la referencia tiene que estar
  escrita igual que en el bloque (incluido el guion largo del rango, `8:1–6`).
- ~~`PLAN-DE-AUDITORIA.md` todavía no tiene columna para la auditoría doctrinal~~ — **agregada el
  7-sep-2026** al cerrar `libro-de-mormon-1`. Hoy figuran cerrados `antiguo-testamento-2` (6-sep) y
  `libro-de-mormon-1` (7-sep); los otros diez cursos siguen sin trabajar en este frente.
- **El sesgo de longitud del quiz es el frente grande que queda abierto en todo el proyecto.** En
  `libro-de-mormon-1` bajó de 77 % a 63 % y quedó ahí; en los demás cursos sigue como estaba (83 %
  de las 3569 preguntas al 4-sep-2026). El criterio que funciona está en la fila 27 del catálogo:
  el objetivo no es 0 % sino acercarse al 25 % del azar, porque bajar todas las correctas al mínimo
  produce el defecto espejo.
