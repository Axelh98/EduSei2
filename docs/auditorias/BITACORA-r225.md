# Bitácora — generación de `religion-225` (Fundamentos de la Restauración)

Curso de Instituto, 28 lecciones, convención `resumen` (una sección con `bloques`).
Punto de partida medido el 8-sep-2026: 5 lecciones con material incompleto (l01–l05) y 23 vacías.
Prompt de la sesión: `docs/auditorias/PROMPT-r225.md`.

---

## Lote 1 — `r225-l06`, `r225-l07`, `r225-l08` (8-sep-2026)

| lección | título | bloques | escrituras | citas | reflexión | quiz |
|---|---|---|---|---|---|---|
| r225-l06 | El Libro de Mormón — La piedra clave de nuestra religión | 10 | 3 | 2 | 6 | 7 |
| r225-l07 | La restauración del sacerdocio | 10 | 3 | 2 | 6 | 7 |
| r225-l08 | La organización de la Iglesia de Jesucristo | 10 | 3 | 2 | 6 | 7 |

Las tres cierran los ocho frentes del evaluador (`patch.js --check`): Cristo, sustancia, ≥3
escrituras, conclusión en rango, cuestionario de 6 con pregunta de orar y de escudriñar, sin
líderes huérfanos, quiz de 7 × 4 opciones y sesgo de longitud ≤2 en cada extremo.

### De dónde salió cada cosa

- **Escrituras**: `pasaje225.js`, que trae el versículo de la API v3 y arma el link con el slug
  cosechado de los links ya auditados del proyecto. Ninguna se escribió de memoria.
  `audit-escrituras.ts religion-225` → **9 de 9 OK** (las 9 nuevas; las 10 viejas de l01–l05 no
  tienen `link` y el script no las ve).
- **Citas de líder**: `cita225.js`, que copia el texto verbatim del ancla del manual (material de
  preparación y del maestro). Las seis nuevas verificaron: cinco contra su propio discurso, con
  ancla `#pN` agregada por `verificar-citas.js`, y la de Bednar contra el manual (ver abajo).
  `audit-links-citas.ts` → **0 links rotos**.

### Lo que hubo que arreglar en las herramientas antes de confiar en ellas

1. **La URL del material del maestro que declara el prompt está incompleta.** No es
   `lesson-N-teacher-material`, sino `lesson-N-teacher-material-<mismo slug del título>`. Con la
   forma corta el sitio responde **200 con el índice del manual entero**, no con la lección —
   exactamente la trampa de la fila 17 del catálogo. `m225.js` deriva ahora el slug del maestro
   desde el `chapterUrl` de preparación y aborta si el título devuelto no dice «Lección N».
2. **`evaluar.js` no medía nada de la convención `resumen`**: cortaba con `CONVENCION RESUMEN` y
   devolvía. Se le portó la normalización que `inv.js` ya tenía (bloques → tipos clásicos),
   trabajando sobre una **copia** del array: `patch.js` escribe el JSON después de evaluarlo y
   mutarlo habría inyectado las secciones sintéticas en el archivo.
3. **`verificar-citas.js` solo miraba secciones `enseñanza`** — ninguna cita de R-225 vive ahí.
   Ahora recorre también los bloques `cita`, y prueba los dos manuales sea cual sea el que
   apunte el `chapterUrl` (R-200 apunta al del maestro; R-225, al de preparación).
4. `cosechar-citas.js` asume el patrón de R-200 (`chapterUrl` = material del maestro) y no sirve
   tal cual para este curso; se reemplazó por `m225.js` + `cita225.js`.

### Spec de largo de la convención `resumen` (decidida acá, faltaba)

`audit-completitud.ts` y `audit-doctrinal.ts` cuentan estas lecciones y las saltean porque la
convención no tenía spec. La que se fijó, y que aplican `evaluar.js` e `inv.js`:

