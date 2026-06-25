// middleware.ts
import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

const MAINTENANCE_MODE = true // ← true = mantenimiento activo, false = todo normal

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // ── Rutas que nunca se bloquean ───────────────────────────────────────────
  const isPublicAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/api") ||
    pathname === "/mantenimiento"

  if (isPublicAsset) return NextResponse.next()

  // ── Modo mantenimiento ────────────────────────────────────────────────────
  if (MAINTENANCE_MODE) {
    const key = searchParams.get("key")
    const secret = process.env.ADMIN_SECRET
    const hasAccess = secret && key === secret

    if (!hasAccess) {
      return NextResponse.redirect(new URL("/mantenimiento", request.url))
    }
  }

  // ── Protección de /editor con Supabase (solo corre si no hay mantenimiento) 
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

  const { data: { user } } = await supabase.auth.getUser()

  const isEditorRoute = pathname.startsWith("/editor")
  const isLoginPage   = pathname === "/login"

  // Si intenta acceder al editor sin sesión → redirigir a login
  if (isEditorRoute && !user) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Si ya está logueado e intenta ir a /login → redirigir al editor
  if (isLoginPage && user) {
    return NextResponse.redirect(new URL("/editor", request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
}