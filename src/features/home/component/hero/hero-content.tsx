"use client";

import { motion } from "framer-motion";
import HeroButtons from "@/features/home/component/hero/hero-button";
import { transition } from "@/shared/utils/animation";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-5 max-w-[480px]">

      <motion.h1
        initial={{ opacity: 0, x: 160 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
        className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.15] text-black"
      >
        Bangun Personal Branding Profesional dengan AI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 110 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
        className="text-[15px] sm:text-[16px] leading-[26px] text-black"
      >
        Satu Platform untuk CV Profesional dan Portfolio Digital. Kelola
        pengalaman, tampilkan karya terbaik, dan kembangkan skillmu dalam satu
        tempat agar lebih siap menghadapi peluang karier.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
      >
        <HeroButtons />
      </motion.div>

    </div>
  );
}