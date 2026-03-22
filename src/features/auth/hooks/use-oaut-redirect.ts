"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setAccessToken } from "@/services/auth/token.service";

export function useOAuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const cleanHash = hash.substring(1);

    let token: string | null = null;

    if (cleanHash.includes("=")) {
      const params = new URLSearchParams(cleanHash);
      token = params.get("access_token");
    } else {
      token = cleanHash;
    }

    if (!token) {
      console.error("Token tidak valid:", hash);
      return;
    }

    setAccessToken(token);
    localStorage.setItem("access_token", token);

    window.history.replaceState(null, "", "/auth/login");

    router.replace("/main");
  }, [router]);
}