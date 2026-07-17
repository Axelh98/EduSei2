/**
 * DOCTRINA Y CONVENIOS - SEMINARIO 2025
 * SECCIONES ENRIQUECIDAS: SEMANAS 1–5
 *
 * Versión final con lecciones y URLs verificadas contra el PDF del calendario.
 * Semanas 1-2: D&C 19 y D&C 20-22 (sin cambios de URL respecto al manual)
 * Semana 3: D&C 23-26 — incluye D&C 25 Parte 2 + lecciones 525 y 552
 * Semana 4: D&C 27-28 (no D&C 29 como tenía el archivo anterior)
 * Semana 5: D&C 29:1-8, 9-29, 36-50 + preparación Conferencia General
 *
 * Fuente: Manual del Maestro de Seminario DC 2025 +
 *         Calendario_DyC_2025_Lecciones_con_Ven_Sigueme.pdf
 */

import type { Lesson } from "@/lib/types"

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANA 1 — 3 al 9 de Marzo
// Bloque: Doctrina y Convenios 19
// ═══════════════════════════════════════════════════════════════════════════════

export const semana1Lecciones: Lesson[] = [

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 31 — D&C 19:1–24 Parte 1
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "31-dc-19-1-24-parte-1",
    title: "Doctrina y Convenios 19:1–24, Parte 1",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/101-doctrine-and-covenants-19-1-24-part-1?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Jesucristo se sometió a la voluntad del Padre Celestial",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Martín Harris enfrentaba una decisión enorme: hipotecar su granja de noventa y siete hectáreas para pagar la impresión del Libro de Mormón. El impresor no comenzaría sin un acuerdo formal. La esposa de Martín y sus vecinos se oponían. La casa, los bienes, la reputación —todo en juego. Desde afuera, parecía una locura.\n\nEn esa situación, el Señor reveló D&C 19. Pero en lugar de solo decirle 'hacelo', el Salvador le mostró primero Su propio ejemplo: Él también enfrentó un momento donde podría haber elegido no hacerlo. En Getsemaní dijo 'no se haga mi voluntad, sino la Tuya' (Lucas 22:42). No fue una rendición pasiva; fue la decisión más activa de toda la historia. Elegir someter la voluntad propia a la del Padre cuando cuesta algo real.\n\nEsta lección propone exactamente eso para los alumnos: ¿qué significa entregar tu voluntad a Dios, no en abstracto, sino en situaciones concretas? Cuando el Señor te pide algo que te cuesta —guardar el día de reposo, ser honesto cuando duele, respetar los estándares cuando tus amigos no lo hacen— el ejemplo del Salvador en D&C 19 muestra que eso no es debilidad. Es el núcleo de la fe."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 19:1–3",
            texto: "Yo soy Alfa y Omega, Cristo el Señor; sí, aun soy Aquel que es el principio y el fin, el Redentor del mundo; yo que lo he subyugado todo, lo que permanece a mi diestra a la diestra del Padre.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=spa&id=p1-p3#p1"
          },
          {
            referencia: "Doctrina y Convenios 19:15–19",
            texto: "Por tanto, os mando que os arrepintáis... Porque he aquí, yo, Dios, he sufrido estas cosas por todos para que no sufran ellos si se arrepienten... Lo cual sufrimiento me causó a mí, aun a Dios, el mayor de todos, temblar de dolor y sangrar de cada poro, y sufrir tanto en el cuerpo como en el espíritu.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=spa&id=p15-p19#p15"
          },
          {
            referencia: "Doctrina y Convenios 19:23",
            texto: "Aprended de mí y escuchad mis palabras; andad en la mansedumbre de mi Espíritu, y tendréis paz en mí.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=spa&id=p23#p23"
          },
          {
            referencia: "Lucas 22:42",
            texto: "Padre, si quieres, pasa de mí esta copa; pero no se haga mi voluntad, sino la tuya.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/22?lang=spa&id=p42#p42"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Elder C. Scott Grow",
        fuente: "\"Y esta es la vida eterna\", Liahona, Mayo de 2017, Pág. 122",
        texto: "Ustedes y yo hacemos la voluntad del Padre al honrar nuestros convenios, guardar los mandamientos y servir a Dios y a nuestros semejantes",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2017/04/and-this-is-life-eternal?lang=spa&id=p29#p29"
      },
      {
        tipo: "conclusion",
        contenido: "El Salvador sometió Su voluntad al Padre incluso cuando le costó lo máximo. Su ejemplo transforma el concepto de obediencia: no es seguir reglas por obligación, sino elegir confiar en Dios cuando cuesta algo real. La promesa de D&C 19:23 sigue vigente: quien aprende del Salvador y camina en la mansedumbre de Su Espíritu tendrá paz, no la ausencia de dificultades, sino la certeza de no estar solo en ellas. Esta semana identifica una cosa concreta que el Señor te pide y toma la decisión de someterla a Su voluntad."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Si fueras el amigo de Martín Harris en 1829, ¿qué le dirías sobre hipotecar su granja? ¿Por qué?",
          "¿Qué significa para vos la frase 'no se haga mi voluntad, sino la Tuya'? ¿En qué situación de tu vida la sentís más difícil?",
          "¿Alguna vez hiciste algo difícil porque sentiste que Dios te lo pedía? ¿Qué pasó después?",
          "¿Qué verdades sobre el carácter del Salvador encontrás en D&C 19:1–3 y 15–19?",
          "¿Qué decisión concreta podés tomar esta semana para someter tu voluntad a la de Dios?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 32 — D&C 19:1–24 Parte 2
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "32-dc-19-1-24-parte-2",
    title: "Doctrina y Convenios 19:1–24, Parte 2",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/102-doctrine-and-covenants-19-1-24-part-2?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "\"Yo, Jesucristo, he padecido estas cosas por todos\"",
    secciones: [
      {
        tipo: "contexto",
        contenido: "¿Cuál de estas afirmaciones sobre el arrepentimiento es verdadera y cuál es un mito? 'El arrepentimiento es principalmente un castigo.' 'El Padre Celestial no puede amarme hasta que me arrepienta.' 'El arrepentimiento es un don de Dios.' Antes de estudiar D&C 19, muchos alumnos tienen respuestas equivocadas sobre estas preguntas. La diferencia entre ver el arrepentimiento como castigo o como don cambia todo: la relación con Dios, la disposición a acercarse al Salvador, la velocidad con que uno se levanta después de caer.\n\nD&C 19:16–19 es el único lugar en toda la Escritura donde el propio Salvador describe Su sufrimiento expiatorio en primera persona. No lo hizo para que nos sintiéramos aplastados por la culpa; lo hizo para que entendiéramos cuánto nos ama. Él sufrió 'por todos' —incluyendo a vos, en tus errores específicos— para que no tengas que sufrir si te arrepentís. El arrepentimiento es la puerta de salida del sufrimiento, no la entrada.\n\nEste pasaje es un Dominio de la Doctrina precisamente porque cambia la forma en que nos vemos ante Dios. No como deudores aterrados, sino como hijos que tienen acceso a la misericordia más grande del universo."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 19:16–19",
            texto: "Porque he aquí, yo, Dios, he sufrido estas cosas por todos, para que no sufran ellos si se arrepienten; mas si no se arrepienten, forzosamente sufrirán aun como yo; lo cual sufrimiento me causó a mí, aun a Dios, el mayor de todos, temblar de dolor y sangrar de cada poro, y sufrir tanto en el cuerpo como en el espíritu, y quise no beber la copa amarga y retroceder; sin embargo, la gloria sea para el Padre, y bebí y terminé mis preparativos para los hijos de los hombres.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=spa&id=p16-p19#p16"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "\"Podemos actuar mejor y ser mejores\", Conferencia General (sesión de sacerdocio), abril de 2019",
        texto: "Demasiadas personas consideran el arrepentimiento como un castigo; algo a evitarse excepto en las circunstancias más graves; pero es Satanás quien genera ese sentimiento de castigo. Él trata de impedir que miremos hacia Jesucristo, que espera con los brazos abiertos, con la esperanza y disposición de sanarnos, perdonarnos, limpiarnos, fortalecernos, purificarnos y santificarnos.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2019/04/36nelson?lang=spa&id=p3,p6#p3"
      },
      {
        tipo: "conclusion",
        contenido: "D&C 19:16–19 es el testimonio más directo que existe sobre la Expiación: el Salvador mismo describe lo que sufrió y por qué. Lo hizo para liberarnos, no para atraparnos en la culpa. Cada vez que alguien te diga que el arrepentimiento es una carga o un castigo, podés mostrarle este pasaje: Cristo sufrió precisamente para que arrepentirse sea el camino de vuelta a casa, no el castigo. Eso transforma la forma en que nos acercamos a Él."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "De los enunciados sobre el arrepentimiento del inicio de la clase (verdades y mitos), ¿cuál te sorprendió más? ¿Por qué?",
          "¿Por qué D&C 19:16–19 es tan significativo como testimonio de la Expiación? ¿Qué lo hace único?",
          "¿Alguna vez evitaste arrepentirte porque parecía demasiado difícil o vergonzoso? ¿Qué te frenó?",
          "¿Cómo cambia tu relación con Dios cuando entendés el arrepentimiento como un don de amor y no como un castigo?",
          "¿Hay algo de lo que necesites arrepentirte esta semana? ¿Cuál sería el primer paso concreto?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 33 — D&C 19:25–41
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "33-dc-19-25-41",
    title: "Doctrina y Convenios 19:25–41",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/103-doctrine-and-covenants-19-25-41?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Ver los sacrificios con una perspectiva eterna",
    secciones: [
      {
        tipo: "contexto",
        contenido: "El dilema de Martín Harris era concreto: una granja de noventa y siete hectáreas, la oposición de su esposa, vecinos escépticos, y la posibilidad real de perderlo todo si el Libro de Mormón no se vendía suficiente. Vista desde una perspectiva temporal, hipotecar la granja era arriesgado hasta la irresponsabilidad.\n\nEn D&C 19:25–41, el Señor no minimizó ese costo. Le dio a Martín una herramienta diferente: una perspectiva eterna. 'Con el Espíritu del Señor posees todas las cosas' (v. 34–35). Lo temporal deja de ser lo más importante cuando ves desde la eternidad. Martín firmó el acuerdo. El Libro de Mormón fue impreso. La granja fue eventualmente devuelta. La obra fue permanente.\n\nEsta lógica aplica a cualquier sacrificio que el Señor te pida hoy: guardar el día de reposo cuando tus amigos salen, ser honesto cuando mentir sería más cómodo, usar el tiempo en servicio cuando preferirías otra cosa. Vista desde lo temporal, parece una pérdida. Vista desde la eternidad, es una inversión. El Documento de base del Dominio de la Doctrina lo resume así: 'Esta vida mortal es solo una pequeña parte de nuestra existencia eterna.'"
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 19:26",
            texto: "Y otra vez te mando que no codicies tus bienes, sino que los impartas libremente para imprimir el Libro de Mormón, el cual contiene la verdad y la palabra de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=spa&id=p26#p26"
          },
          {
            referencia: "Doctrina y Convenios 19:34–35",
            texto: "Y con el Espíritu del Señor posees todas las cosas; no hay fin para tus bienes, pues son míos para dar o para no dar, según mi voluntad.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=spa&id=p34-p35#p34"
          },
          {
            referencia: "Doctrina y Convenios 19:38",
            texto: "Ora siempre, y te daré lo que pides de acuerdo con la justicia.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=spa&id=p38#p38"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Dallin H. Oaks",
        fuente: "\"El testigo: Martin Harris\", Conferencia General, abril de 1999 (Liahona, julio de 1999, pág. 43)",
        texto: "Una de las contribuciones más grandes que Martin Harris hizo a la Iglesia, por la que se lo debe honrar en todo momento, fue la financiación de la publicación del Libro de Mormón. En agosto de 1829 hipotecó su casa y su granja a Egbert B. Grandin para asegurar el pago del contrato de impresión. Siete meses después se completó la primera impresión de cinco mil ejemplares del Libro de Mormón.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/1999/04/the-witness-martin-harris?lang=spa&id=p21#p21"
      },
      {
        tipo: "conclusion",
        contenido: "La perspectiva eterna no elimina el costo de los sacrificios; los coloca en el contexto correcto. Martín Harris perdió temporalmente una granja y ganó participación en una de las obras más importantes de la historia. Cuando el Señor te pida algo difícil, la pregunta no es '¿cuánto me cuesta?' sino '¿cómo se ve esto desde la eternidad?' Esa perspectiva es la que transforma el sacrificio en inversión. Esta semana, identificá un sacrificio que el Señor te está pidiendo y aplícale esa mirada eterna."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Si fueras el amigo de Martín Harris en 1829, ¿qué consejo le darías? ¿Cómo pesarías la granja contra el Libro de Mormón?",
          "¿Qué diferencia hace ver un sacrificio con perspectiva temporal versus con perspectiva eterna? ¿Podés dar un ejemplo concreto?",
          "¿Alguna vez hiciste algo costoso por el evangelio y después viste que valió la pena? Contá brevemente.",
          "¿Qué verdad de D&C 19:34–35 cambia la forma de ver los bienes temporales?",
          "¿Qué sacrificio concreto te está pidiendo el Señor esta semana que todavía no has hecho? ¿Cuál es el primer paso?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 164 — Fortalecer tu cimiento espiritual
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "164-fortalecer-cimiento",
    title: "Fortalecer tu cimiento espiritual",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/521-introduction-to-doctrinal-mastery?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Introducción al Dominio de la Doctrina",
    secciones: [
      {
        tipo: "contexto",
        contenido: "El Templo de Salt Lake fue renovado para reforzar sus cimientos contra terremotos. Desde afuera se veía igual. El cambio era invisible pero esencial. En las épocas tranquilas nadie nota si tu cimiento espiritual es sólido. Cuando llegan las pruebas —una pregunta difícil sobre la historia de la Iglesia, un amigo que desafía tu fe, un momento de duda severa— ahí se revela lo que hay debajo.\n\nEl Dominio de la Doctrina construye ese cimiento de forma sistemática: memorizar pasajes clave, comprender las doctrinas en profundidad, y aprender a aplicarlas y explicarlas en conversaciones reales. No es memorizar por memorizar; es tener los recursos espirituales listos antes de necesitarlos.\n\nEl presidente Nelson advirtió que en los días futuros no será posible sobrevivir espiritualmente sin la guía constante del Espíritu Santo. El Dominio te prepara para recibir esa guía: cuando conocés las Escrituras, el Espíritu puede traerlas a tu memoria exactamente cuando las necesitás —en una conversación, en un momento de duda, en una decisión difícil."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Helamán 5:12",
            texto: "Y ahora, hijos míos, recordad, recordad que en la roca de nuestro Redentor, que es Cristo, el Hijo de Dios, debéis edificar vuestro fundamento; para que cuando el diablo lanzare sus poderosos vientos, sí, sus dardos en el torbellino, sí, cuando toda su granizada y su furiosa tormenta os azoten, no tenga poder sobre vosotros para arrastraros a la sima de miseria y pesar eterno, a causa de la roca sobre la cual estáis edificados.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/5?lang=spa&id=p12#p12"
          },
          {
            referencia: "Doctrina y Convenios 11:21",
            texto: "No procures declarar mi palabra, sino que primero procura obtenerla y luego será soltada tu lengua; entonces, si quieres, tendrás mi Espíritu y mi palabra, sí, el poder de Dios para convencer a los hombres.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/11?lang=spa&id=p21#p21"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "\"El templo y el cimiento espiritual de ustedes\", Liahona, noviembre de 2021, págs. 93-94",
        texto: "El Señor ha declarado que, a pesar de los desafíos sin precedentes de hoy, aquellos que edifican sus cimientos en Jesucristo, y han aprendido a invocar Su poder, no tienen por qué sucumbir a las inquietudes singulares de esta época",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/47nelson?lang=spa&id=p9-p10,p13#p9"
      },
      // ✅ Cita verificada contra el discurso original (combinación de dos frases del mismo discurso).
      {
        tipo: "conclusion",
        contenido: "Un cimiento espiritual fuerte se construye antes de la crisis, no durante. El Dominio de la Doctrina es esa construcción sistemática: pasaje por pasaje, principio por principio. Si edificás tu cimiento en Cristo como enseña Helamán 5:12, cuando lleguen las tormentas no podrán arrastrarte. Esta semana empezá con el primer pasaje del Dominio y tratalo como lo que es: material de construcción para tu alma."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Por qué se invirtió tanto tiempo y dinero en renovar los cimientos del Templo de Salt Lake si desde afuera se veía igual? ¿Qué tiene en común eso con la fe?",
          "¿Qué promesa específica da Helamán 5:12 a los que edifican su cimiento en Cristo?",
          "¿Alguna vez tu fe fue 'probada' por algo difícil? ¿Qué te sostuvo en ese momento?",
          "¿Qué desafíos concretos del mundo actual hacen necesario tener ese cimiento sólido ahora mismo?",
          "¿Qué hábito espiritual concreto vas a comenzar o fortalecer esta semana para construir tu cimiento?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 165 — Buscar revelación personal para mis preguntas
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "165-buscar-revelacion",
    title: "Buscar revelación personal para mis preguntas",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/522-acquiring-spiritual-knowledge-part-1?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Principios para adquirir conocimiento espiritual - Parte 1",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Vivimos bombardeados de información. Redes sociales, podcasts, noticias: todo compite por decirnos qué creer. En ese ruido, ¿cómo sabés qué es verdad? ¿Cómo encontrás respuestas a las preguntas que realmente importan?\n\nEl primer principio para adquirir conocimiento espiritual es ir directamente a la fuente: podés pedirle a Dios. El Padre Celestial prometió revelar la verdad a la mente y al corazón por medio del Espíritu Santo (D&C 8:2). No es una promesa solo para profetas del pasado; es tu derecho y privilegio como hijo o hija de Dios.\n\nPero la revelación no cae del cielo de forma automática. Hay condiciones: humildad, fe genuina, disposición a actuar según lo que Dios responda, y fidelidad a los convenios. El presidente Nelson enseñó que necesitamos aumentar activamente nuestra capacidad de recibir revelación. No esperarla pasivamente, sino cultivarla con esfuerzo intencional."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 8:2–3",
            texto: "Sí, te revelaré cosas que nunca hombre ha conocido; hablaré a tu mente y a tu corazón por el Espíritu Santo, que vendrá sobre ti y que morará en tu corazón. Ahora bien, he aquí, esto es el espíritu de revelación.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/8?lang=spa&id=p2-p3#p2"
          },
          {
            referencia: "Moroni 10:5",
            texto: "Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/10?lang=spa&id=p5#p5"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "\"Revelación para la Iglesia, revelación para nuestras vidas\", Conferencia General, abril de 2018 (Liahona, mayo de 2018, pág. 96)",
        texto: "Mis amados hermanos y hermanas, les suplico que aumenten su capacidad espiritual para recibir revelación. En los días futuros, no será posible sobrevivir espiritualmente sin la influencia guiadora, orientadora, consoladora y constante del Espíritu Santo.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2018/04/revelation-for-the-church-revelation-for-our-lives?lang=spa&id=p36-p38#p36"
      },
      {
        tipo: "conclusion",
        contenido: "Recibir revelación personal es el derecho de cada miembro fiel. Dios quiere comunicarse con vos —a tu mente y a tu corazón— exactamente en tus circunstancias actuales. Para recibir esa comunicación necesitás humildad, fe, obediencia, y disposición de actuar. Esta semana, elegí una pregunta concreta que tengas y llevala a Dios con fe genuina, dispuesto a recibir y a actuar según lo que recibas."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cuáles son tres fuentes de información que compiten por decirte qué creer? ¿Cuál de ellas es la más confiable y por qué?",
          "Según D&C 8:2–3, ¿de qué dos maneras habla el Espíritu Santo? ¿Qué diferencia hace eso en cómo reconocés una revelación?",
          "¿Alguna vez sentiste que recibiste una respuesta de Dios a algo concreto? ¿Cómo llegó esa respuesta?",
          "¿Qué condiciones necesitás cultivar en tu vida para recibir más revelación personal?",
          "¿Qué pregunta concreta llevarás a Dios esta semana? ¿Cuándo y cómo lo harás?"
        ]
      }
    ],
    questions: []
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANA 2 — 10 al 16 de Marzo
// Bloque: Doctrina y Convenios 20–22
// ═══════════════════════════════════════════════════════════════════════════════

export const semana2Lecciones: Lesson[] = [

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 35 — D&C 20:1–36
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "35-dc-20-1-36",
    title: "Doctrina y Convenios 20:1–36",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/111-doctrine-and-covenants-20-1-36?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "La organización de la Iglesia de Jesucristo",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Un amigo te pregunta: '¿Para qué necesitás ir a la iglesia? ¿No podés tener una relación con Dios sin organismos ni rituales?' Es una pregunta honesta que mucha gente hace hoy.\n\nEl 6 de abril de 1830, once días después de publicarse el Libro de Mormón, La Iglesia de Jesucristo de los Santos de los Últimos Días fue organizada en la casa de Peter y Mary Whitmer en Fayette, Nueva York. Ese día el Señor reveló D&C 20, conocida como los 'Artículos y Convenios de la Iglesia'. Esta revelación no fue obra de hombres; fue la constitución divina de la Iglesia restaurada.\n\nLos versículos 1–36 establecen verdades fundamentales: la naturaleza de Dios, la realidad de la Caída, la necesidad de la Expiación, y el papel del Espíritu Santo. No son reglas inventadas por José Smith; son doctrinas reveladas el mismo día que se organizó la Iglesia. Estudiar estos versículos te da las palabras para responder a la pregunta de tu amigo con convicción real y con fundamento doctrinal."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 20:1–4",
            texto: "El alzamiento de la Iglesia de Cristo en estos últimos días, siendo el año mil ochocientos treinta, después del nacimiento de nuestro Señor y Salvador Jesucristo, en el sexto día de abril...",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/20?lang=spa&id=p1-p4#p1"
          },
          {
            referencia: "Doctrina y Convenios 20:17–19",
            texto: "Por cuanto él mismo es Dios y existe desde toda la eternidad hasta toda la eternidad: el Gran Yo Soy, que todo lo abarca, que todo lo sabe; y en quien habita todo el poder, toda la gloria y toda la misericordia; lleno de compasión, justicia y verdad.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/20?lang=spa&id=p17-p19#p17"
          },
          {
            referencia: "Doctrina y Convenios 20:25–27",
            texto: "Que por el motivo de que la transgresión vino sobre el hombre; por tanto, Cristo murió por todos, para que los hombres que crean en su nombre puedan ser rescatados mediante su sangre.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/20?lang=spa&id=p25-p27#p25"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Dallin H. Oaks",
        fuente: "\"La necesidad de una Iglesia\", Conferencia General, octubre de 2021",
        texto: "A pesar de las buenas obras que se pueden realizar sin una iglesia, la plenitud de la doctrina y sus ordenanzas salvadoras y exaltadoras están disponibles únicamente en la Iglesia Restaurada.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/18oaks?lang=spa"
      },
      {
        tipo: "conclusion",
        contenido: "D&C 20:1–36 establece que la Iglesia fue fundada por revelación divina, no por iniciativa humana. Sus doctrinas centrales son la base sobre la que todo lo demás descansa. La próxima vez que alguien te pregunte para qué sirve pertenecer a una iglesia, tenés la respuesta aquí: la Iglesia es la organización que el Señor estableció para administrar Su evangelio, conferir Sus ordenanzas, y reunir a Su pueblo. No es opcional en el plan de salvación; es parte esencial de él."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Si un amigo te preguntara por qué necesitás pertenecer a una iglesia organizada para tener una relación con Dios, ¿qué le dirías?",
          "¿Qué verdades sobre Dios identificás en D&C 20:17–19? ¿Cuál te resulta más significativa?",
          "¿Alguna vez dudaste de la necesidad de la Iglesia en tu vida? ¿Qué te ayudó en ese momento?",
          "¿Por qué fue importante que el Señor revelara estas doctrinas el mismo día que organizó la Iglesia?",
          "¿Qué aspecto de la Iglesia valorás más ahora mismo? ¿Cómo podés participar más activamente en él esta semana?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 36 — D&C 20:37, 68–79
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "36-dc-20-37-68-79",
    title: "Doctrina y Convenios 20:37, 68–79",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/112-doctrine-and-covenants-20-37?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "El bautismo y la Santa Cena: cumplir las expectativas del Señor",
    secciones: [
      {
        tipo: "contexto",
        contenido: "¿Cuándo fue la última vez que escuchaste las palabras de la oración de la Santa Cena con atención real? ¿Sabés de memoria qué prometés cada semana al tomarla?\n\nEn D&C 20, el Señor no solo organizó la Iglesia; definió con precisión las condiciones del bautismo y dictó las palabras exactas de las oraciones de la Santa Cena. Esas oraciones no son fórmulas ceremoniales vacías: son convenios concretos que cada miembro renueva cada domingo.\n\nEl versículo 37 establece lo que se requiere para ser bautizado: humildad, arrepentimiento, corazón quebrantado, testimonio ante la Iglesia, y voluntad de servir hasta el fin. Las oraciones de los versículos 77 y 79 repiten exactamente esos mismos compromisos. El diseño es deliberado: el bautismo no se repite, pero los convenios del bautismo sí —cada semana, en la Santa Cena. Cuando un alumno entiende esto, el servicio sacramental deja de ser rutina y se convierte en el momento espiritual más importante de la semana."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 20:37",
            texto: "Y nuevamente, por la gracia del Señor se bautizará: y esto a todos los que se humillen ante Dios y deseen ser bautizados, y que vengan con corazones quebrantados y espíritus contrites, y que ante la Iglesia den testimonio de que verdaderamente se han arrepentido de todos sus pecados, y están dispuestos a tomar sobre sí el nombre de Jesucristo, habiendo resuelto servirle hasta el fin.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/20?lang=spa&id=p37#p37"
          },
          {
            referencia: "Doctrina y Convenios 20:77",
            texto: "Oh Dios, Padre Eterno, te pedimos en el nombre de tu Hijo, Jesucristo, que bendigas y santifiques este pan para las almas de todos los que participen de él; para que lo coman en recuerdo del cuerpo de tu Hijo, y sean testigos ante ti, oh Dios, Padre Eterno, que están dispuestos a tomar sobre sí el nombre de tu Hijo, y que siempre se acuerden de él, y guarden sus mandamientos que les ha dado.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/20?lang=spa&id=p77#p77"
          },
          {
            referencia: "Doctrina y Convenios 20:79",
            texto: "Oh Dios, Padre Eterno, te pedimos en el nombre de tu Hijo Jesucristo, que bendigas y santifiques esta agua para las almas de todos los que beban de ella; para que lo hagan en recuerdo de la sangre de tu Hijo, la cual fue derramada por ellos; para que sean testigos ante ti, oh Dios, Padre Eterno, que siempre se acuerden de él, a fin de que puedan tener su Espíritu consigo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/20?lang=spa&id=p79#p79"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Elder D. Todd Christofferson",
        fuente: "Cuando te hayas convertido — Conferencia General, abril de 2004",
        texto: "Al buscar la bendición de la conversión, puedes brindar al Señor la ofrenda de tu corazón quebrantado o arrepentido y tu espíritu contrito u obediente. En realidad, es la ofrenda de ti mismo, de lo que eres y de lo que estás llegando a ser",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2004/04/when-thou-art-converted?lang=spa"
      },
      {
        tipo: "conclusion",
        contenido: "Las oraciones de la Santa Cena contienen los convenios exactos del bautismo. Cada domingo, la Santa Cena da la oportunidad de renovar esa relación con Cristo y recibir la promesa de Su Espíritu. Cuando participamos conscientemente —no de forma mecánica— esa renovación es real. Este domingo, escuchá las palabras de la oración con atención y decidí si estás cumpliendo lo que te comprometiste a hacer."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Alguna vez escuchaste las palabras de la oración de la Santa Cena con atención real? ¿Qué notaste al releerlas hoy?",
          "¿Cuáles son los tres compromisos que hacemos al participar de la Santa Cena, según D&C 20:77 y 79?",
          "¿Qué diferencia habría en tu experiencia del servicio sacramental si entraras con la intención consciente de renovar tus convenios?",
          "¿Cómo podés prepararte mejor durante la semana para participar de la Santa Cena de forma más significativa?",
          "Elegí uno de los tres compromisos de la Santa Cena y decidí cómo lo vivirás de forma más concreta esta semana."
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 37 — D&C 21
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "37-dc-21",
    title: "Doctrina y Convenios 21",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/113-doctrine-and-covenants-21?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Recibir las palabras del profeta",
    secciones: [
      {
        tipo: "contexto",
        contenido: "El 6 de abril de 1830, el mismo día que se organizó la Iglesia, el Señor reveló D&C 21. José Smith tenía 24 años, sin educación formal. Era razonable que algunos dudaran de su autoridad. El Señor no ignoró esa tensión; la abordó directamente.\n\nLa instrucción del Señor fue clara y exigente: recibir las palabras del profeta 'como si las recibieras de mi boca, en toda paciencia y fe' (v. 5). Esta equivalencia —las palabras del profeta = las palabras del Señor— no requiere que el profeta sea perfecto. Requiere que haya sido llamado por Dios y guiado por el Espíritu. Esa distinción importa: no seguimos al profeta por su carácter personal, sino por la autoridad que le fue conferida.\n\nEste principio sigue siendo desafiante hoy. El profeta puede pedir cosas que no entendamos completamente o que vayan contra la corriente cultural. La promesa de D&C 21 es bidireccional: si seguimos las palabras del profeta con paciencia y fe, el Señor apartará los obstáculos de nuestro camino. La obediencia informada y voluntaria al profeta es una de las formas más concretas de demostrar fe en el Señor."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 21:4–6",
            texto: "Por tanto, se le dará mucha atención a todas sus palabras y mandamientos que os dé, procediendo de él, así como los recibís de mi boca, en toda paciencia y fe; porque así lo hará el Señor tu Dios, para que el oscurecimiento y la confusión sean apartados de delante de ti.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/21?lang=spa&id=p4-p6#p4"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Ezra Taft Benson",
        fuente: "\"El profeta de Dios\", Liahona, Mayo de 2018, pág. 26",
        texto: "No se sorprendan si en ocasiones sus perspectivas personales no están inicialmente en armonía total con las enseñanzas del profeta del Señor. Estos son momentos de aprendizaje, de humildad, en los que nos arrodillamos en oración. Caminamos hacia delante con fe, sabiendo que con el tiempo recibiremos más claridad espiritual de nuestro Padre Celestial",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2018/04/the-prophet-of-god?lang=spa"
      },
      {
        tipo: "conclusion",
        contenido: "Seguir al profeta no es seguir a un hombre; es seguir al Señor que habla a través de ese hombre. D&C 21:4–6 hace la equivalencia explícita. Cuando el consejo del profeta es difícil, la clave está en las palabras 'en toda paciencia y fe'. Esta semana, identificá un consejo reciente del profeta que todavía no estás aplicando del todo y da un paso concreto hacia eso."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué te parece más desafiante de recibir las palabras del profeta 'como si vinieran del propio Señor'?",
          "¿Qué promesa específica da D&C 21:4–6 a quienes siguen al profeta con paciencia y fe?",
          "¿Alguna vez seguiste un consejo del profeta aunque no lo entendieras completamente? ¿Qué pasó?",
          "¿En qué se diferencia seguir al profeta por costumbre de seguirlo con fe genuina? ¿Cómo se ve esa diferencia en la práctica?",
          "¿Qué consejo del profeta actual necesitas aplicar con más diligencia esta semana? ¿Cuál es el primer paso?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 166 — Examinar los conceptos con una perspectiva eterna
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "166-examinar-perspectiva",
    title: "Examinar los conceptos con una perspectiva eterna",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/523-acquiring-spiritual-knowledge-part-2?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Principios para adquirir conocimiento espiritual - Parte 2",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Cuando ocurre algo difícil —una enfermedad, una injusticia, una pérdida— la pregunta natural es '¿por qué a mí?' Vista desde una perspectiva temporal y limitada, la vida puede parecer arbitraria e injusta. Vista desde una perspectiva eterna, todo cambia.\n\nEl segundo principio para adquirir conocimiento espiritual es analizar las preguntas del evangelio en el contexto del Plan de Salvación. Dios es tu Padre. Él te conoce perfectamente. Esta vida mortal es solo una pequeña parte de tu existencia eterna. Cuando D&C 122:7–8 le dice a José Smith en medio de sus sufrimientos extremos que 'todas estas cosas te darán experiencia y serán para tu bien', no es un cliché: es una perspectiva eterna aplicada a una situación concreta.\n\nLa perspectiva eterna no hace que las preguntas difíciles desaparezcan de inmediato. Pero las coloca en el contexto correcto. Y en ese contexto, es posible encontrar paz donde antes solo había confusión."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 122:7–8",
            texto: "Y si se abrieran los cielos contra ti, y los que estuvieran en los infiernos se volvieran contra ti, y todos los elementos se conjugaran para barrer tu existencia... sabe tú, hijo mío, que todas estas cosas te darán experiencia, y serán para tu bien. El Hijo del Hombre ha descendido abajo de todo esto. ¿Eres tú mayor que él?",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/122?lang=spa&id=p7-p8#p7"
          },
          {
            referencia: "2 Nefi 2:11",
            texto: "Porque es indispensable que haya oposición en todas las cosas. Si no fuera así, oh mi primogénito en el desierto, no podría haber rectitud ni maldad, ni santidad ni miseria, ni bien ni mal.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=spa&id=p11#p11"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Elder Dieter F. Uchtdorf",
        fuente: "\"El reflejo en el agua\" — Deovcional del sistema Educativo, 1 de noviembre de 2009",
        texto: "Mis queridos jóvenes amigos, somos personas que hacemos preguntas, porque sabemos que el preguntar conduce a la verdad. Fue así como comenzó la Iglesia, por un joven que tenía preguntas. De hecho, no estoy seguro de cómo se puede descubrir la verdad si no se hacen preguntas. La indagación es la cuna del testimonio […]. El hacer preguntas no es señal de debilidad; es el acto precursor del crecimiento.",
      },

      {
        tipo: "conclusion",
        contenido: "Examinar las preguntas difíciles con perspectiva eterna no las elimina instantáneamente, pero las transforma. Cuando recordás que sos hijo o hija de un Padre que te conoce perfectamente, que esta vida es parte de un plan más grande, y que el Salvador ya descendió más abajo que cualquier cosa que enfrentarás, podés vivir con fe en lugar de con miedo. Esta semana, tomá una situación difícil de tu vida y aplícale deliberadamente la perspectiva del Plan de Salvación."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cuál es la diferencia entre ver una situación difícil con perspectiva temporal y verla con perspectiva eterna? Dame un ejemplo concreto de tu vida.",
          "¿Qué promesa le hace el Señor a José Smith en D&C 122:7–8 sobre sus sufrimientos?",
          "¿Hay algo en tu vida ahora mismo que te parece injusto o confuso? ¿Cómo lo verías en el contexto del Plan de Salvación?",
          "¿Qué verdades del Plan de Salvación te dan más esperanza cuando enfrentás situaciones difíciles?",
          "¿Cómo podés recordarte mantener una perspectiva eterna cuando el día a día te absorbe?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 167 — Buscar entendimiento mediante fuentes divinamente señaladas
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "167-fuentes-divinas",
    title: "Buscar un entendimiento mediante fuentes divinamente señaladas",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/524-acquiring-spiritual-knowledge-part-3?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Principios para adquirir conocimiento espiritual - Parte 3",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Imaginá que tenés una pregunta difícil sobre la historia de la Iglesia o una doctrina que no entendés bien. ¿Dónde la buscás primero? ¿Google? ¿Reddit? ¿Un video de YouTube crítico?\n\nNo beberías agua de una fuente contaminada aunque tuvieras sed. El mismo principio aplica a la verdad espiritual. El tercer principio para adquirir conocimiento espiritual es buscar comprensión a través de las fuentes que el Padre Celestial mismo señaló: las Escrituras, las palabras de los profetas en la Conferencia General, la Biblioteca del Evangelio, los Temas del Evangelio, Para la Fortaleza de la Juventud, líderes de la Iglesia de confianza, padres y familiares fieles, y sobre todo el Espíritu Santo mediante la oración.\n\nEstas fuentes no son arbitrarias: son el amor de Dios traducido en medios concretos para guiarte. El presidente Nelson enseñó que muy pocas personas en nuestra época saben adónde ir en busca de la verdad. Vos sí lo sabés. Usalas."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 88:118",
            texto: "Y como no todos tienen fe, buscad con diligencia y enseñaos mutuamente palabras de sabiduría; sí, buscad conocimiento de los mejores libros; buscad la sabiduría en el estudio y también con la fe.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88?lang=spa&id=p118#p118"
          },
          {
            referencia: "2 Nefi 28:30",
            texto: "Porque he aquí, así dice el Señor Dios: Daré a los hijos de los hombres línea por línea, precepto por precepto, un poco aquí y un poco allí; y benditos son aquellos que escuchan mis preceptos y prestan atención a mis consejos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/28?lang=spa&id=p30#p30"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Elder Neil L. Andersen",
        fuente: "\"El ojo de la fe\", Liahona, mayo de 2019, pág. 35)",
        texto: "Contemplen ahora esta obra artística de Michael Murphy. Desde esta perspectiva, difícilmente creerán que se trate de una representación artística del ojo humano. Sin embargo, si observan los puntos desde una perspectiva diferente, apreciarán la belleza de la creación del artista. De igual modo, nosotros vemos las verdades espirituales de Dios desde la perspectiva del ojo de la fe",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2019/04/25andersen?lang=spa&id=p14-p15#p14"
      },
      {
        tipo: "conclusion",
        contenido: "Las fuentes que usás para buscar verdad espiritual determinan qué tan cerca de Dios llegás. D&C 88:118 te dice buscarlas con diligencia 'en el estudio y también con la fe'. Esta semana, cuando tengas una pregunta espiritual, antes de googlearla, intentá primero con las fuentes que el Señor señaló: la Escritura, los Temas del Evangelio, la oración. Verás la diferencia."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿A dónde vas normalmente cuando tenés una pregunta sobre el evangelio o la Iglesia? ¿Esas fuentes son confiables?",
          "¿Cuáles son al menos cinco fuentes divinamente señaladas para buscar verdad espiritual?",
          "¿Alguna vez encontraste información confusa o perturbadora sobre la Iglesia en internet? ¿Cómo lo manejaste?",
          "¿Cómo demuestran las fuentes divinamente señaladas el amor que el Padre Celestial tiene por vos?",
          "¿Cuál de las fuentes divinamente señaladas usás menos? ¿Cómo podrías usarla más esta semana?"
        ]
      }
    ],
    questions: []
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANA 3 — 17 al 23 de Marzo
// Bloque: Doctrina y Convenios 23–26
// ═══════════════════════════════════════════════════════════════════════════════

export const semana3Lecciones: Lesson[] = [

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 38 — D&C 23–24
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "38-dc-23-24",
    title: "Doctrina y Convenios 23–24",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/121-doctrine-and-covenants-23-24?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "\"Te hablo a ti\" — El Padre Celestial y Jesucristo te conocen",
    secciones: [
      {
        tipo: "contexto",
        contenido: "¿Quién te conoce mejor? Puede ser un padre, un amigo cercano, un maestro que te vio crecer. Pensá en lo que esa persona sabe de vos. Ahora preguntate: ¿qué no sabe?\n\nDespués de que la Iglesia se organizó en abril de 1830, varios miembros querían saber la voluntad de Dios para sus vidas personales. José Smith inquirió al Señor y recibió revelaciones individuales para Oliver Cowdery, Hyrum Smith, Samuel Smith, Hyrum Smith padre y José Smith padre. Cada revelación fue hecha a medida: reconocía las fortalezas específicas de cada persona, sus debilidades particulares, y sus responsabilidades únicas. En D&C 24, el Señor habló directamente a José sobre cómo manejar la persecución y en quién confiar para las necesidades temporales.\n\nEl principio doctrinal de estas lecciones es poderoso y personal: el Padre Celestial y Jesucristo te conocen a vos. No como miembro genérico; como persona específica con tu historia, tus luchas y tu potencial. Si buscás Su guía con fe genuina, recibirás respuestas a medida —no genéricas— para tu situación."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 23:1",
            texto: "He aquí, hablo a ti, Oliver, y también a ti, Hyrum, para que empecéis a laborar en el viñado desde este momento, incluso ahora; a causa de la necesidad que existe, y porque el mundo está lleno de engaño.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/23?lang=spa&id=p1#p1"
          },
          {
            referencia: "Doctrina y Convenios 24:7–8",
            texto: "Sean, pues, tus días dedicados a escribir, y a ministrar a la Iglesia; y no hagas otra cosa que lo que te aconseje en tus días. Ten paciencia en tus aflicciones, pues no siempre tendrás que sufrir.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/24?lang=spa&id=p7-p8#p7"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Cristina B. Franco",
        fuente: "El Padre Celestial te conoce, Liahona, Junio de 2018",
        texto: "El Padre Celestial también te conoce a ti. Él sabe dónde estás y quién eres y lo que necesitas. Él escucha y contesta tus oraciones. Por muy solo que te sientas, Él siempre está ahí. ¡Nunca estás solo! Siempre puedes volverte a Él",
        link: "https://www.churchofjesuschrist.org/study/liahona/2018/06/children/heavenly-father-knows-you?lang=spa"
      },
      {
        tipo: "conclusion",
        contenido: "El Señor no habló en D&C 23–24 a la Iglesia en general; habló a personas concretas por su nombre. Ese es Su estilo: personal, específico, adaptado a cada situación. La promesa de 'ten paciencia en tus aflicciones, pues no siempre tendrás que sufrir' no fue para toda la humanidad en abstracto; fue para José Smith en su situación concreta. Y el Señor tiene el mismo tipo de instrucción personalizada para vos. Buscá Su guía con fe y especificidad."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Quién te conoce mejor en tu vida ahora mismo? ¿Qué sabe de vos que pocos saben?",
          "¿Qué te enseña el hecho de que el Señor diera instrucciones individualizadas a cada persona en D&C 23?",
          "¿Alguna vez sentiste que el Señor te conocía específicamente a vos, no solo como miembro genérico? Contá brevemente.",
          "¿Qué consejo de D&C 24 sentís que está más directamente dirigido a tu situación actual?",
          "¿Cuándo fue la última vez que buscaste la guía del Señor para algo específico de tu vida? ¿Lo harás esta semana?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 39 — D&C 25 Parte 1
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "39-dc-25-parte-1",
    title: "Doctrina y Convenios 25, Parte 1",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/122-doctrine-and-covenants-25-part-1?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Emma Smith, mi hija — Cómo llegar a ser como el Salvador",
    secciones: [
      {
        tipo: "contexto",
        contenido: "D&C 25 es la única revelación en toda la sección canónica dirigida específicamente a una mujer: Emma Smith. El Señor no la llama por su relación con el profeta; la llama 'dama elegida' y le habla directamente de su misión divina.\n\nEsta lección tiene un enfoque específico en el manual: los consejos del Salvador a Emma no fueron solo una lista de tareas. Fueron una guía de cómo llegar a ser más como Él. El Señor le pidió que consolara a su esposo, que estudiara las Escrituras, que exhortara a la Iglesia, y que recopilara himnos. Cada una de esas asignaciones era una forma de ministrar a otros, de servir, de dedicarse a lo que importa eternamente.\n\nD&C 25 también demuestra que las mujeres tienen llamados divinos específicos con importancia igual a cualquier otro llamado en la Iglesia. El llamado de Emma de recopilar los himnos fue cumplido en 1835. Su contribución sigue presente en cada sacramental de hoy. El v. 16 amplía el mensaje: 'esta es mi voz para todos', no solo para Emma."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 25:3–5",
            texto: "He aquí, tus pecados te son perdonados, y eres una dama elegida, a quien he llamado. Mucho comfort has recibido de mi mano. Y no temas, pues tu marido te comunicará las cosas del reino.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/25?lang=spa&id=p3-p5#p3"
          },
          {
            referencia: "Doctrina y Convenios 25:11–12",
            texto: "Y también, en la Iglesia se harán himnos conforme a las que te sean dadas; pues mi alma se deleita en el canto del corazón; sí, el canto de los justos es una oración para mí, y les será recompensado con una bendición.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/25?lang=spa&id=p11-p12#p11"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "D&C 25 demuestra que el Señor tiene llamados divinos específicos para las mujeres, de igual importancia que cualquier otro llamado. Los consejos que le dio a Emma —consolar, estudiar, exhortar, crear— son también formas de llegar a ser más como el Salvador. El v. 16 lo extiende a todos: estas instrucciones son la voz del Señor para cada uno de nosotros. ¿Cuál de estas formas de ministerio podés practicar más activamente esta semana?"
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué te sorprende o impresiona del hecho de que esta revelación esté dirigida directamente a Emma Smith?",
          "¿Cuáles son las asignaciones específicas que el Señor le dio a Emma en D&C 25? ¿Cuál de ellas crees que fue más significativa para ella?",
          "¿Alguna vez los himnos te ayudaron en un momento difícil o de duda? ¿Qué pasó?",
          "Si el v. 16 dice que esta revelación es 'la voz del Señor para todos', ¿cuál de los consejos a Emma aplica más directamente a tu vida ahora?",
          "¿Cuál de las formas de ministerio que el Señor le pidió a Emma podrías practicar más activamente esta semana?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 39b — D&C 25 Parte 2
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "39b-dc-25-parte-2",
    title: "Doctrina y Convenios 25, Parte 2",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/123-doctrine-and-covenants-25-part-2?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Buscar las cosas de un mundo mejor",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Imaginá una caja que representa tu vida. Traés objetos que representan tus intereses: una pelota de fútbol, el cuaderno de la escuela, el celular, las Escrituras, la familia. Hay más objetos que espacio. ¿Qué elegís poner adentro? ¿Qué dejás afuera?\n\nEsa imagen es el núcleo de D&C 25 Parte 2. El Señor le dijo a Emma: 'procura las cosas de un mundo mejor' (v. 10). No le dijo que eliminara todo lo temporal; le pidió que ordenara bien sus prioridades. Lo que el mundo ofrece no es malo en sí; el problema es cuando desplaza a lo eterno.\n\nEstá revelación aplica a cualquier adolescente que tiene más demandas que tiempo y energía: escuela, amistades, redes sociales, familia, iglesia, deportes. Todos compiten. El Señor no pide que abandones tus intereses; pide que no 'codicies' lo temporal hasta el punto de dejar afuera lo que realmente importa. Matthew 6:19–21 y 2 Nefi 9:51 dicen exactamente lo mismo que el Señor le dijo a Emma."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 25:10",
            texto: "Y deja a un lado las cosas de este mundo y busca las cosas de un mundo mejor.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/25?lang=spa&id=p10#p10"
          },
          {
            referencia: "Doctrina y Convenios 25:15",
            texto: "Ten paciencia hasta que vengas a mí, y obtendrás una corona de rectitud. Y el bien que hagas en mi nombre será contado para ti y para tu posteridad después de ti.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/25?lang=spa&id=p15#p15"
          },
          {
            referencia: "Mateo 6:19–21",
            texto: "No os hagáis tesoros en la tierra, donde la polilla y el orín corrompen, y donde ladrones minan y hurtan; sino haceos tesoros en el cielo, donde ni la polilla ni el orín corrompen, y donde ladrones no minan ni hurtan. Porque donde esté vuestro tesoro, allí estará también vuestro corazón.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/6?lang=spa&id=p19-p21#p19"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "El Señor invita a Emma —y a todos— a dejar de lado las cosas de este mundo y buscar las de un mundo mejor. Eso no significa renunciar a todo lo temporal; significa no aferrarse a lo temporal al punto de perder lo eterno. La promesa de D&C 25:15 es hermosa: el bien que hagamos será contado para nosotros y para nuestra posteridad. Esta semana, revisá tus prioridades reales. ¿Hay algo que necesitás dejar a un lado para dar más espacio a lo que realmente importa?"
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Si tu vida fuera esa caja y tuvieras que elegir qué poner adentro, ¿qué dejarías afuera? ¿Eso refleja tus prioridades reales?",
          "¿Qué crees que significa 'dejar a un lado las cosas de este mundo'? ¿Es posible sin volverse extremista?",
          "¿Hay algo en tu vida ahora mismo que está ocupando un lugar que debería tener otra cosa más importante?",
          "¿Cómo se conecta el consejo del Señor a Emma en D&C 25:10 con lo que Jesús enseña en Mateo 6:19–21?",
          "¿Qué cambio concreto en tus prioridades podrías hacer esta semana para buscar más 'las cosas de un mundo mejor'?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 166b — Actuar con fe para encontrar respuestas
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "166-actuar-fe-encontrar-respuestas",
    title: "Actuar con fe para encontrar respuestas",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/525-acquiring-spiritual-knowledge-part-4?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Principios para adquirir conocimiento espiritual - Parte 4",
    secciones: [
      {
        tipo: "contexto",
        contenido: "En el mundo actual, abundan las preguntas difíciles sobre el evangelio. Historias complicadas, doctrinas que confunden, experiencias que no cuadran con lo que uno espera. ¿Qué hacés cuando tenés una pregunta para la que no encontrás respuesta fácil?\n\nEl cuarto y último principio para adquirir conocimiento espiritual es actuar con fe mientras se espera la respuesta. Esto significa: hacer lo que ya sabes que es correcto aunque no entiendas todo. Vivir según los principios del evangelio mientras buscás comprensión. No esperar certeza total para obedecer.\n\nJosé Smith no tenía todas las respuestas cuando fue al bosque a orar. Actuó con fe primero. La respuesta vino después. Ese patrón se repite en toda la Escritura y en la vida de los santos fieles: actuar, luego recibir más luz. D&C 9:8 lo resume perfectamente: estudia el asunto en tu mente, luego pide confirmación. La fe activa precede a la confirmación espiritual."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 9:8",
            texto: "Pero he aquí, te digo que debes estudiar esto en tu mente; luego debes pedirme si es correcto, y si es correcto yo haré que tu seno arda dentro de ti; por tanto, sentirás que está bien.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/9?lang=spa&id=p8#p8"
          },
          {
            referencia: "Juan 7:17",
            texto: "El que quiera hacer la voluntad de Dios, conocerá si la doctrina es de Dios, o si yo hablo por mi propia cuenta.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/7?lang=spa&id=p17#p17"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Jeffrey R. Holland",
        fuente: "\"Creo\", Conferencia General, abril de 2013 (Liahona, mayo de 2013, pág. 94)",
        texto: "Cuando lleguen esos momentos y surjan los problemas, y la resolución de esos problemas no sea inmediata, aférrense al conocimiento que ya tienen y manténganse firmes hasta que reciban más conocimiento.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2013/04/lord-i-believe?lang=spa"
      },
      {
        tipo: "conclusion",
        contenido: "Actuar con fe no significa ignorar las dudas; significa no dejar que las dudas paralicen la acción. Juan 7:17 promete que quien quiera hacer la voluntad de Dios llegará a conocer la doctrina. El conocimiento espiritual sigue a la obediencia fiel, no solo a la investigación intelectual. Esta semana, identificá una verdad del evangelio que dudás y actuá según ella de todas formas. Observá qué pasa."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué diferencia hay entre tener dudas y dejar que las dudas te paralicen? ¿Alguna vez viviste esa diferencia?",
          "¿Qué pasos describe D&C 9:8 para recibir confirmación espiritual? ¿Cuál de esos pasos te resulta más difícil?",
          "¿Podés recordar una vez que actuaste con fe antes de tener todas las respuestas? ¿Qué pasó?",
          "¿Qué promete Juan 7:17 a quien quiere hacer la voluntad de Dios? ¿Cómo se relaciona eso con tus dudas actuales?",
          "¿Qué verdad del evangelio sobre la que tenés preguntas podés actuar esta semana, aunque no tengas todas las respuestas todavía?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 167b — Fijar metas
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "167-fijar-metas",
    title: "Fijar metas",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/552-setting-goals?lang=spa",
    type: "Dominio de la Doctrina",
    description: "Cómo establecer y alcanzar metas espirituales",
    secciones: [
      {
        tipo: "contexto",
        contenido: "¿Cuántas veces pusiste una meta de Año Nuevo que desapareció antes del 15 de enero? Las metas vagas mueren rápido. 'Ser más espiritual' no es una meta; es un deseo. 'Leer las Escrituras 10 minutos cada mañana antes de desayunar' es una meta.\n\nEsta lección enseña el proceso de fijar metas alineadas con los valores del evangelio. El propósito no es solo ser más organizado; es que las metas espirituales reflejen quiénes queremos llegar a ser como discípulos de Cristo. El proceso tiene pasos concretos: identificar el área de crecimiento, definir una acción específica, determinar cuándo y cómo, y crear rendición de cuentas.\n\nEn el contexto del Dominio de la Doctrina, fijar metas concretas para memorizar pasajes de las Escrituras y aplicarlos es la diferencia entre tener conocimiento teórico y tener un cimiento espiritual real. El Señor prometió en D&C 82:10 que 'cuando yo os mando hacer una cosa y lo hacéis, entonces os mando hacer otra'. Las metas espirituales cumplidas abren la puerta a más revelación y crecimiento."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 82:10",
            texto: "Yo el Señor, estoy ligado cuando hacéis lo que yo digo; pero cuando no hacéis lo que yo digo, no tenéis promesa.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/82?lang=spa&id=p10#p10"
          },
          {
            referencia: "Alma 37:6",
            texto: "Ahora bien, no menospreciéis las pequeñas cosas, pues de instrumentos pequeños lleva el Señor a cabo lo que es grande.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/37?lang=spa&id=p6#p6"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Elder Russell Ballard",
        fuente: "\"Volver y Recibir\", Liahona, mayo de 2017, pág. 62).",
        texto: "Cuando una persona sabe adónde se dirige y cómo espera llegar a su destino, le proporciona significado, propósito y logro a su vida. Algunos tienen dificultad para diferenciar entre una meta y un plan hasta que aprenden que una meta es un destino o un fin, mientras que un plan es la ruta por la que llegamos a ese destino",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2017/04/return-and-receive?lang=spa&id=p4-p5#p4"

      },
      {
        tipo: "conclusion",
        contenido: "Las metas espirituales pequeñas y concretas son más poderosas que las grandes y vagas. 'Seré más espiritual' no cambia nada. 'Voy a orar diez minutos cada mañana, de rodillas, antes de salir de casa' sí puede cambiar todo. El Señor prometió en D&C 82:10 que está ligado cuando hacemos lo que Él dice. Las metas alineadas con el evangelio activan esas promesas. Esta semana, establecé una meta espiritual específica, medible, y con fecha. Escribila."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cuál fue la última meta espiritual que te propusiste? ¿La cumpliste? ¿Por qué sí o por qué no?",
          "¿Cuál es la diferencia entre una meta vaga ('ser mejor') y una meta concreta ('leer cinco versículos cada mañana')? ¿Por qué importa esa diferencia?",
          "¿Cómo se conecta D&C 82:10 con el tema de fijar metas espirituales?",
          "¿Qué área de tu vida espiritual necesita más crecimiento en este momento?",
          "¿Cuál es una meta espiritual concreta que vas a fijar esta semana? Sé específico: ¿qué, cuándo, cómo?"
        ]
      }
    ],
    questions: []
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANA 4 — 24 al 30 de Marzo
// Bloque: Doctrina y Convenios 27–28 (Lunes 24: FERIADO)
// ═══════════════════════════════════════════════════════════════════════════════

export const semana4Lecciones: Lesson[] = [

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 41 — D&C 27:1–14
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "41-dc-27-1-14",
    title: "Doctrina y Convenios 27:1–14",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/131-doctrine-and-covenants-27-1-14?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "\"Con la mira puesta únicamente en mi gloria\"",
    secciones: [
      {
        tipo: "contexto",
        contenido: "¿Qué tan significativa es la Santa Cena en tu vida? ¿La recibís de forma rutinaria, o te detiene a pensar realmente en lo que significa?\n\nEn agosto de 1830, José Smith fue a buscar vino para celebrar la Santa Cena con un grupo de amigos, entre ellos Newel y Sally Knight. Lo detuvo un mensajero celestial que le reveló D&C 27. La revelación aclaró algo fundamental: lo que importa en la Santa Cena no es el tipo de vino ni la calidad del pan. Lo que importa es la intención del corazón —participar 'con la mira puesta únicamente en la gloria de Dios'.\n\nLos versículos 5–14 de D&C 27 revelan algo asombroso: en la futura Santa Cena del Milenio, el Salvador participará junto con Sus discípulos, junto con Moroni, Elías, Juan el Bautista, Elías el Profeta, Abraham, Isaac, Jacob, José, Pedro, Santiago y Juan. La Santa Cena no es solo un ritual memorial; es una anticipación de la gran reunión futura de todos los que pertenecen al convenio de Dios."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 27:2",
            texto: "Mas he aquí, os digo que no importa qué coméis ni qué bebéis, cuando participáis de la Santa Cena, si es así que lo hacéis con miras puestas únicamente en mi gloria.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/27?lang=spa&id=p2#p2"
          },
          {
            referencia: "Doctrina y Convenios 27:5",
            texto: "He aquí, esto es sabiduría mía; por tanto, se os manda que no compréis vino ni bebidas fermentadas de vuestros enemigos; por tanto, no participaréis de ninguno, excepto lo que sea hecho nuevamente entre vosotros; sí, en este reino con mi padre hasta aquel día cuando beba con vosotros en el reino de mi padre.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/27?lang=spa&id=p5#p5"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "D&C 27 revela que la Santa Cena no es solo un rito memorial; es una anticipación de la gran reunión futura del convenio. Lo que el Señor pide es participar 'con la mira puesta únicamente en Su gloria', no en la forma ni en los elementos. Esa intención del corazón transforma la experiencia. Este domingo, antes de recibir la Santa Cena, tomá un momento para deliberadamente dirigir tu mente y corazón al Salvador."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Tu amigo te dice que la Santa Cena 'no le parece gran cosa'. ¿Qué le mostrarías de D&C 27 para ayudarlo a ver su significado?",
          "¿Qué enseña D&C 27:2 sobre lo que realmente importa al participar de la Santa Cena?",
          "¿Qué te dice sobre el carácter del Señor saber que Él participará en la gran Santa Cena del Milenio junto a Sus discípulos?",
          "¿Tus experiencias recientes al participar de la Santa Cena fueron significativas? ¿Qué las hizo así, o qué las impidió?",
          "¿Qué harás diferente este domingo para participar de la Santa Cena 'con la mira puesta únicamente en la gloria de Dios'?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 42 — D&C 27:15–18
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "42-dc-27-15-18",
    title: "Doctrina y Convenios 27:15–18",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/132-doctrine-and-covenants-27-15-18?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "\"Tomad sobre vosotros toda mi armadura\"",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Como parte del mensaje del ángel a José Smith, el Señor describió cómo los santos podían acceder a una mayor protección espiritual. D&C 27:15–18 usa la metáfora de la armadura de guerra —ciñendo los lomos con la verdad, el peto de la justicia, los pies calzados con la preparación del evangelio, el escudo de la fe, el yelmo de la salvación, y la espada del Espíritu.\n\nEsta metáfora habla directamente a los jóvenes de hoy porque el adversario sigue atacando activamente. No con ejércitos físicos, sino con tentaciones, discursos culturales que normalizan el pecado, presión social, dudas sembradas a través de redes sociales, y el desánimo gradual. Cada pieza de la armadura que el Señor describe tiene una contraparte espiritual real: la verdad como cinturón que mantiene todo unido, la fe como escudo que apaga los dardos encendidos del adversario.\n\nEl objetivo de la lección es ayudar a los alumnos a comprender cómo el Salvador puede protegerlos específicamente de las formas en que el adversario trata de tentarlos y desanimarlos. No es una protección automática; es una protección que se activa cuando deliberadamente nos 'ponemos' cada pieza."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 27:15–18",
            texto: "Por tanto, tomad sobre vosotros toda mi armadura, para que podáis resistir en el día malo, y, habiendo acabado todo, estar firmes. Estad, pues, firmes, ceñidos vuestros lomos con la verdad, vestidos con el peto de la justicia, y calzados los pies con la preparación del evangelio de la paz. Tomad el escudo de la fe, con que podáis apagar todos los dardos de fuego del maligno. Tomad también el yelmo de la salvación, y la espada del Espíritu, que es la palabra de Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/27?lang=spa&id=p15-p18#p15"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Elder J. Debn Cornish",
        fuente: "El privilegio de la Oración - Liahona, Noviembre de 2011, Pág. 102",
        texto: "En nuestras oraciones podemos iniciar el proceso protector de ponernos toda la armadura de Dios (véase Efesios 6:11; D. y C. 27:15) al esperar con ansias el día por delante y pedir ayuda con las a veces temibles cosas que quizás tengamos que enfrentar. Por favor, amigos míos, no se olviden de pedirle al Señor que los proteja y que esté con ustedes.",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2011/10/the-privilege-of-prayer?lang=spa&id=p23#p23"
      },
      {
        tipo: "conclusion",
        contenido: "D&C 27:15–18 es una instrucción práctica: el Salvador ofrece protección real, pero debemos elegir ponernos la armadura. La verdad como cinturón, la fe como escudo, la Palabra de Dios como espada —cada elemento es algo que podemos cultivar o descuidar. El adversario ataca hoy igual que siempre; la protección que el Señor ofrece también es la misma. La pregunta es si estamos deliberadamente usando lo que Él ofrece."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿De qué maneras concretas trata el adversario de tentar o desanimar a los jóvenes de tu edad hoy?",
          "¿Cuáles son las piezas de la armadura de D&C 27:15–18? ¿Cuál de ellas crees que necesitás reforzar más?",
          "¿Cómo se 'pone' en la práctica cada pieza de la armadura? ¿Qué hábitos espirituales corresponden a cada una?",
          "¿Alguna vez sentiste que la fe, la oración o las Escrituras te protegieron de una tentación o un ataque espiritual?",
          "¿Qué pieza de la armadura de Dios vas a 'ponerte' de forma más deliberada esta semana? ¿Cómo lo harás?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 43 — D&C 28
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "43-dc-28",
    title: "Doctrina y Convenios 28",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/133-doctrine-and-covenants-28?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "El orden de la revelación en la Iglesia",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Hiram Page era miembro fiel de la Iglesia. Uno de los testigos del Libro de Mormón. Un hombre con buenas intenciones. Y tenía una piedra por medio de la cual afirmaba recibir revelaciones para toda la Iglesia. Varios miembros le creían. Incluso Oliver Cowdery estaba influenciado.\n\nEl Señor respondió con D&C 28: hay un solo canal para la revelación que afecta a toda la Iglesia, y ese canal es el profeta. Este principio no limita la revelación personal —cada miembro puede y debe recibir revelación para su propia vida, su familia y su llamamiento. Pero la revelación que dirige a toda la Iglesia viene a través de una sola persona designada. Eso no es burocracia; es protección divina contra el engaño.\n\nEl caso de Hiram Page es una advertencia relevante para hoy: alguien puede ser sincero, bienintencionado, y equivocado al mismo tiempo. La sinceridad no garantiza la veracidad. El orden establecido por el Señor existe precisamente para protegernos de ese tipo de engaño, por más convincente que parezca."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 28:2–3",
            texto: "Pero he aquí, en verdad te digo, que no hay nadie designado para recibir mandamientos y revelaciones en esta Iglesia sino mi siervo José Smith, hijo, porque él las ha recibido, y esto lo he designado así, a fin de que sea profeta para mi Iglesia.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/28?lang=spa&id=p2-p3#p2"
          },
          {
            referencia: "Doctrina y Convenios 28:11–12",
            texto: "Y otra vez te mando que no mandes a aquel que está a tu cabeza y a la Iglesia... Pues verily, verily os digo que a ninguno se le dio el revelar estos mandamientos salvo al profeta.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/28?lang=spa&id=p11-p12#p11"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "D&C 28 establece un principio protector esencial: la revelación para toda la Iglesia viene a través del profeta. Esto no impide la revelación personal; la protege. El caso de Hiram Page nos recuerda que la sinceridad no garantiza la veracidad. El orden establecido por el Señor es una expresión de Su cuidado por Su pueblo, no una restricción de la comunicación divina. Cuando participamos de ese orden, elegimos la protección que Dios ofrece."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué tiene de peligroso que cualquier persona afirme recibir revelaciones para toda la Iglesia, aunque sea con buenas intenciones?",
          "¿Por qué la sinceridad de Hiram Page no era suficiente para validar las revelaciones que afirmaba recibir?",
          "¿Cómo podés distinguir entre la revelación personal para tu vida y lo que sería revelación para la Iglesia?",
          "¿Cómo te protege saber que la revelación para la Iglesia viene a través del profeta?",
          "¿Hubo alguna vez que alguien te dijo algo que parecía espiritual pero que iba en contra de las enseñanzas de la Iglesia? ¿Cómo lo discerniste?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 168 — Enfocarse en Jesucristo en las Escrituras
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "168-enfocarse-jc-escrituras",
    title: "Enfocarse en Jesucristo en las Escrituras",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/531-focusing-on-jesus-christ-in-the-scriptures?lang=spa",
    type: "Preparación para la Vida",
    description: "Técnicas para encontrar a Cristo en el estudio de las Escrituras",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Las Escrituras tienen muchos contenidos: historia, leyes, genealogías, profecías, cartas. ¿Cómo no perderse en los detalles y llegar al corazón del mensaje? El Señor dijo en Juan 5:39: 'Escudriñad las Escrituras... ellas son las que dan testimonio de mí.' El centro de toda la Escritura es Jesucristo.\n\nEsta lección enseña técnicas prácticas para mantener ese enfoque al estudiar: buscar deliberadamente referencias al Salvador, Su Expiación, Sus atributos, Sus promesas, y Sus invitaciones. Cualquier pasaje de la Escritura —sea del Antiguo Testamento, el Libro de Mormón, D&C o el Nuevo Testamento— tiene algo que revelar sobre el Salvador si sabemos cómo buscarlo.\n\nEstudiar las Escrituras con este enfoque transforma la experiencia de lectura. Deja de ser un ejercicio académico de completar capítulos y se convierte en una conversación con el Salvador. Cada imagen, cada tipo, cada promesa cobra nueva vida cuando se entiende en relación a Él."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Juan 5:39",
            texto: "Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/5?lang=spa&id=p39#p39"
          },
          {
            referencia: "1 Nefi 19:23",
            texto: "Y hice esto para que aprovecharais; para que pudierais aprender que en cuanto a las cosas del pasado, así como en cuanto a las cosas del futuro, podéis aplicarlas a vosotros mismos de la misma manera.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/19?lang=spa&id=p23#p23"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Rusell M. Nelson",
        fuente: "Los profetas, el liderazgo y la ley divina - Devocional mundial 2017",
        texto: "Estudien todo lo que Jesucristo es, procurando, de manera devota y vigorosa, entender lo que cada uno de Sus títulos y nombres significan personalmente para ustedes. Por ejemplo, Él en verdad es su Abogado ante el Padre. Él estará de su lado; él los defenderá; hablará en beneficio de ustedes, en toda ocasión, a medida que ustedes decidan ser más como Él"
      },
      {
        tipo: "conclusion",
        contenido: "El centro de toda la Escritura es Jesucristo. Cuando estudiamos los textos sagrados buscando deliberadamente Su presencia —en tipologías, en promesas, en Sus atributos, en Sus invitaciones— el estudio se convierte en un encuentro real con el Salvador. Esta semana, elegí un capítulo de las Escrituras que conozcas bien y leelo de nuevo buscando específicamente qué revela sobre el Salvador que quizás no habías notado antes."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cuál fue la última vez que leíste las Escrituras y sentiste que te estaban hablando directamente a vos? ¿Qué estabas leyendo?",
          "¿Qué significa 'aplicar las Escrituras a vos mismo' como enseña 1 Nefi 19:23? ¿Cómo se hace eso en la práctica?",
          "¿Cómo cambia la experiencia de leer las Escrituras cuando buscás deliberadamente a Cristo en cada pasaje?",
          "¿Qué técnica concreta podrías usar la próxima vez que estudies para mantener el enfoque en el Salvador?",
          "¿Qué pasaje de las Escrituras que conocés bien podría revelarte algo nuevo sobre el Salvador si lo relees con ese enfoque?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 169 — Encontrar verdades del Evangelio en las Escrituras
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "169-encontrar-verdades-evangelio",
    title: "Encontrar verdades del Evangelio en las Escrituras",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/532-finding-gospel-truths-in-the-scriptures?lang=spa",
    type: "Preparación para la Vida",
    description: "Identificar y aplicar principios del Evangelio al estudiar",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Leer la Escritura y encontrar verdades del evangelio en la Escritura son dos cosas distintas. Podés terminar un capítulo entero y no llevarte nada que cambie tu vida. O podés leer tres versículos y encontrar un principio que transforma cómo tomás una decisión esa semana.\n\nEsta lección enseña el proceso de identificar, formular y aplicar verdades doctrinales del texto bíblico. Una 'verdad del evangelio' bien formulada tiene dos partes: un principio ('cuando hacemos X') y una consecuencia promisoria ('el Señor hace Y'). No es solo una observación histórica ('los israelitas cruzaron el mar Rojo') sino un principio transferible ('cuando actuamos con fe en las palabras del profeta, el Señor abre el camino').\n\nEl dominio de esta habilidad transforma el estudio de las Escrituras de una actividad religiosa pasiva a una fuente activa de guía personal. Cada vez que encontrás una verdad del evangelio y la aplicás a tu situación, las Escrituras se convierten en lo que el Señor prometió: una lámpara a tus pies."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Salmos 119:105",
            texto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/ps/119?lang=spa&id=p105#p105"
          },
          {
            referencia: "2 Timoteo 3:16–17",
            texto: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/nt/2-tim/3?lang=spa&id=p16-p17#p16"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "Encontrar verdades del evangelio en las Escrituras es una habilidad que se desarrolla con práctica. El proceso: leer el texto, identificar el principio doctrinal, formularlo en palabras propias ('cuando... entonces...'), y aplicarlo a una situación concreta de tu vida. Cuando hacés esto regularmente, las Escrituras dejan de ser un libro antiguo de historias y se convierten en la guía práctica que el Señor prometió. Esta semana, elegí un pasaje de tu estudio diario y practicá formular la verdad del evangelio que contiene."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cuál es la diferencia entre observar un hecho histórico en la Escritura y encontrar una verdad del evangelio aplicable a tu vida?",
          "¿Podés tomar D&C 27:2 y formularlo como una verdad del evangelio con estructura 'cuando... entonces...'?",
          "¿Alguna vez encontraste en las Escrituras algo que te ayudó a tomar una decisión concreta? ¿Qué fue?",
          "¿Qué hace que las Escrituras sean 'útiles para enseñar, redargüir, corregir e instruir', como dice 2 Timoteo 3:16?",
          "¿En qué situación concreta de tu vida esta semana podés aplicar una verdad del evangelio que encontraste en tus lecturas?"
        ]
      }
    ],
    questions: []
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANA 5 — 31 de Marzo al 6 de Abril
// Bloque: Doctrina y Convenios 29 (Lunes 31: FERIADO)
// ═══════════════════════════════════════════════════════════════════════════════

export const semana5Lecciones: Lesson[] = [

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 44 — D&C 29:1–8
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "44-dc-29-1-8",
    title: "Doctrina y Convenios 29:1–8",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/141-doctrine-and-covenants-29-1-8?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Escucha a tu Redentor",
    secciones: [
      {
        tipo: "contexto",
        contenido: "En septiembre de 1830, seis personas se reunieron con José Smith para preguntar sobre el regreso del Salvador. El Señor les respondió con D&C 29, una de las revelaciones más extensas y doctrinalmente ricas de la Restauración. Los primeros ocho versículos establecen el marco de todo lo que viene después.\n\nJesucristo se presenta como el Abogado ante el Padre —no un juez frío, sino un intercesor activo que aboga por nosotros. Y describe Su deseo de reunir a Sus escogidos con la imagen de una gallina que reúne a sus polluelos. Esa imagen no es accidental: una gallina no reúne a sus polluelos con indiferencia. Los reúne con urgencia y amor, especialmente ante el peligro.\n\nEsa es la actitud del Salvador hacia cada persona que todavía no ha escuchado el evangelio, y hacia cada miembro que se está alejando. La reunión de Israel no es un evento histórico futuro abstracto; es un proceso activo que ocurre ahora, y cada joven que comparte el evangelio con alguien es parte de ese proceso. El presidente Nelson lo dijo directamente: esta es la causa más grande de toda la historia del mundo."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 29:1–2",
            texto: "Escuchadme voz que soy Jesucristo, vuestro Abogado ante el Padre; y oíd las palabras de aquel cuyo encargo es llevar a cabo la voluntad del Padre, el que es fiel y justo en todas las cosas. Y os digo que habrá una reunión de todos mis siervos, y de todos mis elegidos, pues están preparados para recibir la plenitud del evangelio.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/29?lang=spa&id=p1-p2#p1"
          },
          {
            referencia: "Doctrina y Convenios 29:7–8",
            texto: "Y os digo que el tiempo de la mies ha llegado, y mi palabra ha de ir hacia el mundo... Para preparar a los débiles para confundir a los sabios y grandes del mundo, para que yo pueda ser el que reúna a mis elegidos de los cuatro ángulos de la tierra.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/29?lang=spa&id=p7-p8#p7"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Elder Dale G. Renlund",
        fuente: "\"Su naturaleza divina y destino eterno\", Liahona, Mayo de 2022, págs. 76-77",
        texto: "Nuestro Padre Celestial desea que ustedes se conviertan en Sus herederos y reciban todo lo que Él tiene. Él no puede ofrecerles más, no puede prometerles más. Él los ama más de lo que ustedes saben y quiere que sean felices en esta vida y en la vida venidera",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2022/04/36renlund?lang=spa&id=p21#p21"
      },
      {
        tipo: "conclusion",
        contenido: "Jesucristo es el Abogado ante el Padre —está activamente intercediendo por cada uno de nosotros. Su deseo de reunir a Sus escogidos es urgente y lleno de amor. Ser parte de ese proceso no requiere ser misionero de tiempo completo; requiere estar dispuesto a compartir el evangelio en el entorno cotidiano. El Señor eligió a los 'débiles' precisamente para confundir a los sabios. Eso te incluye a vos. Esta semana, ¿quién en tu entorno podrías ayudar a escuchar al Redentor?"
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué imagen usa el Señor en D&C 29 para describir Su deseo de reunir a Israel? ¿Qué te dice esa imagen sobre Su carácter?",
          "¿Qué significa para vos que Jesucristo se llame 'tu Abogado ante el Padre'?",
          "¿Por qué el Señor elige a los 'débiles' para Su obra, según D&C 29:7? ¿Cómo te hace sentir eso?",
          "¿Alguna vez sentiste que el Señor te usó para ayudar a alguien, aunque fuera en algo pequeño?",
          "¿Quién en tu entorno cercano podría beneficiarse de escuchar el evangelio? ¿Qué podés hacer esta semana?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 45 — D&C 29:9–29
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "45-dc-29-9-29",
    title: "Doctrina y Convenios 29:9–29",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/142-doctrine-and-covenants-29-9-29?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "Sentir gozo por la Segunda Venida de Jesucristo",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Los versículos 9–29 de D&C 29 describen señales y eventos que precederán la Segunda Venida: plagas, terremotos, tribulaciones, sufrimientos entre las naciones. Para alguien que los lee por primera vez, pueden parecer aterradores. Ese no es el propósito.\n\nEl Señor no revela estas cosas para producir miedo; las revela para producir preparación informada y esperanza activa. La diferencia entre miedo y fe ante las señales de los últimos días es el cimiento espiritual que uno tenga. Para alguien sin raíces, son amenazas. Para alguien con convenios activos, con el Espíritu como compañero, con su vida centrada en Cristo, son señales de que el Salvador viene pronto.\n\nEl manual enfatiza que la actitud correcta ante los eventos del fin de los tiempos es el gozo, no el terror. Los santos que vivan en esa época y que tengan su vida edificada sobre el cimiento de Jesucristo no tienen razón para temer. La preparación espiritual concreta —convenios activos, estudio de las Escrituras, oración diaria, servicio— es la respuesta que el Señor pide."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 29:9–11",
            texto: "Porque el gran Milenio, del que hablo por boca de mis siervos, ya se acerca. Y los santos que están sobre la tierra, que son fieles a la santidad, serán reunidos en los lugares que él ha señalado para ellos; y él vendrá a ellos, y ellos lo verán cara a cara.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/29?lang=spa&id=p9-p11#p9"
          },
          {
            referencia: "Doctrina y Convenios 45:35",
            texto: "Y he aquí, como yo os dije, después de que estas cosas sucedan, llegan las señales de mi venida; entonces veréis estas señales y sabréis que la hora está cerca.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/45?lang=spa&id=p35#p35"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "Las señales de los últimos días son exactamente eso: señales de que el Salvador viene. Para quienes tienen su vida edificada sobre Cristo, son motivo de expectativa y gozo, no de terror. La pregunta correcta no es '¿cuándo será?' sino '¿estoy preparado?' La preparación concreta —convenios activos, hábitos espirituales diarios, servicio— es la respuesta que el Señor pide. Esta semana, ¿qué cambio concreto harías en tu vida si supieras que la Segunda Venida está más cerca de lo que pensás?"
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cómo te hace sentir leer sobre las señales de los últimos días? ¿Miedo, indiferencia, esperanza? ¿Por qué?",
          "¿Por qué el Señor revela anticipadamente los eventos del fin de los tiempos en lugar de simplemente dejarlos ocurrir?",
          "¿Qué diferencia hay entre la reacción al conocer las señales del fin de los tiempos de alguien con cimiento espiritual sólido versus alguien sin él?",
          "¿Qué tipo de preparación espiritual crees que es más importante para estar listo para la Segunda Venida?",
          "¿Qué cambio concreto harías en tu vida esta semana para estar más preparado espiritualmente?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 46 — D&C 29:36–50
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "46-dc-29-36-50",
    title: "Doctrina y Convenios 29:36–50",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/143-doctrine-and-covenants-29-36-50?lang=spa",
    type: "Doctrina y Convenios - Ven Sigueme",
    description: "El albedrío y la redención de los niños pequeños",
    secciones: [
      {
        tipo: "contexto",
        contenido: "¿Por qué Dios permite que exista el mal? ¿Por qué los niños pequeños que mueren antes de poder ser bautizados necesitan salvación? Estas son preguntas reales que adolescentes y adultos hacen.\n\nLos versículos 36–50 de D&C 29 responden ambas con precisión doctrinal. El albedrío: el diablo fue expulsado del cielo precisamente por intentar destruir la agencia humana. La libertad de elegir no es un efecto secundario del plan; es el corazón de él. Sin ella no hay crecimiento real, no hay amor real, no hay salvación real. Dios permite el mal porque sin la posibilidad del mal, el bien tampoco existiría.\n\nLos niños pequeños: el Señor declara que son 'santos y redimidos' desde la fundación del mundo por Su sangre (v. 46–48). No necesitan bautismo porque no han pecado conscientemente. Esta es una de las doctrinas más consoladoras del evangelio restaurado: la misericordia de Dios alcanza a los más pequeños e inocentes. Demuestra que el Plan de Salvación no tiene brechas; está diseñado con perfecta justicia y perfecta misericordia para cada hijo de Dios."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 29:35",
            texto: "He aquí, todo lo que os he dicho con respecto a estas cosas es espiritual; porque en ningún tiempo os he dado ninguna ley temporal; porque mis leyes son espirituales; no hay ningún temporal que le haya dado.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/29?lang=spa&id=p35#p35"
          },
          {
            referencia: "Doctrina y Convenios 29:46–48",
            texto: "Mas he aquí, os digo que los pequeñitos son redimidos desde la fundación del mundo por mí... Por tanto, los pequeñitos son santos y son redimidos por mi sangre; y se salvarán.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/29?lang=spa&id=p46-p48#p46"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Thomas S. Monson",
        fuente: "Los tres aspectos de las decisiones Liahona, noviembre de 2010, págs. 67",
        texto: "Ni siquiera pasa una hora del día en la que no tengamos que tomar decisiones de una u otra índole. Algunas son triviales, pero otras son de mayor alcance; algunas no marcarán ninguna diferencia en el orden eterno de las cosas, mientras que otras marcarán toda la diferencia",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2010/10/the-three-rs-of-choice?lang=spa&id=p4#p4"
      },

      {
        tipo: "conclusion",
        contenido: "D&C 29 completa el cuadro doctrinal del Plan de Salvación: el albedrío como núcleo del plan, y la misericordia de Dios extendida hasta los niños más pequeños. No hay brecha en ese plan. Cada persona que nace tiene luz de Cristo. Cada niño que muere antes de la edad de responsabilidad está cubierto por la sangre del Salvador. Esta doctrina no genera complacencia; genera gratitud profunda por el diseño perfecto de un Padre que ama a cada uno de Sus hijos sin excepción."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Por qué el albedrío —la libertad de elegir— es tan central en el Plan de Salvación que incluso el diablo fue expulsado del cielo por intentar destruirlo?",
          "¿Qué doctrina sobre los niños pequeños enseña D&C 29:46–48? ¿Por qué eso es consolador?",
          "Si un amigo te preguntara 'si Dios es bueno, ¿por qué permite el mal?', ¿qué respuesta te daría D&C 29?",
          "¿Cómo refleja la doctrina sobre los niños pequeños la misericordia perfecta del Padre Celestial?",
          "¿Qué parte del Plan de Salvación te da más esperanza ahora mismo? ¿Por qué?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 170 — Prepararse para la Conferencia General
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "170-preparar-conferencia-general",
    title: "Prepararse para la Conferencia General",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/541-preparing-for-general-conference?lang=spa",
    type: "Preparación para la Vida",
    description: "Cómo prepararse espiritualmente para recibir los mensajes del profeta",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Dos veces al año, el Salvador habla a toda Su Iglesia a través de Sus profetas y apóstoles en la Conferencia General. Eso no es una metáfora; es la promesa de D&C 1:38: las palabras del Señor 'pronunciadas por la voz de mis siervos... es como si fuera el mío propio'.\n\nPero hay una diferencia enorme entre sentarse en un asiento y recibir un mensaje del Señor. La diferencia es la preparación. Los mejores estudiantes del evangelio llegan a la Conferencia General con preguntas específicas, con un corazón preparado por la oración, con una disposición genuina de actuar según lo que reciban. No llegan a ver un espectáculo; llegan a escuchar a su Padre a través de Sus siervos.\n\nEsta lección enseña cómo prepararse para la próxima Conferencia General de forma concreta: estudiar mensajes anteriores de los líderes, identificar preguntas del alma que querés llevar, orar con anticipación para estar receptivo, y comprometerte de antemano a actuar según lo que recibas."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 1:38",
            texto: "Lo que yo el Señor he hablado, lo he hablado, y no me excuso; y aunque los cielos y la tierra pasen, mi palabra no pasará, sino que toda será cumplida, ya sea por mi voz o por la voz de mis siervos, es lo mismo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/1?lang=spa&id=p38#p38"
          },
          {
            referencia: "Doctrina y Convenios 21:5",
            texto: "Porque así lo hará el Señor tu Dios, para que el oscurecimiento y la confusión sean apartados de delante de ti; si seguís sus palabras, las puertas del infierno no prevalecerán contra vosotros.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/21?lang=spa&id=p5#p5"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "Verdad pura, doctrina pura y revelación pura - Liahona, noviembre de 2021, pág. 6",
        texto: "Las Autoridades Generales y los Oficiales Generales de la Iglesia que discursen centrarán sus mensajes en nuestro Salvador Jesucristo, Su misericordia y Su infinito poder redentor. Nunca ha habido una época en la historia del mundo en la que el conocimiento de nuestro Salvador fuera más vital y relevante en lo personal para toda alma humana. Imaginen lo rápido que se resolverían los devastadores conflictos de todo el mundo, y los de nuestra propia vida, si todos nosotros decidiéramos seguir a Jesucristo y prestar atención a Sus enseñanzas",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/11nelson?lang=spa&id=p5#p5"
      },

      {
        tipo: "conclusion",
        contenido: "La Conferencia General es una de las ocasiones más sagradas del año para los santos: el Señor habla a toda Su Iglesia a través de Sus siervos. La calidad de esa experiencia depende directamente de la preparación de quien escucha. Estudiantes que llegan con preguntas específicas, con corazón preparado y disposición de actuar, reciben revelación personal. Los que llegan sin preparación escuchan palabras. Esta semana, identificá dos o tres preguntas concretas que llevarás a la próxima Conferencia General."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cuál fue el último mensaje de la Conferencia General que realmente te impactó? ¿Qué lo hizo significativo para vos?",
          "¿Qué diferencia hace ir a la Conferencia General con preguntas específicas versus ir sin preparación?",
          "Según D&C 1:38, ¿cómo equivalen las palabras de los siervos del Señor a las palabras del Señor mismo?",
          "¿Qué preguntas concretas de tu vida querés llevar a la próxima Conferencia General?",
          "¿Qué harás esta semana para prepararte espiritualmente antes de la próxima Conferencia General?"
        ]
      }
    ],
    questions: []
  },

  // ──────────────────────────────────────────────────────────────────────────────
  // LECCIÓN 171 — Estudiar los mensajes de los siervos del Señor
  // ──────────────────────────────────────────────────────────────────────────────
  {
    id: "171-mensajes-siervos",
    title: "Estudiar los mensajes de los siervos del Señor",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/doctrine-and-covenants-seminary-teacher-manual-2025/542-studying-the-messages-of-the-lords-servants?lang=spa",
    type: "Preparación para la Vida",
    description: "Herramientas para estudiar y aplicar la Conferencia General",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Escuchar un discurso de la Conferencia General y estudiar un discurso de la Conferencia General son dos experiencias completamente diferentes. Escuchar lo pasás una vez. Estudiarlo lo integrás a tu vida.\n\nEsta lección enseña técnicas concretas para convertir los mensajes de los líderes en guía personal aplicable: identificar el principio central del discurso, encontrar las Escrituras que el orador usa como fundamento, subrayar la invitación a la acción que hace el Señor a través de ese mensaje, y escribir cómo vas a actuar específicamente.\n\nHay una razón por la que los mensajes de la Conferencia General están disponibles en la Biblioteca del Evangelio con texto completo, audio, video y referencias: el Señor quiere que los estudies, no solo que los escuches. Cada discurso de la Conferencia General es una oportunidad de revelación personal cuando lo tratas como una fuente divinamente señalada y lo estudias con la misma reverencia y atención que darías a una sección de D&C."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Doctrina y Convenios 68:4",
            texto: "Y cualquier cosa que hablen por el Espíritu Santo será palabra de Escritura, será la voluntad del Señor, será la mente del Señor, será la palabra del Señor, será la voz del Señor y el poder de Dios unto la salvación.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/68?lang=spa&id=p4#p4"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "Verdad pura, doctrina pura y revelación pura - Liahona, noviembre de 2021, pág. 6",
        texto: "Las Autoridades Generales y los Oficiales Generales de la Iglesia que discursen centrarán sus mensajes en nuestro Salvador Jesucristo, Su misericordia y Su infinito poder redentor. Nunca ha habido una época en la historia del mundo en la que el conocimiento de nuestro Salvador fuera más vital y relevante en lo personal para toda alma humana. Imaginen lo rápido que se resolverían los devastadores conflictos de todo el mundo, y los de nuestra propia vida, si todos nosotros decidiéramos seguir a Jesucristo y prestar atención a Sus enseñanzas",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/11nelson?lang=spa&id=p5#p5"
      },

      {
        tipo: "conclusion",
        contenido: "Los mensajes de la Conferencia General son 'la voluntad del Señor, la mente del Señor, la palabra del Señor' (D&C 68:4) cuando son dados por el Espíritu. Estudiarlos con técnicas concretas —identificar el principio central, las Escrituras de fundamento, y la invitación a la acción— transforma esos mensajes en guía personal específica para tu vida. Esta semana, elegí un discurso reciente de la Conferencia General y estudíalo con ese proceso. Escribí qué vas a hacer diferente como resultado."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Cuál es la diferencia entre escuchar un discurso de la Conferencia General y estudiarlo? ¿Cuál de las dos hacés más?",
          "Según D&C 68:4, ¿qué condición hace que las palabras de los siervos del Señor sean equivalentes a Su Palabra?",
          "¿Qué herramientas concretas podrías usar para estudiar un discurso de la Conferencia General de forma más profunda?",
          "¿Qué discurso reciente de la Conferencia General más te habló? ¿Cuál fue la invitación a la acción que encontraste en él?",
          "¿Qué mensaje de la Conferencia General vas a estudiar esta semana? ¿Cuándo y cómo lo harás?"
        ]
      }
    ],
    questions: []
  }
]