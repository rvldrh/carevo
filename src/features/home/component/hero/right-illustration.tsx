"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { transition } from "@/shared/utils/animation";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 120 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
      className="flex justify-end w-full lg:w-auto"
    >
      <Image
        src="/illustration/hero.svg"
        alt="hero illustration"
        width={520}
        height={520}
        className="w-[clamp(320px,32vw,520px)] h-auto"
        priority
      />
    </motion.div>
  );
}