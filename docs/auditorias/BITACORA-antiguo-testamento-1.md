# Bitácora — antiguo-testamento-1

Ver `BITACORA-generacion-doctrinal.md` para la línea de base del proyecto y las reglas del registro
(ese archivo es de solo lectura desde acá). El método viene de `BITACORA-doctrina-y-convenios-2.md`.

> **Al empezar esta sesión, AT-1 era el curso más lejos de cerrar del proyecto.**

## Punto de partida (8-sep-2026), medido en esta sesión

**89 lecciones de convención clásica, todas en el manifiesto, ninguna huérfana.**

```
=== antiguo-testamento-1 — 89 lecciones ===
Cristo (ctx o concl):                89/89
Sustancia (ctx+concl):               89/89
Pregunta de orar:                    89/89
Pregunta de escudriñar:              89/89
>= 3 escrituras:                     81/89   <- 8 pendientes
Conclusión >= 80 palabras:           69/89   <- 20 pendientes
Sin líderes huérfanos:               86/89   <- 3 pendientes
Quiz con <= 2 «correcta más larga»:  29/89   <- 60 pendientes
Preguntas con correcta más larga:  335/623 (54 %)
Preguntas con correcta más corta:  119/623 (19 %)
Citas de Escritura REVISAR_MANUAL:   34 (de 283; 249 OK)
```

### Lo que se confirmó y lo que no de las mediciones previas

- **Los cinco frentes del prompt de partida: confirmados exactos** (29/89, 81/89, 69/89, 86/89,
  34 `REVISAR_MANUAL` sobre 249 OK). El inventario propio los reproduce desde cero.
- **La fila 22 del catálogo ya no aplica a este curso.** El catálogo le atribuye **47 espacios
  sueltos antes de puntuación**, el mayor recuento del proyecto. El barrido propio sobre los 89
  archivos, recorriendo **cada string del JSON** (no solo `escrituras[].citas[].texto`), midió
  **0 ocurrencias**. Se corrigieron en alguna sesión anterior sin quedar registrado. **No hay
  trabajo pendiente en ese frente.**
- **Las 34 citas `REVISAR_MANUAL` son, hasta donde llegó el triage, falsos positivos del
  comparador.** Ver la sección de escrituras más abajo.

## Bloque 1 (8-sep-2026) — los 3 líderes huérfanos

Los tres se **confirmaron leyendo la lección completa**, no solo el campo que mira el detector
(fila 12 del catálogo: el detector cruzaba los apellidos del quiz solo contra `enseñanza`, y en un
caso anterior el respaldo estaba en el `contexto`). Acá los tres son reales: el apellido no aparece
ni en `contexto`, ni en `conclusion`, ni en ninguna `enseñanza`.

| Lección | Huérfano | Preguntas afectadas | Resolución |
|---|---|---|---|
| `leccion-190` | Élder Clark G. Gilbert | Q2 y Q6 | **La cita existe en el manual de la propia lección.** Se agregó como segunda `enseñanza`, con ancla al párrafo (`#p_efuHt`). |
| `leccion-201` | Élder Allen D. Haynie | Q1 | **La cita existe en el manual de la propia lección.** Se agregó como segunda `enseñanza`, con ancla al párrafo (`#p_qFBvw`). |
| `leccion-37` | Élder Larry R. Lawrence | Q1 y Q5 | **No existe en el manual de la lección** (lección de evaluación, sin ninguna cita de líder). Se reescribieron los dos enunciados sobre contenido real de la lección, sin atribuir a nadie. |

Las dos primeras son el caso bueno: la pregunta era correcta y lo que faltaba era la cita. El
método de la fila 32 (se corrige con una cita que trae el manual de la propia lección) resolvió
las dos. **106 de las 685 lecciones del proyecto ya tienen dos `enseñanza`**, así que agregar una
segunda es una práctica establecida, no una excepción.

### Hallazgo grave: `correctAnswer` apuntando a un distractor (fila 15)

El prompt advertía que el barrido de la fila 15 se hizo solo en las lecciones 1-45 y que **las
46-207 nunca se barrieron**. Al abrir estas tres lecciones aparecieron **5 casos en 2 lecciones**:

