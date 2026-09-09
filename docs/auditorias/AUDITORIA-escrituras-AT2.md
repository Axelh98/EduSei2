# Auditoría de citas de Escritura — Antiguo Testamento, segundo semestre

Segunda auditoría del corpus de **referencias de Escritura** (secciones `tipo: "escrituras"`,
campo `citas` con `referencia`/`texto`/`link`) hecha con el flujo automatizado — la primera fue
[DyC-1](AUDITORIA-escrituras-DyC1.md), hecha entera a mano antes de que existieran los scripts.
Distinta de la auditoría de **citas de líderes** (`tipo: "enseñanza"`), ver
[`AUDITORIA-citas-AT2.md`](AUDITORIA-citas-AT2.md).

**Fecha:** 1 de septiembre de 2026
**Alcance:** `antiguo-testamento-2` (67 lecciones con material, 200 citas de escritura, generadas
el 31-ago-2026 con `seminary-enrichment` — ver
[`COMPLETITUD-antiguo-testamento-2.md`](COMPLETITUD-antiguo-testamento-2.md)).
**Estado:** ✅ cerrado. 200 de 200 citas verificadas contra el texto real del sitio.

---

## 1. Método

Igual que en DyC-1, pero con el flujo de script ya existente (ver
[`COMO-AUDITAR-ESCRITURAS.md`](COMO-AUDITAR-ESCRITURAS.md)):

```bash
npx tsx scripts/audit-escrituras.ts antiguo-testamento-2   # descarga y compara
npx tsx scripts/fix-escrituras.ts antiguo-testamento-2 --write   # aplica lo AUTO_CORREGIBLE
npx tsx scripts/ver-versiculo.ts <url> <versículos...>      # verificación puntual de los REVISAR_MANUAL
```

Como las 200 citas ya se habían escrito con `link` verificado contra el sitio oficial en el
momento de generarlas (misma sesión que las escribió, no una segunda pasada independiente), la
expectativa era que esta auditoría corriera casi sin trabajo manual — a diferencia de
`religion-301`/`religion-225`, donde buena parte de las citas no tenían `link`. Se cumplió: **el
script clasificó 196 de 200 como `OK` en la primera pasada**, sin ninguna corrección previa.

## 2. Resultado de la primera pasada automática

Descargó 97 páginas de 139 capítulos únicos.

| Estado | Citas |
|---|---:|
| `OK` | 196 |
| `AUTO_CORREGIBLE` | 1 |
| `REVISAR_MANUAL` | 3 |

Los 4 casos que no salieron `OK` de entrada:

### 2.1 `leccion-108` — Doctrina y Convenios 98:1, 3 → ✅ corregida automáticamente

El `texto` guardado saltaba de la mitad del versículo 1 directo al 3 con una elipsis (`...`),
cortando contenido real del medio (la promesa de que "vuestras oraciones han entrado en los
oídos del Señor de Sabaot..."). `fix-escrituras.ts` la resolvió con recall 1: se amplió
`referencia` a **D&C 98:1–3**, el `link` a `id=p1-p3#p1`, y el `texto` al literal completo de los
tres versículos, sin la elipsis.

### 2.2 `leccion-98` y `leccion-112` — Job 14:14 → ⚠️ corregidas a mano (paráfrasis)

Las dos lecciones citaban el mismo versículo con el mismo texto parafraseado:

- **Guardado:** «Si el hombre muriere, ¿volverá a vivir? Todos los días de mi edad esperaré,
  hasta que venga mi liberación.»
- **Real (Job 14:14):** «Si el hombre muriere, ¿volverá a vivir? Todos los días de mi servicio
  esperaré, hasta que llegue mi relevo.»

La primera oración era textual; la segunda cambiaba «mi servicio» por «mi edad» y «llegue mi
relevo» por «venga mi liberación» — mismo patrón de paráfrasis no marcada que dominó DyC-1.
Verificado con `ver-versiculo.ts` contra `ot/job/14`. Corregido el `texto` en ambos archivos al
literal exacto; no hizo falta tocar `contexto` en ninguna de las dos, porque ahí solo se cita la
primera oración («Si el hombre muriere, ¿volverá a vivir?»), que ya era textual.

### 2.3 `leccion-101` — Salmos 46:1, 10 → ✅ verificada, sin cambios (falso positivo del comparador)

El `texto` guardado combina el versículo 1 y el versículo 10 con una elipsis (`...`), salteando
los versículos 2–9. El comparador mide recall contra el párrafo anclado (`p1`) y contra ventanas
cercanas, así que una cita que de verdad combina dos versículos lejanos entre sí nunca llega al
umbral automático — quedó marcada `REVISAR_MANUAL` con recall 0.47 en el ancla.

Verificado con `ver-versiculo.ts` contra `ot/ps/46`, versículos 1, 2 y 10:

- **Salmo 46:1 real:** «Dios es nuestro refugio y fortaleza, nuestro pronto auxilio en las
  tribulaciones.» — coincide exacto con la primera mitad del texto guardado.
- **Salmo 46:10 real:** «Quedaos tranquilos, y sabed que yo soy Dios; seré exaltado entre las
  naciones; exaltado seré en la tierra.» — coincide exacto con la segunda mitad.

Las dos mitades son textuales; la cita combinada es correcta tal cual está. No se tocó el
archivo. Volvió a salir `REVISAR_MANUAL` en la segunda corrida por la misma razón estructural (no
es un pendiente real) — mismo comportamiento que documenta `COMO-AUDITAR-ESCRITURAS.md` §4.1 para
las citas tipo `RESUMEN`/multi-versículo.

## 3. Resultado final

Segunda corrida después de aplicar las correcciones: **199 `OK` + 1 `REVISAR_MANUAL`**
(`leccion-101`, el falso positivo de §2.3, ya verificado a mano). `npx tsx scripts/validate-content.ts`
corre limpio sobre este curso.

**Comparado con el patrón del resto del proyecto:** a diferencia de DyC-1 (89% de las citas
parafraseadas) y del patrón de fabricación que domina las citas de líder de `religion-301`/`R250`,
`antiguo-testamento-2` salió con **2 de 200 citas (1%)** necesitando corrección real de texto, más
1 ampliación de rango y 1 falso positivo del comparador. Consistente con que estas 200 citas se
generaron con verificación `web_fetch` contra el sitio en el momento de escribirlas — la auditoría
independiente encontró muy poco, pero no cero.

---

## Cómo continuar

Este curso queda cerrado para citas de Escritura. Ver
[`PLAN-DE-AUDITORIA.md`](PLAN-DE-AUDITORIA.md) §1 para el estado del resto del proyecto.
