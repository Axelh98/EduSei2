# Ciclo de generación y auditoría — cómo se retroalimentan

`seminary-enrichment` escribe contenido a partir de los manuales oficiales. `seminary-audit`
verifica ese contenido, a veces sesiones o meses después. Hasta el 31-ago-2026 esas dos skills
corrían como pasadas independientes: una auditoría encontraba un defecto sistemático, se
corregían las instancias ya escritas, y ahí terminaba — nada garantizaba que la próxima tanda de
generación no volviera a producir el mismo defecto, porque el hallazgo vivía solo en un documento
de auditoría que nadie relee al generar.

Este documento es la bisagra entre las dos: un catálogo de **defectos que una auditoría encontró →
la regla concreta que ahora los previene en `seminary-enrichment`** (o que todavía falta agregar),
más el flujo recomendado para que el próximo hallazgo sistemático se cierre en la misma sesión que
lo encuentra, no en un documento que se lee "algún día". El objetivo no es que generar contenido
sea más barato — auditar 78 lecciones lleva lo que lleva — sino que sea **eficiente**: que cada
defecto se corrija una sola vez, en la fuente (la skill), y no una vez por lección cada vez que
alguien vuelve a auditar.

**Cómo se usa junto con el resto de `docs/auditorias/`:**

| Documento | Para qué sirve |
|---|---|
| `PLAN-DE-AUDITORIA.md` | Punto de entrada: estado de los 12 cursos en las tres auditorías. |
| **Este archivo** | El puente generación ↔ auditoría: catálogo de defectos y reglas, más el flujo para cerrarlos rápido. |
| `COMO-AUDITAR-CONTENIDO.md` | Método completo de la auditoría de contexto/cuestionario/conclusión/quiz — Nivel 1 (mecánico) y Nivel 2 (calidad leída). |
| `COMO-AUDITAR-ESCRITURAS.md` | Método de la auditoría de citas de Escritura. |
| `CALIDAD-libro-de-mormon-2.md` | El caso de estudio completo de donde salió la mayoría de las filas de la tabla de abajo. |
| `~/.claude/skills/seminary-enrichment/SKILL.md` | Donde viven, hoy, las reglas que este documento cataloga — la fuente de verdad para generar. ⚠️ **Dos defectos de la skill misma, verificados el 4-sep-2026:** (1) remite a `references/output-format.md` y `references/scripture-links.md`, y **ese directorio no existe** — solo está `SKILL.md`; (2) su advertencia de que el manual es una SPA inaccesible es **falsa** (fila 20 del catálogo). |
| ~~`~/.claude/skills/seminary-audit/SKILL.md`~~ | ⚠️ **Esta skill no existe.** Se verificó el 2-sep-2026: en `~/.claude/skills/` solo está `seminary-enrichment`, y no hay ningún plugin que la aporte. El procedimiento de auditoría vive en los `.md` de esta carpeta (`COMO-AUDITAR-ESCRITURAS.md`, `COMO-AUDITAR-CONTENIDO.md`, `../ESTADO.md` §2). Si algún día se escribe, este es su lugar. |

---

## 1. Catálogo: defecto encontrado → regla de generación

Cada fila es un defecto real, con el alcance medido en el momento en que se detectó (no
estimado), y el estado de la regla que lo previene en `seminary-enrichment/SKILL.md`.

| # | Defecto | Encontrado por | Alcance medido | Causa raíz | Regla en la skill |
|---|---|---|---:|---|---|
| 1 | Distractor muletilla "no tiene ninguna relación" | `CALIDAD-libro-de-mormon-2.md`, 1ª pasada (31-ago-2026) | 131 preguntas / 66 de 78 lecciones | Pool de nombres/situaciones de ejemplo muy chico (4) hacía converger la generación en fórmulas repetidas cuando había que escribir muchas preguntas seguidas | ✅ Regla explícita en "Lo que NUNCA debe hacer un distractor" |
| 2 | Nombres de personaje concentrados (Sofía/Mateo/Valentina/Luca/Camila) | idem | 108 de 149 preguntas de aplicación del curso completo | Mismo pool de 4 nombres de ejemplo — afecta a **todos** los cursos, no solo a este | ✅ Pool ampliado a 14 nombres + instrucción explícita de rotación y de "llevar la cuenta" en una misma tanda |
| 3 | Apertura de `contexto` repetida entre lecciones (misma estructura de primera oración) | `CALIDAD-libro-de-mormon-2.md`, 2ª pasada (31-ago-2026) | 2 grupos / 9 lecciones (contra 3 grupos en `antiguo-testamento-1`, la referencia) | Sin regla que pidiera variar la primera oración entre lecciones de una misma tanda | ✅ Agregada en esta sesión — ver §3 del flujo de `contexto` |
| 4 | Apertura fija de `conclusion` ("Esta semana, elegí...") | idem | 22 de 78 lecciones | Sin regla que pidiera variar la frase de invitación a la acción | ✅ Agregada en esta sesión — ver §4 del flujo de `conclusion` |
| 5 | Pregunta de síntesis que asume contenido no escrito en la lección (ej. "la partida misteriosa de Alma" en una lección cuyo `contexto` solo cubre el capítulo siguiente) | `CALIDAD-libro-de-mormon-2.md`, Nivel 2 (esta sesión), `leccion-24-3` | 1 caso confirmado en 78 lecciones leídas completas | El `title` del manifiesto listaba un rango más amplio ("Alma 45–46") que el `contexto` realmente generado (solo cap. 46) — probablemente una reconstrucción de semana que cambió el alcance sin revisar si el quiz seguía encajando | ✅ Agregada en esta sesión — ver "La opción correcta" |
| 6 | Pregunta que atribuye una enseñanza a un autor sin respaldo en `enseñanza` (ej. una pregunta cita "el élder Holland" en una lección cuya única cita es de otro autor) | `COMO-AUDITAR-CONTENIDO.md` §3.1 (`jacob-1`, LdM-1, 29-ago-2026) + esta sesión (`leccion-27-3`) | 2 casos confirmados; nunca se buscó de forma sistemática en el resto del corpus | Hipótesis con buen respaldo: una corrección posterior de la cita de líder (auditoría de citas, ya cerrada 39/39 en LdM-2) cambió el autor/texto de `enseñanza`, pero nadie revisó si `cuestionario`/`questions` seguían citando al autor viejo | ✅ Agregada en esta sesión — ver "Citas de líderes (enseñanza)". **Es la más importante de las nuevas**: toca la credibilidad doctrinal del sitio, no solo el estilo, y ningún script mecánico la detecta — hace falta leer. |
| 7 | Distractores casi duplicados dentro de la misma pregunta (dos opciones dicen lo mismo con una palabra cambiada) | Esta sesión, `leccion-29-5` | 1 caso confirmado | La regla existente solo pedía "extensión similar", no "contenido distinto" | ✅ Reforzada en esta sesión |
| 8 | Error de concordancia de género en un escenario de aplicación (nombre femenino con adjetivo masculino) | Esta sesión, `leccion-32-9` | 1 caso confirmado | Sin paso de revisión gramatical en el checklist de cierre | ✅ Agregado al checklist en esta sesión |
| 9 | `cuestionario` fijo en 3 preguntas (no 6) y `conclusion` ausente en el 100% de las lecciones | `COMPLETITUD-libro-de-mormon-2.md` (30-ago-2026) | 107/107 lecciones (antes de la reconstrucción) | Convención de generación más liviana, de una etapa anterior a la spec actual de la skill | Resuelto por generación posterior con `seminary-enrichment` ya vigente — no era un bug de la skill, era contenido de antes de que la regla existiera |
| 10 | Discursos citados en `enseñanza` que no existen, o con URL a otro discurso | `AUDITORIA-citas-R250.md`, `AUDITORIA-citas-DyC1.md`, `AUDITORIA-citas-R301.md` (ver `docs/ESTADO.md` §2) | 16/38 (R250), 28/49 sin `link` (DyC-1), 20/20 (R301) | La regla "nunca inventés una cita" ya existía en la skill, pero se generó contenido sin el paso de `web_search`/verificación real antes de escribirla | Regla ya existente y correcta — el problema no era la regla, era saltearse el paso de verificación. Ver la nota de §2 sobre por qué esta es la única fila donde "agregar una regla" no alcanza. |
| 11 | Pregunta de `questions` **de experiencia personal** con una opción marcada como correcta ("¿Alguna vez sentiste que recibiste una respuesta de Dios?", "¿Qué hábito vas a empezar esta semana?") | `CALIDAD-doctrina-y-convenios-1.md` (1-sep-2026) | 22 de 91 lecciones al empezar; en varias, 3 de 6 preguntas | El quiz se generó copiando el `cuestionario` y agregándole opciones. No había ninguna regla que separara los dos géneros: uno es reflexivo y sin respuesta correcta, el otro mide comprensión | ✅ Agregada en esta sesión: fila en "Anti-patrones a evitar", más la "Regla de frontera entre `cuestionario` y `questions`" y dos ítems nuevos del checklist |
| 12 | Pregunta o distractor que **nombra a un líder ausente de la sección `enseñanza`** de esa lección | Esta sesión, barrido mecánico sobre `doctrina-y-convenios-1` | **37 preguntas / 33 lecciones** — el defecto más extendido encontrado hasta ahora en un solo curso | Confirmada la hipótesis de la fila 6: la auditoría de citas de líder de DyC-1 cambió el autor de `enseñanza` en 28 lecciones (tabla D de `AUDITORIA-citas-DyC1.md`) y nadie revisó `questions`. Las preguntas siguieron citando al autor viejo, en muchos casos el que se había determinado **fabricado** | ✅ Regla reforzada (fila nueva en anti-patrones + ítem de checklist). **El barrido es automatizable**: cruzar los apellidos que aparecen en `questions`/`cuestionario` contra el autor de `enseñanza` toma segundos y debería correrse en todo curso cuya auditoría de citas haya cambiado autores |
| 13 | `correctAnswer` apuntando a un distractor (la respuesta oficial del quiz es una afirmación incorrecta) | Esta sesión, `86-dc-76-19-24` | 1 caso confirmado en 621 preguntas | Sin paso de verificación del índice contra la lista de opciones | ✅ Ítem agregado al checklist |

