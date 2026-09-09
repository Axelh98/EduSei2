# Bitácora — libro-de-mormon-1

Ver `BITACORA-generacion-doctrinal.md` para la línea de base y las reglas del registro.

## Punto de partida (7-sep-2026)

Medición de `npx tsx scripts/audit-doctrinal.ts libro-de-mormon-1` **antes** de tocar nada:

```
=== libro-de-mormon-1 (91 archivos) ===
secciones: [] (sin material): 13 | convención "resumen": 0 | convención clásica: 78
Cristo en contexto:            40/78 (51 %)
Cristo en conclusion:          47/78 (60 %)
Cristo en alguna de las dos:   58/78 (74 %)
  ...y además dice algo de Él: 28/78 (36 %)
Pregunta que invita a orar/meditar/anotar: 15/78 (19 %)
Pregunta que devuelve al pasaje:          0/78 (0 %)
```

Las tres colas del `--detalle`, en el orden de trabajo que cerró `antiguo-testamento-2`:

| Cola | Cuántas | Contenido |
|---|---:|---|
| `SIN CRISTO EN CONTEXTO NI CONCLUSION` | 20 | 12 *Ven Sigueme*, 7 *Dominio de la Doctrina*, 1 *Preparación para la Vida* |
| `SOLO NOMBRADO` | 18 | lo nombran sin decir nada de Él |
| Sin escudriñar / sin orar, fuera de las dos anteriores | 40 | el resto hasta las 78 |

Escudriñar está en **0/78**: no es un defecto de este curso, es la función que falta en todo el
corpus (la regla no existía cuando se generó nada).

**Frente A dentro de este curso:** 13 lecciones con `secciones: []`. No entran en las cifras de
arriba y son un lote aparte.

## Verificación previa de `chapterUrl` (7-sep-2026)

`npx tsx scripts/audit-chapterurls.ts libro-de-mormon-1` → **0 rotas sobre 91**. Ninguna URI
devuelve el índice del manual (la página más grande del curso pesa 16,7 KB, y el umbral de índice
es 25 KB), y toda página cuyo `title` trae una referencia de Escritura menciona esa referencia.
**Es el primer curso del proyecto que queda barrido y limpio en la fila 19 del catálogo.**

⚠️ El script reportó además **83 «desalineadas», y las 83 son un falso positivo suyo** — ver el
defecto nuevo registrado en `BITACORA-generacion-doctrinal.md`. No hay nada que corregir en el
contenido por ese aviso.

## Sesiones

| Fecha | Lecciones | Frente | Cristo antes → después | Escudriñar antes → después | Notas |
|---|---|---|---|---|---|
| 7-sep-2026 | 1-nefi-3, 2-nefi-28-27-32, alma-17, alma-4, aprender-por-fe | B | 58/78 (74 %) → **63/78 (81 %)** | 0/78 (0 %) → **5/78 (6 %)** | Las 5 primeras de la cola `SIN CRISTO EN CONTEXTO NI CONCLUSION`. Sustancia 28 → 33, orar 15 → 19 (+4: `aprender-por-fe` ya cumplía ese ítem). **+5 exacto en Cristo, sustancia y escudriñar.** Vías, las cinco tomadas del propio manual: **Su ejemplo de obediencia perfecta** (1-nefi-3 — el manual pide textualmente «dirigir el análisis hacia el ejemplo del Salvador de obediencia perfecta a Su Padre», y la lección lo había borrado; Lucas 22:42), **Él mismo progresó de gracia en gracia** (2-nefi-28-27-32 — la actividad complementaria del manual se llama «Jesús progresó de gracia en gracia»; D. y C. 93:12–13 y Lucas 2:40), **el Rey que se hizo siervo** (alma-17 — Mateo 20:26–28 detrás del «seré tu siervo» de Ammón, y el poder de Alma 26:12 es el Suyo), **los humildes aguantaban «por causa de Cristo»** (alma-4 — Alma 4:13–14, que la lección no citaba: tenía una sola escritura), **la fe verdadera se centra en el Señor Jesucristo** (aprender-por-fe — la cita de Bednar ya estaba en la lección y el `contexto` no la usaba). Se agregaron 3 citas de Escritura (D. y C. 93:12–13; Mateo 20:26–28; Alma 4:8 y 4:13–14), todas descargadas con `ver-versiculo.ts`, ninguna de memoria. Se completó la `fuente` de la cita de Nelson en alma-17 con el título verificado en el manual. `alma-4` pasó de 1 a 3 escrituras y su conclusión de 64 a 128 palabras. |
| 7-sep-2026 | aprender-espiritu, aprender-por-fe, conocimiento-espiritual-1 | corrección estructural | 63/78 — | 5/78 (6 %) → **6/78 (8 %)** | **Corrimiento de quiz deshecho** (hallazgo 1). Cada quiz volvió a su lección: `conocimiento-espiritual-1` recuperó el suyo (Uchtdorf, Nelson, 1 Nefi 3:7 y 1 Nefi 9:5–6) y pasó de **0 a 7 preguntas**; `aprender-por-fe` recibió el que le corresponde (Nelson sobre el esfuerzo, Bednar, Éter 12:6, 2 Nefi 28:30). El quiz propio de `aprender-espiritu` **no existía en el curso y se generó** (7 × 4, solo con material de esa lección: sus 4 escrituras y sus citas de Rasband y Nelson; correcta más larga 0/7; nombres Ignacio y Julieta, los menos usados del curso). Antes de mover se corrieron **6 comprobaciones de la hipótesis** y las 6 dieron positivo. Las tres lecciones quedan con **0 líderes huérfanos** (eran 3 de las 16). Se eliminó además una pregunta rota del cuestionario de `aprender-espiritu` que hablaba de «la de Lamanita», un personaje que no existe, y se la reemplazó por la pregunta de escudriñar que a esa lección le faltaba. `questionCount` sincronizado en el manifiesto. |

