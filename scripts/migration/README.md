# Scripts de la migración de `lib/data/` a `lib/content/`

Estos scripts convirtieron los archivos `.ts` de `lib/data/` en un JSON por
lección bajo `lib/content/<categoryId>/`, y verificaron que la conversión no
cambiara ni un carácter.

**Ya cumplieron su función y no se pueden correr tal cual**: dependen de
`lib/data/`, que se borró una vez que la verificación pasó en verde. Para
volver a usarlos hay que recuperar esa carpeta del historial:

```bash
git log --oneline -- lib/data          # buscar el último commit que la tenía
git checkout <commit> -- lib/data
```

Para validar el contenido en el día a día no hacen falta: eso lo hace
`scripts/validate-content.ts`, que solo mira `lib/content/`.

| Script | Qué hace |
|---|---|
| `audit-content.ts` | Compara la lección "base" contra la de los archivos de resumen. Fue lo que reveló que el mapa de contenido de `antiguo-testamento-2` apuntaba al archivo del primer semestre. |
| `migrate-content.ts` | Escribe los JSON, los `_manifest.json` y `lib/content/generated-map.ts`. |
| `verify-content.ts` | Compara campo por campo cada JSON contra su lección original. Pasó en verde para las 714 lecciones. |
| `verify-registry.ts` | Compara el catálogo (`lib/content/registry.ts`) contra los datos originales: mismas semanas, títulos y conteos. |
| `original-data.ts` | Reconstruye los datos originales tal como los armaba el `lib/quiz-data.ts` anterior. Lo usan los otros tres. |

`scripts/migration/` está excluido de `tsconfig.json` justamente porque
apunta a archivos que ya no existen.
