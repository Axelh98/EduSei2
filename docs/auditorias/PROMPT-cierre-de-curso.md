# Prompt para cerrar un curso entero

Sucesor de `PROMPT-generacion-doctrinal.md`, que servía para una tanda de 5 lecciones. Este sirve
para **llevar un curso completo a 100 % en todos los frentes**, y recoge lo que se aprendió
cerrando `libro-de-mormon-1` el 7-sep-2026 (de 74 % a 100 % en las tres columnas doctrinales más
cuatro frentes de contenido, en 15 lotes).

Copiá todo lo que está debajo de la línea en una sesión nueva. Está escrito para
`libro-de-mormon-2`; si vas a otro curso, cambiá el nombre y volvé a medir, porque **los números de
abajo son de este curso y no valen para otro**.

---

Vamos a cerrar el curso `libro-de-mormon-2` de AulaSei: llevarlo a 100 % en todos los frentes
medibles. Trabajamos por bloques, y al final de cada bloque me das una tabla con las tareas
pendientes y el porcentaje corregido.

## Antes de escribir una sola línea

1. Invocá `/seminary-enrichment` y `/seminary-audit` y leelas enteras.
2. Leé `docs/auditorias/BITACORA-generacion-doctrinal.md` (línea de base del proyecto; **es de solo
   lectura para vos**) y `docs/auditorias/CICLO-GENERACION-AUDITORIA.md` (el catálogo de defectos).
3. Leé `docs/auditorias/BITACORA-libro-de-mormon-1.md`. Es el caso más completo que hay: tiene el
   orden de trabajo, los defectos nuevos que aparecieron y las tres veces que un chequeo mío falló.
4. Este curso tiene auditorías previas: `CALIDAD-libro-de-mormon-2.md`,
   `CALIDAD-contexto-libro-de-mormon-2.md` y `COMPLETITUD-libro-de-mormon-2.md`. **Leelas, pero no
   confíes en sus números**: son de agosto/septiembre de 2026 y parte del curso se reconstruyó
   después. Por ejemplo, la fila 18 del catálogo dice «47 de 78 lecciones con `contexto`
   enciclopédico, mediana de 82 palabras»; hoy solo 7 lecciones tienen menos de 150 palabras.
   **Medí vos.**
5. Tu registro va en `docs/auditorias/BITACORA-libro-de-mormon-2.md`, un archivo tuyo. Nunca
   escribas en la bitácora compartida.

> **Puede haber otra sesión trabajando en paralelo sobre otro curso.** Por eso: no toques ningún
> archivo fuera de `lib/content/libro-de-mormon-2/` (salvo tu propia bitácora), no corras
> `build-search-index.ts` ni `regen-content-map.ts`, y no hagas `git commit`, `git checkout` ni
> `git stash`. El árbol de trabajo es compartido.

## Paso 1 — medir todo de una vez, por lección

No midas frente por frente: **medí todo junto y agrupá por lección**, porque muchas lecciones
necesitan dos o tres arreglos a la vez y conviene abrir cada archivo una sola vez. En
`libro-de-mormon-1` eso fue la diferencia entre 38 aperturas de archivo y 17.

```bash
npx tsx scripts/audit-doctrinal.ts libro-de-mormon-2
npx tsx scripts/audit-doctrinal.ts libro-de-mormon-2 --detalle
npx tsx scripts/audit-completitud.ts libro-de-mormon-2
npx tsx scripts/audit-distribucion-respuestas.ts libro-de-mormon-2
npx tsx scripts/audit-chapterurls.ts libro-de-mormon-2
```

Y este inventario por lección, que cruza los frentes que ningún script cubre junto:

