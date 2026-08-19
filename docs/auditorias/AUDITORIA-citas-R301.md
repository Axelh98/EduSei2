# Auditoría de citas — Religión 301 (Antiguo Testamento, Instituto)

Registro de la revisión de las citas de líderes de la Iglesia del curso `religion-301`.
Mismo criterio que [DyC-1](AUDITORIA-citas-DyC1.md), [R250](AUDITORIA-citas-R250.md) y
[Libro de Mormón](AUDITORIA-citas-libro-de-mormon.md): cada cita se verifica contra la
fuente original en `churchofjesuschrist.org`.

**Estado: grupo de riesgo cerrado.** Las **20 citas que no tenían `link`** están
verificadas y corregidas. Las 30 que ya traían `link` siguen sin revisar una por una.

---

## Panorama del curso

| | Al empezar | Ahora |
|---|---:|---:|
| Total de citas de líderes | 50 | 50 |
| Con `link` a churchofjesuschrist.org | 30 | **50** |
| **Sin `link`** (perfil de riesgo) | **20** | **0** |
| Citas con banderas del detector | 20 | **0** |

Las 20 sin `link` estaban concentradas en las **lecciones 1 a 10**, dos por lección,
en bloques `cita` dentro de las secciones `resumen`.

## El resultado: 20 de 20 inválidas

**Ninguna de las 20 fuentes declaradas se sostuvo.** Es el peor resultado de todos
los cursos auditados hasta ahora — peor incluso que DyC-1, donde 7 de 49 eran textuales.

| | Citas |
|---|---:|
| Textuales y correctas (solo faltaba `link`) | **0** |
| Fuente real, pero el texto no aparece en ella | 2 |
| Documento real, atribuido a la persona equivocada | 1 |
| **El discurso citado no existe** (el autor nunca dio ese discurso en esa fecha) | **17** |

### Por qué el predictor de la `fuente` falló acá

En DyC-1 la regla fue: «si la `fuente` no nombra el discurso, la cita no es de fiar».
En Religión 301 **las 20 traían título de discurso** y aun así las 20 eran inválidas.

La diferencia: en DyC-1 los títulos ausentes marcaban citas *sin rastro*; acá los
títulos están **inventados con forma verosímil** — «Esperemos el poder del sacerdocio
de Dios», «El fiel en el tiempo correcto», «Días de sol, días de lluvia», «La Caída y
Sus Bendiciones». Suenan a discurso de conferencia y llevan revista, mes, año y página,
pero ninguno figura en el índice de esa conferencia.

**Corolario para lo que queda del corpus: tener título en la `fuente` no basta.
Lo que hay que verificar es el índice de la conferencia o del número de la revista.**

### Segunda señal: el «vosotros»

Las 20 citas usaban formas de **vosotros** («Nacisteis», «fuisteis reservados», «os
conocía», «pudiérais», «Confiad», «recordad»). El material oficial de la Iglesia en
español usa **«ustedes»** en Liahona y conferencia general; el «vosotros» solo aparece
en las Escrituras. Igual que el voseo en DyC-1, fue un indicio directo de reescritura.

`scripts/extract-citas.ts` detecta voseo pero **no** vosotros. Vale la pena agregarlo.

---

## El método

Cada lección trae en `_manifest.json` un `chapterUrl` que apunta a su página del
**Manual del maestro de Instituto del Antiguo Testamento 2026** en español, y la
numeración del curso coincide con la del manual. Se abrieron las 10 páginas y se
leyeron las citas que el manual realmente usa —con autor, texto literal y referencia
completa— y después se verificó cada fuente declarada contra el índice de su
conferencia o número de revista.

Los 20 reemplazos salen **todos del manual oficial de la lección correspondiente**,
lo que además alinea el curso con el material que el maestro tiene delante.

---

## Verificación de las 20 fuentes declaradas

