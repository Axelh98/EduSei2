# Estado del trabajo — agosto-septiembre 2026

Documento de traspaso entre sesiones. Cubre dos trabajos:

1. **Reestructuración del almacenamiento de lecciones** — terminada y verificada.
2. **Auditoría de citas proféticas** — empezada, la mayor parte pendiente.

> **Ojo con dónde vive esto.** La reestructuración y la primera auditoría de citas están
> commiteadas en `main` (agosto de 2026, un único commit). Todo lo de septiembre va en la rama
> `contenido/doctrina-y-convenios`, y al 2-sep-2026 **buena parte sigue sin commitear** en el
> árbol de trabajo.
> El plan original está en `~/.claude/plans/bubbly-pondering-puzzle.md`.

> 🗺️ Desde agosto de 2026 también hay auditoría de **referencias de Escritura** y de
> **completitud de contenido** (contexto/cuestionario/conclusión/quiz), además de la de citas de
> líder que cubre este documento. El estado de las tres, curso por curso, está consolidado en
> [`auditorias/PLAN-DE-AUDITORIA.md`](auditorias/PLAN-DE-AUDITORIA.md) — abrí ese archivo primero.

---

# 1. Reestructuración del almacenamiento — TERMINADA

## Qué había

5,7 MB de lecciones en archivos `.ts` bajo `lib/data/` (111 archivos), con la prosa
dentro de strings con `\n\n` y comillas escapadas, agrupadas de a cinco lecciones
por archivo de 100–150 KB. Cada curso con su propia convención de nombres, y el
mapa "categoría → contenido" duplicado en cuatro lugares.

Como `lib/quiz-data.ts` importaba todo y lo consumían 11 componentes `"use client"`,
el corpus entero viajaba al navegador.

## Qué hay ahora

```
lib/content/
  <categoryId>/
    _manifest.json           metadatos del curso (lo único que llega al cliente)
    <lessonId>.json          secciones + preguntas de esa lección
  registry.ts                catálogo: arma las categorías desde los manifiestos
  loader.ts                  SOLO SERVIDOR: carga una lección con su propio import()
  normalize.ts               une los párrafos al leer
  schema.ts                  esquemas Zod
  generated-map.ts           GENERADO: un import() por lección
```

- **Una lección = un archivo**, con la misma convención en los 12 cursos.
- **La prosa se guarda como array de párrafos**, un párrafo por línea. Se acabaron
  los `\n\n` y las comillas escapadas; un cambio de un párrafo da un diff de una línea.
  `normalize.ts` los vuelve a unir al leer, así que **ningún componente de render cambió**.
- **Un solo mapa** de contenido, generado.
- `lib/quiz-data.ts` quedó como capa fina sobre el registry, sin datos.
- `actions/lesson-content.ts` es el puente para el editor (cliente).

**714 lecciones · 450 con material de repaso · 3770 preguntas.**

## Verificaciones hechas

| Verificación | Resultado |
|---|---|
| Cada JSON vs. su `.ts` original, campo por campo | 714/714 idénticas |
| Catálogo vs. datos originales (semanas, títulos, `chapterUrl`, conteos) | Sin diferencias |
| `npm run build` | Limpio |
| Errores de `tsc` preexistentes | Bajaron de 21 a 4 |
| Rutas en producción (`npm start`) | Home, listados, quiz, repaso, `/recuperar`, `/editor` |
| Prosa en el bundle de cliente | Ya no aparece; sí en un chunk por lección del servidor |

JS de cliente: **6,3 MB → 4,4 MB**. Los manifiestos suman 295 KB.

## Cosas que encontré por el camino

- **`antiguo-testamento-2` nunca mostró repaso.** Su mapa apuntaba al archivo de
  resúmenes del *primer* semestre y ningún id coincide (67 lecciones, 0 coincidencias).
  No se puede arreglar sin escribir el material del segundo semestre.
  **Resuelto el 31-ago-2026**: se generó el material del segundo semestre con
  `seminary-enrichment` (las 67 lecciones). Ver
  `docs/auditorias/COMPLETITUD-antiguo-testamento-2.md` — contenido generado y verificado al
  escribirlo, pero todavía sin una auditoría de citas independiente.
- **`getWeeksWithExtendedContent` fusionaba los 5,7 MB de secciones para nada**:
  `WeekCard` no las usa. Eliminada.
- **`religion-250.ts` y `religion-200.ts` tenían secciones duplicadas y muertas**
  (~170 KB) que `quiz-data.ts` sobrescribía.
