"use client"

import { useMutation } from "@tanstack/react-query"
import { registerUserService } from "@/services/auth/auth.service"
import { AxiosError } from "axios"
import { toast } from "sonner"

interface ApiError {
  message?: string
}

export function useRegister() {
  return useMutation({
    mutationFn: registerUserService,

    onSuccess: () => {
      toast.success("Akun berhasil dibuat")
    },

    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.message ??
        "Registrasi gagal"

      toast.error(message)
    }
  })
}