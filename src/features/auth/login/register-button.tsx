import Link from "next/link";

export default function RegisterButton() {
  return (
    <Link
      href="/auth/register"
      className="w-full h-[53px] flex items-center justify-center rounded-xl border border-gray-400 bg-white hover:bg-gray-50"
    >
      <span className="text-[12px] font-bold text-black">
        Daftar Akun
      </span>
    </Link>
  );
}