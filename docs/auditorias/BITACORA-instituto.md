# Bitácora — Instituto (`religion-200`, `religion-225`, `religion-250`, `religion-301`)

Ver `BITACORA-generacion-doctrinal.md` para la línea de base del proyecto y las reglas del registro
(ese archivo es de solo lectura desde acá). El método viene de `PROMPT-instituto.md`.

> **Al empezar esta sesión, los cuatro cursos de Instituto eran lo único del proyecto sin cerrar.
> El frente grande era el sesgo de longitud: 83-94 % en tres de los cuatro.**

## Punto de partida (8-sep-2026), medido en esta sesión

Las cifras del prompt se **reprodujeron desde cero** con un inventario propio y coinciden. Lo que
sí hubo que corregir fueron dos herramientas, antes de confiar en su salida (ver más abajo).

```
                      R-200      R-225      R-250      R-301
lecciones con quiz      28          5         28         25
preguntas              196         23        174        125
correcta más larga   93 %       57 %       83 %       94 %
  ...margen >= 3     181          9        139        117
correcta más corta    4 %       30 %        8 %        2 %
puesto por longitud  93/2/2/4  57/22/13/9  83/6/4/7  94/3/0/2
posición del índice  25/25/25/25 13/52/30/4 5/60/31/5 3/65/32/0
```

## El error de método que había que evitar, y que casi se comete

El objetivo obvio —«que la correcta deje de ser la más larga»— es **el error de la fila 30**. Meter
cada respuesta correcta dentro de la ventana de los distractores la deja siempre en el puesto 2 o 3,
nunca en el 1 ni en el 4, y **crea una heurística nueva**: descartar los dos extremos y elegir entre
los del medio acierta el 50 %.

El objetivo correcto es que la correcta sea la más larga **una de cada cuatro veces, como el azar**.
`elegir.js` se reescribió entero alrededor de eso:

- **Reparto por cuota hacia 25/25/25/25**, no hacia el punto medio.
- **Libro mayor por curso** (`ledger-<curso>.json`) con las preguntas ya rebalanceadas. Sin él, cada
  lote mira las preguntas todavía sin tocar —casi todas del puesto 1—, concluye que ese puesto está
  lleno, y empuja el lote entero a 2/3/4; al terminar el curso el puesto 1 queda en 0 % y **el sesgo
  cambia de signo en vez de desaparecer**.
- **Margen modesto en los extremos (3-14 caracteres).** Una correcta que gana por 68 —la mediana de
  R-200— se ve desde la otra punta del aula aunque solo pase el 25 % de las veces.
- **Caída al puesto más necesitado.** Cuando los tres distractores miden casi lo mismo, las bandas 2
  y 3 quedan vacías. Con un orden de caída fijo el lote se iba al puesto 1 (cuya banda nunca está
  vacía): en el primer lote de R-301 dio 51 % antes de corregirlo.

## Estado al cerrar la sesión

```
                      R-200      R-225      R-250      R-301
puesto por longitud  25/27/26/23  57/22/13/9  25/22/25/28  27/26/22/26
posición del índice  25/25/25/25 35/22/17/26 26/25/24/25  25/25/26/25
márgenes descarados      0          —           5           0
```

**R-200, R-250 y R-301 quedan cerrados en los dos frentes de adivinabilidad.** R-225 no se tocó:
no es un curso auditable todavía (ver abajo).

## Bloques

| Lote | Lecciones | Preguntas reescritas |
|---|---|---|
| R-200 b1 | `l01`–`l06` | 40 + 4 correcciones de contenido |
| R-200 b2 | `l07`–`l12` | 37 + 1 corrección de enunciado |
| R-200 b3 | `l13`–`l18` | 36 + 1 corrección de enunciado |
| R-200 b4 | `l19`–`l24` | 40 |
| R-200 b5 | `l25`–`l28` | 24 |
| R-301 b1 | `l01`–`l09` | 40 |
| R-301 b2 | `l10`–`l17` | 34 + 1 corrección de texto |
| R-301 b3 | `l18`–`l25` | 37 |
| R-250 b1 | `l01`–`l04` | 23 |
| R-250 b2 | `l05`–`l08` | 23 + 3 correcciones de tipeo |
| R-250 b3 | `l09`–`l13` | 31 |
| R-250 b4 | `l14`–`l18` | 32 |
| R-250 b5 | `l19`–`l21` | 18 |
| R-250 b6 | pasada correctiva | 14 |

