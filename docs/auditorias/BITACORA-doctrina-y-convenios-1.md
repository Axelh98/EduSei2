# Bitácora — doctrina-y-convenios-1

Ver `BITACORA-generacion-doctrinal.md` para la línea de base del proyecto y las reglas del registro
(ese archivo es de solo lectura desde acá). Los casos de referencia son
`BITACORA-libro-de-mormon-1.md` (de donde salió el método) y `BITACORA-libro-de-mormon-2.md`
(el cierre más completo: nueve frentes simultáneos sobre 80 lecciones).

## Punto de partida (7-sep-2026), medido en esta sesión

**91 lecciones, todas con material.** Este curso no tiene frente A: `secciones: []` en cero,
convención `resumen` en cero, **0 huérfanos** (91 archivos == 91 entradas del manifiesto, cruzado
en las dos direcciones).

```
=== doctrina-y-convenios-1 (91 archivos) ===
Cristo en contexto:            33/91 (36 %)
Cristo en conclusion:          26/91 (29 %)
Cristo en alguna de las dos:   41/91 (45 %)
  ...y además dice algo de Él: 18/91 (20 %)   <- solo mide el contexto
Pregunta que invita a orar/meditar/anotar: 25/91 (27 %)
Pregunta que devuelve al pasaje:          0/91 (0 %)
```

Tipos de lección: *Doctrina y Convenios - Ven Sigueme* 53, *Preparación para la Vida* 23,
*Dominio de la Doctrina* 9, *Especial* 6.

### Los frentes medibles, todos juntos

| Frente | Cómo se mide | Inicial | Pendientes |
|---|---|---|---:|
| Cristo en `contexto` o `conclusion` | `audit-doctrinal.ts` | 41/91 (45 %) | **50** |
| Sustancia (dice algo de Él), ctx+concl | inventario por lección | 42/91 (46 %) | **49** |
| Pregunta de orar/meditar/anotar | `audit-doctrinal.ts` | 25/91 (27 %) | **66** |
| Pregunta de escudriñar | `audit-doctrinal.ts` | 0/91 (0 %) | **91** |
| Al menos 3 escrituras | inventario | 17/91 (19 %) | **74** |
| Conclusión ≥ 80 palabras | inventario | 46/91 (51 %) | **45** |
| Quiz con ≤ 2 de 7 «la correcta es la más larga» | barrido propio | 0/91 | **91** (560/637 preguntas, **88 %**) |
| Citas de líder con ancla `#pN` | barrido propio | 33/88 | **55** |
| Líderes huérfanos | inventario + `audit-autores-quiz.ts` | 91/91 | **0 — ya limpio** |
| Sesgo de posición del quiz | `audit-distribucion-respuestas.ts` | `0:25 1:24 2:26 3:25` ✓ | **0 — ya limpio** |
| `contexto` en rango 150–340 | `audit-completitud.ts` | 91/91 | 0 |
| `cuestionario` con 6 preguntas | `audit-completitud.ts` | 91/91 | 0 |
| Quiz en spec 7 × 4 | `audit-completitud.ts` + barrido | 91/91 | 0 |
| `chapterUrl` rotas | `audit-chapterurls.ts` | 0/91 | 0 |
| `correctAnswer` en rango · `questionCount` · opciones duplicadas · espacio antes de puntuación · citas superpuestas · huérfanos de manifiesto | barrido propio | todos limpios | 0 |

**Ninguna de las 91 lecciones está cerrada**: la que menos tiene pendientes necesita igual la
pregunta de escudriñar y el quiz. El frente más grande es **«al menos 3 escrituras» (74
lecciones)**, como anticipaba el promedio de 2,15 citas por lección del export del 7-sep.

### Qué se confirmó y qué no de las auditorías previas

`CALIDAD-doctrina-y-convenios-1.md` (1-sep-2026) daba el curso «cerrado en los tres tipos de
auditoría». **Se volvió a medir todo y esa parte se confirma**, con una excepción y un matiz:

- **Líderes huérfanos: confirmado en 0.** El catálogo (fila 12) ficha «37 preguntas en 33
  lecciones» como el defecto más extendido encontrado en un solo curso; ese número es de *antes*
  de la corrección. Hoy `audit-autores-quiz.ts` da 0 y el detector del inventario también.
  Los dos se validaron contra `religion-200`, donde sí hay casos (38 menciones / 20 lecciones):
  el detector discrimina, no devuelve 0 siempre.
- **Sesgo de posición: confirmado corregido.** `0:25 % 1:24 % 2:26 % 3:25 % ✓`. No hace falta
  correr `--write` en este curso.
- **Preguntas de quiz de experiencia personal (fila 11): confirmado en 0** por lectura del
  inventario; ninguna de las 637 preguntas quedó con el patrón.
- **Escrituras y citas de líder: cerradas en fidelidad**, pero el curso creció: hoy son **88**
  citas de líder (eran 80) y `extract-citas.ts` deja **1 bandera esperada**
  (`link-sin-lang-spa` en `191-importancia-educacion`, artículo que solo existe en inglés).
- **Lo que la auditoría previa nunca miró:** las anclas `#pN` (55 de 88 sin ancla), el sesgo de
  longitud del quiz (88 %), las escrituras faltantes (74 lecciones), las conclusiones cortas
  (45), y los dos frentes doctrinales nuevos del 6-sep (escudriñar y orar).

### Verificación previa de `chapterUrl`

