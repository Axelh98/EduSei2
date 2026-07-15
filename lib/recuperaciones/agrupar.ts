// lib/recuperaciones/agrupar.ts
// Reemplaza el groupby / sort_values de pandas usado en los scripts de Python.
// Los Map conservan el orden de inserción, así que agrupar + ordenar antes
// de agrupar es suficiente para tener grupos ordenados.

export function groupBy<T, K extends string>(arr: T[], keyFn: (item: T) => K): Map<K, T[]> {
  const map = new Map<K, T[]>()
  for (const item of arr) {
    const key = keyFn(item)
    const list = map.get(key)
    if (list) list.push(item)
    else map.set(key, [item])
  }
  return map
}

export function ordenar<T>(arr: T[], comparadores: Array<(a: T, b: T) => number>): T[] {
  return [...arr].sort((a, b) => {
    for (const cmp of comparadores) {
      const r = cmp(a, b)
      if (r !== 0) return r
    }
    return 0
  })
}

export const porTexto =
  <T>(keyFn: (item: T) => string) =>
  (a: T, b: T): number =>
    keyFn(a).localeCompare(keyFn(b), "es")

export const porFecha =
  <T>(keyFn: (item: T) => Date) =>
  (a: T, b: T): number =>
    keyFn(a).getTime() - keyFn(b).getTime()