
import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

const API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "https://alloc001.adyuta.group/api";

export async function POST(req: NextRequest) {
  const accessToken = req.cookies.get("access_token")?.value;

  await fetch(`${API_URL}/v1/auth/logout`, {
    method: "POST",
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      Cookie: req.headers.get("cookie") ?? "",
    },
  }).catch(() => {
  });

  const response = NextResponse.json({ success: true });
  response.cookies.set("access_token", "", {
    path: "/",
    maxAge: 0,
  });

  return response;
}