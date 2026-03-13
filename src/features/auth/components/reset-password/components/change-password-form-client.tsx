"use client";

import { useState } from "react";

export default function ChangePasswordFormClient() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      oldPassword,
      newPassword,
    });
  };

  return (
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
  );
}