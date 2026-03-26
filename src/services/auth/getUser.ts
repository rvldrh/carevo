import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  
  const API_URL = "https://alloc001.adyuta.group/api/v1/users/me";

  if (!accessToken) {
    console.warn("[getUser] No access_token found");
    return null;
  }

try {
    const res = await fetch(API_URL, {
      headers: { "Authorization": `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();

    
    
    if (data && data.userId) {
      return {
        ...data,
        id: data.userId 
      };
    }


    return data;
  } catch {
    return null;
  }
}