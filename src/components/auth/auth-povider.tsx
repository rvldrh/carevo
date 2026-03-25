"use client";

import { useEffect } from "react";
import { setupAuthInterceptor } from "@/services/auth/auth-interceptor";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  useEffect(() => {
    setupAuthInterceptor();
  }, []);

  return <>{children}</>;
}