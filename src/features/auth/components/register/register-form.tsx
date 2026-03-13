"use client";

import { useState } from "react";
import Link from "next/link";
import GoogleButton from "@/components/ui/button/button-google";
import RememberCheckbox from "@/features/auth/components/register/remember-checbox";
import { useRegister } from "@/features/auth/hooks/use-register";

export default function RegisterForm() {

  const registerMutation = useRegister()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [remember, setRemember] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {

      await registerMutation.mutateAsync({
        email,
        password,
        username
      })

      alert("Register berhasil")

    } catch (error) {
      console.error(error)
      alert("Register gagal")
    }
  }

  return (
    <div className="flex-1 bg-white rounded-[20px] md:rounded-l-none md:rounded-r-[20px] flex items-center justify-center px-6 py-10 md:px-12 lg:px-16">

      <div className="w-full max-w-[393px]">

        <h1 className="text-center text-[19px] font-bold text-black mb-8">
          Buat Akun Anda
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-[53px] rounded-[12px] border border-[#232323] px-8"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[53px] rounded-[12px] border border-[#232323] px-8"
          />

          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[53px] rounded-[12px] border border-[#232323] px-8"
          />

          <button
            type="submit"
            disabled={registerMutation.isPending}
            className="w-full h-[53px] rounded-[8px] bg-[#4D96FF] text-white text-[12px] font-bold"
          >
            {registerMutation.isPending ? "Loading..." : "Buat Akun"}
          </button>

        </form>

        <div className="flex items-center gap-4 my-4 px-2">
          <div className="flex-1 h-px bg-black" />
          <span className="text-[12px] text-black">Atau</span>
          <div className="flex-1 h-px bg-black" />
        </div>

        <GoogleButton buttonText="Lanjutkan Dengan Google" />

        <div className="flex flex-col items-center gap-3 mt-5">

          <RememberCheckbox
            remember={remember}
            setRemember={setRemember}
          />

          <div className="flex items-center gap-1">
            <span className="text-[13px] font-bold text-[#77767B]">
              Sudah punya akun?
            </span>
            <Link
              href="/auth/login"
              className="text-[13px] font-extrabold text-black hover:underline"
            >
              Masuk
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}