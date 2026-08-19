# Auditoría de citas — Antiguo Testamento, primer semestre

Registro de la revisión de las citas de líderes de la Iglesia del curso
`antiguo-testamento-1`. Mismo criterio que [DyC-1](AUDITORIA-citas-DyC1.md),
[R301](AUDITORIA-citas-R301.md), [R225](AUDITORIA-citas-R225.md),
[R250](AUDITORIA-citas-R250.md) y [Libro de Mormón](AUDITORIA-citas-libro-de-mormon.md).

**Estado: empezado.** El curso tiene **110 citas**, la mayor cantidad del corpus. Se
verificaron por ahora las **4 que el detector marcaba con banderas de contenido**
(1 `sin-link`, 1 `voseo-en-cita` y 2 `vosotros-en-cita`, esta última una bandera
nueva). Las otras 106 siguen sin revisar una por una.

---

## Panorama del curso

| Bandera | Al empezar | Ahora |
|---|---:|---:|
| `sin-link` | 1 | **0** |
| `voseo-en-cita` | 1 | **0** |
| `vosotros-en-cita` (bandera nueva) | 2 | **0** |
| `elder-sin-tilde` | 5 | **0** |
| `link-sin-lang-spa` | 3 | 3 |
| `link-no-oficial` | 2 | 2 |
| **Citas con problemas** | **12** | **3** |

Las 3 que quedan son **esperadas, no defectos**:

- `leccion-188` (Nelson) y `leccion-81` (Bennett): devocionales universitarios alojados
  en `byui.edu` y `speeches.byu.edu`. Son sitios oficiales de la Iglesia, pero fuera
  del dominio `churchofjesuschrist.org` que revisa el detector.
- `leccion-188` (Hinckley): *New Era*, septiembre de 2007 — artículo que solo existe
  en inglés.

---

## Las 2 citas verificadas

### 1. `leccion-194` — Organizar las tareas y prioridades ⚠️ Reescrita en voseo

- **Fuente declarada:** Presidente Dallin H. Oaks, «Face to Face con el presidente y la
  hermana Oaks [Strive to Be]», transmisión mundial, 23 de febrero de 2020 — **con link
  correcto al video oficial**.
- **Verificación:** la fuente es **real y correcta**, y el **Manual de Seminario del
  Antiguo Testamento 2026 cita este mismo pasaje en esta misma lección**, con la
  marca de tiempo exacta (8:46–9:27). Pero el texto del curso estaba **reescrito en
  voseo rioplatense** («recordá», «podés», «te acercan»), y con la redacción alterada
  además del tratamiento.
- **Acción tomada:** ✅ corregida. Se reemplazó por la transcripción oficial que usa el
  manual y se completó la referencia con la marca de tiempo. **Se conservan el autor,
  la fuente y el link.**

> **Presidente Dallin H. Oaks** — «Evento Cara a Cara con el presidente y la hermana Oaks», transmisión mundial, 23 de febrero de 2020, Biblioteca del Evangelio (de 8:46 a 9:27)
>
> «A menudo cometemos el error de fijar una meta a muy largo plazo, como un estudiante que me dijo que estaba estudiando para ser neurocirujano. Le dije: "Está bien, pero ¿no debería ser tu primera meta aprobar un curso de biología?". Así que recuerden que las metas más eficaces pueden tomar una meta a largo plazo, pero debemos recordar que las metas que nos van a hacer avanzar hacia esa visión a largo plazo son las intermedias y a corto plazo, y nos llevarán a ese destino.»
>
> `https://www.churchofjesuschrist.org/media/video/2020-02-1000-face-to-face-with-president-and-sister-oaks-strive-to-be?lang=spa`

**Con esta, el voseo lleva 7 de 7 aciertos como predictor** (5 en DyC-1, 1 en R301, 1
acá). No falló ninguna vez: donde hay voseo, la cita fue reescrita.

### 2. `leccion-88` — 2 Reyes 17; 24–25 ✅ Textual, solo faltaba el link

- **Fuente declarada:** Élder James E. Talmage, *The Articles of Faith*, 12.ª edición,
  1924 — sin `link` y sin número de página.
- **Verificación:** el texto es **exactamente textual**. El Manual de Seminario del
  Antiguo Testamento 2026 cita este pasaje en esta misma lección, y el fragmento del
  curso es un recorte literal de una cita más larga del manual. La referencia completa
  es **págs. 328–329**.
- **Acción tomada:** ✅ completada. Se agregó la página y el `link` a la página del
  manual. *The Articles of Faith* no está en línea en español, así que —igual que con
  los discursos viejos de DyC-1— **la página del manual que lo cita es la verificación
  posible, y alcanza.** No se tocó el texto.

