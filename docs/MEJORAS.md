# Auditoría técnica y de contenido — AulaSei

**Fecha:** 5 de septiembre de 2026 · **Rama:** `contenido/doctrina-y-convenios` · **Commit base:** `5852e05`

Este documento evalúa **qué conviene mejorar**, en cuatro ejes: defectos que rompen algo hoy,
seguridad, rendimiento, y calidad de contenido/código/estructura. No repite el trabajo de
[`auditorias/PLAN-DE-AUDITORIA.md`](auditorias/PLAN-DE-AUDITORIA.md) — ese cubre la fidelidad de citas
y escrituras cita por cita. Acá está lo que ese plan no mira: el código, el bundle, el despliegue, y
los defectos de contenido que sí detecta un script.

**Método.** Todo lo que sigue está verificado corriendo sobre el árbol de trabajo: `npx tsc --noEmit`,
`npm run build`, `npm run lint`, medición de los chunks de `.next/static`, y un recorrido programático
de los 685 archivos de `lib/content/` contra los 12 `_manifest.json`. Los números son de esa corrida,
no de documentos previos.

---

## Resumen ejecutivo

| # | Hallazgo | Eje | Gravedad | Costo de arreglo |
|---|---|---|---|---|
| 1 | `createAdminClient` no existe: crear e invitar usuarios está roto | Defecto | 🔴 Alta | Bajo |
| 2 | El barajado de opciones no se aplica al 90 % de las preguntas | Defecto/Contenido | 🔴 Alta | Bajo |
| 3 | `/analytics` se protege con un secreto en la URL, y ese secreto viaja en el HTML | Seguridad | 🔴 Alta | Medio |
| 4 | `ignoreBuildErrors: true` + sin ESLint + `npm run lint` roto + sin tests | Código | 🔴 Alta | Bajo |
| 5 | El middleware pega a Supabase en **toda** petición, incluidas las páginas públicas | Rendimiento/Disponibilidad | 🟠 Media-alta | Bajo |
| 6 | 332 KB de manifiestos al navegador, duplicados en 9 chunks (2,2 MB) | Rendimiento | 🟠 Media-alta | Medio |
| 7 | 3.571 de 3.992 preguntas sin `explanation`, y el campo **nunca se muestra** al alumno | Contenido/Producto | 🟠 Media | Bajo + contenido |
| 8 | 139 de 677 lecciones no tienen material de repaso | Contenido | 🟠 Media | Alto |
| 9 | `?next=` está muerto: después de iniciar sesión siempre se cae a `/` | Defecto | 🟡 Media-baja | Bajo |
| 10 | 40 de 49 componentes `ui/` muertos y ~33 dependencias que solo los sostienen | Estructura | 🟡 Baja | Bajo |
| 11 | `/estudio` es una función a medio hacer publicada en producción | Estructura/Producto | 🟡 Baja | Bajo |
| 12 | Sin `error.tsx`, sin `public/`, sin favicon, sin sitemap ni OG | Producto | 🟡 Baja | Bajo |

**Lo que sí está bien**, y conviene no romper al tocar lo de arriba: la separación
manifiesto/contenido de `lib/content/` está bien pensada y documentada; el `loader.ts` con `import()`
por lección cumple lo que promete; los archivos JSON con prosa en array de párrafos hacen diffs
legibles; el sistema de roles de `/admin` está bien construido; y la decisión de enlazar imágenes en
vez de copiarlas está razonada por escrito con su motivo legal.

---

## 1. Defectos que rompen funcionalidad hoy

### 1.1 🔴 Crear e invitar usuarios está roto en producción

`actions/usuarios.ts` importa una función que no existe:

```
actions/usuarios.ts(98,11):  error TS2339: Property 'createAdminClient' does not exist
actions/usuarios.ts(154,11): error TS2339: Property 'createAdminClient' does not exist
```

`lib/supabase-admin.ts` exporta `rangeBounds`, `getAdminStats`, `getRecentQuizzes`, `getTopLessons` y
`getTopPages` — nada más. No hay `createAdminClient`. Las dos rutas que lo usan son `crearUsuario()` y
`invitarUsuario()`, o sea **los dos botones del panel `/admin/usuarios/nuevo`**. En ejecución, el
`await import(...)` resuelve y `createAdminClient` queda `undefined`: la acción tira
`createAdminClient is not a function`, que además no está capturado, así que el usuario ve un error
genérico de Next.

Esto lleva escondido desde que se escribió porque `next.config.mjs` tiene `typescript.ignoreBuildErrors: true`
(ver §5.1). El build lo dice explícitamente: `Skipping validation of types`.

**Arreglo:** agregar a `lib/supabase-admin.ts` el export que falta, reutilizando las constantes que ya
están al tope del archivo:

```ts
export function createAdminClient() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY no está configurada")
  }
  return createClient(SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
```

