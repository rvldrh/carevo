"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useSearch } from "@/features/search/hooks/use-search";

export default function SearchBar() {
  const { query, setQuery, results, clear } = useSearch();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isOpen = query.length > 0;

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        clear();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, clear]);
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/40 z-40" />}

      <div ref={wrapperRef} className="relative z-50 w-[453px]">
        <div className="h-11 rounded-3xl border border-black flex items-center px-5 gap-2 bg-white">
          <Image src="/icons/search.svg" alt="search" width={20} height={20} />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari di sini"
            className="flex-1 outline-none text-sm"
          />

          {query && (
            <button onClick={clear} className="text-xs text-gray-400">
              ✕
            </button>
          )}
        </div>

        {isOpen && (
          <div className="absolute top-12 left-0 w-full bg-white rounded-2xl shadow-lg p-4">
            {results.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-4">
                Tidak ditemukan
              </p>
            )}

            {results.length > 0 && (
              <div className="flex gap-4">
                {results.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-300" />
                    <span className="text-xs text-center">{item.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