Cada lote se corrió en seco antes de aplicar, con un chequeo de salida que mide **todos** los
frentes sobre el resultado, no solo el que se venía a arreglar. `patch.js` falla en bloque.

## Hallazgo grave: una respuesta oficial falsa (fila 15)

**`r200-l01` Q1** preguntaba cuáles son los tres pasajes que la lección usa, y la opción marcada
decía **«2 Nefi 26:24, Mosíah 4:9 e Isaías 55:8–9»**. La lección enseña Isaías 55:8–9, 2 Nefi 26:24
y **Moroni 7:45–47**; Mosíah 4:9 no aparece en ninguna parte del archivo. La respuesta oficial era
falsa y no había ningún distractor correcto: hubo que reescribir el texto de la opción.

El mismo pasaje inexistente sostenía otras dos preguntas de la lección: Q7 apoyaba todo su enunciado
en él y Q6 lo citaba como **«Moisés 4:9»** (otro libro). Los dos enunciados se reescribieron sobre
Moroni 7:45–47, que la lección sí enseña, y la respuesta de Q7 se rehízo para que hable de caridad
—lo que ese pasaje enseña— y no de conocimiento.

## Lo que hubo que corregir de las herramientas antes de usarlas

La advertencia del prompt («los cursos de convención `resumen` tienen otra estructura y varias
herramientas asumen la clásica») era exacta, y hubo un segundo caso que no estaba previsto.

1. **`inv.js` no medía nada de R-301 ni R-225.** Cortaba con `continue` al detectar la convención
   `resumen`, pero el denominador de preguntas se acumulaba antes: informaba «24/125 (19 %)» de
   correctas más largas donde la medición real era **118/125 (94 %)**. Numerador de 5 lecciones,
   denominador de 25. Se le agregó una **normalización** que proyecta los bloques
   `{parrafo, escritura, cita, doctrinal, reflexion}` sobre los tipos clásicos, con lo cual todos
   los detectores de abajo sirven sin duplicar lógica, y se subió el conteo de longitudes por encima
   de los `continue`. Los 11 casos de `test-inv.js` siguen pasando.

2. **Un regex escrito como cadena perdió las barras invertidas al pasar por el shell.** La primera
   versión del detector de referencias ajenas quedó con `\s` → `s` y devolvía **0 en un curso con 42
   casos**. Los patrones van como literales, no como `new RegExp('...\\s...')`.

3. **`elegir.js` identificaba la opción por un prefijo de 45 caracteres.** En `r200-l25` Q7 dos
   opciones compartían esos 45 caracteres y el lote entero se rechazó por ambigüedad. Ahora usa el
   texto completo.

## Frentes que quedan abiertos

### R-225 no es un curso auditable todavía

23 de sus 28 lecciones tienen `secciones: []`. **Hay que generarlo con `seminary-enrichment` antes
de auditarlo.** Las 5 lecciones con material tampoco están completas (4-5 preguntas en vez de 7,
con ítems de verdadero/falso de 2 opciones) y sus 10 escrituras no tienen `link`, así que ese frente
sigue bloqueado.

### R-250 `l22`–`l28`: incompletas, no sesgadas

Las últimas siete lecciones de R-250 **no son un trabajo de rebalanceo sino de generación**:

| Lección | Preguntas | Opciones por pregunta |
|---|---|---|
| `r250-l22` | 3 | 2, 4, 4 |
| `r250-l23` | 3 | 4, 2, 4 |
| `r250-l24` | 4 | 4, 4, 4, 2 |
| `r250-l25` | 4 | 4, 4, 4, 2 |
| `r250-l26` | 4 | 4, 4, 2, 4 |
| `r250-l27` | 4 | 4, 4, 2, 4 |
| `r250-l28` | 5 | 4, 4, 2, 4, 2 |

Los ítems de dos opciones son verdadero/falso, que no es la convención del proyecto. Son las 8
entradas de `options.length !== 4` del barrido estructural (y las 6 de R-225).

### Los otros frentes, sin tocar en esta sesión

- **38 atribuciones sin respaldo en R-200**, el recuento más alto del proyecto. Se confirmó que el
  detector no se equivoca (cruza contra `enseñanza`, `contexto` y `conclusion`, que es lo que pide
  el error 8): son preguntas que nombran a un líder y dicen «según su cita en la lección» cuando la
  lección no trae ninguna cita de esa persona.
- **56 citas de líder de R-200, 50 de R-301 y 5 de R-225 sin ancla `#`.**
- **70 de las 87 escrituras de R-301 y las 10 de R-225 sin `link`.** Sin link no hay forma de
  auditar su fidelidad: el frente sigue bloqueado.
- **31 `REVISAR_MANUAL` de R-200**; R-225, R-250 y R-301 sin auditar en fidelidad de Escrituras.
- **Cristo en contexto o conclusión: 17/28 en R-200, 17/25 en R-301.** Pregunta que devuelve al
  pasaje: 0/28 y 0/25.

## Lo que sí se cerró además del quiz

- **16 espacios antes de puntuación en R-200** (fila 22), todos dentro de textos de Escritura. Se
  corrigieron con un barrido propio y no con `fix-escrituras.ts --write`, que según el error 9 los
  reintroduce. El barrido excluye los puntos suspensivos, que en español sí llevan espacio delante.
- **Tipeos:** «jalén» → «jalen» (`r250-l01`), 3 × «abrahánico» → «abrahámico» (`r250-l05`), «micho»
  → «mucho» (`r200-l06`), «sería» → «seria» (`r200-l13`), «premoral» → «premortal` (`r200-l07`),
  «basada en en quién» (`r301-l17`).
- **Comillas rectas → angulares** en las respuestas que se reescribieron (`r301-l02`, `r301-l12`,
  `r301-l21`, `r250-l10`).

## Falsos positivos confirmados, no perseguir

Además de los tres que ya lista el prompt:

- **`artefactos.js` marca «espacio antes de puntuación» en `r250-l03`** por «era más inteligente que
  todas. ... Y el Señor dijo». Es un punto suspensivo de omisión y lleva espacio delante. El barrido
  propio (`espacio.js`) lo excluye correctamente; el viejo no.
- **`cruce.js` reporta 42 referencias «ajenas» en R-200 y 2 en R-250.** Solo **una** cae en la opción
  marcada (`r200-l01` Q1, arriba); las otras 41 están en el enunciado. Son preguntas que evalúan un
  pasaje que la lección no enseña —un defecto real, pero distinto y más leve que una respuesta falsa.

## Al cerrar

```
validate-content.ts          1 problema, el conocido de libro-de-mormon-1 (anterior a la sesión)
audit-distribucion-respuestas  los cuatro cursos ✓
barrido estructural          0 correctAnswer fuera de rango · 0 duplicadas · 0 huérfanos
                             0 espacios antes de puntuación · 14 options.length != 4 (R-225 y R-250,
                             las lecciones incompletas de arriba)
