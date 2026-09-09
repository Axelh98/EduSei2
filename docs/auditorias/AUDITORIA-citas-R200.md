# Auditoría de citas — Religión 200 (La familia eterna)

Registro de la revisión de las citas de líderes de la Iglesia del curso `religion-200`.
Mismo criterio que [DyC-1](AUDITORIA-citas-DyC1.md), [R301](AUDITORIA-citas-R301.md),
[R225](AUDITORIA-citas-R225.md), [AT-1](AUDITORIA-citas-AT1.md),
[R250](AUDITORIA-citas-R250.md) y [Libro de Mormón](AUDITORIA-citas-libro-de-mormon.md).

**Estado: pasada estructural completa, comparación de texto pendiente.** El curso tiene
**56 citas**. Se verificó la única que tenía bandera de contenido (`sin-link`, ver §3), se
testearon **los 50 links únicos** contra el sitio oficial, y se verificaron en profundidad
**17 citas**. Quedan **39 sin comparar el texto**.

---

## 1. Resultado de la pasada estructural (2-sep-2026)

```bash
npx tsx scripts/audit-links-citas.ts religion-200 --solo-problemas
```

| Medición | Resultado |
|---|---:|
| Citas del curso | 56 |
| Links únicos | 50 |
| **Links que NO resuelven a un discurso** | **15** (17 citas afectadas) |
| **Citas sin ancla al párrafo** | **56 (todas)** |

### Por qué hizo falta un script nuevo

El sitio de la Iglesia **no devuelve 404 cuando el slug no existe**: redirige en silencio
al índice de la conferencia, con HTTP 200. Un link inventado es indistinguible de uno
bueno para cualquier chequeo ingenuo — y para una persona que hace clic, también: aterriza
en una página real y plausible. Es el mismo patrón que se había descubierto con los
`chapterUrl` de las semanas 31-32 de `libro-de-mormon-2`
(ver [`COMPLETITUD-libro-de-mormon-2.md`](COMPLETITUD-libro-de-mormon-2.md) §0), pero acá
aplicado a discursos.

`scripts/audit-links-citas.ts` lo detecta comparando el `canonical` de la página contra el
slug pedido. Convierte 50 verificaciones manuales en una corrida de dos minutos, y sirve
para los 12 cursos.

---

## 2. Citas verificadas en profundidad (17 de 56)

### 2.1 Fabricadas — ❌ 5 casos

#### `r200-l17`, `r200-l19`, `r200-l21` — Ballard, «Madres e hijos» ❌ **El discurso no existe**

Tres citas **distintas**, en tres lecciones, declaran la misma fuente inexistente y **la
misma página**: «Madres e hijos», *Liahona*, mayo de 2010, **pág. 19**.

- **Verificación:** M. Russell Ballard **no dio ningún discurso llamado «Madres e hijos»**.
  Lo más cercano es **«Madres e hijas»** (*Mothers and Daughters*), Conferencia General de
  **abril de 2010**. Se descargó ese discurso completo y **ninguno de los tres textos
  aparece en él**. El discurso trata la relación madre-hija, el ejemplo materno, los
  convenios y la modestia; no menciona el presidir del esposo, ni la fórmula «ninguna causa
  más noble», ni el consejo de «conocer a sus hijos individualmente».
- **Señal barata que lo delata:** tres citas de contenido distinto compartiendo un número de
  página exacto. Es el mismo patrón de fabricación de R250 y DyC-1.
- **Acción:** ⏸️ **pendiente.** Requiere buscar la cita real en el manual de cada lección
  (`chapterUrl` del `_manifest.json`). **No se aplicó ningún arreglo de link**: corregir la
  URL sin corregir el texto dejaría una cita falsa apuntando a un discurso real, que es
  peor que el estado actual.

#### `r200-l23` — Sheri Dew, «¿Somos mujeres que saben?» ❌ **Título de otra persona, texto inexistente**

