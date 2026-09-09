# Calidad (Nivel 2) — libro-de-mormon-2

Auditoría de **calidad**, distinta de la de completitud/forma (`COMPLETITUD-libro-de-mormon-2.md`,
ya cerrada) y de las de citas de líder/Escritura (`AUDITORIA-citas-libro-de-mormon.md`,
`AUDITORIA-escrituras-libro-de-mormon.md`). Esta mide algo que ninguna de esas tres cubre: si el
`questions` (quiz) de cada lección mide comprensión real, o tiene distractores que se descartan sin
haber entendido nada — el "Nivel 2" que `PLAN-DE-AUDITORIA.md` §1.1 marcaba como "no auditado
todavía en ningún curso".

**Origen (31-ago-2026):** el usuario preguntó, después de cerrar el Lote 2, si notaba una diferencia
de calidad entre `antiguo-testamento-1` y `libro-de-mormon-2`. La comparación (`grep` de frases
repetidas entre ambos cursos) encontró dos problemas concretos y medibles en `libro-de-mormon-2`,
ausentes en `antiguo-testamento-1`:

1. **Distractores "muletilla"**: la fórmula "que X no tiene ninguna relación con Y" (y variantes:
   "no tiene relación", "no tienen relación/ninguna relación", "sin ninguna relación") aparece como
   opción incorrecta una y otra vez. Es exactamente el anti-patrón que la propia skill
   `seminary-enrichment` prohíbe ("Distractores imposibles de eliminar fácilmente" es el objetivo) —
   un distractor así se descarta sin haber entendido el contenido, no discrimina nada.
2. **Nombres de escenario repetidos**: las preguntas de aplicación (5-6) reutilizan siempre los
   mismos 4-5 nombres (Sofía, Mateo, Valentina, Luca, Camila) — "Sofía siente..." abre 13 preguntas
   distintas dentro de las 78 lecciones del manifiesto.

**Causa raíz identificada or investigación, no solo síntoma:** la skill `seminary-enrichment`
(`C:\Users\axelh\.claude\skills\seminary-enrichment\SKILL.md`) solo daba **4 nombres de ejemplo** en
su sección "Ejemplos de nombres y situaciones" (Sofía, Mateo, Valentina, Luca) — cualquier sesión que
genera muchas preguntas seguidas termina convergiendo en esos mismos 4 por defecto. **Ya corregido
(31-ago-2026)**: se amplió la lista a 14 nombres/situaciones y se agregó una instrucción explícita de
rotar nombres dentro de una misma tanda, más una regla nueva contra la muletilla "no tiene ninguna
relación" en la sección de distractores y en el checklist de la skill. Este arreglo beneficia a
**todos los cursos futuros**, no solo a este — es la parte de mayor apalancamiento de todo este
documento.

Lo que queda es la corrección **retroactiva** de las 128 preguntas ya escritas con la muletilla,
dentro de las 78 lecciones que el sitio muestra hoy (`_manifest.json`) — los ~45 archivos huérfanos
(no listados en el manifiesto) quedan fuera de alcance a propósito, mismo criterio que
`COMPLETITUD-libro-de-mormon-2.md`.

---

## Alcance exacto (medido, no estimado)

Regex usado: `no tiene[n]? (ninguna )?relación|sin ninguna relación`, corrido solo sobre las 78
lecciones de `_manifest.json` (no sobre los ~45 huérfanos).

- **66 de 78 lecciones afectadas (85 %)**
- **128 preguntas de quiz** con al menos una opción con la muletilla
- **131 ocurrencias totales** (3 preguntas tienen la muletilla en dos opciones a la vez)

El inventario completo (archivo, id de pregunta, texto de la pregunta, las 4 opciones, cuál es la
correcta, y qué índice(s) hay que reescribir) quedó volcado en
`C:\Users\axelh\AppData\Local\Temp\claude\muletilla-completo.json` de la sesión que escribió este
documento — es un archivo temporal de esa sesión, **recrear con el script de abajo si ya no existe**
(es casi seguro que no exista si estás en una sesión nueva, esa carpeta es del perfil de esa
ejecución puntual).