| # | Lección | Fuente declarada | Qué se encontró |
|---|---|---|---|
| 1 | `r301-l01` | Nelson, «Esperemos el poder del sacerdocio de Dios», *Liahona* mayo 2016, pág. 68 | ❌ No existe. En abril de 2016 Nelson dio **«El precio del poder del sacerdocio»** |
| 2 | `r301-l01` | Maxwell, «El fiel en el tiempo correcto», *Ensign* nov. 1986, pág. 21 | ❌ No existe. En octubre de 1986 Maxwell dio **«God Will Yet Reveal»** |
| 3 | `r301-l02` | Holland, «El Cristo Viviente», 2000 | ❌ Atribución falsa: **«El Cristo Viviente» lo firman la Primera Presidencia y el Cuórum de los Doce**, no Holland. El texto sí es casi el del documento |
| 4 | `r301-l02` | Uchtdorf, «Sobre el don y el poder de Dios para crecer», *Liahona* nov. 2008, pág. 22 | ❌ No existe. En octubre de 2008 Uchtdorf dio **«El poder infinito de la esperanza»**, «Impulsen desde donde estén» y «La felicidad es su legado» |
| 5 | `r301-l03` | Oaks, «La Caída y Sus Bendiciones», *Liahona* nov. 1993, pág. 73 | ❌ No existe. En octubre de 1993 Oaks dio **«El gran plan de felicidad»** |
| 6 | `r301-l03` | Brigham Young, *Discursos de Brigham Young*, 1954, pág. 103 | ❌ No verificable; el texto no corresponde a ninguna enseñanza documentada de esa página |
| 7 | `r301-l04` | Holland, «Perseverad hasta el fin», *Liahona* mayo 2010, pág. 101 | ❌ No existe. En abril de 2010 Holland dio **«No hay lugar para el enemigo de mi alma»** |
| 8 | `r301-l04` | Monson, «El deber llama», *Liahona* nov. 2013, pág. 67 | ❌ No existe en esa conferencia. Monson dio 5 discursos en octubre de 2013 y ninguno lleva ese título |
| 9 | `r301-l05` | Maxwell, «Llora el Dios del cielo», *Liahona* nov. 1987, pág. 31 | ❌ No existe. En octubre de 1987 Maxwell dio **«Yet Thou Art There»** |
| 10 | `r301-l05` | Hinckley, «Sion en aumento», *Liahona* julio 2000, pág. 22 | ❌ No figura en ese número |
| 11 | `r301-l06` | Uchtdorf, «El orgullo y el sacerdocio», *Liahona* nov. 2010, pág. 56 | ⚠️ **El discurso sí existe** (octubre de 2010), pero **no menciona la Torre de Babel** ni define el orgullo como «la enfermedad universal del alma humana». Lo que dice es que Benson lo llamó «el pecado universal» y que es «el gran pecado de elevarse a uno mismo» |
| 12 | `r301-l06` | Christofferson, «El poder renovador del arrepentimiento», *Liahona* mayo 2016, pág. 59 | ❌ No existe. En abril de 2016 Christofferson dio **«Padres»** |
| 13 | `r301-l07` | Nelson, «Las promesas hechas a los padres», *Liahona* oct. 1995, pág. 17 | ❌ No figura como discurso de Nelson en ese número |
| 14 | `r301-l07` | Holland, «El Dios de Abraham, Isaac y Jacob», Devocional del Centro de Visitantes de Nauvoo, 2002 | ❌ No existe registro de ese devocional |
| 15 | `r301-l08` | Holland, «Su Padre y Vuestro Padre, Su Dios y Vuestro Dios», Devocional BYU, enero 2003 | ❌ No figura en el archivo de BYU Speeches |
| 16 | `r301-l08` | Hinckley, «Confianza en el Señor», *Liahona* nov. 1994, pág. 88 | ❌ No existe. En octubre de 1994 Hinckley dio **«Don't Drop the Ball»** y **«Save the Children»** |
| 17 | `r301-l09` | Benson, «El gran mandamiento: Amar al Señor», *Liahona* mayo 1988, pág. 4 | ⚠️ **El discurso sí existe** («The Great Commandment—Love the Lord», abril de 1988, pág. 4 — la referencia es exacta), pero **no menciona a Esaú ni la primogenitura** |
| 18 | `r301-l09` | Bednar, «La escalera de Jacob», Devocional BYU–Idaho, enero 2009 | ❌ No existe. El devocional de Bednar en BYU–Idaho de 2009 fue **«Things as They Really Are»** (3 de mayo) |
| 19 | `r301-l10` | Wirthlin, «Días de sol, días de lluvia», *Liahona* nov. 2008, pág. 26 | ❌ No existe. En octubre de 2008 Wirthlin dio **«Venga lo que venga, disfrútalo»** |
| 20 | `r301-l10` | Faust, «La historia de José», *Liahona* marzo 2008, pág. 2 | ❌ No figura en ese número. **James E. Faust murió en agosto de 2007** |

---

## Las 20 correcciones aplicadas