| 14 | **Sesgo de posición de la respuesta correcta**: la opción correcta cae casi siempre en la misma posición del array | Esta sesión, con el script nuevo `audit-distribucion-respuestas.ts` (1-sep-2026) | **11 de los 12 cursos.** Los extremos: `antiguo-testamento-2` con el **96 %** de sus respuestas en la posición 1 y `nuevo-testamento` con el **95 %**. Dicho de otro modo: responder siempre la segunda opción aprobaba esos cursos enteros sin leer una sola pregunta | Al redactar, la respuesta correcta se escribe primera o segunda y los distractores se agregan después. El checklist ya pedía que la posición variara, pero **nadie lo medía**, y a ojo el sesgo es invisible dentro de una lección: solo aparece al contar el curso completo | ✅ Regla reforzada en el checklist + script nuevo. **La corrección es mecánica y segura** —rota el array de `options` y actualiza el índice, sin tocar un solo carácter de texto—: `npx tsx scripts/audit-distribucion-respuestas.ts <categoria> --write` |

| 15 | **`correctAnswer` apuntando a un distractor, a escala.** La respuesta oficial del quiz es una afirmación que contradice la lección | Barrido manual de `antiguo-testamento-1` (2-sep-2026), leyendo cada pregunta contra su opción marcada | **23 de 119 preguntas (19 %)** solo en las lecciones 1-45, más 6 encontradas de paso en las lecciones 47, 58 y 201. Las lecciones 46-207 siguen sin barrer | Defecto de **generación**, presente desde el commit original: se verificó que `audit-distribucion-respuestas.ts` nunca se corrió sobre este curso y que su función `rotar` es correcta | ⚠️ La fila 13 ya pedía verificar el índice contra las opciones, pero **como ítem de checklist no alcanzó**. No hay script que lo detecte: exige leer. Método barato validado: volcar cada pregunta con **solo** la opción marcada correcta y revisar si es defendible; abrir las 4 opciones solo en las sospechosas |
| 16 | **`link` de cita de líder sin ancla al párrafo** — apunta al discurso entero | `AUDITORIA-citas-R200.md` (2-sep-2026) | **277 de 619 citas (45 %)** en todo el corpus (recontado sobre el manifiesto el 4-sep-2026; el «286 de 650» original tenía el denominador inflado por huérfanos). Cuatro cursos sin una sola ancla: AT-2 (61), R200 (56), R301 (50), R225 (5) | La skill daba el formato del link sin exigir `#pN` | ✅ Regla agregada a `SKILL.md` («el ancla no es opcional») y bandera `⚓` en `audit-links-citas.ts`. **6-sep-2026: `scripts/fix-anclas-citas.ts` las corrige**, no solo las detecta — descarga el discurso, ubica el párrafo que contiene la cita y escribe el `#pN`. En AT-1 bajó de 12 a 5 en una corrida, y **AT-2 quedó cerrado 61/61 el 6-sep-2026** (quedan 216 en el corpus). ⚠️ **El párrafo NO se elige por recall de palabras**, aunque ese sea el criterio que sirve para las citas de Escritura: en un discurso corto casi cualquier ventana de 4 párrafos llega a recall 1.00 y el ancla termina tres párrafos antes de la frase. Se elige por **coincidencia literal** (n-grama de hasta 10 palabras) y **buscando en cualquier posición del párrafo, no solo el arranque de la cita** — buscar el arranque erró en 4 de las 61 de AT-2, porque el `texto` guardado suele empezar a mitad de una oración del discurso. Conviene cerrar con una verificación independiente de los `link` escritos: así aparecieron esas 4; las 5 que quedan son videos y devocionales de BYU, que no tienen párrafos numerados. **Ojo con las citas de manual**: viven en barras laterales con ids del tipo `aside1_p10`, no `p10` |
| 17 | **`link` de cita que no existe pero **no** da 404**: el sitio redirige en silencio al índice de la conferencia con HTTP 200 | `AUDITORIA-citas-R200.md` (2-sep-2026) | **15 de 50 links únicos de R200** (17 citas). Incluye 2 grupos de citas fabricadas y 1 link que apunta al discurso de otro orador | Un slug inventado es indistinguible de uno bueno para cualquier chequeo ingenuo —y para quien hace clic, que aterriza en una página real y plausible—. Es el mismo patrón de los `chapterUrl` de LdM-2 semanas 31-32 | ✅ `scripts/audit-links-citas.ts` lo detecta comparando el `canonical` contra el slug pedido. Regla agregada a `SKILL.md`: verificar que el link resuelva **antes** de escribirlo |