```js
// node -e '...' desde la raíz del repo
const fs=require('fs');const DIR='lib/content/libro-de-mormon-2/';
const RUIDO=[/La Iglesia de Jesucristo de los Santos de los [ÚU]ltimos D[ií]as/gi,/Iglesia de Jesucristo/gi];
const NOMBRE=/Jesucristo|Salvador|Redentor|el Se[ñn]or Jesús|\bCristo\b|\bJesús\b/i;
const SUST=/expiaci[óo]n|expiatorio|sacrificio|redimir|redenci[óo]n|redentor|gracia|misericordia|perdón|perdona|sana|sanar|sanidad|resurrecci[óo]n|resucit|Su ejemplo|Su amor|Su poder|Su promesa|prometi[óo]|Su vida|Su ministerio|Cordero de Dios|Abogado|Luz del mundo|Pan de vida|Buen Pastor|Su nombre|venir a [ÉE]l|semejante[s]? a [ÉE]l|como [ÉE]l|Su gracia|Su sacrificio|Su disposici[óo]n/i;
const TIT=/^(?:elder|élder|presidente|presidenta|hermana|hermano|obispo|profeta|el|la|de|del|en|y|que|su)$/i;
const tok=a=>String(a||'').split(/[\s,]+/).map(t=>t.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ]/g,'')).filter(t=>t.length>2&&/^[A-ZÁÉÍÓÚÑ]/.test(t)&&!TIT.test(t));
const TRAT=/(?:élder|elder|presidente|presidenta|hermana|obispo)\s+((?:[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,}|[A-Z]\.)(?:\s+(?:[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,}|[A-Z]\.)){0,3})/gi;
for(const f of fs.readdirSync(DIR).filter(f=>f.endsWith('.json')&&!f.startsWith('_'))){
  const j=JSON.parse(fs.readFileSync(DIR+f,'utf8'));const q=j.questions||[];
  if(!j.secciones||!j.secciones.length){console.log(f+'  SIN SECCIONES');continue;}
  const g=t=>j.secciones.find(x=>x.tipo===t);
  const lim=x=>RUIDO.reduce((a,re)=>a.replace(re,' '),x||'');
  const ctx=lim(g('contexto')?.contenido),cie=lim(g('conclusion')?.contenido);
  const need=[];
  if(!(NOMBRE.test(ctx)||NOMBRE.test(cie)))need.push('CRISTO');
  if(!SUST.test(ctx+' '+cie))need.push('SUSTANCIA');
  const e=j.secciones.filter(x=>x.tipo==='escrituras').flatMap(x=>x.citas||[]).length;
  if(e<3)need.push('ESCR('+e+')');
  const w=(cie||'').split(/\s+/).length; if(w<80)need.push('CONCL('+w+')');
  const pr=new Set(j.secciones.filter(x=>x.tipo==='enseñanza').flatMap(x=>tok(x.autor)));
  const t=(g('cuestionario')?.preguntas||[]).join(' ')+' '+q.map(x=>x.question+' '+x.options.join(' ')).join(' ');
  let m;TRAT.lastIndex=0;const hu=[];
  while((m=TRAT.exec(t))!==null){const k=tok(m[1]);if(k.length&&!k.some(x=>pr.has(x)))hu.push(k.join(' '));}
  if(hu.length)need.push('HUERF('+[...new Set(hu)].join('/')+')');
  const ml=q.filter(x=>x.options[x.correctAnswer].length===Math.max(...x.options.map(o=>o.length))).length;
  if(ml>2)need.push('QUIZ('+ml+'/'+q.length+')');
  if(need.length)console.log(j.id.padEnd(26)+need.join('  '));
}
```

**Anotá el punto de partida en tu bitácora antes de tocar nada.**

## Punto de partida medido de `libro-de-mormon-2` (7-sep-2026)

80 lecciones, **todas con material** (este curso no tiene frente A, a diferencia de LdM-1).

| Frente | Estado | Pendientes |
|---|---|---:|
| Cristo en contexto o conclusión | 54/80 (68 %) | 26 |
| Dice algo de Él (sustancia) | 45/80 | 35 |
| Pregunta de orar/meditar/anotar | 33/80 (41 %) | 47 |
| Pregunta de escudriñar | 0/80 (0 %) | 80 |
| Al menos 3 escrituras | 39/80 | **41** |
| Conclusión presente y ≥80 palabras | 78/80 | 2 |
| `contexto` de menos de 150 palabras | 73/80 | 7 |
| Líderes huérfanos | 80/80 | **0 — ya está limpio** |
| Quiz en spec 7 × 4 | 80/80 | 0 |
| Sesgo de posición del quiz | 54 % en la posición 1 | ⚠ adivinable |
| La correcta es la más larga | 489/560 (**87 %**) | 489 preguntas |

