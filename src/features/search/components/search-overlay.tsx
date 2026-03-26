"use client";

import { useEffect } from "react";
import { useSearchOverlay } from "@/features/search/hooks/user-search-overlay";
import { useSearch } from "../hooks/use-search";

export default function SearchOverlay() {
  const { isOpen, close } = useSearchOverlay();
  const { query, setQuery, results, clear } = useSearch();

  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [close]);

  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  
  useEffect(() => {
    if (!isOpen) clear();
  }, [isOpen, clear]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">

      {}
      <div
        onClick={close}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
        <div className="bg-white rounded-2xl shadow-xl p-5 flex flex-col">

          {}
          <div className="flex items-center gap-2 border rounded-xl px-4 py-3">

            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari sesuatu..."
              className="flex-1 outline-none text-sm"
            />

            {query && (
              <button
                onClick={clear}
                className="text-xs text-gray-400 hover:text-black"
              >
                Hapus
              </button>
            )}
          </div>

          {}
          <div className="mt-4 max-h-[500px] overflow-y-auto">

            {!query && (
              <div className="text-center text-sm text-gray-400 py-10">
                Mulai ketik untuk mencari...
              </div>
            )}

            {query && results.length === 0 && (
              <div className="text-center text-sm text-gray-400 py-10">
                Tidak ditemukan hasil
              </div>
            )}

            {results.length > 0 && (
              <div className="flex flex-col gap-2">
                {results.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border hover:bg-gray-50 cursor-pointer transition"
                  >
                    <p className="text-sm font-semibold">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {item.type}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}