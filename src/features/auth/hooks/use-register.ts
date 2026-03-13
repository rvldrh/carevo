"use client"

import { useMutation } from "@tanstack/react-query"
import { registerUserService, RegisterUserInput } from "@/services/auth/auth.service"

export function useRegister() {

  return useMutation({
    mutationFn: (data: RegisterUserInput) => registerUserService(data),

    onSuccess: (data) => {
      console.log("Register success:", data)
    },

    onError: (error) => {
      console.error("Register failed:", error)
    }
  })
}