| Lección | Preg. | Estaba marcada como correcta | Debía ser |
|---|---|---|---|
| `leccion-190` | Q4 | Que los obstáculos reales como la pobreza o la distancia **excusan** al joven de intentar avanzar educativamente. | Que el Señor solo espera el esfuerzo posible dentro de las circunstancias reales… |
| `leccion-190` | Q5 | Hablar con sus padres nuevamente con más argumentos para convencerlos… | Investigar activamente todas las opciones disponibles… y llevar esa búsqueda al Señor en oración. |
| `leccion-190` | Q6 | Que la sensación de no ser suficientemente inteligente es una mentira del adversario que debe rebatir con **afirmaciones positivas sobre sí mismo**. | Que el Señor puede expandir sus capacidades… si combina su máximo esfuerzo con la gracia fortalecedora de Cristo. |
| `leccion-201` | Q5 | Que su miedo **desaparecerá completamente** cuando cruce la puerta del templo… | Que puede acercarse con expectativa y apertura, porque no es un ritual desconocido… |
| `leccion-201` | Q6 | Invitar a un amigo la próxima vez para que la experiencia compartida produzca **mayor impacto emocional**. | Ir con la expectativa concreta de encontrarse con Cristo en cada símbolo y ordenanza… |

**3 de 7 preguntas mal en una sola lección.** Las respuestas oficiales enseñaban que la pobreza
excusa de estudiar, que el templo elimina el miedo por cruzar la puerta y que la solución a la
inseguridad son las afirmaciones positivas. No es un defecto de estilo: es doctrina incorrecta
marcada como la respuesta del programa.

> **Confirmación del efecto sobre la fila 23**: al corregir estos 5 `correctAnswer`, el sesgo de
> longitud de esas dos lecciones **subió** (190 de 4/7 a 6/7; 201 de 4/7 a 6/7), porque las
> respuestas verdaderas son justamente las largas. Es la causa raíz de la fila 23 vista al
> revés, y confirma que los dos frentes hay que trabajarlos en la misma pasada.

### Rebalanceo del sesgo de longitud

21 preguntas de las 3 lecciones, todas con la correcta en un extremo. Método: **varios candidatos
por pregunta, y un script que elige el que cae dentro de la ventana de los tres distractores**
(`elegir.js`), midiendo — nunca a ojo.

**El error 1 del prompt se reprodujo y el método lo atajó**: en la primera tanda, **6 de 13
candidatos salieron demasiado cortos** y `elegir.js` los rechazó con `SIN CANDIDATO` en vez de
aplicarlos. Se agregó `medir.js`, que imprime el **objetivo** (punto medio de la ventana) junto al
largo de cada candidato, y la segunda tanda entró completa. Sin ese paso, las 6 habrían pasado de
«más larga» a «más corta» — el defecto espejo de la fila 27.

Resultado: 13 preguntas llevadas a posición intermedia; **2 por lección quedaron en el extremo
largo**, que es el tope que fija la fila 27. Ninguna quedó en el extremo corto.

**Barrido de artefactos (fila 31)**: las 3 lecciones dan limpio contra los ~12 patrones
agramaticales del catálogo y contra espacio-antes-de-puntuación. Las reescrituras fueron a mano,
no por sustitución automática de sinónimos.

## Las 34 citas `REVISAR_MANUAL`: triadas, ninguna es defecto confirmado

`rescan-ventana-ancha.ts` clasificó **las 34 como `RESUMEN` con salto 0**: la ventana ganadora
coincide exactamente con el rango que la `referencia` ya declara. Es decir, el `texto` es una
síntesis intencional del pasaje citado, y la referencia es correcta.

Según §4.1 punto 3 de `COMO-AUDITAR-ESCRITURAS.md`, estas citas **van a seguir apareciendo como
`REVISAR_MANUAL` para siempre** — el comparador mide recall contra todo el rango, y una frase
resumen nunca llega al umbral. **No es un pendiente real, es una limitación conocida.**

`0 sin candidato convincente`: ninguna cayó en el caso difícil de §4.2 (capítulo o libro
equivocado).

**Quedan por verificar a mano**, por acumular los dos avisos automáticos del script o recall bajo:

| Lección | Cita | Recall | Aviso |
|---|---|---:|---|
| `leccion-174` | Doctrina y Convenios 88:118–122 | 0.50 | zona gris **+** capítulo largo (141 párrafos) — **el patrón exacto del falso positivo documentado** |
| `leccion-202` | Doctrina y Convenios 97:2–8 | 0.50 | zona gris |
| `leccion-180` | Alma 15:8–17 | 0.56 | zona gris |
| `leccion-194` | Salmo 37:13–23 | 0.56 | zona gris |
| `leccion-195` | Alma 34:35–39 | 0.60 | capítulo largo |
| `leccion-174` | Moroni 7:13–18 | 0.63 | capítulo largo |

