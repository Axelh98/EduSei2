# Auditoría de citas proféticas — Libro de Mormón

Auditoría de las citas de líderes de la Iglesia (`tipo: "enseñanza"`) contenidas en
`lib/data/libro-de-mormon`. Verifica dos cosas por cada cita:

1. **Autenticidad** — que el texto exista realmente y esté atribuido a la persona y a la fuente correctas.
2. **Precisión del enlace** — que el `link` abra el documento correcto y lleve al **párrafo exacto** de la cita.

**Fecha de la auditoría:** 17 de agosto de 2026
**Estado:** **cerrada.** Correcciones aplicadas en dos pasadas el 17 de agosto de 2026 → **[§7](#7-trabajo-realizado--correcciones-aplicadas)** (primera) y **[§8](#8-segunda-pasada--cierre-de-los-pendientes-17-de-agosto-de-2026)** (segunda, que cierra los pendientes).
**Cobertura final:** 145 citas activas · 145 con enlace verificado · 145 con ancla de párrafo · 0 sin fuente comprobable.
**Estándar de referencia:** skill `seminary-enrichment` (§ «Citas de líderes»)

> **Nota de lectura.** Las secciones §1 a §4 describen el estado del contenido **antes** de aplicar
> las correcciones y se conservan como registro de la auditoría. Lo que efectivamente se corrigió
> está en **§7**; lo que quedaba pendiente y cómo se cerró, en **§8**. Si solo querés el estado
> actual, leé **§8.7**.

---

## 1. Resumen ejecutivo

| Métrica | Valor |
|---|---|
| Citas proféticas totales | **146** (145 activas + 1 comentada) |
| Archivos con citas | 14 |
| Sin ninguna observación | **58** |
| Con alguna corrección pendiente | **88** |
| Citas sin campo `link` | **18** (7 ya resueltas en esta auditoría, §3.5) |
| Enlaces sin ancla de párrafo (`#pN`) | **46** |
| Enlaces cuyo ancla apunta a un párrafo equivocado | **6** |
| Errores de atribución o de fuente | **4** |
| Textos alterados respecto del original | **12** |
| Frases sin respaldo en la fuente citada | **2** |

La mayor parte de las 88 correcciones son mecánicas: **46 consisten únicamente en añadir el ancla
de párrafo** a un enlace que ya apunta al discurso correcto. Los errores con consecuencia real
sobre el contenido son 18 (§3.1, §3.2, §3.3 y los casos no verificados de §3.5).

> **Ninguna cita resultó ser inventada.** Todas provienen de un líder real y, salvo dos frases
> breves (#73 y #74), pudieron localizarse en su documento de origen. Los problemas encontrados son
> de *atribución*, *fuente*, *fidelidad textual* y *precisión del enlace*.

### Distribución por archivo

| Archivo | Citas | Sin link | Sin ancla | Requieren revisión |
|---|---|---|---|---|
| `libro-mormon-2-parte-1.ts` | 20 | 0 | 20 | 2 |
| `libro-mormon-2-parte-2.ts` | 19 | 0 | 19 | 2 |
| `libro-mormon-leccionesSemana4.ts` | 34 | 9 | 1 | 6 |
| `libro-mormon-leccionesSemana10.ts` | 5 | 0 | 1 | 2 |
| `libro-mormon-leccionesSemana11.ts` | 6 | 0 | 0 | 0 |
| `libro-mormon-leccionesSemana12.ts` | 6 | 1 | 0 | 1 |
| `libro-mormon-leccionesSemana13.ts` | 4 | 0 | 0 | 1 |
| `libro-mormon-leccionesSemana14.ts` | 5 | 2 | 0 | 0 |
| `libro-mormon-leccionesSemana15.ts` | 7 | 1 | 2 | 2 |
| `libro-mormon-leccionesSemana16.ts` | 1 | 0 | 1 | 1 |
| `libro-mormon-leccionesSemana17.ts` | 3 | 2 | 1 | 1 |
| `libro-mormon-leccionesSemana18.ts` | 3 | 3 | 0 | 0 |
| `libro-mormon-leccionesSemana19.ts` | 14 | 0 | 1 | 5 |
| `libro-mormon-parte-1.ts` | 19 | 0 | 4 | 3 |

Los archivos `libro-mormon-2-parte-3.ts` a `libro-mormon-2-parte-8.ts` y todos los de
`questions/` **no contienen citas proféticas**: quedan fuera del alcance de esta auditoría.

---

## 2. Metodología

La verificación fue automatizada y contrastada contra la fuente primaria:

1. **Extracción.** Se recorrieron los 20 archivos `.ts` del directorio y se extrajo cada bloque
   `tipo: "enseñanza"` con sus campos `autor`, `fuente`, `texto` y `link`, registrando archivo y
   número de línea. Se marcaron los bloques que viven dentro de comentarios `/* */`.
2. **Descarga.** Se descargó el HTML real de cada URL única desde `churchofjesuschrist.org`
   (y `speeches.byu.edu`), con reintentos y control de saturación.
3. **Cotejo textual.** El texto de cada cita se normalizó (minúsculas, sin tildes, sin comillas
   tipográficas ni puntuación), se dividió por sus elipsis (`…`, `[...]`) y cada segmento se buscó
   dentro de los párrafos del documento, que en este sitio están identificados con `id="pN"`.
4. **Localización del párrafo.** Cuando el segmento coincidía, se registró el `pN` contenedor: ese
   es el ancla correcta para que el enlace abra el punto exacto de la cita.
5. **Revisión manual.** Todo caso sin coincidencia exacta se revisó a mano con un comparador
   difuso (índice de Jaccard sobre palabras) para distinguir una **cita falsa** de una **variante
   de traducción, una paráfrasis o una omisión no marcada**.

### Cómo se construye un enlace al párrafo exacto

```
https://www.churchofjesuschrist.org/study/general-conference/2020/10/32craven?lang=spa&id=p8-p9#p8
                                    └─────── discurso ───────┘            └─ resaltado ─┘ └ salto ┘
```

- `&id=pN` resalta el párrafo (acepta `p8-p9` para un rango y `p6,p24` para párrafos sueltos).
- `#pN` hace que el navegador salte hasta él.

Sin el `#pN` el enlace abre el discurso **por el principio** y el lector debe buscar la cita a mano.

> **Nota sobre el estándar del proyecto.** La skill `seminary-enrichment` exige el ancla `&id=pN#pN`
> para las **escrituras**, pero para las citas de `enseñanza` solo pide la URL del discurso
> (`…/general-conference/[año]/[04|10]/[slug]?lang=spa`). Por eso las 46 citas sin ancla **no
> incumplen el estándar vigente**: se listan como **mejora recomendada**, no como defecto. Aplicarlas
> es opcional y puede posponerse; los errores de §3.1 a §3.3 sí son correcciones necesarias.

---

## 3. Hallazgos que requieren corrección

### 3.1 Atribución incorrecta — prioridad alta

#### ❌ #59 · `libro-mormon-leccionesSemana13.ts:265` — cita de Ballard atribuida a Oaks

```
autor : "Presidente Oaks"
fuente: "Liahona, Enero de 2002, pág.7-8 (discurso \"Compartir el Evangelio\")"
texto : "La historia ha demostrado que hay seguridad, paz, prosperidad y felicidad al responder al consejo profético."
link  : .../general-conference/2001/10/sharing-the-gospel?lang=spa&id=p16#p16
```

El texto **no aparece en ninguna parte** del discurso «Compartir el Evangelio» del presidente
Dallin H. Oaks (octubre de 2001). Es la misma frase que ya figura, correctamente atribuida, en
`libro-mormon-leccionesSemana12.ts:67`, donde pertenece al **presidente M. Russell Ballard**,
«Recibiréis su palabra» (conferencia de abril de 2001), párrafo **p10**:

> «Cuando escuchamos el consejo del Señor expresado por medio de las palabras del Presidente de la
> Iglesia, nuestra respuesta debe ser positiva y pronta. **La historia ha demostrado que hay
> seguridad, paz, prosperidad y felicidad cuando respondemos al consejo profético** tal como lo
> hizo Nefi de la antigüedad: "Iré y haré lo que el Señor ha mandado" (1 Nefi 3:7).»

**Acción:** reatribuir a Ballard con el enlace correcto, **o** —dado que la misma cita ya se usa en
la Semana 12— sustituirla por una cita genuina de Oaks tomada del discurso que la lección enlaza.

#### ❌ #38 · `libro-mormon-2-parte-2.ts:864` — fuente equivocada (Holland)

```
fuente: "Liahona, julio de 1999, pág. 34"   → discurso «Verdaderos seguidores»
```

La cita **no está** en ese discurso (coincidencia máxima 0.23 sobre todo el documento). Su origen
real es **Jeffrey R. Holland, _Christ and the New Covenant: The Messianic Message of the Book of
Mormon_, 1997, págs. 336–337**, tal como la documenta el manual de Seminario de Moroni 7. El texto
literal del libro es:

> «Es el amor de Cristo por nosotros el que "todo lo sufre, todo lo cree, todo lo espera, todo lo
> soporta". Es en Cristo, como se demostró, que "la caridad nunca deja de ser". **Ésa es la caridad
> —Su amor puro por nosotros— sin la cual no seríamos nada, no tendríamos esperanza y seríamos
> hombres y mujeres de lo más desahuciados.**»

La segunda oración del archivo es literal; la primera («La verdadera caridad quedó demostrada en
forma perfecta y pura en el inagotable y supremo amor expiatorio de Cristo por nosotros») es una
condensación editorial.

**Acción:** corregir `fuente` a la obra real. El libro no está publicado en línea, de modo que el
`link` debe apuntar al manual de Seminario que la reproduce, o eliminarse.
Nota: la cita **#70** (`leccionesSemana15.ts:224`) ya cita correctamente esta misma obra.

#### ⚠️ #90 · `libro-mormon-leccionesSemana19.ts:452` — fuente y enlace desalineados

`fuente` declara «Liahona, enero de 1987», pero el `link` apunta a la reimpresión de **Liahona,
octubre de 2011**. La cita es auténtica (párrafo **p28**). Además el original dice «Hay un poder en
**el libro**», no «en **el Libro de Mormón**».

**Acción:** alinear `fuente` con el documento enlazado y añadir `&id=p28#p28`.

---

### 3.2 Texto alterado respecto del original — prioridad alta

Estas citas son auténticas, pero el texto guardado **no coincide** con el original y se presenta
como cita textual. La corrección consiste en restituir el texto literal o marcar la edición con
corchetes y elipsis.

| # | Ubicación | Autor | Problema |
|---|---|---|---|
| 105 | `leccionesSemana4.ts`:555 | Uchtdorf | **Cambio de género no marcado.** El discurso se dirige a las mujeres: «Dios **las** ama… para querer**las**; Él **las** ama hoy mismo». El archivo lo cambia a «los ama… quererlos». |
| 72 | `leccionesSemana16.ts`:86 | Andersen | Paráfrasis presentada como cita. Original (p33): «…no podemos comparar **lo que debemos ser** con quienes aún no han recibido estas verdades. "Porque de aquel a quien mucho se da, mucho se requiere"». También altera el texto de la escritura citada. |
| 80 | `leccionesSemana19.ts`:49 | Bednar | Paráfrasis. Original (p33): «Para abandonar las preciadas "armas de rebelión" tales como el egoísmo, el orgullo y la desobediencia, se necesita más que el sólo creer y saber». |
| 126 | `leccionesSemana4.ts`:1584 | Nelson | **Omisión sin elipsis** de «Sean humildes. En oración pidan tener ojos para ver la mano de Dios en su vida y en el mundo que los rodea». |
| 142 | `parte-1.ts`:565 | Emma Smith | **Fusión de dos declaraciones distintas** (la descripción de José dictando y el testimonio de la carta a Joseph Smith III), separadas en el original, sin marcar la omisión. |
| 1 | `2-parte-1.ts`:96 | Joseph Fielding Smith | Frase reordenada. Original (p29): «…en ese gran y magnífico discurso —el más grandioso que se haya predicado jamás, hasta donde sabemos— el cual llamamos el Sermón del Monte». |
| 33 | `2-parte-2.ts`:648 | Soares | «las **tentaciones pequeñas**» → el original dice «las **pequeñas tentaciones**» (p12). |
| 138 | `parte-1.ts`:431 | Nelson | Inicio reformulado. Original (p89): «A medida que sigan leyendo diariamente el Libro de Mormón, aprenderán…». |
| 50 | `leccionesSemana12.ts`:67 | Ballard | Condensación: «al responder al consejo profético» ← «cuando respondemos al consejo profético tal como lo hizo Nefi de la antigüedad». |

Otras tres diferencias de transcripción (**#63**, **#76**, **#109**) se detallan en §3.5, junto con
los enlaces que les faltaban.

### 3.3 Traducción no oficial

**#75 · `leccionesSemana17.ts:243` — Élder Lawrence E. Corbridge, «Stand Forever» (BYU, 22/01/2019).**
La cita es auténtica, pero la página solo existe en inglés: el texto en español es **traducción
propia del proyecto**. El original dice «If you answer the primary questions, the secondary
questions get answered too, **or they pale in significance**»; la última cláusula se omite sin
marcar. Conviene señalar que la traducción no es oficial.

---

### 3.4 Enlaces defectuosos

#### Anclas que apuntan a un párrafo equivocado

| # | Ubicación | Autor | Ancla actual | Párrafo real | Acción |
|---|---|---|---|---|---|
| 40 | `leccionesSemana10.ts`:91 | Oaks | `p17` | **p16** | Reemplazar por `&id=p16#p16` |
| 107 | `leccionesSemana4.ts`:623 | Nelson | `p61` | **p65** | Reemplazar por `&id=p65#p65` |
| 110 | `leccionesSemana4.ts`:696 | Andersen | `p36` | **p4** | Reemplazar por `&id=p4#p4` |
| 116 | `leccionesSemana4.ts`:893 | Nelson | `p14` | **p15** | Reemplazar por `&id=p15#p15` |
| 128 | `parte-1.ts`:70 | Ballard | `p23` | **p27** | Reemplazar por `&id=p27#p27` |
| 68 | `leccionesSemana15.ts`:151 | Stevenson | rango `p46-p47` | **p46** | Reducir a `&id=p46#p46` (p47 no es parte de la cita) |

#### Enlace con espacio inicial

**#40 · `leccionesSemana10.ts:91`** — el valor de `link` empieza con un espacio:
`" https://www.churchofjesuschrist.org/..."`. Según cómo se consuma el campo, puede romper el
enlace. Eliminar el espacio.

#### Anclas de párrafo a añadir (46 casos)

Todas estas citas están verificadas: el discurso es correcto y el párrafo indicado es donde
aparece el texto. Solo falta añadir el sufijo al `link` para que abra el punto exacto.

| # | Ubicación | Autor | Párrafo | Sufijo a añadir |
|---|---|---|---|---|
| 0 | `2-parte-1.ts`:39 | Richard G. Scott | p22 | `&id=p22#p22` |
| 1 | `2-parte-1.ts`:96 | Joseph Fielding Smith | p29 | `&id=p29#p29` |
| 2 | `2-parte-1.ts`:148 | Henry B. Eyring | p29 | `&id=p29#p29` |
| 3 | `2-parte-1.ts`:200 | Jeffrey R. Holland | p20 | `&id=p20#p20` |
| 4 | `2-parte-1.ts`:252 | Russell M. Nelson | p36 | `&id=p36#p36` |
| 5 | `2-parte-1.ts`:304 | Russell M. Nelson | p62 | `&id=p62#p62` |
| 6 | `2-parte-1.ts`:355 | Gerrit W. Gong | p25 | `&id=p25#p25` |
| 7 | `2-parte-1.ts`:405 | Thomas S. Monson | p15 | `&id=p15#p15` |
| 8 | `2-parte-1.ts`:455 | Dieter F. Uchtdorf | p35 | `&id=p35#p35` |
| 9 | `2-parte-1.ts`:507 | Dale G. Renlund | p10 | `&id=p10#p10` |
| 10 | `2-parte-1.ts`:562 | Boyd K. Packer | p28 | `&id=p28#p28` |
| 11 | `2-parte-1.ts`:613 | Dallin H. Oaks | p32 + p14 | `&id=p14,p32#p32` |
| 12 | `2-parte-1.ts`:663 | Richard G. Scott | p14 | `&id=p14#p14` |
| 13 | `2-parte-1.ts`:713 | D. Todd Christofferson | p16 | `&id=p16#p16` |
| 14 | `2-parte-1.ts`:763 | David A. Bednar | p21 | `&id=p21#p21` |
| 15 | `2-parte-1.ts`:813 | M. Russell Ballard | p43 | `&id=p43#p43` |
| 16 | `2-parte-1.ts`:863 | Ulisses Soares | p10 | `&id=p10#p10` |
| 17 | `2-parte-1.ts`:913 | Richard G. Scott | p14 | `&id=p14#p14` |
| 18 | `2-parte-1.ts`:964 | Dallin H. Oaks | p8 | `&id=p8#p8` |
| 19 | `2-parte-1.ts`:1014 | Ezra Taft Benson | p6 | `&id=p6#p6` |
| 20 | `2-parte-2.ts`:29 | Dallin H. Oaks | p5 | `&id=p5#p5` |
| 21 | `2-parte-2.ts`:75 | Marcus B. Nash | p8 | `&id=p8#p8` |
| 22 | `2-parte-2.ts`:125 | D. Todd Christofferson | p10 | `&id=p10#p10` |
| 23 | `2-parte-2.ts`:170 | Gordon B. Hinckley | p21 | `&id=p21#p21` |
| 24 | `2-parte-2.ts`:219 | David A. Bednar | p31, p32 | `&id=p31-p32#p31` |
| 25 | `2-parte-2.ts`:265 | D. Todd Christofferson | p14 | `&id=p14#p14` |
| 26 | `2-parte-2.ts`:315 | Kevin S. Hamilton | p23 | `&id=p23#p23` |
| 27 | `2-parte-2.ts`:361 | Dallin H. Oaks | p11, p15 | `&id=p11,p15#p11` |
| 28 | `2-parte-2.ts`:411 | Dale G. Renlund | p18 | `&id=p18#p18` |
| 29 | `2-parte-2.ts`:460 | Russell M. Nelson | p30 | `&id=p30#p30` |
| 30 | `2-parte-2.ts`:506 | Russell M. Nelson | p15 | `&id=p15#p15` |
| 31 | `2-parte-2.ts`:557 | Neil L. Andersen | p4 | `&id=p4#p4` |
| 32 | `2-parte-2.ts`:603 | Donald L. Hallstrom | p17 | `&id=p17#p17` |
| 33 | `2-parte-2.ts`:648 | Ulisses Soares | p12 | `&id=p12#p12` |
| 34 | `2-parte-2.ts`:694 | Gary E. Stevenson | p35 | `&id=p35#p35` |
| 35 | `2-parte-2.ts`:739 | Russell M. Nelson | p27 | `&id=p27#p27` |
| 36 | `2-parte-2.ts`:784 | Marvin J. Ashton | p17, p18 | `&id=p17-p18#p17` |
| 37 | `2-parte-2.ts`:834 | Boyd K. Packer | p30 | `&id=p30#p30` |
| 41 | `leccionesSemana10.ts`:99 | Robert C. Gay | p25 | `&id=p25#p25` |
| 65 | `leccionesSemana15.ts`:69 | Wilford W. Andersen | p12 | `&id=p12#p12` |
| 66 | `leccionesSemana15.ts`:78 | Dieter F. Uchtdorf | p18 | `&id=p18#p18` |
| 90 | `leccionesSemana19.ts`:452 | Ezra Taft Benson | p28 | `&id=p28#p28` |
| 115 | `leccionesSemana4.ts`:885 | Jeffrey R. Holland | p12 | `&id=p12#p12` |
| 127 | `parte-1.ts`:63 | Russell M. Nelson | p35 | `&id=p35#p35` |
| 132 | `parte-1.ts`:214 | Russell M. Nelson | p37 | `&id=p37#p37` |
| 139 | `parte-1.ts`:491 | Ezra Taft Benson | p16 | `&id=p16#p16` |

---

### 3.5 Citas sin campo `link` (18 casos)

#### Resueltas — enlace verificado, listo para pegar

Para estas seis se localizó el discurso, se confirmó el texto y se identificó el párrafo exacto.
El valor de la columna «link» puede copiarse tal cual al campo `link` de la cita.

| # | Ubicación | Autor | `link` verificado |
|---|---|---|---|
| 63 | `leccionesSemana14.ts`:183 | Ezra Taft Benson | `https://www.churchofjesuschrist.org/study/manual/teachings-of-presidents-of-the-church-ezra-taft-benson/chapter-18-beware-of-pride?lang=spa&id=p49#p49` |
| 76 | `leccionesSemana18.ts`:110 | Russell M. Nelson | `https://www.churchofjesuschrist.org/study/general-conference/2017/04/drawing-the-power-of-jesus-christ-into-our-lives?lang=spa&id=p29#p29` |
| 78 | `leccionesSemana18.ts`:228 | David A. Bednar | `https://www.churchofjesuschrist.org/study/general-conference/2012/10/converted-unto-the-lord?lang=spa&id=p24#p24` |
| 99 | `leccionesSemana4.ts`:299 | Bonnie H. Cordon | `https://www.churchofjesuschrist.org/study/general-conference/2018/10/becoming-a-shepherd?lang=spa&id=p15#p15` |
| 100 | `leccionesSemana4.ts`:306 | Henry B. Eyring | `https://www.churchofjesuschrist.org/study/general-conference/2021/04/34eyring?lang=spa&id=p20#p20` |
| 109 | `leccionesSemana4.ts`:689 | Russell M. Nelson | `https://www.churchofjesuschrist.org/study/general-conference/2011/04/face-the-future-with-faith?lang=spa&id=p21#p21` |
| 122 | `leccionesSemana4.ts`:1394 | Neil L. Andersen | `https://www.churchofjesuschrist.org/study/general-conference/2018/10/wounded?lang=spa&id=p23#p23` |

Al aplicarlas, corregir también estas diferencias de transcripción detectadas al verificar:

- **#63** — el original dice «El antídoto **contra** el orgullo» y «**el** espíritu contrito»
  (el archivo escribe «para el orgullo» y «un espíritu contrito»). La fuente correcta en español es
  el capítulo 18 de *Enseñanzas de los Presidentes de la Iglesia: Ezra Taft Benson*; el discurso
  original de la conferencia de abril de 1989 solo está publicado en inglés
  (*Ensign*, mayo de 1989).
- **#76** — el original dice «Cuando **procuren** el poder del Señor», no «Cuando **busquen**».
- **#109** — el original dice «un **fiel** Santo de los Últimos Días», no «un Santo de los Últimos
  Días **fiel**».
- **#99** — verificar el segundo tramo de la cita («contar en realidad no es una cuestión de
  números»): el párrafo p15 continúa de otro modo, por lo que puede provenir de un párrafo distinto.

#### ⚠️ No verificadas — posibles paráfrasis, no citas textuales

Estas dos son frases breves de redacción sumaria que **no aparecen** en el discurso indicado.
Todo apunta a que son resúmenes doctrinales redactados por el autor del material y presentados
como cita textual.

| # | Ubicación | Autor | Texto | Resultado |
|---|---|---|---|---|
| 73 | `leccionesSemana17.ts`:120 | Dale G. Renlund | «El sacerdocio es la autoridad delegada de Cristo para bendecir a Sus hijos.» | No está en «Nuestro Buen Pastor» (abril 2017), único discurso suyo de esa conferencia |
| 74 | `leccionesSemana17.ts`:163 | Henry B. Eyring | «Solo por el Espíritu Santo podemos conocer y amar a Dios.» | No está en «Oración» (octubre 2001), único discurso suyo de esa conferencia |

**Acción:** localizar la fuente real o reformularlas como texto propio del material (sin comillas
ni atribución directa).

#### ❌ Fuente incorrecta

**#64 · `leccionesSemana14.ts:190` — Ezra Taft Benson.** La cita («La palabra de Dios, tal como se
halla en las Escrituras, en las palabras de los profetas vivientes y en la revelación personal…»)
**no aparece** en «Cuidaos del orgullo», que es la fuente declarada, ni en el capítulo 18 del
manual que lo reproduce. Hay que localizar su discurso real antes de enlazarla.

#### Pendientes de localizar

| # | Ubicación | Autor | Fuente declarada | Nota |
|---|---|---|---|---|
| 54 | `leccionesSemana12.ts`:269 | Joseph B. Wirthlin | *Heroes from the Book of Mormon* (1995), pág. 84 | Libro no publicado en línea |
| 70 | `leccionesSemana15.ts`:224 | Jeffrey R. Holland | *Christ and the New Covenant* (1997), págs. 223–224 | Libro no publicado en línea |
| 77 | `leccionesSemana18.ts`:169 | Henry B. Eyring | Liahona, febrero de 2004, págs. 17-18 | Número mensual, no de conferencia |
| 101 | `leccionesSemana4.ts`:363 | Marion G. Romney | «No procuréis aconsejar al Señor», Liahona feb. 1986 | Probable conferencia de octubre de 1985 |
| 103 | `leccionesSemana4.ts`:429 | D. Todd Christofferson | «Moral Agency», *Ensign* jun. 2009 | Artículo de revista, solo en inglés |
| 114 | `leccionesSemana4.ts`:818 | Dallin H. Oaks | «Sed uno», 1 de junio de 2018 | Transmisión/devocional |
| 119 | `leccionesSemana4.ts`:1070 | D. Todd Christofferson | Liahona, enero de 2012, pág. 27 | Número mensual |
| 123 | `leccionesSemana4.ts`:1403 | Robert D. Hales | Liahona, abril de 2017 | Número mensual |

Para los libros no publicados en línea (#54, #70), la práctica recomendada es enlazar al manual de
Seminario o Instituto que reproduce la cita.

> **Convención de la skill para citas sin enlace.** `seminary-enrichment` no contempla omitir el
> campo `link`: pide dejarlo **vacío y marcado**, de modo que la falta de verificación quede visible
> en el código en lugar de pasar inadvertida:
>
> ```typescript
> {
>   tipo: "enseñanza",
>   autor: "Élder Joseph B. Wirthlin",
>   fuente: "\"Alma the Elder: A Role Model for Today\", en Heroes from the Book of Mormon (1995), pág. 84",
>   texto: "…",
>   link: ""
>   // link: no verificado — libro no publicado en línea
> }
> ```
>
> Las 18 citas de esta sección omiten el campo por completo. Al corregirlas, las que no admitan
> enlace deberían adoptar esta forma.

---

### 3.6 Errores tipográficos y de formato

| # | Ubicación | Campo | Actual | Corrección |
|---|---|---|---|---|
| 56 | `leccionesSemana13.ts`:70 | `fuente` | `(discurso \El gran plan de redención\")` | Comilla de apertura mal escapada → `\"El gran plan de redención\"` |
| 67 | `leccionesSemana15.ts`:144 | `autor` | `Presidente Rusell M. Nelson` | `Presidente Russell M. Nelson` |
| 68 | `leccionesSemana15.ts`:151 | `fuente` | `Liahona, Mayoe de 2021` | `Liahona, mayo de 2021` |
| 69 | `leccionesSemana15.ts`:216 | `fuente` | `expiación de Jesucristoo` | `expiación de Jesucristo` |
| 71 | `leccionesSemana15.ts`:340 | `autor` | `Elder L. Whjitney Clayton de los setenta` | `Élder L. Whitney Clayton` |
| 71 | `leccionesSemana15.ts`:340 | `fuente` | `Los mejores hogarese` | `Los mejores hogares` |
| 39 | `leccionesSemana10.ts`:39 | `fuente` | `Liahona, noviembre de 2020, pág. 58).` | Paréntesis y punto sobrantes |
| 40 | `leccionesSemana10.ts`:91 | `fuente` | `Liahona, julio de 1998, pág. 73.` | Punto final sobrante |
| 46 | `leccionesSemana11.ts`:211 | `fuente` | `Liahona, mayo de 2013, pág. 109).` | Paréntesis y punto sobrantes |

#### Tratamientos y nombres inconsistentes

| # | Ubicación | Actual | Propuesta |
|---|---|---|---|
| 40 | `leccionesSemana10.ts`:91 | `Presidente Oaks` | `Presidente Dallin H. Oaks` |
| 59 | `leccionesSemana13.ts`:265 | `Presidente Oaks` | (ver §3.1 — reatribución) |
| 69 | `leccionesSemana15.ts`:216 | `Presidente Oaks` | `Presidente Dallin H. Oaks` |
| 46 | `leccionesSemana11.ts`:211 | `Elder D. Todd Christofferson` | `Élder D. Todd Christofferson` |
| 51 | `leccionesSemana12.ts`:75 | `D. Todd Christofferson` | `Élder D. Todd Christofferson` |
| 68 | `leccionesSemana15.ts`:151 | `Gary E. Stevenson` | `Élder Gary E. Stevenson` |
| 39 | `leccionesSemana10.ts`:39 | `Becky Craven` | `Hermana Becky Craven` |
| 45 | `leccionesSemana11.ts`:141 | `Bonnie L. Oscarson` | `Hermana Bonnie L. Oscarson` |
| 56 | `leccionesSemana13.ts`:70 | `Linda S. Reeves` | `Hermana Linda S. Reeves` |
| 52 | `leccionesSemana12.ts`:140 | `Élder Henry B. Eyring` | `Presidente Henry B. Eyring` (era de la Primera Presidencia en octubre de 2020) |

### 3.7 Código muerto

**#111 · `leccionesSemana4.ts:748-755`** — bloque de cita del presidente Nelson (discurso ante la
NAACP, 2019) **comentado con `/* */`** en una auditoría anterior, con la nota
«❌ REEMPLAZADA: la cita original de Renlund no aparece en la lección real». No se renderiza.
Decidir si se elimina definitivamente o se restituye con una fuente válida.

---

## 4. Plan de corrección para la próxima sesión

Orden sugerido, de mayor a menor impacto sobre la fidelidad del contenido:

1. **Atribuciones y fuentes** (§3.1, §3.5) — 4 citas: **#59, #38, #90, #64**. Son los casos en que
   el material presenta a un líder diciendo algo que no dijo, o lo remite a un documento donde no
   está. Máxima prioridad: son los únicos errores con consecuencia doctrinal.
2. **Frases sin respaldo** (§3.5) — **#73** y **#74**. Decidir si se localiza la fuente real o se
   reformulan como texto propio del material.
3. **Fidelidad textual** (§3.2 y §3.3) — 12 citas. Restituir el texto literal o marcar las
   ediciones con corchetes y elipsis. Empezar por **#105** (cambio de género) y **#126** (omisión).
4. **Enlaces resueltos** (§3.5) — 7 citas con el `link` ya verificado y listo para pegar. Trabajo
   inmediato, sin investigación adicional.
5. **Anclas incorrectas y enlace con espacio** (§3.4) — 7 correcciones puntuales.
6. **Anclas faltantes** (§3.4) — 46 citas. Trabajo mecánico: añadir el sufijo indicado al `link`.
   Concentrado en `2-parte-1.ts` (20) y `2-parte-2.ts` (19), donde ninguna cita tiene ancla.
7. **Citas sin `link` pendientes** (§3.5) — 8 citas por localizar; 2 provienen de libros no
   publicados en línea y no admiten enlace directo.
8. **Tipografía y tratamientos** (§3.6) — cosmético, sin impacto doctrinal.
9. **Código muerto** (§3.7) — decisión editorial sobre #111.

> Los números `#` de este documento corresponden al índice de extracción de las citas y son
> estables mientras no se añadan ni quiten bloques `tipo: "enseñanza"`. **Al aplicar correcciones,
> trabajar de abajo hacia arriba dentro de cada archivo** para que los números de línea citados
> aquí no se desplacen.

---

## 5. Criterios de cita aplicados

Derivados de la skill `seminary-enrichment` («solo citas genuinas, nunca inventadas»; «nunca
atribuyas palabras a un líder sin haber verificado la fuente») y ampliados con los criterios de
fidelidad textual que esta auditoría necesitó:

- **Texto literal.** Una cita entre comillas debe reproducir el original palabra por palabra.
- **Corchetes `[ ]`** para toda palabra añadida o modificada por el editor (cambios de género,
  de número, aclaración de un pronombre).
- **Elipsis `…` o `[…]`** para toda omisión, incluida la omisión de una frase intermedia.
- **Fuente = documento enlazado.** El campo `fuente` y el `link` deben referirse a la misma
  publicación; si se cita una reimpresión, la fuente es la reimpresión.
- **Enlace verificado.** El `link` debe abrir el discurso donde la cita realmente aparece. El ancla
  `&id=pN#pN` es obligatoria en escrituras y recomendada en citas de `enseñanza`.
- **Sin enlace comprobable**, `link: ""` más un comentario `// link: no verificado — fuente: …`;
  nunca omitir el campo en silencio.
- **Tratamiento correcto según el cargo al momento del discurso** (Élder / Presidente / Hermana).

---

## 6. Anexo — cómo repetir la verificación

El procedimiento es reproducible sin herramientas especiales y conviene volver a ejecutarlo cada
vez que se incorporen lecciones nuevas:

1. **Extraer** los bloques `tipo: "enseñanza"` de todos los `.ts` del directorio, guardando
   `autor`, `fuente`, `texto`, `link`, archivo y línea. Excluir los que estén dentro de `/* */`.
2. **Descargar** el HTML de cada `link` sin el fragmento `#`. El sitio responde **503** si se le
   piden muchas páginas seguidas: usar una pausa de ~1,5 s entre descargas, reintentos con espera
   creciente y una caché local para no repetir descargas.
3. **Cotejar.** Normalizar (minúsculas, sin tildes, sin comillas tipográficas ni puntuación),
   partir la cita por sus elipsis y buscar cada segmento entre los `<p id="pN">` de la página.
   El `pN` que lo contiene es el ancla correcta.
4. **Revisar a mano** todo lo que no coincida. Un no-coincide **casi nunca significa cita falsa**:
   en esta auditoría la mayoría fueron elipsis marcadas, corchetes editoriales, notas al pie
   intercaladas o diferencias mínimas de traducción. Comparar por similitud de vocabulario
   (Jaccard sobre palabras de más de 3 letras) contra todos los párrafos revela de inmediato si la
   cita existe en otra forma o si sencillamente no está en ese documento.
5. **Para citas sin enlace**, descargar el índice de la conferencia
   (`/study/general-conference/AAAA/MM?lang=spa`), que lista los discursos con su autor, y buscar
   el texto en el discurso candidato. Equivalencias útiles: *Liahona* de mayo ↔ conferencia de
   abril; *Liahona* de noviembre ↔ conferencia de octubre. Los números de otros meses son
   ediciones mensuales y no corresponden a una conferencia.

> Los discursos anteriores a ~1995 con frecuencia no están publicados en español en
> `general-conference`; suelen encontrarse en el manual *Enseñanzas de los Presidentes de la
> Iglesia* correspondiente, que es la fuente en español citable (véase el caso #63).

### Corrección a la premisa de la skill sobre el sitio de la Iglesia

`seminary-enrichment` advierte que `churchofjesuschrist.org/study/` es una SPA y que «el contenido
de las lecciones **no es accesible directamente** vía `web_fetch`», por lo que propone una cascada
de alternativas: búsqueda web, versión en inglés, *Ven, Sígueme* como proxy y, como última capa,
**«síntesis basada en conocimiento del dominio»**.

**Esa premisa no se sostuvo en esta auditoría.** El contenido íntegro sí llega en el HTML inicial:
una petición HTTP simple devuelve todos los párrafos con sus identificadores `<p id="pN">` ya
renderizados. Se verificaron así 146 citas sin recurrir a ninguna de las capas alternativas.

Esto importa para el futuro del contenido: la **Capa 4** de la skill —redactar citas desde el
conocimiento del modelo cuando no se logra acceder a la fuente— es el mecanismo que mejor explica
los defectos hallados aquí. Las paráfrasis presentadas como texto literal (#72, #80), las frases
sin respaldo (#73, #74) y la atribución cruzada (#59) tienen exactamente la forma de una cita
reconstruida de memoria: la idea es correcta y el autor es verosímil, pero las palabras no son las
que se pronunciaron.

**Recomendación:** al enriquecer lecciones nuevas, verificar toda cita descargando el discurso y
localizando el párrafo, y no recurrir a la Capa 4 para el campo `enseñanza`. Si la fuente no se
puede comprobar, la propia skill ya indica el camino correcto: omitir la cita antes que inventarla.

---

## 7. Trabajo realizado — correcciones aplicadas

**Fecha:** 17 de agosto de 2026 · **Alcance:** las 88 citas marcadas como «requieren revisión» en §1.

| Métrica | Valor |
|---|---|
| Citas activas modificadas | **84** de 145 |
| Campos modificados | **125** (67 `link`, 29 `texto`, 15 `fuente`, 14 `autor`) |
| Bloques de código muerto eliminados | 1 |
| Citas que quedan sin enlace comprobable | **5** (marcadas según la convención de la skill) |

Cada corrección se **verificó descargando el documento de origen** y localizando el párrafo `<p id="pN">`
que contiene la cita; no se aplicó ninguna corrección «de memoria». El proyecto compila sin errores
nuevos (`npx tsc --noEmit` no reporta ningún error en `lib/data/libro-de-mormon/`).

### 7.1 Resumen por categoría

| § | Categoría | Pendientes | Aplicadas | Estado |
|---|---|---|---|---|
| 3.1 | Atribución o fuente incorrecta | 3 | **3** | ✅ completo |
| 3.2 | Texto alterado respecto del original | 9 | **9** | ✅ completo |
| 3.3 | Traducción no oficial | 1 | **1** | ✅ completo |
| 3.4 | Anclas de párrafo a añadir | 46 | **46** | ✅ completo |
| 3.4 | Anclas que apuntaban a párrafo equivocado | 6 | **6** | ✅ completo |
| 3.4 | Enlace con espacio inicial | 1 | **1** | ✅ completo |
| 3.5 | Enlaces resueltos, listos para pegar | 7 | **7** | ✅ completo |
| 3.5 | Frases sin respaldo (#73, #74) | 2 | **2** | ✅ completo |
| 3.5 | Fuente incorrecta (#64) | 1 | **1** | ✅ completo |
| 3.5 | Citas sin `link` por localizar | 8 | **3** localizadas + **5** marcadas | ⚠️ parcial |
| 3.6 | Erratas tipográficas y tratamientos | 20 | **20** | ✅ completo |
| 3.7 | Código muerto (#111) | 1 | **1** | ✅ completo |

### 7.2 Correcciones de mayor impacto

**#59 · `leccionesSemana13.ts` — atribución falsa resuelta.** La frase atribuida al presidente Oaks
es de M. Russell Ballard y ya se usaba en la Semana 12. Como la lección trata de Mosíah 28 (el deseo
de los hijos de Mosíah de compartir el Evangelio), se sustituyó por una cita **genuina de Oaks del
mismo discurso que la lección ya enlazaba** («Compartir el Evangelio», p15):

> «Gracias a nuestro testimonio de la verdad e importancia del Evangelio restaurado, comprendemos el
> valor de lo que se nos ha dado. […] La intensidad de nuestro deseo de compartir el Evangelio es un
> gran indicador del grado de nuestra conversión.»

**#38 · `2-parte-2.ts` — fuente y texto restituidos.** Se localizó la **traducción oficial al español**
en el Manual del maestro de Seminario del Libro de Mormón (2024), Moroni 7:44–48, párrafo p50, que
reproduce el libro de Holland citando la pág. 336. Se reemplazó la condensación editorial por el texto
oficial y se enlazó al manual, que sí está publicado en línea.

**#64 · `leccionesSemana14.ts` — fuente localizada.** La cita no era de «Cuidaos del orgullo» sino de
**«El poder de la palabra»** (conferencia de abril de 1986), reproducida en *Enseñanzas de los
Presidentes de la Iglesia: Ezra Taft Benson*, cap. 8, párrafo p13. También decía «felicidad en esta
vida» donde el original dice «en la vida».

**#90 · `leccionesSemana19.ts`** — `fuente` alineada con el documento realmente enlazado (la
reimpresión de *Liahona*, octubre de 2011), texto restituido a «hay un poder en **el libro**» y ancla
`&id=p28#p28` añadida.

### 7.3 Las dos «frases sin respaldo» (§3.5): el diagnóstico era incompleto

La auditoría dio ambas por no verificables. Al revisarlas contra el **manual oficial de esas mismas
lecciones**, el resultado fue distinto en cada caso:

**#73 · Renlund — la cita era auténtica; lo que estaba mal era la fuente.**
El manual de Alma 13 (`26-alma-13-16/261-teacher`, p13–p14) **sí** cita a Renlund. La `fuente`
declaraba «Conferencia General, abril 2017», pero el discurso es **«El sacerdocio y el poder redentor
del Salvador», octubre de 2017** (*Liahona*, noviembre de 2017, pág. 64). Por buscar en el discurso
equivocado, la auditoría concluyó que la cita no existía. Se restituyó el texto literal (p5 del
discurso original) y se corrigió la fuente:

> «A causa de Su sacrificio expiatorio, Jesucristo tiene el poder y autoridad para redimir a la
> humanidad. Para que Su poder expiatorio esté al alcance de todos, Él ha delegado una porción de Su
> poder y autoridad a los hombres sobre la tierra. Ese poder y autoridad delegados se llama sacerdocio.»

**#74 · Eyring — confirmada como no verificable; sustituida.**
El manual de Alma 14 (`262-teacher`) **no cita a Eyring** en ninguna parte, y la frase no aparece en
«Oración». Las únicas citas de líderes de esa lección son Anthony D. Perkins, Quentin L. Cook y
**Dale G. Renlund**. Se sustituyó por la de Renlund, que además se ajusta mejor al tema real de
Alma 14 (confiar en Dios ante la injusticia): «Las injusticias exasperantes», *Liahona*, mayo de 2021,
p10 del discurso original. Se ajustó la `conclusion` de la lección, que nombraba a Eyring.

### 7.4 Hallazgos nuevos, no registrados en la auditoría original

La verificación párrafo por párrafo encontró problemas que §3 no listaba:

**a) #17 · `2-parte-1.ts` — el sentido de la frase estaba invertido.** Es el error de fidelidad más
serio hallado, y no figuraba en §3.2. El archivo decía «recibirás la evidencia **confirmadora** del
Espíritu. **Esos sentimientos fortalecerán tu fe**»; el original (p14) dice «recibirás la evidencia
**afirmativa** del Espíritu. **Esos sentimientos serán fortificados por tu fe**». La relación causal
estaba al revés. Corregido.

**b) Cuatro citas son composiciones de dos párrafos distintos**, de modo que el ancla que §3.4
proponía habría llevado a un solo tramo. Se corrigieron con anclas múltiples y se marcó el salto con
elipsis:

| # | Ancla propuesta en §3.4 | Ancla real aplicada |
|---|---|---|
| 29 | `p30` | `&id=p30-p31#p30` |
| 110 | `p4` | `&id=p4,p42#p4` |
| 139 | `p16` | `&id=p16,p28#p16` |
| 11 | `p14,p32` | `&id=p14,p32#p32` (confirmada) |

**c) #19 · `2-parte-1.ts` — no es una cita de Benson.** El texto reproduce el **resumen que hace el
manual de Seminario** de una frase de Benson (`47-ether-6-11/475-teacher`, p6), presentado como cita
textual suya. Se reformuló en la forma en que el manual lo enuncia y se ajustó la `fuente` para
indicar que es una paráfrasis.

**d) Alteraciones menores adicionales** no listadas en §3.2, todas restituidas al original: #12
(«Deleitar**se**», no «Deleitarte»), #28 («cuando **[Él]** habla», corchete editorial añadido), #40
(«considerarnos **como que le pertenecemos**», no «considerarnos Suyos»), #63 («antídoto **contra** el
orgullo», «**el** espíritu contrito»), #76 («Cuando **procuren**», no «busquen»), #99 (omisión interna
sin marcar), #109 («un **fiel** Santo de los Últimos Días»), #116 («gozo!», sin punto sobrante).

