# Bitácora — antiguo-testamento-2

Ver `BITACORA-generacion-doctrinal.md` para la línea de base del proyecto y las reglas del registro
(ese archivo es de solo lectura desde acá). El método viene de `BITACORA-doctrina-y-convenios-2.md`.

## Punto de partida (8-sep-2026), medido en esta sesión

**67 lecciones, todas en el manifiesto, ninguna huérfana.** El curso llegó a esta sesión casi
cerrado: siete de los nueve frentes medibles ya estaban en 67/67.

```
=== antiguo-testamento-2 — 67 lecciones ===
Cristo (ctx o concl):                67/67
Sustancia (ctx+concl):               67/67
>= 3 escrituras:                     65/67   <- 2 pendientes
Conclusión >= 80 palabras:           65/67   <- 2 pendientes
Pregunta de orar:                    67/67
Pregunta de escudriñar:              67/67
Sin líderes huérfanos:               67/67
Quiz con <= 2 «correcta más larga»:  67/67
Preguntas con correcta más larga:  117/469 (25 %)
Preguntas con correcta más corta:  128/469 (27 %)
```

### Lo que se confirmó y lo que no de las mediciones previas

- **2 lecciones sin 3 escrituras, 2 con conclusión corta, 1 cita `REVISAR_MANUAL`: confirmado
  exacto.** El inventario propio reproduce los tres números desde cero.
- **El quiz está en el nivel del azar y no se tocó**, por instrucción explícita: 25 % «más larga»
  y 27 % «más corta» sobre 469 preguntas. Es el mejor estado de quiz del proyecto.
- **La fila 22 del catálogo (espacio suelto antes de puntuación) ya no aplica a este curso.**
  El catálogo le atribuía 2 ocurrencias; el barrido propio sobre los 67 archivos, campo por campo,
  midió **0**. Se corrigieron en alguna sesión anterior sin quedar registrado.
- **La fila 24 del catálogo (quiz de 5 preguntas × 3 opciones) tampoco aplica ya.** El catálogo
  dice «`antiguo-testamento-2` las 67»; el barrido estructural mide hoy **0 preguntas fuera de la
  spec 7 × 4**: `options.length !== 4` da 0 y `questionCount` está sincronizado en las 67.

## Lote 1 (8-sep-2026) — cierre del curso

Cinco operaciones sobre cinco lecciones, todas con chequeo de salida de **todos** los frentes
antes de escribir.

| Lección | Frente | Qué se hizo |
|---|---|---|
| `leccion-124` | 2 escrituras | Se agregó **Isaías 53:10–11**, que el manual de la propia lección trae en su actividad complementaria «"Su linaje"». Texto traído con `ver-versiculo.ts` y limpiado con `.replace(/\s+([,;:.])/g,'$1')` — venía con dos espacios sueltos (`quebrantarlo ,`, `linaje ,`). |
| `leccion-189` | 2 escrituras | Se agregó **Juan 14:6**. La lección ya se apoyaba en ese versículo en su `contexto`, su `conclusion` y su pregunta 4 del cuestionario, pero el pasaje no estaba en el bloque de escrituras: la pregunta mandaba al alumno a un texto que la lección no le daba. |
| `leccion-123` | Conclusión 77 palabras | Reescrita a 107. Se sumó el contraste que el propio `contexto` arma sobre Isaías 52:7 («no es "aguantá un poco más", es "Tu Dios reina"») y el cierre en oración. |
| `leccion-133` | Conclusión 76 palabras | Reescrita a 122. Se explicitaron los tres títulos de Cristo que el `contexto` distingue (Consejero / quien deja como nieve la mancha / quien cargó el dolor ajeno) en vez de solo enumerarlos. |
| `leccion-101` | Cita `REVISAR_MANUAL` | **No era un defecto de fidelidad.** Ver abajo. |

### La única cita `REVISAR_MANUAL` del curso: falso positivo del comparador

`Salmos 46:1, 10` figuraba como `REVISAR_MANUAL` con recall 0.47. Verificada versículo por
versículo con `ver-versiculo.ts`, la cita es **literal y exacta en sus dos mitades**:

- v1 → «Dios es nuestro refugio y fortaleza, nuestro pronto auxilio en las tribulaciones.»
- v10 → «Quedaos tranquilos, y sabed que yo soy Dios; seré exaltado entre las naciones; exaltado
  seré en la tierra.»

El recall bajo es una **limitación conocida del comparador** (§4.1 de `COMO-AUDITAR-ESCRITURAS.md`):
mide contra el párrafo que señala el ancla, y el ancla era `#p1`, así que la mitad del texto —la de
v10— siempre iba a quedar afuera. Es el mismo patrón que las citas `RESUMEN`, aplicado a una
**cita de dos versículos no contiguos**.

Se corrigió el `link`, no el `texto`: de `id=p1#p1` a `id=p1,p10#p1`, para que el ancla abarque los
dos versículos que la `referencia` declara. **El texto no se tocó: era correcto.**

> Conviene anotarlo como patrón: una `referencia` con coma (`46:1, 10`) y un `link` con ancla
> simple es un falso positivo estructural del comparador, no un defecto de contenido.

## Estado final (8-sep-2026)

```
Cristo (ctx o concl):                67/67
Sustancia (ctx+concl):               67/67
>= 3 escrituras:                     67/67   ✔ cerrado en este lote
Conclusión >= 80 palabras:           67/67   ✔ cerrado en este lote
Conclusión en rango 80-140:          67/67
Pregunta de orar:                    67/67
Pregunta de escudriñar:              67/67
Sin líderes huérfanos:               67/67
Quiz con <= 2 «correcta más larga»:  67/67
```

**Barrido estructural: todo en cero.** `options.length !== 4`, `correctAnswer` fuera de rango,
`questionCount` desincronizado, opciones duplicadas, espacio suelto antes de puntuación, Dominio
de la Doctrina sin su pasaje, citas superpuestas, huérfanos de archivo y de manifiesto.

**`validate-content.ts`: sin problemas en este curso.**

**El curso queda cerrado en los nueve frentes medibles.**

## Pendiente declarado (no es un defecto abierto)

- **Las citas de líder de este curso nunca se auditaron una por una en pertinencia** (fila 32 del
  catálogo: cita genuina, textual y bien atribuida, pero de otra lección). Ningún script lo
  detecta. En este cierre no se leyeron las 67 lecciones completas, solo las 5 del lote.
