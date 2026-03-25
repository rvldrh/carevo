  "use client";

  import { useMutation } from "@tanstack/react-query";
  import { registerUserService } from "@/services/auth/auth.service";
  import { AxiosError } from "axios";
  import { toast } from "sonner";

  export function useRegister() {
    return useMutation({
      mutationFn: registerUserService,
      throwOnError: false,

      onSuccess: () => {
        toast.success("Akun berhasil dibuat");
      },

      onError: (error) => {
        let message = "Registrasi gagal";
        if (error instanceof AxiosError) {
          message = error.response?.data?.message ?? message;
        }

        toast.error(message);
      }
    });
  }