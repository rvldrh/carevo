"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreatePostModal({ open, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div
              ref={ref}
              className="w-[900px] bg-white rounded-3xl overflow-hidden"
            >
              <div className="bg-blue-600 px-10 py-8">
                <h1 className="text-white text-3xl font-semibold">
                  Posting Ke Komunitas
                </h1>
              </div>

              <div className="p-8 flex flex-col gap-6">
                <label className="text-lg text-zinc-500 font-medium">
                  Deskripsi
                </label>

                <textarea
                  placeholder="Tulis Deskripsi"
                  className="h-[400px] rounded-2xl border border-neutral-800 p-4 outline-none resize-none"
                />

                <button className="self-start bg-blue-400 text-white px-6 py-2 rounded-xl">
                  Unggah
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}