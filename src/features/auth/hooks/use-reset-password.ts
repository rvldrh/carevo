"use client";

import { useMutation } from "@tanstack/react-query";
import { resetUserPassword } from "@/services/auth/auth.service";

export function useResetPassword() {
  return useMutation({
    mutationFn: resetUserPassword
  });
}