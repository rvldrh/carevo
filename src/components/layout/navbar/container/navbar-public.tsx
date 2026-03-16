"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavMenu from "@/components/layout/navbar/component/nav-menu";
import MobileMenu from "@/components/layout/navbar/component/mobile-menu";

export default function NavbarPublic() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <NavMenu />
        </div>

        <Link
          href="/login"
          className="ml-10 bg-blue-400 text-blue-50 px-4 py-2 rounded-xl font-semibold"
        >
          Masuk
        </Link>
      </div>

      <MobileMenu
        pathname={""}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </div>
  );
}
