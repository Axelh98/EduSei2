# Calidad de `contexto` — `libro-de-mormon-2` (4-sep-2026)

Cuarta pasada sobre este curso, y la primera que audita **el registro de escritura del
`contexto`**, no su completitud. Las anteriores fueron: completitud
([`COMPLETITUD-libro-de-mormon-2.md`](COMPLETITUD-libro-de-mormon-2.md), 30-ago) y calidad de
quiz en dos pasadas ([`CALIDAD-libro-de-mormon-2.md`](CALIDAD-libro-de-mormon-2.md), 31-ago).

**Disparador:** una observación del usuario, no un script. «El contenido de las lecciones de
Libro de Mormón 2 es más corto que en Libro de Mormón 1 y en Antiguo Testamento 1 y 2.» Era
cierto y medible.

---

## 1. El diagnóstico

Midiendo solo las lecciones que el manifiesto realmente muestra —no los archivos del
directorio, ver §5— la mediana de palabras por sección:

| Curso | n | `contexto` | `conclusion` | prosa total |
|---|---:|---:|---:|---:|
| `antiguo-testamento-2` | 67 | 270 | 92 | 362 |
| `antiguo-testamento-1` | 88 | 239 | 86 | 322 |
| `libro-de-mormon-1` | 78 | 207 | 84 | 295 |
| `doctrina-y-convenios-2` | 48 | 187 | 82 | 269 |
| `doctrina-y-convenios-1` | 91 | 165 | 80 | 245 |
| **`libro-de-mormon-2`** | **78** | **82** | 115 | **193** |

**El déficit estaba casi enteramente en `contexto`.** Todo lo demás estaba a la par o mejor: la
`conclusion` era la más larga de los seis cursos, el quiz empataba en el máximo (7.0), y el
`cuestionario` daba 6.0 igual que todos. Es decir: las dos pasadas anteriores habían cerrado
completitud y calidad de quiz, y el problema que quedaba era de otra naturaleza.

### 1.1 No era parejo, y el largo no era el defecto real

Por semana, el `contexto` promedio iba de 67 a 219 palabras. Pero al leer las lecciones cortas
apareció algo más útil que el conteo: **las malas comparten una marca de registro**, no un largo.
Terminan con una fórmula enciclopédica —«El pasaje ilustra…», «Este capítulo muestra…»— y
describen el capítulo desde afuera, sin narrarlo y sin dirigirse al alumno.

Comparación de la misma sección en dos lecciones del mismo curso:

> **`leccion-34-3` (55 palabras, defectuosa):** «Este pasaje condensa el plan de salvación y el
> evangelio de Cristo. Destaca que la santificación, el proceso de volverse limpio y santo, se
> logra mediante la recepción del Espíritu Santo…»

> **`leccion-28-1` (219 palabras, sana):** «El Señor manda a un lamanita llamado Samuel a predicar
> el arrepentimiento a los nefitas de Zarahemla. Pero cuando llega a la ciudad, ni siquiera lo
> dejan entrar. No se rinde: se sube al muro… Vos también tenés, en tu vida, personas que Dios usa
> para decirte verdades incómodas.»

**Un umbral por palabras sobre-cuenta.** En la primera pasada marqué 12 lecciones «por debajo del
piso»; al leerlas, 7 estaban bien escritas y solo eran más cortas —entre ellas `leccion-30-3`, que
yo mismo había usado como *referencia de calidad*—. Las reales eran 5. El detector fiable es la
expresión regular del registro, no el `wc`:

```
/(El|Este|Estos|Esta|Estas)\s+(pasaje|capítulo|capítulos|relato|sección)\s+(ilustra|muestra|describe|presenta|destaca|enfatiza|proporciona)/i
```

> ⚠️ **Un detector de «segunda persona» no sirve para esto.** Probé uno
> (`vos|tenés|podés|sabés|fijate|…`) y marcó 40 de 78 lecciones, incluidas las semanas 28-30 que
> son la referencia de calidad. El voseo aparece con demasiadas formas distintas como para
> enumerarlas. Descartado.

---

## 2. Qué se hizo

**47 `contexto` reescritos**, en dos tandas:

| Tanda | Semanas | Lecciones | Criterio |
|---|---|---:|---|
| 1 | 21-23, 31-36 | 42 | Las que la medición por palabras marcó como extremas (55-88) |
| 2 | 24, 26, 27 | 5 | Las que el detector de registro marcó y la medición por palabras no |

Método, por lección:

1. Sacar el `chapterUrl` del manifiesto y **traer el manual oficial de Seminario 2024 con
   `WebFetch`** — propósito de la lección, verdades doctrinales declaradas y situación narrativa.