| 7-sep-2026 | dd-1-nefi-3-7, dd-2-nefi-26-33, dd-2-nefi-28-30, dd-mosiah-2-41, dd-mosiah-4-9 | B | 63/78 (81 %) → **68/78 (87 %)** | 6/78 (8 %) → **11/78 (14 %)** | Las 5 de *Dominio de la Doctrina* de la cola `SIN CRISTO`, el tipo que la skill marca como el que más se aleja de Él. Sustancia 33 → 38, orar 19 → 24: **+5 exacto en las cuatro columnas.** Vías, según la regla del tipo («decí qué revela ese pasaje sobre quién es Jesucristo»): **el «iré y haré» original es Suyo** (dd-1-nefi-3-7 — Moisés 4:2, el Hijo Amado diciendo «hágase tu voluntad» antes de que existiera el mundo), **el «él» que a nadie desecha es Cristo** (dd-2-nefi-26-33 — está dentro del propio versículo de dominio, y Él lo repite con Su voz en 3 Nefi 9:14), **Él mismo recibió gracia sobre gracia** (dd-2-nefi-28-30 — D. y C. 93:12–13 ya estaba en sus escrituras y el contexto no la usaba), **el estado bendito se hace posible por la expiación** (dd-mosiah-2-41 — Mosíah 3:19, del mismo discurso del rey Benjamín), **no solo sabe más: bajó a sufrirlo** (dd-mosiah-4-9 — Alma 7:11–12 como respuesta al «¿por qué Dios permite el sufrimiento?»). Se agregaron 4 citas de Escritura, todas descargadas con `ver-versiculo.ts`. **Se eliminaron los 2 líderes huérfanos del lote** reescribiendo las preguntas que colgaban de una cita ausente: la de `dd-2-nefi-28-30` (élder Uchtdorf) ahora se ancla en D. y C. 93:12–13 y la de `dd-mosiah-2-41` (élder Wirthlin) en D. y C. 130:20–21, dos pasajes que esas lecciones sí tienen. Tres conclusiones salieron del rango bajo (69, 78 y 68 palabras) y quedaron entre 100 y 114. Se corrigió además un typo en el cuestionario de `dd-mosiah-4-9` («confiaren» → «confiar en»). |

| 7-sep-2026 | mosiah-2-1-18, mosiah-2-19-41, mosiah-4-9-10, mosiah-9-10, palabras-mormon-mosiah-1 | B | 68/78 (87 %) → **73/78 (94 %)** | 11/78 (14 %) → **16/78 (21 %)** | Las 5 de Mosíah / rey Benjamín. Sustancia 38 → 43, orar 24 → 28 (+4: `mosiah-4-9-10` ya cumplía ese ítem). **+5 exacto en Cristo, sustancia y escudriñar.** A diferencia de los lotes anteriores, **los manuales de este lote casi no traen conexión explícita con el Salvador** (el de `mosiah-2-1-18` no lo nombra ni una vez), así que las vías salieron del propio texto de Escritura: **servir al prójimo es servirle a Él** (mosiah-2-1-18 — Mateo 25:40, el gemelo doctrinal de Mosíah 2:17, más el Rey que lavó los pies en Juan 13:14–15), **la deuda impagable la pagó Él** (mosiah-2-19-41 — Mosíah 3:17, «no se dará otro nombre», del mismo discurso), **el pueblo no creyó apretando los dientes: clamó por la sangre expiatoria de Cristo** (mosiah-4-9-10 — Mosíah 4:2–3, los versículos inmediatamente anteriores al pasaje de la lección), **«con la fuerza del Señor» y el convenio de recordarle siempre** (mosiah-9-10 — Mosíah 9:17, que es de donde el manual saca el título del capítulo, y Moroni 4:3), **la oración de Mormón era «la redención de Cristo»** (palabras-mormon-mosiah-1 — Palabras de Mormón 1:8, un versículo después de donde cortaba la lección). Se agregaron 6 citas de Escritura, todas descargadas. `mosiah-9-10` pasó de **1 a 3 escrituras** y `mosiah-2-1-18` de 2 a 3. Cuatro conclusiones salieron del rango bajo (71, 72, 70 y 85) y quedaron entre 107 y 116. **Se eliminó el líder huérfano de `mosiah-2-1-18`** (élder Monson): la pregunta 7 se reancló en la cita de la presidenta Jones, que la lección sí tiene. |

| 7-sep-2026 | estudio-escrituras, jacob-1, jacob-5-1-53, repaso-evaluacion-1, testimonio-jose-smith | B | 73/78 (94 %) → **78/78 (100 %)** | 16/78 (21 %) → **21/78 (27 %)** | **Cierre de la cola `SIN CRISTO`: no queda ninguna lección del curso sin Cristo en `contexto` o `conclusion`.** Sustancia 43 → 48, orar 28 → 33: +5 exacto en las cuatro columnas por quinta vez seguida. **Tres de las cinco son casos puros del defecto «el manual lo nombra y la lección lo borró»**: el manual de `jacob-1` se titula literalmente «Persuadir a otras personas a venir a Cristo» y la lección hablaba solo de magnificar un llamamiento; el de `jacob-5-1-53` trae una tabla de símbolos que identifica al Señor de la viña como **Jesucristo** y la lección lo llamaba «el Jardinero»; el de `estudio-escrituras` dice «Jesucristo nos ayudará a saber qué hacer si nos deleitamos en Sus palabras (2 Nefi 32:3)» y ese versículo **ya estaba entre las escrituras de la lección**, sin usar en el contexto. Las otras dos vías: **los doce pasajes del repaso apuntan al mismo lugar** (repaso-evaluacion-1 — Mosíah 3:19, «por la expiación de Cristo el Señor», que es uno de los doce), y **la portada dice para qué existe el libro** (testimonio-jose-smith — «para convencer al judío y al gentil de que Jesús es el Cristo, el Eterno Dios»). Se quitaron además dos atribuciones sin respaldo del `contexto` de `estudio-escrituras` (Thomas S. Monson y Julie B. Beck, ninguno de los dos en su `enseñanza`), y **se eliminó el último líder huérfano del lote** reescribiendo la pregunta 4 de `testimonio-jose-smith` (presidente Oaks), que además tenía dos distractores de descarte fácil («Que Dios abandona a Sus siervos»). |

