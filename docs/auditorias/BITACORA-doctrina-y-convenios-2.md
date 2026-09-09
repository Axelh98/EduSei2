# Bitácora — doctrina-y-convenios-2

Ver `BITACORA-generacion-doctrinal.md` para la línea de base del proyecto y las reglas del registro
(ese archivo es de solo lectura desde acá). El método viene de
`BITACORA-doctrina-y-convenios-1.md`, que es el cierre más reciente y más completo (91 lecciones,
diecisiete lotes, ocho frentes a 91/91).

## Punto de partida (8-sep-2026), medido en esta sesión

**56 archivos · 48 en el manifiesto · 8 huérfanos · 2 sin material.** Convención `resumen` en cero.
Las cifras se dan sobre los **48 del manifiesto** (el curso vivo) salvo donde se aclara.

```
=== doctrina-y-convenios-2 — 48 lecciones del manifiesto ===
Cristo en contexto o conclusion:  12/48 (25 %)
  ...y además dice algo de Él:    23/48 (48 %)   <- ctx + concl, inventario propio
>= 3 escrituras:                  48/48 (100 %)  <- único frente ya cerrado
Conclusión >= 80 palabras:        33/48 (69 %)
Pregunta que invita a orar:       11/48 (23 %)
Pregunta que devuelve al pasaje:   0/48 (0 %)
Sin líderes huérfanos:            47/48
Quiz con <= 2 «correcta más larga»: 0/48   (287/336 preguntas, 85 %)
```

Tipos de lección: *Doctrina y Convenios - Ven Sigueme* 47, *Dominio de la Doctrina* 1.

### Los frentes medibles, todos juntos

| Frente | Cómo se mide | Inicial (48) | Pendientes |
|---|---|---|---:|
| Cristo en `contexto` o `conclusion` | `audit-doctrinal.ts` + inventario | 12/48 (25 %) | **36** |
| Sustancia (dice algo de Él), ctx+concl | inventario por lección | 23/48 (48 %) | **25** |
| Pregunta de orar/meditar/anotar | `audit-doctrinal.ts` + inventario | 11/48 (23 %) | **37** |
| Pregunta de escudriñar | `audit-doctrinal.ts` + inventario | 0/48 (0 %) | **48** |
| Al menos 3 escrituras | inventario | **48/48** | 0 — ya limpio |
| Conclusión ≥ 80 palabras | inventario | 33/48 (69 %) | **15** |
| Conclusión en rango 80–140 | inventario | 33/48 | **15** (las 15 son cortas; ninguna se pasa) |
| Quiz con ≤ 2 de 7 «la correcta es la más larga» | barrido propio | 0/48 | **48** (287/336, **85 %**) |
| Líderes huérfanos | inventario propio | 47/48 | **1** (`pr-ctica-del-dominio-de-la-doctrina`) |
| Citas de líder con ancla `#` | barrido propio | 49/50 | **1** (`doctrina-y-convenios-111`) |
| Sesgo de posición del quiz | `audit-distribucion-respuestas.ts` | `0:24 1:26 2:25 3:24` ✓ | 0 — ya limpio |
| `contexto` en rango 150–340 | `audit-completitud.ts` | 54/54 | 0 |
| `cuestionario` con 6 preguntas | `audit-completitud.ts` | 54/54 | 0 |
| Quiz en spec 7 × 4 | `audit-completitud.ts` + barrido | 54/54 | 0 |
| `chapterUrl` rotas | `audit-chapterurls.ts` | 0/48 | 0 |
| `correctAnswer` en rango · `questionCount` · opciones duplicadas · DD sin su pasaje · citas superpuestas | barrido propio | todos limpios | 0 |
| Espacio suelto antes de puntuación | barrido propio | 1 ocurrencia | **1** (en un huérfano) |
| Molde repetido (Jaccard ≥ 0.60) en posiciones 3 y 6 | cruce propio | 0 pares | 0 |
| Preguntas de experiencia personal (fila 11) | cruce propio | 0 por regex | **a confirmar leyendo** |
| Preguntas que citan un capítulo ajeno (fila 26) | cruce propio | 2, las dos en un huérfano vacío | 0 en el manifiesto |

**Ninguna de las 48 lecciones está cerrada.** El frente más grande es el **quiz (48 lecciones,
287 preguntas con sesgo de longitud)**, seguido por **escudriñar (48)** y **Cristo (36)**.

### Lo que se confirmó y lo que no de las mediciones previas

- **287/336 (85 %) con la correcta más larga: confirmado exacto** contra el dato del 7-sep que
  trajo el usuario. El barrido propio reproduce ese número desde cero, lo que valida el detector
  contra una medición independiente.
- **54 lecciones con material: confirmado** (56 archivos − 2 con `secciones: []`).
- **`audit-completitud.ts` 54/54 en rango en los cinco chequeos: confirmado.**
- **8 huérfanos sobre 56: confirmado exacto**, y son los 8 exactos que lista
  `COMPLETITUD-doctrina-y-convenios-2.md` §1.2.
- **Lo que ninguna auditoría previa de este curso miró:** los cuatro frentes doctrinales (Cristo,
  sustancia, orar, escudriñar), el sesgo de longitud del quiz, el largo de la conclusión, los
  líderes huérfanos con iniciales, y el molde repetido.
- **`COMPLETITUD-doctrina-y-convenios-2.md` da el curso «CERRADO (1-sep-2026), 48 de 48»**, y eso
  es cierto **para lo que ese documento mide** (completitud de forma, fidelidad de Escrituras y de
  citas de líder). No es cierto para los ocho frentes de esta bitácora, que son posteriores.

### Contraste de los dos detectores de líderes huérfanos

Los dos detectores dan resultados **distintos y complementarios**, y los dos se verificaron a mano:

| | `audit-autores-quiz.ts` | inventario propio |
|---|---|---|
| `pr-ctica-del-dominio-de-la-doctrina` (B. H. Roberts) | **no lo ve** | **lo encuentra** |
| `doctrina-y-convenios-79-80` (Uchtdorf, Robert C. Oaks) | **los encuentra** | **no los ve** |

