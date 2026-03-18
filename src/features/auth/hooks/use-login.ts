"use client";

import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/auth/auth.service";
import { LoginUserBodyType } from "@/features/auth/schemas/auth.schema";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginUserBodyType) => loginUser(data),

    onSuccess: (data) => {
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }
    }
  });
}