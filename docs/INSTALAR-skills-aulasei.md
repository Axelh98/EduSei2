# Instalar las skills de AulaSei en otra computadora

Este documento contiene **las dos skills del proyecto, enteras**. Cada una es un único archivo
`SKILL.md` y no depende de ningún otro archivo dentro de su carpeta.

| Skill | Para qué | Tamaño |
|---|---|---|
| `seminary-enrichment` | **Escribir** contenido: contexto, escrituras, citas de líder, conclusión, cuestionario y quiz, a partir del manual oficial. Tiene la Regla superior de centralidad en Jesucristo, la pregunta de escudriñar y el catálogo de anti-patrones del quiz. | 42 KB |
| `seminary-audit` | **Verificar** contenido ya escrito: fidelidad de las citas de Escritura, de las citas de líder, completitud de las secciones, y la auditoría doctrinal. | 27 KB |

Van juntas: la de auditoría remite a las reglas de la de generación, y la de generación remite al
catálogo de defectos que la auditoría fue encontrando.

## 1. Dónde va cada archivo

Los nombres de carpeta y de archivo tienen que ser **exactos** (minúsculas, guion medio,
`SKILL.md` en mayúsculas):

| Sistema | Ruta |
|---|---|
| Windows | `C:\Users\<tu-usuario>\.claude\skills\<nombre-de-la-skill>\SKILL.md` |
| macOS / Linux | `~/.claude/skills/<nombre-de-la-skill>/SKILL.md` |

Es decir, dos carpetas: `seminary-enrichment` y `seminary-audit`, cada una con su `SKILL.md`.

En Windows, desde PowerShell:

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills\seminary-enrichment"
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills\seminary-audit"
```

En macOS o Linux:

```bash
mkdir -p ~/.claude/skills/seminary-enrichment ~/.claude/skills/seminary-audit
```

Después pegá en cada `SKILL.md` el bloque que corresponde (secciones 4 y 5 de este documento),
**todo, desde las tres rayas `---` del principio hasta el final**. Esas rayas son el *frontmatter*
de la skill: sin ellas Claude Code no la reconoce.

**Guardá los archivos en UTF-8.** El texto tiene acentos y comillas angulares (« »); en otra
codificación las skills quedan ilegibles.

## 2. Cómo confirmar que quedaron instaladas

Abrí Claude Code y escribí `/`. Las dos tienen que aparecer en la lista, y podés invocarlas
directamente con `/seminary-enrichment` y `/seminary-audit`.

Si alguna no aparece, revisá que la carpeta no tenga mayúsculas ni espacios y que el archivo se
llame `SKILL.md`, no `skill.md` ni `SKILL.md.txt`.

## 3. Qué necesitan para funcionar de verdad

Las skills son el método, no una herramienta autónoma. En esa computadora hace falta:

- **El repositorio de AulaSei clonado.** Las dos llaman a scripts del proyecto
  (`scripts/audit-escrituras.ts`, `audit-completitud.ts`, `audit-doctrinal.ts`,
  `audit-links-citas.ts`, `fix-anclas-citas.ts`, `validate-content.ts`, entre otros) y remiten a
  los documentos de método de `docs/auditorias/`.
- **Node**, porque todo se corre con `npx tsx`.
- **Conexión a internet.** Las dos leen el material oficial de `churchofjesuschrist.org`: la de
  generación para escribir con el manual delante, la de auditoría para comparar contra la fuente.
  La regla que ninguna de las dos negocia es no restituir texto de memoria nunca.

> ⚠️ **Los documentos de método no viajan con `git pull`.** Por la regla del proyecto de no
> versionar documentación, `docs/auditorias/` (PLAN-DE-AUDITORIA, COMO-AUDITAR-ESCRITURAS,
> COMO-AUDITAR-CONTENIDO, CICLO-GENERACION-AUDITORIA, la bitácora y los informes por curso) está
> fuera del repositorio. Si vas a auditar o generar en serio en la otra máquina, copialos aparte:
> las skills los citan todo el tiempo.

> ℹ️ **Defecto conocido de `seminary-enrichment`:** en dos lugares remite a
> `references/output-format.md` y `references/scripture-links.md`. **Ese directorio no existe** y
> nunca existió — no es que falte copiarlo. Está documentado en `CICLO-GENERACION-AUDITORIA.md`.

## 4. Contenido de `seminary-audit/SKILL.md`

````markdown
---
name: seminary-audit
description: >
  Audita el contenido de las lecciones de Seminario e Instituto de La Iglesia de Jesucristo de
  los Santos de los Últimos Días en el proyecto AulaSei (lib/content/<categoryId>/*.json): la
  fidelidad de las citas de Escritura, la fidelidad de las citas de líderes ("enseñanza" / citas
  proféticas), la completitud/forma de contexto, cuestionario (preguntas reflexivas),
  conclusión y quiz (questions) contra las reglas de seminary-enrichment, Y la auditoría
  doctrinal (si la lección enseña de Jesucristo, si invita al Espíritu Santo, si manda al
  alumno de vuelta al pasaje) contra los dos documentos oficiales del programa. Usá esta skill cuando
  el usuario pida "auditar citas", "auditar escrituras", "verificar citas proféticas", "revisar
  citas de líderes", "chequear si las citas son textuales", "validar referencias de Escritura",
  "revisar REVISAR_MANUAL", "comparar lecciones/cursos", "auditar contexto/cuestionario/
  conclusión/quiz", "ver si falta contenido", "auditar la centralidad en Cristo", "revisar si
  las lecciones enseñan de Jesucristo", "auditoría doctrinal", "alineación con el objetivo de
  Seminarios e Institutos", "alineación con Enseñar a la manera del Salvador", o mencione alguno de los scripts
  audit-escrituras.ts, fix-escrituras.ts, extract-citas.ts, fix-citas-links.ts,
  rescan-ventana-ancha.ts, audit-completitud.ts, audit-doctrinal.ts, o los documentos
  docs/auditorias/PLAN-DE-AUDITORIA.md, docs/auditorias/COMO-AUDITAR-ESCRITURAS.md,
  docs/auditorias/COMO-AUDITAR-CONTENIDO.md o docs/ESTADO.md. Activate también con "por dónde
  sigo con la auditoría" o "qué falta auditar". Es la contraparte de `seminary-enrichment` (esa genera contenido nuevo; esta
  verifica contenido existente, contra la fuente oficial en churchofjesuschrist.org para las
  citas, y contra las reglas de la propia skill de enriquecimiento para el resto).
---

# Auditoría de contenido — AulaSei

Verifica que el contenido que ya está en el sitio (no el que hay que generar — para eso está
`seminary-enrichment`) sea correcto. Hay **cuatro auditorías distintas** que no comparten script ni
patrón de falla — no asumas que el método de una sirve para las otras:

| | Citas de Escritura | Citas de líderes ("proféticas") | Contexto / cuestionario / conclusión / quiz | Doctrinal (centralidad en Cristo) |
|---|---|---|---|---|
| Dónde viven | `secciones[].tipo == "escrituras"` → `citas[]`; también bloques `tipo: "escritura"` en `resumen` | `secciones[].tipo == "enseñanza"`; también bloques `tipo: "cita"` en `resumen` | `secciones[].tipo` `"contexto"`/`"cuestionario"`/`"conclusion"`; `questions[]` a nivel de lección | `"contexto"` y `"conclusion"` (¿enseñan de Él?) y `"cuestionario"` (¿invita al Espíritu?, ¿manda al pasaje?) |
| Se verifica contra | El versículo real en churchofjesuschrist.org | El discurso/libro real en churchofjesuschrist.org | Las reglas de generación de `seminary-enrichment` (no hay fuente externa) | Los dos documentos oficiales del programa (ver §4), vía la "Regla superior" y el "Checklist doctrinal" de `seminary-enrichment` |
| Problema típico | `texto` parafraseado en vez de literal | La fuente entera puede ser inventada (discurso que no existe) | Sección ausente, o con menos ítems/palabras de los que pide la spec | La lección está completa y bien escrita, pero enseña un principio genérico sin Cristo |
| Método | Descargar el capítulo y comparar por recall de palabras — automatizable | Abrir el `chapterUrl` del manual oficial y el índice de la conferencia — mayormente manual | Contar y medir contra la spec — automatizable (completitud); leer una muestra — manual (calidad) | Vocabulario, automatizable para detectar la AUSENCIA; la presencia hay que confirmarla leyendo |
| Doc de método | `docs/auditorias/COMO-AUDITAR-ESCRITURAS.md` | `docs/ESTADO.md` §2 | `docs/auditorias/COMO-AUDITAR-CONTENIDO.md` | §4 de esta skill |
| Scripts | `audit-escrituras.ts`, `fix-escrituras.ts`, `rescan-ventana-ancha.ts`, `ver-versiculo.ts` | `extract-citas.ts`, `fix-citas-links.ts` | `audit-completitud.ts` | `audit-doctrinal.ts` |

**Antes de escribir una sola línea de cualquiera de las cuatro**, leé el doc de método
correspondiente completo — esta skill es un mapa para no perder tiempo redescubriendo la
estructura del proyecto, no un sustituto de esos documentos. Los ejemplos y umbrales de esta
skill vienen de auditorías reales ya hechas (Doctrina y Convenios 1, Libro de Mormón 1 y 2,
Religión 200/225/250/301, Antiguo Testamento 1) — mirá `docs/auditorias/` antes de auditar un
curso para ver si ya tiene auditoría previa (aunque sea parcial) antes de arrancar de cero.

**Regla que nunca se negocia en las dos auditorías de citas: nunca restituir texto de memoria.**
Toda corrección sale de haber descargado y comparado contra la fuente real. Saltearse esto ya
costó caro dos veces en este proyecto (ver §6 de `AUDITORIA-citas-libro-de-mormon.md` y la
motivación completa de `COMO-AUDITAR-ESCRITURAS.md`). La auditoría de contexto/cuestionario/
conclusión/quiz no tiene fuente externa que descargar, pero comparte el mismo espíritu: no
declarar "correcto" o "incorrecto" sin haber contado o leído, nunca por impresión.

---

## 0. Antes de arrancar

0. **Abrí `docs/auditorias/PLAN-DE-AUDITORIA.md` primero.** Es el punto de entrada: una sola
   tabla con el estado de los 12 cursos en las auditorías de Escritura, líder y completitud, y
   el orden sugerido de próximos pasos. Te ahorra correr los scripts sobre un curso que ya
   está cerrado en alguno de los tipos. Actualizalo cuando termines o avances. **La auditoría
   doctrinal (§4) todavía no tiene columna ahí** — se agregó el 6-sep-2026 y ningún curso está
   cerrado en ella: agregale la columna la primera vez que cierres un curso.
1. **Mirá si el curso ya tiene auditoría.** `docs/auditorias/README.md` tiene la tabla de estado
   de citas de líder; la sección "Referencias de Escritura" del mismo archivo, más
   `docs/ESTADO.md`, cubren las de Escritura. Un curso puede tener auditoría de un tipo y no del
   otro — son independientes (ej. `libro-de-mormon` tenía citas de líder cerradas desde antes,
   pero cero auditoría de Escritura hasta agosto 2026).
2. **Revisá si hay archivos sueltos dentro de `lib/content/<categoryId>/`** con prefijo `_` (ej.
   `_AUDITORIA-ESCRITURAS-README.md`, `_auditoria-snapshot-original.json`). Son registros de
   sesiones de auditoría manual anteriores a que existieran los scripts — pueden dejar
   "anomalías" pendientes de una sesión previa que hay que retomar antes de auditar de cero. No
   los borres: son historial. Si están desactualizados, agregales una nota de qué cambió y quién
   lo revisó, en vez de reemplazarlos.
3. **El proyecto no siempre es un repositorio git** (verificá con `git status`; si falla,
   trabajá con cuidado extra: no hay diff ni revert fácil — nunca uses operaciones destructivas,
   y preferí `Edit` puntual sobre reescribir archivos enteros).
4. Corré `npx tsx scripts/validate-content.ts` al final de cualquier tanda de ediciones manuales
   de JSON — detecta JSON roto o campos con forma equivocada antes de que llegue a producción.

---

## 1. Auditoría de citas de Escritura

Flujo completo en `docs/auditorias/COMO-AUDITAR-ESCRITURAS.md` — leelo entero antes de tocar
nada, en particular §4.1 (cómo triar cuando `REVISAR_MANUAL` es una fracción grande del curso) y
§4.2 (cómo resolver citas que apuntan al capítulo o libro equivocado). Resumen operativo:

```bash
npx tsx scripts/audit-escrituras.ts <categoria>              # descarga + compara, no escribe
npx tsx scripts/fix-escrituras.ts <categoria> --write        # aplica AUTO_CORREGIBLE (recall≥0.85)
npx tsx scripts/rescan-ventana-ancha.ts <categoria> --write  # segunda pasada, ventanas más anchas
npx tsx scripts/ver-versiculo.ts <url-capitulo> <versiculo>  # verificar una hipótesis puntual
```

**Lo que aprender de memoria de este flujo** (para no releer el doc completo cada vez):

- El comparador usa **recall de palabras**, no similitud exacta: qué fracción de las palabras
  significativas (>3 letras) del `texto` guardado aparece en el párrafo real. Sirve porque muchas
  citas transcriben solo una frase de un versículo largo.
- `AUTO_CORREGIBLE` (recall ≥ 0.85 dentro del mismo capítulo) se aplica sin criterio humano.
  `REVISAR_MANUAL` es todo lo demás — puede ser desde una diferencia de puntuación hasta una
  referencia completamente inventada.
- Si `REVISAR_MANUAL` es una fracción grande del curso (visto en `libro-de-mormon-2`: 114 de
  237), **no lo leas uno por uno en la conversación** — corré `rescan-ventana-ancha.ts` primero,
  que separa automáticamente "versículo puntual mal citado" (ventana de 1–3 párrafos, se
  literaliza el texto) de "resumen de un pasaje largo" (ventana de 4+, se amplía la referencia
  y se deja el texto intacto — esa distinción fue una decisión explícita tomada con el usuario en
  agosto 2026; si el proyecto cambia de convención, actualizá el script).
- Lo que ni la ventana ancha resuelve puede estar en **otro capítulo o incluso otro libro**
  (§4.2 del doc de método): ahí sí hace falta generar una hipótesis (con conocimiento del
  contenido de las Escrituras) y verificarla con `ver-versiculo.ts` antes de escribir nada.
- **Desconfiá de un recall 0.5–0.6 en un capítulo largo** (40+ párrafos, ej. D&C 84 con 120): la
  ventana ancha puede "acertar" por pura coincidencia de vocabulario común. El script avisa esto
  automáticamente (`⚠ capítulo largo`, `⚠ recall en zona gris`) — no ignores el aviso.
- Cuando el mismo texto aparece citado bajo dos referencias distintas en dos lecciones distintas
  (ambas mal), es la fuente real la que hay que encontrar una sola vez y aplicar a las dos.
- Documentá el avance en `docs/auditorias/AUDITORIA-escrituras-<curso>.md` (creá uno si no
  existe, siguiendo el formato de `AUDITORIA-escrituras-DyC1.md` o
  `AUDITORIA-escrituras-libro-de-mormon.md`) **a medida que avanzás**, no solo al final — si la
  sesión se corta, el próximo trabajo continúa desde ahí sin perder contexto.

---

## 2. Auditoría de citas de líderes (proféticas)

Método completo en `docs/ESTADO.md` §2 — leelo entero, en particular "El método que funciona" y
la tabla "Lo que se aprendió sobre cómo fallan estas citas". Resumen operativo:

```bash
npx tsx scripts/extract-citas.ts                       # panorama de todos los cursos
npx tsx scripts/extract-citas.ts <categoria>           # un curso
npx tsx scripts/extract-citas.ts --json                # inventario con banderas, para filtrar
npx tsx scripts/extract-citas.ts --csv > citas.csv     # para pasarlo a un auditor externo

