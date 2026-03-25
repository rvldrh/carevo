import { NextRequest, NextResponse } from "next/server";

interface UserProfile {
  userId: string;
  firstName?: string;
  lastName?: string;
}

const PROTECTED_ROUTES = ["/main", "/cv-builder"];
const AUTH_ROUTES = ["/auth/login", "/auth/register"];
const API_URL = "https://alloc001.adyuta.group/api";

async function getUserProfile(req: NextRequest): Promise<UserProfile | null> {
  try {
    const accessToken = req.cookies.get("access_token")?.value;
    if (!accessToken) return null;

    const res = await fetch(`${API_URL}/v1/users/me`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtectedRoute = PROTECTED_ROUTES.some((r) => pathname.startsWith(r));
  const isAuthRoute = AUTH_ROUTES.some((r) => pathname.startsWith(r));

  if (!isProtectedRoute && !isAuthRoute) return NextResponse.next();

  const userProfile = await getUserProfile(req);
  const isLoggedIn = !!userProfile;
  const userId = userProfile?.userId;

  if (!isLoggedIn && isProtectedRoute) {
    const url = new URL("/auth/login", req.url);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/main/feed", req.url));
  }

  const response = NextResponse.next();
  if (userId) {
    response.headers.set("x-user-id", userId);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};