# Bitácora — corrección de `religion-301` (Antiguo Testamento, Instituto)

Sesión abierta el 9-sep-2026 con `docs/auditorias/PROMPT-r301.md`. El curso tiene 25 lecciones
publicadas y aparentemente completas; el trabajo es **corrección**, no generación.

## Estado al abrir (medido, no declarado)

```
lecciones que cierran los 9 frentes    0 / 25
escrituras                             87   con link: 17   (las 70 sin link son l01–l20)
citas de líder                         50   NO VERIFICABLES: 32
preguntas de quiz                     125   (5 por lección; la spec pide 7)
```

## Herramientas

Copiadas del scratchpad de la sesión de R-225 y verificadas sobre R-301 antes de usarlas.
Tres cambios propios, todos anotados dentro del archivo correspondiente:

| archivo | cambio | por qué |
|---|---|---|
| `api.js` (nuevo) | módulo compartido de la API v3, con reintento | el sitio devolvió **500 transitorio** en discursos de conferencia que responden 200 al reintentar. Sin reintento, un 500 pasajero se lee como «el discurso no existe» y termina en una cita borrada por error |
| `m.js` · `cita.js` · `cosecha.js` (nuevos) | generalizan `m225.js`/`cita225.js` a un **manual único** | el manual de Instituto de AT no tiene el par preparación/maestro de R-225. `cosecha.js` además lista solo los párrafos que cierran con una fuente entre paréntesis: son las citas reales de la lección |
| `pasaje225.js` | alias de libros no cosechados del proyecto | la **TJS del apéndice** vive en `/scriptures/jst/jst-gen/`, y ningún link del proyecto la tenía. Cada ruta se verificó contra la API antes de agregarla |
| `estirar.js` (nuevo) | dice qué **distractores** alargar para repartir los puestos de longitud | `asignar.js` calcula el puesto objetivo, pero su salida se lee como «acortá la correcta». La regla del proyecto es la contraria |

`MSYS_NO_PATHCONV=1` es obligatorio al pasarle un `uri` que empieza con `/` a un script desde
Git Bash: sin eso, MSYS lo convierte en una ruta de Windows y la API responde 500.

---

## Lote 1 — l11 a l15 (cerrado)

Las cinco cierran los nueve frentes (`patch.js --check`, `inv.js`, `frentes.js`).

### Citas: las 10 estaban inventadas, las 10 se reemplazaron

Ninguna de las diez verificaba. Los dos defectos que el prompt anticipaba aparecieron los dos:

- **Link que no resuelve a un discurso.** `r301-l11` enlazaba a
  `/liahona/2002/03/the-healing-power-of-forgiveness`, que responde 200 con el índice de la
  revista de marzo de 2002. El slug es el del discurso de Hinckley de octubre de 2005.
- **Link correcto, texto ajeno.** `r301-l14` enlazaba bien a Kearon (`2024/04/45kearon`), pero
  el texto atribuido no está en el discurso: solo la primera frase («no pone barreras ni
  obstáculos; Él los quita») es real, y el resto era redacción propia agregada detrás.

Todos los reemplazos salen del manual oficial de **su propia lección**: o del texto verbatim del
ancla del manual, o del discurso que el manual enlaza. Ningún slug se dedujo.

| lección | cita vieja (inventada) | cita nueva | de dónde salió |
|---|---|---|---|
| l11 | Holland, «El don del perdón», Liahona mar. 2002 | **Ulisses Soares**, devocional BYU–Hawái, 29-ene-2023 | ancla `p_osWPU` del manual (traducción oficial; el devocional original solo está en inglés) |
| l11 | Hinckley, «El inmenso poder del perdón» | **Neil L. Andersen**, «José Smith», Liahona nov. 2014 | discurso enlazado por el manual; párrafos `p32` y `p36`, con `[…]` marcando el salto |
| l12 | Christofferson, «Redención» | **Henry B. Eyring**, «Elévense a la altura de su llamamiento», nov. 2002 | discurso enlazado por el manual; `p17`–`p18` |
| l12 | Nelson, «Revelación para la Iglesia…» | **Russell M. Nelson**, «Cómo obtener el poder de Jesucristo en nuestra vida», may. 2017 | ancla `p_h0m8n` del manual + discurso `p18` |
| l13 | Holland, «Cual de cordero» | **Patrick Kearon**, «La intención de Dios es llevarlos a casa», may. 2024 | ancla `p_k5Hkw` del manual + discurso `p10`–`p11` |
| l13 | Ballard, «La Santa Cena y el Cordero de Dios» | **Dale G. Renlund**, «Considerad la bondad y la grandeza de Dios», may. 2020 | ancla `p_fw0CK` del manual + discurso `p2` |
| l14 | Kearon (link bueno, texto inventado) | **Patrick Kearon**, mismo discurso, texto real | discurso `p23` + `p25`, con `[…]` |
| l14 | Nelson, «No murmuréis» (no existe) | **Russell M. Nelson**, «El poder del ímpetu espiritual», may. 2022 | ancla `p_yF5BY` del manual + discurso `p40` |
| l15 | Christofferson, «Por qué el matrimonio…» | **Russell M. Nelson**, «El convenio sempiterno», oct. 2022 | ancla `p_f3kcA` del manual + discurso `p14` |
| l15 | Nelson, «La alegría y la supervivencia espiritual» | **Dallin H. Oaks**, «No tendrás dioses ajenos», nov. 2013 | ancla `p_jUzR5` del manual + discurso `p12` |