npx tsx scripts/fix-citas-links.ts                     # simulación: mueve URLs sueltas de `fuente` a `link`
npx tsx scripts/fix-citas-links.ts --write
```

**A diferencia de las citas de Escritura, acá no hay script que descargue y compare texto —el
`link` casi nunca apunta a HTML tan uniforme como el de Escrituras, y el problema dominante no es
la paráfrasis sino la fabricación.** `extract-citas.ts` solo detecta lo que se puede saber **sin
salir a internet** (banderas abajo); confirmar o refutar una cita requiere abrir la fuente.

**Banderas de `extract-citas.ts` y qué significan:**

| Bandera | Qué detecta | Qué tan grave |
|---|---|---|
| `sin-autor` / `sin-fuente` / `sin-texto` | Campo vacío | Alto — nada que verificar sin salir a buscar |
| `sin-link` | Sin URL — puede ser legítimo (libro impreso) | Medio — mirar si el manual de la lección cita ese libro |
| `link-no-oficial` | No es `churchofjesuschrist.org` | Medio — puede ser un devocional universitario legítimo (`speeches.byu.edu`) |
| `link-sin-lang-spa` | Falta `lang=spa` | Bajo — a veces el artículo solo existe en inglés (*Ensign*, *New Era*) |
| `url-dentro-de-fuente` | Una URL quedó pegada como texto dentro de `fuente` en vez de en `link` | Alto pero mecánico — lo arregla `fix-citas-links.ts` |
| `voseo-en-cita` | El texto usa voseo ("estudiás", "tenés") | **Muy alto** — el material oficial en español SIEMPRE usa "tú"; si aparece, la cita fue reescrita, no transcrita |
| `vosotros-en-cita` | El texto usa "vosotros"/"-asteis"/"-isteis" | **Muy alto** — el material oficial usa "ustedes"; "vosotros" solo es legítimo dentro de una cita de Escritura anidada |
| `nombre-mal-escrito` | Typo conocido en el nombre de la autoridad | Bajo pero mecánico |
| `elder-sin-tilde` | "Elder" en vez de "Élder" | Bajo, cosmético |
| `fecha-posterior-a-la-muerte` / `fecha-anterior-al-autor` | Cruce con fechas de vida de líderes fallecidos (detecta autor equivocado con texto y link correctos) | **Alto** — encontró un caso real (D&C 78 atribuido a Ezra Taft Benson, en realidad de Neil L. Andersen) |

**Lo que las banderas NO detectan** (y por qué no alcanza con "0 banderas = sano"): un discurso
con título verosímil que **no existe**, un texto real pero **parafraseado**, o una fuente real
citada con **la página equivocada**. En `religion-301`, el grupo *sin* bandera resultó **20 de 20
inválido** — la ausencia de bandera nunca es evidencia de que la cita esté bien.

**El método real, cuando no hay bandera o hace falta confirmar:**

1. Sacá el `chapterUrl` de la lección desde `_manifest.json` — apunta al manual oficial de
   Seminario/Instituto en español, y trae las citas reales que usa esa lección (autor, texto
   literal, referencia). Es más rápido y más confiable que buscar el discurso a ciegas.
2. Si la `fuente` trae título de discurso, abrí además el índice de esa conferencia o revista
   (`/study/general-conference/AAAA/MM?lang=spa`, o el índice de *Liahona*/*Ensign* del mes) para
   confirmar que existe. Así se destaparon 17 títulos inventados en `religion-301`.
3. El `link` va a la página oficial **donde ese texto se puede leer**: el discurso si está en
   español en el sitio; si no, la página del manual que lo cita (varios discursos viejos —
   Hinckley 1980, Holland 1974 — no están en español online; ahí la cita del manual es la única
   verificación posible, y alcanza). Para libros impresos, **antes de dar la cita por no
   verificable, mirá si el manual de esa lección cita ese mismo libro** — pasó en `religion-250`.
4. Verificar un discurso cubre todas sus repeticiones — `extract-citas.ts` (sin flags) imprime
   cuántas **fuentes distintas** hay que verificar, que es bastante menos que el total de citas.

Documentá cada corrección en `docs/auditorias/AUDITORIA-citas-<curso>.md` (formato: fuente
declarada → discurso real → verificación → acción tomada, ver la sección "Convención de estos
documentos" de `docs/auditorias/README.md`) y actualizá la tabla de estado en ese mismo README.

---

## 3. Auditoría de contexto, cuestionario, conclusión y quiz

Método completo en `docs/auditorias/COMO-AUDITAR-CONTENIDO.md` — leelo entero, en particular §1
(los dos niveles: mecánico vs. cualitativo) y §3 (la comparación AT-1/LdM-1/LdM-2, primer
hallazgo real). Resumen operativo:

```bash
npx tsx scripts/audit-completitud.ts <categoria> [...]       # una o varias categorías
npx tsx scripts/audit-completitud.ts --todos                 # las 12 categorías del proyecto
npx tsx scripts/audit-completitud.ts <categoria> --detalle   # lección por lección
```

**A diferencia de las dos auditorías de citas, acá no hay fuente externa contra la cual
verificar** — la vara es la propia spec de `seminary-enrichment` (largos en palabras, cantidad de
preguntas, presencia de al menos una cita de líder). Es la razón por la que esta auditoría se
divide en dos niveles bien distintos:

- **Nivel 1 — mecánico** (¿existe la sección?, ¿tiene la forma esperada?): 100% automatizable con
  `audit-completitud.ts`. Es lo único que hay que correr para responder "¿este curso está
  completo/consistente con los demás?" — y es lo que destapó que `libro-de-mormon-2` no tiene
  `conclusion` en ninguna de sus 107 lecciones, con `cuestionario` fijo en 3 preguntas en vez de
  6, y 57 lecciones sin ninguna cita de líder (frente a `antiguo-testamento-1` y
  `libro-de-mormon-1`, mucho más alineados con la spec — ver la tabla completa en §3 del doc).
- **Nivel 2 — cualitativo** (¿el contenido que sí tiene la forma correcta es además *bueno*?):
  no se automatiza. Se lee una muestra de 3–5 lecciones por curso y se contrasta contra el
  checklist de `seminary-enrichment` (anti-patrones de preguntas, el test de "¿lo entendería un
  alumno de primer año...?", si la `conclusion` invita a una acción concreta). Cerrado por
  primera vez en el proyecto para `libro-de-mormon-2` (31-ago-2026, 78/78 lecciones, 546 preguntas
  de quiz leídas contra su propia fuente) — ver `CALIDAD-libro-de-mormon-2.md`. Sigue pendiente
  para el resto de los cursos.

**Ojo con dos falsos positivos ya conocidos** (el script ya los maneja, pero conviene saberlo si
extendés la lógica): las lecciones `type: "Dominio de la Doctrina"` no llevan `enseñanza` por
diseño (la propia tabla de tipos de `seminary-enrichment` no la pide para ese tipo), y las
lecciones que usan la convención `tipo: "resumen"` (bloques, no `contexto`/`cuestionario`
separados — la usan `religion-225` y parte de `religion-301`) no tienen todavía una spec de largo
documentada, así que el script solo las cuenta, no las evalúa.

**Diferencia de convención ≠ error automáticamente.** Si un curso entero difiere de la mayoría
(ej. menos preguntas de cuestionario, `contexto` más corto) puede ser una decisión de diseño
legítima — sobre todo si sus lecciones cubren menos material cada una (medio capítulo en vez de
uno entero). Preguntale al usuario antes de asumir que hay que igualar todo a la convención
mayoritaria. Lo que sí es más difícil de justificar como "decisión de diseño" es una sección
**completamente ausente en el 100% de las lecciones de un curso** (como `conclusion` en
`libro-de-mormon-2`) — eso apunta más a contenido incompleto que a una convención distinta.

**No generes contenido nuevo como parte de esta auditoría** (un `contexto` que falta, ampliar un
`cuestionario` de 3 a 6) sin que el usuario lo pida explícitamente — esta skill detecta y
documenta; escribir el contenido en sí es tarea de `seminary-enrichment`, con sus propias reglas
de tono y estructura que conviene seguir con cuidado, no producir apurado dentro de un chequeo.

**Si lo que encontrás es un defecto sistemático** (no un caso aislado, sino un patrón que se repite
entre lecciones o entre cursos), no te quedes solo en corregir las instancias ya escritas: mirá
`docs/auditorias/CICLO-GENERACION-AUDITORIA.md`, el catálogo de defectos que auditorías anteriores
encontraron mapeados a la regla de `seminary-enrichment/SKILL.md` que ahora los previene. Si tu
hallazgo es nuevo, agregale una fila y reforzá esa regla en la skill — así la próxima tanda de
generación no repite el mismo defecto sobre lecciones que todavía no existen.

Documentá los hallazgos en `docs/auditorias/COMO-AUDITAR-CONTENIDO.md` §3 (agregando filas a la
tabla comparativa) y en la sección correspondiente de `docs/auditorias/README.md`.

---

## 4. Auditoría doctrinal (centralidad en Cristo)

La más nueva (6-sep-2026) y la única que no nació de un defecto de generación, sino de comparar
el proyecto entero contra los dos documentos oficiales de los que cuelga el programa:

- [El objetivo de Seminarios e Institutos de Religión (2022)](https://www.churchofjesuschrist.org/study/manual/objective-of-seminaries-and-institutes-2022/objective?lang=spa)
  — "Centramos **cada** experiencia de aprendizaje en Jesucristo y en Su ejemplo, atributos y
  poder redentor"; "nos esforzamos por invitar al Espíritu Santo a cumplir Su función en cada
  experiencia de aprendizaje".
- [Enseñar a la manera del Salvador (2022)](https://www.churchofjesuschrist.org/study/manual/teaching-in-the-saviors-way-2022?lang=spa)
  — la Parte 1 entera se llama "Enseñar sobre Jesucristo independientemente de lo que se enseñe";
  el capítulo "Fomentar el aprendizaje diligente" pide "ayudar a los alumnos a asumir la
  responsabilidad de su propio aprendizaje" y, textual, "resista la tendencia a responder cada pregunta".

**Los dos se leen con la API del manual, no con `web_fetch`** (el sitio es una SPA y `web_fetch`
solo trae el shell). Ver la nota de la API en `seminary-enrichment` o pedirla así:

```bash
curl -s "https://www.churchofjesuschrist.org/study/api/v3/language-pages/type/content?lang=spa&uri=/manual/objective-of-seminaries-and-institutes-2022/objective"
```

Resumen operativo:

```bash
npx tsx scripts/audit-doctrinal.ts <categoria> [...]      # un curso o varios
npx tsx scripts/audit-doctrinal.ts --todos                # los 12, con ranking al final
npx tsx scripts/audit-doctrinal.ts --todos --ranking      # solo la tabla comparativa
npx tsx scripts/audit-doctrinal.ts <categoria> --detalle  # qué lección falla y por qué
```

**Qué mide** (las tres reglas que `seminary-enrichment` incorporó el 6-sep-2026 — la "Regla
superior", la pregunta de escudriñar y la regla del Espíritu Santo):

1. **¿El `contexto` o la `conclusion` nombran a Jesucristo?** Es el piso, no la vara.
2. **¿Dicen además algo sobre Él?** (Su ejemplo, un atributo o título, Su poder redentor, una
   promesa Suya). El script lo aproxima por vocabulario y lo reporta como *sustancia*.
3. **¿Alguna pregunta del `cuestionario` invita a orar, meditar o anotar una impresión?**
4. **¿Alguna pregunta devuelve al alumno al bloque `escrituras` a buscar por su cuenta?**
   (la "pregunta de escudriñar", posición 3 de las 6).

**Los dos niveles funcionan al revés que en la auditoría de completitud.** Acá lo automatizable
es la **ausencia**: si el `contexto` y la `conclusion` no nombran al Salvador ni una vez, no hay
nada que interpretar, la lección no está centrada en Él. La **presencia** es solo un indicio —
que aparezca la palabra "Cristo" no significa que la lección enseñe de Él. El veredicto sale de
leer, con la pregunta del checklist doctrinal: *si borrás Su nombre del párrafo, ¿la lección
funcionaría exactamente igual?* Si la respuesta es sí, está nombrado pero no enseñado, y el
script lo lista aparte como `SOLO NOMBRADO`.

**Dos falsos positivos que el script ya filtra** (no los reintroduzcas si tocás la lógica):

- **"La Iglesia de Jesucristo de los Santos de los Últimos Días"** contiene Su nombre y no enseña
  nada sobre Él. Sin filtrarla, cualquier lección que nombre a la Iglesia cuenta como centrada en
  Cristo — infla el resultado unos 4 puntos sobre el corpus.
- Las lecciones de convención **`tipo: "resumen"`** (`religion-225` y parte de `religion-301`) no
  tienen `contexto`/`conclusion` separados, así que el script las cuenta y las saltea, igual que
  `audit-completitud.ts`. Auditarlas requiere primero decidir la spec de esa convención.

**Línea de base al 6-sep-2026** (519 lecciones de convención clásica, antes de cualquier
corrección — usala para medir si una tanda de generación o de arreglo mejoró algo):

| curso | lecciones | Cristo | sustancia | orar | escudriñar |
|---|---|---|---|---|---|
| doctrina-y-convenios-2 | 54 | 30 % | 13 % | 50 % | 0 % |
| religion-301 | 5 | 40 % | 0 % | 80 % | 0 % |
| antiguo-testamento-1 | 88 | 44 % | 26 % | 64 % | 1 % |
| doctrina-y-convenios-1 | 91 | 45 % | 20 % | 56 % | 0 % |
| antiguo-testamento-2 | 67 | 55 % | 25 % | 61 % | 0 % |
| religion-200 | 28 | 61 % | 29 % | 46 % | 0 % |
| libro-de-mormon-2 | 80 | 68 % | 36 % | 61 % | 0 % |
| libro-de-mormon-1 | 78 | 74 % | 36 % | 51 % | 0 % |
| religion-250 | 28 | 93 % | 68 % | 64 % | 4 % |
| **TOTAL** | **519** | **56 %** | **29 %** | **58 %** | **0 %** |

Leer esa tabla: *escudriñar* está en 0 % en todo el proyecto porque la regla no existía cuando se
generó nada — no es un defecto de un curso, es una función que falta en el corpus entero.
*Cristo* al 56 % sí discrimina entre cursos: `religion-250` está al 93 % porque su tema es
Jesucristo, y `doctrina-y-convenios-2` al 30 % porque sus lecciones entran por un tema histórico
o de conducta. **La regla del manual es justamente que eso no debería importar**: "independientemente
de lo que se enseñe".

**No corrijas contenido dentro de esta auditoría** — vale la misma regla que en §3: esta skill
detecta y documenta; reescribir un `contexto` para que enseñe de Cristo es generación, y va con
`seminary-enrichment` y su Regla superior. Si el usuario pide corregir, hacelo como tanda de
generación explícita, no como efecto colateral del chequeo.

**Priorizá por volumen, no por porcentaje.** El peor porcentaje puede ser un curso de 5 lecciones.
Ordená por lecciones sin Cristo en términos absolutos: al 6-sep-2026 eso pone primero a
`doctrina-y-convenios-1` (50 lecciones), `antiguo-testamento-1` (49) y `doctrina-y-convenios-2` (38).

Documentá los hallazgos en `docs/auditorias/DOCTRINAL-<curso>.md` (creá el primero siguiendo el
formato de `CALIDAD-libro-de-mormon-2.md`) y agregá la columna doctrinal a
`docs/auditorias/PLAN-DE-AUDITORIA.md`.

---

## 5. Reportar el trabajo

Al terminar (o al pausar) una auditoría de cualquiera de los cuatro tipos:

- Actualizá el documento de auditoría correspondiente: `docs/auditorias/AUDITORIA-<tipo>-<curso>.md`
  para citas (con lo verificado, lo corregido y el texto completo de lo que quedó pendiente, para
  que la próxima sesión no tenga que releerlo del archivo), o
  `docs/auditorias/COMO-AUDITAR-CONTENIDO.md` §3 para contexto/cuestionario/conclusión/quiz, o
  `docs/auditorias/DOCTRINAL-<curso>.md` para la doctrinal (§4), con la tabla de línea de base
  antes y después para que se vea si la corrección movió la aguja.
- Actualizá la tabla de estado en `docs/auditorias/README.md` (citas de líder, o su sección
  "Referencias de Escritura", o su sección de contexto/cuestionario/conclusión/quiz según
  corresponda), y `docs/ESTADO.md` si el curso queda cerrado.
- Corré `npx tsx scripts/validate-content.ts` una última vez.
- Si encontraste y corregiste un defecto sistemático, actualizá también
  `docs/auditorias/CICLO-GENERACION-AUDITORIA.md` y la regla correspondiente en
  `seminary-enrichment/SKILL.md` (ver la nota en §3 arriba) — es lo que evita que la próxima tanda
  de generación reproduzca el mismo defecto. Si el defecto es doctrinal, la regla que hay que
  reforzar es la "Regla superior" del paso 3 de esa skill, o el "Checklist doctrinal": no agregues
  una regla nueva suelta si alguna de esas dos ya cubre el caso y lo que falló fue aplicarla.
- Si el usuario lo pide, reportá cuántos tokens se usaron en la sesión (compará el
  `total_tokens` del primer y el último `system-reminder` visibles en la conversación).
````

## 5. Contenido de `seminary-enrichment/SKILL.md`

````markdown
---
name: seminary-enrichment
description: >
  Enriquece y resume lecciones de Seminario e Instituto de La Iglesia de Jesucristo de los Santos de los Últimos Días.
  Usa esta skill siempre que el usuario quiera navegar links del manual oficial de la Iglesia (churchofjesuschrist.org/study/manual/),
  extraer contenido de lecciones, generar resúmenes, escrituras clave, citas de líderes, contexto histórico o preguntas de reflexión
  para lecciones de Seminario o Instituto. También actívate cuando el usuario pida "enriquecer secciones", "rellenar el campo secciones",
  "procesar lecciones de DC", o cuando trabaje con archivos TypeScript que contengan el tipo `Week[]`, `Lesson[]`, o campos como
  `chapterUrl`, `secciones`, `questions`. Si el usuario menciona programas de estudio de la Iglesia, Doctrina y Convenios,
  Antiguo Testamento, Nuevo Testamento, Libro de Mormón, o cualquier manual de Seminario/Instituto, esta skill casi siempre aplica.
---

# Seminary & Institute Lesson Enrichment Skill

Esta skill automatiza el enriquecimiento de lecciones del programa de Seminario e Instituto de La Iglesia de Jesucristo de los SUD.
El flujo toma las URLs del manual oficial (`churchofjesuschrist.org/study/manual/`), extrae el contenido relevante, y genera un objeto
TypeScript estructurado con secciones enriquecidas que se integra directamente en el código base del sitio web.

---

## Contexto del proyecto

El sitio web tiene tipos TypeScript con esta forma:

```typescript
type SeccionTipo = "contexto" | "escrituras" | "enseñanza" | "conclusion" | "cuestionario"

