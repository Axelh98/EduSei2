# Completitud de contenido — libro-de-mormon-2

Seguimiento del enriquecimiento de `conclusion`, `cuestionario` (6 preguntas), `quiz` (7 preguntas)
y `enseñanza` (cita de líder verificada) en las 68 lecciones del curso que están en `_manifest.json`
(por lo tanto alcanzables desde el sitio). Las 43 lecciones fuera del manifiesto (ids pares no listados)
quedan excluidas de esta ronda — ver `docs/auditorias/PLAN-DE-AUDITORIA.md` §1.1.

Reglas de generación: `docs/auditorias/COMO-AUDITAR-CONTENIDO.md` (qué falta) y la skill
`seminary-enrichment` (cómo generarlo — spec exacta de cuestionario, quiz, conclusion, y la regla de
**nunca inventar una cita de líder**: si no se encuentra una real y verificable, se omite `enseñanza`
con una nota, no se rellena con algo inventado).

Iniciado: 30-ago-2026. Se trabaja en lotes de 50 lecciones; al completar cada lote se pausa para
que el usuario decida si continuar.

## Estado por lote

- **Lote 1** (leccion-21-1 → leccion-33-1, 50 lecciones): ✅ completo (30-ago-2026)
- **Lote 2** (leccion-33-2 → leccion-36-5): ✅ **completo** (31-ago-2026). Las 6 semanas con problema
  estructural (24-33, ver §3) se resolvieron primero; las semanas 34-36 (15 lecciones, sin problema
  estructural) se completaron después en la misma sesión.
- **Reconstrucción estructural (§3)**: paso 1 (semana 24) ✅, paso 2 (semanas 31-32) ✅, paso 3
  (semana 33) ✅, paso 4 completo — semanas 25, 26, 27, 28, 29 y 30 ✅ (31-ago-2026). **Las 6 semanas
  con problema estructural (24-33) están todas resueltas.**
- **Curso completo**: con el cierre de semanas 34-36, **las 68 lecciones alcanzables del curso
  `libro-de-mormon-2` están completas** (conclusion, cuestionario de 6, enseñanza donde existe una cita
  real verificable, y quiz de 7). Manifiesto en 78 lecciones (68 + 10 días agregados durante la
  reconstrucción estructural que no existían en el manifiesto original). Quedan pendientes solo los
  ítems de la sección "Notas de la sesión" más abajo (script de desplazamiento sobre semanas 33+, y
  commit de git).
- **Estado de git**: todo el contenido de lecciones/manifiesto/UI hasta acá (Lote 1 completo +
  reconstrucción de semanas 24-27 y 31-33) está commiteado en `182ab88` (31-ago-2026). La
  reconstrucción de semanas 28-30 (esta sesión) **todavía no tiene commit** — ver notas de sesión al
  final. Los `.md` de `docs/auditorias/` (incluido este archivo) **no** están commiteados — dependen
  solo de la sincronización de OneDrive. Si retomás en otra PC y este archivo no está actualizado,
  puede ser un problema de sync, no de que el trabajo no se haya hecho: cruzar con `git log` para
  confirmar hasta dónde llegó el código.

---

## 0. ⏸️ HALLAZGO ESTRUCTURAL (30-ago-2026) — leer antes de continuar cualquier lote

**Si estás retomando esto en una sesión nueva:** este §0 completo es el hallazgo original (30-ago),
ya resuelto en método — no hace falta releerlo para seguir. Andá directo a "Estado por lote" (arriba
del todo) y a la última entrada de "Notas de la sesión" (al final del documento), que dice
explícitamente qué semana sigue. §0.3 y §0.5 sirven de referencia rápida (datos del Excel ya
extraídos) para las semanas 28-30 que faltan, así que probablemente ni siquiera necesites volver a
abrir el Excel.

