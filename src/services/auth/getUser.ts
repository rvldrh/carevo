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

    // Mapping: Jika API kasih 'userId', kita pastikan object punya properti 'id'
    // agar pengecekan di Page tidak error.
    if (data && data.userId) {
      return {
        ...data,
        id: data.userId // Kita duplikasi userId ke id
      };
    }


    return data;
  } catch {
    return null;
  }
}