- **43 lecciones de `libro-de-mormon-2` existen solo en el archivo de contenido**
  y no están en ninguna semana, así que ninguna pantalla las muestra. Se migraron
  igual para no perderlas.

  > ⚠️ **Corregido el 4-sep-2026.** Este punto decía que quedaron «marcadas con `"orphan": true`
  > en el manifiesto». **Esa marca no existe**: se verificó que la cadena `orphan` no aparece ni en
  > el `_manifest.json` actual ni en el del commit de migración (`d76ff92`). Los archivos huérfanos
  > simplemente **no figuran en el manifiesto**, que es lo que los deja invisibles — y también lo
  > que hace que ningún script los distinga si recorre el directorio en vez del manifiesto (ese
  > error infló los conteos del corpus durante dos días; ver ¹ más abajo).
  >
  > El número tampoco es 43 hoy: son **45**. El manifiesto pasó de 68 a 78 lecciones con la
  > reconstrucción de las semanas 24-27 y 31-33, que reescribió el mapeo y dejó atrás los archivos
  > viejos. Detalle en
  > [`auditorias/CALIDAD-contexto-libro-de-mormon-2.md`](auditorias/CALIDAD-contexto-libro-de-mormon-2.md) §5.
  >
  > ✅ **Cerrado el 4-sep-2026, más tarde el mismo día.** Se borraron 44 y **se rescató uno**
  > (`leccion-25-10`, Alma 53: cubría un día de clase que el manifiesto no tenía y que ninguna otra
  > lección cubre). `libro-de-mormon-2` quedó en **80 archivos / 79 lecciones activas, sin
  > huérfanos**. Los únicos que quedan en el proyecto son los **8 de `doctrina-y-convenios-2`**.
  >
  > ✅ **Cerrado también para DyC-2 el 8-sep-2026, pero con la decisión contraria: se conservan.**
  > Se leyeron los 8 y se comparó su cobertura contra las lecciones activas antes de decidir nada,
  > con el mismo método de §5.1. **Ninguno cubre material que el sitio no tenga ya**: son las 8
  > lecciones que estaban asignadas a los dos semestres a la vez, y DyC-1 las cubre con lecciones
  > activas y cerradas al 100 %. No hay un caso como el de `leccion-25-10`. **El proyecto ya no
  > tiene huérfanos pendientes de triaje.**

## Pendientes de esta parte

- [ ] **Lecciones 26–30 de Religión 301.** `religion-301lecciones-26-30.ts` existía
      con `r301-l26` … `r301-l30`, pero `indexlecciones.ts` nunca lo importaba, así
      que esas 5 lecciones no estaban en la app **ni se migraron**. Siguen en git:
      `git show HEAD:lib/data/religion-301/religion-301lecciones-26-30.ts`.
      Decidir si entran al curso.
- [ ] **Archivos huérfanos fuera de `lib/data/`**, sin ninguna referencia en el código:
      `lib/AT2semestre.pdf` (227 KB) y `lib/links3.json` (17 KB).
- [x] ~~`tsconfig.tsbuildinfo` está rastreado en git~~ — dejó de rastrearse
      (`git rm --cached`); el patrón `*.tsbuildinfo` ya estaba en `.gitignore`.
- [ ] `/quiz/<cat>/<id>/study` de una lección sin repaso devuelve **HTTP 200** con la
      página "Repaso no encontrado" renderizada, en vez de 404. Es **preexistente**,
      no lo introdujo esta reestructuración.

## Cómo recuperar `lib/data/` si hace falta

```bash
git checkout HEAD -- lib/data
```

Los scripts que hicieron y verificaron la migración están en `scripts/migration/`
con su propio README. Dependen de `lib/data/`, así que solo corren después de
recuperarla.

---

# 2. Auditoría de citas proféticas — EN CURSO

## Panorama: 619 citas de líderes en 9 cursos

| Curso | Citas | Con banderas al empezar | Ahora | Verificadas una por una |
|---|---:|---:|---:|---|
| antiguo-testamento-1 | 110 | 12 | 3 | **curso cerrado (110/110)** ¹ |
| antiguo-testamento-2 | 61 | 3 | 2 | **curso cerrado (61/61)**, ver `auditorias/AUDITORIA-citas-AT2.md` |
| libro-de-mormon-1 | 104 ³ | 4 | 0 | **curso cerrado**; anclas `#pN` 104/104 (7-sep-2026) |
| libro-de-mormon-2 | 73 ⁵ | 0 | 0 | **curso cerrado (73/73, 8-sep-2026)**, con **ancla al párrafo verificada por n-grama literal en 72**; la 73ª es un devocional de BYU sin párrafos numerados (se verificó que la página responde y contiene la cita) — ver `auditorias/BITACORA-libro-de-mormon-2.md` |
| doctrina-y-convenios-1 | 80 | 58 | 1 | **curso cerrado (80/80)**, ver `auditorias/AUDITORIA-citas-DyC1.md` |
| doctrina-y-convenios-2 | 50 ⁴ | — | 0 | **curso cerrado (50/50)**, con **ancla al párrafo verificada por n-grama en las 50** (8-sep-2026). Una cita se reemplazó por pertinencia — ver `auditorias/BITACORA-doctrina-y-convenios-2.md` |
| religion-250 | 38 | 5 | 0 | **curso cerrado (38/38)** |
| religion-225 | 5 | 5 | **0** | **curso cerrado (5/5)** |
| religion-301 | 49 ⁶ | 0 | 0 | **curso cerrado (49/49, 9-sep-2026)** — las 32 que faltaban se reemplazaron con citas del manual oficial de cada lección; ver `auditorias/BITACORA-r301.md` |
| religion-200 | 56 | 6 | 1 | **17 de 56** — pasada estructural completa, **5 fabricadas/rotas**, ver `auditorias/AUDITORIA-citas-R200.md` |
| **Total** | **618** ⁵ ⁶ | **96** | **11** | **579 de 618 (94 %)** |

