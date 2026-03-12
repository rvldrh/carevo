import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-[#E4EFFF] pt-20">
      <header className="relative flex items-center px-6 md:px-10 py-4">
        <Link
          href="/main/profile"
          scroll={true}
          className="flex items-center justify-center"
        >
          <Image
            src="/icons/icon-back.svg"
            alt="Back"
            width={40}
            height={40}
            priority
          />
        </Link>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl lg:text-[40px] font-bold text-black tracking-wide">
          GREEN FOREST
        </h1>
      </header>

      <main className="px-6 md:px-10 py-6 md:py-8">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-[52%] flex-shrink-0">
            <div className="bg-[#F45B5B] rounded-[28px] p-6 lg:p-8">
              <div className="relative aspect-[742/551] w-full">
                <Image
                  src="/illustration/portfolio-card.svg"
                  alt="Green Forest Donation App mockups"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[48%] flex flex-col gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#4D96FF]">
                Green Forest — Donation App
              </h2>

              <p className="text-xl md:text-2xl lg:text-[28px] font-semibold text-black mt-2">
                Februari 2026 | UI/UX Designer
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-[15px] md:text-base font-semibold text-[#2E2E2E] text-justify leading-[1.7]">
                Hai! Ini adalah project desain UI/UX untuk aplikasi donasi yang
                fokus pada penanaman hutan hijau. Tujuan utama app ini adalah
                memudahkan siapa saja untuk berkontribusi nyata dalam menjaga
                kelestarian lingkungan cukup dari genggaman tangan.
              </p>

              <p className="text-[15px] md:text-base font-semibold text-[#2E2E2E] text-justify leading-[1.7]">
                Di project ini, aku merancang pengalaman pengguna yang simpel
                dan emosional, supaya user ngerasa terhubung langsung dengan
                dampak donasi mereka. Mulai dari pemilihan program penanaman,
                nominal donasi, sampai konfirmasi pembayaran — semuanya
                dirancang se-smooth mungkin biar tidak ada friction.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-black mb-2">
                What am I to do
              </h3>

              <ul className="list-disc list-inside flex flex-col gap-1 text-[15px] md:text-base font-semibold text-[#2E2E2E]">
                <li>User Research & User Flow</li>
                <li>Wireframing & Prototyping</li>
                <li>UI Design dengan pendekatan nature-friendly visual</li>
                <li>Desain komponen yang accessible dan mobile-first</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-black mb-2">Tools</h3>

              <ul className="list-disc list-inside flex flex-col gap-1 text-[15px] md:text-base font-semibold text-[#2E2E2E]">
                <li>Figma</li>
                <li>Maze</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
