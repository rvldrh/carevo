"use client";

import { useMutation } from "@tanstack/react-query";
import { sendPasswordResetEmail } from "@/services/auth/auth.service";

export function useForgotPassword() {
  return useMutation({
    mutationFn: sendPasswordResetEmail
  });
}