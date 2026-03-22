import { NextRequest, NextResponse } from "next/server";
import { verifyEmail } from "@/services/auth/auth.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = await verifyEmail(body.token);

    if (!data?.accessToken) {
      return NextResponse.json(
        { message: "Invalid token" },
        { status: 400 }
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
  } catch (error) {
    return NextResponse.json(
      { message: "Verification failed" },
      { status: 400 }
    );
  }
}