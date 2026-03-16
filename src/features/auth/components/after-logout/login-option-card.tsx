"use client";

import Image from "next/image";

interface Props {
  variant: "google" | "email";
  name: string;
  email: string;
}

export default function LoginOptionCard({
  variant,
  name,
  email,
}: Props) {

  const isGoogle = variant === "google";

  return (
    <button
      className={`w-full rounded-3xl border p-3 flex items-center justify-between ${
        isGoogle
          ? "bg-blue-400 border-black"
          : "bg-white border-neutral-800"
      }`}
    >
      <div className="flex items-center gap-4">

        <Image
          src="/icons/profile.svg"
          alt="avatar"
          width={62}
          height={62}
          className="rounded-full"
        />

        <div
          className={`flex flex-col text-left ${
            isGoogle ? "text-white" : "text-gray-600"
          }`}
        >
          <span className="text-2xl font-semibold">
            {isGoogle
              ? `Lanjutkan sebagai ${name}`
              : `Masuk sebagai ${name}`}
          </span>

          <span className="text-sm font-medium">
            {email}
          </span>
        </div>

      </div>

      {isGoogle ? (
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Image
            width={10}
            height={10}
            src="/icons/google.svg"
            alt="logo"
            className="w-10 h-10 rounded-sm"
          />
        </div>
      ) : (
        <Image
          width={10}
          height={10}
          src="/icons/mail.svg"
          alt="mail"
          className="w-10 h-10 rounded-s"
        />
      )}

    </button>
  );
}