# Auditoría de citas de Escritura — Doctrina y Convenios 1

Primera auditoría del corpus de **referencias de Escritura** (secciones `tipo: "escrituras"`,
campo `citas` con `referencia`/`texto`/`link`), distinta de la auditoría de **citas de líderes**
(`tipo: "enseñanza"`) documentada en los demás archivos de esta carpeta. Verifica una sola cosa
por cada cita: que el `texto` guardado coincida con el versículo real que señala el `link`.

> Esta primera pasada se hizo entera a mano, cita por cita. Después se convirtió el método en
> dos scripts reutilizables (`scripts/audit-escrituras.ts` y `scripts/fix-escrituras.ts`) para
> que la próxima auditoría de este tipo no cueste lo mismo — ver
> [`COMO-AUDITAR-ESCRITURAS.md`](COMO-AUDITAR-ESCRITURAS.md).

**Fecha:** 29 de agosto de 2026
**Alcance:** `doctrina-y-convenios-1` (91 lecciones con material, 196 citas de escritura).
`doctrina-y-convenios-2` queda fuera: sus 54 lecciones tienen `secciones: []` — no tienen
material de repaso todavía, solo preguntas de quiz.
**Estado:** ✅ cerrado. 196 de 196 citas verificadas contra el texto real del sitio.

---

## 1. Método

A diferencia de las citas de líderes (donde primero hay que encontrar el discurso), acá el
`link` ya existía en el 100% de los casos — el trabajo fue puramente de **fidelidad textual**.

1. Se extrajeron las 196 citas con su archivo, referencia, texto y link.
2. Se descargaron las 176 páginas de capítulo únicas que señalan esos links (con pausa entre
   pedidos por los 503 intermitentes del sitio, igual que en las auditorías anteriores).
3. Se extrajo el párrafo `<p id="pN">` que indica el ancla de cada link y se comparó contra el
   `texto` guardado: primero por contención literal de cada segmento (partiendo el texto por
   elipsis `…`), y si eso fallaba, por recall de palabras significativas (qué fracción de las
   palabras del texto guardado aparece en el párrafo real) — esta segunda métrica fue necesaria
   porque muchas citas transcriben solo una frase dentro de un versículo largo, y una métrica de
   similitud simple (Jaccard) las marca como error por el solo hecho de que el original tiene más
   texto que el citado.
4. Para las citas marcadas, se buscó el texto en **todo el capítulo** (no solo el párrafo
   anclado), con ventanas de 1 a 3 párrafos consecutivos, para distinguir "el link apunta a un
   párrafo vecino" de "el texto no está en ese capítulo en absoluto".
5. Cada corrección final se verificó descargando el versículo real y comparándolo palabra por
   palabra antes de escribirlo — igual que exige `seminary-enrichment` para las citas de líder:
   nunca restituir texto de memoria.

## 2. Resultado de la primera pasada automática

| Estado | Citas |
|---|---:|
| Exacto | 10 |
| Diferencia menor (puntuación/tildes) | 10 |
| Revisar (coincidencia parcial) | 36 |
| **Discrepancia** (el texto no coincide con el párrafo del link) | **138** |
| Sin ancla | 2 |

De las 174 con problema, la búsqueda en todo el capítulo separó:

| | Citas |
|---|---:|
| Ancla incompleta (el texto es real, pero abarca un párrafo más de lo anclado) | 7 |
| El propio ancla ya era el mejor candidato (paráfrasis fuerte del lugar correcto) | 16 |
| El texto no aparece en ningún párrafo razonable del capítulo citado | 151 |

**Ninguna cita resultó ser de un libro o capítulo equivocado.** Las 174 correspondían todas al
capítulo correcto — el problema era que el `texto` guardado era una paráfrasis, una síntesis
de varios versículos combinados sin marcarlo, o (en un puñado de casos) no correspondía en
absoluto al versículo que el propio `link` y `referencia` señalaban.

## 3. Qué tipo de error apareció

### 3.1 Paráfrasis del versículo correcto (la mayoría)

El caso típico: el link y la referencia son correctos, pero el texto fue reescrito o
simplificado en vez de copiado literalmente. Ejemplos:

- **D&C 64:33** — «No os canséis de hacer **el bien**» → el original dice «hacer **lo bueno**».
- **D&C 41:11** — «es **como** Natanael **de antaño**» → el original dice «es **semejante a**
  Natanael **de la antigüedad**».
- **Juan 20:27–28** — «acerca **tu mano, y métela** en mi costado» → el original dice «acerca
  **acá tu mano y ponla** en mi costado».

### 3.2 Referencia o ancla que no corresponde al texto citado

Un grupo más serio: el `texto` no está en el rango de versículos que declara la `referencia`.

- **D&C 78:13–14** (`181-fe-autosuficiencia.json`) — el texto guardado («si no sois iguales en
  los bienes terrenales…») es en realidad **D&C 78:6**; la segunda mitad de la cita («que mi
  pueblo no sea dependiente…») es una paráfrasis libre de **D&C 78:14**. Se corrigió la
  referencia a **«78:6, 14»** con ancla `id=p6,p14`.
- **D&C 59:9–10** (`73-dc-59.json`) — el texto es real y estaba bien transcrito, pero
  correspondía a **D&C 59:12–13**, no a los versículos 9–10. Se corrigió la referencia y el
  ancla; el texto no necesitó cambios.