Ojo con el fallback actual del módulo: `SUPABASE_KEY` cae al `anon key` si no hay service role. Para el
cliente admin eso no sirve — silenciosamente crearía un cliente sin permisos y los errores se verían
como fallos de RLS, no como falta de configuración. Por eso conviene que `createAdminClient` falle fuerte.

### 1.2 🔴 El barajado de opciones no se aplica al 90 % de las preguntas

`hooks/use-shuffled-questions.ts` baraja las opciones solo si la pregunta declara su tipo:

```ts
if (q.type !== "multiple" || !q.options) return q   // ← sale sin barajar
```

Pero `type` es opcional en el esquema y casi nadie lo escribe: **3.627 de 4.048 preguntas (90 %) no
tienen `type`**, así que conservan el orden tal cual está en el archivo. Y ese orden tiene un sesgo
de posición fuerte:

| Curso | Preguntas | Con `type` | Distribución 0/1/2/3 | Opción más frecuente |
|---|---:|---:|---|---:|
| `antiguo-testamento-2` | 335 | **0** | 9 / **322** / 4 / 0 | **96 %** |
| `nuevo-testamento` | 332 | **0** | 1 / **316** / 14 / 1 | **95 %** |
| `religion-301` | 125 | **0** | 4 / 81 / 40 / 0 | 65 % |
| `religion-250` | 174 | 27 | 8 / 104 / 54 / 8 | 60 % |
| `libro-de-mormon-1` | 630 | 371 | 96 / 356 / 99 / 79 | 57 % |
| `Bloques` | 93 | 0 | 51 / 24 / 15 / 3 | 55 % |
| `libro-de-mormon-2` | 560 | **0** | 153 / 303 / 65 / 39 | 54 % |
| `religion-225` | 23 | 23 | 3 / 12 / 7 / 1 | 52 % |
| `antiguo-testamento-1` | 551 | 0 | 124 / 209 / 129 / 89 | 38 % |
| `doctrina-y-convenios-1` | 637 | 0 | 157 / 154 / 164 / 162 | 26 % |
| `doctrina-y-convenios-2` | 336 | 0 | 83 / 88 / 82 / 83 | 26 % |
| `religion-200` | 196 | 0 | 49 / 49 / 49 / 49 | 25 % |

La combinación es lo grave: en Antiguo Testamento 2 y Nuevo Testamento **un alumno que siempre elija
la segunda opción saca 95-96 % sin leer nada**, y el barajado que debería taparlo no corre.

**Arreglo (cinco minutos, sirve para todo el corpus):** invertir el guard. Barajar siempre que haya
`options.length > 1` y el tipo no sea `written`:

```ts
if (q.type === "written" || !q.options || q.options.length < 2) return q
```

Con eso el sesgo del archivo deja de importar. Igual conviene rotar las respuestas en disco de los
cursos peores — `scripts/audit-distribucion-respuestas.ts` ya lo hace, y según §1.3 del plan de
auditoría nunca se corrió sobre varios de ellos — pero eso pasa a ser higiene, no una vulnerabilidad
en vivo. **Antes de rotar nada, leer la advertencia de §1.3 del plan:** en AT-1 una distribución
"sana" resultó ser el síntoma de índices desalineados de las opciones.

De paso, ese `useMemo` depende solo de `[attemptKey]` y omite `questions`. Hoy no falla porque el
componente no cambia de lección sin remontarse, pero es exactamente el tipo de cosa que un linter
habría marcado (§5.1).

### 1.3 🟠 La explicación de cada pregunta nunca llega al alumno

`Question.explanation` existe en el esquema, lo edita `components/editor/QuestionEditor.tsx`, y lo
muestra `components/editor/StudentPreview.tsx`… que es la vista previa del **editor**. En el quiz real
(`components/question-card.tsx`) el campo no se lee nunca. O sea: las 421 preguntas que sí tienen
explicación escrita tampoco la muestran.

Es la mejora pedagógica más barata del proyecto: renderizar `explanation` y `reference` debajo de la
opción, después de `hasSubmitted`. Un cuestionario que dice *por qué* y **a qué versículo volver**
enseña; uno que solo dice "incorrecto" evalúa. Ver §4.3 para el trabajo de contenido asociado.

### 1.4 🟡 `?next=` está muerto: el login siempre vuelve a la portada

Nueve páginas redirigen a `/login?next=<ruta>`:

```
app/admin/page.tsx:10:  redirect("/login?next=/admin")
app/editor/page.tsx:12: redirect("/login?next=/editor")
...
```

`app/login/page.tsx` no lee `searchParams`, y `loginWithEmail` termina con `redirect("/")` fijo. El
maestro que entra a `/editor` sin sesión inicia sesión y aterriza en la portada, sin explicación.

