// lib/supabase-client.ts
// Cliente para uso en el BROWSER — usa la anon key.
// Para operaciones del maestro (autenticado) y para el alumno
// leyendo overrides públicos por ID.

import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}