import { useMutation } from "@tanstack/react-query";
import { LoginUserBodyType } from "../schemas/auth.schema";
import { loginUser } from "@/services/auth/auth.service";

type LoginResponse = {
  success: boolean;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginUserBodyType) => {
      const res = await loginUser(data);

      if (!res.accessToken) {
        throw new Error("Login failed");
      }

      return res;
    },
  });
};