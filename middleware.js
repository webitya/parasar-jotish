// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow internal routes (Next.js system files)
  if (
    pathname === '/' ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Define your valid app routes here
  const validRoutes = ['/', '/about', '/contact', '/products'];

  if (!validRoutes.includes(pathname)) {
    // Redirect unknown routes to home
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
