// actions/auth.ts
// Server actions de auth. Mantiene loginWithEmail y loginWithMagicLink
// existentes y agrega signup con código de invitación.

"use server";

import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase-server";

// ── Login (existente) ─────────────────────────────────────────

export async function loginWithEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) return { error: "Faltan datos" };

  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return { error: "Email o contraseña incorrectos" };
  redirect("/");
}

export async function loginWithMagicLink(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  if (!email) return { error: "Ingresá tu email" };

  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/` },
  });

  if (error) return { error: "No pudimos enviar el link. Revisá el email." };
  return { success: "Te enviamos un link a tu email. Revisá la bandeja." };
}

// ── Signup con código de invitación (nuevo) ───────────────────

interface SignupParams {
  email: string;
  password?: string; // opcional: si no viene, se usa magic link
  fullName: string;
  inviteCode: string;
  mode: "password" | "magic";
}

export async function signupWithInvite(params: SignupParams) {
  const { email, password, fullName, inviteCode, mode } = params;

  if (!email || !fullName || !inviteCode) {
    return { error: "Faltan datos obligatorios" };
  }
  if (fullName.trim().length < 4) {
    return { error: "Ingresá tu nombre completo (mínimo 4 caracteres)" };
  }
  if (mode === "password" && (!password || password.length < 6)) {
    return { error: "La contraseña debe tener al menos 6 caracteres" };
  }

  const supabase = await createServerSupabaseClient();

  // 1. Validar que el código exista. Normalizamos a minúsculas porque
  // el código se guarda en minúsculas pero se MUESTRA en mayúsculas
  // (ver InviteCodeDisplay), así que el usuario puede pegarlo en cualquier case.
  const normalizedCode = inviteCode.trim().toLowerCase();

  const { data: clase, error: claseError } = await supabase
    .from("classes")
    .select("id, name")
    .eq("invite_code", normalizedCode)
    .single();

  if (claseError) {
    console.log(
      "[signupWithInvite] Error buscando clase por invite_code:",
      claseError.code,
      claseError.message,
    );
  }

  if (claseError || !clase) {
    return { error: "El código de invitación no es válido" };
  }

  // 2. Crear el usuario en Auth
  let userId: string | null = null;

  if (mode === "password") {
    const { data, error } = await supabase.auth.signUp({
      email,
      password: password!,
      options: {
        data: { full_name: fullName.trim() },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/`,
      },
    });
    if (error) {
      console.log(
        "[signupWithInvite] Error de Supabase Auth (signUp):",
        error.status,
        error.message,
      );
      return { error: parseAuthError(error.message) };
    }
    console.log(
      "[signupWithInvite] Usuario creado en auth:",
      data.user?.id,
      "| session:",
      !!data.session,
    );
    userId = data.user?.id ?? null;
  } else {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        data: { full_name: fullName.trim() },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/?invite=${inviteCode}`,
      },
    });
    if (error) {
      console.log(
        "[signupWithInvite] Error de Supabase Auth (signInWithOtp):",
        error.status,
        error.message,
      );
      return { error: parseAuthError(error.message) };
    }
    // En modo magic, el usuario completa el flujo al hacer clic en el email.
    // Devolvemos success y el cliente muestra el mensaje correspondiente.
    return {
      success:
        "Te enviamos un link a tu email para confirmar la cuenta. " +
        "Cuando lo abras, vas a quedar enrolado en tu clase automáticamente.",
    };
  }

  // 3. Si llegamos acá fue signup con contraseña — enrolamos directo.
  // En modo magic, el enrolamiento se hace cuando vuelve por el link
  // (idealmente con un trigger DB o en el callback de auth).
  if (userId) {
    // Pre-cargado? — actualizar fila existente
    const { data: pending, error: pendingError } = await supabase
      .from("class_members")
      .select("id")
      .eq("class_id", clase.id)
      .ilike("email", email)
      .is("user_id", null)
      .maybeSingle();

    if (pendingError) {
      console.log(
        "[signupWithInvite] Error buscando pending member:",
        pendingError.code,
        pendingError.message,
      );
    }

    if (pending) {
      const { error: updateError } = await supabase
        .from("class_members")
        .update({ user_id: userId, email: null, status: "active" })
        .eq("id", pending.id);
      if (updateError)
        console.log(
          "[signupWithInvite] Error actualizando member pendiente:",
          updateError.code,
          updateError.message,
        );
    } else {
      const { error: insertError } = await supabase
        .from("class_members")
        .insert({ class_id: clase.id, user_id: userId, status: "active" });
      if (insertError)
        console.log(
          "[signupWithInvite] Error insertando member:",
          insertError.code,
          insertError.message,
          insertError.details,
        );
    }

    // Asegurar que el profile tenga full_name y rol de estudiante
    // En actions/auth.ts
    const { error: profileError } = await supabase.from("profiles").upsert({
      id: userId,
      full_name: fullName.trim(),
      role: "estudiante", // Asegurate de que en Postgres el Enum tenga 'estudiante' en minúsculas.
    });
  }

  console.log("[signupWithInvite] Signup completo, devolviendo success");
  // No usamos redirect() acá: dentro de startTransition() en el cliente,
  // redirect() tira una excepción que no se propaga bien. Devolvemos un
  // flag y el cliente navega con router.push().
  return {
    success: "¡Cuenta creada! Ya estás enrolado en tu clase.",
    done: true,
  };
}

function parseAuthError(message: string): string {
  if (message.includes("already registered")) {
    return "Ya existe una cuenta con ese email";
  }
  if (message.includes("Password")) {
    return "La contraseña no cumple los requisitos mínimos";
  }
  // En vez de esconder el error real detrás de un mensaje genérico,
  // lo mostramos — así se ve en pantalla sin tener que mirar logs.
  return `No pudimos crear la cuenta: ${message}`;
}