artefactos                   0 reales (1 falso positivo, arriba)
```

---

# Cierre de `religion-200` (8-sep-2026)

Segunda sesión, enfocada en un solo curso. Se eligió R-200 porque era el único de los cuatro con
todos los frentes accionables: 28/28 lecciones con material, 84/84 escrituras con `link` y
ninguna lección incompleta.

## Estado final

| Frente | Antes | Ahora |
|---|---:|---:|
| Cristo en contexto o conclusión | 17/28 | **28/28** |
| Sustancia expiatoria | 16/28 | **28/28** |
| Conclusión de 80–140 palabras | 24/28 | **28/28** |
| Pregunta que invita a orar | 7/28 | **28/28** |
| Pregunta que devuelve al pasaje | 0/28 | **28/28** |
| Atribuciones sin respaldo | 38 | **0** |
| Fidelidad de Escrituras | 53 OK · 31 `REVISAR_MANUAL` | **112 OK · 0** |
| Preguntas que citan un pasaje ajeno | 42 | **0** |
| Citas de líder verificadas con ancla | 0 de 56 | **53 de 88** |
| Puesto por longitud / posición | 25/27/26/23 · 25/25/25/25 | igual, ✓ |

Barrido estructural en 0 en todo. `audit-completitud` da 28/28 en contexto, enseñanza,
conclusión, cuestionario y quiz. `audit-chapterurls`: 0 rotas, 0 desalineadas.

## Hallazgo grave 1: 63 de 84 textos de Escritura no eran el versículo

`audit-escrituras.ts` marcaba **31 `REVISAR_MANUAL`**. En AT-1 esa bandera resultó ser un falso
positivo del comparador; **acá no lo es**. Comparando contra la API se vio que el `texto`
guardado era una paráfrasis. El caso que lo dejó claro es `2 Nefi 26:24` en `r200-l01`:

> **guardado:** «Él no hace nada excepto para el beneficio del mundo; porque ama al mundo, de modo
> que entregó su propia vida para que todo hombre pueda ser atraído hacia él. Por tanto, no manda
> a ninguno que se vaya, **sino que la invitación es para todos los hombres; pues su expiación
> satisface las demandas de la justicia sobre todos los que tienen el corazón quebrantado y el
> espíritu contrito**.»
>
> **real:** «Él no hace nada a menos que sea para el beneficio del mundo; porque él ama al mundo,
> al grado de dar su propia vida para traer a todos los hombres a él. Por tanto, a nadie manda él
> que no participe de su salvación.»

La cláusula final que el archivo presenta como parte de 2 Nefi 26:24 es, en realidad, **2 Nefi
2:7**. Al medir las 84 citas contra la API, **63 diferían del versículo declarado**.

Se restituyeron las 84 desde la API (`restituir-escrituras.js`), limpiando con el
`.replace(/\s+([,;:.])/g,'$1')` de la fila 22 y sin usar `fix-escrituras.ts --write`, que
reintroduce ese espacio (error 9). **112 OK, 0 `REVISAR_MANUAL`.**

## Hallazgo grave 2: 35 de las 56 citas de líder no se pueden verificar

Las 56 citas de líder que el curso ya traía enlazan a un discurso. Al buscar el texto de cada
una **dentro de ese mismo discurso**:

| Estado | Citas |
|---|---:|
| Aparece literal → verificada y anclada al párrafo | **21** |
| El discurso **no existe** en esa URL (el sitio redirige al índice, HTTP 200) | **17** |
| El discurso existe pero **la cita no aparece literalmente en él** | **18** |

Las 35 tampoco aparecen en el manual oficial de su propia lección, ni en el material del maestro
ni en el de preparación. Cinco se leyeron a mano para descartar que fuera rigidez del
comparador; el más claro es `r200-l24`:

> **el archivo pone en boca del élder Holland:** «Si necesitan medicación o terapia profesional
> para aliviar el sufrimiento mental o emocional, no lo rechacen por vergüenza…»
>
> **«Como un vaso roto» realmente dice:** «…busquen el consejo de personas certificadas». Las
> palabras «medicación» y «terapia» no aparecen en el discurso.

Es decir: son **paráfrasis presentadas como cita textual**, con autor, título de discurso, revista
y número de página que no verifican. Es el mismo patrón de los `chapterUrl` inventados de
`libro-de-mormon-2`, pero sobre las palabras de líderes de la Iglesia.

**No se tocaron**: la corrección tiene varias formas defendibles y varias preguntas del quiz se
apoyan en ellas, así que la decisión es de Axel. Las tres opciones están en el informe de la
sesión.

## Lo que sí se pudo verificar y quedó aplicado

- **38 atribuciones sin respaldo → 0.** Las 23 combinaciones lección/líder se buscaron en el
  manual oficial de su propia lección y **las 23 estaban ahí**, con ancla y fuente reales. Se
  agregaron como `enseñanza` (método de la fila 32: se corrige con una cita que trae el manual de
  la propia lección, no borrando la pregunta). Otras 9 combinaciones que el detector propio seguía
  marcando se resolvieron igual, buscando además en el material del maestro.
- **21 de las 56 citas viejas quedaron verificadas** contra su propio discurso y con ancla `#pN`.
- **28 pasajes agregados** a las lecciones cuyo quiz los evaluaba sin que la lección los enseñara.
  El slug del libro **se cosechó de los links ya auditados de los 12 cursos** (66 libros); el
  único que no aparecía en ninguno, 4 Nefi, se dedujo del patrón de sus hermanos y **se verificó
  contra la API antes de usarlo**.
