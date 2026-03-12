import Link from "next/link";
import { navLinks } from "./nav-config";
import Image from "next/image";

interface Props {
  mobileMenuOpen: boolean;
  pathname: string;
  setMobileMenuOpen: (value: boolean) => void;
}

export default function MobileMenu({
  mobileMenuOpen,
  pathname,
  setMobileMenuOpen,
}: Props) {
  if (!mobileMenuOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
      {navLinks.map(({ path, label, icon }) => {
        const isActive = pathname === path;

        return (
          <Link
            key={path}
            href={path}
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
              isActive
                ? "text-[#4E61F6] bg-blue-50"
                : "text-[#77767B] hover:bg-gray-50"
            }`}
          >
            <Image src={icon} alt={label} width={25} height={25} className="w-[25px] h-[25px]" />
            <span className="font-medium text-[15px]">{label}</span>
          </Link>
        );
      })}

      <div className="px-4 pt-2">
        <Image
          src="/icons/profile.svg"
          alt="Profile"
          width={42}
          height={42}
          className="h-[42px] w-auto rounded-[10px] border border-[#4D96FF]"
        />
      </div>
    </div>
  );
}