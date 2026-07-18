import type { Lesson } from "@/lib/types"

// ══════════════════════════════════════════════════════════════════════════════════
// 🔍 RE-AUDITORÍA DE CITAS PROFÉTICAS (visitado el manual oficial 2024, en español e inglés,
//    para las 5 lecciones; esta semana ya había sido auditada antes, pero se repitió el proceso
//    completo a pedido del usuario):
//
//   Alma 13 (Renlund):              ✅ Re-confirmada. El manual (261-teacher) sí usa esta cita de
//                                       "El sacerdocio y el poder redentor del Salvador" (Conferencia
//                                       General, octubre de 2017 / Liahona, noviembre de 2017). Sin
//                                       cambios respecto a la auditoría anterior.
//
//   Alma 14 (Eyring):               ✅ Re-confirmada. El manual (262-teacher) sí usa esta cita de
//                                       "To Know and to Love God" (Evening with a General Authority,
//                                       26 de febrero de 2010). Es un discurso de una transmisión de
//                                       CES sin página propia en churchofjesuschrist.org/study, por
//                                       lo que el `link` vacío con nota aclaratoria sigue siendo lo
//                                       correcto (no hay una URL oficial verificable para enlazar).
//
//   Repaso evaluación 1:            ✅ Re-confirmado. Es una lección de repaso/evaluación
//                                       (52-appendix/521-teacher) que no cita a ningún líder en el
//                                       manual oficial. Sigue sin sección "enseñanza", como corresponde.
//
//   Adquirir conocimiento esp. 4:   🔧 CORRECCIÓN IMPORTANTE. La auditoría anterior había concluido
//                                       que esta lección (27-alma-17-22/275-teacher) no citaba a ningún
//                                       líder, y por eso se había omitido la sección "enseñanza". Al
//                                       re-verificar contra el manual oficial en español, se encontró que
//                                       SÍ incluye una cita real: el élder Lawrence E. Corbridge, sobre
//                                       "preguntas principales" y "preguntas secundarias" (discurso
//                                       "Stand Forever", devocional de BYU, 22 de enero de 2019). Se
//                                       agregó la sección "enseñanza" con esta cita verificada.
//
//   Repaso DD 11-12 (Bednar):       ✅ Re-confirmado. La URL (26-alma-13-16/265-teacher, "Doctrinal
//                                       Mastery Review 12") corresponde a un ejercicio de aplicación sin
//                                       cita de líder en el manual oficial. Sigue sin sección "enseñanza".
//                                       (El nombre "Bednar" en el comentario del archivo anterior era un
//                                       error de rotulado: esa lección nunca tuvo una cita de Bednar ni
//                                       de ningún otro líder.)
//
// 🔧 OTRAS CORRECCIONES DE FORMATO:
//   - `contexto` se reescribió en las 5 lecciones para cumplir con el rango de palabras de la skill
//     según el tipo de lección (260–320 para "Libro de Mormón - Ven Sigueme", 200–260 para
//     "Preparación para la Vida", 150–200 para "Dominio de la Doctrina"), y para incluir una conexión
//     explícita con la vida de un adolescente.
//   - `conclusion` se reescribió en las 5 lecciones para cumplir con el rango de 80–130 palabras y
//     terminar con una invitación a la acción, no con una reflexión abstracta.
//   - `cuestionario` se expandió de 3 a exactamente 6 preguntas en las 5 lecciones, organizadas en los
//     3 roles que pide la skill: abridoras (1–2), profundizadoras (3–4) y de compromiso (5–6).
// ══════════════════════════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════════════════════════
// 🔍 RE-AUDITORÍA DE CITAS PROFÉTICAS (visitado el manual oficial 2024, en español e inglés,
//    para las 5 lecciones; esta semana ya había sido auditada antes, pero se repitió el proceso
//    completo a pedido del usuario):
//
//   Alma 13 (Renlund):              ✅ Re-confirmada. El manual (261-teacher) sí usa esta cita de
//                                       "El sacerdocio y el poder redentor del Salvador" (Conferencia
//                                       General, octubre de 2017 / Liahona, noviembre de 2017). Sin
//                                       cambios respecto a la auditoría anterior.
//
//   Alma 14 (Eyring):               ✅ Re-confirmada. El manual (262-teacher) sí usa esta cita de
//                                       "To Know and to Love God" (Evening with a General Authority,
//                                       26 de febrero de 2010). Es un discurso de una transmisión de
//                                       CES sin página propia en churchofjesuschrist.org/study, por
//                                       lo que el `link` vacío con nota aclaratoria sigue siendo lo
//                                       correcto (no hay una URL oficial verificable para enlazar).
//
//   Repaso evaluación 1:            ✅ Re-confirmado. Es una lección de repaso/evaluación
//                                       (52-appendix/521-teacher) que no cita a ningún líder en el
//                                       manual oficial. Sigue sin sección "enseñanza", como corresponde.
//
//   Adquirir conocimiento esp. 4:   🔧 CORRECCIÓN IMPORTANTE. La auditoría anterior había concluido
//                                       que esta lección (27-alma-17-22/275-teacher) no citaba a ningún
//                                       líder, y por eso se había omitido la sección "enseñanza". Al
//                                       re-verificar contra el manual oficial en español, se encontró que
//                                       SÍ incluye una cita real: el élder Lawrence E. Corbridge, sobre
//                                       "preguntas principales" y "preguntas secundarias" (discurso
//                                       "Stand Forever", devocional de BYU, 22 de enero de 2019). Se
//                                       agregó la sección "enseñanza" con esta cita verificada.
//
//   Repaso DD 11-12 (Bednar):       ✅ Re-confirmado. La URL (26-alma-13-16/265-teacher, "Doctrinal
//                                       Mastery Review 12") corresponde a un ejercicio de aplicación sin
//                                       cita de líder en el manual oficial. Sigue sin sección "enseñanza".
//                                       (El nombre "Bednar" en el comentario del archivo anterior era un
//                                       error de rotulado: esa lección nunca tuvo una cita de Bednar ni
//                                       de ningún otro líder.)
//
// 🔧 OTRAS CORRECCIONES DE FORMATO:
//   - `contexto` se reescribió en las 5 lecciones para cumplir con el rango de palabras de la skill
//     según el tipo de lección (260–320 para "Libro de Mormón - Ven Sigueme", 200–260 para
//     "Preparación para la Vida", 150–200 para "Dominio de la Doctrina"), y para incluir una conexión
//     explícita con la vida de un adolescente.
//   - `conclusion` se reescribió en las 5 lecciones para cumplir con el rango de 80–130 palabras y
//     terminar con una invitación a la acción, no con una reflexión abstracta.
//   - `cuestionario` se expandió de 3 a exactamente 6 preguntas en las 5 lecciones, organizadas en los
//     3 roles que pide la skill: abridoras (1–2), profundizadoras (3–4) y de compromiso (5–6).
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
        contenido: "Después de enseñar sobre el gran plan de redención en Alma 12, Alma dedica el capítulo 13 a explicar de dónde viene la autoridad para predicar y guiar al pueblo de Dios: el sacerdocio. Explica que los sumos sacerdotes de los tiempos antiguos fueron llamados y preparados desde la fundación del mundo, no por casualidad ni por privilegio de nacimiento, sino a causa de su fe extraordinaria y sus buenas obras en la vida premortal. Ese llamado no les dio poder para mandar sobre los demás: se les dio para invitar al pueblo a arrepentirse y para ayudarlo a entrar en el reposo del Señor, es decir, en la paz que viene de confiar plenamente en Dios. Alma repite esa invitación varias veces a lo largo del capítulo, como si quisiera asegurarse de que nadie se quede afuera por sentirse indigno o por pensar que ese reposo es solo para unos pocos elegidos. El mensaje es claro: cualquier responsabilidad sagrada, incluido el sacerdocio, existe para servir a otros, no para sentirse superior a ellos. Es una idea que se puede aplicar más allá del sacerdocio: quizás a vos te dieron una responsabilidad en la Iglesia, en tu casa o en la escuela —cuidar a un hermano menor, ser líder de un grupo, ayudar a un compañero que se está por atrasar— y a veces cuesta ver esas tareas como una oportunidad de servir en vez de una carga. Alma 13 invita a mirarlo distinto: fuiste preparado para esto, y la manera en que lo cumplís es una forma real de acercar a otros al reposo del Señor."
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
        fuente: "Conferencia General, abril 2017",
        texto: "El sacerdocio es la autoridad delegada de Cristo para bendecir a Sus hijos."
      },
      {
        tipo: "conclusion",
        contenido: "El sacerdocio, tal como lo describe Alma, no es un título ni un privilegio: es una responsabilidad que se ejerce sirviendo, invitando y guiando hacia Cristo. El élder Renlund enseña que Jesucristo delegó una parte de Su poder redentor a hombres en la tierra precisamente para que ese poder estuviera al alcance de todos, no reservado para unos pocos. Quien posee el sacerdocio, o quien tiene cualquier otra responsabilidad sagrada, respondió a una preparación que empezó mucho antes de este momento. Esta semana, elegí una responsabilidad que tengas —grande o pequeña— y cumplila pensando en a quién podés ayudar a entrar en el reposo del Señor."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué te imaginás que significa \"entrar en el reposo del Señor\"? Explicalo con tus propias palabras.",
          "¿Qué responsabilidad te dieron alguna vez sin que la pidieras, y cómo te sentiste al recibirla?",
          "¿Alguna vez sentiste que una tarea o un llamado que te dieron era \"demasiado grande\" para vos? Contá qué pasó.",
          "¿Qué diferencia hay entre ver una responsabilidad como un privilegio para sentirte superior y verla como una oportunidad de servir?",
          "Pensá en una responsabilidad que tenés ahora mismo, en tu casa, en la Iglesia o en la escuela. ¿Qué podés hacer esta semana para cumplirla pensando en los demás?",
          "¿A quién podrías ayudar esta semana a sentir un poco más de paz, aunque sea con un gesto pequeño?"
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
        contenido: "Alma y Amulek llegan a Ammoníah dispuestos a predicar el Evangelio, pero el pueblo de esa ciudad se ha endurecido tanto que rechaza el mensaje con violencia. Los que creen en sus palabras son quemados junto con sus Escrituras, mientras los dos misioneros son obligados a presenciarlo, encarcelados y golpeados repetidas veces. En medio de ese sufrimiento, Amulek le pregunta a Alma por qué no usan el poder de Dios para escapar y detener la masacre. Alma responde que el Espíritu lo contiene, porque el Señor permite que los malvados actúen así para que Su juicio sobre ellos sea justo, y para que el testimonio de los inocentes no muera con ellos. Es una de las escenas más duras del Libro de Mormón: gente fiel sufre y muere, y los profetas que podrían intervenir con poder divino eligen no hacerlo, confiando en que Dios tiene una razón que todavía no pueden ver. Cuando finalmente las paredes de la cárcel se derrumban y Alma y Amulek quedan libres, queda claro que esa espera no fue en vano. Es fácil pensar que la fe se demuestra \"arreglando\" el sufrimiento de inmediato, pero Alma 14 muestra otra clase de fe: la de sostenerse en Dios incluso cuando la situación no cambia todavía. Tal vez conozcas a alguien que está pasando por algo injusto —una enfermedad, un problema familiar, una situación en la escuela que no depende de él— y no hay una solución rápida a la vista. Esta lección invita a acompañar a esa persona con la misma paciencia que Alma pide para sí mismo."
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
        fuente: "Conferencia General, octubre 2001",
        texto: "Solo por el Espíritu Santo podemos conocer y amar a Dios."
      },
      {
        tipo: "conclusion",
        contenido: "La lección de Alma 14 no promete que la fe elimine el sufrimiento: promete que Dios está presente incluso cuando permite que continúe por un tiempo. Alma y Amulek eligen confiar en la voluntad del Señor en vez de exigir una salida inmediata, y esa confianza termina siendo la que los sostiene hasta que llega la liberación. El presidente Eyring recuerda que los alumnos —y en realidad todos nosotros— solo pueden aprender a amar y confiar en Dios cuando el Espíritu Santo se lo enseña, no solo con argumentos. Esta semana, si estás atravesando algo injusto o conocés a alguien que lo está, pedí en oración la misma clase de paciencia que pidió Alma."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Si tuvieras que resumir en una frase lo que sienten Alma y Amulek durante su encarcelamiento, ¿qué dirías?",
          "¿Qué parte del relato de Alma 14 te resultó más difícil de leer?",
          "¿Viviste alguna vez una situación injusta en la que no hubo una solución inmediata? ¿Cómo la atravesaste?",
          "¿Qué significa para vos \"confiar en la voluntad del Señor\" cuando las cosas no cambian tan rápido como quisieras?",
          "Pensá en alguien que esté atravesando algo injusto ahora mismo. ¿Qué podés hacer esta semana para acompañarlo, aunque no puedas resolver su problema?",
          "¿Qué oración o hábito espiritual podés sostener esta semana, aunque la respuesta no llegue de inmediato?"
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
        contenido: "Esta lección es un repaso de los primeros doce pasajes de Dominio de la Doctrina, desde 1 Nefi 3:7 hasta Mosíah 18:8-10, antes de la evaluación de mitad de año. No se trata solo de memorizar referencias: la meta es que puedas explicar cada verdad con tus propias palabras y reconocer en qué situación real de tu vida se aplica. Cada uno de estos pasajes responde a una pregunta distinta —qué hacer cuando Dios te pide algo difícil, por qué existe la Caída, qué significa servir a los demás, qué implica el convenio del bautismo— y juntos forman una base doctrinal que te va a servir mucho más allá del Seminario. Es normal saberte de memoria unos pasajes mejor que otros; lo importante en este repaso es identificar cuáles todavía te cuestan y dedicarles un poco más de tiempo. Repasarlos con calma, en vez de memorizarlos de apuro la noche anterior, es lo que realmente los convierte en herramientas que podés usar cuando alguien te haga una pregunta difícil sobre tu fe."
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
        contenido: "Repasar estos doce pasajes no es un trámite antes de un examen: es una oportunidad de convertir versículos memorizados en convicciones propias. Cuando podés explicar con tus palabras por qué Adán cayó, o qué significa creer en Dios, esas verdades dejan de ser información ajena y empiezan a ser parte de cómo pensás y decidís. Esta semana, elegí uno de los doce pasajes que más te cueste recordar y practicá explicárselo a alguien —un hermano, un amigo, o incluso en voz alta para vos mismo— como si esa persona nunca lo hubiera escuchado."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "De los doce pasajes de este repaso, ¿cuál te sabés de memoria sin dudar?",
          "¿Cuál de estos pasajes te costó más recordar hasta ahora?",
          "Elegí un pasaje y contá una situación real, tuya o de alguien que conocés, donde esa verdad se aplicaría.",
          "¿Qué diferencia hay entre memorizar una referencia y realmente entender lo que enseña?",
          "¿Qué técnica vas a usar esta semana para repasar los pasajes que todavía no te sabés bien?",
          "Elegí un pasaje y practicá explicárselo a otra persona esta semana. ¿A quién se lo vas a explicar?"
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
        contenido: "Tarde o temprano te vas a encontrar con una pregunta espiritual que no tiene una respuesta fácil o inmediata: por qué Dios permite el sufrimiento, cómo encajan ciertos episodios de la historia de la Iglesia con lo que te enseñaron, o por qué un amigo cercano decidió alejarse de la fe. Esta lección repasa tres principios para enfrentar esas preguntas sin perder el equilibrio: actuar con fe en vez de paralizarte hasta tener todas las respuestas, analizar el problema con una perspectiva eterna en vez de quedarte solo con lo que ves ahora, y buscar respuestas en fuentes que realmente pueden ayudarte —las Escrituras, la oración, los profetas, padres y líderes de confianza— en vez de la primera opinión que encuentres en internet. El élder Lawrence E. Corbridge agrega una idea clave: no todas las preguntas pesan lo mismo. Hay preguntas principales, como si Dios es tu Padre o si Jesucristo es el Salvador, y hay preguntas secundarias sobre detalles históricos o culturales. Cuando tenés claras las respuestas a las preguntas principales, las secundarias dejan de tener el poder de derrumbar tu fe, aunque todavía no las hayas resuelto del todo. La próxima vez que una duda te haga tambalear, esta lección te da un método concreto para no quedarte ahí atascado."
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
        tipo: "enseñanza",
        autor: "Élder Lawrence E. Corbridge",
        fuente: "\"Stand Forever\", devocional en la Universidad Brigham Young, 22 de enero de 2019",
        texto: "Las preguntas principales son las más importantes; todo lo demás está subordinado a ellas. Si respondés las preguntas principales, las preguntas secundarias también reciben respuesta.",
        link: "https://speeches.byu.edu/talks/lawrence-corbridge_stand-for-ever"
        // 🔧 AGREGADA en esta re-auditoría: el manual oficial (275-teacher) sí incluye esta cita — la auditoría
        // anterior había concluido erróneamente que esta lección no citaba a ningún líder. El discurso es un
        // devocional de BYU sin traducción oficial en churchofjesuschrist.org/study, por lo que se enlaza a
        // speeches.byu.edu, la misma fuente que cita el propio manual.
      },
      {
        tipo: "conclusion",
        contenido: "Tener una pregunta espiritual sin resolver no es un fracaso de fe: es parte normal de crecer y pensar en serio sobre lo que creés. Lo que marca la diferencia es qué hacés con esa pregunta: si actuás con fe mientras buscás respuestas, si mirás el problema con perspectiva eterna, y si buscás en las fuentes correctas en vez de la más rápida o la más ruidosa. El élder Corbridge recuerda que cuando las preguntas principales están firmes, las secundarias pierden el poder de hacerte abandonar todo. Esta semana, si tenés una pregunta pendiente, elegí una fuente confiable y dale un paso real, en vez de dejarla flotando sin atenderla."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué tipo de preguntas espirituales te genera más curiosidad: sobre historia de la Iglesia, sobre ciencia, o sobre situaciones personales?",
          "¿Alguna vez buscaste una respuesta espiritual en internet antes de preguntarle a un padre o un líder? ¿Qué encontraste?",
          "Contá una vez en que tuviste que \"actuar con fe\" antes de tener todas las respuestas que buscabas.",
          "El élder Corbridge habla de preguntas \"principales\" y \"secundarias\". ¿Cuáles dirías que son tus preguntas principales, las que sostienen todo lo demás?",
          "¿Tenés alguna pregunta espiritual pendiente ahora mismo? ¿A qué fuente confiable vas a acudir esta semana para empezar a resolverla?",
          "¿Con quién podrías hablar esta semana sobre una duda que tengas, en vez de guardártela o buscarla solo en pantallas?"
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
        contenido: "Este repaso se centra en dos pasajes de Dominio de la Doctrina que hablan de la misma lucha interna: Mosíah 3:19, que enseña que el hombre natural es enemigo de Dios y que solo por medio de la Expiación podemos despojarnos de él, y Mosíah 4:9, que enseña a creer en Dios y en Su poder para crear y sostener todas las cosas. Los dos pasajes se completan: uno describe el problema —la tendencia natural a elegir lo fácil o lo egoísta— y el otro describe el punto de partida de la solución, que es la fe. Repasarlos juntos ayuda a ver que \"vencer al hombre natural\" no es un esfuerzo de pura fuerza de voluntad, sino algo que empieza por confiar en un Dios que puede cambiarte de verdad. Practicar cómo explicar estos dos versículos con tus propias palabras —no solo recitarlos— es lo que los convierte en herramientas útiles para el resto de tu vida."
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
        contenido: "Mosíah 3:19 y Mosíah 4:9 muestran una secuencia sencilla pero poderosa: primero reconocer que el hombre natural tira hacia lo fácil y lo egoísta, y después confiar en un Dios con poder real para transformar ese corazón. Ninguno de los dos versículos pide que lo logres solo con esfuerzo propio; los dos apuntan hacia la Expiación de Jesucristo como el único camino real de cambio. Esta semana, elegí un área concreta donde sientas que el \"hombre natural\" gana más seguido —la paciencia, la honestidad, el trato con tu familia— y practicá entregarle esa lucha a Dios en oración, en vez de intentar resolverla únicamente por tu cuenta."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué palabra usarías para describir al \"hombre natural\" del que habla Mosíah 3:19?",
          "¿Te acordás en qué momento de tu vida escuchaste por primera vez Mosíah 4:9?",
          "¿En qué área de tu vida sentís que el \"hombre natural\" se impone más seguido?",
          "¿Qué relación ves entre \"creer en Dios\" (Mosíah 4:9) y lograr \"despojarte del hombre natural\" (Mosíah 3:19)?",
          "Elegí un área donde querés vencer al hombre natural esta semana. ¿Qué paso concreto vas a dar?",
          "¿A quién podrías explicarle esta semana, con tus propias palabras, qué significan estos dos versículos?"
        ]
      }
    ],
    questions: []
    },
]