- **Cuestionarios**: se reemplazó la apertura genérica por una que manda al pasaje y se cerró la
  síntesis con la invitación a orar, en las 28 lecciones.

## Un falso negativo del `audit-autores-quiz.ts`

Después de agregar las primeras 23 citas, el script oficial informó **`TOTAL: 0`** mientras el
inventario propio seguía marcando 8 lecciones. Se verificó a mano: **el inventario propio tenía
razón** — «Parley Pratt», «Bradley Foster», «Jean Bingham», «Sheri Dew», «Cheryl Esplin», «Reyna
Aburto», «Massimo» y «Julie Beck» aparecían en el quiz y en ninguna sección de su lección. El
script parece darse por satisfecho cuando *alguna* `enseñanza` de la lección coincide, en vez de
exigirlo por nombre. Conviene revisarlo antes de usarlo como criterio de cierre en otros cursos.

## Herramientas nuevas

| Archivo | Qué hace |
|---|---|
| `buscar-cita.js <curso> <id> <apellido> [--prep]` | busca a un líder en el manual de la lección e imprime el párrafo con su ancla |
| `anclar-citas.js <curso> [--write]` | verifica cada cita contra su propio discurso y le agrega el ancla `#pN` |
| `diag-citas.js <curso>` | clasifica las citas sin ancla en «link roto» y «no textual» |
| `restituir-escrituras.js <curso> [--write]` | restituye el texto de Escritura desde la API |
| `agregar-pasaje.js <curso> <ops.json> [--write]` | agrega un pasaje al bloque `escrituras`, cosechando el slug del libro |
| `cuest.js <curso> [id...]` | volcado del cuestionario marcando qué dispara ORAR y ESCUDRIÑAR |
| `espacio.js <curso> [--write]` | quita el espacio antes de puntuación sin tocar los puntos suspensivos |
| `subir.js <curso> <de> <a> [n]` | lista las preguntas a mover de puesto en la pasada correctiva |

---

## Corrección de las 35 citas no verificables (misma sesión, después del cierre)

Axel pidió corregirlas trayendo citas reales del manual. Se hizo con `/seminary-enrichment`, cuya
regla crítica —«solo citas genuinas, nunca inventadas»— es exactamente el defecto encontrado.

### Primero: mi propio detector tenía un falso negativo

**No eran 35 sino 30.** El comparador de `anclar-citas.js` normalizaba conservando la puntuación,
y el manual trae la cita seguida de su fuente entre paréntesis: la del élder Scott en `r200-l01`
termina en «…todo lo que Él tiene.» y el manual dice «…todo lo que Él tiene (véase “Cómo obtener
ayuda del Señor”…)». El punto final impedía la coincidencia aunque el texto fuera idéntico.
`verificar-citas.js` compara **solo letras y números** y recuperó 5 citas que eran genuinas.

