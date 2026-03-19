"use client";

import Image from "next/image";

export default function CreatePost() {
  return (
    <div className="w-full bg-gray-50 rounded-[20px] px-5 py-3 flex items-center gap-6">

      <Image
        src="https://placehold.co/52x52"
        alt="avatar"
        width={48}
        height={48}
        className="rounded-full"
      />

      <div className="flex-1">
        <input
          placeholder="Tulis Sesuatu di sini"
          className="w-full h-9 rounded-xl border border-stone-900 px-4 text-sm outline-none"
        />
      </div>

      <button className="w-10 h-10 flex items-center justify-center">
        <div className="w-6 h-6 bg-neutral-800 rounded-sm" />
      </button>

    </div>
  );
}