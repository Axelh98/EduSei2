import type { Week } from "@/lib/types"

// Semanas 1-5
import {
  dc19_1_24_parte1Questions,
  dc19_1_24_parte2Questions,
  dc19_25_41Questions,
  fortalecer_cimientoQuestions,
  buscar_revelacionQuestions,
  dc20_1_36Questions,
  dc20_37_68_79Questions,
  dc21Questions,
  examinar_perspectivaQuestions,
  fuentes_divinasQuestions,
  dc23_24Questions,
  dc25_parte1Questions,
  dc25_parte2Questions,
  actuar_fe_encontrar_respuestasQuestions,
  fijar_metasQuestions,
  dc27_1_14Questions,
  dc27_15_18Questions,
  dc28Questions,
  encontrar_verdadesQuestions,
  enfocarse_jcQuestions,
  dc29_1_8Questions,
  dc29_9_29Questions,
  dc29_36_50Questions,
  preparar_conferencia_generalQuestions,
  mensajes_siervosQuestions,
} from "./doctrinas-convenios/questions/DC1-preguntas-1-5"

// Semanas 6-10
import {
  dc30_36_parte1Questions,
  dc30_36_parte2Questions,
  dc35Questions,
  dominioPractica3Questions,
  ensenanza_profeta_actualQuestions,
  el_cristo_viviente_parte1Questions,
  el_cristo_viviente_parte2Questions,
  pascua_resurreccionQuestions,
  evalua_aprendizaje_3Questions,
  dc37_38_parte1Questions,
  dc38_parte2Questions,
  dc39_40Questions,
  tomar_notas_escriturasQuestions,
  dc41Questions,
  dc42_parte1Questions,
  dc42_29_39Questions,
  importancia_educacionQuestions,
  dc45_1_8Questions,
  dc45_9_75_parte1Questions,
  dc45_9_75_parte2Questions,
  senor_aprendizajeQuestions,
  integridad_educacionQuestions,
} from "./doctrinas-convenios/questions/DC1-preguntas-6-10"

// Semanas 11-15
import {
  preparar_examenesQuestions,
  dc46_1_6Questions,
  dc46_7_33_parte1Questions,
  dc46_7_33_parte2Questions,
  dc49Questions,
  dc50_parte1Questions,
  dc50_parte2Questions,
  evalua_aprendizaje_4Questions,
  dc51Questions,
  dc57Questions,
  dominioPractica4Questions,
  mentalidad_crecimientoQuestions,
  autosuficiencia_senorQuestions,
  dc58_26_29Questions,
  dc58_38_60Questions,
  dc59Questions,
  descubre_fortalezasQuestions,
  desarrollar_habilidadesQuestions,
  fe_autosuficienciaQuestions,
  administracion_recursosQuestions,
  dc60_62Questions,
  dc63_1_23Questions,
  dc63_57_64Questions,
} from "./doctrinas-convenios/questions/DC1-preguntas-11-15"

// Semanas 16-20
import {
  autosuficiencia_cuidar_otrosQuestions,
  dc64_1_17Questions,
  dc64_20_43Questions,
  dc65Questions,
  dc67Questions,
  dc68_25_31Questions,
  plantilla_lideresQuestions,
  decisiones_eternidadQuestions,
  herramientas_escriturasQuestions,
  dc71Questions,
  dominioPractica5Questions,
  evalua_aprendizaje_5Questions,
  contexto_escriturasQuestions,
  cuidar_cuerpoQuestions,
  dc76_1_19Questions,
  dc76_19_24Questions,
  dc76_50_70Questions,
  dc76_71_112Questions,
  fortaleza_emocionalQuestions,
  dc78Questions,
  dc79_80Questions,
} from "./doctrinas-convenios/questions/DC1-preguntas-16-20"