`npx tsx scripts/audit-chapterurls.ts doctrina-y-convenios-1` → **0 rotas sobre 91**, 84
coinciden, 0 sin `chapterUrl`.

⚠️ Reportó **7 «desalineadas» y son falso positivo del script**, el mismo defecto de la fila 29
del catálogo: compara el número que el `id` trae adelante (`168-enfocarse-jc-escrituras` → 168)
contra el número que el manual le pone a esa página (169). Los slugs son correctos y del tema
correcto (`531-focusing-on-jesus-christ-in-the-scriptures` para `168-enfocarse-jc-escrituras`).
La numeración del sitio no sigue la del manual oficial en la unidad de *Preparación para la Vida*.
**La columna que vale es «rotas», y está en cero.**

### Los detectores propios, con casos de prueba

Antes de reportar un número se le escribieron **11 casos de prueba sintéticos** al barrido
estructural (`scratchpad/test-inv.js`), uno positivo y uno negativo por chequeo: `options.length`,
`correctAnswer` fuera de rango, `questionCount` desincronizado, opciones duplicadas, espacio antes
de puntuación, Dominio de la Doctrina que no cita su pasaje (con su contracaso: el que sí lo cita
dentro de un rango más ancho **no** se reporta), citas superpuestas, archivo sin manifiesto,
manifiesto sin archivo, líder huérfano y su contracaso. **Los 11 pasan.** Las regex doctrinales
(`NOMBRE`, `SUSTANCIA`, `RUIDO`, `ESPIRITU`, `INVITA_ESPIRITU`, `MANDA_AL_TEXTO`, `REFERENCIA`)
están copiadas literalmente de `audit-doctrinal.ts`, no reescritas.

⚠️ **El chequeo de Dominio de la Doctrina no aplica en este curso**: las 9 lecciones de ese tipo
no llevan una referencia en el `title` (se llaman «Fortalecer tu cimiento espiritual», «Práctica
del Dominio de la doctrina 3»…), a diferencia de LdM-2. El 0 que reporta es por vacuidad, no
porque el detector haya encontrado algo — por eso se validó con el caso sintético.

---

## Sesiones

| Fecha | Lecciones | Frente | Antes → después | Notas |
|---|---|---|---|---|
| 7-sep-2026 | las 88 citas de líder del curso | anclas `#pN` (fila 16) | 33/88 → **86/88** | `fix-anclas-citas.ts --write` con permiso del usuario: **49 anclas escritas**, 3 REVISAR y 3 NO_HALLADO. Se resolvieron 4 de las 6 restantes a mano localizando el párrafo por n-grama literal (185→`p10`, 211→`figure5_p1`, 68→`p6`, 82→`p4`). **Las 2 que quedan sin ancla son legítimas y ya estaban documentadas**: Ashton 1988 (`62-dc-46-7-33-parte-1`) y Bednar en *Ensign* inglés (`191-importancia-educacion`); son discursos que no existen en línea en español, y `AUDITORIA-citas-DyC1.md` ya había fijado el criterio de apuntar a la página del manual que los cita. ⚠️ **Hallazgo nuevo: 2 anclas preexistentes apuntaban al párrafo equivocado** — ver la tabla de defectos. |
| 7-sep-2026 | 165, 166-actuar-fe, 167-fuentes-divinas, 169, 171-mensajes-siervos | B (lote 1) | Cristo 41/91 → **46/91** | Las 5 primeras de la cola `SIN CRISTO`, todas de la unidad de adquisición de conocimiento espiritual. **+5 exacto** en Cristo, escudriñar (0→5) y quiz en spec (0→5); escrituras 17→22, sustancia 42→45 (+3), orar 25→28 (+3), conclusión 46→47 (+1: solo `165` estaba corta). **En las cinco la vía estaba escrita en el manual y la lección la había borrado** — el defecto de la fila 18/20 del catálogo: el manual de `166` dice «buscar la verdad en las fuentes que el Padre Celestial y Jesucristo han proporcionado con amor» y pide leer Juan 14:6; el de `167` titula una actividad «La perspectiva eterna de Jesucristo»; el de `165` cita la prueba de Moroni («todo lo bueno viene de Cristo»). Vías: **la marca de la revelación es que persuade a creer en Cristo** (165, Moroni 7:16), **«Yo soy el camino, y la verdad y la vida»** (166, Juan 14:6), **Su ejemplo de perspectiva eterna** (167, Juan 6:38), **«ellas son las que dan testimonio de mí»** (169, Juan 5:39 — el versículo que le da nombre a la pregunta de escudriñar), **Su voz y la de Sus siervos «es lo mismo»** (171, D. y C. 1:38 y 3 Nefi 27:13). 6 citas de Escritura nuevas, todas bajadas con `ver-versiculo.ts` y limpiadas de espacios antes de puntuación. Verbos de escudriñar rotados: volvé a leer / releé / leé / buscá en / fijate en, uno por lección. |
| 7-sep-2026 | 171-tomar-notas, 172-herramientas, 173-contexto, 182-administracion, 183-autosuficiencia | B (lote 2) | Cristo 46/91 → **51/91** | **+5 exacto** de nuevo en Cristo, escudriñar (5→10) y quiz en spec (5→10); escrituras 22→27, sustancia 45→49, orar 28→32, conclusión 47→50. Otra vez **las cinco vías estaban en el manual**: la verdad doctrinal de `171` es literalmente «Estudiar las Escrituras me ayuda a comprender y sentir el amor del Padre Celestial y de Jesucristo»; el de `172` propone buscar «Jesucristo» en la Guía para el Estudio; el de `173` pregunta «¿cómo te ayuda el contexto a aprender más sobre el Salvador, Su amor, Su misericordia y Su poder?»; el de `182` dice «a medida que acudan a Jesucristo… invitarán las bendiciones de Dios». Vías: **el Redentor padeció por todos, y ese es el criterio de qué marcar** (171, D. y C. 18:10–11), **«deleitaos en las palabras de Cristo»** (172, 2 Nefi 32:3), **el camino a Emaús: el marco de todo pasaje es Él** (173, Lucas 24:27), **«es mi propósito abastecer a mis santos»** (182, D. y C. 104:15), **«siendo rico se hizo pobre para que vosotros fueseis enriquecidos»** (183, 2 Corintios 8:9). 5 citas nuevas, todas descargadas. ⚠️ **Dos hallazgos leyendo el quiz** — ver la tabla de defectos: un `correctAnswer` apuntando a un distractor en `182` y dos preguntas de experiencia personal. |

