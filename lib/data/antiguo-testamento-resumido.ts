// datos_lecciones2.ts

export interface Cita {
  referencia: string;
  texto: string;
}

export interface Seccion {
  tipo: "contexto" | "escrituras" | "enseñanza" | "conclusion" | "cuestionario";
  contenido?: string;
  citas?: Cita[];
  autor?: string;
  fuente?: string;
  texto?: string;
  preguntas?: string[];
}

export interface Leccion {
  id: number;
  titulo: string;
  url_fuente: string;
  secciones: Seccion[];
}

export const lecciones: Leccion[] = [
  {
    id: 2,
    titulo: "Introducción al Antiguo Testamento",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/01-welcome/011-introduction?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "El Antiguo Testamento es un recurso valioso para conocer a nuestro Padre Celestial y a Jesucristo. Al estudiarlo, podemos aprender sobre Su participación íntima en nuestra vida." },
      { tipo: "enseñanza", autor: "Élder Michael T. Ringwood", fuente: "Liahona, mayo de 2022, pág. 88", texto: "Somos la esencia del plan de nuestro Padre Celestial y la razón de la misión de nuestro Salvador." },
      { tipo: "escrituras", citas: [
          { referencia: "Lucas 9:35", texto: "Y escucharás su voz." },
          { referencia: "Deuteronomio 7:6", texto: "El Señor te ha escogido para que seas un pueblo especial para él." },
          { referencia: "Salmo 34:18", texto: "El Señor está cerca de los quebrantados de corazón." },
          { referencia: "Juan 3:16", texto: "Porque Dios amó tanto al mundo que dio a su Hijo Unigénito." }
      ]},
      { tipo: "conclusion", contenido: "Al reflexionar sobre estas enseñanzas y buscar la guía del Espíritu Santo, podemos acercarnos más al Padre Celestial y a Jesucristo." },
      { tipo: "cuestionario", preguntas: [
          "¿Qué experiencias has tenido con el Antiguo Testamento que te han ayudado a sentirte más cerca del Padre Celestial y de Jesucristo?",
          "¿De qué manera puedes aplicar las enseñanzas del Antiguo Testamento en tu vida diaria para acercarte más a Dios?",
          "¿Qué puedes hacer para buscar la guía del Espíritu Santo mientras estudias el Antiguo Testamento?"
      ]}
    ]
  },
  {
    id: 3,
    titulo: "El Plan de Salvación",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/01-welcome/012-the-plan-of-salvation?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "El Plan de Salvación es fundamental para nuestro progreso eterno. El Salvador es esencial en este plan para nuestro regreso a salvo a Él." },
      { tipo: "enseñanza", autor: "Presidente Dallin H. Oaks", fuente: "Liahona, mayo de 2021, pág. 75", texto: "Jesucristo es la figura central en el plan de felicidad del Padre Celestial." },
      { tipo: "escrituras", citas: [
          { referencia: "Job 38:7", texto: "Nos regocijamos al aprender sobre el plan del Padre Celestial." },
          { referencia: "1 Pedro 3:19", texto: "Cristo predicó a los espíritus encarcelados." },
          { referencia: "DyC 138:58", texto: "Es posible cierto arrepentimiento en el mundo de los espíritus." },
          { referencia: "Alma 13:27", texto: "No debemos postergar nuestro arrepentimiento durante la vida mortal." }
      ]},
      { tipo: "enseñanza", autor: "Élder David A. Bednar", fuente: "Liahona, noviembre de 2019, págs. 33-34", texto: "El plan de felicidad del Padre tiene como fin brindar guía a Sus hijos y ayudarlos a sentir un gozo duradero." },
      { tipo: "cuestionario", preguntas: [
          "¿Cuál es la función central de Jesucristo en el Plan de Salvación del Padre Celestial?",
          "¿Qué podemos hacer para recibir las bendiciones de la exaltación?",
          "¿Cómo podemos encontrar guía y propósito a través del conocimiento del Plan?"
      ]}
    ]
  },
  {
    id: 5,
    titulo: "Génesis 25-27",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/10-genesis-24-33/102-genesis-25-27?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "La historia de Jacob y Esaú nos enseña a valorar las bendiciones eternas por encima de los deseos mundanos." },
      { tipo: "enseñanza", autor: "Élder David A. Bednar", fuente: "Liahona, noviembre de 2022, pág. 94", texto: "Nuestra preocupación con las cosas de este mundo puede llevarnos a perder nuestra primogenitura espiritual por un guisado de lentejas." },
      { tipo: "escrituras", citas: [
          { referencia: "Génesis 25:27-34", texto: "Esaú no valoró su bendición de primogenitura." },
          { referencia: "Génesis 27:1-29", texto: "Jacob recibió la bendición de la primogenitura." },
          { referencia: "1 Juan 2:15", texto: "No debemos amar al mundo ni nada de lo que hay en él." }
      ]},
      { tipo: "cuestionario", preguntas: [
          "¿Qué cosas en tu vida pueden estar distrayendo tu atención de las bendiciones eternas?",
          "¿Cómo puedes evitar perder tu primogenitura espiritual por cosas mundanas?",
          "¿Qué pasos puedes dar para priorizar las cosas de Dios?"
      ]}
    ]
  },
  {
    id: 6,
    titulo: "Génesis 37-41",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/11-genesis-37-41/111-genesis-37-41?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "La historia de José nos enseña que, a pesar de enfrentar desafíos como la esclavitud, nunca perdió la fe en Dios." },
      { tipo: "escrituras", citas: [
          { referencia: "Génesis 39:2-3", texto: "El Señor estaba con José, y todo lo que hacía prosperaba en su mano." },
          { referencia: "Romanos 8:28", texto: "Todas las cosas cooperan para bien de los que aman a Dios." },
          { referencia: "DyC 90:24", texto: "Todas las cosas obrarán juntamente para el bien de los que son fieles." }
      ]},
      { tipo: "enseñanza", autor: "Élder Dieter F. Uchtdorf", texto: "El amor de Dios hará que surja algo inimaginable incluso en los momentos más difíciles." },
      { tipo: "cuestionario", preguntas: [
          "¿Cómo has visto al Padre Celestial utilizar las pruebas para bendecir vidas?",
          "¿Qué has aprendido de quienes han salido fortalecidos de pruebas difíciles?",
          "¿Qué puedes hacer para fortalecer tu fe en momentos de prueba?"
      ]}
    ]
  },
  {
    id: 7,
    titulo: "Génesis 39",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/11-genesis-37-41/112-genesis-39?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "La lección de José ante la tentación resalta la importancia de la castidad y la devoción a Dios." },
      { tipo: "escrituras", citas: [
          { referencia: "Génesis 39:9", texto: "¿Cómo, pues, haría yo este gran mal y pecaría contra Dios?" },
          { referencia: "1 Corintios 10:13", texto: "No os ha sobrevenido ninguna tentación que no sea humana." },
          { referencia: "Santiago 1:12", texto: "Bienaventurado el varón que soporta la tentación." }
      ]},
      { tipo: "enseñanza", autor: "Élder Dale G. Renlund", texto: "En el momento en que decidimos cambiar, Dios nos ayuda a regresar." },
      { tipo: "cuestionario", preguntas: [
          "¿Qué puedes hacer para resistir la tentación en tu vida diaria?",
          "¿Cómo puedes buscar la ayuda de Dios para vencer las tentaciones?",
          "¿Qué cambios te ayudarían a mantener una relación más cercana con Dios?"
      ]}
    ]
  },
  {
    id: 8,
    titulo: "Fijar metas",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/63-for-the-strength-of-youth/632-setting-goals?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "Fijar metas es vital para llegar a ser como el Padre Celestial y Jesucristo." },
      { tipo: "enseñanza", autor: "Élder Ulisses Soares", fuente: "Liahona, enero de 2023", texto: "La ayuda que podemos recibir del Señor en nuestras metas es ilimitada." },
      { tipo: "escrituras", citas: [
          { referencia: "3 Nefi 12:48", texto: "El Señor desea que lleguemos a ser perfectos como Él." },
          { referencia: "Filipenses 4:13", texto: "Todo lo puedo en Cristo que me fortalece." },
          { referencia: "Lucas 18:27", texto: "Lo que es imposible para los hombres, es posible para Dios." }
      ]},
      { tipo: "cuestionario", preguntas: [
          "¿Qué metas personales te gustaría alcanzar en el futuro?",
          "¿Cómo puedes hacer partícipe al Señor en tus esfuerzos?",
          "¿Qué pasos darás para buscar la guía del Espíritu en tus aspiraciones?"
      ]}
    ]
  },
  {
    id: 9,
    titulo: "Fortalecer tu cimiento espiritual",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/61-doctrinal-mastery/611-strengthening-spiritual-foundation?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "Edificar sobre la roca de Jesucristo nos brinda la base necesaria para enfrentar los clamores del mundo." },
      { tipo: "enseñanza", autor: "Élder Neil L. Andersen", fuente: "Liahona, mayo de 2018", texto: "Vivimos en un planeta con clamores de un millón de voces y es crucial discernir la verdad." },
      { tipo: "escrituras", citas: [
          { referencia: "Isaías 28:16", texto: "Yo pongo en Sion una piedra, una roca de escándalo... el que cree no se apresurará." },
          { referencia: "Hebreos 11:1", texto: "La fe es la certeza de lo que se espera, la convicción de lo que no se ve." }
      ]},
      { tipo: "conclusion", contenido: "El Dominio de la doctrina ayuda a aplicar el Evangelio y fortalecer la fe para superar cualquier obstáculo." },
      { tipo: "cuestionario", preguntas: [
          "¿Qué significa para ti edificar tus cimientos en Jesucristo?",
          "¿Cómo te ayuda el Dominio de la doctrina a responder con fe?",
          "¿Qué pasos darás hoy para fortalecer tu relación con el Salvador?"
      ]}
    ]
  },
  {
    id: 10,
    titulo: "Uso responsable de la tecnología",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/63-for-the-strength-of-youth/634-taking-charge-of-technology?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "La tecnología es una herramienta poderosa que requiere un uso intencional para no distraernos de lo espiritual." },
      { tipo: "enseñanza", autor: "Élder David A. Bednar", texto: "La tecnología en sí misma no es buena ni mala; los objetivos que se logran con ella indican su naturaleza." },
      { tipo: "escrituras", citas: [
          { referencia: "Salmo 119:105", texto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino." },
          { referencia: "Éxodo 13:21-22", texto: "El Señor guiaba al pueblo con una columna de nube y de fuego." }
      ]},
      { tipo: "enseñanza", autor: "Presidente M. Russell Ballard", texto: "Los dispositivos móviles pueden distraernos de la voz apacible y delicada." },
      { tipo: "cuestionario", preguntas: [
          "¿Cómo evalúas tu uso actual de la tecnología?",
          "¿De qué manera puedes usarla para acercarte más a Dios?",
          "¿Qué límites saludables necesitas establecer hoy?"
      ]}
    ]
  },
  {
    id: 11,
    titulo: "Génesis 42-50",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/12-genesis-42-50/121-genesis-42-45?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "El ejemplo de José al perdonar a sus hermanos nos enseña sobre la misericordia y la paz que viene de perdonar." },
      { tipo: "escrituras", citas: [
          { referencia: "DyC 64:10", texto: "Yo, el Señor, perdonaré a quien quiera perdonar, mas a vosotros os es requerido perdonar a todos los hombres." },
          { referencia: "Lucas 6:36", texto: "Sed misericordiosos, como vuestro Padre es misericordioso." },
          { referencia: "Efesios 4:31-32", texto: "Perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo." }
      ]},
      { tipo: "enseñanza", autor: "Presidente Russell M. Nelson", fuente: "Liahona, mayo de 2022", texto: "Si el perdón parece imposible, supliquen por el poder de la sangre expiatoria de Jesucristo." },
      { tipo: "cuestionario", preguntas: [
          "¿Qué desafíos enfrentas al perdonar a otros?",
          "¿Cómo puedes aplicar el ejemplo de José en tus relaciones?",
          "¿Qué bendiciones esperas recibir al liberar el rencor?"
      ]}
    ]
  },
  {
    id: 12,
    titulo: "TJS, Génesis 50",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/12-genesis-42-50/122-jst-genesis-50?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "José de Egipto profetizó sobre un vidente escogido, José Smith, quien restauraría la Iglesia en los últimos días." },
      { tipo: "escrituras", citas: [
          { referencia: "TJS, Génesis 50:27", texto: "El Señor mi Dios levantará a un vidente." },
          { referencia: "2 Nefi 3:6-15", texto: "Profecía sobre el vidente escogido de los últimos días." },
          { referencia: "DyC 135:3", texto: "José Smith ha hecho más por la salvación de los hombres que cualquier otro." }
      ]},
      { tipo: "enseñanza", autor: "Élder Neil L. Andersen", texto: "Cada creyente necesita una confirmación espiritual de la misión divina de José Smith." },
      { tipo: "conclusion", contenido: "Un testimonio se fortalece al estudiar el Libro de Mormón y buscar la guía del Espíritu Santo." },
      { tipo: "cuestionario", preguntas: [
          "¿Qué sientes al pensar en el profeta José Smith?",
          "¿Cómo describirías tu testimonio actual de la Restauración?",
          "¿Cómo el Libro de Mormón te conduce hacia el Salvador?"
      ]}
    ]
  },
  {
    id: 13,
    titulo: "Evalúa tu aprendizaje 2",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/12-genesis-42-50/123-assess-your-learning-2?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "Reflexionar sobre nuestro progreso nos ayuda a reconocer cómo estamos llegando a ser más semejantes a Dios." },
      { tipo: "escrituras", citas: [
          { referencia: "Jeremías 55:6", texto: "Busquen al Señor mientras puede ser hallado." },
          { referencia: "Gálatas 5:22-23", texto: "El fruto del Espíritu es amor, gozo, paz..." },
          { referencia: "DyC 14:7", texto: "Si guardáis mis mandamientos, tendréis la vida eterna." }
      ]},
      { tipo: "enseñanza", autor: "Presidente Russell M. Nelson", texto: "Perseveren en la fe a pesar de las dificultades y confíen en el Señor." },
      { tipo: "cuestionario", preguntas: [
          "¿Cómo compararías tu crecimiento espiritual con el de un árbol?",
          "¿Por qué es importante el matrimonio eterno en el plan del Padre?",
          "¿Cómo estás participando en el recogimiento de Israel?"
      ]}
    ]
  },
  {
    id: 14,
    titulo: "Centrarse en Jesucristo en las Escrituras",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/62-scripture-study-skills/621-focusing-on-the-savior?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "El propósito central de las Escrituras es llenar nuestras almas de fe en Jesucristo mediante símbolos y relatos." },
      { tipo: "enseñanza", autor: "Élder D. Todd Christofferson", texto: "El propósito de todas las escrituras es llenar nuestras almas de fe en Dios el Padre y Su Hijo." },
      { tipo: "escrituras", citas: [
          { referencia: "Jeremías 2:13", texto: "Me dejaron a mí, fuente de agua viva." },
          { referencia: "Juan 17:3", texto: "Esta es la vida eterna: que te conozcan a ti." },
          { referencia: "Juan 14:7-9", texto: "El que me ha visto a mí, ha visto al Padre." }
      ]},
      { tipo: "cuestionario", preguntas: [
          "¿Qué símbolos del Salvador has encontrado recientemente?",
          "¿Cómo puedes buscar activamente al Salvador en tus lecturas diarias?",
          "¿De qué manera el conocer al Hijo te ayuda a conocer al Padre?"
      ]}
    ]
  },
  {
    id: 15,
    titulo: "Hacer que el Señor forme parte de tu aprendizaje",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/67-succeed-in-school/671-involving-the-lord?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "El Señor desea magnificar nuestros esfuerzos educativos cuando lo incluimos en nuestro proceso de aprendizaje." },
      { tipo: "enseñanza", autor: "Élder Clark G. Gilbert", texto: "Hagan partícipe al Señor. Oren por Su ayuda y Él magnificará sus esfuerzos." },
      { tipo: "escrituras", citas: [
          { referencia: "Romanos 15:13", texto: "Que el Dios de esperanza los llene de alegría y paz." },
          { referencia: "DyC 88:118", texto: "Buscad conocimiento, tanto por el estudio como por la fe." }
      ]},
      { tipo: "enseñanza", autor: "Presidente Henry B. Eyring", texto: "El Señor sabe lo que ustedes tienen que saber y les ha reservado oportunidades de aprendizaje." },
      { tipo: "cuestionario", preguntas: [
          "¿Cómo has visto al Señor ayudarte en tus estudios?",
          "¿Qué desafíos escolares puedes llevar hoy al Señor en oración?",
          "¿Qué acciones específicas tomarás para estudiar con fe?"
      ]}
    ]
  },
  {
    id: 16,
    titulo: "Éxodo 1",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/13-exodus-1-6/131-exodus-1?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "Las parteras Sifra y Fúa nos enseñan a temer a Dios y obedecer Sus mandamientos incluso bajo presión externa." },
      { tipo: "enseñanza", autor: "Presidente Russell M. Nelson", fuente: "Liahona, mayo de 2017", texto: "Los discípulos verdaderos están dispuestos a destacarse y defender sus principios." },
      { tipo: "escrituras", citas: [
          { referencia: "Éxodo 1:17-21", texto: "Las parteras temieron a Dios y no hicieron como el rey les mandó." },
          { referencia: "Mateo 5:10-12", texto: "Bienaventurados los que padecen persecución por causa de la justicia." }
      ]},
      { tipo: "enseñanza", autor: "Élder David A. Bednar", texto: "El justo temor abarca un profundo sentimiento de reverencia y asombro por el Señor." },
      { tipo: "cuestionario", preguntas: [
          "¿Qué te inspira a poner a Dios en primer lugar hoy?",
          "¿Cómo respondes cuando te sientes presionado a ir contra tu fe?",
          "¿Qué bendiciones has visto al ser valiente en tus principios?"
      ]}
    ]
  },
  {
    id: 17,
    titulo: "Éxodo 2-4",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/13-exodus-1-6/132-exodus-2-4?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "El llamamiento de Moisés nos muestra que el Señor capacita a quienes llama y habla a través de Sus siervos." },
      { tipo: "escrituras", citas: [
          { referencia: "Éxodo 4:12", texto: "Ahora pues, ve, que yo estaré en tu boca y te enseñaré lo que has de hablar." },
          { referencia: "Hebreos 1:1-2", texto: "Dios ha hablado por medio de los profetas y de Su Hijo." },
          { referencia: "DyC 1:38", texto: "Sea por mi propia voz o por la de mis siervos, es lo mismo." }
      ]},
      { tipo: "enseñanza", autor: "Élder Neil L. Andersen", texto: "En un planeta con un millón de voces, la voz del profeta nos guía." },
      { tipo: "cuestionario", preguntas: [
          "¿Cómo puedes distinguir la voz del Señor entre tanto ruido?",
          "¿Qué consejo profético estás tratando de aplicar actualmente?",
          "¿Cómo superas los obstáculos para seguir a los profetas?"
      ]}
    ]
  },
  {
    id: 18,
    titulo: "Éxodo 5-6",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/13-exodus-1-6/133-exodus-5-6?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "Debemos confiar en el Señor y en Sus promesas incluso cuando los resultados inmediatos no son los que esperamos." },
      { tipo: "enseñanza", autor: "Élder D. Todd Christofferson", fuente: "Liahona, mayo de 2022", texto: "No debemos pensar en el plan de Dios como una máquina expendedora cósmica." },
      { tipo: "escrituras", citas: [
          { referencia: "Jeremías 29:11", texto: "Yo sé los pensamientos que tengo acerca de vosotros... para daros el fin que esperáis." },
          { referencia: "Proverbios 3:5-6", texto: "Fíate de Jehová de todo tu corazón y no te apoyes en tu propia prudencia." }
      ]},
      { tipo: "conclusion", contenido: "El Padre Celestial y Jesucristo siempre están con nosotros, dándonos esperanza en Sus promesas eternas." },
      { tipo: "cuestionario", preguntas: [
          "¿Cómo mantienes la fe cuando las bendiciones se retrasan?",
          "¿Qué promesas del Señor te sostienen hoy?",
          "¿Cómo cultivas esperanza en medio de la incertidumbre?"
      ]}
    ]
  },
  {
    id: 19,
    titulo: "Jesucristo está en el centro de toda la adoración en el templo",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/69-temple-preparation/691-christ-in-temple-worship?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "El templo es la Casa del Señor, un lugar santificado para conocerlo y recibir Su poder." },
      { tipo: "enseñanza", autor: "Élder Allen D. Haynie", texto: "Él es la razón por la que vamos al templo. Él es a quien el Padre desea que conozcamos allí." },
      { tipo: "escrituras", citas: [
          { referencia: "Éxodo 25:8", texto: "Y me harán un santuario para que yo habite en medio de ellos." },
          { referencia: "Hageo 2:7", texto: "Y llenaré de gloria esta casa." }
      ]},
      { tipo: "enseñanza", autor: "Presidente Russell M. Nelson", fuente: "Liahona, mayo de 2024", texto: "En la Casa del Señor pueden esperar recibir respuestas, revelación y mayor fe." },
      { tipo: "cuestionario", preguntas: [
          "¿Cómo centras tu mente en Cristo cuando piensas en el templo?",
          "¿Qué bendiciones has sentido al participar en la obra del templo?",
          "¿Cómo te preparas para sentir la presencia del Señor en Su casa?"
      ]}
    ]
  },
  {
    id: 21,
    titulo: "Lección de Pascua de Resurrección",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/71-easter/711-easter?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "Celebramos la victoria de Jesucristo sobre el pecado y la muerte, lo cual nos ofrece esperanza infinita." },
      { tipo: "enseñanza", autor: "Presidente Russell M. Nelson", texto: "El Salvador brindó esperanza y paz en formas que otros considerarían imposibles." },
      { tipo: "escrituras", citas: [
          { referencia: "Job 19:25", texto: "Yo sé que mi Redentor vive." },
          { referencia: "Juan 14:27", texto: "La paz os dejo, mi paz os doy." },
          { referencia: "Filipenses 4:7", texto: "La paz de Dios sobrepasa todo entendimiento." }
      ]},
      { tipo: "cuestionario", preguntas: [
          "¿Cómo te brinda esperanza la Resurrección en tus momentos difíciles?",
          "¿Qué pasajes de paz son tus favoritos durante la Pascua?",
          "¿Cómo puedes compartir el gozo de la Resurrección con otros?"
      ]}
    ]
  },
  {
    id: 22,
    titulo: "Prepararse para la conferencia general",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/70-teachings-of-church-leaders/701-preparing-for-general-conference?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "La conferencia general es un tiempo de dirección personal donde el Señor habla a través de Sus siervos." },
      { tipo: "enseñanza", autor: "Élder Neil L. Andersen", texto: "La conferencia es uno de los momentos donde Él da dirección a Su Iglesia y a nosotros personalmente." },
      { tipo: "escrituras", citas: [
          { referencia: "Amós 3:7", texto: "No hará nada el Señor sin que revele Su secreto a los profetas." },
          { referencia: "2 Crónicas 36:15", texto: "El Señor envió palabra por medio de Sus mensajeros por compasión." }
      ]},
      { tipo: "enseñanza", autor: "Élder Robert D. Hales", texto: "Al tomar notas, anoten la instrucción personalizada que el Espíritu les está dando." },
      { tipo: "cuestionario", preguntas: [
          "¿Qué preguntas llevarás a la próxima conferencia?",
          "¿Cómo te preparas espiritualmente para escuchar?",
          "¿Qué mensaje de conferencias pasadas ha cambiado tu vida?"
      ]}
    ]
  },
  {
    id: 23,
    titulo: "Estudiar los mensajes de los siervos del Señor",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/70-teachings-of-church-leaders/702-studying-the-messages?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "El estudio repetido de los mensajes de la conferencia abre las puertas a milagros y mayor protección contra la tentación." },
      { tipo: "enseñanza", autor: "Presidente Russell M. Nelson", fuente: "Liahona, mayo de 2024", texto: "Espero que estudien repetidamente los mensajes de esta conferencia." },
      { tipo: "escrituras", citas: [
          { referencia: "Romanos 10:17", texto: "La fe viene por el oír, y el oír por la palabra de Dios." },
          { referencia: "Ezequiel 3:27", texto: "El que escucha, que escuche." }
      ]},
      { tipo: "enseñanza", autor: "Élder D. Todd Christofferson", texto: "Dios instruye a Sus profetas para que nos hagan saber plenamente las consecuencias de nuestras elecciones." },
      { tipo: "cuestionario", preguntas: [
          "¿De qué manera han bendecido tu vida los mensajes proféticos?",
          "¿Cómo superas la distracción al estudiar los discursos?",
          "¿Qué promesas has descubierto al 'escucharlo a Él'?"
      ]}
    ]
  },
  {
    id: 26,
    titulo: "Éxodo 7-11",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/14-exodus-7-13/141-exodus-7-11?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "Las plagas en Egipto manifestaron el poder de Jehová para que todos reconocieran que Él es el único Dios." },
      { tipo: "enseñanza", autor: "Presidente Russell M. Nelson", fuente: "Liahona, mayo de 2019", texto: "Hagan lo necesario para empezar a tener experiencias con Dios. Pidan ojos para ver Su mano." },
      { tipo: "escrituras", citas: [
          { referencia: "Éxodo 7:5", texto: "Y el egipcio conocerá que yo soy Jehová." },
          { referencia: "Santiago 1:5-6", texto: "Si a alguno le falta sabiduría, pídala a Dios." },
          { referencia: "2 Corintios 12:9", texto: "Mi poder se perfecciona en la debilidad." }
      ]},
      { tipo: "cuestionario", preguntas: [
          "¿Dónde has visto el poder del Señor esta semana?",
          "¿Cómo puedes ser más humilde para reconocer Su influencia?",
          "¿Qué experiencia con Dios estás buscando hoy?"
      ]}
    ]
  },
  {
    id: 27,
    titulo: "Éxodo 12-13, Parte 1",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/14-exodus-7-13/142-exodus-12-13-part-1?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "La Pascua simboliza la liberación de la muerte espiritual y física mediante la sangre del Cordero de Dios." },
      { tipo: "enseñanza", autor: "Élder D. Todd Christofferson", fuente: "Liahona, mayo de 2015", texto: "Jesucristo sufrió y murió para expiar la transgresión y proporcionar la inmortalidad." },
      { tipo: "escrituras", citas: [
          { referencia: "Éxodo 12:13", texto: "Veré la sangre y pasaré de largo, y no habrá en vosotros plaga de mortandad." },
          { referencia: "Juan 1:36", texto: "He aquí el Cordero de Dios." },
          { referencia: "2 Nefi 9:6", texto: "La Expiación nos redime si nos arrepentimos." }
      ]},
      { tipo: "conclusion", contenido: "La gracia expiatoria del Salvador proporciona el perdón y la santificación de nuestra alma." },
      { tipo: "cuestionario", preguntas: [
          "¿Cómo te sientes al saber que el Señor puede librarte de tus errores?",
          "¿Qué significa para ti el sacrificio de Jesucristo?",
          "¿Cómo puedes aplicar las condiciones del arrepentimiento hoy?"
      ]}
    ]
  },
  {
    id: 28,
    titulo: "Éxodo 12-13, Parte 2",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/14-exodus-7-13/143-exodus-12-13-part-2?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "El Señor instituyó ordenanzas como la Santa Cena para ayudarnos a recordar siempre Su bondad y liberación." },
      { tipo: "enseñanza", autor: "Élder Dale G. Renlund", fuente: "Liahona, mayo de 2020", texto: "Nuestro Padre Celestial quiere que recordemos Su bondad por la influencia que dicho recuerdo tiene en nosotros." },
      { tipo: "escrituras", citas: [
          { referencia: "Lucas 22:19", texto: "Haced esto en memoria de mí." },
          { referencia: "DyC 20:77", texto: "Para que siempre puedan recordarle." }
      ]},
      { tipo: "enseñanza", autor: "Hermano Milton Camargo", texto: "Renovar nuestros convenios cada domingo es una oportunidad excelente para volver a centrar nuestra vida." },
      { tipo: "cuestionario", preguntas: [
          "¿Cómo te preparas antes de participar de la Santa Cena?",
          "¿En qué piensas durante el reparto del pan y el agua?",
          "¿Cómo influye en tu semana el recordar la bondad de Dios?"
      ]}
    ]
  },
  {
    id: 29,
    titulo: "Práctica 3 del Dominio de la doctrina",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/14-exodus-7-13/144-doctrinal-mastery-practice-3?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "Memorizar escrituras nos proporciona una fuente constante de inspiración y fortaleza en momentos de necesidad." },
      { tipo: "enseñanza", autor: "Élder Richard G. Scott", fuente: "Liahona, noviembre de 2011", texto: "El memorizar un pasaje es como crear una nueva amistad con alguien que puede ayudarnos." },
      { tipo: "escrituras", citas: [
          { referencia: "Éxodo 20:3-5", texto: "No tendrás dioses ajenos delante de mí." },
          { referencia: "Mateo 22:37", texto: "Amarás al Señor tu Dios con todo tu corazón." },
          { referencia: "2 Timoteo 3:16", texto: "Toda la Escritura es inspirada por Dios." }
      ]},
      { tipo: "cuestionario", preguntas: [
          "¿Qué pasaje de las escrituras es como un amigo para ti?",
          "¿Cómo te ha ayudado memorizar frases clave en momentos de prueba?",
          "¿Qué técnica de memorización te funciona mejor?"
      ]}
    ]
  },
  {
    id: 31,
    titulo: "Éxodo 14",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/15-exodus-14-18/151-exodus-14?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "Ante situaciones que parecen no tener salida, el consejo del Señor es confiar en Su poder de salvación." },
      { tipo: "escrituras", citas: [
          { referencia: "Éxodo 14:13", texto: "No temáis; estad firmes y ved la salvación de Jehová." },
          { referencia: "DyC 6:36", texto: "Mirad hacia mí en todo pensamiento; no dudéis; no temáis." }
      ]},
      { tipo: "enseñanza", autor: "Presidente Russell M. Nelson", fuente: "Liahona, mayo de 2023", texto: "La respuesta siempre se halla en la vida y las enseñanzas de Jesucristo." },
      { tipo: "conclusion", contenido: "No debemos centrarnos tanto en los problemas que dejemos de ver la solución que el Señor nos ofrece." },
      { tipo: "cuestionario", preguntas: [
          "¿Cuándo te has sentido 'atrapado' y cómo te ayudó el Señor?",
          "¿Qué significa para ti 'estar firme' en la fe?",
          "¿Cómo cambias tu enfoque de los problemas hacia el Salvador?"
      ]}
    ]
  },
  {
    id: 32,
    titulo: "Éxodo 15; 17",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/15-exodus-14-18/152-exodus-15-17?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "Dios utiliza milagros físicos, como el agua de la roca, para enseñarnos que Él es la fuente de vida eterna." },
      { tipo: "enseñanza", autor: "Élder David A. Bednar", texto: "Los principios del Evangelio son para nosotros lo que un timón es para un barco." },
      { tipo: "escrituras", citas: [
          { referencia: "Isaías 48:21", texto: "Hizo brotar agua de la roca para ellos." },
          { referencia: "Romanos 8:28", texto: "Dios dispone todas las cosas para el bien de los que lo aman." }
      ]},
      { tipo: "enseñanza", autor: "Élder Ronald A. Rasband", texto: "Sostener a nuestros líderes es un privilegio y una responsabilidad personal." },
      { tipo: "cuestionario", preguntas: [
          "¿Qué 'verdades timón' guían tu vida actualmente?",
          "¿Cómo has visto que el Señor dispone las cosas para tu bien?",
          "¿Qué aprendiste hoy sobre confiar en la Roca de Israel?"
      ]}
    ]
  },
  {
    id: 33,
    titulo: "Éxodo 16",
    url_fuente: "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-manual-2026/15-exodus-14-18/153-exodus-16?lang=spa",
    secciones: [
      { tipo: "contexto", contenido: "El maná diario nos enseña que la nutrición espiritual debe ser una búsqueda constante y cotidiana." },
      { tipo: "enseñanza", autor: "Élder D. Todd Christofferson", texto: "La nutrición espiritual es igualmente necesaria que la física." },
      { tipo: "escrituras", citas: [
          { referencia: "Juan 6:35", texto: "Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre." },
          { referencia: "Mateo 4:4", texto: "No solo de pan vivirá el hombre, sino de toda palabra de Dios." }
      ]},
      { tipo: "enseñanza", autor: "Presidente Russell M. Nelson", texto: "Un testimonio que no es nutrido diariamente puede desmoronarse a una velocidad aterradora." },
      { tipo: "cuestionario", preguntas: [
          "¿Cuál es tu 'maná espiritual' de cada día?",
          "¿Cómo evitas el hambre espiritual en un mundo tan ocupado?",
          "¿Qué hábito diario fortalecerá más tu fe esta semana?"
      ]}
    ]
  }
];