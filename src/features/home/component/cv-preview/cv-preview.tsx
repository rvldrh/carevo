"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { transition } from "@/shared/utils/animation";

export default function CvPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className="absolute top-full left-0 mt-6 hidden lg:block"
    >
      <Image
        src="/illustration/cv.svg"
        alt="cv"
        width={420}
        height={420}
        className="w-[clamp(260px,28vw,420px)] h-auto"
      />
    </motion.div>
  );
}