**Estado de `libro-de-mormon-1` al cerrar la cola:** Cristo **78/78 (100 %)**, sustancia 48/78, orar 33/78, escudriñar 21/78. Quedan la lista `SOLO NOMBRADO` y los frentes de forma (ver la tabla de hallazgos abajo). En 5 lotes de 5 lecciones el curso pasó de 74 % a 100 % en la columna principal, con **+5 exacto en los cinco lotes**, sin un solo caso en que el número no se moviera.

| 7-sep-2026 | **las 45 que faltaban** (lotes 6, 7 y 8, de 15 cada uno) | frente de «orar/meditar/anotar» | 78/78 — | 21/78 → **22/78** | **Frente cerrado: orar/meditar/anotar pasa de 33/78 (42 %) a 78/78 (100 %).** Se reemplazó una sola pregunta por lección —la 6, o la 5 cuando la 6 llevaba la conexión con Cristo y no convenía perderla—, cada una anclada al contenido de su propia lección (por ejemplo, `repaso-dd-1` usa que 2 Nefi 32:8–9 manda «orar siempre» y propone probarlo literal; `mosiah-21-24-p1` pide escribir la carga «tal cual es, sin arreglarla» y orar con el papel delante). **El riesgo de este frente no era el volumen sino la muletilla** (filas 1 a 4 del catálogo): 45 preguntas seguidas del mismo molde. Se controló de dos maneras: contando las aperturas dentro de cada lote (ninguna más de 3 veces sobre 15) y, al terminar, corriendo un cruce de solapamiento de vocabulario entre las 156 preguntas 5 y 6 del curso. **El cruce encontró 4 pares casi idénticos y 3 los había escrito yo**, en lotes distintos: tres lecciones con el molde «Preguntale al Padre Celestial esta semana… y anotá…» (`dd-2-nefi-26-33`, `mosiah-2-1-18`, `mosiah-11-17-intro`) y dos preguntas prácticamente iguales sobre abrir las Escrituras buscando a Cristo (`estudio-escrituras`, `palabras-mormon-mosiah-1`). Se reescribieron tres y el cruce bajó a 1 par, que es incidental (comparte vocabulario común, no la forma). **Contar aperturas por lote no alcanzó: el molde se repite entre lotes, donde no se ve.** |

| 7-sep-2026 | **las 56 que faltaban** (lotes 9, 10 y 11) | frente de escudriñar | 78/78 — | 22/78 (28 %) → **78/78 (100 %)** | **Frente cerrado: la pregunta de escudriñar pasa de 28 % a 78/78 (100 %).** Es el segundo curso del proyecto que la cierra, después de `antiguo-testamento-2`. Se reemplazó la pregunta 3 de cada lección. **Para no inventar qué dice cada versículo se usó el `texto` ya guardado en el bloque `escrituras` de la propia lección**, que es material verificado y no exige salir a la red: cada pregunta apunta a un detalle real del pasaje (en `mosiah-14-16` pide contar cuántas veces aparece «nuestro» en Mosíah 14:5; en `mosiah-21-24-p1` pregunta si el Señor prometió sacar la carga o algo distinto, que es exactamente el punto de Mosíah 24:14; en `dd-mosiah-2-17` pregunta qué cambiaría el versículo si no estuviera la palabra «solo»). El verbo de lectura se rotó entre las cinco formas que el detector acepta (`volvé a leer`, `releé`, `leé`, `buscá en`, `fijate en`), ninguna más de 5 veces por lote de 19. **El cruce de solapamiento volvió a encontrar el mismo problema que en el frente anterior**: un par casi idéntico (`adquirir-conocimiento-4` ↔ `aprender-por-fe`, 0,75), escrito en dos lotes distintos con el molde «…prestá atención al orden que propone: qué va primero…». Se reescribió y el cruce quedó en **0 pares**. Es la segunda vez en la misma sesión que el molde se repite entre lotes y no dentro de uno: **el control por lote no sirve para este defecto, el cruce final sí.** |

| 7-sep-2026 | 38 lecciones (lotes 12 a 15) | frentes de contenido | 78/78 — | 78/78 — | **Cuatro frentes cerrados de una vez: sustancia 60→78/78, conclusión ≥80 palabras 53→78/78, al menos 3 escrituras 69→78/78, líderes huérfanos 67→78/78.** Se trabajó **agrupando por lección y no por frente**: 17 lecciones necesitaban dos o tres arreglos a la vez, así que se abrió cada archivo una sola vez. Se agregaron 14 citas de Escritura (todas descargadas con `ver-versiculo.ts`) y se reescribieron 20 preguntas de quiz que colgaban de un líder ausente de su lección — entre ellas 4 de `dd-2-nefi-2-25`, que no tiene sección `enseñanza` y aun así citaba a Nelson y a Bednar en cuatro de sus siete preguntas. Se quitaron además dos atribuciones sin respaldo del `contexto` de `estudio-escrituras` (Monson y Julie B. Beck) y una del cuestionario de `introduccion-libro-mormon` (Stevenson), conservando el dato y sacando la atribución. ⚠️ **Una regresión propia, detectada por el script y no por mí:** al reescribir la conclusión de `jacob-7` en el lote 12 le saqué el nombre de Cristo, y la lección volvió a la cola `SIN CRISTO` después de haber estado cerrada. La causa fue que el chequeo de ese lote verificaba la *sustancia* (`SUST`) pero no el *nombre* (`NOMBRE`), que son dos regex distintas del mismo script. Se corrigió en el lote 14, que ya verifica las dos. **Lección: al reescribir contenido que ya pasó una auditoría, el chequeo de salida tiene que cubrir todo lo que la lección cumplía antes, no solo lo que se venía a arreglar.** |

