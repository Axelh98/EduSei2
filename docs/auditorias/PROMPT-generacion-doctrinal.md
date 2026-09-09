# Prompt para arrancar una sesión de generación

Copiá todo lo que está debajo de la línea y pegalo en una sesión nueva. Editá primero el bloque
**OBJETIVO DE ESTA SESIÓN** para elegir el frente y el curso.

---

Vamos a generar contenido de lecciones para AulaSei con las reglas doctrinales que se incorporaron
a las skills el 6 de septiembre de 2026. Antes de escribir nada, invocá `/seminary-enrichment` y
leela entera: cambió en cuatro puntos y las reglas nuevas no son opcionales.

## OBJETIVO DE ESTA SESIÓN

- **Frente:** B (corregir contenido ya escrito que no enseña de Cristo)
- **Curso:** `doctrina-y-convenios-1`
- **Cuántas lecciones:** las primeras 5 de la cola

> Para el frente A (generar lo que falta desde cero), cambiá a: Frente A, curso
> `nuevo-testamento`, 5 lecciones. Son 78 lecciones que hoy tienen quiz pero `secciones: []`,
> así que el alumno rinde sobre doctrina que el sitio nunca le enseñó.

> **Puede haber otras sesiones trabajando en paralelo, cada una sobre un curso distinto.** Por eso:
> no toques ningún archivo fuera del directorio `lib/content/<tu curso>/`, no corras
> `build-search-index.ts` ni `regen-content-map.ts` (escriben archivos globales que comparten todos
> los cursos; se corren una sola vez al final, cuando no queda ninguna sesión activa), no hagas
> `git commit`, `git checkout` ni `git stash` (el árbol de trabajo es compartido y te llevarías el
> trabajo a medio hacer de las otras sesiones), y escribí tu avance **solo** en tu propio archivo de
> bitácora, nunca en el compartido.

## Antes de tocar nada

1. Leé `docs/auditorias/BITACORA-generacion-doctrinal.md` entero. Es el índice: la línea de base de
   todos los cursos, el orden de trabajo y los pendientes. **Es de solo lectura para vos.**
2. Tu registro va en `docs/auditorias/BITACORA-<tu curso>.md`, un archivo por curso, para que dos
   sesiones no se pisen. Si no existe, crealo con este encabezado y esta tabla:

   ```markdown
   # Bitácora — <curso>

   Ver `BITACORA-generacion-doctrinal.md` para la línea de base y las reglas del registro.

   | Fecha | Lecciones | Frente | Cristo antes -> después | Escudriñar antes -> después | Notas |
   |---|---|---|---|---|---|
   ```
3. Leé `docs/auditorias/CICLO-GENERACION-AUDITORIA.md`. Es el catálogo de defectos que las
   auditorías fueron encontrando en contenido generado, mapeados a la regla que ahora los previene.
   La propia skill pide leerlo antes de una tanda grande.
4. Medí el punto de partida y armá la cola de trabajo:

   ```bash
   npx tsx scripts/audit-doctrinal.ts <curso>
   npx tsx scripts/audit-doctrinal.ts <curso> --detalle
   ```

   Del `--detalle` salen **tres** colas, y conviene trabajarlas en este orden, que es el que se
   siguió para cerrar `antiguo-testamento-2` (ver su fila en la bitácora):

   1. `SIN CRISTO EN CONTEXTO NI CONCLUSION` — la lección no lo nombra. Es el frente B clásico.
   2. `SOLO NOMBRADO` — lo nombra pero no dice nada de Él. Acá no hay que insertar Su nombre, ya
      está: hay que darle contenido (Su ejemplo, un atributo, Su poder, una promesa Suya).
   3. Las que no están en ninguna de las dos pero **no tienen la pregunta de escudriñar, la de
      orar, o tienen el quiz de la convención vieja**. Se detectan cruzando `--detalle` con
      `audit-completitud.ts`.
5. **Bajá el manual de las lecciones del lote antes de escribir, y de paso verificá el
   `chapterUrl`.** Pedí cada URI a la API v3 y compará el `uri` que devuelve contra el que pediste:
   si difieren, esa `chapterUrl` **no existe** — el sitio no da 404, devuelve el índice completo del
   manual con HTTP 200. En `antiguo-testamento-2` aparecieron así dos URLs rotas (lecciones 104 y
   191) que ninguna herramienta ingenua marca. El chequeo tarda segundos sobre las 5 del lote.
6. Anotá el punto de partida en tu bitácora **antes** de empezar, no después.

## Las cuatro reglas nuevas

Están en la skill, pero las repito acá porque son justamente las que es fácil pasar por alto
cuando uno entra en ritmo de producción:

1. **Regla superior — toda lección enseña sobre Jesucristo, cualquiera sea su tema.** El `contexto`
   lo conecta por una de tres vías: Su ejemplo perfecto de ese principio, un atributo o título Suyo
   que el principio revela, o el símbolo del relato que testifica de Él. La `conclusion` no puede
   cerrar solo en el esfuerzo del alumno: la acción se apoya en Su poder, Su ejemplo o Su promesa.
2. **Símbolos y atributos en los tres tipos de lección**, no solo en las narrativas. *Preparación
   para la Vida* y *Dominio de la Doctrina* son los que más se alejan de Él y los que más trabajo
   deliberado necesitan.
