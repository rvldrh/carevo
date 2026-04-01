// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// const API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "";

// export async function POST(req: NextRequest) {
//   const accessToken = req.cookies.get("access_token")?.value;

//   // Hit backend logout untuk pembersihan sisi server
//   const res = await fetch(`${API_URL}/v1/auth/logout`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await res.json();

//   // Kita return saja response aslinya, backend akan me-set cookie kadaluarsa
//   return NextResponse.json(data, { status: res.status });
// }