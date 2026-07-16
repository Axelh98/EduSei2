import type { Lesson } from "@/lib/types"

// ══════════════════════════════════════════════════════════════════════════════════
// 🔍 AUDITORÍA DE CITAS PROFÉTICAS (visitado el manual oficial 2024 para las 5 lecciones):
//   Alma 13 (Renlund):              ✅ cita real; texto y fecha corregidos, con link.
//   Alma 14 (Eyring):               ✅ cita real; texto y fuente corregidos (era un discurso a CES, no Conferencia
//                                       General, por lo que no tiene link a churchofjesuschrist.org).
//   Repaso evaluación 1:            (ya no tenía sección "enseñanza" en el archivo original — correcto).
//   Adquirir conocimiento esp. 4 (Nelson): ❌ el manual oficial no cita a ningún líder en esta lección. Cita
//                                       eliminada (no sustituida) por instrucción explícita.
//   Repaso DD 11-12 (Bednar):       🔧 URL corregida (apuntaba por error a la unidad de Alma 8-12) · ❌ la lección
//                                       de repaso correcta no cita a ningún líder. Cita eliminada.
// Siguiendo la instrucción explícita: cuando el manual oficial no tiene una cita real de un líder para una lección
// específica, se elimina por completo la sección "enseñanza" (no se deja vacía ni se sustituye con otra cita).
// ══════════════════════════════════════════════════════════════════════════════════

