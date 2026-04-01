// import type { NextRequest} from "next/server";
// import { NextResponse } from "next/server";

// const API_URL = process.env.API_URL ?? "https://alloc001.adyuta.group/api";

// export async function POST(req: NextRequest) {
//   // Ambil refresh_token dari cookie yang dikirim browser ke localhost
//   const refreshToken = req.cookies.get("refresh_token")?.value;

//   if (!refreshToken) {
//     return NextResponse.json({ error: "No refresh token" }, { status: 401 });
//   }

//   try {
//     // Teruskan ke backend asli
//     const res = await fetch(`${API_URL}/v1/auth/refresh`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Kirimkan cookie asli ke backend
//         "Cookie": `refresh_token=${refreshToken}`
//       },
//     });

//     const data = await res.json();
    
//     // Jika backend memberikan Set-Cookie baru (misal access_token), teruskan ke browser
//     const response = NextResponse.json(data, { status: res.status });
//     const setCookie = res.headers.get("set-cookie");
//     if (setCookie) {
//       response.headers.set("set-cookie", setCookie);
//     }

//     return response;
//   } catch (error) {
//     return NextResponse.json({ error: "Proxy refresh failed" }, { status: 500 });
//   }
// }