---

## Defectos encontrados en esta sesión

Medidos con un cruce, no estimados. Los detectores nuevos tienen casos de prueba (ver el punto de
partida).

### 1. Dos anclas `#pN` preexistentes apuntaban al párrafo equivocado — **nuevo**

Las escribió alguien antes de esta sesión (no `fix-anclas-citas.ts`, que no las tocó porque ya
tenían ancla) y **ninguna contiene la cita que dicen anclar**:

| Lección | Cita | Ancla que tenía | Ancla real | Qué había en el párrafo apuntado |
|---|---|---|---|---|
| `164-fortalecer-cimiento` | Nelson, «El templo y el cimiento espiritual de ustedes» | `#p9` (`id=p9-p10,p13`) | **`#p13`** | un párrafo sobre la restauración de un templo |
| `165-buscar-revelacion` | Nelson, «Revelación para la Iglesia, revelación para nuestras vidas» | `#p36` (`id=p36-p38`) | **`#p38`** | «Soy optimista en cuanto al futuro…» |

Las dos corregidas. **El defecto es la contracara de la fila 16 del catálogo**: ese frente se mide
como «¿tiene ancla?», y una vez que la tiene ya no se vuelve a mirar. Un ancla equivocada es
invisible para el chequeo de presencia y manda al lector a un párrafo que no dice lo que la cita
dice. El cruce que lo encuentra es barato y está escrito (`scratchpad/verif-anclas.js`): bajar la
página, extraer el `<p id="…">` del ancla y verificar por n-grama literal que la cita esté ahí.
**Sobre las 88 citas del curso: 85 verifican, 1 es falso positivo del verificador** (el original
dice «Las pruebas [exámenes] periódicas» y el corchete editorial corta el n-grama) **y 2 son las de
la tabla**. Sin barrer en los otros 11 cursos.

### 2. `correctAnswer` apuntando a un distractor (fila 15 del catálogo) — **el barrido nunca se corrió en este curso**

Encontrado leyendo el quiz de `182-administracion-recursos` en el lote 2: la pregunta «Malaquías
3:10 desafía al pueblo a probar al Señor en el diezmo. ¿Qué promete el Señor a quienes lo hagan?»
tenía marcada **«Proteger sus bienes de todo robo y pérdida económica»**, mientras la respuesta real
—«abrir las ventanas de los cielos y derramar bendición hasta que sobreabunde»— figuraba como
distractor. Corregido.

Con el caso ya fichado de `86-dc-76-19-24` (fila 13) van **2 confirmados**. No hay script que lo
detecte: exige leer cada pregunta contra su opción marcada. **El barrido se está haciendo dentro de
los lotes**: como ninguna de las 91 lecciones cumplía el ≤ 2 de «la correcta es la más larga», hay
que abrir el quiz completo de todas, y ahí se revisa la opción marcada de las 637 preguntas. Al
cerrar el curso, el frente queda barrido por construcción.

### 3. Preguntas de quiz de experiencia personal (fila 11) — quedaban 2, no 0

`CALIDAD-doctrina-y-convenios-1.md` §2 dio el frente cerrado el 1-sep-2026. El cruce de esta sesión
encuentra **2 supervivientes**: `171-mensajes-siervos` Q5 («¿Qué discurso vas a estudiar esta
semana? ¿Cuándo específicamente lo harás?») y `31-dc-19-1-24-parte-1` Q3 («¿Alguna vez sentiste que
Dios te pedía hacer algo que te costaba?»). La primera ya está reescrita como escenario de
aplicación; la segunda se corrige al pasar por esa lección.

### 4. Preguntas de quiz que citan un capítulo ajeno a su lección

