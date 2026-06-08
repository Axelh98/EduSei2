// app/actions/auth.ts
"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createServerSupabaseClient } from "@/lib/supabase-server"

// ── Login con email/password ──────────────────────────────────
export async function loginWithEmail(formData: FormData) {
  const email    = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { error: "Completá todos los campos." }
  }

  const supabase = await createServerSupabaseClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: "Email o contraseña incorrectos." }
  }

  revalidatePath("/editor")
  redirect("/editor")
}

// ── Magic link (alternativa) ──────────────────────────────────
export async function loginWithMagicLink(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) return { error: "Ingresá tu email." }

  const supabase = await createServerSupabaseClient()
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/editor`,
    },
  })

  if (error) return { error: "No se pudo enviar el magic link." }

  return { success: "Revisá tu email para el link de acceso." }
}

// ── Logout ────────────────────────────────────────────────────
export async function logout() {
  const supabase = await createServerSupabaseClient()
  await supabase.auth.signOut()
  revalidatePath("/")
  redirect("/login")
}