| frente | cómo se mide en la convención `resumen` |
|---|---|
| `contexto` | los `parrafo` de apertura (todos menos el último), 150–340 palabras |
| `conclusion` | **el párrafo de cierre solo**, 80–140 palabras — la misma vara que la clásica |
| `doctrinal` | bloque aparte, 4 a 6 puntos |
| Cristo / sustancia | se busca en párrafo de cierre **+** puntos doctrinales, que es donde vive la doctrina |
| `cuestionario` | los `preguntas` del bloque `reflexion`, 6, con una de orar y una de escudriñar |
| `escrituras` | los bloques `escritura`, ≥3, **con `link`** (los de l01–l05 no lo tienen) |

Sumar los puntos doctrinales al párrafo de cierre daba `CONCL-LARGA` en el 100 % de las
lecciones bien escritas (271, 293 y 257 palabras en este lote): el defecto era de la medición,
no del contenido.

### Reparto de longitudes del quiz

Se planificó el puesto de cada respuesta correcta **antes** de escribir (`banda.js`, que reusa la
función `banda` de `elegir.js` con los mismos MARGEN_MIN/MAX y HOLGURA) y se ajustó hasta que las
21 preguntas cayeran en el reparto buscado:

```
puesto por longitud del lote:  5 / 5 / 6 / 5   (1 = la correcta es la más larga)
```

El objetivo no es que la correcta deje de ser la más larga, sino que lo sea una de cada cuatro
veces. Las 21 preguntas quedaron anotadas en `ledger-religion-225.json` para que el próximo lote
no crea que el puesto 1 ya está lleno y empuje todo a 2/3/4.

`audit-distribucion-respuestas.ts religion-225` → **0:25 % 1:27 % 2:23 % 3:25 % ✓** sobre 44
preguntas. No hizo falta rotar.

### Falsos positivos verificados a mano en este lote

- **`audit-autores-quiz.ts` reporta 8 casos, los 8 falsos.** Dice «la lección no tiene sección
  enseñanza» porque busca solo `secciones[].tipo === 'enseñanza'` y en esta convención los
  autores viven en bloques `cita`. Se verificaron los ocho uno por uno contra el archivo
  (l02 Hinckley, l03 Oaks, l06 Bednar ×2, l07 Oaks y Renlund, l08 Christofferson ×2): todos
  están respaldados por una cita de su propia lección. `inv.js`, que sí normaliza la convención,
  informa **sin líderes huérfanos 8/8**. Es el cruce que pide el prompt.
- **`audit-chapterurls.ts`**: 28 «desalineadas», **0 rotas**. Falso positivo conocido (el `id` no
  tiene forma `leccion-N`).
- **`audit-doctrinal.ts` y `audit-completitud.ts`** no miden nada de este curso: «sin lecciones de
  convención clásica». Con la spec de arriba ya escrita, portarla a esos dos scripts es trabajo
  pendiente y sale de esta bitácora.

### Un caso que vale documentar: Bednar, «Velando… con toda perseverancia»

La cita quedó verificada contra el **manual** (`linkManual` → `#p19`) y no contra el discurso,
aunque el discurso existe y contiene el pasaje. La razón es una diferencia real de traducción:
el manual dice «la combinación singular de **estos** dos factores» y el discurso, «de **esos**
dos factores». Se publicó la variante del manual, que es la fuente que la lección usa, con el
`link` al discurso y el `linkManual` con el ancla exacta. `audit-links-citas.ts` la marca ⚓ «sin
ancla al párrafo» porque los ids de los discursos de 2010 son numéricos (`28932198`), no `pN`.

También hubo que **marcar la omisión** con `[…]` donde se había recortado una referencia
intercalada del manual: sin la marca, la sonda de `verificar-citas.js` compara una tirada que en
el original está partida por esa referencia y da «no verificable» sobre una cita que sí es
textual.

### Estado del curso al cerrar el lote 1

```
lecciones                    28
  con material                8   → l01–l08
  vacías (secciones: [])     20   → l09–l28
preguntas de quiz            44   (faltan 140 para 28 × 7 = 196)
escrituras                   19   con link: 9   (las 10 de l01–l05 siguen sin link)
citas de líder               11   verificadas: 11
validate-content.ts               1 problema, ajeno al curso
                                  (libro-de-mormon-1/_auditoria-snapshot-original.json)
```