type Seccion =
  | { tipo: "contexto"; contenido: string }
  | { tipo: "escrituras"; citas: { referencia: string; texto: string; link: string }[] }
  | { tipo: "enseñanza"; autor: string; fuente: string; texto: string; link: string }
  | { tipo: "conclusion"; contenido: string }
  | { tipo: "cuestionario"; preguntas: string[] }

type Lesson = {
  id: string
  title: string
  chapterUrl: string
  type: string
  description: string
  secciones: Seccion[]
  questions: any[]
}
```

La `chapterUrl` de cada lección apunta al manual oficial en español. El campo `secciones` empieza vacío (`[]`) y es lo que hay que rellenar.
Ver `references/output-format.md` para ejemplos completos de secciones bien formadas.

---

## Flujo principal

### 1. Recibir el input

El usuario puede dar:
- Un array de objetos `Lesson` (o `Week`) en TypeScript/JSON
- Un archivo `.ts` con lecciones a procesar
- Un listado de URLs del manual
- Una semana específica a procesar (e.g. "enriquecé la semana 3")

Identificá cuáles lecciones tienen `secciones: []` (vacías) o necesitan actualización.

### 2. Navegar y extraer contenido

**⚠️ Limitación importante**: El sitio `churchofjesuschrist.org/study/` es una Single Page Application (SPA).
`web_fetch` solo obtiene el shell HTML estático — el contenido de las lecciones individuales se carga
dinámicamente con JavaScript y **no es accesible directamente** via `web_fetch`.

**Estrategia de extracción por capas** (en orden de preferencia):

**Capa 1 — web_search dirigido** (más efectivo)
Buscá con queries específicos que tiendan a aparecer en resultados de texto completo:
```
"Doctrina y Convenios 59" seminario maestro 2025 site:churchofjesuschrist.org
"Doctrine and Covenants 59" seminary teacher 2025 "sabbath day" lesson
```
Los resultados de búsqueda a veces incluyen snippets con el contenido real de la lección.

**Capa 2 — Versión en inglés del mismo manual**
El sitio en inglés a veces tiene mejor indexación. Probá la misma lección cambiando `lang=spa` por `lang=eng`
en la URL y usando `web_fetch`. Si devuelve contenido, traducilo al español.

**Capa 3 — Come Follow Me como proxy**
La lección de Seminario corresponde a una sección de D&C. El manual Come Follow Me de la misma sección
sí suele ser accesible:
```
https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025?lang=spa
```
Buscá la semana correspondiente según el rango de secciones de la lección.

**Capa 4 — Síntesis basada en conocimiento del dominio**
Si las capas anteriores no dan contenido suficiente, generá las secciones usando:
- El título y descripción de la lección (que SÍ están disponibles en el código TypeScript del usuario)
- Tu conocimiento del contenido de las secciones de D&C indicadas
- El patrón de secciones del archivo `DC-resumen-1-5.ts` que el usuario ya tiene como referencia

En este caso, indicá en un comentario TypeScript al final del objeto que fue generado sin fuente web:
```typescript
// ⚠️ Generado sin acceso web — basado en descripción de la lección y conocimiento del dominio
```

**Qué extraer cuando tenés contenido:**
- **Propósito / objetivo de la lección**: bloque introductorio o sección "Propósito"
- **Escrituras clave**: versículos que el manual usa explícitamente como base
- **Citas de líderes**: bloques con nombre del autor, cargo y fuente (Liahona, Conferencia General, etc.).
  **Importante**: cuando encontrés una cita, también capturá el link al discurso original. Si el manual incluye
  una nota al pie, enlace o referencia, guardá esa URL. Si no la incluye, anotá autor + año + palabras clave
  para buscar el link en el paso siguiente.
- **Contexto histórico**: cuándo/dónde/por qué se dio la revelación o el evento
- **Preguntas de discusión**: preguntas del manual para la clase o reflexión personal

### 3. Construir las secciones

> ### ⭐ Regla superior: toda lección enseña sobre Jesucristo, cualquiera sea su tema
>
> El objetivo de Seminarios e Institutos es "centrar **cada** experiencia de aprendizaje en
> Jesucristo y en Su ejemplo, atributos y poder redentor", y la Parte 1 entera de *Enseñar a la
> manera del Salvador* se llama "Enseñar sobre Jesucristo independientemente de lo que se enseñe".
> Mandamientos, relatos, profecías y principios son ramas del mismo árbol: todos existen para
> ayudar a la persona a venir a Cristo.
>
> Lo mínimo por lección:
>
> - El **`contexto`** conecta el principio con Jesucristo por una de estas tres vías: **Su ejemplo**
>   perfecto de ese mismo principio, **un atributo o título Suyo** que el principio revela, o el
>   **símbolo o tipo** del relato que testifica de Él.
> - La **`conclusion`** no puede cerrar solo en el esfuerzo del alumno. La acción concreta a la que
>   invita se apoya en Él: en Su poder para habilitarnos, en Su disposición a ayudarnos, o en una
>   promesa que Él hizo.
> - **No enseñes solo la ley; enseñá también al Legislador.** Una lección sobre la Palabra de
>   Sabiduría que solo dice qué se puede y qué no perdió la oportunidad de mostrar cuánto se
>   preocupa el Salvador por nosotros al darnos esa ley.
>
> **Esto no es un adorno para el último renglón.** Medido el 6-sep-2026 sobre el corpus del
> proyecto: de las 519 lecciones de convención clásica, **275 no nombran a Jesucristo, al Salvador
> ni al Redentor ni una sola vez en el `contexto`**, y 317 tampoco en la `conclusion` (lo mide
> `npx tsx scripts/audit-doctrinal.ts --todos`, que es la cifra canónica). Los peores son justo los tipos
> narrativos: *Doctrina y Convenios - Ven Sigueme* 33 % y *Antiguo Testamento - Ven Sigueme* 38 %.
> Asumí que te va a pasar a vos también: el principio sale genérico ("actuar con fe", "ser
> agradecido"), la lección queda bien escrita, y Cristo se cae del texto sin que se note.

Armá el array `secciones` siguiendo este orden y lógica:

1. **`contexto`** — Narrativa fluida de 200–320 palabras según el tipo de lección (ver tabla más abajo).
   No es un resumen de puntos; es una historia que lleva al alumno desde el relato hasta su propia vida.
   Debe incluir al menos una conexión explícita a la realidad de un joven de 14–17 años.
   Variá la primera oración entre lecciones de una misma tanda — no repitas la misma estructura de
   apertura ("Después de que...", "Esta lección repasa...") dos veces seguidas; es el mismo problema
   de fondo que los distractores repetidos, solo que aplicado al `contexto`.

2. **`escrituras`** — Las 3–4 escrituras más importantes de la lección. Para cada una:
   - `referencia`: e.g. `"Doctrina y Convenios 19:15–19"`
   - `texto`: el texto del versículo (tomalo del manual o de las Escrituras en español en churchofjesuschrist.org)
   - `link`: URL directa al versículo en las Escrituras SUD en español
     Formato: `https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=spa&id=p15-p19#p15`

