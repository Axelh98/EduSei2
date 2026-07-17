import type { Lesson } from "@/lib/types"

// ══════════════════════════════════════════════════════════════════════════════════
// 📖 LIBRO DE MORMÓN - SEMANA 16: Lecciones completas y enriquecidas
// ══════════════════════════════════════════════════════════════════════════════════
// 🔍 RE-AUDITORÍA DE CITAS PROFÉTICAS (visitado el manual oficial 2024, en español e inglés,
//    para las 3 lecciones; esta semana ya había sido auditada antes, pero se repitió el proceso
//    completo a pedido del usuario):
//
//   Alma 9 (Andersen):              🔧 CORRECCIÓN IMPORTANTE. La auditoría anterior había concluido
//                                       que el manual oficial ("Alma 9: Remember the Lord's Blessings",
//                                       252-teacher) no citaba a ningún líder. Al re-verificar, se
//                                       encontró que SÍ incluye una cita real: el élder Neil L. Andersen,
//                                       sobre las bendiciones únicas de pertenecer a la Iglesia restaurada
//                                       (discurso "Nunca lo dejen a Él", Conferencia General, octubre de
//                                       2010). Se agregó la sección "enseñanza" con esta cita verificada.
//                                       También se corrigió el texto de la cita de escritura Mosíah 26:22
//                                       usada en la semana siguiente — no afecta a este archivo, pero se
//                                       menciona porque surgió durante la misma búsqueda.
//
//   Alma 10-11 (Holland):           ✅ Re-confirmado. El manual oficial ("Alma 10-11: 'According to the
//                                       Spirit of the Lord'", 253-teacher) no cita a ningún líder con
//                                       nombre propio en esta lección — el texto es una reflexión general
//                                       del propio manual, no una cita atribuida. Sigue sin sección
//                                       "enseñanza", como corresponde. (No se encontró ninguna referencia a
//                                       "Holland" en el contenido real de esta lección; el nombre en el
//                                       comentario del archivo anterior no correspondía a ninguna cita real.)
//
//   Repaso DD 9-10 (Oaks):          ✅ Re-confirmado. Es un ejercicio de aplicación de pasajes de Dominio
//                                       de la Doctrina sin cita de un líder específico en el manual oficial
//                                       (siguiendo el mismo patrón que el resto de las lecciones "Doctrinal
//                                       Mastery Review" de este manual). Sigue sin sección "enseñanza".
//                                       (El nombre "Oaks" en el comentario anterior tampoco correspondía a
//                                       ninguna cita real de esta lección.)
//
//   🔧 Además, se corrigió el texto de la escritura Mosíah 26:22: el archivo original tenía una
//      paráfrasis con errores ("Y a quien recibáis, ese será el que crea en mi nombre; y a este lo
//      tendréis por libre") en vez del texto oficial ("Y aquel a quien recibas, deberá creer en mi
//      nombre; y yo lo perdonaré liberalmente").
//
// 🔧 OTRAS CORRECCIONES DE FORMATO:
//   - Cada lección tenía solo 1 escritura; se amplió a 3 por lección, como pide la skill.
//   - `contexto` se reescribió en las 3 lecciones para cumplir con el rango de palabras de la skill
//     (260–320 para "Libro de Mormón - Ven Sigueme", 150–200 para "Dominio de la Doctrina"), y para
//     incluir una conexión explícita con la vida de un adolescente.
//   - `conclusion` se reescribió en las 3 lecciones para cumplir con el rango de 80–130 palabras y
//     terminar con una invitación a la acción, no con una reflexión abstracta.
//   - `cuestionario` se expandió de 3 a exactamente 6 preguntas en las 3 lecciones, organizadas en los
//     3 roles que pide la skill: abridoras (1–2), profundizadoras (3–4) y de compromiso (5–6).
// ══════════════════════════════════════════════════════════════════════════════════

