"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  children: React.ReactNode;
}

export default function CommentSection({ open, children }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}