- **Fuente declarada:** «¿Somos mujeres que saben?», *Liahona*, noviembre de 2007, pág. 36.
- **Verificación:** ese título corresponde a **«Mothers Who Know», de Julie B. Beck**
  (octubre de 2007), no a Sheri Dew. El link apunta a `2007/10/are-we-not-all-mothers`, que
  **redirige al índice**: el discurso real de Dew, **«¿No somos todas madres?», es de
  octubre de 2001**. Se descargó ese discurso y **no contiene el texto guardado** (nada
  sobre solteros como «ciudadanos de segunda clase» ni sobre sus dones espirituales).
- **Acción:** ⏸️ pendiente, mismo criterio que arriba.

### 2.2 Links rotos con contenido sin verificar — ❌ 4 casos

| Lección | Cita | Problema |
|---|---|---|
| `r200-l22` | Nelson, «La santidad del hogar» | Slug `36nelson` (abr-2020) **no existe** |
| `r200-l24` | Nelson, «Esperanza para el viaje que está por delante» | Slug `47nelson` (oct-2023) **no existe** |
| `r200-l27` | L. Tom Perry | El link apunta **al discurso de Christofferson** (`why-marriage-why-family`) |
| `r200-l13` | Wendy W. Nelson, devocional | La URL de `broadcasts` no responde |

### 2.3 Corregibles mecánicamente — ⚠️ 4 casos

| Lección | Cita | Corrección |
|---|---|---|
| `r200-l26` | Scott, «Sanar el tormento del abuso sexual» | El discurso existe pero es **abril de 1992**, no octubre: `1992/04/healing-the-tragic-scars-of-abuse` |
| `r200-l28` | Nelson, «Al avanzar juntos» | El link resuelve, pero el discurso real se llama **«Trabajemos hoy en la obra»** (abr-2018). Falta comparar el texto |
| `r200-l11` | Holland, *New Era* | 404 con `lang=spa`: ***New Era* no se publica en español**. Usar `lang=eng` |
| `r200-l16` | Hallstrom, *Ensign* | 404 con `lang=spa`: mismo caso |

### 2.4 Válida — ✅ 1 caso, con lección de método

#### `r200-l23` — Oaks, «El gran plan de salvación» ✅

El link es `1993/10/the-great-plan-of-happiness`. El slug en inglés dice *happiness* y la
`fuente` declara *salvación*, lo que parecía un título inventado. **No lo es:** el título
oficial **en español** de ese discurso es «Gran Plan de Salvación».

> ⚠️ **Regla de método:** el slug en inglés **no predice** el título en español. Verificar
> siempre contra la página en `?lang=spa` antes de declarar un título como fabricado. Esta
> cita casi se marca como defecto por esa confusión.

---

## 3. La cita verificada en la pasada anterior

### `r200-l02` — Nelson, devocional de BYU ✅ Textual, solo faltaba el link

- **Fuente declarada:** «The Love and Laws of God», Devocional de BYU, 17 de septiembre de
  2019, **pág. 3**, sin `link`.
- **Verificación:** el devocional existe, es de esa fecha y está publicado en español como
  **«El amor y las leyes de Dios»**. El pasaje es **textual**.
- **Problema menor:** la `fuente` traía «pág. 3». **Un devocional no tiene páginas** — se
  quitó, siguiendo la regla de no arrastrar números de página no verificados.
- **Acción:** ✅ completada.

**Sobre la bandera `link-no-oficial`:** apunta a `speeches.byu.edu`. Es correcto: BYU
Speeches es el archivo oficial de los devocionales universitarios y este discurso no está
en la Biblioteca del Evangelio. Mismo caso que `leccion-81` y `leccion-188` en AT-1.

---

## 4. Qué falta

- [ ] **Comparar el texto de las 39 citas restantes** contra su discurso. Es el trabajo caro
      y el único que detecta la **paráfrasis**, que fue el patrón dominante en AT-1 y R225 y
      que ningún script detecta. **Un link que resuelve no garantiza nada** — `r200-l28` lo
      prueba: link válido, título equivocado.
- [ ] **Reemplazar las 5 citas fabricadas/rotas** buscando la cita real en el manual de cada
      lección.
- [ ] **Agregar el ancla al párrafo a las 56 citas** (ver §5).
- [ ] Aplicar las 4 correcciones mecánicas de §2.3.

### Lo que esto resuelve de paso

