"use client";

import { motion } from "framer-motion";
import { transition } from "@/shared/utils/animation";
import ButtonLink from "@/components/ui/button/button-link";

export default function HeroButtons() {
  return (
    <div className="flex gap-3 mt-2">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <ButtonLink href="/build-portfolio" variant="primary">
          Build Portfolio
        </ButtonLink>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <ButtonLink href="/build-cv" variant="outline">
          Build CV
        </ButtonLink> 
      </motion.div>

    </div>
  );
}