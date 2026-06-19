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
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/auth/callback?next=/`,
    },
  });

  if (error) return { error: "No pudimos enviar el link. Revisá el email." };
  return { success: "Te enviamos un link a tu email. Revisá la bandeja." };
}

// ── Signup con código de invitación ───────────────────────────

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

  // 2. Crear el usuario en Auth.
  // IMPORTANTE: el enrolamiento en class_members NO se hace acá. Si
  // "Confirm email" está activado en Supabase, signUp() y signInWithOtp()
  // no devuelven sesión activa (session: null) hasta que el usuario
  // confirma el mail — y sin sesión, auth.uid() es null en el cliente
  // server-side, así que cualquier insert a class_members es rechazado
  // por RLS (42501). Por eso el invite_code va en user_metadata y el
  // enrolamiento real pasa en /auth/callback, que corre con sesión real.

  if (mode === "password") {
    const { data, error } = await supabase.auth.signUp({
      email,
      password: password!,
      options: {
        data: {
          full_name: fullName.trim(),
          pending_invite_code: normalizedCode,
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/auth/callback?next=/`,
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

    if (!data.session) {
      // Sin sesión = falta confirmar email. El enrolamiento lo hace el callback.
      return {
        success:
          "¡Cuenta creada! Te enviamos un mail de confirmación. " +
          "Cuando lo confirmes, vas a quedar enrolado en tu clase.",
      };
    }

    // Caso raro pero posible: "Confirm email" desactivado y ya viene con
    // sesión activa. Acá sí podemos enrolar directo porque auth.uid()
    // ya existe en este request.
    const userId = data.user?.id ?? null;
    if (userId) {
      await enrolarEnClase(supabase, clase.id, userId, email, fullName);
    }

    console.log("[signupWithInvite] Signup completo (con sesión), devolviendo success");
    return {
      success: "¡Cuenta creada! Ya estás enrolado en tu clase.",
      done: true,
    };
  }

  // Modo magic link: mismo patrón — invite_code va en metadata, el
  // callback hace el enrolamiento real cuando el usuario confirma.
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      data: {
        full_name: fullName.trim(),
        pending_invite_code: normalizedCode,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/auth/callback?next=/`,
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

  return {
    success:
      "Te enviamos un link a tu email para confirmar la cuenta. " +
      "Cuando lo abras, vas a quedar enrolado en tu clase automáticamente.",
  };
}

// ── Helper compartido: enrolar a un usuario ya autenticado en una clase ─────
// Usado solo en el caso raro de signup con sesión inmediata (confirm email
// desactivado). El caso normal (con confirmación) lo maneja /auth/callback.

async function enrolarEnClase(
  supabase: Awaited<ReturnType<typeof createServerSupabaseClient>>,
  classId: string,
  userId: string,
  email: string,
  fullName: string,
) {
  const { data: pending, error: pendingError } = await supabase
    .from("class_members")
    .select("id")
    .eq("class_id", classId)
    .ilike("email", email)
    .is("user_id", null)
    .maybeSingle();

  if (pendingError) {
    console.log(
      "[enrolarEnClase] Error buscando pending member:",
      pendingError.code,
      pendingError.message,
    );
  }

  if (pending) {
    const { error: updateError } = await supabase
      .from("class_members")
      .update({ user_id: userId, email: null, status: "active" })
      .eq("id", pending.id);
    if (updateError) {
      console.log(
        "[enrolarEnClase] Error actualizando member pendiente:",
        updateError.code,
        updateError.message,
      );
    }
  } else {
    const { error: insertError } = await supabase
      .from("class_members")
      .insert({ class_id: classId, user_id: userId, status: "active" });
    if (insertError) {
      console.log(
        "[enrolarEnClase] Error insertando member:",
        insertError.code,
        insertError.message,
        insertError.details,
      );
    }
  }

  const { error: profileError } = await supabase.from("profiles").upsert({
    id: userId,
    full_name: fullName.trim(),
    role: "estudiante",
  });
  if (profileError) {
    console.log(
      "[enrolarEnClase] Error upsert profile:",
      profileError.code,
      profileError.message,
    );
  }
}

function parseAuthError(message: string): string {
  if (message.includes("already registered")) {
    return "Ya existe una cuenta con ese email";
  }
  if (message.includes("Password")) {
    return "La contraseña no cumple los requisitos mínimos";
  }
  return `No pudimos crear la cuenta: ${message}`;
}