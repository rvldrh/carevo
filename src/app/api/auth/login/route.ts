// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// /**
//  * REFACTOR: Kita tidak boleh sama sekali menyentuh header set-cookie di sini.
//  * Cukup kembalikan JSON, dan biarkan komunikasi AXIOS di client (withCredentials: true)
//  * yang menangani penyimpanan cookie yang datang ASLI dari backend.
//  */
// export async function POST(req: NextRequest) {
//   const body = await req.json();

//   const res = await fetch(`${process.env.API_URL}/v1/auth/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   const data = await res.json();

//   // Kita kembalikan JSON biasa tanpa meneruskan atau menambah header set-cookie manual.
//   return NextResponse.json(data, { status: res.status });
// }