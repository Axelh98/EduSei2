# Auditoría de citas — Doctrina y Convenios, primer semestre

Registro de la revisión de las citas de líderes de la Iglesia (secciones `enseñanza`)
del curso `doctrina-y-convenios-1`. Mismo criterio que
[R250](AUDITORIA-citas-R250.md) y [Libro de Mormón](AUDITORIA-citas-libro-de-mormon.md):
cada cita se verifica contra el discurso original en `churchofjesuschrist.org`.

**Estado: grupo de riesgo cerrado.** Las **49 citas que no tenían `link`** —las 7
documentadas al principio más las 42 restantes— están verificadas y corregidas.
Las 31 que ya traían `link` siguen sin revisar una por una.

---

## Panorama del curso

| | Al empezar | Ahora |
|---|---:|---:|
| Total de citas de líderes | 80 | 80 |
| Con `link` a churchofjesuschrist.org | 31 | **80** |
| Sin `link` pero con título de discurso en `fuente` | 6 | 0 |
| **Sin `link` y sin título de discurso** (perfil de riesgo) | **43** | **0** |

De esas 43, **42 tenían una `fuente` de la forma `Liahona, mes de año, pág. N`**:
solo revista, fecha y página, sin el título del discurso. Ese formato hacía que la
cita no se pudiera rastrear, y era el rasgo común de todas las que resultaron
inválidas.

### Banderas automáticas del curso

| Bandera | Antes | Ahora |
|---|---:|---:|
| `sin-link` | 49 | **0** |
| `voseo-en-cita` | 5 | **0** |
| `nombre-mal-escrito` | 8 | **0** |
| `link-no-oficial` | 1 | **0** |
| `elder-sin-tilde` | 8 | 7 |
| `link-sin-lang-spa` | 0 | 1 |
| **Total de citas con problemas** | **58** | **8** |

Las 7 de `elder-sin-tilde` son cosméticas y pertenecen a la tarea mecánica que
sigue pendiente para todo el corpus. La de `link-sin-lang-spa` es esperada: el
artículo de Bednar de `191-importancia-educacion` solo existe en inglés.

## Señal lingüística: voseo

Cinco citas usaban **voseo rioplatense** («estudiás», «registrás», «abrís», «sabés»,
«elegís», «podés»). El material oficial de la Iglesia en español usa siempre «tú»,
así que ninguna cita textual traducida puede tener esa forma. Fue un indicio
directo de que el texto había sido reescrito y no transcrito.

Se confirmó al verificarlas: **las cinco resultaron inválidas**. Ya no queda
ninguna en el curso.

`scripts/extract-citas.ts` detecta este patrón automáticamente en todo el corpus.

## Un falso positivo del detector: «Holland»

Al cerrar el curso quedaban 6 citas marcadas como `nombre-mal-escrito` con el autor
bien escrito. La causa estaba en `scripts/extract-citas.ts`: el patrón de erratas
incluía `Hollan` **sin límite de palabra**, así que casaba dentro de `Holland` y
marcaba como error toda cita de ese apóstol. El patrón también listaba
«Devocional del sistema Educativo», que es la forma oficial correcta.

Corregido con `\b` a ambos lados y quitando esa entrada. El efecto en el corpus
completo es grande: **`nombre-mal-escrito` pasó de 33 casos a 0**. Es decir, las
únicas erratas reales eran «Rusell M. Nelson» y «Deovcional», ambas en este curso
y ya corregidas; **los otros 31 casos eran ruido del detector**.

> Conviene tenerlo en cuenta antes de encarar la tarea pendiente de «arreglar los
> 33 nombres mal escritos»: no hay 33, no queda ninguno.

---

## Citas verificadas — primera tanda (las 7 documentadas al principio)

### 1. Élder Richard G. Scott — lección `172-herramientas-escrituras` ❌ Fabricada

- **Fuente declarada:** *Liahona*, noviembre de 2011, pág. 6 — sin `link`.
- **Discurso real:** en ese número Scott dio **«El poder de las Escrituras»**
  (sesión del sábado por la mañana, conferencia de octubre de 2011).
- **Verificación:** el discurso **no contiene** la frase citada. Lo que sí dice es
  «¿Marcas tus ejemplares? ¿Pones notas en el margen para recordar un momento de
  guía espiritual…?» y «Se obtiene un gran poder al memorizar pasajes de
  Escrituras. El memorizar un pasaje es como crear una nueva amistad».
