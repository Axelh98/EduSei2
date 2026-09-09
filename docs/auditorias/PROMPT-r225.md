# Prompt — generación de `religion-225` (Fundamentos de la Restauración)

Para pegar tal cual al abrir la próxima sesión. **Todo lo medido acá es del 8-sep-2026, después
de cerrar `religion-200` en todos sus frentes.**

---

Sesión — Instituto, `religion-225` (Fundamentos de la Restauración)

R-200 quedó cerrado. R-250 y R-301 están cerrados en adivinabilidad del quiz pero les faltan
frentes; R-225 es el único curso del proyecto que **todavía no existe como contenido**. Vamos a
trabajar **en lotes de 3 a 5 lecciones**; al final de cada lote dame una tabla con lo generado y
lo que queda.

## Esto es generación, no auditoría

23 de las 28 lecciones tienen `secciones: []`. Las otras 5 tienen material pero **incompleto**.
No hay nada que auditar hasta que exista el contenido.

## Tocá solo `lib/content/religion-225`

No edites `PLAN-DE-AUDITORIA.md`, `README.md`, `ESTADO.md` ni `CICLO-GENERACION-AUDITORIA.md`:
proponémelos en la respuesta y los aplico yo. Tu bitácora es
`docs/auditorias/BITACORA-r225.md`. No corras `build-search-index.ts`, `regen-content-map.ts`
ni `audit-export.ts`.

## Estado medido — para contrastar, no para creer

```
lecciones                    28   (todas en el manifiesto, todas con chapterUrl, 0 huérfanas)
  con material                5   → r225-l01 … r225-l05
  vacías (secciones: [])     23   → r225-l06 … r225-l28
preguntas de quiz            23   (deberían ser 28 × 7 = 196)
  con options.length != 4     6   (ítems de verdadero/falso, 2 opciones)
escrituras                   10   con link: 0
citas de líder                5   con ancla #: 0
convención                        resumen (bloques), no clásica
posición del índice               25/22/17/26 ✓ (ya rotado el 8-sep)
puesto por longitud               57/22/13/9  ← sobre solo 23 preguntas
```

Las 5 lecciones con material están incompletas: `l01` (5 preguntas: 4,4,2,4,2), `l02` (5: 4,4,4,2,4),
`l03` (4: 4,2,4,4), `l04` (4: 4,4,2,4), `l05` (5: 4,4,2,4,4).

## La convención `resumen`

R-225 y R-301 no usan la forma clásica (`contexto` / `escrituras` / `enseñanza` / `conclusion` /
`cuestionario`). Usan **una sola sección** `resumen` con un array `bloques`:

```json
{ "id": "r225-l02",
  "secciones": [ { "tipo": "resumen", "bloques": [
    { "tipo": "parrafo",   "texto": "…" },
    { "tipo": "escritura", "referencia": "José Smith—Historia 1:15–17", "texto": "…", "link": "…" },
    { "tipo": "cita",      "autor": "…", "fuente": "…", "texto": "…", "link": "…" },
    { "tipo": "doctrinal", "puntos": ["…", "…"] },
    { "tipo": "reflexion", "preguntas": ["…", "…"] }
  ] } ],
  "questions": [ … 7 … ] }
```

El orden habitual es `parrafo → escritura(s) → cita(s) → parrafo → doctrinal → reflexion`.
**En R-225 los bloques `escritura` y `cita` de las 5 lecciones existentes NO tienen `link`; los
nuevos sí tienen que tenerlo.**

Equivalencias con la skill `seminary-enrichment`, que está escrita para la convención clásica:

| Skill (clásica) | Acá (`resumen`) |
|---|---|
| `contexto` | los `parrafo` de apertura |
| `escrituras` | los bloques `escritura` |
| `enseñanza` | los bloques `cita` |
| `conclusion` | el último `parrafo` + `doctrinal` |
| `cuestionario` (6 preguntas) | `reflexion` |

## El manual oficial

Los dos existen y los dos hacen falta:

- **Material de preparación** (el que trae el `chapterUrl` del manifiesto):
  `/manual/foundations-of-the-restoration-class-preparation-material-2019/lesson-N-class-preparation-material-<slug>`
- **Material del maestro** (acá viven varias citas de líder):
  `/manual/foundations-of-the-restoration-teacher-material-2019/lesson-N-teacher-material`

Se leen con la **API v3**, no con `web_fetch`:

```
https://www.churchofjesuschrist.org/study/api/v3/language-pages/type/content?lang=spa&uri=<pathname sin /study>
```

Devuelve HTML con `id="pN"` en cada párrafo: ese id es el ancla que va al final del `link`.

## Método por lote (3 a 5 lecciones)