3. **`enseñanza`** (1–2 citas) — Citas de líderes de la Iglesia. Siempre incluí al menos una.
   Cada una necesita `autor`, `fuente` (publicación + año), `texto` de la cita, y `link` al discurso original.

   **⚠️ Regla crítica: solo citas genuinas, nunca inventadas.**
   - Las citas deben provenir del contenido real del manual de la lección (extraído en el paso 2).
   - Si el manual menciona explícitamente una cita con autor y fuente, usala textualmente.
   - Si el manual referencia un discurso (e.g. "El élder Holland enseñó en la Conferencia de abril 2012..."), buscá ese discurso.
   - Si no encontrás ninguna cita real en el manual ni en los recursos web, **no inventes una**. En cambio, omití el campo `enseñanza` y dejá una nota TypeScript:
     ```typescript
     // ⚠️ No se encontró cita verificable en el manual — sección enseñanza omitida
     ```
   - Nunca atribuyas palabras a un líder sin haber verificado la fuente.

   **Campo `link`** — URL al discurso original en `churchofjesuschrist.org/study/`:
   - Conferencia General: `https://www.churchofjesuschrist.org/study/general-conference/[año]/[04|10]/[slug]?lang=spa`
   - Liahona / Ensign: `https://www.churchofjesuschrist.org/study/liahona/[año]/[mes]/[slug]?lang=spa`
   - Si el discurso está en inglés y no hay traducción al español, usá la URL en inglés con `lang=eng`.
   - Si no encontrás el link exacto, buscá via `web_search` con `"[autor] [año] [palabras clave del discurso] site:churchofjesuschrist.org"`.
   - Si después de buscar no encontrás el link, dejá el campo como `""` y agregá un comentario inline: `// link no verificado`

   Priorizá citas que hablen directamente a jóvenes o que usen lenguaje concreto y accesible.