Además hay **dos nombres para el mismo parámetro**: las páginas usan `next=`, y `middleware.ts` usa
`redirect=`. Unificar en `next` (que es el que ya entiende `app/auth/callback/route.ts`) y hacer que
`loginWithEmail` lo respete, validando que empiece con `/` y no con `//` para no abrir un redirect
hacia afuera.

### 1.5 🟡 El quiz reporta todos los cursos como "seminario"

`app/quiz/[categoryId]/[lessonId]/page.tsx:47` pasa `courseType="seminario"` literal, mientras que su
página hermana de estudio (`study/page.tsx:85`) pasa el valor real de la categoría. Consecuencia: cada
quiz de Religión 200/225/250/301 se registra en `events.course_type` como seminario, y el panel de
`/analytics` no puede separar los dos programas. `category.courseType` ya está en el registry: usarlo.

### 1.6 🟡 Enlace legacy en el panel de analítica

`components/analytics/admin-dashboard.tsx:649` enlaza a `/admin?key=${adminKey}`. Pero `/admin` ya no
usa `key`: migró a autenticación por rol. El enlace funciona por casualidad (el `key` sobrante se
ignora) y arrastra el secreto a una URL más. Ver §2.1.

---

## 2. Seguridad y control de acceso

### 2.1 🔴 `/analytics` — secreto en la URL, y filtrado al HTML

```ts
// app/analytics/page.tsx
const secret = process.env.ADMIN_SECRET
if (!secret || key !== secret) redirect("/")
...
<AdminDashboard ... adminKey={key ?? ""} />   // ← AdminDashboard es "use client"
```

Tres problemas encadenados:

1. **El secreto viaja como query param.** Queda en el historial del navegador, en el `Referer` de
   cualquier salida, y en los logs de acceso de Azure. Un solo screenshot o link compartido lo entrega.
2. **El secreto se serializa al cliente.** Al pasarlo como prop de un componente `"use client"`, termina
   en el payload RSC de la página. Cualquiera que consiga la URL una vez, la conserva.
3. **Detrás hay `service_role`.** `lib/supabase-admin.ts` usa `SUPABASE_SERVICE_ROLE_KEY`, que ignora
   RLS por completo. Es la llave más sensible del sistema protegida por el mecanismo más débil.

Y es evitable: **el proyecto ya tiene el mecanismo correcto**. `/admin` y `/admin/usuarios` verifican
sesión y rol contra `profiles` (`admin` / `director_area`). `/analytics` debería hacer lo mismo y
`ADMIN_SECRET` desaparecer del código. El header comentado de ese archivo dice `// app/admin/page.tsx`:
es una copia que nunca se terminó de migrar.

### 2.2 🟠 La analítica es escribible por cualquiera

`lib/analytics.ts` hace `POST /rest/v1/events` desde el navegador con la `anon key`, sin sesión. Para
que funcione, la tabla `events` tiene que aceptar `INSERT` anónimo. Eso significa que cualquiera puede
inyectar quizzes falsos con el nombre de alumno que quiera, y que el panel de `/analytics` no puede
distinguir un dato real de uno inventado. No hay throttling ni validación de forma del lado del servidor.

Si la analítica va a sostener decisiones (qué lecciones se usan, qué alumno rindió), conviene moverla
a una server action o un route handler que valide el payload, y cerrar el `INSERT` anónimo en RLS.

### 2.3 🟠 El límite de 3 intentos es solo del navegador

`hooks/use-quiz-attempts.ts` guarda el contador en `localStorage`. Borrar los datos del sitio, abrir una
ventana privada o cambiar de dispositivo lo resetea. La pantalla dice "Consultá a tu instructor para
continuar", lo que suena a regla institucional; hoy es una sugerencia. Si tiene que ser una regla, el
contador va en la base junto con el resto del progreso (§6.1). Si es solo un empujón, vale la pena que
el texto no prometa más de lo que hace.

### 2.4 🟡 Interpolación de strings en filtros PostgREST

```ts
// actions/overrides.ts
.or(`is_public.eq.true,author_id.eq.${user.id}`)
// app/auth/callback/route.ts
.or(`user_id.eq.${user.id},email.ilike.${user.email}`)
```

Hoy no es explotable: ambos valores vienen de la sesión de Supabase, no del cliente. Pero un email con
una coma o un punto rompe la sintaxis del filtro y hace que la consulta devuelva cualquier cosa en vez
de fallar. Preferir `.eq()` encadenados o `.in()` con arrays.

### 2.5 🟡 Logs y despliegue

- **32 `console.*` en producción**, la mayoría en rutas de auth (`actions/auth.ts`,
  `app/auth/callback/route.ts`), incluyendo
  `console.log("[auth/callback] Usuario", user.id, "enrolado en clase", clase.id)`. Son logs de
  servidor, no se filtran al alumno, pero son ids de usuario en los logs de Azure sin ninguna política
  de retención pensada.
