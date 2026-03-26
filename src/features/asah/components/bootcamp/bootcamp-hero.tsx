import Image from "next/image";
import Link from "next/link";
import type { Bootcamp } from "@/features/asah/types/asah";

export default function BootcampHero({ firstBootcamp }: { firstBootcamp?: Bootcamp }) {
  const imageUrl = firstBootcamp?.thumbnailUrl ? `/static/${firstBootcamp.thumbnailUrl}` : "/illustration/bootcamp-hero.svg";


  return (
    <section className="relative mb-[5%] p-5 w-full bg-gradient-to-r from-fuchsia-700 via-black to-blue-500">
      <Link href={"/main/asah"}>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition shadow-md">
          <Image
            alt="back"
            src={"/icons/back.svg"}
            width={20}
            height={20}
          />
        </div>
      </Link>

      <div className="max-w-[1200px] mx-auto h-[320px] flex items-center justify-between px-8 gap-10">
        <div className="relative w-[489px] h-[320px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={imageUrl}
            alt={firstBootcamp?.name || "bootcamp"}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 text-white max-w-lg">
          <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full w-fit text-[10px] font-bold uppercase tracking-widest text-blue-200">
             Bootcamp Unggulan
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight">
            {firstBootcamp?.name || "Bootcamp Pilihan"}
          </h1>

          <p className="text-lg font-medium text-gray-200 leading-relaxed">
            {firstBootcamp?.professionRole || "Tingkatkan kemampuanmu"} - {firstBootcamp?.publisher || "Bersama Carevo"}
          </p>
          
          <p className="text-md font-semibold text-blue-300">
             Mulai Langkahmu Hari Ini!
          </p>
        </div>
      </div>
    </section>
  );
}
