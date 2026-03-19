"use client";

import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/auth/auth.service";
import { LoginUserBodyType } from "@/features/auth/schemas/auth.schema";
import { AxiosError } from "axios";
import { toast } from "sonner";

interface ApiError {
  error: string;
  message: string;
}

export function useLogin() {
  return useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      if (!data?.accessToken) {
        throw new Error("Access token tidak ditemukan");
      }

      localStorage.setItem("accessToken", data.accessToken);
      toast.success("Login berhasil");
    },
    onError: (error: AxiosError<ApiError>) => {
      const status = error.response?.status;
      const apiError = error.response?.data?.error;
      const message = error.response?.data?.message;

      if (status === 401 && apiError === "INCORRECT_CREDENTIALS") {
        toast.error("Email atau password salah");
        return;
      }

      if (status === 403 && apiError === "EMAIL_NOT_VERIFIED") {
        toast.error("Email belum diverifikasi. Cek inbox kamu.");
        return;
      }

      if (status === 429) {
        toast.error("Terlalu banyak percobaan. Coba lagi nanti.");
        return;
      }

      toast.error(message ?? "Terjadi kesalahan saat login");
    },
  });
}
