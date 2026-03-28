import Image from "next/image"
import type { Bootcamp } from "@/features/asah/types/asah"
import Link from "next/link"

export default function BootcampCard({ bootcamp }: { bootcamp: Bootcamp }) {
  const imageUrl = bootcamp.thumbnailUrl ? `/static/${bootcamp.thumbnailUrl}` : "/illustration/bootcamp-card.svg";
  const dateStr = bootcamp.startDate ? new Date(bootcamp.startDate).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric"
  }) : "Tanggal segera diumumkan";

  return (
    <Link href={bootcamp.redirectUrl || "/asah/bootcamp"}>
      <div className="w-56 h-72 bg-white rounded-[20px] p-3 flex flex-col gap-2 shadow-sm border border-gray-100 hover:scale-105 transition-transform cursor-pointer group">
        <div className="aspect-square relative w-full h-48 overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
          <Image
            src={imageUrl}
            alt={bootcamp.name || "bootcamp"}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col mt-2">
          <h3 className="text-neutral-800 text-sm font-semibold truncate" title={bootcamp.name}>
            {bootcamp.name || "Bootcamp Unggulan"}
          </h3>

          <p className="text-zinc-500 text-[10px] font-medium mt-1">
            {dateStr}
          </p>

          <p className="text-blue-500 text-[10px] font-bold mt-2 truncate">
            {bootcamp.publisher || "Penerbit Terverifikasi"}
          </p>
        </div>
      </div>
    </Link>
  )
}