2. Escribir el `contexto` contra eso, calibrando la voz contra las semanas 28-30 del mismo curso.
3. No tocar ninguna otra sección.

**Resultado:**

| | antes | después |
|---|---:|---:|
| `contexto` (mediana) | 82 | **187** |
| prosa total (mediana) | 193 | **298** |
| rango por semana | 67-219 | 120-219 |

`libro-de-mormon-2` quedó **por encima de `libro-de-mormon-1` en prosa total** (298 vs 295) y
empatado con `doctrina-y-convenios-2` en `contexto`.

### 2.1 Por qué no se tocó nada más

Reescribir solo `contexto` fue una decisión deliberada: es la única sección que se puede
reescribir **sin riesgo de fabricación**. `escrituras` y `enseñanza` exigen verificar una fuente
externa; `contexto` es narrativa y aplicación, y con el manual delante se escribe contra lo que
la lección declara enseñar. Ninguna de las 47 lleva la nota de «generado sin acceso web».

### 2.2 Las dos que quedaron con la marca, a propósito

`leccion-26-9` y `leccion-27-3` disparan el detector, y **no se reescribieron**. Son contextos de
164-169 palabras, narrativos y con aplicación real; lo único formulaico es cómo arranca su última
oración. El detector marca una frase, no un defecto. Anotado acá para que la próxima sesión no
las «arregle» por inercia.

---

## 3. Defectos puntuales corregidos en la misma pasada

| Lección | Defecto | Acción |
|---|---|---|
| `leccion-22-9` | Se titula «Dominio de la doctrina: Alma 39:9» pero **no citaba Alma 39:9**. Sus escrituras eran Alma 42:30, DyC 58:42-43 y 1 Juan 1:9 | Agregada Alma 39:9 al frente, texto verbatim del sitio de la Iglesia, con ancla `&id=p9#p9` |
| `leccion-21-7` | Dos citas de 2 Nefi 9:6-7. **No eran duplicados exactos**: una cortaba a mitad del versículo 7, la otra estaba completa pero con espacios sueltos antes de la puntuación | Se conservó la completa, limpiada. Quedó con 2 escrituras |
| `leccion-31-5` | `chapterUrl` → `40-3-nephi-12-16/402-teacher` (que es la lección de 3 Nefi 12:17-48, no la de Dominio) | → `403-teacher`, que sí es «Dominio de la doctrina: 3 Nefi 12:48» |
| `leccion-32-7` | `chapterUrl` → `48-ether-12-15/480-teacher`, que **no es una lección**: es «Éter 12–15: Reseña», una página de resumen para maestros | → `47-ether-6-11/474-teacher` («Éter 12:1–22: Recibir un testimonio de la verdad») |
| `leccion-32-9` | `chapterUrl` → el mismo `480-teacher` | → `47-ether-6-11/475-teacher` («Dominio de la Doctrina: Éter 12:6») |

> 💡 **Las lecciones de Dominio de la Doctrina de Éter no están en la unidad de Éter.** La de
> Éter 12:6 vive en `47-ether-6-11/475-teacher`, no en `48-ether-12-15/`. Si buscás una lección
> de Dominio y no aparece en la unidad esperada, probá la anterior antes de darla por inexistente.

> ⚠️ **`leccion-27-1` no tiene defecto de escrituras.** Se titula «Helamán 7–9» y cita Helamán
> 10:5-7, lo que parece fuera de rango — pero el manual (`361-teacher`) cubre **Helamán 7–10** y
> lista ese pasaje como clave. El desajuste está en el `title` del manifiesto, no en el contenido.

---

## 4. Lo que queda del curso: 6 lecciones

Todas por el mismo motivo — **les falta la sección `enseñanza`** (cita de líder). Cuatro además
tienen una sola escritura:

| Lección | Título | Escrituras |
|---|---|---:|
| `leccion-26-5` | Dominio de la doctrina: Helamán 5:12 | 2 |
| `leccion-29-4` | Evalúa tu aprendizaje 7 | 2 |
| `leccion-30-3` | Dominio de la doctrina: 3 Nefi 11:10–11 | **1** |
| `leccion-34-3` | Dominio de la doctrina: 3 Nefi 27:20 | **1** |
| `leccion-34-5` | Dominio de la doctrina: Moroni 7:45–48 | **1** |
| `leccion-35-3` | Dominio de la doctrina: Moroni 10:4–5 | **1** |