Todas las citas de reemplazo salen del manual oficial de la lección. **Cambia el autor
en 18 de las 20** (las excepciones son la #11→#12 y la #13, donde el autor original ya
estaba bien pero el discurso no).

### `r301-l01` — Las visiones sagradas de Moisés y Abraham

**1. Presidente Russell M. Nelson** — «Decisiones para la eternidad», Devocional mundial para jóvenes adultos, 15 de mayo de 2022.
> «Ustedes son literalmente hijos procreados como espíritus de Dios. Ustedes han cantado esta verdad desde que aprendieron las palabras del himno "Soy un hijo de Dios". Pero ¿ha llegado esa verdad a grabarse en su corazón?»

`https://www.churchofjesuschrist.org/study/broadcasts/worldwide-devotional-for-young-adults/2022/05/12nelson?lang=spa`

**2. Élder Steven R. Bangerter** — «Preordenados para servir», Conferencia General, abril de 2024 (*Liahona*, mayo de 2024, pág. 57). **Cambia el autor** (era Maxwell).
> «Antes de nacer, Dios los designó a cada uno de ustedes para cumplir misiones específicas durante su vida terrenal.»

`https://www.churchofjesuschrist.org/study/general-conference/2024/04/32bangerter?lang=spa`

### `r301-l02` — Jesucristo creó la tierra bajo la dirección del Padre

**3. La Primera Presidencia y el Cuórum de los Doce Apóstoles** — «El Cristo Viviente: El testimonio de los Apóstoles», 1 de enero de 2000. **Cambia el autor** (se atribuía a Holland).
> «Él fue el Gran Jehová del Antiguo Testamento y el Mesías del Nuevo Testamento. Bajo la dirección de Su Padre, Él fue el Creador de la tierra. "Todas las cosas por medio de él fueron hechas, y sin él nada de lo que ha sido hecho fue hecho" (Juan 1:3).»

`https://www.churchofjesuschrist.org/study/scriptures/the-living-christ-the-testimony-of-the-apostles?lang=spa`

**4. La Primera Presidencia y el Consejo de los Doce Apóstoles** — «La Familia: Una Proclamación para el Mundo», 23 de septiembre de 1995. **Cambia el autor** (era Uchtdorf). El manual de esta lección usa la Proclamación para exactamente esta idea.
> «Todos los seres humanos, hombres y mujeres, son creados a la imagen de Dios. Cada uno es un amado hijo o hija procreado como espíritu por padres celestiales y, como tal, cada uno tiene una naturaleza y un destino divinos.»

`https://www.churchofjesuschrist.org/study/scriptures/the-family-a-proclamation-to-the-world/the-family-a-proclamation-to-the-world?lang=spa`

### `r301-l03` — La Caída fue parte fundamental del plan de Dios

**5. Élder D. Todd Christofferson** — «El porqué del matrimonio, el porqué de la familia», Conferencia General, abril de 2015 (*Liahona*, mayo de 2015, pág. 51). **Cambia el autor** (era Oaks).
> «Adán y Eva actuaron a favor de todos los que habían elegido participar en el gran plan de felicidad del Padre. Su caída creó las condiciones necesarias para nuestro nacimiento físico, para tener la experiencia terrenal y aprender, mientras estábamos alejados de la presencia de Dios…»

`https://www.churchofjesuschrist.org/study/general-conference/2015/04/why-marriage-why-family?lang=spa`

**6. Presidente Ezra Taft Benson** — «El Libro de Mormón y Doctrina y Convenios», *Liahona*, enero de 2005, pág. 11. **Cambia el autor** (era Brigham Young).
> «De la misma manera que un hombre realmente no desea comida hasta que tiene hambre, del mismo modo no desea la salvación de Cristo sino hasta que comprende la razón por la que necesita a Cristo…»

`https://www.churchofjesuschrist.org/study/liahona/2005/01/the-book-of-mormon-and-the-doctrine-and-covenants?lang=spa`

### `r301-l04` — Enoc fue llamado y facultado por Dios

**7. Presidente Dieter F. Uchtdorf** — «¿Por qué necesitamos profetas?», *Liahona*, marzo de 2012, pág. 4. **Cambia el autor** (era Holland). Es la única cita de líder que usa el manual en esta lección.
> «Dios ama a todos Sus hijos y por esa razón nos exhorta tan fervientemente mediante Sus profetas. Así como nosotros queremos lo mejor para nuestros seres queridos, nuestro Padre Celestial desea lo mejor para nosotros.»

