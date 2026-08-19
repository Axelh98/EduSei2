# Auditoría de citas — R250 (Lecciones 1 a 28)

Registro acumulado de la revisión de las citas proféticas/de líderes (secciones `enseñanza`) de las lecciones de Religión 250. Se verificó cada cita contra el discurso o libro original en `churchofjesuschrist.org` (vía búsqueda web + lectura del discurso completo). Las citas de Escrituras (`escrituras`) ya tenían `link` correcto y no se tocaron a fondo.

# Parte 1 — R250-resumen-l01-l07.ts (Lecciones 1 a 7)


## Problema estructural encontrado (afecta a las 9 citas de `enseñanza`)

El tipo `Seccion` para `enseñanza` exige `autor`, `fuente`, `texto` y **`link`** como campos separados. En el archivo original, ninguna cita de `enseñanza` tenía el campo `link`: la URL venía pegada como texto plano dentro de `fuente`, sin `https://` y sin `?lang=spa`. Se agregó el campo `link` correcto en las 9 citas.

## Resultado por lección

| Lección | Autor | Estado original | Acción tomada |
|---|---|---|---|
| 1 | Élder Kim B. Clark | ✅ Cita textual correcta, URL correcta | Se agregó `link` |
| 1 | Élder David A. Bednar | ⚠️ Parafraseada, mezclaba ideas de distintos párrafos del discurso y agregaba una frase («acceso a Su fortaleza y poder redentor») que no está en ese discurso | Se reemplazó por texto textual del discurso real + `link` |
| 2 | Presidente Russell M. Nelson | ⚠️ Cita real pero con una oración agregada que no existe en el discurso | Se recortó a la cita verificable + `link` |
| 2 | Élder Neil L. Andersen | ⚠️ Casi correcta, con variaciones menores de redacción (no textual) | Se ajustó a la redacción exacta + `link` |
| 3 | Presidente Dieter F. Uchtdorf | ❌ **Fabricada**: el discurso citado existe y la URL es correcta, pero el párrafo citado no aparece en ningún lugar del discurso | Se reemplazó por una cita textual real del mismo discurso (sobre el Gran Concilio) + `link` |
| 4 | Élder Russell M. Nelson («La Creación») | ❌ **Fabricada**: la anécdota de cirugía cardíaca no está en este discurso (ni en ningún otro discurso de este nombre) | Se reemplazó por una cita textual real del mismo discurso («La Creación misma testifica de un Creador») + `link`. También se corrigió la fecha (el discurso es de abril de 2000, no julio) |
| 5 | Presidente Russell M. Nelson («La senda del convenio del Señor») | ❌ **Fabricada por completo**: ese título no existe. La URL corresponde en realidad a otro discurso real de Nelson («El templo y el cimiento espiritual de ustedes», octubre de 2021), y el texto citado tampoco aparece ahí | Se reemplazó por una cita textual real de «El templo y el cimiento espiritual de ustedes», sobre convertirse en «hijos del convenio» (temática correcta para la Lección 5) + `link` |
| 6 | Élder Bruce R. McConkie (libro) | ⚠️ No verificable en línea | Libro, autor y editorial confirmados (*The Promised Messiah*, Deseret Book, 1978) vía fuentes secundarias; la cita textual y el número de página no se pudieron verificar porque el libro no está en `churchofjesuschrist.org`. Se dejó `link: ""` con nota aclaratoria, siguiendo el protocolo de la skill |
| 7 | Élder D. Todd Christofferson («La expiación de Jesucristo») | ❌ **Fabricada por completo**: ni el título ni la URL corresponden a ningún discurso real de Christofferson de abril de 2017 (su discurso real de esa conferencia fue «La voz de amonestación», sobre un tema distinto) | Se reemplazó por una cita textual real y temáticamente pertinente (justicia y misericordia) de «Libres para siempre, para actuar por sí mismos», octubre de 2014 + `link` |

**Resumen:** de 9 citas, 1 estaba perfecta, 3 tenían alteraciones menores (parafraseo o una frase agregada) y **3 eran directamente fabricadas** (título de discurso inexistente o cita que no aparece en el discurso real), más 1 fuente de libro no verificable en línea pero legítima.

## Ajustes adicionales en `cuestionario` (consecuencia de los reemplazos)

Tres preguntas de reflexión citaban directamente el contenido fabricado y se reescribieron para reflejar las citas reales:

- **Lección 4, pregunta 5**: citaba la anécdota inventada del corazón/cirugía → reescrita citando la frase real («como lo está un pez en una pecera»).
- **Lección 5, pregunta 3**: citaba la frase inventada sobre convenios y fortaleza → reescrita citando la enseñanza real sobre Abraham, Isaac y Jacob.
- **Lección 7, pregunta 3**: citaba la frase inventada «Cristo no quitó las consecuencias; Él las pagó» → reescrita citando la enseñanza real sobre justicia y misericordia.

## Citas correctas para registro (texto final + link)

### Lección 1
**Élder Kim B. Clark** — «Aprended de Mí», discurso a instructores del SEI, 26 de enero de 2018.
`https://www.churchofjesuschrist.org/study/broadcasts/an-evening-with-the-general-authorities/2018/01/learn-of-me?lang=spa`

**Élder David A. Bednar** — «Unidos al Salvador mediante convenios», Para la Fortaleza de la Juventud, febrero de 2022.
`https://www.churchofjesuschrist.org/study/ftsoy/2022/02/02-bound-to-the-savior-through-covenants?lang=spa`

### Lección 2
**Presidente Russell M. Nelson** — «Cómo obtener el poder de Jesucristo en nuestra vida», abril de 2017.
`https://www.churchofjesuschrist.org/study/general-conference/2017/04/drawing-the-power-of-jesus-christ-into-our-lives?lang=spa`

**Élder Neil L. Andersen** — «Hablamos de Cristo», octubre de 2020.
`https://www.churchofjesuschrist.org/study/general-conference/2020/10/45andersen?lang=spa`

### Lección 3
**Presidente Dieter F. Uchtdorf** — «¡Oh cuán grande es el plan de nuestro Dios!», octubre de 2016.
`https://www.churchofjesuschrist.org/study/general-conference/2016/10/o-how-great-the-plan-of-our-god?lang=spa`

### Lección 4
**Élder Russell M. Nelson** — «La Creación», abril de 2000.
`https://www.churchofjesuschrist.org/study/general-conference/2000/04/the-creation?lang=spa`

### Lección 5
**Presidente Russell M. Nelson** — «El templo y el cimiento espiritual de ustedes», octubre de 2021.
`https://www.churchofjesuschrist.org/study/general-conference/2021/10/47nelson?lang=spa`

