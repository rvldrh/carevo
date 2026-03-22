"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { verifyEmail } from "@/services/auth/auth.service";

export function useEmailVerification() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const token = hash.replace("#", "");

    if (!token || token.length < 20) return;

    const verify = async () => {
      try {
        setLoading(true);

        await verifyEmail(token);

        window.history.replaceState(null, "", "/auth/login");

        router.replace("/main/feed");
      } catch (err) {
        console.error("VERIFY EMAIL ERROR:", err);

        window.history.replaceState(
          null,
          "",
          "/auth/login?error=verify_failed"
        );
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [router]);

  return { loading };
}