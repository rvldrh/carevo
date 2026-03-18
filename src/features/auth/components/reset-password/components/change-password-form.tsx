"use client";

import Image from "next/image";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ChangeUserPasswordBody,
  ChangeUserPasswordBodyType
} from "@/features/auth/schemas/auth.schema";

import { useChangePassword } from "@/features/auth/hooks/use-change-password";

export default function ChangePasswordForm() {

  const { mutate, isPending } = useChangePassword();

  const { register, handleSubmit } = useForm<ChangeUserPasswordBodyType>({
    resolver: zodResolver(ChangeUserPasswordBody)
  });

  const onSubmit = (data: ChangeUserPasswordBodyType) => {
    mutate(data);
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
      <div className="w-full max-w-[320px] flex flex-col items-center">
        <Image
          src="/illustration/forgot-pass-1.svg"
          alt="Forgot password"
          width={120}
          height={120}
          className="mb-3"
        />
        <h1 className="text-2xl font-semibold mb-8 text-center text-gray-800">
          Ubah Kata Sandi
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <div>
            <label htmlFor="old-password" className="sr-only">
              Kata Sandi Lama
            </label>
            <input
              id="old-password"
              type="password"
              placeholder="Kata Sandi Lama"
              {...register("oldPassword")}
              className="w-full h-[53px] rounded-xl border border-gray-300 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#4D96FF] focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label htmlFor="new-password" className="sr-only">
              Kata Sandi Baru
            </label>
            <input
              id="new-password"
              type="password"
              placeholder="Kata Sandi Baru"
              {...register("newPassword")}
              className="w-full h-[53px] rounded-xl border border-gray-300 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#4D96FF] focus:border-transparent transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full h-[53px] mt-5 rounded-xl bg-[#4D96FF] text-white text-sm font-bold hover:bg-[#3A7BD5] transition-colors duration-200"
          >
            {isPending ? "Memproses..." : "Ubah Kata Sandi"}
          </button>
        </form>
      </div>
    </div>
  );
}