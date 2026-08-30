> **Actualización (29-ago-2026):** las 16 anomalías listadas más abajo se revisaron una por una
> contra el capítulo real. 14 de las 16 ya estaban correctas (el `texto` ya era literal); las
> otras 2 (`mosiah-11-17-intro.json` y la cita de portada en `portada-libro-mormon.json`) se
> corrigieron. Detalle completo en
> [`../../../docs/auditorias/AUDITORIA-escrituras-libro-de-mormon.md`](../../../docs/auditorias/AUDITORIA-escrituras-libro-de-mormon.md),
> que además cubre `libro-de-mormon-2`. Este archivo queda como registro histórico de la sesión
> original del 28-ago.

# Auditoría de citas de escritura — Libro de Mormón 1

## Objetivo original

El usuario pidió (en el chat, vía skill `seminary-enrichment`): revisar todas las citas de escritura (`secciones[].tipo == "escrituras"` → `citas[]`) de las lecciones en `lib/content/libro-de-mormon-1/*.json`, porque varias tenían el campo `texto` parafraseado en vez del texto EXACTO y LITERAL que aparece en la página oficial indicada por el campo `link` (churchofjesuschrist.org).

**Alcance:** solo el campo `texto` dentro de `citas[]`, en secciones `tipo: "escrituras"`. No se toca `contexto`, `enseñanza`, `conclusion`, `cuestionario`, `questions`, ni `referencia`/`link`.

## Estado: AUDITORÍA COMPLETA (2026-08-28)

**230 / 230 citas confirmadas** (corregidas o verificadas como ya-literales) = **100%**.

Los 78 archivos con secciones `escrituras` fueron revisados en su totalidad: cada `texto` fue comparado contra el texto literal de la página oficial (vía WebFetch) y, cuando difería, corregido con `Edit`. `portada-libro-mormon.json` y `repaso-dd-1.json` (los últimos 2 pendientes) se cerraron en el último lote.

No queda trabajo de auditoría pendiente. Lo que queda es la revisión humana de las anomalías de referencia/versículo listadas más abajo (la corrección automática ya ajustó el `texto` para que coincida con la `referencia`/`link` tal como estaban, pero en esos casos vale la pena confirmar si la referencia/link originalmente pretendida era otra).

Nota: 13 de los 91 archivos de la carpeta no tienen secciones `escrituras` en absoluto (`secciones: []` o sin ese tipo de sección) — no se tocan porque no hay nada que auditar. Ejemplos confirmados vacíos: `alma-23.json`, `alma-26.json`, `alma-29.json`, `alma-30-1-29.json`, `alma-30-30-60.json`, `alma-31-1-11.json`, `alma-31-12-38.json`.

## Cómo re-verificar (referencia, no hay trabajo pendiente)

La auditoría ya está completa (ver arriba). Esta sección queda como referencia por si en el futuro se agregan nuevas lecciones/citas a la carpeta, o si querés volver a chequear que nada se haya modificado desde entonces.

1. **Verificar el estado actual** corriendo este script (usa el snapshot original guardado en este mismo directorio: `_auditoria-snapshot-original.json`, que tiene el `texto` de las 230 citas originales *antes* de esta auditoría — sirve como referencia histórica, no para detectar citas nuevas que se agreguen después):

```python
import json, os
from collections import defaultdict

snapshot_path = r"C:\Users\axelh\OneDrive - Church of Jesus Christ\Aulasei\lib\content\libro-de-mormon-1\_auditoria-snapshot-original.json"
content_dir = r"C:\Users\axelh\OneDrive - Church of Jesus Christ\Aulasei\lib\content\libro-de-mormon-1"

with open(snapshot_path, encoding="utf-8") as f:
    original = json.load(f)

orig_by_file = defaultdict(list)
for c in original:
    orig_by_file[c["file"]].append(c)

for fname in sorted(orig_by_file.keys()):
    citas = orig_by_file[fname]
    fpath = os.path.join(content_dir, fname)
    with open(fpath, encoding="utf-8") as f:
        data = json.load(f)
    secciones = data.get("secciones", [])
    unchanged = []
    for c in citas:
        si, ci = c["seccionIndex"], c["citaIndex"]
        current_texto = secciones[si]["citas"][ci]["texto"]
        if current_texto == c["texto"]:
            unchanged.append(c["referencia"])
    if unchanged:
        print(f"{fname}: {unchanged}")
```

   **Importante — falso positivo conocido:** este script solo puede detectar *ediciones* (texto actual ≠ texto original de 2026-08-28). Si al día de hoy corrés esto y aparecen 14 archivos con 1-3 referencias cada uno, es esperable — son las citas que ya eran literales desde el principio y por eso nunca se editaron (quedan documentadas en la lista de abajo, sección "Cosas a tener en cuenta"). Si aparece algo *nuevo* que no está en esa lista, ahí sí puede ser una cita agregada después de esta auditoría, o una modificada manualmente que haya vuelto a desviarse del texto oficial.

