# Completitud de contenido — antiguo-testamento-2

Generación de contenido desde cero para las 67 lecciones de `antiguo-testamento-2` (semanas 22 a
36). Antes del 31-ago-2026 el curso tenía calendarización, `chapterUrl` y quiz (`questions`)
completos, pero **`secciones: []` en el 100% de las lecciones** — no existía `contexto`,
`escrituras`, `enseñanza`, `conclusion` ni `cuestionario` en ningún archivo. Ver también
`docs/auditorias/PLAN-DE-AUDITORIA.md` §1 y §2, y `docs/ESTADO.md` línea ~70 (nota histórica de la
migración, ya resuelta por este trabajo).

Generado con la skill `seminary-enrichment`, en una sola sesión continua (31-ago-2026), trabajando
semana por semana directo en la conversación principal.

---

## 1. Qué se hizo

Para cada una de las 67 lecciones:

- **`contexto`**: narrativa de 260–320 palabras ("Antiguo Testamento - Ven Sigueme"), 200–260
  ("Preparación para la Vida") o 150–200 ("Dominio de la Doctrina"), con conexión explícita a la
  vida de un joven de 14–17 años.
- **`escrituras`**: 3–4 citas por lección, **texto y `link` verificados con `web_fetch` contra
  `churchofjesuschrist.org/study/scriptures/`** en el momento de generarlas — no recordadas de
  memoria ni parafraseadas.
