"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "./nav-config"
import Image from "next/image"

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
            className={`
              flex items-center gap-2 px-4 py-2 rounded-[20px] transition
              ${isActive
                ? "bg-blue-200"
                : "hover:bg-gray-100"}
            `}
          >

            <Image
              src={isActive ? link.activeIcon : link.icon}
              alt={link.label}
              width={24}
              height={24}
            />

            <span
              className={`
                text-base
                ${isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-700 font-medium"}
              `}
            >
              {link.label}
            </span>

          </Link>
        )
      })}

    </nav>
  )
}