4. **`conclusion`** — Un párrafo de cierre (80–130 palabras) que sintetice el principio doctrinal central
   y su aplicación práctica. Debe terminar con una frase que invite a la acción, no a la reflexión abstracta.
   Esa acción se apoya en Cristo, no en la fuerza de voluntad del alumno (ver la regla superior de esta
   sección): nombrá Su poder, Su ejemplo o Su promesa dentro del párrafo.
   Variá también la redacción de esa invitación final entre lecciones de una misma tanda — no uses
   la misma fórmula fija ("Esta semana, elegí...") en todas; el patrón (invitación a una acción
   concreta) se mantiene, pero la frase que lo introduce tiene que cambiar.

5. **`cuestionario`** — Exactamente 6 preguntas con roles diferenciados (ver sección más abajo).
   Una de las seis manda al alumno de vuelta al bloque `escrituras` a buscar por su cuenta, y al
   menos una lo invita a orar, meditar o anotar una impresión.

### 4. Generar el output

Generá **dos outputs**:

**A) Archivo TypeScript de respaldo**
Guardalo como `[nombre-original]-enriquecido.ts` con los objetos `Lesson[]` completos con sus `secciones` rellenas.
Seguí la estructura del archivo original, solo reemplazando `secciones: []` por el array generado.

**B) Actualización inline**
Si el usuario tiene el archivo original abierto o te lo pasó, ofrecé actualizar directamente el campo `secciones`
en el archivo usando `str_replace`. Hacé una lección a la vez para reducir errores.

---

## Pautas de calidad

### Lenguaje para jóvenes de 14–17 años

El lector principal es un adolescente de entre 14 y 17 años, posiblemente en Argentina u otro país hispanohablante, con nivel de lectura de secundaria. Escribí pensando en él, no en el maestro.

- **Frases cortas.** Promedio de 18–22 palabras por oración. Si una frase supera 30 palabras, cortala en dos.
- **Oraciones directas antes que subordinadas.** Preferí "Israel olvidó a Dios. Las consecuencias fueron inmediatas." sobre "Habiendo olvidado a Dios, Israel comenzó a experimentar las consecuencias que inevitablemente se derivaron de esa decisión."
- **Cada idea abstracta necesita un ejemplo concreto** de la vida adolescente. Si hablás de "la presión del entorno", ejemplificá: "cuando tus amigos hacen algo que sabés que no está bien y vos te quedás callado."
- **Tono:** un maestro que respeta la inteligencia del alumno y le habla de igual a igual, no desde un púlpito.
- **Test de verificación antes de escribir:** ¿lo entendería un alumno de primer año del secundario que lleva seis meses en la Iglesia? Si no, simplificá.

**Situaciones adolescentes a usar como anclas concretas** (elegí la más relevante según el tema):
- Presión de grupo / identidad: "cuando tus amigos hacen algo que sabés que no está bien"
- Redes sociales: "lo que ves en Instagram o TikTok sobre cómo debería ser tu vida"
- Familia: tensiones con padres, hermanos, o situaciones de hogar difíciles
- Escuela: rendimiento, pertenencia, decisiones sobre el futuro académico
- Fe propia vs. fe heredada: "creer porque te criaron así vs. elegirlo vos mismo"
- Noviazgo y amistad: decisiones de integridad en relaciones cercanas

Estas anclas van al final del `contexto`, como puente entre el relato bíblico y la vida del alumno. Son opcionales si el relato ya conecta directamente sin necesitarlas.

---

### Lenguaje SUD

Usá terminología estándar de la Iglesia en español: "el Salvador", "el Padre Celestial", "los Santos de los Últimos Días", "la Expiación", "el sacerdocio", "el convenio", "la plenitud del Evangelio". Evitá jerga teológica académica o términos que no se usen en las publicaciones oficiales de la Iglesia.

El contenido debe ser fiel a las fuentes oficiales. No añadas doctrina no oficial.

---

### Escrituras

