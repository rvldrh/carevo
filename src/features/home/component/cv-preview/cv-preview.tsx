"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { transition } from "@/shared/utils/animation";

export default function CvPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className="absolute left-[4%] bottom-[-33%] hidden lg:block"
    >
      <Image
        src="/illustration/cv.svg"
        alt="cv"
        width={550}
        height={550}
        className="w-[clamp(280px,30vw,520px)] h-auto"
      />
    </motion.div>
  );
}