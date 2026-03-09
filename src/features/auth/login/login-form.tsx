"use client";

import { useState } from "react";
import Link from "next/link";
import GoogleButton from "@/components/ui/button/button-google";
import RegisterButton from "@/features/auth/login/register-button";

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <div className="flex-1 bg-white px-8 sm:px-12 py-14 flex flex-col items-center">

      <div className="w-full max-w-sm flex flex-col gap-8">

        <h1 className="text-center text-[19px] font-bold text-black">
          Masuk Ke Akun Anda
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[53px] px-9 rounded-xl border border-gray-400"
          />

          <div className="flex flex-col gap-2">

            <input
              type="password"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[53px] px-8 rounded-xl border border-gray-400"
            />

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-[12px] text-black hover:underline"
              >
                Lupa Password?
              </Link>
            </div>

          </div>

          <button
            type="submit"
            className="w-full h-[53px] rounded-lg bg-[#4E61F6] text-white"
          >
            Masuk
          </button>

        </form>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-black" />
          <span className="text-[12px] text-black">Atau</span>
          <div className="flex-1 h-px bg-black" />
        </div>

        <GoogleButton buttonText="Masuk dengan Google" />
        <RegisterButton />

      </div>

    </div>
  );
}