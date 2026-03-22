"use client";

import { useEffect } from "react";
import { setupAuthInterceptor } from "@/services/auth/auth-interceptor";

export default function AuthProvider() {
  useEffect(() => {
    setupAuthInterceptor();
  }, []);

  return null;
}