// middleware.ts
// Colocar en la raíz del proyecto (mismo nivel que /app)
// Protege /editor/* — redirige a /login si no hay sesión activa.

import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refrescar la sesión si el token expiró
  const { data: { user } } = await supabase.auth.getUser()

  const isEditorRoute = request.nextUrl.pathname.startsWith("/editor")
  const isLoginPage   = request.nextUrl.pathname === "/login"

  // Si intenta acceder al editor sin sesión → redirigir a login
  if (isEditorRoute && !user) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Si ya está logueado e intenta ir a /login → redirigir al editor
  if (isLoginPage && user) {
    return NextResponse.redirect(new URL("/editor", request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    "/editor/:path*",
    "/login",
  ],
}