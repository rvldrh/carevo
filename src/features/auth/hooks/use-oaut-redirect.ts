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

    const [token] = cleanHash.split("?");

    if (!token) return;

    setAccessToken(token);

    window.history.replaceState(null, "", "/auth/login");

    router.replace("/main");
  }, [router]);
}
