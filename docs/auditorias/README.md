# Auditorías de citas — índice

Cada archivo de esta carpeta documenta la verificación de las **citas de líderes de la
Iglesia** (secciones `enseñanza` y bloques `cita`) de un curso, contra su fuente
original en `churchofjesuschrist.org`.

El estado general del trabajo vive en **[`../ESTADO.md`](../ESTADO.md)**. Este README
es solo el mapa de la carpeta.

---

## Estado por curso

| Curso | Documento | Citas | Auditadas | Estado |
|---|---|---:|---:|---|
| Antiguo Testamento, 1.er semestre | [AT1](AUDITORIA-citas-AT1.md) | 110 | 110 | ✅ cerrado ¹ |
| Libro de Mormón (ambos semestres) | [libro-de-mormon](AUDITORIA-citas-libro-de-mormon.md) | 131 | 131 | ✅ cerrado |
| Doctrina y Convenios, 1.er semestre | [DyC1](AUDITORIA-citas-DyC1.md) | 80 | 50 | 🟡 63 % |
| Religión 250 | [R250](AUDITORIA-citas-R250.md) | 38 | 38 | ✅ cerrado |
| Religión 225 | [R225](AUDITORIA-citas-R225.md) | 5 | 5 | ✅ cerrado |
| Religión 301 | [R301](AUDITORIA-citas-R301.md) | 50 | 20 | 🟡 40 % |
| Religión 200 | [R200](AUDITORIA-citas-R200.md) | 56 | 1 | 🔴 2 % |
| **Total** | | **470** | **355** | **76 %** |

> ¹ `antiguo-testamento-1` lo revisó Axel a mano y lo dio por correcto. El documento
> solo detalla las 4 citas que había encontrado el detector; **no hay registro cita por
> cita** del resto de esa revisión.

**Quedan 115 citas**: R301 (30), DyC-1 (30), R200 (55). Ninguna tiene bandera
automática — hay que abrir el manual de cada lección.

---

## Qué encontró cada auditoría

Los cursos fallan de maneras distintas, y esa es la conclusión más útil del conjunto:

| Curso | Patrón dominante | Resultado |
|---|---|---|
| **Libro de Mormón** | Errores de *precisión* sobre citas genuinas | **Ninguna cita inventada.** 46 enlaces sin ancla, 12 textos alterados, 4 errores de atribución |
| **R250** | **Fabricación** | 16 de 38 con título de discurso inexistente o URL a otro discurso |
| **DyC-1** | **Fabricación** | De las 49 sin `link`, solo **7 eran textuales**; 28 no corresponden a ninguna fuente del autor |
| **R301** | **Fabricación** | **20 de 20 inválidas.** 17 de los discursos citados no existen |
| **R225** | **Paráfrasis** | 4 de 5 fuentes existen; el texto está reescrito, no transcrito |
| **AT-1** | **Paráfrasis** con `link` correcto | 2 casos con discurso real, ancla al párrafo correcto y texto igual reescrito |

Los cursos con fabricación masiva son los de lecciones temáticas. Libro de Mormón, que
va versículo por versículo, salió limpio.

---

## Cómo continuar

El método completo, los predictores y los comandos están en
[`../ESTADO.md`](../ESTADO.md). En corto:

1. Sacar el `chapterUrl` de la lección desde `_manifest.json`: apunta a su página del
   manual oficial de Seminario o Instituto **en español**.
2. Leer ahí las citas que el manual realmente usa, con autor, texto literal y referencia.
3. Si la `fuente` declarada trae título, **abrir además el índice de esa conferencia**
   (`/study/general-conference/AAAA/MM?lang=spa`) para confirmar que el discurso existe.
   Eso destapó los 17 títulos inventados de R301.
4. Poner en `link` la página oficial **donde ese texto se puede leer**: el discurso si
   está en línea en español, la página del manual si no.
5. `npx tsx scripts/validate-content.ts` después de cada tanda.

```bash
npx tsx scripts/extract-citas.ts                 # panorama de todos los cursos
npx tsx scripts/extract-citas.ts religion-301    # un curso
npx tsx scripts/extract-citas.ts --json          # con banderas, para filtrar
npx tsx scripts/extract-citas.ts --csv > citas.csv
npx tsx scripts/validate-content.ts
```

Las correcciones van en `lib/content/<categoryId>/<lessonId>.json`, en `autor`,
`fuente`, `texto` y `link`. **La prosa se guarda como array de párrafos**, un párrafo
por elemento; uno solo puede ir como string.

---

## Convención de estos documentos

Cada cita verificada se registra con cuatro datos, en este orden:

1. **Fuente declarada** — lo que decía el archivo antes de tocarlo.
2. **Discurso real** — qué dio ese autor en esa fecha, según el índice oficial.
3. **Verificación** — qué se encontró al comparar.
4. **Acción tomada** — ✅ corregida / ⚠️ ajustada / ❌ reemplazada, con el texto final,
   la referencia completa y el `link`.

Se marca explícitamente cuando **cambia el autor**, porque es el error más fácil de
propagar sin querer.

**Nunca se inventan números de página.** Si no se verificaron, va título + revista +
fecha y nada más.

---

## Alcance: esto cubre solo las citas

Las citas de líderes son **la décima parte** de lo auditable. Sin auditar: 1207
referencias de Escritura, 3770 preguntas de quiz, 425 bloques de `contexto`, 425
cuestionarios y 316 `conclusion`. El detalle y el plan para abrirlo —incluido qué
hacer si hay que darle el contenido a un auditor externo— están en
[`../ESTADO.md`](../ESTADO.md).