Cruce propio (variante del de la fila 26): **31 preguntas** citan un capítulo que no está en el
bloque `escrituras` de su lección ni en su `title`. **No todas son defecto**: las de *Práctica del
Dominio de la doctrina* y *Evalúa tu aprendizaje* repasan pasajes de todo el semestre, y ahí lo que
corresponde es sumar esos pasajes al bloque `escrituras` —que además es el frente grande del curso—.
Los casos reales son los que preguntan por un pasaje que la lección no enseña en ninguna parte
(`169` Q3 citaba D. y C. 27:2; `173` Q6 citaba D. y C. 58:26–27 y D. y C. 46). Los dos ya están
reescritos anclados a pasajes de su propia lección. Se resuelve lección por lección dentro de los
lotes.
| 7-sep-2026 | 184-cuidar-cuerpo, 191-educacion, 193-fortalezas, 194-habilidades, 195-aprendizaje | B (lote 3) | Cristo 51/91 → **56/91** | **+5 exacto** en Cristo, escudriñar (10→15) y quiz en spec (10→15); escrituras 27→32, conclusión 50→54, sustancia 49→51, orar 32→34. Las cinco de la unidad de *Preparación para la Vida* sobre cuerpo, educación y talentos — el tipo que la skill marca como el que más fácil cae en autoayuda con vocabulario SUD. **Las cinco vías, otra vez, estaban en el manual**: «demostrar gratitud al Padre Celestial y a Jesucristo mediante el cuidado de su cuerpo» (184), «al buscar oportunidades para aprender te acercarás más a Jesucristo» (191), «Nuestro potencial por medio de Jesucristo» (193, título de sección), «Jesucristo ve el potencial divino, sin importar dónde empezamos» (194), «por encima de cualquier cosa que procuren aprender, procuren conocer a Dios y a Su Hijo» (195). Vías: **el precio de «comprados por precio» fue Su sacrificio** (184, + D. y C. 89:18–21), **«todas las cosas por medio de él fueron hechas»: estudiar el mundo es estudiar Su obra** (191, Juan 1:3), **«todo lo puedo en Cristo que me fortalece»** (193, Filipenses 4:13), **«haré que las cosas débiles sean fuertes»** (194, Éter 12:27), **«esta es la vida eterna: que te conozcan a ti… y a Jesucristo»** (195, Juan 17:3). ⚠️ **El chequeo de salida atrapó el error nº 1 de LdM-1 antes de escribir**: en `184` y `195` el único «orar» vivía en la pregunta 3, y al reemplazarla por la de escudriñar se perdía. Se reubicó en la 6 de las dos. Es la razón por la que el chequeo mide todos los frentes y no solo el que se viene a tocar. |
| 7-sep-2026 | 197-examenes, 210-plantilla, 211-decisiones, 33-dc-19-25-41, 35-dc-20-1-36 | B (lote 4) | Cristo 56/91 → **61/91** | **+5 exacto** por cuarta vez en Cristo, escudriñar (15→20) y quiz en spec (15→20); escrituras 32→35, conclusión 54→56, sustancia 51→53, orar 34→37. Vías: **«Jesús crecía en sabiduría, y en estatura y en gracia»: Él también se preparó, y por años** (197, Lucas 2:52 — el manual lo pide textualmente), **«el testimonio de Jesús es el espíritu de profecía»** (210, Apocalipsis 19:10, junto a la cita de Andersen que la lección ya tenía sin usar), **«yo he vencido al mundo» y la roca de Helamán 5:12, que ya estaba en el bloque sin aparecer en el contexto** (211, Juan 16:33), **el propio Salvador describe lo que ya entregó** (33, D. y C. 19:16–19 — el manual pide leer exactamente esos versículos y la lección los había salteado), **el testimonio de los artículos: «fue crucificado, murió y resucitó»** (35, D. y C. 20:21–24). 6 citas nuevas. ⚠️ **Tres hallazgos leyendo el quiz**: un segundo `correctAnswer` apuntando a un distractor (`210` Q2: la respuesta oficial listaba «el tema general, la biografía del orador, las estadísticas» como las cuatro categorías de la plantilla, y la correcta figuraba como distractor); **dos preguntas más de experiencia personal** en `35` que el detector de la primera pasada no veía; y una pregunta de `210` que evaluaba Amós 3:7, ajeno a la lección, reanclada en D. y C. 1:38. |
| 7-sep-2026 | las 637 preguntas del curso | detector de experiencia personal (fila 11) | 2 → **0** | Se amplió el detector tras los dos casos que se le escaparon en `35` (solo buscaba «¿alguna vez sentiste/viviste/te pasó»; no veía «¿alguna vez dudaste» ni «¿qué aspecto valorás más»). La versión nueva cruza cuatro marcas —vivencia, segunda persona sobre la propia experiencia, preferencia personal y propósito futuro— y tiene **12 casos de prueba, 6 positivos y 6 negativos, que pasan**. Corrido sobre las 637 preguntas del curso da **0**. Es la fila 25 del catálogo aplicada a un detector propio: el 0 de la primera versión era falso. |
| 7-sep-2026 | 37-dc-21, 39b-dc-25-p2, 43-dc-28, 47-dc-30-36-p1, 48-dc-30-36-p2 | B (lote 5) | Cristo 61/91 → **66/91** | **+5 exacto por quinta vez** en Cristo, escudriñar (20→25) y quiz en spec (20→25); escrituras 35→37, conclusión 56→58, sustancia 53→56, orar 37→40. Vías: **los títulos del profeta vienen «por la voluntad del Padre y la gracia de tu Señor Jesucristo», y la piedra del ángulo es Él** (37, D. y C. 21:1 + Efesios 2:19–20), **Marta afanada y María a los pies de Jesús: «solo una cosa es necesaria»** (39b, Lucas 10:41–42 — el manual lo señala), **fue Jesucristo quien «constituyó a unos apóstoles», y para llevarnos «a la medida de la estatura de la plenitud de Cristo»** (43, Efesios 4:11–13), **«yo soy la luz del mundo»: el misionero no fabrica luz, señala la Suya** (47, Juan 8:12), **«soy su intercesor ante el Padre», que ya estaba en el bloque de escrituras sin usar** (48, + Moroni 10:32). 6 citas nuevas. ⚠️ **El chequeo volvió a atrapar el error nº 1** en `43`: su único «orar» vivía en la pregunta 3 y se perdía al escribir la de escudriñar. ⚠️ **Tres preguntas más de experiencia personal** en `43` que ni la primera ni la segunda versión del detector veían (usaban «viste», «distinguís», «podés participar»): reescritas como escenarios. La conclusión de proceso es que **ese defecto se encuentra leyendo el quiz completo, no con una regex** — y como en este curso hay que abrir los 91 quizzes por el sesgo de longitud, queda barrido igual. ⚠️ **Se produjo el defecto espejo de la fila 27** al recortar las correctas de `47` y `48`: quedaron 5 de 7 como la opción más corta. Lo detectó el chequeo, que mide las dos direcciones, y se corrigió apuntando al punto medio de la ventana en vez de al mínimo. |
| 7-sep-2026 | 49-dc-35, 50-dominio-practica-3, 52-dc-38-p2, 54-evalua-3, 55-dc-41 | B (lote 6) | Cristo 66/91 → **71/91** | **+5 exacto por sexta vez**; escudriñar 25→30, quiz en spec 25→30, escrituras 37→40, conclusión 58→61, sustancia 56→61, orar 40→44. Vías: **el Señor se presenta antes de llamar: «Soy Jesucristo, el Hijo de Dios, que fui crucificado por los pecados del mundo»** (49, D. y C. 35:2 — está en el versículo 2 y la lección arrancaba en el 3), **«mirad hacia mí en todo pensamiento… mirad las heridas»** (50, D. y C. 6:36–37, que además era una de las referencias que el quiz citaba sin que la lección la tuviera), **la parábola de los doce hijos: «es como yo soy… sed uno; y si no sois uno, no sois míos»** (52, D. y C. 38:26–27 — el manual pide leer 24–27 y la lección cortaba en el 25), **«aprende de mí… y en mí tendrás paz»** (54, D. y C. 19:23), **«el que recibe mi ley y la guarda, tal es mi discípulo», que ya estaba en el bloque sin usar** (55). 5 citas nuevas. ⚠️ **Un error de contenido corregido**: `50` Q6 atribuía a D. y C. 6:36 el texto «no temas, pequeño rebaño», que es del 6:34; se reescribió con el texto real del versículo, que ahora está en el bloque de escrituras. ⚠️ El chequeo marcó **SUSTANCIA faltante en dos lecciones** del lote en la primera pasada: los párrafos nuevos nombraban a Cristo pero decían «padeció por vos» y «Su paz», que no están en el vocabulario que mide el script. Corregido antes de escribir. |
| 7-sep-2026 | 60-dc-45-p2, 61-dc-46-1-6, 63-dc-46-7-33-p2, 66-dc-50-p2, 68-dc-51 | B (lote 7) | Cristo 71/91 → **76/91** | **+5 exacto por séptima vez**; escudriñar 30→35, quiz en spec 30→35, escrituras 40→44, conclusión 61→63, sustancia 61→64, orar 44→48. Vías: **«me verán en las nubes del cielo, revestido de poder y gran gloria»: el que vuelve es una persona concreta** (60, D. y C. 45:44), **«no lo echaréis de vuestras sinagogas… y yo los sane»** (61, 3 Nefi 18:32 — el manual titula una sección «Jesucristo fue un ejemplo de cómo dar la bienvenida a todos»), **«todos estos dones vienen por el Espíritu de Cristo», que ya estaba en el bloque de escrituras sin aparecer en el contexto** (63), **«mi doctrina no es mía, sino de aquel que me envió»: el maestro perfecto también recibía** (66, Juan 7:16), **la figura del mayordomo fiel y prudente** (68, Lucas 12:42–43). 4 citas nuevas. ⚠️ **El chequeo atrapó el error nº 1 por cuarta vez**: `61` y `66` tenían su único «orar» en la pregunta 3. |
| 7-sep-2026 | 69-dc-57, 71-dc-58-26-29, 73-dc-59, 74-dc-60-62, 75-dc-63-1-23 | B (lote 8) | Cristo 76/91 → **81/91** | **+5 exacto por octava vez**; escudriñar 35→40, quiz en spec 35→40, escrituras 44→49, conclusión 63→66, sustancia 64→68, orar 48→53. Vías: **«esta es Sion: los puros de corazón», y el que la edifica es Él** (69, D. y C. 97:21), **la vida de Jesús resumida en tres palabras: «anduvo haciendo bienes»** (71, Hechos 10:38 — el manual titula una actividad «Un día en la vida de Cristo»), **«el día de reposo fue hecho por causa del hombre… el Hijo del Hombre es Señor aun del día de reposo»** (73, Marcos 2:27–28), **«Jesucristo, vuestro intercesor, que conoce las flaquezas del hombre y sabe cómo socorrer a los que son tentados»** (74, D. y C. 62:1 — el manual titula la sección «El Salvador enseña acerca de Sí mismo»), **«bienaventurados los que no vieron y creyeron»** (75, Juan 20:29, junto al principio de que las señales siguen a la fe). 5 citas nuevas. ⚠️ **Las cinco tenían su único «orar» en la pregunta 3**, y el chequeo lo marcó antes de escribir: quinta vez en el curso. Ya no es un descuido puntual sino un patrón del corpus — la pregunta 3 original solía ser la de experiencia personal, que es justo la que dispara el detector de «orar». |
| 7-sep-2026 | 77-dc-64-1-17, 78-dc-64-20-43, 79-dc-65, 80-dc-67, 82-dc-71 | B (lote 9) | Cristo 81/91 → **86/91** | **+5 exacto por novena vez**; escudriñar 40→45, quiz en spec 40→45, escrituras 49→53, conclusión 66→69, sustancia 68→71, orar 53→56. Vías: **«Padre, perdónalos, porque no saben lo que hacen»: perdonó primero y desde la cruz** (77, Lucas 23:34 — el manual titula una sección «Jesucristo perdona»), **«Yo soy Jesucristo; vine por la voluntad del Padre, y su voluntad cumplo», que es exactamente el corazón y la mente dispuesta que Él pide** (78, D. y C. 19:24 — el manual lo lista entre los «ejemplos de la vida del Salvador»), **la piedra de Daniel es Su Iglesia, y Él es el Esposo al que se sale a recibir** (79), **la promesa de que el velo se rasgará y le veremos, con la paciencia de «continuad hasta perfeccionaros»** (80, D. y C. 67:13), **«no hay arma forjada en contra de vosotros que haya de prosperar»** (82, D. y C. 71:9–10). 4 citas nuevas. ⚠️ **Cuarto `correctAnswer` apuntando a un distractor**, en `80` Q3: la pregunta pide la evidencia sobre el **origen divino** de las revelaciones y la respuesta marcada decía «que el idioma inglés era insuficiente»; la correcta —«si el más erudito no pudo imitar la más sencilla, el origen era divino»— figuraba como distractor. |
| 7-sep-2026 | 83-dominio-p5, 84-evalua-5, 88-dc-76-71-112, 90-dc-79-80, ensenanza-profeta-actual | B (lote 10) | Cristo 86/91 → **91/91 (100 %)** | **Cola `SIN CRISTO` cerrada: no queda ninguna lección del curso sin Jesucristo en `contexto` o `conclusion`.** Décimo lote con **+5 exacto**, diez de diez. Escudriñar 45→50, quiz en spec 45→50, escrituras 53→58, conclusión 69→72, sustancia 71→74, orar 56→59. Vías: **la frase clave del pasaje de dominio del bloque, «Yo, Jesucristo, he padecido estas cosas por todos»** (83, D. y C. 19:16–19 — el manual la nombra así, y el quiz de esa lección ya la citaba sin que la lección la tuviera), **«Allegaos a mí, y yo me allegaré a vosotros»** (84, D. y C. 88:63), **el testimonio que sostiene toda la sección 76: «que vive; porque lo vimos»** (88, D. y C. 76:22–24), **«iré delante de vuestra faz… y mis ángeles alrededor de vosotros»** (90, D. y C. 84:88), **«el que recibe al que yo envío, a mí me recibe»** (ensenanza-profeta-actual, Juan 13:20). 5 citas nuevas. ⚠️ Este lote produjo el **defecto espejo a gran escala** en el ajuste de longitudes: 22 de 35 correctas quedaron como la opción más corta en la primera pasada. Se corrigió midiendo cada texto con `node -e` antes de aplicar, en vez de estimar la longitud a ojo. |