Kearon queda citado en l13 y en l14 con **párrafos distintos de un mismo discurso**; no es un
descuido: el manual oficial lo cita en las dos lecciones, cada vez sobre otra enseñanza.

**Un caso que costó y conviene recordar:** la cita de Nelson en l14 salió «no verificable» siendo
textual, porque el discurso trae un número de nota al pie pegado a una cita de Escritura
(`"por la buena palabra de Dios" 20`). Al escribirla como el manual —`[Moroni 6:4]`— el corchete
funciona como marca editorial, `verificar-citas.js` parte la sonda ahí y la cita verifica en `p40`.
Es el mismo defecto que el prompt marcaba como error nº 4 de R-225.

Dos citas quedan «verificadas sin ancla» (Eyring en l12, Kearon en l13) porque abarcan dos
párrafos consecutivos del discurso y ningún `<p id>` las contiene enteras. No se les puso `[…]`
a propósito: no hay omisión que marcar.

### Escrituras: 17 sin link → 18 con link y texto restituido

Las 17 del lote nunca se habían auditado porque no tenían `link`. Al ponérselo se confirmó lo que
el prompt anticipaba: **todas eran paráfrasis**. Crecimientos al restituir desde la API:

- Éxodo 34:6–7 · 233 → 424 car. (+82 %)
- Éxodo 3:2–6 · 420 → 648 car. (+54 %)
- Éxodo 20:2–3, 7–8 · 220 → 290 car. (+32 %)
- Génesis 45:4–5, 7–8 · 468 → 578 car. (+24 %) — el texto guardado decía «preservaros posteridad»
  donde la Escritura dice «preservaros un remanente en la tierra».

Dos cambios de referencia:

- `l12` tenía un solo bloque con **«Éxodo 3:11–12; 4:10–12»**, dos capítulos en una referencia que
  `pasaje225.js` no puede resolver. Se partió en dos bloques, cada uno con su comentario propio
  (la primera objeción de Moisés y la última). El curso pasa de 87 a 88 escrituras.
- `l11` citaba **TJS, Génesis 50:24–25, 27–29** con un comentario que decía que ahí aparece «un
  escogido cuyo nombre será José». No aparece: el nombre está en el **versículo 33**. Se corrigió
  la referencia a **50:27–29, 33** y se reescribió el comentario.

### Contexto, reflexión y quiz

- Contexto: los cinco estaban entre 112 y 123 palabras (la spec pide 150–340). Se agregó un
  segundo párrafo de apertura a cada uno; quedaron entre 211 y 234.
- Reflexión: de 4 preguntas a 6 en las cinco, con la de escudriñar en posición 3 (nombra la
  referencia exacta del propio bloque `escrituras`) y al menos una que invita a orar o anotar.
- Quiz: de 5 a 7 preguntas en las cinco; `questionCount` del manifiesto sincronizado.
- **CRISTO** cerrado en l14 (el párrafo de cierre pasó del consejo de Jetro al maná como tipo de
  Cristo, «Yo soy el pan de vida», que es lo que el manual mismo manda estudiar junto a Éxodo 16)
  y en l15 (el cierre ahora apoya en Éxodo 34:6–7 leído como retrato del Salvador).
  **SUSTANCIA** cerrado en l14 por el mismo cambio.
- Dos artefactos de redacción corregidos en l13: «los diez plaguidos» y «impressiones».

### El sesgo de longitud del quiz apareció, como estaba anunciado

Con las 35 preguntas recién escritas, **la correcta era la más larga en 29 de 35**. Se corrigió
**alargando distractores** (52 + 20 opciones reescritas en dos pasadas), nunca acortando
respuestas correctas. Reparto final del lote: 9/9/9/8 por puesto de longitud. A nivel curso,
27 % larga y 24 % corta sobre 135 preguntas.

### Verificaciones al cerrar el lote

`validate-content.ts` · `verificar-citas.js` · `inv.js` (inventario + barrido estructural) ·
`artefactos.js` · `espacio.js` · `ajeno.js` — todos limpios para l11–l15.

`validate-content.ts` reporta 4 problemas, **los cuatro ajenos a este curso**: el
`libro-de-mormon-1/_auditoria-snapshot-original.json` (array donde se espera objeto, conocido
desde el 28-ago) y tres `questionCount` desincronizados en `religion-250` (l22, l23, l24).

---

