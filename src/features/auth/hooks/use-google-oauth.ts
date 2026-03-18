"use client";

import { getGoogleOAuthUrl } from "@/services/auth/auth.service";

export function useGoogleOAuth() {
  const loginWithGoogle = () => {
    const url = getGoogleOAuthUrl();

    window.location.href = url;
  };

  return { loginWithGoogle };
}