Es la tercera vez en esta sesión que un detector propio dice «no» y está equivocado. La regla que
lo evita ya estaba escrita en el prompt (fila 12 / error 8) y aun así se repitió: **verificar a
mano un caso que el detector reporta como negativo, no solo los positivos.**

### Resultado

| Estado de las 90 citas de líder | Antes | Ahora |
|---|---:|---:|
| Verificadas contra su propio discurso, con ancla `#pN` | 21 | 22 |
| Verificadas contra el manual de su lección, con ancla | 32 | **68** |
| **No verificables** | **35** | **0** |

Las 30 se reemplazaron por citas reales del manual oficial de su propia lección. El texto y la
fuente **no se transcribieron a mano**: `reemplazar-cita.js` los extrae verbatim del HTML de la
API a partir del ancla del párrafo, que es justamente lo que fallaba en las citas reemplazadas.

### La cascada que pide la skill

La skill advierte que al reemplazar una `enseñanza` hay que revisar `cuestionario` y `questions`,
porque una pregunta puede seguir citando al autor o al contenido viejo y **ningún chequeo mecánico
lo detecta**. Se comprobó en dos niveles:

1. **Autor.** `dependencias.js` separó las 30 en 14 **libres** (nadie las nombra) y 16 **atadas**
   (el quiz o el cuestionario nombra al autor). En 12 de las 16 se encontró cita **del mismo autor**
   en el mismo manual, así que la pregunta siguió siendo válida. Las otras 4 dejaron 5 preguntas
   citando a un líder que ya no estaba: se reescribieron ancladas al autor y al texto nuevo.
2. **Contenido.** `cotejar.js` imprime la cita nueva junto a las preguntas que nombran a ese autor.
   Ahí aparecieron los casos que el chequeo de autor no ve: `r200-l16` Q3 describía el anclaje del
   Templo de Filadelfia, que **no está en el manual de la lección**; `r200-l20` Q4 citaba «nociones
   exageradas de individualismo»; `r200-l13` Q3 la frase «corazones, esperanzas, vidas, amor,
   familia, futuro, todo».

   Cuando el manual traía el párrafo que la pregunta describía, se reancló la cita en vez de
   reescribir la pregunta: `r200-l11` pasó a `#p26` («nadie se casa con la perfección, nos casamos
   con el potencial», que es literal lo que preguntaba el cuestionario), `r200-l22` a `#p17`
   («Se está preocupando por el problema equivocado») y `r200-l26` a `#p14`. En `r200-l13` y
   `r200-l20` se agregó una segunda cita del mismo autor en vez de sustituir. Las 9 restantes se
   reescribieron.

### Un título de fuente que estuve a punto de inventar

Al armar el plan puse como fuente de la cita de `r200-l19` «El trabajo más noble», citado en el
material del maestro. **Ese título no existe**: es exactamente el defecto que se estaba
corrigiendo. El manual declara la fuente real dos oraciones más abajo — «Nuestro deber sagrado de
honrar a la mujer», *Liahona*, julio de 1999, pág. 45 — y se usó esa. Conviene revisar el plan
antes de aplicarlo buscando fuentes que no vengan copiadas del manual.

### Herramientas nuevas de esta pasada

| Archivo | Qué hace |
|---|---|
| `verificar-citas.js <curso> [--write]` | verifica cada cita contra su discurso y contra el manual; compara solo letras y números |
| `cosechar-citas.js <curso> [id...]` | extrae TODAS las citas del manual de una lección, con autor, fuente y ancla |
| `dependencias.js <curso>` | separa las citas en libres y atadas a una pregunta |
| `reemplazar-cita.js <curso> <plan.json> [--write]` | reemplaza una `enseñanza` con el texto verbatim del ancla del manual |
| `cotejar.js <curso> <plan.json>` | imprime la cita nueva junto a las preguntas que nombran a ese autor |
| `buscar-frase.js <slug> <frase>` | busca en el manual cacheado el párrafo que respalda una pregunta ya escrita |
