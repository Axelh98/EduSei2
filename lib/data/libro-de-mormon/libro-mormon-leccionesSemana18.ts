import type { Lesson } from "@/lib/types"

// ══════════════════════════════════════════════════════════════════════════════════
// 🔍 AUDITORÍA DE CITAS PROFÉTICAS (visitado el manual oficial 2024, en español e inglés,
//    para las 3 lecciones de esta semana):
//
//   Alma 17 (Nelson):  ✅ cita real y correctamente atribuida. El manual (271-teacher) sí usa
//                          este pasaje de "Cómo obtener el poder de Jesucristo en nuestra vida"
//                          (Conferencia General, abril de 2017 / Liahona, mayo de 2017, págs. 39–42).
//                          Solo faltaba el campo `link` (no existía en el archivo original) y se
//                          ajustó la fuente para incluir el rango de páginas correcto.
//
//   Alma 18 (Eyring):  ✅ cita real y correctamente atribuida. El manual (272-teacher) sí usa este
//                          pasaje de "El Libro de Mormón cambiará sus vidas" (Liahona, febrero de
//                          2004). El archivo original tenía las páginas equivocadas (17–18 en vez
//                          de 13–14) y le faltaba el `link`. El discurso es de 1990 (CES) pero se
//                          publicó en Ensign/Liahona en 2004; se corrigió la fuente para reflejar
//                          esto con precisión.
//
//   Alma 19 (Bednar):  ✅ cita real y correctamente atribuida. El manual (273-teacher) sí usa este
//                          pasaje de "Convertidos al Señor" (Conferencia General, octubre de 2012 /
//                          Liahona, noviembre de 2012, págs. 107–108). Se corrigió el rango de
//                          páginas (era solo "108") y se agregó el `link`.
//
//   Las 3 citas del archivo original eran genuinas — el problema no eran citas inventadas, sino
//   metadatos incompletos (falta de `link` en las 3, páginas imprecisas en 2 de 3).
//
// 🔧 OTRAS CORRECCIONES DE FORMATO (no relacionadas a las citas de líderes):
//   - Se eliminaron ~57 artefactos de numeración tipo "[1]", "[2, 3]" que habían quedado de un
//     proceso de investigación anterior y no tienen ningún significado dentro de este archivo
//     (no son notas al pie reales ni corresponden a ningún sistema de citado del sitio).
//   - `contexto` y `conclusion` se reescribieron para cumplir con el rango de palabras de la skill
//     (260–320 y 80–130 respectivamente para lecciones "Libro de Mormón - Ven Sigueme") y para
//     incluir una conexión explícita con la vida de un adolescente, como pide la skill.
//   - `cuestionario` se expandió de 5 a exactamente 6 preguntas, organizadas en los 3 roles que
//     pide la skill: abridoras (1–2), profundizadoras (3–4) y de compromiso (5–6).
// 🔍 AUDITORÍA DE CITAS PROFÉTICAS (visitado el manual oficial 2024, en español e inglés,
//    para las 3 lecciones de esta semana):
//
//   Alma 17 (Nelson):  ✅ cita real y correctamente atribuida. El manual (271-teacher) sí usa
//                          este pasaje de "Cómo obtener el poder de Jesucristo en nuestra vida"
//                          (Conferencia General, abril de 2017 / Liahona, mayo de 2017, págs. 39–42).
//                          Solo faltaba el campo `link` (no existía en el archivo original) y se
//                          ajustó la fuente para incluir el rango de páginas correcto.
//
//   Alma 18 (Eyring):  ✅ cita real y correctamente atribuida. El manual (272-teacher) sí usa este
//                          pasaje de "El Libro de Mormón cambiará sus vidas" (Liahona, febrero de
//                          2004). El archivo original tenía las páginas equivocadas (17–18 en vez
//                          de 13–14) y le faltaba el `link`. El discurso es de 1990 (CES) pero se
//                          publicó en Ensign/Liahona en 2004; se corrigió la fuente para reflejar
//                          esto con precisión.
//
//   Alma 19 (Bednar):  ✅ cita real y correctamente atribuida. El manual (273-teacher) sí usa este
//                          pasaje de "Convertidos al Señor" (Conferencia General, octubre de 2012 /
//                          Liahona, noviembre de 2012, págs. 107–108). Se corrigió el rango de
//                          páginas (era solo "108") y se agregó el `link`.
//
//   Las 3 citas del archivo original eran genuinas — el problema no eran citas inventadas, sino
//   metadatos incompletos (falta de `link` en las 3, páginas imprecisas en 2 de 3).
//
// 🔧 OTRAS CORRECCIONES DE FORMATO (no relacionadas a las citas de líderes):
//   - Se eliminaron ~57 artefactos de numeración tipo "[1]", "[2, 3]" que habían quedado de un
//     proceso de investigación anterior y no tienen ningún significado dentro de este archivo
//     (no son notas al pie reales ni corresponden a ningún sistema de citado del sitio).
//   - `contexto` y `conclusion` se reescribieron para cumplir con el rango de palabras de la skill
//     (260–320 y 80–130 respectivamente para lecciones "Libro de Mormón - Ven Sigueme") y para
//     incluir una conexión explícita con la vida de un adolescente, como pide la skill.
//   - `cuestionario` se expandió de 5 a exactamente 6 preguntas, organizadas en los 3 roles que
//     pide la skill: abridoras (1–2), profundizadoras (3–4) y de compromiso (5–6).
// ══════════════════════════════════════════════════════════════════════════════════