1. Bajá los **dos** manuales de cada lección y cosechá las citas con `cosechar-citas.js`.
2. Escribí los bloques. **El texto de Escritura y el de las citas se copia del original, nunca se
   redacta**: `agregar-pasaje.js` trae el versículo de la API y `reemplazar-cita.js` trae la cita
   verbatim del ancla del manual.
3. Generá las 7 preguntas **contando el reparto de longitudes mientras las escribís** (ver abajo).
4. Corré el lote en seco (`patch.js` sin `--write`) antes de aplicar.
5. Al cerrar el lote: `validate-content.ts`, `verificar-citas.js`, `artefactos.js`, `espacio.js`.

## Los errores que ya se cometieron. No los repitas

Los nueve del `PROMPT-instituto.md` siguen valiendo. Estos cuatro salieron de las sesiones del
8-sep y son los que más caro salen en generación:

1. **El objetivo del quiz NO es «que la correcta deje de ser la más larga».** Eso es la fila 30:
   meter siempre la correcta dentro de la ventana de los distractores la deja en el puesto 2 o 3 y
   **crea una heurística nueva** (descartar los dos extremos acierta el 50 %). El objetivo es que
   sea la más larga **una de cada cuatro veces, como el azar**: apuntá a 25/25/25/25 y que el
   margen en los extremos sea **modesto (3 a 14 caracteres)**. La skill admite que esto pasa: «la
   lección generada el día que se midió salió con 6 de 7».
2. **La Escritura no se escribe de memoria.** En R-200, **63 de 84** textos de Escritura eran
   paráfrasis; uno presentaba como parte de 2 Nefi 26:24 una cláusula que es de 2 Nefi 2:7. Se
   restituyeron todos desde la API. Generá desde la API de entrada y te ahorrás esa pasada.
3. **Verificá cada cita en el momento de crearla.** En R-200, **30 de 56** citas de líder no
   verificaban: el discurso enlazado no existía (el sitio redirige al índice con HTTP 200) o el
   texto no aparecía en él. Eran paráfrasis presentadas como cita textual, con revista y número de
   página. Acá el manual está abierto mientras generás: copiar el texto del ancla es gratis en ese
   momento y carísimo después.
4. **No inventes el título de la fuente.** Al corregir R-200 estuve a punto de poner «El trabajo
   más noble» como título de un discurso que no se llama así; el manual declaraba el real dos
   oraciones más abajo. Si no ves la fuente, buscala en el párrafo siguiente antes de escribir algo.

Y una regla de la skill que acá aplica desde el minuto cero, no como corrección posterior:

- **Si cambiás una cita, revisá `reflexion` y `questions`.** Una pregunta que nombra a un autor o
  describe un contenido que ya no está en la lección es un defecto real que **ningún chequeo
  mecánico detecta**. En R-200 aparecieron 5 preguntas así al reemplazar citas, más otras 9 que
  describían el contenido viejo con el autor correcto.

## Cuidado con dos herramientas

- **`inv.js` ya entiende la convención `resumen`** (se arregló el 8-sep: antes cortaba con
  `continue` y no medía nada de R-225 ni R-301, informando 19 % donde la medición real era 94 %).
  Corré `test-inv.js` antes de confiar en su salida.
- **`audit-autores-quiz.ts` da falsos negativos.** En R-200 informó `TOTAL: 0` mientras 8 lecciones
  seguían nombrando en el quiz a líderes ausentes de la lección; se verificó a mano. Parece darse
  por satisfecho cuando *alguna* `enseñanza` coincide, en vez de exigirlo por nombre. **No lo uses
  como único criterio de cierre**: cruzá también con `inv.js`.

## Herramientas ya escritas

Scratchpad de la sesión que cerró R-200:
`C:\Users\axelh\AppData\Local\Temp\claude\C--Users-axelh-OneDrive---Church-of-Jesus-Christ-Aulasei\d0c2d7b5-c782-4512-b5f4-4fad78f26805\scratchpad`

Copialas y **verificá que funcionan sobre R-225 antes de confiar en su salida**.