- El caso **B. H. Roberts está confirmado leyendo el archivo**: la única `enseñanza` de la lección
  es del presidente Russell M. Nelson, y dos preguntas del quiz preguntan por «B. H. Roberts»
  («¿Qué habrías hecho vos en el lugar de B. H. Roberts…?» y «En la experiencia del élder B. H.
  Roberts, ¿cuándo recibió la ayuda…?»). Es un huérfano genuino de la fila 12.
- Los dos casos de `79-80` **están en un archivo huérfano y vacío** (`secciones: []`), que el
  inventario saltea antes de llegar al detector. Se resuelven con el destino de esa lección.

### Verificación previa de `chapterUrl`

`npx tsx scripts/audit-chapterurls.ts doctrina-y-convenios-2` → **0 rotas sobre 48**, 0 sin
`chapterUrl`.

⚠️ Reportó **44 «desalineadas» y son falso positivo del script** (fila 29 del catálogo): los `id`
de este curso llevan el número de la **sección de D. y C.**, no el de la lección del manual, así
que `doctrina-y-convenios-115` se compara contra «Lección 128». El slug
`411-doctrine-and-covenants-115` es el correcto para D. y C. 115. **La columna que vale es
«rotas», y está en cero.**

### Los detectores propios, con casos de prueba

Se reusaron las herramientas de la sesión de DyC-1 y **se revalidaron sobre este curso antes de
confiar en su salida**. Los **11 casos de prueba sintéticos** del barrido estructural
(`test-inv.js`: `options.length`, `correctAnswer` fuera de rango, `questionCount` desincronizado,
opciones duplicadas, espacio antes de puntuación, Dominio de la Doctrina sin su pasaje y su
contracaso, citas superpuestas, archivo sin manifiesto, manifiesto sin archivo, líder huérfano y
su contracaso) **pasan**, incluso después de las dos extensiones de esta sesión. Las regex
doctrinales (`NOMBRE`, `SUSTANCIA`, `RUIDO`, `ESPIRITU`, `INVITA_ESPIRITU`, `MANDA_AL_TEXTO`,
`REFERENCIA`, con los lookarounds sobre letras españolas) están **copiadas literalmente** de
`audit-doctrinal.ts`. Cotejo contra el script oficial sobre los 56 archivos: Cristo 16/54 en los
dos, orar 15/54 en los dos, escudriñar 0/54 en los dos.

Dos extensiones al inventario en esta sesión, las dos revalidadas contra los 11 casos:

1. **Sesgo de longitud en las dos direcciones** (la correcta como la más larga *y* como la más
   corta), por el error nº 2 / fila 27 del catálogo.
2. **Tope de 140 palabras en la conclusión**, por el error nº 3.

⚠️ **El chequeo de Dominio de la Doctrina no aplica en este curso** y su 0 es por vacuidad: la
única lección de ese tipo no lleva una referencia en el `title`. Por eso se validó con el caso
sintético, que sí la detecta.

⚠️ **El cruce de «experiencia personal» da 0 por regex y ese 0 no es un veredicto.** El catálogo
(fila 11 y la nota de la fila 25) documenta que el detector de DyC-1 necesitó **tres versiones** y
aun así se le escaparon casos: ese defecto se encuentra **leyendo**. Como hay que abrir los 48
quizzes por el sesgo de longitud, queda barrido por construcción dentro de los lotes.

---

## Triaje de huérfanos (8-sep-2026) — leídos y comparados, nada borrado

Los 8 huérfanos son exactamente los que documenta `COMPLETITUD-doctrina-y-convenios-2.md` §1.2: las
8 lecciones que estaban asignadas a los dos semestres a la vez, y que la corrección del manifiesto
del 1-sep dejó fuera de DyC-2 porque **DyC-1 ya las cubre en sus semanas 18–20**.

**Los 8 equivalentes de DyC-1 están activos en su manifiesto (91/91), y DyC-1 quedó cerrado al
100 % en los ocho frentes el 7-sep.** Es decir: la versión buena de cada uno de estos ocho temas ya
está en el sitio, y es la de DyC-1.

| Huérfano de DyC-2 | Equivalente activo en DyC-1 | Comparación de cobertura |
|---|---|---|
| `doctrina-y-convenios-71` | `82-dc-71` | Duplicado. DyC-1 tiene `71:7–9` ⊃ `71:7` y las otras dos idénticas; contexto 274 vs. 178 palabras |
| `doctrina-y-convenios-76-1-19` | `85-dc-76-1-19` | Duplicado. DyC-1 tiene `76:5–7` ⊃ `76:5` y `76:7`, y suma `58:3–4` y `76:22–24` |
| `doctrina-y-convenios-76-19-24` | `86-dc-76-19-24` | Duplicado. `76:22–24` está cubierto en DyC-1 en **cuatro** lecciones (`85`, `88`, `162`, `pascua-resurreccion`) |
| `doctrina-y-convenios-76-50-70` | `87-dc-76-50-70` | Duplicado. DyC-1 tiene `76:51–53` ⊃ `76:51` y `76:53`, y `76:69` idéntica |
| `doctrina-y-convenios-78` | `89-dc-78` | **`secciones: []`** — solo 7 preguntas de quiz. DyC-1 tiene la lección completa y cerrada |
| `doctrina-y-convenios-79-80` | `90-dc-79-80` | **`secciones: []`** — solo 7 preguntas de quiz, dos de ellas con líderes huérfanos. DyC-1 completa y cerrada |
| `eval-a-tu-aprendizaje-5` | `84-evalua-aprendizaje-5` | Repaso genérico. Sus pasajes propios (`59:9–10`, `64:11`) no están citados literalmente en DyC-1, pero **su material sí**: `73-dc-59` enseña el día de reposo y `77-dc-64-1-17` el perdón |
| `pr-ctica-del-dominio-de-la-doctrina-5` | `83-dominio-practica-5` | Duplicado casi puro: `64:9–10` idéntica, `19:16–19` ⊃ `19:16–17`, y `58:42–43` está en `72-dc-58-38-60` |