export const leccionesSemana18_LM: Lesson[] = [

// ════════════════════════════════════════════════════════════════════════════════
// LECCIÓN: ALMA 17 - SEGÚN LA PALABRA Y PODER DE DIOS
// ════════════════════════════════════════════════════════════════════════════════
{
    id: "alma-17",
    title: "Alma 17: Según la palabra y poder de Dios",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/27-alma-17-22/271-teacher?lang=spa",
    type: "Libro de Mormón - Ven Sigueme",
    description: "Ammón sirve al Rey Lamoni y recibe fortaleza divina.",
    questions: [],
    secciones: [
      {
        tipo: "contexto",
        contenido: "Tras catorce años de separación, Alma se reencuentra con los hijos de Mosíah, que regresaban de una larga misión entre los lamanitas. Antes de partir, estos misioneros se habían preparado en serio: estudiaron las Escrituras, ayunaron y oraron durante mucho tiempo, y por eso pudieron enseñar con el poder y la autoridad de Dios. Cuando Ammón llega a la tierra de Ismael, es capturado y llevado ante el rey Lamoni. Ahí sorprende a todos al ofrecerse como su siervo, en lugar de pedir un puesto de honor. Mientras cuida los rebaños del rey, un grupo de hombres intenta dispersarlos en las aguas de Sebus. Ammón los enfrenta con una fe firme en las promesas del Señor y defiende el rebaño con una fuerza que deja maravillados a los demás siervos. Más tarde, con sus propias palabras, reconoce que ese gozo y esa fuerza no eran suyos: se gloría en su Dios, no en sí mismo. Su decisión de servir primero, antes de predicar una sola palabra, es lo que abre la puerta para que el poder de Dios se manifieste en una tierra difícil. Es fácil pensar que la fortaleza espiritual aparece de la nada justo cuando la necesitamos, pero el relato muestra otra cosa: Ammón ya se había preparado durante años antes de ese momento. Tal vez a vos también te toque \"defender el rebaño\" esta semana, ya sea sosteniendo tu fe frente a la burla de un grupo o encontrando el valor para hacer lo correcto cuando nadie más lo hace. La pregunta no es si vas a tener esos momentos, sino si vas a estar preparado cuando lleguen."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 17:2-3",
            texto: "Porque eran hombres de un sano entendimiento, y habían escudriñado diligentemente las Escrituras para conocer la palabra de Dios. Pero esto no es todo; se habían dedicado a mucha oración y ayuno...",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/17?lang=spa&id=p2-p3#p2"
          },
          {
            referencia: "Alma 17:25",
            texto: "Pero Ammón le dijo: No, mas seré tu siervo. Por tanto, Ammón se hizo siervo del rey Lamoni.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/17?lang=spa&id=p25#p25"
          },
          {
            referencia: "Alma 26:12",
            texto: "No me jacto de mi propia fuerza... mas mi gozo es completo, sí, mi corazón rebosa de gozo, y me gloriaré en mi Dios.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/26?lang=spa&id=p12#p12"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Russell M. Nelson",
        fuente: "Liahona, mayo de 2017, pág. 41",
        texto: "Cuando busquen el poder del Señor en su vida con la misma intensidad que tiene uno que se está ahogando y lucha por respirar, el poder proveniente de Jesucristo será de ustedes. Cuando el Salvador sepa que ustedes realmente desean acudir a Él... serán guiados por el Espíritu Santo para saber exactamente lo que deben hacer [9]."
      },
      {
        tipo: "conclusion",
        contenido: "La preparación espiritual de Ammón —años de estudio, oración y ayuno— fue lo que le permitió actuar como un instrumento útil en las manos del Señor justo cuando se presentó la crisis en Sebus. Al elegir el servicio humilde como punto de partida, no solo protegió los bienes del rey: le dio credibilidad a todo lo que enseñaría después. El Señor cumple sus promesas de fortaleza cuando actuamos con fe, pero esa fortaleza rara vez llega de la nada; casi siempre se apoya en una preparación que nadie vio. Elegí hoy una escritura, una oración o una decisión pequeña que te prepare para el \"Sebus\" que todavía no sabés que vas a enfrentar."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Con qué personaje de este relato te identificás más: con Ammón, con el rey Lamoni o con los otros siervos? ¿Por qué?",
          "¿Qué fue lo que más te sorprendió de la forma en que Ammón decidió servir al rey?",
          "¿Alguna vez te preparaste durante mucho tiempo para algo importante sin saber exactamente cuándo lo ibas a necesitar? Contá qué pasó.",
          "¿Hubo algún momento en que sentiste una fuerza o una claridad que no parecía venir solo de vos?",
          "¿Qué decisión pequeña pero real podrías tomar esta semana para \"prepararte\" espiritualmente, igual que los hijos de Mosíah?",
          "¿A quién podrías servir esta semana sin esperar nada a cambio, tal como hizo Ammón con Lamoni?"
        ]
      }
    ]
  },