`_manifest.json`: se sincronizaron `questionCount` (0 → 7) y `hasStudy` (false → true) de las
tres lecciones nuevas. Sin eso, `validate-content.ts` falla.

---

## Lote 1b — completar `r225-l01` … `r225-l05` (8-sep-2026)

Las cinco lecciones que ya tenían material estaban a medias en todos los frentes. Lo que había y
lo que quedó:

| | antes | ahora |
|---|---|---|
| escrituras por lección | 2, **ninguna con `link`** | 3, todas con link y texto de la API |
| preguntas de `reflexion` | 4 | 6, con una de escudriñar y una de orar |
| preguntas de quiz | 4 o 5, con ítems de verdadero/falso de 2 opciones | 7 × 4 opciones |
| citas de líder | 1 | 2 |
| frentes del evaluador | 4 a 6 abiertos por lección | los nueve cerrados |

**El texto de Escritura guardado era paráfrasis, no cita.** Al restituirlo desde la API con
`escr225.js`, seis de los diez pasajes existentes crecieron entre un 50 % y un 265 %: José
Smith—Historia 1:18–19 pasó de 395 a 812 caracteres, D. y C. 121:26, 33 de 276 a 527, JS—H
1:33–34 de 447 a 620. Lo que había eran extractos abreviados presentados como el versículo
entero. Es el defecto 2 del prompt, y aparece igual en un curso de cinco lecciones que en uno de
ochenta y cuatro.

`pasaje225.js` tuvo que aprender a leer **listas** de versículos («1 Corintios 2:11, 14»,
«D. y C. 121:26, 33»), que es como el manual cita versículos sueltos del mismo capítulo y que la
versión anterior descartaba como «REFERENCIA ILEGIBLE».

Escrituras agregadas para llegar a tres: 1 Nefi 13:13–16 y 13:34 (l01), JS—H 1:11–12 y 1:16–17
(l02), Helamán 5:12 (l03), D. y C. 9:7–8 (l04) y Éter 5:2–4 (l05). Todas salen de los pasajes que
el propio manual manda leer.

---

## Lote 2 — `r225-l09` … `r225-l13` (8-sep-2026)

| lección | título | escrituras | citas | reflexión | quiz |
|---|---|---|---|---|---|
| r225-l09 | Jesucristo, nuestro divino Redentor | 3 | 2 | 6 | 7 |
| r225-l10 | Seguir a los profetas vivientes del Señor | 3 | 2 | 6 | 7 |
| r225-l11 | El recogimiento de Israel | 3 | 2 | 6 | 7 |
| r225-l12 | El establecimiento de la causa de Sion | 3 | 2 | 6 | 7 |
| r225-l13 | Las leyes de Dios | 3 | 1 | 6 | 7 |

`r225-l13` lleva una sola cita: el material de preparación de esa lección no transcribe ninguna
—solo remite a discursos completos— y el del maestro trae únicamente la del élder Renlund.

**Flujo que se usó y conviene repetir**: escribir las secciones con `texto` y `link` en
`"PENDIENTE"` y rellenarlos después con `escr225.js --write`, que trae el versículo de la API.
Evita pegar 15 pasajes a mano en el archivo de operaciones y garantiza que el texto no salga de
la memoria.

### Dos defectos reales que encontraron las auditorías de cierre

1. **Un link de discurso inventado.** La cita del élder Maynes (l02) apuntaba a
   `/liahona/2017/06/young-adults/the-first-vision-key-to-truth`, que responde **200 con el índice
   de la revista de junio de 2017**, no con el discurso. El slug real no lleva `/young-adults/`.
   Lo detectó `audit-links-citas.ts`; es el mismo patrón de la fila 17 y no es un falso positivo.
2. **Un líder huérfano de verdad.** La explicación de `r225-l03` quiz#5 citaba al élder Holland
   («aférrense al conocimiento que ya tienen») en una lección que no lo nombraba en ninguna
   parte. Se resolvió incorporando esa enseñanza —que el manual sí trae, en su sección 2— al
   párrafo de apertura, con su atribución.

Los detectó el cruce a mano, no el script: `audit-autores-quiz.ts` informa **23 casos** sobre este
curso y los 23 son ilegibles como criterio, porque no entiende la convención `resumen`. Se
verificaron los 23 uno por uno; de ahí salió el caso de Holland, que era el único real.

