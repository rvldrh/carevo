"use client";

import clsx from "clsx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  title: string;
  icon: string;
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
};

export function AccordionItem({
  title,
  icon,
  isOpen,
  onToggle,
  children,
}: Props) {
  return (
    <motion.div
      layout
      className={clsx(
        "w-full rounded-2xl border overflow-hidden",
        isOpen ? "bg-blue-400 shadow-md" : "bg-white shadow-sm"
      )}
      animate={{
        borderColor: isOpen ? "#60a5fa" : "#e5e7eb",
      }}
      transition={{ duration: 0.2 }}
    >
      <button
        suppressHydrationWarning
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4"
      >
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ scale: isOpen ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={icon}
              alt="icon"
              width={24}
              height={24}
              className={clsx(isOpen && "brightness-0 invert")}
            />
          </motion.div>

          <motion.span
            className={clsx(
              "text-sm font-medium",
              isOpen ? "text-white" : "text-black"
            )}
            animate={{ x: isOpen ? 2 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {title}
          </motion.span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow"
            width={20}
            height={20}
            className={clsx(isOpen && "brightness-0 invert")}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              className="bg-white p-4"
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}