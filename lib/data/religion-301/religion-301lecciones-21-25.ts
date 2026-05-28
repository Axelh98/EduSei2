import type { FlatLesson } from "@/lib/types";

// ══════════════════════════════════════════════════════════════════════════════
// 📖 RELIGIÓN 301 — ANTIGUO TESTAMENTO: LECCIONES 21–25
// Manual del maestro de Instituto 2026
// ══════════════════════════════════════════════════════════════════════════════
// ✅ Estructura basada en el tipo FlatLesson real de la app
// ✅ Secciones: contexto | escrituras | enseñanza | conclusion | cuestionario
// ✅ Escrituras con link directo al versículo en churchofjesuschrist.org
// ✅ Enseñanzas con fuente como string que incluye el link al discurso
// ══════════════════════════════════════════════════════════════════════════════

export const religion301Lecciones21_25: FlatLesson[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // LECCIÓN 21 — Rut; 1 Samuel 1–7
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "r301-l21",
    title: "Lección 21: Rut demuestra su fidelidad. Jehová habla a Samuel",
    description: "Rut; 1 Samuel 1–7. La fidelidad de Rut, la oración de Ana y el llamamiento del joven Samuel.",
    type: "Religión 301",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/old-testament-institute-teacher-manual-2026/21-ruth-1-samuel-1-7?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido:
          "En medio del caos moral del período de los Jueces, el libro de Rut es un oasis de lealtad, bondad y providencia discreta. No hay milagros espectaculares ni profecías dramáticas, solo personas comunes tomando decisiones extraordinariamente buenas en circunstancias difíciles. Noemí pierde a su esposo e hijos en tierra extranjera y regresa a Belén vacía. Rut, su nuera moabita, elige acompañarla con una fidelidad que supera toda obligación cultural o familiar. El concepto hebreo de hesed —bondad leal del convenio que va más allá de la obligación— es el hilo que une estas narrativas: Rut practicó hesed hacia Noemí, Booz practicó hesed hacia Rut, y el Señor coronó esa fidelidad incluyendo a Rut en la genealogía de Jesucristo (Mateo 1:5). En paralelo, 1 Samuel presenta a Ana, mujer que sufre profundamente y lleva su dolor al Señor en oración, cuyo hijo Samuel se convertirá en el último de los jueces y el ungidor de los primeros reyes. El llamamiento de Samuel —y su respuesta 'Habla, porque tu siervo oye'— define la postura del discípulo que está completamente disponible para el Señor antes de saber lo que se le pedirá.",
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Rut 1:16–17",
            texto:
              "Y Rut respondió: No me ruegues que te deje, y me aparte de ti; porque a dondequiera que tú fueres, iré yo, y dondequiera que vivieres, viviré. Tu pueblo será mi pueblo, y tu Dios mi Dios. Donde tú murieres, moriré yo, y allí seré sepultada.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/ruth/1?lang=spa&id=p16-p17#p16",
          },
          {
            referencia: "Rut 2:11–12",
            texto:
              "Y Booz respondió y le dijo: He sido informado de todo lo que has hecho con tu suegra después de la muerte de tu marido, y que dejando a tu padre y a tu madre y la tierra donde naciste, has venido a un pueblo que no conocías antes. Jehová recompense tu obra, y tu remuneración sea completa de parte de Jehová Dios de Israel, bajo cuyas alas has venido a refugiarte.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/ruth/2?lang=spa&id=p11-p12#p11",
          },
          {
            referencia: "1 Samuel 1:10–11, 27–28",
            texto:
              "Ella con amargura de alma oró al Señor, y lloró abundantemente. E hizo voto, diciendo: Oh Señor de los ejércitos, si te dignares mirar a la aflicción de tu sierva… y dieres a tu sierva un hijo varón, yo lo dedicaré al Señor todos los días de su vida… Por este niño oraba, y el Señor me dio lo que le pedí. Yo, pues, lo dedico también al Señor; todos los días que viva, será del Señor.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-sam/1?lang=spa&id=p10-p11,p27-p28#p10",
          },
          {
            referencia: "1 Samuel 3:9–10",
            texto:
              "Y Elí dijo a Samuel: Ve y acuéstate; y si te llamare, dirás: Habla, Señor, porque tu siervo oye. Y vino el Señor y se paró, y llamó como las otras veces: ¡Samuel, Samuel! Entonces Samuel dijo: Habla, porque tu siervo oye.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-sam/3?lang=spa&id=p9-p10#p9",
          },
        ],
      },
      {
        tipo: "enseñanza",
        autor: "Hermana Jean B. Bingham",
        fuente: "«Esa bondad sin par — hesed», Liahona, mayo de 2021 — https://www.churchofjesuschrist.org/study/general-conference/2021/04/13bingham?lang=spa",
        texto:
          "El libro de Rut nos enseña el concepto hebreo de hesed: bondad amorosa del convenio que va más allá de la obligación. Rut practicó hesed hacia Noemí, Booz practicó hesed hacia Rut, y el Señor practicó hesed hacia ambas. Cuando practicamos esta bondad leal en nuestras relaciones, especialmente cuando no hay ventaja personal, reflejamos el carácter de Dios.",
      },
      {
        tipo: "enseñanza",
        autor: "Élder Gary E. Stevenson",
        fuente: "«Habla, Señor, tu siervo oye», Liahona, mayo de 2022 — https://www.churchofjesuschrist.org/study/general-conference/2022/04/57stevenson?lang=spa",
        texto:
          "La invitación de Samuel al Señor — 'Habla, porque tu siervo oye' — es el modelo de toda revelación personal. No esperamos recibir revelación cuando estamos demasiado ocupados, ruidosos o distraídos para escuchar. El Señor habla, pero nosotros debemos crear las condiciones: momentos de quietud, estudio de las Escrituras, oración sincera y obediencia dispuesta.",
      },
      {
        tipo: "conclusion",
        contenido:
          "Las historias de Rut y de Samuel nos invitan a reflexionar sobre la calidad de nuestra lealtad y la disposición de nuestra escucha. Rut eligió a Noemí —y al Dios de Noemí— cuando hacerlo no le ofrecía ninguna ventaja humana; eso es fe en su forma más pura. Ana llevó su dolor más profundo al Señor y luego consagró anticipadamente el hijo que aún no tenía; eso es fe que se materializa en entrega. Y Samuel respondió al llamado del Señor con una disposición total antes de saber lo que se le pediría. Las tres figuras modelan el discipulado que el Señor busca: fiel en la lealtad, honesto en la oración y disponible en la escucha.",
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Rut eligió a Noemí cuando hacerlo no le ofrecía ningún beneficio personal. ¿Hay alguien en tu vida a quien estás llamado a ser fiel precisamente cuando esa fidelidad no te conviene?",
          "Ana oró con tanta intensidad que la confundieron con alguien ebrio. ¿Con qué profundidad y honestidad llevas tus dolores más íntimos ante el Señor en oración?",
          "Samuel dijo 'Habla, porque tu siervo oye' antes de saber lo que el Señor le diría. ¿Estás dispuesto a escuchar la voluntad del Señor incluso si podría pedirte algo difícil?",
          "Rut era extranjera, viuda y pobre, y aun así se convirtió en ancestro de Jesucristo. ¿Qué te dice eso sobre cómo el Señor evalúa el valor y el potencial de una persona?",
          "¿Cuál de estas tres figuras —Rut, Ana o Samuel— te habla más directamente a tu situación actual, y por qué?",
        ],
      },
    ],
    questions: [],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LECCIÓN 22 — 1 Samuel 8–10; 13; 15–16
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "r301-l22",
    title: "Lección 22: El ascenso y la caída del rey Saúl, y la unción de David",
    description: "1 Samuel 8–10; 13; 15–16. El ascenso y la caída del rey Saúl, y la unción de David como el siguiente rey.",
    type: "Religión 301",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/old-testament-institute-teacher-manual-2026/22-1-samuel-8-10-13-15-16?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido:
          "El pedido de Israel de tener un rey 'como todas las naciones' marcó un punto de inflexión teológica profunda: el pueblo rechazaba el gobierno directo de Dios en favor de una institución humana visible y comparable con las naciones vecinas. El Señor accedió como concesión a su agencia, pero advirtió de las consecuencias. Saúl fue elegido: físicamente imponente, humilde al principio. Pero su reinado ilustra que la apariencia externa y el comienzo prometedor no garantizan la fidelidad duradera. Saúl puso la aprobación humana por encima de la obediencia divina —ejecutó el ritual pero no el mandato preciso, preservó lo que debía destruir porque temía al pueblo más que al Señor— y perdió el reino. Cuando Samuel fue a ungir al sucesor en la casa de Isaí, pasó por alto a siete hijos impresionantes hasta que el Señor corrigió su criterio: 'El Señor no mira lo que mira el hombre; pues el hombre mira lo que está delante de sus ojos, pero el Señor mira el corazón.' David, el menor de todos, pastor de ovejas, ignorado incluso por su propio padre al convocar la reunión, fue el elegido.",
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "1 Samuel 8:7",
            texto:
              "Y dijo el Señor a Samuel: Oye la voz del pueblo en todo lo que te digan; porque no te han desechado a ti, sino a mí me han desechado, para que no reine sobre ellos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-sam/8?lang=spa&id=p7#p7",
          },
          {
            referencia: "1 Samuel 15:22–23",
            texto:
              "Y Samuel dijo: ¿Se complace el Señor tanto en los holocaustos y víctimas, como en que se obedezca a las palabras del Señor? Ciertamente el obedecer es mejor que los sacrificios, y el prestar atención que la grosura de los carneros. Porque como pecado de adivinación es la rebelión, y como ídolos e idolatría la obstinación.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-sam/15?lang=spa&id=p22-p23#p22",
          },
          {
            referencia: "1 Samuel 16:7",
            texto:
              "Y el Señor respondió a Samuel: No mires a su parecer, ni a lo grande de su estatura, porque yo lo desecho; porque el Señor no mira lo que mira el hombre; pues el hombre mira lo que está delante de sus ojos, pero el Señor mira el corazón.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-sam/16?lang=spa&id=p7#p7",
          },
        ],
      },
      {
        tipo: "enseñanza",
        autor: "Élder Lynn G. Robbins",
        fuente: "«¿Hacia quién miras?», Liahona, mayo de 2014 — https://www.churchofjesuschrist.org/study/general-conference/2014/04/which-way-do-you-face?lang=spa",
        texto:
          "Saúl era un hombre-agradador. Preservó al rey de Amalec y el mejor ganado porque temía al pueblo más que a Dios. Esta tentación —agradar a los hombres antes que al Señor— es tan antigua como el primer rey de Israel y tan moderna como hoy. Un líder que mira hacia su audiencia en lugar de hacia Dios con el tiempo perderá ambos: la aprobación divina y la humana.",
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Dieter F. Uchtdorf",
        fuente: "«El bien más precioso», Liahona, noviembre de 2012 — https://www.churchofjesuschrist.org/study/general-conference/2012/10/of-things-that-matter-most?lang=spa",
        texto:
          "El Señor mira el corazón. Cuántas veces juzgamos a las personas por su apariencia, posición o errores, cuando el Señor ve en ellas un potencial que nosotros no podemos ver. David fue elegido rey mientras pastoreaba ovejas. El Señor ve lo que somos capaces de llegar a ser, no solo lo que somos ahora.",
      },
      {
        tipo: "conclusion",
        contenido:
          "Las historias de Saúl y David presentan dos modelos de carácter en contraste directo. Saúl tenía lo que el mundo valora: altura, porte, presencia. David tenía lo que Dios valora: un corazón dispuesto, una fe probada y dependencia genuina del Señor. La declaración 'obedecer es mejor que los sacrificios' sigue siendo la advertencia más directa contra la religiosidad superficial: cumplir los rituales correctos con el corazón en otro lugar no es adoración, es hipocresía. Y el principio de que el Señor mira el corazón debe hacernos reflexionar sobre qué cultivamos en el interior, aquello que nadie más ve pero que el Señor ve siempre.",
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "Israel quería ser 'como todas las naciones'. ¿En qué áreas de tu vida sientes la presión de conformarte a los estándares del mundo en lugar de los del Señor?",
          "Saúl obedeció en parte, realizó el ritual pero no el mandato preciso. ¿Hay áreas en tu obediencia donde cumples la forma exterior pero resistes la intención del Señor?",
          "El Señor le dijo a Samuel que Él mira el corazón. ¿Cómo cambia eso la forma en que te ves a ti mismo en los momentos en que te sientes inadecuado externamente?",
          "Saúl perdió el reino por ser hombre-agradador. ¿Cuándo fue la última vez que elegiste agradar a alguien antes que obedecer al Señor? ¿Qué consecuencias tuvo?",
          "¿Qué aspecto de tu corazón crees que el Señor valora en ti que el mundo no sabría reconocer?",
        ],
      },
    ],
    questions: [],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LECCIÓN 23 — 1 Samuel 17–18; 24–26; 2 Samuel 5–7
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "r301-l23",
    title: "Lección 23: David: fe frente a Goliat, integridad ante Saúl y el convenio davídico",
    description: "1 Samuel 17–18; 24–26; 2 Samuel 5–7. La fe de David ante Goliat, su integridad al perdonar a Saúl y las promesas del convenio davídico.",
    type: "Religión 301",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/old-testament-institute-teacher-manual-2026/23-1-samuel-17-18-24-26-2-samuel-5-7?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido:
          "Los capítulos de David antes de ser rey contienen algunas de las escenas más inspiradoras del Antiguo Testamento. Su enfrentamiento con Goliat no fue temeridad juvenil, sino la expresión pública de una confianza en el Señor que David había construido en privado durante años de pastorear ovejas y enfrentar leones y osos solo con su honda. Lo que el ejército de Israel veía como un gigante imposible, David lo veía como un filisteo incircunciso que había desafiado al Dios viviente —y eso lo cambiaba todo. Igualmente notable es su negativa reiterada a hacerle daño al rey Saúl, quien lo perseguía para matarlo. David tuvo la oportunidad perfecta de eliminarlo, con el apoyo de sus hombres, y no lo hizo: reconocía la autoridad sagrada del ungido del Señor por encima de la conducta del hombre que la portaba. Finalmente, el convenio que el Señor hizo con David sobre un trono eterno tiene capas de cumplimiento: Salomón edificó el templo, pero el trono eterno prometido solo encuentra cumplimiento pleno en Jesucristo, de quien el ángel Gabriel declaró: 'el Señor Dios le dará el trono de David su padre; y reinará sobre la casa de Jacob para siempre' (Lucas 1:32–33).",
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "1 Samuel 17:45–47",
            texto:
              "Entonces dijo David al filisteo: Tú vienes a mí con espada y lanza y jabalina; mas yo vengo a ti en el nombre del Señor de los ejércitos, el Dios de los escuadrones de Israel, a quien tú has provocado. El Señor te entregará hoy en mi mano… y toda la tierra sabrá que hay Dios en Israel. Y sabrá toda esta congregación que el Señor no salva con espada y con lanza; porque del Señor es la batalla, y él os entregará en nuestras manos.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-sam/17?lang=spa&id=p45-p47#p45",
          },
          {
            referencia: "1 Samuel 24:6, 10–12",
            texto:
              "Y dijo a sus hombres: El Señor me guarde de hacer tal cosa contra mi señor, el ungido del Señor, que yo extienda mi mano contra él; porque es el ungido del Señor… Mira, pues, y ve hoy cómo el Señor te ha puesto hoy en mi mano en la cueva, y no te maté. Y algunos me incitaban a que te matase, pero yo te perdoné, porque dije: No extenderé mi mano contra mi señor, porque es el ungido del Señor.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-sam/24?lang=spa&id=p6,p10-p12#p6",
          },
          {
            referencia: "2 Samuel 7:12–13, 16",
            texto:
              "Y cuando tus días sean cumplidos, y duermas con tus padres, yo levantaré después de ti a tu descendiente, el cual procederá de tus entrañas, y afirmaré su reino. Él edificará casa a mi nombre, y yo afirmaré para siempre el trono de su reino… Y será afirmada tu casa y tu reino para siempre delante de tu rostro, y tu trono será estable eternamente.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-sam/7?lang=spa&id=p12-p13,p16#p12",
          },
        ],
      },
      {
        tipo: "enseñanza",
        autor: "Élder Jeffrey R. Holland",
        fuente: "«Confiad en Dios», Liahona, noviembre de 1995 — https://www.churchofjesuschrist.org/study/general-conference/1995/10/an-high-priest-of-good-things-to-come?lang=spa",
        texto:
          "Cuando David dijo 'del Señor es la batalla', no estaba racionalizando su debilidad. Estaba declarando una verdad teológica aprendida en el anonimato del desierto con los leones y las ovejas. Los momentos de fe invisible construyen los momentos de fe pública. La confianza ante Goliat fue el resultado de años de confiar en el Señor cuando nadie miraba.",
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "«Esperen el poder del sacerdocio», Liahona, mayo de 2016 — https://www.churchofjesuschrist.org/study/general-conference/2016/04/stand-as-true-millennials?lang=spa",
        texto:
          "El ejemplo de David de respetar al ungido del Señor incluso cuando ese ungido actuaba perversamente nos enseña a distinguir entre la persona y la autoridad que porta. La autoridad del sacerdocio es sagrada independientemente de la perfección de quien la ejerce. Honramos la autoridad del Señor y al hacerlo, honramos al Señor mismo.",
      },
      {
        tipo: "conclusion",
        contenido:
          "David, antes de ser rey, modeló dos de las virtudes más difíciles del discipulado: la fe que enfrenta lo humanamente imposible con calma, y la integridad que rechaza la venganza aun cuando está completamente justificada. Su expresión 'del Señor es la batalla' no fue una frase de guerra —fue una declaración teológica sobre quién es el verdadero agente en la vida del discípulo. Y el convenio davídico nos recuerda que los propósitos de Dios siempre trascienden la vida de cualquier individuo: lo que prometió a David se cumplió en Jesucristo, y lo que promete a cada uno de nosotros en nuestros convenios se cumplirá también, en el tiempo del Señor.",
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "David construyó su confianza con leones y osos antes de enfrentar a Goliat. ¿Qué pruebas pequeñas te ha dado el Señor donde puedes edificar confianza para los desafíos más grandes?",
          "David perdonó a Saúl cuando sus propios hombres lo incitaban a matarlo. ¿Hay alguien en tu vida que te ha herido injustamente hacia quien el Señor te llama a mostrar esa misma integridad?",
          "El convenio davídico prometía un rey eterno que solo se cumple en Cristo. ¿Cómo reconoces a Jesucristo como ese Rey eterno en tu propia vida?",
          "David dijo 'del Señor es la batalla'. ¿Hay alguna batalla en tu vida ahora mismo en la que necesitas trasladar la responsabilidad al Señor en lugar de cargarla tú solo?",
          "¿Cómo puedes desarrollar en los momentos cotidianos la confianza en el Señor que te prepare para los grandes desafíos?",
        ],
      },
    ],
    questions: [],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LECCIÓN 24 — 2 Samuel 11–12; 1 Reyes 3; 6–9; 11
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "r301-l24",
    title: "Lección 24: La caída del rey David, y el ascenso y la caída del rey Salomón",
    description: "2 Samuel 11–12; 1 Reyes 3; 6–9; 11. La caída de David, la sabiduría de Salomón y su eventual apostasía.",
    type: "Religión 301",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/old-testament-institute-teacher-manual-2026/24-2-samuel-11-12-1-kings-3-6-9-11?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido:
          "Pocos relatos del Antiguo Testamento son tan humana e instructivamente poderosos como la caída de David. No fue un malvado quien cayó —fue el hombre descrito como 'varón conforme al corazón de Dios'. Y su caída no comenzó con el adulterio: comenzó una noche en que el rey se quedó en Jerusalén cuando debía estar en campaña, se paseó por la azotea cuando debía estar ocupado, y miró donde no debía. Esta secuencia de pequeñas decisiones muestra que los grandes pecados rara vez son súbitos; son la culminación de pequeñas abdicaciones de la vigilancia espiritual. El profeta Natán confrontó a David con una parábola, y la respuesta de David —'Pequé contra el Señor', sin excusas ni justificaciones— es el modelo del arrepentimiento genuino. Salomón, su hijo, heredó la sabiduría y edificó el templo que David soñó. Su petición de un corazón entendido para servir es el modelo de la oración madura. Pero terminó con el corazón dividido entre el Señor y los dioses de sus mujeres extranjeras. Ninguna sabiduría humana, por extraordinaria que sea, protege al corazón que no permanece unido al Señor de manera total.",
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "2 Samuel 11:1–4",
            texto:
              "Aconteció al año siguiente, en el tiempo que salen los reyes a la guerra, que David envió a Joab… Pero David se quedó en Jerusalén. Y sucedió que al declinar la tarde, se levantó David de su lecho y se paseaba sobre el terrado de la casa real… Y envió David mensajeros, y la tomó; y vino a él, y él durmió con ella.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-sam/11?lang=spa&id=p1-p4#p1",
          },
          {
            referencia: "2 Samuel 12:7, 9, 13",
            texto:
              "Entonces dijo Natán a David: Tú eres aquel hombre… ¿Por qué, pues, tuviste en poco la palabra del Señor, haciendo lo malo delante de sus ojos?… Y David dijo a Natán: Pequé contra el Señor. Y Natán dijo a David: También el Señor ha remitido tu pecado; no morirás.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-sam/12?lang=spa&id=p7,p9,p13#p7",
          },
          {
            referencia: "1 Reyes 3:5, 9–10",
            texto:
              "Y en Gabaón apareció el Señor a Salomón en sueños de noche; y le dijo Dios: Pide lo que quieras que yo te dé… Da, pues, a tu siervo corazón entendido para juzgar a tu pueblo, y para discernir entre lo bueno y lo malo… Y agradó delante del Señor que Salomón pidiese esto.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/3?lang=spa&id=p5,p9-p10#p5",
          },
          {
            referencia: "1 Reyes 11:4, 6",
            texto:
              "Y cuando Salomón era ya viejo, sus mujeres inclinaron su corazón tras dioses ajenos; y su corazón no era perfecto con el Señor su Dios, como el corazón de su padre David… E hizo Salomón lo malo ante los ojos del Señor, y no siguió cumplidamente al Señor como David su padre.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/11?lang=spa&id=p4,p6#p4",
          },
        ],
      },
      {
        tipo: "enseñanza",
        autor: "Élder David A. Bednar",
        fuente: "«Alerta siempre», Liahona, mayo de 2015 — https://www.churchofjesuschrist.org/study/general-conference/2015/04/watchful-unto-prayer-always?lang=spa",
        texto:
          "La caída de David no comenzó con Betsabé. Comenzó mucho antes, en decisiones aparentemente pequeñas que lo pusieron en el lugar equivocado en el momento equivocado. La vigilancia espiritual no consiste en resistir la tentación en su punto más agudo; consiste en no permitirse llegar a ese punto. La integridad se construye o se destruye en los momentos que nadie más ve.",
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Ezra Taft Benson",
        fuente: "«Cuidaos del orgullo», Liahona, julio de 1989 — https://www.churchofjesuschrist.org/study/general-conference/1989/04/beware-of-pride?lang=spa",
        texto:
          "Salomón comenzó con una petición extraordinaria —corazón entendido para servir— y terminó con un corazón dividido. El orgullo de la prosperidad es uno de los peligros más grandes: cuando todo va bien, es fácil olvidar al Señor. La historia de Salomón es la advertencia más elocuente de la Escritura contra pensar que nuestra posición, riqueza o sabiduría nos protegen de la apostasía.",
      },
      {
        tipo: "conclusion",
        contenido:
          "Las historias paralelas de David y Salomón ofrecen lecciones complementarias sobre la fragilidad del alma humana. David cayó en un momento de comodidad e inactividad. Salomón cayó por compromisos graduales con lo que Dios había prohibido. Ninguno fue destruido de un instante; ambos se alejaron paso a paso. El arrepentimiento de David —genuino, inmediato y sin excusas— y la petición de Salomón de un corazón que sepa servir son los modelos positivos que debemos imitar. Sus caídas son los espejos que debemos consultar con honestidad.",
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "La caída de David comenzó estando en el lugar equivocado en el momento equivocado. ¿Qué entornos o momentos en tu vida te ponen en riesgo similar?",
          "David dijo simplemente 'Pequé contra el Señor' sin excusas. ¿Qué te facilita o dificulta ese tipo de arrepentimiento honesto y directo?",
          "Salomón pidió la capacidad de servir mejor y el Señor añadió todo lo demás. ¿Tus oraciones actuales buscan primero ser mejor para servir, o principalmente recibir lo que necesitas?",
          "Salomón cayó gradualmente. ¿Qué compromisos graduales con el mundo en tu propia vida podrían estar inclinando tu corazón en la dirección equivocada?",
          "¿Qué puedes hacer esta semana para fortalecer tu vigilancia espiritual en los momentos cotidianos donde nadie más te ve?",
        ],
      },
    ],
    questions: [],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LECCIÓN 25 — 1 Reyes 12–13; 17–22
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "r301-l25",
    title: "Lección 25: Elías el Profeta: fe, milagros y la voz apacible y delicada",
    description: "1 Reyes 12–13; 17–22. Elías bendice a una viuda, hace descender fuego del cielo y oye al Señor en una voz apacible y delicada.",
    type: "Religión 301",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/old-testament-institute-teacher-manual-2026/25-1-kings-12-13-17-22?lang=spa",
    secciones: [
      {
        tipo: "contexto",
        contenido:
          "Tras la división del reino y la apostasía generalizada del norte bajo Jeroboam, el Señor levantó al profeta Elías en uno de los ministerios más espectaculares del Antiguo Testamento. Frente a un rey corrupto, una reina implacable y un pueblo que claudicaba entre dos pensamientos, Elías apareció con autoridad y poder. La viuda de Sarepta recibió el milagro de la harina y el aceite después de dar lo último que tenía —fe que actúa primero y recibe después. En el monte Carmelo, el fuego del Señor consumió el sacrificio empapado y respondió la pregunta decisiva: ¿quién es verdaderamente Dios? Pero la escena más reveladora no es ese triunfo espectacular, sino lo que ocurrió después: agotado, solo y huyendo bajo un árbol en el desierto, el Señor no le envió un nuevo milagro sino pan, agua y descanso. Luego, en la quietud después del viento, el terremoto y el fuego, le habló en una voz apacible y delicada. Elías representa el poder del sacerdocio restaurado en estos últimos días, apareciendo a José Smith y Oliver Cowdery en el Templo de Kirtland en 1836, cumpliendo la profecía de Malaquías 4:5–6.",
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "1 Reyes 17:13–14, 16",
            texto:
              "Elías le dijo: No tengas temor; ve, haz como has dicho; pero hazme a mí primero de ello una pequeña torta cocida debajo de la ceniza, y tráemela; y después harás para ti y para tu hijo. Porque el Señor Dios de Israel ha dicho así: La harina de la tinaja no escaseará, ni el aceite de la vasija disminuirá, hasta el día en que el Señor haga llover sobre la faz de la tierra… Y la harina de la tinaja no escaseó, ni el aceite de la vasija mengüó, conforme a la palabra del Señor.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/17?lang=spa&id=p13-p14,p16#p13",
          },
          {
            referencia: "1 Reyes 18:21, 36–38",
            texto:
              "Y acercándose Elías a todo el pueblo, dijo: ¿Hasta cuándo claudicaréis vosotros entre dos pensamientos? Si el Señor es Dios, seguidle; y si Baal, id en pos de él… Y a la hora del sacrificio de la tarde, se acercó el profeta Elías y dijo: Señor Dios de Abraham, de Isaac y de Israel, sea hoy manifiesto que tú eres Dios en Israel… Entonces cayó fuego del Señor, y consumió el holocausto, la leña, las piedras y el polvo, y aun lamió el agua que estaba en la zanja.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/18?lang=spa&id=p21,p36-p38#p21",
          },
          {
            referencia: "1 Reyes 19:11–12",
            texto:
              "Y él le dijo: Sal fuera, y ponte en el monte delante del Señor. Y he aquí el Señor que pasaba, y un grande y poderoso viento que rompía los montes, y quebraba las peñas delante del Señor; pero el Señor no estaba en el viento. Y tras el viento un terremoto; pero el Señor no estaba en el terremoto. Y tras el terremoto un fuego; pero el Señor no estaba en el fuego. Y tras el fuego una voz apacible y delicada.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/19?lang=spa&id=p11-p12#p11",
          },
        ],
      },
      {
        tipo: "enseñanza",
        autor: "Élder David A. Bednar",
        fuente: "«Recibir el Espíritu Santo», Liahona, noviembre de 2010 — https://www.churchofjesuschrist.org/study/general-conference/2010/10/receive-the-holy-ghost?lang=spa",
        texto:
          "El Señor no estaba en el viento, ni en el terremoto, ni en el fuego. Estaba en la voz apacible y delicada. En nuestro mundo saturado de ruido e información, la revelación personal raramente llega de forma espectacular. Llega en momentos de quietud, en el estudio intencional de las Escrituras, en la oración sincera y en los pensamientos sutiles que iluminan la mente y ablandan el corazón.",
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "«Revelación para la Iglesia, revelación para nuestras vidas», Liahona, mayo de 2018 — https://www.churchofjesuschrist.org/study/general-conference/2018/04/revelation-for-the-church-revelation-for-our-lives?lang=spa",
        texto:
          "En este mundo ruidoso y agitado, necesitamos más que nunca crear espacios de quietud donde el Espíritu pueda hablar. Como Elías bajo el árbol, a veces el Señor nos da primero descanso y sustento antes de darnos dirección. Y cuando habla, lo hace en una voz que solo se oye cuando nos tomamos el tiempo de escuchar.",
      },
      {
        tipo: "conclusion",
        contenido:
          "El ministerio de Elías nos enseña que el Señor se manifiesta de maneras que frecuentemente desafían nuestras expectativas. Esperamos fuego y recibimos una voz suave. Esperamos grandeza y recibimos pan y agua para el camino. La pregunta '¿hasta cuándo claudicaréis entre dos pensamientos?' sigue resonando en nuestra época: el Señor no acepta un corazón dividido entre Él y el mundo. Y la voz apacible y delicada sigue siendo el medio principal por el que habla, no en los fenómenos que dominan la atención del mundo, sino en la quietud que cada discípulo crea deliberadamente. Elías, que restauró las llaves del sacerdocio en estos últimos días, nos invita a preparar nuestros corazones para escuchar esa voz.",
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "La viuda de Sarepta dio su última harina antes de recibir la promesa de que habría más. ¿Hay algún área en tu vida donde el Señor te pide actuar en fe antes de ver la bendición prometida?",
          "Elías preguntó '¿hasta cuándo claudicaréis entre dos pensamientos?' ¿Hay algún área de tu vida donde todavía estás dividido entre el Señor y algo que el mundo ofrece?",
          "El Señor habló a Elías en la voz apacible y delicada, no en el espectáculo. ¿Con qué frecuencia y de qué manera creas condiciones de silencio interior para escuchar esa voz?",
          "Después del mayor triunfo de su ministerio, Elías cayó en el agotamiento y el desánimo. ¿Cómo te cuidas espiritualmente después de grandes esfuerzos para no caer en ese mismo patrón?",
          "¿Qué cambio concreto harías en tu rutina semanal para crear más espacio donde el Señor pueda hablarte en esa voz apacible y delicada?",
        ],
      },
    ],
    questions: [],
  },

];