### Omisiones dentro de una cita: marcarlas o la verificación falla

Pasó dos veces con citas del élder Bednar (l06 y l09). Al copiar del manual se recortó una
referencia intercalada —`(véase 1 Nefi 13:26, 28–29…)`, `(véase Alma 34:14)`— **sin poner `[…]`**.
La sonda de `verificar-citas.js` busca la tirada más larga entre cortes editoriales; si la
omisión no está marcada, esa tirada no existe en el original y la cita se informa como «no
verificable» aunque sea textual. Con la marca puesta, las dos verificaron.

### Cierre de los dos lotes

Corrido sobre las 13 lecciones con material:

| chequeo | resultado |
|---|---|
| inventario de los 9 frentes | **13/13 en todos** |
| barrido estructural (`inv.js`) | 0 defectos |
| `audit-escrituras.ts` | **39/39 OK** |
| `verificar-citas.js` | **25/25 verificadas** (21 contra su discurso, 4 contra el manual) |
| `audit-links-citas.ts` | 0 links rotos · 2 «no resuelven» = links a página de manual (falso positivo) |
| `audit-distribucion-respuestas.ts --write` | 74 preguntas rotadas → **25/25/24/25 ✓** |
| puesto por longitud de la correcta | **23/91 más larga (25 %)** · 21/91 más corta (23 %) |
| `audit-chapterurls.ts` | 0 rotas (28 «desalineadas» = falso positivo conocido) |
| `artefactos.js` · `espacio.js` | 0 · 0 |
| `validate-content.ts` | 1 problema, ajeno al curso |

La rotación de posiciones se corrió **después** de fijar los puestos de longitud y no los movió:
rotar el array de `options` no cambia cuál opción es la más larga.

### Estado del curso al cerrar el lote 2

```
lecciones                    28
  con material               13   → l01–l13
  vacías (secciones: [])     15   → l14–l28
preguntas de quiz            91   (faltan 105 para 28 × 7 = 196)
escrituras                   39   con link: 39   ·  verificadas contra la API: 39
citas de líder               25   verificadas: 25
libro mayor                  91   preguntas en ledger-religion-225.json
```

---

## Lote 3 — `r225-l14` … `r225-l18` (8-sep-2026)

| lección | título | escrituras | citas | reflexión | quiz |
|---|---|---|---|---|---|
| r225-l14 | El Señor revela Escrituras adicionales | 3 | 2 | 6 | 7 |
| r225-l15 | El plan del Padre Celestial y nuestro potencial divino | 3 | 2 | 6 | 7 |
| r225-l16 | El Templo de Kirtland y las llaves del sacerdocio | 3 | 2 | 6 | 7 |
| r225-l17 | Permanecer fieles en medio de la oposición y la aflicción | 3 | 2 | 6 | 7 |
| r225-l18 | Las mujeres Santos de los Últimos Días y la Sociedad de Socorro | 3 | 2 | 6 | 7 |

`r225-l14` incluye la sección del manual sobre el libro de Abraham (papiros, datación, lo que se
sabe y lo que no). Se siguió la misma regla que para las lecciones 22 y 27: exponer lo que dice
el manual y los Temas del Evangelio, sin agregar interpretación propia.

### El sesgo de longitud del quiz salió tal como lo advierte la skill

Escritas las 35 preguntas sin mirar longitudes, **la correcta era la más larga en 32 de 35**. Es
exactamente lo que dice el checklist («asumí que te va a pasar a vos también») y la causa es
mecánica: la respuesta correcta se redacta primero y completa, y los distractores se escriben
después, más cortos.

De ahí salió una herramienta nueva, `asignar.js`: en vez de repartir los puestos a mano —lo que
en los lotes anteriores dejó ajustes de hasta 26 caracteres—, ordena las 7 preguntas de una
lección por el largo de su respuesta correcta y les reparte los puestos pedidos de la más larga a
la más corta. Con eso, cada pregunta queda en el puesto que le exige menos reescritura.