**No se hicieron a propósito.** Agregar una cita de líder exige encontrar el discurso real,
verificar el texto y armar el link con ancla al párrafo — es exactamente el terreno de la fila 10
de [`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md), donde saltarse la
verificación produjo citas fabricadas en otros cursos. Es un trabajo distinto al de reescribir
prosa y merece su propia tanda.

Se excluyen de esta cuenta `leccion-24-7`, `leccion-36-4` y `leccion-36-5`: son repasos y
evaluaciones, y para ese tipo de lección no corresponde una cita de líder.

### 4.1 Lo que nunca pasó por verificación (medido el 4-sep-2026)

La auditoría de escrituras de este curso es del **29-ago** y la de citas de líder del **18-ago**;
la reconstrucción de las semanas 24-33 se comiteó el **31-ago** (`182ab88`) y el **1-sep**
(`7314c0f`). Todo lo que entró después nunca se contrastó contra la fuente oficial. Comparando el
corpus activo de hoy contra el universo completo de archivos del 30-ago:

| Eje | Nunca verificado | Total del curso |
|---|---:|---:|
| Citas de líder | **35** | 71 |
| Referencias de Escritura | **44** | 195 |

Los documentos decían «39/39 cerrado» para las citas porque esa cuenta es sobre el corpus de
agosto: **la mitad del curso se generó después de auditarlo**. Es el mismo terreno de la fila 10
de [`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md) —donde saltarse la
verificación produjo citas fabricadas en `religion-200`—, así que es el pendiente de más riesgo
que le queda al curso.

**Correcciones a lo que dicen los otros documentos:**

- De las **18 «pendientes de investigación»** de
  [`AUDITORIA-escrituras-libro-de-mormon.md`](AUDITORIA-escrituras-libro-de-mormon.md) §3.1, solo
  **6 siguen vivas**: `leccion-21-3` (Alma 33:11), `24-3` (Alma 46:20-21), `24-5` (Alma 48:23),
  `27-1` (Helamán 7:6-7), `29-2` (3 Nefi 5:3) y `29-3` (3 Nefi 6:14-15). Siete estaban en lecciones
  que se borraron el 4-sep y cinco desaparecieron al reescribirse su lección.
- **35 de las 70 citas de líder no llevan ancla al párrafo** (`&id=pN`). Las 191 escrituras la
  llevan todas.
- El **sesgo de posición del quiz sigue sin corregir**: 560 preguntas repartidas
  **153 / 303 / 65 / 39** — la segunda opción se lleva el 54 %, la cuarta el 7 %.
- Y un sesgo **de longitud**, medido el mismo día y peor que el anterior: en **493 de esas 560
  preguntas (88 %)** la opción correcta es la más larga de las cuatro. Es un defecto de todo el
  proyecto (83 % de 3569 preguntas), no de este curso — ver `PLAN-DE-AUDITORIA.md` §1.7.

**Faltaba una lección del manual que ningún archivo cubría** —la semana 33 tenía 4 lecciones y usaba
`422` (3 Nefi 23) y `423` (3 Nefi 24) de la unidad `42-3-nephi-20-26`, sin `421-teacher` (3 Nefi
20-22) en ninguna, activa ni huérfana—. ✅ **Generada el 4-sep-2026** con `seminary-enrichment` y
auditada en la misma sesión: `leccion-33-5`, «3 Nefi 20–22», primera de la semana 33. El curso
quedó en **80 lecciones**. Sus 4 escrituras se compararon carácter por carácter contra el capítulo
oficial y su cita (presidente Russell M. Nelson, *Liahona* nov. 2006) contra el párrafo 14 del
discurso real: las cinco, idénticas. La auditoría sí encontró un defecto —6 de sus 7 preguntas
tenían la correcta como la opción más larga—, corregido antes de cerrar; el hallazgo transversal
que salió de ahí está en `PLAN-DE-AUDITORIA.md` §1.7.

---

## 5. ⚠️ El conteo del curso estaba inflado por archivos huérfanos

`lib/content/libro-de-mormon-2/` tiene **123 archivos `.json`, pero el manifiesto lista 78**. Los
45 restantes son contenido de antes de la reconstrucción de las semanas 24-27 y 31-33 (commits
`182ab88` y `7314c0f`), con un mapeo de semanas distinto: `leccion-21-2` (huérfano) cubre 3 Nefi
12, mientras que `leccion-21-1` (activo) cubre Alma 32. **No se muestran en la app.**

El recuento del 2-sep-2026 los contó como si fueran contenido vivo:

| | dicen los docs | real (solo manifiesto) |
|---|---:|---:|
| Referencias de Escritura | 287 | **189** |
| Citas de líder | 94 | **69** |