## Lote 2 — l16 a l20 (cerrado)

### Citas: 10 sin verificar → 9 verificadas y 1 bloque borrado

| lección | cita vieja | cita nueva | de dónde salió |
|---|---|---|---|
| l16 | Bednar, «Preparémonos para ir al templo» | **J. Anette Dennis**, «Vestíos del Señor Jesucristo», may. 2024 | ancla `p_e8cwK` del manual + discurso `p11` |
| l16 | Nelson, «El umbral del templo» | **L. Todd Budge**, «Dar santidad al Señor», nov. 2021 | ancla `p_ylpNO` del manual + discurso `p9` |
| l17 | Maxwell, «Mirando a Jesucristo» | **Russell M. Nelson**, «La respuesta siempre es Jesucristo», may. 2023 | ancla `p_c2SmE` del manual + discurso `p7` |
| l17 | Holland, «Sed optimistas» | **Neil L. Andersen**, «Heridos», nov. 2018 | ancla `p_g3HlA` del manual + discurso `p14` |
| l18 | Nelson, «Hagamos del hogar el centro de nuestra fe» | **Henry B. Eyring**, «¡Oh recordad, recordad!», nov. 2007 | discurso enlazado por el manual; `p23` |
| l18 | Christofferson, «El profeta viviente» | **D. Todd Christofferson**, «El primer mandamiento en primer lugar», feb. 2023 | artículo enlazado por el manual; `p38` |
| l19 | Stevenson, «Yo y mi casa serviremos al Señor» | **Russell M. Nelson**, «Cristo ha resucitado; la fe en Él moverá montes», may. 2021 | ancla `p_hyHTr` del manual + discurso `p36` |
| l19 | Benson, «El libro de Josué: Un manual para los últimos días» | **Dale G. Renlund**, «Escogeos hoy», nov. 2018 | ancla `p_crL6L` del manual + discurso `p26` |
| l20 | Uchtdorf, «El camino de regreso a casa» | **Russell M. Nelson**, «Decisiones para la eternidad», devocional mundial 15-may-2022 | ancla `p_c8tZu` del manual + devocional `p57` |
| l20 | Ballard, «Permaneced firmes en la fe» | **bloque borrado** | el manual de l20 tiene **una sola** cita de líder y no enlaza ningún discurso. Se aplicó la regla del prompt: antes borrar que dejar una cita sin respaldo |

**Una cita que parecía buena y no lo era.** El manual de l22 atribuye a Nelson la idea del «bufé
de la obediencia» con un *véase* delante: `(véase «Afrontar el futuro con fe», Liahona, mayo de
2011)`. Al bajar el discurso, esa frase **no aparece** — el manual está parafraseando, no citando.
Se descartó y se usó en su lugar a la hermana Dalton, que el mismo manual sí cita textualmente.
El *véase* de una referencia es una señal a mirar antes de copiar.

### Escrituras: 20 restituidas, todas con link

Crecimientos mayores: Jueces 6:12–16 (478 → 761 car., +59 %), Jueces 7:2–4, 7 (417 → 780, +87 %),
Josué 2:11–12 (220 → 373, +70 %), Éxodo 40:33–35 (240 → 374, +56 %).
`l17` tenía **«Números 13:30; 14:6–9»** en un solo bloque de dos capítulos: se partió en dos, con
comentario propio cada uno (el informe de Caleb y el de Josué).

### Lo demás

- Contexto de 110–142 a 208–248 palabras en las cinco; reflexión de 4 a 6; quiz de 5 a 7.
- **`l19` no tenía párrafo de cierre**: su único párrafo funcionaba a la vez como contexto y
  como conclusión, así que el evaluador lo contaba dos veces. Se le agregó uno (la escena de
  Siquem), y con eso pasa a tener contexto y conclusión distinguibles.
- **CRISTO y SUSTANCIA** cerrados en `l20`: el cierre pasó de describir a Débora a explicar por
  qué ningún juez alcanza —cada uno libera por un rato y muere— y a nombrar a Jesucristo como
  el Libertador cuyo rescate no caduca. Es el símbolo que el propio libro de Jueces construye.
- **SUSTANCIA** cerrada en `l17` por la serpiente de bronce, que la lección ya mencionaba en los
  puntos doctrinales pero no en el cierre.

---

## Lote 3 — l21 a l25, las cinco de convención clásica (cerrado)

### Escrituras: acá vivían las 17 auditables

`audit-escrituras.ts` solo veía estas 17 (de 87) porque eran las únicas con `link`, e informaba
**OK 8 · REVISAR_MANUAL 8 · AUTO_CORREGIBLE 1**. Restituidas las 17 desde la API, el script pasa
a **91 citas, todas OK**. Los crecimientos confirman que los ocho `REVISAR_MANUAL` eran
paráfrasis, no errores de referencia: 1 Samuel 24:6, 10–12 (394 → 711 car., +80 %),
2 Samuel 11:1–4 (315 → 670, +113 %), 1 Reyes 18:21, 36–38 (463 → 745, +61 %),
2 Samuel 12:7, 9, 13 (262 → 483, +84 %).