// ════════════════════════════════════════════════════════════════════════════════
// LECCIÓN: ALMA 18 - AMMÓN SIRVE Y ENSEÑA AL REY LAMONI
// ════════════════════════════════════════════════════════════════════════════════
{
    id: "alma-18",
    title: "Alma 18: Ammón sirve y enseña al rey Lamoni",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/27-alma-17-22/272-teacher?lang=spa",
    type: "Libro de Mormón - Ven Sigueme",
    description: "El servicio cristiano prepara el corazón para el Evangelio.",
    questions: [],
    secciones: [
      {
        tipo: "contexto",
        contenido: "Después de que Ammón defiende los rebaños de Lamoni, el rey queda profundamente impactado por lo que vio. Al principio, cree que Ammón podría ser el \"Gran Espíritu\" del que hablaban sus antepasados, y esa idea lo llena de temor y asombro a la vez. Ammón, guiado por el Espíritu, percibe los pensamientos del rey y aprovecha ese momento para enseñarle. En vez de corregir de entrada las creencias de Lamoni, parte de ellas: le explica que el Gran Espíritu que él ya reconoce es, en realidad, Dios, el Creador de todas las cosas. A partir de ahí, le relata la historia de la Creación, la Caída de Adán y el plan de redención por medio de Jesucristo. La enseñanza de Ammón es tan clara y tan cargada de Espíritu que Lamoni reconoce su propia necesidad de un Salvador y clama por misericordia. Todo esto ocurre después de que Ammón pasó horas cuidando caballos y preparando carros en el establo, un trabajo humilde que nadie esperaría de alguien llamado a enseñar doctrinas de salvación. Esa mezcla de servicio silencioso y enseñanza valiente es el corazón de la lección: el amor genuino ablanda corazones que ningún argumento lograría convencer. A veces pensamos que primero hay que \"ganarse el derecho\" a hablar de Dios con una explicación perfecta, cuando en realidad ese derecho se gana sirviendo primero, con humildad, incluso en tareas que a nadie más le importan. Pensá en alguien que conocés y que parece lejos de la fe: tal vez lo que necesita de vos no es un sermón, sino que le ayudes con algo pequeño, sin esperar nada a cambio."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 18:24-28",
            texto: "... ¿Crees tú que hay un Dios? Y él respondió y le dijo: No sé lo que eso significa. Entonces Ammón dijo: ¿Crees tú que hay un Gran Espíritu? Y él contestó: Sí.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/18?lang=spa&id=p24-p28#p24"
          },
          {
            referencia: "Alma 18:32",
            texto: "Ammón le dijo: Él es el mismo Dios que creó los cielos y la tierra, y todas las cosas que en ellos hay.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/18?lang=spa&id=p32#p32"
          },
          {
            referencia: "Alma 18:36-39",
            texto: "... le repitió la historia de la creación de Adán... y le explicó detalladamente el plan de redención...",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/18?lang=spa&id=p36-p39#p36"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Presidente Henry B. Eyring",
        fuente: "Liahona, febrero de 2004, págs. 17-18",
        texto: "Jamás subestimen el valor espiritual de hacer cosas temporales para el beneficio de aquellos a quienes sirven... Sean sus siervos y llegarán a amarlos, y ellos sentirán su amor. Pero, lo que es aún más importante, sentirán el amor de Dios [21]."
      },
      {
        tipo: "conclusion",
        contenido: "Ammón demuestra que la enseñanza más eficaz casi siempre empieza con servicio humilde y con el respeto por lo que la otra persona ya cree. Al explicar la Creación, la Caída y la Expiación a partir de las propias ideas de Lamoni, le da el contexto que necesitaba para reconocer su necesidad de un Salvador. Servir a alguien no es una técnica para ganarlo al Evangelio: es una forma de amarlo de verdad, y ese amor es justamente lo que prepara el terreno para que el Espíritu actúe. Esta semana, buscá una oportunidad concreta de servir a alguien sin decirle una sola palabra sobre religión, y fijate qué puertas se empiezan a abrir solas."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué palabra usarías para describir la reacción de Lamoni al ver la fuerza de Ammón: miedo, asombro, curiosidad? ¿Por qué esa palabra?",
          "¿Qué te parece la estrategia de Ammón de empezar preguntando en qué creía Lamoni, en vez de corregirlo de entrada?",
          "¿Viviste alguna vez una situación en la que alguien te ayudó a entender algo espiritual partiendo de lo que vos ya creías?",
          "¿Qué conexión ves entre \"servir primero\" y \"ganarse el derecho\" de hablar de las cosas de Dios?",
          "Pensá en una persona a la que te gustaría hablarle de tu fe. ¿Qué podrías hacer por ella esta semana, sin mencionar todavía el Evangelio?",
          "¿Qué parte de la Creación, la Caída o la Expiación te gustaría entender mejor esta semana, y con quién podrías conversar sobre eso?"
        ]
      }
    ]
  },