### Lección 6
**Élder Bruce R. McConkie** — *The Promised Messiah: The First Coming of Christ*, Deseret Book Company, 1978, pág. 28 (según el archivo original; no verificable en línea).
Sin link disponible — fuente impresa.

### Lección 7
**Élder D. Todd Christofferson** — «Libres para siempre, para actuar por sí mismos», octubre de 2014.
`https://www.churchofjesuschrist.org/study/general-conference/2014/10/free-forever-to-act-for-themselves?lang=spa`

## Nota sobre las citas de Escrituras (`escrituras`)

No se auditaron a fondo texto por texto (serían ~21 citas adicionales), pero las 21 referencias tenían formato de link correcto y consistente con el patrón de la skill. Si querés que se verifique también el texto exacto de cada versículo contra churchofjesuschrist.org, se puede hacer en una siguiente pasada.

---

# Parte 2 — R250-resumen-l08-l14.ts (Lecciones 8 a 14)

Mismo problema estructural de origen: ninguna de las 8 citas de `enseñanza` tenía el campo `link` (URL pegada como texto plano dentro de `fuente`). Se agregó en las 8.

## Resultado por lección

| Lección | Autor (original) | Estado encontrado | Acción tomada |
|---|---|---|---|
| 8 | Élder Jeffrey R. Holland (libro) | ⚠️ No verificable en línea | Libro, autor y editorial reales (*Christ and the New Covenant*, Deseret Book, 1997). Se corrigió el título (estaba traducido al español; el libro se publicó en inglés) y se dejó `link: ""` con nota, igual que con McConkie en la parte 1 |
| 8 | Presidente Russell M. Nelson | ❌ **Fabricada**: el discurso y la URL son reales, pero la cita («¿Esto podría ser un accidente?...») no aparece en ese discurso | Se reemplazó por una cita textual real del mismo discurso, sobre el testimonio personal vía revelación + `link` |
| 9 | «El Cristo Viviente: El Testimonio de los Apóstoles» | ✅ Cita textual correcta | Se agregó `link` |
| 10 | Élder Neal A. Maxwell | ✅ Cita textual correcta (traducción fiel del original en inglés) | Se agregó `link` |
| 11 | Élder D. Todd Christofferson | ✅ Cita textual correcta | Se agregó `link` |
| 12 | Presidente Russell M. Nelson | ⚠️ Mitad real (primera oración textual), mitad **fabricada** («vivimos en un mundo saturado de información...» no está en el discurso). Además la URL apuntaba al discurso equivocado (`38nelson` en vez de `11nelson`) | Se recortó a la parte verificada + se corrigió el `link` |
| 13 | Élder Jeffrey R. Holland | ❌ **Fabricada por completo**: el título citado («¿No os lo dejé como ejemplo?») no existe. La URL correspondía en realidad a un discurso real y distinto («¿No somos todos mendigos?», sobre cuidar a los pobres) que no menciona a Zaqueo en ningún momento | Se corrigió el título y se reemplazó la cita por un fragmento textual real del discurso correcto («hacer lo que podamos») |
| 14 | Élder David A. Bednar | ❌ **Cita real pero mal atribuida**: el texto es 100% textual, pero el discurso «Él sana a los que están cargados» (octubre de 2006) lo dio en realidad **Dallin H. Oaks**, no Bednar. Además la URL apuntaba a otro discurso real de Bednar de la misma conferencia («Y no hay para ellos tropiezo») | Se corrigió el autor a Élder Dallin H. Oaks y se corrigió el `link` al discurso correcto |

**Resumen:** de 8 citas, 3 estaban perfectas, 1 no verificable en línea (libro legítimo), 1 mitad-fabricada, 1 con error de URL, y **2 con fabricación grave** (L8 y L13), más **1 caso nuevo de mala atribución de autor** (L14) que no había aparecido en la parte 1.

## Ajustes adicionales por los reemplazos

- **Lección 12, pregunta 4**: citaba la frase fabricada «saturado de información pero escaso de verdad pura» → reescrita citando la frase real y verificada del discurso.
- **Lección 14**: como la cita pasó de Bednar a Oaks, se corrigió la mención al autor en tres lugares más para mantener coherencia interna: el párrafo de `contexto` («el élder Bednar señala...» → «el élder Dallin H. Oaks señala...») y las preguntas 4 y 5 del `cuestionario`.
- **Lección 13**: no hizo falta ajustar `conclusion` ni `cuestionario`, porque ninguna pregunta citaba textualmente la frase fabricada sobre Zaqueo (las preguntas sobre Zaqueo ya se apoyaban en la cita de Escritura de Lucas 19, que es correcta).

## Citas correctas para registro (texto final + link)

### Lección 8
**Élder Jeffrey R. Holland** — *Christ and the New Covenant: The Messianic Message of the Book of Mormon*, Deseret Book, 1997, pág. 3 (libro impreso, no verificable en línea).

**Presidente Russell M. Nelson** — «Revelación para la Iglesia, revelación para nuestras vidas», abril de 2018.
`https://www.churchofjesuschrist.org/study/general-conference/2018/04/revelation-for-the-church-revelation-for-our-lives?lang=spa`

### Lección 9
**«El Cristo Viviente: El Testimonio de los Apóstoles»** — Primera Presidencia y Cuórum de los Doce Apóstoles, 1 de enero de 2000.
`https://www.churchofjesuschrist.org/study/scriptures/the-living-christ-the-testimony-of-the-apostles?lang=spa`

### Lección 10
**Élder Neal A. Maxwell** — «…Absorbida en la voluntad del Padre», octubre de 1995.
`https://www.churchofjesuschrist.org/study/general-conference/1995/10/swallowed-up-in-the-will-of-the-father?lang=spa`

### Lección 11
**Élder D. Todd Christofferson** — «El porqué de la Iglesia», octubre de 2015.
`https://www.churchofjesuschrist.org/study/general-conference/2015/10/why-the-church?lang=spa`

### Lección 12
**Presidente Russell M. Nelson** — «Verdad pura, doctrina pura y revelación pura», octubre de 2021.
`https://www.churchofjesuschrist.org/study/general-conference/2021/10/11nelson?lang=spa`

### Lección 13
**Élder Jeffrey R. Holland** — «¿No somos todos mendigos?», octubre de 2014.
`https://www.churchofjesuschrist.org/study/general-conference/2014/10/are-we-not-all-beggars?lang=spa`

### Lección 14
**Élder Dallin H. Oaks** — «Él sana a los que están cargados», octubre de 2006.
`https://www.churchofjesuschrist.org/study/general-conference/2006/10/he-heals-the-heavy-laden?lang=spa`