Se escribió `escr-clasica.js` para esto: genera ops `setCita` reusando `pasaje225.js`, para no
tener dos extractores con reglas de limpieza distintas.

### Citas: las 10 reemplazadas

| lección | cita nueva | de dónde salió |
|---|---|---|
| l21 | **D. Todd Christofferson**, «Redención», may. 2013 | ancla `p_nEICz` del manual + discurso `p4` |
| l21 | **Russell M. Nelson**, «Revelación para la Iglesia, revelación para nuestras vidas», may. 2018 | ancla `p_oTpzh` del manual + discurso `p38` |
| l22 | **Jeffrey R. Holland**, «Escoge al Señor y a Su profeta», jun. 2022 | ancla `p_zSu8c` del manual + artículo `p16` |
| l22 | **Elaine S. Dalton**, «¡Ahora es el tiempo de levantarse y brillar!», may. 2012 | ancla `p_wG6xb` del manual + discurso `p8` |
| l23 | **Andrea Muñoz Spannaus**, «Fiel hasta el fin», may. 2024 | ancla `p_w12fk` del manual + discurso `p33` |
| l23 | **Kristin M. Yee**, «Gloria en lugar de ceniza», nov. 2022 | ancla `p_nFtiA` del manual + discurso `p15` |
| l24 | **Dieter F. Uchtdorf**, «Cuestión de solo unos grados», may. 2008 | ancla `p_eO84D` del manual + discurso `p24` |
| l24 | **Dale G. Renlund**, «Su naturaleza divina y destino eterno», may. 2022 | ancla `p_kOlnl` del manual + discurso `p17` |
| l25 | **Gary E. Stevenson**, «Las impresiones del Espíritu», nov. 2023 | ancla `p_pyX88` del manual + discurso `p9` |
| l25 | **D. Todd Christofferson**, «Firmes e inmutables en la fe de Cristo», nov. 2018 | ancla `p_w1vaB` del manual + discurso `p11` y `p24` |

En Uchtdorf y en Renlund el **texto del manual y el del discurso no coinciden palabra por
palabra** (el manual usa una revisión de la traducción, y el discurso trae números de nota al pie
pegados al texto). Como el `link` apunta al discurso, se copió el texto del **discurso**, con
`[…]` donde caía la nota. Copiar el del manual habría dado «no verificable» siendo textual.

### Lo demás

- `cuestionario` de 5 a 6 preguntas en las cinco. Hizo falta agregarle a `patch.js` la operación
  **`addPregunta`** (solo tenía `setPregunta` por índice), documentada dentro del script.
- Quiz de 5 a 7. Contexto y conclusión ya estaban en rango en las cinco.
- **CRISTO** cerrado en l22 (el cierre ahora dice que el Rey que Israel cambió por Saúl era
  Jehová, y que sigue peleando por quien lo deje), en l24 (el arrepentimiento de David leído
  desde Renlund: no quedan cicatrices porque quien las borra es Jesucristo) y en l25 (la pregunta
  del Carmelo unida a la disyuntiva que Christofferson vuelve a plantear).
  **SUSTANCIA** cerrada en l21 (Booz como pariente redentor) y l24.

---

## Lote 4 — l01 a l10 (cerrado)

Eran las que «mejor estaban», y el resultado confirma por qué eso no significaba nada: las
**34 escrituras sin link eran las paráfrasis más severas del curso**.

- Moisés 7:60–64 · 270 → 1337 car. (**+395 %**)
- Moisés 6:57–59 · 282 → 1037 car. (+268 %)
- Moisés 4:6–12 · 308 → 939 car. (+205 %)
- Moisés 5:4–8 · 358 → 826 car. (+131 %)
- Abraham 2:9–11 · 436 → 901 car. (+107 %)

Dos referencias multi-capítulo partidas en dos bloques con comentario propio:
**«Génesis 1:26–27; Moisés 2:26–27»** en l02 (el ejercicio de comparar los dos textos es ahora la
pregunta de escudriñar de esa lección) y **«Génesis 40:8; 41:16»** en l10 (la misma respuesta de
José en la cárcel y ante Faraón). El curso queda con **91 escrituras, 0 sin link**.

### Las dos citas que faltaban

- **l01, Nelson «Decisiones para la eternidad»**: el link era correcto; el texto estaba
  reescrito. Decía «¿ha llegado esa verdad a grabarse en su corazón?» donde el devocional dice
  «¿ha quedado esa verdad eterna grabada en sus corazones?». Restituido desde `p29`.
- **l02, «El Cristo Viviente»**: el texto era casi textual, pero el link
  (`/scriptures/the-living-christ-the-testimony-of-the-apostles`) responde **404**. La ruta real
  es `/manual/the-living-christ-the-testimony-of-the-apostles/…`. Corregidos link y texto (`p3`).

