# Cómo auditar citas de Escritura (y hacerlo barato)

Guía de método para verificar las citas de Escritura (`tipo: "escrituras"` y bloques
`tipo: "escritura"` dentro de `resumen`) de cualquier curso. Nace de la auditoría de
`doctrina-y-convenios-1` (ver [`AUDITORIA-escrituras-DyC1.md`](AUDITORIA-escrituras-DyC1.md)),
que se hizo entera a mano, cita por cita, dentro de una conversación con Claude. Esta guía
existe para que la próxima vez **no haga falta repetir ese trabajo**: la parte mecánica ahora
es un script.

> Esto es distinto de auditar **citas de líder** (`tipo: "enseñanza"`, ver
> [`../ESTADO.md`](../ESTADO.md) y `scripts/extract-citas.ts`). Ahí el problema típico es que
> el discurso no existe o el `link` está vacío, y hay que salir a buscarlo. Acá el `link`
> casi siempre existe: el problema típico es que el `texto` fue parafraseado en vez de
> copiado literal. Son verificaciones distintas y no comparten script.

---

> ### ⚠️ Antes de leer nada más: el script **solo ve las citas que tienen `link`**
>
> `audit-escrituras.ts` construye la URL del capítulo a partir del `link` de cada cita. Una cita
> sin `link` no se descarga, no se compara y **no aparece en el reporte** — ni siquiera como
> pendiente. El resultado es que un curso puede informar «100 % OK» mirando una fracción de sus
> escrituras, sin que nada en la salida lo advierta.
>
> Pasó en `religion-301` (medido el 9-sep-2026): de sus **87 citas, el script veía 17**, e
> informaba `OK 8 · REVISAR_MANUAL 8 · AUTO_CORREGIBLE 1`. El curso parecía razonable. Al ponerle
> `link` a las otras 70 y restituirlas desde la API resultaron **todas** paráfrasis:
>
> | pasaje | antes | después | |
> |---|---:|---:|---|
> | Moisés 7:60–64 | 270 car. | 1337 car. | **+395 %** |
> | Moisés 6:57–59 | 282 | 1037 | +268 % |
> | Moisés 4:6–12 | 308 | 939 | +205 % |
> | Éxodo 34:6–7 | 233 | 424 | +82 % |
>
> **Antes de correr el script, contá cuántas citas del curso tienen `link`.** Si no son todas, ese
> número es el denominador real de lo que el reporte va a decir. La lista de cursos con citas sin
> `link` está en §1.2 de [`PLAN-DE-AUDITORIA.md`](PLAN-DE-AUDITORIA.md).
>
> Y un efecto secundario que conviene anticipar: **restituir un pasaje puede dejar mintiendo a su
> `comentario`**, que se escribió contra el texto viejo y suele entrecomillar frases de él. En
> `religion-301`, 34 de 44 frases entrecomilladas quedaron sin coincidir con su propio pasaje —
> casi todas porque el comentario decía «el Señor» donde la Escritura SUD dice «Jehová». Ver la
> fila 46 de [`CICLO-GENERACION-AUDITORIA.md`](CICLO-GENERACION-AUDITORIA.md).

---

## 1. El flujo en tres comandos (más uno de apoyo)

```bash
npx tsx scripts/audit-escrituras.ts <categoria>              # descarga y compara, no escribe nada
npx tsx scripts/fix-escrituras.ts <categoria>                # simulación de lo AUTO_CORREGIBLE
npx tsx scripts/fix-escrituras.ts <categoria> --write        # aplica las correcciones seguras
npx tsx scripts/rescan-ventana-ancha.ts <categoria>          # segunda pasada sobre lo que sigue REVISAR_MANUAL
npx tsx scripts/rescan-ventana-ancha.ts <categoria> --write  # aplica lo que rescan-ventana-ancha encontró
npx tsx scripts/ver-versiculo.ts <url> <versiculo...>        # verificar una hipótesis puntual a mano
```

`audit-escrituras.ts` hace todo el trabajo pesado:

1. Extrae todas las citas de Escritura del curso (con su archivo y ubicación exacta).
2. Descarga el capítulo real de cada `link` único (con caché en `.cache/escrituras/paginas/` y
   pausa entre pedidos — el sitio devuelve 503 si se lo satura).
3. Compara el `texto` guardado contra el párrafo que señala el ancla del link.
4. Si no coincide, busca el texto **en todo el capítulo** (ventanas de 1 a 3 párrafos) antes de
   darlo por perdido.
5. Clasifica cada cita en un reporte (`.cache/escrituras/<categoria>.json`, no se sube a git):

