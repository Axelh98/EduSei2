import type { Lesson } from "@/lib/types"

// ⚠️ AUDITORÍA DE CITAS PROFÉTICAS (julio 2026) — COMPLETA:
// Se verificaron contra la fuente original las 2 citas de tipo "enseñanza" que ya traía el archivo
// (leccion-21-1 y leccion-21-2). Ambas carecían del campo `link` (requerido por el tipo Seccion) y se agregó.
// La cita de Richard G. Scott tenía una palabra alterada ("finjas" -> "pretendas"), ya corregida.
// La cita de Joseph Fielding Smith era textualmente correcta; solo se completó el título oficial del libro fuente.
//
// HALLAZGO INICIAL: de las 20 lecciones de este archivo, solo esas 2 tenían sección "enseñanza".
// Se buscaron, verificaron palabra por palabra contra la fuente en español y se agregaron -con link real-
// citas proféticas genuinas para las 18 lecciones restantes (leccion-21-3 a leccion-21-10 y
// leccion-22-1 a leccion-22-10). Las 20 lecciones del archivo ya tienen sección "enseñanza" completa.
//
// Notas generales sobre los links agregados:
// - La gran mayoría son discursos de Conferencia General verificados en la versión oficial en español
//   de churchofjesuschrist.org (general-conference o liahona, según cuál esté indexado para cada discurso).
// - Los discursos no tienen anclas de párrafo (id=p#) como las Escrituras; los links llevan al discurso completo.
// - En la mayoría de los casos la cita elegida es la misma que usa el propio manual oficial 2024 para esa lección
//   (verificado directamente contra el manual en inglés y, cuando fue posible, en español); se indica en cada
//   comentario inline cuando ese es el caso.
// - Un solo caso (leccion-22-10, Ezra Taft Benson) no tiene versión digital independiente en español
//   localizable del discurso original de 1975; el link apunta al manual oficial 2024 que reproduce la cita.