### Lo demás

- Contexto de 102–131 a 208–245 palabras; reflexión de 4 a 6; quiz de 5 a 7 en las diez.
- **CRISTO** cerrado en l05 (el cierre ya no termina en el diluvio: Enoc pregunta cuándo
  descansará la tierra y el Señor le muestra al Cordero) y en l08 (el hijo amado que carga la
  leña y el carnero del zarzal, con la diferencia que el propio texto subraya: a Abraham el Señor
  le detuvo la mano, a Sí mismo no). **SUSTANCIA** cerrada en l02 y l05.
- `l05` tenía la conclusión más corta del curso (75 palabras, mínimo 80): quedó en 131.

---

## Cierre del curso

```
lecciones que cierran los 9 frentes    25 / 25     (antes 0)
escrituras                             91   sin link: 0        (antes 87, con 70 sin link)
  audit-escrituras.ts                  91 OK, 0 REVISAR_MANUAL (antes miraba solo 17)
citas de líder                         49   NO VERIFICABLES: 0 (antes 50, con 32 sin verificar)
preguntas de quiz                     175   (7 por lección; antes 125)
posición de la respuesta correcta      25 / 25 / 25 / 25 %  ✓
puesto por longitud                    25 % larga · 23 % corta
```

`audit-doctrinal.ts` y `audit-completitud.ts` sobre las 5 lecciones de convención clásica —las
únicas que miden—: Cristo 5/5, orar 5/5, escudriñar 5/5, y contexto, conclusión, cuestionario y
quiz todos en rango. La línea de base del 6-sep para este curso era Cristo 40 %, sustancia 0 %,
orar 80 %, escudriñar 0 %.

### Verificaciones corridas al cerrar

`validate-content.ts` · `audit-doctrinal.ts --detalle` · `audit-completitud.ts` ·
`audit-escrituras.ts` · `audit-autores-quiz.ts` (cruzado con `inv.js`) ·
`audit-distribucion-respuestas.ts --write` (128 preguntas rotadas, quedó en 25/25/25/25) ·
`audit-chapterurls.ts` · `audit-links-citas.ts` · `verificar-citas.js` · `inv.js` (inventario y
barrido estructural) · `artefactos.js` · `espacio.js` · `ajeno.js`.

`validate-content.ts` reporta **un solo problema en todo el proyecto**, ajeno a este curso:
`libro-de-mormon-1/_auditoria-snapshot-original.json` (array donde el validador espera un objeto).

### Falsos positivos, confirmados uno por uno

Los cuatro que anunciaba el prompt aparecieron tal cual, y hay **uno nuevo**:

| script | qué dice | por qué es falso |
|---|---|---|
| `audit-chapterurls.ts` | 25 «desalineadas» | el `id` del manual no tiene forma `leccion-N`. La columna que vale, «rotas», está en **0** |
| `audit-autores-quiz.ts` | 11 preguntas con «líder huérfano» | las 11 son de convención `resumen`, donde las citas viven en bloques `cita` y no en secciones `enseñanza`. `inv.js` da **25/25 sin huérfanos**; se comprobaron además a mano l01#5, l15#6 y l20#5, y los tres autores sí están en su lección |
| `audit-links-citas.ts` | 7 «sin ancla al párrafo» | 5 son anclas del formato nuevo (`#p_osWPU`, `#kicker1`), que el script no reconoce. Las 2 reales (Eyring en l12, Kearon en l13) son citas que abarcan dos párrafos consecutivos: ningún `<p id>` las contiene enteras |
| `artefactos.js` | espacio antes de puntuación | el punto suspensivo de omisión sí lleva espacio delante en español |
| **`audit-links-citas.ts` (nuevo)** | 2 links «no resuelven a un discurso»: el devocional de Nelson en l01 y l20 | el HTML del sitio para `/broadcasts/` sirve un `<link rel="canonical">` que apunta a otro devocional (`hope-of-israel`, 2018). La **API v3 devuelve el canonical correcto** (`…/2022/05/12nelson`) y el título correcto, y `verificar-citas.js` encuentra el texto verbatim en `p57`. Es un defecto del shell de la SPA, no de la cita |

Y uno más, en el propio `audit-doctrinal.ts`: la línea **«…y además dice algo de Él: 0/5 (0 %)»**
mide `NOMBRE && SUSTANCIA` **solo dentro del `contexto`**, mientras que el criterio del checklist
que el mismo script aplica para marcar `SOLO NOMBRADO` mira `contexto + conclusion`. En l21–l24 el
nombre y la sustancia están en la conclusión, y en l25 el contexto tiene sustancia pero no nombra
a Cristo: por eso el contador da 0 aunque **ninguna** lección aparezca listada como «solo
nombrada». El rótulo promete más de lo que la métrica mide.

---

## Propuestas para los documentos que no toqué