| 7-sep-2026 | **las 13 sin material** (lotes A1 a A4) | **frente A — generación desde cero** | 78/78 → **91/91** | 78/78 → **91/91** | **Frente A cerrado: las 91 lecciones del curso tienen material de estudio.** Eran 13 lecciones que tenían quiz pero `secciones: []`, es decir que el alumno rendía sobre doctrina que el sitio nunca le había enseñado. Se generaron completas —contexto, escrituras, enseñanza, conclusión y cuestionario— con el manual delante y **todas cumplen los cuatro ítems doctrinales desde el primer intento de escritura**, porque el chequeo de salida se corrió en seco antes de aplicar. Bloques: Alma 29–31 (5), 2 Nefi 31–32 (5, la doctrina de Cristo) y Alma 23 / Alma 26 / Evalúa 5 (3). Se agregaron **46 citas de Escritura**, todas descargadas con `ver-versiculo.ts`, y **9 citas de líder**, todas tomadas del manual de su propia lección. ⚠️ **Dos links de discurso que el manual cita no existían con el slug esperado**: `2019/04/come-follow-me` y `2021/10/the-daily-restoration` devolvieron el índice de la conferencia con HTTP 200 —el defecto exacto de la fila 17 del catálogo—. Los slugs reales resultaron ser `46nelson` y `41uchtdorf`, y se encontraron parseando el índice que el propio sitio devolvió. **Los 9 links se verificaron uno por uno contra la API antes de escribirlos**, comparando el título devuelto con el que cita el manual. Para `alma-23` el manual solo parafrasea a Bednar, así que se descargó el discurso real y se tomó un párrafo textual con su ancla `#p33`, en vez de citar la paráfrasis. Se sincronizaron además **13 `hasStudy` en el manifiesto**: al pasar de `secciones: []` a tener material, `validate-content.ts` saltó de 1 a 14 problemas hasta que se actualizó el flag. |

| 7-sep-2026 | las 104 citas de líder del curso | anclas `#pN` (fila 16) | — | — | **Anclas cerradas: 104 citas, 0 sin `#pN`.** `fix-anclas-citas.ts --write` resolvió 9 de las 10 que faltaban con recall 1.00; la décima (Maxwell en `alma-29`) quedó sin escribir porque **la primera corrida murió con un error de escritura de OneDrive** (`UNKNOWN, errno -4094`, archivo bloqueado por sincronización) y en el reintento el script ya la daba por hecha. Se escribió a mano tras localizar el párrafo `p6` en el discurso. ⚠️ Vale la pena registrar el modo de falla: **un script que escribe archivo por archivo puede morir a mitad de camino sobre OneDrive y dejar el trabajo incompleto sin que el resumen final lo diga.** Se verificó que ningún JSON quedara corrupto (93 archivos parseados) antes de reintentar. |

| 7-sep-2026 | 18 lecciones (tandas de quiz 1 a 3) | sesgo de longitud del quiz | — | — | **Frente abierto y NO cerrado.** El curso pasó de **488/637 (77 %)** a **400/637 (63 %)** de preguntas con la correcta como opción más larga, y de 87 a **69 lecciones** por encima del umbral de 2 por lección. Se corrigieron 126 preguntas en 18 lecciones (las 17 que estaban en 7/7 más una). **Quedan 69 lecciones sin tocar** — ver la sección de pendientes. ⚠️ **El primer intento fue un error y conviene que quede escrito:** recorté las 42 correctas del primer lote todo lo posible y el resultado fue 0 % de correctas más largas… pero **52 % de correctas más cortas**. Es el mismo defecto con el signo invertido: el alumno aprendería «elegí la más corta». Lo detectó el chequeo de salida porque medía **las dos direcciones**, no solo la que nombra el catálogo. El criterio que quedó: la correcta se lleva a la **2ª o 3ª posición** de longitud, apuntando al punto medio entre el primer y el segundo distractor; se arreglan las de margen grande y se dejan hasta 2 por lección, eligiendo las de **margen de 1 o 2 caracteres**, que son invisibles a ojo y por lo tanto no explotables. Dato del oficio: en muchas preguntas los cuatro distractores caben en 3 o 4 caracteres, así que la ventana donde meter la correcta es de 2 caracteres o directamente no existe; cuando no existe, el único arreglo real es **alargar un distractor**, que exige leer la pregunta entera y escribir una condición plausible. |

## Hallazgos de auditoría del curso (7-sep-2026)
### 5. `audit-links-citas.ts` da falso positivo en páginas de manual — **nuevo**

El script reporta **3 links que «no resuelven a un discurso»** en este curso: la cita de Benson en
`alma-4`, la de Holland en `alma-7-1-13` y la de Wirthlin en `mosiah-18`. **Las tres son correctas.**
Se verificó cada URI contra la API y las tres devuelven exactamente la página que piden, con el
título que corresponde a la cita:

| Cita | URI | Título devuelto |
|---|---|---|
| Benson, «El poder de la palabra» | `…ezra-taft-benson/chapter-8-the-power-of-the-word` | «Capítulo 8: El poder de la palabra» ✓ |
| Holland (libro, citado por el manual) | `…24-alma-5-7/243-teacher` | «Alma 7:1–13: A fin de que pueda socorrer a los de Su pueblo» ✓ |
| Wirthlin (libro, citado por el manual) | `…21-mosiah-18-24/211-teacher` | «Mosíah 18: El convenio bautismal» ✓ |

La causa: el script compara el `canonical` devuelto contra el slug pedido, y **las páginas de manual
no traen `canonical`** (a diferencia de los discursos de conferencia). Con el campo vacío, la
comparación falla y el script inventa un destino de redirección. Las tres citas afectadas son
justamente las que apuntan a una página de manual y no a un discurso, que es la práctica que la
propia skill recomienda para libros impresos y discursos sin versión en español.

**Es el tercer defecto de instrumento de la sesión**, después del falso positivo de
`audit-chapterurls.ts` (hallazgo del punto de partida) y del detector de líderes huérfanos que
necesitó tres pasadas. La regla que sale de las tres: *antes de corregir contenido por lo que dice
un script, verificá a mano uno de los casos que reporta.*



Medidos con un cruce, no estimados. Ninguno está corregido todavía salvo donde se indica.

### 1. Quiz corrido una posición entre lecciones vecinas (semana 1) — **CORREGIDO el 7-sep-2026**

Tres lecciones consecutivas del manifiesto tienen el quiz de la lección siguiente:

| Posición (semana 1) | Lección | Quiz que tiene hoy | A quién pertenece |
|---:|---|---|---|
| 0 | `plan-de-salvacion` | el suyo ✓ | — |
| 1 | `estudio-escrituras` | el suyo ✓ | — |
| 2 | `aprender-espiritu` | Nelson «el Señor ama el esfuerzo», Bednar, Éter 12:6, 2 Nefi 28:30 | **`aprender-por-fe`** |
| 3 | `aprender-por-fe` | Uchtdorf «dudar de las dudas», Nelson «deseo de creer», 1 Nefi 3:7, 1 Nefi 9:5–6 | **`conocimiento-espiritual-1`** |
| 4 | `conocimiento-espiritual-1` | **ninguno** (`questionCount: 0`) | — |