// Segundo Semestre - Parte 6: Semanas 21-22
export const leccionesResumidasLM_Parte6: Lesson[] = [
  // ============================================
  // SEMANA 21
  // ============================================
  {
    id: "leccion-21-1",
    title: "Alma 32",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/30-alma-32-35/301-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Después de que los zoramitas pobres son expulsados de sus lugares de adoración, Alma les enseña sobre el desarrollo de la fe. Utiliza la analogía de plantar una semilla para explicar cómo puede crecer un testimonio. Según Alma, no se requiere conocimiento perfecto para comenzar; basta tener el deseo de creer y estar dispuesto a experimentar con las enseñanzas. El capítulo describe paso a paso cómo una semilla de fe puede crecer hasta convertirse en un árbol que produce fruto."
      },
      {
        tipo: "enseñanza",
        autor: "Élder Richard G. Scott",
        fuente: "Liahona, enero de 2002", // página exacta no verificable en la versión digital; se retira "pág. 103" al no poder confirmarse
        texto: "Un firme testimonio no se puede edificar sobre un cimiento débil; por eso, no pretendas creer en algo de lo cual no estés seguro. Busca recibir una confirmación ratificadora.",
        link: "https://www.churchofjesuschrist.org/study/liahona/2002/01/the-power-of-a-strong-testimony?lang=spa"
        // Discurso "El poder de un firme testimonio", Conferencia General de octubre de 2001, publicado en Liahona de enero de 2002.
        // Corrección: el original decía "no finjas creer"; el texto oficial dice "no pretendas creer".
        // El artículo de Liahona no tiene anclas de párrafo (id=p#) como las Escrituras, por lo que no es posible enlazar directo al párrafo.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 32:21",
            texto: "La fe no es tener un conocimiento perfecto de las cosas.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32?lang=spa&id=p21#p21"
          },
          {
            referencia: "Alma 32:27",
            texto: "Despertad y ejercitad vuestras facultades hasta experimentar con mis palabras.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32?lang=spa&id=p27#p27"
          },
          {
            referencia: "Alma 32:28",
            texto: "Si dais cabida para que se plante una semilla en vuestro corazón, si es una semilla verdadera, comenzará a hincharse en vuestro pecho.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32?lang=spa&id=p28#p28"
          },
          {
            referencia: "Alma 32:41",
            texto: "Si cultiváis la palabra, llegará a ser un árbol que brotará para vida sempiterna.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32?lang=spa&id=p41#p41"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué experiencias has tenido al 'experimentar' con principios del evangelio según describe Alma 32?",
          "¿Qué prácticas has encontrado útiles para nutrir tu testimonio de manera constante?",
          "Según la analogía de Alma, ¿en qué etapa de crecimiento se encuentra tu testimonio de algún principio específico?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Alma enseña sobre la fe como una semilla que crece. Se invita a experimentar con la palabra de Dios.",
    questions: []
  },
  {
    id: "leccion-21-2",
    title: "3 Nefi 12:1–16",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/40-3-nephi-12-16/401-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Tras aparecer a los nefitas y llamar a doce discípulos, Cristo les enseña las Bienaventuranzas. Estas enseñanzas son similares al Sermón del Monte en Jerusalén, con algunas variaciones adaptadas al contexto nefita. Las Bienaventuranzas describen estados del corazón que conducen a bendiciones espirituales específicas. El pasaje también incluye la enseñanza sobre ser 'la luz del mundo' y permitir que las buenas obras sean visibles para glorificar al Padre Celestial."
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Joseph Fielding Smith",
        fuente: "Enseñanzas de los Presidentes de la Iglesia: Joseph Fielding Smith, 2013, pág. 249",
        texto: "El Sermón del Monte es el más grandioso [sermón] que se haya predicado jamás, hasta donde sabemos.",
        link: "https://www.churchofjesuschrist.org/study/manual/teachings-of-presidents-of-the-church-joseph-fielding-smith/chapter-18-living-by-every-word-that-proceeds-from-the-mouth-of-god?lang=spa"
        // Cita verificada textualmente contra el Capítulo 18 ("Vivir de toda palabra que sale de la boca de Dios"), sección 4.
        // Se corrigió "Enseñanzas de los Presidentes" -> "Enseñanzas de los Presidentes de la Iglesia" (título oficial completo).
        // El manual no usa anclas de párrafo, por lo que el link lleva al capítulo completo, no a un párrafo específico.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "3 Nefi 12:3",
            texto: "Bienaventurados los pobres en espíritu que vienen a mí, porque de ellos es el reino de los cielos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12?lang=spa&id=p3#p3"
          },
          {
            referencia: "3 Nefi 12:6",
            texto: "Bienaventurados todos los que tienen hambre y sed de justicia, porque ellos serán llenos del Espíritu Santo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12?lang=spa&id=p6#p6"
          },
          {
            referencia: "3 Nefi 12:14-16",
            texto: "De cierto, de cierto os digo que os doy ser la luz de este pueblo. Así alumbre vuestra luz ante este pueblo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12?lang=spa&id=p14-p16#p14"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cómo describes el concepto de ser 'pobre en espíritu' según el contexto de 3 Nefi 12?",
          "¿De qué formas específicas podrías 'ser luz' en tu entorno actual?",
          "¿Cuál de las Bienaventuranzas te parece más relevante para tu situación actual? ¿Por qué?"
        ]
      }
    ],
    type: "Bloque de Escrituras - Ven Sigueme",
    description: "Jesucristo enseña las Bienaventuranzas a los nefitas. Los discípulos son llamados a ser la luz del mundo.",
    questions: []
  },
  {
    id: "leccion-21-3",
    title: "Alma 33",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/30-alma-32-35/302-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Los zoramitas pobres preguntan cómo deben ejercitar su fe sin tener un lugar de adoración. Alma responde citando a profetas antiguos como Zenós y Zenoc, quienes enseñaron que la adoración no se limita a un edificio específico. Según estos profetas, se puede orar en cualquier lugar: campos, casas, lugares privados o el desierto. Alma enfatiza que el enfoque central de la adoración debe ser Jesucristo y Su futura expiación."
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Henry B. Eyring",
        fuente: "Liahona, mayo de 2014, pág. 24",
        texto: "Nuestro amoroso Padre Celestial nos dio el don de Su Amado Hijo Jesucristo como nuestro Salvador. Ese gran don y bendición de la expiación de Jesucristo ofrece un legado universal: la promesa de la resurrección y la posibilidad de la vida eterna a todos los que nacen.",
        link: "https://www.churchofjesuschrist.org/study/liahona/2014/05/saturday-morning-session/a-priceless-heritage-of-hope?lang=spa"
        // Cita verificada contra el discurso "Un incalculable legado de esperanza" (Conferencia General, abril de 2014).
        // Este mismo discurso está citado como fuente de referencia en el manual oficial (sección "Información de contexto" de Alma 33 en el manual del maestro 2024).
        // No hay anclas de párrafo disponibles en esta página; el link lleva al discurso completo.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 33:3-4",
            texto: "Zenós testificó que puedes adorar a Dios en tus campos, en tu casa, en tus aposentos secretos y en el desierto.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/33?lang=spa&id=p3-p4#p3"
          },
          {
            referencia: "Alma 33:11",
            texto: "Si te vuelves al Hijo con todo tu corazón, y ejercitas tu fe en mí, entonces se te concederá misericordia.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/33?lang=spa&id=p11#p11"
          },
          {
            referencia: "Alma 33:22-23",
            texto: "Plantad esta palabra en vuestros corazones. Comience a ejercitar vuestra fe en el Hijo de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/33?lang=spa&id=p22-p23#p22"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿En qué momentos adicionales del día podrías incorporar la oración personal?",
          "¿Cómo interpretas el consejo de Alma sobre centrar la adoración en Jesucristo?",
          "¿Qué aprendes de los testimonios de profetas antiguos como Zenós sobre la oración?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Zenós y Zenoc testifican de Cristo. Alma enseña sobre la oración y la adoración en todo lugar.",
    questions: []
  },
  {
    id: "leccion-21-4",
    title: "3 Nefi 12:17–48",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/40-3-nephi-12-16/402-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Cristo explica que vino a cumplir la ley de Moisés, no a destruirla. Luego presenta una ley superior que examina no solo las acciones externas sino también las intenciones del corazón. Esta enseñanza incluye: controlar el enojo además de no matar, evitar pensamientos lujuriosos además del adulterio, amar a los enemigos además de a los amigos. El pasaje concluye con la invitación a ser perfectos como el Padre Celestial es perfecto."
      },
      {
        tipo: "enseñanza",
        autor: "Élder Jeffrey R. Holland",
        fuente: "Liahona, noviembre de 2017, pág. 42",
        texto: "Si perseveramos, en algún momento de la eternidad nuestro refinamiento habrá terminado y será completo.",
        link: "https://www.churchofjesuschrist.org/study/liahona/2017/11/saturday-morning-session/be-ye-therefore-perfect-eventually?lang=spa"
        // Discurso "Sed, pues, vosotros perfectos... con el tiempo", Conferencia General de octubre de 2017.
        // Este mismo discurso es la fuente que el propio manual del maestro 2024 cita para esta lección.
        // No hay anclas de párrafo disponibles en esta página; el link lleva al discurso completo.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "3 Nefi 12:19-20",
            texto: "Cualquiera que quebrante uno de estos mandamientos será tenido por el menor en el reino; mas el que los guardare y enseñare será llamado grande.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12?lang=spa&id=p19-p20#p19"
          },
          {
            referencia: "3 Nefi 12:29-30",
            texto: "Si tu ojo derecho te es ocasión de caer, sácalo y échalo de ti; porque más te vale que se pierda uno de tus miembros.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12?lang=spa&id=p29-p30#p29"
          },
          {
            referencia: "3 Nefi 12:48",
            texto: "Quisiera, pues, que fueseis perfectos así como yo, o como vuestro Padre que está en los cielos es perfecto.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12?lang=spa&id=p48#p48"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué diferencias observas entre enfocarse en acciones externas versus cambiar las intenciones del corazón?",
          "¿Cómo interpretas el mandamiento de ser 'perfecto' en el contexto de este capítulo?",
          "¿En qué áreas sientes que la 'ley superior' que Cristo enseña podría aplicarse a tu vida?"
        ]
      }
    ],
    type: "Bloque de Escrituras - Ven Sigueme",
    description: "Cristo enseña una ley más elevada que la ley de Moisés. Los discípulos deben ser perfectos como el Padre Celestial.",
    questions: []
  },
  {
    id: "leccion-21-5",
    title: "Alma 34:1–17",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/30-alma-32-35/303-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Amulek complementa las enseñanzas de Alma con su testimonio sobre la expiación de Jesucristo. Explica por qué la expiación debe ser 'infinita y eterna': ningún ser humano puede expiar los pecados de otro porque todos somos imperfectos. Solo Jesucristo, siendo el Hijo de Dios sin pecado, puede ofrecer un sacrificio que satisfaga las demandas de la justicia divina. Amulek también enfatiza la importancia de la oración constante en todas las circunstancias de la vida."
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "Liahona, noviembre de 2017, pág. 62",
        texto: "El Libro de Mormón brinda el entendimiento más pleno y autorizado acerca de la Expiación de Jesucristo que se pueda encontrar; enseña el verdadero significado de nacer de nuevo.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2017/10/the-book-of-mormon-what-would-your-life-be-like-without-it?lang=spa"
        // Discurso "El Libro de Mormón: ¿Cómo sería su vida sin él?", Conferencia General de octubre de 2017.
        // Esta cita es la que usa el propio manual del maestro 2024 en la sección "Información de contexto" de esta lección.
        // No hay anclas de párrafo disponibles en esta página; el link lleva al discurso completo.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 34:9-10",
            texto: "Es necesario que se realice una expiación infinita y eterna, pues a menos que fuese infinita, esta corrupción no podría vestirse de incorrupción.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=spa&id=p9-p10#p9"
          },
          {
            referencia: "Alma 34:14",
            texto: "Todo ápice de la ley señala hacia ese gran y postrer sacrificio; y ese gran y postrer sacrificio será el Hijo de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=spa&id=p14#p14"
          },
          {
            referencia: "Alma 34:15",
            texto: "Traerá la salvación a todos los que crean en su nombre.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=spa&id=p15#p15"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Según Amulek, ¿por qué era necesario que la expiación fuera 'infinita y eterna'?",
          "¿Cómo te ayuda el testimonio de Amulek a comprender mejor el sacrificio expiatorio?",
          "¿De qué formas específicas podrías expresar gratitud por la expiación en tu vida diaria?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Amulek testifica del sacrificio expiatorio de Cristo. Enseña sobre la necesidad de orar y arrepentirse.",
    questions: []
  },
  {
    id: "leccion-21-6",
    title: "Dominio de la doctrina: 3 Nefi 12:48",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/40-3-nephi-12-16/403-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "El mandamiento de ser perfectos puede resultar desafiante de comprender. El término griego 'teleios' (traducido como 'perfecto') también significa 'completo' o 'maduro', lo que sugiere un proceso de desarrollo continuo en lugar de una perfección instantánea. La enseñanza de Cristo sobre la perfección se relaciona con el proceso de crecimiento espiritual que ocurre a lo largo de la vida y más allá, facilitado por la expiación."
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "Liahona, enero de 1996, pág. 102",
        texto: "No debemos desalentarnos si nuestros esfuerzos más sinceros en busca de la perfección nos parecen demasiado arduos e interminables. La perfección es inminente; llegará en su totalidad únicamente después de la resurrección y solo por medio del Señor.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/1995/10/perfection-pending?lang=spa"
        // Discurso "La inminencia de la perfección", Conferencia General de octubre de 1995 (entonces era Élder, del Cuórum de los Doce Apóstoles).
        // Esta es exactamente la cita que usa el propio manual del maestro 2024 en la lección previa (3 Nefi 12:17-48) para explicar este mismo principio.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "3 Nefi 12:48",
            texto: "Quisiera, pues, que fueseis perfectos así como yo, o como vuestro Padre que está en los cielos es perfecto.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12?lang=spa&id=p48#p48"
          },
          {
            referencia: "Moroni 10:32",
            texto: "Si os abstenéis de toda impiedad, y amáis a Dios con todo vuestro poder, mente y fuerza, entonces su gracia os es suficiente.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/10?lang=spa&id=p32#p32"
          },
          {
            referencia: "Mateo 5:48",
            texto: "Sed, pues, vosotros perfectos, como vuestro Padre que está en los cielos es perfecto.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/5?lang=spa&id=p48#p48"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cómo cambia tu perspectiva al considerar la perfección como un proceso en lugar de un destino inmediato?",
          "¿Qué papel observas que juega la gracia en el proceso de desarrollo espiritual?",
          "¿En qué áreas específicas de tu vida notas progreso en este proceso de crecimiento?"
        ]
      }
    ],
    type: "Dominio de la Doctrina",
    description: "Estudio del mandamiento de ser perfectos en Cristo. Se enfoca en el proceso de llegar a ser como el Salvador.",
    questions: []
  },
  {
    id: "leccion-21-7",
    title: "Dominio de la doctrina: Alma 34:9–10",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/30-alma-32-35/304-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "La doctrina de la expiación infinita y eterna es fundamental en el evangelio restaurado. Amulek explica que ningún ser humano puede expiar los pecados de otro debido a la naturaleza imperfecta de toda la humanidad. La justicia divina requiere un sacrificio perfecto, y solo Jesucristo, siendo el Hijo de Dios sin pecado, cumple este requisito. El término 'infinita' indica que la expiación cubre a todas las personas en todas las épocas, mientras que 'eterna' señala que sus efectos se extienden por toda la eternidad."
      },
      {
        tipo: "enseñanza",
        autor: "Élder Gerrit W. Gong",
        fuente: "Liahona, noviembre de 2018, pág. 40",
        texto: "La expiación de nuestro Salvador es infinita y eterna. Cada uno de nosotros se aparta y se queda corto. Quizá, por un tiempo, nos perdamos. Dios amorosamente nos asegura que, sin importar dónde estemos o qué hayamos hecho, no hay punto del que no podamos volver. Él espera listo para abrazarnos.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2018/10/our-campfire-of-faith?lang=spa"
        // Discurso "Nuestra fogata de fe", Conferencia General de octubre de 2018.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 34:9",
            texto: "Ningún hombre puede sacrificar su propia sangre para expiar los pecados de otro.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=spa&id=p9#p9"
          },
          {
            referencia: "Alma 34:10",
            texto: "Es necesario que se realice una expiación infinita y eterna, pues a menos que fuese infinita, esta corrupción no podría vestirse de incorrupción.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=spa&id=p10#p10"
          },
          {
            referencia: "2 Nefi 9:7",
            texto: "Es necesario que haya una expiación infinita, pues de no ser así, esta corrupción no podría vestirse de incorrupción.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/9?lang=spa&id=p7#p7"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Según Alma 34, ¿qué cualidades específicas hacían que solo Cristo pudiera realizar la expiación?",
          "¿Cómo influye el conocimiento de que la expiación es 'infinita y eterna' en tu perspectiva diaria?",
          "¿De qué formas podrías aplicar los principios de la expiación en tus desafíos actuales?"
        ]
      }
    ],
    type: "Dominio de la Doctrina",
    description: "Se estudia la expiación infinita y eterna de Cristo. Solo mediante Cristo podemos ser salvos.",
    questions: []
  },
  {
    id: "leccion-21-8",
    title: "3 Nefi 13–14",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/40-3-nephi-12-16/404-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Cristo continúa Su sermón abordando diversos aspectos de la vida espiritual: la oración sincera, el ayuno apropiado, la acumulación de tesoros celestiales versus terrenales, evitar la hipocresía, juzgar con rectitud, y confiar en la providencia divina. Enfatiza que las prácticas espirituales deben estar motivadas por el amor a Dios en lugar del reconocimiento humano. Enseña que el Padre Celestial, que ve en lo secreto, recompensa a quienes lo buscan con sinceridad."
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Thomas S. Monson",
        fuente: "Liahona, noviembre de 2006, pág. 67",
        texto: "Cuando oremos, comuniquémonos de verdad con nuestro Padre Celestial. Es fácil que nuestras oraciones se vuelvan repetitivas y que pronunciemos palabras sin pensar casi en lo que decimos. [...] Oremos con sinceridad y con sentido, oremos con acción de gracias y pidamos lo que necesitemos.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2006/10/how-firm-a-foundation?lang=spa"
        // Discurso "Qué firmes cimientos", Conferencia General de octubre de 2006.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "3 Nefi 13:6",
            texto: "Entra en tu aposento, y cuando hayas cerrado la puerta, ora a tu Padre que está en secreto; y tu Padre, que ve en secreto, te recompensará en público.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/13?lang=spa&id=p6#p6"
          },
          {
            referencia: "3 Nefi 13:19-21",
            texto: "No os hagáis tesoros en la tierra. Haceos tesoros en el cielo, porque donde esté vuestro tesoro, allí estará también vuestro corazón.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/13?lang=spa&id=p19-p21#p19"
          },
          {
            referencia: "3 Nefi 14:7-8",
            texto: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/14?lang=spa&id=p7-p8#p7"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Dónde identificarías que están tus 'tesoros' actualmente según la enseñanza de Cristo?",
          "¿Cómo podrías asegurarte de que tus prácticas espirituales sean sinceras?",
          "¿Qué significaría 'buscar primero el reino de Dios' en tu contexto específico de vida?"
        ]
      }
    ],
    type: "Bloque de Escrituras - Ven Sigueme",
    description: "Cristo enseña sobre la oración, el ayuno y el tesoro celestial. Instruye sobre juzgar con rectitud.",
    questions: []
  },
  {
    id: "leccion-21-9",
    title: "Alma 34:17–41",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/30-alma-32-35/305-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Amulek continúa su testimonio con una enseñanza sobre la urgencia del arrepentimiento. Explica que la vida mortal es el tiempo designado para prepararse para comparecer ante Dios, y advierte contra procrastinar el arrepentimiento. También instruye sobre la importancia de mantener una actitud de oración constante en todas las circunstancias: por las familias, el sustento, contra las tentaciones. Enseña que la disposición espiritual al momento de la muerte permanece en el mundo de los espíritus."
      },
      {
        tipo: "enseñanza",
        autor: "Élder Dieter F. Uchtdorf",
        fuente: "Liahona, mayo de 2007, pág. 99",
        texto: "El don de la expiación de Jesucristo nos proporciona, en todo momento y en todo lugar, las bendiciones del arrepentimiento y del perdón.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2007/04/point-of-safe-return?lang=spa"
        // Discurso "El punto de retorno seguro", Conferencia General de abril de 2007 (entonces era Élder, del Cuórum de los Doce Apóstoles).
        // El discurso completo explica, con la analogía de un vuelo transoceánico, que el adversario quiere hacernos creer que hemos
        // pasado un "punto sin retorno" cuando pecamos -exactamente la falsa creencia contra la que advierte Amulek en este pasaje.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 34:32",
            texto: "Esta vida es el tiempo para que el hombre se prepare para comparecer ante Dios; el día de esta vida es el día en que el hombre debe ejecutar su obra.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=spa&id=p32#p32"
          },
          {
            referencia: "Alma 34:33",
            texto: "No procrastinéis el día de vuestro arrepentimiento hasta el fin; porque después de este día de vida, viene la noche de tinieblas.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=spa&id=p33#p33"
          },
          {
            referencia: "Alma 34:38",
            texto: "Si no vigiláis en oración continuamente, seréis apartados por las tentaciones del diablo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=spa&id=p38#p38"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Hay algo en tu vida que hayas estado posponiendo cambiar? ¿Qué factores influyen en esta postergación?",
          "¿Cómo podrías incorporar una actitud de oración más constante en tu rutina diaria?",
          "¿De qué manera la advertencia de Amulek sobre procrastinar afecta tu perspectiva del tiempo?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Amulek exhorta a orar siempre y a no procrastinar el arrepentimiento. Advierte sobre el estado de los inicuos.",
    questions: []
  },
  {
    id: "leccion-21-10",
    title: "3 Nefi 15–16",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/40-3-nephi-12-16/405-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Cristo declara que Él es la luz y la vida del mundo, y que en Él se cumple la ley de Moisés. Luego aclara el significado de las 'otras ovejas' que había mencionado a Sus discípulos en Jerusalén. Explica que estas 'otras ovejas' incluyen a los nefitas y a otras naciones dispersas de Israel. El Padre Celestial le ha mandado visitar a todas estas ovejas dispersas y eventualmente reunirlas. Esta enseñanza amplía la comprensión del alcance universal del ministerio de Cristo."
      },
      {
        tipo: "enseñanza",
        autor: "Élder Dale G. Renlund",
        fuente: "Liahona, mayo de 2017, pág. 30",
        texto: "Como el verdadero pastor que es, Él nos busca y nos encuentra para brindarnos alivio y esperanza. Comprender Su compasión y amor nos ayuda a ejercer fe en Él, arrepentirnos y ser sanados.",
        link: "https://www.churchofjesuschrist.org/study/liahona/2017/05/saturday-morning-session/our-good-shepherd?lang=spa"
        // Discurso "Nuestro Buen Pastor", Conferencia General de abril de 2017.
        // Esta es exactamente la cita que usa el propio manual del maestro 2024 (versión en español) para esta lección.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "3 Nefi 15:9",
            texto: "Yo soy la luz y la vida del mundo; y he bebido de aquella copa amarga que el Padre me ha dado.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/15?lang=spa&id=p9#p9"
          },
          {
            referencia: "3 Nefi 15:21",
            texto: "Tengo otras ovejas que no son de esta tierra, ni de la tierra de Jerusalén; ellas también oirán mi voz.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/15?lang=spa&id=p21#p21"
          },
          {
            referencia: "3 Nefi 16:5",
            texto: "El Padre me ha mandado que dé a este pueblo esta tierra por herencia.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/16?lang=spa&id=p5#p5"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué te enseña el concepto de las 'otras ovejas' sobre el alcance del ministerio de Cristo?",
          "¿De qué manera podrías participar en la reunión de Israel según se enseña en estos capítulos?",
          "¿Cómo te ayuda este pasaje a comprender el cumplimiento de profecías sobre el Libro de Mormón?"
        ]
      }
    ],
    type: "Bloque de Escrituras - Ven Sigueme",
    description: "Cristo declara ser la ley y la luz. Habla sobre las otras ovejas y la reunión de Israel.",
    questions: []
  },

  // ============================================
  // SEMANA 22
  // ============================================
  {
    id: "leccion-22-1",
    title: "Alma 36",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/31-alma-36-38/311-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Alma relata a su hijo Helamán su experiencia de conversión. Describe cómo perseguía a la iglesia de Dios hasta que fue visitado por un ángel. Durante tres días experimentó un tormento intenso al recordar sus pecados, hasta que invocó el nombre de Jesucristo y recibió el perdón. El capítulo está estructurado como un quiasmo literario, con el momento de invocar a Cristo en el centro del relato, enfatizando este punto culminante de su conversión."
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Boyd K. Packer",
        fuente: "Liahona, mayo de 1997",
        texto: "No tienen por qué saberlo todo para que el poder de la Expiación surta efecto en ustedes. Tengan fe en Cristo, ¡y empezará a surtir efecto el mismo día que lo pidan!",
        link: "https://www.churchofjesuschrist.org/study/general-conference/1997/04/washed-clean?lang=spa"
        // Discurso "Lavados y purificados", Conferencia General de abril de 1997 (entonces era Élder, del Cuórum de los Doce Apóstoles).
        // Es la misma cita que usa el manual oficial 2024 para esta lección (Alma 36).
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 36:3",
            texto: "Porque sé que el que deposite su confianza en Dios será sostenido en sus tribulaciones.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/36?lang=spa&id=p3#p3"
          },
          {
            referencia: "Alma 36:17-18",
            texto: "Recordé haber oído a mi padre profetizar concerniente a la venida de un Jesucristo. Clamé: ¡Oh Jesús, Hijo de Dios, ten misericordia de mí!",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/36?lang=spa&id=p17-p18#p17"
          },
          {
            referencia: "Alma 36:20-21",
            texto: "Mi alma anhelaba estar en la presencia de Dios. Nada tan intenso ni dulce como fue mi gozo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/36?lang=spa&id=p20-p21#p20"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿En qué ocasiones has experimentado cambios personales a través del arrepentimiento?",
          "¿Qué te enseña la experiencia de Alma sobre invocar el nombre de Cristo en momentos difíciles?",
          "¿Cómo podrías compartir tus propias experiencias de conversión con tu familia?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Alma relata su conversión y testimonio de Cristo. Describe su sufrimiento y gozo al arrepentirse.",
    questions: []
  },
  {
    id: "leccion-22-2",
    title: "3 Nefi 17",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/41-3-nephi-17-19/411-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Después de enseñar a los nefitas, Jesucristo percibe que están abrumados por Sus enseñanzas y que necesitan tiempo para reflexionar. En lugar de partir inmediatamente, permanece con ellos. Sana a todos los enfermos individualmente. Luego pide que traigan a los niños, los bendice uno por uno, y ora al Padre por ellos. Durante este momento sagrado, los ángeles descienden del cielo y rodean a los niños con fuego. El capítulo muestra la compasión y el amor individual de Cristo."
      },
      {
        tipo: "enseñanza",
        autor: "Élder Dallin H. Oaks",
        fuente: "Liahona, noviembre de 2006, págs. 6-9",
        texto: "El poder sanador del Señor Jesucristo está a nuestro alcance para toda aflicción de la vida terrenal. [...] Su expiación es lo suficientemente poderosa no solo para abarcar y pagar el precio del pecado, sino también para sanar toda aflicción terrenal.",
        link: "https://www.churchofjesuschrist.org/study/liahona/2006/11/he-heals-the-heavy-laden?lang=spa"
        // Discurso "Él sana a los que están cargados", Conferencia General de octubre de 2006.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "3 Nefi 17:6-7",
            texto: "¿Hay entre vosotros alguno que esté enfermo? Traedlos aquí. Y los sanó a todos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/17?lang=spa&id=p6-p7#p6"
          },
          {
            referencia: "3 Nefi 17:21",
            texto: "Tomó a sus niños pequeños, uno por uno, y los bendijo, y rogó al Padre por ellos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/17?lang=spa&id=p21#p21"
          },
          {
            referencia: "3 Nefi 17:20",
            texto: "Nadie puede concebir el gozo que llenó nuestras almas cuando vimos que bendecía a nuestros hijos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/17?lang=spa&id=p20#p20"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué te enseña este capítulo sobre el amor de Cristo por cada persona individualmente?",
          "¿En qué momentos de tu vida has sentido que Cristo 'se quedó' contigo cuando lo necesitabas?",
          "¿Cómo podrías mostrar una compasión similar hacia quienes te rodean?"
        ]
      }
    ],
    type: "Bloque de Escrituras - Ven Sigueme",
    description: "Jesucristo sana a los enfermos y bendice a los niños. Los ángeles ministran a los pequeñitos.",
    questions: []
  },
  {
    id: "leccion-22-3",
    title: "Alma 37",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/31-alma-36-38/312-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Alma encarga a su hijo Helamán la custodia de los registros sagrados, explicando su importancia para preservar el conocimiento y traer almas al arrepentimiento. Luego utiliza la Liahona, la brújula que guió a Lehi en el desierto, como símbolo: así como la Liahona funcionaba mediante la fe y diligencia, las palabras de Cristo guían a quienes las siguen con fe. Alma también aconseja sobre la importancia de aprender en la juventud y de mantener en secreto las cosas sagradas."
      },
      {
        tipo: "enseñanza",
        autor: "Élder Richard G. Scott",
        fuente: "Liahona, noviembre de 2014, pág. 93",
        texto: "No cedas ante la mentira de Satanás de que no tienes tiempo de estudiar las Escrituras. Elige un momento para estudiarlas. Deleitarte en la palabra de Dios cada día es más importante que dormir, que los estudios, el trabajo, la televisión, los videojuegos y las redes sociales.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2014/10/make-the-exercise-of-faith-your-first-priority?lang=spa"
        // Discurso "Haz del ejercicio de tu fe tu mayor prioridad", Conferencia General de octubre de 2014 (el último discurso del élder Scott).
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 37:6-7",
            texto: "Por medio de cosas pequeñas y sencillas se realizan grandes cosas; y en muchos casos, los medios pequeños confunden a los sabios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/37?lang=spa&id=p6-p7#p6"
          },
          {
            referencia: "Alma 37:44",
            texto: "Así como esta brújula dirigió a nuestros padres, así también las palabras de Cristo os llevarán a una tierra de promisión.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/37?lang=spa&id=p44#p44"
          },
          {
            referencia: "Alma 37:35",
            texto: "Aprende en tu juventud a guardar los mandamientos de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/37?lang=spa&id=p35#p35"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué 'cosas pequeñas y sencillas' has observado que producen resultados significativos en tu vida?",
          "¿De qué manera las palabras de Cristo te están guiando actualmente según la analogía de la Liahona?",
          "¿Qué registros personales (diarios, experiencias espirituales) consideras importante mantener?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Alma aconseja a Helamán sobre guardar los registros sagrados. Enseña sobre la Liahona como símbolo.",
    questions: []
  },
  {
    id: "leccion-22-4",
    title: "3 Nefi 18:1–14",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/41-3-nephi-17-19/412-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Cristo instituye la Santa Cena entre los nefitas. Bendice el pan y el vino, los da a Sus discípulos, y manda que ellos hagan lo mismo con la multitud. Explica el simbolismo: el pan representa Su cuerpo, el vino representa Su sangre derramada para la remisión de pecados. Instruye sobre participar dignamente del sacramento y sobre la importancia de renovar continuamente los convenios de recordarle siempre. Esta ordenanza se establece como parte central de la adoración."
      },
      {
        tipo: "enseñanza",
        autor: "Élder D. Todd Christofferson",
        fuente: "Liahona, noviembre de 2017, pág. 36",
        texto: "Comer Su carne y beber Su sangre es una manera contundente de expresar cuán completamente debemos traer al Salvador a nuestra vida, a nuestro mismo ser.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2017/10/the-living-bread-which-came-down-from-heaven?lang=spa"
        // Discurso "El pan vivo que ha descendido del cielo", Conferencia General de octubre de 2017.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "3 Nefi 18:7",
            texto: "Y haréis esto siempre en memoria de mi cuerpo. Y será un testimonio al Padre de que siempre os acordáis de mí.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=spa&id=p7#p7"
          },
          {
            referencia: "3 Nefi 18:11",
            texto: "Y haréis esto en memoria de mi sangre, para que testifiquéis al Padre que siempre os acordáis de mí.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=spa&id=p11#p11"
          },
          {
            referencia: "3 Nefi 18:12",
            texto: "Si os acordareis siempre de mí, tendréis mi Espíritu para que esté con vosotros.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=spa&id=p12#p12"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué haces durante la semana para prepararte para la ordenanza del sacramento?",
          "¿De qué maneras específicas te 'acuerdas' del Salvador durante esta ordenanza?",
          "¿Cómo has observado que se cumple la promesa de tener Su Espíritu al recordarle?"
        ]
      }
    ],
    type: "Bloque de Escrituras - Ven Sigueme",
    description: "Cristo instituye la Santa Cena entre los nefitas. Enseña sobre participar dignamente del sacramento.",
    questions: []
  },
  {
    id: "leccion-22-5",
    title: "Alma 37–38",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/31-alma-36-38/313-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Alma continúa aconsejando a Helamán sobre ser humilde, enseñar el arrepentimiento y la fe en Cristo, y ser diligente en guardar los mandamientos. Luego se dirige a su hijo Shiblón, quien aparentemente ha sido fiel, expresándole gratitud por su rectitud. Le aconseja continuar en humildad y paciencia, y refrénar sus pasiones para estar lleno de amor. Estos consejos muestran que Alma adapta sus enseñanzas a las necesidades específicas de cada hijo."
      },
      {
        tipo: "enseñanza",
        autor: "Élder David A. Bednar",
        fuente: "Liahona, mayo de 2013, págs. 43-44",
        texto: "Dominar al hombre natural en nosotros hace que tengamos un amor por Dios y Sus hijos más abundante, más profundo y más duradero. El amor aumenta mediante la justa represión y disminuye por la impulsiva gratificación.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2013/04/we-believe-in-being-chaste?lang=spa"
        // Discurso "Creemos en ser castos", Conferencia General de abril de 2013, comentando directamente Alma 38:12 ("refrena tus pasiones... lleno de amor").
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 37:33",
            texto: "No prediques la palabra, ni te jactes, aún en tu propia sabiduría; sé humilde y sé manso de corazón.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/37?lang=spa&id=p33#p33"
          },
          {
            referencia: "Alma 37:47",
            texto: "Cuida de estas cosas sagradas; sí, mira hacia Dios y vive.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/37?lang=spa&id=p47#p47"
          },
          {
            referencia: "Alma 38:12",
            texto: "Refrena todas tus pasiones, para que seas lleno de amor.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/38?lang=spa&id=p12#p12"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué significa 'refrénar tus pasiones' según el contexto de Alma 38? ¿Cómo se podría aplicar esto?",
          "¿De qué manera puedes evitar jactarte de tu conocimiento al compartir el evangelio?",
          "Si escribieras una carta de consejo a alguien cercano, ¿qué principios compartirías?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Alma continúa sus consejos a Helamán y a Shiblón. Enseña sobre la humildad y la diligencia.",
    questions: []
  },
  {
    id: "leccion-22-6",
    title: "3 Nefi 18:15–39; 19:19–29",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/41-3-nephi-17-19/413-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Cristo continúa enseñando sobre la oración, enfatizando orar en familia y en privado. Instruye sobre el bautismo y advierte sobre permitir que personas indignas participen del sacramento sin arrepentimiento. Los discípulos oran con fe y son llenos del Espíritu Santo, siendo rodeados de fuego. Cristo mismo ora al Padre por ellos con palabras tan significativas que no pueden ser escritas completamente. Este pasaje muestra el poder de la oración sincera."
      },
      {
        tipo: "enseñanza",
        autor: "Presidente M. Russell Ballard",
        fuente: "Liahona, noviembre de 2020, pág. 77",
        texto: "¡Cuán grandioso es el poder de la oración y cuán necesarias son hoy en día nuestras oraciones de fe en Dios y en Su Hijo Amado! Recordemos y agradezcamos el poder de la oración.",
        link: "https://www.churchofjesuschrist.org/study/liahona/2020/11/41ballard?lang=spa"
        // Discurso "Velad, pues, orando en todo tiempo", Conferencia General de octubre de 2020 (entonces Presidente en Funciones del Cuórum de los Doce Apóstoles).
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "3 Nefi 18:15",
            texto: "De cierto, de cierto os digo que debéis velar y orar siempre, no sea que entréis en tentación.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=spa&id=p15#p15"
          },
          {
            referencia: "3 Nefi 18:21",
            texto: "Orad en vuestras familias al Padre, siempre en mi nombre, para que sean bendecidas vuestras esposas y vuestros hijos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=spa&id=p21#p21"
          },
          {
            referencia: "3 Nefi 19:24",
            texto: "Padre, te doy gracias porque has purificado a los que he escogido, a causa de su fe.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/19?lang=spa&id=p24#p24"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cómo es tu práctica actual de oración familiar? ¿Qué podrías mejorar?",
          "¿Qué te enseña la oración de Cristo al Padre sobre Su interés en Sus discípulos?",
          "¿De qué manera la oración constante te ayuda a evitar tentaciones según este pasaje?"
        ]
      }
    ],
    type: "Bloque de Escrituras - Ven Sigueme",
    description: "Cristo instruye sobre la oración y el bautismo. Los discípulos oran y son llenos del Espíritu Santo.",
    questions: []
  },
  {
    id: "leccion-22-7",
    title: "Alma 39",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/31-alma-36-38/314-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Alma se dirige a su hijo Coriantón con corrección firme sobre pecados graves de inmoralidad sexual que había cometido. Alma explica la seriedad de estos pecados, clasificándolos entre los más graves después del asesinato y negar el Espíritu Santo. Sin embargo, el tono de Alma no es de rechazo sino de llamado urgente al arrepentimiento. Enfatiza que aunque el pecado es grave, el arrepentimiento es posible a través de Cristo. Este capítulo ilustra el balance entre reconocer la gravedad del pecado y mantener la esperanza en el arrepentimiento."
      },
      {
        tipo: "enseñanza",
        autor: "Élder Ulisses Soares",
        fuente: "Liahona, noviembre de 2020, pág. 84",
        texto: "Si ponemos nuestra confianza en la roca de la salvación, el Salvador de nuestras almas, [...] nuestra capacidad para controlar nuestros pensamientos aumentará significativamente. [...] Entonces las tentaciones del enemigo, poco a poco, irán perdiendo su poder sobre nosotros, dando como resultado una vida más feliz, pura y consagrada.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2020/10/43soares?lang=spa"
        // Discurso "Buscar a Cristo en todo pensamiento", Conferencia General de octubre de 2020.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 39:5",
            texto: "¿No sabes tú, hijo mío, que estas cosas son una abominación a los ojos del Señor; sí, las más abominables de todos los pecados?",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39?lang=spa&id=p5#p5"
          },
          {
            referencia: "Alma 39:9",
            texto: "No trates de excusarte en lo más mínimo a causa de tus pecados; sino permite que la justicia de Dios, y su misericordia y su longanimidad dominen plenamente tu corazón.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39?lang=spa&id=p9#p9"
          },
          {
            referencia: "Alma 39:13",
            texto: "Vuélvete al Señor con toda tu mente, poder y fuerza; no sigas más tras los malos deseos de tus ojos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39?lang=spa&id=p13#p13"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué te enseña este capítulo sobre el equilibrio entre reconocer la gravedad del pecado y confiar en la misericordia?",
          "¿Cómo podrías ayudar a alguien que ha cometido errores graves sin minimizar la seriedad ni quitar la esperanza?",
          "¿Qué significa 'no excusarte en lo más mínimo' mientras confías en la misericordia divina?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Alma reprende a su hijo Coriantón por sus pecados. Enseña sobre la gravedad de los pecados sexuales.",
    questions: []
  },
  {
    id: "leccion-22-8",
    title: "Éter 12:1–22",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/47-ether-12/471-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Moroni interrumpe su relato de la historia jaredita para reflexionar sobre el poder de la fe. Cita las palabras del profeta Éter, quien enseñó que la fe es la sustancia de las cosas que se esperan y la evidencia de las cosas que no se ven. Moroni proporciona una lista de ejemplos de milagros que la fe ha producido a lo largo de la historia: profetas que movieron montañas, dividieron el mar, sanaron enfermos. Esta sección enfatiza que la fe precede al milagro."
      },
      {
        tipo: "enseñanza",
        autor: "Élder Richard G. Scott",
        fuente: "Liahona, mayo de 2003, pág. 76",
        texto: "Cada vez que pongas a prueba tu fe, o sea, que actúes con rectitud ante una impresión, recibirás la evidencia confirmadora del Espíritu. Esos sentimientos fortalecerán tu fe. A medida que repitas ese patrón, tu fe se fortalecerá.",
        link: "https://www.churchofjesuschrist.org/study/liahona/2003/05/the-sustaining-power-of-faith-in-times-of-uncertainty-and-testing?lang=spa"
        // Discurso "El poder sustentador de la fe en tiempos de incertidumbre y de pruebas", Conferencia General de abril de 2003.
        // Es la misma cita que usa el manual oficial 2024 para esta lección, comentando directamente Éter 12:6.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Éter 12:6",
            texto: "No recibís ningún testimonio sino hasta después de la prueba de vuestra fe.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=spa&id=p6#p6"
          },
          {
            referencia: "Éter 12:12",
            texto: "Fue por la fe que los de tiempos antiguos fueron llamados según el santo orden de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=spa&id=p12#p12"
          },
          {
            referencia: "Éter 12:19",
            texto: "Por la fe se realizaron todas las cosas desde el principio del mundo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=spa&id=p19#p19"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿En qué ocasiones has tenido que ejercer fe antes de recibir un testimonio? ¿Qué aprendiste?",
          "¿De qué maneras has observado que 'la fe precede al milagro' en tu vida o en la de otros?",
          "¿Qué te impide ejercer más fe en algún aspecto de tu vida actualmente?"
        ]
      }
    ],
    type: "Bloque de Escrituras - Ven Sigueme",
    description: "Éter enseña sobre la fe. Moroni compila ejemplos de fe a través de las edades.",
    questions: []
  },
  {
    id: "leccion-22-9",
    title: "Dominio de la doctrina: Alma 39:9",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/31-alma-36-38/315-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "El arrepentimiento verdadero requiere honestidad completa: primero con uno mismo, luego con Dios, y cuando sea necesario, con las autoridades apropiadas. Alma enseña a Coriantón que no debe buscar excusas por sus pecados. Esta enseñanza va contra la tendencia natural de minimizar, racionalizar o justificar los errores. El arrepentimiento genuino comienza con aceptar plena responsabilidad. Solo entonces se puede experimentar plenamente la misericordia y longanimidad de Dios."
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Dallin H. Oaks",
        fuente: "Liahona, abril de 2019",
        texto: "Para ser limpios mediante el arrepentimiento, debemos abandonar nuestros pecados y confesarlos al Señor y a Su juez terrenal, cuando se requiera.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2019/04/51oaks?lang=spa"
        // Discurso "Limpios mediante el arrepentimiento", Conferencia General de abril de 2019 (entonces Primer Consejero de la Primera Presidencia).
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 39:9",
            texto: "No trates de excusarte en lo más mínimo a causa de tus pecados; sino permite que la justicia de Dios, y su misericordia y su longanimidad dominen plenamente tu corazón.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39?lang=spa&id=p9#p9"
          },
          {
            referencia: "DyC 58:42-43",
            texto: "El que se ha arrepentido de sus pecados es perdonado. Por esto podréis saber si un hombre se arrepiente: confesará y abandonará sus pecados.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58?lang=spa&id=p42-p43#p42"
          },
          {
            referencia: "1 Juan 1:9",
            texto: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados y limpiarnos de toda maldad.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-jn/1?lang=spa&id=p9#p9"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿En qué áreas de tu vida tiendes a justificar tus acciones en lugar de aceptar responsabilidad?",
          "¿Qué diferencias observas entre sentir remordimiento y experimentar arrepentimiento verdadero?",
          "¿Cómo se puede equilibrar la honestidad sobre los errores con la confianza en la misericordia divina?"
        ]
      }
    ],
    type: "Dominio de la Doctrina",
    description: "Estudio sobre confesar los pecados y buscar el perdón. El arrepentimiento trae paz al alma.",
    questions: []
  },
  {
    id: "leccion-22-10",
    title: "Dominio de la doctrina: Éter 12:6",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/47-ether-6-11/475-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Una verdad fundamental del aprendizaje espiritual es que el testimonio viene después de la prueba de fe, no antes. Naturalmente deseamos certeza antes de comprometernos, pero el método divino requiere que demos el paso de fe primero. Éter enseña que este ha sido siempre el patrón de Dios con Sus hijos. No recibimos todas las respuestas por adelantado; las recibimos línea sobre línea, precepto sobre precepto, al actuar con la luz que ya tenemos."
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Ezra Taft Benson",
        fuente: "Liahona, agosto de 1975, pág. 42",
        texto: "Con el tiempo, toda persona se enfrenta al 'muro de la fe' y allí debe adoptar una posición; todos debemos decidir por nosotros mismos, con fe, creer y conocer la verdad.",
        link: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/47-ether-6-11/475-teacher?lang=spa"
        // Discurso "El Libro de Mormón es la palabra de Dios", Conferencia General de abril de 1975 (entonces Presidente del Cuórum de los Doce Apóstoles).
        // No se localizó una versión digital independiente en español del discurso original de 1975, así que el link lleva
        // a la página del manual oficial 2024 (en español) que reproduce esta misma cita para esta misma lección.
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Éter 12:6",
            texto: "No recibís ningún testimonio sino hasta después de la prueba de vuestra fe.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=spa&id=p6#p6"
          },
          {
            referencia: "Juan 7:17",
            texto: "El que quiera hacer la voluntad de Dios, conocerá si la doctrina es de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/7?lang=spa&id=p17#p17"
          },
          {
            referencia: "Hebreos 11:1",
            texto: "La fe es la certeza de lo que se espera, la convicción de lo que no se ve.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/11?lang=spa&id=p1#p1"
          }
        ]
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿En qué áreas de tu vida estás esperando un testimonio antes de actuar con fe?",
          "¿En qué ocasiones has recibido un testimonio después de ejercer fe? ¿Qué aprendiste?",
          "¿Cómo puedes desarrollar paciencia con el proceso de obtener un testimonio?"
        ]
      }
    ],
    type: "Dominio de la Doctrina",
    description: "Se estudia que la fe precede al testimonio. Las bendiciones vienen después de la prueba de fe.",
    questions: []
  }
]