Es decir: **la reconstrucción no hizo crecer el corpus de este curso, lo reemplazó**, y el script
sumó las dos versiones. Los totales de `PLAN-DE-AUDITORIA.md` y `README.md` se corrigieron en esta
sesión.

`doctrina-y-convenios-2` tiene el mismo problema en menor escala: **8 huérfanos** sobre 56
archivos (48 en el manifiesto).

> ✅ **Cerrado el 4-sep-2026, más tarde el mismo día:** se borraron 44 y **se rescató uno**. El
> curso pasó de 123 archivos / 78 activas a **80 archivos / 79 activas**. Detalle en §5.1.

### 5.1 El rescate de `leccion-25-10` (Alma 53) y el borrado de los otros 44

Antes de borrar se comparó, huérfano por huérfano, qué capítulos cubre cada uno contra lo que
cubren las lecciones activas. **37 de los 45 eran duplicado puro.** De los 8 restantes:

| Huérfano | Qué cubría | Decisión |
|---|---|---|
| `leccion-24-2`, `24-6`, `24-10` | Sus capítulos «no cubiertos» eran 2 Nefi 31-32, Juan 6 y 1 Corintios 13 — referencias cruzadas de apoyo, no material de LdM-2 | Borrados |
| `leccion-24-4`, `25-8`, `26-8`, `26-10` | Repasos y evaluaciones genéricas; tres estaban incompletas (solo `contexto` + `cuestionario`, 0 preguntas). Las activas ya tienen sus propios «Evalúa tu aprendizaje» | Borrados |
| **`leccion-25-10`** | **Alma 53** — contexto, 2 escrituras, cita de líder, conclusión, cuestionario de 6 y 7 preguntas, todo completo y en rango | **Rescatado al manifiesto** |

> ⚠️ **Ocho de los 45 no eran contenido viejo: los generó la propia reconstrucción del 31-ago
> (`182ab88`) y nunca se los agregó al manifiesto.** `leccion-25-10` es uno de ellos —por eso está
> escrito con la convención nueva: contexto de 241 palabras, cuestionario de 6, quiz de 7—. Los
> otros siete (`27-6`, `28-6`, `28-8`, `29-6`, `30-6`, `30-7`, `30-8`) se leyeron uno por uno antes
> de borrarlos: son versiones alternativas de Helamán 10, 14 y 16 y de 3 Nefi 1 y 4, material que
> las semanas 27-30 ya cubren con sus cinco lecciones. El generador produjo de más y el manifiesto
> se quedó con una sola versión de cada día.

**El rescate tapó un hueco real, no solo salvó un archivo.** La semana 25 tenía **4 lecciones
cuando todas las demás tienen 5**, y de la unidad `34-alma-53-63` del manual el manifiesto usaba
`342, 343, 344, 345` — faltaba la primera. `341-teacher` se abrió y confirmó: es «Alma 53: Guardar
nuestros convenios». Ninguna lección activa cubría Alma 53-55.

Se insertó como segunda lección de la semana 25, que es donde la secuencia de capítulos queda
ascendente (Alma 53 → 56 → 57 → 59-61). Su cita de líder se verificó contra la fuente antes de
promoverla —Élder Richard G. Scott, «Fortaleza personal por medio de la expiación de Jesucristo»,
Conferencia General de octubre de 2013— y resultó **textual**; se le agregó el ancla `&id=p17#p17`
que le faltaba. Sus 2 escrituras entran en la cuenta de las que nunca se auditaron (§4.1).

> 💡 **Un huérfano no es basura por definición.** El barrido mecánico habría borrado una lección
> completa que el curso necesita. La comparación de cobertura antes de borrar cuesta un script de
> veinte líneas y es lo que separó los 44 duplicados del que había que salvar.

### 5.2 ⚠️ El script que regenera `generated-map.ts` estaba roto

Borrar los `.json` no alcanza: **`lib/content/generated-map.ts` lista un `import()` por archivo**, y
el bundler queda apuntando a archivos inexistentes. Hay que regenerarlo — pero el comando que el
propio archivo documentaba, `npx tsx scripts/migration/migrate-content.ts`, **muere con
`MODULE_NOT_FOUND`**: importa `scripts/migration/original-data.ts`, que depende de los
`lib/data/*.ts` de antes de la migración, ya borrados.

Se extrajo la parte que sigue haciendo falta a **`scripts/regen-content-map.ts`**, y el comentario
del archivo generado ahora apunta ahí. Diferencia con el original: excluye todo archivo que empiece
con `_`, no solo `_manifest.json` — si no, `libro-de-mormon-1/_auditoria-snapshot-original.json`
(que es un array, no una lección) entra al mapa como si fuera contenido.