**Estado al cerrar la cola `SIN CRISTO` (lotes 1 a 10, 50 lecciones):** Cristo **91/91 (100 %)**,
escudriñar 0→**50/91**, quiz en spec 0→**50/91**, escrituras 17→**58/91**, orar 25→**59/91**,
sustancia 42→**74/91**, conclusión 46→**72/91**. El sesgo de longitud del curso bajó de
**560/637 (88 %) a 291/637 (46 %)**. 50 citas de Escritura nuevas, todas descargadas con
`ver-versiculo.ts`; ninguna escrita de memoria y ninguna cita de líder inventada.
| 7-sep-2026 | 162, 163, 164, 166-examinar, 167-fijar-metas, 168 (lote 11) | bloque 4 — cierre completo por lección | escudriñar 50→**56/91** | Arranca el bloque 4: ya no hay cola `SIN CRISTO`, así que se trabaja lección por lección cerrando **todos** los frentes pendientes de cada una. **+6 exacto** en escudriñar y en quiz en spec; escrituras 58→62, conclusión 72→74, orar 59→64, sustancia 74→76. Escrituras nuevas: **Mateo 7:24–25** (la casa sobre la roca, que es la imagen que Helamán 5:12 ya usaba en `164` sin citar su origen), **Hebreos 12:2–3** («puestos los ojos en Jesús… sufrió la cruz», para la perspectiva eterna de `166`), **3 Nefi 27:27** («¿qué clase de hombres habéis de ser? … aun como yo soy», que es la meta de fondo de `167`) y **2 Nefi 11:4** («todas las cosas… son símbolo de él», que es la premisa de `168`). |
| 7-sep-2026 | 170, 180, 181, 185, 196, 198 (lote 12) | bloque 4 | escudriñar 56→**62/91** | **+6 exacto** en escudriñar y quiz; escrituras 62→68, conclusión 74→78, orar 64→68, sustancia 76→80. El sesgo de longitud del curso bajó a **218/637 (34 %)**. Escrituras nuevas: **D. y C. 18:34–36** («es mi voz la que os las declara», para la preparación de la conferencia de `170`), **Lucas 22:27** («yo estoy entre vosotros como el que sirve», que da la dirección de la autosuficiencia en `180`), **Juan 15:5** (la vid y los pámpanos: «sin mí nada podéis hacer», el límite exacto que le faltaba a `181`), **Alma 7:11–12** (que Él tomó las debilidades «a fin de que… sepa cómo socorrer», para la fortaleza emocional de `185`), **D. y C. 97:8** (el corazón sincero y quebrantado, para la integridad de `196`) y **Éter 12:27** en `198`, que además era una de las referencias que su propio quiz citaba sin tenerla. |
| 7-sep-2026 | 31, 32, 36, 38, 39, 41 (lote 13) | bloque 4 | escudriñar 62→**68/91** | **+6 exacto**; escrituras 68→72, conclusión 78→83, orar 68→72, sustancia 80→82. El sesgo de longitud del quiz llegó a **183/637 (29 %)**, ya muy cerca del 25 % que daría el azar. Escrituras nuevas: **D. y C. 19:20** y **Alma 36:19–20** (las dos caras del arrepentimiento en `32`, que tenía una sola escritura), **D. y C. 24:1** (lo que el Señor ya había hecho por José antes de pedirle nada), **D. y C. 25:1** («hija mía»: la identidad antes del encargo, en `39`) y **3 Nefi 18:7** (el propio Salvador explicando la Santa Cena, en `41`). ⚠️ Al agregar un párrafo a tres conclusiones se pasaron del rango 60–140 (146, 141 y 143 palabras): el chequeo lo marcó y se recortaron antes de escribir. Es el mismo principio del error nº 1 — **verificar todo lo que la lección cumplía antes, no solo lo que se viene a arreglar**. |
| 7-sep-2026 | 42, 44, 45, 46, 51, 53 (lote 14) | bloque 4 | escudriñar 68→**74/91** | **+6 exacto**; escrituras 72→77, conclusión 83→85, orar 72→77, sustancia 82→84. **El sesgo de longitud del quiz llegó a 153/637 (24 %), que es el nivel del azar** (el objetivo de la fila 27 del catálogo, no el 0 %). Escrituras nuevas: **Efesios 6:16–17** y **D. y C. 27:18** (la armadura completa en `42`, que tenía una sola escritura), **3 Nefi 10:6** (la gallina y los polluelos, dicho por el Salvador resucitado, en `44`), **D. y C. 29:5** («soy vuestro intercesor ante el Padre», que el quiz de `45` ya citaba sin tenerla), **D. y C. 29:39** (lo amargo y lo dulce, ídem en `46`) y **D. y C. 39:5–6** («el que recibe mi evangelio, me recibe a mí»). ⚙️ Se agregó al motor de parcheo la identificación de pregunta **por índice** además de por substring del enunciado: siete operaciones del lote fallaron porque dos preguntas de la misma lección compartían el fragmento usado como ancla. |
| 7-sep-2026 | 56, 57, 58, 59, 62, 64 (lote 15) | bloque 4 | escudriñar 74→**80/91** | **+6 exacto**; escrituras 77→81, conclusión 85→87, orar 77→82, sustancia 84→87. Escrituras nuevas: **Mateo 25:40** («a mí lo hicisteis», que el quiz de `57` ya citaba sin tenerla), **1 Juan 2:1** («abogado tenemos para con el Padre», junto a D. y C. 45:3–5 en `58`), **D. y C. 45:39** (el que teme al Señor «estará esperando» ese día) y **D. y C. 49:5** (lo que el Señor afirma **antes** de corregir el error de los shakers). ⚠️ **Se midieron las dos direcciones del sesgo de longitud sobre el curso entero**: la correcta es la más larga en 117/637 (18 %) y la más corta en 77/637 (12 %). Las dos por debajo del 25 % del azar, así que ninguna heurística de longitud le sirve al alumno — que es el objetivo de la fila 27, no el 0 % en una sola dirección. |
| 7-sep-2026 | 65, 67, 70, 72, 76, 81 (lote 16) | bloque 4 | escudriñar 80→**86/91** | **+6 exacto**; escrituras 81→87, conclusión 87→90, orar 82→86, sustancia 87→**91/91**. Escrituras nuevas: **D. y C. 50:41–42** («no temáis, pequeñitos… ninguno de los que el Padre me ha dado se perderá», el cierre del capítulo que `65` no usaba), **D. y C. 50:40** («debéis crecer en gracia», que es la vara con que `67` debía evaluar el aprendizaje), **D. y C. 82:10** («yo, el Señor, estoy obligado cuando hacéis lo que os digo», para la práctica de dominio de `70`), **D. y C. 19:16** (la razón por la que el Señor puede decir «no los recuerdo más», en `72`), **D. y C. 63:64** (lo sagrado «debe expresarse con cuidado y por constreñimiento del Espíritu») y **3 Nefi 18:21** (el Salvador mandando orar en familia, en `81`). ⚠️ **Un `correctAnswer` más apuntando a un distractor** —el quinto del curso—, en `76` Q2: la pregunta pide qué abarca «no tomar el nombre de Dios en vano» en su sentido amplio y la respuesta marcada era «solo el uso del nombre 'Jehová' en contextos no religiosos»; la correcta figuraba como distractor. ⚙️ Para el sesgo de longitud se dejó de estimar: se escribe una lista de candidatos por pregunta y un script elige el que **cae dentro de la ventana de los tres distractores**, midiendo. Ninguna de las 42 correctas tocadas quedó en un extremo. |
| 7-sep-2026 | 85, 86, 87, 89, pascua-resurreccion (lote 17) | bloque 4 — **cierre del curso** | los ocho frentes a **91/91** | Último lote: **escrituras 87→91, conclusión 90→91, orar 86→91, escudriñar 86→91, quiz en spec 86→91**. Escrituras nuevas: **D. y C. 58:3–4**, **D. y C. 130:22**, **D. y C. 76:62** y **D. y C. 78:19**. ⚠️ **Tres errores de contenido encontrados leyendo, no por script**: (1) en `85`, tres preguntas del quiz atribuían a **D. y C. 76:5** la frase «la gloria que seguirá después de mucha tribulación», que es de **D. y C. 58:3–4** — se corrigieron los enunciados y se sumó el pasaje real al bloque de escrituras; (2) en `87`, dos preguntas atribuían a **D. y C. 76:51** la expresión «valiente en el testimonio de Jesús», que está en **D. y C. 76:79** (y allí en negativo, describiendo a los del reino terrestre); (3) en `89`, el `contexto`, la primera pregunta del cuestionario y una del quiz citaban **D. y C. 78:14** como «que mi pueblo no sea dependiente de los reinos del mundo ni de sus poderes», frase que no está en el versículo: el texto real dice que la iglesia «se sostenga independiente de todas las otras criaturas bajo el mundo celestial». Los tres se verificaron con `ver-versiculo.ts` antes de tocar nada. |

