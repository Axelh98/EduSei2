# Calidad de contenido — Doctrina y Convenios, primer semestre

Auditoría de **Nivel 2** (calidad del contenido que ya tiene la forma correcta) de
`doctrina-y-convenios-1`, más las correcciones de completitud que la acompañaron.
Es la contraparte de [`AUDITORIA-citas-DyC1.md`](AUDITORIA-citas-DyC1.md) (citas de líder) y
[`AUDITORIA-escrituras-DyC1.md`](AUDITORIA-escrituras-DyC1.md) (citas de Escritura).

Método: `docs/auditorias/COMO-AUDITAR-CONTENIDO.md` §1 (los dos niveles) y el catálogo de
defectos de [`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md).

**Iniciada el 1-sep-2026.** El curso tiene 91 lecciones y 621 preguntas de quiz.

---

## 1. El hallazgo principal: 37 preguntas citaban a un autor eliminado

`AUDITORIA-citas-DyC1.md` cerró el grupo de riesgo de citas de líder corrigiendo 49 citas.
En **28 de ellas hubo que cambiar el autor**, porque no existía ningún discurso del autor
declarado con esa idea (tabla D de ese documento). Se corrigió la sección `enseñanza` de cada
lección… y nadie revisó si el `cuestionario` y el `questions` seguían citando al autor viejo.

**Seguían.** Un cruce mecánico entre los apellidos nombrados en las preguntas y el autor real de
la `enseñanza` de cada lección encontró **37 preguntas en 33 lecciones**. En la mayoría, la
pregunta atribuía una enseñanza al mismo autor cuya cita la auditoría había determinado
**fabricada**.

Ejemplos representativos:

| Lección | La pregunta citaba a | La `enseñanza` real es de |
|---|---|---|
| `194-desarrollar-habilidades` | Uchtdorf | Élder Clark G. Gilbert |
| `193-descubre-fortalezas` | Ashton | Élder Ronald A. Rasband |
| `184-cuidar-cuerpo` | Bednar | Élder Russell M. Nelson |
| `66-dc-50-parte-2` | Eyring | Élder David A. Bednar |
| `171-tomar-notas-escrituras` (2 preguntas) | Scott | Élder David A. Bednar |
| `63-dc-46-7-33-parte-2` | Bednar | Hermano Tad R. Callister |

**Las 37 están corregidas.** Cada pregunta se reescribió anclándola al autor y al texto que la
lección sí tiene, conservando el nivel cognitivo y la dificultad. Verificado: el cruce vuelve 0.

Se dejó el chequeo automatizado en **`scripts/audit-autores-quiz.ts`** para que no haga falta
volver a descubrirlo leyendo:

```bash
npx tsx scripts/audit-autores-quiz.ts doctrina-y-convenios-1
npx tsx scripts/audit-autores-quiz.ts --todos
```

> ⚠️ **Corrido sobre los 12 cursos, el script devuelve 154 casos.** Fuera de DyC-1 quedan
> pendientes: `religion-200` (38), `libro-de-mormon-1` (33), `nuevo-testamento` (27),
> `doctrina-y-convenios-2` (29), `antiguo-testamento-1` (19), `religion-250` (6),
> `religion-225` (2). En `nuevo-testamento`, `doctrina-y-convenios-2` y `Bloques` el conteo es
> esperable —esas lecciones tienen `secciones: []`, así que ninguna pregunta puede tener
> respaldo— y se resuelve al generar el contenido. En los otros cuatro cursos es el mismo defecto
> real que se corrigió acá.

---

## 2. Segundo hallazgo: el quiz repetía el cuestionario

22 de las 91 lecciones tenían preguntas de `questions` que son **preguntas de experiencia
personal** con una opción marcada como correcta:

- «¿Alguna vez sentiste que recibiste una respuesta de Dios a algo concreto de tu vida?»
- «¿Qué hábito espiritual concreto vas a comenzar esta semana?»
- «¿A dónde vas normalmente cuando tenés una pregunta difícil sobre el evangelio?»

En varias lecciones eran 3 de 6 preguntas. En muchos casos son **literalmente la misma pregunta
del `cuestionario`**, con cuatro opciones agregadas encima.

El problema no es la redundancia sino el género: una vivencia del alumno no tiene respuesta
correcta, así que el quiz termina **calificando su vida espiritual** en vez de medir comprensión.
Un alumno que nunca sintió una respuesta a una oración recibe "incorrecto" por decir la verdad.

**Corrección:** reescribir esas preguntas como escenarios de aplicación protagonizados por un
tercero —la forma que la spec de `seminary-enrichment` sí prescribe para las preguntas 5–6— y
dejar la pregunta personal donde corresponde, en el `cuestionario`.

Se agregó a `seminary-enrichment/SKILL.md` la **"Regla de frontera entre `cuestionario` y
`questions`"** y una fila en la tabla de anti-patrones (defecto #11 del catálogo).

---

## 3. Tercer hallazgo: un `correctAnswer` apuntando a un distractor

En `86-dc-76-19-24`, la pregunta 4 tenía marcada como respuesta correcta la opción
«Porque es la sección más citada de D. y C. y por eso tiene más autoridad» —un distractor— en vez
de la respuesta real. 1 caso en 621 preguntas. Corregido, y agregado al checklist de la skill.

---

## 4. Completitud (Nivel 1) — estado y avance

Medido con `npx tsx scripts/audit-completitud.ts doctrina-y-convenios-1`.

| | Al empezar | Ahora |
|---|---:|---:|
| `contexto` fuera del rango 150–340 palabras | 41 | **0** |
| Lecciones sin ninguna `enseñanza` | 11 | **3** ¹ |
| Sin `conclusion` | 1 | **0** |
| `conclusion` fuera del rango 60–140 palabras | 2 | **0** |
| `cuestionario` sin exactamente 6 preguntas | 91 | **0** |
| Quiz sin exactamente 7 preguntas | 25 | **0** |
| Preguntas que citan a un líder ausente | **37** | **0** |
| Preguntas de quiz de experiencia personal | 22 lecciones | **0** |
| `conclusion` con la fórmula fija «Esta semana, …» | 21 | **0** |
| Distractor muletilla «no tiene ninguna relación» | 2 | **0** |
| Sesgo de posición de la respuesta correcta | 61 % en la posición 1 | **~25 % por posición** ³ |

¹ Las 3 restantes son `54-evalua-aprendizaje-3`, `67-evalua-aprendizaje-4` y
`84-evalua-aprendizaje-5`, de tipo `Especial`. Son lecciones de evaluación, no de contenido nuevo:
igual que `Dominio de la Doctrina` en otros cursos, **no llevan `enseñanza` por diseño**. No es un
gap; es una convención, y conviene que `audit-completitud.ts` las excluya como ya excluye a las de
Dominio de la Doctrina.

### Las 8 citas de líder que se agregaron

Todas salieron del **manual oficial de Seminario de la propia lección** (el `chapterUrl` del
manifiesto), que es el método que recomienda `seminary-audit` §2, y cada texto se verificó contra
el discurso original descargándolo y comparando por recall de palabras (1.00 en las seis que
están en `general-conference`).

| Lección | Autor | Discurso |
|---|---|---|
| `39-dc-25-parte-1` | Presidente Russell M. Nelson | «Convenios», oct. 2011 |
| `39b-dc-25-parte-2` | Presidente Russell M. Nelson | «Vencer al mundo y hallar descanso», oct. 2022 |
| `41-dc-27-1-14` | Élder M. Russell Ballard | «Quedaos tranquilos, y sabed que yo soy Dios», devocional SEI 2014 ² |
| `43-dc-28` | Élder Dale G. Renlund | «El marco de la revelación personal», oct. 2022 |
| `45-dc-29-9-29` | Élder D. Todd Christofferson | «Prepararse para el regreso del Señor», abr. 2019 |
| `49-dc-35` | Élder M. Russell Ballard | «El milagro de la Santa Biblia», abr. 2007 |
| `169-encontrar-verdades-evangelio` | Élder David A. Bednar | «Los principios de Mi evangelio», abr. 2021 |
| `ensenanza-profeta-actual` | Presidente Russell M. Nelson | «Trabajemos hoy en la obra», abr. 2018 |

² La página del devocional en `broadcasts` no se puede descargar (devuelve 503 / página vacía).
El texto se tomó **literal del manual oficial de la lección**, que lo cita palabra por palabra, y
el `link` apunta a esa página del manual —el mismo criterio que se usó con la cita de Hinckley en
`77-dc-64-1-17`, donde el discurso tampoco está en línea en español—. La `fuente` conserva la
referencia al devocional original.

³ Ver §5. El sesgo se detectó al cerrar `doctrina-y-convenios-2` y resultó ser un problema del
corpus entero, no de este curso.

---

## 5. Cuarto hallazgo: el quiz era adivinable (y era problema de todo el corpus)

Al cerrar el curso se midió algo que ningún chequeo anterior había mirado: **en qué posición del
array cae la respuesta correcta**. En `doctrina-y-convenios-1` el 61 % estaba en la posición 1.

El barrido sobre los 12 cursos mostró que el sesgo no era de este curso sino **del corpus entero**:
11 de 12 resultaron adivinables, con `antiguo-testamento-2` al 96 % y `nuevo-testamento` al 95 %.
Es decir: responder siempre la segunda opción aprobaba esos cursos sin leer una sola pregunta.

Se creó `scripts/audit-distribucion-respuestas.ts`, que mide el sesgo y lo corrige **rotando el
array de `options` sin tocar una sola letra de texto**. Este curso quedó en ~25 % por posición
(477 preguntas rotadas). Es el defecto #14 del catálogo.

---

## 6. Estado: cerrado

`doctrina-y-convenios-1` quedó cerrado en los tres tipos de auditoría el 1-sep-2026:

```
audit-completitud.ts             contexto 91/91 · enseñanza 88/91 ¹ · conclusión 91/91
                                 · cuestionario 91/91 con 6 · quiz 91/91 con 7
audit-escrituras.ts              196 citas → 196 OK
extract-citas.ts                 80/80 citas de líder verificadas · 1 bandera esperada ²
audit-autores-quiz.ts            0 atribuciones sin respaldo
audit-distribucion-respuestas.ts 0:25 % · 1:24 % · 2:26 % · 3:25 % ✓
validate-content.ts              limpio
```

² `link-sin-lang-spa` en `191-importancia-educacion`: el artículo de Bednar solo existe en inglés.

No queda nada pendiente en este curso. Lo único que sigue abierto y lo involucra es una decisión de
producto que excede la auditoría: si conviene que `audit-completitud.ts` excluya del conteo de
`enseñanza` a las lecciones de tipo `Especial` «Evalúa tu aprendizaje», como ya excluye a las de
Dominio de la Doctrina (ver nota ¹ de §4).

## 7. Cómo continuar

```bash
npx tsx scripts/audit-completitud.ts doctrina-y-convenios-1   # forma y completitud
npx tsx scripts/audit-autores-quiz.ts doctrina-y-convenios-1  # atribuciones sin respaldo
npx tsx scripts/validate-content.ts                           # tras cada tanda
```

Después de agregar o quitar preguntas hay que **sincronizar `questionCount` en `_manifest.json`**,
o `validate-content.ts` marca la lección como inconsistente.