Estas van a `PLAN-DE-AUDITORIA.md`, `README.md`, `CICLO-GENERACION-AUDITORIA.md` y
`COMO-AUDITAR-ESCRITURAS.md`, que el prompt pidió no editar:

1. **`PLAN-DE-AUDITORIA.md` y `README.md`** — `religion-301` pasa a cerrado en Escritura (91/91),
   en citas de líder (49/49) y en completitud (25/25 en los nueve frentes). Sería además el primer
   curso cerrado en la columna doctrinal, que todavía no existe en el plan.
2. **`CICLO-GENERACION-AUDITORIA.md`** — dos filas nuevas:
   *«un `véase` delante de una referencia marca una paráfrasis del manual, no una cita textual:
   verificar el discurso antes de copiarla»* (caso de l22, Nelson «Afrontar el futuro con fe»); y
   *«un número de nota al pie pegado al texto de un discurso rompe la sonda de
   `verificar-citas.js`; marcar el corte con `[…]`, como hace el manual»* (caso de l14).
3. **`COMO-AUDITAR-ESCRITURAS.md`** — conviene decir explícitamente que `audit-escrituras.ts`
   **solo ve las citas con `link`**, y que un curso con «100 % OK» puede estar mirando el 20 % de
   sus escrituras. En R-301 informaba OK sobre 17 de 87; al ponerles link a las otras 70 resultó
   que **todas** eran paráfrasis, una de ellas con un 395 % de texto faltante.

---

# Segunda vuelta — auditoría de Nivel 2 y spec de la convención `resumen`

El cierre anterior era el de los frentes medibles. Faltaban dos cosas: leer el contenido (que lo
había escrito yo, así que nadie lo había auditado) y llevar la spec de la convención `resumen`
a los scripts del repo, porque hasta ahora vivía en el scratchpad.

## Nivel 2 — lectura de l05, l14, l20 y l24

Se eligieron las cuatro más reescritas. Aparecieron **dos defectos**, uno de ellos en todo el curso.

### 1. Voseo mezclado con tuteo — 52 casos en 19 de las 25 lecciones

El material oficial de la Iglesia en español usa siempre «tú», y el curso original lo respetaba:
medido sobre la versión commiteada, **0 formas voseantes**. Las 52 las introduje yo al escribir
contextos, reflexiones y quiz. Lo peor no era el voseo en sí, sino la **mezcla dentro de la misma
oración**:

- `l20`: «**Elige** una situación concreta de esta semana y **llevala** al Señor»
- `l24`: «**Elige** un hábito diario que hoy esté un grado fuera de rumbo y **corregilo**»
- `l25`: «**Escribí** la pregunta que más te gustaría hacerle al Señor y **llevala** esta semana»

Corregidas las 42 frases afectadas (`reemplazar.js`, que falla en bloque si una no aparece exacta
y una sola vez). El detector quedó como `voseo.js`.

**Un detalle del detector que vale para la próxima:** `\b` no sirve para esto en JavaScript,
porque «í» no es carácter de palabra y entonces `\bhací\b` parte «hacía» y la marca como voseo.
La primera versión daba 226 hits, casi todos falsos; con lookarounds sobre una clase de letras
acentuadas quedaron los 52 reales. Y hay que listar **solo** la forma acentuada: incluir «anota»
junto a «anotá» marca como error el imperativo de tú, que es justamente lo correcto.

### 2. Tres preguntas de quiz sobre el mismo subtema en `l05`

Q2 («¿qué sorprendió a Enoc?»), Q3 («¿qué provoca el llanto?») y Q4 («¿por qué el llanto no
contradice Su perfección?») giraban las tres sobre las lágrimas de Dios, mientras que el bloque
de escritura de **Moisés 7:60–64** —el traslado de la ciudad y el regreso de las dos Siones— no
tenía ninguna pregunta. Se reemplazó Q4 por una sobre ese pasaje.

Se escribió `redundancia.js` para buscar el mismo defecto en el resto: mide solapamiento léxico
entre enunciado + respuesta correcta de cada par de preguntas de una misma lección. Sobre las 175
preguntas hay 4 pares por encima del 20 %, y los otros tres son legítimos (una pregunta de
recuerdo y una de síntesis sobre la misma escena, que es la estructura que la spec pide).

---

## La spec de `resumen`, ahora en los scripts del repo

Hasta ahora `audit-doctrinal.ts` y `audit-completitud.ts` hacían `continue` al ver la convención
`resumen`: la contaban y seguían de largo. El efecto medido: **el proyecto auditaba 533 de 581
lecciones** y no lo decía en ninguna parte. En este curso, los dos scripts miraban l21–l25 e
ignoraban l01–l20.

Se agregó `scripts/normalizar-resumen.ts`, que lleva los bloques a la forma clásica con la spec
fijada el 8-sep en `BITACORA-r225.md`, y los dos scripts lo importan. Es la misma lógica que ya
usaban `evaluar.js` e `inv.js` en el scratchpad, escrita una sola vez para que los tres digan lo
mismo.

