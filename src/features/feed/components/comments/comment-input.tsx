"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  onSubmit: (value: string) => void;
}

export default function CommentInput({ onSubmit }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    onSubmit(value);
    setValue("");
  };

  return (
    <div className="flex gap-2.5 w-full">
      <Image
        src="/icons/profile.svg"
        alt="avatar"
        width={36}
        height={36}
        className="w-9 h-9 rounded-full"
      />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Tulis Komentar"
        className="flex-1 h-8 rounded-xl border border-black px-3 text-xs"
      />

      <button onClick={handleSubmit} className="text-xs font-semibold">
        Kirim
      </button>
    </div>
  );
}