**Excel real, ubicación actual:** `Calendarización Seminario 2024.xlsx`, en
`C:\Users\axelh\Desktop\Nueva carpeta\`, hoja "2 SemestreLDM 2024 Argentina" (confirmado 31-ago-2026
que es la misma fuente que el archivo original de más abajo, que ya no existe en esa ubicación —
si esta ruta tampoco existe cuando retomes, pedile la ubicación actual al usuario antes de asumir
nada; no hace falta si vas a usar §0.3/§0.5, que ya tienen los datos extraídos).

A mitad del Lote 2, el usuario había compartido el calendario oficial
(`Calendarización Libro de Mormon Segundo Semestre.xlsx`, originalmente en `C:\Users\axelh\Downloads\`
— **esa ruta ya no es válida**, ver arriba) para confirmar qué lecciones deberían existir. Comparar
ese Excel contra `_manifest.json` destapó un problema más grande y más importante que el de
completitud que motivó este documento: **desde la semana 24 hasta la 33, el manifiesto corta los
días de clase de forma distinta al calendario oficial**, y en dos semanas (31 y 32) el `chapterUrl`
apunta a una carpeta del manual que **no existe** y redirige silenciosamente a la portada genérica
del manual (mismo HTTP 200, así que no salta como error — hay que comparar la URL final tras seguir
redirecciones, no solo el status code).

**Decisión del usuario:** reconstruir las semanas 24–33 completas para que cada lección del sitio
corresponda a un día de clase real del Excel, con su `chapterUrl` real y correcto — no solo
completar `conclusion`/`cuestionario`/`quiz` sobre la estructura actual (que en esas semanas está
mal cortada). Esto es de mayor prioridad que seguir el Lote 2 semana 34-36 en su forma actual.

### 0.1 Qué es cada cosa

- **El Excel** es la fuente de verdad de qué debe enseñarse cada día de clase (5 días por semana,
  semanas 21 a 33 del segundo semestre 2024 Argentina). Filas 8-57 de la única hoja.
- **`_manifest.json`** es lo que arma la navegación real del sitio — `registry.ts` lee solo esto.
  Tiene 68 lecciones (`leccion-<semana>-<día>`, con id de día siempre impar: 1,3,5,7,9).
- **Los "43 huérfanos"** (ids de día par: `leccion-21-2`, `-4`, etc.) son archivos `.json` con
  contenido real y bien escrito, pero que `_manifest.json` no lista — el sitio nunca los muestra.
  **No son basura**: en la revisión de esta sesión, varios contienen exactamente el día de clase
  real que falta según el Excel (ver §0.3). Antes de generar contenido nuevo para un día faltante,
  revisar primero si ya existe como huérfano.

### 0.2 Verificación de `chapterUrl` — cuáles están rotos

Script usado (queda en el scratchpad de esa sesión, recrear si hace falta): para cada `chapterUrl`
de las 68 lecciones, seguir redirecciones con `curl -sL -o /dev/null -w "%{url_effective}"` y
marcar como roto si la URL final es la portada genérica
(`.../book-of-mormon-seminary-teacher-manual-2024?lang=spa`) en vez de una página específica.

**Resultado: 62/68 correctos, 6 rotos** — los 6 son consecutivos y todos en semanas 31-32:

| id | Carpeta usada (rota) | Carpeta real confirmada |
|---|---|---|
| leccion-32-1, 32-3, 32-5, 32-7 | `40-3-nephi-11-17` | `40-3-nephi-12-16` |
| leccion-33-1, 33-2 | `41-3-nephi-18-23` | `41-3-nephi-17-19` |

Confirmado con `web_search` (no con resumen de IA sobre la página, que en un intento previo alucinó
una estructura de unidades ligeramente distinta a la real — verificar siempre con la URL exacta
devuelta por la búsqueda, o con `curl`, antes de dar una carpeta por buena).

**Importante:** que un `chapterUrl` "funcione" (200 y llega a una página real) no garantiza que sea
la página *correcta* para esa lección — de las 62 que sí resuelven, todavía no se verificó una por
una si el número de página específico coincide con el tema que el Excel asigna a ese día. Se
verificó explícitamente que semanas 21-23 sí coinciden (ver tabla de abajo) y que 34-36 también.
Semanas 24-30 no están verificadas número de página por número de página todavía, solo a nivel de
carpeta de unidad.

### 0.3 Estado semana por semana (estructura de días, Excel vs. manifiesto)

| Semana | ¿Coincide con el Excel? | Nota |
|---|---|---|
| 21, 22, 23 | ✅ Coincide exactamente | Ya verificado y con contenido completo (Lote 1) |
| 24 | ✅ Reconstruida (30-ago-2026) | Días 1-2 ya coincidían. Días 3-5 reconstruidos: `leccion-24-5` ampliada a "Alma 47–48" (ya citaba Alma 48, solo faltaba el título/contexto), `leccion-24-7` reemplazada por "Evalúa tu aprendizaje 6" (nuevo `type`), `leccion-24-9` reemplazada por "Repaso del Dominio de la doctrina 13 y 14" (nuevo `type`, repasa Alma 39:9 y Alma 41:10). El contenido desplazado (DD Alma 46:12–13 y Alma 51–52) se preservó en `leccion-24-2.json` y `leccion-24-4.json` respectivamente — ver §0.5. |
| 25 | ✅ Reconstruida (31-ago-2026) | 4 días reales (día1 FERIADO): `leccion-25-1` (Repaso DD 15 y 16, reemplaza slot de "Alma 53–54"), `25-3` (Alma 56), `25-5` (Alma 57, ya no es lección de Dominio de la Doctrina — ese DD de "Alma 56:47–48" no existe en el manual 2024, ver nota de sesión), `25-7` (Alma 59–61, recortado de "59–63"). `leccion-25-9` (Helamán 1–2) se retiró del manifiesto — no correspondía a ningún día real de esta semana, es el tema real de semana 26 día 1; queda como huérfano intacto para esa tramo. Confirmado con el Excel real (hoja "2 SemestreLDM 2024 Argentina") que el día 5 es "Repaso del Dominio de la doctrina **15 y 16**", no "13-14" como decía esta fila antes — era un error de transcripción de la sesión anterior. |
| 26 | ✅ Reconstruida (31-ago-2026) | 5 días reales, sin feriado: `leccion-26-7` (Helamán 1–4;6, `chapterUrl` movido de 355→351), `26-1` (Helamán 3;6, `chapterUrl` 352 sin cambios), `26-3` (Helamán 5:1–13, recortado, `chapterUrl` 353 sin cambios), `26-5` (DD Helamán 5:12, sin cambios — único de la semana ya correcto), `26-9` (Helamán 5:14–52, huérfano incorporado, `chapterUrl` 355). El orden del array en `_manifest.json` sigue el orden real de los días, no el sufijo numérico del id (`26-7` va primero). |
| 27 | ✅ Reconstruida (31-ago-2026) | 5 días reales, sin feriado: `leccion-27-1` (Helamán 7–9, sin cambios), `27-3` (Helamán 8, huérfano `27-2` reciclado), `27-5` (Helamán 10, contenido movido desde la vieja `27-3`), `27-7` (Helamán 11–12, le faltaban las `secciones` — huérfano `27-4` reciclado), `27-9` (Repaso DD 17 y 18, id nuevo). Los `chapterUrl` de `27-1/27-3/27-5/27-7` ya apuntaban a páginas reales de la unidad `36-helaman-7-12` (361-364), pero `27-3`/`27-5` tenían el contenido cruzado entre sí — se resolvió intercambiando contenido, no `chapterUrl`. |
| 28 | ✅ Reconstruida (31-ago-2026) | 5 días reales, sin feriado, unidad `37-helaman-13-16` (371-375-teacher): `leccion-28-1` (Helamán13-16 overview, ya tenía el `chapterUrl` correcto), `28-3` (Helamán13 pt1 "La misericordia del Señor"), `28-5` (Helamán13 pt2 "Repent and Be Saved" — reemplazó el contenido viejo de `28-3`, que se reubicó acá), `28-7` (Helamán14, unificando lo que antes eran "Parte1"/"Parte2"), `28-9` (Repaso DD 19 y 20, id nuevo). El manual oficial llama a `375-teacher` "Doctrinal Mastery Review **18**: Understand Doctrine" — mismo patrón de numeración distinta ya visto en semanas 24-25, se mantuvo el título local del Excel. |
| 29 | ✅ Reconstruida (31-ago-2026) | 5 días reales, sin feriado, unidad `38-3-nephi-1-7` (381-385-teacher): `leccion-29-1` (3Nefi1, reemplazó "Helamán 15-16" que no correspondía a ningún día real de esta semana), `29-2` (3Nefi2-5, contenido ya existente expandido), `29-3` (3Nefi6-7, contenido ya existente expandido), `29-4` (Evalúa tu aprendizaje 7, reescrita con las citas reales del rango Alma53–3Nefi7 en vez de 2 Nefi 32:3/DyC 84:85 que no correspondían), `29-5` (Repaso DD 21 y 22, real "Doctrinal Mastery Review 19: Apply..."). A diferencia de semana 28, acá los 5 días del Excel mapearon 1 a 1 y en orden con los ids ya existentes `29-1..29-5` — no hizo falta reordenar. |
| 30 | ✅ Reconstruida (31-ago-2026) | 5 días reales, sin feriado, unidad NUEVA `39-3-nephi-8-11` (391-395-teacher, no la unidad 38 que el manifiesto viejo reutilizaba por error): `leccion-30-1` (3Nefi8-10, "La voz del Salvador en la oscuridad"), `30-2` (3Nefi11:1-11, "Yo soy Jesucristo" — recortada, la parte de tocar las heridas se movió a `30-4`), `30-3` (DD 3Nefi11:10-11, esta vez SÍ es un DD real de la lista oficial de 12 pasajes), `30-4` (3Nefi11:12-17, "Venid a mí"), `30-5` (3Nefi11:18-41, "Jesucristo declara Su doctrina" — reciclado del contenido de bautismo que antes estaba mal ubicado en `30-4`). Los 3 días viejos del manifiesto (`30-1/30-3/30-5`) tenían contenido que en realidad duplicaba lo ya resuelto en semana 29 (3Nefi1 y Gadiantón) — se preservaron en huérfanos `30-6/30-7/30-8` de todas formas, aunque sean redundantes con `29-1`/`29-2`. |
| 31 | ✅ Reconstruida (30-ago-2026) | 5 días: `leccion-31-1` (3Nefi12:1-16), `31-3` (3Nefi12:17-48), `31-5` (DD 3Nefi12:48), `31-7` (3Nefi13-14), `31-9` (3Nefi15-16, id nuevo). `chapterUrl` corregido a la carpeta real `40-3-nephi-12-16`. Contenido reciclado de los huérfanos `21-2,4,6,8,10`. |
| 32 | ✅ Reconstruida (30-ago-2026) | 5 días: `leccion-32-1` (3Nefi17), `32-3` (3Nefi18:1-14), `32-5` (3Nefi18:15-39;19:19-29), `32-7` (Éter12:1-22), `32-9` (DD Éter12:6, id nuevo). `chapterUrl` corregido a `41-3-nephi-17-19` para días 1-3; Éter12:1-22 y su DD **no tienen página propia en el manual** — ambos apuntan a `48-ether-12-15/480-teacher` (la "Reseña" de la unidad, que dice explícitamente "parte del material de Éter 12 se incluyó en la semana anterior"). Contenido reciclado de los huérfanos `22-2,4,6,8,10`. |
| 33 | ✅ Reconstruida (30-ago-2026) | 4 días reales (día1 FERIADO): `leccion-33-1` (3Nefi23), `33-2` (3Nefi24), `33-3` (Éter12:23-27), `33-4` (DD Éter12:27). Confirmado: **no es un error del manual**, el calendario argentino simplemente omite 3 Nefi 25-26 (sin día propio, igual que Alma 51-55 en semana 24-25) y salta a Éter 12:23-27 — la unidad 48 del manual reconoce esto explícitamente ("parte del material de Éter 12 se incluyó en la semana anterior" en `480-teacher`). |
| 34, 35, 36 | ✅ Coincide exactamente | Ya verificado — es el resto pendiente del Lote 2 sin problema estructural, solo falta contenido. |

### 0.4 Huérfanos ya identificados como el día real correcto (ejemplos confirmados)

Confirmado leyendo el contenido, no solo el nombre de archivo:

- `leccion-21-2.json` → 3 Nefi 12:1-16 (Bienaventuranzas) = semana 31 día 1 real del Excel.
- `leccion-25-2.json` → Alma 56:47-48 = semana 25 día 2 real del Excel.
- Varios más sin confirmar todavía — hace falta pasar los 43 huérfanos contra el Excel completo
  (mismo método: leer `escrituras.citas[].referencia` de cada huérfano y matchear contra la columna
  "Lecciones y Bloques" del Excel por rango de capítulo) antes de decidir cuáles reciclar tal cual,
  cuáles necesitan ajuste menor, y para qué días no existe ningún huérfano utilizable (esos si
  requieren generación nueva con `seminary-enrichment` desde el `chapterUrl` real).

### 0.5 Mapeo completo de los 43 huérfanos contra el Excel (30-ago-2026)

Se leyó `escrituras.citas[].referencia` de los 43 huérfanos y se comparó contra la columna "Lecciones y
Bloques" del Excel (filas 8-57). Esto ahorra tener que re-derivarlo en cada semana del plan de §3.
**Importante**: el número de semana en el id del archivo huérfano casi nunca coincide con la semana real
a la que pertenece el contenido — no asumir nunca por el nombre del archivo, solo por el tema.

**Semanas ya 100% cubiertas por huérfanos, confirmadas día por día:**

| Semana real | Huérfanos que la cubren (día 1→5) | Nota |
|---|---|---|
| 31 | `21-2, 21-4, 21-6, 21-8, 21-10` | Ya usado para `leccion-21-2` (ver §0.4). Falta ejecutar el resto. |
| 32 | `22-2, 22-4, 22-6, 22-8, 22-10` | Cobertura completa confirmada por cita. |
| 33 | (día1 FERIADO) `23-3, 23-5, 23-7, 23-9` | Día1 no necesita lección. Antes de tocar, investigar el entrelazado con Éter 12 (ver fila de la tabla §0.3). |
| 36 | `26-2, 26-4, 26-6, 26-8, 26-10` | `26-8` (repaso general del semestre) y `26-10` (evaluación final) encajan temáticamente con "Repaso evaluación 2" / "Evaluación 2". |

**Semana 24 → resuelta esta sesión sin necesitar huérfanos** (ver tabla de 68 lecciones): `leccion-34-1`
a `leccion-34-5` ya tenían `contexto`/`escrituras` correctos de fábrica, así que los huérfanos `24-2, 24-4,
24-6, 24-8, 24-10` (mismo tema: 3 Nefi 27 y Moroni 7:44-48) resultaron ser duplicados redundantes, no
piezas faltantes. Se reciclaron `24-2` y `24-4` como contenedores para preservar el contenido desplazado
de `leccion-24-7` (DD Alma 46:12–13) y `leccion-24-9` (Alma 51–52) — ver nota de sesión más abajo. `24-6`,
`24-8`, `24-10` quedan intactos, sin uso claro, no se tocaron.

**Semanas con cobertura parcial — huérfanos confirmados + días sin huérfano (necesitan generación nueva):**

| Semana real | Huérfanos confirmados | Días sin huérfano conocido |
|---|---|---|
| 25 | ✅ **Hecha (31-ago)** — ver Tabla de estado y nota de sesión. La predicción de esta fila (huérfanos `25-2/4/6/8`) resultó parcialmente correcta: `25-4`/`25-6` no se usaron tal cual, terminaron generándose de cero con material del manual real. |  |
| 26 | ✅ **Hecha (31-ago)** — ver Tabla de estado y nota de sesión. Los "D1-D4 sin huérfano" de esta fila en realidad ya tenían contenido reciclable en las lecciones existentes del manifiesto (`chapterUrl` correctos pero desordenados) — no hizo falta generar nada de cero, solo `26-9` (D5) se incorporó como predecía esta tabla. |  |
| 27 | ✅ **Hecha (31-ago)** — ver Tabla de estado y nota de sesión. Mismo hallazgo que semana 26: "D1, D3" de esta fila ya tenían contenido reciclable cruzado entre `27-3`/`27-5`, no necesitaron generación nueva. Solo D5 (`27-9`, id nuevo) se generó desde cero. |  |
| 28 | `28-2`→D2 (Helamán13 pt1), `28-4`→D4 (Helamán14) | D1 (Helamán13-16 overview), D3 (Helamán13 pt2), D5 (Repaso DD19-20) |
| 29 | `29-2`→D2 (3Nefi2-5), `29-3`→D3 (3Nefi6-7), `29-5`→D5 candidato (repaso DD genérico, adaptar a "21 y 22") | D1 (3Nefi1), D4 (Evalúa aprendizaje 7). `29-4` (2 Nefi 32:3, DyC 84:85) no coincide con ningún día de esta semana — contenido suelto, investigar de dónde viene antes de descartarlo. |
| 30 | `30-2`→D2 (3Nefi11:1-11, roza también D3 DD 3Nefi11:10-11), `30-4`→D5 (3Nefi11:18-41, no D4 como el nombre sugeriría) | D1 (3Nefi8-10), D3 (DD 3Nefi11:10-11 — ver si `30-2` alcanza), D4 (3Nefi11:12-17) |

**Patrón reutilizable para "Evalúa tu aprendizaje" y "Repaso del Dominio de la doctrina"**: ninguno de los
43 huérfanos tiene contenido para estos días (son actividades de repaso/autoevaluación, no estudio de un
pasaje nuevo, así que no hay cita de escritura que los delate). Se generan desde cero siguiendo el patrón
usado en `leccion-24-7` y `leccion-24-9` esta sesión: `chapterUrl` real verificado con `curl -sL -w
"%{url_effective}"`, título exacto confirmado con `web_search` (nunca solo con el resumen de `WebFetch`,
que alucinó la página de índice de la unidad en esta sesión), y — para "Repaso DD" — reciclar las citas de
enseñanza y el texto de escritura ya verificados en las lecciones originales de cada Dominio de la
Doctrina que se repasa, en vez de buscar una cita nueva.

Se agregaron dos valores nuevos de `type` al proyecto para estos días: `"Evalúa tu aprendizaje"` (color
`#14B8A6`) y `"Repaso del Dominio de la doctrina"` (color `#EAB308`), en `lib/types.ts` y en los tres
mapas `TYPE_ACCENT`/`TYPE_SHORT` (`components/lesson-card.tsx`, `components/flat-lesson-list.tsx`,
`components/recovery/pending-lesson-card.tsx`).

