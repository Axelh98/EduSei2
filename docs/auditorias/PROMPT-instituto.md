# Prompt — cierre de los cuatro cursos de Instituto

Para pegar tal cual al abrir la próxima sesión. **Todo lo medido acá es del 8-sep-2026, después
de cerrar los seis cursos grandes de Seminario.**

---

Sesión — Instituto (`religion-200`, `religion-225`, `religion-250`, `religion-301`)

Los seis cursos grandes de Seminario están cerrados y commiteados (`ab13af5`). Los cuatro de
Instituto son lo único que queda con material, y **ninguno está cerrado**. Vamos a trabajar
**en bloques**; al final de cada bloque dame una tabla con las tareas pendientes y el % corregido.

## Tocá solo `lib/content/religion-*`

No edites `PLAN-DE-AUDITORIA.md`, `README.md`, `ESTADO.md` ni `CICLO-GENERACION-AUDITORIA.md`:
proponémelos en la respuesta y los aplico yo. Tu bitácora es
`docs/auditorias/BITACORA-instituto.md` (creala con el formato de
`BITACORA-antiguo-testamento-1.md`). No corras `build-search-index.ts`, `regen-content-map.ts`
ni `audit-export.ts`.

## Estado medido — para contrastar, no para creer

| Frente | R-200 (28) | R-225 (28) | R-250 (28) | R-301 (25) |
|---|---|---|---|---|
| Lecciones con material | 28 | **5** (23 vacías) | 28 | 25 |
| Convención | clásica | resumen | clásica | 20 resumen + 5 clásica |
| `contexto` / `conclusion` | 28 / 28 | 0 / 0 | 28 / 28 | 5 / 5 |
| `cuestionario` con 6 | 28 | 0 | 28 | **0** |
| Quiz con 7 preguntas | 28/28 | **0/5** | **21/28** | **0/25** (todas con 5) |
| `options.length != 4` | 0 | **6** | **8** | 0 |
| Escrituras (con link) | 84 (84) | 10 (**0**) | 84 (84) | 87 (**17**) |
| Citas de líder (con ancla `#`) | 56 (**0**) | 5 (**0**) | 38 (36) | 50 (**0**) |
| Atribuciones sin respaldo | **38** | 2 | 6 | 0 |
| Sesgo de POSICIÓN | `25/25/25/25` ✓ | `13/52/30/4` | `5/60/31/5` | `3/65/32/0` |
| Sesgo de LONGITUD (más larga) | **93 %** | 57 % | 83 % | **94 %** |
| Quiz ≤2 con margen visible | **0/28** | 2/5 | 5/28 | **0/25** |
| Cristo (ctx o concl) | 17/28 (61 %) | — | 26/28 (93 %) | — |
| Pregunta que invita a orar | 7/28 (25 %) | — | 6/28 (21 %) | — |
| Pregunta que devuelve al pasaje | **0/28 (0 %)** | — | **1/28 (4 %)** | — |
| Fidelidad de Escrituras | 53 OK · **31 `REVISAR_MANUAL`** | sin auditar | **sin auditar** | **sin auditar** |
| Espacio antes de puntuación | **16** | 0 | 1 | 0 |

**Barrido estructural limpio en los cuatro**: 0 `correctAnswer` fuera de rango, 0 opciones
duplicadas, 0 huérfanos, 0 entradas del manifiesto sin archivo.

## Por dónde empezar, y por qué

1. **El sesgo de longitud de R-301 (94 %) y R-200 (93 %)** es lo más grave: un alumno acierta
   **9 de cada 10 preguntas midiendo con la vista, sin leer**. Son 53 lecciones y 321 preguntas.
2. **El sesgo de posición de R-301 (65 %), R-250 (60 %) y R-225 (52 %)** se arregla solo:
   `npx tsx scripts/audit-distribucion-respuestas.ts <curso> --write` rota el array sin tocar el
   texto. **Corrélo DESPUÉS del rebalanceo de longitud** (rotar no altera el ranking de longitud,
   pero rebalancear sí puede mover posiciones). R-200 ya está en `25/25/25/25`: no lo toques.
3. **Las 38 atribuciones sin respaldo de R-200** (fila 12 del catálogo): preguntas que nombran a
   un líder ausente de la lección. Es el recuento más alto del proyecto.
