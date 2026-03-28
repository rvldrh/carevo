"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="ml-10 hidden md:block">
        <button
          suppressHydrationWarning
          className="hidden md:flex items-center gap-3 bg-[#4D8BE6] px-4 py-2 rounded-[20px] ml-8"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Image
            src="/icons/profile.svg"
            alt="Profile"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />

          <span className="text-white text-[16px]">Profto</span>
          
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-white font-semibold text-[16px]"
          >
            V
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Link
              className="block px-4 py-2 hover:bg-gray-100"
              href="/profile"
            >
              Profile
            </Link>

            <Link
              className="block px-4 py-2 hover:bg-gray-100"
              href="/setting"
            >
              Setting
            </Link>

            <Link
              className="block px-4 py-2 hover:bg-gray-100"
              href="/logout"
            >
              Logout
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}