export const leccionesResumidasLM_Semana16: Lesson[] = [
  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 1: ALMA 9
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "alma-9",
    title: "Alma 9: El mensaje de Alma a los de Ammoníah sobre el arrepentimiento",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/25-alma-8-12/252-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "El pueblo de Ammoníah se había endurecido tanto contra el Evangelio que hasta un ángel tuvo que intervenir: le ordenó a Alma volver a esa ciudad, a pesar de que ya lo habían rechazado una vez, y darle un mensaje urgente de arrepentimiento. Alma empieza recordándoles algo que suena casi como una acusación: ustedes son descendientes de un pueblo al que Dios ha bendecido de manera extraordinaria, con Escrituras, profetas y liberaciones milagrosas, y sin embargo se comportan peor que quienes nunca recibieron esa luz. Les advierte que, si rechazan esas bendiciones, su caída será más grave que la de cualquier otro pueblo, precisamente porque sabían más. Al mismo tiempo, promete algo enorme: el Hijo de Dios vendrá pronto, y redimirá a todo el que se arrepienta, se bautice y tenga fe en Su nombre. Es un mensaje de dos filos: una advertencia seria sobre las consecuencias de dar la espalda a lo que ya conocemos, y una invitación abierta a cualquiera, sin importar cuán lejos se sienta. La lección invita a hacer un ejercicio incómodo pero honesto: hacer una lista de las bendiciones espirituales que ya tenés —una familia que te enseñó de Cristo, la posibilidad de leer las Escrituras, líderes en quienes confiar— y preguntarte con sinceridad si tu vida refleja el peso de esas bendiciones. Es fácil dar por sentado lo que siempre estuvo ahí, como el wifi de tu casa o el hecho de tener seminario disponible cada mañana, hasta que un día no está. Alma no está tratando de hacer sentir culpable a nadie: está recordando que reconocer lo que se te dio es el primer paso para vivir a la altura de ello, y que el arrepentimiento sigue siendo, en cualquier momento, una puerta abierta."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 9:23–24",
            texto: "He aquí, os digo que si este pueblo, que ha recibido tantas bendiciones de la mano del Señor, transgrediere contra la luz y conocimiento que tiene... será mucho más tolerable para los lamanitas que para ellos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/9?lang=spa&id=p23-p24#p23"
          },
          {
            referencia: "Alma 9:26",
            texto: "Y él vendrá al mundo para redimir a su pueblo; y tomará sobre sí las transgresiones de aquellos que crean en su nombre; y estos son los que tendrán vida eterna, y a nadie más le vendrá la salvación.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/9?lang=spa&id=p26#p26"
          },
          {
            referencia: "Doctrina y Convenios 82:3",
            texto: "Porque de aquel a quien mucho se da, mucho se requiere; y el que peque contra mayor luz, mayor condenación recibirá.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/82?lang=spa&id=p3#p3"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder Neil L. Andersen",
        fuente: "Conferencia General, octubre de 2010 (discurso \"Nunca lo dejen a Él\"); Liahona, noviembre de 2010, pág. 41",
        texto: "No podemos comparar nuestra situación con la de quienes todavía no han recibido estas verdades: tener un testimonio de Cristo, contar con el sacerdocio restaurado y con profetas vivientes. \"Al que mucho se le da, mucho se le requiere\" (Doctrina y Convenios 82:3).",
        link: "https://www.churchofjesuschrist.org/study/general-conference/2010/10/never-leave-him?lang=spa&id=p33#p33"

      },
      {
        tipo: "conclusion",
        contenido: "Alma no le habla al pueblo de Ammoníah desde la superioridad, sino desde la urgencia de alguien que conoce el valor de lo que están a punto de perder. El élder Andersen enseña que quienes hemos recibido tanto —un testimonio de Cristo, el sacerdocio restaurado, profetas vivientes— no podemos compararnos con quienes todavía no han recibido esas verdades; se nos exige más, precisamente porque se nos ha dado más. Reconocer una bendición no es un ejercicio de culpa, sino el primer paso para vivir a la altura de ella. Esta semana, anotá tres bendiciones espirituales concretas que sueles dar por sentadas, y elegí una acción pequeña para vivir mejor a la altura de una de ellas."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Si tuvieras que hacer una lista rápida de tres bendiciones espirituales en tu vida, ¿cuáles pondrías primero?",
          "¿Qué parte de la advertencia de Alma al pueblo de Ammoníah te pareció más dura?",
          "¿Alguna vez diste por sentada una bendición espiritual hasta que, por algún motivo, dejaste de tenerla cerca?",
          "¿Por qué creés que Dios espera más de quienes han recibido más luz y conocimiento?",
          "Elegí una bendición espiritual que sueles dar por sentada. ¿Qué acción concreta podés hacer esta semana para vivir más a la altura de ella?",
          "¿A quién podrías contarle esta semana sobre una bendición espiritual que hayas notado en tu vida últimamente?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "Comprender la urgencia y el poder liberador del arrepentimiento.",
    questions: []
  },

  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 2: ALMA 10–11
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "alma-10-11",
    title: "Alma 10–11: Amulek y Alma testifican ante Zeezrom",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/25-alma-8-12/253-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Después de que Alma es rechazado y expulsado de Ammoníah, un hombre llamado Amulek lo recibe en su casa: un ángel se le había aparecido antes para avisarle que esto iba a pasar. Amulek se presenta ante el pueblo contando su propia historia —una familia respetada, riquezas, una vida cómoda— y confiesa que, a pesar de haber sido \"llamado muchas veces\", no había querido escuchar hasta ahora. Juntos, Alma y Amulek empiezan a predicar con un poder inusual, y pronto se enfrentan a Zeezrom, un abogado hábil que intenta atraparlos con preguntas capciosas sobre si hay un Dios y si el Hijo de Dios salvará a Su pueblo en sus pecados. Amulek no se deja enredar: responde con claridad, enseña que Cristo no puede salvar a nadie que se aferre al pecado, y que en la resurrección todos, justos e injustos, serán llevados ante Dios para ser juzgados, sin que se pierda ni un solo pelo de la cabeza de nadie. Zeezrom, que había intentado sobornar a Amulek al principio de la conversación, empieza a temblar de convicción ante la claridad de esas respuestas. Es un buen recordatorio de que la verdad, dicha con sencillez y sin necesidad de impresionar a nadie, suele ser más poderosa que cualquier discurso elaborado. Tal vez conozcas a alguien —un compañero, un profesor, alguien en redes sociales— que hace preguntas sobre tu fe con la intención de hacerte quedar mal, no de aprender de verdad. Esta lección muestra que no hace falta tener una respuesta perfecta para cada pregunta: alcanza con responder con honestidad, sin miedo, confiando en que el Espíritu puede hacer el resto."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 10:11",
            texto: "Porque he aquí, he sido llamado por Dios... y él ha bendecido mi casa, y me ha bendecido a mí, y a mis mujeres, y a mis hijos, y a mi padre, y a mis parientes...",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/10?lang=spa&id=p11#p11"
          },
          {
            referencia: "Alma 10:22–23",
            texto: "Si no fuera por las oraciones de los justos que actualmente hay en la tierra, ahora mismo seríais visitados con una destrucción completa... mas es por las oraciones de los justos que sois preservados.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/10?lang=spa&id=p22-p23#p22"
          },
          {
            referencia: "Alma 11:44",
            texto: "Esta restauración vendrá sobre todos, tanto viejos como jóvenes, esclavos así como libres, varones así como mujeres, malvados así como justos; y no se perderá ni un solo pelo de su cabeza...",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/11?lang=spa&id=p44#p44"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "La confrontación entre Amulek y Zeezrom demuestra que la verdad simple, dicha con convicción, tiene más peso que cualquier trampa retórica. Amulek no necesitó un argumento sofisticado: necesitó claridad, honestidad y la disposición de hablar aunque lo estuvieran probando. El Señor sigue preparando a Sus siervos —incluido vos— para los momentos en que la fe se pone a prueba en público, muchas veces sin previo aviso. Esta semana, pensá en una pregunta difícil que te hayan hecho sobre tu fe y practicá, aunque sea en voz baja para vos mismo, cómo responderías hoy con sencillez y honestidad."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Con quién te identificás más en este relato: con Amulek, que dudó antes de escuchar el llamado, o con Zeezrom, que hacía preguntas con mala intención?",
          "¿Qué te parece que Amulek haya sido \"llamado muchas veces\" antes de decidirse a escuchar?",
          "¿Alguna vez alguien te hizo una pregunta sobre tu fe con la intención de hacerte quedar mal? ¿Cómo reaccionaste?",
          "¿Por qué creés que la respuesta simple y honesta de Amulek tuvo tanto efecto en Zeezrom?",
          "Pensá en una pregunta difícil que te hayan hecho sobre tu fe. ¿Cómo la responderías hoy, con tus propias palabras?",
          "¿Qué podés hacer esta semana para sentirte más preparado la próxima vez que alguien ponga a prueba tu fe?"
        ]
      }
    ],
    type: "Libro de Mormón - Ven Sigueme",
    description: "La valentía de testificar con claridad ante la oposición.",
    questions: []
  },

  // ════════════════════════════════════════════════════════════════════════════════
  // LECCIÓN 3: REPASO DEL DOMINIO DE LA DOCTRINA 9 Y 10
  // ════════════════════════════════════════════════════════════════════════════════
  {
    id: "repaso-dd-9-10",
    title: "Repaso del Dominio de la doctrina 9 y 10",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/25-alma-8-12/255-teacher?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido: "Este repaso se centra en verdades sobre qué significa realmente pertenecer a la Iglesia de Cristo y experimentar un cambio verdadero de corazón. Mosíah 26:22 enseña que la Iglesia del Señor está formada por quienes se bautizan para arrepentimiento y creen en Su nombre, y que Él está dispuesto a perdonar con generosidad a quien se acerca así. Mosíah 5:2 describe lo que le pasó al pueblo del rey Benjamín cuando de verdad creyeron sus palabras: un cambio tan poderoso que ya no tenían más deseo de hacer lo malo. Y Mosíah 18:8-10 explica el convenio bautismal: llevar las cargas de los demás, consolar a quien lo necesite y servir a Dios en todo momento y lugar. Juntos, estos tres pasajes muestran que la membresía en la Iglesia no es solo un registro o un nombre en una lista: es un cambio real de deseos, sostenido por un convenio que se renueva constantemente."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Mosíah 26:22",
            texto: "Porque he aquí, esta es mi iglesia: Quienquiera que sea bautizado, será bautizado para arrepentimiento. Y aquel a quien recibas, deberá creer en mi nombre; y yo lo perdonaré liberalmente.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/26?lang=spa&id=p22#p22"
            // 🔧 Corregido: el archivo original tenía una paráfrasis con errores en vez del texto oficial.
          },
          {
            referencia: "Mosíah 5:2",
            texto: "Sabemos de su certeza y verdad por el Espíritu del Señor Omnipotente, el cual ha efectuado un potente cambio en nosotros, o sea, en nuestros corazones, por lo que ya no tenemos más disposición a obrar mal, sino a hacer lo bueno continuamente.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/5?lang=spa&id=p2#p2"
          },
          {
            referencia: "Mosíah 18:8–10",
            texto: "Convenio bautismal de servir a Dios y llevar las cargas de los demás.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/18?lang=spa&id=p8-p10#p8"
          }
        ]
      },
      {
        tipo: "conclusion",
        contenido: "Pertenecer de verdad a la Iglesia de Cristo, según estos pasajes, tiene menos que ver con estar anotado en una lista y más con haber experimentado un cambio genuino de corazón que se mantiene con convenios renovados. El bautismo marca el comienzo de ese camino, no el final: implica llevar las cargas de otros, servir con constancia y seguir arrepintiéndose cuando haga falta. Esta semana, elegí una manera concreta de \"llevar las cargas\" de alguien cercano —escuchando, ayudando con algo específico, o simplemente estando presente— como una forma de vivir tu convenio bautismal en la práctica."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Te acordás de tu propio bautismo o el de alguien cercano? ¿Qué recordás de ese día?",
          "De estos tres pasajes, ¿cuál te resulta más fácil de recordar?",
          "¿Qué significa para vos \"llevar las cargas\" de otra persona en la práctica, no solo en teoría?",
          "¿Alguna vez sentiste ese \"cambio de disposición\" del que habla Mosíah 5:2, aunque sea en un área pequeña de tu vida?",
          "Elegí a alguien cercano y una carga específica que podrías ayudarlo a llevar esta semana.",
          "¿Qué parte de tu convenio bautismal sentís que necesitás renovar con más intención esta semana?"
        ]
      }
    ],
    type: "Dominio de la Doctrina",
    description: "Reforzar el conocimiento para actuar con fe y discernimiento.",
    questions: []
  }
]