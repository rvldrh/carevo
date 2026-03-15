import Image from "next/image"
import { Bootcamp } from "@/features/asah/types/bootcamp"

interface Props {
  bootcamp: Bootcamp
}

export default function BootcampCard({ bootcamp }: Props) {
  return (
    <div className="w-64 h-72 bg-white rounded-2xl p-3 flex flex-col gap-3">
      <Image
        src={bootcamp.image}
        alt="Image"
        width={28}
        height={28}
        className="w-full h-28 rounded-xl"
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 bg-white rounded-3xl px-3 py-1 w-fit">
          <div className="w-5 h-5 bg-gray-300 rounded-full" />

          <span className="text-xs text-gray-500 font-semibold">
            Bootcamp
          </span>
        </div>

        <div className="font-semibold">{bootcamp.title}</div>

        <div className="text-gray-500 text-sm font-semibold">
          {bootcamp.level}
        </div>
      </div>
    </div>
  )
}