| 18 | **`contexto` en registro enciclopédico**: describe el capítulo desde afuera («El pasaje ilustra…», «Este capítulo muestra…») en vez de narrarlo y conectarlo con la vida del alumno | `CALIDAD-contexto-libro-de-mormon-2.md` (4-sep-2026) | **47 de 78 lecciones** de LdM-2; mediana de `contexto` en 82 palabras contra 207 en LdM-1 y 270 en AT-2 | La skill **declara que el manual es una SPA inaccesible** y ofrece una «Capa 4: síntesis basada en conocimiento del dominio». Esa salida de emergencia se volvió el camino por defecto, y sintetizar sin la fuente delante produce resumen, no narrativa | ⚠️ **La regla de largo y tono ya existía** («narrativa fluida de 200–320 palabras… no es un resumen de puntos») y aun así se generó así. Lo que hay que corregir es la advertencia de SPA (fila 20), no la regla de redacción |
| 19 | **`chapterUrl` que apunta a otra lección del manual**, o a una página de reseña para maestros en vez de a una lección | idem, `leccion-31-5`, `leccion-32-7`, `leccion-32-9`; **barrido completo de `antiguo-testamento-1` el 6-sep-2026** | 3 de 78 en LdM-2; **6 de 89 en AT-1** (5 URIs inexistentes + 1 lección con el número desalineado). Los otros 10 cursos siguen sin barrer | Las lecciones no siempre viven en la unidad esperada, y los slugs cambian entre ediciones del manual: `18-numbers-11-14` pasó a `18-numbers-11-14-21`, `22-1-samuel-1-15` a `22-ruth-1-samuel-1-7`, y a `661-the-importance-of-education` le sobraba el `the-`. Al no encontrarlas se reusó una URL parecida | ✅ **Script nuevo: `scripts/audit-chapterurls.ts`** (`<categoria>` o `--todos`). Trae cada `chapterUrl` por la API y compara. **El punto fino es la fila 17**: una URI inexistente del manual no da 404, devuelve el índice completo con HTTP 200, así que el script compara el contenido (tamaño + número de lección anunciado) y no el status |
| 20 | **La skill afirma que `churchofjesuschrist.org/study/manual/` es una SPA y que `web_fetch` no puede leerlo** | idem | Afecta a toda generación futura | Probablemente cierto cuando se escribió la skill; hoy no lo es | ❌ **Falso al 4-sep-2026: 32 fetches al manual de Seminario 2024, 32 con contenido real** (propósito, pasajes clave, verdades doctrinales, situación narrativa y escenarios de práctica). Es la causa raíz de la fila 18 y hay que corregirlo en `SKILL.md` |
| 21 | **Lección de Dominio de la Doctrina que no cita su propio pasaje de dominio** | idem, `leccion-22-9` («Dominio: Alma 39:9», sin Alma 39:9 entre sus escrituras) | 1 de 12 pasajes de dominio de LdM-2; **sin buscar en los otros cursos** | Sin regla que exija que el pasaje del `title` esté en `escrituras` | ❌ Sin regla. Chequeo mecánico trivial: parsear la referencia del `title` y verificar que aparezca en `escrituras.citas[].referencia` |
| 22 | **Espacio suelto antes de la puntuación** en el `texto` de escrituras (`resurrección ,`) | idem | **89 ocurrencias en 5 cursos** (AT-1 47, LdM-2 25, R200 14, AT-2 2, DyC-2 1) | Artefacto del HTML del manual: las palabras en cursiva o enlazadas dejan un espacio al extraerlas | ❌ Sin regla. Agregar `.replace(/\s+([,;:.])/g, '$1')` al guardar texto extraído |
| 23 | **La opción correcta es la más larga de las cuatro**, de forma masiva: se puede acertar el quiz midiendo con la vista, sin leer el contenido | Auditoría de `leccion-33-5` recién generada (4-sep-2026), extendida después a los 12 cursos | **2948 de 3569 preguntas (83 %)** del proyecto, contra un 25 % esperable por azar. Peor en R301 (94 %), R200 (93 %), DyC-1 (88 %) y LdM-2 (88 %); mejor en AT-1 (65 %) y `Bloques` (66 %) | La correcta se escribe primero y completa: incluye la condición, el matiz y la explicación. Los distractores se agregan después, más rápido y más cortos. **No es un lote viejo: la lección generada en esta misma sesión salió con 6 de 7** | ⚠️ **La regla existía y no alcanzó** («no debe ser la opción más larga como patrón constante»): es cualitativa y se evalúa pregunta por pregunta, donde el sesgo es invisible. Reemplazada por un chequeo contable en `SKILL.md` (contar en cuántas de las 7 la correcta es la más larga; si son más de 2, emparejar) |

| 24 | **Quiz de convención anterior: 5 preguntas de 3 opciones** (a veces 2), con distractores de descarte fácil y la correcta más larga en casi todas | Lote 1 del frente B doctrinal (6-sep-2026), al revisar `questions` de `leccion-169` | **94 lecciones con quiz en 4 cursos.** `antiguo-testamento-2` **las 67**, `antiguo-testamento-1` 15, `religion-250` 7, `religion-225` 5. En R250 y R225 hay preguntas de **2 opciones** — verdadero/falso disfrazado de opción múltiple | Contenido anterior a la spec actual de `questions`, igual que la fila 9 con `cuestionario`. Nunca se detectó porque **ningún script mira `options.length`**: `audit-completitud.ts` cuenta preguntas, y `audit-distribucion-respuestas.ts` mide posiciones sobre el array que encuentre, sea de 2, 3 o 4 — con 3 opciones el sesgo que reporta ni siquiera es comparable con el de 4 | ❌ Sin regla ni script. El chequeo es de una línea (`q.options.length !== 4`) y debería sumarse a `audit-completitud.ts`. **Ojo con AT-2**: la memoria del proyecto lo da por "67/67 generadas con seminary-enrichment", pero su quiz nunca cumplió la spec — y es el mismo curso que la fila 14 midió con el 96 % de las respuestas en la posición 1 |

