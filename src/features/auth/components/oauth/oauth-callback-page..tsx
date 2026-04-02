"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function OAuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      toast.error("Token tidak ditemukan");
      router.replace("/login");
      return;
    }

    try {
      const params = new URLSearchParams(hash.replace("#", ""));

      const accessToken = params.get("accessToken");

      if (!accessToken) {
        throw new Error("Access token tidak valid");
      }

      localStorage.setItem("accessToken", accessToken);

      const refreshToken = params.get("refreshToken");
      console.log(refreshToken)

      toast.success("Login berhasil");

      router.replace("/feed");

    } catch (error) {
      console.error(error);

      toast.error("Gagal login dengan Google");
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Memproses login Google...</p>
    </div>
  );
}