## Nota sobre las citas de Escrituras (L08–L14)

Igual que en la parte 1: no se auditaron texto por texto (~21 citas adicionales), pero el formato de link es correcto y consistente.

---

# Parte 3 — R250-resumen-l15-l21.ts (Lecciones 15 a 21)

Mismo bug estructural de origen (sin `link` en las 10 citas de `enseñanza`). Esta tanda tuvo la tasa de fabricación más alta de las tres: 5 de 10 citas tenían el título, la fecha, la URL o el contenido inventados — a veces las cuatro cosas a la vez.

## Resultado por lección

| Lección | Autor (original) | Estado encontrado | Acción tomada |
|---|---|---|---|
| 15 | Élder Jeffrey R. Holland | ⚠️ Real y mayormente textual, pero con un cierre inventado («Que cada semana... esas mismas palabras») que no está en el discurso | Se recortó a lo verificado + `link` |
| 15 | Élder David A. Bednar | ✅ Cita textual correcta | Se agregó `link` |
| 16 | Élder Jeffrey R. Holland | ❌ **Fabricada por completo**: el título real es «Nadie estuvo con Él» (no «Nadie más puede hacer esto»); es de abril de **2009**, no 2012; la URL apuntaba a un año equivocado; la cita citada no existe en el discurso real | Se corrigió título, fecha y URL, y se reemplazó por una cita textual real del mismo discurso |
| 17 | «El Cristo Viviente» | ⚠️ Primera oración textual, pero el resto fue alterado/inventado (la frase sobre tocar las llagas no está en el documento) | Se corrigió citando solo texto real del documento + `link` |
| 17 | Presidente Russell M. Nelson | ❌ **Fabricada por completo**: el título real es «Cristo ha resucitado; la fe en Él moverá montes» (no «La Resurrección del Señor Jesucristo»); la URL apuntaba al discurso equivocado (`47nelson` en vez de `49nelson`); la cita no existe en el discurso real | Se corrigió título y URL, y se reemplazó por una cita textual real |
| 18 | Élder David A. Bednar | ✅ Cita textual correcta | Se agregó `link` |
| 19 | Presidente Russell M. Nelson | ❌ **No localizable**: no se encontró ningún discurso de Nelson con ese título ni en esa URL; título y contenido parecen inventados | ⚠️ **Corregido dos veces**: primero se reemplazó por una cita real pero de otro contexto (Nelson, «Al avanzar juntos»); al consultar el manual oficial de la Lección 19, se encontró que el manual sí cita una fuente para este punto — el élder D. Todd Christofferson, «La redención de los muertos y el testimonio de Jesús» (Conferencia General, octubre de 2000). Se usó esa cita, que es la que corresponde de origen |
| 20 | Presidente Dallin H. Oaks | ❌ **Fabricada por completo**: el título real es «Nuestro Buen Pastor» (no «El buen pastor y sus ovejas»); la URL no corresponde a ningún discurso real; la cita no existe | Se corrigió título y URL, y se reemplazó por una cita textual real del discurso correcto |
| 21 | Presidente Russell M. Nelson | ✅ Cita real (dos oraciones textuales de distintas partes del mismo discurso, unidas) | Se agregó `link` y una elipsis para marcar el salto entre oraciones |
| 21 | Élder Quentin L. Cook | ⚠️ Título correcto, pero la URL apuntaba al discurso equivocado (`45cook` en vez de `52cook`) y la cita («vivimos en una era de desinformación y confusión...») no existe en el discurso real | Se corrigió la URL y se reemplazó por una cita textual real del mismo discurso |

**Resumen:** de 10 citas, 3 estaban perfectas o casi perfectas, 2 tenían alteraciones menores (una frase agregada o cambiada), y **5 tenían fabricaciones graves** — la mayor concentración de las tres tandas auditadas hasta ahora.

## Ajustes adicionales por los reemplazos

- **Lección 16, pregunta 3**: citaba la frase fabricada «infinita, eterna, pero también personal» → reescrita citando la enseñanza real sobre el alejamiento del Espíritu divino.
- Ninguna otra pregunta de cuestionario en esta tanda citaba directamente el contenido fabricado, así que el resto de los cuestionarios quedó sin cambios.

## Citas correctas para registro (texto final + link)

### Lección 15
**Élder Jeffrey R. Holland** — «He aquí el Cordero de Dios», abril de 2019.
`https://www.churchofjesuschrist.org/study/liahona/2019/05/28holland?lang=spa`

**Élder David A. Bednar** — «Para que siempre nos acordemos de Él», junio de 2023.
`https://www.churchofjesuschrist.org/study/liahona/2023/06/04-that-we-may-always-remember-him?lang=spa`

### Lección 16
**Élder Jeffrey R. Holland** — «Nadie estuvo con Él», abril de 2009.
`https://www.churchofjesuschrist.org/study/general-conference/2009/04/none-were-with-him?lang=spa`

### Lección 17
**«El Cristo Viviente: El Testimonio de los Apóstoles»** — 1 de enero de 2000.
`https://www.churchofjesuschrist.org/study/scriptures/the-living-christ-the-testimony-of-the-apostles?lang=spa`

**Presidente Russell M. Nelson** — «Cristo ha resucitado; la fe en Él moverá montes», abril de 2021.
`https://www.churchofjesuschrist.org/study/general-conference/2021/04/49nelson?lang=spa`

### Lección 18
**Élder David A. Bednar** — «La Expiación y el trayecto de la vida terrenal», abril de 2012.
`https://www.churchofjesuschrist.org/study/liahona/2012/04/the-atonement-and-the-journey-of-mortality?lang=spa`

### Lección 19
**Élder D. Todd Christofferson** — «La redención de los muertos y el testimonio de Jesús», octubre de 2000.
`https://www.churchofjesuschrist.org/study/general-conference/2000/10/the-redemption-of-the-dead-and-the-testimony-of-jesus?lang=spa`
*(Esta es la cita que efectivamente aparece en el manual oficial de la Lección 19 — confirmada en múltiples manuales de la Iglesia con el mismo texto.)*

### Lección 20
**Presidente Dallin H. Oaks** — «Nuestro Buen Pastor», abril de 2017.
`https://www.churchofjesuschrist.org/study/general-conference/2017/04/our-good-shepherd?lang=spa`

### Lección 21
**Presidente Russell M. Nelson** — «Revelación para la Iglesia, revelación para nuestras vidas», abril de 2018.
`https://www.churchofjesuschrist.org/study/general-conference/2018/04/revelation-for-the-church-revelation-for-our-lives?lang=spa`