**Ningún huérfano cubre material doctrinal que el sitio no tenga ya.** No hay un caso como el de
`leccion-25-10` de LdM-2 (§5.1 de `CALIDAD-contexto-libro-de-mormon-2.md`), donde el huérfano
tapaba un hueco real del calendario.

⚠️ **Los 8 sí están en `lib/content/generated-map.ts`**: el bundler los importa aunque el
manifiesto no los liste, así que no se muestran en la app pero pesan en el build. Es la misma
situación que tenía LdM-2 antes de su limpieza.

**Nada se borró ni se generó: el destino de los 8 es decisión del usuario** (y tocar
`generated-map.ts` requiere `regen-content-map.ts`, que está fuera del alcance de esta sesión).

---

## Sesiones

| Fecha | Lecciones | Frente | Antes → después | Notas |
|---|---|---|---|---|
| 8-sep-2026 | — | medición de partida y triaje de huérfanos | — | Sin escrituras en contenido. Se copiaron y revalidaron las 10 herramientas de la sesión de DyC-1; los 11 casos de prueba pasan; el inventario reproduce el 85 % conocido del sesgo de longitud desde cero. |

### Decisión sobre los huérfanos (8-sep-2026)

**El usuario decidió dejarlos como están.** No se borra ni se genera nada: el curso se cierra sobre
las **48 lecciones del manifiesto**, y los 8 archivos quedan en disco como historial, igual que hoy.
Consecuencias que quedan registradas y no se persiguen en esta sesión:

- Las 2 lecciones con `secciones: []` (`doctrina-y-convenios-78`, `doctrina-y-convenios-79-80`) **no
  se generan**: producirían contenido que la app no muestra y que duplica a `89-dc-78` y `90-dc-79-80`
  de DyC-1, ya cerradas al 100 %.
- Los **2 líderes huérfanos** de `79-80` (Uchtdorf y Robert C. Oaks) que detecta
  `audit-autores-quiz.ts` **quedan sin corregir por esa misma razón**, y son los únicos que ese
  script reportará al cierre del curso. El huérfano real del manifiesto (B. H. Roberts) sí se corrige.
- La única ocurrencia de **espacio suelto antes de puntuación** del curso está en
  `pr-ctica-del-dominio-de-la-doctrina-5`, que también es huérfano. Queda igual.

