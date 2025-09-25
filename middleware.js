import { NextResponse } from "next/server"

export function middleware(request) {
  // Admin routes protection
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Skip login page
    if (request.nextUrl.pathname === "/admin/login") {
      return NextResponse.next()
    }

    // Check for admin session (this would be more robust with proper JWT validation)
    const adminToken = request.cookies.get("admin_token")

    if (!adminToken) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