La prueba no es de estilo sino de contenido: el quiz que hoy está en `aprender-por-fe` pregunta por
las dos citas de líder de `conocimiento-espiritual-1` (Uchtdorf, «Vengan, únanse a nosotros»;
Nelson, «Cristo ha resucitado») y por dos de sus cuatro escrituras (1 Nefi 3:7 y 1 Nefi 9:5–6),
ninguna de las cuales aparece en `aprender-por-fe`. Ídem hacia arriba.

**Consecuencia para el alumno:** en dos lecciones el quiz mide contenido que la lección nunca
enseñó, y una tercera no tiene evaluación. La corrección es mecánica y reversible (mover el array
`questions` una posición, sincronizar `questionCount`), salvo el quiz propio de `aprender-espiritu`,
que **no existe en ningún archivo del curso** y hay que generar.

### 2. Líderes huérfanos en `cuestionario`/`questions` (fila 12 del catálogo)

**16 lecciones de 78**, 22 menciones. Seis de ellas son de *Dominio de la Doctrina* o *repaso* y no
tienen sección `enseñanza` por diseño, así que el alumno no tiene de dónde sacar la respuesta:
`dd-2-nefi-2-25` (Nelson, Bednar), `dd-2-nefi-2-27` (Maxwell), `dd-2-nefi-28-30` (Uchtdorf),
`dd-mosiah-2-17` (Romney, Uchtdorf), `dd-mosiah-2-41` (Wirthlin), `repaso-dd-1` (Scott,
Christofferson). Las 10 restantes citan a un líder distinto del que sí está en su `enseñanza`.
**Parte de este número lo resuelve el hallazgo 1**: los huérfanos de `aprender-por-fe`,
`aprender-espiritu` y `conocimiento-espiritual-2` desaparecen al devolver cada quiz a su lección.

⚠️ **Al medirlo, el detector falló dos veces antes de dar el número bueno** (27 → 10 → 22): primero
cortaba el nombre de pila («presidente Russell» por «Russell M. Nelson»), y la corrección introdujo
un falso negativo propio, porque `[ÉE]lder` no matchea «élder» en minúscula. Es exactamente la
advertencia de la fila 25: escribile casos de prueba al detector antes de creerle el número.

### 3. Sesgo del quiz, medido sobre las 539 preguntas del curso

- ~~**Posición de la respuesta correcta:** el 57 % en la posición 1~~ — **RESUELTO el 7-sep-2026**, por
  decisión del usuario de correrlo sobre el curso entero: `audit-distribucion-respuestas.ts
  libro-de-mormon-1 --write` rotó **490 de las 637 preguntas** y el curso pasó de
  `0:15 % 1:56 % 2:16 % 3:13 % ⚠ adivinable` a **`0:24 % 1:25 % 2:26 % 3:25 % ✓`**. Solo rota el orden
  de `options` y reindexa: no cambió un carácter de texto.
- **La correcta es la opción más larga: 431/539 (80 %)**, contra el 25 % que daría el azar. Es la
  fila 23 del catálogo y está en línea con el 83 % del proyecto. Esto **no** se corrige con un script:
  exige reescribir.
- Quiz fuera de la spec 7 × 4: **ninguno**. El curso no tiene el defecto de la fila 24.

### 4. Completitud, sobre las 78 de convención clásica

- **32 lecciones con `conclusion` de menos de 80 palabras** (mínimo de la spec). Ninguna ausente.
- **13 lecciones con menos de 3 escrituras**, cuatro de ellas con una sola.
- `validate-content.ts` reporta un único problema en todo el proyecto, y es **preexistente y ajeno al
  contenido**: `libro-de-mormon-1/_auditoria-snapshot-original.json` («Expected object, received
  array»). Es el registro histórico de una auditoría manual anterior, con prefijo `_`; el validador
  no lo excluye como excluye a `_manifest.json`. No se tocó: la skill pide no borrar esos archivos.

---

## Estado final del curso (7-sep-2026)

Medido con los scripts del proyecto al cerrar la sesión. **91 lecciones, 637 preguntas de quiz.**

### Cerrado — 11 frentes

| Frente | Al empezar | Al cerrar |
|---|---|---|
| Lecciones con material de estudio | 78/91 | **91/91** |
| Cristo en `contexto` o `conclusion` | 58/78 (74 %) | **91/91 (100 %)** |
| Pregunta que invita a orar/meditar/anotar | 15/78 (19 %) | **91/91 (100 %)** |
| Pregunta de escudriñar | 0/78 (0 %) | **91/91 (100 %)** |
| Dice algo sobre Él (lista `SOLO NOMBRADO`) | 18 pendientes | **0** |
| `conclusion` de 80 a 130 palabras | 46/78 | **91/91** |
| Al menos 3 citas de Escritura | 65/78 | **91/91** |
| Sin líderes huérfanos en `cuestionario`/`questions` | 62/78 | **91/91** |
| Citas de líder con ancla `#pN` | 94/104 | **104/104** |
| Corrimiento de quiz entre lecciones | 3 lecciones rotas | **0** |
| Sesgo de posición de la respuesta correcta | 56 % en la posición 1 | **0:23 · 1:26 · 2:25 · 3:25 ✓** |
| `chapterUrl` que no existen | nunca barrido | **0 de 91** |

`audit-completitud.ts` da el curso limpio en forma: contexto 91/91 en rango, conclusión 91/91 en
rango, cuestionario 91/91 con seis preguntas, quiz 91/91 con siete.

### Pendiente — 1 frente

**Sesgo de longitud del quiz: 400 de 637 preguntas (63 %) todavía tienen la correcta como opción
más larga, repartidas en 69 lecciones.** Se avanzó de 77 % a 63 % corrigiendo 126 preguntas en 18
lecciones; el resto quedó sin tocar por decisión del usuario al cerrar la sesión.

Para retomarlo, lo que hay que saber está en la fila de la tabla de sesiones de arriba. En resumen:

1. El objetivo **no es 0 %**, es acercarse al 25 % que daría el azar. Bajarlo a 0 crea el defecto
   espejo, que se midió en 52 % en el primer intento.
2. Se arreglan hasta 5 de 7 por lección y se dejan las de **margen de 1 o 2 caracteres**.
3. Conviene pedir la **ventana exacta** `[menor distractor + 1, mayor distractor − 1]` antes de
   redactar: estimarla a ojo cuesta una pasada extra de ajuste por lote.
4. El orden por gravedad ya está calculado: quedaban 15 lecciones en 6/7, 20 en 5/7, 14 en 4/7 y
   3 en 3/7 al momento de cerrar.

### Salvedades que no son defectos del contenido

- `validate-content.ts` reporta **1 problema en todo el proyecto** y es preexistente y ajeno:
  `libro-de-mormon-1/_auditoria-snapshot-original.json` («Expected object, received array»). Es el
  registro histórico de una auditoría manual anterior; el validador no lo excluye como excluye a
  `_manifest.json`. No se tocó: la skill pide no borrar esos archivos.
- `audit-links-citas.ts` reporta **3 links que «no resuelven»** y los tres son correctos — es un
  falso positivo del script sobre páginas de manual, verificado uno por uno contra la API. Ver el
  punto 5 de los hallazgos.

---

# Sesión del 8-sep-2026 — cierre del frente de quiz

Sesión paralela: otra trabajaba `antiguo-testamento-1` y `-2` sobre el mismo árbol. Acá solo se tocó
`lib/content/libro-de-mormon-1/` y `-2/`.

## Punto de partida, medido de nuevo (no leído de esta bitácora)

Las herramientas de la sesión de DyC-2 se copiaron al scratchpad propio y **se revalidaron antes de
usarlas**: los 11 casos de prueba de `test-inv.js` pasan sobre este curso.

```
=== libro-de-mormon-1 — 91 lecciones del manifiesto, 637 preguntas ===
Los 8 frentes doctrinales:        91/91   <- confirmados, no se rompieron
Barrido estructural (9 chequeos): todo en cero
Escrituras:                       308 OK + 1 AUTO_CORREGIBLE
Citas de líder con ancla:         104/104
Quiz con <= 2 «correcta más larga»: 22/91  (400/637 preguntas, 63 %)
```

**El ranking completo de las cuatro posiciones, que el cierre del 7-sep nunca midió:**

| Posición de la correcta por longitud | Preguntas | % | Azar |
|---|---:|---:|---:|
| 1ª (la más larga) | 400 | **63 %** | 25 % |
| 2ª | 101 | 16 % | 25 % |
| 3ª | 74 | 12 % | 25 % |
| 4ª (la más corta) | 62 | 10 % | 25 % |

## Los once bloques

Método por bloque: volcar solo las preguntas defectuosas con su ventana (`mal.js`), escribir varios
candidatos por pregunta, dejar que `elegir.js` elija el que cae dentro de la ventana de los
distractores, aplicar con `patch.js` (falla en bloque, reintenta la escritura por OneDrive), y medir
**todos** los frentes al cerrar, no solo el que se vino a arreglar.

| Bloque | Lecciones | «Más larga» al cerrar | Lecciones sobre el tope |
|---|---|---:|---:|
| — | (inicio) | 400 (63 %) | 69/91 |
| 1 | `mosiah-11-17-intro`, `palabras-mormon-mosiah-1`, `portada-libro-mormon`, `repaso-dd-9-10`, `testimonio-jose-smith` | 365 (57 %) | 64 |
| 2 | `alma-17`, `-18`, `-19`, `alma-2-3`, `alma-23`, `alma-30-1-29` | 330 (52 %) | 59 |
| 3 | `alma-30-30-60`, `alma-31-1-11`, `alma-5-1-32`, `conocimiento-espiritual-2`, `dd-1-nefi-3-7`, `dd-mosiah-18-8-10` | 294 (46 %) | 53 |
| 4 | `dd-mosiah-2-41`, `introduccion-libro-mormon`, `jacob-1`, `jacob-4`, `mosiah-18`, `mosiah-19-20` | 258 (41 %) | 47 |
| 5 | `testigos-libro-mormon`, `repaso-evaluacion-1`, `mosiah-3-1-17`, `repaso-dd-2`, `repaso-dd-4`, `repaso-dd-7-8` | 222 (35 %) | 41 |
| 6 | `mosiah-27-24-37`, `mosiah-2-19-41`, `mosiah-21-24-p2`, `repaso-dd-5-6`, `repaso-dd-11-12`, `repaso-dd-1` | 189 (30 %) | 35 |
| 7 | `mosiah-5-1-5`, `mosiah-4-9-10`, `mosiah-3-19`, `mosiah-28`, `mosiah-2-1-18`, `jacob-7` | 159 (25 %) | 29 |
| 8 | `jacob-5-1-53`, `dd-2-nefi-32-8-9`, `dd-2-nefi-32-3`, `dd-2-nefi-28-30`, `dd-2-nefi-26-33`, `alma-7-1-13` | 129 (20 %) | 23 |
| 9 | `alma-4`, `alma-31-12-38`, `alma-26`, `alma-1-1-18`, `1-nefi-3`, `plan-de-salvacion` | 100 (16 %) | 17 |
| 10 | `mosiah-9-10`, `mosiah-5-6-15`, `mosiah-27-1-24`, `mosiah-26`, `mosiah-14-16`, `dd-mosiah-3-19` | 76 (12 %) | 11 |
| 11 | las 11 restantes | **41 (6 %)** | **0** |

## ⚠️ El error de método que costó una pasada global entera

**Cerrar la fila 23 sin mirar las otras dos posiciones construyó un sesgo nuevo, más fuerte que el
que se venía a corregir.** Al terminar el bloque 11 el curso estaba así:

| Posición | Inicio | Tras el bloque 11 |
|---|---:|---:|
| 1ª (más larga) | 63 % | **6 %** |
| 2ª | 16 % | **49 %** |
| 3ª | 12 % | 35 % |
| 4ª (más corta) | 10 % | 9 % |
| **Mejor heurística de una sola posición** | **63 %** | **49 %** |