## Bloque 2 (8-sep-2026) — el quiz, en cuatro lotes de 6 lecciones

24 lecciones abiertas y leídas pregunta por pregunta: `73 80 58 70 71 72` · `35 36 40 41 45 74` ·
`1 29 33 44 75 161` · `163 172 178 2 30 pascua`. 102 preguntas rebalanceadas.

### El frente real del quiz es más grande de lo que decía el inventario

`inv.js` mide solo «≤ 2 con la correcta más larga», y por esa métrica había **57 lecciones
pendientes**. Contando también el **sesgo corto** —que es lo que pide la fila 27 y confirma la
fila 30— los pendientes eran **71**: hay lecciones cuyo quiz ya está sesgado en la dirección
inversa, sin que nadie las haya tocado. Las peores: `leccion-167` con **6 de 7 la más corta**,
`leccion-169` con 4, `leccion-82`, `leccion-84`, `leccion-86` y `leccion-204` con 3 o 4.

**No es el defecto espejo de una corrección previa** (fila 27): estas lecciones nunca se
rebalancearon. Es sesgo corto de generación original, y el catálogo no lo registra como tal.

### `correctAnswer` apuntando a un distractor: 2 casos más

| Lección | Preg. | Estaba marcada como correcta | Debía ser |
|---|---|---|---|
| `leccion-58` | Q4 | Que los mandamientos específicos —como el sábado o la honestidad— son **secundarios y pueden ignorarse** si se está cumpliendo bien con el amor. | Que los demás mandamientos son derivaciones específicas de esos dos principios… |
| `leccion-163` | Q5 | Que debería **hablar con un líder de la Iglesia para que le dé las respuestas correctas antes** de tomar una decisión. | Que su condición invierte el patrón de la fe: esperar certeza antes de actuar es lo opuesto a Éter 12:6. |

**Dato de método, importante:** las dos preguntas estaban en longitud **`ok`** — la correcta ya
caía en posición intermedia. El defecto de la fila 15 **no se correlaciona con el de la fila 23**,
así que el barrido de longitud no lo encuentra de paso: hay que leer la opción marcada de **todas**
las preguntas, no solo las que el medidor señala.

Total del curso hasta ahora: **7 `correctAnswer` corregidos en 27 lecciones abiertas.**

### Un falso positivo de líder huérfano, verificado

`leccion-178` Q3 cita al **obispo Waddell**, y la única `enseñanza` de la lección es del élder
Holland. Parecía el mismo defecto de la fila 12 — pero **no lo es**: el respaldo está en
`secciones[0].contenido[2]`, dentro del `contexto`. Es exactamente el caso que el error 5 del
prompt advierte, y esta vez **el detector acertó al no marcarlo**. Se confirmó leyendo, no
confiando en el conteo.

### Dos escrituras que la propia lección ya citaba sin tenerlas en el bloque

Mismo patrón que `leccion-189` de AT-2 con Juan 14:6: la lección apoya una pregunta en un
versículo que no está en `escrituras`, así que el alumno no puede volver al texto.

- `leccion-74` — Q4 cita literal **1 Samuel 17:45** («Tú vienes a mí con espada y lanza…»).
- `leccion-80` — el quiz y el manual evalúan el **deseo de ir al templo**, y la lección no tenía
  ninguna escritura del templo. Se agregó **1 Reyes 8:27–29**, la oración de Salomón.

Vale la pena industrializarlo: **cruzar las referencias que aparecen en el texto del quiz contra
`escrituras.citas[].referencia`** encuentra este caso en segundos, y es primo del cruce que la
fila 26 propone para detectar quizzes corridos de lección.

### Método: el error 1 se repitió y el chequeo lo atajó las tres veces

En cada lote hubo candidatos fuera de ventana (6 en el lote 1, 2 en el lote 3, 2 en el lote 4).
`medir.js` los mostró contra el **objetivo** antes de aplicar y se reescribieron. **Ninguno se
escribió mal.** El paso que lo hace posible es imprimir el punto medio de la ventana junto al
largo de cada candidato — sin eso, la calibración a ojo falla sistemáticamente hacia lo corto.