| 25 | **El detector de «invita a orar/meditar/anotar» contaba palabras corrientes como si fueran invitaciones a orar** | Lote 3 del frente B (6-sep-2026), al notar que `leccion-36` figuraba como cumplida sin tener ninguna pregunta de ese tipo | **302 de 519 lecciones contadas contra 153 reales: la métrica estaba inflada al doble (58 % vs 29 %) en los 9 cursos medidos.** «ahora» explicaba 92 falsos positivos, «describir» 27, «hora» 15 | Fragmentos de regex sin límite de palabra. En español eso arrastra palabras frecuentes: `or[áa]\b` cierra sobre «ahora», `orar` vive dentro de «mejorar», `oraci[óo]n` dentro de «adoración», `escrib[íi]` dentro de «describir». Y `\b` no alcanza como arreglo: en JS las vocales acentuadas no son carácter de palabra, así que `or[áa]\b` nunca cierra sobre «orá» — el mismo bug que el propio script ya documentaba para `MANDA_AL_TEXTO` y que nadie revisó en los detectores vecinos | ✅ Corregido en `audit-doctrinal.ts` con lookarounds sobre una clase explícita de letras españolas, más casos de prueba negativos. **Queda por revisar `MANDA_AL_TEXTO` y `SUSTANCIA` con el mismo criterio**: `le[ée]` y `sana` tienen la misma forma sospechosa |

> **Sobre la fila 25 — el instrumento también es contenido que hay que auditar.** Las filas 14, 15 y 23 se apoyan en números que
> salieron de scripts, y este documento los presenta como alcance «medido, no estimado». La fila 25 muestra que un número medido
> puede estar tan equivocado como una estimación si nadie audita el medidor: durante media sesión se trabajó creyendo que el 58 %
> del corpus ya invitaba a orar, cuando era el 29 %. **Antes de confiar en un detector nuevo, escribile media docena de casos
> negativos** — sobre todo en español, donde el `\b` de JS no se lleva bien con los acentos.

> **Sobre la fila 24 — otra vez el alcance lo dio el cruce, no la lectura.** El caso apareció leyendo
> una lección; el número real (94, y un curso entero) salió de un barrido de segundos. Es literalmente
> la lección de proceso de las filas 12 y 15, repetida por tercera vez. Cuando encuentres un defecto
> de forma leyendo, escribí el cruce **antes** de decidir si vale la pena corregirlo: el alcance es lo
> que decide, y el alcance casi nunca es "un caso".

> **Sobre las filas 18 y 20 — el patrón es el de la fila 10, al revés.** En la fila 10 la regla
> estaba bien y se salteó el paso de verificación. Acá la regla de redacción también está bien, pero
> **la propia skill autoriza a saltearse la fuente** al declarar que no se puede acceder a ella. Una
> instrucción que describe mal el entorno es peor que una instrucción faltante: da permiso explícito
> para hacer lo incorrecto. Antes de agregar reglas nuevas, conviene revisar que las que ya están
> sigan siendo ciertas.

> **Sobre las filas 19, 21 y 22 — las tres son mecánicas y ninguna tiene script.** Se encontraron
> leyendo, de casualidad, mientras se hacía otra cosa. Las tres se detectan con un chequeo de
> segundos y las tres están sin barrer en 11 de los 12 cursos. Es el mismo aprendizaje de la fila 12:
> la diferencia entre «1 caso» y «el alcance real» es si alguien escribió el cruce.

> **Sobre la fila 15 — por qué un ítem de checklist no alcanzó.** La fila 13 ya pedía
> «verificar el índice contra la lista de opciones» desde el 1-sep-2026, y aun así AT-1 tenía
> el defecto en el 19 % de sus preguntas. La diferencia con las filas 1-4 es que aquellas se
> previenen con una instrucción de redacción, mientras que esta exige **una comprobación por
> ítem** sobre contenido ya escrito. Cuando un defecto solo se detecta leyendo, la regla en la
> skill previene los casos futuros pero **no encuentra los viejos**: hace falta un barrido
> explícito, curso por curso, y ese barrido todavía no se hizo en 11 de los 12 cursos.

> **Sobre la fila 12 — la lección de proceso.** Las filas 6 y 12 son el mismo defecto, y la
> diferencia entre "2 casos confirmados" y "37 casos en un solo curso" es que la primera vez se
> buscó leyendo y la segunda con un script de cruce. Cuando una auditoría de citas cambia autores,
> el daño colateral en `questions` no es una posibilidad teórica: es la regla. Corré el cruce en el
> mismo momento en que cerrás la auditoría de citas, no meses después.
>
> ⚠️ **El respaldo de un nombre puede estar en el `contexto`, no solo en `enseñanza`.** Un detector
> propio que cruzaba los apellidos del quiz **solo contra el autor de `enseñanza`** reportó un
> líder huérfano falso en `doctrina-y-convenios-2` y lo sostuvo durante tres bloques de trabajo: el
> `contexto` de esa lección narraba la historia de B. H. Roberts entera, así que el alumno sí tenía
> de dónde sacar la respuesta —que es justamente lo que esta fila protege—. Corregido cruzando
> también contra `contexto` y `conclusion`, y revalidado en las dos direcciones: los 11 casos de
> prueba siguen pasando y el detector sigue encontrando 17 lecciones con casos reales en
> `religion-200`. **`audit-autores-quiz.ts` tiene el mismo alcance limitado**, así que sus banderas
> hay que confirmarlas leyendo la lección completa, no solo su sección `enseñanza`.

| 26 | **Quiz corrido una posición entre lecciones vecinas.** Tres lecciones consecutivas del manifiesto tenían el quiz de la lección siguiente, y la última quedaba con `questionCount: 0` | Sesión de cierre de `libro-de-mormon-1` (7-sep-2026), al cruzar las referencias de Escritura del quiz contra las de su propia lección | 3 lecciones en LdM-1 (`aprender-espiritu`, `aprender-por-fe`, `conocimiento-espiritual-1`). **Sin barrer en los otros 11 cursos** | Desconocida; el patrón (un corrimiento de índice dentro de una semana) apunta a una reconstrucción del manifiesto que no arrastró los `questions` | ❌ Sin regla ni script. **El cruce es barato y debería industrializarse**: extraer las referencias `Libro cap:vers` del texto del quiz y compararlas contra `escrituras.citas[].referencia` de esa lección; si la mayoría son ajenas, el quiz no es de ahí. Detecta también el caso más grave —un alumno evaluado sobre doctrina que su lección nunca enseñó— |
| 27 | **El defecto espejo del sesgo de longitud: la correcta pasa a ser siempre la más CORTA** | idem, al corregir la fila 23 en el primer lote | 42 preguntas llevadas de 100 % «más larga» a **52 % «más corta»** en una sola pasada | Corregir la fila 23 recortando la correcta todo lo posible. El catálogo mide una sola dirección, así que el chequeo daba «✓» mientras se construía el sesgo inverso | ✅ Criterio nuevo: **la correcta se lleva a la 2ª o 3ª posición de longitud**, apuntando al punto medio entre el primer y el segundo distractor, y el chequeo de salida mide **las dos** direcciones. El objetivo no es 0 % sino acercarse al 25 % del azar. Se dejan hasta 2 por lección, eligiendo las de margen de 1 o 2 caracteres, que son invisibles a ojo |
| 28 | **`audit-links-citas.ts` da falso positivo en páginas de manual**: reporta «no resuelve a un discurso» para links correctos | idem | 3 de 104 citas en LdM-1; afecta a **toda cita que apunte a una página de manual** en vez de a un discurso, que es la práctica que la propia skill recomienda para libros impresos | Las páginas de manual **no traen campo `canonical`**; con el campo vacío, la comparación del script contra el slug pedido falla y reporta una redirección inexistente | ❌ Sin corregir. El arreglo es de una línea: si no hay `canonical`, comparar el `uri` devuelto contra el pedido, como ya hace `audit-chapterurls.ts` |
| 29 | **`audit-chapterurls.ts` da falso positivo en cursos cuyos `id` no son `leccion-N`** | idem, en el barrido de partida de LdM-1 | **83 de 91 lecciones** reportadas como «desalineadas»; las 83 eran falso positivo | El script saca el número de lección del `id` con `id.match(/(\d+)/)`. En cursos con `id` basado en Escritura (`alma-17`) eso devuelve el capítulo, y lo busca como «Lección 17» en una página que no se numera así | ❌ Sin corregir. **La columna que sí vale de ese script es «rotas»**, que en LdM-1 dio 0 de 91. Si el `id` no tiene forma `leccion-N`, el chequeo de número debería saltearse en vez de reportar |