| 8-sep-2026 | 101-1-42, 101-43-101, 103, 105, 109, 110-parte-1 | lote 1 — cierre completo por lección | Cristo 12/48 → **18/48** | **+6 exacto** en Cristo, escudriñar (0→6) y quiz en spec (0→6); sustancia 23→26, orar 11→16, conclusión 33→34. El sesgo de longitud del curso bajó de **287/336 (85 %) a 252/336 (75 %)**, y las 42 preguntas de las seis lecciones quedaron en **0 «más larga» y 0 «más corta»**. **En las seis la vía estaba escrita en el manual y la lección la había borrado** (fila 18/20 del catálogo): el objetivo textual de `101-1-42` es «ayudar a los alumnos a sentir la compasión y la misericordia del Salvador»; el de `101-43-101` pregunta «¿qué pistas pueden ayudarnos a ver que el noble representa a Jesucristo?»; el de `103` enuncia la verdad doctrinal «cuando ejercemos fe en Jesucristo, podemos sentir una mayor disposición y capacidad para obedecer Sus mandamientos»; el de `105` lista 3 Nefi 11:10–11 entre los ejemplos; el de `109` trae la cita de Bednar sobre tomar sobre nosotros el nombre de Jesucristo; y el de `110-parte-1` se titula «El Salvador se manifestará a Sus santos en el templo». Vías: **«no obstante sus pecados, mis entrañas están llenas de compasión»** (101-1-42, D. y C. 101:9), **el noble de la parábola es Él, y así enseñaba siempre** (101-43-101, Mateo 13:34–35), **Getsemaní: pidió que pasara la copa y obedeció igual** (103, Lucas 22:41–42), **el único que sí se sometió «en todas las cosas»** (105, 3 Nefi 11:10–11), **el nombre que se pone sobre los que salen del templo es el Suyo** (109, Mosíah 5:8), **«soy vuestro abogado ante el Padre», y se lo ve en esa tarea** (110-parte-1, D. y C. 45:3–5). 6 citas de Escritura nuevas, **todas descargadas con `ver-versiculo.ts`** y limpiadas de espacios antes de puntuación (Lucas 22:42, Mosíah 5:8 y D. y C. 45:4 los traían). Verbos de escudriñar rotados: volvé a leer / releé / leé / volvé a leer / buscá en / volvé a leer. ⚠️ **El chequeo de salida atrapó el error nº 1 antes de escribir**: en `109` el único «orar» del curso vivía en la pregunta 3, que es justo la que se reemplaza por la de escudriñar; se reubicó en la 6. ⚠️ **Se leyeron los 6 quizzes completos (42 preguntas)**: 0 atribuciones de versículo equivocadas, 0 preguntas de experiencia personal, 0 `correctAnswer` apuntando a un distractor. |
| 8-sep-2026 | 111, 112, 119-120, 121-123, 121-34-46, 122 | lote 2 — cierre completo por lección | Cristo 18/48 → **24/48** | **+6 exacto por segunda vez** en Cristo, escudriñar (6→12) y quiz en spec (6→12); sustancia 26→31, orar 16→21, conclusión 34→37. El sesgo de longitud del curso bajó de **75 % a 212/336 (63 %)**, y las 42 preguntas del lote quedaron en **0 «más larga» y 0 «más corta»**. Otra vez **las seis vías estaban en el manual**: «esta lección puede ayudar a los alumnos a sentir mayor confianza en el Padre Celestial y en Jesucristo» (111); «la humildad de Jesucristo lo ayudó a entender y cumplir la voluntad de Su Padre… véase Juan 5:30» (112); «en Su consejo a los santos, el Salvador revela verdades relacionadas con **Su** ley del diezmo» (119-120); «¿qué podemos aprender de la forma en que Jesucristo soportó Sus propias pruebas?» (121-123); «Jesucristo desea que sigamos Su ejemplo de influir en la vida de los demás» (121-34-46); «gracias a Jesucristo, incluso las experiencias difíciles pueden ayudarnos a llegar a ser más semejantes a Él» (122). Vías: **la promesa del v. 11 se apoya en Su gracia, y el consejo de ser «prudentes como la serpiente» es el que Él dio a Sus discípulos** (111, Moroni 10:32–33 + Mateo 10:16), **el que dijo «sé humilde» vivió así** (112, Juan 5:30), **la promesa de las ventanas de los cielos la pronunció Él mismo entre los nefitas** (119-120, 3 Nefi 24:10), **«Oh Dios, ¿en dónde estás?» tiene un precedente exacto: la cruz** (121-123, Mateo 27:46), **la lista del v. 41 describe cómo trató Él a las personas, y los v. 45–46 prometen lo que pasa al parecérsele** (121-34-46, D. y C. 121:45–46), **descendió debajo de todo «a fin de que… sepa cómo socorrer»** (122, Alma 7:11–12). 6 citas nuevas, todas descargadas; Mateo 27:46 y Alma 7:12 traían el espacio antes de puntuación. ⚠️ **El chequeo atrapó el error nº 4 antes de escribir**: el párrafo nuevo de `119-120` nombraba a Jesucristo pero decía «quien la manda y quien promete», y el vocabulario de `SUSTANCIA` es literal («promete» no cuenta, «Su promesa» sí). Se corrigió y recién entonces se aplicó. ⚙️ El lote se aplicó **en dos etapas** porque diez preguntas necesitaban mover un distractor antes de que `elegir.js` pudiera medir la ventana: primero contenido + distractores (con su propio `--check`), después las 39 correctas. Ninguna quedó en un extremo. ⚠️ **Se leyeron los 6 quizzes completos (42 preguntas)**: 0 atribuciones de versículo equivocadas, 0 preguntas de experiencia personal, 0 `correctAnswer` apuntando a un distractor. |
| 8-sep-2026 | 124, 126, 127-128-parte-1, 127-128-parte-2, 82-1-7, 82-8-24 | lote 3 — cierre completo por lección | Cristo 24/48 → **30/48** | **+6 exacto por tercera vez**; escudriñar 12→18, quiz en spec 12→18, orar 21→25, sustancia 31→33. El sesgo de longitud bajó a **178/336 (53 %)**. Vías, todas del manual: **al Lugar Santísimo se entra «por la sangre de Jesucristo»; el templo no abre una puerta propia, abre la que Él abrió** (124, Hebreos 10:19–20, con la cita de Hales que trae el manual: las ordenanzas «nos guían hacia nuestro Salvador»), **el manual manda leer al lado el relato del hombre rico: la misma invitación, hecha por la misma persona, que Brigham aceptó sin zapatos** (126, Lucas 18:22), **«nuestras labores en beneficio de los muertos dan elocuente testimonio de que Jesucristo es el divino Redentor»: sin Su resurrección no habría nada que llevar al templo por nadie** (127-128-p1, 1 Corintios 15:21–22), **el «Rey Emanuel» del v. 22 es Él, y quien hace una ordenanza por otro se vuelve uno de los «salvadores en el monte de Sion»** (127-128-p2, Abdías 1:21), **la imagen del manual: las dos mitades de la ilustración son Él, misericordioso y exigente a la vez, y Su respuesta a la objeción fue de seis palabras** (82-1-7, Juan 14:15), **el que se declara «obligado» es el Salvador, y esa relación se pone en palabras cada domingo** (82-8-24, D. y C. 20:77). 6 citas nuevas, todas descargadas; Hebreos 10:20, Lucas 18:22, 1 Corintios 15:22 y Juan 14:15 traían espacios antes de puntuación. ⚠️ **El defecto espejo se manifestó al revés en este lote**: los primeros candidatos salieron **demasiado cortos** y 11 de 39 quedaron fuera de ventana por abajo. Se resolvió con una segunda pasada de candidatos más largos + seis distractores reajustados; ninguna de las 42 preguntas quedó en un extremo. ⚠️ **Se leyeron los 6 quizzes completos (42 preguntas)**: 0 atribuciones de versículo equivocadas, 0 preguntas de experiencia personal, 0 `correctAnswer` apuntando a un distractor. ⚠️ **Hallazgo de lectura, sin corregir**: la cita de líder de `126` no tiene relación con el tema de la lección — ver la tabla de defectos. |
| 8-sep-2026 | 84-1-32, 84-33-44, 84-49-102, 86, 87, 88-14-41 | lote 4 — cierre completo por lección | Cristo 30/48 → **36/48** | **+6 exacto por cuarta vez**; escudriñar 18→24, quiz en spec 18→24, orar 25→30, sustancia 33→36, conclusión 37→38. El sesgo de longitud bajó a **143/336 (43 %)**; la correcta es la más corta en 10/336 (3 %). **La mitad del curso queda cerrada.** Vías, todas del manual: **«toda la autoridad del sacerdocio proviene de Jesucristo», y Él mismo no se la tomó: la recibió del Padre** (84-1-32, Hebreos 5:4–6), **la cadena de los v. 35–38 es la que Él enseñó la noche anterior a Getsemaní** (84-33-44, Juan 13:20), **el manual pide mirar cómo se siente Él ante los que están «en el pecado y la obscuridad» antes de salir a hablar** (84-49-102, 3 Nefi 17:14), **«el que siembra la buena semilla es el Hijo del Hombre»: el trigo tierno lo sembró Él, y Él manda esperar para no dañarlo** (86, Mateo 13:37–38 — la lección se titula en el manual «El Salvador está recogiendo a Israel»), **la responsabilidad primordial de un profeta «es la de dar testimonio de Cristo»** (87, Apocalipsis 19:10), **es Su cuerpo resucitado el modelo del nuestro** (88-14-41, Filipenses 3:21). 6 citas nuevas, todas descargadas; Hebreos 5:4 y 6, Juan 13:20 y Apocalipsis 19:10 traían espacios antes de puntuación. ⚙️ El sesgo de longitud necesitó **tres pasadas de candidatos** y 5 distractores reajustados: las ventanas de este lote son más estrechas que las de los anteriores (varias de 4 o 5 caracteres, dos imposibles con los distractores originales). Ninguna de las 42 preguntas quedó en un extremo. ⚠️ **Efecto colateral atrapado al escribir**: en `87` la pregunta 6 se apoyaba en «esos lugares santos», que la pregunta 3 definía; al reemplazar la 3 por la de escudriñar, la 6 se quedaba sin antecedente. Se reescribió la 6 para que nombre los tres lugares ella misma. Es la misma familia de defecto que el error nº 1: **reemplazar la pregunta 3 puede romper algo que vivía en otra pregunta**. ⚠️ **Se leyeron los 6 quizzes completos (42 preguntas)**: 0 atribuciones de versículo equivocadas, 0 preguntas de experiencia personal, 0 `correctAnswer` apuntando a un distractor. |