| Estado | Qué significa |
|---|---|
| `OK` | El texto coincide con el párrafo del ancla. No hace falta tocar nada. |
| `AUTO_CORREGIBLE` | El texto real está en el mismo capítulo, a alta confianza (ancla o ventana cercana). Se puede corregir sin criterio humano. |
| `REVISAR_MANUAL` | El texto no aparece en ningún lado razonable del capítulo. Puede ser la referencia equivocada, o contenido que no existe. Necesita a alguien (o a Claude) mirándolo. |
| `SIN_CAPITULO` | No se pudo descargar esa página — correr `audit-escrituras.ts` de nuevo. |

`fix-escrituras.ts` lee ese reporte y **escribe los `AUTO_CORREGIBLE` directamente en
`lib/content/`** — sin que nadie tenga que leer cada uno. Por defecto es una simulación (solo
imprime qué cambiaría); hace falta `--write` para que toque archivos.

## 2. Por qué esto es más barato que lo que se hizo en DyC-1

En la auditoría de DyC-1, cada una de las 174 citas corregidas pasó por el mismo ciclo manual:
Claude leía el archivo, pedía el párrafo real por un comando suelto, decidía el texto correcto,
y escribía un `Edit`. Eso costó una conversación larga — no porque el trabajo fuera difícil,
sino porque **no había una herramienta que hiciera la parte mecánica sin supervisión**.

De esas 174, la enorme mayoría (~150) eran del tipo más simple: el párrafo correcto ya estaba
en el propio ancla o a un párrafo de distancia, solo parafraseado. Ese caso es exactamente lo
que `AUTO_CORREGIBLE` resuelve sin que Claude tenga que leer ni escribir nada — el script arma
el texto literal, la referencia y el link, y los aplica.

Lo que **sigue necesitando criterio** son los `REVISAR_MANUAL` (en DyC-1 fueron ~20 de 196): los
casos donde ni el ancla ni las ventanas cercanas explican el texto guardado. Ahí sí hace falta
un ser pensante, pero el script ya hizo el descarte previo — no hay que rehacer las 196
comparaciones para encontrar esos 20, el reporte ya los separó.

**Regla práctica:** correr siempre `audit-escrituras.ts` y `fix-escrituras.ts --write` primero,
y traer a Claude solo para la lista final de `REVISAR_MANUAL` — que además el propio reporte
ya viene con el mejor candidato encontrado en el capítulo, así que ni siquiera hay que pedirle
que lo busque desde cero.

## 3. Qué hacer con los `AUTO_CORREGIBLE` antes de aplicarlos

`fix-escrituras.ts` sin `--write` imprime cada cambio propuesto (texto antes/después, y si
corresponde, la referencia y el link nuevos). **Conviene mirar esa salida antes de aplicar**,
sobre todo cuando cambia la `referencia` o el `link` — significa que el ancla original apuntaba
a un versículo distinto del que realmente se citaba (pasó en D&C 78:13–14 → 78:6, 14, y en
D&C 59:9–10 → 59:12–13 en la auditoría de DyC-1). Si el cambio de referencia no tiene sentido con
el resto de la lección, es más seguro tratarlo como `REVISAR_MANUAL` a mano.

## 4. Cómo resolver los `REVISAR_MANUAL`

Estos son los que de verdad requieren pensar. El método que funcionó en DyC-1, en orden:

1. **Mirar el candidato que ya trae el reporte.** `fix-escrituras.ts` imprime, para cada
   `REVISAR_MANUAL`, el mejor párrafo (o ventana) que encontró en el capítulo, con su recall.
   Si el recall es moderado (0.5–0.8) suele ser la respuesta correcta, solo que la paráfrasis
   era tan libre que no llegó al umbral automático de 0.85. Verificar a mano y, si convence,
   escribirlo directo (mismo patrón que usó `nodo.texto = ...` en `fix-escrituras.ts`).
2. **Si el candidato es débil (recall < 0.5) o no hay ninguno**, el texto puede estar en un
   capítulo distinto o ser una síntesis de varios versículos no contiguos (pasó con D&C 19:34–35,
   que no existía en ningún párrafo del capítulo 19 y en realidad citaba mal la sección). Buscar
   el `chapterUrl` de la lección en `_manifest.json`: el manual oficial de Seminario/Instituto a
   veces aclara qué versículo es, igual que para las citas de líder (ver `../ESTADO.md`).
3. **Nunca restituir texto de memoria.** Todo párrafo que se use como reemplazo tiene que
   haberse descargado y comparado — el mismo principio que ya costó caro saltarse en la
   auditoría de citas de líder (§6 de `AUDITORIA-citas-libro-de-mormon.md`).

