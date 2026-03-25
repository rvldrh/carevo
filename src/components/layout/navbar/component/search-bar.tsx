"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useSearch } from "@/features/search/hooks/use-search";
import { motion, AnimatePresence } from "framer-motion";

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, clear]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <div ref={wrapperRef} className="relative z-50 w-[453px]">
        <motion.div
          className="h-11 rounded-3xl border border-black flex items-center px-5 gap-2 bg-white"
          animate={{
            boxShadow: isOpen
              ? "0 4px 20px rgba(0,0,0,0.12)"
              : "0 0px 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 10 : 0, scale: isOpen ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image src="/icons/search.svg" alt="search" width={20} height={20} />
          </motion.div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari di sini"
            className="flex-1 outline-none text-sm"
          />

          <AnimatePresence>
            {query && (
              <motion.button
                key="clear"
                onClick={clear}
                className="text-xs text-gray-400"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                ✕
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="dropdown"
              className="absolute top-12 left-0 w-full bg-white rounded-2xl shadow-lg p-4"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            >
              {results.length === 0 && (
                <motion.p
                  className="text-sm text-gray-400 text-center py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Tidak ditemukan
                </motion.p>
              )}

              {results.length > 0 && (
                <div className="flex gap-4">
                  {results.slice(0, 3).map((item, i) => (
                    <motion.div
                      key={item.id}
                      className="flex flex-col items-center gap-1"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: i * 0.05,
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-300" />
                      <span className="text-xs text-center">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}