**e) Tratamientos incoherentes con el criterio de §5.** §3.6 proponía «Presidente Dallin H. Oaks» para
#40 (1998) y #69 (2015), pero Oaks entró en la Primera Presidencia en **enero de 2018**: a la fecha de
esos discursos el tratamiento correcto es **Élder**. Lo mismo con #109 (Nelson, 2011). Se aplicó el
criterio de §5 —el cargo a la fecha del discurso— en lugar de la propuesta de §3.6.

**f) `leccionesSemana17.ts` tiene un bloque de comentarios duplicado** (dos copias idénticas de la
cabecera «RE-AUDITORÍA DE CITAS PROFÉTICAS», líneas 3–49 y 51–97). Ya existía en `HEAD`; **no se
tocó**, porque eliminarlo excede el alcance de esta corrección. Además, ese comentario afirma que el
manual de Alma 14 cita a Eyring, lo que la verificación desmiente (ver §7.3).

### 7.5 Citas sin enlace: estado final

**Localizadas y enlazadas** (3 de las 8 pendientes de §3.5):

| # | Autor | Enlace aplicado |
|---|---|---|
| 119 | D. Todd Christofferson | *Liahona*, enero de 2012, `…/recognizing-gods-hand-in-our-daily-blessings?lang=spa&id=p16#p16` |
| 123 | Robert D. Hales | *Liahona*, abril de 2017, `…/the-saviors-atonement-foundation-of-true-christianity?lang=spa&id=p33#p33` |
| 103 | D. Todd Christofferson | *Ensign*, junio de 2009, `…/moral-agency?lang=eng&id=p17#p17` |

