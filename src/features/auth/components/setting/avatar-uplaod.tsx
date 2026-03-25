"use client";

import Image from "next/image";
import { useRef } from "react";

interface Props {
  avatarUrl: string;
}

export default function AvatarUpload({ avatarUrl }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-40 h-40">
        <Image
          src={avatarUrl}
          alt="avatar"
          fill
          className="rounded-full object-cover"
        />

        <button
          onClick={() => inputRef.current?.click()}
          className="absolute bottom-2 right-2 bg-blue-100 p-2 rounded-full"
        >
          ✏️
        </button>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={(e) => console.log(e.target.files)}
        />
      </div>

      <button className="text-sm font-semibold">Ganti Foto</button>
    </div>
  );
}