"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useOAuthRedirectGuard() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;

    const hasAccessToken = hash.includes("tokenType=access_token");

    if (!hasAccessToken) {
      const isOAuthRedirect =
        document.referrer.includes("accounts.google.com");

      if (isOAuthRedirect) {
        router.replace("/landing");
      }
    }

  }, [router]);
}