Lo que cambia en el reporte:

| | antes | ahora |
|---|---|---|
| lecciones medidas en el proyecto | 533 | **581** (+48: las 28 de R-225 y las 20 de R-301) |
| `religion-225` en el ranking doctrinal | no aparecía | 28 lecciones, 100 % en los cuatro frentes |
| `religion-301` | 5 lecciones | 25 lecciones |
| `audit-completitud.ts` | solo la clásica | las dos, más un frente nuevo: `doctrinal` de 4 a 6 puntos, que solo aplica a `resumen` |

También se corrigió el desajuste de rótulo que la primera vuelta había documentado: la línea
«…y además dice algo de Él» medía `NOMBRE && SUSTANCIA` **solo dentro del `contexto`**, mientras
que el criterio con el que el mismo script decide marcar `SOLO NOMBRADO` mira contexto +
conclusión. Ahora la línea principal usa el criterio del checklist, y **se conserva la métrica
estrecha en una segunda línea**, porque es con la que se midió la línea de base del 6-sep-2026
que está documentada en la skill: reemplazarla sin más habría roto la comparabilidad de la serie.

**Ese cambio de métrica sube los porcentajes de sustancia de todos los cursos, y no porque el
contenido haya mejorado.** El delta, comparando la versión anterior del script con la nueva sobre
el mismo contenido:

| curso | sustancia (solo contexto) | sustancia (contexto + conclusión) |
|---|---|---|
| religion-200 | 29 % | 100 % |
| libro-de-mormon-1 | 67 % | 100 % |
| antiguo-testamento-2 | 70 % | 100 % |
| libro-de-mormon-2 | 71 % | 100 % |
| doctrina-y-convenios-1 | 81 % | 100 % |
| doctrina-y-convenios-2 | 91 % | 93 % |
| **TOTAL** | **77 %** | **99 %** |

Al leer esa tabla conviene tener presente que la línea de base del 6-sep daba 29 % de sustancia
sobre 519 lecciones: buena parte de la distancia entre aquel número y este es trabajo real de las
sesiones de agosto y septiembre, pero **una parte es el cambio de métrica**, y por eso quedan las
dos líneas.

### Lo que queda abierto en el proyecto

Con los dos scripts midiendo todo, `doctrina-y-convenios-2` es **el único curso con frentes
doctrinales abiertos**, y son pocos:

- sin Cristo en contexto ni conclusión (2): `doctrina-y-convenios-71`, `doctrina-y-convenios-76-1-19`
- solo nombrado (2): `doctrina-y-convenios-76-19-24`, `doctrina-y-convenios-76-50-70`
- sin pregunta de orar (2): `doctrina-y-convenios-76-50-70`, `pr-ctica-del-dominio-de-la-doctrina-5`
- sin pregunta de escudriñar (6): las cuatro secciones de `doctrina-y-convenios-76`, más
  `doctrina-y-convenios-71` y una más

Son 8 lecciones distintas, casi todas del bloque de la sección 76. No se tocaron: son otro curso.

### Una discrepancia que quedó sin resolver a propósito

`audit-completitud.ts` acepta la conclusión entre **60 y 140** palabras; `evaluar.js` y la spec de
`resumen` piden **80 a 140**. Con el contenido de hoy ninguna lección cae en esa franja, así que
la diferencia no cambia ningún resultado, pero los dos evaluadores no dicen exactamente lo mismo.
Subir el mínimo a 80 afectaría a los otros once cursos y podría abrir defectos en cursos ya
cerrados: es una decisión de proyecto, no de esta sesión.

---

## Estado final de `religion-301`

```
lecciones que cierran los 9 frentes    25 / 25
escrituras                             91   sin link: 0 · audit-escrituras.ts: 91 OK
citas de líder                         49   NO VERIFICABLES: 0
preguntas de quiz                     175   posición 25/25/25/25 · 25 % larga · 23 % corta
formas voseantes                        0   (eran 52 en 19 lecciones)
audit-doctrinal.ts (25 lecciones)     Cristo 100 % · sustancia 100 % · orar 100 % · escudriñar 100 %
audit-completitud.ts (25 lecciones)   contexto, conclusión, cuestionario, doctrinal y quiz: 0 fuera de rango
```

Ahora los dos scripts del repo miden las 25 lecciones, así que el cierre es reproducible sin el
scratchpad.

---

# Tercera vuelta — los comentarios de las escrituras

Al preguntar si el curso estaba cerrado, quedaba un riesgo sin verificar: los `comentario` de los
bloques de Escritura se habían escrito contra los textos **anteriores**, que eran paráfrasis.
Algunos pasajes crecieron 395 % al restituirlos. Un comentario que entrecomilla una frase del
pasaje podía quedar citando algo que el versículo ya no dice.

Se verificó con `coment-vs-texto.js`: extrae cada frase entrecomillada de un comentario y
comprueba que esté literalmente en el texto de su propio pasaje. **De 44 frases, 34 fallaban.**