---

## Tabla de estado (68 lecciones)

| # | Lote | id | Semana | Título | Tipo | Estado inicial (30-ago) | Estado actual |
|---|---|---|---|---|---|---|---|
| 1 | 1 | leccion-21-1 | 21 | Alma 32 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 2 | 1 | leccion-21-3 | 21 | Alma 33 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 3 | 1 | leccion-21-5 | 21 | Alma 34:1–17 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 4 | 1 | leccion-21-7 | 21 | Dominio de la doctrina: Alma 34:9–10 | Dominio de la Doctrina | 🔴 falta: conclusion, cuestionario | ✅ |
| 5 | 1 | leccion-21-9 | 21 | Alma 34:17–41 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 6 | 1 | leccion-22-1 | 22 | Alma 36 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 7 | 1 | leccion-22-3 | 22 | Alma 37 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 8 | 1 | leccion-22-5 | 22 | Alma 37–38 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 9 | 1 | leccion-22-7 | 22 | Alma 39 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 10 | 1 | leccion-22-9 | 22 | Dominio de la doctrina: Alma 39:9 | Dominio de la Doctrina | 🔴 falta: conclusion, cuestionario | ✅ |
| 11 | 1 | leccion-23-1 | 23 | Alma 40 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 12 | 1 | leccion-23-2 | 23 | Alma 41 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 13 | 1 | leccion-23-4 | 23 | Dominio de la doctrina: Alma 41:10 | Dominio de la Doctrina | 🔴 falta: conclusion, cuestionario | ✅ |
| 14 | 1 | leccion-23-6 | 23 | Alma 42, Parte 1 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 15 | 1 | leccion-23-8 | 23 | Alma 42, Parte 2 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 16 | 1 | leccion-24-1 | 24 | Alma 43, 48–50 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 17 | 1 | leccion-24-3 | 24 | Alma 45–46 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ |
| 18 | 1→reconstruida | leccion-24-5 | 24 | Alma 47–48 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario | ✅ (30-ago, reconstrucción: título ampliado de "Alma 47" a "Alma 47–48"; ya citaba Alma 48:11-12/23, se agregó Alma 48:17 y se reescribió el contexto para balancear ambos capítulos) |
| 19 | 1→reconstruida | leccion-24-7 | 24 | Evalúa tu aprendizaje 6 | Evalúa tu aprendizaje (type nuevo) | 🔴 falta: conclusion, cuestionario | ✅ (30-ago, reconstrucción estructural: reemplazó por completo el contenido "Dominio de la doctrina: Alma 46:12–13", que no está en el Excel oficial y se preservó en `leccion-24-2.json`. Sin `enseñanza` — no se encontró cita verificable en el manual 334-teacher, confirmado con WebFetch y web_search) |
| 20 | 1→reconstruida | leccion-24-9 | 24 | Repaso del Dominio de la doctrina 13 y 14 | Repaso del Dominio de la doctrina (type nuevo) | 🔴 falta: conclusion, cuestionario | ✅ (30-ago, reconstrucción estructural: reemplazó por completo el contenido "Alma 51–52", que no tiene día propio en el Excel y se preservó en `leccion-24-4.json`. Repasa Alma 39:9 y Alma 41:10 reciclando texto y citas ya verificadas de `leccion-22-9`/`leccion-23-4`) |
| 21 | 1→reconstruida | leccion-25-1 | 25 | Repaso del Dominio de la doctrina 15 y 16 | Repaso del Dominio de la doctrina (type nuevo) | (reconstrucción total) | ✅ (31-ago, reconstrucción estructural: reemplazó "Alma 53–54", que no es un día real de esta semana — Alma 53 no tiene día propio en el Excel argentino, se preservó en `leccion-25-10.json`. `chapterUrl` real confirmado `345-teacher` = "Repaso del Dominio de la doctrina 16: Poner en práctica los pasajes del Dominio de la doctrina". Repasa los 3 pasajes DD ya enseñados en el curso: Alma 34:9–10, Alma 39:9, Alma 41:10, reciclando texto verificado de `leccion-21-7`/`22-9`/`23-4`) |
| 22 | 1→reconstruida | leccion-25-3 | 25 | Alma 56 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: recortado de "Alma 55–58" a "Alma 56" — el `chapterUrl` ya apuntaba a la página real `342-teacher`, solo hubo que corregir el enfoque temático y agregar la cita del presidente Monson verificada en el manual real) |
| 23 | 1→reconstruida | leccion-25-5 | 25 | Alma 57 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: reemplazó por completo "Dominio de la doctrina: Alma 56:47–48" — ese DD no existe en la lista oficial de 12 pasajes del manual 2024 (confirmado leyendo `345-teacher`), es numeración heredada de un currículo anterior, igual que "Alma 46:12–13" en semana 24. El `chapterUrl` que ya tenía (`343-teacher`) resultó ser, irónicamente, la página real de Alma 57 — ya estaba bien apuntado, solo el título/contenido estaba mal. Ya no es lección de Dominio de la Doctrina, cambia a tipo "Libro de Mormón - Ven Sigueme". Verso 57:20–21/26–27 verificado con WebFetch de scriptures) |
| 24 | 1→reconstruida | leccion-25-7 | 25 | Alma 59–61 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: recortado de "Alma 59–63" a "Alma 59–61" — se quitó una frase de la conclusión que hacía referencia a la carta de Moroni a Ammorón, que es Alma 62, fuera del rango real de esta semana. Resto del contenido ya era correcto, no necesitó reescritura) |
| 25 | 1→retirada | leccion-25-9 | 25 | ~~Helamán 1–2~~ | ~~Libro de Mormón - Ven Sigueme~~ | (retirada del manifiesto) | 🔵 (31-ago: esta lección NO corresponde a ningún día real de semana 25 según el Excel — semana 25 solo tiene 4 días de clase (día 1 feriado). Su contenido, "Helamán 1–2", es en realidad el tema real de semana 26 día 1 ("Helamán 1–4; 6"). Se retiró su entrada de `_manifest.json`; el archivo `leccion-25-9.json` queda intacto en disco como huérfano para reciclar en la tramo de semana 26) |
| — | 1→reconstruida | leccion-25-10 | 25 | Alma 53–54 | Libro de Mormón - Ven Sigueme | (id nuevo) | ✅ (31-ago: contenedor de preservación — contenido desplazado de `leccion-25-1` antes de sobrescribirlo con el Repaso DD 15 y 16. Alma 53 no tiene día propio en el Excel argentino de esta semana, así que este contenido queda como huérfano sin uso inmediato asignado) |
| 26 | 1→reconstruida | leccion-26-1 | 26 | Helamán 3; 6 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: reemplazó "Helamán 3–4" — el `chapterUrl` (`352-teacher`) ya apuntaba a la página real "Así vemos", solo el contenido estaba desalineado (citaba Alma 13:12, ajeno al tema). Reescrito sobre Helamán 3:27–28 y 6:35–36, las dos declaraciones "así vemos" de esta unidad) |
| 27 | 1→reconstruida | leccion-26-3 | 26 | Helamán 5:1–13 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: recortado de "Helamán 5" — tenía mezclado el contenido de 5:1-13 (renuncia de Nefi, roca de Cristo) con el del encarcelamiento (5:14-52), que es el día real de `26-9`. `chapterUrl` (`353-teacher`) ya era correcto, solo se acotó el contenido a Helamán 5:1–13) |
| 28 | 1 | leccion-26-5 | 26 | Dominio de la doctrina: Helamán 5:12 | Dominio de la Doctrina | 🔴 falta: conclusion, cuestionario, quiz | ✅ (este archivo sí tenía contexto/escrituras correctos — único de la semana que no necesitó reconstrucción) |
| 29 | 1→reconstruida | leccion-26-7 | 26 | Helamán 1–4; 6 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: reemplazó "Helamán 6" — el contenido que ya tenía (orgullo de los nefitas por su prosperidad, crecimiento de los ladrones de Gadiantón) resultó ser un encaje temático fuerte para el día real "Hubo mucha contención" una vez recontextualizado; solo se cambió el `chapterUrl` de `355-teacher` (que en realidad es el día 5) a `351-teacher`, la página real de este día) |
| — | 1→reconstruida | leccion-26-9 | 26 | Helamán 5:14–52 | Libro de Mormón - Ven Sigueme | (huérfano incorporado) | ✅ (31-ago: huérfano ya confirmado en §0.5 para este día — encarcelamiento de Nefi y Lehi, nube de oscuridad. Se amplió de 3 a 6 preguntas de cuestionario y se agregaron enseñanza (élder Hales) y quiz de 7; `chapterUrl` `355-teacher` confirmado real) |
| 30 | 1 | leccion-27-1 | 27 | Helamán 7–9 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | ✅ (sin cambios esta sesión — `chapterUrl` 361 ya era el real, contenido ya encajaba con el día 1) |
| 31 | 1→reconstruida | leccion-27-3 | 27 | Helamán 8 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: reemplazó "Helamán 10" — su `chapterUrl` (362) era en realidad el del día 2 real ("Helamán 8"), no el de Helamán 10; el contenido viejo de "Helamán 10" se reubicó en `leccion-27-5`, que sí tiene el `chapterUrl` real de ese día (363). Reescrito sobre el huérfano `27-2`, expandido con la cita verificada del élder Neil L. Andersen) |
| 32 | 1→reconstruida | leccion-27-5 | 27 | Helamán 10 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: reemplazó "Dominio de la doctrina: Helamán 10:4–5" — ese DD no tiene página propia en el manual 2024 (`363-teacher` es en realidad el día 3 real "El Señor bendice a Nefi", contenido más amplio que solo el DD). Ya no es lección de Dominio de la Doctrina. Contenido reciclado del `leccion-27-3` viejo, que ya encajaba mejor acá; el contenido desplazado de esta lección se preservó en `leccion-27-6.json`) |
| 33 | 1→reconstruida | leccion-27-7 | 27 | Helamán 11–12 | Libro de Mormón - Ven Sigueme | (le faltaban por completo las `secciones`) | ✅ (31-ago: `hasStudy` pasó de `false` a `true` — se agregaron contexto/escrituras/enseñanza/conclusion/cuestionario completos, reciclados y expandidos del huérfano `27-4`; el quiz de 7 preguntas que ya tenía de Lote 1 se mantuvo sin cambios) |
| — | 1→reconstruida | leccion-27-9 | 27 | Repaso del Dominio de la doctrina 17 y 18 | Repaso del Dominio de la doctrina | (id nuevo) | ✅ (31-ago: día 5 que no existía en el manifiesto — semana 27 no tiene feriado, necesitaba 5 lecciones y solo tenía 4. `chapterUrl` real `365-teacher` confirmado ("tipo memorizar", distinto del "tipo aplicar" de la semana 25). Repasa los 4 pasajes DD enseñados hasta ahora en el curso, cita verificada del élder Richard G. Scott) |
| 34 | 1→reconstruida | leccion-28-1 | 28 | Helamán 13–16 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: `chapterUrl` (371) ya era el real de Día1 "Comprender a los profetas del Señor" — solo se reescribió contexto/escrituras/enseñanza para que coincidan con ese tema real en vez del contenido viejo sobre materialismo, preservado en `leccion-28-6.json`) |
| 35 | 1→reconstruida | leccion-28-3 | 28 | Helamán 13, Parte 1 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: reemplazó "Helamán 14, Parte 1" — mal titulada, su `chapterUrl` (372) es en realidad Día2 "La misericordia del Señor". El contenido viejo de este id, que sí era el tema real de Día3, se reubicó a `leccion-28-5`) |
| 36 | 1→reconstruida | leccion-28-5 | 28 | Helamán 13, Parte 2 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: reemplazó "Dominio de la doctrina: Helamán 14:29–31" — ese DD no existe en la lista oficial de 12 pasajes del manual 2024, mismo patrón que "Alma 46:12–13"/"Helamán 10:4–5" en semanas anteriores; preservado en `leccion-28-8.json`. Recibió el contenido reubicado de la vieja `leccion-28-3`, que ya era el tema real de este día) |
| 37 | 1→reconstruida | leccion-28-7 | 28 | Helamán 14 | Libro de Mormón - Ven Sigueme | (secciones vacías) | ✅ (31-ago: `chapterUrl` (374) ya era el real. Unifica lo que el manifiesto viejo tenía separado en "Parte 1"/"Parte 2" con `chapterUrl`s de otros días — ahora es un solo día que cubre señales de nacimiento, muerte y albedrío, como el manual real) |
| — | 1→reconstruida | leccion-28-9 | 28 | Repaso del Dominio de la doctrina 19 y 20 | Repaso del Dominio de la doctrina | (id nuevo) | ✅ (31-ago: día 5 que no existía en el manifiesto antes de hoy. `chapterUrl` real `375-teacher` = manual oficial "Doctrinal Mastery Review 18: Understand Doctrine". Repasa los 4 pasajes DD del curso conectándolos entre sí) |
| 38 | 1→reconstruida | leccion-29-1 | 29 | 3 Nefi 1 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: reemplazó "Helamán 15–16", que no es un día real de esta semana según el Excel — se preservó en `leccion-29-6.json`. `chapterUrl` nuevo, unidad `38-3-nephi-1-7`, página 381) |
| — | 2 | leccion-29-2 | 29 | 3 Nefi 2–5 | Libro de Mormón - Ven Sigueme | (contenido ya reciclable, sin manifiesto) | ✅ (31-ago: ya tenía el tema correcto; se expandió cuestionario 3→6 y se agregó enseñanza + quiz de 7. Incorporada al manifiesto por primera vez, `chapterUrl` 382) |
| — | 2 | leccion-29-3 | 29 | 3 Nefi 6–7 | Libro de Mormón - Ven Sigueme | (contenido ya reciclable, sin manifiesto) | ✅ (31-ago: ya tenía el tema correcto; se expandió cuestionario 3→6 y se agregó enseñanza + quiz de 7. Incorporada al manifiesto por primera vez, `chapterUrl` 383) |
| — | 2 | leccion-29-4 | 29 | Evalúa tu aprendizaje 7 | Evalúa tu aprendizaje | (citas de rango equivocado) | ✅ (31-ago: citaba 2 Nefi 32:3 y DyC 84:85, ajenos al rango real "Alma 53–3 Nefi 7" — reescrita con citas del rango real. Sin enseñanza, mismo patrón que `leccion-24-7`. Incorporada al manifiesto, `chapterUrl` 384) |
| — | 2 | leccion-29-5 | 29 | Repaso del Dominio de la doctrina 21 y 22 | Repaso del Dominio de la doctrina | (contenido genérico de fin de semestre) | ✅ (31-ago: reemplazó un contenido genérico de "repaso final" que en realidad corresponde a semanas 35-36. Repasa los mismos 4 pasajes DD que `28-9`, con enfoque de aplicación práctica. Incorporada al manifiesto, `chapterUrl` 385) |
| 39 | 1→reconstruida | leccion-30-1 | 30 | 3 Nefi 8–10 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: reemplazó "3 Nefi 1", que ya estaba correctamente cubierto en `leccion-29-1`. `chapterUrl` nuevo, unidad `39-3-nephi-8-11` recién creada, página 391. Preservado en `leccion-30-6.json`) |
| — | 1→reconstruida | leccion-30-2 | 30 | 3 Nefi 11:1–11 | Libro de Mormón - Ven Sigueme | (contenido correcto pero mezclado con Día4) | ✅ (31-ago: ya tenía el tema real, pero mezclaba "Yo soy Jesucristo" con la invitación a tocar las heridas de 11:12-17 — se recortó al alcance de este día y se expandió cuestionario/enseñanza/quiz. Incorporada al manifiesto por primera vez, `chapterUrl` 392) |
| 40 | 1→reconstruida | leccion-30-3 | 30 | Dominio de la doctrina: 3 Nefi 11:10–11 | Dominio de la Doctrina | (reconstrucción total) | ✅ (31-ago: reemplazó "DD 3 Nefi 1:13-14", otra referencia DD falsa que no existe en la lista oficial de 12 pasajes — mismo patrón que "Alma 46:12-13"/"Helamán 10:4-5"/"Helamán 14:29-31". Esta vez SÍ es un DD real, confirmado en la lista oficial. `chapterUrl` nuevo, página 393. Preservado en `leccion-30-7.json`) |
| — | 1→reconstruida | leccion-30-4 | 30 | 3 Nefi 11:12–17 | Libro de Mormón - Ven Sigueme | (contenido de bautismo, día equivocado) | ✅ (31-ago: tenía contenido real pero del Día5 (bautismo, 11:21-28) en vez del Día4 (tocar las heridas, 11:12-17) — se intercambió con `30-5`: el contenido de bautismo se movió ahí, y este recibió la parte de "tocar las heridas" que sobraba de `30-2`. Incorporada al manifiesto, `chapterUrl` 394) |
| 41 | 1→reconstruida | leccion-30-5 | 30 | 3 Nefi 11:18–41 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (31-ago: reemplazó "3 Nefi 2-4", que ya estaba correctamente cubierto en `leccion-29-2`. Recibió el contenido de bautismo/doctrina de Cristo que estaba mal ubicado en la vieja `30-4`, expandido con la declaración completa de "mi doctrina" (11:32-33). `chapterUrl` nuevo, página 395. Preservado en `leccion-30-8.json`) |
| 42 | 2→reconstruida | leccion-31-1 | 31 | 3 Nefi 12:1–16 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (30-ago: reemplazó "3 Nefi 5–7", que no era el día real. Reciclado y expandido de `leccion-21-2` — cuestionario 3→6, quiz nuevo de 7) |
| 43 | 2→reconstruida | leccion-31-3 | 31 | 3 Nefi 12:17–48 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (30-ago: reemplazó "3 Nefi 8–9". Reciclado y expandido de `leccion-21-4`) |
| 44 | 2→reconstruida | leccion-31-5 | 31 | Dominio de la doctrina: 3 Nefi 12:48 | Dominio de la Doctrina | (reconstrucción total) | ✅ (30-ago: reemplazó "DD 3 Nefi 9:19–20". Reciclado y expandido de `leccion-21-6`; sin página DD propia confirmada en el manual, comparte `chapterUrl` con el día 2) |
| 45 | 2→reconstruida | leccion-31-7 | 31 | 3 Nefi 13–14 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (30-ago: reemplazó "3 Nefi 10–11". Reciclado y expandido de `leccion-21-8`) |
| — | 2→reconstruida | leccion-31-9 | 31 | 3 Nefi 15–16 | Libro de Mormón - Ven Sigueme | (id nuevo) | ✅ (30-ago: día 5 que no existía en el manifiesto antes de hoy. Reciclado y expandido de `leccion-21-10`) |
| 46 | 2→reconstruida | leccion-32-1 | 32 | 3 Nefi 17 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (30-ago: reemplazó "3 Nefi 11–17". Reciclado y expandido de `leccion-22-2`) |
| 47 | 2→reconstruida | leccion-32-3 | 32 | 3 Nefi 18:1–14 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (30-ago: reemplazó "DD 3 Nefi 11:29". Reciclado y expandido de `leccion-22-4`) |
| 48 | 2→reconstruida | leccion-32-5 | 32 | 3 Nefi 18:15–39; 19:19–29 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (30-ago: reemplazó "3 Nefi 12–14". Reciclado y expandido de `leccion-22-6`) |
| 49 | 2→reconstruida | leccion-32-7 | 32 | Éter 12:1–22 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (30-ago: reemplazó "DD 3 Nefi 12:48". Reciclado y expandido de `leccion-22-8`; sin página propia en el manual — usa la Reseña `48-ether-12-15/480-teacher`) |
| — | 2→reconstruida | leccion-32-9 | 32 | Dominio de la doctrina: Éter 12:6 | Dominio de la Doctrina | (id nuevo) | ✅ (30-ago: día 5 que no existía en el manifiesto antes de hoy. Reciclado y expandido de `leccion-22-10`) |
| 50 | 1→confirmada | leccion-33-1 | 33 | 3 Nefi 23 | Libro de Mormón - Ven Sigueme | (ya estaba completa) | ✅ (30-ago: el contenido de esta lección YA era sobre 3 Nefi 23 —"escudriñad diligentemente"— y ya tenía las 6 secciones y 7 preguntas completas del Lote 1. Solo se corrigió el título del manifest, que decía "3 Nefi 15–23", y el `chapterUrl`, que apuntaba a la carpeta rota `41-3-nephi-18-23` en vez de la real `42-3-nephi-20-26/422-teacher`) |
| 51 | 2→reconstruida | leccion-33-2 | 33 | 3 Nefi 24 | Libro de Mormón - Ven Sigueme | (reconstrucción total) | ✅ (30-ago: reemplazó "3 Nefi 18:15–25" — que resultó ser contenido duplicado del mismo tema ya cubierto en `leccion-32-5`, no el día real de esta semana; preservado en `leccion-23-3.json`. Nota histórica: la sesión anterior (ver nota de más abajo) había reescrito esta lección de "Malaquías/diezmos" a "3 Nefi 18:15–25" pensando que ese era el tema real, basándose en el manifiesto de ANTES del hallazgo del Excel — con el Excel ya sabemos que el tema real de este slot es justamente Malaquías/diezmos, así que el contenido reconstruido hoy termina coincidiendo con el que había originalmente, no es casualidad. Reciclado y expandido del huérfano `23-5`) |
| 52 | 2 | leccion-33-3 | 33 | Éter 12:23–27 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | ✅ (30-ago: el contexto/escrituras ya eran correctos y el `chapterUrl` ya apuntaba a la carpeta real `481-teacher`. Se agregó `enseñanza` reciclada del huérfano `23-7`, se agregó `conclusion`, cuestionario 3→6, quiz 5→7) |
| 53 | 2 | leccion-33-4 | 33 | Dominio de la doctrina: Éter 12:27 | Dominio de la Doctrina | 🔴 falta: conclusion, cuestionario, quiz | ✅ (30-ago: el contexto ya era correcto y el `chapterUrl` ya apuntaba a la carpeta real `482-teacher`. Se agregó `enseñanza` y la cita de apoyo 2 Corintios 12:9, reciclados del huérfano `23-9`, se agregó `conclusion`, cuestionario 3→6, quiz 5→7) |
| 54 | 2 | leccion-34-1 | 34 | 3 Nefi 27, Parte 1 | Bloque de Escrituras - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | pendiente |
| 55 | 2 | leccion-34-2 | 34 | 3 Nefi 27, Parte 2 | Bloque de Escrituras - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | pendiente |
| 56 | 2 | leccion-34-3 | 34 | Dominio de la doctrina: 3 Nefi 27:20 | Dominio de la Doctrina | 🔴 falta: conclusion, cuestionario, quiz | pendiente |
| 57 | 2 | leccion-34-4 | 34 | Moroni 7:44–48 | Bloque de Escrituras - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | pendiente |
| 58 | 2 | leccion-34-5 | 34 | Dominio de la doctrina: Moroni 7:45–48 | Dominio de la Doctrina | 🔴 falta: conclusion, cuestionario, quiz | pendiente |
| 59 | 2 | leccion-35-1 | 35 | Mormón 1–2 | Bloque de Escrituras - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | pendiente |
| 60 | 2 | leccion-35-2 | 35 | Moroni 10:1–7 | Bloque de Escrituras - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | pendiente |
| 61 | 2 | leccion-35-3 | 35 | Dominio de la doctrina: Moroni 10:4–5 | Dominio de la Doctrina | 🔴 falta: conclusion, cuestionario, quiz | pendiente |
| 62 | 2 | leccion-35-4 | 35 | Mormón 3 | Bloque de Escrituras - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | pendiente |
| 63 | 2 | leccion-35-5 | 35 | Mormón 3–6 | Bloque de Escrituras - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | pendiente |
| 64 | 2 | leccion-36-1 | 36 | Mormón 7 | Bloque de Escrituras - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | pendiente |
| 65 | 2 | leccion-36-2 | 36 | Mormón 8:1–26 | Bloque de Escrituras - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | pendiente |
| 66 | 2 | leccion-36-3 | 36 | Mormón 8:27–41; 9:1–6, 27–37 | Bloque de Escrituras - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza, quiz | pendiente |
| 67 | 2 | leccion-36-4 | 36 | Repaso evaluación 2 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza | pendiente |
| 68 | 2 | leccion-36-5 | 36 | Evaluación 2 | Libro de Mormón - Ven Sigueme | 🔴 falta: conclusion, cuestionario, enseñanza | pendiente |

