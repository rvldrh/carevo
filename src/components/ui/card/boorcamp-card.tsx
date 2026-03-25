import Image from "next/image";
import type { Bootcamp } from "@/features/asah/types/bootcamp";
import Link from "next/link";

interface Props {
  bootcamp: Bootcamp;
}

export default function BootcampCard({ bootcamp }: Props) {
  return (
    <Link href={'/main/asah/bootcamp'}>
      <div className="w-64 h-72 bg-white rounded-2xl p-3 flex flex-col gap-3 cursor-pointer hover:scale-105 transition">
        <Image
          src={bootcamp.image}
          alt="Image"
          width={28}
          height={28}
          className="w-full h-28 rounded-xl"
        />

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 bg-white rounded-3xl px-3 py-1 w-fit">
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
    </Link>
  );
}
