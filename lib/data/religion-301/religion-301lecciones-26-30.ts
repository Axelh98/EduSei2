import type { FlatLesson } from "@/lib/types";

// ══════════════════════════════════════════════════════════════════════════════
// 📖 RELIGIÓN 301 — ANTIGUO TESTAMENTO: LECCIONES 26–30
// Manual del maestro de Instituto 2026
// ══════════════════════════════════════════════════════════════════════════════
// ✅ Estructura basada en el tipo FlatLesson real de la app
// ✅ Secciones: contexto | escrituras | enseñanza | conclusion | cuestionario
// ✅ Escrituras con link directo al versículo en churchofjesuschrist.org
// ✅ Enseñanzas con fuente como string que incluye el link al discurso
// ══════════════════════════════════════════════════════════════════════════════

export const religion301Lecciones26_30: FlatLesson[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // LECCIÓN 26 — 2 Reyes 2–7
  // Eliseo: sucesor de Elías y profeta de milagros
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "r301-l26",
    title: "Lección 26: Eliseo es llamado como profeta y efectúa muchos milagros",
    description: "2 Reyes 2–7. Eliseo sucede a Elías y el Señor obra milagros a través de él, incluida la sanación de Naamán.",
    type: "Religión 301",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/old-testament-institute-teacher-manual-2026/26-2-kings-2-7?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido:
          "Después de la dramática traslación de Elías en un carro de fuego, Eliseo asumió su manto —literalmente— y comenzó uno de los ministerios más prolíficos en milagros del Antiguo Testamento. Si Elías fue el profeta del fuego y del poder espectacular, Eliseo fue el profeta de la compasión cotidiana: sanó aguas, multiplicó aceite para una viuda en deuda, resucitó al hijo de la sunamita, purificó un guiso venenoso y alimentó a cien hombres con veinte panes. El milagro más doctrinalmente rico de su ministerio es la sanación del general sirio Naamán: un hombre poderoso, exitoso y orgulloso que padecía lepra y fue instruido a sumergirse siete veces en el río Jordán. La sencillez de la instrucción lo ofendió —esperaba un ritual impresionante— y casi perdió su sanación por orgullo. Solo cuando sus siervos lo persuadieron a obedecer, fue sanado. Su historia es una de las lecciones más completas sobre cómo el orgullo puede impedir recibir las bendiciones del Señor, y cómo la obediencia sencilla —incluso cuando parece insuficiente— es el camino a la sanación. El siervo de Eliseo también recibió una visión extraordinaria: los ejércitos celestiales que rodeaban la ciudad, invisibles al ojo natural, eran más que los ejércitos enemigos visibles.",
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "2 Reyes 2:9–10, 14–15",
            texto:
              "Y aconteció que cuando habían pasado, Elías dijo a Eliseo: Pide lo que quieras que haga por ti, antes que yo sea quitado de ti. Y dijo Eliseo: Te ruego que una doble porción de tu espíritu sea sobre mí… Y tomó el manto de Elías que se le había caído, e hirió las aguas, y dijo: ¿Dónde está el Señor, el Dios de Elías?… Y cuando los hijos de los profetas que estaban en Jericó vieron lo que había acontecido, dijeron: El espíritu de Elías reposó sobre Eliseo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/2?lang=spa&id=p9-p10,p14-p15#p9",
          },
          {
            referencia: "2 Reyes 5:1–3, 9–14",
            texto:
              "Naamán, general del ejército del rey de Siria, era varón grande delante de su señor… pero era leproso. Y las tropas sirias habían traído cautiva de la tierra de Israel a una muchacha… Y ella dijo a su señora: Si rogase mi señor al profeta que está en Samaria, él lo sanaría de su lepra… Y Naamán… se paró a las puertas de la casa de Eliseo. Entonces Eliseo le envió un mensajero, diciendo: Ve y lávate siete veces en el Jordán… Él entonces se fue enojado… Pero sus siervos se llegaron a él y le hablaron… ¿No lo hicieras? ¿Cuánto más diciéndote: Lávate, y serás limpio? El se zambulló siete veces en el Jordán… y su carne se volvió como la carne de un niño, y quedó limpio.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/5?lang=spa&id=p1-p3,p9-p14#p1",
          },
          {
            referencia: "2 Reyes 6:15–17",
            texto:
              "Y se levantó de mañana y salió el que servía al varón de Dios, y he aquí el ejército que tenía sitiada la ciudad, con gente de a caballo y carros. Entonces su criado le dijo: ¡Ah, señor mío! ¿qué haremos? Él le dijo: No tengas temor, porque más son los que están con nosotros que los que están con ellos. Y oró Eliseo, y dijo: Te ruego, oh Señor, que abras sus ojos para que vea. Y el Señor abrió los ojos del criado, y miró; y he aquí que el monte estaba lleno de gente de a caballo, y de carros de fuego alrededor de Eliseo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/6?lang=spa&id=p15-p17#p15",
          },
        ],
      },
      {
        tipo: "enseñanza",
        autor: "Élder Jeffrey R. Holland",
        fuente: "«¿No somos todos mendigos?», Liahona, noviembre de 2014 — https://www.churchofjesuschrist.org/study/general-conference/2014/10/are-we-not-all-beggars?lang=spa",
        texto:
          "Naamán esperaba algo grande, algo impresionante que correspondiera a su grandeza. El Señor le envió una instrucción sencilla a través de un mensajero. Esa es frecuentemente la manera del Señor: Sus caminos no son nuestros caminos. Las instrucciones del Evangelio a veces parecen demasiado sencillas para el problema que enfrentamos. Pero la sanación viene precisamente al obedecer lo simple con fe, no al esperar lo espectacular.",
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Dieter F. Uchtdorf",
        fuente: "«Más son los que están con nosotros», Liahona, noviembre de 2016 — https://www.churchofjesuschrist.org/study/general-conference/2016/10/three-sisters?lang=spa",
        texto:
          "El siervo de Eliseo solo veía el ejército enemigo hasta que sus ojos fueron abiertos. Cuántas veces vemos solo los obstáculos y las amenazas, cuando los ejércitos celestiales del Señor nos rodean invisiblemente. La fe abre los ojos para ver la realidad completa: que más son los que están con nosotros que los que están contra nosotros.",
      },
      {
        tipo: "conclusion",
        contenido:
          "El ministerio de Eliseo nos presenta dos lecciones complementarias que son igualmente urgentes hoy. La primera es la historia de Naamán: el orgullo puede impedirnos recibir las bendiciones del Señor incluso cuando estamos desesperadamente necesitados de ellas. Cuando el Evangelio nos da instrucciones que parecen demasiado sencillas —orar, estudiar las Escrituras, asistir a los reuniones, guardar el día de reposo— la tentación es buscar algo más impresionante. La sanación viene al zambullirse en el Jordán, no al esperar la instrucción que nos parezca suficientemente grande. La segunda es la visión de los ejércitos celestiales: cuando el miedo nos paraliza ante los obstáculos, la oración que abre los ojos puede revelarnos que el Señor ya ha provisto más ayuda de la que podemos ver.",
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Naamán casi perdió su sanación por orgullo. ¿Hay alguna instrucción del Señor en tu vida que te ha parecido demasiado sencilla o insuficiente para el problema que enfrentas?",
          "Los siervos de Naamán lo persuadieron a obedecer. ¿Quién en tu vida ha jugado ese papel de ayudarte a superar el orgullo y obedecer al Señor?",
          "El siervo de Eliseo solo veía el ejército enemigo. ¿Qué obstáculos o amenazas en tu vida actual te impiden ver los recursos y la ayuda que el Señor ya ha provisto?",
          "Eliseo pidió una doble porción del espíritu de Elías. ¿Qué dones o capacidades espirituales deseas buscar activamente en tu propia vida?",
          "¿De qué manera la promesa 'más son los que están con nosotros' cambia tu perspectiva ante un desafío que enfrentas actualmente?",
        ],
      },
    ],
    questions: [],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LECCIÓN 27 — 2 Reyes 16–25
  // Ezequías, Josías y la caída de Israel y Judá
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "r301-l27",
    title: "Lección 27: Los reyes Ezequías y Josías, y la dispersión de Israel",
    description: "2 Reyes 16–25. Los reinados de Ezequías y Josías, y los acontecimientos que condujeron a la dispersión de Israel.",
    type: "Religión 301",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/old-testament-institute-teacher-manual-2026/27-2-kings-16-25?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido:
          "Los capítulos finales de 2 Reyes narran el declive y la caída de dos reinos: Israel del norte fue llevado cautivo por Asiria en el 722 a.C., y Judá del sur fue finalmente destruido y deportado a Babilonia en el 586 a.C. En ese contexto de apostasía generalizada, destacan con especial brillo dos reyes de Judá: Ezequías y Josías, quienes protagonizaron reformas religiosas profundas en medio de naciones que habían olvidado al Señor por completo. Ezequías enfrentó la invasión asiria de Senaquerib con una fe notable: cuando el enemigo envió cartas blasfemas amenazando a Jerusalén, Ezequías las extendió delante del Señor en el templo y oró. El resultado fue uno de los milagros más dramáticos del Antiguo Testamento. Josías, por su parte, siendo rey desde los ocho años, encontró el libro de la ley olvidado durante décadas en el templo, y su respuesta al oírlo —rasgar sus vestidos de dolor— desencadenó la reforma más completa registrada en los libros de los Reyes. Ambos reyes ilustran que la fidelidad personal de un individuo puede cambiar el curso de toda una nación, y que nunca es demasiado tarde para volver al Señor.",
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "2 Reyes 18:5–6",
            texto:
              "En el Señor Dios de Israel puso su esperanza; ni antes ni después de él hubo otro como él entre todos los reyes de Judá. Porque siguió al Señor, y no se apartó de él, sino que guardó los mandamientos que el Señor prescribió a Moisés.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/18?lang=spa&id=p5-p6#p5",
          },
          {
            referencia: "2 Reyes 19:14–15, 19",
            texto:
              "Y tomó Ezequías las cartas de mano de los mensajeros, y las leyó; y subió a la casa del Señor, y las extendió delante del Señor. Entonces oró Ezequías delante del Señor, diciendo: Oh Señor Dios de Israel, que moras entre los querubines, sólo tú eres Dios de todos los reinos de la tierra… Ahora pues, oh Señor Dios nuestro, sálvanos, te ruego, de su mano, para que sepan todos los reinos de la tierra que sólo tú, oh Señor, eres Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/19?lang=spa&id=p14-p15,p19#p14",
          },
          {
            referencia: "2 Reyes 22:8, 11, 13",
            texto:
              "Entonces Hilcías el sumo sacerdote dijo a Safán el escriba: He hallado el libro de la ley en la casa del Señor… Cuando el rey hubo oído las palabras del libro de la ley, rasgó sus vestidos… id y preguntad al Señor por mí, y por el pueblo, y por todo Judá, acerca de las palabras de este libro que se ha hallado; porque grande es la ira del Señor que se ha encendido contra nosotros, por cuanto nuestros padres no escucharon las palabras de este libro.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/22?lang=spa&id=p8,p11,p13#p8",
          },
          {
            referencia: "2 Reyes 23:25",
            texto:
              "No hubo antes de él rey semejante a él, que se convirtiese al Señor con todo su corazón, con toda su alma y con todas sus fuerzas, conforme a toda la ley de Moisés; ni después de él nació otro igual.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-kgs/23?lang=spa&id=p25#p25",
          },
        ],
      },
      {
        tipo: "enseñanza",
        autor: "Élder D. Todd Christofferson",
        fuente: "«El poder renovador del arrepentimiento», Liahona, mayo de 2016 — https://www.churchofjesuschrist.org/study/general-conference/2016/04/the-power-of-godliness?lang=spa",
        texto:
          "Josías oyó la ley del Señor y rasgó sus vestidos. No esperó a completar un análisis; respondió con el corazón abierto al dolor de reconocer cuánto se había alejado su pueblo. Ese arrepentimiento inmediato y sincero es lo que distinguió su reinado. El arrepentimiento genuino comienza con escuchar la palabra de Dios y permitir que toque el corazón, no solo la mente.",
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "«El gozo del arrepentimiento», Liahona, noviembre de 2020 — https://www.churchofjesuschrist.org/study/general-conference/2020/10/36nelson?lang=spa",
        texto:
          "Ezequías extendió las cartas del enemigo delante del Señor y oró. Esa imagen es perfecta: llevar al Señor lo que más nos amenaza y dejarlo en Sus manos. No intentó resolver el problema con sus propios recursos militares primero. Llevó el problema a Dios primero, y el Señor actuó de manera que ningún ejército humano podría haber logrado.",
      },
      {
        tipo: "conclusion",
        contenido:
          "Ezequías y Josías son dos de los más brillantes ejemplos de liderazgo fiel en el Antiguo Testamento. Ninguno tuvo el privilegio de reinar en tiempos fáciles: ambos gobernaron naciones al borde del colapso espiritual y político. Sin embargo, sus reinados demuestran que la fidelidad de un individuo puede retrasar el juicio, restaurar la adoración y cambiar el curso de la historia. El gesto de Ezequías —extender las cartas amenazantes delante del Señor en el templo— y el gesto de Josías —rasgar sus vestidos al escuchar la ley— son modelos de cómo responder correctamente a la crisis: con humildad, con oración y con disposición para actuar según la palabra de Dios.",
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Ezequías extendió las cartas amenazantes delante del Señor. ¿Qué amenaza o preocupación actual podrías llevar al Señor en oración de esa misma manera, entregándosela completamente?",
          "Josías rasgó sus vestidos al escuchar la ley. ¿Cuándo fue la última vez que la palabra del Señor te llegó con esa intensidad emocional que te hizo querer cambiar algo de inmediato?",
          "Israel del norte cayó porque la gente olvidó completamente al Señor. ¿Qué prácticas en tu vida evitan que ese olvido gradual ocurra también en ti?",
          "Josías fue rey desde los ocho años. ¿Qué te dice eso sobre la capacidad del Señor de usar líderes jóvenes para Su obra?",
          "¿Cuál de los dos reyes —Ezequías o Josías— te parece más cercano a tu propia situación espiritual actual, y por qué?",
        ],
      },
    ],
    questions: [],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LECCIÓN 28 — 2 Crónicas 14–20; 26; 30
  // Asa, Josafat y Ezequías: confiar en el Señor en tiempos de crisis
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "r301-l28",
    title: "Lección 28: Los reyes Asa y Josafat reciben la ayuda del Señor al volverse a Él",
    description: "2 Crónicas 14–20; 26; 30. El rey Asa y Josafat recibieron la ayuda del Señor en sus pruebas al volverse a Él y seguir a Sus profetas.",
    type: "Religión 301",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/old-testament-institute-teacher-manual-2026/28-2-chronicles-14-20-26-30?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido:
          "El libro de 2 Crónicas retoma la historia de los reyes de Judá con un énfasis teológico distinto al de los Reyes: se centra en la respuesta de cada rey a la palabra del Señor y a Sus profetas. Entre todos los reyes que cubre esta lección, destacan Asa y su hijo Josafat como modelos de lo que significa confiar en el Señor cuando el enemigo parece imposible de vencer. Asa enfrentó un ejército etíope de un millón de hombres y clamó al Señor antes de la batalla con una oración de completa dependencia. Josafat, su hijo, fue rodeado por tres ejércitos coaligados y respondió con una proclamación de ayuno nacional y una oración de humildad colectiva; el Señor le dijo que no peleara —que simplemente se colocara y viera la salvación del Señor. Al día siguiente, los ejércitos enemigos se destruyeron entre sí. Estos relatos no son simplemente historia antigua sobre milagros militares; son lecciones eternas sobre el principio que Asa articuló mejor que nadie: nada impide al Señor salvar, con muchos o con pocos.",
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "2 Crónicas 14:11",
            texto:
              "Y Asa clamó al Señor su Dios, y dijo: Señor, no hay ninguna diferencia para ti en dar ayuda al poderoso o al que no tiene fuerzas. Ayúdanos, oh Señor Dios nuestro, porque en ti nos apoyamos, y en tu nombre venimos contra este ejército. Oh Señor, tú eres nuestro Dios; no prevalezca contra ti el hombre.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-chr/14?lang=spa&id=p11#p11",
          },
          {
            referencia: "2 Crónicas 16:9",
            texto:
              "Porque los ojos del Señor contemplan toda la tierra, para mostrar su poder a favor de los que tienen corazón perfecto para con él.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-chr/16?lang=spa&id=p9#p9",
          },
          {
            referencia: "2 Crónicas 20:3–4, 12, 15, 17",
            texto:
              "Entonces él tuvo temor; y Josafat humilló su rostro para consultar al Señor, e hizo pregonar ayuno a todo Judá. Y se reunieron los de Judá para pedir socorro al Señor… No sabemos qué hacer, y a ti volvemos nuestros ojos… No temáis ni os amedrentéis delante de esta multitud tan grande, porque no es vuestra la guerra, sino de Dios… No tendréis que pelear vosotros en esta ocasión; paraos, estad quietos, y ved la salvación del Señor con vosotros.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-chr/20?lang=spa&id=p3-p4,p12,p15,p17#p3",
          },
        ],
      },
      {
        tipo: "enseñanza",
        autor: "Élder Patrick Kearon",
        fuente: "«La intención de Dios es llevarlos a casa», Liahona, mayo de 2024 — https://www.churchofjesuschrist.org/study/general-conference/2024/04/45kearon?lang=spa",
        texto:
          "La oración de Josafat —'No sabemos qué hacer, y a ti volvemos nuestros ojos'— es una de las oraciones más honestas y poderosas de toda la Escritura. A veces no saber qué hacer es exactamente el estado correcto del corazón para recibir la dirección divina. Cuando reconocemos nuestra incapacidad y volvemos los ojos al Señor, Él puede actuar de maneras que nosotros nunca habríamos imaginado.",
      },
      {
        tipo: "enseñanza",
        autor: "Élder David A. Bednar",
        fuente: "«Oraré», Liahona, mayo de 2008 — https://www.churchofjesuschrist.org/study/general-conference/2008/04/pray-always?lang=spa",
        texto:
          "Los ojos del Señor contemplan toda la tierra para mostrar Su poder a favor de quienes tienen corazón perfecto para con Él. Esa promesa no es histórica; es eterna. El Señor busca activamente personas con corazón dispuesto, para mostrarles Su poder en su favor. La clave no es nuestra perfección de desempeño sino la integridad de nuestra orientación hacia Él.",
      },
      {
        tipo: "conclusion",
        contenido:
          "La lección de Asa y Josafat puede resumirse en dos principios que se refuerzan mutuamente. El primero es la oración de Asa: 'Nada impide al Señor salvar, con muchos o con pocos.' El tamaño del problema nunca es el factor determinante cuando el Señor está involucrado. El segundo es la oración de Josafat: 'No sabemos qué hacer, y a ti volvemos nuestros ojos.' La honestidad radical sobre nuestra incapacidad, combinada con la dirección total de la atención hacia el Señor, abre el espacio para que Él actúe. La instrucción divina 'no tendréis que pelear en esta ocasión; paraos, estad quietos, y ved la salvación del Señor' sigue siendo una de las palabras más contraintuitivas y liberadoras de toda la Escritura.",
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Asa dijo: 'Nada impide al Señor salvar, con muchos o con pocos.' ¿Hay algún problema en tu vida actual donde el tamaño del obstáculo te hace dudar de que el Señor pueda ayudarte?",
          "Josafat proclamó un ayuno nacional antes de la batalla. ¿Cuándo fue la última vez que respondiste a una crisis con ayuno y oración en lugar de solo con acción?",
          "La respuesta divina fue 'estad quietos y ved la salvación del Señor'. ¿Te resulta difícil quedarte quieto y confiar en el Señor, o tiendes a actuar antes de esperar Su dirección?",
          "Los ojos del Señor buscan personas con corazón perfecto para con Él. ¿Qué significa para ti tener el corazón 'perfecto' o 'íntegro' con el Señor en tu situación actual?",
          "¿Qué aprendes del contraste entre el Asa fiel del capítulo 14 y el Asa del capítulo 16, que en lugar de confiar en el Señor buscó la ayuda del rey de Siria?",
        ],
      },
    ],
    questions: [],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LECCIÓN 29 — Esdras 1; 3–7; Nehemías 2; 4–6; 8
  // El retorno del exilio: reconstruir el templo y los muros
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "r301-l29",
    title: "Lección 29: Esdras y Nehemías reconstruyen el templo y los muros de Jerusalén",
    description: "Esdras 1; 3–7; Nehemías 2; 4–6; 8. Después de regresar del exilio babilónico, los judíos reconstruyeron el templo y restauraron los muros de Jerusalén con la ayuda del Señor.",
    type: "Religión 301",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/old-testament-institute-teacher-manual-2026/29-2-ezra-1-3-7-nehemiah-2-4-6-8?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido:
          "Después de setenta años de cautiverio en Babilonia, el rey persa Ciro emitió un decreto que permitió a los judíos regresar a su tierra y reconstruir el templo del Señor —un acontecimiento que el profeta Isaías había profetizado con precisión más de ciento cincuenta años antes, mencionando incluso el nombre de Ciro (Isaías 44:28–45:1). El regreso no fue fácil: la reconstrucción del templo enfrentó oposición política intensa y fue detenida por años hasta que los profetas Hageo y Zacarías instaron al pueblo a retomar la obra. Décadas después, el escriba Esdras llegó a enseñar la ley al pueblo, y luego Nehemías, copero del rey de Persia, recibió permiso para reconstruir los muros de Jerusalén. Nehemías es uno de los modelos de liderazgo más completos del Antiguo Testamento: oró antes de hablar al rey, inspeccionó la situación en silencio antes de actuar, delegó sabiamente el trabajo por secciones, respondió con oración y trabajo simultáneo ante la oposición, y nunca abandonó la obra aunque sus enemigos intentaron intimidarlo con múltiples estrategias. La lectura pública de la ley por Esdras —con el pueblo llorando de emoción al escucharla— anticipa el poder que tiene la palabra de Dios para restaurar a un pueblo olvidadizo.",
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Esdras 1:1–3",
            texto:
              "En el primer año de Ciro rey de Persia, para que se cumpliese la palabra del Señor por boca de Jeremías, el Señor despertó el espíritu de Ciro rey de Persia, el cual hizo pregonar de palabra, y también por escrito… el Señor Dios de los cielos me ha dado todos los reinos de la tierra, y me ha mandado que le edifique casa en Jerusalén, que está en Judá. Quien haya entre vosotros de su pueblo, sea Dios con él, y suba a Jerusalén que está en Judá, y edifique la casa del Señor.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/ezra/1?lang=spa&id=p1-p3#p1",
          },
          {
            referencia: "Nehemías 2:4–5",
            texto:
              "Y me dijo el rey: ¿Qué cosa pides? Entonces oré al Dios de los cielos, y dije al rey: Si le place al rey, y tu siervo ha hallado gracia delante de ti, envíame a Judá, a la ciudad de los sepulcros de mis padres, y la reedificaré.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/neh/2?lang=spa&id=p4-p5#p4",
          },
          {
            referencia: "Nehemías 4:6, 9",
            texto:
              "Edificamos, pues, el muro, y todo el muro fue terminado hasta la mitad de su altura, porque el pueblo tuvo ánimo para trabajar… entonces oramos al nuestro Dios, y por causa de ellos pusimos guarda contra ellos de día y de noche.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/neh/4?lang=spa&id=p6,p9#p6",
          },
          {
            referencia: "Nehemías 8:8–10",
            texto:
              "Y leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura. Y Nehemías el gobernador, y el sacerdote y escriba Esdras, y los levitas que hacían entender al pueblo, dijeron a todo el pueblo: Día santo es a Jehová nuestro Dios; no os entristezcáis, ni lloréis… Luego les dijo: Id, comed grosuras, y bebed vino dulce, y enviad porciones a los que no tienen nada preparado; porque día santo es a nuestro Señor. No os entristezcáis, porque el gozo del Señor es vuestra fuerza.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/neh/8?lang=spa&id=p8-p10#p8",
          },
        ],
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "«Seamos mejores», Liahona, mayo de 2019 — https://www.churchofjesuschrist.org/study/general-conference/2019/04/36nelson?lang=spa",
        texto:
          "El gozo del Señor es nuestra fortaleza. Esas palabras de Nehemías al pueblo que lloraba al escuchar la ley son tan vigentes hoy como entonces. El gozo del Evangelio no es una emoción superficial; es la fuerza que nos sostiene cuando reconstruimos lo que ha sido destruido, cuando perseveramos ante la oposición, cuando comenzamos de nuevo después del exilio. El gozo del Señor es fortaleza real.",
      },
      {
        tipo: "enseñanza",
        autor: "Élder Gary E. Stevenson",
        fuente: "«Construid sobre el fundamento de la fe», Liahona, mayo de 2022 — https://www.churchofjesuschrist.org/study/general-conference/2022/04/57stevenson?lang=spa",
        texto:
          "Nehemías respondió a la oposición orando y trabajando al mismo tiempo. Esa combinación —'oramos y pusimos guarda'— es el modelo del discipulado activo. La oración sin acción es presunción; la acción sin oración es arrogancia. Nehemías enseñó que confiar en el Señor y trabajar diligentemente no son opuestos; se complementan.",
      },
      {
        tipo: "conclusion",
        contenido:
          "La historia del retorno del exilio nos enseña que la restauración es posible incluso después de las pérdidas más devastadoras. El templo pudo ser reconstruido, los muros pudo ser restaurados, y la ley pudo ser redescubierta. Cada uno de estos elementos —el templo, los muros, la ley— representa algo que puede perderse en la vida individual: la conexión con el Señor, los límites protectores de los convenios, y el conocimiento de Su palabra. Y en cada caso, la restauración requirió lo mismo: el decreto del Rey (la voluntad del Señor), el liderazgo de personas que oraron antes de actuar, y un pueblo dispuesto a trabajar con ánimo. La frase final de esta historia —'el gozo del Señor es vuestra fuerza'— resume la fuente de energía que hizo posible todo lo demás.",
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Ciro fue movido por el Señor para cumplir una profecía de Isaías. ¿Cómo ves la mano del Señor usando personas y circunstancias aparentemente seculares para cumplir Sus propósitos en tu vida?",
          "Nehemías oró en silencio al rey antes de responder. ¿Cuán frecuentemente buscas la guía del Señor antes de responder en situaciones importantes?",
          "Nehemías respondió a la oposición orando y trabajando al mismo tiempo. ¿Cómo equilibras tú la oración y la acción cuando enfrentas resistencia en algo que crees que el Señor te ha pedido hacer?",
          "El pueblo lloró al escuchar la ley porque reconoció cuánto se había alejado de ella. ¿Cuándo fue la última vez que la palabra del Señor te llegó con esa intensidad de reconocimiento?",
          "¿Qué significa para ti personalmente que 'el gozo del Señor es tu fuerza' en una situación difícil que enfrentas actualmente?",
        ],
      },
    ],
    questions: [],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LECCIÓN 30 — Ester
  // Ester: llamada para un momento así
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "r301-l30",
    title: "Lección 30: Ester se convierte en reina y salva al pueblo judío",
    description: "Ester. Ester se convierte en reina de Persia y, con valentía, salva a los judíos de la destrucción.",
    type: "Religión 301",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/old-testament-institute-teacher-manual-2026/30-esther?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido:
          "El libro de Ester es uno de los más únicos del Antiguo Testamento: nunca menciona el nombre de Dios de manera explícita, y sin embargo Su providencia es visible en cada página. Una joven judía huérfana, criada por su primo Mardoqueo en tierra de exilio, llega a ser reina de Persia en circunstancias que solo pueden describirse como providenciales. Cuando el ministro Amán trama el exterminio de todos los judíos del imperio, Mardoqueo desafía a Ester con las palabras que definen su historia: '¿Y quién sabe si para esta hora has llegado al reino?' La respuesta de Ester —ayunar, pedir intercesión y acercarse al rey con su vida en riesgo— es un modelo de valentía que surge de la preparación, la oración y la disposición para actuar cuando el momento lo demanda. El libro de Ester nos enseña que la providencia de Dios opera a través de personas ordinarias que reconocen que han sido colocadas exactamente donde están para un propósito que trasciende su comodidad personal.",
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Ester 2:10–11, 17",
            texto:
              "Ester no declaró su pueblo ni su parentela, porque Mardoqueo le había mandado que no lo dijese. Y cada día Mardoqueo se paseaba delante del patio de la casa de las mujeres, para saber cómo le iba a Ester, y cómo la trataban… Y el rey amó a Ester más que a todas las otras mujeres, y halló ella gracia y benevolencia delante de él más que todas las demás vírgenes; y puso la corona real en su cabeza, y la hizo reina en lugar de Vasti.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/esth/2?lang=spa&id=p10-p11,p17#p10",
          },
          {
            referencia: "Ester 4:13–16",
            texto:
              "Entonces dijo Mardoqueo que respondiesen a Ester: No pienses que escaparás en la casa del rey más que cualquier otro judío. Porque si callas absolutamente en este tiempo, respiro y liberación vendrá de alguna otra parte para los judíos; mas tú y la casa de tu padre pereceréis. ¿Y quién sabe si para esta hora has llegado al reino? Y Ester dijo que respondiesen a Mardoqueo: Ve y reúne a todos los judíos… y ayunad por mí, y no comáis ni bebáis en tres días, noche y día; yo también con mis doncellas ayunaré igualmente, y así entraré a ver al rey, aunque no sea conforme a la ley; y si perezco, que perezca.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/esth/4?lang=spa&id=p13-p16#p13",
          },
          {
            referencia: "Ester 8:3–4",
            texto:
              "Volvió luego Ester a hablar delante del rey, y se echó a sus pies, llorando y rogándole que hiciese nula la maldad de Amán el agagueo, y su designio que había tramado contra los judíos. Entonces el rey extendió hacia Ester el cetro de oro; y Ester se levantó, y se puso ante el rey.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/esth/8?lang=spa&id=p3-p4#p3",
          },
        ],
      },
      {
        tipo: "enseñanza",
        autor: "Hermana Michelle D. Craig",
        fuente: "«Adviertan el llamado divino», Liahona, noviembre de 2019 — https://www.churchofjesuschrist.org/study/general-conference/2019/10/17craig?lang=spa",
        texto:
          "Ester fue puesta en su posición exactamente cuando era necesaria. El Señor no nos coloca accidentalmente en las familias, comunidades, empleos o épocas que habitamos. Como Ester, estamos donde estamos para un propósito divino. La pregunta no es si somos suficientemente importantes; la pregunta es si estamos dispuestos a actuar cuando el momento llega.",
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "«A las mujeres jóvenes», Liahona, noviembre de 2019 — https://www.churchofjesuschrist.org/study/general-conference/2019/10/36nelson?lang=spa",
        texto:
          "Las mujeres del convenio del Señor han sido guardadas para este tiempo de la historia, tal como Ester fue guardada para el suyo. Su influencia es insustituible. Cuando una mujer del convenio decide usar sus dones y su posición para servir al Señor y a Sus hijos, puede literalmente cambiar el curso de la historia —como lo hizo Ester.",
      },
      {
        tipo: "conclusion",
        contenido:
          "La historia de Ester nos enseña que la providencia de Dios no siempre se manifiesta de manera espectacular, pero siempre está presente. Dios no aparece mencionado en el libro, y sin embargo Su mano es reconocible en cada giro de la narrativa: en la destitución de Vasti, en la elección de Ester, en el insomnio del rey que llevó a la recompensa de Mardoqueo, en cada detalle que alineó el momento de Ester con la necesidad de su pueblo. La pregunta de Mardoqueo —'¿y quién sabe si para esta hora has llegado al reino?'— no es solo para Ester. Es para cada persona que estudia estas escrituras: para este tiempo, para esta familia, para este llamamiento, para esta amistad, para este momento exacto en la historia, el Señor te ha colocado donde estás. La valentía de Ester no surgió de la ausencia de miedo —su 'si perezco, que perezca' revela que el miedo era real— sino de una disposición mayor que el miedo: actuar de todas maneras.",
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Mardoqueo preguntó a Ester: '¿Y quién sabe si para esta hora has llegado al reino?' ¿Para qué hora específica en tu vida crees que el Señor te ha preparado o colocado donde estás?",
          "Ester ayunó tres días antes de actuar. ¿Cómo el ayuno y la oración cambian tu capacidad de actuar con valentía ante decisiones difíciles?",
          "Ester dijo 'si perezco, que perezca'. ¿Hay algo que el Señor te llama a hacer que has evitado por miedo a las consecuencias personales?",
          "Dios no aparece mencionado en el libro de Ester, pero Su providencia es visible en toda la narrativa. ¿Cómo reconoces la mano del Señor en tu propia historia cuando no hay señales espectaculares visibles?",
          "Mardoqueo le dijo a Ester que si callaba, la liberación vendría de otra parte. ¿Qué te dice eso sobre el riesgo de no actuar cuando el Señor te llama a ser Su instrumento en un momento determinado?",
        ],
      },
    ],
    questions: [],
  },

];