> **Élder James E. Talmage** — *The Articles of Faith*, 12.ª edición, 1924, págs. 328–329 (citado en el Manual de Seminario del Antiguo Testamento 2026, 2 Reyes 17; 24–25)
>
> «Aunque han sido heridos de los hombres y muchos de ellos han desaparecido del conocimiento del mundo, los de Israel no están perdidos para su Dios. Él sabe dónde los han llevado o echado; Su corazón aún se inclina hacia ellos con amor paternal.»
>
> `https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/28-2-kings-16-25/283-2-kings-17-25?lang=spa`

### 3. `leccion-65` — Élder Kyle S. McKay ⚠️ Reescrita en «vosotros»

Encontrada por la **bandera `vosotros-en-cita`**, agregada a
`scripts/extract-citas.ts` a partir del hallazgo de [R301](AUDITORIA-citas-R301.md).

- **Fuente declarada:** «La cercana bondad de Dios», *Liahona*, mayo de 2019, pág. 107
  — con link correcto y ancla de párrafo.
- **Verificación:** el discurso es real y el párrafo anclado es el correcto, pero el
  texto estaba **reescrito en «vosotros»** («os volváis», «vuestra vida o vuestro gozo»)
  y con la redacción alterada. El discurso oficial usa **«ustedes»**.
- **Acción tomada:** ✅ corregida al texto oficial. **Se conservan autor, fuente y link.**

> «Doy testimonio de que Jesucristo es el Gran Libertador y, en Su nombre, les prometo que, cuando se vuelvan a Él con verdadera intención e íntegro propósito de corazón, Él los librará de todo lo que amenace con disminuir o destruir su vida o su alegría.»
>
> `https://www.churchofjesuschrist.org/study/general-conference/2019/04/55mckay?lang=spa&id=p24#p24`

### 4. `leccion-203` — Élder Ronald A. Rasband ⚠️ Final reescrito en «vosotros»

- **Fuente declarada:** «Recomendados al Señor», *Liahona*, noviembre de 2020, pág. 23
  — con link y ancla a `p4`.
- **Verificación:** caso mixto y por eso interesante. Las **tres primeras oraciones son
  textuales** (párrafo 3 del discurso). La cuarta estaba **reescrita y abreviada**,
  terminando en «el Espíritu estará con vosotros» donde el discurso dice «con ustedes»
  y agrega la cláusula «porque han hecho un firme compromiso con el Señor con respecto
  a la vida de ustedes».
- **Acción tomada:** ✅ restaurada la oración final completa y corregida el ancla del
  link a `p3-p4`, que es el rango real de la cita. **Se conservan autor y fuente.**

> «El templo es la Casa del Señor y un santuario para resguardarse del mundo. Su Espíritu envuelve a quienes adoran dentro de esas paredes sagradas. Él establece las normas por las cuales entramos como Sus invitados. […] El ser dignos de poseer una recomendación vigente para el templo es tanto una protección del adversario, porque han hecho un firme compromiso con el Señor con respecto a la vida de ustedes, así como una promesa de que el Espíritu estará con ustedes.»
>
> `https://www.churchofjesuschrist.org/study/general-conference/2020/10/16rasband?lang=spa&id=p3-p4#p3`

**Las dos aparecieron con `link` correcto y discurso real.** Es la mejor evidencia de
que el grupo «con link» no es sano por defecto: la referencia existía, el ancla
apuntaba al párrafo correcto, y aun así el texto no era el del discurso.

---

## Correcciones mecánicas aplicadas

5 citas tenían **«Elder» sin tilde** en el campo `autor`. Corregidas. Una de ellas
además tenía el nombre mal escrito y el detector no lo veía:

| Lección | Antes | Ahora |
|---|---|---|
| `leccion-162` | `Elder Rondald A. Rasband` | `Élder Ronald A. Rasband` |
| `leccion-178` | `Elder Jeffrey R. Holland` | `Élder Jeffrey R. Holland` |
| `leccion-193` | `Elder David A. Bednar` | `Élder David A. Bednar` |
| `leccion-201` | `Elder Neil L. Andersen` | `Élder Neil L. Andersen` |
| `leccion-74` | `Elder Carl B. Cook` | `Élder Carl B. Cook` |

---

## Qué falta en este curso

- [ ] **Las 106 citas restantes.** Es el grupo más grande del corpus y no está
      revisado. Todas tienen `link`, lo que garantiza que la referencia existe pero
      no que el texto sea textual ni que el autor sea el correcto — los tres cursos
      auditados hasta ahora encontraron casos de ambas cosas dentro del grupo «sano».
- [ ] Revisar `leccion-201`, cuya `fuente` es solo «Liahona, mayo de 2024,» sin título
      de discurso. Es el formato que en DyC-1 predijo 42 de 42 citas no textuales,
      aunque acá el `link` sí apunta a un discurso real de Andersen.

## Cómo continuar

```bash
npx tsx scripts/extract-citas.ts antiguo-testamento-1        # panorama
npx tsx scripts/extract-citas.ts --json antiguo-testamento-1 # con banderas
npx tsx scripts/validate-content.ts                          # tras cada corrección
```

Las correcciones se aplican en `lib/content/antiguo-testamento-1/<lessonId>.json`.
