// import { loginUser } from "@carevo/contracts/api";
// import type { NextRequest} from "next/server";
// import { NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const body = await req.json();

//   const res = await loginUser()

//   const data = await res.json();

//   const response = NextResponse.json(data);

//   response.cookies.set("access_token", data.accessToken, {
//     httpOnly: true,
//     sameSite: "lax",
//     path: "/",
//   });

//   return response;
// }