| 30 | **Sobrecorregir la fila 27: llevar el sesgo de longitud a 0 % en las dos direcciones también es un sesgo** | Cierre de `doctrina-y-convenios-2` (8-sep-2026), al medir el ranking completo en vez de solo los extremos | **336 de 336 preguntas** del curso con la correcta en una posición intermedia (0 % más larga, 0 % más corta). Descartar los dos extremos y elegir entre los dos del medio acertaba el **50 %**, el doble del azar | La fila 27 mide dos números —«más larga» y «más corta»— y los dos daban ✓ en cero. Pero con 4 opciones el azar reparte 25 % en cada una de las **cuatro** posiciones, y forzar el 100 % a las dos del medio crea una heurística nueva, más fácil de explotar que la original | ✅ **Criterio nuevo: medir el ranking de las cuatro posiciones, no solo los extremos**, y apuntar a ~25/25/25/25 respetando el tope de la fila 27 (máximo 2 por lección y por dirección). Estado final de DyC-2 tras rebalancear: **16 % · 33 % · 40 % · 14 %**, con la mejor heurística de longitud en 36 % (era 85 % al empezar el curso, 50 % al sobrecorregir) |
| 31 | **Un script que edita texto a escala necesita su propio barrido de salida** | idem, al rebalancear las longitudes por sustitución automática de sinónimos | **12 artefactos en 134 ediciones (9 %)**, dos de ellos en opciones **correctas** | Las sustituciones que terminan en preposición chocan con la contracción del español —«para el» → «a fin de **el**», «hacia el» → «en dirección a **el**»—; otras rompen la frase o cambian el sentido: «dar gracias» → «**proporcionar** gracias», «es decir» → «**resulta ser** decir», «antes de» → «**previamente de**», «sobre la tierra» → «**en cuanto a** la tierra». **El chequeo de longitudes daba ✓ mientras el español se rompía** | ✅ Barrido de patrones agramaticales sobre el resultado, corrido hasta dar 0. Se eliminaron del diccionario los ~12 pares culpables, incluido `es → resulta ser`, que solo producía texto forzado: sus 20 apariciones se revirtieron en bloque. **Regla general: toda edición masiva de texto necesita un chequeo de salida distinto del que la motivó** |
| 32 | **Cita de líder ajena al tema de la lección** | idem, leyendo `doctrina-y-convenios-126` durante el lote 3 | 1 caso confirmado en 50 citas de DyC-2; **sin buscar en los otros 11 cursos** | La lección trata sobre Brigham Young y el mandato de velar por su familia, y su única `enseñanza` era del presidente Nelson **sobre el bautismo por los muertos** — el tema de otra lección del mismo curso. La cita es genuina, textual y bien atribuida: el problema es de **pertinencia**, no de fidelidad | ⚠️ **Ningún script lo detecta.** `extract-citas.ts` no levanta bandera (autor, fuente, texto y link correctos), `audit-autores-quiz.ts` da 0 y `audit-completitud.ts` la cuenta como «lección con cita de líder». Se encuentra leyendo. Se corrigió con una cita de Brigham Young que trae el manual de la propia lección, que es el método de `seminary-audit` §2 |
| 33 | **Pregunta de quiz que atribuye a un líder la cita de otro** | idem, leyendo el quiz de `eval-a-tu-aprendizaje-8` en el lote 8 | 1 caso confirmado en 336 preguntas de DyC-2; **sin buscar en los otros 11 cursos** | La pregunta citaba al élder Cook una frase que es de Uchtdorf y que está en el manual de **otra lección** (`doctrina-y-convenios-112`). Como el apellido coincide con el autor de la `enseñanza` de esa lección —pero de otro discurso—, `audit-autores-quiz.ts` no levanta bandera | ⚠️ Es el primo del defecto de «versículo equivocado» que cerró DyC-1 (fila 15 de la bitácora), aplicado a citas de líder: **el autor está bien y el texto es de otro**. Solo se encuentra leyendo el quiz completo, que hay que abrir de todos modos por el sesgo de longitud |
| 34 | **El diccionario de sinónimos de `rebalance.js` rompe el español** | Cierre de `libro-de-mormon-1` (8-sep-2026), revisando la salida en contexto antes de aplicarla | **19 pares** del diccionario. Los peores: `todos` → `la totalidad de` («Que **la totalidad de** serían salvos»), `sobre todo` → `principalmente` («Ser rey **principalmente** el pueblo»), `uno` → `una persona` («no de **una persona** mismo»), `siempre` → `en todos los casos` (rompe una frase de 2 Nefi 32:9), `personas` → `gente` (rompe la concordancia) | Los pares se eligieron por longitud, no por función gramatical: fallan cuando la palabra es pronombre y no determinante, o cuando cae dentro de una cita de Escritura | ✅ **Los 19 están sacados de `rebalance.js` y de `pares.js`** en el scratchpad de esa sesión. ⚠️ Copiar esas herramientas desde una sesión anterior los reintroduce: verificar el md5 antes de usarlas |
| 35 | **`rebalance.js` edita opciones correctas pese a que su cabecera declara que no lo hace** | idem | **48 de las 132 operaciones** de la primera corrida tocaban correctas, y **~40 % de esas rompían el texto** — muy por encima del 9 % que midió DyC-2 | Dos ramas del script alargan la correcta cuando no alcanza con acortar distractores | ✅ **Decisión tomada: filtrar todas las operaciones que tocan la correcta antes de aplicar.** En este proyecto una opción correcta mal editada es el peor defecto posible: es la respuesta oficial. El filtro cuesta alcance (132 → 76 ops) y se compensa con micro-ajustes a mano |
| 36 | **Cerrar una sola posición del ranking construye un sesgo nuevo, más fuerte que el original** | idem, al terminar el bloque 11 | LdM-1 pasó de 63 % en la 1ª posición a **6 %**, pero la 2ª subió de 16 % a **49 %**: la mejor heurística seguía en 49 %, y costó **una pasada global entera de reparación** (164 operaciones) | `elegir.js` toma `textos.find(t => t.length > min && t.length < max)`, o sea **el primer candidato válido**. Escribiendo los candidatos de más largo a más corto elige siempre el más largo, que cae pegado al distractor mayor: posición 2. Invertir el orden movió masa a la 3ª pero la 2ª siguió subiendo | ✅ **Repartir las cuatro posiciones desde el primer bloque, no al final.** El objetivo no es minimizar la 1ª: es repartir. `elegir2.js` (scratchpad de LdM-2) elige el candidato de la posición **concreta** que pide cada caso, en vez del primero válido |
| 37 | **El primer detector de artefactos daba cientos de falsos positivos** | idem | Reportaba «espacio antes de puntuación» en textos que no lo tenían | El `\b` de JS no cierra sobre vocales acentuadas: es el mismo bug de la fila 25, en otro detector | ✅ Reescrito con **14 patrones y 20 casos de prueba** (14 positivos + 6 negativos), con lookarounds sobre una clase explícita de letras españolas. Barrido final: **0 artefactos** en LdM-1 y en LdM-2. **Regla de proceso: un detector nuevo se estrena verificando a mano uno de los casos que reporta** |
| 38 | **Cita de Escritura fabricada, arrastrada fuera del bloque `escrituras`** | Cierre de `libro-de-mormon-2` (8-sep-2026) | «Pero he aquí, si os arrepentís, todo esto os será devuelto», atribuida a **Helamán 13:17**, no existe en ese capítulo. Estaba en **11 posiciones** de 2 lecciones: 2 en `escrituras`, 1 en un `contexto` **entre comillas**, 7 en `questions` —una preguntaba literalmente «¿qué promesa hace Samuel en el versículo 17?»— y 1 en la pregunta de escudriñar de un `cuestionario` | `audit-escrituras.ts` solo mira `secciones[].citas[]`. Las otras nueve posiciones no las ve ningún script | ⚠️ **La regla de `seminary-enrichment` que manda revisar `cuestionario` y `questions` al cambiar una cita tiene que incluir el `contexto`**, que es donde estaba la peor: presentada como cita textual. Chequeo barato: al corregir una referencia, hacer `grep` de la referencia vieja **y** de una frase distintiva del texto viejo sobre el curso entero |
| 39 | **`rescan-ventana-ancha.ts --write` puede crear citas superpuestas** | idem | **4 de sus 7 propuestas** de ampliación: tres anidadas dentro de la misma en `leccion-28-5` (13:30→13:30–38, 13:31→13:31–38, 13:33→13:33–38) y una en `leccion-29-4` que se tragaba el Helamán 5:12 ya presente en el bloque | El script amplía el rango al pasaje que mejor puntúa, sin mirar las otras citas del mismo bloque | ❌ Sin corregir. **Debería rechazar una ampliación que quede conteniendo otra cita del bloque**; el cruce de rangos ya está escrito en `inv.js`. Es la fila 31 en su forma más concreta: el chequeo que motiva la edición no puede ver lo que la edición rompe |
| 40 | **`fix-escrituras.ts` reintroduce el espacio antes de la puntuación de la fila 22** | idem | Las 4 propuestas `AUTO_CORREGIBLE` del curso (`vivieron ,`, `vivirán ,`, `fundamento ,`) | Copia el párrafo extraído del HTML sin limpiarlo, que es justo el artefacto que la fila 22 documenta | ❌ Sin corregir. Arreglo de una línea: aplicar `.replace(/\s+([,;:.])/g, '$1')` a `propuesta.texto` antes de escribir |
| 41 | **Ampliar una cita puntual a un rango de resumen puede deformar el texto sin que se note** | idem, `leccion-27-5` | 1 caso confirmado: la lección citaba «te doy poder para que declares **ayunos** a este pueblo» bajo Helamán 10:11–16; el original (10:6) dice «herirás la tierra con **hambre**» | Una paráfrasis vieja convirtió la plaga en la práctica religiosa. El comparador por recall no lo distingue porque el resto del vocabulario coincide | ⚠️ Solo se encuentra leyendo el versículo real al lado del guardado. Refuerza la regla de §4 de `COMO-AUDITAR-ESCRITURAS.md`: **nunca restituir de memoria, y mirar el texto real, no solo el recall** |
| 42 | **Tres falsos positivos nuevos de scripts de auditoría** | idem | `audit-links-citas.ts`: (a) reporta el **mismo destino ajeno para tres links de manual distintos** (`23-4`, `29-5`, `31-1`, los tres «REDIRIGEN» a `.../ezra-taft-benson/chapter-18-beware-of-pride`), cuando los tres `canonicalUrl` que devuelve la API coinciden con el archivo y los párrafos anclados contienen la cita literal; (b) da «sin ancla» a `#p_yTg1D`. `dup-q.js`: 2 pares en `leccion-25-1` | (a) parece bug de clave de caché o de variable de bucle; (b) los discursos de Conferencia desde 2024 usan ids de párrafo con hash, no `pN`, y el patrón `#p\d+` no los reconoce; (c) en una lección de repaso la respuesta correcta **es** una referencia, así que cualquier pregunta de aplicación que nombre un pasaje empareja al 100 % con la de recuerdo que los lista | ❌ Sin corregir. Sumar a la lista de falsos positivos conocidos junto con las filas 28 y 29, para no perseguirlos en el próximo cierre |
| 43 | **Un destacado de discurso no es el párrafo del discurso** | idem, `leccion-26-7` | 1 de 73 citas de líder | El `texto` guardado coincidía **exactamente** con el *pull-quote* (`p_m26AD`), que corta la oración a la mitad; el párrafo del cuerpo (`p_yTg1D`) la trae completa. `fix-anclas-citas.ts` ancló al destacado porque el recall daba 1.00 | ⚠️ Cuando dos párrafos empatan en recall, **preferir el del cuerpo sobre el destacado**. Se detecta porque el texto guardado termina sin cerrar la idea |