## Cierre del curso (7-sep-2026)

**Los ocho frentes por lección quedaron en 91/91**, medidos con el inventario propio después de
escribir:

```
Cristo (ctx o concl):        91/91      >= 3 escrituras:            91/91
Sustancia (ctx+concl):       91/91      Conclusión >= 80 palabras:  91/91
Pregunta de orar:            91/91      Pregunta de escudriñar:     91/91
Sin líderes huérfanos:       91/91      Quiz con <=2 correcta+larga: 91/91
```

**Sesgo de longitud del quiz (fila 27):** la correcta es la más larga en **49/637 (8 %)** y la más
corta en **75/637 (12 %)**. Las dos por debajo del 25 % del azar; ninguna heurística de longitud le
sirve al alumno, que es el objetivo de la fila.

**Barrido estructural: todo en cero.** `options.length ≠ 4`, `correctAnswer` fuera de rango,
`questionCount` desincronizado, opciones duplicadas, espacio suelto antes de puntuación, DD sin su
pasaje de dominio, huérfanos del manifiesto en las dos direcciones. La única cita superpuesta que
quedaba (`42`: D. y C. 27:15–18 ⊃ D. y C. 27:18, introducida por el lote 14) se resolvió cambiando
la segunda por **Efesios 6:11**.

**Cruce de molde entre lotes (error nº 2).** Se cruzaron las 91 preguntas de la posición 3 y las 91
de la posición 6 con solapamiento de Jaccard: **0 pares ≥ 0.60 y 0 pares ≥ 0.50**. El único par que
había (`70` y `83`, las dos de práctica de dominio, 0.65) se reescribió.

