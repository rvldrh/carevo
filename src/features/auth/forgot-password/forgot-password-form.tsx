"use client";

import Image from "next/image";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1 bg-white rounded-[20px] md:rounded-l-none md:rounded-r-[20px] flex items-center justify-center px-6 py-10 md:px-12 lg:px-16">

      <div className="w-full max-w-[393px] flex flex-col items-center">

        <Image
          src="/illustration/forgot-pass-1.svg"
          alt="Forgot password"
          className="w-[170px] mb-6"
          width={170}
          height={170}
        />

        <h1 className="text-[22px] font-bold mb-6">
          Lupa Kata sandi?
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[53px] rounded-[12px] border border-[#232323] px-8"
          />

          <button
            type="submit"
            className="w-full h-[53px] rounded-[12px] bg-[#4D96FF] text-white font-bold"
          >
            mengatur ulang kata sandi
          </button>

        </form>

      </div>
    </div>
  );
}