## 3. Plan acordado con el usuario para la reconstrucción (30-ago-2026) — seguir en este orden

El usuario decidió explícitamente **reconstruir**, no solo parchear: "revisa si de ese contenido
que no estamos mostrando en el sitio son las lecciones que nos faltan. Lo más importante es que
tengamos el link del manual de esas lecciones, entonces si hay que corregir algo, podemos ir al
material original para hacer los resúmenes." Es decir: primero estructura y `chapterUrl` correctos,
después contenido (reciclando huérfanos donde el tema coincida, generando nuevo solo donde no exista
nada reciclable).

**Orden propuesto y aceptado, retomar en este orden:**

1. ~~**Semana 24**~~ ✅ hecha (30-ago-2026) — el cambio más chico y acotado (solo días 3-5
   desalineados). Confirmó el método antes de escalar a semanas más grandes.
2. ~~**Semanas 31-32**~~ ✅ hechas (30-ago-2026) — carpeta rota corregida (`3-nephi-11-17` →
   `3-nephi-12-16`; `3-nephi-18-23` → `3-nephi-17-19`), 5 días de cada semana reciclando los
   huérfanos ya confirmados (`21-2/4/6/8/10` y `22-2/4/6/8/10`). Ver tabla de 68→70 lecciones y nota
   de sesión.
