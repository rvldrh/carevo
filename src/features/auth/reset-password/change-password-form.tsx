"use client";

import { useState } from "react";
import Image from "next/image";

export default function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1 bg-white rounded-[20px] md:rounded-l-none md:rounded-r-[20px] flex items-center justify-center px-6 py-10 md:px-12 lg:px-16">
      <div className="w-full max-w-[393px]">
        <Image
          src="/illustration/change-pass-2.svg"
          alt="Change Password"
          width={180}
          height={180}
          className="mb-6 mx-auto"
        />

        <h1 className="text-center text-[20px] font-bold text-black mb-8">
          Ubah Kata Sandi
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="password"
            placeholder="Kata Sandi Lama"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full h-[53px] rounded-[12px] border border-[#232323] px-8 text-[14px]"
          />

          <input
            type="password"
            placeholder="Kata Sandi Baru"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full h-[53px] rounded-[12px] border border-[#232323] px-8 text-[14px]"
          />

          <button
            type="submit"
            className="w-full h-[53px] rounded-[8px] bg-[#4D96FF] text-white text-[12px] font-bold"
          >
            Ubah Kata Sandi
          </button>
        </form>
      </div>
    </div>
  );
}
