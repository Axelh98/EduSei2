# Plan de auditoría — punto de entrada

Este documento es el **punto de partida de cualquier sesión** que continúe auditando el
contenido de AulaSei — de cualquiera de los tres tipos. Antes de auditar un curso, mirá acá
primero: qué está hecho, qué falta, y en qué orden conviene seguir. Después andá al doc de método
que corresponda para el cómo.

**Cómo se usa esto junto con el resto:**

| Documento | Para qué sirve |
|---|---|
| **Este archivo** | Panorama de los 12 cursos × 3 tipos de auditoría, en una sola tabla. Empezar acá. |
| ~~Skill `seminary-audit`~~ | ⚠️ **No existe** (verificado 2-sep-2026). El procedimiento vive en los `COMO-AUDITAR-*.md` de abajo y en `docs/ESTADO.md` §2. |
| Skill `seminary-enrichment` | Para *escribir* contenido que una auditoría marcó como faltante — no lo hace esta skill. |
| [`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md) | El puente entre las dos skills: catálogo de defectos que una auditoría encontró → la regla de `seminary-enrichment` que ahora los previene. Actualizalo cuando un hallazgo sistemático te haga tocar `SKILL.md`. |
| `docs/auditorias/COMO-AUDITAR-ESCRITURAS.md` | Método completo de la auditoría de citas de Escritura. |
| `docs/auditorias/COMO-AUDITAR-CONTENIDO.md` | Método completo de la auditoría de completitud (contexto/cuestionario/conclusión/quiz). |
| `docs/ESTADO.md` §2 | Método completo de la auditoría de citas de líder, y su tabla de estado detallada. |
| `docs/auditorias/README.md` | Índice de los documentos `AUDITORIA-*.md` (uno por curso, con el detalle cita por cita) y de la herramienta de volcado a Excel. |

Actualizá la tabla de abajo cada vez que cierres o avances una auditoría de cualquier tipo — es
lo único que le permite a la próxima sesión no tener que re-correr los tres scripts sobre los 12
cursos solo para saber por dónde seguir.

---

## 1. Estado por curso — las tres auditorías a la vez

`✅` cerrado · `🟡` en curso, con número · `🔴` no empezado · `—` no aplica (el curso no tiene
material de repaso todavía, ver §2)

| Curso | Citas de Escritura | Citas de líder | Completitud de contenido | Doctrinal (Cristo · orar · escudriñar) |
|---|---|---|---|---|
| `antiguo-testamento-1` | 🟡 **249 OK · 34 `REVISAR_MANUAL` (medido 8-sep-2026)** — ver §0 | ✅ cerrado (110/110) ¹ | 🟡 casi sano — ver §1.1. **Atribuciones de quiz: ✅ 0 sin respaldo (8-sep).** ⚠️ **29 respuestas de quiz corregidas** — ver §1.3 | 🟡 **4 frentes abiertos (8-sep)**: escrituras 81/89 · conclusión 69/89 · huérfanos 86/89 · **quiz 29/89** — ver §0 |
| `libro-de-mormon-1` | ✅ cerrado (**308 OK, 1 AUTO_CORREGIBLE**, revalidado 8-sep-2026) | ✅ cerrado (92/92) | ✅ sano (ampliado 30-ago-2026) — ver §1.1 | 🟡 **siete frentes en 91/91, pero el quiz quedó abierto: 22/91 (8-sep)** — ver §0 |
| `libro-de-mormon-2` | ✅ **cerrado (246 OK de 250, 8-sep-2026)** — los 4 restantes son resúmenes de pasaje largo que el comparador por recall no puede validar (§4.1), no un pendiente | ✅ **cerrado (73/73, 8-sep-2026)**: 72 con ancla verificada por n-grama literal; la 73ª es un devocional de BYU sin párrafos numerados | ✅ Nivel 1 cerrado (31-ago) · ✅ Nivel 2 cerrado (31-ago, 546 preguntas leídas) — `CALIDAD-libro-de-mormon-2.md` · ✅ **Nivel 3 (registro) cerrado 4-sep: 47 `contexto` reescritos, mediana 82 → 187** — `CALIDAD-contexto-libro-de-mormon-2.md` · ✅ **quiz: las 560 preguntas leídas una por una, 0 `correctAnswer` apuntando a un distractor (8-sep)** | ✅ **cerrado 80/80 en los ocho frentes (8-sep-2026)** |
| `doctrina-y-convenios-1` | ✅ cerrado (196/196, revalidado 1-sep-2026) | ✅ **cerrado (80/80, 1-sep-2026)** | ✅ **cerrado (91/91 en las cinco secciones, 1-sep-2026)** — ver `CALIDAD-doctrina-y-convenios-1.md` | — |
| `religion-200` | 🟡 **53/84 (2-sep-2026)**; 25 son citas-resumen y **6 son pendientes reales** | 🟡 **17/56**: pasada estructural completa, **5 fabricadas/rotas confirmadas**, 39 sin comparar texto — ver `AUDITORIA-citas-R200.md` | ✅ sano (28/28 en todo) · ✅ quiz sin sesgo (2-sep) · ✅ **196/196 respuestas verificadas** | — |
| `religion-225` | 🔴 no empezada (10 citas, **0 con link** — ver §1.2) | ✅ cerrado (5/5) | — (usa convención `resumen`, sin spec propia todavía) | — |
| `religion-250` | 🔴 no empezada (84 citas, todas con link) | ✅ cerrado (38/38) | 🟡 quiz: 21/28 con 7 preguntas exactas | — |
| `religion-301` | 🔴 no empezada (87 citas, solo 17 con link — ver §1.2) | 🟡 20/50 (40 %) | 🟡 casi todo `resumen` (20/25); las 5 clásicas tienen cuestionario en 5, no 6 | — |
| `antiguo-testamento-2` | 🟡 **199 OK · 1 `REVISAR_MANUAL` (medido 8-sep-2026)** | ✅ cerrado (61/61) | ✅ contenido generado (31-ago-2026, con `seminary-enrichment`, 67/67) — ver §2 y `COMPLETITUD-antiguo-testamento-2.md` | 🟡 **casi cerrado (8-sep)**: escrituras 65/67 · conclusión 65/67 · los otros seis frentes en 67/67 |
| `nuevo-testamento` | — | — | — (secciones `[]` en las 78 lecciones) | — |
| `doctrina-y-convenios-2` | ✅ **cerrado (208/208, 8-sep-2026)** — subió de 162 con las 46 citas nuevas del cierre doctrinal | ✅ **cerrado (50/50, todas con ancla verificada por n-grama, 8-sep-2026)** | ✅ **cerrado (48/48, 1-sep-2026)** — ver `COMPLETITUD-doctrina-y-convenios-2.md` | ✅ **cerrado 48/48 en los ocho frentes (8-sep-2026)** — ver `BITACORA-doctrina-y-convenios-2.md` |
| `Bloques` | — | — | — (secciones `[]` en las 24 lecciones) | — |

**La columna doctrinal se agregó el 7-sep-2026**, al cerrar el primer curso en las tres medidas
que mide `audit-doctrinal.ts` (nombra a Cristo · invita a orar/meditar/anotar · devuelve al pasaje).
`antiguo-testamento-2` se cerró el 6-sep y `libro-de-mormon-1` el 7-sep; los otros diez cursos
siguen sin trabajar en este frente. La línea de base de todos está en
[`BITACORA-generacion-doctrinal.md`](BITACORA-generacion-doctrinal.md).

¹ Revisado a mano por Axel, sin registro cita por cita — ver nota en `docs/auditorias/README.md`.

---

## §0. Qué falta para cerrar Antiguo Testamento y Libro de Mormón (medido el 8-sep-2026)

Los seis cursos «grandes» se midieron de cero al cerrar `doctrina-y-convenios-2`. **Los dos de
Doctrina y Convenios están completos en todo lo que hay forma de medir; los otros cuatro no.**

| Curso | Los 8 frentes por lección | Fidelidad de Escrituras | Quiz: la correcta es la más larga |
|---|---|---|---|
| `antiguo-testamento-1` (89) | ❌ escrituras 81/89 · conclusión 69/89 · huérfanos 86/89 · **quiz 29/89** | ❌ **34 `REVISAR_MANUAL`** (249 OK) | ❌ **335/623 (54 %)** |
| `antiguo-testamento-2` (67) | 🟡 escrituras 65/67 · conclusión 65/67 · resto 67/67 | 🟡 1 `REVISAR_MANUAL` (199 OK) | ✅ 117/469 (25 %) |
| `libro-de-mormon-1` (91) | 🟡 siete frentes en 91/91 · **quiz 22/91** | ✅ 308 OK, 1 `AUTO_CORREGIBLE` | ❌ **400/637 (63 %)** |
| `libro-de-mormon-2` (80) | ✅ los ocho en 80/80 | ✅ **246 OK de 250** | ✅ **`28/25/23/24`, mejor heurística 28 %** |
| `doctrina-y-convenios-1` (91) | ✅ 91/91 | ✅ 280/280 | ✅ 49/637 (8 %) |
| `doctrina-y-convenios-2` (48) | ✅ 48/48 | ✅ 208/208 | ✅ 53/336 (16 %) |

Cristo, sustancia, orar y escudriñar están en **100 % en los seis**. Lo que falta es otra cosa.

**Los frentes abiertos, en orden de tamaño.** Eran tres; `libro-de-mormon-2` se cerró el
8-sep-2026 y sacó sus 30 citas del frente C.

| # | Frente | Alcance | Por qué importa |
|---|---|---|---|
| A | **Quiz de `libro-de-mormon-1`** | 69 lecciones, 637 preguntas | Un alumno acierta el **63 %** midiendo con la vista, sin leer |
| B | **Quiz de `antiguo-testamento-1`** + sus otros 3 frentes | 60 lecciones (quiz), 8 sin 3 escrituras, 20 con conclusión corta, 3 con líderes huérfanos | Acierto por longitud del **54 %** |
| C | **Las 35 citas `REVISAR_MANUAL`** | 34 en AT-1, 1 en AT-2 | `REVISAR_MANUAL` **no significa que estén mal**: significa que el comparador por recall no pudo confirmarlas. Método en §4.1 y §4.2 de `COMO-AUDITAR-ESCRITURAS.md`: correr `rescan-ventana-ancha.ts` primero, **pero no aplicarlo a ciegas** — ver la advertencia 4 de abajo |

**El método está escrito y probado**: `BITACORA-doctrina-y-convenios-2.md` (8 lotes, 48 lecciones)
y `BITACORA-doctrina-y-convenios-1.md` (17 lotes, 91 lecciones). Las herramientas —inventario de
los 8 frentes con casos de prueba, motor de parcheo con chequeo de salida, selector de candidatos
por ventana de longitud, rebalanceador del ranking, cruce de molde, verificador de anclas— se
describen al final de la bitácora de DyC-2.

> ⚠️ **Cuatro advertencias que salieron caras en cierres anteriores y que aplican a los frentes A, B y C:**
>
> 1. **No sobrecorrijas el sesgo de longitud.** Llevarlo a 0 % en las dos direcciones crea una
>    heurística nueva: descartar los dos extremos y elegir entre los dos del medio acierta el
>    **50 %**. Medí el ranking de las **cuatro** posiciones, no solo los extremos, y apuntá a
>    ~25/25/25/25 con el tope de la fila 27 (máximo 2 por lección y por dirección).
> 2. **Un script que edita texto a escala necesita su propio barrido de salida.** El rebalanceo
>    automático introdujo 12 artefactos que el chequeo de longitudes no podía ver («para el» →
>    «a fin de **el**», «dar gracias» → «**proporcionar** gracias»), dos de ellos en opciones
>    correctas.
> 3. **Verificar un caso que reporta un detector no alcanza si verificás solo la mitad que el
>    detector mira.** El de líderes huérfanos marcó un caso falso durante tres bloques porque
>    cruzaba los apellidos del quiz solo contra `enseñanza`, y el respaldo estaba en el `contexto`.
> 4. **No apliques `rescan-ventana-ancha.ts --write` a ciegas.** En el cierre de
>    `libro-de-mormon-2` (8-sep-2026), 4 de sus 7 propuestas de ampliación **reintroducían citas
>    superpuestas** —tres anidadas dentro de la misma en `leccion-28-5`— porque el script amplía el
>    rango sin mirar las otras citas del bloque. Y casi ninguna de las 30 `REVISAR_MANUAL` era el
>    «resumen de pasaje largo» que el script suponía: eran **paráfrasis de un versículo puntual**,
>    y 6 tenían el texto en **otro versículo** (§4.2). Tampoco corras `fix-escrituras.ts --write`
>    sin limpiar: sus propuestas reintroducen el espacio antes de la puntuación de la fila 22.

**Totales (4-sep-2026, recontados sobre el MANIFIESTO):** **1503 referencias de Escritura**, de las
cuales **1291 auditadas (86 %)**: 196 (DyC-1) + 162 (DyC-2) + 230 (LdM-1) + 219 (LdM-2) + 200 (AT-2)
+ 231 (AT-1) + 53 (R200). · **619 citas de líder**, **516 verificadas (83 %)**, incluyendo AT-1
revisado a mano (ver ¹), AT-2 cerrado (61/61), los dos cursos de Doctrina y Convenios y las 17 de
R200. · Completitud de contenido corrida sobre los 10 cursos con material — ver §1.1 para el
detalle.

| | conteo por archivos | conteo por manifiesto (real) | diferencia |
|---|---:|---:|---:|
| Referencias de Escritura | 1619 | **1503** | 116 en huérfanos |
| Citas de líder | 650 | **619** | 31 en huérfanos |

> ⚠️ **El recuento del 2-sep movió los denominadores** (antes decía «1369 escrituras / 585 citas»).
> Dos causas, las dos verificadas contando las secciones `escrituras.citas[]`, `enseñanza` y los
> bloques de `resumen` archivo por archivo:
>
> 1. **Error de suma** en el total viejo de escrituras: sumar las filas por curso nunca dio 1369.
> 2. ~~**El corpus creció después de auditarlo.**~~ ⚠️ **Esto era falso, corregido el 4-sep-2026.**
>    El recuento del 2-sep recorrió los **archivos del directorio** en vez de las lecciones del
>    **manifiesto**, y sumó contenido huérfano que la app no muestra. La reconstrucción de
>    `libro-de-mormon-2` (commits `182ab88` y `7314c0f`) **no amplió el curso: lo reemplazó**, y
>    dejó atrás 45 archivos con un mapeo de semanas distinto. El curso tiene **189 escrituras y 69
>    citas**, no 287 y 94. `doctrina-y-convenios-2` tiene el mismo problema con 8 huérfanos (144
>    escrituras y 50 citas reales, no 162 y 56). Ver §1.5 y
>    [`CALIDAD-contexto-libro-de-mormon-2.md`](CALIDAD-contexto-libro-de-mormon-2.md) §5.
>
>    Lo que **sí** sigue siendo cierto: `doctrina-y-convenios-1` pasó de 80 → 88 citas, y ese
>    material se generó con `seminary-enrichment` sin pasada de auditoría propia. Y las filas de
>    LdM-2 de la tabla de arriba dicen «cerrado» sobre el corpus que existía cuando se auditaron,
>    que ya no es el de hoy.

**Lo que falta, en una línea (actualizado 4-sep-2026):** borrar los **53 archivos huérfanos**
(§1.5) y barrer los **89 espacios antes de puntuación** (§1.6), que son los dos más baratos; las
**6 lecciones de LdM-2 sin cita de líder**; citas de líder de `religion-301` (30) y `religion-200`
(39 sin comparar texto + 5 fabricadas por reemplazar); citas de Escritura de R250 y las sin `link`
de R301/R225; las 60 atribuciones sin respaldo restantes; el sesgo de posición en **8** cursos;
**el barrido de `correctAnswer` en 10 cursos y medio** (§1.3); **las 277 citas sin ancla al
párrafo** (§1.4); y generar `nuevo-testamento` y `Bloques`.

> **Y un eje nuevo que recién se estrenó: el registro de escritura (Nivel 3).** `libro-de-mormon-2`
> es el único curso auditado en ese eje (4-sep-2026, 47 `contexto` reescritos). Los otros 9 cursos
> con material **nunca se miraron con ese criterio**, y el defecto no lo detecta ningún script de
> completitud: una sección puede tener el largo correcto y aun así estar escrita como entrada de
> enciclopedia en vez de como algo que un chico de 15 años quiera leer. El detector barato está en
> [`CALIDAD-contexto-libro-de-mormon-2.md`](CALIDAD-contexto-libro-de-mormon-2.md) §1.1.

### 1.3 ⚠️ Hallazgo nuevo (2-sep-2026): respuestas de quiz marcadas mal

Barriendo `antiguo-testamento-1` aparecieron **23 preguntas de 119 (19 %)** cuya opción
marcada como correcta **contradice la lección**. Tres enseñaban algo activamente dañino: que
conviene **copiarse en un examen** para evitar un conflicto, que no recibiste respuesta porque
**«no oraste con suficiente fe»**, y que un bautismo **«necesita revalidarse formalmente»**.
Se corrigieron 29 en total (las 23 más 6 halladas de paso en `leccion-47`, `-58` y `-201`).

**No es un defecto de rotación.** Se verificó que la función `rotar` de
`audit-distribucion-respuestas.ts` es correcta y que **nunca se corrió sobre AT-1**: es un
defecto de generación, presente desde el commit original.

**El corolario es contraintuitivo y cambia cómo leer el sesgo de posición.** `religion-200`,
con un sesgo del 60 %, salió **limpio en sus 196 preguntas**. AT-1, en cambio, tenía una
distribución aparentemente sana (23/36/22/18) — y esa «salud» *era el síntoma*: los índices
estaban desalineados de las opciones. Dicho de otro modo: **un curso con sesgo fuerte es buena
señal para los índices; uno sospechosamente equilibrado que nadie corrigió, no.** Bajo esa luz
conviene mirar a `libro-de-mormon-1` (57 %) y a los demás sin barrer.

**Estado del barrido:** AT-1 lecciones 1-45 ✅ · AT-1 lecciones 46-207 🔴 (~430 preguntas,
esperar ~80 defectos) · `religion-200` ✅ 196/196 limpio · **los otros 10 cursos, sin empezar.**
No hay script que lo detecte: hay que leer. Método barato validado en §4 de
`CICLO-GENERACION-AUDITORIA.md`.

### 1.4 ⚠️ Hallazgo nuevo (2-sep-2026): 277 citas sin ancla al párrafo

**A pedido del usuario, desde ahora todo `link` de cita debe apuntar al párrafo exacto**
(`?lang=spa&id=p23#p23`), no al discurso completo. Un link al discurso entero obliga a buscar
la frase a mano entre miles de palabras, y es lo que encareció la auditoría de R200.

**277 de 619 citas (45 %) no cumplen** (recontado sobre el manifiesto el 4-sep-2026; antes decía
«286 de 650», con el denominador inflado por huérfanos). Cuatro cursos no tenían una sola ancla:
`antiguo-testamento-2` (61), `religion-200` (56), `religion-301` (50), `religion-225` (5).
Les siguen `doctrina-y-convenios-1` (55 de 88) y `libro-de-mormon-2` (35 de 69).
`libro-de-mormon-1` era el único con el 100 % cumplido (92/92).

La regla ya está en `seminary-enrichment/SKILL.md` (para que la generación futura la cumpla) y
la verificación en `scripts/audit-links-citas.ts` (bandera `⚓`).

✅ **`antiguo-testamento-2` cerrado el 6-sep-2026 (61/61)** — quedan **216 de 619 (35 %)**.
Ya no es trabajo manual: [`scripts/fix-anclas-citas.ts`](../../scripts/fix-anclas-citas.ts)
descarga el discurso con la API del sitio, ubica la frase por coincidencia literal y escribe el
ancla. Los dos errores que hay que evitar al usarlo en el resto de los cursos —elegir el párrafo
por recall, y buscar solo el arranque de la cita— están documentados en
[`AUDITORIA-citas-R200.md`](AUDITORIA-citas-R200.md) §5 y
[`AUDITORIA-citas-AT2.md`](AUDITORIA-citas-AT2.md) §5.b. **Siguiente por volumen:**
`religion-200` (56), `doctrina-y-convenios-1` (55), `religion-301` (50), `libro-de-mormon-2` (35).

### 1.5 ⚠️ Hallazgo nuevo (4-sep-2026): 54 archivos huérfanos inflaban todos los conteos — cerrado para `libro-de-mormon-2`

**Contar los archivos del directorio no es contar el contenido del curso.** Dos cursos tienen
archivos `.json` que el manifiesto no lista y que, por lo tanto, **la app nunca muestra**:

| Curso | En el manifiesto | Archivos | Huérfanos | Escrituras infladas | Citas infladas |
|---|---:|---:|---:|---:|---:|
| `libro-de-mormon-2` | 79 ² | 80 ² | ~~45~~ **0** ² | 98 | 25 |
| `doctrina-y-convenios-2` | 48 | 56 | **8, se conservan** ³ | 18 | 6 |
| `libro-de-mormon-1` | 91 | 92 | 1 ¹ | 0 | 0 |

¹ `_auditoria-snapshot-original`, sin secciones — no afecta ningún conteo.

³ **Triados y conservados por decisión del usuario (8-sep-2026).** Se leyeron los 8 y se comparó su
cobertura contra las lecciones activas antes de decidir nada, con el método de §5.1 de
`CALIDAD-contexto-libro-de-mormon-2.md`. Resultado: **ninguno cubre material doctrinal que el sitio
no tenga ya** — son las 8 lecciones que estaban asignadas a los dos semestres a la vez, y DyC-1 las
cubre con lecciones activas y cerradas al 100 %. No hay un caso como el de `leccion-25-10` de
LdM-2. Dos de ellos (`doctrina-y-convenios-78` y `-79-80`) son los únicos archivos del proyecto con
`secciones: []` y quiz; **no se generan** porque duplicarían lecciones de DyC-1, y sus 2
atribuciones sin respaldo que reporta `audit-autores-quiz.ts` quedan sin corregir por lo mismo.
Detalle en `BITACORA-doctrina-y-convenios-2.md`.

Los 45 de `libro-de-mormon-2` son contenido de antes de la reconstrucción de las semanas 24-27 y
31-33, con **un mapeo de semanas distinto**: `leccion-21-2` (huérfano) cubre 3 Nefi 12, mientras
que `leccion-21-1` (activo) cubre Alma 32. Por eso el recuento del 2-sep concluyó que el corpus
«creció»: en realidad se **reemplazó**, y el script sumó las dos versiones.

**Consecuencia para auditar:** cualquier script que recorra `fs.readdirSync(dir)` sobre estos dos
cursos audita contenido muerto. Filtrá por los `id` del manifiesto:

```js
const ids = new Set()
for (const w of manifest.weeks ?? []) for (const l of w.lessons) ids.add(l.id)
for (const l of manifest.lessons ?? []) ids.add(l.id)
```

² **Cerrado para `libro-de-mormon-2` el 4-sep-2026:** se borraron 44 y **se rescató uno**
(`leccion-25-10`, Alma 53 — cubría un día que el manifiesto no tenía y que ninguna otra lección
cubre). El curso quedó en 80 archivos / 79 activas. **Ocho de los 45 no eran contenido viejo: los
generó la reconstrucción del 31-ago y nunca se los listó.** Borrar los `.json` no alcanza —hay que
regenerar `lib/content/generated-map.ts`, y el script que lo hacía estaba roto—; detalle completo,
con el método de comparación de cobertura que separó los duplicados del rescatable, en
[`CALIDAD-contexto-libro-de-mormon-2.md`](CALIDAD-contexto-libro-de-mormon-2.md) §5.1-5.3.

**Quedan los 8 de `doctrina-y-convenios-2`**, sin revisar todavía con ese mismo método.

### 1.6 ⚠️ Hallazgo nuevo (4-sep-2026): 89 espacios antes de la puntuación

Artefacto de la extracción del manual: cuando una palabra viene en cursiva o enlazada, el texto
queda con un espacio suelto antes del signo — `resurrección ,` / `caída ;` / `una semilla .`

| Curso | Ocurrencias |
|---|---:|
| `antiguo-testamento-1` | 47 |
| `libro-de-mormon-2` | 25 |
| `religion-200` | 14 |
| `antiguo-testamento-2` | 2 |
| ~~`doctrina-y-convenios-2`~~ | ~~1~~ **0** (8-sep-2026) |

Arreglo mecánico y seguro (`/\s+([,;:.])/g` → `$1`), **todavía sin aplicar**. Afecta sobre todo al
`texto` de las escrituras, que es donde más se nota al leer.

### 1.7 ⚠️ Hallazgo nuevo (4-sep-2026): en el 83 % de las preguntas, la correcta es la más larga

**Se puede acertar el quiz midiendo con la vista.** Con 4 opciones, el azar daría un 25 %; medido
sobre las 3569 preguntas de los 12 cursos, la opción marcada como correcta es la más larga de las
cuatro en **2948 (83 %)**:

| Curso | Preguntas | Correcta = la más larga | % |
|---|---:|---:|---:|
| `religion-301` | 125 | 118 | **94 %** |
| `religion-200` | 196 | 182 | **93 %** |
| `doctrina-y-convenios-1` | 637 | ~~560~~ **49** | ~~88 %~~ **8 %** ⁴ |
| `libro-de-mormon-2` | 560 | ~~493~~ **159** | ~~88 %~~ **28 %** ⁴ |
| `doctrina-y-convenios-2` | 336 | ~~287~~ **53** | ~~85 %~~ **16 %** ⁴ |
| `antiguo-testamento-2` | 469 | **117** | **25 %** ⁴ |
| `nuevo-testamento` | 332 | 280 | 84 % |
| `religion-250` | 166 | 138 | 83 % |
| `libro-de-mormon-1` | 637 | **400** | **63 %** ³ |
| `Bloques` | 93 | 61 | 66 % |
| `antiguo-testamento-1` | 623 | **335** | **54 %** ⁴ |
| `religion-225` | 17 | 10 | 59 % |

⁴ **Remedido el 8-sep-2026** sobre el manifiesto de cada curso. Los cuatro cursos cerrados en este
frente (DyC-1, DyC-2, LdM-2, AT-2) están **por debajo o en el 25 % del azar**. Los dos que siguen
abiertos son `libro-de-mormon-1` (63 %) y `antiguo-testamento-1` (54 %) — ver §0.

> ⚠️ **La dirección espejo también hay que medirla, y no basta con llevarla a cero.** En DyC-2 la
> corrección terminó en 0 % «más larga» y 0 % «más corta», y eso **también es un sesgo**: descartar
> los dos extremos y elegir entre los dos del medio acertaba el 50 %, el doble del azar. Hay que
> medir el **ranking completo de las cuatro posiciones**. Estado final de DyC-2 tras rebalancear:
> 16 % · 33 % · 40 % · 14 %, con la mejor heurística de longitud en 36 % (era 85 % al empezar).

³ **Actualizado el 7-sep-2026.** Venía de 508/630 (81 %). Se corrigieron 126 preguntas en 18
lecciones; **quedan 69 lecciones por encima del umbral de 2 por lección**. El objetivo no es 0 %
sino acercarse al 25 % del azar: llevar todas las correctas al mínimo produce el defecto espejo
(«la correcta es siempre la más corta»), medido en 52 % al probarlo. Método y pendientes en
[`BITACORA-libro-de-mormon-1.md`](BITACORA-libro-de-mormon-1.md).

**Es peor que el sesgo de posición de §1.3, por dos razones.** La primera es que no se arregla con
un script: rotar el array de `options` no cambia cuál es la más larga, así que hay que **reescribir
texto**, pregunta por pregunta. La segunda es que sigue vivo: **la lección generada el 4-sep-2026
(`leccion-33-5`) salió con 6 de 7**, y se corrigió a mano en la misma sesión. No es un lote viejo,
es cómo se escribe una pregunta cuando la correcta se redacta primero y completa —con su condición
y su matiz— y los distractores se agregan después, más rápido y más cortos.

Regla nueva en `seminary-enrichment/SKILL.md` (contable, no cualitativa: contar en cuántas de las 7
pasa, y emparejar si son más de 2) y fila 23 en
[`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md).

### 1.1 Completitud de contenido — detalle por curso (Nivel 1, mecánico)

Sacado de `npx tsx scripts/audit-completitud.ts --todos` (29-ago-2026). "Con 6" y "con 7" cuentan
lecciones que cumplen exactamente la cantidad que pide `seminary-enrichment`; el resto está fuera
de rango o falta la sección entera.

| Curso | Lecciones con material | `contexto` en rango | ≥1 `enseñanza` ² | `conclusion` presente | `cuestionario` con 6 | quiz con 7 |
|---|---:|---:|---:|---:|---:|---:|
| `antiguo-testamento-1` | 88 | 86/88 | 85/88 | 87/88 | **88/88** | 67/82 |
| `libro-de-mormon-1` | **91** | **91/91** (7-sep) | 71/91 ⁴ | **91/91** | **91/91** (7-sep) | **91/91** |
| `libro-de-mormon-2` | 107 | **0/107** | 50/107 | **0/107** | **0/107** | 21/62 |
| `doctrina-y-convenios-1` ³ | 91 | **91/91** | 88/91 | **91/91** | **91/91** | **91/91** |
| `doctrina-y-convenios-2` ³ | 54 | **54/54** | **54/54** | **54/54** | **54/54** | **54/54** |
| `religion-200` | 28 | 28/28 | 28/28 | 28/28 | **28/28** | 28/28 |
| `religion-250` | 28 | 28/28 | 28/28 | 28/28 | **28/28** | 21/28 |
| `religion-301` (solo las 5 de convención clásica) | 5 | 5/5 | 5/5 | 5/5 | **0/5** (fijo en 5) | 0/5 |
| `religion-225` | 0 clásicas (5 usan `resumen`) | — | — | — | — | — |

⁴ Las 91 incluyen las **13 lecciones que estaban con `secciones: []`** y se generaron el
7-sep-2026 (antes el curso contaba 78). De las 20 sin `enseñanza`, 19 son *Dominio de la Doctrina*,
que no la llevan por diseño; queda 1 real.

² Excluye lecciones `type: "Dominio de la Doctrina"`, que no llevan `enseñanza` por diseño.

³ Filas actualizadas el 1-sep-2026; el resto de la tabla sigue siendo la medición del 29-ago-2026.
Las 3 lecciones de DyC-1 sin `enseñanza` son las de tipo `Especial` «Evalúa tu aprendizaje», que
tampoco la llevan por diseño —conviene que el script las excluya como ya excluye a las de Dominio
de la Doctrina—.

**Lo que salta más:**
- **`libro-de-mormon-2` es el único con gaps sistemáticos y totales**: 0 de 107 tiene
  `conclusion`, 0 de 107 tiene las 6 preguntas de `cuestionario` (todas tienen 3), y 45 de 107 no
  tienen ningún quiz. No parece ruido — es una convención de generación distinta y más liviana
  que el resto del proyecto. **Corrección sobre las 57 lecciones "sin `enseñanza`" (30-ago-2026):
  tampoco es azar** — es un bloque contiguo de `leccion-25-1` (Alma 53) hasta el final del curso
  (`leccion-36-5`, apéndice): 12 semanas seguidas sin ninguna cita de líder, mientras que las
  semanas 21-24 (Alma 32-52) la tienen en el 100% de los casos.
- **Hallazgo (30-ago-2026, actualizado más tarde el mismo día): 43 de las 111 archivos de
  `libro-de-mormon-2` no están en `_manifest.json`** (ids pares como `leccion-21-2`,
  `leccion-21-4`...; `_manifest.json` solo lista `leccion-21-1`, `-3`, `-5`, `-7`, `-9`). El sitio
  arma su navegación (`registry.ts`) leyendo ese mismo `_manifest.json`, así que estas 43 lecciones
  —con contenido real y completo— no son alcanzables desde la web tal como está el manifiesto hoy.
  **Ya no es un misterio sin investigar**: al comparar el manifiesto contra el calendario oficial
  del curso, se confirmó que estos 43 archivos son, al menos en parte, los días de clase reales que
  el manifiesto está cortando distinto (ver `COMPLETITUD-libro-de-mormon-2.md` §0.4 para los
  ejemplos ya confirmados, ej. `leccion-21-2.json` = 3 Nefi 12:1-16 = semana 31 día 1 real). El plan
  ya no es "excluirlos", es reciclarlos al reconstruir semanas 24-33 — ver §0 y §3 de ese documento.
- **`doctrina-y-convenios-1` y las 5 lecciones clásicas de `religion-301` tienen el mismo patrón**:
  `cuestionario` fijo en **5** preguntas, no 6, en el 100% de los casos — probablemente una
  convención anterior a la spec actual de `seminary-enrichment` (6 preguntas con 3 roles).
  `antiguo-testamento-1`, `religion-200` y `religion-250` sí están en 6 sin excepción.
- **`libro-de-mormon-1` — resuelto (30-ago-2026):** la inconsistencia no era "casos sueltos" sino
  un **bloque contiguo** — semanas 10 a 15 del `_manifest.json`, de `mosiah-5-1-5` a
  `alma-7-14-27` (30 lecciones) — generado bajo una convención más liviana que el resto del curso
  (detalle semana por semana en `COMO-AUDITAR-CONTENIDO.md` §3). A pedido del usuario se amplió
  con `seminary-enrichment`: `cuestionario` ahora en 78/78 con 6 preguntas, `contexto` en 77/78 en
  rango. Quedan 3 casos aislados sin tocar, fuera del alcance de ese pedido: `dd-2-nefi-28-30`
  (semana 7) con `contexto` 7 palabras corto, `alma-10-11` sin `enseñanza`,
  `conocimiento-espiritual-1` sin quiz.
- **Nivel 2 (calidad del contenido que sí tiene la forma correcta) — arrancó en `libro-de-mormon-2`
  (31-ago-2026).** El usuario preguntó si notaba diferencia de calidad contra `antiguo-testamento-1`;
  comparar ambos con `grep` encontró que el 85 % de las 78 lecciones del manifiesto (66/78, 128
  preguntas) usa la fórmula "no tiene ninguna relación" (y variantes) como distractor de descarte
  fácil — el anti-patrón que la propia skill prohíbe. Causa raíz: la skill `seminary-enrichment`
  solo daba 4 nombres de ejemplo para escenarios, lo que además producía nombres de personaje
  repetidos entre lecciones. **Ya corregida en la skill** (ampliada a 14 nombres + regla explícita
  anti-muletilla), lo que beneficia a todos los cursos futuros. Queda la corrección retroactiva de
  las 128 preguntas — ver `CALIDAD-libro-de-mormon-2.md` para el inventario completo y el progreso.

### 1.2 Escrituras sin `link` — fuera del alcance de `audit-escrituras.ts`

`audit-escrituras.ts` ignora toda cita sin `link` (no hay nada que descargar). Antes de dar por
"auditada" una categoría con este script, revisar cuántas citas quedan afuera:

| Curso | Citas de Escritura | Con `link` | Sin `link` |
|---|---:|---:|---:|
| `religion-301` | 87 | 17 | **70** |
| `religion-225` | 10 | 0 | **10** |
| El resto (AT-1, LdM-1, LdM-2, DyC-1, R200, R250) | — | prácticamente el 100% | 0 |

Las 70 de `religion-301` y las 10 de `religion-225` viven dentro de bloques `tipo: "escritura"` de
secciones `resumen` — para auditarlas hace falta el mismo trabajo de búsqueda de fuente que las
citas de líder (buscar el versículo antes de poder comparar nada), no el flujo automático.

---

## 2. Los tres cursos sin contenido — no son una tarea de auditoría

`nuevo-testamento`, `doctrina-y-convenios-2` y `Bloques` tienen `secciones: []` en el 100% de sus
lecciones (156 lecciones en total). No hay nada que auditar ahí todavía — es un problema de
**contenido inexistente**, no de contenido incorrecto. Escribir ese contenido es tarea de
`seminary-enrichment`, a pedido explícito — no lo dispares como efecto secundario de una auditoría.

✅ **`antiguo-testamento-2` — contenido generado (31-ago-2026).** Las 67 lecciones del manifiesto
(semanas 22 a 36) tenían `secciones: []`; ahora las 67 tienen `contexto`, 3–4 `escrituras` con
texto y `link` verificados contra el sitio oficial en el momento de generarlas, al menos una cita
de líder verificada por `web_search`/`web_fetch` (excepto las 6 lecciones `Dominio de la Doctrina`
— leccion-96, 106, 112, 122, 133, 137 — sin `enseñanza` por diseño), `conclusion` y `cuestionario`
de 6 preguntas. `hasStudy` se actualizó a `true` en `_manifest.json` para las 67. El `questions`
(quiz) de cada lección ya existía de antes en su formato previo (5 preguntas, 3 opciones) y no se
tocó. **Las citas de Escritura (200) y de líder (61) generadas en esta tanda ya pasaron por una
auditoría independiente (1-sep-2026) y quedaron ✅ cerradas** — ver
[`AUDITORIA-escrituras-AT2.md`](AUDITORIA-escrituras-AT2.md) y
[`AUDITORIA-citas-AT2.md`](AUDITORIA-citas-AT2.md). Sigue pendiente §3.3 (formato del quiz, 5
preguntas/3 opciones vs. la spec actual de 7/4) — decisión de producto, no bloqueante. Detalle
completo de la generación original en
[`COMPLETITUD-antiguo-testamento-2.md`](COMPLETITUD-antiguo-testamento-2.md).

---

## 3. Próximos pasos sugeridos, en orden

> ### ▶️ ARRANCÁ ACÁ — orden sugerido al 1-sep-2026
>
> Los dos primeros son mecánicos y baratos; los demás exigen abrir el manual lección por lección.
>
> | # | Qué | Costo | Dónde |
> |---|---|---|---|
> | **0** | 🎯 **Cerrar Antiguo Testamento y Libro de Mormón — los tres frentes de §0.** Es el trabajo con mayor retorno del plan: deja los seis cursos grandes al nivel de los dos de Doctrina y Convenios. **A)** quiz de `libro-de-mormon-1` (69 lecciones, acierto por longitud 63 %) · **B)** quiz de `antiguo-testamento-1` (60 lecciones, 54 %) más sus otros tres frentes · **C)** las 65 citas `REVISAR_MANUAL` (34 AT-1, 30 LdM-2, 1 AT-2) | alto | **§0**, más `BITACORA-doctrina-y-convenios-2.md` (método y herramientas) |
> | 0a | ~~Borrar los 53 archivos huérfanos~~ ✅ **LdM-2 cerrado (4-sep)** y ✅ **DyC-2 cerrado (8-sep): los 8 se triaron y se conservan** — ver la nota ³ de §1.5. **Este paso ya no tiene pendientes** | — | §1.5 |
> | 0b | **Barrer los espacios antes de puntuación** — quedan 88 en 4 cursos (DyC-2 cerrado el 8-sep) — `/\s+([,;:.])/g` → `$1` | minutos | §1.6 |
> | 0c | **Las 6 lecciones de `libro-de-mormon-2` sin cita de líder** — 4 tienen además una sola escritura. Es el único pendiente de contenido que le queda a ese curso | medio | `CALIDAD-contexto-libro-de-mormon-2.md` §4 |
> | 0d | **El sesgo de longitud en los cursos chicos** (§1.7). Los seis grandes se resuelven en el paso 0; quedan `religion-301` (94 %), `religion-200` (93 %), `nuevo-testamento` (84 %), `religion-250` (83 %), `Bloques` (66 %) y `religion-225` (59 %). ⚠️ **No lo lleves a 0 %**: ver la advertencia de §1.7 | muy alto | §1.7 |
> | 1 | **Corregir el sesgo de posición en los 8 cursos que faltan** — un comando por curso, no toca el texto. ⚠️ **Pero antes barré el `correctAnswer` de ese curso (§1.3)**: rotar opciones sobre índices ya mal solo hace más difícil detectarlo después | minutos | `npx tsx scripts/audit-distribucion-respuestas.ts <curso> --write` |
> | 2 | **Barrer `correctAnswer`** en AT-1 (lecciones 46-207) y en los 10 cursos sin empezar | alto, exige leer | §1.3 y `CICLO-GENERACION-AUDITORIA.md` fila 15 |
> | 3 | **Las atribuciones restantes** en R250 (6) y R225 (2). ✅ **LdM-1, AT-1, AT-2, LdM-2 y DyC-1 dan 0 al 8-sep-2026**; las 2 de DyC-2 son de un huérfano vacío y se dejan (nota ³ de §1.5). ⚠️ **Las 38 de R200 NO se tocan acá** — ver la nota de abajo | medio | `npx tsx scripts/audit-autores-quiz.ts --todos` |
> | 4 | **Las 30 escrituras `REVISAR_MANUAL` y las 35 citas de líder de `libro-de-mormon-2` que nunca se verificaron** (la mitad del curso se generó *después* de auditarlo). Las escrituras entran en el frente C del paso 0 | alto | §0 y `CALIDAD-contexto-libro-de-mormon-2.md` §4.1 |
> | 5 | **Citas de líder de `religion-200` (39 + 5 fabricadas) y `religion-301` (30)** | alto | `AUDITORIA-citas-R200.md`, `docs/ESTADO.md` §2 |
> | 6 | **Agregar el ancla al párrafo a las 277 citas sin ella** (§1.4) — conviene hacerlo *junto con* la auditoría de cada curso, no como pasada aparte | medio | `npx tsx scripts/audit-links-citas.ts <curso> --solo-problemas` |
> | 7 | **Citas de Escritura de R250** (todas con `link`, el script corre directo) | medio | `COMO-AUDITAR-ESCRITURAS.md` |
> | 8 | **Generar `nuevo-testamento` (78) y `Bloques` (24)**, que siguen con `secciones: []` | muy alto | método probado en `COMPLETITUD-doctrina-y-convenios-2.md` §3 |
>
> **Antes de empezar, leé §1 de este archivo y la tabla de defectos de
> `CICLO-GENERACION-AUDITORIA.md`.** Las filas 11 a 17 explican qué buscar y con qué script.
>
> ⚠️ **`audit-autores-quiz.ts` significa cosas distintas según el curso.** Donde la auditoría de
> citas de líder **ya se cerró** (DyC-1, AT-1), marca daño colateral real: se cambió el autor de
> `enseñanza` y las preguntas siguieron citando al viejo — se arregla re-anclando la pregunta al
> autor que la lección sí tiene. Donde esa auditoría **nunca se corrió** (R200), no se cambió
> nada: las preguntas citan material del manual que la lección no guarda en `enseñanza`, y
> **re-anclarlas borraría material real**. En esos cursos las banderas no son defectos, son
> afirmaciones sin verificar: se resuelven al cerrar la auditoría de citas, no antes.
>
> ---
>
> **Estado al 2-sep-2026 (sesión de AT-1 y R200).**
> `antiguo-testamento-1`: **19/19 atribuciones cerradas**, citas de Escritura de 0 a **231/279**,
> y **29 respuestas de quiz corregidas** (§1.3 — el hallazgo más grave de la sesión).
> `religion-200`: **sesgo corregido**, **196/196 respuestas verificadas y limpias**, escrituras
> de 28 a **53/84**, y la pasada estructural de sus 56 citas de líder con **5 fabricadas/rotas**.
>
> Tres cosas que conviene saber antes de seguir:
> 1. **El defecto de `correctAnswer` no es sistémico** — AT-1 lo tenía en el 19 %, R200 en 0 %.
>    Pero eso solo se sabe barriendo, y faltan 10 cursos y medio (§1.3).
> 2. **`rescan-ventana-ancha.ts` lee el reporte cacheado**, no los archivos: si corregís a mano
>    y no regenerás el reporte con `audit-escrituras.ts`, te pisa la corrección.
> 3. **El slug en inglés no predice el título en español.** `the-great-plan-of-happiness` es
>    «Gran Plan de Salvación»: una cita válida de R200 casi se marca como fabricada por eso.
>
> ---
>
> **Estado al 1-sep-2026 (sesión de Doctrina y Convenios).**
> `doctrina-y-convenios-1` quedó **cerrado en los tres tipos de auditoría**: 196/196 citas de
> Escritura, 80/80 citas de líder, y 91/91 lecciones con `contexto`, `conclusion`, `cuestionario`
> de 6 y quiz de 7 en rango. Detalle en `CALIDAD-doctrina-y-convenios-1.md`.
>
> **Hallazgo nuevo y transversal: 154 preguntas de quiz en 7 cursos citan a un líder que la
> lección no tiene** (defecto #12 del catálogo). Se corrigieron las 37 de DyC-1 y se dejó el
> chequeo automatizado en `scripts/audit-autores-quiz.ts`. **Quedan pendientes en otros cursos:**
> `religion-200` (38), `libro-de-mormon-1` (33), `antiguo-testamento-1` (19), `religion-250` (6),
> `religion-225` (2) — 98 casos reales. Los de `nuevo-testamento` (27),
> `doctrina-y-convenios-2` (29) y `Bloques` son esperables mientras esas lecciones tengan
> `secciones: []`, y se resuelven al generar el contenido.
>
> `doctrina-y-convenios-2` quedó **cerrado**: manifiesto corregido (54 → 48 lecciones, sin
> solapamiento con DyC-1) y las 48 generadas, con 162/162 citas de Escritura verificadas y 54
> citas de líder comprobadas por recall contra el discurso descargado. Ver
> `COMPLETITUD-doctrina-y-convenios-2.md`.
>
> **Segundo hallazgo transversal: 11 de los 12 cursos tenían quizzes adivinables.** La posición de
> la respuesta correcta estaba tan sesgada que en `antiguo-testamento-2` responder siempre la
> segunda opción acertaba el **96 %**, y en `nuevo-testamento` el **95 %**. Se creó
> `scripts/audit-distribucion-respuestas.ts`, que mide el sesgo y lo corrige **rotando el array de
> `options` sin tocar el texto**. Los dos cursos de Doctrina y Convenios ya están corregidos
> (~25 % por posición). **Pendientes:** `nuevo-testamento` (95 %), `antiguo-testamento-2` (96 %),
> `religion-301` (65 %), `religion-200` (60 %), `religion-250` (60 %), `libro-de-mormon-1` (57 %),
> `Bloques` (55 %), `religion-225` (52 %) y `libro-de-mormon-2` (51 %). Es la corrección más
> barata de todo el plan: un comando por curso, sin criterio humano.

> ⏸️ **Sesión interrumpida a pedido del usuario (30-ago-2026).**
> Trabajando en la completitud de contenido de `libro-de-mormon-2` (Lote 1 de 50 lecciones ya
> cerrado, ver `docs/auditorias/COMPLETITUD-libro-de-mormon-2.md`), el usuario compartió el
> calendario oficial del curso (`Calendarización Libro de Mormon Segundo Semestre.xlsx`) y al
> compararlo contra `_manifest.json` apareció un problema más grande y más prioritario que
> completar `conclusion`/`cuestionario`/`quiz`: **las semanas 24 a 33 cortan los días de clase de
> forma distinta al calendario oficial**, y las semanas 31-32 tienen `chapterUrl` apuntando a una
> carpeta del manual que no existe (redirige silenciosamente a la portada del manual, mismo
> HTTP 200 — no salta como error obvio). El detalle completo, la tabla semana por semana, y el
> plan de reconstrucción ya acordado con el usuario están en
> `docs/auditorias/COMPLETITUD-libro-de-mormon-2.md` §0 y §3 — **leer eso antes de seguir**, no
> hace falta re-investigar nada, ya está todo relevado y verificado.
>
> El punto 1 de la lista de abajo (18 citas de Escritura pendientes) sigue intacto y es
> independiente de este hallazgo — se puede retomar en paralelo o después, como se prefiera.

1. **Cerrar los 18 pendientes de `libro-de-mormon-2`** (citas de Escritura) — es lo más cerca de
   terminarse de todo lo que está `🟡`. Ver `AUDITORIA-escrituras-libro-de-mormon.md` §3.1.
2. **Citas de líder de `religion-301` (30 restantes)** — `docs/ESTADO.md` la marca como prioridad
   alta: el grupo *sin* `link` de ese curso salió 20/20 inválido, así que no hay motivo para
   suponer que el grupo *con* `link` esté sano. ~~y `doctrina-y-convenios-1` (30 restantes)~~
   ✅ **DyC-1 cerrado el 1-sep-2026 (80/80)**: de las 29 que tenían `link`, **ninguna resultó
   fabricada** —el contraste con las 42 sin `link`, que salieron 42/42 inválidas, confirma que el
   formato de la `fuente` predice la validez—, pero **9 tenían una traducción reescrita** en vez
   del texto oficial. Conviene esperar lo mismo en R301: no fabricación, sí texto no literal.
3. **Citas de Escritura de `religion-200`, `religion-250` y `antiguo-testamento-1`** — no
   empezadas, y las tres tienen el `link` en (casi) el 100% de sus citas, así que
   `audit-escrituras.ts` corre directo sin trabajo previo de búsqueda.
4. ~~Completitud de contenido de `libro-de-mormon-2`~~ ✅ **cerrada (31-ago-2026)** — las 78
   lecciones del manifiesto tienen `conclusion`, `cuestionario` de 6 y quiz de 7. Ver
   `COMPLETITUD-libro-de-mormon-2.md`.
5. ~~Decidir sobre el `cuestionario` fijo en 5 de `doctrina-y-convenios-1`~~ ✅ **resuelto el
   1-sep-2026**: el usuario pidió alinearlo con la spec actual, y las 91 lecciones de DyC-1 pasaron
   a 6 preguntas. **Quedan las 5 lecciones de convención clásica de `religion-301`**, con el mismo
   patrón — es la misma decisión de producto, ya tomada para DyC-1.
6. **Citas de Escritura sin `link` de `religion-301` (70) y `religion-225` (10)** — necesitan el
   método de búsqueda manual (como las citas de líder), no el automático.
7. ~~Nivel 2 (calidad) de `libro-de-mormon-2`~~ ✅ **cerrado (31-ago-2026)** — ver
   `CALIDAD-libro-de-mormon-2.md`. Extender el Nivel 2 a otro curso queda como candidato futuro:
   `antiguo-testamento-1` (que salió limpio en la comparación que motivó este hallazgo, así que
   serviría como control) o `religion-200`/`religion-250`.
8. **Las 4 lecciones "huérfanas" de contenido** (§2) — depende de que el usuario decida escribir
   ese material; no es una auditoría, es generación desde cero.

**Regla para no perder tiempo:** si vas a tocar un curso, corré primero los tres chequeos
mecánicos (`audit-escrituras.ts`, `extract-citas.ts`, `audit-completitud.ts`) sobre ese curso
específico antes de leer nada a mano — a veces uno de los tres ya está cerrado y no hace falta
volver a mirarlo.

---

## 4. Cómo actualizar este documento

Cuando cierres o avances una auditoría:

1. Actualizá la fila del curso en la tabla de §1 (y la sub-tabla de §1.1 si corresponde).
2. Actualizá los totales de §1.
3. Si un paso de §3 quedó resuelto, tachalo o quitalo y agregá el siguiente que corresponda.
4. Esto **no reemplaza** actualizar `docs/auditorias/README.md`, `docs/ESTADO.md` ni el
   `AUDITORIA-<tipo>-<curso>.md` específico — actualizá todos; cada uno responde una pregunta
   distinta (este: "¿por dónde sigo?"; esos: "¿qué se verificó exactamente en este curso?").