⁶ `religion-301` pasó de 50 a **49** el 9-sep-2026: `r301-l20` tenía dos citas y su manual oficial
trae una sola de líder. Antes que dejar la segunda sin respaldo verificable, se borró el bloque.

³ LdM-1 pasó de 92 a 104 citas de líder el 7-sep-2026: se generaron desde cero las 13
lecciones que estaban con `secciones: []` y se les escribieron 9 citas nuevas, todas tomadas del
manual de su propia lección y con el link verificado contra la API antes de escribirlo. Dos de los
slugs que el manual cita **no existían** y devolvían el índice de la conferencia con HTTP 200 (fila
17 del catálogo); se encontraron los reales parseando ese mismo índice.

⁴ DyC-2 pasó de 54 a **50** el 8-sep-2026: no se borró ninguna, se **recontó sobre el manifiesto**.
Las otras 4 viven en archivos huérfanos que la app no muestra. Es el mismo error de denominador
que ya se había corregido en LdM-2 el 4-sep.

⁵ LdM-2 pasó de las 39 auditadas en agosto a **73** el 8-sep-2026. No se agregaron 34 de golpe:
la reconstrucción del curso ya había llevado el corpus real a 71 (que esta tabla nunca actualizó), y
el cierre del 8-sep sumó las 2 últimas, en `36-4` y `36-5`, las dos *Ven Sigueme* que no tenían
ninguna. Las 73 quedaron verificadas y ancladas en esa misma sesión. Los totales de la fila de abajo
suman esas 73 y descuentan las 39 viejas para no duplicar.

> ¹ **`antiguo-testamento-1` lo revisó Axel a mano** (agosto de 2026) y lo dio por
> correcto. Esa revisión **no está registrada cita por cita** en
> `AUDITORIA-citas-AT1.md`: ese documento solo detalla las 4 que encontró el detector.
> Si más adelante hiciera falta evidencia por cita, hay que rehacerla.

**Quedan 39 citas sin verificar**, todas en `religion-200` (39 sin comparar texto, más las 5
fabricadas/rotas ya identificadas que necesitan reemplazo desde el manual). `religion-301` se
cerró el 9-sep-2026.

> **Actualización 1-sep-2026.** `doctrina-y-convenios-1` quedó cerrado: las 29 citas que tenían
> `link` se verificaron descargando cada discurso y **ninguna resultó fabricada**, aunque 9 tenían
> una traducción reescrita en vez del texto oficial. Además se generó y verificó
> `doctrina-y-convenios-2` completo (54 citas nuevas, comprobadas por recall al escribirlas), lo
> que sube el total del corpus de 531 a 585 citas.

Son **447 fuentes distintas**: verificar un discurso cubre todas sus repeticiones.

### Las 10 banderas que quedan son todas esperadas

| Bandera | Nº | Por qué no es un defecto |
|---|---:|---|
| `link-sin-lang-spa` | 7 | Artículos que solo existen en inglés (*Ensign*, *New Era*) |
| `link-no-oficial` | 3 | `speeches.byu.edu` y `byui.edu`: devocionales universitarios oficiales, fuera del dominio principal |
| `fecha-posterior-a-la-muerte` | 2 | Reimpresiones en *Liahona* de artículos de Ezra Taft Benson (m. 1994) |
| `vosotros-en-cita` | 1 | El «vosotros» está dentro de una cita de Escritura (Mosíah 2:17) |

**`sin-link` = 0 y `voseo-en-cita` = 0 en todo el corpus.**

## Hecho hasta ahora

### Arreglo estructural — 85 citas corregidas

`scripts/fix-citas-links.ts` movió al campo `link` las URLs que venían pegadas como
texto plano dentro de `fuente` —el mismo problema documentado en R250— y las normalizó
a `https://www.…?lang=spa`. **No se tocó el texto de ninguna cita.**

### DyC-1 — grupo sin `link` cerrado (49 de 80)

Detalle en **`docs/auditorias/AUDITORIA-citas-DyC1.md`**. De las 49 verificadas,
solo **7 resultaron textuales**; 28 no correspondían a ninguna fuente del autor
declarado.

### Religión 301 — curso cerrado (49 de 49, 9-sep-2026)

Detalle en **`docs/auditorias/AUDITORIA-citas-R301.md`** y en
**`docs/auditorias/BITACORA-r301.md`**. Fue el peor resultado del corpus: de las 50 citas
originales, **32 no verificaban**.

El primer grupo auditado (las 20 sin `link`) resultó **20 de 20 inválidas, ninguna textual**: 17
de esos discursos **no existen** —el autor nunca dio uno con ese título en esa fecha—, y los 3
restantes eran un documento atribuido a la persona equivocada y dos discursos reales cuyo texto no
aparece en ellos.

Las 12 restantes se cerraron el 9-sep, y mostraron que **un `link` que resuelve no prueba nada**:

- **Link que no resuelve a un discurso.** El de `r301-l11` apuntaba a
  `/liahona/2002/03/the-healing-power-of-forgiveness`, que responde **200 con el índice de la
  revista de marzo de 2002**, no 404. Ese slug es el del discurso de Hinckley de octubre de 2005.
- **Link correcto con texto ajeno.** En `r301-l14` el enlace a Kearon era el bueno, pero solo la
  primera frase del texto atribuido está en el discurso; el resto se había agregado detrás.

Los 32 reemplazos salen del manual oficial de Instituto 2026: del texto verbatim del ancla del
manual, o del discurso que el manual enlaza. **Ningún slug se dedujo.** `r301-l20` quedó con una
sola cita —de ahí que el curso tenga 49 y no 50—: su manual trae una sola cita de líder y no
enlaza ningún discurso, así que se borró el bloque antes que dejarlo sin respaldo.

### Religión 225 — curso cerrado (5 de 5)

Detalle en **`docs/auditorias/AUDITORIA-citas-R225.md`**. Las 5 citas del curso
estaban sin `link` y las 5 eran inválidas, pero por otra razón: **4 de las 5 fuentes
existen** y el problema es que **el texto está parafraseado**, no transcrito.

### Los sueltos sin `link` — cerrados

- **religion-250 (2)**: las dos citas de libro impreso (McConkie, *The Promised
  Messiah*; Holland, *Christ and the New Covenant*) resultaron verificables: el
  material oficial de preparación del propio curso cita ambos libros en la misma
  lección. Las dos tenían la página mal y el texto reescrito. Ver el apéndice de
  `AUDITORIA-citas-R250.md`. **El curso queda en 0 banderas.**
- **antiguo-testamento-1 (1)**: Talmage, *The Articles of Faith* — **textual**, solo
  faltaba el `link` y la página.
- **religion-200 (1)**: Nelson, devocional de BYU — **textual**, faltaba el `link` y
  sobraba un número de página inventado (los devocionales no tienen páginas).

### Voseo y vosotros — 0 en el corpus

- **`voseo-en-cita`: 7 de 7 aciertos, sin un solo falso positivo.** 5 en DyC-1, 1 en
  R301, 1 en `antiguo-testamento-1/leccion-194` (Oaks, *Face to Face* 2020 — fuente y
  link correctos, texto reescrito en voseo).
- **`vosotros-en-cita` es una bandera nueva**, agregada a partir de R301, donde las 20
  citas inválidas usaban «vosotros» («Nacisteis», «fuisteis reservados», «os conocía»).
  El material oficial en español usa **«ustedes»**; el «vosotros» solo aparece dentro
  de citas de Escrituras. Encontró **2 defectos reales de inmediato**
  (`leccion-65` McKay y `leccion-203` Rasband), ambos **con `link` correcto y discurso
  real** — la mejor prueba de que el grupo «con link» no es sano por defecto.

### Nombres y tildes — cerrado

Los 12 «Elder» sin tilde están corregidos, y con ellos 3 nombres mal escritos que el
detector no veía: `Rondald A. Rasband` → `Ronald`, `Russell Ballard` → `M. Russell
Ballard`, `J. Debn Cornish` → `J. Devn Cornish`. También se limpió un artefacto de
copiado dentro del texto de una cita en `60-dc-45-9-75-parte-2`.

### Detector: cruce fecha del discurso vs. fechas de vida del autor

Implementado en `scripts/extract-citas.ts` (`FECHAS_DE_VIDA`, 26 líderes fallecidos).
Nace del caso de DyC-1 donde `37-dc-21` atribuía a **Ezra Taft Benson** (m. 1994) un
discurso de **Neil L. Andersen** de 2018. Marca `fecha-posterior-a-la-muerte` y
`fecha-anterior-al-autor`, tomando el año más temprano que aparezca en `fuente` o
`link` y excluyendo compilaciones póstumas (*Enseñanzas de los Presidentes*, etc.).
Falso positivo conocido y aceptado: las reimpresiones en *Liahona* de artículos de un
líder ya fallecido (2 casos, ambos de Benson).

---

## Lo que se aprendió sobre cómo fallan estas citas

Cada curso auditado agregó un patrón distinto. **Ninguno de los tres predictores
reemplaza a los otros:**

| Patrón | Dónde apareció | Señal barata |
|---|---|---|
| **Fuente sin título de discurso** («*Liahona*, mes de año, pág. N») | DyC-1: 42 de 42 no textuales | El formato de la `fuente` |
| **Título de discurso inventado**, con forma verosímil | R301: 17 de 20 | Ninguna — hay que abrir el índice de la conferencia |
| **Fuente real, texto parafraseado** | R225: 3 de 5; R250; AT-1 | Ninguna — hay que comparar palabra por palabra |
| **Texto reescrito en voseo o vosotros** | DyC-1, R301, AT-1 | `voseo-en-cita`, `vosotros-en-cita` |
| **Autor equivocado con texto y link correctos** | DyC-1 (`37-dc-21`) | `fecha-posterior-a-la-muerte` |

**Corolario: tener `link` y título no garantiza nada.** Los dos hallazgos de
`vosotros-en-cita` en AT-1 tenían link correcto, discurso real y ancla al párrafo
correcto, y el texto igual estaba reescrito.