**Barrido de artefactos (fila 31): 0 en las 89 lecciones del curso**, con un detector reescrito.
El primero que usé daba falsos positivos por el error 6 del prompt: `/\ba el\b/` matchea
«mir**a el**», «par**a el**», «habl**a el**». Se rehízo con lookarounds sobre una clase explícita
de letras españolas (`artefactos.js`), igual que `audit-doctrinal.ts`.

## Bloque 3 (8-sep-2026) — escrituras, conclusiones y el grueso del quiz

### Corrección de método: el criterio de la fila 27 es el **margen**, no la posición

Al empezar el bloque, el inventario daba **47 lecciones pendientes de quiz**. Midiendo el
**margen en caracteres** entre la opción correcta y el distractor más cercano, resultó que
**15 de esas 47 lo eran por márgenes de 1 o 2 caracteres**.

La fila 27 ya fija ese criterio: «se dejan hasta 2 por lección, eligiendo las de margen de 1 o 2
caracteres, **que son invisibles a ojo**». Una lección cuyas cuatro opciones miden 56, 57, 57 y 60
no es explotable midiendo con la vista — y reescribirla para ganar dos caracteres es puro riesgo
de la fila 31 sin ninguna ganancia. Casos así: `leccion-167` (0/6 «cortas», márgenes de 1 y 2),
`leccion-169`, `leccion-84`, `leccion-85`.

**Criterio adoptado: se cuenta una pregunta como sesgada solo si el margen es ≥ 3 caracteres.**
Con ese criterio, los pendientes al empezar el bloque eran **32, no 47**. Conviene incorporarlo al
catálogo: medir la posición sin medir el margen infla el frente en un 47 %.

### `correctAnswer` apuntando a un distractor: **22 casos nuevos**

Es, de lejos, el hallazgo más grave del curso. Van **29 en total** (5 del bloque 1, 2 del bloque 2,
22 de este). Y no están repartidos al azar: **se concentran en las lecciones 162-166, 174, 193-194
y 53**, todas del rango 46-207 que nunca se había barrido.

| Lección | Mal | Ejemplo de lo que estaba marcado como respuesta oficial |
|---|---:|---|
| `leccion-165` | 3 de 7 | «Porque la abundancia de información hace que sea **más fácil que nunca encontrar la verdad sin necesitar fuentes autorizadas**» — en la lección sobre fuentes divinamente señaladas |
| `leccion-164` | 3 de 7 | «Que **nunca deberíamos hacer preguntas sobre los mandamientos** porque el Señor sabe mejor y cuestionarlo sería señal de poca fe» |
| `leccion-162` | 3 de 7 | «Que la revelación divina **siempre exige un período de preparación de varios días**, sin excepción» |
| `leccion-194` | 4 de 7 | «Que el reino de Dios es un ideal a largo plazo y **las prioridades de la semana pueden organizarse según las necesidades prácticas inmediatas**» — contra Mateo 6:33, la escritura de la lección |
| `leccion-53` | 3 de 7 | «Que **los animales disponibles eran insuficientes** para mantener el ritmo de sacrificios» |
| `leccion-166` | 2 de 7 | «Que el **conocimiento doctrinal sobre Cristo es suficiente** para construir la fe» |
| `leccion-47`, `leccion-174`, `leccion-193`, `leccion-206` | 1 cada una | «Seguir a más personas inspiradoras», «No hay diferencia real en los resultados», … |

Varias no son distractores plausibles mal marcados: **enseñan lo contrario de la lección**, y en
`leccion-165` Q4 el texto marcado («las Escrituras necesitan ser reinterpretadas y el Espíritu está
dando esa reinterpretación») es doctrinalmente peligroso, no solo incorrecto.

**El barrido de longitud no los encuentra.** De los 29, varios estaban en posición intermedia
(`leccion-58` Q4, `leccion-163` Q5, `leccion-194` Q3). Hay que leer la opción marcada de **todas**
las preguntas; medir no alcanza.

### Otros hallazgos de lectura

- **`leccion-79` Q1: error de tipeo** en una opción («los sacerdotes no podían *officiar*»).
  Ningún script lo mira. Corregido.
- **`leccion-178` Q3 cita al obispo Waddell** y su `enseñanza` es de Holland — **no es huérfano**:
  el respaldo está en el `contexto`. Confirmado leyendo (error 5 del prompt).