**Élder Quentin L. Cook** — «La bendición de la revelación continua a los profetas y de la revelación personal para guiar nuestra vida», abril de 2020.
`https://www.churchofjesuschrist.org/study/general-conference/2020/04/52cook?lang=spa`

## Nota sobre las citas de Escrituras (L15–L21)

Igual que en las partes anteriores: no se auditaron texto por texto (~21 citas adicionales), pero el formato de link es correcto y consistente.

## Panorama acumulado (L01–L21)

| Tanda | Citas de enseñanza | Perfectas | Alteradas (menor) | Fabricadas/mal atribuidas |
|---|---|---|---|---|
| L01–L07 | 9 | 1 | 3 | 4 (+1 libro no verificable) |
| L08–L14 | 8 | 3 | 1 | 3 (+1 libro no verificable) |
| L15–L21 | 10 | 3 | 2 | 5 |
| **Total** | **27** | **7** | **6** | **12** (+2 libros no verificables) |

De 27 citas de líderes auditadas en las primeras 21 lecciones, prácticamente **la mitad tenía algún grado de fabricación o error grave de atribución**, y solo 1 de cada 4 estaba perfecta desde el origen. El patrón más frecuente: URL apuntando a un discurso real pero distinto del citado, con un título y/o una cita inventados para acompañarlo. Esto confirma que conviene seguir auditando lección por lección antes de dar por buena cualquier cita de este archivo.

## Nota metodológica (agregada tras revisar L19)

Al reemplazar citas fabricadas, el método usado en L01–L21 fue buscar un discurso real y verificado del mismo autor sobre un tema afín — pero **sin consultar primero el manual oficial de la lección** (el `chapterUrl` de cada lección apunta a "Jesus Christ and His Everlasting Gospel Class Prep Material", que en muchos casos ya trae su propia cita de líder para ese punto específico).

En el caso de L19 esto importó: el manual real cita al élder D. Todd Christofferson, «La redención de los muertos y el testimonio de Jesús» (octubre de 2000) — una fuente distinta a la que se había elegido como reemplazo. Se corrigió (ver tabla y cita final más arriba).

**Esto significa que las demás citas "reemplazadas" en este documento (marcadas ❌ en las tres tablas) no fueron verificadas contra el manual oficial de cada lección — solo se confirmó que la cita de reemplazo es real y temáticamente afín.** Es posible que varias de esas lecciones también tengan una cita específica en el manual que sería preferible usar en lugar de la elegida. Si querés, puedo repasar cada una de esas lecciones contra su manual oficial para verificar o corregir el reemplazo.

---

## Segunda pasada: verificación contra el manual oficial (L01–L21)

Se repasó cada lección reemplazada (más algunas que ya habían quedado "verificadas accurate" para confirmar que además coincidieran con el manual) contra su página real en `Jesus Christ and His Everlasting Gospel — Class Prep Material` (`unit-X/lesson-XX-class-prep`). Resultado:

| Lección | Cita que yo había puesto | Cita real del manual | Acción |
|---|---|---|---|
| L03 | Uchtdorf, «¡Oh cuán grande es el plan de nuestro Dios!» | El manual referencia el mismo discurso como lectura opcional («¿Deseas saber más?») | Sin cambios — coincide |
| L04 | Nelson, «La Creación» | El manual referencia el mismo discurso como lectura opcional; la cita principal del manual es de Uchtdorf/Bednar/Hinckley sobre el cuerpo | Sin cambios — fuente correcta, no es la cita principal del manual pero es genuina y pertinente |
| **L05** | Nelson, «El templo y el cimiento espiritual...» | **Élder D. Todd Christofferson**, «El porqué de la senda de los convenios», abril de 2021 | **Corregido** |
| **L07** | Christofferson, «Libres para siempre...» | Christofferson, pero de **«El amor de Dios»**, octubre de 2021 | **Corregido** (mismo autor, discurso distinto) |
| **L08** | Nelson, «Revelación para la Iglesia...» | **Élder Gerrit W. Gong**, «Hosanna y aleluya...», abril de 2020 | **Corregido** |
| L09, L10, L11 | «El Cristo Viviente», Maxwell, Christofferson | Coinciden con el manual | Sin cambios |
| L12 | Nelson, «Verdad pura, doctrina pura...» | Coincide (discurso correcto; se había recortado a la parte verificada en la primera pasada) | Sin cambios |
| **L13** | Holland, «¿No somos todos mendigos?» | Holland, pero de **«Los amó hasta el fin»**, 2002 (lavado de pies, tema real de la lección) | **Corregido** |
| L14 | Oaks, «Él sana a los que están cargados» | El manual usa una cita distinta de Bednar para esta lección, pero la cita de Oaks ya usada es real, verbatim y del tema correcto | Sin cambios — no es la cita exacta del manual pero es válida |
| L15, L16, L18 | Holland, Bednar | Coinciden con el manual (L16 confirmado palabra por palabra) | Sin cambios |
| **L17** | «El Cristo Viviente» + Nelson | «El Cristo Viviente» coincide; el segundo autor real es **Élder D. Todd Christofferson**, «La resurrección de Jesucristo», 2014 | **Corregido** (Nelson → Christofferson) |
| **L19** | Christofferson, «La redención de los muertos...» | Coincide (corregido en el mensaje anterior) | Ya corregido |
| **L20** | «Nuestro Buen Pastor» atribuido a Dallin H. Oaks | El discurso es en realidad del **élder Dale G. Renlund** — error mío de atribución, no del archivo original | **Corregido** (la cita textual ya era correcta, solo el autor estaba mal) |
| **L21** | Nelson, «Revelación para la Iglesia...» + Cook | El manual usa Nelson pero de **«Escúchalo»** (abril de 2020), y en vez de Cook cita a la **hermana Michelle D. Craig**, «La capacidad espiritual» | **Corregido** (ambas citas) |

### Resumen de la segunda pasada

De las lecciones repasadas, **7 tuvieron que corregirse de nuevo** porque la cita real del manual era distinta a la que se había usado como reemplazo (L05, L07, L08, L13, L17, L20, L21), aunque en todos los casos la cita "de reemplazo" original ya era real y verificada — solo no era la fuente que el manual efectivamente usa para esa lección. El caso de L20 fue distinto: no era un problema del archivo del usuario, sino un error mío al atribuir el discurso a Dallin H. Oaks en vez de a Dale G. Renlund.

**Conclusión:** para este tipo de contenido curricular oficial, verificar "¿es una cita real de este autor?" no alcanza — hace falta cruzar contra el manual de la lección específica, porque el patrón de fabricación en el archivo original mezclaba nombres, discursos y fechas de manera que a veces coincidía por casualidad con el tema pero nunca con la fuente que realmente corresponde a esa lección.

