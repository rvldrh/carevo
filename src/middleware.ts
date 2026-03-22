import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token");

//   if (!token && req.nextUrl.pathname.startsWith("/main")) {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

  return NextResponse.next();
}