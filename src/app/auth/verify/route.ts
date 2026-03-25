import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";
import { verifyEmail } from "@/services/auth/auth.service";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login?error=invalid_token", req.url));
  }

  try {
    const res = await verifyEmail(token);
    const accessToken =
      typeof res === "object" &&
      res !== null &&
      "data" in res &&
      typeof (res as { data?: { accessToken?: unknown } }).data?.accessToken === "string"
        ? (res as { data?: { accessToken?: string } }).data?.accessToken
        : undefined;

    const response = NextResponse.redirect(new URL("/main/feed", req.url));

    if (accessToken) {
      response.cookies.set("access_token", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
      });
    }

    return response;
  } catch {
    return NextResponse.redirect(new URL("/auth/login?error=verify_failed", req.url));
  }
}