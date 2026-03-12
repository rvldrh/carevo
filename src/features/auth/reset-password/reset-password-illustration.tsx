import Image from "next/image";

export default function ResetPasswordIllustration() {
  return (
    <div className="hidden md:flex md:w-1/2 rounded-l-[20px] overflow-hidden">
      <Image
        src="/illustration/change-pass.svg"
        alt="Register illustration"
        width={600}
        height={720}
        className="w-full h-full object-cover"
      />
    </div>
  );
}