```js
// Recrear el inventario completo — correr con: node -e "..." desde la raíz del repo
const fs = require('fs');
const m = require('./lib/content/libro-de-mormon-2/_manifest.json');
const ids = [];
for (const w of m.weeks) for (const l of w.lessons) ids.push(l.id);
const re = /no tiene[n]? (ninguna )?relación|sin ninguna relación/;
let out = [];
for (const id of ids) {
  const f = './lib/content/libro-de-mormon-2/' + id + '.json';
  if (!fs.existsSync(f)) continue;
  const d = JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const q of (d.questions||[])) {
    const idxs = q.options.map((o,i)=>re.test(o)?i:-1).filter(i=>i>=0);
    if (idxs.length) out.push({file: id, qid: q.id, question: q.question, options: q.options, correctAnswer: q.correctAnswer, badIdxs: idxs});
  }
}
console.log(out.length, 'preguntas afectadas');
fs.writeFileSync('/ruta/que/quieras/muletilla-completo.json', JSON.stringify(out, null, 2));
```

---

## Método para corregir cada distractor

Por cada opción marcada, escribir un reemplazo que sea uno de los tres tipos "buenos" de la propia
skill (`SKILL.md`, sección "Los tres distractores deben ser plausibles"):

1. **Parcialmente verdadero** — contiene algo real de la lección pero incompleto o fuera de contexto.
2. **Confusión de personajes o conceptos** — mezcla dos elementos reales de la lección de forma
   incorrecta.
3. **Verdad general pero no la respuesta específica** — algo correcto en abstracto que no responde
   la pregunta puntual.

**Nunca** reemplazar con otra fórmula genérica reciclable entre preguntas (eso es exactamente el
problema que se está corrigiendo) — cada reemplazo tiene que estar anclado al contenido específico
de esa pregunta y esa lección.

Aplicar los reemplazos con un script que manipula el JSON directamente (`JSON.parse` → editar el
array `options[badIdx]` → `JSON.stringify` de vuelta), **no** con el tool `Edit` por coincidencia de
texto — los acentos y guiones largos de este corpus rompieron varias veces el matching exacto de
`Edit` en sesiones anteriores de este mismo proyecto (ver notas de sesión de
`COMPLETITUD-libro-de-mormon-2.md`). Después de aplicar, correr:

```bash
npx tsx scripts/validate-content.ts
```

---

## Progreso

| Lote | Semanas / lecciones | Preguntas | Estado |
|---|---|---:|---|
| Causa raíz | Skill `seminary-enrichment` (nombres + regla anti-muletilla) | — | ✅ corregida (31-ago-2026) |
| Corrección retroactiva | Semanas 21-36 completas (66 lecciones) | 131 (128 preguntas, 3 con dos opciones) | ✅ **cerrado (31-ago-2026)** |

**Cerrado el mismo día que se abrió.** Se corrigieron las 131 ocurrencias en una sola pasada:
lectura completa del inventario (variantes "no tiene ninguna relación" / "no tiene relación" /
"sin ninguna relación" / plural), redacción de un reemplazo plausible por cada una (tipo
parcialmente-verdadero, confusión de conceptos, o verdad-general-no-específica, según la skill), y
aplicación directa sobre el JSON con un script (no con `Edit` por coincidencia de texto — más
robusto contra acentos y guiones largos). Verificado: 0 ocurrencias restantes de la muletilla en las
78 lecciones del manifiesto, 0 opciones duplicadas dentro de una misma pregunta,
`validate-content.ts` limpio (726 lecciones, 4028 preguntas — mismos números que antes de la pasada,
confirmando que solo se tocó texto de opciones, nada estructural).

**Lo que queda deliberadamente sin tocar**: la repetición de *nombres* de escenario
(Sofía/Mateo/Valentina/Luca/Camila) — ver la sección de abajo, "Nombres de escenario". Es un problema
real pero de impacto cosmético comparado con un distractor roto; el arreglo de raíz ya está en la
skill, así que no sigue creciendo en cursos nuevos.

## Nombres de escenario — no se tocan en esta pasada

La repetición de nombres (Sofía/Mateo/Valentina/Luca/Camila) **no se corrige retroactivamente** en
esta pasada — se decidió que el valor de reescribir 78 lecciones para variar nombres es bajo
comparado con el costo, versus el arreglo de raíz en la skill (ya hecho), que evita que seguya
creciendo el problema en cursos nuevos. Si en el futuro se decide encarar esto, es un trabajo
puramente cosmético (cambiar el nombre propio en la pregunta, sin tocar el resto) — mucho más barato
que reescribir distractores, pero de menor impacto en la calidad real del quiz.

