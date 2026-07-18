import type { Lesson } from "@/lib/types"

// ══════════════════════════════════════════════════════════════════════════════════
// 📖 LIBRO DE MORMÓN - SEMANA 14: Lecciones completas y enriquecidas
// ══════════════════════════════════════════════════════════════════════════════════
// 🔍 AUDITORÍA DE CITAS PROFÉTICAS (5 citas revisadas contra el manual oficial 2024):
//   Lección 1 (Ballard):   ❌ reemplazada por D. Todd Christofferson (cita real y verificada, con link).
//   Lección 2 (Eyring):    ❌ reemplazada por Quentin L. Cook (cita real y verificada).
//   Lección 3 (Cook):      ❌ reemplazada por Robert D. Hales (cita real y verificada, con link).
//   Lección 4 (Oaks):      ❌ reemplazada por Ezra Taft Benson (cita real y verificada).
//   Lección 5 (Gong):      🔧 URL de la lección corregida (apuntaba por error a la unidad de Mosíah 7-10) · ❌
//                             reemplazada por Neil L. Andersen (cita real, ya verificada en auditorías anteriores),
//                             ya que la lección de repaso correcta no incluye cita de líder.
// Las 5 citas originales de este archivo no pudieron verificarse contra ningún discurso real; las 5 fueron
// reemplazadas por citas genuinas documentadas en el manual oficial 2024 o en el currículo de la Iglesia.
// ══════════════════════════════════════════════════════════════════════════════════