`scripts/audit-autores-quiz.ts` marca **38 preguntas de quiz** de este curso que nombran a
un líder ausente de `enseñanza`. **No son el mismo defecto que en DyC-1 o AT-1**: allí una
auditoría de citas había cambiado autores y las preguntas quedaron citando al viejo. Acá esa
auditoría **nunca se corrió**, así que nada se cambió: las preguntas citan material del
manual que la lección no guarda en `enseñanza`. Re-anclarlas como se hizo en AT-1
**borraría material real**. Se resuelven al cerrar esta auditoría, no antes.

---

## 5. Regla nueva: el link va al párrafo, no al discurso

**A partir del 2-sep-2026, toda cita de líder debe apuntar al párrafo exacto**, no al
discurso completo:

```
https://www.churchofjesuschrist.org/study/general-conference/2013/04/we-believe-in-being-chaste?lang=spa&id=p12#p12
```

Un link al discurso entero obliga al lector —y al próximo auditor— a buscar la frase a mano
en miles de palabras, y es la razón por la que verificar este curso costó lo que costó.

**Alcance medido en los 12 cursos: 277 de 619 citas (45 %) no tienen ancla.** Cuatro cursos
no tienen ninguna:

> ⚠️ **Corregido el 4-sep-2026.** Esta cifra decía «286 de 650». El recuento original recorrió los
> archivos del directorio en vez de las lecciones del manifiesto y contó citas que viven en
> archivos huérfanos. La tabla de abajo también cambia en una fila: `libro-de-mormon-2` tiene
> **35 sin ancla de 69**, no 42 de 94. Ver `PLAN-DE-AUDITORIA.md` §1.5.

| Curso | Citas | Sin ancla |
|---|---:|---:|
| ~~`antiguo-testamento-2`~~ | 61 | **0 ✅** (cerrado el 6-sep-2026, ver abajo) |
| `religion-200` | 56 | **56** |
| `religion-301` | 50 | **50** |
| `doctrina-y-convenios-1` | 88 | 55 |
| `libro-de-mormon-2` | 94 | 42 |
| `antiguo-testamento-1` | 110 | 12 |
| `religion-225` | 5 | **5** |
| `religion-250` | 38 | 3 |
| `doctrina-y-convenios-2` | 56 | 2 |
| `libro-de-mormon-1` | 92 | 0 ✅ |

La regla está incorporada en `scripts/audit-links-citas.ts` (bandera `⚓`) y en
`seminary-enrichment/SKILL.md` para que la generación futura ya la cumpla.

**Ya no hace falta anclar a mano (6-sep-2026).** `scripts/fix-anclas-citas.ts` resuelve el ancla
sola: descarga el discurso con la API del sitio, ubica la frase por coincidencia literal y escribe
`?lang=spa&id=pN#pN`. Cerró las 61 de `antiguo-testamento-2` en una corrida
(ver [`AUDITORIA-citas-AT2.md`](AUDITORIA-citas-AT2.md) §5.b). Dos advertencias que salieron de
esa primera aplicación y que conviene conocer antes de usarlo en los otros cursos:

- **No elijas el párrafo por recall de palabras.** En un discurso corto casi cualquier ventana de
  4 párrafos llega a recall 1.00, y el ancla termina 3 párrafos antes de la frase. El criterio es
  la coincidencia literal (n-grama de hasta 10 palabras).
- **Buscá la frase en cualquier posición del párrafo, no solo al arranque.** Muchos `texto`
  guardados empiezan a mitad de una oración del discurso; anclar por el arranque mandó 4 de las 61
  a un párrafo equivocado.

El script deja en `REVISAR`/`NO_HALLADO` lo que no ubica con seguridad, y **conviene correr una
verificación independiente** al terminar (releer los `link` escritos y comprobar la coincidencia
literal en el párrafo anclado): así aparecieron esas 4.

---

## Cómo continuar

```bash
npx tsx scripts/audit-links-citas.ts religion-200 --solo-problemas  # estructura y anclas
npx tsx scripts/extract-citas.ts religion-200                       # panorama y banderas
npx tsx scripts/validate-content.ts                                 # tras cada corrección
```

Las correcciones se aplican en `lib/content/religion-200/<lessonId>.json`, en `autor`,
`fuente`, `texto` y `link`. **La prosa se guarda como array de párrafos.**
