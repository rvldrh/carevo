"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  menu: ReactNode;
}

export default function NavbarShell({ menu }: Props) {
  return (
    <div className="w-full px-6 lg:px-[138px]">
      <div className="flex items-center h-[70px]">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="Carevo logo"
            width={40}
            height={10}
            className="h-10 w-auto"
          />
          <Image
            src="/icons/Carevo.svg"
            alt="Carevo text"
            width={80}
            height={6}
            className="h-6 w-auto"
          />
        </Link>

        <div className="ml-auto">
          {menu}
        </div>

      </div>
    </div>
  );
}