export const doctrinaYConveniosWeeks1semestre: Week[] = [

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 1 — 3 al 9 de Marzo — D&C 19
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Semana 1",
    dateRange: "3 al 9 de Marzo",
    lessons: [
      {
        id: "31-dc-19-1-24-parte-1",
        title: "Doctrina y Convenios 19:1-24, Parte 1",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/101-doctrine-and-covenants-19-1-24-part-1?lang=spa",
        description: "Jesucristo se sometió a la voluntad del Padre Celestial",
        secciones: [],
        questions: dc19_1_24_parte1Questions,
      },
      {
        id: "32-dc-19-1-24-parte-2",
        title: "Doctrina y Convenios 19:1-24, Parte 2",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/102-doctrine-and-covenants-19-1-24-part-2?lang=spa",
        description: "\"Yo, Jesucristo, he padecido estas cosas por todos\"",
        secciones: [],
        questions: dc19_1_24_parte2Questions,
      },
      {
        id: "33-dc-19-25-41",
        title: "Doctrina y Convenios 19:25-41",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/103-doctrine-and-covenants-19-25-41?lang=spa",
        description: "Ver los sacrificios con una perspectiva eterna",
        secciones: [],
        questions: dc19_25_41Questions,
      },
      {
        id: "164-fortalecer-cimiento",
        title: "Fortalecer tu cimiento espiritual",
        type: "Dominio de la Doctrina",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/521-introduction-to-doctrinal-mastery?lang=spa",
        description: "Introducción al Dominio de la Doctrina",
        secciones: [],
        questions: fortalecer_cimientoQuestions,
      },
      {
        id: "165-buscar-revelacion",
        title: "Buscar revelación personal para mis preguntas",
        type: "Dominio de la Doctrina",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/522-acquiring-spiritual-knowledge-part-1?lang=spa",
        description: "Principios para adquirir conocimiento espiritual - Parte 1",
        secciones: [],
        questions: buscar_revelacionQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 2 — 10 al 16 de Marzo — D&C 20-21
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Semana 2",
    dateRange: "10 al 16 de Marzo",
    lessons: [
      {
        id: "35-dc-20-1-36",
        title: "Doctrina y Convenios 20:1-36",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/111-doctrine-and-covenants-20-1-36?lang=spa",
        description: "La organización de la Iglesia de Jesucristo",
        secciones: [],
        questions: dc20_1_36Questions,
      },
      {
        id: "36-dc-20-37-68-79",
        title: "Doctrina y Convenios 20:37, 68-79",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/112-doctrine-and-covenants-20-37?lang=spa",
        description: "El bautismo y la Santa Cena: cumplir las expectativas del Señor",
        secciones: [],
        questions: dc20_37_68_79Questions,
      },
      {
        id: "37-dc-21",
        title: "Doctrina y Convenios 21",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/113-doctrine-and-covenants-21?lang=spa",
        description: "Recibir las palabras del profeta",
        secciones: [],
        questions: dc21Questions,
      },
      {
        id: "166-examinar-perspectiva",
        title: "Actuar con fe para encontrar respuestas",
        type: "Dominio de la Doctrina",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/523-acquiring-spiritual-knowledge-part-2?lang=spa",
        description: "Principios para adquirir conocimiento espiritual - Parte 2",
        secciones: [],
        questions: examinar_perspectivaQuestions,
      },
      {
        id: "167-fuentes-divinas",
        title: "Analizar temas y preguntas del Evangelio con una perspectiva eterna",
        type: "Dominio de la Doctrina",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/524-acquiring-spiritual-knowledge-part-3?lang=spa",
        description: "Principios para adquirir conocimiento espiritual - Parte 3",
        secciones: [],
        questions: fuentes_divinasQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 3 — 17 al 23 de Marzo — D&C 23-26
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Semana 3",
    dateRange: "17 al 23 de Marzo",
    lessons: [
      {
        id: "38-dc-23-24",
        title: "Doctrina y Convenios 23–24",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/121-doctrine-and-covenants-23-24?lang=spa",
        description: "\"Te hablo a ti\" — El Padre Celestial y Jesucristo te conocen",
        secciones: [],
        questions: dc23_24Questions,
      },
      {
        id: "39-dc-25-parte-1",
        title: "Doctrina y Convenios 25, Parte 1",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/122-doctrine-and-covenants-25-part-1?lang=spa",
        description: "Emma Smith, mi hija — Cómo llegar a ser como el Salvador",
        secciones: [],
        questions: dc25_parte1Questions,
      },
      {
        id: "39b-dc-25-parte-2",
        title: "Doctrina y Convenios 25, Parte 2",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/123-doctrine-and-covenants-25-part-2?lang=spa",
        description: "Buscar las cosas de un mundo mejor",
        secciones: [],
        questions: dc25_parte2Questions,
      },
      {
        id: "166-actuar-fe-encontrar-respuestas",
        title: "Recurrir a las fuentes divinamente señaladas como ayuda para encontrar respuestas",
        type: "Dominio de la Doctrina",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/525-acquiring-spiritual-knowledge-part-4?lang=spa",
        description: "Principios para adquirir conocimiento espiritual - Parte 4",
        secciones: [],
        questions: actuar_fe_encontrar_respuestasQuestions,
      },
      {
        id: "167-fijar-metas",
        title: "Fijar metas",
        type: "Dominio de la Doctrina",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/552-setting-goals?lang=spa",
        description: "Cómo establecer y alcanzar metas espirituales",
        secciones: [],
        questions: fijar_metasQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 4 — 24 al 30 de Marzo — D&C 27-28
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Semana 4",
    dateRange: "24 al 30 de Marzo",
    lessons: [
      {
        id: "41-dc-27-1-14",
        title: "Doctrina y Convenios 27:1–14",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/131-doctrine-and-covenants-27-1-14?lang=spa",
        description: "\"Con la mira puesta únicamente en mi gloria\"",
        secciones: [],
        questions: dc27_1_14Questions,
      },
      {
        id: "42-dc-27-15-18",
        title: "Doctrina y Convenios 27:15–18",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/132-doctrine-and-covenants-27-15-18?lang=spa",
        description: "\"Tomad sobre vosotros toda mi armadura\"",
        secciones: [],
        questions: dc27_15_18Questions,
      },
      {
        id: "43-dc-28",
        title: "Doctrina y Convenios 28",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/133-doctrine-and-covenants-28?lang=spa",
        description: "El orden de la revelación en la Iglesia",
        secciones: [],
        questions: dc28Questions,
      },
      {
        id: "169-encontrar-verdades-evangelio",
        title: "Encontrar verdades del Evangelio en las Escrituras",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/532-finding-gospel-truths-in-the-scriptures?lang=spa",
        description: "Identificar y aplicar principios del Evangelio al estudiar",
        secciones: [],
        questions: encontrar_verdadesQuestions,
      },
      {
        id: "168-enfocarse-jc-escrituras",
        title: "Centrarse en Jesucristo en las Escrituras",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/531-focusing-on-jesus-christ-in-the-scriptures?lang=spa",
        description: "Técnicas para encontrar a Cristo en el estudio de las Escrituras",
        secciones: [],
        questions: enfocarse_jcQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 5 — 31 de Marzo al 6 de Abril — D&C 29
  // Lun 31 y Mar 1: FERIADOS (Pascua/Semana Santa)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Semana 5",
    dateRange: "31 de Marzo al 6 de Abril",
    lessons: [
      {
        id: "44-dc-29-1-8",
        title: "Doctrina y Convenios 29:1–8",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/141-doctrine-and-covenants-29-1-8?lang=spa",
        description: "Escucha a tu Redentor",
        secciones: [],
        questions: dc29_1_8Questions,
      },
      {
        id: "45-dc-29-9-29",
        title: "Doctrina y Convenios 29:9–29",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/142-doctrine-and-covenants-29-9-29?lang=spa",
        description: "Sentir gozo por la Segunda Venida de Jesucristo",
        secciones: [],
        questions: dc29_9_29Questions,
      },
      {
        id: "46-dc-29-36-50",
        title: "Doctrina y Convenios 29:36–50",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/143-doctrine-and-covenants-29-36-50?lang=spa",
        description: "El albedrío y la redención de los niños pequeños",
        secciones: [],
        questions: dc29_36_50Questions,
      },
      {
        id: "170-preparar-conferencia-general",
        title: "Prepararse para la conferencia general",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/541-preparing-for-general-conference?lang=spa",
        description: "Cómo prepararse espiritualmente para recibir los mensajes del profeta",
        secciones: [],
        questions: preparar_conferencia_generalQuestions,
      },
      {
        id: "171-mensajes-siervos",
        title: "Estudiar los mensajes de los siervos del Señor",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/542-studying-the-messages-of-the-lords-servants?lang=spa",
        description: "Herramientas para estudiar y aplicar la Conferencia General",
        secciones: [],
        questions: mensajes_siervosQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 6 — 7 al 13 de Abril — D&C 30-36
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Semana 6",
    dateRange: "7 al 13 de Abril",
    lessons: [
      {
        id: "47-dc-30-36-parte-1",
        title: "Doctrina y Convenios 30–36, Parte 1",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/151-doctrine-and-covenants-30-36-part-1?lang=spa",
        description: "Llamados a predicar el Evangelio",
        secciones: [],
        questions: dc30_36_parte1Questions,
      },
      {
        id: "48-dc-30-36-parte-2",
        title: "Doctrina y Convenios 30–36, Parte 2",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/152-doctrine-and-covenants-30-36-part-2?lang=spa",
        description: "Llamados a proclamar el Evangelio de Jesucristo",
        secciones: [],
        questions: dc30_36_parte2Questions,
      },
      {
        id: "49-dc-35",
        title: "Doctrina y Convenios 35",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/153-doctrine-and-covenants-35?lang=spa",
        description: "El llamado de Sidney Rigdon",
        secciones: [],
        questions: dc35Questions,
      },
      {
        id: "50-dominio-practica-3",
        title: "Práctica del Dominio de la doctrina 3",
        type: "Dominio de la Doctrina",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/154-doctrinal-mastery-practice-3?lang=spa",
        description: "Repaso y aplicación práctica de pasajes clave",
        secciones: [],
        questions: dominioPractica3Questions,
      },
      {
        id: "ensenanza-profeta-actual",
        title: "Enseñanza del profeta actual",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/543-template-teachings-of-church-leaders?lang=spa",
        description: "Cómo estudiar y aplicar las enseñanzas de los líderes de la Iglesia",
        secciones: [],
        questions: ensenanza_profeta_actualQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 7 — 14 al 20 de Abril — PASCUA DE RESURRECCIÓN
  // Vie 18: FERIADO (Viernes Santo)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Semana 7",
    dateRange: "14 al 20 de Abril",
    lessons: [
      {
        id: "162-el-cristo-viviente-parte-1",
        title: "El Cristo Viviente, Parte 1",
        type: "Especial",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/511-the-living-christ-part-1?lang=spa",
        description: "Estudio y memorización del testimonio del Cristo Viviente",
        secciones: [],
        questions: el_cristo_viviente_parte1Questions,
      },
      {
        id: "163-el-cristo-viviente-parte-2",
        title: "El Cristo Viviente, Parte 2",
        type: "Especial",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/512-the-living-christ-part-2?lang=spa",
        description: "Aplicación del testimonio del Cristo Viviente a la vida personal",
        secciones: [],
        questions: el_cristo_viviente_parte2Questions,
      },
      {
        id: "pascua-resurreccion",
        title: "Lección Pascua de Resurrección con \"Ven, Sígueme\"",
        type: "Especial",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/16-doctrine-and-covenants-easter?lang=spa&id=title3-p6",
        description: "Celebración de la Resurrección de Jesucristo",
        secciones: [],
        questions: pascua_resurreccionQuestions,
      },
      // Día 4: Día Flexible (sin lección asignada)
      // Día 5: FERIADO
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 8 — 21 al 27 de Abril — D&C 37-40
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Semana 8",
    dateRange: "21 al 27 de Abril",
    lessons: [
      {
        id: "51-dc-37-38-parte-1",
        title: "Doctrina y Convenios 37; 38:1–9, 28–33",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/161-doctrine-and-covenants-37-38?lang=spa",
        description: "El mandamiento de congregarse y el amor de Cristo por los santos",
        secciones: [],
        questions: dc37_38_parte1Questions,
      },
      {
        id: "52-dc-38-parte-2",
        title: "Doctrina y Convenios 38:15–27, 34–42",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/162-doctrine-and-covenants-38-15-27-34-42?lang=spa",
        description: "Principios de unidad, igualdad y preparación en Sion",
        secciones: [],
        questions: dc38_parte2Questions,
      },
      {
        id: "53-dc-39-40",
        title: "Doctrina y Convenios 39–40",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/163-doctrine-and-covenants-39-40?lang=spa",
        description: "El peligro de postergar el arrepentimiento y las promesas a James Covill",
        secciones: [],
        questions: dc39_40Questions,
      },
      {
        id: "54-evalua-aprendizaje-3",
        title: "Evalúa tu aprendizaje 3",
        type: "Especial",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/164-assess-your-learning-3?lang=spa",
        description: "Revisión del aprendizaje del tercer bloque",
        secciones: [],
        questions: evalua_aprendizaje_3Questions,
      },
      {
        id: "171-tomar-notas-escrituras",
        title: "Tomar notas en las Escrituras",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/533-annotating-scriptures?lang=spa",
        description: "Técnicas para marcar y anotar las Escrituras de forma efectiva",
        secciones: [],
        questions: tomar_notas_escriturasQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 9 — 28 de Abril al 4 de Mayo — D&C 41-42
  // Jue 1 Mayo: FERIADO (Día del Trabajador)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Semana 9",
    dateRange: "28 de Abril al 4 de Mayo",
    lessons: [
      {
        id: "55-dc-41",
        title: "Doctrina y Convenios 41",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/171-doctrine-and-covenants-41?lang=spa",
        description: "El Señor llama al primer obispo de la Iglesia",
        secciones: [],
        questions: dc41Questions,
      },
      {
        id: "56-dc-42-parte-1",
        title: "Doctrina y Convenios 42, Parte 1",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/172-doctrine-and-covenants-42?lang=spa",
        description: "Las leyes y mandamientos para guiar a la Iglesia",
        secciones: [],
        questions: dc42_parte1Questions,
      },
      {
        id: "191-importancia-educacion",
        title: "La importancia de la formación académica",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/581-the-importance-of-education?lang=spa",
        description: "Preparación académica como mayordomía del talento",
        secciones: [],
        questions: importancia_educacionQuestions,
      },
      // Día 4: FERIADO
      {
        id: "57-dc-42-29-39",
        title: "Doctrina y Convenios 42:29–39",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/173-doctrine-and-covenants-42-29-39?lang=spa",
        description: "La ley de consagración y el cuidado de los pobres",
        secciones: [],
        questions: dc42_29_39Questions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 10 — 5 al 11 de Mayo — D&C 45
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "Semana 10",
    dateRange: "5 al 11 de Mayo",
    lessons: [
      {
        id: "58-dc-45-1-8",
        title: "Doctrina y Convenios 45:1-8",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/181-doctrine-and-covenants-45-1-8?lang=spa",
        description: "Cristo intercede ante el Padre por nosotros",
        secciones: [],
        questions: dc45_1_8Questions,
      },
      {
        id: "59-dc-45-9-75-parte-1",
        title: "Doctrina y Convenios 45:9-75, Parte 1",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/182-doctrine-and-covenants-45-9-75-part-1?lang=spa",
        description: "Las señales de los tiempos y la Segunda Venida",
        secciones: [],
        questions: dc45_9_75_parte1Questions,
      },
      {
        id: "60-dc-45-9-75-parte-2",
        title: "Doctrina y Convenios 45:9-75, Parte 2",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/183-doctrine-and-covenants-45-9-75-part-2?lang=spa",
        description: "La Nueva Jerusalén y los preparativos para la venida del Señor",
        secciones: [],
        questions: dc45_9_75_parte2Questions,
      },
      {
        id: "195_hacer_senor_aprendizaje",
        title: "Hacer que el Señor forme parte del aprendizaje",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/591-involving-the-lord-in-your-learning?lang=spa",
        description: "Integrar la fe y la oración en la formación académica",
        secciones: [],
        questions: senor_aprendizajeQuestions,
      },
      {
        id: "196-integridad-educacion",
        title: "La integridad en nuestra formación académica",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/592-integrity-in-our-education?lang=spa",
        description: "Ser honesto en el estudio y las evaluaciones académicas",
        secciones: [],
        questions: integridad_educacionQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 11 — 12 al 18 de Mayo — D&C 46
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Semana 11",
    dateRange: "12 al 18 de Mayo",
    lessons: [
      {
        id: "197-preparar-examenes",
        title: "Cómo prepararse para los exámenes y los proyectos difíciles",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/593-preparing-for-tests-and-challenging-projects?lang=spa",
        description: "Estrategias de estudio con principios del Evangelio",
        secciones: [],
        questions: preparar_examenesQuestions,
      },
      // Día 2: Día Flexible (sin lección asignada)
      {
        id: "61-dc-46-1-6",
        title: "Doctrina y Convenios 46:1-6",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/191-doctrine-and-covenants-46-1-6?lang=spa",
        description: "Las reuniones de la Iglesia y la dirección del Espíritu",
        secciones: [],
        questions: dc46_1_6Questions,
      },
      {
        id: "62-dc-46-7-33-parte-1",
        title: "Doctrina y Convenios 46:7-33, Parte 1",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/192-doctrine-and-covenants-46-7-33-part-1?lang=spa",
        description: "Los dones del Espíritu y su propósito",
        secciones: [],
        questions: dc46_7_33_parte1Questions,
      },
      {
        id: "63-dc-46-7-33-parte-2",
        title: "Doctrina y Convenios 46:7-33, Parte 2",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/193-doctrine-and-covenants-46-7-33-part-2?lang=spa",
        description: "Buscar y desarrollar los dones espirituales",
        secciones: [],
        questions: dc46_7_33_parte2Questions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 12 — 19 al 25 de Mayo — D&C 49-50
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 12,
    title: "Semana 12",
    dateRange: "19 al 25 de Mayo",
    lessons: [
      {
        id: "64-dc-49",
        title: "Doctrina y Convenios 49",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/201-doctrine-and-covenants-49?lang=spa",
        description: "Revelación sobre los Shakers y los principios del Evangelio restaurado",
        secciones: [],
        questions: dc49Questions,
      },
      {
        id: "65-dc-50-parte-1",
        title: "Doctrina y Convenios 50, Parte 1",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/202-doctrine-and-covenants-50-part-1?lang=spa",
        description: "Discernir espíritus engañosos mediante el Espíritu Santo",
        secciones: [],
        questions: dc50_parte1Questions,
      },
      {
        id: "66-dc-50-parte-2",
        title: "Doctrina y Convenios 50, Parte 2",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/203-doctrine-and-covenants-50-part-2?lang=spa",
        description: "Enseñar y recibir por el Espíritu",
        secciones: [],
        questions: dc50_parte2Questions,
      },
      {
        id: "67-evalua-aprendizaje-4",
        title: "Evalúa tu aprendizaje 4",
        type: "Especial",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/204-assess-your-learning-4?lang=spa",
        description: "Revisión del aprendizaje del cuarto bloque",
        secciones: [],
        questions: evalua_aprendizaje_4Questions,
      },
      // Día 5: Clase especial semana de ministración (sin URL de lección)
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 13 — 26 de Mayo al 1 de Junio — D&C 51, 57
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 13,
    title: "Semana 13",
    dateRange: "26 de Mayo al 1 de Junio",
    lessons: [
      {
        id: "68-dc-51",
        title: "Doctrina y Convenios 51",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/211-doctrine-and-covenants-51?lang=spa",
        description: "La organización temporal de los santos en Ohio",
        secciones: [],
        questions: dc51Questions,
      },
      {
        id: "69-dc-57",
        title: "Doctrina y Convenios 57",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/212-doctrine-and-covenants-57?lang=spa",
        description: "Independence, Misuri: el lugar central de Sion",
        secciones: [],
        questions: dc57Questions,
      },
      {
        id: "70-dominio-practica-4",
        title: "Práctica del Dominio de la doctrina 4",
        type: "Dominio de la Doctrina",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/213-doctrinal-mastery-practice-4?lang=spa",
        description: "Repaso y aplicación práctica de pasajes clave",
        secciones: [],
        questions: dominioPractica4Questions,
      },
      {
        id: "198-mentalidad-crecimiento",
        title: "Mentalidad de crecimiento",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/594-growth-mindset?lang=spa",
        description: "Desarrollar una mentalidad de crecimiento con el Evangelio",
        secciones: [],
        questions: mentalidad_crecimientoQuestions,
      },
      {
        id: "180-autosuficiencia-senor",
        title: "Desarrollar autosuficiencia a la manera del Señor",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/561-building-the-self-reliance-in-the-lords-way?lang=spa",
        description: "Principios de autosuficiencia según la perspectiva del Evangelio",
        secciones: [],
        questions: autosuficiencia_senorQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 14 — 2 al 8 de Junio — D&C 58-59
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 14,
    title: "Semana 14",
    dateRange: "2 al 8 de Junio",
    lessons: [
      {
        id: "71-dc-58-26-29",
        title: "Doctrina y Convenios 58:26-29",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/221-doctrine-and-covenants-58-26-29?lang=spa",
        description: "No es mandado en todo — la agencia y la iniciativa en el Evangelio",
        secciones: [],
        questions: dc58_26_29Questions,
      },
      {
        id: "72-dc-58-38-60",
        title: "Doctrina y Convenios 58:38-60",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/222-doctrine-and-covenants-58-38-60?lang=spa",
        description: "El arrepentimiento y el perdón: el Señor recuerda los pecados no más",
        secciones: [],
        questions: dc58_38_60Questions,
      },
      {
        id: "73-dc-59",
        title: "Doctrina y Convenios 59",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/223-doctrine-and-covenants-59?lang=spa",
        description: "El día de reposo y la gratitud como forma de vida",
        secciones: [],
        questions: dc59Questions,
      },
      {
        id: "193-descubre-fortalezas",
        title: "Descubre tus fortalezas y habilidades",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/583-discovering-your-strengths-and-abilities?lang=spa",
        description: "Identificar los talentos y dones que el Señor ha dado a cada persona",
        secciones: [],
        questions: descubre_fortalezasQuestions,
      },
      {
        id: "194-desarrollar-habilidades",
        title: "Desarrollar habilidades y destrezas",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/584-developing-skills-and-abilities?lang=spa",
        description: "Cómo desarrollar y perfeccionar las habilidades con diligencia",
        secciones: [],
        questions: desarrollar_habilidadesQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 15 — 9 al 15 de Junio — D&C 60-63
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 15,
    title: "Semana 15",
    dateRange: "9 al 15 de Junio",
    lessons: [
      {
        id: "181-fe-autosuficiencia",
        title: "Fe en Jesucristo para desarrollar la autosuficiencia",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/562-faith-in-jesus-christ-to-build-self-reliance?lang=spa",
        description: "La fe en Cristo como fundamento de la autosuficiencia personal",
        secciones: [],
        questions: fe_autosuficienciaQuestions,
      },
      {
        id: "182-administracion-recursos",
        title: "La administración prudente de los recursos económicos",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/563-managing-financial-resources-wisely?lang=spa",
        description: "Principios del Evangelio aplicados a las finanzas personales",
        secciones: [],
        questions: administracion_recursosQuestions,
      },
      {
        id: "74-dc-60-62",
        title: "Doctrina y Convenios 60–62",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/231-doctrine-and-covenants-60-62?lang=spa",
        description: "El viaje de regreso a Ohio y las instrucciones del Señor en el camino",
        secciones: [],
        questions: dc60_62Questions,
      },
      {
        id: "75-dc-63-1-23",
        title: "Doctrina y Convenios 63:1-23",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/232-doctrine-and-covenants-63-1-23?lang=spa",
        description: "Las señales siguen a la fe, no la preceden",
        secciones: [],
        questions: dc63_1_23Questions,
      },
      {
        id: "76-dc-63-57-64",
        title: "Doctrina y Convenios 63:57-64",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/233-doctrine-and-covenants-63-57-64?lang=spa",
        description: "La importancia de usar los nombres sagrados con reverencia",
        secciones: [],
        questions: dc63_57_64Questions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 16 — 16 al 22 de Junio — D&C 64-65
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 16,
    title: "Semana 16",
    dateRange: "16 al 22 de Junio",
    lessons: [
      {
        id: "183-autosuficiencia-cuidar-otros",
        title: "La autosuficiencia nos permite cuidar mejor de los demás",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/564-self-reliance-enables-us-to-better-care-for-others?lang=spa",
        description: "Cómo la autosuficiencia personal nos habilita para servir a otros",
        secciones: [],
        questions: autosuficiencia_cuidar_otrosQuestions,
      },
      {
        id: "77-dc-64-1-17",
        title: "Doctrina y Convenios 64:1-17",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/241-doctrine-and-covenants-64-1-17?lang=spa",
        description: "El mandamiento de perdonar a todos los hombres",
        secciones: [],
        questions: dc64_1_17Questions,
      },
      {
        id: "78-dc-64-20-43",
        title: "Doctrina y Convenios 64:20-43",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/242-doctrine-and-covenants-64-20-43?lang=spa",
        description: "No cansarse de hacer el bien y los preparativos de Sion",
        secciones: [],
        questions: dc64_20_43Questions,
      },
      {
        id: "79-dc-65",
        title: "Doctrina y Convenios 65",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/243-doctrine-and-covenants-65?lang=spa",
        description: "La oración y el crecimiento del Reino de Dios en la tierra",
        secciones: [],
        questions: dc65Questions,
      },
      // Día 5: Día Flexible (sin lección asignada)
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 17 — 23 al 29 de Junio — D&C 67, 68:25-31 (Vacaciones Chile)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 17,
    title: "Semana 17",
    dateRange: "23 al 29 de Junio",
    lessons: [
      {
        id: "80-dc-67",
        title: "Doctrina y Convenios 67",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/251-doctrine-and-covenants-67?lang=spa",
        description: "El desafío a los hombres sabios sobre el lenguaje de las revelaciones",
        secciones: [],
        questions: dc67Questions,
      },
      {
        id: "81-dc-68-25-31",
        title: "Doctrina y Convenios 68:25-31",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/252-doctrine-and-covenants-68-25-31?lang=spa",
        description: "La responsabilidad de los padres de enseñar el Evangelio a sus hijos",
        secciones: [],
        questions: dc68_25_31Questions,
      },
      {
        id: "210-plantilla-lideres",
        title: "Plantilla: Enseñanzas de los líderes de la Iglesia",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/543-template-teachings-of-church-leaders?lang=spa",
        description: "Cómo estudiar y presentar enseñanzas de líderes de la Iglesia",
        secciones: [],
        questions: plantilla_lideresQuestions,
      },
      {
        id: "211-decisiones-eternidad",
        title: "\"Decisiones para la eternidad\"",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/544-choices-for-eternity?lang=spa",
        description: "Tomar decisiones con perspectiva eterna",
        secciones: [],
        questions: decisiones_eternidadQuestions,
      },
      {
        id: "172-herramientas-escrituras",
        title: "Herramientas para el estudio de las Escrituras",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/534-scripture-study-tools?lang=spa",
        description: "Recursos digitales y físicos para profundizar el estudio de las Escrituras",
        secciones: [],
        questions: herramientas_escriturasQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 18 — 30 de Junio al 6 de Julio — D&C 71
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 18,
    title: "Semana 18",
    dateRange: "30 de Junio al 6 de Julio",
    lessons: [
      {
        id: "82-dc-71",
        title: "Doctrina y Convenios 71",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/261-doctrine-and-covenants-71?lang=spa",
        description: "El mandato de refutar los errores con las Escrituras",
        secciones: [],
        questions: dc71Questions,
      },
      {
        id: "83-dominio-practica-5",
        title: "Práctica del Dominio de la doctrina 5",
        type: "Dominio de la Doctrina",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/262-doctrinal-mastery-practice-5?lang=spa",
        description: "Repaso y aplicación práctica de pasajes clave",
        secciones: [],
        questions: dominioPractica5Questions,
      },
      {
        id: "84-evalua-aprendizaje-5",
        title: "Evalúa tu aprendizaje 5",
        type: "Especial",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/263-assess-your-learning-5?lang=spa",
        description: "Revisión del aprendizaje del quinto bloque",
        secciones: [],
        questions: evalua_aprendizaje_5Questions,
      },
      {
        id: "173-contexto-escrituras",
        title: "Comprender el contexto de las Escrituras",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/535-understanding-the-context-of-scriptures?lang=spa",
        description: "La importancia del contexto histórico y literario en el estudio de las Escrituras",
        secciones: [],
        questions: contexto_escriturasQuestions,
      },
      {
        id: "184-cuidar-cuerpo",
        title: "Cómo cuidar nuestro cuerpo",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/571-caring-for-our-physical-bodies?lang=spa",
        description: "El cuerpo como templo y la responsabilidad de cuidarlo",
        secciones: [],
        questions: cuidar_cuerpoQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 19 — 7 al 13 de Julio — D&C 76
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 19,
    title: "Semana 19",
    dateRange: "7 al 13 de Julio",
    lessons: [
      {
        id: "85-dc-76-1-19",
        title: "Doctrina y Convenios 76:1-19",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/271-doctrine-and-covenants-76-1-19?lang=spa",
        description: "El testimonio de Joseph Smith y Sidney Rigdon sobre la realidad de Jesucristo",
        secciones: [],
        questions: dc76_1_19Questions,
      },
      {
        id: "86-dc-76-19-24",
        title: "Doctrina y Convenios 76:19-24",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/272-doctrine-and-covenants-76-19-24?lang=spa",
        description: "La visión del Padre y del Hijo — un testimonio viviente",
        secciones: [],
        questions: dc76_19_24Questions,
      },
      {
        id: "87-dc-76-50-70",
        title: "Doctrina y Convenios 76:50-70",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/273-doctrine-and-covenants-76-50-70?lang=spa",
        description: "Los hijos de perdición y los requisitos del Reino Celestial",
        secciones: [],
        questions: dc76_50_70Questions,
      },
      {
        id: "88-dc-76-71-112",
        title: "Doctrina y Convenios 76:71-112",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/274-doctrine-and-covenants-76-71-112?lang=spa",
        description: "Los Reinos Terrestre y Telestial en la visión de las glorias",
        secciones: [],
        questions: dc76_71_112Questions,
      },
      {
        id: "185-fortaleza-emocional",
        title: "Desarrollar fortaleza emocional en el Señor",
        type: "Preparación para la Vida",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/572-building-emotional-strength-in-the-lord?lang=spa",
        description: "Principios del Evangelio para fortalecer la salud emocional",
        secciones: [],
        questions: fortaleza_emocionalQuestions,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SEMANA 20 — 14 al 20 de Julio — D&C 78-80
  // Días 4 y 5: Vacaciones Argentina
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 20,
    title: "Semana 20",
    dateRange: "14 al 20 de Julio",
    lessons: [
      {
        id: "89-dc-78",
        title: "Doctrina y Convenios 78",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/281-doctrine-and-covenants-78?lang=spa",
        description: "La organización de los asuntos temporales de la Iglesia para los pobres",
        secciones: [],
        questions: dc78Questions,
      },
      {
        id: "90-dc-79-80",
        title: "Doctrina y Convenios 79-80",
        type: "Doctrina y Convenios - Ven Sigueme",
        chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/282-doctrine-and-covenants-79-80?lang=spa",
        description: "Llamamientos misionales a Jared Carter, Stephen Burnett y Eden Smith",
        secciones: [],
        questions: dc79_80Questions,
      },
      // Día 3: Día Flexible
      // Día 4: Vacaciones Argentina
      // Día 5: Vacaciones Argentina
    ],
  },
]