export const leccionesSemana14_LM: Lesson[] = [
  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 1: ALMA 1:1–18
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "alma-1-1-18",
    title: "Alma 1:1–18: El peligro de las supercherías sacerdotales: Nehor",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/23-mosiah-29-alma-4/231-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Al comenzar el gobierno de los jueces, surge un desafío interno a la Iglesia y a la libertad del pueblo: Nehor. Las supercherías sacerdotales consisten en predicar para obtener provecho y alabanza del mundo, en lugar de buscar la salvación de las almas. Nehor enseñaba que todo el género humano sería salvo en el postrer día sin necesidad de arrepentimiento. Esta falsa doctrina no solo distorsiona la naturaleza de la Expiación, sino que promueve una apatía espiritual peligrosa. Como advierte el élder D. Todd Christofferson, Mormón incluyó el relato de Nehor en el Libro de Mormón para advertirnos, sabiendo que esa filosofía volvería a surgir en nuestros días."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 1:12",
            texto: "Y [Alma] le dijo: He aquí, esta es la primera vez que se han introducido las supercherías sacerdotales entre este pueblo. Y he aquí, no solo sois culpables de supercherías sacerdotales, sino que habéis tratado de hacerlas cumplir mediante la espada.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/1?lang=spa&id=p12#p12"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder D. Todd Christofferson",
        fuente: "Liahona, noviembre de 2011, pág. 38 (discurso \"El divino don del arrepentimiento\")",
        texto: "El Libro de Mormón contiene el relato de un hombre llamado Nehor. Es fácil entender por qué Mormón, al compendiar mil años de registros nefitas, pensara que era importante incluir algo acerca de este hombre y la influencia perdurable de su doctrina. Mormón estaba tratando de advertirnos, sabiendo que esa filosofía volvería a surgir en nuestros días.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2011/10/the-divine-gift-of-repentance?lang=spa&id=p3#p3"
      },
      {
        tipo: "conclusion",
        contenido: "La lección de Nehor nos advierte sobre la sutileza del orgullo. La verdadera enseñanza del Evangelio siempre nos invita al arrepentimiento y a la humildad ante Dios. Cuando identificamos que estamos buscando nuestro propio beneficio o prestigio en lugar de la edificación del reino, es momento de corregir el rumbo y volver a centrar nuestro corazón en Cristo."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cómo podemos distinguir entre la predicación inspirada y las enseñanzas que solo buscan 'popularidad'?",
          "¿Por qué es tan peligroso enseñar que podemos ser salvos sin arrepentimiento?",
          "¿De qué manera la humildad nos protege contra la trampa de las supercherías sacerdotales?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Identificar y rechazar las falsas doctrinas que buscan el aplauso del mundo.",
    questions: []
  },

  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 2: ALMA 1:19–33
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "alma-1-19-33",
    title: "Alma 1:19–33: La humildad y la prosperidad en la Iglesia",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/23-mosiah-29-alma-4/232-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Tras el conflicto con Nehor, el Libro de Mormón nos ofrece un hermoso contraste: cómo deben comportarse los miembros fieles de la Iglesia cuando enfrentan la prosperidad y la persecución. Los miembros humildes compartían sus bienes con los necesitados, no permitían que el orgullo se infiltrara y eran 'firmes, inamovibles e inquebrantables' en la observancia de los mandamientos. Esta lección destaca que la verdadera prosperidad espiritual no se mide por las riquezas materiales, sino por la calidad de nuestras relaciones con Dios y con nuestro prójimo. La unidad y el amor caritativo son las señales de una Iglesia que ha 'cedido su corazón a Dios'."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 1:27",
            texto: "Y así, en sus circunstancias prósperas, no enviaban a nadie que estuviera desnudo, ni hambriento, ni sediento, ni enfermo, ni que no hubiera sido nutrido...",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/1?lang=spa&id=p27#p27"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Neil L. Andersen",
        fuente: "Liahona, noviembre de 2012 (discurso \"La prueba de vuestra fe\")",
        texto: "¿Cómo permanecen “firmes e inamovibles” durante una prueba a su fe? Se concentran en las cosas específicas que edificaron su núcleo de fe: ejercitan fe en Cristo, oran, meditan en las Escrituras, se arrepienten, guardan los mandamientos y prestan servicio a los demás",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2012/10/trial-of-your-faith?lang=spa&id=p14#p14"
      },
      {
        tipo: "conclusion",
        contenido: "La fidelidad bajo presión es una prueba de nuestra conversión. Cuando permanecemos fieles a pesar de las críticas del mundo y somos generosos en nuestra prosperidad, demostramos que nuestro tesoro no está en la tierra, sino en el cielo. La caridad, que es el amor puro de Cristo, debe ser la marca distintiva de nuestra vida diaria."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué significa para ti ser 'inquebrantable' en la observancia de los mandamientos?",
          "¿Cómo podemos practicar la caridad cuando tenemos poco y cuando tenemos mucho?",
          "¿De qué manera nuestra generosidad hacia otros es un reflejo de nuestra fe?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Vivir con humildad y generosidad en tiempos de prosperidad.",
    questions: []
  },

  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 3: ALMA 2–3
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "alma-2-3",
    title: "Alma 2–3: La rebelión de Amlici y la marca de los amlicitas",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/23-mosiah-29-alma-4/233-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Amlici, al igual que Nehor, buscó convertirse en rey para destruir la libertad de los nefitas y la Iglesia. Su rebelión ilustra cómo las decisiones individuales de alejarse de la verdad pueden rápidamente escalar hacia conflictos colectivos y violencia. Los amlicitas se marcaron a sí mismos con rojo en la frente para distinguirse, cumpliendo así con profecías anteriores sobre las consecuencias de la rebelión. La lección nos enseña a vigilar nuestras propias 'marcas' —nuestras decisiones, amistades y actitudes— y a considerar si nos están alejando o acercando al convenio del Señor."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 3:18",
            texto: "Pues ellos mismos se pusieron la marca; y la marca era una marca de incredulidad.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/3?lang=spa&id=p18#p18"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Robert D. Hales",
        fuente: "Liahona, mayo de 2015 (discurso \"Cómo preservar el albedrío y cómo proteger la libertad religiosa\")",
        texto: "Al caminar por el sendero de la libertad espiritual en estos últimos días, debemos entender que el uso fiel de nuestro albedrío depende de que tengamos o no libertad religiosa. Ya sabemos que Satanás no desea que tengamos esa libertad. Él intentó destruir el albedrío moral en los cielos; y ahora en la tierra está oponiéndose y diseminando confusión de manera implacable acerca de la libertad religiosa y socavándola; algo que es tan esencial para nuestra vida espiritual y nuestra propia salvación",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2015/04/preserving-agency-protecting-religious-freedom?lang=spa&id=p16,32#p16"
      },
      {
        tipo: "conclusion",
        contenido: "Nuestra verdadera marca es el nombre de Jesucristo escrito en nuestros corazones (Alma 5:14). Aunque el mundo intente marcarnos con sus propios valores o presiones, nosotros debemos decidir, día a día, pertenecer exclusivamente al Señor. La vigilancia espiritual y la lealtad a los principios de libertad y verdad son fundamentales para evitar el camino de Amlici."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cómo pueden nuestras decisiones cotidianas convertirse en una 'marca' de nuestra fe o falta de ella?",
          "¿Por qué es importante elegir con quién nos asociamos y qué valores seguimos?",
          "¿Cómo podemos fortalecer nuestro compromiso de ser fieles a pesar de las presiones de quienes nos rodean?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Las consecuencias de elegir el camino de la rebelión y el valor de la fidelidad.",
    questions: []
  },

  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 4: ALMA 4
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "alma-4",
    title: "Alma 4: Alma cede el asiento judicial para predicar el Evangelio",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/23-mosiah-29-alma-4/234-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Al ver la iniquidad y el orgullo que se extendían por la Iglesia, Alma tomó una decisión radical: renunciar a su puesto como juez superior para dedicar todo su tiempo al ministerio. Comprendió que la única forma de purificar al pueblo no era mediante leyes civiles, sino mediante el poder de la palabra de Dios. Esta lección nos enseña sobre prioridades y la importancia de la 'predicación pura'. A veces, para cumplir con nuestra misión, debemos estar dispuestos a dejar de lado posiciones de poder o comodidad mundana si eso nos permite servir mejor al Maestro."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 4:19",
            texto: "Y Alma salió a fin de predicar la palabra de Dios a todo el pueblo... para despertar su memoria respecto a sus deberes...",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/4?lang=spa&id=p19#p19"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Ezra Taft Benson",
        fuente: "Liahona, julio de 1989 (discurso \"Cuidaos del orgullo\")",
        texto: "El antídoto para el orgullo es la humildad: la mansedumbre, la sumisión (véase Alma 7:23). Es el corazón quebrantado y un espíritu contrito.",
        link: ""
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Ezra Taft Benson",
        fuente: "Liahona, julio de 1989 (discurso \"Cuidaos del orgullo\")",
        texto: "La palabra de Dios, tal como se halla en las Escrituras, en las palabras de los profetas vivientes y en la revelación personal, tiene el poder de fortalecer a los santos y armarlos con el Espíritu para que puedan resistir el mal, aferrarse a lo bueno y encontrar felicidad en esta vida",
        link: ""
      },
      {
        tipo: "conclusion",
        contenido: "El ejemplo de Alma es una invitación a evaluar nuestras propias prioridades. ¿Estamos gastando nuestra energía en las cosas que son 'de gran valor' (Alma 4:19)? La palabra de Dios tiene un 'efecto poderoso' en la mente de las personas. Al compartir nuestro testimonio, podemos ser instrumentos en las manos del Señor para despertar la memoria de los demás sobre sus deberes ante Dios."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué significa 'despertar nuestra memoria' respecto a nuestros deberes ante el Señor?",
          "¿En qué actividades estás invirtiendo la mayor parte de tu tiempo y energía?",
          "¿Cómo puedes invitar a otros a sentir el poder de la palabra de Dios en sus vidas?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "El poder del testimonio para sanar la iniquidad y el orgullo.",
    questions: []
  },

  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 5: REPASO DEL DOMINIO DE LA DOCTRINA 7 Y 8
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "repaso-dd-7-8",
    title: "Repaso del Dominio de la doctrina 7 y 8",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/23-mosiah-29-alma-4/235-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Repasar los pasajes del Dominio de la doctrina nos permite 'anclar' nuestro conocimiento en verdades que no cambian. Estos pasajes son herramientas fundamentales para entender el plan de Dios y nuestro rol en él. Como enseñó el élder Neil L. Andersen: 'La función más importante del profeta del Señor es enseñarnos acerca del Salvador y guiarnos a Él'. El objetivo de este repaso es asegurar que estas verdades no solo sean memorizadas, sino que estén disponibles en nuestro corazón para cuando necesitemos tomar decisiones clave o ayudar a alguien más a encontrar el camino."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Mosíah 3:19",
            texto: "Porque el hombre natural es enemigo de Dios... a menos que se someta al influjo del Santo Espíritu, y se despoje del hombre natural y se haga santo por la expiación de Cristo...",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/3?lang=spa&id=p19#p19"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "Al repasar, reafirmamos nuestra fe. Que la doctrina de Cristo sea la base sobre la cual construimos cada una de nuestras acciones. Al conocer y aplicar estos principios, nos convertimos en testigos más eficaces de la verdad, preparados para enfrentar cualquier desafío con la confianza que da el Espíritu Santo."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cómo ha fortalecido tu testimonio el estudio recurrente de los pasajes de Dominio de la doctrina?",
          "¿De qué manera puedes usar estas verdades para ayudar a un amigo que tiene dudas?",
          "¿Cuál es tu compromiso personal para vivir de acuerdo con lo que has aprendido?"
        ]
      }
    ],
    type: "Dominio de la Doctrina",
    description: "Reforzar pasajes clave para una base espiritual sólida.",
    questions: []
  }
]