Dos diferencias con `libro-de-mormon-1` que cambian el plan: **las escrituras faltantes son el
frente grande acá** (41 lecciones, contra 9 en LdM-1), y **los líderes huérfanos ya están en cero**
porque la auditoría de citas de este curso se cerró antes. El sesgo de longitud del quiz es peor
(87 % contra 79 %).

## Orden de trabajo que funcionó

1. **Cola `SIN CRISTO`** en lotes de 5. Es el frente que mueve la columna principal.
2. **Cualquier defecto estructural** que aparezca midiendo (en LdM-1 apareció un corrimiento de
   quiz entre lecciones vecinas). Estos van primero apenas se detectan: son bugs, no estilo.
3. **Sesgo de posición del quiz**, con `audit-distribucion-respuestas.ts --write`. Es mecánico,
   seguro y rápido: rota el array de `options` sin tocar una letra de texto. Pedile permiso al
   usuario porque toca el curso entero.
4. **`orar/meditar/anotar`** y **`escudriñar`**, en lotes de 15–19. Es una pregunta por lección.
5. **Los frentes de contenido restantes** (sustancia, escrituras, conclusiones cortas, huérfanos),
   agrupados por lección.
6. **Quiz «la correcta es la más larga»** al final. Es el más grande y el único sin atajo.

## Lo que hay que saber de los detectores antes de escribir

Esto es lo que más tiempo ahorra. Los tres detectores de `audit-doctrinal.ts` son literales:

- **Escudriñar** cuenta si una pregunta tiene **un verbo de lectura Y una referencia del propio
  bloque `escrituras`** de esa lección, escrita igual (el script compara contra
  `escrituras.citas[].referencia` cortando en el primer guion). Verbos que acepta: `volvé a leer`,
  `releé`, `leé`, `leer`, `buscá en`, `fijate en`, `mirá el versículo`, `en el pasaje`. Rotalos:
  hay cinco formas y alcanzan para no repetir el molde.
- **Orar/meditar/anotar** acepta `orá`, `orar`, `oración`, `meditá…`, `reflexioná`, `anotá…`,
  `escribí…`, `preguntale`, y también cuenta si la pregunta menciona el `Espíritu Santo`,
  `revelación personal` o una `impresión`. ⚠️ **No reconoce `orás` ni `orando`** — y como el corpus
  está en voseo, es fácil escribir una pregunta que parece cumplir y no cumple.
- **Sustancia** y **nombre** son **dos regex distintas**. `NOMBRE` busca Jesucristo/Salvador/
  Redentor/Cristo/Jesús (filtrando «La Iglesia de Jesucristo…»). `SUST` busca vocabulario de lo que
  se dice de Él (expiación, gracia, misericordia, resurrección, «Su ejemplo», «Su poder», «Su
  promesa», «prometió», «Su nombre», «como Él»…). **Una lección puede pasar una y fallar la otra.**

**Escribí un chequeo de salida por lote que use exactamente esas regex** (copiadas del script, no
reescritas a mano) y corré el lote en seco antes de aplicar. En LdM-1 los 15 lotes salieron con
+5 exacto porque el chequeo predecía el resultado.

## Los tres errores que cometí en LdM-1 y que conviene no repetir

1. **Verifiqué solo lo que venía a arreglar.** Al reescribir la conclusión de `jacob-7` para darle
   sustancia, le saqué el nombre de Cristo, y una lección que ya estaba cerrada volvió a la cola.
   **El chequeo de salida tiene que cubrir todo lo que la lección cumplía antes, no solo el frente
   que estás tocando.**
