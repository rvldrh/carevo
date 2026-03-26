"use client"

import Image from "next/image"
import Link from "next/link"
import type { Certification } from "@/features/asah/types/asah"

interface Props {
  certification: Certification
}

export default function AsahCard({ certification }: Props) {
  const imageUrl = certification.thumbnailUrl ? `/static/${certification.thumbnailUrl}` : "/illustration/bootcamp-card.svg";

  return (
    <Link href={certification.redirectUrl || `/main/asah/certificate`}>
      <div className="w-64 h-80 bg-white rounded-2xl p-3 flex flex-col gap-3 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
        <div className="relative w-full h-32 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <Image
            src={imageUrl}
            alt={certification.name || "Sertifikasi"}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col gap-2 p-1">
          <div className="flex items-center bg-blue-50 rounded-lg px-2 py-0.5 w-fit border border-blue-100">
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
              {certification.publisher || "Global Provider"}
            </span>
          </div>

          <div className="font-bold text-gray-800 text-sm h-10 line-clamp-2">
            {certification.name}
          </div>

          <div className="text-blue-500 text-[10px] font-bold mt-auto uppercase">
            {certification.professionRole || "Peningkatan Keahlian"}
          </div>

          <div className="text-gray-400 text-[9px] mt-1 font-medium">
             Sertifikat Profesional Bersertifikat
          </div>
        </div>
      </div>
    </Link>
  )
}