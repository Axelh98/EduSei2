# Auditoría de citas — Antiguo Testamento, segundo semestre

Registro de la revisión de las citas de líderes de la Iglesia (secciones `tipo: "enseñanza"`) del
curso `antiguo-testamento-2`. Mismo criterio que
[AT1](AUDITORIA-citas-AT1.md), [DyC-1](AUDITORIA-citas-DyC1.md), [R301](AUDITORIA-citas-R301.md),
[R225](AUDITORIA-citas-R225.md), [R250](AUDITORIA-citas-R250.md) y
[Libro de Mormón](AUDITORIA-citas-libro-de-mormon.md).

**Fecha:** 1 de septiembre de 2026
**Alcance:** las 61 citas de líder de las 67 lecciones del curso (las 6 lecciones "Dominio de la
Doctrina" no llevan `enseñanza` por diseño de la skill). Contenido generado el 31-ago-2026 con
`seminary-enrichment` — ver [`COMPLETITUD-antiguo-testamento-2.md`](COMPLETITUD-antiguo-testamento-2.md).
**Estado: ✅ cerrado. 61 de 61 citas verificadas contra el discurso original**, la primera vez que
esto se hace de forma independiente (las 61 se habían verificado con `web_fetch` en la misma
sesión que las escribió, no en una segunda pasada).

---

## 1. Método

Se abrió cada uno de los 60 discursos/artículos distintos (una fuente se repite dos veces) vía
`WebFetch`, y se comparó el `texto` guardado contra el original palabra por palabra, además de
verificar que `autor` y `fuente` (título, tipo de conferencia, fecha, **y el cargo/tratamiento del
autor en esa fecha**) correspondieran al discurso real. El trabajo se dividió en dos lotes de ~30
lecciones trabajados en paralelo, y una tercera pasada de coordinación verificó de forma
sistemática un patrón que apareció en el primer lote: citas atribuidas a "Presidente X" cuando en
la fecha real del discurso esa persona todavía era "Élder" (o viceversa) — ver §3.

## 2. Panorama

| Bandera automática | Antes | Ahora |
|---|---:|---:|
| `sin-link` | 1 | **0** |
| `vosotros-en-cita` | 1 | 1 (confirmado falso positivo) |
| `fecha-posterior-a-la-muerte` | 1 | 1 (confirmado falso positivo) |
| **Citas con problema real** | **1** (el `sin-link`) | **0** |

**14 de 61 citas (23 %) necesitaron corrección**; 47 estaban correctas tal cual. Ninguna cita
resultó ser una fabricación completa (discurso inexistente): el patrón dominante fue paráfrasis no
marcada y errores de atribución de cargo/título, más **un caso grave** de cita real atribuida al
autor equivocado.

## 3. Resultado por lección

| Lección | Autor | Veredicto |
|---|---|---|
| leccion-92 | Presidente Russell M. Nelson | ❌ corregida — fuente/link equivocados |
| leccion-93 | Élder Richard G. Scott | ✅ textual |
| leccion-94 | Élder Ronald A. Rasband | ✅ textual |
| leccion-95 | Presidente Thomas S. Monson | ✅ textual |
| leccion-97 | Élder Dale G. Renlund | ✅ textual |
| leccion-98 | Élder Jeffrey R. Holland | ⚠️ corregida — título/época |
| leccion-99 | Presidente Dallin H. Oaks | ✅ textual |
| leccion-101 | Obispo Dean M. Davies | ✅ correcta |
| leccion-102 | Élder Gerrit W. Gong | ✅ correcta |
| leccion-103 | Élder David A. Bednar | ✅ correcta |
| leccion-104 | Presidente Russell M. Nelson | ✅ textual |
| leccion-105 | Élder David A. Bednar | ✅ textual |
| leccion-107 | Presidente Russell M. Nelson | ✅ textual |
| leccion-108 | Presidente Henry B. Eyring | ✅ textual |
| leccion-109 | Élder David A. Bednar | ✅ textual |
| leccion-110 | Élder Richard G. Scott | ✅ correcta |
| leccion-111 | Presidente Russell M. Nelson | ✅ textual |
| leccion-113 | Élder Jeffrey R. Holland | ⚠️ corregida — título/época |
| leccion-114 | Hermana Sharon Eubank | ✅ correcta — bandera `vosotros-en-cita` confirmada falso positivo |
| leccion-115 | Élder David A. Bednar | ✅ correcta |
| leccion-116 | Élder Benjamín De Hoyos | ✅ correcta |
| leccion-117 | Élder Robert D. Hales | ✅ correcta |
| leccion-118 | Presidente Dieter F. Uchtdorf | ✅ correcta |
| leccion-119 | Élder Neil L. Andersen | ✅ correcta |
| leccion-120 | Presidente Russell M. Nelson (cita a Benson) | ✅ correcta — bandera `fecha-posterior-a-la-muerte` confirmada falso positivo |
| leccion-121 | Presidente Dieter F. Uchtdorf | ✅ textual |
| leccion-123 | Élder Ulisses Soares | ✅ textual |
| leccion-124 | Élder David A. Bednar | ✅ textual |
| leccion-125 | Élder D. Todd Christofferson | ✅ textual |
| leccion-127 | Élder Russell M. Nelson | ❌ corregida — autor equivocado (decía "Élder Quentin L. Cook") |
| leccion-128 | Élder Kent F. Richards | ✅ textual |
| leccion-129 | Élder Neil L. Andersen | ✅ textual |
| leccion-130 | Élder Russell M. Nelson | ⚠️ corregida — título/época |
| leccion-131 | Élder Dieter F. Uchtdorf | ✅ textual |
| leccion-132 | Élder Ronald A. Rasband | ⚠️ corregida — elipsis faltante |
| leccion-134 | Élder Kelly R. Johnson | ✅ textual |
| leccion-135 | Presidente Russell M. Nelson | ✅ textual |
| leccion-136 | Élder Dale G. Renlund | ✅ correcta |
| leccion-138 | Élder Neil L. Andersen | ⚠️ corregida — paráfrasis |
| leccion-139 | Hermana Bonnie H. Cordon | ✅ textual |
| leccion-140 | Élder Tad R. Callister | ⚠️ corregida — paráfrasis del cierre |
| leccion-141 | Élder Russell M. Nelson | ⚠️ corregida — título/época |
| leccion-173 | Élder Gary E. Stevenson | ✅ textual |
| leccion-175 | Élder Gerrit W. Gong | ✅ textual |
| leccion-176 | Élder Dieter F. Uchtdorf | ⚠️ corregida — título/época |
| leccion-181 | Élder Neil L. Andersen | ✅ textual |
| leccion-182 | Élder David A. Bednar | ✅ textual |
| leccion-183 | Élder Neil L. Andersen | ✅ textual |
| leccion-184 | Élder Terence M. Vinson | ✅ textual |
| leccion-185 | Presidente Russell M. Nelson | ✅ textual |
| leccion-186 | Presidente Thomas S. Monson | ✅ textual |
| leccion-187 | Élder David A. Bednar | ✅ textual |
| leccion-189 | Élder Henry B. Eyring | ⚠️ corregida — texto truncado en ambos extremos + `link` agregado |
| leccion-191 | Élder Robert D. Hales | ⚠️ corregida — paráfrasis |
| leccion-196 | Élder David A. Bednar | ✅ textual |
| leccion-197 | Élder Dieter F. Uchtdorf | ⚠️ corregida — frase cortada sin indicarlo |
| leccion-198 | Presidente Russell M. Nelson | ✅ textual |
| leccion-199 | Élder Quentin L. Cook | ✅ textual |
| leccion-200 | Élder David A. Bednar | ✅ textual — dos fragmentos reales unidos con elipsis |
| leccion-207 | Presidente Wilford Woodruff | ⚠️ ajuste menor — página agregada a `fuente` |
| leccion-208 | Presidente Russell M. Nelson | ✅ textual |

---

## 4. Detalle de las 14 correcciones

### 4.1 El caso más grave: `leccion-127` — autor equivocado, texto y link correctos

- **Declarado:** «Élder Quentin L. Cook», «El día de reposo es una delicia», abril de 2015.
- **Real:** el `link` apunta a un discurso real con ese título y esa fecha, pero el orador es
  **Élder Russell M. Nelson**, no Cook. El `texto` («El día de reposo supone una oportunidad
  maravillosa para fortalecer los lazos familiares») es textual del discurso de Nelson.
- **Acción:** ✅ corregido `autor` a «Élder Russell M. Nelson». Se conservan `fuente`, `texto` y
  `link`.

### 4.2 `leccion-92` — fuente y link equivocados

- **Declarado:** «Presidente Russell M. Nelson», «Preparémonos para las bendiciones del templo»,
  Liahona, octubre de 2010.
- **Real:** el texto guardado («En cierto modo, es más fácil edificar un templo que edificar a un
  pueblo que esté preparado para el templo...») no está en ese discurso de 2010. Es textual de
  **«Palabras de clausura», Conferencia General, octubre de 2019**.
- **Acción:** ✅ corregidos `fuente` y `link` al discurso real. Se conservan `autor` y `texto`.
  `autor` queda como «Presidente Russell M. Nelson» — correcto para octubre de 2019 (Presidente de
  la Iglesia desde enero de 2018).

### 4.3 Errores de título/época — 5 casos (98, 113, 130, 141, 176)

Patrón encontrado por el primer lote y extendido por una revisión sistemática de las 61 citas: el
`autor` decía «Presidente X» en discursos dados cuando esa persona todavía era «Élder» (apóstol
sin cargo adicional en ese momento). Verificado contra la línea de autoría real de cada página
(`Por el/la élder... / Del Cuórum de los Doce Apóstoles`, o su ausencia cuando corresponde
"Presidente"):

| Lección | Autor | Fecha del discurso | Decía | Corregido a |
|---|---|---|---|---|
| `leccion-113` | Jeffrey R. Holland | octubre de 2003 | Presidente | **Élder** (Presidente del Cuórum de los Doce recién desde noviembre de 2023) |
| `leccion-98` | Jeffrey R. Holland | noviembre de 2013 | Presidente | **Élder** |
| `leccion-130` | Russell M. Nelson | octubre de 2013 | Presidente | **Élder** (Presidente del Cuórum de los Doce desde julio de 2015) |
| `leccion-141` | Russell M. Nelson | abril de 2001 | Presidente | **Élder** |
| `leccion-176` | Dieter F. Uchtdorf | octubre de 2018 | Presidente | **Élder** (fue consejero de la Primera Presidencia 2008–2018; liberado en abril de 2018) |

En `leccion-113`, `leccion-98`, `leccion-130` y `leccion-141` también se corrigió la mención al
autor dentro de `conclusion` (de «el presidente X» a «el élder X»), para mantener coherencia
interna. `leccion-176` no tenía otra mención al autor fuera de `enseñanza`.

**Verificación de que no queda ningún caso más:** se revisaron programáticamente las 16 citas que
quedan atribuidas a "Presidente" y las 9 que quedan atribuidas a "Élder" entre los seis autores de
este corpus que ocuparon cargos con tratamiento distinto en algún momento (Nelson, Uchtdorf,
Eyring, Holland, Oaks, Monson), cruzando cada fecha de discurso contra el período real de cada
cargo. Las 25 restantes están correctas — no quedó ningún otro caso.

### 4.4 Paráfrasis — 4 casos (138, 140, 191, 197)

- **`leccion-138`** (Andersen): «se sitúa al lado del Salvador... hacia Él» → real: «permanece a
  su lado y señala el camino hacia el Salvador». Corregido al texto literal.
- **`leccion-140`** (Callister): el cierre de la cita («Juntos confirman y aclaran...») estaba
  parafraseado. Restaurado el texto real, marcando con elipsis el salto de párrafo real.
- **`leccion-191`** (Hales): «Oren para elegir consejeros que se interesen sinceramente...» no
  existe así en el discurso → real: «Busquen el consejo de consejeros que se interesen
  sinceramente...». Corregido.
- **`leccion-197`** (Uchtdorf): la cita terminaba cortada sin indicarlo. Restaurada la frase
  completa («...ya sea en persona o en línea»).

### 4.5 `leccion-132` — elipsis faltante

La cita de Rasband cortaba una oración a mitad de camino y cerraba con punto, como si fuera
completa. Se agregó la elipsis final para marcar honestamente la omisión, sin cambiar ninguna
palabra del texto citado.

### 4.6 `leccion-189` — el `sin-link` real, resuelto

Confirmado lo que ya se sospechaba en `COMPLETITUD-antiguo-testamento-2.md`: la charla fogonera de
Eyring del 6 de mayo de 2001 no tiene URL propia en `churchofjesuschrist.org`, pero el capítulo 10
de *El Evangelio y la vida productiva: Manual del alumno* la cita textualmente, con página (pág.
3). El `texto` guardado estaba truncado en ambos extremos («Poner el conocimiento...» le faltaba
el «Queda claro que» inicial, y «...conocimiento secular.» le faltaba «y nos motiva a esmerarnos
más» al final). Se corrigió el texto a la cita completa y se agregó `link` a la página del manual
que la cita — mismo criterio que el caso Talmage de `AUDITORIA-citas-AT1.md` (fuente impresa no
disponible en línea, la página del manual que la cita es la verificación posible y alcanza).

### 4.7 `leccion-207` — ajuste menor

Cita del presidente Wilford Woodruff (compilación *Enseñanzas de los presidentes de la Iglesia*),
confirmada en el manual citado. Se agregó el número de página (207) a `fuente`, que no lo traía.

---

## 5. Las 2 banderas automáticas — ambas confirmadas como falso positivo

### `leccion-114` — Hermana Sharon Eubank (`vosotros-en-cita`)

Se leyó el discurso completo. El «vosotros» de «mis caminos [son] más altos que vuestros caminos»
está entre comillas dentro del propio texto de Eubank, con una nota al pie (15) que remite a
Isaías 55:9 — es la voz de la cita de Escritura anidada, no la voz de la oradora, que en el resto
del discurso usa «ustedes» con normalidad. **Confirmado falso positivo, sin cambios.**

### `leccion-120` — Presidente Russell M. Nelson citando al presidente Ezra Taft Benson (`fecha-posterior-a-la-muerte`)

Se confirmó contra el discurso real de Nelson (octubre de 2022): dice literalmente «Reafirmo una
profunda enseñanza del presidente Ezra Taft Benson: "Los hombres y las mujeres que entreguen su
vida a Dios..."», con la frase completa atribuida a Benson (fallecido en 1994) dentro del propio
discurso de Nelson. Es una cita dentro de otra cita, no una fecha imposible. **Confirmado falso
positivo, sin cambios.**

---

## 5.b Anclas al párrafo — 61 de 61 (6 de septiembre de 2026)

Cerrado el pendiente que dejó abierto la fila 16 del catálogo: **las 61 citas apuntaban al
discurso entero**, sin `#pN`. AT-2 era uno de los cuatro cursos sin una sola ancla (junto con
R200, R301 y R225). Ahora las 61 tienen ancla verificada.

**Cómo se resolvió, y por qué no alcanzaba con el recall.** Se escribió
[`scripts/fix-anclas-citas.ts`](../../scripts/fix-anclas-citas.ts), que descarga el discurso con
la API del sitio (`language-pages/type/content` — `web_fetch` solo trae el shell de la SPA),
extrae los `<p id="pN">` y ubica la frase. El primer intento eligió el párrafo por **recall de
palabras**, el mismo criterio que sirve para las citas de Escritura, y ahí falló: en un discurso
corto casi cualquier ventana de 4 párrafos llega a recall 1.00, así que las 61 salieron con
anclas de rango largo (`id=p8-p11#p8`) que dejan al lector tres párrafos antes de la frase. El
criterio correcto para este caso es la **coincidencia literal**: el n-grama más largo (hasta 10
palabras) de la cita presente en el párrafo.

Ese cambio dejó 57 anclas correctas y **4 mal puestas**, porque la primera versión buscaba el
n-grama del *arranque* de la cita, y varios textos guardados empiezan a mitad de una oración del
discurso. Corregidas a mano contra la fuente:

| Lección | Autor | Ancla puesta por el arranque | Párrafo real |
|---|---|---|---|
| `leccion-102` | Élder Gerrit W. Gong | `p12` | **`p39`** (en `p9` hay una variante de la misma idea, no la cita) |
| `leccion-127` | Presidente Russell M. Nelson | `p4` | **`p19`** |
| `leccion-196` | Élder David A. Bednar | `p4` | **`p30`** |
| `leccion-199` | Élder Quentin L. Cook | `p23` | **`p31`** |

El script quedó con el criterio corregido (n-grama en cualquier posición del párrafo, con rango
solo cuando la cita cruza el corte entre dos párrafos consecutivos).

**Verificación final, independiente del script que escribió las anclas:** se releyó cada `link`
del curso, se descargó el discurso y se comprobó que en el párrafo anclado aparezca una secuencia
literal de al menos 5 palabras consecutivas de la cita. Resultado: **61 correctas, 0 sin
coincidencia, 0 sin ancla**. `audit-links-citas.ts` confirma `⚓ 0`.

> Lo que este trabajo **no** vuelve a verificar es si la cita es textual: eso ya se hizo en la
> pasada del 1-sep-2026 (§1–§4). Anclar es una operación sobre el `link`, no sobre el `texto`.

## 6. Archivos modificados

`lib/content/antiguo-testamento-2/`: `leccion-92.json`, `leccion-98.json`, `leccion-108.json`
(citas de Escritura, ver [`AUDITORIA-escrituras-AT2.md`](AUDITORIA-escrituras-AT2.md)),
`leccion-112.json` (ídem), `leccion-113.json`, `leccion-127.json`, `leccion-130.json`,
`leccion-132.json`, `leccion-138.json`, `leccion-140.json`, `leccion-141.json`, `leccion-176.json`,
`leccion-189.json`, `leccion-191.json`, `leccion-197.json`, `leccion-207.json`.

`npx tsx scripts/validate-content.ts` corre limpio sobre este curso (el único problema que reporta
en todo el proyecto es preexistente y ajeno a este trabajo: un snapshot de auditoría de
`libro-de-mormon-1`).

## Cómo continuar

Este curso queda cerrado para citas de líder. Ver [`PLAN-DE-AUDITORIA.md`](PLAN-DE-AUDITORIA.md)
§1 para el estado del resto del proyecto.

```bash
npx tsx scripts/extract-citas.ts antiguo-testamento-2   # panorama
npx tsx scripts/validate-content.ts                     # tras cada corrección
```
