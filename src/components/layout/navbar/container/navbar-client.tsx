"use client";

import { useState } from "react";
import Link from "next/link";
import NavMenu from "../component/nav-menu";
import MobileMenu from "../component/mobile-menu";
import Image from "next/image";
import ProfileDropdown from "@/components/layout/navbar/component/profile-dropdown";

export default function NavbarClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full px-6 lg:px-[138px]">
      {" "}
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

        <div className="ml-10 hidden md:block">
          <ProfileDropdown />
        </div>
        

        <button
          className="md:hidden ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Image
            src={"/icons/profto.svg"}
            alt="menu"
            width={6}
            height={6}
            className="w-6 h-6"
          />
        </button>
      </div>
      <MobileMenu
        pathname={""}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </div>
  );
}
