"use client";

import { useOAuthRedirect } from "@/features/auth/hooks/use-oaut-redirect";
import  LoginPage  from "@/features/auth/components/login/login-page"

export default function Page() {
  useOAuthRedirect(); 

  return <LoginPage />
}