- **El workflow de despliegue compila con credenciales falsas.** `.github/workflows/azure-static-web-apps-*.yml`
  define `NEXT_PUBLIC_SUPABASE_URL: "https://placeholder-project.supabase.co"` con el comentario
  "engaña al compilador". Las variables `NEXT_PUBLIC_*` **se incrustan en el bundle en tiempo de build**:
  si Azure no las reinyecta después, el cliente de navegador queda apuntando a un proyecto inexistente y
  todo lo que dependa de auth del lado del cliente falla en producción. Conviene verificarlo abriendo el
  sitio desplegado y mirando a qué host pega el navegador. Lo correcto es poner las URLs reales como
  secretos del repositorio.

---

## 3. Rendimiento y disponibilidad

### 3.1 🟠 El middleware consulta a Supabase en cada petición, incluso en páginas públicas

```ts
export const config = { matcher: ["/((?!_next|favicon.ico).*)"] }
```

El early-return solo cubre `/_next`, `/favicon`, `/api` y `/mantenimiento`. Las líneas que exceptuaban
`/quiz` y `/recuperar` **están comentadas**. Resultado: cada vista de lección de un alumno anónimo
dispara un `supabase.auth.getUser()`, que es una llamada de red al servidor de Supabase, antes de
renderizar. Se paga en cada navegación de la parte del sitio que más se usa y que no necesita sesión.

Y hay un riesgo de disponibilidad encima: si el proyecto de Supabase se pausa (plan gratuito), esa
llamada no falla rápido, **cuelga** — y como está en el middleware, se lleva puesto todo el sitio,
incluidas las 677 lecciones que son puro contenido estático y no necesitan Supabase para nada.

**Arreglo:** restringir el matcher a lo que realmente necesita sesión:

```ts
export const config = {
  matcher: ["/editor/:path*", "/admin/:path*", "/maestro/:path*", "/login", "/signup"],
}
```

Es el cambio con mejor relación impacto/costo de todo este documento.

### 3.2 🟠 El catálogo entero viaja al navegador, y nueve veces

`lib/content/registry.ts` importa los 12 `_manifest.json` — **332 KB de JSON** — y lo consumen nueve
componentes `"use client"` (`categories-section`, `category-card`, `stats-section`, `recovery-banner`,
`lesson-search`, `LessonSelector`, `OverridesBrowser`, `clase-form`, `recovery-client`) más la propia
`app/quiz/[categoryId]/page.tsx`, que también es cliente.

Uno de esos nueve es `lesson-search`, y lo monta `site-header`, que está en la portada, en el listado
de curso, en la página de lección y en `/recuperar`. O sea: **el catálogo completo llega al navegador
en prácticamente toda ruta pública del sitio**, incluso donde no se lista ninguna lección.

El comentario del archivo dice que "lo único que entra al bundle son los `_manifest.json`", y es cierto
— pero eso ya es todo el catálogo: 677 lecciones con título, descripción, `chapterUrl`, unidad y
contadores. Medido sobre `.next/static` después de `npm run build`:

```
chunks que contienen el registry: 9
peso total:                       2.204 KB   (de 5,3 MB de estáticos)
un chunk típico:                  245 KB sin comprimir → ~37 KB gzip
```

Turbopack lo incrusta en cada chunk de entrada en vez de compartirlo. Un alumno que entra a la portada
descarga los 677 títulos de los 12 cursos para ver 12 tarjetas.

**Tres arreglos, de menor a mayor:**

1. **Partir el manifiesto en dos.** Un `_meta.json` chico por curso (nombre, descripción, cantidad de
   lecciones, cantidad de semanas) para las vistas de catálogo, y el manifiesto completo solo donde se
   listan lecciones. La portada y `stats-section` pasan a costar unos pocos KB.
2. **Sacar el buscador del header.** Que `lesson-search` cargue su índice —y su parte del catálogo— solo
   cuando el usuario abre la búsqueda, no en cada página. Hoy es el que arrastra el catálogo a todas partes.
3. **Volver servidor las páginas de catálogo.** `app/quiz/[categoryId]/page.tsx` es `"use client"` con
   más de 330 líneas para renderizar una lista. Como componente de servidor, el manifiesto de ese curso
   —y solo ese— se queda en el servidor.

### 3.3 🟠 Nada se genera estático

El build marca **todas** las rutas de `/quiz` como `ƒ (Dynamic) server-rendered on demand`. No hay un
solo `generateStaticParams` ni `export const revalidate` en el proyecto. Las 677 lecciones son
contenido que cambia cada varios meses y se renderiza de nuevo en cada visita.

Con `generateStaticParams` sobre el registry más `revalidate`, esas páginas pasan a servirse del CDN de
Azure. Es la diferencia entre depender de que Supabase y el servidor estén sanos para leer una lección,
y no depender de nada. Combinado con §3.1, el sitio de lectura queda completamente estático.

### 3.4 🟡 Otras dos, menores

