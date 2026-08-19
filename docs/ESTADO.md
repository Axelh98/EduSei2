# Estado del trabajo — agosto 2026

Documento de traspaso entre sesiones. Cubre dos trabajos:

1. **Reestructuración del almacenamiento de lecciones** — terminada y verificada.
2. **Auditoría de citas proféticas** — empezada, la mayor parte pendiente.

> **Todo lo descrito acá está commiteado en `main`** (agosto de 2026), en un único
> commit que cubre la reestructuración y la auditoría de citas.
> El plan original está en `~/.claude/plans/bubbly-pondering-puzzle.md`.

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
- **`getWeeksWithExtendedContent` fusionaba los 5,7 MB de secciones para nada**:
  `WeekCard` no las usa. Eliminada.
- **`religion-250.ts` y `religion-200.ts` tenían secciones duplicadas y muertas**
  (~170 KB) que `quiz-data.ts` sobrescribía.
- **43 lecciones de `libro-de-mormon-2` existen solo en el archivo de contenido**
  y no están en ninguna semana, así que ninguna pantalla las muestra. Se migraron
  igual (marcadas con `"orphan": true` en el manifiesto) para no perderlas.

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

## Panorama: 470 citas de líderes en 8 cursos

| Curso | Citas | Con banderas al empezar | Ahora | Verificadas una por una |
|---|---:|---:|---:|---|
| antiguo-testamento-1 | 110 | 12 | 3 | **curso cerrado (110/110)** ¹ |
| libro-de-mormon-1 | 92 | 4 | 4 | **curso cerrado** |
| libro-de-mormon-2 | 39 | 0 | 0 | **curso cerrado** |
| doctrina-y-convenios-1 | 80 | 58 | 1 | 50 de 80 |
| religion-250 | 38 | 5 | 0 | **curso cerrado (38/38)** |
| religion-225 | 5 | 5 | **0** | **curso cerrado (5/5)** |
| religion-301 | 50 | 24 | 1 | 20 de 50 |
| religion-200 | 56 | 6 | 1 | 1 de 56 |
| **Total** | **470** | **117** | **10** | **355 de 470 (76 %)** |

> ¹ **`antiguo-testamento-1` lo revisó Axel a mano** (agosto de 2026) y lo dio por
> correcto. Esa revisión **no está registrada cita por cita** en
> `AUDITORIA-citas-AT1.md`: ese documento solo detalla las 4 que encontró el detector.
> Si más adelante hiciera falta evidencia por cita, hay que rehacerla.

**Quedan 115 citas sin verificar**, en tres cursos: `religion-301` (30),
`doctrina-y-convenios-1` (30) y `religion-200` (55).

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

### Religión 301 — grupo sin `link` cerrado (20 de 50)

Detalle en **`docs/auditorias/AUDITORIA-citas-R301.md`**. Peor resultado del corpus:
**20 de 20 inválidas, ninguna textual.** 17 de los 20 discursos citados **no existen**
—el autor nunca dio un discurso con ese título en esa fecha—, y los 3 restantes eran
un documento atribuido a la persona equivocada y dos discursos reales cuyo texto no
aparece en ellos. Los 20 reemplazos salen del manual oficial de Instituto 2026.

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
- [ ] **Las 30 citas de DyC-1 que ya tenían `link`.** Ver `AUDITORIA-citas-DyC1.md`.
- [ ] **Las 55 citas restantes de `religion-200`.** Ver `AUDITORIA-citas-R200.md`.

**Orden sugerido:** `religion-301` (30) → `doctrina-y-convenios-1` (30) →
`religion-200` (55). Ya no hay ningún grupo marcado por banderas: de acá en adelante
hay que abrir el manual de cada lección.

---

## Lo que queda fuera del alcance actual (relevado, no empezado)

Las citas de líderes son **la décima parte** de lo que se puede auditar. Relevado en
agosto de 2026 al discutir cómo dejar que un auditor externo revise el sitio:

| Elemento | Cantidad | Verificable contra | Estado |
|---|---:|---|---|
| Referencias de Escritura | **1207** (80 sin `link`) | Las Escrituras | **nunca auditado** |
| Preguntas de quiz | 3770 | La lección | nunca auditado |
| Citas de líderes | 470 | churchofjesuschrist.org | 76 % |
| Bloques de `contexto` | 425 | Criterio doctrinal | nunca auditado |
| Cuestionarios de reflexión | 425 | Criterio pedagógico | nunca auditado |
| `conclusion` | 316 | Criterio doctrinal | nunca auditado |

**Las 1207 referencias de Escritura son el próximo bloque obvio**: es el grupo más
grande, el más fácil de verificar (texto del versículo contra la edición oficial) y
tiene 80 casos sin `link` que se pueden listar en un comando.

### Si hay que darle el contenido a un auditor externo

**El sitio no sirve para eso.** Razones concretas:

- **43 lecciones son invisibles desde el sitio.** Hay 714 archivos de lección y solo
  **671 alcanzables**; las 43 restantes son de `libro-de-mormon-2` y no figuran en
  ningún manifiesto, así que ninguna pantalla las muestra. Un auditor que navegue el
  sitio devolvería un informe con el 6 % del corpus sin tocar, sin saberlo.
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
   `veredicto` y `notas`. Es lo único que escala a 1207 escrituras. Ya existe la mitad:
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
| `docs/auditorias/AUDITORIA-citas-DyC1.md` | Auditoría en curso |
| `docs/auditorias/AUDITORIA-citas-R250.md` | Recuperada de git |
| `docs/auditorias/AUDITORIA-citas-libro-de-mormon.md` | Recuperada de git |
| `docs/auditorias/AUDITORIA-citas-R301.md` | Grupo sin `link` cerrado (20/50) |
| `docs/auditorias/AUDITORIA-citas-R225.md` | Curso cerrado (5/5) |
| `docs/auditorias/AUDITORIA-citas-AT1.md` | Empezada (4/110) |
| `docs/auditorias/AUDITORIA-citas-R200.md` | Empezada (1/56) |
