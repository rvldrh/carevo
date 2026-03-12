"use client"

import Image from "next/image"

export default function JoinButton() {
  return (
    <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#4D96FF] hover:bg-[#3a82ef] text-white text-xs font-semibold transition-colors">

      <Image
        src="/icons/plus-join.svg"
        alt="join"
        width={14}
        height={14}
        className="shrink-0"
      />

      <span>Gabung</span>

    </button>
  )
}