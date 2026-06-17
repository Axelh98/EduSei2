// app/auth/callback/route.ts
import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/"

  if (!code) {
    console.log("[auth/callback] Falta el parámetro 'code' en el callback")
    return NextResponse.redirect(`${origin}/login?error=missing_code`)
  }

  const supabase = await createServerSupabaseClient()

  // 1. Intercambiar el code por una sesión real (setea cookies)
  const { data: sessionData, error: sessionError } =
    await supabase.auth.exchangeCodeForSession(code)

  if (sessionError || !sessionData.user) {
    console.log(
      "[auth/callback] Error intercambiando code:",
      sessionError?.status,
      sessionError?.message,
    )
    return NextResponse.redirect(`${origin}/login?error=invalid_code`)
  }

  const user = sessionData.user
  const fullName =
    (user.user_metadata?.full_name as string | undefined)?.trim() ?? null
  const pendingInviteCode = (
    user.user_metadata?.pending_invite_code as string | undefined
  )?.trim().toLowerCase()

  // 2. Asegurar profile (full_name + rol estudiante).
  //    Solo se setea rol 'estudiante' si NO existe profile, para no pisar
  //    promociones manuales a admin/maestro hechas por SQL.
  const { data: existingProfile } = await supabase
    .from("profiles")
    .select("id, role, full_name")
    .eq("id", user.id)
    .maybeSingle()

  if (!existingProfile) {
    const { error: profileError } = await supabase.from("profiles").insert({
      id: user.id,
      full_name: fullName,
      role: "estudiante",
    })
    if (profileError) {
      console.log(
        "[auth/callback] Error creando profile:",
        profileError.code,
        profileError.message,
      )
    }
  } else if (fullName && !existingProfile.full_name) {
    // Completar full_name si faltaba, sin tocar el rol
    await supabase
      .from("profiles")
      .update({ full_name: fullName })
      .eq("id", user.id)
  }

  // 3. Si hay invite code pendiente, enrolar en la clase
  if (pendingInviteCode) {
    const { data: clase, error: claseError } = await supabase
      .from("classes")
      .select("id, name")
      .eq("invite_code", pendingInviteCode)
      .maybeSingle()

    if (claseError) {
      console.log(
        "[auth/callback] Error buscando clase:",
        claseError.code,
        claseError.message,
      )
    }

    if (clase) {
      // ¿Existe ya una fila? (puede ser pending pre-cargada con email, o
      // ya activa por re-uso del callback)
      const { data: existing } = await supabase
        .from("class_members")
        .select("id, user_id")
        .eq("class_id", clase.id)
        .or(`user_id.eq.${user.id},email.ilike.${user.email}`)
        .maybeSingle()

      if (existing) {
        if (!existing.user_id) {
          const { error: updateError } = await supabase
            .from("class_members")
            .update({ user_id: user.id, email: null, status: "active" })
            .eq("id", existing.id)
          if (updateError) {
            console.log(
              "[auth/callback] Error actualizando member pendiente:",
              updateError.code,
              updateError.message,
            )
          }
        }
        // Si ya tenía user_id, no hacemos nada — ya estaba enrolado.
      } else {
        const { error: insertError } = await supabase
          .from("class_members")
          .insert({
            class_id: clase.id,
            user_id: user.id,
            status: "active",
          })
        if (insertError) {
          console.log(
            "[auth/callback] Error insertando member:",
            insertError.code,
            insertError.message,
            insertError.details,
          )
        }
      }

      // 4. Limpiar el metadata para que el invite no quede colgado
      await supabase.auth.updateUser({
        data: { pending_invite_code: null },
      })

      console.log(
        "[auth/callback] Usuario",
        user.id,
        "enrolado en clase",
        clase.id,
      )
    } else {
      console.log(
        "[auth/callback] invite_code en metadata no matcheó ninguna clase:",
        pendingInviteCode,
      )
    }
  }

  return NextResponse.redirect(`${origin}${next}`)
}