## El método que funciona

Cada lección trae en `_manifest.json` un `chapterUrl` que apunta a su página del
manual oficial de Seminario o Instituto en español, y la numeración del curso coincide
con la del manual. Verificar es abrir esa página, leer las citas que el manual
realmente usa —con autor, texto literal y referencia— y comparar. Es más rápido y más
fiable que buscar el discurso a ciegas, y de paso alinea la lección con el material que
el maestro tiene delante.

Cuando la fuente declarada trae título, conviene además **abrir el índice de esa
conferencia o número de revista** (`/study/general-conference/AAAA/MM?lang=spa`) para
confirmar que el discurso existe. Es lo que destapó los 17 títulos inventados de R301.

El `link` va siempre a la página oficial **donde ese texto se puede leer**: el discurso
si está en línea en español, la página del manual si no. Varios discursos viejos
(Hinckley 1980, Ashton 1988, Oaks 1986, Holland 1974) no están en español en el sitio;
ahí la página del manual que los cita es la única verificación posible, y alcanza.
Lo mismo vale para los libros impresos: **antes de dar una cita de libro por no
verificable, hay que mirar si el manual de esa lección lo cita** — en R250 lo hacía en
los dos casos.

## Pendiente

- [x] ~~Cerrar el grupo sin `link` de DyC-1~~
- [x] ~~Arreglar los nombres mal escritos~~
- [x] ~~Cerrar el grupo sin `link` de religion-301~~
- [x] ~~Cerrar religion-225~~
- [x] ~~Cerrar los sueltos sin `link` (R250, AT-1, R200) y las 2 citas con voseo~~
- [x] ~~Arreglar los 12 «Elder» sin tilde~~
- [x] ~~Agregar al detector el cruce «fecha del discurso vs. fechas de vida del autor»~~
- [x] ~~`antiguo-testamento-1`~~ — revisado a mano por Axel, sin hallazgos (ver nota ¹)
- [ ] **Las 30 citas de `religion-301` que ya tenían `link`.** **Prioridad alta:** el
      grupo sin link de ese curso salió 20/20 inválido, así que no hay motivo para
      suponer que el otro grupo esté sano. Ver `AUDITORIA-citas-R301.md`.
- [x] ~~Las 30 citas de DyC-1 que ya tenían `link`~~ — cerradas el 1-sep-2026 (29 citas; ninguna
      fabricada, 9 con traducción reescrita y corregidas). Ver `AUDITORIA-citas-DyC1.md`.
- [ ] **Las 39 citas de `religion-200` sin comparar texto, más las 5 fabricadas/rotas** que ya
      se identificaron y necesitan reemplazo desde el manual. La pasada estructural (links) ya
      está hecha. Ver `auditorias/AUDITORIA-citas-R200.md`.
- [ ] **Agregar el ancla al párrafo a las 277 citas que no la tienen** (45 % del corpus).
      Desde el 2-sep-2026 todo `link` de cita debe apuntar al párrafo (`&id=p23#p23`), no al
      discurso completo. Cuatro cursos no tienen ninguna: AT-2 (61), R200 (56), R301 (50),
      R225 (5). Verificar con `npx tsx scripts/audit-links-citas.ts <curso> --solo-problemas`.

**Orden sugerido:** `religion-301` (30) → `religion-200` (39). Ya no hay ningún grupo
marcado por banderas: de acá en adelante hay que abrir el manual de cada lección.

### Dos defectos transversales que aparecieron auditando DyC (1-sep-2026)

Los dos tienen script propio y **están pendientes en el resto del corpus**. El detalle y el orden
sugerido están en `auditorias/PLAN-DE-AUDITORIA.md` §3.

1. **Preguntas que citan a un líder ausente de la sección `enseñanza`.** Aparece cuando una
   auditoría de citas cambia el autor y nadie revisa `questions`: en DyC-1 eran **37 preguntas en
   33 lecciones**, muchas citando al autor que se había determinado fabricado. Se detecta con
   `npx tsx scripts/audit-autores-quiz.ts --todos`. Pendientes: `religion-200` (38),
   `libro-de-mormon-1` (33), `antiguo-testamento-1` (19), `religion-250` (6), `religion-225` (2).

2. **Quizzes adivinables por la posición de la respuesta correcta.** **11 de los 12 cursos** lo
   tenían; en `antiguo-testamento-2` responder siempre la segunda opción acertaba el **96 %** y en
   `nuevo-testamento` el **95 %**. Se mide y se corrige con
   `npx tsx scripts/audit-distribucion-respuestas.ts <categoria> --write`, que solo rota el orden
   de las opciones y no toca el texto. Es la corrección más barata del plan: un comando por curso.

---

## Lo que queda fuera del alcance actual (relevado, no empezado)

Las citas de líderes son **la décima parte** de lo que se puede auditar. Relevado en
agosto de 2026 al discutir cómo dejar que un auditor externo revise el sitio:

| Elemento | Cantidad ¹ | Verificable contra | Estado (2-sep-2026) |
|---|---:|---|---|
| Referencias de Escritura | **1509** ² | Las Escrituras | **Remedido el 8-sep-2026 sobre los 6 cursos grandes**: DyC-1 **280/280** ✅, DyC-2 **208/208** ✅ (subió de 162 con las 46 citas del cierre doctrinal), LdM-1 **308 OK + 1 auto** ✅, AT-2 **199 OK + 1 a revisar**, **AT-1 249 OK + 34 a revisar**, **LdM-2 216 OK + 30 a revisar + 4 auto**. Las **65 pendientes** son el frente C de §0 de [`auditorias/PLAN-DE-AUDITORIA.md`](auditorias/PLAN-DE-AUDITORIA.md). R200 sigue en 53/84 |
| Preguntas de quiz | 4118 | La lección | **1344 revisadas**: los dos cursos de DyC, R200 completo (196) y AT-1 lecciones 1-45 (119). El sesgo de posición se midió en los 12 y se corrigió en 4 |
| Citas de líderes | **621** ² | churchofjesuschrist.org | **~509 verificadas (82 %)**: quedan R301 (30), R200 (39), **LdM-2 (35 — recontado el 4-sep, antes se decía 30)** y DyC-1 (8) (ver ¹) |
| Bloques de `contexto` | 562 | Criterio doctrinal | los 145 de DyC revisados y en rango; **LdM-1 completo: 91/91 en rango y 91/91 nombrando a Jesucristo** (7-sep-2026) |
| Cuestionarios de reflexión | 562 | Criterio pedagógico | los 145 de DyC revisados y en rango; **LdM-1 completo: 91/91 con seis preguntas, con la de escudriñar y con la de orar/meditar/anotar** (7-sep-2026) |
| `conclusion` | 526 | Criterio doctrinal | los 145 de DyC revisados y en rango; **LdM-1 completo: 91/91 presentes y en rango** (7-sep-2026) |

> ¹ **Cantidades recontadas el 2-sep-2026 con un conteo directo sobre `lib/content`** (secciones
> `escrituras.citas[]` + `enseñanza` + los bloques `escritura`/`cita` de las secciones `resumen`).
> Las cifras viejas —1369 escrituras, 585 citas, 4162 preguntas— venían de un relevamiento de
> agosto y ya no cerraban por un error de suma en el total de escrituras.
>
> ⚠️ **Corregido el 4-sep-2026: el recuento del 2-sep también estaba mal, y por eso las cifras de
> arriba bajaron de 1619/650 a 1503/619.** Ese conteo recorrió los **archivos del directorio** en
> vez de las lecciones del **manifiesto**, y sumó **54 archivos huérfanos** que la app no muestra:
> 45 en `libro-de-mormon-2` y 8 en `doctrina-y-convenios-2`. La conclusión de que «el corpus creció
> después de auditarlo» era falsa para LdM-2: la reconstrucción de las semanas 24-27 y 31-33
> (commits `182ab88` y `7314c0f`) **no amplió ese curso, lo reemplazó**, y dejó atrás los archivos
> viejos con un mapeo de semanas distinto. LdM-2 tenía **189 escrituras y 69 citas**, no 287 y 94
> (**195 y 71** desde el rescate de `leccion-25-10` y la generación de `leccion-33-5`, ambas el 4-sep);
> DyC-2 tiene **144 y 50**, no 162 y 56. Ver
> [`auditorias/CALIDAD-contexto-libro-de-mormon-2.md`](auditorias/CALIDAD-contexto-libro-de-mormon-2.md) §5.
>
> Lo que sí sigue en pie: la sesión de DyC sumó **8 citas** a `doctrina-y-convenios-1` (80 → 88).
> Ese material
> se generó con `seminary-enrichment` (verificado en el momento de escribirlo), pero **no tiene
> pasada de auditoría propia**: por eso los cursos marcados «cerrados» no cubren el 100 % de su
> contenido actual.

> ² **Recontado el 4-sep-2026 sobre las 677 lecciones de los manifiestos** (685 archivos: los 8
> restantes son los huérfanos de `doctrina-y-convenios-2`). Sube 6 escrituras y 2 citas respecto del
> conteo anterior: las de `leccion-25-10` (Alma 53), rescatada del limbo de huérfanos ese día, y las
> de `leccion-33-5` (3 Nefi 20–22), generada y auditada esa misma tarde.
>
> ⚠️ **Las columnas «auditadas» bajaron y llevan «~» a propósito.** `libro-de-mormon-2` figuraba
> como cerrado, pero su auditoría de escrituras es del 29-ago y la de citas del 18-ago, y la
> reconstrucción del curso es del 31-ago y el 1-sep: **44 de sus 191 escrituras y 35 de sus 70
> citas nunca se contrastaron contra la fuente**. Medido comparando el corpus activo de hoy contra
> el universo completo de archivos del 30-ago; detalle en
> [`auditorias/CALIDAD-contexto-libro-de-mormon-2.md`](auditorias/CALIDAD-contexto-libro-de-mormon-2.md) §4.1.

### Referencias de Escritura — arrancado en Doctrina y Convenios 1 (agosto de 2026)