La causa es concreta y reproducible: `elegir.js` toma `textos.find(t => t.length > min && t.length <
max)`, o sea **el primer candidato válido de la lista**. Escribiendo los candidatos de más largo a
más corto, elige siempre el más largo de los válidos, que cae pegado al distractor mayor: **posición
2**. Invertir el orden de los candidatos (probado en el bloque 8) movió masa de la 1ª a la 3ª pero
**la 2ª siguió subiendo**.

**La regla que sale de acá, y que hay que aplicar desde el primer bloque, no al final:** el objetivo
no es minimizar la 1ª posición, es **repartir**. Bajar la 1ª por debajo del 25 % del azar es tan
explotable como dejarla arriba, solo que la heurística cambia de «elegí la más larga» a «descartá la
más larga y elegí la segunda». La forma buscada es la que logró `antiguo-testamento-1`: **26/34/27/13**.

## La pasada global de rebalanceo

Objetivo: subir la 1ª y la 4ª a costa de la 2ª. **164 operaciones, todas sobre distractores.**

| Paso | Ops |
|---|---:|
| `rebalance.js` ronda 1 (objetivo 130 por lado) | 59 |
| `rebalance.js` ronda 2 | 2 — diccionario agotado |
| Micro-ajustes a mano hacia la 1ª (recortar **un** distractor) | 64 |
| Micro-ajustes a mano hacia la 4ª (alargar **un** distractor) | 28 |
| Tope de 2 por lección y dirección, a mano | 11 |

Estado final del ranking:

| Posición | Inicio | Bloque 11 | **Final** | AT-1 | DyC-2 | Azar |
|---|---:|---:|---:|---:|---:|---:|
| 1ª | 63 % | 6 % | **18 %** | 26 % | 16 % | 25 % |
| 2ª | 16 % | 49 % | **36 %** | 34 % | 33 % | 25 % |
| 3ª | 12 % | 35 % | **30 %** | 27 % | 40 % | 25 % |
| 4ª | 10 % | 9 % | **18 %** | 13 % | 14 % | 25 % |
| **Mejor heurística** | **63 %** | 49 % | **36 %** | 34 % | 36 % | 25 % |

Queda un residuo de 11 puntos sobre el azar, el mismo que documentó DyC-2 y por la misma causa: el
diccionario de sustituciones seguras se agota y bajar más exige reescribir opciones con criterio.

## ⚠️ El instrumento falló tres veces, y las tres se descubrieron verificando a mano

Es la fila 25 del catálogo por cuarta vez en el proyecto. Ninguna de las tres la habría encontrado
un chequeo de longitudes.

### 1. Diecinueve pares del diccionario de `rebalance.js` rompen el español

Detectados revisando **la salida en contexto** antes de aplicar. El chequeo de longitudes daba ✓
mientras el español se rompía — fila 31 exacta.

| Par | Cómo rompe |
|---|---|
| `todos` → `la totalidad de` | «Que **la totalidad de** serían salvos», «Que **la totalidad de** apuntan al mismo tema» (falla cuando «todos» es pronombre, funciona cuando es determinante) |
| `sobre todo` → `principalmente` | «Ser rey **principalmente** el pueblo de los nefitas» (de «sobre todo el pueblo») |
| `uno` → `una persona` | «no de **una persona** mismo», «Que cada **una persona** necesita» |
| `puede` → `es capaz de` | «la fe genuina **no es capaz de** imponerse», «como la Biblia sola **no es capaz de**» (truncado) |
| `siempre` → `en todos los casos` | «orar **en todos los casos**» — rompe una frase tomada de 2 Nefi 32:9 |
| `siempre` → `necesariamente` | «Debemos recordarlo **necesariamente**» |
| `aunque` → `no obstante` | «defender la verdad **no obstante** traiga consecuencias» |
| `pero` → `sin embargo` | «Únicamente sabiduría, **sin embargo** con poder limitado» |
| `hacer` → `efectuar` / `realizar` | «nunca podremos **efectuar** suficiente» |
| `así` → `de esa manera` | «inventar **algo de esa manera**» |
| `igual` → `de todos modos` | «lo ve **de todos modos que** a todos los demás» |
| `personas` → `gente` | «solo para **gente que no tienen** acceso» (rompe concordancia) |
| `otras personas` → `otros` | «**otras personas profetas**», «las **demás personas nefitas**» |
| `algo` → `en cierta medida` | «queda como **en cierta medida** opcional» |
| `cómo` → `de qué modo` | «independientemente **de de qué modo** se use» |
| `solo` → `nada más` | «no **nada más** físicas» |
| `pide` → `requiere` | «se le **requiere** a Él» |
| `ahora` → `en este momento` | «hasta **en este momento**» |
| `llevar a cabo` → `hacer` | mismo problema que `efectuar` |

**Los 19 están sacados de `rebalance.js` y `pares.js` en el scratchpad de esta sesión.** Si se copian
esas herramientas desde una sesión anterior, hay que volver a sacarlos.

### 2. `rebalance.js` edita opciones correctas, contra lo que declara su propia cabecera

La cabecera dice «NO se toca el texto de ninguna opción correcta», pero tiene dos ramas que sí lo
hacen (cuando no alcanza con acortar distractores). **48 de las 132 operaciones de la primera corrida
tocaban correctas, y ~40 % de esas rompían el texto** — muy por encima del 9 % que midió DyC-2.

**Decisión tomada: filtrar todas las operaciones que tocan la correcta.** En este proyecto una
opción correcta mal editada es el peor defecto posible: es la respuesta oficial. El filtro cuesta
alcance (132 → 76 ops) y se compensa con micro-ajustes a mano.

### 3. El primer detector de artefactos daba cientos de falsos positivos

Reportaba «espacio antes de puntuación» en textos que no lo tenían. Se verificó **un caso puntual
aislando la regex** y no coincidía. Reescrito con **14 patrones y 20 casos de prueba (14 positivos +
6 negativos)**, con lookarounds sobre una clase explícita de letras españolas (el `\b` de JS no cierra
sobre vocales acentuadas). Los 20 pasan. Barrido final: **0 artefactos** en LdM-1 y en LdM-2.

## Defectos de contenido encontrados leyendo, que ningún script detecta