## Panorama acumulado (L01–L21)

De las 27 citas de líderes en las 21 lecciones:
- **~9** eran textuales y de la fuente correcta desde el origen (incluye a las que coincidieron en la segunda pasada).
- **~6** tenían alteraciones menores (parafraseo, frase agregada) que se corrigieron a texto exacto.
- **~12** estaban fabricadas o mal atribuidas de origen, y requirieron reemplazo — de las cuales 7 necesitaron un segundo ajuste tras cruzar con el manual oficial.
- **2** son de libros impresos, no verificables en línea pero con título/autor/editorial confirmados.

El archivo `.ts` de cada tanda y este README quedan actualizados con el resultado final de ambas pasadas.

---

# Parte 4 — R250-resumen-l22-l28.ts (Lecciones 22 a 28)

Mismo bug estructural de origen, con una variante: ninguna de las 11 citas de `enseñanza` tenía el campo `link` — y a diferencia de las tandas anteriores, tampoco había una URL pegada como texto dentro de `fuente` en la mayoría de los casos (solo un URL suelto, muchas veces apuntando al discurso equivocado). Esta tanda se auditó con el método corregido desde el inicio: cruce contra el manual oficial de cada lección (`chapterUrl`, vía `web_search` dado que es una SPA) en la misma pasada, no en una segunda ronda separada.

Además, por primera vez se auditó también el contenido narrativo (`contexto` y `conclusion`) de las 7 lecciones, no solo las citas formales de `enseñanza` — ver la subsección al final de esta parte.

## Resultado por lección (citas de `enseñanza`)

| Lección | Autor (original) | Estado encontrado | Acción tomada |
|---|---|---|---|
| 22 | Presidente Dieter F. Uchtdorf | ✅ Cita real y prácticamente textual (coincide palabra por palabra con la traducción oficial en las partes conservadas, solo recortada) | Se agregó `link` |
| 22 | Presidente Russell M. Nelson («La Restauración de la plenitud del Evangelio...») | ⚠️ **Cita mezclada**: solo una frase («la Restauración prometida avanza por medio de la revelación continua») pertenece realmente a la Proclamación citada. El resto («apenas están observando el principio», «la Restauración continua necesita revelación continua») son frases reales de Nelson pero de **otras dos fuentes distintas** (una entrevista de octubre de 2018 y el discurso «El templo y el cimiento espiritual de ustedes», octubre de 2021), atribuidas todas a la Proclamación como si fuera una sola cita continua | Se reemplazó por texto 100% textual de la Proclamación + `link` correcto |
| 23 | Presidente Russell M. Nelson («Las bendiciones del templo ayudan a preparar un pueblo para la Segunda Venida») | ❌ **Título fabricado**: ese título no existe. La fuente original ni siquiera traía una URL de discurso (solo "noticias.laiglesiadejesucristo.org" sin slug). El discurso real es «El Señor Jesucristo vendrá de nuevo» (octubre de 2024); el contenido citado sí es real, tomado de dos párrafos distintos del discurso correcto | Se corrigió el título y se agregó el `link` correcto (`57nelson`) |
| 23 | «El Cristo Viviente: El Testimonio de los Apóstoles» | ⚠️ La segunda mitad es textual, pero la primera mitad («Testificamos solemnemente que Él volverá a reinar triunfalmente... el reinado de paz y justicia será la herencia permanente de los fieles») **no aparece en el documento real** — es una paráfrasis con una cláusula agregada que no existe en el texto oficial | Se reemplazó por el texto real del documento + `link` |
| 24 | Presidente Dallin H. Oaks | ✅ Cita textual casi perfecta (solo se omitió una oración introductoria del párrafo, sin alterar el resto) | Se agregó `link` |
| 25 | Presidente Dieter F. Uchtdorf («Los mejores tiempos y los peores tiempos») | ❌ **Fabricada por completo**: ese título no existe. El slug de la URL (`it-works-wonderfully`) correspondía a un discurso real y distinto, «¡Funciona de maravilla!» (octubre de 2015); la cita citada no aparece en ningún discurso de Uchtdorf con ese título | Se corrigió título, fecha y cita por texto real de «¡Funciona de maravilla!» + `link` |
| 26 | Presidente Russell M. Nelson («Sigan al profeta») | ❌ **Fabricada por completo**: ese título no existe (no es un discurso real de Nelson). La URL (`46nelson`, abril de 2019) corresponde en realidad a «Ven, sígueme»; la cita tampoco aparece ahí. El texto citado no se encontró en ningún discurso de Nelson | Se reemplazó por una cita textual real y temáticamente perfecta de «Podemos actuar mejor y ser mejores» (`36nelson`, abril de 2019 — sesión de sacerdocio) + `link` |
| 27 | «El Cristo Viviente: El Testimonio de los Apóstoles» | ⚠️ La primera oración es textual, pero la segunda («Sentimos el impulso de pararnos como testigos de Dios en todo tiempo y en todas cosas y en todos los lugares») **no existe en el documento** — mezcla lenguaje de Mosíah 18:9 que no está en «El Cristo Viviente» | Se recortó a texto 100% real (agregando la oración anterior verificada, sobre «el gran Rey Emanuel») + `link` |
| 27 | "Élder Sharon Eubank" | ❌❌ **Doble error**: (1) título de tratamiento incorrecto — Sharon Eubank es mujer; en esa fecha era primera consejera de la Presidencia General de la Sociedad de Socorro, tratamiento correcto "Hermana"; (2) URL con slug equivocado (`12eubank` en vez de `42eubank`); (3) la cita citada no aparece en el discurso real | Se corrigió el título a «Hermana Sharon Eubank», se corrigió el `link` (`42eubank`), y se reemplazó la cita por texto real del discurso |
| 28 | Élder D. Todd Christofferson («El porqué de la Iglesia») | ❌ **Cita fabricada bajo fuente real**: el discurso «El porqué de la Iglesia» (2015) es real y ya se había verificado en la Lección 11 (Parte 2), pero la cita puesta en la Lección 28 **no aparece en ese discurso**. La cita sí es real, pero de un artículo distinto: «Cómo llegar a ser testigo de Cristo» (Liahona, marzo de 2008) — que además es la fuente que efectivamente usa el manual oficial de esta lección | Se corrigió la fuente a «Cómo llegar a ser testigo de Cristo» + `link`, manteniendo la primera oración (que sí era textual de esa fuente real) |
| 28 | Élder Neil L. Andersen («Hablamos de Cristo») | ⚠️ Primera y tercera oración textuales; la oración del medio («El testimonio de Cristo no es exclusivo de los líderes ni de los misioneros: es la responsabilidad de cada discípulo») **no aparece en el discurso** | Se reemplazó la oración del medio por la oración real que sigue en el discurso + `link` |

