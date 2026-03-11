import Image from "next/image";

interface IconButtonProps {
  icon: string;
  alt: string;
  className?: string;
}

export default function IconButton({ icon, alt, className }: IconButtonProps) {
  return (
    <button className={`text-gray-500 hover:text-black ${className}`}>
      <Image src={icon} alt={alt} width={22} height={22} />
    </button>
  );
}