- **D&C 21:5** (`170-preparar-conferencia-general.json`) — el texto («las puertas del infierno
  no prevalecerán…») es **D&C 21:6**, no el 5. Se amplió a **«21:5–6»**.

### 3.3 Contenido que no aparece en ningún lado del capítulo

El hallazgo más serio: un puñado de citas con contenido que no corresponde a ninguna parte real
del capítulo citado, ni siquiera parafraseado.

- **D&C 64:23** (`78-dc-64-20-43.json`) — el archivo decía «ahora se llama el día del **ayuno**;
  por tanto, **ayunad y orad**…». El versículo real es sobre el **diezmo**: «ahora se llama hoy
  hasta la venida del Hijo del Hombre… es un día de sacrificio y de requerir **el diezmo** de mi
  pueblo, porque el que es diezmado no será quemado en su venida.» No es una variante de
  traducción: es el tema equivocado.
- **D&C 19:34–35** (`33-dc-19-25-41.json`) — el archivo citaba «Con el Espíritu del Señor posees
  todas las cosas…», frase que **no existe en ningún párrafo de D&C 19** (se comprobó contra los
  41 párrafos del capítulo). Los versículos reales tratan sobre pagar la deuda con el impresor:
  «Da una parte de tus bienes… Paga la deuda que has contraído con el impresor.» — de hecho un
  mejor encaje con el contexto de Martín Harris que ya describe la lección.
- **D&C 23:1** (`38-dc-23-24.json`) — el archivo unía a Oliver **y a Hyrum** en una sola cita
  («hablo a ti, Oliver, y también a ti, Hyrum…»), pero el versículo 1 real solo le habla a
  Oliver; la mención de Hyrum pertenece al versículo 3, dirigido a él por separado.
- **D&C 20:79** — la oración sacramental guardada decía «bendigas y santifiques esta **agua**»;
  el texto canónico del versículo dice **«vino»** (la sustitución por agua es una práctica
  posterior, no un cambio en el texto de la Escritura). Se restituyó el texto literal.

### 3.4 Ancla incompleta (7 casos, el único grupo puramente mecánico)

Verificados a mano uno por uno: ninguno necesitaba en realidad extender el ancla — el versículo
único ya contenía casi todo el texto citado, con paráfrasis menor. Se corrigió solo el texto,
sin tocar el link, en Juan 7:17, Éter 12:27, D&C 41:11, D&C 49:24, D&C 68:28 y D&C 64:33
(citado en dos lecciones).

## 4. Estado final

| Métrica | Antes | Después |
|---|---:|---:|
| Citas verificadas | 196 | **196** |
| Coincidencia exacta con el párrafo anclado | 10 | **99** |
| Coincidencia con diferencias solo de puntuación | 10 | **94** ¹ |
| Discrepancia de contenido | 138 | **0** |
| Cita con reference/ancla incorrecta | — | **0** |
| Citas modificadas en total | — | **174** (167 de fondo + 7 de ancla incompleta) |
| Archivos `.json` tocados | — | **90** |

¹ El comparador exige coincidencia de subcadena exacta para marcar "exacto"; estos 94 casos
tienen **recall de palabras = 1.0** (el 100% de las palabras del texto guardado aparece en el
párrafo real) y solo difieren en un signo de puntuación o mayúscula que el comparador no
normaliza — no son discrepancias de contenido.

**Ninguna corrección se redactó de memoria.** Cada una se verificó descargando el párrafo real
del sitio (`churchofjesuschrist.org/study/scriptures/...`) y comparándolo antes de escribirse,
siguiendo la misma disciplina que exige `seminary-enrichment` y que ya había costado caro
saltarse en la auditoría de citas de líderes (§6 de `AUDITORIA-citas-libro-de-mormon.md`).

## 5. Fuera de alcance / próximos pasos

- **`doctrina-y-convenios-2`** no tiene ninguna cita de escritura que auditar todavía: sus 54
  lecciones no tienen material de repaso (`secciones: []`), solo preguntas de quiz.
  **(Actualizado 1-sep-2026: ya tiene material y quedó cerrado, 162/162.)**
- Esta auditoría cubre **196 de las ~1207 referencias de Escritura** relevadas en todo el
  proyecto (ver `docs/ESTADO.md`, sección "Lo que queda fuera del alcance actual"). El resto —
  Libro de Mormón, Antiguo/Nuevo Testamento, Religión 200/225/250/301 — no está tocado.
  **(Actualizado 4-sep-2026: el corpus real son 1503 referencias, de las cuales 1291 están
  auditadas; lo que sigue sin tocar son R301, R250, R225, más lo que falta de AT-1 y R200 — ver
  `../ESTADO.md`. El recuento del 2-sep decía 1619 y contaba 116 referencias que viven en archivos
  huérfanos, entre ellas las 68 que se le atribuían a la reconstrucción de LdM-2, un curso que en
  realidad está cerrado — ver `PLAN-DE-AUDITORIA.md` §1.5.)**
- El método (descarga + comparación por recall de palabras + búsqueda en todo el capítulo) es
  reutilizable tal cual para esos cursos; a diferencia de las citas de líder, acá no hace falta
  buscar el documento — el `link` casi siempre existe, así que el trabajo es más rápido por
  cita pero igual de necesario, dado que el patrón de error dominante (paráfrasis no marcada)
  es sistemático y no algo aislado a Doctrina y Convenios.