- `lib/content/search-index.json` pesa **290 KB**. Se carga con `import()` diferido, que es lo correcto,
  pero la primera búsqueda de un alumno con datos móviles cuesta esos 290 KB. Recortar campos, partirlo
  por curso, o moverlo detrás de un route handler que filtre en el servidor.
- `QuizClient` hace `if (!loaded) return null` mientras espera al `useEffect` que lee `localStorage`. El
  HTML del servidor de la página de quiz llega vacío: se paga el SSR dinámico y no se aprovecha, y el
  alumno ve un parpadeo en blanco. Con `generateStaticParams` esto deja de importar; si no, conviene al
  menos un esqueleto en vez de `null`.

---

## 4. Calidad del contenido

Los números de esta sección salen de recorrer las **677 lecciones listadas en los manifiestos** (no los
685 archivos del directorio). Complementan al plan de auditoría: acá está lo que un script detecta.

### 4.1 Lo que está sano

Vale decirlo primero, porque acota el resto: **no quedan marcadores `REVISAR_MANUAL` ni `PENDIENTE`**,
no hay `correctAnswer` fuera de rango, no hay preguntas con menos de dos opciones, no hay opciones
duplicadas dentro de una pregunta, no hay desfasajes entre `questionCount`/`hasStudy` del manifiesto y
los archivos, no quedan lecciones con `contexto` de menos de 400 caracteres, y del barrido de "espacio
antes de puntuación" quedan **3 casos** (`leccion-49`, `-61`, `-68` de AT-1, todos `". ."`), no los 89
que registra el plan. Esa parte está cerrada.

### 4.2 🟠 139 lecciones de 677 no ofrecen material de repaso

| Curso | Lecciones | Sin secciones | Sin preguntas | Escrituras | Citas de líder |
|---|---:|---:|---:|---:|---:|
| `nuevo-testamento` | 78 | **78** | 0 | 0 | 0 |
| `Bloques` | 24 | **24** | 7 | 0 | 0 |
| `religion-225` | 28 | **23** | **23** | 10 | 5 |
| `libro-de-mormon-1` | 91 | 13 | 1 | 230 | 92 |
| `antiguo-testamento-1` | 89 | 1 | 6 | 279 | 110 |
| resto (8 cursos) | 367 | 0 | 0 | 990 | 414 |
| **Total** | **677** | **139** | **37** | **1.509** | **621** |

La UI lo maneja bien —`lesson-card` y `flat-lesson-list` esconden el botón de estudio cuando `hasStudy`
es falso— así que no es un error visible. Pero el 21 % del catálogo es un título sin nada detrás, y
`religion-225` está prácticamente vacío: 23 de 28 lecciones sin secciones **y** sin preguntas.
`nuevo-testamento` y `Bloques` ya figuran como pendientes de generación en el plan; `religion-225`
conviene sumarlo a esa lista, o sacarlo del catálogo hasta que tenga contenido.

Las 13 lecciones sin secciones de `libro-de-mormon-1` merecen una mirada aparte: es un curso marcado
como cerrado en las tres auditorías, así que probablemente sean huecos de la reconstrucción, no material
nunca escrito.

### 4.3 🟠 Retroalimentación: 89 % de las preguntas no explica nada

| Campo | Preguntas sin él | % |
|---|---:|---:|
| `explanation` | 3.571 de 3.992 | **89 %** |
| `reference` | 3.677 de 3.992 | **92 %** |

Y las que sí lo tienen tampoco lo muestran (§1.3). Un alumno que se equivoca no se entera de por qué ni
sabe adónde volver a leer. Dado que cada lección ya tiene su sección `escrituras` con referencias
verificadas, generar `reference` es en buena medida mecánico: enlazar la pregunta al pasaje del que
salió. Es el mayor retorno pedagógico disponible por unidad de trabajo, y encaja natural en el ciclo de
`seminary-enrichment`.

### 4.4 🟡 80 escrituras sin enlace, concentradas en dos cursos

`religion-301` tiene **70 de 87** referencias sin `link`, y `religion-225` **10 de 10**. Los otros diez
cursos están al 100 %. Sin `link`, el alumno no puede saltar al texto en churchofjesuschrist.org y —más
importante para el proyecto— la auditoría automática de escrituras no puede verificarlas, que es
justamente por qué esos dos cursos siguen en 🔴 en el plan. Resolver los enlaces desbloquea la auditoría.

### 4.5 🟡 Ocho archivos huérfanos en `doctrina-y-convenios-2`

El directorio tiene 56 archivos y el manifiesto lista 48. Esos 8 archivos —56 preguntas— no los muestra
la app, pero sí los cuentan los scripts que recorren el directorio en vez del manifiesto, que es
exactamente el error de recuento que documenta §1.5 del plan. Los 45 huérfanos de `libro-de-mormon-2` ya
están limpios; quedan estos.

### 4.6 🟡 Cuatro preguntas repetidas dentro de un mismo curso