### 5.3 Verificación del borrado

| Chequeo | Resultado |
|---|---|
| Huérfanos borrados == los 44 identificados | ✅ exacto, ninguno de más |
| `generated-map.ts` regenerado == archivos en disco | ✅ 79/79, 0 entradas agregadas de más |
| `validate-content.ts` | ✅ 684 lecciones, 4041 preguntas — el único problema que reporta (`_auditoria-snapshot-original.json`: «Expected object, received array») es **preexistente**, viene del commit `6f4285d` |
| Las 79 cargan por `CONTENT_MAP` + `normalizeLessonFile` | ✅ 79/79 |
| `npm run build` | ✅ exit 0 (capturado del build, no de `tail` — ver §7) |
| Recuperabilidad | Los 44 estaban commiteados; `git show 04a0ed0:lib/content/libro-de-mormon-2/<id>.json` los devuelve |

**El corpus del curso quedó en 191 escrituras y 70 citas de líder** (era 189 y 69; las dos
escrituras y la cita que suma son las de `leccion-25-10`).

---

## 6. Hallazgo transversal: espacios antes de la puntuación

Al comparar las dos citas de `leccion-21-7` apareció un artefacto del HTML del manual: cuando una
palabra viene en cursiva o enlazada, el texto extraído queda con un espacio suelto antes del signo
(`resurrección ,` / `caída ;` / `una semilla .`).

**89 ocurrencias en 5 cursos:**

| Curso | Ocurrencias |
|---|---:|
| `antiguo-testamento-1` | 47 |
| `libro-de-mormon-2` | 25 |
| `religion-200` | 14 |
| `antiguo-testamento-2` | 2 |
| `doctrina-y-convenios-2` | 1 |

Es un arreglo mecánico y seguro (`/\s+([,;:.])/g` → `$1`), pero toca cuatro cursos fuera del
alcance de esta sesión, así que **no se aplicó**. Solo se limpió la cita de `leccion-21-7` que se
estaba editando de todos modos.

---

## 7. Verificación

| Chequeo | Resultado |
|---|---|
| Diff | 48 archivos, 56 inserciones / 56 borrados |
| Líneas cambiadas que no sean `"contenido"` (tanda de contextos) | **0** |
| Archivos tocados fuera de las semanas objetivo | **0** |
| `lessonContentFileSchema` (Zod) | 47/47 |
| `courseManifestSchema` | ✅ |
| Carga por `CONTENT_MAP` + `normalizeLessonFile` | 47/47 |
| `chapterUrl` bien formadas en el manifiesto | 78/78 |
| `npm run build` | ✅ limpio |

> ⚠️ **`npm run build 2>&1 \| tail -N` miente.** El código de salida que se reporta es el de
> `tail`, no el del build: una compilación fallida sale como `exit 0`. En esta sesión un build
> roto pasó por bueno hasta que se revisó el log. Redirigí a un archivo y capturá `$?` del build
> directamente.

> ⚠️ **`.next\` dentro de OneDrive rompe el build de forma intermitente.** Turbopack escribe miles
> de chunks ahí y OneDrive los intercepta: `TurbopackInternalError: failed to write to … Caused by:
> La operación de nube no se realizó correctamente. (os error 389)`. Se resuelve borrando `.next`
> y recompilando, pero va a volver a pasar. **Excluir `.next` de la sincronización de OneDrive lo
> evita de raíz.**

---

## 8. Sobre la skill `seminary-enrichment`

Dos problemas de su documentación, encontrados al usarla:

1. **`SKILL.md` remite a un directorio `references/` que no existe.** Cita
   `references/output-format.md` y `references/scripture-links.md`; en
   `~/.claude/skills/seminary-enrichment/` solo está `SKILL.md`. Mismo patrón que la skill
   `seminary-audit` fantasma que ya documenta `PLAN-DE-AUDITORIA.md`.
2. **Su advertencia de que el manual es una SPA inaccesible es falsa.** `SKILL.md` dice que
   `web_fetch` solo obtiene el shell HTML y propone caer a la «Capa 4» (escribir de memoria, con
   nota de advertencia). En esta sesión se hicieron **32 fetches al manual de Seminario 2024 y los
   32 devolvieron contenido real** — propósito, pasajes clave, verdades doctrinales, situación
   narrativa y escenarios de práctica. Esa advertencia empuja a sintetizar a ciegas cuando la
   fuente está disponible; es probablemente una de las causas del registro enciclopédico que
   documenta §1.1.

Ambos están cargados en [`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md).
