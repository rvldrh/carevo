"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  onSubmit: (value: string) => void;
}

export default function ReplyInput({ onSubmit }: Props) {
  const [value, setValue] = useState("");

  return (
    <div className="pl-11 flex gap-3 items-start">

      <Image
        className="w-9 h-9 rounded-full"
        src="https://placehold.co/36x36"
        alt="avatar"
        width={36}
        height={36}
      />

      <div className="flex-1 relative">

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tulis balasan..."
          className="w-full border rounded-xl px-4 py-2 text-xs outline-none"
        />

        <button
          onClick={() => {
            if (!value.trim()) return;
            onSubmit(value);
            setValue("");
          }}
          className="absolute right-2 bottom-2 bg-blue-400 text-white text-[10px] px-3 py-1 rounded-lg"
        >
          Balas
        </button>
      </div>
    </div>
  );
}