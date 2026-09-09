# Auditoría de citas de Escritura — antiguo-testamento-1

Método: `docs/auditorias/COMO-AUDITAR-ESCRITURAS.md`. Todo el texto de reemplazo salió de
descargar el capítulo real (`audit-escrituras.ts` / `ver-versiculo.ts`); **nada se restituyó de
memoria**, que es la regla que no se negocia de esta auditoría.

## Estado

| | Antes | Después |
|---|---|---|
| Citas totales | 279 | 279 |
| `OK` | 231 | **245** |
| `REVISAR_MANUAL` | 48 | **34** |

`fix-escrituras.ts` no aplicó nada: **0 auto-corregibles**. Ninguno de los 48 llegaba al umbral de
recall 0.85 dentro del capítulo, porque el problema no era una diferencia de puntuación sino que el
`texto` estaba **parafraseado** en vez de transcrito.

## Cómo se triaron los 48

`rescan-ventana-ancha.ts` clasificó los 48 como «RESUMEN (texto intacto), salto 0» — es decir,
referencia correcta y texto sintetizado. Eso es la convención aceptada del proyecto para un pasaje
largo, pero **no aplica a una cita de un solo versículo**, donde el texto sí debe ser literal. El
triaje que faltaba fue separar por amplitud de la referencia:

- **34 citas de 4+ versículos** → resumen legítimo, referencia correcta, texto intacto. Sin acción.
- **14 citas de 1–3 versículos** → el texto debía ser literal y no lo era. **Corregidas.**

La señal más clara de que era defecto y no convención: `Doctrina y Convenios 88:118` estaba
**bien** citada en `leccion-172` y **parafraseada** en `leccion-190`, en el mismo curso.

## Las 14 corregidas

### Texto parafraseado, referencia correcta (10)

| Lección | Referencia | Lo que decía | Lo que dice el pasaje |
|---|---|---|---|
| `leccion-163` | 1 Nefi 4:6 | «Fui llevado por el Espíritu, no sabiendo de antemano las cosas que haría» | «E iba guiado por el Espíritu, sin saber de antemano lo que tendría que hacer» |
| `leccion-45` | D. y C. 6:36 | «Mira hacia mí en todos tus pensamientos; no dudes, no temas» | «Mirad hacia mí en todo pensamiento; no dudéis; no temáis» |
| `leccion-61` | D. y C. 6:36 | «Mira a mí en todo pensamiento; no dudes, no temas» | idem |
| `leccion-35` | D. y C. 64:10 | «Es preciso que perdonéis a todos los hombres» | «Yo, el Señor, perdonaré a quien sea mi voluntad perdonar, mas a vosotros os es requerido perdonar a todos los hombres» |
| `leccion-40` | D. y C. 121:7–8 | «…Dios te ensalzará en las alturas» | «…Dios te exaltará; triunfarás sobre todos tus enemigos» |
| `leccion-190` | D. y C. 88:118 | «Buscad el aprendizaje, incluso por el estudio y también por la fe» | «…buscad conocimiento, tanto por el estudio como por la fe» |
| `leccion-179` | D. y C. 119:4 | «después que el hombre haya ofrecido un diezmo de todo lo que posee…» | «…pagarán la décima parte de todo su interés anualmente» |
| `leccion-205` | D. y C. 21:4–5 | «Prestarás atención…» (en singular) | «…daréis oído a todas sus palabras» (en plural) |
| `leccion-43` | Moroni 4:3 | «Que siempre se acuerden de él…» | «…y a recordarle siempre, y a guardar sus mandamientos» |
| `leccion-57` | Alma 33:19–20 | «Un tipo fue levantado en el desierto…» | «…fue levantado un símbolo en el desierto, para que quien mirara a él, viviera» |

Dos de estas (`leccion-45` y `leccion-61`) traían el pasaje **reescrito de «vosotros» a «tú»**.
Es la misma señal que `extract-citas.ts` marca como `vosotros-en-cita` para las citas de líder, y
vale igual acá: si el registro no es el de la traducción oficial, la cita fue reescrita, no
transcrita.

### Referencia equivocada — el texto era de otro versículo (4)

Verificadas una por una con `ver-versiculo.ts` **antes** de escribir nada:

| Lección | Decía | Es en realidad | Evidencia |
|---|---|---|---|
| `leccion-195` | D. y C. 60:13 | **D. y C. 60:2** | 60:2 es el que habla de los que «no quieren abrir su boca, sino que esconden el talento… a causa del temor de los hombres»; 60:13 habla de no desperdiciar el tiempo |
| `leccion-201` | D. y C. 109:22 | **D. y C. 109:13** | 109:13 es el del «umbral de la casa del Señor»; 109:22 pide que los siervos salgan armados con Su poder |
| `leccion-59` | Helamán 12:2 | **Helamán 12:1** | 12:1 es el «cuán falso e inconstante es el corazón de los hijos de los hombres» |
| `leccion-65` | Mormón 9:19 | **Mormón 9:21** | el texto guardado no correspondía a ningún versículo; 9:21 («quien crea en Cristo… le será concedido») es el que sostiene el tema de la lección, que es clamar y ser librado |

En los cuatro se actualizó también el `link` con su ancla `#pN`.

## Arrastre a otras secciones — 4 casos

Al cambiar el texto de una cita hay que revisar si el resto de la lección la citaba. Es el defecto
de las **filas 6 y 12** de `CICLO-GENERACION-AUDITORIA.md`, y acá apareció en 4 lugares:

| Lección | Sección | Qué citaba |
|---|---|---|
| `leccion-163` | `contexto` | «Fui llevado por el Espíritu, no sabiendo de antemano las cosas que haría» |
| `leccion-163` | `cuestionario` (p. 4) | «no sabiendo de antemano las cosas que haría» |
| `leccion-45` | `cuestionario` (p. 5) | «no dudes, no temas, mira hacia mí» |
| `leccion-43` | `contexto` | «Que siempre se acuerden de él» |

Los cuatro se alinearon con el texto literal. **El cruce es automatizable y conviene correrlo
siempre después de tocar una cita**: buscar el texto viejo en el resto del JSON de la lección toma
segundos y no depende de acordarse de mirar.

## Lo que queda

- **34 citas de rango largo** en `REVISAR_MANUAL`, todas clasificadas como resumen con referencia
  correcta. No son un defecto bajo la convención vigente; si el proyecto decide que el `texto` debe
  ser siempre literal, hay que revisarlas y esa decisión es del usuario, no del auditor.
- **12 citas de líder sin ancla al párrafo** (`audit-links-citas.ts`, bandera ⚓) — fila 16 del
  catálogo. Los links resuelven: **0 rotos** de 107 únicos.
- `audit-autores-quiz.ts`: **0 atribuciones sin respaldo**. El defecto de la fila 12 no está en
  este curso.

Cerrado el 6-sep-2026.