Detalle completo en `docs/auditorias/AUDITORIA-escrituras-DyC1.md`. Las 196 citas de
`doctrina-y-convenios-1` quedaron verificadas (✅ cerrado); `doctrina-y-convenios-2` no
tiene todavía material de repaso, así que no hay nada que auditar ahí. A diferencia de
las citas de líder, acá el `link` casi siempre existe de entrada — el trabajo es
comparar el `texto` contra el versículo real, no buscar la fuente. El resultado fue
sorprendente: **174 de las 196 citas (89 %) tenían el texto alterado** respecto del
original — la inmensa mayoría paráfrasis no marcada del versículo correcto, y un grupo
menor con la `referencia`/ancla apuntando a un versículo distinto del citado (p. ej.
D&C 78:13–14 en el archivo resultó ser en realidad D&C 78:6 y 14). Un puñado de casos
tenía contenido que no aparece en ningún lugar del capítulo citado (D&C 64:23 hablaba
de diezmo, no de ayuno, como decía el archivo). Ninguna cita resultó ser de un libro o
capítulo equivocado — el error dominante fue de fidelidad textual, no de fabricación.

**Actualizado al 4-sep-2026: quedan 212 de las 1503 referencias de Escritura** (14 %), no las
~1011 de la versión vieja de este párrafo (anterior al cierre de LdM-1, LdM-2, AT-2 y DyC-2) ni
las 328 sobre 1619 que decía la corrección del 2-sep (ese denominador incluía 116 escrituras que
viven en archivos huérfanos — ver ¹). El desglose es: `religion-301` (87), `religion-250` (84),
`antiguo-testamento-1` (48), `religion-200` (31) y `religion-225` (10). **`libro-de-mormon-2` ya
no figura acá**: sus 68 «pendientes» eran las de los archivos huérfanos. El método de DyC-1 —descargar el capítulo, comparar por contención de segmentos y
por recall de palabras, buscar en todo el capítulo antes de concluir que el texto no existe—
es reutilizable tal cual, y hoy está automatizado en `audit-escrituras.ts` +
`fix-escrituras.ts` + `rescan-ventana-ancha.ts`.

> ⚠️ **Cuidado con el orden al corregir a mano.** `rescan-ventana-ancha.ts` lee el reporte
> cacheado en `.cache/escrituras/<curso>.json`, no los archivos. Si corregís una cita a mano y
> después corrés el rescan sin regenerar el reporte, **te pisa la corrección**. El orden
> correcto es: corregir a mano → `audit-escrituras.ts` (regenera el reporte) → `rescan --write`.
> Pasó en AT-1 y hubo que reaplicar dos correcciones.

### Si hay que darle el contenido a un auditor externo

**El sitio no sirve para eso.** Razones concretas:

- **8 lecciones son invisibles desde el sitio.** Hay **685** archivos de lección y
  **677 alcanzables**; las 8 restantes son de `doctrina-y-convenios-2` y no figuran en
  ningún manifiesto, así que ninguna pantalla las muestra. Un auditor que navegue el
  sitio no las vería, sin saberlo. (Eran 43+ hasta el 4-sep-2026: las 44 de
  `libro-de-mormon-2` se borraron y una se rescató al manifiesto.)
- No hay dónde anotar un veredicto ni forma de citar «revisé la lección X en tal
  estado». El auditor tendría que armar su propia planilla en paralelo.
- Navegar 671 lecciones a mano no permite filtrar, ordenar ni buscar.

Lo que sí muestra el sitio: `components/study/seccion-view.tsx:42` renderiza autor,
`fuente` y un enlace «Ver discurso completo» al `link`. La información está; lo que
falta es la forma de recorrerla.

**Plan acordado (no empezado):**

1. **Decidir primero qué pasa con las 43 lecciones invisibles.** Si entran al curso,
   van al paquete de auditoría; si son descarte, se sacan del repo. Mandarlas a
   auditar sin decidir eso es hacerle perder el tiempo a alguien.
2. **Un CSV por curso**, una fila por elemento auditable
   (`curso, lección, tipo, autor, fuente, texto, link`) más dos columnas vacías
   `veredicto` y `notas`. Es lo único que escala a las 1503 escrituras del corpus. Ya existe la mitad:
   `extract-citas.ts --csv` lo hace para citas; falta extenderlo a escrituras,
   `contexto`, `conclusion` y cuestionarios.
3. **Una página de auditoría por curso** con todas las lecciones de corrido y cada
   elemento junto a su enlace oficial, publicada como Artifact: se comparte por URL,
   no requiere levantar el proyecto, incluye las 43 invisibles y permite comentar
   sobre el párrafo objetado.

El CSV es para el barrido sistemático; la página, para leer en contexto y discutir.

## Comandos

```bash
npx tsx scripts/extract-citas.ts                       # panorama de todos los cursos
npx tsx scripts/extract-citas.ts religion-301
npx tsx scripts/extract-citas.ts --csv > citas.csv     # inventario completo
npx tsx scripts/extract-citas.ts --json                # con banderas, para filtrar

npx tsx scripts/fix-citas-links.ts                     # simulación
npx tsx scripts/fix-citas-links.ts --write             # aplica

npx tsx scripts/audit-links-citas.ts <curso>                   # ¿el link resuelve? ¿tiene ancla?
npx tsx scripts/audit-links-citas.ts <curso> --solo-problemas  # solo lo que falla

npx tsx scripts/validate-content.ts                    # correr tras cada corrección
```

