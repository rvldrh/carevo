"use client";

import Image from "next/image";

export default function RightIllustration() {
  return (
    <div className="absolute right-0 top-[140px] hidden lg:block">
      <Image
        src="/illustration/team.svg"
        alt="team"
        width={520}
        height={520}
        className="w-[clamp(360px,30vw,520px)] h-auto"
        priority
      />
    </div>
  );
}