### Escrituras y conclusiones: los dos frentes cerrados

**Escrituras 89/89.** Las 4 que faltaban se resolvieron con pasajes que **cita el manual oficial de
cada lección**: `Josué 1:8` (168), `Moisés 7:18–19` (170), `3 Nefi 9:20` (202) y `Moisés 5:6–7`
(67). Ninguna se eligió de memoria.

**Conclusiones 89/89**, las 13 pendientes llevadas al rango 80–140 (quedaron entre 101 y 122
palabras). En cada una se agregó sustancia real de la propia lección, no relleno: el giro
cristocéntrico que faltaba, o el detalle del pasaje que la conclusión daba por sabido.

## Bloque 4 (8-sep-2026) — cierre: las 89 lecciones leídas una por una

Se leyó la opción marcada de **las 623 preguntas del curso**. Las 28 lecciones que quedaban sin
abrir se barrieron en cinco tandas.

### El hallazgo definitivo: **85 `correctAnswer` apuntando a un distractor**

De 623 preguntas, **85 tenían marcada como respuesta oficial una afirmación falsa** — el 13,6 %.
Es el defecto más extendido y más grave encontrado en un solo curso en todo el proyecto, muy por
encima del 19 % que la fila 15 midió sobre las lecciones 1-45 (23 de 119) pero sobre un corpus
cinco veces mayor.

**No está repartido al azar. Se concentra por lección:**

| Lección | Mal | Lección | Mal | Lección | Mal |
|---|---:|---|---:|---|---:|
| `leccion-49` | **5 de 7** | `leccion-62` | 4 | `leccion-165` | 3 |
| `leccion-51` | 4 | `leccion-63` | 2 | `leccion-166` | 2 |
| `leccion-57` | 4 | `leccion-64` | 3 | `leccion-192` | 4 |
| `leccion-59` | 4 | `leccion-65` | 4 | `leccion-194` | **4 de 7** |
| `leccion-61` | 3 | `leccion-162` | 3 | `leccion-195` | 4 |
| `leccion-48` | 3 | `leccion-164` | 3 | `leccion-52` | 2 |
| `leccion-53` | 3 | `leccion-54` | 3 | `leccion-56` | 2 |
| `leccion-190` | **3 de 7** | `leccion-201` | 2 | 10 lecciones más | 1 c/u |

**Y hay lecciones enteras sin un solo error**: `leccion-86` a `leccion-91`, `leccion-168`,
`leccion-170`, `leccion-177` a `leccion-180`, `leccion-188`, `leccion-202`, `leccion-204`,
`leccion-77`, `leccion-81`, `leccion-83`. Todas comparten un estilo distinto —opciones cortas,
respuestas directas— que apunta a una tanda de generación posterior y de mejor calidad. **El
defecto tiene una firma de lote, no de curso.**

Ejemplos de lo que enseñaban las respuestas oficiales antes de corregirlas:

- «Que **nunca deberíamos hacer preguntas** sobre los mandamientos… cuestionarlo sería señal de
  poca fe» (`leccion-164`)
- «Que la abundancia de información hace que sea más fácil que nunca encontrar la verdad **sin
  necesitar fuentes autorizadas**» (`leccion-165`, la lección sobre fuentes autorizadas)
- «Que **la fe genuina nunca experimenta miedo**; la presencia del miedo es siempre señal de falta
  de fe» (`leccion-56`)
- «Que debería pedirle al Espíritu Santo que **le revele las preguntas exactas que tendrá el
  examen**» (`leccion-192`)
- «Que los obstáculos reales como la pobreza **excusan** al joven de intentar avanzar
  educativamente» (`leccion-190`)
- «Era **sacerdotisa del tabernáculo y esposa del sumo sacerdote**» sobre Débora (`leccion-65`) —
  además de doctrinalmente incorrecto, es históricamente falso
- «Que las cinco ofrendas representan **las cinco etapas del proceso de arrepentimiento**»
  (`leccion-53`) — una doctrina que no existe

**No hay corrimiento de índice.** En `leccion-49` las correctas verdaderas estaban en los índices
0, 1, 1, 2, 1, 1: el patrón es aleatorio. No es una reconstrucción de manifiesto mal arrastrada
(fila 26) sino marcado incorrecto en la generación.

### Dos errores de tipeo que ningún script mira

