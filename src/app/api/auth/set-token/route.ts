import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { accessToken } = await req.json();

  if (!accessToken) {
    return NextResponse.json({ error: "No token" }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true });

  response.cookies.set("access_token", accessToken, {
    httpOnly: false,  
    sameSite: "lax",
    path: "/",
    maxAge: 900,      
  });

  return response;
}