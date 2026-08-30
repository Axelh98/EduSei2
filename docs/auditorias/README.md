# Auditorías de citas — índice

> 🗺️ **¿Empezás una sesión nueva de auditoría?** Andá primero a
> [`PLAN-DE-AUDITORIA.md`](PLAN-DE-AUDITORIA.md) — tiene el estado de los 12 cursos en las
> **tres** auditorías (citas de Escritura, citas de líder, y completitud de contexto/cuestionario/
> conclusión/quiz) en una sola tabla, y el orden sugerido de próximos pasos. Este README es el
> índice de los documentos de citas específicamente; el plan es el punto de entrada.

Cada archivo de esta carpeta documenta la verificación de las **citas de líderes de la
Iglesia** (secciones `enseñanza` y bloques `cita`) de un curso, contra su fuente
original en `churchofjesuschrist.org`. Desde agosto de 2026 también hay una auditoría
separada para **referencias de Escritura** (secciones `escrituras`) — ver
[Referencias de Escritura](#referencias-de-escritura) más abajo — y otra para la
**completitud de contexto/cuestionario/conclusión/quiz** — ver más abajo.

El estado general del trabajo vive en **[`../ESTADO.md`](../ESTADO.md)**. Este README
es solo el mapa de la carpeta.

Para auditar **todo el contenido**, y no solo las citas, hay un export a Excel:
ver [Volcado a Excel](#volcado-a-excel-para-auditores-externos) más abajo.

---

## Estado por curso

| Curso | Documento | Citas | Auditadas | Estado |
|---|---|---:|---:|---|
| Antiguo Testamento, 1.er semestre | [AT1](AUDITORIA-citas-AT1.md) | 110 | 110 | ✅ cerrado ¹ |
| Libro de Mormón (ambos semestres) | [libro-de-mormon](AUDITORIA-citas-libro-de-mormon.md) | 131 | 131 | ✅ cerrado |
| Doctrina y Convenios, 1.er semestre | [DyC1](AUDITORIA-citas-DyC1.md) | 80 | 50 | 🟡 63 % |
| Religión 250 | [R250](AUDITORIA-citas-R250.md) | 38 | 38 | ✅ cerrado |
| Religión 225 | [R225](AUDITORIA-citas-R225.md) | 5 | 5 | ✅ cerrado |
| Religión 301 | [R301](AUDITORIA-citas-R301.md) | 50 | 20 | 🟡 40 % |
| Religión 200 | [R200](AUDITORIA-citas-R200.md) | 56 | 1 | 🔴 2 % |
| **Total** | | **470** | **355** | **76 %** |

> ¹ `antiguo-testamento-1` lo revisó Axel a mano y lo dio por correcto. El documento
> solo detalla las 4 citas que había encontrado el detector; **no hay registro cita por
> cita** del resto de esa revisión.

**Quedan 115 citas**: R301 (30), DyC-1 (30), R200 (55). Ninguna tiene bandera
automática — hay que abrir el manual de cada lección.

---

## Qué encontró cada auditoría

Los cursos fallan de maneras distintas, y esa es la conclusión más útil del conjunto:

| Curso | Patrón dominante | Resultado |
|---|---|---|
| **Libro de Mormón** | Errores de *precisión* sobre citas genuinas | **Ninguna cita inventada.** 46 enlaces sin ancla, 12 textos alterados, 4 errores de atribución |
| **R250** | **Fabricación** | 16 de 38 con título de discurso inexistente o URL a otro discurso |
| **DyC-1** | **Fabricación** | De las 49 sin `link`, solo **7 eran textuales**; 28 no corresponden a ninguna fuente del autor |
| **R301** | **Fabricación** | **20 de 20 inválidas.** 17 de los discursos citados no existen |
| **R225** | **Paráfrasis** | 4 de 5 fuentes existen; el texto está reescrito, no transcrito |
| **AT-1** | **Paráfrasis** con `link` correcto | 2 casos con discurso real, ancla al párrafo correcto y texto igual reescrito |

Los cursos con fabricación masiva son los de lecciones temáticas. Libro de Mormón, que
va versículo por versículo, salió limpio.

---

## Cómo continuar

El método completo, los predictores y los comandos están en
[`../ESTADO.md`](../ESTADO.md). En corto:

1. Sacar el `chapterUrl` de la lección desde `_manifest.json`: apunta a su página del
   manual oficial de Seminario o Instituto **en español**.
2. Leer ahí las citas que el manual realmente usa, con autor, texto literal y referencia.
3. Si la `fuente` declarada trae título, **abrir además el índice de esa conferencia**
   (`/study/general-conference/AAAA/MM?lang=spa`) para confirmar que el discurso existe.
   Eso destapó los 17 títulos inventados de R301.
4. Poner en `link` la página oficial **donde ese texto se puede leer**: el discurso si
   está en línea en español, la página del manual si no.
5. `npx tsx scripts/validate-content.ts` después de cada tanda.

```bash
npx tsx scripts/extract-citas.ts                 # panorama de todos los cursos
npx tsx scripts/extract-citas.ts religion-301    # un curso
npx tsx scripts/extract-citas.ts --json          # con banderas, para filtrar
npx tsx scripts/extract-citas.ts --csv > citas.csv
npx tsx scripts/validate-content.ts
```

Las correcciones van en `lib/content/<categoryId>/<lessonId>.json`, en `autor`,
`fuente`, `texto` y `link`. **La prosa se guarda como array de párrafos**, un párrafo
por elemento; uno solo puede ir como string.

---

## Volcado a Excel para auditores externos

Para que alguien audite el contenido sin abrir el repo:

```bash
npx tsx scripts/audit-export.ts                  # los dos archivos
npx tsx scripts/audit-export.ts religion-250     # un curso
npx tsx scripts/audit-export.ts --solo-contenido
npx tsx scripts/audit-export.ts --solo-pendientes
npx tsx scripts/audit-export.ts --max-lineas 40  # filas más altas
```

Deja **dos archivos** en esta carpeta, porque son dos trabajos distintos:

| Archivo | Qué trae |
|---|---|
| `AulaSEI-contenido-AAAA-MM-DD.xlsx` | Las **450 lecciones que tienen material** de repaso, con sus 2565 preguntas de quiz. Es la auditoría de contenido. |
| `AulaSEI-pendientes-AAAA-MM-DD.xlsx` | Las **264 lecciones sin material**, con las 1205 preguntas de quiz que sí existen. Es la lista de lo que falta escribir. |

El corte es **por lección, no por curso**: una lección va al primer archivo si tiene
contexto, escrituras, citas o conclusión. Por eso Religión 225 aparece en los dos, con
5 lecciones y con 23.

### Estructura de cada archivo

Abre con una hoja `RESUMEN`, y después **dos pestañas por curso**:

- **`AT 1`** — una fila por lección. En el archivo de contenido: `Semana / Unidad ·
  Lección · Tipo · Contexto · Escritura 1-4 · Cita Profética 1-2 · Conclusión ·
  Preguntas Reflexivas · Cuestionario · Link Manual · Link en el sitio`. Rel-225 y
  Rel-301 llevan además `Puntos Doctrinales`. En el de pendientes, en vez del contenido
  va `Qué falta`.
- **`AT 1 Quiz`** — una fila por pregunta: `Lección · N° · Pregunta · Tipo · Opción 1-4
  · Respuesta correcta`, más `Referencia` y `Explicación` en los cursos que las tienen
  (solo LdM-1 trae referencia; LdM-1, Rel-225 y Rel-250 traen explicación).

Las dos últimas columnas de cada hoja son del auditor: `Estado` (desplegable OK /
Corregir / Falta / Revisar fuente) y `Observaciones`.

### Qué significan los colores

| | |
|---|---|
| **Celda azul subrayada** | Es un hipervínculo: se hace clic y se abre la fuente oficial |
| **Ámbar** | Falta el link donde debería haberlo |
| **Verde** | La opción correcta de una pregunta de quiz |
| **Rojo** | La lección no se ve en el sitio (`SOLO ARCHIVO`), o no tiene ni material ni cuestionario |

El dominio del sitio se puede cambiar con `AUDIT_SITE_URL`.

Los Excel **no se reimportan**: el auditor marca `Estado` y escribe en `Observaciones`,
y las correcciones se aplican a mano sobre `lib/content/<categoryId>/<lessonId>.json`.

---

## Convención de estos documentos

Cada cita verificada se registra con cuatro datos, en este orden:

1. **Fuente declarada** — lo que decía el archivo antes de tocarlo.
2. **Discurso real** — qué dio ese autor en esa fecha, según el índice oficial.
3. **Verificación** — qué se encontró al comparar.
4. **Acción tomada** — ✅ corregida / ⚠️ ajustada / ❌ reemplazada, con el texto final,
   la referencia completa y el `link`.

Se marca explícitamente cuando **cambia el autor**, porque es el error más fácil de
propagar sin querer.

**Nunca se inventan números de página.** Si no se verificaron, va título + revista +
fecha y nada más.

---

## Referencias de Escritura

Trabajo distinto del anterior: acá el `link` casi siempre existe de entrada, así que no hace
falta buscar el discurso — solo verificar que el `texto` guardado coincida con el versículo
real. El primer curso auditado fue **Doctrina y Convenios 1** (196 de 196 citas, ✅ cerrado):
ver [`AUDITORIA-escrituras-DyC1.md`](AUDITORIA-escrituras-DyC1.md). El patrón dominante ahí no
fue la fabricación sino la **paráfrasis no marcada** — 174 de 196 citas tenían el versículo
correcto pero reescrito, resumido o (en un grupo menor) etiquetado con la referencia
equivocada. `doctrina-y-convenios-2` quedó fuera porque todavía no tiene material de repaso.
Quedan sin tocar **~1011 de las 1207 referencias de Escritura** relevadas en todo el proyecto
(Libro de Mormón, Antiguo/Nuevo Testamento, Religión 200/225/250/301) — ver `../ESTADO.md`.

Esa primera pasada se hizo entera a mano; ya no hace falta repetirlo así. Hay dos scripts
(`scripts/audit-escrituras.ts` y `scripts/fix-escrituras.ts`) que automatizan la descarga, la
comparación y la corrección de los casos de alta confianza, dejando para revisión manual solo
el puñado que de verdad lo necesita. El método completo, los umbrales y sus límites están en
[`COMO-AUDITAR-ESCRITURAS.md`](COMO-AUDITAR-ESCRITURAS.md).

✅ **Libro de Mormón (29 de agosto de 2026):** `libro-de-mormon-1` cerrado (230/230, incluidas 16
anomalías heredadas de una auditoría manual previa del 28-ago). `libro-de-mormon-2` casi cerrado:
219/237 corregidas y verificadas, 18 pendientes de investigación adicional (posible capítulo o
libro equivocado, sin candidato convincente todavía). Ver
[`AUDITORIA-escrituras-libro-de-mormon.md`](AUDITORIA-escrituras-libro-de-mormon.md).

## Contexto, cuestionario, conclusión y quiz

Tercer tipo de auditoría, distinto de las dos anteriores: no verifica contra una fuente externa,
sino que chequea completitud y forma contra las reglas de generación de `seminary-enrichment`
(largo de `contexto`/`conclusion`, cantidad de preguntas de `cuestionario` y de `questions`,
presencia de al menos una cita de líder). Arrancó en agosto de 2026 comparando
`antiguo-testamento-1`, `libro-de-mormon-1` y `libro-de-mormon-2`: encontró que
`libro-de-mormon-2` no tiene `conclusion` en ninguna de sus 107 lecciones, su `cuestionario` está
fijo en 3 preguntas en vez de 6, y 57 lecciones no tienen ninguna cita de líder. Método completo,
script y la tabla comparativa en [`COMO-AUDITAR-CONTENIDO.md`](COMO-AUDITAR-CONTENIDO.md).

```bash
npx tsx scripts/audit-completitud.ts <categoria> [...] [--detalle]
npx tsx scripts/audit-completitud.ts --todos
```

Corrección posterior (29-ago-2026): la inconsistencia de `cuestionario`/`contexto` en
`libro-de-mormon-1` no son casos sueltos — es un bloque contiguo de 30 lecciones (Mosíah 5 a
Alma 7) generado con una convención más liviana. Y una primera muestra de Nivel 2 (calidad,
6 lecciones entre LdM-1 y LdM-2) encontró que el contenido que sí existe es de buena calidad en
ambos cursos — el problema es completitud, no calidad — más una zona ciega nueva: una pregunta de
quiz puede atribuir una frase a una autoridad real que no está respaldada por la cita guardada en
`enseñanza`, y ninguna auditoría actual la cubre (`questions` no tiene `link`). Detalle completo en
[`COMO-AUDITAR-CONTENIDO.md`](COMO-AUDITAR-CONTENIDO.md) §3 y §3.1.

Queda pendiente correrlo sobre el resto de los cursos, y ampliar el nivel cualitativo más allá de
esta primera muestra de 6 lecciones.

## Alcance: los documentos .md cubren sobre todo las citas

Las citas de líderes y las referencias de Escritura son la parte auditable con fuente
verificable de forma directa, y son las que tienen documentos de auditoría cita por cita.
`contexto`/`cuestionario`/`conclusion`/quiz tienen ahora una auditoría de **completitud y forma**
(ver arriba), pero todavía no una de **contenido leído** — sigue sin auditar si esas 3770
preguntas de quiz, esos ~425 `contexto` y `conclusion` dicen algo doctrinalmente correcto y
pedagógicamente bueno, más allá de tener el largo y la cantidad de ítems esperados.

Eso es lo que abre el [volcado a Excel](#volcado-a-excel-para-auditores-externos): pone
todo el material delante de un auditor —las 3770 preguntas de quiz incluidas— con el
link de cada escritura y de cada cita al lado. El detalle del corpus está en
[`../ESTADO.md`](../ESTADO.md).

Ojo con las preguntas de quiz: **no guardan de dónde salieron**. No tienen link, y solo
Libro de Mormón 1 trae `reference`. Verificarlas obliga a abrir el manual de la lección,
y 127 lecciones tampoco tienen `chapterUrl`.