> **Sobre las filas 27 a 29 — el instrumento falló tres veces en una sola sesión.** Además de las dos
> del catálogo, un detector escrito en la propia sesión (líderes huérfanos) necesitó **tres pasadas**
> antes de dar el número bueno: primero cortaba el nombre de pila («presidente Russell» por «Russell
> M. Nelson») y la corrección introdujo un falso negativo propio, porque `[ÉE]lder` no matchea
> «élder» en minúscula. Los números fueron 27 → 10 → 22. Es la fila 25 repitiéndose: **antes de
> corregir contenido por lo que dice un script, verificá a mano uno de los casos que reporta.**

> **Sobre la fila 26 — el defecto más grave no lo encuentra ningún chequeo de forma.** Las tres
> lecciones pasaban `audit-completitud.ts` con 7 × 4 y `validate-content.ts` sin una queja: el quiz
> estaba bien formado, solo que era de otra lección. Se destapó leyendo una pregunta que citaba a un
> líder ausente (fila 12) y tirando del hilo. La regla de proceso, otra vez: **cuando encontrás algo
> leyendo, escribí el cruce antes de decidir si vale la pena corregirlo.**

---

| 44 | **Un `véase` delante de la referencia marca una paráfrasis del manual, no una cita textual** | Cierre de `religion-301` (9-sep-2026) | El manual de Instituto atribuye a Nelson la idea del «bufé de la obediencia» con `(véase «Afrontar el futuro con fe», Liahona, mayo de 2011)`. Al bajar el discurso, **la frase no aparece**: el manual está resumiendo, no citando | Se copió del manual una frase que el manual mismo marcaba como adaptación | ✅ Antes de copiar una cita del manual, mirar si la referencia empieza con *véase*. Si empieza, hay que ir al discurso y tomar el texto de ahí — o descartarla, como se hizo acá |
| 45 | **Un número de nota al pie pegado al texto rompe la verificación de una cita que sí es textual** | idem, `r301-l14` | La cita de Nelson salía «no verificable» siendo literal: el discurso trae `"por la buena palabra de Dios" 20` y el número de la nota queda dentro del texto normalizado, cortando la sonda en dos | `verificar-citas.js` normaliza a letras y números, así que el `20` de la nota entra en la comparación | ✅ Escribir la cita como la escribe el manual, con el corchete editorial: `«por la buena palabra de Dios» [Moroni 6:4]`. La sonda parte ahí y la cita verifica. Es la fila 12 (marcar las omisiones con `[…]`) aplicada a un caso que no parece una omisión |
| 46 | **Al restituir el texto de un pasaje hay que releer su `comentario`** | idem, barrido de los 26 comentarios del curso | **34 de 44 frases entrecomilladas** en los comentarios no estaban en su propio pasaje. Casi todas por el nombre divino: el comentario decía «el Señor» donde la Escritura SUD dice «Jehová» («yo y mi casa serviremos **al Señor**» / «**a Jehová**»); otras por redacción («Soy tardío en el hablar» por «soy tardo en el habla») | Los comentarios se escribieron contra los textos **anteriores**, que eran paráfrasis redactadas con el mismo criterio: comentario y versículo concordaban entre sí y los dos estaban mal. Restituir el pasaje deja la discrepancia a la vista | ✅ **Ningún chequeo del proyecto lo detecta**, porque las dos piezas son válidas por separado y lo que falla es la correspondencia. Al reemplazar el texto de una cita, verificar cada frase entrecomillada de su comentario contra el texto nuevo (`coment-vs-texto.js`). Criterio de fondo: en el contenido propio se puede escribir «el Señor», pero **dentro de comillas va lo que la Escritura dice** |
| 47 | **Mezclar voseo y tuteo en el contenido propio, a veces en la misma oración** | idem, barrido del curso entero | **52 formas voseantes en 19 de las 25 lecciones**, introducidas al escribir contextos, reflexiones y quiz. Lo peor eran las mezclas internas: «**Elige** una situación concreta de esta semana y **llevala** al Señor», «**Escribí** la pregunta … y **llevala** esta semana» | El material oficial de la Iglesia en español usa siempre «tú», y el curso original lo respetaba: medido sobre la versión commiteada, **0 formas voseantes**. Las 52 son de la tanda de generación | ✅ Barrer con `voseo.js` al cerrar una tanda. **Dos trampas al escribir el detector:** `` no sirve —«í» no es carácter de palabra en JS, así que `hací` parte «hacía»— y hay que listar **solo** la forma acentuada: incluir «anota» junto a «anotá» marca como error el imperativo de tú, que es lo correcto. La primera versión daba 226 hits, casi todos falsos |
| 48 | **Las auditorías miraban 533 de 581 lecciones sin decirlo** | idem | `audit-doctrinal.ts` y `audit-completitud.ts` hacían `continue` sobre la convención `resumen`: `religion-225` entera no aparecía en el ranking doctrinal y de `religion-301` se medían 5 de 25 | La spec de la convención `resumen` existía desde el 8-sep pero vivía solo en el scratchpad (`evaluar.js`, `inv.js`), así que el cierre de un curso con esa convención no era reproducible | ✅ `scripts/normalizar-resumen.ts` lleva los bloques a la forma clásica y lo importan los dos scripts. Al medirlas, las 48 lecciones que faltaban dieron limpio. **Regla de proceso: una spec que solo vive en el scratchpad no cierra nada** — mientras no esté en `scripts/`, el cierre depende de quién tenga la carpeta temporal |
| 49 | **Un rótulo de métrica que promete más de lo que mide** | idem | La línea «…y además dice algo de Él» de `audit-doctrinal.ts` medía `NOMBRE && SUSTANCIA` **solo dentro del `contexto`**, mientras que el criterio con el que el mismo script marca `SOLO NOMBRADO` mira `contexto + conclusión`. Daba 0 % en cursos donde ninguna lección estaba listada como «solo nombrada» | Dos criterios distintos para la misma idea dentro del mismo archivo | ⚠️ Corregido, pero **el cambio sube el porcentaje de sustancia de todos los cursos sin que el contenido haya cambiado** (`religion-200` de 29 % a 100 %; el total de 77 % a 99 %). El reporte conserva las dos líneas para no romper la comparación con la línea de base del 6-sep. **Al corregir una métrica, conservar la vieja mientras haya una serie histórica que dependa de ella** |

