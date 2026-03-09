import Image from "next/image";

export default function LoginIllustration() {
  return (
    <div className="hidden lg:flex flex-1 rounded-r-2xl overflow-hidden">
      <Image
        src="/icons/login.svg"
        alt="Login illustration"
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
  );
}