| Archivo | Qué hace |
|---|---|
| `inv.js` · `test-inv.js` | inventario de los 8 frentes + barrido estructural; 11 casos de prueba |
| `evaluar.js` · `patch.js` | evaluador compartido · motor de parcheo con chequeo de salida, falla en bloque |
| `elegir.js <curso> <cand.json> <ops.json> [--puesto N]` | reparto de longitudes hacia 25/25/25/25, con libro mayor por curso |
| `medir.js` · `quiz.js` · `subir.js` | objetivo por pregunta · volcado barato · qué preguntas mover de puesto |
| `cosechar-citas.js <curso> [id...]` | extrae TODAS las citas del manual de una lección, con autor, fuente y ancla |
| `reemplazar-cita.js <curso> <plan.json>` | escribe la cita con el texto verbatim del ancla del manual |
| `verificar-citas.js <curso> [--write]` | verifica cada cita contra su discurso y contra el manual, y le pone el ancla |
| `buscar-cita.js` · `buscar-frase.js` | busca un líder o una frase en el manual e imprime el párrafo con su ancla |
| `dependencias.js` · `cotejar.js` | qué citas están atadas a una pregunta · cita nueva contra las preguntas que la nombran |
| `agregar-pasaje.js <curso> <ops.json>` | agrega un pasaje trayendo el versículo de la API; cosecha el slug del libro |
| `restituir-escrituras.js <curso>` | restituye el texto de Escritura desde la API |
| `ajeno.js` · `artefactos.js` · `espacio.js` | pasajes ajenos al cuerpo · barrido de salida · espacio antes de puntuación |
| `panorama.js` · `cuest.js` | estado de los 12 cursos · volcado del cuestionario con sus marcas |

`elegir.js` lleva un **libro mayor** (`ledger-religion-225.json`) con las preguntas ya
rebalanceadas. Sin él, cada lote mira las preguntas todavía sin tocar, cree que el puesto 1 está
lleno, y empuja el lote entero a 2/3/4: al terminar el curso el sesgo cambia de signo en vez de
desaparecer.

## Las 28 lecciones

| # | Título |
|---|---|
| 1 | El preludio de la Restauración |
| 2 | La Primera Visión |
| 3 | Cómo adquirir conocimiento espiritual |
| 4 | La doctrina de la revelación |
| 5 | La salida a luz del Libro de Mormón |
| 6 | El Libro de Mormón — La piedra clave de nuestra religión |
| 7 | La restauración del sacerdocio |
| 8 | La organización de la Iglesia de Jesucristo |
| 9 | Jesucristo, nuestro divino Redentor |
| 10 | Seguir a los profetas vivientes del Señor |
| 11 | El recogimiento de Israel |
| 12 | El establecimiento de la causa de Sion |
| 13 | Las leyes de Dios |
| 14 | El Señor revela Escrituras adicionales |
| 15 | El plan del Padre Celestial y nuestro potencial divino |
| 16 | El Templo de Kirtland y las llaves del sacerdocio |
| 17 | Permanecer fieles en medio de la oposición y la aflicción |
| 18 | Las mujeres Santos de los Últimos Días y la Sociedad de Socorro |
| 19 | La redención de los muertos |
| 20 | Las ordenanzas y la adoración en el templo |
| 21 | La doctrina del matrimonio eterno y la familia |
| 22 | El matrimonio plural |
| 23 | La misión profética y el martirio de José Smith |
| 24 | El profeta José Smith, un vidente escogido |
| 25 | La sucesión en la Presidencia y el éxodo hacia el oeste |
| 26 | La Iglesia en el oeste |
| 27 | La revelación sobre el sacerdocio |
| 28 | El Señor está apresurando Su obra |

Las lecciones 22 y 27 (matrimonio plural y la revelación sobre el sacerdocio) son temas
históricamente sensibles: **ceñite a lo que dice el manual oficial y a los Temas del Evangelio de
la Iglesia**, sin agregar interpretación propia.

## Al cerrar

Corré y reportá: `validate-content.ts`, `audit-doctrinal.ts --detalle`, `audit-completitud.ts`,
`audit-escrituras.ts`, `audit-autores-quiz.ts` (cruzado con `inv.js`, ver arriba),
`audit-distribucion-respuestas.ts religion-225 --write`, `audit-chapterurls.ts`,
`audit-links-citas.ts`, `verificar-citas.js`, el inventario propio, el barrido estructural y el
de artefactos.

**Tres falsos positivos conocidos, no los persigas:** `audit-chapterurls.ts` reporta
«desalineadas» cuando el `id` no tiene forma `leccion-N` (la columna que vale es «rotas»);
`audit-links-citas.ts` reporta «sin ancla» para anclas de recuadro (`#aside1_p3`, `#figure6_p29`)
y «no resuelve a un discurso» para links a páginas de manual, que no traen `canonical`.
`artefactos.js` marca «espacio antes de puntuación» ante un punto suspensivo de omisión, que en
español sí lleva espacio delante.

## Dos cosas sueltas del repo

- **`lib/content/_test/`** tiene su propio `_manifest.json` dentro de `lib/content/`: cualquier
  script que recorra `lib/content/*/_manifest.json` lo levanta como si fuera un curso. Hoy no
  llega al sitio (no está en `registry.ts`), pero conviene sacarlo.
- **`libro-de-mormon-1/_auditoria-snapshot-original.json`** hace fallar `validate-content.ts`
  desde el 28-ago: es un array donde el validador espera un objeto. Es el único fallo del proyecto.