## 2. Por qué la fila 10 es distinta de las demás

Las filas 1–9 son defectos de **redacción**: la regla que faltaba, agregada, resuelve el problema
en la próxima generación casi con certeza — son patrones mecánicos (una fórmula repetida, una
concordancia, un ancla a contenido inexistente) que una instrucción explícita en `SKILL.md`
previene de forma directa.

La fila 10 (citas fabricadas) es distinta: la regla "nunca inventés, siempre verificá con
`web_search`" **ya estaba** en la skill antes de que R250/DyC-1/R301 se generaran con 20-30% de
citas inventadas. El defecto no fue de redacción de la skill, fue de **disciplina de ejecución**
dentro de una sesión de generación — la tentación de completar una cita "de memoria" cuando la
búsqueda no da resultado inmediato. Ninguna regla nueva en `SKILL.md` cierra ese tipo de falla por
sí sola; lo que ayuda es el hábito de auditar (`audit-escrituras.ts`, `extract-citas.ts`) **al
final de cada tanda de generación**, no meses después — ver el flujo de la sección siguiente.

---

## 3. Flujo recomendado para que un hallazgo se cierre rápido

### Al generar contenido nuevo (`seminary-enrichment`)

1. Antes de arrancar una tanda grande, releé la tabla de §1 — son minutos, y evita repetir un
   defecto ya catalogado.
2. Al cerrar una tanda (aunque sea de 3–5 lecciones), corré el chequeo mecánico que corresponda
   sobre esas lecciones puntuales, no esperes a una sesión de auditoría separada:
   ```bash
   npx tsx scripts/audit-completitud.ts <categoria> --detalle   # forma y completitud
   npx tsx scripts/validate-content.ts                          # JSON bien formado
   ```
   Si la tanda incluyó citas nuevas de líder o de Escritura, corré también `extract-citas.ts` o
   `audit-escrituras.ts` sobre esa categoría antes de dar la tanda por cerrada.
3. Detectar un defecto sobre 5 lecciones cuesta minutos. Detectarlo sobre 66 lecciones (como pasó
   con la muletilla) cuesta una sesión entera de corrección retroactiva. Auditar en el momento es
   lo que hace "eficiente" a todo el proceso, no el atajo de saltear el chequeo.