**Estado a la mitad del curso (lotes 1 a 4, 24 lecciones):** Cristo 12→**36/48**, sustancia 23→**36/48**,
orar 11→**30/48**, escudriñar 0→**24/48**, quiz en spec 0→**24/48**, conclusión 33→**38/48**.
El sesgo de longitud del curso bajó de **287/336 (85 %) a 143/336 (43 %)**. 24 citas de Escritura
nuevas, todas descargadas con `ver-versiculo.ts`; ninguna escrita de memoria y ninguna cita de líder
inventada. `validate-content.ts` limpio salvo el problema preexistente de otro curso.

### Defecto nuevo encontrado leyendo: cita de líder ajena al tema de la lección

`doctrina-y-convenios-126` trata sobre Brigham Young, su misión a Inglaterra y el mandato de velar
por su familia. Su única `enseñanza` es del presidente Nelson y dice: «Consideren la gran
misericordia y bondad de Dios, quien, antes de la fundación del mundo, proveyó una manera para dar
las bendiciones del templo a aquellos que murieron sin un conocimiento del Evangelio». **No tiene
ninguna relación con la lección**: es una cita sobre el bautismo por los muertos, que es el tema de
`127-128-parte-1` — donde, además, hay otra cita de Nelson sobre lo mismo que sí encaja.

**Ningún script lo detecta.** `extract-citas.ts` no levanta bandera (autor, fuente, texto y link
están bien y la cita es genuina), `audit-autores-quiz.ts` da 0 porque el quiz de `126` no menciona a
Nelson, y `audit-completitud.ts` la cuenta como «lección con al menos una cita de líder». Es
pertinencia, no fidelidad: la cita es real y está bien atribuida, pero no es de esta lección.

**Propuesta, no aplicada** (cambiar una cita de líder está fuera del alcance de los ocho frentes):
el manual de la propia lección trae citas de **Brigham Young** que sí encajan —entre ellas «Supe
que era verdadero, tanto como sabía que mis ojos podían ver y mis dedos palpar» (*Enseñanzas de los
Presidentes de la Iglesia: Brigham Young*, 1997, pág. 2) y su relato sobre la dificultad de hablar
en público (*Journal of Discourses*, tomo V, pág. 97)—, que es el método que recomienda
`seminary-audit` §2. Si se cambia, hay que revisar `cuestionario` y `questions` por autores
huérfanos: **hoy ninguno de los dos menciona a Nelson**, así que el cambio sería seguro.

| 8-sep-2026 | 88-51-95, 88-76-80-117-126, 89-1-17, 89-18-21, 93-19-53, 94-96 | lote 5 — cierre completo por lección | Cristo 36/48 → **42/48** | **+6 exacto por quinta vez**; escudriñar 24→30, quiz en spec 24→30, orar 30→34, sustancia 36→38, conclusión 38→40. El sesgo de longitud bajó a **109/336 (32 %)**, ya cerca del 25 % del azar. Vías, todas del manual: **la verdad doctrinal es «al allegarme a Jesucristo, Él se allegará a mí», y esa invitación Él ya la había hecho en Galilea** (88-51-95, Mateo 11:28–30), **«aprender por la fe en Jesucristo»: primero se hace y después se sabe, que es Su propio mecanismo** (88-76-80, Juan 7:16–17), **el manual pide leer 2 Nefi 26:24 para saber por qué se puede confiar en el que dio la ley** (89-1-17), **el ángel destructor «pasa de largo» por la Pascua, y la Pascua es Cristo — el círculo lo cierra el propio presidente Packer** (89-18-21, 1 Corintios 5:7), **la lección se titula «Recibir la luz y la verdad del Salvador», y esa luz tiene nombre** (93-19-53, Juan 8:12), **el capítulo termina firmado: «a saber, Jesucristo vuestro Señor»** (94-96, D. y C. 95:17 — el manual pide buscar Sus títulos en los versículos 7 y 17). 6 citas nuevas, todas descargadas; Mateo 11:28, Juan 7:16, 1 Corintios 5:7, Juan 8:12 y D. y C. 95:17 traían espacios antes de puntuación. ⚠️ **El error nº 1, por segunda vez en el curso**: en `88-51-95` el único «orar» vivía en la pregunta 3 (hablaba de «orar cuando me acuerdo») y se perdía al escribir la de escudriñar. El chequeo lo marcó antes de escribir y se reubicó en la 6. ⚠️ **Se leyeron los 6 quizzes completos (42 preguntas)**: 0 atribuciones de versículo equivocadas, 0 preguntas de experiencia personal, 0 `correctAnswer` apuntando a un distractor. ⚙️ El quiz necesitó **cuatro pasadas** de candidatos: las ventanas de este lote fueron las más estrechas hasta ahora (una de 1 carácter). |
| 8-sep-2026 | 97, 98, el-campamento-de-israel, eval-a-tu-aprendizaje-6, la-expulsi-n-de-misuri, pr-ctica-del-dominio-de-la-doctrina-8 | lote 6 — **cierre de la cola `SIN CRISTO`** | Cristo 42/48 → **48/48 (100 %)** | **Sexto lote con +6 exacto, seis de seis. No queda ninguna lección del curso sin Jesucristo en `contexto` o `conclusion`.** Escudriñar 30→36, quiz en spec 30→36, orar 34→38, sustancia 38→42. El sesgo de longitud llegó a **71/336 (21 %), por debajo del 25 % del azar**, y la correcta es la más corta en 5/336 (1 %): ninguna heurística de longitud le sirve ya al alumno, que es el objetivo de la fila 27. Vías, todas del manual: **la promesa del v. 16 es la bienaventuranza del Monte, y en el templo «vemos» al Salvador porque deja de sernos desconocido** (97, Mateo 5:8), **el que manda perdonar es Él, y ya le había puesto número a Pedro** (98, Mateo 18:21–22), **el manual encabeza la lección con «Seguir a Jesucristo», que es lo que la marcha describe** (el-campamento, Mateo 16:24), **«heredar un reino de gloria solo es posible por medio de Jesucristo»** (eval-6, D. y C. 76:69), **el manual pregunta en qué sentido el perdón de José recuerda a Jesucristo: la respuesta está en la cruz** (la-expulsión, Lucas 23:34), **«el Dominio de la Doctrina puede ayudar a edificar los cimientos de su vida sobre Jesucristo»** (práctica-8, Helamán 5:12). 6 citas nuevas, todas descargadas; Mateo 5:8, Mateo 16:24, Lucas 23:34, Helamán 5:12 y D. y C. 76:69 traían espacios antes de puntuación. ⚠️ **Se leyeron los 6 quizzes completos (42 preguntas)**: 0 atribuciones de versículo equivocadas, 0 preguntas de experiencia personal, 0 `correctAnswer` apuntando a un distractor. ⚙️ En este lote los primeros candidatos salieron **demasiado largos** —el problema inverso al del lote 3—, lo que confirma que la ventana hay que medirla y no estimarla en ninguna de las dos direcciones. |