4. **Las 70 escrituras sin link de R-301 y las 10 de R-225**: sin `link` no hay forma de
   auditarlas, así que ese frente está bloqueado hasta resolverlo.
5. **R-225 no es un curso auditable todavía**: 23 de 28 lecciones tienen `secciones: []`. Antes
   de auditarlo hay que **generarlo** con `seminary-enrichment`. Decidí con Axel si entra en esta
   sesión o queda aparte.

## Método por lote (5–6 lecciones)

1. Manipulá el JSON con un **motor de parcheo** (`patch.js`, JSON.parse/stringify), identificando
   las opciones **por substring de contenido, no por índice**. Falla **en bloque** y reintenta la
   escritura (OneDrive tira errno -4094).
2. **Corré cada lote en seco (`--check`) antes de aplicar**, con un chequeo de salida que mida
   **todos** los frentes sobre el resultado, no solo el que venís a arreglar.
3. Cuando escribas escrituras, conclusiones o citas nuevas, **buscá la fuente antes de
   inventarla**: el manual oficial se lee con la API v3, no con `web_fetch` —
   `https://www.churchofjesuschrist.org/study/api/v3/language-pages/type/content?lang=spa&uri=<pathname sin /study>`.
   **Nunca restituyas texto de Escritura de memoria**: sale de `scripts/ver-versiculo.ts`, limpiado
   con `.replace(/\s+([,;:.])/g,'$1')`.
4. Al cerrar el lote, corré `npx tsx scripts/validate-content.ts`.

## Los errores que ya se cometieron. No los repitas

1. **Medí el MARGEN, no la posición.** Una pregunta cuya correcta mide 57 y sus distractores
   56, 57 y 60 **no es explotable a ojo**. La fila 27 lo dice: se dejan hasta 2 por lección con
   margen de 1–2 caracteres. En AT-1, contar por posición inflaba el frente un 47 % (47 lecciones
   «pendientes» eran 32 reales). **Criterio: sesgada solo si el margen es ≥ 3 caracteres.**
2. **No sobrecorrijas (fila 30).** Llevar el sesgo a 0 % en las dos direcciones crea una heurística
   nueva: descartar los dos extremos y elegir entre los del medio acierta el 50 %. **Medí el
   ranking de las cuatro posiciones** y apuntá a ~25/25/25/25.
3. **El defecto espejo (fila 27).** Al acortar la correcta queda como la más corta. Escribí
   **varios candidatos por pregunta** y que un script elija el que cae dentro de la ventana de los
   tres distractores, **midiendo**. En AT-1 se rechazaron 10 candidatos por quedar cortos: sin ese
   paso habrían entrado todos mal.
4. **`correctAnswer` mal NO se correlaciona con el sesgo de longitud.** En AT-1 aparecieron **85
   respuestas oficiales falsas en 623 preguntas (13,6 %)**, y varias estaban en posición
   intermedia — el barrido de longitud no las encuentra. **Hay que leer la opción marcada de
   TODAS las preguntas.** Método barato: volcar enunciado + solo la opción correcta; abrir las 4
   solo en las sospechosas.
5. **Tiene firma de lote, no de curso.** En AT-1 se concentraban en ~24 lecciones (una con 5 de 7
   mal) mientras bloques enteros estaban limpios. Si encontrás una lección con varias, revisá sus
   vecinas del mismo rango.
6. **Toda edición masiva de texto necesita su propio barrido de salida (fila 31).** El rebalanceo
   por sinónimos de DyC-2 metió 12 artefactos invisibles al chequeo de longitudes
   («para el» → «a fin de **el**», «dar gracias» → «**proporcionar** gracias»).
7. **`\b` en JS no se lleva bien con los acentos.** `/\ba el\b/` matchea «mir**a el**»,
   «par**a el**», «habl**a el**». Usá lookarounds sobre una clase explícita de letras españolas,
   como `audit-doctrinal.ts` y `artefactos.js`.
8. **Verificar un caso que reporta un detector no alcanza si mirás solo la mitad que el detector
   mira (fila 12).** En AT-1, `leccion-178` citaba al «obispo Waddell» sin `enseñanza` de él: no
   era huérfano, el respaldo estaba en el `contexto`.
9. **No apliques `rescan-ventana-ancha.ts --write` a ciegas.** En LdM-2, 4 de 7 propuestas
   reintroducían citas superpuestas. Y `fix-escrituras.ts --write` reintroduce el espacio antes de
   la puntuación de la fila 22.