### Al auditar y encontrar un defecto sistemático (`seminary-audit`)

1. No te limites a corregir las instancias ya escritas — preguntate si el defecto se va a repetir
   en la próxima tanda de generación si nadie toca la skill.
2. Si la respuesta es sí, agregá (o reforzá) la regla correspondiente en
   `~/.claude/skills/seminary-enrichment/SKILL.md`, en el lugar donde ya viven reglas del mismo
   tipo (la tabla de distractores, el checklist de cierre, la sección de citas de líder, etc.) —
   no la escondas en un comentario suelto.
3. Agregá una fila a la tabla de §1 de este documento, con el alcance medido (no estimado) y el
   estado de la regla. Así la próxima sesión de generación tiene el catálogo completo, y la
   próxima sesión de auditoría sabe qué ya se corrigió en la fuente.
4. Actualizá también el documento de auditoría específico del curso (`CALIDAD-<curso>.md`,
   `COMPLETITUD-<curso>.md`, o el que corresponda) con el detalle caso por caso — este archivo es
   el resumen entre skills, no reemplaza el detalle por lección.

---

## 4. Técnicas de eficiencia validadas (sesión del 31-ago-2026, Nivel 2 de `libro-de-mormon-2`)

Prácticas concretas que abarataron una auditoría de 78 lecciones / 546 preguntas de quiz sin
perder rigor:

- **Medir el alcance exacto con un script antes de tocar nada.** Un regex o un conteo en Node
  sobre los 78 archivos, en segundos, da el número real (ej. "149 preguntas de aplicación usan
  1 de 5 nombres") en vez de corregir "a ojo" y no poder verificar después si mejoró.
- **Manipular JSON con `JSON.parse`/`JSON.stringify` en un script, no con `Edit` por coincidencia
  de texto.** Los acentos y guiones largos de este corpus rompen el matching exacto de `Edit` con
  frecuencia — un script que edita el campo directamente es inmune a eso, y además deja un rastro
  reproducible (`--apply` vs. dry-run) que se puede revisar antes de escribir.
- **Cuando la corrección es "cambiar un nombre propio", preservar el género gramatical del
  nombre original evita tener que revisar concordancia.** Separar el problema en dos pools (uno
  por género) y reasignar dentro de cada pool convierte una reescritura de oración en un simple
  reemplazo de texto — cero riesgo de romper pronombres o adjetivos.
- **Verificar después con el mismo script que midió antes.** Si el script de medición dice "0
  ocurrencias" después de aplicar la corrección, no hace falta releer todo a mano para confirmar
  que funcionó — solo releer lo que el script no puede juzgar (si el reemplazo tiene sentido).
- **Frente a un costo incierto (leer 78 lecciones con criterio no es automatizable), pedirle al
  usuario que decida el alcance en vez de asumirlo.** Se ofreció "muestra representativa" vs. "las
  78 completas"; el usuario eligió un punto intermedio ("la mitad primero") que ninguna de las dos
  opciones ofrecidas contemplaba explícitamente — la pregunta abierta permitió esa respuesta.
- **Actualizar el documento de progreso por lote, no solo al final.** Permite cortar la sesión en
  cualquier punto sin perder el trabajo ya verificado, y da visibilidad real de avance en vez de
  "está en progreso" sin más detalle.

---

## 5. Estado de este documento

Creado el 31-ago-2026, a partir de la segunda pasada de Nivel 2 (calidad) de `libro-de-mormon-2` —
ver `CALIDAD-libro-de-mormon-2.md` para el detalle lección por lección de donde salieron las filas
5–8 de la tabla. Las filas 1–2 y 9–10 ya estaban documentadas en sesiones anteriores; se
consolidan acá por primera vez en una sola tabla generación↔auditoría.

Actualizalo cada vez que una auditoría (de cualquiera de los tres tipos) encuentre un defecto que
se pueda prevenir agregando o reforzando una regla en `seminary-enrichment/SKILL.md` — es lo que
mantiene cerrado el círculo entre generar y auditar.

**Ampliado el 4-sep-2026** con las filas 18-22, salidas de la auditoría de registro de escritura de
`libro-de-mormon-2` ([`CALIDAD-contexto-libro-de-mormon-2.md`](CALIDAD-contexto-libro-de-mormon-2.md)).
Esa tanda trajo una categoría que antes no estaba en el catálogo: **defectos de la skill como
documento**, no de las reglas que enuncia. Las filas 20 y la nota de la tabla de arriba son de ese
tipo — una advertencia técnica que quedó desactualizada y un directorio `references/` que se cita
pero no existe. Conviene revisarlos con la misma frecuencia que las reglas: una instrucción que
describe mal el entorno hace más daño que una que falta, porque autoriza a hacer lo incorrecto.

⚠️ **Ninguna de las filas 18-22 tiene todavía su corrección aplicada en `SKILL.md`.** Están
documentadas, no cerradas.

**Ampliado el 8-sep-2026** con las filas 30-33, salidas del cierre de `doctrina-y-convenios-2`
([`BITACORA-doctrina-y-convenios-2.md`](BITACORA-doctrina-y-convenios-2.md)). Traen dos categorías
nuevas:

- **La corrección de un defecto puede generar otro peor de ver.** La fila 30 es la fila 27 llevada
  demasiado lejos: el chequeo daba ✓ en las dos direcciones que medía, mientras se construía un
  tercer sesgo que ninguna de las dos veía. **Cuando corrijas un sesgo, medí la distribución
  completa, no los dos extremos que te motivaron a corregirlo.**
- **Un script que edita contenido necesita auditarse como contenido.** La fila 31 es la fila 25
  aplicada a un editor en vez de a un medidor: un 9 % de las ediciones automáticas rompió el
  español, y el chequeo que las guiaba —longitudes— no podía verlo. Es la tercera vez que el
  catálogo registra que el instrumento falló; la diferencia es que acá el instrumento **escribía**.

Las filas 32 y 33 son las dos caras de un mismo hueco: **la pertinencia de una cita no la mide
ningún script**. Que el autor exista, que el texto sea textual y que el link resuelva no garantiza
que la cita sea *de esa lección*. Se encuentran leyendo, y conviene buscarlas en la misma pasada en
que se abre el quiz por el sesgo de longitud.

> **Sobre las filas 38 a 43 — el cierre de `libro-de-mormon-2` (8-sep-2026) encontró más defectos
> en el instrumental que en el contenido.** De las 560 preguntas del curso, leídas una por una con
> el método de la fila 15, **ninguna** tenía la `correctAnswer` apuntando a un distractor (en LdM-1
> fueron 3 de 637 y en AT-1 el 19 %). En cambio, tres de los scripts del proyecto habrían hecho daño
> si se los corría a ciegas (filas 39, 40 y 43) y otro reportó cinco falsos positivos (fila 42). Es
> la fila 25 por quinta vez: **antes de corregir contenido por lo que dice un script, verificá a
> mano uno de los casos que reporta — y antes de aplicar su `--write`, leé lo que propone.**