**Cierre de la cola `SIN CRISTO` (lotes 1 a 6, 36 lecciones):** Cristo 12→**48/48 (100 %)**,
escudriñar 0→**36/48**, quiz en spec 0→**36/48**, orar 11→**38/48**, sustancia 23→**42/48**,
conclusión 33→**40/48**. El sesgo de longitud del curso bajó de **287/336 (85 %) a 71/336 (21 %)**
y la dirección espejo quedó en **5/336 (1 %)**. 36 citas de Escritura nuevas, todas descargadas con
`ver-versiculo.ts`; ninguna escrita de memoria y ninguna cita de líder inventada.

| 8-sep-2026 | 107-1-20, 107-21-100, 110-parte-2, 115, 88-1-13-41-50, 90 | lote 7 — bloque final, cierre por lección | escudriñar 36→**42/48** | Arranca el bloque final: ya no hay cola `SIN CRISTO`, así que se trabaja lección por lección cerrando **todos** los frentes pendientes de cada una. **+6 exacto** en escudriñar y en quiz en spec; sustancia 42→47, orar 38→43, conclusión 40→43. El sesgo de longitud bajó a **36/336 (11 %)** y la dirección espejo a 3/336 (1 %). Escrituras nuevas: **Mateo 16:19** (las llaves las da Él: «a ti te daré las llaves del reino»), **Hechos 1:8** («me seréis testigos», que es la definición del v. 23 de apóstol como «testigo especial del nombre de Cristo»), **Malaquías 4:5–6** (la profecía que Elías vino a cumplir, casi palabra por palabra igual al v. 15), **3 Nefi 27:7–8** («¿cómo puede ser mi iglesia salvo que lleve mi nombre?», el razonamiento del nombre dicho por el propio Salvador cinco siglos antes de 1838), **Juan 1:4–5** («en él estaba la vida, y la vida era la luz de los hombres», el origen del término «luz de Cristo») y **Efesios 4:11–13** (para qué existe toda la organización de la Iglesia: «a la medida de la estatura de la plenitud de Cristo»). ⚠️ **El chequeo atrapó el error nº 4 por segunda vez**: el párrafo nuevo de `90` decía «a la medida de la plenitud de Cristo», «Su doctrina» y «Sus ordenanzas», y ninguna de las tres está en el vocabulario literal de `SUSTANCIA`; se cambió por «semejante a Él» antes de escribir. ⚠️ **Se leyeron los 6 quizzes completos (42 preguntas)**: 0 atribuciones de versículo equivocadas, 0 preguntas de experiencia personal, 0 `correctAnswer` apuntando a un distractor. ⚙️ El quiz necesitó **tres pasadas y cinco distractores reajustados**; en dos preguntas la ventana original era literalmente vacía (los tres distractores diferían en 1 carácter). |

**Estado al cerrar el bloque 3 (lotes 1 a 7, 42 lecciones):** Cristo **48/48**, sustancia **47/48**,
orar **43/48**, escudriñar **42/48**, quiz en spec **42/48**, conclusión **43/48**, escrituras
**48/48**. El sesgo de longitud del curso bajó de **287/336 (85 %) a 36/336 (11 %)**, y la
dirección espejo quedó en **3/336 (1 %)**: las dos por debajo del 25 % del azar. 42 citas de
Escritura nuevas, todas descargadas con `ver-versiculo.ts`. **Quedan 6 lecciones** para cerrar el
curso: `el-establecimiento-de-nauvoo`, `eval-a-tu-aprendizaje-7`, `eval-a-tu-aprendizaje-8`,
`pr-ctica-del-dominio-de-la-doctrina`, `pr-ctica-del-dominio-de-la-doctrina-6` y
`doctrina-y-convenios-93-1-22` — más el líder huérfano (B. H. Roberts) y la cita sin ancla de
`doctrina-y-convenios-111`.