2. **Controlé la muletilla por lote y se me escapó entre lotes.** Escribí 45 preguntas de «orar» en
   tres lotes contando aperturas dentro de cada uno; ninguna se repetía más de 3 veces por lote, y
   al terminar el cruce final encontró 4 pares casi idénticos, 3 escritos por mí en lotes
   distintos. Pasó otra vez en el frente de escudriñar. **El molde se repite entre lotes, que es
   donde no se ve: corré este cruce al final de cada frente**, no solo por lote:

   ```js
   const sig=s=>new Set(s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').match(/[a-z]{5,}/g)||[]);
   // comparar todas las preguntas del mismo rol entre sí; ≥0.60 de solapamiento = revisar
   ```
3. **Le creí a un script sin auditarlo.** `audit-chapterurls.ts` reportó 83 «desalineadas» sobre 91
   en LdM-1: eran **todas** falso positivo, porque el script saca el número de lección del `id`
   (`alma-17` → «17», que es el capítulo) y lo busca como «Lección 17» en una página que no se
   numera así. Lo que sí vale de ese script es la columna **rotas**. Mi propio detector de líderes
   huérfanos también falló dos veces antes de dar el número bueno (27 → 10 → 22): primero cortaba
   el nombre de pila, después `[ÉE]lder` no matcheaba «élder» en minúscula. **Escribile casos de
   prueba a cualquier detector nuevo antes de creerle un número.**

## Reglas de contenido que no se negocian

- **Nunca restituyas texto de Escritura de memoria.** Todo texto nuevo sale de
  `npx tsx scripts/ver-versiculo.ts "<url del capítulo>" <versículos>`. Limpiá el espacio suelto
  antes de la puntuación que deja el HTML del manual: `.replace(/\s+([,;:.])/g,'$1')`.
- **Nunca inventes una cita de líder.** Si no hay una verificable, omití `enseñanza`. Y si tocás
  una cita, revisá `cuestionario` y `questions` para que no quede un autor huérfano.
- **Buscá la vía de Cristo en el manual antes de inventarla.** En LdM-1, en 3 de cada 5 lecciones
  del último lote **el manual ya la traía escrita** y la lección del sitio la había borrado: el
  manual de `jacob-1` se titula «Persuadir a otras personas a venir a Cristo», el de `jacob-5`
  trae una tabla de símbolos que dice «El Señor de la viña → Jesucristo». Bajá el manual con la
  API v3 (no con `web_fetch`) y leé el subtítulo y los encabezados:

  ```
  https://www.churchofjesuschrist.org/study/api/v3/language-pages/type/content?lang=spa&uri=<uri>
  ```

  donde `<uri>` es el `pathname` del `chapterUrl` sin el prefijo `/study`. `audit-chapterurls.ts`
  deja los manuales cacheados en `.cache/chapterurls/`, así que después de correrlo ya los tenés
  en disco sin volver a pedirlos.
- **Para la pregunta de escudriñar, usá el `texto` que ya está guardado en el bloque `escrituras`
  de la lección.** Es material verificado, no exige salir a la red, y te deja escribir una pregunta
  sobre un detalle real del pasaje en vez de una genérica.
- **Manipulá el JSON con un script (`JSON.parse`/`stringify`), no con `Edit` por coincidencia de
  texto.** Los acentos y los guiones largos rompen el matching exacto todo el tiempo.
- Corré `npx tsx scripts/validate-content.ts` al cerrar cada lote.

## Al cerrar cada bloque

1. Corré `validate-content.ts`, `audit-doctrinal.ts` y el inventario por lección.
2. Escribí la fila en tu bitácora **con el número antes y después**. Si el número no se movió, el
   lote no sirvió: entendé por qué antes de abrir el siguiente.
3. Dame la tabla de estado: tarea, valor inicial, valor actual, % corregido, pendientes.

## Qué no hacer

- No commitear. No tocar archivos de otro curso. No ampliar el alcance sin avisar.
- No dar una lección por cerrada sin haber corrido el checklist doctrinal sobre ella.
- No reportar un número que no mediste, y no reportar un número medido por un detector al que no
  le escribiste casos de prueba.
