"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { transition } from "@/shared/utils/animation";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 180 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
      className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end w-full"
    >
      <Image
        src="/icons/people.svg"
        alt="people"
        width={520}
        height={520}
        className="w-[70%] max-w-[520px]"
        priority
      />
    </motion.div>
  );
}