## El patrón

Casi todas fallaban por el nombre divino: el comentario escribe «el Señor» donde la Escritura SUD
en español dice «Jehová».

| lección | el comentario decía | el pasaje dice |
|---|---|---|
| `l20` | «No sabía que **el Señor** ya se había apartado de él» | «no sabía que **Jehová** ya se había apartado de él» |
| `l19` | «yo y mi casa serviremos **al Señor**» | «yo y mi casa serviremos **a Jehová**» |
| `l18` | «**Oye, Israel: El Señor** nuestro Dios, el Señor uno es» | «**Escucha, oh Israel: Jehová** nuestro Dios, Jehová uno es» |
| `l20` | «**una** generación que no conocía **al Señor**» | «**otra** generación que no conocía **a Jehová**» |
| `l15` | «Yo soy **el Señor** tu Dios, que te saqué **de Egipto**» | «Yo soy **Jehová** tu Dios, que te saqué **de la tierra de Egipto**» |

Otras fallaban por diferencias de redacción: `l04` citaba «Soy tardío en el hablar» donde Moisés
6:31 dice «soy tardo en el habla»; `l05` citaba «¿Cómo puedes llorar?» donde Moisés 7:29 dice
«¿Cómo es posible que tú llores, si eres santo?».

**Casi todos son preexistentes, no de esta sesión.** Se comprobó contra la versión commiteada.
Antes eran invisibles: el texto del pasaje era también una paráfrasis escrita con el mismo
criterio, así que comentario y versículo concordaban entre sí y los dos estaban mal. Restituir los
91 pasajes al texto verbatim es lo que dejó la discrepancia a la vista.

Tres sí son míos, y conviene anotarlos porque son el mismo error que estuve corrigiendo toda la
sesión, cometido de nuevo: en `l10` escribí «Dios será el que dé respuesta propicia a Faraón»
cuando Génesis 41:16 dice «Dios será quien responda paz a Faraón»; en `l17`, «se apartó de ellos»
por «su amparo se ha apartado de ellos»; en `l02`, «que estaba conmigo desde el principio» por «el
cual fue conmigo desde el principio». Los tres los escribí mirando el pasaje y citándolo de
memoria en vez de copiarlo.

## Qué se corrigió y qué no

**18 corregidas.** Cinco por sustitución probada (`fix-comentarios.js` genera la variante con el
nombre divino y la acepta solo si aparece literalmente en el pasaje) y trece a mano, comparando
cada frase contra su texto.

**16 sin tocar, y está bien que así sea:**

- **Citas de otro pasaje, atribuidas correctamente:** Juan 1:3 en `l02`, Romanos 8:28 en `l11`,
  1 Corintios 5:7 en `l13`, 1 Corintios 10:1–2 y el Padrenuestro en `l14`, Juan 3:14 en `l17`,
  1 Corintios 1:27 en `l20`, y la cita del élder Kearon en `l14`.
- **Glosas y términos entre comillas, no citas:** «bendiciones de Abraham», «padre de multitudes»,
  «el que lucha con Dios» / «el que prevalece con Dios» (las dos etimologías de *Israel*),
  «endurecimiento del corazón de Faraón».
- Tres son falsos positivos del detector, que agarra comillas de énfasis dentro de un análisis.

## Lo que este hallazgo deja para el catálogo

Es una fila nueva para `CICLO-GENERACION-AUDITORIA.md`, y vale para cualquier curso donde se
restituyan escrituras: **al reemplazar el texto de un pasaje hay que releer su `comentario`**. El
comentario suele entrecomillar frases del texto viejo, y si ese texto era paráfrasis, la cita
queda apuntando a algo que el versículo no dice. El defecto no lo detecta ningún chequeo del
proyecto porque las dos piezas son válidas por separado: el pasaje es literal y el comentario está
bien escrito; lo que falla es la correspondencia entre ellos.

También conviene recordar el criterio de fondo: **en el contenido propio se puede escribir «el
Señor», pero dentro de comillas hay que poner lo que la Escritura dice.** El proyecto usa la
edición SUD en español, que traduce el tetragrámaton como «Jehová».

---

## Estado final de `religion-301`

```
lecciones que cierran los 9 frentes    25 / 25
escrituras                             91   sin link: 0 · audit-escrituras.ts: 91 OK
comentarios que citan su pasaje        26 / 26 literales (eran 8 de 26)
citas de líder                         49   NO VERIFICABLES: 0
preguntas de quiz                     175   posición 25/25/25/25 · 25 % larga · 23 % corta
formas voseantes                        0
artefactos · espacios · pasajes ajenos  0 · 0 · 0
audit-doctrinal.ts (25 lecciones)     Cristo 100 % · sustancia 100 % · orar 100 % · escudriñar 100 %
audit-completitud.ts (25 lecciones)   contexto, conclusión, cuestionario, doctrinal y quiz en rango
validate-content.ts                    sin problemas en este curso
```
