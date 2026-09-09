# Auditorías de citas — índice

> 🗺️ **¿Empezás una sesión nueva de auditoría?** Andá primero a
> [`PLAN-DE-AUDITORIA.md`](PLAN-DE-AUDITORIA.md) — tiene el estado de los 12 cursos en las
> **cuatro** auditorías (citas de Escritura, citas de líder, completitud de contexto/cuestionario/
> conclusión/quiz, y la doctrinal) en una sola tabla, y el orden sugerido de próximos pasos. Este
> README es el índice de los documentos de citas específicamente; el plan es el punto de entrada.

> ⭐ **Auditoría doctrinal y cierre de cursos (desde el 6-sep-2026).** Es la cuarta auditoría y la
> más nueva: mide si cada lección enseña de Jesucristo, si invita al Espíritu Santo y si devuelve al
> alumno al pasaje (`npx tsx scripts/audit-doctrinal.ts <curso>`). No tiene un documento por curso
> como las de citas; se registra en **bitácoras de trabajo**:
>
> | Documento | Para qué |
> |---|---|
> | [`BITACORA-generacion-doctrinal.md`](BITACORA-generacion-doctrinal.md) | Índice del proyecto: línea de base de los 12 cursos, orden de trabajo y defectos nuevos. **De solo lectura para una sesión de curso.** |
> | [`BITACORA-libro-de-mormon-1.md`](BITACORA-libro-de-mormon-1.md) | Curso cerrado el 7-sep-2026. Es el caso más completo que hay: 15 lotes, el estado final frente por frente y lo que quedó pendiente. |
> | [`PROMPT-cierre-de-curso.md`](PROMPT-cierre-de-curso.md) | Prompt listo para arrancar el cierre de otro curso, con el método y los errores ya cometidos. |
> | [`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md) | El catálogo de defectos: 29 filas, cada una con su alcance medido y la regla que la previene. |
>
> **Cursos cerrados en las tres columnas doctrinales:** `antiguo-testamento-2` (6-sep) y
> `libro-de-mormon-1` (7-sep). Los otros diez siguen sin trabajar en este frente.

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
| Doctrina y Convenios, 1.er semestre | [DyC1](AUDITORIA-citas-DyC1.md) | 80 | 80 | ✅ cerrado |
| Religión 250 | [R250](AUDITORIA-citas-R250.md) | 38 | 38 | ✅ cerrado |
| Religión 225 | [R225](AUDITORIA-citas-R225.md) | 5 | 5 | ✅ cerrado |
| Religión 301 | [R301](AUDITORIA-citas-R301.md) · [bitácora](BITACORA-r301.md) | 49 ⁵ | 49 | ✅ **cerrado (9-sep-2026)** — 32 reemplazadas |
| Religión 200 | [R200](AUDITORIA-citas-R200.md) | 56 | 17 | 🟡 30 % — **5 fabricadas/rotas** |
| Antiguo Testamento, 2.º semestre | [AT2](AUDITORIA-citas-AT2.md) | 61 | 61 | ✅ cerrado |
| Doctrina y Convenios, 2.º semestre | [DyC2](BITACORA-doctrina-y-convenios-2.md) | 50 ³ | 50 | ✅ cerrado — **todas con ancla verificada** |
| Libro de Mormón, 2.º semestre | [LdM2](BITACORA-libro-de-mormon-2.md) | 73 ⁴ | 73 | ✅ cerrado — **72 con ancla verificada por n-grama** |
| **Total** ² | | **614** ⁴ ⁵ | **575** | **94 %** |

> ⁵ **Religión 301, cerrado el 9-sep-2026.** Eran 50; quedan **49** porque `r301-l20` tenía dos
> citas y su manual oficial trae una sola de líder: antes que dejar la segunda sin respaldo, se
> borró el bloque. De las 50 originales, **32 no verificaban**. Los dos defectos aparecieron
> mezclados y conviene distinguirlos: *link que no resuelve a un discurso* (el de `r301-l11`
> respondía **200 con el índice de la revista**, no 404) y *link correcto con texto ajeno* (en
> `r301-l14` solo la primera frase era de Kearon y el resto se había agregado detrás). Los
> reemplazos salieron todos del manual oficial de cada lección — del ancla del manual o del
> discurso que el manual enlaza — y ningún slug se dedujo. Ver [`BITACORA-r301.md`](BITACORA-r301.md).

> ³ **Recontado el 8-sep-2026 sobre el manifiesto**: son **50**, no 54 — las otras 4 están en
> archivos huérfanos que la app no muestra. Las 50 tienen `link` con ancla al párrafo exacto,
> verificada por n-grama descargando la página (55/55 contando las de los huérfanos). La única que
> faltaba, la de Oaks en `doctrina-y-convenios-111`, se ancló a `#aside1_p3` —un recuadro— y por eso
> `audit-links-citas.ts` la sigue reportando como «sin ancla»: es el falso positivo de su regex,
> que solo acepta `#pN`. Una cita se reemplazó por pertinencia (ver `BITACORA-doctrina-y-convenios-2.md`).

> ¹ `antiguo-testamento-1` lo revisó Axel a mano y lo dio por correcto. El documento
> solo detalla las 4 citas que había encontrado el detector; **no hay registro cita por
> cita** del resto de esa revisión.

> ² **Los 585 de esta tabla ya no son todo el corpus.** Un conteo directo sobre `lib/content`
> da **619 citas de líder**: la reconstrucción de `libro-de-mormon-2` lo llevó de **39 → 69**
> (+30) y la sesión de DyC sumó **8** en `doctrina-y-convenios-1` (80 → 88). Esas se generaron con
> `seminary-enrichment`, verificadas al escribirlas, pero **ninguna auditoría de citas las cubrió**.
> Sobre el corpus real la cobertura sube a **~550 de 621 (89 %)** tras el cierre de
> `libro-de-mormon-2` el 8-sep-2026. Va con «~» porque los denominadores históricos de este curso
> no concuerdan entre sí (esta tabla dice 39 verificadas, `PLAN-DE-AUDITORIA.md` decía 71 totales
> con 35 sin verificar y `ESTADO.md` decía 70): lo que sí está medido es que **hoy son 73 y las 73
> están verificadas**.
>
> ⚠️ **Corregido el 4-sep-2026.** Este pie decía «650 citas», con `libro-de-mormon-2` en 94 y
> `doctrina-y-convenios-2` en 56. Ese conteo recorría los archivos del directorio en vez de las
> lecciones del manifiesto, y **sumó 31 citas que viven en archivos huérfanos** — contenido de
> antes de la reconstrucción, que no se muestra en la app (25 en `libro-de-mormon-2`, 6 en
> `doctrina-y-convenios-2`). Ver [`CALIDAD-contexto-libro-de-mormon-2.md`](CALIDAD-contexto-libro-de-mormon-2.md) §5.

> ⁴ **La fila de `libro-de-mormon-2` no se suma a la de «Libro de Mormón (ambos semestres)».**
> Aquella auditó 131 citas del corpus de agosto, de las cuales 39 eran de este curso; hoy el curso
tiene **73** (la reconstrucción sumó 30 y el cierre del 8-sep agregó 2 en `36-4` y `36-5`, las dos
> últimas *Ven Sigueme* que no tenían ninguna). El total de la tabla cuenta las 73 actuales y
> descuenta las 39 viejas para no duplicar.

**Quedan 69 citas**: R301 (30), R200 (39 sin comparar texto, más 5 fabricadas/rotas ya
identificadas que necesitan reemplazo). Ninguna tiene bandera de contenido — hay que abrir el
manual de cada lección.

> **Dos chequeos mecánicos que sí conviene correr primero** (2-sep-2026, nacidos de R200):
>
> ```bash
> npx tsx scripts/audit-links-citas.ts <curso> --solo-problemas
> ```
>
> 1. **¿El link resuelve a un discurso?** El sitio de la Iglesia **no devuelve 404 con un slug
>    inexistente**: redirige en silencio al índice de la conferencia, con HTTP 200. Un link
>    inventado se ve idéntico a uno bueno, incluso para quien hace clic. En R200 salieron **15
>    de 50 links únicos** rotos, entre ellos 5 citas fabricadas y uno que apuntaba al discurso
>    de otro orador.
> 2. **¿Apunta al párrafo?** Desde el 2-sep-2026 el `link` debe llevar ancla (`&id=p23#p23`).
>    **277 de 619 citas del corpus (45 %) no la tienen** (recontado sobre el manifiesto el
>    4-sep-2026; antes decía «286 de 650», con el denominador inflado por huérfanos).
>
> Lo que **no** reemplaza: comparar el texto. Un link que resuelve no dice nada sobre si la cita
> es textual ni sobre si el título es correcto — en R200 apareció una con link válido y título
> equivocado.

> **Lección de DyC-1 (1-sep-2026):** el grupo *con* `link` y con título de discurso salió
> **29 de 29 válido**, frente al grupo *sin* `link` y con una `fuente` genérica del tipo
> «Liahona, mes de año, pág. N», que salió **42 de 42 inválido**. El formato de la referencia
> predice la validez del contenido. Lo que sí apareció en el grupo sano fueron **9 citas con una
> traducción reescrita** en vez del texto oficial en español: conviene descargar el discurso y
> comparar por recall aunque la referencia sea correcta.
>
> **Y un daño colateral que conviene revisar en todo curso auditado:** cambiar el autor de una
> cita deja preguntas del quiz citando al autor viejo. En DyC-1 eran **37 preguntas en 33
> lecciones**. El cruce está automatizado en `scripts/audit-autores-quiz.ts`; sobre los 12 cursos
> devuelve **154 casos**, de los cuales 98 son reales (R200 38, LdM-1 33, AT-1 19, R250 6,
> R225 2) y el resto se resuelve al generar el contenido de los cursos vacíos.

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
| **AT-2** | **Error de título/época** (5 casos) más paráfrasis menor | Generado con verificación en el momento (`web_fetch`), no fabricación: 14 de 61 (23 %) con algo para corregir, la más grave una cita real atribuida al orador equivocado (`leccion-127`) |
| **R200** | **Link inventado que no da 404** | 15 de 50 links redirigen en silencio al índice. 5 fabricadas confirmadas: 3 citan un discurso de Ballard que no existe («Madres e hijos») **con la misma página en las tres**, y 1 atribuye a Sheri Dew un título de Julie B. Beck. Faltan 39 por comparar |

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

**El más reciente es `AulaSEI-contenido-2026-09-08.xlsx`** (8-sep-2026), regenerado al cerrar
`doctrina-y-convenios-2` con `--solo-contenido` sobre los seis cursos grandes: **472 lecciones,
1530 referencias de Escritura, 493 citas de líder y 3304 preguntas de quiz**. Las únicas lecciones
sin material que quedan en esos seis cursos son 2 huérfanas de DyC-2 y 1 de LdM-1.

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
equivocada. Desde entonces se cerraron `libro-de-mormon-1`, `antiguo-testamento-2` y
`doctrina-y-convenios-2` (que en agosto todavía no tenía material de repaso), y quedaron a medio
camino `antiguo-testamento-1` y `religion-200`.

**Estado al 4-sep-2026 (recontado sobre el manifiesto): ~1247 de 1505 auditadas (83 %).** Quedan
**212**: `religion-301` (87), `religion-250` (84), `antiguo-testamento-1` (48), `religion-200` (31)
y `religion-225` (10). Ver `../ESTADO.md`.

> ✅ **`religion-301` cerrado el 9-sep-2026**, y con una advertencia que vale para el resto de la
> lista: de sus 87 escrituras, `audit-escrituras.ts` solo veía **17**, porque el script **únicamente
> mira las citas que tienen `link`**. Informaba «OK 8» sobre ese 20 % y el curso parecía razonable.
> Al ponerles `link` a las otras 70 y restituirlas desde la API resultaron **todas** paráfrasis:
> Moisés 7:60–64 creció **395 %** (270 → 1337 caracteres), Moisés 6:57–59 un 268 %, Éxodo 34:6–7 un
> 82 %. El curso quedó en **91 citas, 0 sin link, 91 OK**. Los otros cuatro cursos de esta lista
> tienen escrituras sin `link` (ver §1.2 del plan): mientras las tengan, su porcentaje de «OK» no
> dice nada sobre ellas.

> ⚠️ **Corregido el 4-sep-2026.** Este párrafo decía «1291 de 1619» y contaba 68 pendientes en
> `libro-de-mormon-2`. El denominador incluía **116 referencias de Escritura que viven en archivos
> huérfanos** (98 en `libro-de-mormon-2`, 18 en `doctrina-y-convenios-2`) y que la app no muestra.
> El corpus real de `libro-de-mormon-2` es de **191 escrituras** (189 hasta el rescate de
> `leccion-25-10` el 4-sep)**, no 287**: la reconstrucción de las
> semanas 24-27 y 31-33 **no amplió el curso, lo reemplazó**, y el conteo sumó las dos versiones.
> Ver [`CALIDAD-contexto-libro-de-mormon-2.md`](CALIDAD-contexto-libro-de-mormon-2.md) §5.

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

✅ **Libro de Mormón 2 — cerrado del todo (8 de septiembre de 2026): 246 de 250.** El curso creció
de 191 a 250 citas con la reconstrucción y el cierre doctrinal, y volvió a medirse de cero: 216 OK,
30 `REVISAR_MANUAL` y 4 `AUTO_CORREGIBLE`. Las 34 se resolvieron **sin correr**
`rescan-ventana-ancha.ts --write` ni `fix-escrituras.ts --write` — ver la advertencia 4 de
[`PLAN-DE-AUDITORIA.md`](PLAN-DE-AUDITORIA.md) §0—: 14 eran paráfrasis de un versículo puntual que
se literalizaron con la referencia intacta, **6 tenían el texto en otro versículo** (§4.2) y una
era **una cita fabricada** —«si os arrepentís, todo esto os será devuelto», atribuida a Helamán
13:17, que no existe en ese capítulo— con arrastre a **11 posiciones** entre `escrituras`, un
`contexto` que la citaba entre comillas, 7 preguntas de quiz y la pregunta de escudriñar de un
`cuestionario`. Los 4 restantes son resúmenes de pasaje largo cuya ventana ganadora coincide con la
referencia ya escrita: limitación permanente del comparador (§4.1), no un pendiente. Detalle lote
por lote en [`BITACORA-libro-de-mormon-2.md`](BITACORA-libro-de-mormon-2.md).

🟡 **Antiguo Testamento 1 y Religión 200 (2 de septiembre de 2026):** `antiguo-testamento-1` pasó
de 0 a **231/279** y `religion-200` de 28 a **53/84**. En los dos, la mitad de lo que queda son
citas-resumen que el comparador no puede validar (25 en cada curso) y **6 son pendientes reales**
por curso. Detalle en [`PLAN-DE-AUDITORIA.md`](PLAN-DE-AUDITORIA.md) §1.

✅ **Antiguo Testamento 2 (1 de septiembre de 2026):** `antiguo-testamento-2` cerrado (200/200).
Corrida con el flujo de script, casi sin trabajo manual: 196 `OK` en la primera pasada, 1
auto-corregible, y solo 3 `REVISAR_MANUAL` (2 corregidas a mano — paráfrasis real en Job 14:14,
repetida en dos lecciones —, 1 confirmada correcta pese a la bandera porque combina dos versículos
no contiguos). Ver [`AUDITORIA-escrituras-AT2.md`](AUDITORIA-escrituras-AT2.md).

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

**Nivel 2 (calidad) — cerrado en `libro-de-mormon-2` (31-ago-2026, dos pasadas):** la primera pasada
comparó ese curso contra `antiguo-testamento-1` y encontró que el 85 % de sus 78 lecciones usaba la
fórmula "no tiene ninguna relación" como distractor de descarte fácil en el quiz — el anti-patrón
que la propia skill prohíbe. Causa raíz corregida en la skill `seminary-enrichment` (lista de
nombres de ejemplo muy corta, ahora ampliada, más una regla explícita anti-muletilla) — este tipo
de corrección "en la fuente", y no solo en el contenido ya escrito, es el patrón que documenta y
sistematiza [`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md): un catálogo de
defectos que las auditorías fueron encontrando, mapeados a la regla de la skill que ahora los
previene. Las 131 ocurrencias retroactivas se corrigieron en esa misma sesión. Una segunda pasada, el mismo día,
diversificó los nombres de personaje sobreconcentrados (90 de 149 preguntas de aplicación
reasignadas), eliminó las aperturas repetidas de `contexto` y `conclusion`, y — por primera vez en
el proyecto — leyó las 546 preguntas de quiz de las 78 lecciones contra sus propias fuentes internas
(`contexto`/`escrituras`/`enseñanza`), el "Nivel 2 real" que la sección de abajo marca como nunca
hecho: encontró y corrigió 4 fallas de fidelidad, incluida una pregunta que atribuía una enseñanza a
un autor ("élder Holland") que no aparece en ningún lado de esa lección. Ver
[`CALIDAD-libro-de-mormon-2.md`](CALIDAD-libro-de-mormon-2.md) para el detalle y el método.

**Nivel 3 (registro de escritura) — estrenado en `libro-de-mormon-2` (4-sep-2026):** un eje nuevo,
distinto de la completitud (¿está la sección?) y de la calidad de quiz (¿la pregunta es fiel a su
fuente?). Acá se pregunta **cómo está escrita** la sección que sí existe. Salió de una observación
del usuario, no de un script: el `contexto` de este curso medía 82 palabras de mediana contra 207
en `libro-de-mormon-1` y 270 en `antiguo-testamento-2`. Se reescribieron **47 `contexto`** contra
el manual oficial traído con `WebFetch` lección por lección, y el curso pasó a **187 de mediana**
(prosa total 193 → 298, por encima de `libro-de-mormon-1`). Detalle, método y verificación en
[`CALIDAD-contexto-libro-de-mormon-2.md`](CALIDAD-contexto-libro-de-mormon-2.md).

Tres cosas de esa sesión que sirven para cualquier curso:

1. **El largo no es el defecto; el registro sí.** Un umbral por palabras marcó 12 lecciones y 7
   eran falsos positivos —una de ellas se venía usando como *referencia de calidad*—. El detector
   fiable es la fórmula enciclopédica («El pasaje ilustra…», «Este capítulo muestra…»), que
   describe el capítulo desde afuera en vez de narrarlo. Un detector de segunda persona **no
   funciona**: marcó 40 de 78, incluidas las lecciones sanas.
2. **Reescribir solo `contexto` es la operación sin riesgo de fabricación.** `escrituras` y
   `enseñanza` exigen verificar fuente externa; `contexto` es narrativa y aplicación, y con el
   manual delante se escribe contra lo que la lección declara enseñar.
3. **`npm run build 2>&1 | tail -N` miente**: reporta el código de salida de `tail`. Un build roto
   sale como `exit 0`. Redirigí a archivo y capturá `$?` del build.

**`antiguo-testamento-1` — cerrado el 6-sep-2026 salvo un frente.** El curso quedó en 89/89 en
todo lo medible: centralidad en Cristo, pregunta de escudriñar, pregunta de orar, largo de
`contexto` y `conclusion`, 6 preguntas de `cuestionario`, una cita de líder por lección, quiz de
7 preguntas × 4 opciones, `chapterUrl` que resuelven y distribución de la respuesta correcta.
Detalle de las citas de Escritura en [`AUDITORIA-escrituras-AT1.md`](AUDITORIA-escrituras-AT1.md)
y el registro por lote en
[`BITACORA-generacion-doctrinal.md`](BITACORA-generacion-doctrinal.md).

### Sesgo de longitud de la opción correcta — pendiente en `antiguo-testamento-1` (56 lecciones)

Es lo único que quedó abierto en ese curso, y es la fila 23 de
[`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md): **la opción correcta es la más
larga de las cuatro**, de modo que se puede acertar el quiz midiendo con la vista, sin leer el
contenido. Medido sobre el proyecto entero el 4-sep-2026 afectaba a **2948 de 3569 preguntas
(83 %)**, contra el 25 % que daría el azar.

En `antiguo-testamento-1` quedan **56 de 89 lecciones** con el sesgo (la correcta es la más larga
en más de 2 de sus 7 preguntas). Las 33 restantes ya están limpias: son las que se reescribieron
en la sesión del 6-sep-2026.

**Por qué no se cerró junto con lo demás.** Conviene no confundirlo con el otro sesgo del quiz:

| | Sesgo de **posición** | Sesgo de **longitud** |
|---|---|---|
| Qué mide | En qué índice cae la respuesta correcta | Si la correcta es la opción más larga |
| Script | `audit-distribucion-respuestas.ts` | ninguno lo corrige |
| Corrección | **Mecánica**: rota el array de `options` sin tocar un carácter de texto | **Manual**: hay que reescribir el texto de las opciones |
| Estado en AT-1 | ✅ cerrado (21/34/27/17) | ⚠️ 56 lecciones |

El de posición se automatiza porque el arreglo no cambia lo que dice ninguna opción. El de longitud
no: exige **acortar la correcta** —el matiz explicativo casi siempre sobra— o **darle a un distractor
una condición plausible** que lo alargue, y las dos cosas son decisiones de redacción, una por
pregunta. Son unas 390 preguntas.

**Cómo medirlo** (no hay script propio todavía; el conteo es de una línea):

```js
// por lección: la posición de la correcta entre las CUATRO longitudes, no solo el extremo
const pos = q => {
  const c = q.options[q.correctAnswer].length
  return 1 + q.options.filter((o, i) => i !== q.correctAnswer && o.length > c).length
}                    // 1 = la más larga … 4 = la más corta
// más de 2 por lección en CUALQUIERA de las dos direcciones es sesgo, y sobre el curso
// entero la meta es ~25/25/25/25 (filas 27 y 30 del catálogo)
```

⚠️ **Medir solo «la correcta es la más larga» no alcanza, y ya costó dos pasadas de reparación.**
`libro-de-mormon-2` cerró el 7-sep-2026 con ese número en 28 % —correcto— y aun así era adivinable:
la correcta era la **más corta** en el 37 % de las preguntas. `doctrina-y-convenios-2` llegó a 0 %
en las dos direcciones, y entonces «descartar los dos extremos» acertaba el 50 %. El ranking de las
cuatro posiciones es la única medida que no se puede satisfacer construyendo el sesgo inverso.

**Cuánto importa.** Es un defecto de forma, no de doctrina: lo que el alumno lee es correcto y está
verificado. Lo que se pierde es la capacidad del quiz de discriminar entre quien estudió y quien no.
Por eso se dejó para el final del curso y no bloqueó el cierre del resto — pero conviene no darlo
por cerrado: mientras siga ahí, el quiz mide menos de lo que parece.

## Alcance: los documentos .md cubren sobre todo las citas

Las citas de líderes y las referencias de Escritura son la parte auditable con fuente
verificable de forma directa, y son las que tienen documentos de auditoría cita por cita.
`contexto`/`cuestionario`/`conclusion`/quiz tienen ahora una auditoría de **completitud y forma**
(ver arriba), pero — salvo por `libro-de-mormon-2`, cuyas 546 preguntas de quiz ya se leyeron
completas contra su propia fuente interna (ver arriba) — todavía no una de **contenido leído** para
el resto del proyecto: sigue sin auditar si esas ~3200 preguntas de quiz restantes, esos ~425
`contexto` y `conclusion` dicen algo doctrinalmente correcto y pedagógicamente bueno, más allá de
tener el largo y la cantidad de ítems esperados.

Eso es lo que abre el [volcado a Excel](#volcado-a-excel-para-auditores-externos): pone
todo el material delante de un auditor —las 3770 preguntas de quiz incluidas— con el
link de cada escritura y de cada cita al lado. El detalle del corpus está en
[`../ESTADO.md`](../ESTADO.md).

Ojo con las preguntas de quiz: **no guardan de dónde salieron**. No tienen link, y solo
Libro de Mormón 1 trae `reference`. Verificarlas obliga a abrir el manual de la lección,
y 127 lecciones tampoco tienen `chapterUrl`.