Usá siempre la traducción oficial de las Escrituras SUD en español (versión en churchofjesuschrist.org/study/scriptures).
Incluí el link exacto al versículo. Para construir el link:
- D&C: `https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/[cap]?lang=spa&id=p[v]#p[v]`
- BM: `https://www.churchofjesuschrist.org/study/scriptures/bofm/[libro]/[cap]?lang=spa&id=p[v]#p[v]`
- NT: `https://www.churchofjesuschrist.org/study/scriptures/nt/[libro]/[cap]?lang=spa&id=p[v]#p[v]`
- AT: `https://www.churchofjesuschrist.org/study/scriptures/ot/[libro]/[cap]?lang=spa&id=p[v]#p[v]`

---

### Citas de líderes (enseñanza)

Solo usá citas que hayas encontrado en el contenido real del manual (extraído en el paso 2 del flujo).
**Nunca inventés una cita.** Si no encontrás ninguna verificable, omití la sección `enseñanza`.

**Si corregís o reemplazás la cita de `enseñanza` de una lección que ya tiene `cuestionario` o
`questions` generados** (por ejemplo, durante una auditoría de citas de líder), revisá esas dos
secciones antes de dar la lección por corregida: buscá si alguna pregunta menciona el autor o el
contenido de la cita vieja. Corregir solo `enseñanza` y dejar una pregunta de quiz citando a un
autor que ya no aparece en el archivo es un defecto real que encontró la auditoría de Nivel 2 de
`libro-de-mormon-2` (ver `docs/auditorias/CICLO-GENERACION-AUDITORIA.md`) — rompe la fidelidad del
contenido sin que ningún chequeo mecánico lo detecte.

**Formato correcto:**
```typescript
{
  tipo: "enseñanza",
  autor: "Élder Jeffrey R. Holland",
  fuente: "Conferencia General, octubre 2012",
  texto: "No huyas de las cosas sagradas; córreles al encuentro.",
  link: "https://www.churchofjesuschrist.org/study/general-conference/2012/10/israel-israel-god-is-calling?lang=spa"
}
```

**Para construir el `link`:**
- Conferencia General: `https://www.churchofjesuschrist.org/study/general-conference/[año]/[04|10]/[slug]?lang=spa`
- Liahona: `https://www.churchofjesuschrist.org/study/liahona/[año]/[mes-en-dos-dígitos]/[slug]?lang=spa`
- Ensign (inglés): `https://www.churchofjesuschrist.org/study/ensign/[año]/[mes-en-dos-dígitos]/[slug]?lang=eng`

**Cómo encontrar el slug:** buscá `"[autor] [año] [frase clave del discurso] site:churchofjesuschrist.org"` en `web_search` y usá la URL del resultado. Si el manual no incluye un link pero sí menciona la fuente (e.g. "Liahona, enero 2018"), buscá el discurso completo.

**Si el link no es encontrable después de buscar**, dejá `link: ""` y agregá al final del objeto:
```typescript
// link: no verificado — fuente: Liahona enero 2005
```



### Cuestionario (6 preguntas reflexivas)

Las 6 preguntas deben cumplir roles distintos y estar en este orden:

| # | Rol | Función | Ejemplo de forma |
|---|-----|---------|-----------------|
| 1–2 | **Abridoras** | Fáciles de responder, no requieren vulnerabilidad. Generan conversación sin riesgo. | "¿Con qué personaje de esta historia te identificás más y por qué?" |
| 3 | **De escudriñar** | Manda al alumno de vuelta al bloque `escrituras` **de esta misma lección** a encontrar algo por su cuenta. No se responde de memoria ni con una opinión: hay que releer el pasaje. Nombrá la referencia exacta en la pregunta. | "Volvé a leer Doctrina y Convenios 19:16–19. ¿Qué dice ahí sobre lo que el Salvador estuvo dispuesto a hacer que no habías notado antes?" |
| 4 | **Profundizadora** | Invita a conectar con la experiencia personal. Requiere un poco más de apertura. | "¿Hubo alguna vez que actuaste con fe antes de tener todas las respuestas?" |
| 5–6 | **De compromiso** | Invitan a una acción concreta y alcanzable esta semana. | "¿Qué decisión pequeña pero real tomarías esta semana como respuesta a lo que aprendiste?" |

**Por qué existe la pregunta 3.** *Enseñar a la manera del Salvador* pide "ayudar a los alumnos a
asumir la responsabilidad de su propio aprendizaje" y, textualmente, "resista la tendencia a
responder cada pregunta". Nuestro formato trabaja en contra de eso: el `contexto` le entrega al
alumno el pasaje ya interpretado y después le pregunta por su vida, así que nunca tiene que buscar
nada. La pregunta 3 es la que devuelve ese trabajo al alumno. Si al escribirla podés responderla
sin abrir el pasaje, todavía no es una pregunta de escudriñar.

**Reglas adicionales para las preguntas:**
- Evitá comenzar con "¿Por qué crees que...?" seguido de interpretación teológica — los adolescentes las perciben como trampa o como evaluación escolar.
- Priorizá "¿Alguna vez viviste algo parecido a...?" antes que "¿Qué significa para ti...?"
- Las preguntas de compromiso (5–6) deben ser específicas y alcanzables: "¿A quién podrías llamar esta semana?" es mejor que "¿Cómo serás más amable?"
- Al menos una pregunta debe poder responderse con una sola oración, para que los alumnos más tímidos puedan participar.
- **Al menos una de las dos preguntas de compromiso (5–6) invita a orar, meditar o anotar una
  impresión**, no solo a hacer algo. El objetivo de SEI dice que buscamos "invitar al Espíritu Santo
  a cumplir Su función en cada experiencia de aprendizaje", y el manual pide ayudar al alumno a
  "buscar, reconocer y actuar de acuerdo con la revelación personal". Sin esta regla el cuestionario
  queda como una lista de tareas: medido el 6-sep-2026, solo el **4 %** de las lecciones del proyecto
  menciona la revelación personal y el **19 %** al Espíritu Santo. Formas que funcionan: "¿qué le
  preguntarías al Padre Celestial sobre esto esta semana?", "anotá qué te viene a la mente mientras
  releés el versículo", "orá por [situación concreta] y escribí lo que sentiste después".

---

### Checklist doctrinal antes de cerrar una lección

Distinto del checklist del quiz (más abajo): este se corre sobre la lección entera, con las cinco
secciones ya escritas.

- [ ] **¿El `contexto` o la `conclusion` nombran a Jesucristo y dicen algo sobre Él?** No alcanza
      con que aparezca la palabra: tiene que decir algo de Su ejemplo, un atributo, Su poder o una
      promesa Suya. Si la lección funcionaría igual borrando Su nombre, todavía no está centrada en Él.
- [ ] **¿Alguna pregunta del `cuestionario` invita a orar, meditar o anotar una impresión?**
- [ ] **¿Hay una pregunta que devuelva al alumno al bloque `escrituras` a buscar por su cuenta?**
      (la pregunta 3, de escudriñar)