- **Además:** el texto citado usa voseo («estudiás», «registrás», «perdés»).
- **Acción tomada:** ✅ corregida. Se reemplazó por el pasaje textual del discurso
  real sobre marcar y anotar los ejemplares: «¿Marcas tus ejemplares? ¿Pones notas
  en el margen para recordar un momento de guía espiritual o una experiencia que te
  haya enseñado una profunda lección?». `fuente` pasó a «El poder de las Escrituras»,
  Conferencia General, octubre de 2011 (Liahona, noviembre de 2011), con `link` a
  `https://www.churchofjesuschrist.org/study/general-conference/2011/10/the-power-of-scripture?lang=spa`

### 2. Élder Richard G. Scott — lección `83-dominio-practica-5` ❌ Fabricada

- **Fuente declarada:** *Liahona*, noviembre de 2011, pág. 6 — **la misma página que la cita anterior**, con un texto completamente distinto.
- **Verificación:** tampoco aparece en «El poder de las Escrituras». La idea real
  del discurso sobre memorización es «una escritura memorizada pasa a ser una
  amistad duradera que no se debilita con el paso del tiempo».
- **Además:** voseo («podés»).
- **Acción tomada:** ✅ corregida. Se reemplazó por el pasaje textual sobre
  memorización: «Se obtiene un gran poder al memorizar pasajes de Escrituras. El
  memorizar un pasaje es como crear una nueva amistad…», con la misma `fuente` con
  título y el mismo `link` que la cita anterior.

### 3. Élder Jeffrey R. Holland — lección `74-dc-60-62` ❌ No corresponde

- **Fuente declarada:** *Liahona*, noviembre de 2013, pág. 108 — sin `link`.
- **Discurso real:** en ese número Holland dio **«Como una vasija quebrada»**
  (sesión del sábado por la tarde), sobre salud mental y enfermedad emocional.
- **Verificación:** el tema no tiene relación con la cita atribuida, que habla de
  testificar del Salvador y de «testimonios registrados en el cielo».
- **Además:** voseo («abrís», «sabés»).
- **Acción tomada:** ✅ reemplazada. No existe un discurso de Holland con esa idea
  en esa fuente. Se adoptó la cita que **el propio manual oficial de Seminario usa
  en esta misma lección** (D. y C. 60–62): élder Gary E. Stevenson, «Cómo nutrir y
  compartir su testimonio», *Liahona*, noviembre de 2022, pág. 112 — «Ustedes dan su
  testimonio cuando comparten sentimientos espirituales con otras personas… Su
  testimonio de Jesucristo no solo es lo que dicen, sino quienes son». **Cambia el autor.**

### 4. Presidente Henry B. Eyring — lección `66-dc-50-parte-2` ❌ No corresponde

- **Fuente declarada:** *Liahona*, mayo de 2012, pág. 63 — sin `link`.
- **Discursos reales:** en ese número Eyring dio **«Montañas que ascender»** y
  **«Familias bajo el convenio»**. Ninguno trata la luz que «crece más y más hasta
  el día perfecto» ni el proceso gradual de conversión.
- **Además:** voseo («elegís»).
- **Acción tomada:** ✅ reemplazada. La lección gira alrededor de D. y C. 50:24
  («crece más y más hasta el día perfecto»), así que se usó el pasaje textual del
  élder David A. Bednar sobre la revelación gradual comparada con la luz del
  amanecer: «El aumento gradual de la luz que irradia el sol naciente es semejante a
  recibir un mensaje de Dios "línea por línea, precepto por precepto". La mayoría de
  las veces, la revelación viene en pequeños incrementos a lo largo de cierto
  tiempo…» — «El espíritu de revelación», Conferencia General, abril de 2011.
  **Cambia el autor.**

### 5. Presidente Gordon B. Hinckley — lección `77-dc-64-1-17` ⚠️ Parafraseada

- **Fuente declarada:** *Liahona*, noviembre de 1980, pág. 61 — sin `link`.
- **Discurso real:** **sí existe** un discurso pertinente de octubre de 1980,
  «Of You It Is Required to Forgive» / «Se os requiere perdonar», sobre el perdón
  — exactamente el tema de la lección (DyC 64:1–17).
- **Verificación:** el discurso contiene una idea muy cercana («si hubiera entre
  ustedes alguno que albergue en su corazón el veneno de la enemistad hacia
  otro…»), pero **el texto citado no es textual**: está reescrito y usa voseo
  («elegís»).
