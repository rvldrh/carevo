"use client";

import LoginForm from "@/features/auth/components/login/login-form";
import LoginIllustration from "@/features/auth/components/login/login-illustration";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const token = hash.replace("#", "");

    if (token.length > 20) {
      localStorage.setItem("accessToken", token);
      router.replace("/main/feed");
    }
  }, [router]);
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-sky-blue-light flex items-center justify-center px-4 py-8">

      <div
        className="absolute pointer-events-none"
        style={{
          width: 479,
          height: 453,
          borderRadius: "50%",
          background: "#C8CEFC",
          left: -154,
          bottom: -100,
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          width: 479,
          height: 453,
          borderRadius: "50%",
          background: "#4E61F6",
          right: -100,
          top: -200,
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
        <LoginForm />
        <LoginIllustration />
      </div>
    </div>
  );
}