import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "px-6 py-3 font-semibold rounded-full transition-colors";

  const variants: Record<Variant, string> = {
    primary:
      "bg-[#4E61F6] text-white hover:bg-[#3d50e0]",
    outline:
      "border border-[#4E61F6] text-[#4E61F6] hover:bg-blue-50",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}