## 4.1. Cuando `REVISAR_MANUAL` es casi la mitad del curso: cómo triar sin leer cada una

En Doctrina y Convenios 1 los `REVISAR_MANUAL` eran ~20 de 196 (10%) — se podían leer una por
una. En la auditoría de `libro-de-mormon-2` (agosto 2026) fueron **114 de 237 (48%)**: leer cada
una en la conversación cuesta demasiados tokens antes de escribir una sola corrección. El método
que funcionó, en orden:

1. **Correr `scripts/rescan-ventana-ancha.ts <categoria>`** (sin `--write` primero). Repite la
   búsqueda de `audit-escrituras.ts` pero con ventanas de hasta 12 párrafos en vez de 3, sobre las
   páginas ya cacheadas (no descarga nada nuevo). Separa cada `REVISAR_MANUAL` en dos grupos según
   el largo de la ventana ganadora:
   - **`PUNTUAL`** (ventana de 1–3 párrafos): probablemente un versículo puntual mal citado.
     Umbral 0.6 — si se aplica, se literaliza el `texto` (igual que un `AUTO_CORREGIBLE`, solo que
     con un umbral de confianza más bajo que exige haber revisado la simulación a mano primero).
   - **`RESUMEN`** (ventana de 4+ párrafos): probablemente el `texto` es una síntesis intencional
     de un pasaje largo (ej. "Alma 48:11-13" resultó resumir Alma 48:11-17 entero). Acá la decisión
     de este proyecto es **ampliar `referencia`/`link` al rango real y no tocar el `texto`** — no
     hay una única frase "correcta" para extraer de un resumen, y forzar el texto completo de 10
     versículos rompería el propósito de la cita. Si tu proyecto prefiere otra convención (por
     ejemplo, marcar estas citas como tipo `resumen` en vez de `escrituras`), ajustá el script.
2. El propio script imprime dos avisos automáticos para las candidatas más riesgosas, aprendidos
   de un falso positivo real (ver más abajo): **recall en zona gris** (0.5–0.6) y **capítulo
   largo** (más de 40 párrafos). Cuando aparecen los dos juntos, verificar a mano con
   `scripts/ver-versiculo.ts` antes de confiar en el resultado — no alcanza con mirar el recall.
3. Aplicar con `--write` lo que se validó, y volver a correr `audit-escrituras.ts` para confirmar
   el nuevo conteo. Las citas `RESUMEN` **van a seguir apareciendo como `REVISAR_MANUAL` para
   siempre** (el comparador mide recall de palabras contra todo el rango citado, y una frase-resumen
   nunca llega a 0.9 de recall contra 10 versículos) — no es un pendiente real, es una limitación
   conocida del comparador. Llevá la cuenta aparte en el documento de auditoría del curso.
4. Lo que queda sin candidato ni con ventana ancha (recall bajo el umbral aun con 12 párrafos) cae
   en la categoría más difícil: la cita puede estar en **otro capítulo, o incluso otro libro**
   (ver §4.2). Esas sí conviene revisarlas una por una — pero ya son un grupo mucho más chico.

### Falso positivo real que motivó los dos avisos automáticos

Una cita de `libro-de-mormon-2` decía "DyC 84:85" con el texto "Ni la mente ha concebido las
grandes cosas que el Señor tiene reservadas para los que lo aman." La ventana ancha encontró un
candidato en D&C 84:110–118 con recall 0.56 — por encima del umbral de resumen. Verificado a mano
con `ver-versiculo.ts`, ese pasaje habla de que los obispos deben viajar entre las iglesias: **no
tiene ninguna relación real** con el texto guardado. El recall alto era casualidad de vocabulario
común (palabras de 4+ letras que se repiten en cualquier capítulo largo). D&C 84 tiene 120
párrafos — muy por encima de lo típico en un capítulo del Libro de Mormón (20–60) — y esa
longitud, combinada con un salto de 25 versículos respecto de la referencia original, es
exactamente el patrón que gatilla los dos avisos del script. **Regla práctica: un recall de
0.5–0.6 en un capítulo largo no es evidencia suficiente por sí solo — hace falta leer el pasaje.**

## 4.2. Cuando la cita apunta al capítulo (o al libro) equivocado

Un subconjunto de los `REVISAR_MANUAL` que ni la ventana ancha resuelve no son versículos "casi
correctos": son citas cuyo `link` apunta a un capítulo que **no contiene ese texto en absoluto**,
porque el texto real está en otro capítulo, o incluso en otro libro. `audit-escrituras.ts` y
`rescan-ventana-ancha.ts` no lo van a encontrar solos — ambos buscan únicamente dentro del
capítulo que ya señala el `link`. Ejemplos reales de `libro-de-mormon-2`:

- Una cita etiquetada "3 Nefi 15:9" tenía el texto "Yo soy la luz y la vida del mundo; y he bebido
  de aquella copa amarga que el Padre me ha dado" — ese texto es **3 Nefi 11:11**, capítulo
  distinto del mismo libro.
- Una cita etiquetada "Alma 37:33" resultó ser **Alma 38:10-11** (consejo de Alma a Shiblón, no a
  Helamán) — mismo libro, capítulo distinto, incluso distinto destinatario.
- Dos lecciones distintas citaban "Alma 34:9-10"/"Alma 34:10" con el mismo texto, que en realidad
  era **2 Nefi 9:6-7** — un libro distinto, probablemente porque el autor original quiso hacer una
  referencia cruzada de apoyo y anotó mal el libro.
- Una cita etiquetada "3 Nefi 12:19-20" no correspondía a nada real de 3 Nefi (que en esa parte
  del Sermón del Templo reemplaza el pasaje paralelo por texto distinto): era **Mateo 5:19**.

**Método** (no hay atajo automático, pero sí una disciplina que ahorra vueltas en falso):

1. Generá una hipótesis. El conocimiento del propio modelo del contenido de Escrituras suele
   alcanzar para una primera hipótesis razonable (una frase distintiva del texto guardado, tipo
   "las puertas del infierno no prevalecerán" o "reposo del Señor", suele bastar para ubicar el
   área correcta). **Una hipótesis no verificada nunca se escribe** — es solo el punto de partida.
2. Verificá la hipótesis con `npx tsx scripts/ver-versiculo.ts <url-del-capitulo-candidato> <versiculos>`.
   Si no calza, probá el capítulo anterior/siguiente del mismo libro, o el libro que más se repita
   en citas de apoyo de esa lección (D&C dentro de una lección de Libro de Mormón, Mateo dentro de
   una de 3 Nefi, etc.).
3. Si dos lecciones distintas citan el mismo texto (parafraseado distinto) bajo referencias
   distintas, es una señal fuerte de que ambas están mal y comparten la misma fuente real — buscá
   una vez y aplicá la misma corrección a las dos.
4. Si no aparece nada convincente tras 2-3 hipótesis razonables, dejalo documentado como pendiente
   con el texto guardado completo (para que la próxima sesión no tenga que releerlo desde el
   archivo) en vez de seguir adivinando sin verificar.

## 5. Supuestos y límites del script (para no confiar ciegamente)

- **Asume que `id="pN"` del sitio corresponde al versículo N.** Es cierto en todos los libros y
  capítulos verificados en DyC-1 (Antiguo y Nuevo Testamento, Libro de Mormón, Doctrina y
  Convenios), pero no se probó exhaustivamente en libros con encabezados o superíndices poco
  comunes. Si un curso nuevo empieza a marcar `REVISAR_MANUAL` en un patrón raro y sistemático
  (por ejemplo, siempre "un versículo antes"), revisar primero esta suposición antes de asumir
  que el contenido está mal.
- **Solo cubre citas con `link`.** Las que no tienen `link` quedan afuera — para esas hace falta
  el mismo trabajo de búsqueda que usan las citas de líder (buscar el discurso/versículo antes
  de poder verificar nada).
- **El umbral de 0.85 para auto-corregir es conservador a propósito.** Prioriza no aplicar un
  cambio dudoso por sobre corregir automáticamente el 100 %. Bajarlo generaría más
  `AUTO_CORREGIBLE` pero con más riesgo de que alguno sea en realidad una referencia distinta
  parecida por casualidad — no se recomienda sin revisar antes una muestra a mano.
- **Necesita acceso a internet** (usa `fetch` de Node directamente contra
  `churchofjesuschrist.org`). Si el sitio empieza a devolver 503 de forma sostenida (no
  intermitente), el script reintenta con espera creciente pero no indefinidamente — correr de
  nuevo más tarde si `SIN_CAPITULO` queda con muchos casos.

## 6. Extender esto a otro curso

No hace falta nada nuevo: `audit-escrituras.ts` ya recorre cualquier `categoryId` de
`lib/content/registry.ts`. El único costo real es el tiempo de descarga (unos 2 segundos por
capítulo único, para no saturar el sitio) — para un curso con ~200 citas y ~180 capítulos
distintos, calculá 6–10 minutos de descarga en segundo plano, y después el `fix` es instantáneo.

Candidato obvio para seguir: **Libro de Mormón**, porque sus citas de líder ya están cerradas
(ver `AUDITORIA-citas-libro-de-mormon.md`) y es el curso más grande después de Doctrina y
Convenios.