**Resumen:** de 11 citas, 2 eran textuales o casi perfectas desde el origen (L22 Uchtdorf, L24 Oaks), 4 tenían alteraciones menores — una oración fabricada o mezclada dentro de una cita mayormente real (L22 Nelson, L23 "El Cristo Viviente", L27 "El Cristo Viviente", L28 Andersen) — y **4 estaban fabricadas de forma grave** (título de discurso inexistente y/o cita ausente del discurso real): L23 Nelson, L25 Uchtdorf, L26 Nelson, L27 Eubank, más **1 caso de cita real bajo fuente incorrecta** (L28 Christofferson) y **1 caso de error de tratamiento por género** (L27 Eubank, tratada como "Élder" en vez de "Hermana"). En 3 de los 4 reemplazos por fabricación grave (L23, L26, L27 Eubank), el contenido de reemplazo se cruzó contra el manual oficial de la lección en la misma pasada; en el caso de L28 Christofferson, la cita corregida resultó ser exactamente la que usa el manual oficial.

## Ajustes adicionales en `contexto` y `cuestionario` (consecuencia de los reemplazos)

- **Lección 22**: se corrigió la cita informal de Nelson en `contexto` (la entrevista de octubre de 2018) para que coincida con la traducción oficial de Church News en español, y se precisó la fecha y ocasión (dedicación del Templo de Concepción, Chile).
- **Lección 23**: se ajustaron las preguntas 5 y 6 del `cuestionario`, que citaban la frase fabricada «volverá a reinar triunfalmente»/«volverá triunfalmente» de «El Cristo Viviente» → reescritas citando «regirá como Rey de reyes y reinará como Señor de señores» y «regresará a la tierra», que sí son textuales.
- **Lección 25**: se ajustó la pregunta 4 del `cuestionario`, que citaba la frase fabricada de Uchtdorf «llegar a tener Su corazón, Sus manos, Sus pies» → reescrita citando la frase real «deseamos seguirlo a Él y actuar en armonía con Su palabra».
- **Lección 26**: se reescribió la `conclusion`, que parafraseaba la frase fabricada de Nelson «cada día puede ser mejor... cada semana más llena de atributos de Cristo» → ahora cita la idea real («al escoger arrepentirnos, escogemos llegar a ser más semejantes a Jesucristo»).
- **Lección 27**: se ajustó la pregunta 3 del `cuestionario`, que citaba la frase fabricada de Eubank «diseñada para ser suficiente para el siguiente paso» → reescrita citando la frase real «avanzar unos pasos más en la senda de los convenios, aun cuando esté demasiado oscuro para ver muy lejos».
- **Lección 28**: se corrigió la cita informal de Christofferson en `contexto` (que repetía la misma fabricación que la sección `enseñanza`) para que coincida con el texto real de «Cómo llegar a ser testigo de Cristo». Se ajustó también la pregunta 4 del `cuestionario`, que citaba la frase no verificable «el mejor sermón es una vida bien vivida» → reescrita citando la frase real sobre reflejar a Cristo en las acciones, palabras y pensamientos.

## Auditoría de contenido narrativo (`contexto`/`conclusion`) — nuevo en esta tanda

A pedido del usuario, esta fue la primera pasada que revisó no solo las citas formales de `enseñanza`, sino también las afirmaciones históricas, anécdotas y frases entre comillas dentro de `contexto` y `conclusion` de las 7 lecciones. Resultado:

- **Lección 22 — cita de la entrevista de Nelson (octubre 2018)**: verificada como real. La cita «Somos testigos de un proceso de restauración... tomen sus vitaminas, descansen» proviene de declaraciones de Nelson a la prensa tras la dedicación del Templo de Concepción, Chile, el 28 de octubre de 2018 (difundidas por Newsroom de la Iglesia y Church News en español). Se corrigió el texto en `contexto` para que coincida con la traducción oficial de Church News en español, ya que la versión original tenía variaciones menores de redacción respecto a esa traducción.
- **Lección 22 — referencia a Uchtdorf y "Rip Van Winkle"**: verificada como real y coherente con el mismo discurso citado en `enseñanza» («¿Están durmiendo durante la Restauración?», abril de 2014). Sin cambios.
- **Lección 23 — descripción de cómo cierra «El Cristo Viviente»**: el `contexto` decía que el documento "cierra con" la promesa «Testificamos que algún día Él regresará a la tierra», pero esa frase está en el penúltimo párrafo, no en el último (el documento cierra con el testimonio apostólico y el agradecimiento por el Hijo de Dios). Se ajustó la redacción a «incluye, hacia el final,» para mayor precisión. La cita en sí es real.
- **Lección 24 — cita informal de Oaks en `contexto`**: coincide palabra por palabra con la cita formal de `enseñanza`, ya verificada como textual. Sin cambios.
- **Lección 25 — narrativa de Pedro y Andrés, y escrituras parafraseadas**: no se detectaron afirmaciones fabricadas; las escrituras aludidas coinciden con las de la sección `escrituras`.
- **Lección 26 — cita de 3 Nefi 27:27 y Moroni 7 en `contexto`**: coinciden con la sección `escrituras`. Sin cambios.
- **Lección 27 — cita de «El Cristo Viviente» en `contexto`**: («Él es la luz, la vida y la esperanza del mundo...») verificada como 100% textual. Sin cambios.
- **Lección 28 — cita de Christofferson en `contexto`**: repetía la misma cita fabricada que la sección `enseñanza` («Nuestra paciencia, nuestra bondad, nuestro servicio... El mejor sermón es una vida bien vivida»). Corregida para reflejar el texto real de «Cómo llegar a ser testigo de Cristo» (Liahona, marzo de 2008), manteniendo coherencia con la cita formal ya corregida.
- **Lección 28 — cita de Juan 20:18 aludida en `contexto`** («He visto al Señor»): coincide con la cita de Escritura ya presente en la sección `escrituras`. Sin cambios.

**Conclusión de la auditoría narrativa:** de las 7 lecciones, 2 tenían una afirmación fabricada o imprecisa en `contexto` que se filtró desde la cita de `enseñanza` corregida (L22 con la cita de la entrevista, que en realidad solo necesitaba ajuste de traducción, y L28 con la cita de Christofferson, que sí era una fabricación real repetida en dos lugares), y 1 tenía una imprecisión menor de descripción (L23). El resto del contenido narrativo se verificó como fiel a las fuentes.

## Citas correctas para registro (texto final + link)

### Lección 22
**Presidente Dieter F. Uchtdorf** — «¿Están durmiendo durante la Restauración?», conferencia general (sesión de sacerdocio), abril de 2014.
`https://www.churchofjesuschrist.org/study/general-conference/2014/04/are-you-sleeping-through-the-restoration?lang=spa`

