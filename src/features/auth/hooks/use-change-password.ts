"use client";

import { useMutation } from "@tanstack/react-query";
import { changeUserPassword } from "@/services/auth/auth.service";

export function useChangePassword() {
  return useMutation({
    mutationFn: changeUserPassword
  });
}