3. ~~**Semana 33**~~ ✅ hecha (30-ago-2026) — confirmado que no hay error del manual, el calendario
   local simplemente salta 3 Nefi 25-26 sin día propio.
4. Recién con 24, 31, 32 y 33 resueltas, retomar semanas 25-30 (mismo método: Excel → carpeta y
   página real del manual → reciclar huérfano si el tema coincide, si no generar con
   `seminary-enrichment`) y por último cerrar el Lote 2 original (34-36, sin problema estructural,
   solo falta `conclusion`/`cuestionario`/`quiz`).
   - ~~Semana 25~~ ✅ hecha (31-ago-2026) — la más simple de las 6 restantes: solo 4 días reales
     (día1 feriado), 3 de los 4 `chapterUrl` ya apuntaban a la página real sin saberlo.
   - ~~Semana 26~~ ✅ hecha (31-ago-2026) — 5 días reales sin feriado, faltaba una lección entera en
     el manifiesto (huérfano `26-9`). Los 4 `chapterUrl` existentes apuntaban a páginas reales pero
     desordenadas respecto al contenido — se resolvió reordenando, casi sin generar contenido nuevo.
   - ~~Semana 27~~ ✅ hecha (31-ago-2026) — mismo patrón que semana 26: 5 días reales sin feriado,
     faltaba una lección (día 5, repaso DD, id nuevo `27-9`), y dos lecciones existentes (`27-3`/`27-5`)
     tenían el contenido cruzado entre sí.
   - ~~Semana 28~~ ✅ hecha (31-ago-2026) — 5 días reales sin feriado, unidad `37-helaman-13-16`
     completa. El desorden era similar a semana 26/27 (contenido cruzado entre días), más un día 5
     nuevo (repaso DD, id `28-9`). Contenido desplazado preservado en huérfanos nuevos `28-6`/`28-8`.
   - ~~Semana 29~~ ✅ hecha (31-ago-2026) — la más simple de las 6: los 5 días del Excel mapearon
     1 a 1 con los ids `29-1..29-5` ya existentes, en el mismo orden. Solo `29-1` necesitó reemplazo
     total (huérfano nuevo `29-6`); el resto era contenido ya bien encaminado, solo le faltaban
     secciones o tenía citas de Escritura de un rango equivocado.
   - ~~Semana 30~~ ✅ hecha (31-ago-2026) — **última de las 6 semanas de §3 paso 4, sección 24-33
     completa.** A diferencia de todas las semanas anteriores, esta necesitó una unidad del manual
     completamente NUEVA (`39-3-nephi-8-11`) que el manifiesto viejo no usaba en absoluto — reutilizaba
     por error las páginas 381-383 de la unidad 38, que ya le habíamos asignado correctamente a semana
     29 en el paso anterior. Dos de los tres huérfanos existentes (`30-2`, `30-4`) ya tenían el tema
     real correcto (3 Nefi 11) pero con el contenido de tocar-las-heridas y bautismo mezclado entre
     ambos — se resolvió separando por versículo, no generando de cero. El resto (Día1 y el DD) se
     generó nuevo. Con esto, **las 6 semanas de §3 paso 4 (25-30) están completas**, y las 6 semanas
     con problema estructural original (24-33) quedan todas resueltas.

**Antes de escribir contenido para cualquier día**, repetir el patrón que ya funcionó esta sesión:
`chapterUrl` real (verificado con `curl -sL -w "%{url_effective}"` o `web_search`, nunca asumido) →
leer ese manual con WebFetch → si hay un huérfano cuyo tema coincide, usarlo como base y solo
ajustar lo que haga falta → si no hay huérfano utilizable, generar todo nuevo con la spec de
`seminary-enrichment`, citas de líder siempre buscadas y verificadas, nunca inventadas.

## Cómo actualizar esta tabla

Al terminar una lección, reemplazá su celda "Estado actual" por `✅` si quedó completa, o por una nota
breve si se omitió algo a propósito (ej. `✅ (sin enseñanza — no se encontró cita verificable, ver nota en el JSON)`).
No marques ✅ si no corriste `npx tsx scripts/validate-content.ts` sobre el archivo después de editarlo.

## Notas de la sesión

- 30-ago-2026: creado el documento y arrancado el Lote 1.
- 30-ago-2026: **hallazgo importante, requiere decisión humana.** A partir de leccion-25-1 (y en varias
  lecciones siguientes hasta al menos leccion-33-1), las secciones `contexto` y `escrituras` que YA
  EXISTÍAN en el archivo (antes de esta tarea, fuera de mi alcance tocar) no corresponden al tema real
  de la lección según `_manifest.json` — parecen desplazadas, como si contenido de lecciones más
  adelantadas en el curso (p. ej. Moroni 10, Mormón 1–6) se hubiera copiado por error en el lugar de
  lecciones de Alma 53–63 / Helamán / 3 Nefi. El array `questions` (quiz), en cambio, casi siempre SÍ
  coincide con el tema real del manifiesto. Como mi tarea no incluye tocar `contexto`/`escrituras`, en
  cada lección afectada escribí `enseñanza`, `cuestionario` y `conclusion` según el tema REAL (el que
  coincide con `title`/`description` del manifiesto y con el quiz), no según el contexto desplazado que
  ya estaba en el archivo. Esto probablemente amerita una pasada dedicada de `seminary-audit` sobre
  `contexto`/`escrituras` en este curso antes o durante el Lote 2.
- 30-ago-2026: **desplazamiento corregido — Lote 1 cerrado.** A pedido del usuario, se corrigió el
  `contexto`/`escrituras` de las 16 lecciones realmente afectadas (confirmado con un script que compara
  el libro/capítulo de las citas de `escrituras` contra el rango del título en `_manifest.json`, más
  lectura manual para descartar falsos positivos de citas cruzadas legítimas en lecciones "Dominio de
  la Doctrina" — `leccion-22-9` y `leccion-24-7` NO están desplazadas, solo citan escrituras de apoyo
  de otro libro a propósito). Lecciones corregidas: `25-1, 25-3, 25-5, 25-7, 25-9, 26-7, 29-1, 30-1,
  30-3, 30-5, 31-1, 31-3, 31-5, 32-3, 32-5, 33-2`. `26-5` resultó ya estar correcta (no era parte del
  desplazamiento). Método: se usó el `chapterUrl` real de cada lección (manual del maestro) y el sitio
  de Escrituras oficial para obtener contexto y texto de versículos verificado, nunca de memoria. Las
  citas de líder nuevas (`enseñanza`) que hizo falta agregar también se buscaron y verificaron con
  `web_search` antes de usarlas — nunca se inventó ninguna. Se corrigió además `_manifest.json`
  (`questionCount` quedaba desactualizado cada vez que se ampliaba un quiz a 7). **Lote 1 completo
  (50/50)**, más `leccion-33-2` del Lote 2 de rebote. `validate-content.ts` limpio (solo el artefacto
  histórico ya conocido de `libro-de-mormon-1/_auditoria-snapshot-original.json`).