| 8-sep-2026 | el-establecimiento-de-nauvoo, eval-a-tu-aprendizaje-7, eval-a-tu-aprendizaje-8, pr-ctica-del-dominio-de-la-doctrina, pr-ctica-del-dominio-de-la-doctrina-6, 93-1-22 | lote 8 — **cierre del curso** | los ocho frentes a **48/48** | Último lote: **escudriñar 42→48, quiz en spec 42→48, orar 43→48, sustancia 47→48, conclusión 43→48**. Escrituras nuevas: **Hechos 3:6** («En el nombre de Jesucristo de Nazaret, ¡levántate y anda!», que es palabra por palabra lo que José le dijo a Elijah Fordham), **D. y C. 19:23** («aprende de mí… y en mí tendrás paz», la invitación que el manual pide usar como vara de la evaluación), **Juan 14:6** (el «marcador de sendero» que el manual propone como símbolo del Salvador), **Juan 6:68–69** (la razón de Pedro para quedarse, que es la pregunta de fondo de la práctica 6) y **Juan 1:16** («de su plenitud recibimos todos, y gracia sobre gracia», el paralelo exacto de D. y C. 93:20). ⚠️ **Dos errores de contenido encontrados leyendo, no por script** — ver la tabla de defectos. |

## Cierre del curso (8-sep-2026)

**Los ocho frentes por lección quedaron en 48/48**, medidos con el inventario propio después de
escribir:

```
Cristo (ctx o concl):        48/48      >= 3 escrituras:             48/48
Sustancia (ctx+concl):       48/48      Conclusión en rango 80-140:  48/48
Pregunta de orar:            48/48      Pregunta de escudriñar:      48/48
Sin líderes huérfanos:       48/48      Quiz con <=2 correcta+larga: 48/48
```

**Barrido estructural: todo en cero** sobre las 48 del manifiesto. `options.length ≠ 4`,
`correctAnswer` fuera de rango, `questionCount` desincronizado, opciones duplicadas, espacio suelto
antes de puntuación, Dominio de la Doctrina sin su pasaje, citas superpuestas, manifiesto sin
archivo. Los 8 «archivos sin entrada en el manifiesto» son los huérfanos que el usuario decidió
dejar como están.

**Cruce de molde entre lotes (error nº 2).** Las 48 preguntas de la posición 3 y las 48 de la
posición 6, cruzadas con Jaccard: **0 pares ≥ 0.60 y 0 pares ≥ 0.50**. El único par que apareció
(`82-1-7` y `86`, las dos de compromiso, exactamente 0.50) se reescribió al cierre.

**Verificaciones con fuente externa, todas corridas al cierre:**

| Verificación | Resultado |
|---|---|
| `audit-escrituras.ts doctrina-y-convenios-2` | **208/208 OK**, 0 `REVISAR_MANUAL` — incluidas las 46 citas nuevas de esta sesión |
| Verificación propia de anclas (descarga la página y busca el n-grama) | **55/55 contienen la cita literal** |
| `audit-autores-quiz.ts` | 2, las dos en `doctrina-y-convenios-79-80`, que es huérfano y vacío |
| `audit-distribucion-respuestas.ts` | `0:24 % · 1:26 % · 2:25 % · 3:24 %` ✓ |
| `audit-doctrinal.ts --detalle` | 0 fallos entre las 48 del manifiesto; los 6 que lista son huérfanos |
| `audit-completitud.ts` | contexto 54/54, conclusión 54/54 en rango, cuestionario 54/54 con 6, quiz 54/54 con 7 |
| `audit-chapterurls.ts` | **0 rotas**; las 44 «desalineadas» son el falso positivo de la fila 29 |
| `audit-links-citas.ts` | 4 «no resuelven» y 2 «sin ancla»: **los seis son falso positivo o huérfanos** — ver abajo |
| `validate-content.ts` | limpio salvo `libro-de-mormon-1/_auditoria-snapshot-original.json`, preexistente y de otro curso |

**Los dos falsos positivos de `audit-links-citas.ts`, confirmados otra vez.** Los 4 «no resuelven»
apuntan todos al mismo destino imposible (`523-acquiring-spiritual-knowledge-part-2`), que es la
fila 28 del catálogo: las páginas de manual no traen campo `canonical` y el script lee esa
ausencia como una redirección. Y la única «sin ancla» del manifiesto es `doctrina-y-convenios-111`,
cuyo ancla **sí existe** (`#aside1_p3`) pero es de recuadro, que la regex del script no acepta. La
verificación propia, que descarga la página y busca el n-grama, da **55/55**.

### El ancla que faltaba

`doctrina-y-convenios-111` era la única cita del curso sin `#`. Es la de Oaks, «Sins and Mistakes»
(*Ensign* 1996, solo en inglés), que apunta a la página del manual —el criterio legítimo ya fijado
en DyC-1—. Se localizó el párrafo bajando la página por la API y buscando el texto: vive en
**`aside1_p3`**, un recuadro. Anclado y verificado. **50/50 citas de líder con ancla.**

### Defectos encontrados leyendo, que ningún script detecta

**1. Una pregunta de quiz atribuía a un líder la cita de otro.** `eval-a-tu-aprendizaje-8` Q4 decía
«El élder Cook destacó que el Salvador "estuvo dispuesto a venir a la tierra como un humilde
bebé"». Esa frase **no es de Quentin L. Cook**: es de Dieter F. Uchtdorf, y está en el manual de
otra lección (`doctrina-y-convenios-112`). La `enseñanza` de la lección sí es de Cook, pero de otro
discurso («Lo eterno de cada día»), así que **`audit-autores-quiz.ts` no levanta bandera** —el
apellido coincide— y el detector propio tampoco. Es primo del defecto de «versículo equivocado»
que cerró DyC-1, pero aplicado a citas de líder: **el autor está bien y el texto es de otro**. La
pregunta se reescribió anclada a la cita que la lección sí tiene.