La corrección se hizo **alargando distractores**, no acortando respuestas correctas: 52 opciones
recibieron una condición plausible que las estira. Acortar la correcta la deja incompleta; alargar
un distractor lo hace más creíble, que es lo que pide la tabla de anti-patrones.

### Cierre de los tres lotes

Corrido sobre las 18 lecciones con material:

| chequeo | resultado |
|---|---|
| inventario de los 9 frentes | **18/18 en todos** |
| barrido estructural (`inv.js`) | 0 defectos |
| `audit-escrituras.ts` | **54/54 OK** |
| `verificar-citas.js` | **35/35 verificadas** (29 contra su discurso, 6 contra el manual) |
| `audit-links-citas.ts` | 0 links rotos · 5 «no resuelven» = links a página de manual (falso positivo) |
| `audit-distribucion-respuestas.ts --write` | 23 rotadas → **25/25/25/25 ✓** |
| puesto por longitud de la correcta | **32/126 más larga (25 %)** · 30/126 más corta (24 %) |
| `audit-chapterurls.ts` | 0 rotas |
| `artefactos.js` · `espacio.js` · `validate-content.ts` | 0 · 0 · 1 problema ajeno al curso |
| líderes huérfanos (cruce a mano) | **0 reales** · 7 respaldados por el cuerpo, no por una cita |

### Estado del curso al cerrar el lote 3

```
lecciones                    28
  con material               18   → l01–l18
  vacías (secciones: [])     10   → l19–l28
preguntas de quiz           126   (faltan 70 para 28 × 7 = 196)
escrituras                   54   con link: 54  ·  verificadas contra la API: 54
citas de líder               35   verificadas: 35
libro mayor                 126   preguntas en ledger-religion-225.json
```

### Pendiente para los próximos lotes

- l19–l28: 10 lecciones vacías. Dos lotes más.
- Lecciones 22 (matrimonio plural) y 27 (revelación sobre el sacerdocio): ceñirse al manual y a
  los Temas del Evangelio.
- Siete preguntas nombran a un líder que la lección desarrolla en su **cuerpo** pero no cita en un
  bloque `cita` (Holland en l03, Bednar en l04, Maxwell en l05, José Smith en l07, Christofferson
  en l10, más dos del lote 3). No son huérfanos —el alumno tiene de dónde sacar la respuesta—
  pero conviene decidir si la convención los admite antes de cerrar el curso.
- Portar la spec de la convención `resumen` (arriba) a `audit-completitud.ts` y
  `audit-doctrinal.ts`, que hoy declaran «nada que medir» sobre las 18 lecciones ya escritas.
  Mientras eso no esté, el cierre de este curso se apoya en `inv.js` y `evaluar.js` parcheados,
  no en las herramientas canónicas del repo, y no puede figurar en `PLAN-DE-AUDITORIA.md` con la
  misma vara que los demás.
- Auditoría de Nivel 2 (cualitativa), como la que cerró `libro-de-mormon-2`: leer el contenido
  contra el checklist, no solo contarlo.

### Herramientas nuevas de esta sesión

Todas en el scratchpad, junto a las heredadas de la sesión de R-200:

| archivo | qué hace |
|---|---|
| `m225.js` | baja los dos manuales de una lección de R-225 y los vuelca con el ancla de cada bloque; aborta si el sitio devuelve el índice |
| `cita225.js` | extrae el texto verbatim de un ancla del manual y separa la fuente; `pN!m` fuerza el manual del maestro |
| `pasaje225.js` | trae un pasaje de la API y arma el link; acepta rangos y listas de versículos |
| `escr225.js` | deja el bloque de escrituras de una lección exactamente con las referencias del plan, con texto de la API y conservando los comentarios |
| `banda.js` | dice en qué rango de longitud tiene que quedar cada respuesta correcta para caer en el puesto asignado |
| `asignar.js` | asigna los puestos por ranking de longitud, minimizando cuánto hay que reescribir |

A `patch.js` se le agregaron las operaciones `setSecciones`, `addBloque`, `setBloque` y
`delBloque` para la convención `resumen`. `setSecciones` se niega a pisar una lección que ya
tenga contenido salvo `"sobrescribir": true` explícito.