```
doctrina-y-convenios-1: "Tomás reza antes de cada examen pidiendo que le 'vaya bien'…"
                        → 195_hacer_senor_aprendizaje y 197-preparar-examenes
libro-de-mormon-2:      "Según la frase clave de Alma 41:10, ¿qué es lo que 'nunca fue'…"
                        → leccion-23-4 y leccion-24-9
libro-de-mormon-2:      "¿Cuáles son los cuatro pasajes de dominio de la doctrina…"
                        → leccion-27-9, leccion-28-9 y leccion-29-5
```

Las de dominio de la doctrina pueden ser repaso deliberado. La de DyC-1 y la de Alma parecen arrastre de
generación. Vale una decisión explícita en cada caso.

### 4.7 🟠 El registro de escritura, sin barrer en 9 cursos

Esto no lo detecta ningún script y ya está señalado en el plan, pero conviene repetirlo acá porque es el
defecto de contenido con más impacto en si un chico de 15 años lee o no: `libro-de-mormon-2` es el único
curso auditado en el eje de **registro** (4-sep-2026, 47 `contexto` reescritos, mediana 82 → 187
palabras). Las medianas de longitud de `contexto` de los demás cursos son sanas (entre 977 y 1.594
caracteres), pero longitud correcta y prosa legible no son lo mismo: una sección puede tener el largo
justo y estar escrita como entrada de enciclopedia. El detector barato está en
`CALIDAD-contexto-libro-de-mormon-2.md` §1.1.

---

## 5. Código y estructura

### 5.1 🔴 No hay ninguna red de seguridad

Cuatro cosas que juntas explican por qué §1.1 sobrevivió tanto:

| | Estado |
|---|---|
| Chequeo de tipos en el build | **Desactivado** — `next.config.mjs` tiene `typescript.ignoreBuildErrors: true` |
| ESLint | **No instalado.** No hay `.eslintrc*` ni `eslint.config.*`, ni un solo paquete `eslint` en `package.json` |
| `npm run lint` | **Roto.** Sigue siendo `next lint`, que Next 16 eliminó: falla con `Invalid project directory provided, no such directory: …\lint` |
| Tests | **Ninguno.** Sin Vitest, Jest, Playwright ni Cypress |
| CI | Solo despliega. No compila ni chequea nada antes de publicar |

`tsc --noEmit` hoy tira **5 errores**: los 2 de §1.1, uno real de API en `components/ui/calendar.tsx`
(`IconLeft` ya no existe en react-day-picker 9 — el componente está muerto igual, ver §5.2), y 2 de
tipos de `exceljs` en `scripts/audit-export.ts`.

**Orden sugerido:** arreglar los 5 errores → quitar `ignoreBuildErrors` → instalar `eslint` +
`eslint-config-next` y cambiar el script a `eslint .` → agregar un job de CI que corra `tsc --noEmit` y
`next build` en cada push. Los tests pueden esperar, pero un `validate-content.ts` corriendo en CI sobre
los JSON valdría mucho: el contenido es el activo del proyecto y hoy nada lo valida automáticamente.

### 5.2 🟡 Código muerto: 40 componentes y ~33 dependencias

De los 49 archivos de `components/ui/`, **la app usa 9**: `badge`, `button`, `card`, `command`, `dialog`,
`label`, `progress`, `textarea`, `toast`. Los otros 40 son el volcado inicial de shadcn/v0 y nadie los
importa.

Eso arrastra dependencias: de los **28 paquetes `@radix-ui/*`** de `package.json`, los componentes vivos
solo necesitan **5** (`react-slot`, `react-dialog`, `react-label`, `react-progress`, `react-toast`). Y
además sobran `@hookform/resolvers`, `react-hook-form`, `date-fns`, `embla-carousel-react`, `input-otp`,
`react-day-picker`, `react-resizable-panels`, `sonner`, `vaul`, y **`html2canvas`, que no lo importa
nadie** — `lib/pdf/lesson-pdf.ts` usa solo `jspdf`, y con `import()` dinámico, que está bien.

Componentes propios sin referencias:

- `components/lesson-notes.tsx` — reemplazado por `components/study/lesson-notes.tsx`
- `components/study/export-pdf-button.tsx` — el README todavía lo documenta
- `components/written-question-card.tsx`
- `scripts/_tmp-verif.ts` — temporal que quedó

Sacarlo todo baja el tiempo de instalación, la superficie de vulnerabilidades a auditar y —sobre todo—
el ruido para quien lea el proyecto por primera vez.

### 5.3 🟡 `/estudio`: una función a medio hacer, publicada

`app/estudio/` son 231 líneas entre 6 archivos, y está en producción:

- `app/estudio/page.tsx` es un placeholder de 12 líneas: *"Bienvenido al centro de estudio. Selecciona
  una opción en el menú lateral"*.
