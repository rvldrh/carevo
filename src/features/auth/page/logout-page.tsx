"use client";

import { useEffect } from "react";
import { clearAccessToken } from "@carevo/contracts/api";

export default function LogoutPage() {
  useEffect(() => {
    async function handleLogout() {
      try {
        await fetch("/api/auth/logout", { method: "POST" });
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        clearAccessToken();
        window.location.href = "/auth/login";
      }
    }

    handleLogout();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-sm text-gray-500">Logging out...</p>
    </div>
  );
}