## Estado de la primera pasada: cerrado (31-ago-2026)

No quedó pendiente nada de la primera pasada (muletilla de distractor). Lo de abajo es una
**segunda pasada**, más a fondo, abierta el mismo día a pedido del usuario — cubre los tres puntos
que la primera pasada había dejado deliberadamente afuera, más el Nivel 2 "de verdad" (lectura
completa, no solo grep) que `docs/auditorias/README.md` marca como nunca hecho en ningún curso.

---

## Segunda pasada (31-ago-2026) — nombres, aperturas repetidas, y Nivel 2 de lectura completa

### 1. Diversificación de nombres de personaje — ✅ cerrado

**Medido antes de tocar nada** (preguntas de aplicación, id 5 y 6, de las 78 lecciones): 149 de 156
posibles usaban uno de 5 nombres — Mateo 42, Sofía 38, Luca 28, Valentina 20, Camila 15 — más Bruno
5 y Jessica 1 (estos dos no pertenecen al pool de 14 nombres de la skill, se dejaron intactos por
tener baja concentración).

**Método:** separar el problema en dos sub-problemas independientes por género gramatical (7
nombres masculinos del pool de la skill, 7 femeninos), y reasignar manteniendo el género de cada
nombre reemplazado — así el intercambio es un simple swap del nombre propio dentro del string de
`question`, sin tocar pronombres ni adjetivos con concordancia de género, cero riesgo de romper la
gramática. Selección de qué ocurrencias cambiar hecha con *stride* (paso fijo) para repartir los
"mantenidos" de forma pareja a lo largo del corpus, no agrupados al principio. Aplicado con un
script (`JSON.parse` → reemplazo de nombre en `q.question` con regex de palabra completa →
`JSON.stringify`), verificando 0 colisiones (ningún archivo terminó con el mismo nombre repetido
entre su pregunta 5 y su pregunta 6).

**Resultado:** 90 de las 149 preguntas cambiadas (60%). Distribución final: los 14 nombres del pool
quedan entre 10 y 11 apariciones cada uno (antes: 3 nombres solos sumaban 108 de 149). Bruno y
Jessica, sin tocar.

```bash
npx tsx scripts/validate-content.ts   # 726 lecciones · 4028 preguntas — mismos números que antes
```

### 2. Aperturas de `contexto` repetidas — ✅ cerrado

**Medido** (primeras 3 palabras del texto de `contexto`, mismo método aplicado a
`antiguo-testamento-1` como referencia): 2 grupos repetidos en `libro-de-mormon-2` — "Después de
que" (`leccion-21-1`, `leccion-27-3`, `leccion-30-5`) y "Esta lección repasa" (`leccion-24-9`,
`leccion-25-1`, `leccion-27-9`, `leccion-28-9`, `leccion-29-5`, `leccion-36-4`, las 6 son lecciones
de repaso de Dominio de la Doctrina o Evalúa tu aprendizaje) — contra 3 grupos, todos de tamaño 2,
en `antiguo-testamento-1`.

**Corrección:** se reescribió la primera oración de las 9 lecciones (nunca el resto del párrafo),
variando la estructura de apertura sin tocar el contenido narrativo ni el largo (±1-2 palabras).
Aplicado con `JSON.parse`/`JSON.stringify` reemplazando el campo `contenido` completo de la sección
`contexto`, no con `Edit` de texto.

**Resultado:** 0 grupos repetidos en `libro-de-mormon-2` (antes 2, con 18 pares combinatorios) — a
la par de `antiguo-testamento-1`.

### 3. "Esta semana, elegí..." como apertura fija de `conclusion` — ✅ cerrado

**Medido:** 22 ocurrencias de la fórmula (regex `esta semana,?\s+eleg\w*`) sobre las 78 lecciones
del manifiesto — el usuario había estimado 23, la diferencia no se investigó (irrelevante para el
método de corrección).