**Presidente Russell M. Nelson** — «La Restauración de la plenitud del Evangelio de Jesucristo: Una proclamación para el mundo en el bicentenario», 5 de abril de 2020.
`https://www.churchofjesuschrist.org/study/scriptures/the-restoration-of-the-fulness-of-the-gospel-of-jesus-christ?lang=spa`

### Lección 23
**Presidente Russell M. Nelson** — «El Señor Jesucristo vendrá de nuevo», conferencia general, octubre de 2024.
`https://www.churchofjesuschrist.org/study/general-conference/2024/10/57nelson?lang=spa`

**«El Cristo Viviente: El Testimonio de los Apóstoles»** — 1 de enero de 2000.
`https://www.churchofjesuschrist.org/study/scriptures/the-living-christ-the-testimony-of-the-apostles?lang=spa`

### Lección 24
**Presidente Dallin H. Oaks** — «El desafío de lo que debemos llegar a ser», Liahona, enero de 2001, pág. 40.
`https://www.churchofjesuschrist.org/study/general-conference/2000/10/the-challenge-to-become?lang=spa`

### Lección 25
**Presidente Dieter F. Uchtdorf** — «¡Funciona de maravilla!», conferencia general, octubre de 2015.
`https://www.churchofjesuschrist.org/study/general-conference/2015/10/it-works-wonderfully?lang=spa`

### Lección 26
**Presidente Russell M. Nelson** — «Podemos actuar mejor y ser mejores», conferencia general (sesión de sacerdocio), abril de 2019.
`https://www.churchofjesuschrist.org/study/general-conference/2019/04/36nelson?lang=spa`

### Lección 27
**«El Cristo Viviente: El Testimonio de los Apóstoles»** — 1 de enero de 2000.
`https://www.churchofjesuschrist.org/study/scriptures/the-living-christ-the-testimony-of-the-apostles?lang=spa`

**Hermana Sharon Eubank** — «Cristo: la luz que resplandece en las tinieblas», Liahona, mayo de 2019, pág. 73.
`https://www.churchofjesuschrist.org/study/general-conference/2019/04/42eubank?lang=spa`

### Lección 28
**Élder D. Todd Christofferson** — «Cómo llegar a ser testigo de Cristo», Liahona, marzo de 2008, pág. 58.
`https://www.churchofjesuschrist.org/study/liahona/2008/03/becoming-a-witness-of-christ?lang=spa`

**Élder Neil L. Andersen** — «Hablamos de Cristo», Liahona, noviembre de 2020, pág. 88.
`https://www.churchofjesuschrist.org/study/general-conference/2020/10/45andersen?lang=spa`

## Nota sobre las citas de Escrituras (L22–L28)

Igual que en las partes anteriores: no se auditaron texto por texto (~21 citas adicionales), pero el formato de link es correcto y consistente, y no se detectó nada sospechoso al usarlas de referencia cruzada durante la auditoría narrativa.

---

## Panorama acumulado final (L01–L28)

| Tanda | Citas de enseñanza | Perfectas / casi perfectas | Alteradas (menor) | Fabricadas/mal atribuidas |
|---|---|---|---|---|
| L01–L07 | 9 | 1 | 3 | 4 (+1 libro no verificable) |
| L08–L14 | 8 | 3 | 1 | 3 (+1 libro no verificable) |
| L15–L21 | 10 | 3 | 2 | 5 |
| L22–L28 | 11 | 2 | 4 | 4 (+1 cita real bajo fuente incorrecta) |
| **Total** | **38** | **9** | **10** | **16** (+2 libros no verificables, +1 cita real bajo fuente incorrecta) |

De las 38 citas de líderes auditadas en las 28 lecciones del curso, aproximadamente **el 42% tenía algún grado de fabricación o error grave de atribución**, y menos de 1 de cada 4 estaba perfecta desde el origen. El patrón dominante se mantuvo constante en las cuatro tandas: título de discurso inventado o URL apuntando a un discurso real pero distinto del citado, acompañado de una cita que no existe en ningún discurso real de ese autor — o, en casos más sutiles, una cita mayormente real con una o dos cláusulas agregadas que no están en el texto oficial. La tanda L22–L28 aportó además dos hallazgos nuevos: una cita genuina atribuida a la fuente equivocada (L28 Christofferson, correcta en contenido pero mal citada de origen) y un error de tratamiento por género (L27, "Élder" aplicado a una mujer).

A partir de la tanda L22–L28 se auditó también, por primera vez, el contenido narrativo (`contexto`/`conclusion`) de las lecciones — no solo las citas formales de `enseñanza`. El resultado sugiere que vale la pena extender esa revisión hacia atrás (L01–L21) en una futura pasada, ya que las lecciones 22 y 28 mostraron que el mismo patrón de fabricación de las citas de `enseñanza` a veces se filtra también a las alusiones informales dentro de `contexto`.

El archivo `.ts` de cada tanda y este README quedan actualizados con el resultado final de las cuatro partes.

---

## Actualización: anclas de párrafo en los links de `enseñanza` (L01–L28)

A pedido del usuario, se agregó una **ancla de párrafo** a los links de las 38 citas de `enseñanza` (las 36 que tienen `link`, ya que 2 son libros impresos sin fuente en línea), siguiendo el mismo patrón que ya usan los links de `escrituras`: `?lang=spa&id=p{inicio}-{fin}#p{inicio}`. El primer número lleva el prefijo `p`, el segundo va sin prefijo; el fragmento `#p{inicio}` hace scroll automático al primer párrafo citado.

**Método:** para cada cita, se descargó el HTML real de la página (`general-conference`, `liahona`, `broadcasts` y `scriptures` sí traen los párrafos con atributos `id="pN"` en el HTML servido, a diferencia de las páginas bajo `/study/manual/`, que son una SPA sin contenido accesible) y se ubicó el/los párrafo(s) donde aparece el `texto` citado, comparando el inicio y el final de la cita.

**Resultado:** se agregó el ancla correcta a las 36 citas con link. Casos especiales:

