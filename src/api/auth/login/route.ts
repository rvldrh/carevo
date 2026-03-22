import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/services/auth/auth.service";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const data = await loginUser(body);

  if (!data?.accessToken) {
    return NextResponse.json(
      { message: "Access token not provided" },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set("access_token", data.accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return response;
}
