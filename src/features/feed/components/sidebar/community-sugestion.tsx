"use client";

import { useState } from "react";
import Image from "next/image";

export default function CommunitySuggestion() {
  const items = [
    "Komunitas UI/UX",
    "Komunitas CyberSecurity",
    "Komunitas Frontend",
    "Komunitas Backend",
    "Komunitas AI"
  ];

  const [joined, setJoined] = useState<Record<number, boolean>>({});

  const handleJoin = (index: number) => {
    setJoined((prev) => ({
      ...prev,
      [index]: true
    }));
  };

  return (
    <div className="bg-white rounded-[20px] shadow-md p-4">
      <h3 className="font-semibold mb-4">
        Bergabung Ke Komunitas
      </h3>

      <div className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isJoined = joined[i];

          return (
            <div key={item} className="flex items-center gap-2">

              <Image
                src="/icons/avatar-community.svg"
                alt="avatar"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full"
              />

              <span className="flex-1 text-xs font-semibold">
                {item}
              </span>

              <div className="relative w-[70px] h-[28px] flex items-center justify-center">

                <button
                  onClick={() => handleJoin(i)}
                  className={`
                    absolute transition-all duration-300 ease-in-out
                    ${isJoined ? "scale-0 opacity-0" : "scale-100 opacity-100"}
                    bg-blue-400 text-white text-xs px-3 py-1 rounded-full
                  `}
                >
                  Gabung
                </button>

                <div
                  className={`
                    absolute transition-all duration-300 ease-in-out
                    ${isJoined ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                  `}
                >
                  <Image
                    src="/icons/community-joined.svg"
                    alt="joined"
                    width={24}
                    height={24}
                  />
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}