`https://www.churchofjesuschrist.org/study/liahona/2012/03/why-do-we-need-prophets?lang=spa`

**8. Presidente Thomas S. Monson** — «Llamados a servir», Conferencia General, abril de 1996. **Se conserva el autor**; era el título y la fecha lo que estaba mal.
> «Quizás muchos de ustedes sean tímidos por naturaleza o se consideren inadecuados para aceptar un llamamiento. Pero recuerden que esta obra no es de nosotros solamente; es la obra del Señor… Recuerden que a quien el Señor llama, el Señor prepara y capacita.»

`https://www.churchofjesuschrist.org/study/general-conference/1996/04/duty-calls?lang=spa`

### `r301-l05` — Enoc y el pueblo de Sion

**9. Élder Jeffrey R. Holland** — «La grandiosidad de Dios», Conferencia General, octubre de 2003 (*Liahona*, noviembre de 2003, págs. 71–72). **Cambia el autor** (era Maxwell).
> «Este día doy mi testimonio personal de un Dios personal y viviente que conoce nuestro nombre, escucha y contesta oraciones y nos ama eternamente como hijos de Su espíritu.»

`https://www.churchofjesuschrist.org/study/general-conference/2003/10/the-grandeur-of-god?lang=spa`

**10. Élder D. Todd Christofferson** — «A Sion venid», Conferencia General, octubre de 2008 (*Liahona*, noviembre de 2008, pág. 38). **Cambia el autor** (era Hinckley).
> «Sion es Sion debido al carácter, los atributos y la fidelidad de sus habitantes […]. Si queremos establecer Sion […], será preciso: (1) que lleguemos a [estar] unidos en corazón y voluntad; (2) que individual y colectivamente lleguemos a ser un pueblo santo; y (3) que cuidemos de los pobres y los necesitados con tal eficacia que eliminemos la pobreza de entre nosotros.»

`https://www.churchofjesuschrist.org/study/general-conference/2008/10/come-to-zion?lang=spa`

### `r301-l06` — El Diluvio y la Torre de Babel

**11. Élder D. Todd Christofferson** — «Enterrar nuestras armas de rebelión», Conferencia General, octubre de 2024 (*Liahona*, noviembre de 2024, pág. 28). **Cambia el autor** (era Uchtdorf). Es la cita del manual que sí menciona la Torre de Babel.
> «No existe un "a mi manera" si hemos de seguir el ejemplo de Cristo. Tratar de encontrar un rumbo distinto hacia el cielo resulta tan inútil como trabajar en la Torre de Babel en lugar de mirar hacia Cristo y Su Salvación.»

`https://www.churchofjesuschrist.org/study/general-conference/2024/10/21christofferson?lang=spa`

**12. Élder Patrick Kearon** — «La intención de Dios es llevarlos a casa», Conferencia General, abril de 2024 (*Liahona*, mayo de 2024, págs. 87–88). **Cambia el autor** (era Christofferson).
> «Dios los busca de manera incesante. Él "quiere que todos Sus hijos elijan regresar a Él" y emplea toda medida posible para llevarlos de regreso.»

`https://www.churchofjesuschrist.org/study/general-conference/2024/04/45kearon?lang=spa`

### `r301-l07` — Los tratos de Dios con Abraham y su familia

**13. Élder Russell M. Nelson** — «El recogimiento del Israel disperso», Conferencia General, octubre de 2006 (*Liahona*, noviembre de 2006, pág. 80). **Se conserva el autor**; el discurso citado no existía.
> «Para nosotros, el honrado nombre de Abraham es importante. Este se menciona en más versículos de las Escrituras de la Restauración que en todos los versículos de la Biblia. Todos los miembros de La Iglesia de Jesucristo de los Santos de los Últimos Días están vinculados con Abraham.»

`https://www.churchofjesuschrist.org/study/general-conference/2006/10/the-gathering-of-scattered-israel?lang=spa`

**14. Élder Dieter F. Uchtdorf** — «Un gozo más elevado», Conferencia General, abril de 2024 (*Liahona*, mayo de 2024, pág. 68). **Cambia el autor** (era Holland).
> «Jesús enseñó: "Buscad, y hallaréis" [Mateo 7:7]. Creo que esta simple frase no es solo una promesa espiritual, sino la declaración de un hecho […]. Rara vez encontramos algo que no buscamos.»