export const leccionesSemana17: Lesson[] = [
  {
    id: "alma-13",
    title: "Alma 13: El sacerdocio y la preordenación",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/26-alma-13-16/261-teacher?lang=spa",
    type: "Libro de Mormón - Ven Sigueme",
    description: "El sacerdocio y la preordenación de los siervos de Dios.",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Alma enseña que los sacerdotes fueron llamados y preparados desde la fundación del mundo por su fe y buenas obras. Explica que el sacerdocio es dado para invitar al pueblo a arrepentirse y entrar en el reposo del Señor. El sacerdocio es presentado como una responsabilidad divina, no un privilegio personal."
      },
      {
        tipo: "escrituras",
        citas: [
          { referencia: "Alma 13:2", texto: "Y los sacerdotes fueron ordenados según el orden de su Hijo...", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/13?lang=spa&id=p2#p2" },
          { referencia: "Alma 13:3–4", texto: "Y esta es la manera por la cual fueron ordenados...", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/13?lang=spa&id=p3-p4#p3" },
          { referencia: "Alma 13:16", texto: "Ahora bien, estos sacerdotes fueron ordenados según este orden...", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/13?lang=spa&id=p16#p16" }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Dale G. Renlund",
        fuente: "Liahona, noviembre de 2017 (discurso \"El sacerdocio y el poder redentor del Salvador\")",
        texto: "A causa de Su sacrificio expiatorio, Jesucristo tiene el poder y autoridad para redimir a la humanidad. Para que Su poder expiatorio esté al alcance de todos, Él ha delegado una porción de Su poder y autoridad a los hombres sobre la tierra.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2017/10/the-priesthood-and-the-saviors-atoning-power?lang=spa"
        // ✅ Corregido tras visitar el manual oficial de esta lección (261-teacher): esta es la cita real que usa el
        // manual junto a Alma 13:1-2, 6. El autor ya era correcto, pero la fecha del archivo original (abril de 2017)
        // era incorrecta — el discurso es de octubre de 2017 — y el texto era una paráfrasis.
      },
      {
        tipo: "conclusion",
        contenido: "El sacerdocio es un llamado a servir y guiar hacia Cristo, recordando que quienes lo poseen deben vivir rectamente."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué significa para ti estar preordenado?",
          "¿Cómo puedes honrar el sacerdocio en tu vida diaria?",
          "¿Qué ejemplos ves en líderes que ejercen el sacerdocio con humildad?"
        ]
      }
    ],
    questions: []
  },
  {
    id: "alma-14",
    title: "Alma 14: Fidelidad en medio de la persecución",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/26-alma-13-16/262-teacher?lang=spa",
    type: "Libro de Mormón - Ven Sigueme",
    description: "Fidelidad en medio de la persecución y el sufrimiento.",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Alma y Amulek predican en Ammoníah y ven cómo los creyentes son perseguidos y quemados. Ellos mismos son encarcelados y maltratados, mostrando que la fidelidad requiere confiar en la voluntad del Señor aun en medio del dolor."
      },
      {
        tipo: "escrituras",
        citas: [
          { referencia: "Alma 14:11", texto: "El Espíritu contiene a los hombres...", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/14?lang=spa&id=p11#p11" },
          { referencia: "Alma 14:13–14", texto: "Y Alma dijo a Amulek: Sé que el Espíritu de Dios me contiene...", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/14?lang=spa&id=p13-p14#p13" },
          { referencia: "Alma 14:26–28", texto: "Y Alma clamó diciendo: ¡Oh Señor, danos fuerza conforme a nuestra fe en Cristo!", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/14?lang=spa&id=p26-p28#p26" }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Henry B. Eyring",
        fuente: "\"To Know and to Love God\" (discurso a los educadores de CES)",
        texto: "Nuestros alumnos no pueden conocer a Dios, y por lo tanto amar como deben amar, a menos que sean enseñados por el Espíritu Santo.",
        link: ""
        // ✅ Corregido tras visitar el manual oficial de esta lección (262-teacher): esta es la cita real que usa el
        // manual. La fuente original del archivo ("Conferencia General, octubre 2001") era incorrecta — esta cita
        // proviene de un discurso de Eyring a educadores de CES, no de la Conferencia General, por lo que no tiene
        // una cita de Liahona ni link a churchofjesuschrist.org. El texto es una traducción fiel del original en
        // inglés, ya que no se localizó una versión en español publicada por separado.
      },
      {
        tipo: "conclusion",
        contenido: "La lección muestra que aun en medio de sufrimiento e injusticia, podemos elegir confiar en el Señor."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cómo reaccionas ante pruebas injustas?",
          "¿Qué significa para ti confiar en la voluntad del Señor?",
          "¿Qué ejemplo te dejan Alma y Amulek en tu propia vida?"
        ]
      }
    ],
    questions: []
  },
  {
    id: "repaso-evaluacion-1",
    title: "Repaso evaluación 1",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/52-appendix/521-teacher?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Preparación para la evaluación del primer semestre.",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Repaso de los primeros doce pasajes de Dominio de la Doctrina. Se busca consolidar la memorización y comprensión antes de la evaluación."
      },
      {
        tipo: "escrituras",
        citas: [
          { referencia: "1 Nefi 3:7", texto: "Iré y haré...", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/3?lang=spa&id=p7#p7" },
          { referencia: "2 Nefi 2:25", texto: "Adán cayó para que los hombres existiesen...", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=spa&id=p25#p25" },
          { referencia: "Mosíah 2:17", texto: "Cuando os halláis al servicio de vuestros semejantes...", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=spa&id=p17#p17" }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "El repaso fortalece la preparación espiritual y académica para aplicar las verdades en la vida diaria."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué pasaje necesitas repasar más?",
          "¿Cómo aplicarías una frase clave en tu vida?",
          "¿Qué técnicas de memorización te resultan más útiles?"
        ]
      }
    ],
    questions: []
  },
  {
    id: "adquirir-conocimiento-4",
    title: "Adquirir conocimiento espiritual, Parte 4",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/27-alma-17-22/275-teacher?lang=spa",
    type: "Preparación para la Vida",
    description: "Fortalecer la capacidad de hallar respuestas espirituales.",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Esta lección enseña cómo encontrar respuestas a preguntas espirituales mediante tres principios: actuar con fe, analizar con perspectiva eterna y buscar fuentes divinamente señaladas. Se anima a los jóvenes a aplicar estos principios en situaciones reales de dudas o desafíos espirituales."
      },
      {
        tipo: "escrituras",
        citas: [
          { referencia: "DyC 88:118", texto: "Buscad conocimiento, tanto por el estudio como por la fe.", link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88?lang=spa&id=p118#p118" },
          { referencia: "Juan 7:17", texto: "El que quiera hacer la voluntad de Dios, conocerá si la doctrina es de Dios...", link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/7?lang=spa&id=p17#p17" },
          { referencia: "2 Nefi 32:3", texto: "Los ángeles hablan por el poder del Espíritu Santo; por tanto, os hablarán las palabras de Cristo.", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=spa&id=p3#p3" }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "La lección fortalece la capacidad de responder con integridad y fe a inquietudes espirituales. Al aplicar los tres principios, los estudiantes desarrollan confianza en que Dios provee respuestas mediante Su Espíritu."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué haces cuando surge una duda espiritual?",
          "¿Cómo puedes aplicar los tres principios en tu vida?",
          "¿Qué fuentes seguras puedes consultar para hallar respuestas espirituales?"
        ]
      }
    ],
    questions: []
  },
  {
    id: "repaso-dd-11-12",
    title: "Repaso del Dominio de la doctrina 11 y 12",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/26-alma-13-16/265-teacher?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Consolidación de las verdades de dominio aprendidas.",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Este repaso se centra en dos pasajes clave: Mosíah 3:19 sobre despojarse del hombre natural y Mosíah 4:9 sobre creer en Dios. El objetivo es memorizar, comprender y aplicar estas verdades en la vida diaria."
      },
      {
        tipo: "escrituras",
        citas: [
          { referencia: "Mosíah 3:19", texto: "Porque el hombre natural es enemigo de Dios...", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/3?lang=spa&id=p19#p19" },
          { referencia: "Mosíah 4:9", texto: "Creed en Dios; creed que existe...", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=spa&id=p9#p9" },
          { referencia: "Mosíah 18:8–10", texto: "Convenio bautismal de servir a Dios y llevar las cargas de los demás.", link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/18?lang=spa&id=p8-p10#p8" }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "Memorizar y comprender estos pasajes invita al Espíritu Santo y ayuda a ser más semejantes a Cristo. El repaso refuerza la importancia de creer en Dios y de vencer al hombre natural mediante la expiación."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué pasaje te inspira más?",
          "¿Cómo puedes ponerlo en práctica esta semana?",
          "¿Qué significa para ti vencer al hombre natural?"
        ]
      }
    ],
    questions: []
    },
]