import Image from "next/image";

interface IconButtonProps {
  icon: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export default function IconButton({ icon, alt, className, onClick }: IconButtonProps) {
  return (
    <button className={`text-gray-500 hover:text-black ${className}`} onClick={onClick}>
      <Image src={icon} alt={alt} width={22} height={22} />
    </button>
  );
}