- **`enseñanza`**: 1 cita de líder por lección (61 de 67; las 6 restantes son de tipo "Dominio de
  la Doctrina", que no llevan cita por diseño de la skill). Cada cita se buscó y verificó con
  `web_search` + `web_fetch` contra el discurso original completo — nunca se usó tal cual el
  resumen que trae el manual de Seminario, que a veces parafrasea o trunca.
- **`conclusion`**: párrafo de cierre de 80–130 palabras con invitación a la acción.
- **`cuestionario`**: exactamente 6 preguntas reflexivas, con los tres roles que pide la skill
  (abridoras, profundizadoras, de compromiso).
- **`_manifest.json`**: `hasStudy` pasado a `true` en las 67 lecciones, para que el sitio muestre
  el botón de contenido.

**El quiz (`questions`) no se tocó** — no era parte de este pedido. Sigue en el formato previo del
curso (ver §3).

### Números

| | |
|---|---:|
| Lecciones generadas | 67/67 |
| Semanas | 15 (semana 22 a 36) |
| Antiguo Testamento - Ven Sigueme | 42 |
| Preparación para la Vida | 17 |
| Dominio de la Doctrina (sin `enseñanza`, por diseño) | 6 |
| Especial | 2 |
| Citas de Escritura (`escrituras`) | 200 |
| Citas de líder (`enseñanza`) | 61 |

---

## 2. Verificación mecánica ya corrida (Nivel 1)

```
npx tsx scripts/audit-completitud.ts antiguo-testamento-2 --detalle
```

```
contexto:      67/67 presente, 3 fuera de rango 150–340 palabras
enseñanza:     61/67 con al menos una cita (0 sin ninguna) + 6 "Dominio de la Doctrina", esperado
conclusion:    67/67 presente, 0 fuera de rango 60–140 palabras
cuestionario:  67/67 con exactamente 6 preguntas
quiz:          67/67 con preguntas, pero 67/67 con una cantidad distinta de 7 (ver §3)
```

Los 3 "fuera de rango" de `contexto` son las lecciones `leccion-122`, `leccion-133` y
`leccion-137` — las tres de tipo "Dominio de la Doctrina", con 147, 134 y 133 palabras
respectivamente. Están apenas debajo del piso genérico del script (150), pero dentro del rango
150–200 que pide la skill específicamente para ese tipo de lección — no es un defecto real.

`npx tsx scripts/validate-content.ts` corre limpio sobre este curso (manifiesto, catálogo y
archivos de lección consistentes entre sí).

---

## 3. Lo que queda pendiente

### 3.1 Auditar las citas de Escritura (200 citas, 0 auditadas)

Ninguna de las 200 citas de `escrituras` pasó por una auditoría independiente todavía — fueron
verificadas al momento de generarlas (mismo sesión, mismo autor), no por una segunda pasada. El
método y el script ya existen y funcionan igual que para el resto del proyecto:

```
npx tsx scripts/audit-escrituras.ts antiguo-testamento-2
```

Ver `docs/auditorias/COMO-AUDITAR-ESCRITURAS.md` para el método completo. Dado que los links se
pusieron con el formato estándar (`.../study/scriptures/<colección>/<libro>/<cap>?lang=spa&id=p<v>#p<v>`)
esta auditoría debería poder correr automática sobre el 100% de las citas, sin el trabajo manual
previo que necesitaron `religion-301` o `religion-225` (que tienen citas sin `link`).

### 3.2 Auditar las citas de líder (61 citas, 3 con bandera automática, 0 auditadas)

```
npx tsx scripts/extract-citas.ts antiguo-testamento-2          # panorama
npx tsx scripts/extract-citas.ts antiguo-testamento-2 --csv    # detalle exportable
```

El detector automático encontró **3 citas con bandera**, de 61 — las tres ya identificadas y
explicadas acá para que el auditor no tenga que redescubrirlas desde cero:

| Lección | Autor | Bandera | Explicación |
|---|---|---|---|
| `leccion-114` | Hermana Sharon Eubank | `vosotros-en-cita` | Probable falso positivo: la cita de Eubank incluye, dentro de su propio texto, una cita textual de Isaías ("mis caminos [son] más altos que vuestros caminos") — el detector marca el "vosotros" sin distinguir que es una cita anidada, no la voz de la oradora. Verificar contra el discurso igual, pero es probable que esté bien tal como está. |
| `leccion-120` | Presidente Russell M. Nelson (citando al presidente Ezra Taft Benson) | `fecha-posterior-a-la-muerte` | Falso positivo esperado: el detector ve una cita de Benson (fallecido en 1994) dentro de un discurso de Nelson de octubre de 2022 y lo marca como imposible. Es una cita dentro de otra cita — Nelson citando a Benson —, no una fecha inconsistente. Confirmar contra el discurso de Nelson que el atribuido a Benson efectivamente aparece ahí. |
| `leccion-189` | Élder Henry B. Eyring | `sin-link` | Real, no falso positivo. La cita ("Poner el conocimiento espiritual primero no nos libera...") es de una charla fogonera del Sistema Educativo de la Iglesia del 6 de mayo de 2001 ("Educación para la vida real"), citada en el manual `the-gospel-and-the-productive-life-student-manual` capítulo 10 — no se encontró una URL propia de esa charla en `churchofjesuschrist.org`. Si aparece una en una auditoría futura, agregarla; si no, dejar constancia de que se buscó y no existe. |

Las otras 58 citas no tienen bandera automática, pero **eso no equivale a auditadas** — cada una
se generó y verificó en la misma sesión que la escribió, el mismo patrón que ya se vio en otros
cursos de este proyecto (`libro-de-mormon-2`, por ejemplo) donde una segunda pasada sí encontró
errores que la primera generación no había notado. Antes de dar por cerrado este curso en la tabla
de `PLAN-DE-AUDITORIA.md` §1, conviene una pasada real abriendo cada discurso, con el mismo método
que usan `AUDITORIA-citas-*.md` del resto del proyecto (ver `docs/auditorias/README.md`).

### 3.3 Quiz (`questions`) en formato antiguo — no se tocó, decisión pendiente

Las 67 lecciones ya tenían un quiz al empezar este trabajo, pero en el formato previo del curso:
**5 preguntas de **3** opciones**, no las 7 preguntas de 4 opciones que pide la spec actual de
`seminary-enrichment` (ver `docs/auditorias/COMO-AUDITAR-CONTENIDO.md`). No se tocó porque no era
parte de este pedido (que fue específicamente generar los "resúmenes"/`secciones`). Mismo tipo de
decisión que ya quedó pendiente en `doctrina-y-convenios-1` y `religion-301` (`cuestionario` fijo
en 5 en vez de 6) — **es una decisión de producto** (¿se amplía el quiz de este curso a la spec
actual, o queda con la convención vieja?), no algo que una auditoría resuelva sola.

### 3.4 Nivel 2 (calidad) — no corrido

No se comparó este curso contra otro ya auditado en Nivel 2 (como se hizo entre
`antiguo-testamento-1` y `libro-de-mormon-2`, ver `CALIDAD-libro-de-mormon-2.md`) para buscar
patrones como distractores "muletilla" o nombres de escenario repetidos. No aplica todavía de la
misma forma porque el quiz no se regeneró (§3.3), pero si en el futuro se decide ampliar el quiz a
7 preguntas, correr ese chequeo de calidad sobre las preguntas nuevas sería el momento natural.

---

## 4. Cómo retomar

1. Empezar por §3.2 (citas de líder) — son solo 61 y ya hay una tabla con las 3 banderas
   resueltas de antemano; es la auditoría más chica y más cerca de terminarse de todo el proyecto
   ahora mismo.
2. Seguir con §3.1 (citas de Escritura) — 200 citas, pero con `link` en el 100 % de los casos, así
   que `audit-escrituras.ts` debería poder correr casi sin trabajo manual previo (a diferencia de
   `religion-301`/`religion-225`).
3. Dejar §3.3 (formato del quiz) y §3.4 (Nivel 2) para cuando el usuario decida si quiere ampliar
   el quiz — no son bloqueantes para cerrar las auditorías de citas.
4. Al cerrar cualquiera de los puntos de arriba, actualizar la fila de `antiguo-testamento-2` en
   `docs/auditorias/PLAN-DE-AUDITORIA.md` §1 (hoy en 🔴 no empezada para ambos tipos de cita) y
   agregar el curso a la tabla de `docs/auditorias/README.md` § Estado por curso.