Sobre 637 preguntas, **5 casos reales** (0,8 %). El resto del trabajo fue sesgo, no contenido roto.

### 1. Tres `correctAnswer` apuntando a un distractor (fila 15)

Los tres daban por respuesta oficial algo **falso**:

| Lección | Respuesta que estaba marcada como correcta |
|---|---|
| `mosiah-7-8` Q7 | «No tienen ninguna relación entre sí» — el don de vidente y volverse al Señor |
| `mosiah-27-24-37` Q5 | «Que su testimonio heredado ya es completamente válido» |
| `mosiah-27-1-24` Q6 | «Que solo algunas personas pueden realmente cambiar» |

El tercero es el más grave: la pregunta es de un alumno que se pregunta si puede cambiar después de
haber hecho daño, y la respuesta oficial le decía que no. **En AT-1 este defecto fue del 19 %; acá
del 0,5 %, pero los tres casos enseñaban algo falso.**

⚠️ **Un detector barato para un subconjunto:** cruzar si la opción marcada como correcta es una
muletilla o una negación genérica. Encontró 1 de los 3 en segundos.

### 2. Un quiz que no era de su lección (fila 26, variante)

`repaso-dd-9-10` enseña Mosíah 26:22, 5:2 y 18:8–10, y su quiz preguntaba por «memorizar vs. dominar»
en abstracto y por **Alma 7:11-13**, que la lección no tiene. No era un corrimiento como el de la
semana 1: era un quiz genérico de relleno. **Se reescribió entero**, anclado a sus tres pasajes, con
las posiciones de `correctAnswer` repartidas (2,0,3,1,2,0,3) y nombres sin usar en el curso
(Agustina, Facundo).

### 3. Un enunciado que cita el versículo equivocado

`alma-5-1-32` Q2 ubicaba «¿Podéis imaginaros oír la voz del Señor… Venid a mí?» en **Alma 5:19**.
Verificado con `ver-versiculo.ts`: ese texto es **Alma 5:16**; el 19 es «¿Podréis mirar a Dios en
aquel día con un corazón puro?». La propia Q7 de esa lección ya decía «v.16», así que la lección se
contradecía a sí misma. Corregido.

## Estado final del curso (8-sep-2026)

| Chequeo | Resultado |
|---|---|
| Los 8 frentes doctrinales (inventario propio) | **91/91** |
| `audit-doctrinal.ts` | Cristo 91/91 · orar 91/91 · escudriñar 91/91 |
| Barrido estructural (9 chequeos) | **todo en cero** |
| Barrido de artefactos (14 patrones, 20 casos de prueba) | **0** |
| `audit-completitud.ts` | contexto 91/91 · conclusión 91/91 · cuestionario 91/91 con 6 · quiz 91/91 con 7 |
| `audit-escrituras.ts` | **308 OK + 1 `AUTO_CORREGIBLE`** de 309 |
| `audit-autores-quiz.ts` | **0 atribuciones sin respaldo** |
| `audit-distribucion-respuestas.ts` | `0:23 · 1:26 · 2:26 · 3:25` ✓ (no se movió: se editó texto, no orden) |
| Quiz con ≤ 2 «correcta más larga» | **90/91**; la restante es un **empate**, no un margen explotable |
| `validate-content.ts` | 1 problema, preexistente y ajeno (`_auditoria-snapshot-original.json`) |

## Pendientes de este curso

| Frente | Alcance medido | Nota |
|---|---:|---|
| Distractores muletilla | **19 opciones / 19 lecciones** | 12 son «no tiene ninguna relación», 7 negaciones de descarte fácil. Eran 46 en 41 lecciones al empezar |
| Preguntas casi duplicadas dentro del mismo quiz | **9 pares** | Jaccard ≥ 0.55 en enunciado y ≥ 0.45 en la correcta. El peor: `repaso-dd-5-6` Q3↔Q5 con la correcta idéntica (1.00). ⚠️ El par `alma-30-30-60` Q1↔Q6 **empeoró en esta sesión**: al unificar las longitudes las dos correctas quedaron casi iguales |
| Quiz que cita un capítulo ajeno a su lección | **13 preguntas** | 10 son `repaso-dd-*` que preguntan por pasajes de dominio que su propio bloque `escrituras` no contiene: el alumno que estudia solo esa lección no puede responder. 1 es falso positivo del detector («Palabras de Mormón 1» matchea como «Mormón 1») |

## Herramientas dejadas en el scratchpad de esta sesión

Además de las heredadas de DyC-2 (`inv.js`, `test-inv.js`, `evaluar.js`, `patch.js`, `elegir.js`,
`rebalance.js`, `rebal-tope.js`, `pares.js`, `cruce.js`, `muletilla.js`, `verif-anclas.js`,
`manual.js`, `ver.js`, `chk-md.js`):

| Archivo | Qué hace |
|---|---|
| `rank.js <curso>` | ranking de las **cuatro** posiciones de longitud + mejor heurística + lecciones sobre el tope |
| `mal.js <curso> <ids...>` | vuelca **solo** las preguntas defectuosas con su ventana — es lo que abarata cada bloque |
| `lens.js <archivo.json>` | mide el largo exacto de una lista de candidatos; estimar a ojo cuesta una pasada extra por lote |
| `artefactos.js <curso>` · `--test` | barrido de 14 patrones agramaticales, con 20 casos de prueba propios |
| `micro.js <curso> arriba\|abajo <coste> <n>` | candidatas más baratas para mover una correcta a la 1ª o la 4ª, respetando el cupo por lección |
| `plan-rank.js <curso>` | dimensiona cuánto falta para 25/25/25/25 y cuántas candidatas hay por rango de coste |
| `dup-q.js <cursos...>` | preguntas casi duplicadas dentro del mismo quiz |
| `cruce-quiz2.js <curso>` | enunciado u opción correcta que apunta a un pasaje ajeno a la lección |
| `muletillas.js <cursos...>` | distractores muletilla, marcando los que caen **en la correcta** |
| `nombres.js <curso>` | uso de cada nombre de escenario, para rotarlos |

⚠️ `rebalance.js` y `pares.js` del scratchpad de esta sesión **tienen los 19 pares inseguros ya
quitados**. Copiarlos desde una sesión anterior reintroduce el problema.
