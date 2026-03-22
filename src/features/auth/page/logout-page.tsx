"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/auth/auth.service";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function handleLogout() {
      try {
        await logoutUser();
      } catch (error) {
        console.error("Logout error:", error);
      }

      localStorage.removeItem("token");

      router.replace("/auth/login");
    }

    handleLogout();
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-sm text-gray-500">Logging out...</p>
    </div>
  );
}