`leccion-51` («intercede apelan do»), `leccion-57` («pueda confirmale»), más el `officiar` de
`leccion-79` del bloque 3. Aparecen solo leyendo.

### La cita superpuesta de `leccion-38`, resuelta

`Éxodo 1:12–20` contenía a `Éxodo 1:17` en el mismo bloque. Verificado con `ver-versiculo.ts`, el
texto guardado **no era de 1:12–20 sino de 1:20–21**, y además estaba parafraseado («él prosperó
sus familias» por «él les hizo casas»). Se corrigieron referencia, texto y link a la vez: la
superposición era el síntoma de una referencia equivocada, no un problema de solapamiento.

## Estado final (8-sep-2026)

```
                                       inicial   bloque 1   bloque 2   bloque 3   bloque 4
Cristo (ctx o concl):                    89/89      89/89      89/89      89/89      89/89  ✔
Sustancia (ctx+concl):                   89/89      89/89      89/89      89/89      89/89  ✔
Pregunta de orar:                        89/89      89/89      89/89      89/89      89/89  ✔
Pregunta de escudriñar:                  89/89      89/89      89/89      89/89      89/89  ✔
Sin líderes huérfanos:                   86/89      89/89      89/89      89/89      89/89  ✔
>= 3 escrituras:                         81/89      82/89      85/89      89/89      89/89  ✔
Conclusión 80-140 palabras:              69/89      70/89      76/89      89/89      89/89  ✔
Quiz con <= 2 VISIBLE, ambas direcc.:    57/89         —       68/89      77/89      89/89  ✔
Preguntas con correcta más larga:    335 (54 %) 326 (52 %) 226 (36 %) 186 (30 %) 163 (26 %)
Preguntas con correcta más corta:    119 (19 %) 116 (19 %) 116 (19 %) 105 (17 %)  89 (14 %)
`correctAnswer` corregidos:                   —          5          7         29         85
Lecciones con el quiz leído:                  0          3         27         61         89
```

**El curso queda cerrado en los nueve frentes medibles, 89/89.**

**Ranking de longitud de la correcta** (criterio de la fila 30, las cuatro posiciones):
**26 % · 34 % · 27 % · 13 %**, contra 54 % en la 1ª posición al empezar. Prácticamente el
25/25/25/25 del azar, **sin caer en la sobrecorrección de DyC-2** (que llegó a 0 % en los dos
extremos, creando una heurística peor que la original).

### Verificación de cierre

| Comprobación | Resultado |
|---|---|
| `validate-content.ts` | sin problemas en AT-1 ni AT-2 |
| `audit-doctrinal.ts --detalle` | Cristo 89/89 · orar 89/89 · devuelve al pasaje 89/89 |
| `audit-completitud.ts` | contexto 89/89 en rango · conclusión 89/89 en rango · cuestionario 0 fuera de 6 · quiz 0 fuera de 7 |
| `audit-autores-quiz.ts` | **0 atribuciones sin respaldo** (AT-1 y AT-2) |
| `audit-distribucion-respuestas.ts` | `0:24% 1:35% 2:28% 3:12%` ✓ |
| Barrido estructural propio | **todo en cero**, incluida la cita superpuesta |
| Barrido de artefactos (fila 31) | **0** en las 89 de AT-1 y las 67 de AT-2 |
| Quiz ≤ 2 sesgo visible, ambas direcciones | **89/89** |

## Pendientes abiertos

1. **6 citas `REVISAR_MANUAL` por verificar a mano** (tabla de arriba). Las 34 están triadas y
   ninguna es defecto confirmado; estas 6 acumulan avisos del script.
2. **Cruce sistemático de referencias del quiz contra `escrituras`** — aparecieron 2 casos de paso
   (`leccion-74`, `leccion-80`: la lección citaba un versículo que no estaba en su bloque). El
   cruce es barato de industrializar y encuentra además el defecto de la fila 26.
3. **Citas de líder de este curso**: el prompt advierte que las revisó Axel a mano, sin registro
   cita por cita. En este cierre se leyeron las 89 lecciones **por el quiz**, no cita por cita, así
   que la fila 32 (cita genuina pero ajena al tema) sigue sin barrerse.
4. **`leccion-192` y `leccion-195` conviene releerlas completas**: tenían 4 de 7 mal cada una y su
   `contexto` no se auditó en esta pasada.