**Corrección:** se reescribió únicamente la última oración de cada `conclusion` (la invitación a la
acción), variando la construcción de la frase (anteponer "Elegí, esta semana...", "Como desafío de
esta semana...", "Antes de que termine la semana...", etc.) sin tocar el resto del párrafo ni la
acción concreta invitada. Dos rondas: la primera introdujo sin querer 3 casos donde la nueva
redacción seguía conteniendo el fragmento literal "esta semana, elegí" en otro lugar de la oración
(ej. "Como desafío de esta semana, elegí...") — detectado por el mismo regex de verificación y
corregido reordenando esas 3 frases.

**Resultado:** 0 ocurrencias restantes del fragmento literal. `validate-content.ts` limpio (4028
preguntas, sin cambios estructurales) después de los tres puntos.

### 4. Nivel 2 real — "contenido leído" (contexto/escrituras/enseñanza vs. quiz) — ✅ cerrado (78/78)

**Alcance decidido con el usuario:** empezar por la mitad del curso (39 de 78 lecciones) antes de
comprometerse a las 78, para calibrar el costo. Se cubrieron primero las **semanas 21-28** (39
lecciones), y tras confirmar que el hallazgo era manejable, se completaron las **semanas 29-36**
(39 lecciones restantes) en la misma sesión — **78 de 78 lecciones del manifiesto, 546 preguntas de
quiz leídas contra sus propias fuentes internas**.

**Método:** lectura completa de `contexto` + `escrituras` + `enseñanza` + `conclusion` +
`cuestionario` + las 7 `questions` de cada lección, verificando (a) que las preguntas de quiz
reflejen fielmente el contenido guardado en la lección y no una idea genérica del tema, y (b) el
punto ciego de `COMO-AUDITAR-CONTENIDO.md` §3.1: si una pregunta atribuye una frase a un autor real,
que esa frase esté respaldada por la cita guardada en `enseñanza` o por la `escritura` citada — no
verificado contra fuente externa (eso ya lo cubren las auditorías de citas, cerradas 39/39 líderes y
219/237 escrituras), sino contra el propio contenido interno del archivo.

**Resultado sobre las 39 lecciones leídas:** el contenido es de muy buena calidad de forma
consistente — quiz ancla casi cada pregunta a una referencia de versículo explícita en el enunciado
("Según Alma 34:9...", "Según Helamán 5:12..."), los distractores son plausibles y variados, las
preguntas de síntesis (id 7) conectan dos ideas reales de la lección. Se encontraron **2 fallas
concretas de fidelidad en 39 lecciones (273 preguntas de quiz)** — ambas corregidas:

1. **`leccion-24-3`, pregunta de quiz 7 (síntesis):** el enunciado original decía "Tanto la partida
   misteriosa de Alma como la creación del estandarte de la libertad..." — pero "la partida
   misteriosa de Alma" (Alma 45:18-19, donde Alma desaparece) **no aparece en ningún lado de esta
   lección** (ni `contexto`, ni `escrituras`, ni `enseñanza`, que solo cubren el estandarte de la
   libertad de Alma 46). La lección cubre nominalmente "Alma 45–46" según el `title` del manifiesto,
   pero el contenido guardado nunca desarrolla la parte de Alma 45. **Corregida:** reescrita para
   sintetizar dos elementos que sí están en la lección (el intento de Amalickíah de ganar adeptos con
   "palabras lisonjeras" vs. la respuesta de Moroni con el estandarte), con las 4 opciones y la
   respuesta correcta reescritas para esa nueva premisa.
2. **`leccion-27-3`, cuestionario pregunta 3 y quiz pregunta 5:** ambas atribuían una enseñanza a
   "el élder Holland" ("el testimonio no requiere conocimiento perfecto") — pero la sección
   `enseñanza` de esa lección es del **Élder Neil L. Andersen**, con un texto completamente distinto
   ("Un profeta no se interpone entre ustedes y el Salvador..."). No hay ningún Holland en el
   archivo — la cita no está respaldada por ninguna fuente guardada en la lección. Exactamente el
   punto ciego que describe `COMO-AUDITAR-CONTENIDO.md` §3.1. **Corregidas ambas:** en vez de forzar
   una conexión con la cita de Andersen (que habla de un tema distinto — el profeta como guía hacia
   Cristo, no la certeza personal del testimonio), se ancló la pregunta en Helamán 8:24, que sí está
   citado en `escrituras` de esa misma lección ("¿Y cómo pensáis que las sé, si no es porque son
   verdaderas, y he sido llamado a declarároslas?") — más robusto que intentar encajar la cita de
   Andersen en un tema que no trata.

**Semanas 29-36 (segunda mitad, 39 lecciones): 2 hallazgos menores, ambos corregidos.**

3. **`leccion-29-5`, pregunta de quiz 2:** dos de las cuatro opciones eran prácticamente el mismo
   distractor repetido con una sola palabra distinta ("La felicidad depende **principalmente** de
   las circunstancias externas..." / "...depende **exclusivamente** de las circunstancias
   externas..."), sin ningún valor discriminante. **Corregida:** la segunda se reemplazó por un
   distractor del tipo "confusión de conceptos", anclado al tema propio de esa lección (memorizar
   vs. aplicar los pasajes de Dominio de la Doctrina): "Que basta con memorizar los pasajes de
   Dominio de la Doctrina para ser feliz, sin necesidad de vivirlos".
4. **`leccion-32-9`, pregunta de quiz 6:** error de concordancia de género — "Martina... 'no está
   **seguro** de que vaya a sentir algo especial'" (Martina es un personaje femenino). **Corregido**
   a "no está **segura**".

Ambas correcciones aplicadas con `JSON.parse`/`JSON.stringify` directo sobre el archivo, no con
`Edit`. `validate-content.ts` limpio después de las 4 correcciones (726 lecciones, 4028 preguntas —
sin cambios estructurales).

**Observación sin corregir (fuera de alcance de esta pasada):** un grupo de lecciones sobre Mormón
(`leccion-34-1`, `leccion-35-1`, `leccion-35-4`, `leccion-35-5`, `leccion-36-1`) tiene preguntas de
quiz con opciones notablemente más cortas y genéricas que el resto del curso (ej. "Paz perfecta" /
"Guerras, contaminación y combinaciones secretas" / "Nada especial" / "Prosperidad para todos", en
vez del estilo de frase completa y anclada a un versículo específico que usa el resto del corpus).
No son incorrectas ni violan ninguna regla dura (siguen siendo del mismo largo entre sí dentro de
cada pregunta, y no reintroducen la muletilla ya corregida), pero son de una generación
visiblemente más liviana — parecen un lote de generación distinto, igual que el patrón que
`COMO-AUDITAR-CONTENIDO.md` §3 ya documentó en otros cursos. Reescribirlas completas sería una
tarea de generación de contenido nueva (`seminary-enrichment`), no de esta auditoría — queda
anotado como candidato si se decide encarar en el futuro.

### Resumen de la sesión completa (31-ago-2026)

| Punto | Alcance | Resultado |
|---|---:|---|
| 1. Nombres de personaje | 78/78 lecciones | 90 de 149 preguntas de aplicación reasignadas; los 14 nombres del pool quedan entre 10-11 apariciones cada uno |
| 2. Aperturas de `contexto` repetidas | 78/78 lecciones | 9 lecciones reescritas; 0 grupos repetidos (antes 2, 18 pares) |
| 3. Aperturas de `conclusion` repetidas | 78/78 lecciones | 22 lecciones reescritas; 0 ocurrencias del fragmento fijo (antes 22) |
| 4. Nivel 2 — fidelidad quiz vs. fuente | 78/78 lecciones, 546 preguntas | 4 fallas de fidelidad corregidas (2 misattribution/contenido fuera de lección, 1 distractor duplicado, 1 error de concordancia) |

**70 de 78 lecciones tienen al menos una mejora aplicada** en esta sesión. `validate-content.ts`
limpio en todo momento (726 lecciones, 4028 preguntas, sin cambios estructurales).

## Estado: cerrado (31-ago-2026)

Los cuatro puntos de la segunda pasada están cerrados. Candidatos para trabajo futuro, ninguno
urgente: (a) reescribir el estilo de quiz más liviano del bloque de lecciones sobre Mormón
(ver observación arriba), (b) extender el Nivel 2 de calidad a otro curso — `antiguo-testamento-1`
es el candidato natural de control, ya que salió limpio en la comparación que motivó todo este
documento.
