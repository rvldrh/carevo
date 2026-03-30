import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";


const PROTECTED_ROUTES = ["/", "/CVBuild", "/feed", "/community", "/asah", "/profile", "/setting"];
const AUTH_ROUTES = ["/login", "/register", "/verify"];
// const API_URL = process.env.API_URL || "https://alloc001.adyuta.group/api";


export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAuthRoute = AUTH_ROUTES.some((r) => pathname.startsWith(r));
  const isProtectedRoute = PROTECTED_ROUTES.some((r) =>
    r === "/" ? pathname === "/" : pathname.startsWith(r)
  ) && !isAuthRoute;


  if (!isProtectedRoute && !isAuthRoute) return NextResponse.next();

  const isLoggedIn = req.cookies.get("refresh_token")

  console.log(isLoggedIn)

  if (!isLoggedIn && isProtectedRoute) {
    const url = new URL("/login", req.url);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/feed", req.url));
  }
  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};