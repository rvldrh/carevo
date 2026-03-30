"use client";

import { useEffect } from "react";
import { logoutUser } from "@carevo/contracts/api";

export default function LogoutPage() {
  useEffect(() => {
    async function handleLogout() {
      try {
        await logoutUser();
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        window.location.href = "/login";
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