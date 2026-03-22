import { NextRequest, NextResponse } from "next/server";
import { verifyEmail } from "@/services/auth/auth.service";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login?error=invalid_token", req.url));
  }

  try {
    const res = await verifyEmail(token);

    const accessToken = res.data?.accessToken;

    const response = NextResponse.redirect(new URL("/main/feed", req.url));

    response.cookies.set("access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/login?error=verify_failed", req.url));
  }
}