2. Si hace falta corregir algo, lanzar un subagente (`general-purpose`, vía `Agent` tool) con este proceso:
   - Leer el archivo JSON.
   - Para cada cita en `secciones[].citas[]` (tipo `escrituras`): usar **WebFetch** sobre la URL de `link`, pidiendo explícitamente el texto LITERAL/VERBATIM del rango de versículos indicado por el parámetro `id=pN` o `id=pN-pM` de la URL, sin parafrasear.
   - Si WebFetch rechaza el pedido por "fair use" (pasa seguido con rangos largos), pedir los versículos de a uno o de a dos y concatenar.
   - Comparar contra el `texto` actual; si difiere, corregir con `Edit` (reemplazo puntual de string, nunca reescribir el archivo entero).
   - Prestar atención a desfases de número de versículo (ej. no confundir v.17 con v.18).
   - Mantener acentos/puntuación exactos del original en español (`lang=spa`).

3. Cuando termine, volver a correr el script del paso 1 para confirmar.

## Cosas a tener en cuenta (aprendidas durante esta sesión)

- **Rate limits:** en esta sesión se pegó dos veces contra límites de la API (uno semanal de cuenta, uno de sesión) al correr 6–7 subagentes en paralelo simultáneamente. Lanzar en lotes de 8–9 archivos por subagente funcionó bien; si vuelve a pasar, el diff del paso 1 permite retomar exactamente donde quedó, sin perder ni duplicar trabajo.
- **Filtro de contenido:** un agente se cortó una vez con `400 Output blocked by content filtering policy` sin causa clara aparente (no relacionado con el contenido religioso en sí, parece). Reintentar con fetches más chicos (verso por verso) lo resolvió.
- **WebFetch es confiable si se le pide explícitamente texto verbatim** (se verificó cruzando contra el HTML crudo de la página al principio de la auditoría). Ocasionalmente el modelo intermedio de WebFetch rechaza pedidos de rangos largos por "fair use" — pedir de a menos versículos lo evita.
- Las páginas de escritura de churchofjesuschrist.org son server-rendered (el texto está en el HTML crudo, no requiere ejecutar JS).

## Citas que ya eran literales desde el origen (no se editaron, pero sí se verificaron)

Estas son las 14 citas que el script de diff del paso 1 sigue marcando como "sin cambios respecto al original" — no porque falten, sino porque un agente las comparó con WebFetch contra la página oficial y ya coincidían exactamente, así que no requerían `Edit`:

- `2-nefi-2-17-26.json` — 2 Nefi 2:25
- `2-nefi-28-27-32.json` — 2 Nefi 28:31; Doctrina y Convenios 50:24
- `alma-7-14-27.json` — Alma 7:24
- `alma-9.json` — Doctrina y Convenios 82:3
- `dd-1-nefi-3-7.json` — Filipenses 4:13
- `dd-2-nefi-2-25.json` — 2 Nefi 2:25
- `dd-alma-7-11-13.json` — Mateo 11:28
- `dd-mosiah-2-17.json` — Mosíah 2:17
- `dd-mosiah-2-41.json` — Doctrina y Convenios 130:20–21
- `dd-mosiah-4-9.json` — Mosíah 4:9; Proverbios 3:5–6; Isaías 55:8–9
- `mosiah-2-1-18.json` — Mosíah 2:17–18
- `mosiah-3-19.json` — Mateo 18:3
- `mosiah-4-9-10.json` — Mosíah 4:9; Mosíah 4:10
- `repaso-dd-9-10.json` — Mosíah 26:22