**Verificaciones con fuente externa, todas corridas al cierre:**

| Verificación | Resultado |
|---|---|
| `audit-escrituras.ts doctrina-y-convenios-1` | **280/280 OK**, 0 `REVISAR_MANUAL` |
| Anclas de citas de líder (`#`) | **86/88**; las 2 sin ancla son las ya documentadas (Bednar en inglés, Ashton 1988) |
| Verificación propia de anclas (descarga la página y busca el n-grama) | **86/86 contienen la cita literal** |
| `audit-autores-quiz.ts` | 0 atribuciones sin respaldo |
| `audit-distribucion-respuestas.ts` | 0:24 % · 1:25 % · 2:25 % · 3:25 % ✓ |
| `audit-doctrinal.ts --detalle` | 0 lecciones «nombra a Cristo pero no dice nada de Él», 0 sin orar, 0 sin escudriñar |
| `audit-completitud.ts` | contexto 91/91, conclusión 91/91 en rango, cuestionario 91/91 con 6, quiz 91/91 con 7 |
| `audit-chapterurls.ts` | 0 rotas; las 7 «desalineadas» son el falso positivo de la fila 29 (el manual numera sus lecciones distinto del manifiesto) |
| `validate-content.ts` | limpio salvo `libro-de-mormon-1/_auditoria-snapshot-original.json`, que es preexistente y de otro curso |

