# EduSei2

Plataforma web educativa interactiva para el **Seminario e Instituto de La Iglesia de Jesucristo de los Santos de los Últimos Días**. Permite a estudiantes practicar mediante cuestionarios, estudiar material resumido y a maestros asignar y dar seguimiento a lecciones de recuperación.

---

## Tabla de contenidos

- [Descripción general](#descripción-general)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación y uso](#instalación-y-uso)
- [Arquitectura de datos](#arquitectura-de-datos)
- [Flujos principales](#flujos-principales)
- [Componentes destacados](#componentes-destacados)
- [Persistencia y almacenamiento](#persistencia-y-almacenamiento)
- [Categorías disponibles](#categorías-disponibles)

---

## Descripción general

EduSei2 ofrece tres modos de interacción principales:

| Modo | Descripción |
|------|-------------|
| **Quiz** | Preguntas de opción múltiple y respuesta abierta por lección |
| **Estudio** | Resúmenes estructurados con notas y exportación a PDF |
| **Recuperación** | Sistema para que maestros asignen lecciones y alumnos reporten progreso |

---

## Stack tecnológico

| Tecnología | Versión | Rol |
|------------|---------|-----|
| Next.js | 16.1.6 | Framework principal (App Router) |
| React | 19.2.3 | Biblioteca UI |
| TypeScript | 5.7.3 | Tipado estático (modo strict) |
| Tailwind CSS | 3.4.17 | Estilos utility-first |
| shadcn/ui + Radix UI | — | Componentes accesibles |
| Zod + React Hook Form | — | Validación de formularios |
| jsPDF + html2canvas | — | Exportación a PDF |
| Sonner | 1.7.1 | Notificaciones toast |
| Recharts | 2.15.0 | Gráficas de progreso |
| date-fns | 4.1.0 | Manejo de fechas |

---

## Estructura del proyecto

```
EduSei2/
├── app/                            # Rutas Next.js (App Router)
│   ├── page.tsx                    # Página de inicio
│   ├── layout.tsx                  # Layout global
│   ├── globals.css                 # Estilos globales
│   ├── quiz/
│   │   └── [categoryId]/
│   │       ├── page.tsx            # Lista de lecciones por categoría
│   │       └── [lessonId]/
│   │           ├── page.tsx        # Quiz interactivo
│   │           └── study/
│   │               └── page.tsx    # Modo de estudio
│   └── recuperar/
│       └── page.tsx                # Dashboard de recuperación
│
├── components/                     # Componentes reutilizables
│   ├── quiz-client.tsx             # Lógica principal del quiz
│   ├── question-card.tsx           # Tarjeta de pregunta
│   ├── written-question-card.tsx   # Pregunta de respuesta abierta
│   ├── quiz-results.tsx            # Pantalla de resultados
│   ├── lesson-search.tsx           # Buscador global
│   ├── site-header.tsx             # Encabezado con navegación
│   ├── recovery/                   # Componentes del modo recuperación
│   │   ├── recovery-dashboard.tsx
│   │   ├── pending-lesson-card.tsx
│   │   ├── completed-lesson-card.tsx
│   │   └── progress-ring.tsx
│   ├── study/                      # Componentes del modo estudio
│   │   ├── study-header.tsx
│   │   ├── bloque-view.tsx
│   │   ├── seccion-view.tsx
│   │   ├── lesson-notes.tsx
│   │   └── export-pdf-button.tsx
│   └── ui/                         # Primitivos de shadcn/ui
│
├── hooks/                          # React hooks personalizados
│   ├── use-export-pdf.ts
│   ├── use-mobile.tsx
│   └── use-share-with-name.ts
│
├── lib/                            # Lógica de negocio y datos
│   ├── types.ts                    # Tipos TypeScript globales
│   ├── utils.ts                    # Utilidades (reportes, verificación)
│   ├── quiz-data.ts                # Exportación central de categorías
│   ├── recovery-storage.ts         # Persistencia del plan de recuperación
│   ├── notes-storage.ts            # Persistencia de notas y respuestas
│   └── data/                       # Contenido educativo (~400 KB total)
│       ├── antiguo-testamento/
│       ├── libro-de-mormon/
│       ├── nuevo-testamento.ts
│       ├── doctrina-y-convenios-*.ts
│       ├── bloques.ts
│       ├── religion-225.ts
│       └── religion-250.ts
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

---

## Instalación y uso

### Requisitos previos

- Node.js 18+
- npm o pnpm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/axelh98/edusei2.git
cd edusei2

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con Turbo |
| `npm run build` | Build de producción |
| `npm run start` | Iniciar en modo producción |
| `npm run lint` | Linter de código |

---

## Arquitectura de datos

### Tipos principales (`lib/types.ts`)

```typescript
// Pregunta de quiz
interface Question {
  id: number
  question: string
  type: "multiple" | "written"
  options?: string[]
  correctAnswer?: number
  explanation?: string
}

// Lección individual
interface Lesson {
  id: string
  title: string
  type: string
  description?: string
  chapterUrl?: string
  questions: Question[]
  secciones?: Seccion[]
}

// Semana (para categorías semanales)
interface Week {
  id: string
  title: string
  dateRange?: string
  lessons: Lesson[]
}

// Categoría semanal (Seminario)
interface WeeklyCategory {
  id: string
  title: string
  weeks: Week[]
}

// Categoría plana (Instituto)
interface FlatCategory {
  id: string
  title: string
  lessons: Lesson[]
}
```

### Bloque de resumen de estudio

```typescript
interface BloqueResumen {
  tipo: "parrafo" | "escritura" | "cita" | "doctrinal" | "reflexion"
  contenido: string
  referencia?: string
}
```

---

## Flujos principales

### Flujo de Quiz

```
Inicio → Seleccionar categoría → Seleccionar lección
→ Responder preguntas → Ver resultados → Generar reporte WhatsApp
```

1. El alumno ingresa a `/quiz/[categoryId]` y selecciona una semana y lección.
2. Responde preguntas de opción múltiple (o respuesta abierta).
3. Al finalizar, ve el puntaje y puede compartir un reporte por WhatsApp.

### Flujo de Estudio

```
Seleccionar lección → "Estudiar" → Leer resúmenes por sección
→ Tomar notas → Exportar a PDF
```

1. Desde la página de quiz, el alumno puede entrar al modo `/study`.
2. El contenido se organiza en bloques: contexto, escrituras, enseñanza, conclusión.
3. Las notas se guardan automáticamente en `localStorage`.
4. Se puede exportar el contenido + notas a PDF con un clic.

### Flujo de Recuperación

```
Maestro selecciona lecciones → Comparte link WhatsApp
→ Alumno abre /recuperar?data=xxx → Completa lecciones
→ Genera reporte de progreso
```

1. En la página de categoría, el maestro selecciona lecciones (FAB verde con contador).
2. Se genera un mensaje de WhatsApp con un link codificado.
3. El alumno abre `/recuperar` con el parámetro `data` en la URL.
4. Completa las lecciones asignadas y genera un reporte final.

---

## Componentes destacados

### `quiz-client.tsx`

Maneja el estado completo del quiz:
- Navegación entre preguntas
- Selección y validación de respuestas
- Cálculo de puntaje final
- Integración con el flujo de recuperación

### `recovery-dashboard.tsx`

Dashboard del alumno en modo recuperación:
- Lista de lecciones pendientes y completadas
- Anillo de progreso visual (`progress-ring.tsx`)
- Botón para generar reporte WhatsApp con código de verificación

### `lesson-notes.tsx`

Notas persistentes por lección:
- Guardado automático en `localStorage`
- Soporte para exportación en PDF
- Indicador visual de guardado

### `export-pdf-button.tsx`

Exporta el contenido de estudio y notas a PDF usando `html2canvas` y `jsPDF`.

---

## Persistencia y almacenamiento

Toda la persistencia es del lado del cliente usando `localStorage`. No hay base de datos ni backend.

| Módulo | Clave en localStorage | Datos guardados |
|--------|----------------------|-----------------|
| `notes-storage.ts` | `lesson-note-[id]` | Notas por lección |
| `notes-storage.ts` | `written-answer-[id]-[qid]` | Respuestas abiertas |
| `notes-storage.ts` | `completed-lessons` | Lecciones completadas |
| `recovery-storage.ts` | `recovery-plan` | Plan de recuperación activo |
| `utils.ts` | `student-name` | Nombre del alumno |

### Backup y restauración

`notes-storage.ts` incluye funciones `exportBackup()` e `importBackup()` para exportar/importar todos los datos como JSON versionado.

---

## Categorías disponibles

### Seminario (estructura por semanas)

| ID | Título | Semestre |
|----|--------|----------|
| `antiguo-testamento-1` | Antiguo Testamento | Primer semestre |
| `antiguo-testamento-2` | Antiguo Testamento | Segundo semestre |
| `nuevo-testamento` | Nuevo Testamento | Anual |
| `libro-de-mormon-1` | Libro de Mormón | Primer semestre |
| `libro-de-mormon-2` | Libro de Mormón | Segundo semestre |
| `doctrina-y-convenios-1` | Doctrina y Convenios | Primer semestre |
| `doctrina-y-convenios-2` | Doctrina y Convenios | Segundo semestre |

### Instituto (estructura plana)

| ID | Título |
|----|--------|
| `religion-225` | Religión 225 |
| `religion-250` | Religión 250 |

### Bloques de escrituras

| ID | Título |
|----|--------|
| `bloques` | Bloques de escrituras |

---

## Generación de reportes

`lib/utils.ts` provee funciones para generar mensajes de WhatsApp:

- **`generateVerificationCode()`** — Genera un código único con formato `MSI-YYYYMMDD-INIC-XXX` para verificar la autenticidad de los reportes.
- **`generateAssignmentMessage()`** — Mensaje del maestro asignando lecciones al alumno.
- **`generateWhatsAppReport()`** — Reporte de progreso del alumno con puntajes y código de verificación.
- **`generateSingleQuizReport()`** — Reporte individual de un quiz completado.
