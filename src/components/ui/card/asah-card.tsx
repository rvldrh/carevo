"use client"

import Image from "next/image"
import Link from "next/link"
import { Certificate } from "@/features/asah/types/certificate"

interface Props {
  certificate: Certificate
}

export default function AsahCard({ certificate }: Props) {
  return (
    <Link href={`/main/asah/certificate`}>
      <div className="w-64 h-72 bg-white rounded-2xl p-3 flex flex-col gap-3 cursor-pointer hover:scale-105 transition">

        <Image
          src={certificate.image}
          alt={certificate.title}
          width={256}
          height={112}
          className="w-full h-28 rounded-xl object-cover"
        />

        <div className="flex flex-col gap-2">

          <div className="flex items-center bg-white rounded-3xl px-3 py-1 w-fit">
            <span className="text-xs text-gray-500 font-semibold">
              {certificate.provider}
            </span>
          </div>

          <div className="font-semibold">
            {certificate.title}
          </div>

          <div className="text-gray-500 text-sm font-semibold">
            Professional Certificate
          </div>

        </div>
      </div>
    </Link>
  )
}