Y las preguntas de evaluación que pide *Enseñar a la manera del Salvador* ("Evalúe lo que está
enseñando para asegurarse de enseñar la doctrina verdadera"):

- [ ] Lo que voy a enseñar, ¿se basa en las Escrituras y en las palabras de los profetas de los
      últimos días? (esto ya lo garantizan las secciones `escrituras` y `enseñanza`)
- [ ] **¿De qué modo ayudará esto a otras personas a edificar la fe en Jesucristo, arrepentirse y
      progresar a lo largo de la senda de los convenios?** Es la pregunta que faltaba. Si la
      respuesta es "les da una buena idea para la semana" y nada más, la lección es correcta pero
      no es doctrinal: volvé al `contexto` y a la `conclusion`.

---

### Tratamiento según `type` de lección

Cada tipo de lección tiene un propósito diferente y requiere un enfoque distinto:

| `type` | `contexto` | Preguntas | Énfasis principal |
|--------|-----------|-----------|-------------------|
| `Antiguo Testamento - Ven Sigueme` | Narrativo, 260–320 palabras. Relato bíblico → doctrina → conexión con la vida del alumno | Mezcla equilibrada de abridoras, profundizadoras y de compromiso | El personaje bíblico como espejo del alumno; el relato como tipo de Cristo. **Buscá el símbolo que testifica de Él y nombralo** (el cordero, el rescate, el pan, el agua, la luz, el altar, el libertador) |
| `Preparación para la Vida` | Práctico, 200–260 palabras. Problema real adolescente → principio del Evangelio → herramienta concreta | Mayoría de tipo profundizadora y de compromiso; pocas abridoras | Pasos prácticos que el alumno puede aplicar esta semana; evitar el tono de charla motivacional. **El paso práctico se apoya en un atributo o en el poder de Cristo, no en la fuerza de voluntad**: es el tipo donde más fácil se cae en autoayuda con vocabulario SUD |
| `Dominio de la Doctrina` | Breve y enfocado, 150–200 palabras. Centrado en el principio o pasaje a dominar | Preguntas de aplicación: cómo usar este versículo en una conversación real | Memorización con comprensión; cómo explicar el principio a alguien que no es miembro. **Decí qué revela ese pasaje sobre quién es Jesucristo**, no solo qué manda hacer |

La búsqueda de símbolos, títulos y atributos de Cristo **aplica a los tres tipos**, no solo al
narrativo. Los tipos *Preparación para la Vida* y *Dominio de la Doctrina* son los que más se
alejan de Él precisamente porque su tema de entrada es una conducta o un versículo suelto: ahí es
donde hay que hacer el trabajo a propósito.

---

### Eficiencia

- Procesá lecciones en lotes de 3–5 por vez para no perder contexto.
- Comunicale al usuario el progreso: cuántas lecciones procesaste y cuántas quedan.

---

## Manejo de errores

- Si `web_fetch` falla en una URL, intentá la versión sin `?lang=spa` o buscala con `web_search`.
- Si la página existe pero el contenido es muy escaso (< 300 palabras útiles), marcá esa lección como
  `"requiere revisión manual"` en un comentario en el archivo de salida.
- Si el tipo de lección es desconocido, aplicá el flujo estándar de 5 secciones con el tratamiento de `Ven Sigueme`.

---

## Generación de preguntas multiple choice (`Question[]`)

Además de las `secciones`, cada lección puede tener un array `questions: Question[]` con preguntas de opción múltiple de alta calidad. Este módulo define cómo generarlas.

### Tipo TypeScript

```typescript
type Question = {
  id: number          // correlativo dentro de la lección, empieza en 1
  question: string    // la pregunta
  options: string[]   // exactamente 4 opciones
  correctAnswer: number // índice (0–3) de la opción correcta
}
```

---

### Cantidad y distribución

Generá **exactamente 7 preguntas por lección**, distribuidas en tres niveles cognitivos:

| # | Nivel | Descripción |
|---|-------|-------------|
| 1–2 | **Recuerdo** | El alumno necesita recordar un dato, nombre o versículo del material. Son las más directas pero no triviales. |
| 3–4 | **Comprensión / Conexión** | El alumno debe entender por qué algo ocurrió, qué simboliza, o cómo se conecta con otra enseñanza. No es copia textual. |
| 5–6 | **Aplicación** | El alumno debe trasladar el principio doctrinal a una situación concreta de la vida adolescente. |
| 7 | **Síntesis** | La pregunta más difícil. Conecta varias enseñanzas de la lección o contrasta dos perspectivas. Puede no tener una frase del texto que la responda directamente. |

---

### 4 opciones por pregunta: reglas de calidad

**Cada pregunta tiene exactamente 4 opciones (A–D).** La correcta puede estar en cualquier posición, distribuida aleatoriamente a lo largo del set.

#### La opción correcta
- Fiel al contenido del manual, la Escritura o la cita de líder citada en la lección.
- No debe ser la opción más larga como patrón constante.
- Tanto la pregunta como la opción correcta —sobre todo en la de síntesis (7)— solo pueden apoyarse en lo que está efectivamente escrito en las secciones de **esta misma lección** (`contexto`, `escrituras`, `enseñanza`). No asumas que el alumno conoce capítulos que el `title` de la lección menciona pero que el `contexto` nunca desarrolla: si el título dice "Alma 45–46" pero el `contexto` solo cuenta lo que pasa en el capítulo 46, la lección solo puede preguntar sobre el capítulo 46.

#### Los tres distractores deben ser **plausibles**, no absurdos:

| Tipo de distractor | Descripción | Ejemplo |
|--------------------|-------------|---------|
| **Parcialmente verdadero** | Contiene algo real de la lección pero incompleto o fuera de contexto. | "El maná enseñaba a Israel a ahorrar comida para el futuro." (real que era comida, pero la lección es la dependencia diaria) |
| **Confusión de personajes o conceptos** | Mezcla dos elementos reales de la lección de manera incorrecta. | "Josué fue quien fabricó el becerro de oro mientras Moisés estaba en el monte." |
| **Verdad general pero no la respuesta específica** | Algo correcto en abstracto pero que no responde la pregunta. | Para "¿cuál fue el propósito del maná?", un distractor sería "Enseñar a Israel a ser generosos con los demás." |

#### Lo que NUNCA debe hacer un distractor:
- Ser una afirmación claramente falsa para cualquier persona con fe básica ("Dios nos abandonó en el desierto").
- Ser el extremo opuesto de la correcta de forma obvia ("Solo los profetas reciben revelación" vs. "Todos pueden recibir revelación").
- Ser una opción humorística o irrespetuosa.
- Ser mucho más corto o mucho más largo que las demás (todas deben tener extensión similar).
- **Ser una negación genérica de descarte fácil** ("Que X no tiene ninguna relación con Y", "Que eso no tiene ninguna aplicación real"). Es tentador usar esta fórmula como comodín cuando hay que escribir muchas preguntas seguidas, pero un alumno la detecta y descarta sin haber entendido nada — no discrimina. Si notás que la estás repitiendo entre preguntas o entre lecciones, pará y escribí un distractor de los tres tipos de la tabla de arriba (parcialmente verdadero / confusión de conceptos / verdad general pero no específica) en su lugar.
- **Repetir la misma idea con una sola palabra cambiada**, de modo que dos distractores de la misma pregunta digan en la práctica lo mismo (ej. "depende *principalmente* de las circunstancias externas" y "depende *exclusivamente* de las circunstancias externas"). Cada distractor tiene que representar un error distinto, no una variación léxica del mismo error — si dos opciones son intercambiables, el alumno descarta por comparación entre ellas, no por comprender el contenido.

---

### Forma de las preguntas

#### Preguntas de Recuerdo (1–2): precisas y con contexto
❌ `"¿Quién fue escogido como Salvador?"`  
✅ `"Según la lección de hoy, ¿cuál fue el propósito declarado por el Señor al enviar las plagas sobre Egipto, además de liberar a Israel?"`

La pregunta de recuerdo puede requerir recordar un detalle específico que el alumno podría haber pasado por alto.

#### Preguntas de Comprensión (3–4): "¿por qué?" o "¿qué significa?"
❌ `"¿Qué simbolizaba el velo del tabernáculo?"`  
✅ `"El velo del tabernáculo separaba el lugar santo del santísimo. Cuando Jesús murió, ese velo se rasgó de arriba abajo. ¿Qué cambio doctrinal señalaba ese hecho simbólicamente?"`

Dá el contexto en la pregunta, pedí la interpretación.

#### Preguntas de Aplicación (5–6): siempre con un escenario adolescente
Estructura recomendada: `"[Nombre] está enfrentando [situación concreta]. Según el principio de esta lección, ¿qué sería lo más coherente con lo que aprendió?"`

Ejemplos de nombres y situaciones (son solo eso, ejemplos — **rotá el nombre en cada pregunta nueva**, no repitas siempre los mismos cuatro; esta lista existe para dar variedad, no para convertirse en el elenco fijo de todo el curso):
- Sofía descubrió un video que pone en duda la historia de la Iglesia.
- Mateo tiene ganas de faltar al Seminario porque se quedó dormido.
- Valentina siente que su fe es "heredada" y no propia.
- Luca murmuró con sus amigos sobre un líder de la Iglesia.
- Camila siente presión de sus amigas para hacer algo que sabe que no está bien.
- Agustina duda si vale la pena seguir yendo a la Iglesia después de mudarse a otra ciudad.
- Tomás se avergüenza de invitar a un amigo a una actividad de la Iglesia.
- Martina compara su vida con lo que ve en redes sociales y se siente insuficiente.
- Franco no sabe cómo responder cuando un familiar critica a la Iglesia.
- Lucía siente que ora "por rutina" y ya no le sale del corazón.
- Benjamín tiene que elegir entre un compromiso del equipo deportivo y una actividad de la Iglesia.
- Nicolás se enoja fácil con un hermano menor y no sabe cómo aplicar lo que aprendió.
- Ana se siente juzgada por otros jóvenes de la Iglesia por no encajar en el grupo.
- Joaquín está considerando una decisión académica importante y no sabe si orar por eso "vale la pena".

Si estás generando varias lecciones en una misma sesión, llevá la cuenta mental de qué nombres ya
usaste — con 5-9 lecciones ya alcanza para nombrar a los cuatro o cinco de siempre, así que a partir
de la segunda o tercera lección de la tanda elegí activamente uno que todavía no hayas usado.

#### Pregunta de Síntesis (7): conecta o contrasta
Estructura recomendada: `"Tanto [elemento A] como [elemento B] de la lección enseñan algo similar. ¿Cuál es el principio común que los une?"`

O: `"¿En qué se diferencia la respuesta de [personaje A] de la de [personaje B] ante la misma situación, y qué nos enseña esa diferencia?"`

---

### Anti-patrones a evitar

| Anti-patrón | Por qué es malo | Corrección |
|-------------|-----------------|------------|
| La respuesta correcta es la más larga de las cuatro | El alumno aprende a elegir por extensión, no por comprensión: se acierta midiendo con la vista. **Es el defecto más extendido del proyecto** — medido el 4-sep-2026, afecta a **2948 de 3569 preguntas (83 %)**, contra el 25 % que daría el azar, y llega al 94 % en `religion-301` | Contá, al cerrar cada lección, en cuántas de las 7 la correcta es la más larga. **Si son más de 2, emparejá**: acortá la correcta quitando el matiz explicativo, o alargá los distractores agregándoles una condición plausible |
| Todos los distractores empiezan con "Solo..." o "No..." | Los negativos absolutos se detectan como falsos fácilmente | Variá la forma gramatical |
| La pregunta incluye la respuesta en el enunciado | No mide nada | Eliminá la pista |
| Distractores imposibles para alguien con fe básica | No discriminan entre quienes estudiaron y quienes no | Usá distractores plausibles |
| Preguntas consecutivas sobre el mismo subtema | Crea redundancia | Cubría distintos aspectos de la lección |
| **Pregunta de experiencia personal con una opción marcada como "correcta"** ("¿Alguna vez sentiste que Dios te respondió?", "¿Qué hábito vas a empezar esta semana?") | Es la más grave de la tabla: una vivencia del alumno no tiene respuesta correcta, así que el quiz termina **calificando su vida espiritual** en vez de medir comprensión. Además duplica el `cuestionario`, que es el lugar donde esas preguntas sí corresponden | Convertila en un escenario de aplicación protagonizado por un tercero ("Martina oró para saber si… ¿cómo se interpreta mejor esa experiencia según D. y C. 8:2–3?"). La vivencia propia va al `cuestionario`; `questions` mide comprensión |
| **Pregunta que nombra a un líder que no aparece en la `enseñanza` de esa lección** | El alumno no tiene de dónde sacar la respuesta y, si esa cita fue eliminada por una auditoría, el quiz sigue difundiendo la atribución inválida | Anclá el enunciado al autor y al texto que la lección sí tiene. Ver también la regla de "Citas de líderes (enseñanza)" sobre revisar `cuestionario` y `questions` cada vez que se cambia una cita |

**Regla de frontera entre `cuestionario` y `questions`:** son dos géneros distintos y no deben
compartir preguntas. El `cuestionario` es reflexivo y personal, sin respuesta correcta; `questions`
es opción múltiple y siempre tiene una respuesta verificable en el material de la lección. Si una
pregunta funciona igual de bien en los dos lugares, está mal escrita para uno de ellos. Antes de
cerrar una lección, compará las dos listas: ninguna pregunta del quiz debería ser reconocible como
una del cuestionario con opciones agregadas encima.

---

### Checklist antes de entregar el set de preguntas

Antes de generar el output final, verificá mentalmente:

- [ ] ¿Hay exactamente 7 preguntas?
- [ ] ¿Están los 4 niveles representados (2 recuerdo, 2 comprensión, 2 aplicación, 1 síntesis)?
- [ ] ¿Cada pregunta tiene exactamente 4 opciones?
- [ ] ¿La correctAnswer varía entre 0, 1, 2 y 3 a lo largo del set (no siempre el mismo índice)?
- [ ] ¿Ningún distractor es absurdo o de fácil eliminación, ni usa la fórmula genérica "no tiene ninguna relación"?
- [ ] ¿Las preguntas 5–6 usan un nombre y escenario adolescente concreto, distinto de los que ya usaste en otras lecciones de esta misma tanda?
- [ ] ¿La pregunta 7 conecta dos ideas o contrasta dos perspectivas de la lección?
- [ ] ¿Las opciones tienen extensión similar dentro de cada pregunta?
- [ ] **¿En cuántas de las 7 la opción correcta es la más larga de las cuatro?** Contalas de verdad, no lo estimes. Más de 2 es sesgo: el alumno acierta midiendo con la vista. Es el defecto más extendido del proyecto (83 % de las 3569 preguntas al 4-sep-2026) y **la lección generada el día que se midió salió con 6 de 7**, así que asumí que te va a pasar a vos también. Se corrige acortando la correcta —el matiz explicativo casi siempre sobra— o dándole a un distractor una condición plausible que lo alargue.
- [ ] ¿La pregunta de síntesis (7) y las de aplicación (5–6) usan solo información que está escrita en las secciones de esta lección, no un dato del capítulo que el `title` menciona pero el `contexto` nunca desarrolla?
- [ ] Si el escenario usa un nombre propio, ¿los adjetivos y pronombres que lo acompañan concuerdan en género con ese nombre? (revisá esto en especial si reciclaste o reasignaste un nombre)
- [ ] ¿Cada pregunta tiene una respuesta verificable en el material de la lección, en vez de pedirle al alumno que reporte su propia experiencia o su propósito para la semana? (esas van al `cuestionario`)
- [ ] ¿Ninguna pregunta u opción nombra a un líder que no aparece en la sección `enseñanza` de esta lección?
- [ ] ¿La opción marcada en `correctAnswer` es efectivamente la correcta? (releé el índice contra la lista; un índice mal puesto convierte un distractor en la respuesta oficial)
- [ ] **¿Repartiste las posiciones de la respuesta correcta entre 0, 1, 2 y 3?** No alcanza con "que varíe": al redactar, la correcta sale casi siempre primera o segunda y los distractores se agregan después, así que el sesgo aparece sin que se note. Es invisible dentro de una lección y letal en el curso: medido el 1-sep-2026, **11 de los 12 cursos del proyecto eran adivinables**, y en `antiguo-testamento-2` responder siempre la segunda opción acertaba el 96 %. Contá las posiciones de tu tanda antes de cerrarla, o corregilo después con `npx tsx scripts/audit-distribucion-respuestas.ts <categoria> --write`, que rota el array de `options` sin tocar el texto.

---

### Ejemplo completo: Lección sobre el maná (Éxodo 16)

```typescript
export const leccion47Questions: Question[] = [
  // RECUERDO 1
  {
    id: 1,
    question: "¿Cuántos días a la semana caía el maná en el desierto según las instrucciones del Señor?",
    options: [
      "Todos los días de la semana, incluyendo el sábado.",
      "Solo tres días a la semana para que Israel aprendiera a administrar.",
      "Seis días a la semana; el séptimo no aparecía.",
      "Solo cuando Israel obedecía todos los mandamientos correctamente.",
    ],
    correctAnswer: 2,
  },
  // RECUERDO 2
  {
    id: 2,
    question: "¿Qué ocurría con el maná que se guardaba de más, contrariando las instrucciones del Señor?",
    options: [
      "Se volvía amargo pero seguía siendo comestible.",
      "Se pudrió y se llenó de gusanos.",
      "Desaparecía misteriosamente sin dejar rastro.",
      "Se convertía en piedra y no podía consumirse.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 3
  {
    id: 3,
    question: "El maná debía recogerse cada mañana y no podía guardarse. ¿Qué principio espiritual enseñaba esta regla específica?",
    options: [
      "Que Dios quería que Israel tuviera menos trabajo y más descanso cada día.",
      "Que la fe y la espiritualidad requieren renovación diaria; no pueden acumularse del pasado.",
      "Que la cantidad de comida disponible era escasa y había que administrarla con cuidado.",
      "Que el Señor quería probar si Israel podía despertarse temprano con constancia.",
    ],
    correctAnswer: 1,
  },
  // COMPRENSIÓN 4
  {
    id: 4,
    question: "Cuando Jesús dijo 'Yo soy el pan de vida' (Juan 6:35), ¿a qué relación con el maná del desierto apuntaba?",
    options: [
      "Que Él podía multiplicar físicamente el alimento como ocurrió en el desierto.",
      "Que el pan de la Santa Cena es exactamente igual al maná que cayó en el desierto.",
      "Que así como el maná sostenía el cuerpo por un día, Él sostiene el alma para la vida eterna.",
      "Que Él vendría del cielo de la misma manera física en que descendía el maná cada mañana.",
    ],
    correctAnswer: 2,
  },
  // APLICACIÓN 5
  {
    id: 5,
    question: "Tomás lleva tres semanas sin estudiar las Escrituras ni orar porque 'estuvo bien espiritualmente' en el campamento de la Iglesia el mes pasado. Según el principio del maná, ¿qué le dirías?",
    options: [
      "Que las experiencias espirituales intensas duran lo suficiente como para no necesitar renovación pronto.",
      "Que la espiritualidad no puede almacenarse; cada día necesita su propio 'maná' de conexión con el Señor.",
      "Que lo más importante es la calidad de las experiencias espirituales, no la frecuencia.",
      "Que está bien descansar de los hábitos espirituales después de un evento significativo.",
    ],
    correctAnswer: 1,
  },
  // APLICACIÓN 6
  {
    id: 6,
    question: "Camila dice que no ora ni estudia porque 'no siente nada especial cuando lo hace'. Según la lección del maná y la enseñanza del élder Bednar, ¿cuál es la respuesta más fiel al principio doctrinal?",
    options: [
      "Que debería esperar hasta tener más fe antes de retomar los hábitos espirituales.",
      "Que la renovación espiritual diaria es una necesidad, independientemente de cuánto se 'sienta' en cada ocasión.",
      "Que las oraciones y el estudio solo valen si producen una emoción fuerte e inmediata.",
      "Que el Señor entiende que no todos tienen el mismo tipo de espiritualidad y no hay problema.",
    ],
    correctAnswer: 1,
  },
  // SÍNTESIS 7
  {
    id: 7,
    question: "Tanto el mandamiento del sábado (Éxodo 20) como la regla del maná (Éxodo 16) enseñan algo similar sobre la relación entre el tiempo y la fe. ¿Cuál es el principio común que los une?",
    options: [
      "Que Dios quiere controlar cómo usamos nuestro tiempo para demostrar Su autoridad.",
      "Que el Señor diseña ritmos regulares de dependencia y renovación espiritual para Sus hijos.",
      "Que los mandamientos sobre el tiempo son los más importantes de los Diez Mandamientos.",
      "Que la obediencia al horario de Dios garantiza bendiciones materiales inmediatas.",
    ],
    correctAnswer: 1,
  },
]
```

---

## Ver también

- `references/output-format.md` — Ejemplos completos de secciones bien formadas para cada tipo de lección
- `references/scripture-links.md` — Guía rápida para construir links a versículos por libro canónico
- `docs/auditorias/CICLO-GENERACION-AUDITORIA.md` (en el repo del proyecto) — catálogo de defectos
  que las auditorías fueron encontrando en contenido generado con esta skill, mapeados a la regla
  de esta misma skill que ahora los previene. Todas las reglas nuevas de este archivo que mencionan
  "auditoría de Nivel 2" o "CICLO-GENERACION-AUDITORIA" salieron de ahí — léelo antes de una tanda
  grande de generación para no repetir un defecto ya catalogado, y agregale una fila si encontrás
  (generando o auditando) un defecto sistemático nuevo que valga la pena prevenir en la skill.
````