- **L06 (McConkie) y L08 (Holland, libro)**: sin `link` — no aplica, son libros impresos.
- **L22 Uchtdorf** («¿Están durmiendo durante la Restauración?») **y L27 Eubank**: la cita real combina fragmentos de párrafos muy alejados entre sí dentro de discursos largos (L22: párrafos 9, 11 y 59 de 64; L27: párrafos 3 y 30 de un total similar). Usar el rango completo habría resaltado casi todo el discurso, así que el ancla apunta solo al primer fragmento citado (`p9` y `p3` respectivamente) — el salto de scroll sigue llevando directo al inicio de la cita.
- **L23 Nelson** («El Señor Jesucristo vendrá de nuevo», octubre de 2024): este discurso usa un esquema de id de párrafo más nuevo, con hashes alfanuméricos (`id="p_leSJJ"`) en lugar de números secuenciales (`id="p14"`). El ancla se construyó seleccionando el rango con la misma sintaxis de guion (`p_leSJJ-p_hbgf4#p_leSJJ`), verificado directamente contra el HTML real del discurso — `p_leSJJ` es el párrafo «Mis queridos hermanos y hermanas...» y `p_hbgf4` es el párrafo «Las bendiciones del templo...»; el salto de scroll al primer párrafo (`#p_leSJJ`) funciona correctamente. **[Corregido]** También se había detectado que las dos oraciones citadas en el archivo estaban en orden inverso al del discurso real — el archivo decía primero "Las bendiciones del templo..." y después "Mis queridos hermanos...", cuando el discurso real es al revés. Se corrigió el orden de la cita para que coincida con el discurso real (y con el orden que ya reflejaba el `link`).

**Hallazgo adicional — L09 «El Cristo Viviente»:** al ubicar el párrafo de esta cita se detectó que su tercera oración («Él llevó a cabo una expiación perfecta de los pecados de toda la humanidad, dando vida al principio de la resurrección») **no aparece en el documento real** (el párrafo 4 termina en «el Redentor del mundo»). Esta cita había sido marcada como "✅ Cita textual correcta" en la Parte 2 de esta auditoría — esa verificación fue incompleta. **[Corregido]** Se recortó el `texto` de la cita a las dos primeras oraciones (100% textuales del párrafo 4); el `link` ya anclaba correctamente a `p4`.

---

## Estado actual y próximo paso

Con las citas de `enseñanza` de las 28 lecciones verificadas (dos rondas: verificación de fuente real + cruce con el manual oficial, más la pasada de anclas de párrafo que además destapó y corrigió un error que había pasado desapercibido en la Parte 2), **la auditoría de citas de líderes del curso completo (L01–L28) se considera terminada.**

Quedan pendientes, identificados pero no ejecutados:

1. **Auditoría del contenido narrativo (`contexto`/`conclusion`) de L01–L21.** Este tipo de revisión solo se aplicó a L22–L28 (Parte 4) y ahí encontró afirmaciones fabricadas filtradas desde citas de `enseñanza` ya corregidas (L22, L28). Es razonable esperar casos similares en L01–L21, sobre todo porque ahí hubo más citas de `enseñanza` fabricadas de origen (12 de 27) que en L22–L28. **Este es el próximo paso a realizar.**
2. Verificación texto por texto de las ~84 citas de `escrituras` (nunca auditadas a fondo en ninguna de las cuatro partes, solo se validó el formato del link).
3. Revisión de precisión doctrinal de los `cuestionario` que no citan directamente ninguna cita fabricada corregida.

Por ahora la auditoría se pausa acá; el punto 1 es el próximo paso acordado.


---

## Actualización (agosto 2026): las 2 citas de libro, cerradas

Las dos citas que habían quedado con `link: ""` por ser libros impresos —L06
(McConkie) y L08 (Holland)— ya no son un pendiente. **Ambos libros están citados por
el material oficial de preparación para la clase del propio curso** (*Jesucristo y Su
Evangelio sempiterno*, 2023), en la misma lección en la que el curso las usa. Esa
página es la verificación posible y alcanza, igual que con los discursos viejos de
DyC-1 que no existen en español.

Con esto **el curso queda en 0 banderas: las 38 citas tienen `link`.**

### L06 — Élder Bruce R. McConkie ⚠️ Cita distinta y referencia mal transcrita

- **Fuente declarada:** *The Promised Messiah: The First Coming of Christ*, Deseret Book
  Company, 1978, **pág. 28** — sin `link`.
- **Verificación:** el manual de esta misma lección cita ese libro, pero el pasaje real
  está en el **capítulo 28, pág. 453**. El «pág. 28» del curso parece ser el número de
  capítulo transcrito como página. El texto del curso tampoco era la redacción del
  manual: decía lo mismo con otras palabras.
- **Acción tomada:** ✅ corregida. Texto del manual, referencia completa (cap. 28,
  pág. 453) y `link` a la página del material de preparación. **Se conserva el autor.**

> «Cada ordenanza divina o función ordenada por Dios, cada sacrificio, simbolismo y semejanza […], todo fue establecido […] para dar testimonio de [Jesucristo] […]. Es conveniente y apropiado que busquemos semejanzas de Cristo en todas partes y que las usemos repetidas veces para mantenerlo a Él y mantener Sus leyes de manera prominente en la mente.»
>
> `https://www.churchofjesuschrist.org/study/manual/jesus-christ-and-his-everlasting-gospel-class-prep-material-2023/lesson-06-class-prep?lang=spa`

### L08 — Élder Jeffrey R. Holland ⚠️ Cita distinta y página mal

- **Fuente declarada:** *Christ and the New Covenant: The Messianic Message of the Book
  of Mormon*, Deseret Book, 1997, **pág. 3** — sin `link`.
- **Verificación:** el manual de esta lección cita ese libro dos veces, ambas de la
  **pág. 89**, y sobre Isaías 53 y 61 —el tema de la lección, «Aceptar a Jesucristo
  como el Mesías prometido»—, no sobre el Libro de Mormón como nuevo convenio. El
  pasaje de la pág. 3 no se pudo verificar en ninguna fuente en línea.
- **Acción tomada:** ✅ reemplazada por la cita del manual, temáticamente correcta para
  la lección, con referencia y `link`. **Se conserva el autor.**

> «[Isaías 53 es] la declaración más sublime, más larga y más poética sobre la vida, la muerte y el sacrificio expiatorio del Señor Jesucristo.»
>
> `https://www.churchofjesuschrist.org/study/manual/jesus-christ-and-his-everlasting-gospel-class-prep-material-2023/lesson-08-class-prep?lang=spa`

### Lo que esto agrega al método

«Es un libro impreso, no hay link posible» resultó ser una conclusión apresurada.
**Antes de dar por no verificable una cita de libro, hay que mirar si el manual oficial
de esa misma lección lo cita** — en los dos casos lo hacía, y en los dos casos la cita
del curso tenía la página mal y el texto reescrito.