- **Corrección al hallazgo anterior:** la `fuente` declarada también erraba el año.
  El discurso se dio en la conferencia de **octubre de 1980**, pero su publicación en
  español fue **Liahona, noviembre de 1991, pág. 5** (en inglés se reimprimió en
  *Ensign* de junio de 1991). El archivo en español del sitio no llega a 1991, así
  que el discurso no está en línea en español; sí lo está el original en inglés,
  en `…/general-conference/1980/10/of-you-it-is-required-to-forgive?lang=eng`.
- **Acción tomada:** ✅ corregida. Texto literal en español, corroborado en dos
  páginas oficiales distintas (la guía de estudio de Seminario para D. y C. 64:1–19
  y el manual *Relaciones matrimoniales y familiares*), y con la secuencia de
  oraciones cotejada contra el original en inglés:
  «Si hubiera alguien que anidara en su corazón la ponzoña de la enemistad hacia otra
  persona, le ruego que pida al Señor la fuerza necesaria para perdonar… Tal vez no
  sea fácil, y no llegue en seguida, mas si buscan esto con sinceridad y lo cultivan,
  de seguro llegará».
  El `link` apunta a la guía de estudio de Seminario para D. y C. 64:1–19, que es la
  página oficial **en español** donde ese texto se puede verificar palabra por palabra.

### 6. Élder David A. Bednar — lección `184-cuidar-cuerpo` ❌ No corresponde

- **Fuente declarada:** *Liahona*, noviembre de 2010, pág. 83 — sin `link`.
- **Discurso real:** su único discurso en ese número fue **«Recibe el Espíritu
  Santo»**, que no trata sobre el cuerpo físico ni la salud.
- **Acción tomada:** ✅ reemplazada. Se adoptó una de las citas que **el propio
  manual oficial usa en esta misma lección** («Cómo cuidar nuestro cuerpo»): élder
  Russell M. Nelson, «Decisiones para la eternidad», *Liahona*, noviembre de 2013,
  pág. 107 — «Cada vez que se miren en el espejo, vean su cuerpo como un templo…».
  **Cambia el autor.** Se usa el tratamiento «Élder» porque en octubre de 2013
  Russell M. Nelson pertenecía al Cuórum de los Doce.

### 7. Presidente Dieter F. Uchtdorf — lección `194-desarrollar-habilidades` ⚠️ Sin confirmar

- **Fuente declarada:** *Liahona*, noviembre de 2008, pág. 56 — sin `link`.
- **Discursos reales:** «El poder infinito de la esperanza», «Impulsen desde donde
  estén» y «La felicidad, su legado» (esta última sí trata sobre creatividad y
  desarrollar talentos).
- **Verificación:** temáticamente podría corresponder a «La felicidad, su legado»,
  pero sin título en la `fuente` no se puede confirmar a qué discurso apunta.
- **Acción tomada:** ✅ reemplazada. «La felicidad es su legado» sí trata la
  creatividad, pero fue dirigida a la Sociedad de Socorro y no contiene nada parecido
  al texto atribuido (ni «paciencia y constancia» ni las «cientos de horas de
  práctica»). Se adoptó la cita que **el propio manual oficial usa en esta misma
  lección** («Desarrollar habilidades y destrezas»): élder Clark G. Gilbert, «Llegar a
  ser más en Cristo: La parábola de la pendiente», *Liahona*, noviembre de 2021,
  págs. 19–20 — «Nuestro futuro estará determinado mucho más por nuestra pendiente que
  por nuestro origen… Si bien el mundo centra su atención en nuestra intersección,
  Dios lo hace en nuestra pendiente». **Cambia el autor.**

---

## Resultado de la primera tanda

De 7 citas verificadas: **4 no aparecen en la fuente declarada**, **2 están
parafraseadas o sin confirmar**, y **0 resultaron textuales y correctas**.
**Las 7 ya están corregidas** en `lib/content/doctrina-y-convenios-1/`: texto
literal, `fuente` con título de discurso y `link` verificable. En 4 de ellas hubo
que cambiar el autor, porque no existía discurso del autor declarado con esa idea.

La proporción se sostuvo en el resto del grupo: ver el resultado total más abajo.

---

## Dos hallazgos que cambian cómo seguir

### 1. Cada lección trae el enlace a su propia página del manual oficial

