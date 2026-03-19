"use client";

import { useSearchOverlay } from "@/features/search/hooks/user-search-overlay";

export default function SearchBar() {
  const open = useSearchOverlay((state) => state.open);

  return (
    <div
      onClick={open}
      className="w-80 px-2 py-1 bg-white rounded-[20px] outline outline-1 outline-neutral-900 cursor-pointer"
    >
      <span className="text-zinc-500 text-xs">
        Cari di Sini
      </span>
    </div>
  );
}