3. **Pregunta de escudriñar** (posición 3 de las 6 del `cuestionario`): manda al alumno de vuelta
   al bloque `escrituras` de esa misma lección, con la referencia nombrada. Si se puede responder
   sin abrir el pasaje, no es una pregunta de escudriñar.
4. **Al menos una de las preguntas 5–6 invita a orar, meditar o anotar una impresión**, no solo a
   hacer algo.

Y el **checklist doctrinal** antes de cerrar cada lección, que está en la skill. El ítem que más
importa: *si borrás el nombre de Cristo del párrafo, ¿la lección funcionaría exactamente igual?*
Si la respuesta es sí, está nombrado pero no enseñado, y hay que reescribirlo.

## Cómo trabajar

- **De a 5 lecciones por lote**, como pide la skill. No abras un lote nuevo sin cerrar el anterior.
- Si corregís una lección que ya tenía `cuestionario` y `questions`, revisá esas dos secciones
  antes de darla por cerrada: cambiar el `contexto` o la `enseñanza` y dejar una pregunta de quiz
  citando algo que ya no está en el archivo es un defecto real que la auditoría ya encontró antes.
- No inventes citas de líderes. Si no hay una verificable, omití la sección `enseñanza`. Las citas
  salen del manual oficial, que se lee con la API v3 (no con `web_fetch`, que solo trae el shell):

  ```
  https://www.churchofjesuschrist.org/study/api/v3/language-pages/type/content?lang=spa&uri=<uri>
  ```

  donde `<uri>` es el `pathname` del `chapterUrl` sin el prefijo `/study`.
- Si el frente es B, **no reescribas la lección entera**: tocá lo que hace falta para que enseñe de
  Cristo y para agregar las dos preguntas nuevas. Lo demás ya pasó auditorías.

## Al cerrar cada lote

```bash
npx tsx scripts/validate-content.ts          # JSON sano
npx tsx scripts/audit-doctrinal.ts <curso>   # ¿se movió el número?
```

Después completá la fila de la bitácora con el resultado real. **Si el número no se movió, el lote
no sirvió**: decilo y entendé por qué antes de abrir el siguiente. Esa es la única forma de que la
bitácora sea un control y no un diario.

El detector de escudriñar **ya está validado** (lo confirmaron `antiguo-testamento-1` y
`antiguo-testamento-2`, con +5 exacto por lote), así que si escribís la pregunta y el contador no
se mueve, el problema es tuyo y no del script. La forma que reconoce es literal: **`Volvé a leer
<referencia exacta del bloque escrituras> …`** — exige un verbo de lectura *y* la referencia, y la
compara contra `escrituras.citas[].referencia` de esa misma lección, así que tiene que estar
escrita igual, incluido el guion largo del rango (`8:1–6`).

## Lo que se aprendió cerrando `antiguo-testamento-2` (6-sep-2026)

Ese curso pasó de 55 % a **100 % en las cuatro medidas**. Cinco cosas que costaron tiempo la
primera vez y que conviene saber de entrada:

- **El subtítulo del manual suele traerte la vía de Cristo ya escrita.** En *Preparación para la
  Vida*, el manual titula «Manejar el estrés y la ansiedad: **Jesucristo puede ayudarnos** a
  manejar el estrés» y «Resolver los sentimientos de ira: **Responder a la ira siguiendo al
  Salvador**»; la lección del sitio había conservado el tema y borrado el sujeto. Leé ese
  subtítulo antes de escribir el `contexto`: si nombra a Jesucristo, esa es la vía de la Regla
  superior y no hace falta inventar otra.
- **La opción correcta te va a salir siendo la más larga, siempre.** Pasó en los 13 lotes. Contalas
  al cerrar cada lección (si son más de 2 de 7, hay sesgo) y corregilo **alargando un distractor
  con margen**, no empatando al carácter: los emparejados justos vuelven a fallar y obligan a otra
  vuelta.
- **Verificá la sustancia con la misma regex que usa `audit-doctrinal.ts`.** Si te escribís un
  chequeo propio más laxo, te va a decir «ok» donde el script dice `SOLO NOMBRADO` (pasó con
  `leccion-130`: mi regex aceptaba «cordero» y la del script pide «Cordero de Dios»). Ojo también
  con que el contador «dice algo de Él» mide **solo el `contexto`**, mientras que la lista
  `SOLO NOMBRADO` cruza contexto y conclusión.
- **Si cambiás el tamaño del quiz, sincronizá `questionCount` en `_manifest.json`.** Se saltea sin
  querer y lo caza `validate-content.ts`, no `audit-doctrinal.ts`.
- **Reescribir los quiz a 7 × 4 arregla solo el sesgo de posición del curso.** AT-2 estaba en «96 %
  de las respuestas en la posición 1» y terminó en un reparto parejo sin necesidad de correr
  `audit-distribucion-respuestas.ts --write`, porque las posiciones se repartieron al escribir.

## Qué no hacer

- No commitear nunca por tu cuenta: el árbol de trabajo es compartido con las otras sesiones.
- No ampliar el alcance a otros cursos: otra sesión puede estar trabajando ahí.
- No dar por buena una lección sin haber corrido el checklist doctrinal sobre ella.

Empezá midiendo y mostrame la cola de trabajo antes de escribir la primera lección.
