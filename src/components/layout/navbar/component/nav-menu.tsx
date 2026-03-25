"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "./nav-config"
import Image from "next/image"
import { motion } from "framer-motion"

export default function NavMenu() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navLinks.map((link) => {
        const isActive = pathname === link.path

        return (
          <Link
            key={link.path}
            href={link.path}
            className="relative flex items-center gap-2 px-4 py-2 rounded-[20px] transition-colors hover:bg-gray-100"
          >
            {isActive && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 rounded-[20px] bg-blue-200"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}

            <motion.div
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10"
            >
              <Image
                src={isActive ? link.activeIcon : link.icon}
                alt={link.label}
                width={24}
                height={24}
              />
            </motion.div>

            <motion.span
              animate={{
                color: isActive ? "#3b82f6" : "#374151",
                fontWeight: isActive ? 700 : 500,
              }}
              transition={{ duration: 0.15 }}
              className="relative z-10 text-base"
            >
              {link.label}
            </motion.span>
          </Link>
        )
      })}
    </nav>
  )
}