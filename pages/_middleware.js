import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  if (req.nextUrl.pathname === '/') {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === 'production',
    });
    // you could also check for any property on the session onject
    // like role === "admin" or name === "john Doe",etc
    if (!session) return NextResponse.redirect(new URL('/home', req.url));
    // if user is authenticated, continue
  }
}