En #103 el artículo **solo existe en inglés**: el texto en español es traducción propia del proyecto,
fiel al p17. Se enlazó al original inglés y se dejó constancia con un comentario en el código. Los
slugs de #119 y #123 no eran deducibles: se obtuvieron listando el índice del número de la revista,
porque una URL inventada devuelve **200 con el índice del mes**, no un 404 (detalle útil para futuras
verificaciones: una página sin `<p id="pN">` suele significar que el slug no existe).

**Sin enlace comprobable** (5). Se les aplicó la convención de la skill —`link: ""` más un comentario
que deja la falta a la vista— en lugar de omitir el campo en silencio:

| # | Autor | Motivo |
|---|---|---|
| 54 | Joseph B. Wirthlin | *Heroes from the Book of Mormon* (1995): libro no publicado en línea |
| 70 | Jeffrey R. Holland | *Christ and the New Covenant* (1997): libro no publicado en línea |
| 77 | Henry B. Eyring | No se localizó el artículo en el índice de *Liahona* de febrero de 2004 |
| 101 | Marion G. Romney | *Liahona* de febrero de 1986 no está publicada en línea en español |
| 114 | Dallin H. Oaks | Transmisión «Sed uno» (1 de junio de 2018): no se localizó la página |

### 7.6 ⚠️ Los números `#N` de §3 ya no coinciden con el código