- **Pendiente para una sesión futura, si se decide continuar el Lote 2**: revisar si el mismo patrón de
  desplazamiento aparece en `leccion-33-3` en adelante (no verificado todavía) antes de generar
  `enseñanza`/`cuestionario`/`conclusion`/`quiz` ahí — correr primero el script de detección.
- 30-ago-2026: **Semana 24 reconstruida — primer paso del plan de §3 completo.** Se descargó el Excel con
  `exceljs` (vía Node, sin necesidad de instalarlo: ya estaba en `node_modules`) y se extrajeron las 57
  filas relevantes de una sola vez — quedó como referencia rápida en esta sesión, recrear con el mismo
  método si hace falta releer el Excel. Se verificó con `curl -sL -w "%{url_effective}"` que `333-teacher`,
  `334-teacher` y `335-teacher` (unidad `33-alma-43-52`) sí son páginas reales (no rotas), y con
  `web_search` (no solo `WebFetch`, que alucinó devolviendo contenido de la unidad "Alma 23–29" al pedir el
  índice de la unidad `33-alma-43-52`) se confirmaron sus títulos exactos: "Alma 47–48: Amalickíah y
  Lehonti", "Evalúa tu aprendizaje 6: Alma 17–Alma 52", "Doctrinal Mastery Review 15: Understand and
  Explain" (el manual oficial numera este repaso como "15"; el Excel argentino lo llama "13 y 14" —
  se mantuvo la numeración del Excel en el título ya que es la fuente de verdad curricular local, pero el
  `chapterUrl` apunta a la página real del manual). Se descubrió de paso que `leccion-34-1`…`34-5` ya
  tenían `contexto`/`escrituras` correctos (semana 34 no tiene el problema de desplazamiento que sí afecta
  a 25-33), lo cual volvió redundantes a los huérfanos `24-2/4/6/8/10` (mismo tema, ya cubierto). Se
  aprovecharon dos de esos huérfanos para preservar el contenido desplazado en vez de perderlo. Se mapearon
  los 43 huérfanos completos contra el Excel de una sola vez (quedó en §0.5) para no tener que repetir ese
  trabajo en cada semana futura. Se agregaron dos `type` nuevos al proyecto (`"Evalúa tu aprendizaje"`,
  `"Repaso del Dominio de la doctrina"`) en `lib/types.ts` y los tres mapas de color/abreviatura de la UI.
  `validate-content.ts` limpio (solo el artefacto histórico ya conocido).
  **Siguiente paso según el plan de §3: semanas 31–32** (corregir primero la carpeta rota del `chapterUrl`,
  después recortar los 5 días de cada semana reciclando los huérfanos ya confirmados en §0.5).
- 30-ago-2026: **Semanas 31 y 32 reconstruidas.** Se verificaron con `curl` las URLs reales de las
  unidades `40-3-nephi-12-16`, `41-3-nephi-17-19` y `48-ether-12-15`, y se contra-verificaron los
  títulos con `web_search` (no solo `WebFetch`, que esta vez dio dos títulos distintos y
  contradictorios para la misma URL `402-teacher` — uno vía `web_search`, correcto, "3 Nephi
  12:17–48: I Would That Ye Should Be Perfect", y otro vía `WebFetch`, alucinado, que mezclaba el
  tema de un Dominio de la Doctrina que en realidad no tiene página propia en el manual 2024).
  Se confirmó que el DD "3 Nefi 12:48" del Excel argentino no existe como página separada en el
  manual oficial 2024 (no aparece en ninguna búsqueda de "Dominio de la doctrina" + esa referencia) —
  probablemente es una numeración heredada de una versión anterior del currículo, igual que pasó con
  "Alma 46:12–13" en la semana 24; se resolvió apuntando su `chapterUrl` a la misma página que el día
  de estudio general del mismo capítulo (`402-teacher`). También se confirmó que "Éter 12:1–22" y su
  DD "Éter 12:6" (días 4-5 de la semana 32 real) **no tienen página propia**: la unidad
  `48-ether-12-15` arranca directamente en Éter 12:23 (`481-teacher`), y su página de Reseña
  (`480-teacher`) aclara explícitamente "parte del material de [Éter 12] se incluyó en la semana
  anterior" — se usó esa Reseña como `chapterUrl` para ambos días.
  **Incidente de sesión:** al reciclar los huérfanos `21-2/4/6/8/10` y `22-2/4/6/8/10` hacia
  `leccion-31-*`/`leccion-32-*`, se sobrescribieron con `Write` los 8 archivos que ocupaban esos ids
  (`31-1/3/5/7`, `32-1/3/5/7`) sin leer y preservar antes su contenido — a diferencia del método
  correcto ya usado en la semana 24 (leer → mover a huérfano → recién ahí sobrescribir). Ese
  contenido (3 Nefi 5–7/8–9/10–11 y DD 3Nefi 9:19-20; 3 Nefi 11–17/12–14 y DD 3Nefi 11:29/12:48) no
  tiene commit git intermedio del que recuperarse. Consultado, el usuario confirmó seguir adelante:
  no era contenido del calendario oficial (ninguno de esos 8 días coincidía exactamente con una fila
  del Excel — tenían el mismo problema de corte que motivó toda la reconstrucción), así que no hace
  falta regenerarlo aparte; cuando se aborden las semanas 29-30 reales (que cubren temas parecidos,
  3 Nefi 1-11) se va a generar contenido nuevo específico para esos días de todas formas.
  **Lección para las semanas que siguen: antes de sobrescribir CUALQUIER id con contenido reciclado
  de un huérfano, primero leer el archivo destino completo y, si tiene contenido válido, moverlo a un
  huérfano libre — nunca asumir que un id "va a quedar libre" sin leerlo primero.**
  Se agregaron `leccion-31-9` y `leccion-32-9` (ids nuevos, las semanas pasaron de 4 a 5 días) al
  `generated-map.ts` a mano, ya que `scripts/migration/migrate-content.ts` es un script de migración
  histórica que ya no corre (depende de `lib/data/antiguo-testamento`, eliminado tras la migración) —
  no confundirlo con una herramienta de mantenimiento normal. `validate-content.ts` limpio (716
  lecciones, solo el artefacto histórico ya conocido).
  **Siguiente paso: semana 33** (§3 paso 3 — investigar el entrelazado con Éter 12-15 antes de tocar
  nada; huérfanos `23-3/5/7/9` ya confirmados para los días 2-5).
- 30-ago-2026: **Semana 33 cerrada (paso 3 de §3 completo) — resultó mucho más simple de lo previsto.**
  Se confirmó con `curl`/`web_search` la unidad `42-3-nephi-20-26` (días 2-3: `422-teacher` = 3 Nefi 23,
  `423-teacher` = 3 Nefi 24) y que la unidad `48-ether-12-15` arranca directo en Éter 12:23
  (`481-teacher`), con su Reseña (`480-teacher`) reconociendo explícitamente que parte de Éter 12 ya se
  dio "la semana anterior" — confirma que el entrelazado no es un error, el calendario argentino salta 3
  Nefi 25-26 sin darle día propio (mismo patrón que Alma 51-55). Sorpresa positiva: `leccion-33-1`
  (contenido ya sobre 3 Nefi 23, completo del Lote 1) y `leccion-33-3`/`leccion-33-4` (Éter 12:23-27 y su
  DD, `chapterUrl` ya apuntando a las carpetas reales `481`/`482-teacher`) ya estaban bien encaminadas —
  solo hubo que completar secciones faltantes, no reconstruir desde cero. Solo `leccion-33-2` necesitó
  reemplazo total: tenía "3 Nefi 18:15–25", duplicado exacto del tema ya cubierto en `leccion-32-5`;
  se preservó en `leccion-23-3.json` (siguiendo la regla de leer-antes-de-sobrescribir) y se reemplazó
  por "3 Nefi 24" (Malaquías/diezmos), reciclado del huérfano `23-5`. `validate-content.ts` limpio (716
  lecciones, 3869 preguntas, solo el artefacto histórico ya conocido).
  **Siguiente paso: semanas 25-30** (§3 paso 4 — mismo método: Excel → carpeta y página real del
  manual → reciclar huérfano si el tema coincide según el mapa de §0.5, si no generar con
  `seminary-enrichment`).
