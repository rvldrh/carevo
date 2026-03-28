"use client";

import { motion } from "framer-motion";
import CvPreview from "../cv-preview/cv-preview";
import { transition } from "@/shared/utils/animation";
import { useRouter } from "next/navigation";

export default function HeroContent() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className="relative flex flex-col max-w-[560px]"
    >
      <h1 className="text-[clamp(32px,3vw,44px)] font-bold leading-tight">
        Bangun Personal Branding Profesional dengan AI
      </h1>

      <p className="mt-5 text-gray-600 leading-relaxed">
        Satu Platform untuk CV Profesional dan Portfolio Digital.
        Kelola pengalaman, tampilkan karya terbaik, dan kembangkan skillmu
        dalam satu tempat agar lebih siap menghadapi peluang karier.
      </p>

      <div className="flex gap-4 mt-7">
        <button
          onClick={() => handleNavigation("/profile")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Build Portfolio
        </button>

        <button
          onClick={() => handleNavigation("/cv")}
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition"
        >
          Build CV
        </button>
      </div>

      <CvPreview />
    </motion.div>
  );
}