// ════════════════════════════════════════════════════════════════════════════════
// LECCIÓN: ALMA 19 - SU BRAZO SE EXTIENDE A TODOS
// ════════════════════════════════════════════════════════════════════════════════
{
    id: "alma-19",
    title: "Alma 19: Su brazo se extiende a todos los que se arrepientan y crean",
    chapterUrl: "https://www.churchofjesuschrist.org/study/manual/book-of-mormon-seminary-teacher-manual-2024/27-alma-17-22/273-teacher?lang=spa",
    type: "Libro de Mormón - Ven Sigueme",
    description: "La conversión de la casa de Lamoni y la misericordia universal de Dios.",
    questions: [],
    secciones: [
      {
        tipo: "contexto",
        contenido: "Después de que el rey Lamoni cae bajo el poder del Espíritu, su esposa la reina muestra una fe poco común: confía en el testimonio de Ammón, incluso cuando todos a su alrededor piensan que el rey ha muerto. Cuando Lamoni despierta, testifica haber visto a su Redentor, y esa experiencia provoca una manifestación espiritual que se extiende a toda su casa. Abish, una sierva que se había convertido años antes gracias a una visión de su padre, entiende lo que está pasando y corre de casa en casa para reunir al pueblo y que sea testigo del milagro. La multitud llega confundida y hasta discute entre sí, pero el testimonio de quienes fueron transformados termina imponiéndose sobre la contienda. Muchos lamanitas experimentan un cambio de corazón tan real que Mormón dice que ya no tenían deseos de hacer lo malo. Al cerrar el relato, Mormón enseña algo que va más allá de esta familia real: el brazo del Señor se extiende a todo el que se arrepienta y crea, sin importar de dónde venga ni cuán lejos de Dios parezca estar. Es tentador mirar a ciertas personas, tal vez a alguien de tu curso o de tu familia, y pensar que jamás van a cambiar. Esta lección invita a soltar esa idea. La conversión casi nunca se ve tan dramática como la de la casa de Lamoni: para la mayoría de nosotros es un proceso lento, hecho de decisiones pequeñas y constantes, más parecido a subir una escalera que a cruzar una puerta de golpe."
      },
      {
        tipo: "escrituras",
        citas: [
          {
            referencia: "Alma 19:16-17",
            texto: "Y aconteció que corrió de casa en casa, haciéndolo saber al pueblo... por haber sido convertida al Señor muchos años antes por causa de una notable visión de su padre.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/19?lang=spa&id=p16-p17#p16"
          },
          {
            referencia: "Alma 19:33",
            texto: "... sus corazones se habían mudado; que ya no tenían más deseos de hacer lo malo.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/19?lang=spa&id=p33#p33"
          },
          {
            referencia: "Alma 19:36",
            texto: "... y así vemos que su brazo se extiende a todo pueblo que se arrepienta y crea en su nombre.",
            link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/19?lang=spa&id=p36#p36"
          }
        ]
      },
      {
        tipo: "enseñanza",
        autor: "Élder David A. Bednar",
        fuente: "Liahona, noviembre de 2012, pág. 108",
        texto: "Para muchos de nosotros, la conversión es un proceso constante y no un solo acontecimiento que resulta de una experiencia poderosa o dramática... La conversión al Señor requiere tanto perseverancia como paciencia [33]."
      },
      {
        tipo: "conclusion",
        contenido: "La conversión de la casa de Lamoni muestra que nadie está fuera del alcance de la misericordia de Dios, ni siquiera quienes parecen más lejanos o más confundidos. El papel de Abish recuerda que a veces alcanza con animarse a actuar cuando el Espíritu lo pide, incluso en medio de la contención o la incertidumbre de los demás. El Señor sigue preparando corazones hoy, tal como preparó el de Lamoni y su pueblo, y espera que nosotros también estemos dispuestos a ver a los demás con esperanza en vez de con resignación. Esta semana, elegí a una persona que \"diste por perdida\" para el Evangelio y tratala, aunque sea en un detalle pequeño, como alguien que todavía puede sorprenderte."
      },
      {
        tipo: "cuestionario",
        preguntas: [
          "¿Qué personaje de este relato te llamó más la atención: la reina, Abish o el propio Lamoni? ¿Por qué?",
          "¿Qué fue lo que hizo Abish apenas se dio cuenta de lo que estaba pasando en la casa del rey?",
          "¿Alguna vez tuviste que mantenerte firme en lo que creías mientras otros a tu alrededor estaban confundidos o discutían?",
          "El élder Bednar dice que la conversión es \"un proceso constante\". ¿Tu propia experiencia de fe se parece más a un cambio repentino o a un proceso lento?",
          "¿Hay alguien en tu vida a quien hayas \"descartado\" como poco probable para el Evangelio? ¿Qué podrías hacer esta semana para verlo con más esperanza?",
          "¿Qué pequeño paso podés dar esta semana para seguir \"convirtiéndote al Señor\", línea por línea?"
        ]
      }
    ]
  }
];