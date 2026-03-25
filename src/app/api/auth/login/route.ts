import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(`${process.env.API_URL}/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  const data = await res.json();

  const response = NextResponse.json(data);

  response.cookies.set("access_token", data.accessToken, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return response;
}