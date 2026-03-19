"use client";

import { useState } from "react";

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

      <div className="w-9 h-9 rounded-full bg-gray-300" />

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Tulis Komentar"
        className="flex-1 h-8 rounded-xl border border-black px-3 text-xs"
      />

      <button
        onClick={handleSubmit}
        className="text-xs font-semibold"
      >
        Kirim
      </button>

    </div>
  );
}