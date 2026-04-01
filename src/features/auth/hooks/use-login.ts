import { useMutation } from "@tanstack/react-query";
import type { LoginUserBodyType } from "../schemas/auth.schema";
import { loginUser } from "@/services/auth/auth.service";
import { AxiosError } from "axios";
import { toast } from "sonner";

interface ApiError {
  message?: string;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginUserBodyType) => {
      const res = await loginUser(data);

      if (!res.accessToken) {
        throw new Error("Login gagal");
      }

      return res;
    },
    throwOnError: false,
    onError: (error) => {
      let message = "Login gagal";

      if (error instanceof AxiosError) {
        message = (error.response?.data as ApiError)?.message ?? message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      toast.error(message);
    },
  });
};