## Anomalías encontradas que requieren revisión manual (no resueltas automáticamente)

En estos casos, el `texto` original **no correspondía en absoluto** al versículo indicado por `referencia`/`link` (parecía pertenecer a otro versículo o pasaje). Los agentes corrigieron el `texto` para que coincida con lo que dice literalmente la referencia/link ya citados, pero **no cambiaron `referencia` ni `link`** — queda a criterio humano decidir si la cita original quiso apuntar a otro pasaje y corregir la referencia/link en cambio.

1. **`alma-5-1-32.json`** — "Alma 5:15" (`referencia` y `link` dicen v.15) tenía contenido del v.16. El propio array `questions` del mismo archivo atribuye esa misma frase a "Alma 5:16", lo que sugiere que la intención original pudo haber sido citar el v.16.
2. **`testigos-libro-mormon.json`** — "2 Nefi 27:12–14" y "Éter 5:2–4" tenían texto que no corresponde a esos versículos (parecía mezclado con la redacción de Éter 5:4). También "Doctrina y Convenios 5:7" tenía contenido que corresponde más bien a D. y C. 5:4.
3. **`testimonio-jose-smith.json`** — mismos dos casos: "2 Nefi 27:12–13" y "Éter 5:2–4" con texto no correspondiente.
4. **`repaso-dd-4.json`** — "Jacob 4:6" tenía en realidad la frase de **Moroni 10:5** ("por el poder del Espíritu Santo podéis conocer la verdad de todas las cosas").
5. **`repaso-dd-5-6.json`** — "Jacob 2:18-19" tenía en realidad la frase de **Mateo 6:33** ("buscad primeramente el reino de Dios").
6. **`jacob-5-54-77-6-1-13.json`** — "Jacob 6:12" tenía en realidad contenido de **Jacob 4:11**.
7. **`mosiah-11-17-intro.json`** — "Mosíah 12:33" se parecía más a Mosíah 12:29.
8. **`mosiah-12-13.json`** — tres casos: "Mosíah 12:34" se parecía a 12:29; "Mosíah 13:12" era en realidad **13:20**; "Mosíah 13:24" era en realidad **13:28**.
9. **`mosiah-19-20.json`** — "Mosíah 19:20" no correspondía a ningún versículo identificable cerca (el agente no pudo determinar la fuente original).
10. **`alma-1-19-33.json`** — "Alma 1:27" tenía en realidad contenido de **Alma 1:30**.
11. **`jacob-1.json`** — "Jacob 1:6–8" tenía en realidad contenido de **Jacob 1:19**.
12. **`2-nefi-2-26-30.json`** — "2 Nefi 2:30" tenía en realidad contenido de **2 Nefi 2:28**.
13. **`adquirir-conocimiento-3.json`** — "Jacob 7:10–12" tenía parte de texto no encontrado literalmente en el capítulo (posible invención/paráfrasis libre mezclada con Jacob 7:9).
14. **`repaso-dd-1.json`** — "2 Nefi 32:8–9" tenía texto que no correspondía en absoluto (parecía tomado de otro pasaje, similar a 3 Nefi 18:20).
15. **`portada-libro-mormon.json`** — "1 Nefi 13:40–41" decía "la boca del judío" en vez de "boca del Cordero" (paráfrasis inexacta, no solo de redacción). "2 Nefi 29:8" y "Mormón 5:14" tenían texto que no correspondía en absoluto a esos versículos.
16. **`portada-libro-mormon.json`** — la cita "Portada del Libro de Mormón" (sin `id` de versículo, es la página de portada) se reconstruyó combinando fragmentos 100% literales de la portada oficial en la misma estructura de 4 partes que ya tenía el original (unidos con "…", igual que el archivo original). Al no haber anclas de versículo, esto implicó una decisión editorial sobre qué fragmentos incluir — vale la pena una revisión manual rápida de este caso en particular.

## Archivos con `escrituras` (78 de 91)

Todos confirmados al 100%. Los 13 archivos restantes de la carpeta no tienen sección `escrituras` (`secciones: []` o sin ese tipo), así que no había nada que auditar en ellos.