**Una cita se hizo literal al cierre:** `197-preparar-examenes` guardaba «Las pruebas periódicas son
absolutamente esenciales para el aprendizaje» y el manual dice «Las pruebas **[exámenes]**
periódicas…». Es la única diferencia que encontró la verificación de anclas sobre las 86.

### Defecto nuevo para el catálogo: falso positivo de `audit-links-citas.ts`

El script reporta **19 citas «sin ancla al párrafo»** en este curso, pero la medición directa da
**2**. La causa es su regex: `tieneAncla` acepta `#pN` o `id=pN`, y las citas de líder del manual
2025 viven en recuadros, con anclas de la forma `#aside1_p3`, `#aside1_aside2_p1` o `#figure2_p2`.
17 de esas 19 son anclas correctas y verificadas (la verificación propia las descarga y encuentra
la cita dentro del párrafo). Es el mismo tipo de hallazgo que la fila 29: **un detector que reporta
de más**. La corrección propuesta —no aplicada, porque el script está fuera del alcance de esta
sesión— es ampliar el patrón a `#(?:[a-z0-9_]*_)?p\d`.

### Las tres lecciones sin cita de líder

`54-evalua-aprendizaje-3`, `67-evalua-aprendizaje-4` y `84-evalua-aprendizaje-5`. Son las tres de
tipo *Evalúa tu aprendizaje*: la página del manual no trae ninguna cita, y la regla es no inventar
ninguna. Se dejan sin `enseñanza` a propósito, como pide la skill.