`https://www.churchofjesuschrist.org/study/general-conference/2024/04/35uchtdorf?lang=spa`

### `r301-l08` — La obediencia de Abraham

**15. Hermana J. Anette Dennis** — «Vestíos del Señor Jesucristo», Conferencia General, abril de 2024 (*Liahona*, mayo de 2024, pág. 10). **Cambia el autor** (era Holland).
> «Cuando Dios el Padre ofreció a Su Hijo Unigénito como sacrificio por nosotros, Jesucristo mismo llegó a ser el máximo símbolo del imperecedero amor de nuestro Padre Celestial por cada uno de nosotros.»

`https://www.churchofjesuschrist.org/study/general-conference/2024/04/14dennis?lang=spa`

**16. Élder Gerrit W. Gong** — «Lugar en el mesón», Conferencia General, abril de 2021 (*Liahona*, mayo de 2021, págs. 26–27). **Cambia el autor** (era Hinckley). Reemplaza la idea de Abraham y Sara esperando décadas.
> «En esta vida, a veces esperamos en el Señor. Puede que todavía no estemos donde esperamos o queremos estar en el futuro. Una hermana devota dice: "Esperar fielmente en el Señor para recibir Sus bendiciones es una posición santa…". Mientras tanto, vivimos ahora, sin esperar a que comience la vida.»

`https://www.churchofjesuschrist.org/study/general-conference/2021/04/16gong?lang=spa`

### `r301-l09` — Isaac, Jacob y Rebeca

**17. Hermano Bradley R. Wilcox** — «Oh, jóvenes herederos de la noble primogenitura», Conferencia General, octubre de 2024 (*Liahona*, noviembre de 2024, pág. 95). **Cambia el autor** (era Benson).
> «No vendan su primogenitura por un plato de guisado. No entreguen todo a cambio de nada.»

`https://www.churchofjesuschrist.org/study/general-conference/2024/10/46wilcox?lang=spa`

**18. Presidenta Emily Belle Freeman** — «Caminar con Cristo en una relación por convenio», Conferencia General, octubre de 2023 (*Liahona*, noviembre de 2023, pág. 77). **Cambia el autor** (era Bednar).
> «Jacob debía tomar una decisión. Podía escoger una vida en la que el Dios de su padre fuera simplemente un conocido o vivir comprometido en una relación por convenio con Él.»

`https://www.churchofjesuschrist.org/study/general-conference/2023/10/42freeman?lang=spa`

### `r301-l10` — José en Egipto

**19. Élder Ronald A. Rasband** — «Por designio divino», Conferencia General, octubre de 2017 (*Liahona*, noviembre de 2017, pág. 57). **Cambia el autor** (era Wirthlin).
> «La mano del Señor los guía. Por "designio divino", Él se ocupa de los pequeños detalles de su vida, así como de los sucesos importantes.»

`https://www.churchofjesuschrist.org/study/general-conference/2017/10/by-divine-design?lang=spa`

**20. Obispo W. Christopher Waddell** — «Había pan», Conferencia General, octubre de 2020 (*Liahona*, noviembre de 2020, pág. 43). **Cambia el autor** (era Faust).
> «Hoy en día, somos bendecidos al ser guiados por profetas que comprenden la necesidad de que nos preparemos para las calamidades "que sobrevendr[án]"… El Señor no espera que hagamos más de lo que podemos, pero sí espera que hagamos lo que podemos hacer, cuando podamos hacerlo.»

`https://www.churchofjesuschrist.org/study/general-conference/2020/10/25waddell?lang=spa`

---

## Qué falta en este curso

- [ ] **Las 30 citas que ya traían `link`.** No se revisaron una por una. Dado que
      acá el grupo sin link salió 20/20 inválido —peor que en cualquier otro curso—,
      conviene no dar por sano al otro grupo sin mirarlo.
- [ ] **Lecciones 26–30**, que existen en git pero nunca entraron a la app
      (ver `docs/ESTADO.md`). Si se incorporan, sus citas entran al alcance.

## Cómo continuar

```bash
npx tsx scripts/extract-citas.ts religion-301        # panorama
npx tsx scripts/extract-citas.ts --json religion-301 # con banderas
npx tsx scripts/validate-content.ts                  # tras cada corrección
```

Las correcciones se aplican en `lib/content/religion-301/<lessonId>.json`, en los
campos `autor`, `fuente`, `texto` y `link` de los bloques `cita` dentro de las
secciones `resumen`.