- 31-ago-2026: **Semana 25 reconstruida — primera de las 6 semanas de §3 paso 4.** El Excel original
  (`Calendarización Libro de Mormon Segundo Semestre.xlsx`) ya no estaba en Downloads; el usuario
  compartió una copia con otro nombre (`Calendarización Seminario 2024.xlsx`, en
  `C:\Users\axelh\Desktop\Nueva carpeta\`) y se confirmó que es la misma fuente (se releyó la hoja "2
  SemestreLDM 2024 Argentina" completa con `exceljs`, filas 8-57, y coincide con lo ya transcripto en
  §0.3 para semanas 26-30 — sirve como referencia para esas semanas sin tener que releer el Excel de
  nuevo). Se detectó y corrigió un error de transcripción de la sesión anterior: el día 5 de semana 25
  es "Repaso del Dominio de la doctrina **15 y 16**", no "13-14" (eso ya se había repasado en semana
  24). Se verificó con `web_search` + `WebFetch` la unidad completa `34-alma-53-63` (páginas 340-345):
  341="Alma 53" (sin día propio en el Excel argentino, se salta igual que Alma 51-52 en semana 24-25),
  342="Alma 56", 343="Alma 57", 344="Alma 59-61", 345="Repaso del Dominio de la doctrina 16: Poner en
  práctica los pasajes del Dominio de la doctrina" (lista oficial de 12 pasajes DD del manual 2024, que
  **no incluye** "Alma 56:47-48" — confirma que ese DD del manifiesto viejo es numeración heredada de
  un currículo anterior, mismo patrón que "Alma 46:12-13" en semana 24). Hallazgo útil: 3 de los 4
  `chapterUrl` que ya estaban en el manifiesto (342, 343, 344) resultaban ser, sin que nadie lo supiera,
  las páginas reales correctas — el problema era solo el título/contenido, no la URL. Se citaron y
  verificaron con `web_search` tres citas de líder nuevas (presidente Thomas S. Monson, "Esfuércense y
  sean valientes", abril 2014; élder Dale G. Renlund, "Escogeos hoy", octubre 2018; presidenta Bonnie
  H. Cordon, "Confía en Jehová, y no te apoyes", abril 2017) y se confirmaron con `curl -sL -w
  "%{url_effective}"` sus URLs reales. Se preservó el contenido desplazado de `leccion-25-1` (Alma
  53–54) en `leccion-25-10.json` (id nuevo, agregado a `generated-map.ts`) antes de sobrescribirlo. Se
  retiró `leccion-25-9` del manifiesto (Helamán 1–2 no es un día real de esta semana; el archivo queda
  intacto como huérfano, es el tema real de semana 26 día 1). `validate-content.ts` limpio (717
  lecciones, 3876 preguntas, solo el artefacto histórico ya conocido).
  **Siguiente paso: semana 26** (Helamán 1–6 — huérfano `26-9` ya confirmado para el día 5 según §0.5;
  días 1-4 sin huérfano conocido, necesitan generación nueva con `seminary-enrichment`).
- 31-ago-2026: **Semana 26 reconstruida.** A diferencia de semanas anteriores, esta no tenía días
  feriados (5 días reales) pero el manifiesto solo tenía 4 lecciones — faltaba una entera. Se verificó
  con `web_search` + `WebFetch` toda la unidad `35-helaman-1-6` (páginas 350-355): 351="Helamán 1–4,6:
  Hubo mucha contención", 352="Helamán 3;6: Así vemos", 353="Helamán 5:1–13: La roca de nuestro
  Redentor", 354="DD Helamán 5:12" (sin cambios, ya coincidía), 355="Helamán 5:14–52: Será quitada la
  nube de tinieblas". Se descubrió que los 4 `chapterUrl` que ya estaban en el manifiesto apuntaban,
  sin que nadie lo supiera, a páginas reales de la unidad — pero desordenadas respecto al contenido
  escrito: `leccion-26-1` (título viejo "Helamán 3-4") tenía `chapterUrl` de 352 (día 2 real) pero
  citaba Alma 13:12, ajeno al tema; `leccion-26-7` (título viejo "Helamán 6", contenido ya correcto y
  completo sobre el orgullo de los nefitas y el crecimiento de los ladrones de Gadiantón) tenía
  `chapterUrl` de 355 (día 5 real) en vez de 351 (día 1 real, donde su contenido de hecho encaja mejor
  temáticamente). Se resolvió sin generar casi nada desde cero: `26-7` solo necesitó cambiar su
  `chapterUrl` y un leve recontextualizado de la introducción; `26-1` y `26-3` se reescribieron
  usando las citas y enseñanzas ya verificadas del manual real; `26-9` (huérfano, ya confirmado en
  §0.5) se incorporó al manifiesto ampliando su cuestionario y agregando quiz. Se usaron tres citas de
  líder nuevas, todas verificadas: élder Bednar (reciclada de la propia `26-1` vieja, abril 2006), 
  presidente Nelson (reciclada de `26-3` vieja, octubre 2021), élder Robert D. Hales ("De la oscuridad
  a Su luz maravillosa", abril 2002, confirmada con `web_search` + `curl`). Importante: el orden de las
  lecciones en el array de `_manifest.json` no sigue el sufijo numérico del id (`26-7` quedó primero
  en el array, como día 1) — se confirmó leyendo `lib/content/registry.ts` que la UI ordena por
  posición en el array, no parseando el id, así que esto es seguro. `validate-content.ts` limpio (717
  lecciones, 3883 preguntas, manifiesto en 70 lecciones, solo el artefacto histórico ya conocido).
  **Siguiente paso: semana 27** (Helamán 7–12 — huérfanos `27-2`→D2 y `27-4`→D4 ya confirmados según
  §0.5; días 1, 3 y 5 sin huérfano conocido, necesitan generación nueva).
- 31-ago-2026: **Semana 27 reconstruida.** Mismo patrón que semana 26: sin feriado (5 días reales) pero
  el manifiesto tenía solo 4 lecciones. Se verificó la unidad `36-helaman-7-12` completa (360-365):
  361="Helamán 7-10: El profeta del Señor", 362="Helamán 8: Los profetas testifican de Jesucristo",
  363="Helamán 10: El Señor bendice a Nefi", 364="Helamán 11-12: El ciclo del orgullo",
  365="Repaso del Dominio de la doctrina 17" (tipo "memorizar referencias y frases clave", distinto del
  tipo "aplicar" de la semana 25 — cada repaso de la secuencia usa una técnica pedagógica distinta).
  A diferencia de semana 26 (donde los `chapterUrl` estaban "rotados" entre 4 lecciones), acá el
  problema fue más simple: `leccion-27-3` (título viejo "Helamán 10", con contenido real y completo
  sobre el poder de sellamiento de Nefi) tenía el `chapterUrl` del día 2 (362, Helamán 8) en lugar del
  día 3 (363); y `leccion-27-5` (título viejo "DD Helamán 10:4-5") sí tenía el `chapterUrl` correcto
  para "Helamán 10" (363) pero contenido demasiado angosto. Se resolvió intercambiando: el contenido
  bueno de la vieja `27-3` pasó a `27-5` (que ya tenía el `chapterUrl` correcto), y `27-3` se reescribió
  desde cero sobre el huérfano `27-2` (Helamán 8, testimonio de Cristo y la serpiente de bronce) —
  conservando su `chapterUrl` 362, que en realidad siempre fue el correcto para ese tema. El contenido
  desplazado de la vieja `27-5` se preservó en `leccion-27-6.json`. `leccion-27-7` (Helamán 11–12) tenía
  quiz completo pero `secciones: []` — se completó reciclando el huérfano `27-4`. Se agregó
  `leccion-27-9` (id nuevo) para el día 5. **Incidente evitado:** al buscar una cita de líder para
  `27-3`, el primer intento (una cita atribuida a Jeffrey R. Holland) no se pudo verificar con
  `web_search` pese a varios intentos — se descartó por completo sin usarla y se reemplazó por una cita
  de Neil L. Andersen confirmada con `web_search` + `curl` (nunca se usó la cita no verificada). También
  se descartó una cita de Henry B. Eyring (1989) por no encontrarse su versión en español (la página en
  inglés existe pero `?lang=spa` da 404 real, no silencioso) — se reemplazó por una de Dale G. Renlund
  sí verificada. `validate-content.ts` limpio (719 lecciones, 3897 preguntas, manifiesto en 71 lecciones,
  solo el artefacto histórico ya conocido).
  **Siguiente paso: semana 28** (Helamán 13–16 — huérfanos `28-2`→D2 y `28-4`→D4 ya confirmados según
  §0.5; días 1, 3 y 5 sin huérfano conocido).
- 31-ago-2026: **Commit de checkpoint.** El usuario preguntó si el trabajo iba a estar disponible al
  retomar en otra sesión/PC (esta carpeta es OneDrive). Se detectó que nada de lo hecho hasta ahora
  tenía commit git (64 archivos modificados + varios nuevos, sin commitear desde el 30-ago) — la única
  protección real era la sincronización de OneDrive, sin punto de recuperación en git. Se corrigió
  también una ruta vieja del Excel en §0.1 que apuntaba a una ubicación que ya no existe (ver más
  arriba). A pedido del usuario, se hizo un commit (`182ab88`) incluyendo todo el contenido de
  lecciones/manifiesto/UI pero **excluyendo explícitamente los `.md` de `docs/auditorias/` y cualquier
  `.xlsx`** (con pathspec `':(exclude)docs/auditorias/*.md' ':(exclude)*.xlsx'`, no con `git add -A`
  a secas). Este mismo archivo sigue sin commitear, a propósito, según lo pedido. Nota técnica: el
  commit falló dos veces con `fatal: cannot update the ref ...: unable to append to '.git/logs/...':
  Invalid argument` — un problema conocido de git-para-Windows en carpetas sincronizadas por OneDrive/
  Dropbox al escribir el reflog. Se resolvió con `git -c core.logAllRefUpdates=false commit ...`
  (anulación de una sola vez, no persiste en la config del repo) en vez de correr `git config
  windows.appendAtomically false` como sugería el propio error, para no tocar la configuración del
  repositorio. Si vuelve a pasar, repetir con ese mismo flag `-c`.
- 31-ago-2026: **Semanas 28 y 29 reconstruidas juntas, a pedido del usuario.** El Excel real (ubicación
  actual: `C:\Users\axelh\Downloads\Calendarizacion Libro de Mormon Segundo Semestre.xlsx` — habia
  vuelto a aparecer ahi, la ruta de `Desktop\Nueva carpeta` de la seccion 0 ya no existia) se releyo con
  `exceljs` para las filas 43-57 (semanas 28-30), confirmando fechas (28: 9-15 sept; 29: 16-20 sept) y
  que **ninguna de las dos tiene feriado** (5 dias reales cada una).
  **Semana 28** (unidad `37-helaman-13-16`, paginas 371-375, todas verificadas reales con `curl -sL -w
  "%{url_effective}"`): titulos reales confirmados con `web_search` — 371="Helaman 13-16: Comprender a
  los profetas del Senor" (Dia1, YA coincidia con el `chapterUrl` del manifiesto viejo, solo estaba mal
  el contenido), 372="Helaman 13, Parte 1: La misericordia del Senor" (Dia2), 373="Helaman 13, Parte 2:
  Repent and Be Saved" (Dia3), 374="Helaman 14: Las senales del Salvador" (Dia4, unifica lo que el
  manifiesto viejo tenia separado en "Parte 1"/"Parte 2" con `chapterUrl`s de otros dias), 375=
  "Doctrinal Mastery Review **18**: Understand Doctrine" (Dia5 — el manual oficial lo numera "18", el
  Excel argentino "19 y 20"; mismo patron de numeracion distinta ya visto en semanas 24-25, se mantuvo
  el titulo del Excel). El contenido viejo de `leccion-28-1` (Samuel/materialismo) y `leccion-28-5` (DD
  Helaman 14:29-31, que — igual que "Alma 46:12-13" y "Helaman 10:4-5" en semanas anteriores — resulto
  ser una referencia DD que **no existe** en la lista oficial de 12 pasajes del manual 2024, confirmado
  al leer el contenido real de `375-teacher`, que si lista los 12 reales y no incluye Helaman 14:29-31)
  se preservaron en huerfanos nuevos `leccion-28-6.json` y `leccion-28-8.json` antes de sobrescribir,
  siguiendo la regla de leer-antes-de-sobrescribir. El contenido viejo de `leccion-28-3` (que tenia el
  tema real de Dia3 "riquezas resbaladizas"/Helaman 13:30-38, pero estaba mal titulado "Helaman 14
  Parte1" con el `chapterUrl` de Dia2) se reubico tal cual a `leccion-28-5`, asi que no hizo falta
  generarlo de nuevo. `leccion-28-9` (Dia5, id nuevo) repasa los 4 pasajes DD ya ensenados en el curso
  (Alma 34:9-10, 39:9, 41:10, Helaman 5:12), esta vez conectandolos entre si (tecnica "Understand", el
  manual propone una actividad de "triangulo" para relacionar pasajes — se adapto a un cuestionario mas
  simple para la audiencia del sitio) en vez de solo memorizarlos (eso ya se hizo en semana 27) o
  aplicarlos (eso se dejo para el Dia5 de semana 29, ver abajo).
  **Semana 29** (unidad `38-3-nephi-1-7`, paginas 381-385, todas verificadas reales): 381="3 Nefi 1: Las
  profecias de los profetas empezaron a cumplirse" (Dia1), 382="3 Nefi 2-5: Preparados... en la fuerza
  del Senor" (Dia2), 383="3 Nefi 6-7: El orgullo conduce a la division y la destruccion" (Dia3),
  384="Evalua tu aprendizaje 7: Alma 53-3 Nefi 7" (Dia4), 385="Doctrinal Mastery Review 19: Apply
  Doctrinal Mastery Passages" (Dia5, Excel local "21 y 22"). A diferencia de semana 28, aca los 5 dias
  del Excel mapearon exactamente 1 a 1 con los ids `29-1` a `29-5` que ya existian en el manifiesto, en
  el mismo orden — no hizo falta reordenar ni reciclar huerfanos ajenos. Solo `leccion-29-1` necesito
  reemplazo total: tenia "Helaman 15-16", que **no es un dia real de esta semana** segun el Excel (el
  patron de "capitulo sin dia propio" se repite: aca es Helaman 15-16 el que queda sin dia — se
  preservo en `leccion-29-6.json`). `29-2` y `29-3` ya tenian el tema correcto (contenido reciclable de
  antes de esta sesion) y solo les faltaban `ensenanza` verificada, cuestionario completo (6) y quiz (7).
  `29-4` tenia contexto generico de "evaluar aprendizaje" pero citaba 2 Nefi 32:3 y DyC 84:85, que **no
  pertenecen** al rango real "Alma 53-3 Nefi 7" de esta leccion — se reescribio con citas del rango real
  (Helaman 5:6-7, 5:12, 3 Nefi 5:3), sin `ensenanza` (no se encontro ninguna cita de lider especifica en
  el contenido real de `384-teacher`, mismo patron que `leccion-24-7`). `29-5` tenia contenido generico
  de "repaso final de semestre" (que en realidad corresponde a semanas 35-36, no a esta) — se reescribio
  para repasar los mismos 4 pasajes DD del Dia5 de semana 28, pero con enfoque de aplicacion practica en
  vez de comprension conectada.
  Citas de lider nuevas usadas esta sesion, todas verificadas con `web_search` + `curl -sL -w
  "%{url_effective}"` antes de usarlas (ninguna inventada): elder Neil L. Andersen (Liahona marzo 2019,
  "Escuchar la voz del Senor en la conferencia general"), presidente Russell M. Nelson (Liahona mayo
  2007 "El arrepentimiento y la conversion"; mayo 2019 "Podemos actuar mejor y ser mejores"; noviembre
  2020 "Acoger el futuro con fe"), presidente Dallin H. Oaks (reciclada de sesiones anteriores, Liahona
  mayo 2004), elder Jeffrey R. Holland (Conferencia General octubre 2020, "Esperar en el Senor"),
  presidente Ezra Taft Benson ("Cuidaos del orgullo", Liahona julio 1989 — la URL del archivo de
  Conferencia General en espanol dio 404, se uso en su lugar la URL real y verificada del capitulo
  correspondiente en el manual "Ensenanzas de los Presidentes de la Iglesia: Ezra Taft Benson"). Se
  reciclaron tambien, ya verificadas de sesiones anteriores, las citas de Gerrit W. Gong (`21-7`) y
  Gordon B. Hinckley (`23-4`) para los dos repasos DD.
  `npx tsx scripts/validate-content.ts` limpio (723 lecciones, 3953 preguntas, manifiesto en 73
  lecciones, solo el artefacto historico ya conocido de `libro-de-mormon-1/_auditoria-snapshot-original.json`).
  **Pendiente de esta sesion**: no se corrio el script de deteccion de desplazamiento `contexto`/
  `escrituras` sobre `leccion-33-3` en adelante (mencionado como pendiente desde el cierre del Lote 1).
  Tampoco hay commit todavia de lo hecho hoy (semanas 28-29) — el usuario no lo pidio esta vez.
  **Siguiente paso: semana 30** (3 Nefi 8-11 — ultima semana de las 6 de la seccion 3 paso 4; despues de
  esa, cerrar el Lote 2 original con las semanas 34-36, que no tienen problema estructural).
- 31-ago-2026: **Semana 30 reconstruida — seccion 3 paso 4 completo, las 6 semanas con problema
  estructural (24-33) quedan todas resueltas.** A diferencia de las semanas 25-29, el manifiesto viejo
  de semana 30 no reutilizaba una unidad correcta con dias desordenados: reutilizaba, por error, las
  paginas 381-383 de la unidad `38-3-nephi-1-7` que la sesion anterior (mas temprano hoy) ya habia
  reasignado correctamente a la semana 29. Se verifico con `curl -sL -w "%{url_effective}"` que existe
  una unidad `39-3-nephi-8-11` completa (paginas 390-395, 390 es el overview) que el manifiesto nunca
  habia usado, y se confirmaron los 5 titulos reales con `web_search`: 391="3 Nefi 8-10: La voz del
  Salvador en la oscuridad", 392="3 Nefi 11:1-11: Yo soy Jesucristo", 393="Dominio de la doctrina: 3
  Nefi 11:10-11", 394="3 Nefi 11:12-17: Venid a mi", 395="3 Nefi 11:18-41: Jesucristo declara Su
  doctrina". Confirmado tambien que "DD 3 Nefi 11:10-11" (a diferencia de "DD 3 Nefi 1:13-14", que
  reemplazo) SI es uno de los 12 pasajes reales de la lista oficial "Alma-Moroni" del manual 2024.
  Los huerfanos `30-2` y `30-4` (no en el manifiesto viejo) ya tenian el tema real correcto (3 Nefi 11)
  pero con el contenido de "Yo soy Jesucristo" (11:1-11) y "tocar las heridas" (11:12-17) mezclado en
  el mismo archivo, y el contenido real de bautismo/doctrina (11:18-41) estaba en el archivo equivocado
  (`30-4` en vez de un dia 5) — se resolvio separando por rango de versiculo y reubicando, sin generar
  todo de cero. Los 3 dias viejos del manifiesto (`30-1`, `30-3`, `30-5`) tenian contenido que en
  realidad duplicaba temas ya resueltos en semana 29 (3 Nefi 1 y los ladrones de Gadianton) — se
  preservaron de todas formas en huerfanos nuevos `30-6/30-7/30-8`, siguiendo la regla de
  leer-antes-de-sobrescribir, aunque sean redundantes con `29-1`/`29-2`.
  Citas de lider nuevas verificadas esta sesion (`web_search` + `curl`, ninguna inventada): elder Neal
  A. Maxwell (Conferencia General abril 1995, "Absteneos de toda impiedad" — sobre el sacrificio de "un
  corazon quebrantado y un espiritu contrito"), elder Ulisses Soares (Conferencia General abril 2021,
  "El Cuidador de nuestra alma"), obispo Gerald Causse (Conferencia General abril 2020, "Un testigo
  viviente del Cristo viviente"), presidente Russell M. Nelson (Conferencia General octubre 2021,
  "Verdad pura, doctrina pura y revelacion pura"). Sin enseñanza en el DD de 3 Nefi 11:10-11 — el
  contenido real de esa pagina del manual no incluye ninguna cita de lider, solo actividades de
  memorizacion y aplicacion (confirmado leyendo la pagina real, no asumido).
  `npx tsx scripts/validate-content.ts` limpio (726 lecciones, 3988 preguntas, manifiesto en 76
  lecciones, solo el artefacto historico ya conocido).
  **Con esto, la seccion 3 paso 4 esta completa y las 6 semanas del hallazgo estructural original
  (24-33) quedan todas resueltas.** No hay commit todavia de lo hecho hoy (semanas 28, 29 y 30) — el
  usuario no lo pidio esta sesion. Pendiente sin resolver: el script de deteccion de desplazamiento
  contexto/escrituras sobre `leccion-33-3` en adelante (mencionado desde el cierre del Lote 1, todavia
  no se corrio). **Siguiente paso: cerrar el Lote 2 original — semanas 34, 35 y 36** (sin problema
  estructural, chapterUrl ya correctos; solo falta completar conclusion/cuestionario/enseñanza/quiz en
  esas 12 lecciones).
- 31-ago-2026: **Lote 2 cerrado - curso completo.** Antes de arrancar, se verifico manualmente (sin
  script dedicado, no existe uno con ese nombre en scripts/) que las 15 lecciones de semanas 34-36
  (no 12 como se habia estimado antes de revisarlas - error de conteo de la sesion anterior) ya
  tenian contexto/escrituras correctos y coincidentes con sus titulos; a diferencia de las semanas
  25-33, aca no habia desplazamiento. Se verificaron con curl -sL -w "%{url_effective}" los 15
  chapterUrl del manifiesto y los 15 resolvian a paginas reales y especificas (unidades
  43-3-nephi-27-4-nephi, 50-moroni-7-9, 44-mormon-1-6, 51-moroni-10, 45-mormon-7-9, y
  52-appendix para los dos dias de repaso/evaluacion) - no hizo falta reasignar ningun chapterUrl,
  solo completar ensenanza/conclusion, expandir cuestionario a 6 y questions a 7 en cada una.
  Citas de lider verificadas con web_search + curl (ninguna inventada): presidente Nelson (4 citas
  distintas - "El nombre correcto de la Iglesia" 2018, "Como obtener el poder de Jesucristo" abril
  2017, "El Libro de Mormon: como seria su vida sin el" 2017, "Que Dios prevalezca" 2020), presidente
  Eyring ("Nuestro companero constante" 2023), presidente Monson ("La caridad nunca deja de ser"
  2011), elder Oaks ("El reto de llegar a ser", en realidad de la Conferencia de octubre de 2000, no
  enero de 2001 como decia la referencia original del manual), elder Andersen ("Heridos" 2018),
  presidente Benson ("La clave de nuestra religion"), y el profeta Jose Smith (introduccion del Libro
  de Mormon). Dos lecciones de Dominio de la Doctrina (3 Nefi 27:20 y Moroni 7:45-48) quedaron sin
  ensenanza - se confirmo leyendo el contenido real de esas paginas del manual que no incluyen ninguna
  cita de lider, solo actividades de memorizacion y aplicacion, asi que no se invento ninguna. Los dos
  dias finales (36-4 Repaso evaluacion 2, 36-5 Evaluacion 2) tampoco tenian ninguna cita en el manual
  real (son repasos de los 12 pasajes DD del semestre mediante actividades de emparejar/completar, sin
  citas de lideres) - se completaron con cuestionario, conclusion y quiz de repaso general sin
  ensenanza. Se corrigio ademas el questionCount del manifiesto para las 15 lecciones (algunas decian
  5, dos decian 0), igual que en sesiones anteriores.
  npx tsx scripts/validate-content.ts limpio (726 lecciones, 4028 preguntas, manifiesto en 78
  lecciones, solo el artefacto historico ya conocido).
  **Con esto, las 68 lecciones alcanzables del curso libro-de-mormon-2 (Lote 1 + Lote 2 + toda la
  reconstruccion estructural de semanas 24-33) quedan completas.** Pendiente sin resolver, para una
  sesion futura si se decide retomar: (1) correr un script de deteccion de desplazamiento
  contexto/escrituras sobre leccion-33-3 en adelante - nunca se corrio, aunque la revision manual de
  esta sesion no encontro el problema en 34-36; (2) no hay commit de git de nada de lo hecho en esta
  sesion completa (semanas 28, 29, 30, y ahora 34-36) ni de este documento - el usuario no lo pidio.
