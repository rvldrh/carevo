import Image from "next/image";
import type { Certification } from "@/features/asah/types/asah";
import Link from "next/link";

export default function CertificateHero({ certification }: { certification?: Certification }) {
  const imageUrl = certification?.thumbnailUrl ? `/static/${certification.thumbnailUrl}` : "/illustration/detail-certificate.svg";


  return (
    <section className="w-full bg-gradient-to-r from-fuchsia-700 via-violet-600 to-blue-500 flex justify-center border-b border-white/10 shadow-lg">
      <div className="max-w-[1200px] w-full flex items-center justify-between py-12 px-8 font-sans">
        <div className="flex flex-col gap-6 max-w-2xl">
          <Link href={"/asah"}>
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition shadow-sm group">
              <Image
                alt="back"
                src={"/icons/back.svg"}
                width={20}
                height={20}
                className="brightness-0 invert opacity-80 group-hover:opacity-100"
              />
            </div>
          </Link>

          <div className="flex flex-col gap-4 text-white">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <Image
                  alt="provider"
                  src={"/icons/google.svg"}
                  width={32}
                  height={32}
                />
              </div>

              <div className="flex flex-col">
                 <div className="text-[10px] text-blue-200 font-bold uppercase tracking-widest leading-none mb-1">
                   Sertifikasi Unggulan
                 </div>
                 <h1 className="text-3xl font-extrabold tracking-tight leading-none">
                   {certification?.name || "Asah Keahlian"}
                 </h1>
              </div>
            </div>

            <p className="text-xl font-medium text-gray-100/90 leading-relaxed max-w-md">
              Jelajahi Sertifikat Professional dari <span className="text-white font-bold underline decoration-blue-400/50 underline-offset-4">{certification?.publisher || "Provider Mitra"}</span>
            </p>
            
            <div className="flex items-center gap-2 mt-2">
               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
               <span className="text-xs font-bold text-green-300 tracking-wide uppercase">Pendaftaran Terbuka</span>
            </div>
          </div>
        </div>

        <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
           <Image
             src={imageUrl}
             alt={certification?.name || "Sertifikasi"}
             fill
             className="object-cover group-hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