El `chapterUrl` de cada lección en `_manifest.json` apunta a la página
correspondiente del **Manual del maestro de Seminario de Doctrina y Convenios 2025**
en español, y la numeración del curso coincide con la del manual
(`74-dc-60-62` → «Lección 74: Doctrina y Convenios 60–62`, y así con el resto).

Eso convierte la verificación en algo directo: se abre el `chapterUrl` de la lección
y se leen las citas que el manual realmente usa, con su autor, su texto literal y su
referencia completa. Es más rápido y más fiable que buscar el discurso a ciegas, y
además alinea la lección con el material oficial que el maestro tiene delante.

### 2. Las citas fabricadas reutilizan números de página reales de otros discursos

Los datos bibliográficos inventados no son aleatorios: apuntan a páginas que
**existen**, pero que corresponden a otro autor o a otro discurso.

| Cita del curso | Qué hay realmente en esa página |
|---|---|
| Holland, *Liahona* nov. 2013, pág. 108 (`74-dc-60-62`) | El entorno de la pág. 107 es «Decisiones para la eternidad», de Russell M. Nelson |
| Holland, *Liahona* nov. 2013, pág. 107 (`82-dc-71`) | La misma página: Nelson, no Holland |
| Eyring, *Liahona* mayo 2012, pág. 63 | «Familias bajo el convenio» sí es de Eyring y sí cae en esas páginas, pero trata del templo y la familia, no de la luz que crece |

O sea: **la referencia puede resistir una comprobación superficial** («ese autor
publicó en ese número», «esa página existe») y aun así la cita ser inventada. No
alcanza con validar la forma de la `fuente`; hay que leer el texto.

---

## Citas verificadas — segunda y tercera tanda (las 42 restantes sin `link`)

Verificadas contra el `chapterUrl` de cada lección (su página del **Manual del
maestro de Seminario de Doctrina y Convenios 2025** en español) y, cuando el
discurso está en línea en español, contra el discurso mismo. Todo `link` nuevo
apunta a una página oficial donde el texto de la cita se lee palabra por palabra.

### A. Ya eran textuales — solo faltaba `link` y ordenar la `fuente` (7)

Son las que traían un título de discurso en `fuente`. El perfil de riesgo lo
predijo bien: **ninguna de estas resultó inventada.**

| Lección | Autor | Qué se encontró | Acción |
|---|---|---|---|
| `166-examinar-perspectiva` | Uchtdorf | Textual. Coincide con la cita del manual de la lección | `link` + `fuente` con título; «Elder» → «Presidente» |
| `168-enfocarse-jc-escrituras` | Nelson | Textual. Verificada contra el devocional mundial del 8 de enero de 2017 | `link` al devocional; autor «Rusell» → «Russell» |
| `171-tomar-notas-escrituras` | Bednar | **Textual y exacta**, palabra por palabra | Solo `link` |
| `191-importancia-educacion` | Bednar | Traducción fiel del original; el artículo existe **solo en inglés** | `link` al *Ensign* en inglés, aclarado en `fuente` |
| `195_hacer_senor_aprendizaje` | Christofferson | Textual. Es la cita que usa el manual de la lección | `link` |
| `52-dc-38-parte-2` | Nelson | Textual, con otra traducción; se adoptó la del manual | `link` + `fuente` con título |
| `58-dc-45-1-8` | Holland | Real, de «Whom Say Ye That I Am?» (*Ensign*, sept. 1974) | Texto alineado al del manual + `fuente` completa + `link` |

### B. Fuente declarada correcta, pero el texto no era textual (4)

El dato bibliográfico apuntaba al discurso correcto; lo que estaba inventado era
la cita. Se reemplazó el texto por el real y se conservó el autor.

| Lección | Autor | Discurso real | Acción |
|---|---|---|---|
| `182-administracion-recursos` | Wirthlin | «Deudas terrenales y deudas celestiales», *Liahona* mayo 2004, pág. 40 — **la fuente declarada era exacta** | Texto real («Segundo, gasten menos de lo que ganan…») + `link` |
| `183-autosuficiencia-cuidar-otros` | Hales | «Seamos proveedores providentes temporal y espiritualmente», *Liahona* mayo 2009 | Texto real + `link` |
| `73-dc-59` | Nelson | «El día de reposo es una delicia», *Liahona* mayo 2015, pág. 129 — **la fuente declarada era exacta** | Texto real («¿Qué señal quiero darle a Dios?») + `link` |
| `76-dc-63-57-64` | Oaks | «Reverentes y limpios», *Liahona* julio 1986 (declaraba mayo 1986) | Texto real + `fuente` corregida + `link` |

### C. Autor correcto, discurso equivocado (6)

El autor sí había hablado del tema, pero en otro discurso. Se usó el suyo real.

| Lección | Autor | Discurso real que se usó |
|---|---|---|
| `185-fortaleza-emocional` | Holland | «Como una vasija quebrada», *Liahona* nov. 2013 — el discurso de la Iglesia sobre salud mental |
| `180-autosuficiencia-senor` | Hinckley | «El Fondo Perpetuo para la Educación», *Liahona* julio 2001 |
| `62-dc-46-7-33-parte-1` | Ashton | «Hay muchos dones», *Liahona* enero 1988 (declaraba febrero 1988) |
| `64-dc-49` | Christofferson | «El porqué del matrimonio, el porqué de la familia», *Liahona* mayo 2015 |
| `82-dc-71` | Holland | «El costo —y las bendiciones— del discipulado», *Liahona* mayo 2014 |
| `70-dominio-practica-4` | Scott | «El poder de las Escrituras» — tercer pasaje real del mismo discurso ya usado en `172` y `83` |
| `81-dc-68-25-31` | Nelson | «Cómo ser Santos de los Últimos Días ejemplares», *Liahona* nov. 2018 |

### D. La cita no corresponde: se adoptó la del manual oficial de esa lección (24)

En estos casos no había discurso del autor declarado con esa idea. Se tomó una de
las citas que **el propio manual de Seminario usa en esa misma lección**, lo que
además alinea la lección con el material que el maestro tiene delante. **Cambia el
autor.**

| Lección | Autor declarado (inválido) | Autor y discurso que se pusieron |
|---|---|---|
| `173-contexto-escrituras` | Christofferson | Monson, «Sé lo mejor que puedas ser» |
| `181-fe-autosuficiencia` | Hales | Nelson, «Cristo ha resucitado; la fe en Él moverá montes» |
| `193-descubre-fortalezas` | Ashton | Rasband, «Parábolas de Jesús: La parábola de los talentos» |
| `197-preparar-examenes` | Hinckley | Bednar, «Con esto los probaremos» |
| `198-mentalidad-crecimiento` | Uchtdorf | Robbins, «Hasta setenta veces siete» |
| `210-plantilla-lideres` | Eyring | Andersen, «El profeta de Dios» |
| `211-decisiones-eternidad` | Nelson | Nelson, «Decisiones para la eternidad» (devocional del 15 de mayo de 2022) — **autor conservado** |
| `61-dc-46-1-6` | Bednar | Gong, «Lugar en el mesón» |
| `63-dc-46-7-33-parte-2` | Bednar | Callister, «La expiación de Jesucristo» |
| `65-dc-50-parte-1` | Bednar | Stevenson, «No me engañes» |
| `68-dc-51` | Uchtdorf | Caussé, «Nuestra mayordomía terrenal» |
| `69-dc-57` | Nelson | José Smith, *Enseñanzas de los Presidentes de la Iglesia: José Smith* |
| `71-dc-58-26-29` | Cook | Holland, «El ministerio de la reconciliación» |
| `72-dc-58-38-60` | Nelson | Gong, «Volver a confiar» |
| `75-dc-63-1-23` | Bednar | Oaks, «Recuperarse de caer en la trampa de la pornografía» |
| `78-dc-64-20-43` | Uchtdorf | Klebingat, «Acerquémonos al trono de Dios con confianza» |
| `79-dc-65` | Nelson | Christofferson, «Prepararse para el regreso del Señor» |
| `80-dc-67` | Callister | Uchtdorf, «Vivir el Evangelio con gozo» |
| `85-dc-76-1-19` | Hinckley | Christofferson, «Cuando te hayas convertido» |
| `86-dc-76-19-24` | Nelson | Maxwell, «Testigos especiales de Cristo» |
| `87-dc-76-50-70` | Oaks | Renlund, «Los Santos de los Últimos Días siguen intentándolo» |
| `88-dc-76-71-112` | Holland | Cook, «Valientes en el testimonio de Jesús» |
| `89-dc-78` | Monson | Eyring, «Oportunidades para hacer el bien» |
| `90-dc-79-80` | Nelson | Uchtdorf, «La obra misional: Compartir lo que guardan en el corazón» |

*(Las 7 de la primera tanda entran también en estas categorías; acá no se repiten.)*

### Corrección aparte: dominio heredado

`59-dc-45-9-75-parte-1` tenía el `link` apuntando a `lds.org`, el dominio viejo.
La cita de Oaks **sí es textual** y se verificó en el discurso; solo se actualizó
la URL a `churchofjesuschrist.org` y se le puso título a la `fuente`.

---

## Resultado total del grupo sin `link`

De **49 citas verificadas** (las 7 de la primera tanda más las 42 restantes):

| Resultado | Citas |
|---|---:|
| Textuales y correctas (solo faltaba `link`) | 7 |
| Fuente correcta, texto inventado | 6 |
| Autor correcto, discurso o referencia equivocados | 8 |
| **No corresponden a ninguna fuente del autor declarado** | **28** |

**Solo 7 de 49 resistieron la verificación.** Y esas 7 son exactamente las 7 que
traían un título de discurso en la `fuente`.

Dicho al revés: de las **42 citas cuya `fuente` era solo «Liahona, mes de año,
pág. N»**, **ninguna resultó textual**. El formato de la referencia predijo la
validez del contenido en los 49 casos, sin una sola excepción.

Es un criterio barato y perfecto para el resto del corpus: **si la `fuente` no
nombra el discurso, la cita no es de fiar.**

---

## Problemas de forma ya corregidos (todo el corpus)

`scripts/fix-citas-links.ts` corrigió **85 citas** en las que la URL venía pegada
como texto plano dentro de `fuente` —el mismo problema estructural que documentó
la auditoría de R250— moviéndola al campo `link` y normalizándola a
`https://www.…?lang=spa`. No se tocó el texto de ninguna cita.

## Problemas de forma pendientes en este curso

- **7 citas con «Elder» sin tilde** en lugar de «Élder». Es lo único que queda,
  y es puramente cosmético.

Los nombres mal escritos y el link fuera de dominio ya están resueltos.

## Un aviso sobre las 31 citas que sí tenían `link`

Al cruzar links repetidos apareció esto en `37-dc-21`:

> **Presidente Ezra Taft Benson** — «El profeta de Dios», *Liahona*, mayo de 2018,
> pág. 26

Ese discurso es de **Neil L. Andersen**, de abril de 2018. **Ezra Taft Benson murió
en 1994.** El texto citado resultó ser **exactamente textual**, y el `link` apuntaba
al discurso correcto: lo único mal era el autor. Corregido.

Vale como muestra de lo que puede esconder ese grupo: tener `link` y título de
discurso garantiza que la referencia existe, no que la atribución sea correcta.
Un cruce rápido de «fecha del discurso vs. fechas de vida del autor» encontraría
más casos como este sin salir a internet.

## Qué falta en este curso

- [ ] **Las 30 citas restantes que ya traían `link`.** No se revisaron una por una.
      Son un grupo bastante más sano, pero entre las verificadas hubo 6 de 49 con
      la fuente correcta y el texto inventado, y el caso de `37-dc-21` muestra que
      también hay autorías equivocadas.
- [ ] Las 7 de «Elder» sin tilde, junto con las del resto del corpus.

## Cómo continuar

```bash
npx tsx scripts/extract-citas.ts doctrina-y-convenios-1        # panorama
npx tsx scripts/extract-citas.ts --csv > citas.csv             # inventario completo
npx tsx scripts/validate-content.ts                            # tras cada corrección
```

Las correcciones se aplican en `lib/content/doctrina-y-convenios-1/<lessonId>.json`,
en el campo `secciones[].texto`, `fuente` y `link` de la sección `enseñanza`.

### El método que funcionó

1. Sacar el `chapterUrl` de la lección desde `_manifest.json`: apunta a su página
   del manual oficial de Seminario 2025 en español.
2. Leer ahí las citas que el manual realmente usa, con autor, texto y referencia.
3. Comparar con la cita del curso y decidir: conservar, corregir el texto,
   o reemplazar por la del manual.
4. Poner en `link` la página oficial **donde ese texto se puede leer**: el discurso
   si está en línea en español, la página del manual si no.
5. `npx tsx scripts/validate-content.ts` después de cada tanda.

El paso 4 es el que sostiene la auditoría: el `link` no es decorativo, es la prueba.
Varios discursos viejos (Hinckley 1980, Ashton 1988, Oaks 1986, Holland 1974) **no
están en línea en español**; en esos casos la página del manual que los cita es la
única verificación posible, y alcanza.