- Usa `text-slate-600` y demás colores crudos en vez de los tokens del tema: **28 de los 59 usos de
  colores hardcodeados de todo el proyecto** están en esos tres archivos, así que la sección se rompe en
  modo oscuro.
- No la enlaza `site-header` ni ninguna otra página: solo su propio `components/layout/sidebar.tsx`.
- No tiene guard de sesión, es públicamente accesible.

Decidir: terminarla, o sacarla de `app/` hasta que se retome. Publicada y sin enlazar es lo peor de las
dos opciones.

### 5.4 🟡 Convenciones y detalles

- **Nombres de archivo mezclados.** Todo `components/` usa kebab-case salvo `components/editor/`, que
  usa PascalCase — y de forma inconsistente consigo mismo: `LessonSelector.tsx` y `QuestionEditor.tsx`
  conviven con `Editorguide.tsx` y `Lessonpreview.tsx`.
- **24 `any`** fuera de `components/ui/`. Los más significativos están en `components/category-card.tsx`
  (`(category as any).weeks`, `(category as any).lessons`), que esquivan los type guards `isFlatCategory`
  que `lib/types.ts` ya define para exactamente eso.
- **`middleware.ts` está deprecado en Next 16.** El build avisa:
  `The "middleware" file convention is deprecated. Please use "proxy" instead.` Renombrarlo cuando se
  toque para §3.1.
- **`package.json` sigue llamándose `"my-project"`.**
- **`MAINTENANCE_MODE` y el bloque de mantenimiento están comentados** en `middleware.ts`, con
  instrucciones en prosa de cómo descomentarlos. El flag booleano ya existe: dejar el código vivo y que
  la constante decida, o sacarlo del todo.
- **El README raíz está desactualizado.** Sigue diciendo `EduSei2`, documenta `export-pdf-button.tsx`
  (muerto), lista `html2canvas`, `date-fns` y React Hook Form como stack, y describe la arquitectura de
  datos anterior a la reestructuración de agosto. Es lo primero que lee cualquiera que llegue al proyecto.

---

## 6. Producto y sitio: qué le falta al alumno

### 6.1 El progreso vive solo en el navegador, aunque haya cuentas

Doce archivos escriben en `localStorage`: notas, respuestas escritas, lecciones completadas, nombre del
alumno, intentos de quiz, borradores del editor. Nada de eso se sincroniza con la cuenta, **y el proyecto
ya tiene cuentas, roles, clases y códigos de invitación funcionando**.

Consecuencias concretas: el alumno que estudia en la computadora de casa y rinde en el celular empieza de
cero; borrar los datos del sitio borra un semestre de notas; y el maestro que ya tiene su clase armada en
`/maestro/clases` no puede ver el progreso de nadie, aunque tenga toda la estructura para hacerlo.

`lib/notes-storage.ts` ya define un `BackupData` con versión y fecha, así que el modelo de datos está
pensado — solo le falta el destino. Sincronizar notas, completados e intentos contra Supabase para el
usuario con sesión (manteniendo `localStorage` como fallback anónimo) es probablemente **la mejora de
producto más grande disponible**, y la que cierra el círculo entre las dos mitades del sistema.

### 6.2 No hay pantallas de error

No existe ningún `error.tsx` ni `global-error.tsx` en todo `app/`. Sí hay `loading.tsx` y `not-found.tsx`
en las rutas de quiz, pero cualquier excepción en un componente de servidor —una lección con JSON
corrupto, Supabase caído— le muestra al alumno la pantalla de error genérica de Next. Un `app/error.tsx`
con un mensaje en español y un enlace de vuelta cuesta 20 líneas.

### 6.3 El sitio no tiene identidad ni existe para los buscadores

**No hay directorio `public/`.** Ni uno. Eso implica: sin favicon (el `pathname.startsWith("/favicon")`
del middleware no protege nada), sin imagen de Open Graph —así que compartir una lección por WhatsApp,
que es un flujo explícito del producto, muestra una tarjeta vacía—, sin `robots.txt`, sin `sitemap.xml`
y sin manifest de PWA.

`app/layout.tsx` define `title` y `description` genéricos y no define `metadataBase`, así que las URLs
relativas de metadata no resuelven. Las páginas de lección sí tienen `generateMetadata` con título y
descripción propios, que es la mitad difícil: falta el `openGraph` y un `app/opengraph-image.tsx`.

Para un sitio con 677 lecciones de contenido original en español, no tener sitemap es dejar sobre la mesa
todo el tráfico de búsqueda.

### 6.4 Ideas de producto, por relación valor/costo