Y tres defectos que **ningún script detecta** y se encuentran leyendo, aprovechando que igual hay
que abrir los quizzes:

- **Enunciados que atribuyen a un versículo texto que es de otro.** Se confirma con `ver-versiculo.ts`.
- **Preguntas que atribuyen a un líder la cita de otro** (fila 33): el apellido coincide con el de
  la `enseñanza`, así que `audit-autores-quiz.ts` no levanta bandera.
- **Citas de líder ajenas al tema de la lección** (fila 32): genuinas y bien atribuidas, pero de
  otra lección.

## Herramientas ya escritas

Scratchpad de la sesión que cerró Antiguo Testamento:
`C:\Users\axelh\AppData\Local\Temp\claude\C--Users-axelh-OneDrive---Church-of-Jesus-Christ-Aulasei\bf2436bb-b5c6-4098-9688-cac20f8808c9\scratchpad`

Copialas a tu scratchpad y **verificá que funcionan sobre Instituto antes de confiar en su
salida**: los cursos de convención `resumen` (R-301, R-225) tienen otra estructura y varias
herramientas asumen la clásica. Si no existen, reconstruilas.

| Archivo | Qué hace |
|---|---|
| `inv.js <curso> [inv\|estructura\|todo] [--solo-manifiesto]` | inventario por lección de los 8 frentes + barrido estructural |
| `test-inv.js <raíz>` | 11 casos de prueba del barrido; corrélos antes de confiar en `inv.js` |
| `evaluar.js` · `patch.js <curso> <ops.json> [--check\|--write]` | evaluador compartido · motor de parcheo con chequeo de salida |
| `medir.js <curso> <cand.json>` | **imprime el objetivo (punto medio de la ventana) junto al largo de cada candidato** — sin esto la calibración a ojo falla siempre hacia lo corto |
| `elegir.js <curso> <cand.json> <ops.json>` | elige el texto que cae dentro de la ventana de los distractores |
| `quiz.js <curso> <id...> [--full]` | volcado barato: enunciado + solo la opción marcada + ventana y objetivo |
| `artefactos.js <curso> [id...]` | barrido de salida de la fila 31, con lookarounds correctos para el español |
| `panorama.js` | estado de todos los cursos sobre el manifiesto, en una tabla |
| `ancla.js <curso> <id> "<frase>"` | busca el ancla `#pN` de una cita en el HTML del manual (API v3) |
| `rebalance.js` + `rebal-tope.js` + `pares.js` | rebalanceo por sinónimos. **Su diccionario ya tiene quitados los ~12 pares que rompían el español; no los reintroduzcas** |
| `chk-md.js <archivo.md>` | verifica que las tablas markdown tengan columnas consistentes |
| `muletilla.js` · `cruce.js` · `verif-anclas.js` · `manual.js` · `ver.js` | molde entre lotes · capítulo ajeno · anclas por n-grama · manual por API v3 · volcado compacto |

## Al cerrar

Corré y reportá: `validate-content.ts`, `audit-doctrinal.ts --detalle`, `audit-completitud.ts`,
`audit-escrituras.ts`, `audit-autores-quiz.ts`, `audit-distribucion-respuestas.ts`,
`audit-chapterurls.ts`, `audit-links-citas.ts`, el inventario propio, el barrido estructural, el
barrido de artefactos y la verificación propia de anclas.

**Tres falsos positivos conocidos, no los persigas:** `audit-chapterurls.ts` reporta
«desalineadas» cuando el `id` no tiene forma `leccion-N` (la columna que vale es «rotas»);
`audit-links-citas.ts` reporta «sin ancla» para anclas de recuadro (`#aside1_p3`, `#figure6_p29`)
y «no resuelve a un discurso» para links a páginas de manual, que no traen `canonical`.

## Dos cosas sueltas del repo

- **`lib/content/_test/`** tiene su propio `_manifest.json` dentro de `lib/content/`: cualquier
  script que recorra `lib/content/*/_manifest.json` lo levanta como si fuera un curso. Hoy no
  llega al sitio (no está en `registry.ts`), pero conviene sacarlo.
- **`libro-de-mormon-1/_auditoria-snapshot-original.json`** hace fallar `validate-content.ts`
  desde el 28-ago: es un array donde el validador espera un objeto. Es el único fallo del
  proyecto.
