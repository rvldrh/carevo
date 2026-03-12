"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./nav-config";
import Image from "next/image";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-10">
      {navLinks.map(({ path, label, icon }) => {
        const isActive = pathname === path;

        return (
          <Link
            key={path}
            href={path}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
          ${
            isActive
              ? "bg-blue-50 text-[#4E61F6]"
              : "text-gray-700 hover:bg-gray-100"
          }
        `}
          >
            <Image src={icon} alt={label} width={22} height={22} className="w-[22px] h-[22px]" />

            <span className="font-medium text-[15px]">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
