import Image from "next/image";

export default function GoogleButton({ buttonText, onClick }: { buttonText: string, onClick?: () => void }) {
  return (
    <button
      type="button"
      className="w-full h-[53px] rounded-[12px] border border-[#232323] bg-white flex items-center justify-center hover:bg-gray-50 gap-3"
      onClick={onClick}
    >
      <Image src="/icons/google.svg" alt="google" width={36} height={36} />
      <span className="text-[16px] font-bold text-[#232323]">{buttonText}</span>
    </button>
  );
}