**2. El detector propio de líderes huérfanos daba un falso positivo, y el número del punto de
partida estaba mal.** Durante los tres primeros bloques esta bitácora reportó «1 líder huérfano»
en `pr-ctica-del-dominio-de-la-doctrina` (B. H. Roberts). **Es falso.** El `contexto` de esa
lección narra la historia de Roberts entera —el servicio de Acción de Gracias, el Salmo 100, los
capellanes que intentaban avergonzarlo—, así que el alumno sí tiene de dónde sacar la respuesta,
que es lo que la fila 12 del catálogo protege. El detector cruzaba los apellidos del quiz **solo
contra el autor de `enseñanza`**, y no contra el `contexto` ni la `conclusion`.

Corregido en `inv.js` y `evaluar.js`, y **revalidado en las dos direcciones**: los 11 casos de
prueba siguen pasando, y sobre `religion-200` —donde sí hay casos reales— el detector sigue
encontrando 17 lecciones, así que no se volvió ciego. Con la corrección, **el curso estaba en
48/48 desde el principio en ese frente**.

> ⚠️ Es la fila 25 del catálogo por tercera vez, y esta vez el medidor defectuoso era propio: se
> verificó a mano que la `enseñanza` era de Nelson y que el quiz nombraba a Roberts, y se dio el
> caso por confirmado **sin haber leído el `contexto`**. Verificar un caso que reporta un script no
> alcanza si se verifica solo la mitad que el script mira.

### ⚠️ Frente que quedó sobrecorregido: el sesgo de longitud llegó a 0 %, y eso también es un sesgo

Medición final sobre las 336 preguntas del manifiesto:

| Posición de la correcta por longitud | Preguntas | % | Azar |
|---|---:|---:|---:|
| 1ª (la más larga) | 0 | **0 %** | 25 % |
| 2ª | 172 | **51 %** | 25 % |
| 3ª | 164 | **49 %** | 25 % |
| 4ª (la más corta) | 0 | **0 %** | 25 % |

El curso arrancó con **287/336 (85 %) en la primera fila** y terminó con 0. Pero el objetivo de la
fila 27 del catálogo es explícito: **«el objetivo no es 0 % sino acercarse al 25 % del azar»**, y
llegar a 0/0 crea una heurística nueva: **descartar la más larga y la más corta y elegir entre las
dos del medio acierta el 50 %**, el doble del azar.

Es el defecto espejo de segundo orden. Mejora mucho el estado inicial (85 % → 50 % de acierto por
medición visual) pero no cierra el frente.

**Corregido el mismo día, con permiso del usuario.** Se escribió `rebalance.js`, que ajusta la
longitud sustituyendo **una sola palabra por un sinónimo de igual registro** (de un diccionario de
~90 pares) en las preguntas donde el margen es más chico, respetando el tope de la fila 27 de **2
por lección y por dirección**. Estado final:

| Posición de la correcta por longitud | Antes del curso | Sobrecorregido | **Final** | Azar |
|---|---:|---:|---:|---:|
| 1ª (la más larga) | 287 (85 %) | 0 (0 %) | **53 (16 %)** | 25 % |
| 2ª | — | 172 (51 %) | **112 (33 %)** | 25 % |
| 3ª | — | 164 (49 %) | **133 (40 %)** | 25 % |
| 4ª (la más corta) | — | 0 (0 %) | **46 (14 %)** | 25 % |
| **Mejor heurística de longitud** | **85 %** | **50 %** | **36 %** | **25 %** |

Queda un residuo de 11 puntos sobre el azar porque el diccionario de sustituciones **seguras** se
agotó: bajar más exigiría reescribir opciones con criterio, no sustituir sinónimos.

> ⚠️ **El rebalanceo automático introdujo 12 artefactos de lenguaje, y hubo que barrerlos.** Las
> sustituciones que terminan en preposición chocan con la contracción del español —«para el» →
> «a fin de **el**», «hacia el» → «en dirección a **el**»— y otras cambian el sentido o rompen la
> frase: «dar gracias» → «**proporcionar** gracias», «es decir» → «**resulta ser** decir», «antes
> de» → «**previamente de**», «sobre la tierra» → «**en cuanto a** la tierra». Se detectaron con un
> barrido de patrones agramaticales, se corrigieron los 12 (dos de ellos en opciones **correctas**)
> y se eliminaron del diccionario los ~12 pares culpables, incluido `es → resulta ser`, que solo
> produjo texto forzado: sus 20 apariciones se revirtieron en bloque.
>
> Es la fila 25 del catálogo otra vez, en su forma más costosa: **un script que edita texto a
> escala necesita su propio barrido de salida**, porque el chequeo de longitudes daba ✓ mientras el
> español se rompía. El barrido de artefactos quedó escrito y da **0** sobre el curso.

⚠️ El primer barrido de artefactos usó `de el` y dio 3 falsos positivos («de **El**ías»,
«ser**í**a el»): en JS las vocales acentuadas no son carácter de palabra, así que `` cierra
donde no debe. Es el mismo bug que `audit-doctrinal.ts` documenta para `MANDA_AL_TEXTO`.

### La cita de líder de `126`, reemplazada

Con permiso del usuario se cambió la cita ajena al tema (Nelson sobre el bautismo por los muertos)
por una de **Brigham Young** que trae el manual de esa misma lección: «Habíamos arribado […] como
forasteros en tierra lejana y sin dinero, pero gracias a la misericordia de Dios […] en todas estas
cosas reconozco la mano de Dios» (*Enseñanzas de los Presidentes de la Iglesia: Brigham Young*,
1997, pág. 6). Es el método de `seminary-audit` §2: la cita sale del `chapterUrl` de la propia
lección. Como es un libro impreso, el `link` apunta a la página del manual donde el texto se puede
leer, anclado al párrafo exacto (`figure6_p29`) y verificado por n-grama. Se comprobó antes y
después que **ni el `cuestionario` ni el `questions` mencionan a Nelson**, así que el cambio no dejó
autores huérfanos.