| Mejora | Por qué | Costo |
|---|---|---|
| Mostrar `explanation` + `reference` tras responder | Convierte el quiz de evaluación en enseñanza (§1.3, §4.3) | Bajo |
| "Seguir donde quedaste" en la portada | El dato ya está en `localStorage`; hoy no se usa para nada | Bajo |
| Marcar la semana en curso | `app/quiz/[categoryId]/page.tsx` ya parsea `dateRange` con `parseWeekDateRange`; falta destacarla en el listado | Bajo |
| PWA + lectura offline | Las lecciones son estáticas y el público estudia desde el celular, a veces sin datos | Medio |
| Progreso en la cuenta (§6.1) | Cierra el círculo alumno↔maestro que el sistema ya tiene a medias | Medio-alto |
| Vista de progreso para el maestro | `class_members` y `events` ya existen; falta la pantalla | Medio |

### 6.5 Accesibilidad

34 atributos ARIA en todo el código fuera de `components/ui/`, y en el quiz solo dos (`aria-label` y
`aria-current` en los pills de navegación). Lo mínimo que falta:

- Las opciones de respuesta son `<button>` sueltos. Deberían ser un `role="radiogroup"` con
  `aria-checked`, o `<input type="radio">` reales: hoy un lector de pantalla no anuncia que son
  alternativas excluyentes ni cuántas hay.
- El resultado de responder (correcto/incorrecto) cambia visualmente sin `aria-live`, así que no se
  anuncia.
- Las animaciones de `useAnswerAnimation` (la sacudida al errar) no consultan `prefers-reduced-motion`.
- Las imágenes del manual se insertan sin `width`/`height`, lo que provoca saltos de layout mientras
  cargan desde el servidor de la Iglesia. El `alt` sí está. Se pueden fijar dimensiones sin violar la
  restricción de no proxear los bytes, que está bien documentada en `lib/content/imagenes.ts`.

---

## 7. Orden sugerido

**Primera tanda — una tarde, riesgo bajo, impacto alto**

1. Agregar `createAdminClient` a `lib/supabase-admin.ts` (§1.1).
2. Invertir el guard de `use-shuffled-questions.ts` (§1.2).
3. Achicar el `matcher` del middleware a las rutas con sesión (§3.1).
4. Mostrar `explanation` y `reference` en `question-card.tsx` (§1.3).
5. Arreglar los 5 errores de `tsc` y quitar `ignoreBuildErrors` (§5.1).
6. Usar `category.courseType` en la página de quiz (§1.5).

**Segunda tanda — una semana**

7. Migrar `/analytics` a autenticación por rol y borrar `ADMIN_SECRET` (§2.1).
8. Instalar ESLint, arreglar `npm run lint`, agregar un job de CI que corra `tsc` + `build` (§5.1).
9. `generateStaticParams` + `revalidate` en las rutas de lección (§3.3).
10. Borrar los 40 `ui/` muertos, los 4 componentes huérfanos y las ~33 dependencias (§5.2).
11. Verificar qué credenciales de Supabase quedan en el build desplegado (§2.5).
12. `app/error.tsx`, `public/` con favicon e imagen OG, `robots.txt` y `sitemap.xml` (§6.2, §6.3).
13. Arreglar `?next=` y unificar el nombre del parámetro (§1.4).

**Tercera tanda — proyecto**

14. Partir los manifiestos, sacar el buscador del header y volver servidor las páginas de catálogo (§3.2).
15. Sincronizar el progreso del alumno con su cuenta (§6.1).
16. Contenido: enlaces de escritura de R-301 y R-225 (§4.4), los 8 huérfanos de DyC-2 (§4.5), las
    preguntas duplicadas (§4.6), `explanation`/`reference` en el corpus (§4.3), y generar
    `nuevo-testamento`, `Bloques` y `religion-225` (§4.2).
17. Decidir el destino de `/estudio` (§5.3) y actualizar el README raíz (§5.4).

---

## Anexo: cómo reproducir estos números

```bash
npx tsc --noEmit --pretty false          # 5 errores (§1.1, §5.1)
npm run build                            # rutas dinámicas, aviso de middleware (§3.3, §5.4)
npm run lint                             # falla: next lint ya no existe (§5.1)

# peso del registry en el bundle del cliente (§3.2)
grep -rl "r200-l01" .next/static/chunks | wc -l
grep -rl "r200-l01" .next/static/chunks | xargs ls -la | awk '{s+=$5} END {print s/1024 "KB"}'

# componentes ui sin usar (§5.2)
for f in components/ui/*.tsx; do b=$(basename "$f" .tsx); \
  n=$(grep -rl "ui/$b" app components lib hooks --include=*.tsx --include=*.ts \
      | grep -v "^components/ui/" | wc -l); \
  [ "$n" -eq 0 ] && echo "sin uso: $b"; done
```

Las estadísticas de contenido de §4 salen de recorrer cada `_manifest.json`, resolver sus lecciones a
archivos y sumar `secciones`, `questions`, `escrituras.citas[]`, `enseñanza` y bloques de `resumen` —
el mismo criterio "por manifiesto, no por directorio" que fija §1.5 del plan de auditoría.
