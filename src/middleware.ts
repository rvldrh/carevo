import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface UserProfile {
  userId: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
}

const PROTECTED_ROUTES = ["/", "/CVBuild", "/feed", "/community", "/asah", "/profile", "/setting"];
const AUTH_ROUTES = ["/login", "/register", "/verify"];
const API_URL = process.env.API_URL || "https://alloc001.adyuta.group/api";

async function getUserProfile(req: NextRequest): Promise<UserProfile | null> {
  const apiUrlFormatted = API_URL.endsWith("/") ? API_URL.slice(0, -1) : API_URL;
  const getUserUrl = `${apiUrlFormatted}/v1/users/me`;

  try {
    const accessToken = req.cookies.get("access_token")?.value;
    if (!accessToken) return null;

    const res = await fetch(getUserUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Cookie: `access_token=${accessToken}`,
        "Accept": "application/json",
        "Cache-Control": "no-cache"
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const responseText = await res.text().catch(() => "N/A");
      console.error("Middleware Auth Issue:", {
        url: getUserUrl,
        status: res.status,
        hasToken: !!accessToken,
        tokenPrefix: accessToken?.substring(0, 10),
        response: responseText.substring(0, 100)
      });
      return null;
    }

    const data = await res.json();
    const profile = data.data || data;

    if (!profile?.userId) {
      console.warn("Middleware: Unexpected response structure (missing userId)", data);
      return null;
    }

    return profile;
  } catch (error) {
    console.error("Middleware fetch failed:", error);
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAuthRoute = AUTH_ROUTES.some((r) => pathname.startsWith(r));
  const isProtectedRoute = PROTECTED_ROUTES.some((r) =>
    r === "/" ? pathname === "/" : pathname.startsWith(r)
  ) && !isAuthRoute;

  if (!isProtectedRoute && !isAuthRoute) return NextResponse.next();

  const userProfile = await getUserProfile(req);
  const isLoggedIn = !!userProfile;
  const userId = userProfile?.userId;

  if (!isLoggedIn && isProtectedRoute) {
    const url = new URL("/login", req.url);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/feed", req.url));
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