Las correcciones se aplican en `lib/content/<categoryId>/<lessonId>.json`, en los
campos `autor`, `fuente`, `texto` y `link` de las secciones `enseñanza` y de los
bloques `cita` dentro de las secciones `resumen`. **La prosa se guarda como array de
párrafos**, un párrafo por elemento; un solo párrafo puede ir como string.

---

# Archivos nuevos de estas dos sesiones

| Ruta | Qué es |
|---|---|
| `lib/content/**` | El contenido migrado y su capa de acceso |
| `actions/lesson-content.ts` | Server action que le da contenido al editor |
| `scripts/validate-content.ts` | Validación permanente del contenido |
| `scripts/extract-citas.ts` | Inventario y detección de problemas en citas |
| `scripts/fix-citas-links.ts` | Corrección automática de links de citas |
| `scripts/migration/**` | Scripts de la migración (ya cumplieron su función) |
| `docs/auditorias/AUDITORIA-citas-DyC1.md` | **Curso cerrado (80/80)** |
| `docs/auditorias/AUDITORIA-citas-R250.md` | Recuperada de git |
| `docs/auditorias/AUDITORIA-citas-libro-de-mormon.md` | Recuperada de git |
| `docs/auditorias/AUDITORIA-citas-R301.md` | Grupo sin `link` cerrado (20/50) |
| `docs/auditorias/AUDITORIA-citas-R225.md` | Curso cerrado (5/5) |
| `docs/auditorias/AUDITORIA-citas-AT1.md` | Empezada (4/110) |
| `docs/auditorias/AUDITORIA-citas-R200.md` | Pasada estructural completa (2-sep-2026); 17/56 verificadas, 5 fabricadas/rotas |

## Agregados en la sesión de Doctrina y Convenios (1-sep-2026)

| Ruta | Qué es |
|---|---|
| `docs/auditorias/CALIDAD-doctrina-y-convenios-1.md` | Auditoría de Nivel 2 de DyC-1 y el detalle de los cuatro defectos que destapó |
| `docs/auditorias/COMPLETITUD-doctrina-y-convenios-2.md` | Reconstrucción del manifiesto de DyC-2 y generación de sus 48 lecciones |
| `scripts/audit-autores-quiz.ts` | Cruza los líderes nombrados en `questions`/`cuestionario` contra el autor real de `enseñanza` |
| `scripts/audit-distribucion-respuestas.ts` | Mide y corrige el sesgo de posición de la respuesta correcta (`--write` rota las opciones) |
| `scripts/audit-export.ts` → opción `--agregar-a` | Suma cursos a un Excel de auditoría existente sin pisar las hojas ya cargadas |

## Agregados en la sesión del 2-sep-2026 (AT-1 y R200)

| Ruta | Qué es |
|---|---|
| `scripts/audit-links-citas.ts` | **Nuevo.** Verifica que el `link` de cada cita de líder (a) resuelva a un discurso real —el sitio **no da 404** con un slug inexistente, redirige al índice con HTTP 200— y (b) lleve ancla al párrafo. Sirve para los 12 cursos |

**Trabajo hecho en esa sesión:**

- **`antiguo-testamento-1`:** 19/19 atribuciones de quiz cerradas · citas de Escritura de 0 a
  **231/279** · **29 respuestas de quiz corregidas** (ver `auditorias/PLAN-DE-AUDITORIA.md` §1.3).
- **`religion-200`:** sesgo de posición corregido (60 % → 25/25/25/25) · **196/196 respuestas de
  quiz verificadas, limpias** · citas de Escritura de 28 a **53/84** · pasada estructural de las
  56 citas de líder, con **5 fabricadas/rotas confirmadas**.
- **Reglas nuevas:** el `link` de toda cita debe llevar **ancla al párrafo** (277 de 619 no la
  tienen); agregada a `seminary-enrichment/SKILL.md` y verificada por el script nuevo.
- **Corregido en la documentación:** la skill `seminary-audit` que varios documentos citaban
  **no existe**; y este archivo decía «quedan ~1011 referencias de Escritura», que era texto viejo.
- **Recuento del corpus (cierre de la sesión).** Al bajar el estado de R200 a los índices
  aparecieron cifras que ya no cerraban, así que se recontó `lib/content` archivo por archivo:
  **1619 escrituras** (no 1369: la suma vieja estaba mal), **650 citas de líder** (no 585) y
  **4118 preguntas de quiz** (no 4162).

  ⚠️ **Ese recuento también estaba mal, corregido el 4-sep-2026.** Contó archivos, no lecciones del
  manifiesto, e incluyó 54 huérfanos. Los números reales son **1503 escrituras** y **619 citas**;
  `libro-de-mormon-2` no pasó de 237 a 287 escrituras sino que **se reemplazó** en la
  reconstrucción, quedando en 189. Con los denominadores reales: escrituras **1291/1503 (86 %)**,
  citas de líder **516/619 (83 %)**. La lección de proceso: *contar archivos no es contar
  contenido* — filtrá siempre por los `id` del manifiesto.