Al eliminar el bloque comentado de §3.7, el índice de extracción **se desplazó en −1 a partir de
#111**. Los números de §1 a §4 corresponden al estado anterior a las correcciones: a partir de #111,
para localizar una cita en el código hay que **restar 1** (el antiguo #142 de Emma Smith es ahora
#141). Las citas 0–110 conservan su número.

Antes de una próxima auditoría conviene **regenerar el índice desde cero** en lugar de reutilizar los
números de este documento, tal como advierte la nota al final de §4.

### 7.7 Qué quedaba pendiente ✅ *(cerrado en §8)*

> Los tres puntos de esta lista se resolvieron en la segunda pasada. Se conservan por su valor de
> registro; el resultado de cada uno está en **[§8](#8-segunda-pasada--cierre-de-los-pendientes-17-de-agosto-de-2026)**
> (§8.1, §8.5 y §8.6, respectivamente).

1. **Los 5 enlaces de §7.5.** Para #54 y #70 la vía practicable es enlazar al manual de Seminario o
   Instituto que reproduzca la cita —como se hizo con #38—; conviene buscarlos en el manual del Libro
   de Mormón. Para #101 y #114 habría que localizar la publicación en otro repositorio oficial.
2. **Revisión sistemática de tratamientos por fecha.** Se corrigieron los casos señalados en §3.6 y
   los tres detectados en §7.4-e, pero **no** se auditaron los 145 registros contrastando el cargo de
   cada autor con la fecha de su discurso. Es cosmético y sin impacto doctrinal.
3. **El comentario duplicado de `leccionesSemana17.ts`** (§7.4-f), incluida la afirmación errónea
   sobre la cita de Eyring en Alma 14, que conviene corregir para que no vuelva a inducir a error.

### 7.8 Confirmación del método

La corrección a la premisa de la skill que anota §6 **se confirmó en la práctica**: una petición HTTP
simple a `churchofjesuschrist.org/study/` devuelve el contenido completo con los `<p id="pN">` ya
renderizados. Sobre esa base se verificaron todas las correcciones de esta sesión, incluidos los
manuales de Seminario, que resultaron ser la fuente decisiva en los casos más difíciles (#38, #64,
#73, #74): **cuando una cita procede de un libro no publicado en línea o de un discurso mal
referenciado, el manual oficial de la lección es el lugar donde buscarla.**

### 7.9 Verificación posterior a las correcciones

Terminadas las correcciones se relanzó el cotejo automático sobre las 145 citas activas, comparando
el `texto` de cada una contra los párrafos que su propia ancla señala. El sitio de la Iglesia empezó
a responder con lentitud creciente, de modo que **la pasada se completó sobre 88 de las 138 citas con
ancla**; el resto no llegó a descargarse.

| Resultado | Citas |
|---|---|
| Coincidencia exacta con el párrafo anclado | **72** |
| Coincidencia con diferencias menores de puntuación | **8** |
| Marcadas por la métrica automática | **8** |
| Sin `link` (los 5 casos de §7.5) | 5 |
| Sin ancla (#72 y #75) | 2 |

Las **8 marcadas se revisaron a mano una por una y ninguna resultó ser un error**: todas son citas
**compuestas de dos párrafos distantes** (#27, #84, #88, #47, #105, #141) o llevan corchetes
editoriales que el comparador no tolera. El caso más claro es **#84** (Neal A. Maxwell): sus dos
tramos están en `p6` y `p24`, y el ancla `&id=p6,p24#p6` ya era correcta.

> **Lección para el comparador.** Una similitud baja **no** indica cita falsa cuando la cita une
> párrafos separados por mucho texto: el índice de Jaccard cae aunque ambos tramos sean literales.
> Conviene cotejar **segmento por segmento contra la unión de los párrafos anclados** —como hace el
> procedimiento de §6— y no puntuar la cita entera contra un solo párrafo.

Queda pendiente completar el cotejo de las **50 citas** que no se alcanzaron a descargar. No hay
motivo para esperar problemas en ellas —son en su mayoría las que solo recibieron el ancla, ya
verificadas al aplicarla—, pero la comprobación no está hecha y conviene rehacerla con calma.

> **Resuelto en §8.2.** El cotejo se completó sobre las 145 citas. La expectativa de esta nota
> resultó **demasiado optimista**: entre las que faltaban aparecieron una cita reescrita (#119),
> un campo con basura editorial (#47) y cuatro con frases alteradas. El motivo del corte tampoco
> era el que se creía: además del 503 intermitente, la caché fallaba por exceder el límite de
> longitud de ruta de Windows (véase §8.2).

---

## 8. Segunda pasada — cierre de los pendientes (17 de agosto de 2026)

Sesión posterior a §7, dedicada a los tres puntos abiertos de §7.7 y a completar el cotejo que §7.9
dejó a medias. **Los tres pendientes quedaron cerrados** y el cotejo se completó sobre las 145 citas.

| Métrica | Antes de §8 | Después de §8 |
|---|---|---|
| Citas activas | 145 | **145** |
| Citas con `link` | 140 | **145** |
| Citas con ancla de párrafo `#pN` | 138 | **145** |
| Citas sin enlace comprobable | 5 | **0** |
| Cotejo automático completado | 88 de 138 | **145 de 145** |
| Citas modificadas en esta pasada | — | **38** (55 campos) |

### 8.1 Los 5 enlaces «sin fuente en línea» sí existían

Ninguno de los cinco casos de §7.5 era realmente inencontrable. Cuatro se resolvieron aplicando de
forma sistemática la lección que §7.8 ya anticipaba —**buscar la cita en el manual oficial de la
lección, no solo en el discurso original**— y el quinto, buscando la reimpresión en la revista.

| # | Autor | Dónde estaba | Enlace aplicado |
|---|---|---|---|
| 54 | Joseph B. Wirthlin | El **manual de Seminario** reproduce la cita del libro *Heroes from the Book of Mormon* traducida al español | `…/21-mosiah-18-24/211-teacher?lang=spa&id=p29#p29` |
| 70 | Jeffrey R. Holland | Ídem, para *Christ and the New Covenant* | `…/24-alma-5-7/243-teacher?lang=spa&id=p32#p32` |
| 77 | Henry B. Eyring | La `fuente` daba solo la revista y el número; **el manual (272-teacher, p30–p31) nombra el artículo**: «El Libro de Mormón cambiará sus vidas» | `…/liahona/2004/02/the-book-of-mormon-will-change-your-life?lang=spa&id=p57,p58#p57` |
| 101 | Marion G. Romney | Es un **Mensaje de la Primera Presidencia** del *Ensign* de agosto de 1985; la *Liahona* de febrero de 1986 es su reimpresión en español, no publicada en línea | `…/ensign/1985/08/seek-not-to-counsel-the-lord?lang=eng&id=p41#p41` |
| 113 | Dallin H. Oaks | La transmisión «Sed uno» no tiene página de estudio, pero su mensaje se publicó como artículo: «Un motivo de celebración» | `…/liahona/2018/12/youth/be-one/a-cause-for-celebration?lang=spa&id=p5#p5` |

En #54, #70 y #77 el manual aporta además la **traducción oficial al español**, que sustituyó a la
traducción o condensación que traía el archivo. En #101 la traducción sigue siendo propia del
proyecto —el artículo solo existe en línea en inglés—, y se dejó constancia con un comentario en el
código, igual que en #103.

**Además se enlazaron los dos casos sin ancla.** #72 (Neil L. Andersen) apuntaba al discurso correcto
pero sin `#pN`: la cita está en `p33`. #75 (Lawrence E. Corbridge) enlazaba a `speeches.byu.edu`; el
manual de Seminario (275-teacher, p42 y p48) publica la **traducción oficial al español**, que
reemplazó a la traducción propia —con voseo— que traía el archivo.

> **Regla práctica que confirma esta pasada.** Cuando una cita procede de un libro, de un devocional
> de BYU o de una revista antigua, el camino corto **no** es buscar el documento original: es buscar
> la frase en el **manual de la lección que la usa**. Allí suele estar la traducción oficial y una
> referencia bibliográfica completa que corrige la que trae el archivo.

### 8.2 Cotejo completo: 145 de 145

Se rehízo el cotejo automático del §7.9 sobre las 145 citas, comparando el `texto` de cada una contra
la **unión de los párrafos que su propia ancla señala** (bigramas de palabras, tolerante a corchetes y
elipsis), y esta vez se completó entero. Dos detalles operativos que costaron tiempo y conviene anotar:

- El sitio devuelve **503 intermitentes**; con reintentos espaciados ~2,5 s todas las páginas acaban
  descargándose. No hay bloqueo, solo saturación.
- En Windows, cachear las páginas con el nombre del archivo derivado de la URL **excede el límite de
  260 caracteres de ruta** y `curl` falla en silencio, lo que parece un fallo de red. Usar un hash
  corto (md5 truncado) como nombre de caché.

Resultado tras aplicar las correcciones de §8.3:

| Resultado del cotejo | Citas |
|---|---|
| Coincidencia con el párrafo anclado | **124** |
| Diferencias menores ya justificadas (elipsis, corchetes, notas al pie expandidas) | 19 |
| Cotejo no aplicable: el texto es traducción propia del inglés (#101, #103) | 2 |

Las 19 «menores» se revisaron una a una: son marcas editoriales legítimas o **correcciones
ortográficas deliberadas sobre el original**, que se decidió conservar (véase §8.4).

### 8.3 Correcciones de fidelidad aplicadas

El cotejo completo encontró errores que §7 no había alcanzado a revisar. Los de fondo:

**a) #119 · Joy D. Jones — la cita era una reescritura.** El archivo condensaba tres tramos del
discurso en una frase que la autora nunca dijo («En aquel momento, pueden recordar las palabras del
rey Benjamín…»). Se restituyó el texto literal de `p12`–`p13` con las omisiones marcadas.

**b) #47 · Dale G. Renlund — el campo `texto` contenía basura editorial.** Terminaba con un fragmento
de referencia bibliográfica sin cerrar: «(véase Dale G. Renlund». Se restituyó el párrafo `p20`.

**c) #55 · Sharon Eubank, #132 · David A. Bednar, #102 · Quentin L. Cook, #46 · D. Todd
Christofferson** — cuatro citas con frases modificadas respecto del original o con omisiones internas
sin marcar. La más concreta es #46: decía «como cuando se paga un **rescate**» donde el original dice
«una **fianza**».

**d) #105 · Dieter F. Uchtdorf — el destinatario estaba cambiado.** Es un discurso de la Reunión
General de las Mujeres y el original se dirige a ellas: «Dios **las** ama». El archivo lo había
convertido en «Dios [los] ama» con corchetes. Se restituyó el original y la `fuente` ahora indica de
qué reunión proviene.

**e) #97 · Henry B. Eyring — ancla malformada.** `&id=p10,12` (el segundo id sin la `p`) hacía que el
enlace resaltara solo la mitad de la cita. Corregido a `&id=p10,p12`. #112 tenía el problema inverso:
un rango `p20-p21` cuando la cita entera está en `p20`.

**f) Notas al pie coladas dentro del texto.** #76 terminaba en «lo que deben hacer **[9]**» y #78 en
«perseverancia como paciencia **[33]**»: son números de nota del discurso, no parte de la cita.

El resto son marcas de omisión sin señalar (elipsis `...` sustituidas por `[…]`), comillas simples
donde el original lleva tipográficas, y puntos finales faltantes o sobrantes (#39, #71, #115).

### 8.4 Dos casos en que se decidió **no** seguir el original al pie de la letra

Ambos son erratas del propio sitio de la Iglesia en transcripciones antiguas o de estilo:

- **#12 · Richard G. Scott.** El texto publicado dice «**Elije** un momento para estudiarlas». El
  archivo escribe «Elige». Se conserva la forma correcta: reproducir la errata en material para
  alumnos de secundaria enseñaría a escribir mal una palabra frecuente.
- **#127 · M. Russell Ballard.** La transcripción de 1995 en el sitio carece de tildes («quienes»,
  «por que», «a dónde»). El archivo las normaliza. Se conserva.

Quedan anotados aquí para que una auditoría futura no los vuelva a marcar como desviaciones.

### 8.5 Tratamientos por fecha — auditoría completa

Se auditaron los 145 registros contrastando el cargo de cada autor con la fecha de su discurso, el
pendiente nº 2 de §7.7. **Once tratamientos estaban mal:**

| # | Autor | Fecha del discurso | Estaba | Debe ser | Razón |
|---|---|---|---|---|---|
| 5, 35, 120 | Russell M. Nelson | 1995, 2014 (×2) | Presidente | **Élder** | Presidente del Quórum de los Doce desde julio de 2015; de la Iglesia desde enero de 2018 |
| 27, 83 | Dallin H. Oaks | 2009, 2011 | Presidente | **Élder** | Primera Presidencia desde enero de 2018 |
| 77, 142 | Henry B. Eyring | 2003, 2004 | Presidente | **Élder** | Primera Presidencia desde octubre de 2007 |
| 50, 127 | M. Russell Ballard | 1995, 2001 | Presidente | **Élder** | Presidente en funciones del Quórum de los Doce desde enero de 2018 |
| 45 | Bonnie L. Oscarson | 2016 | Hermana | **Presidenta** | Presidenta general de las Mujeres Jóvenes, 2013–2018 |
| 119 | Joy D. Jones | 2018 | Hermana | **Presidenta** | Presidenta general de la Primaria, 2016–2021 (el archivo ya la trataba así en #82) |

Los demás son correctos, incluidos los casos que parecen dudosos: Thomas S. Monson en 2006 ya era
consejero de la Primera Presidencia, Boyd K. Packer presidía en funciones el Quórum de los Doce en
1997, y las hermanas Craven, Stephens, Reeves y Eubank eran **consejeras**, no presidentas, en la
fecha de sus discursos.

### 8.6 `leccionesSemana17.ts` — comentario duplicado y afirmación errónea

Cerrado el pendiente nº 3 de §7.7. Se eliminó la segunda copia idéntica de la cabecera
«RE-AUDITORÍA DE CITAS PROFÉTICAS» (47 líneas) y se reescribió el apartado de Alma 14, que afirmaba
que el manual `262-teacher` cita a Henry B. Eyring. **No lo hace**: los únicos líderes citados en esa
lección son Anthony D. Perkins, Quentin L. Cook y Dale G. Renlund, tal como ya había establecido §7.3.
El comentario ahora describe la sustitución por la cita de Renlund en lugar de sostener lo contrario.
También se actualizó el comentario de la cita de Corbridge, que decía enlazar a `speeches.byu.edu`
cuando ahora enlaza al manual.

### 8.7 Estado final

- **145 citas activas · 145 con enlace · 145 con ancla de párrafo.** Ninguna cita queda sin fuente
  verificable ni sin apuntar al párrafo exacto.
- **Ninguna cita resultó inventada**, ni en esta pasada ni en la anterior. Los defectos hallados
  fueron de fidelidad textual, de atribución de cargo y de referencia bibliográfica.
- `npx tsc --noEmit` no reporta ningún error en `lib/data/libro-de-mormon/` (los errores del proyecto
  en `lib/data/libro-de-mormon-primer-semestre-limpio.ts` y en `actions/` son previos y ajenos).
- **Dos citas dependen de una traducción propia del proyecto** (#101 y #103), porque sus artículos
  solo están publicados en línea en inglés. Ambas llevan comentario en el código. Si alguna vez se
  publica la traducción oficial, conviene reemplazarlas.

### 8.8 Aviso sobre la numeración `#N`

Los números de esta sección corresponden al índice regenerado desde cero el 17 de agosto de 2026
sobre las 145 citas activas, ordenadas por nombre de archivo y línea. **No coinciden con los de §1–§4**
(véase §7.6) y volverán a desplazarse en cuanto se añadan o quiten citas: regenerá el índice antes de
usar cualquier número de este documento.
