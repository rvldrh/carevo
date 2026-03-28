"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type {
  LoginUserBodyType} from "@/features/auth/schemas/auth.schema";
import {
  LoginUserBody
} from "@/features/auth/schemas/auth.schema";

import { useLogin } from "@/features/auth/hooks/use-login";
import { useGoogleOAuth } from "@/features/auth/hooks/use-google-oauth";

import LoginFields from "@/features/auth/components/login/login-fields";
import LoginSubmit from "@/features/auth/components/login/login-submit";
import LoginFooter from "@/features/auth/components/login/login-footer";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { mutate, isPending } = useLogin();
  const { loginWithGoogle } = useGoogleOAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserBodyType>({
    resolver: zodResolver(LoginUserBody),
    defaultValues: {
      rememberMe: true,
    },
  });

  const onSubmit = (data: LoginUserBodyType) => {
    mutate(data, {
      onSuccess: async (res) => {
        await fetch("/api/auth/set-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ accessToken: res.accessToken }),
        });

        const from = searchParams.get("from") ?? "/";
        router.replace(from);
      },
    });
  };

  return (
    <div className="flex-1 bg-white px-8 sm:px-12 py-14 flex flex-col items-center">
      <div className="w-full max-w-sm flex flex-col gap-8">
        <h1 className="text-center text-[19px] font-bold text-black">
          Masuk Ke Akun Anda
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <LoginFields register={register} errors={errors} />

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-[12px] text-black hover:underline"
            >
              Lupa Password?
            </Link>
          </div>

          <LoginSubmit isPending={isPending} />
        </form>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-black" />
          <span className="text-[12px] text-black">Atau</span>
          <div className="flex-1 h-px bg-black" />
        </div>

        <LoginFooter onGoogleClick={loginWithGoogle} />
      </div>
    </div>
  );
}