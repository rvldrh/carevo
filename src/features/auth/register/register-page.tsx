"use client";

import RegisterForm from "./register-form";
import RegisterIllustration from "@/features/auth/register/register-illustratio";

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#C8DEFF] overflow-hidden relative">

      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/4 w-[300px] h-[284px] md:w-[479px] md:h-[453px] rounded-full bg-[#C8CEFC]" />

      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 w-[300px] h-[284px] md:w-[479px] md:h-[453px] rounded-full bg-[#4E61F6]" />

      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-[1054px] mx-4 md:mx-8 rounded-[20px] shadow-2xl overflow-hidden min-h-[500px] md:min-h-[720px]">

        <RegisterIllustration />

        <RegisterForm />

      </div>
    </div>
  );
}