import Image from "next/image";
import Link from "next/link";

const whatToDoItems: string[] = [
  "User Research & User Flow",
  "Wireframing & Prototyping",
  "UI Design dengan pendekatan nature-friendly visual",
  "Desain komponen yang accessible dan mobile-first",
];

const toolsItems: string[] = ["Figma", "Maze"];

export default function CardPorto(){
  return (
    <div className="bg-foundation-sky-bluelight-hover w-full min-h-screen flex">
      <div className="flex z-[1] mt-[146px] w-[685px] h-[715px] ml-auto mr-[100px] relative flex-col items-center gap-7">
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col h-[105px] items-center w-full">
              <div className="inline-flex items-center justify-center gap-2.5 p-1">
                <p className="font-bold text-foundation-sky-bluenormal text-4xl text-center">
                  Green Forest — Donation App
                </p>
              </div>

              <div className="flex items-center justify-center gap-2.5 pt-2 pb-4 px-4 w-full">
                <p className="font-semibold text-black text-[28px] text-center">
                  Februari 2026 | UI/UX Designer
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[460px] h-[332px] items-start gap-5 overflow-y-auto">
              <p className="font-semibold text-foundation-dark-graynormal text-base text-justify leading-[26px]">
                Hai! Ini adalah project desain UI/UX untuk aplikasi donasi yang
                fokus pada penanaman hutan hijau. Tujuan utama app ini adalah
                memudahkan siapa aja untuk berkontribusi nyata dalam menjaga
                kelestarian lingkungan cukup dari genggaman tangan.
              </p>

              <p className="font-semibold text-foundation-dark-graynormal text-base text-justify leading-[26px]">
                Di project ini, aku merancang pengalaman pengguna yang simpel
                dan emosional, supaya user ngerasa terhubung langsung dengan
                dampak donasi mereka. Mulai dari pemilihan program penanaman,
                nominal donasi, sampai konfirmasi pembayaran — semuanya
                dirancang se-smooth mungkin biar nggak ada friction yang bikin
                user males lanjut.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[460px] items-start gap-[11px]">
            <p className="font-bold text-black text-base">What am I to do</p>
            <ul className="list-disc list-inside font-semibold text-foundation-dark-graynormal text-base leading-[26px]">
              {whatToDoItems.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-[460px] items-start gap-[11px]">
          <p className="font-semibold text-black text-base">Tools</p>

          <ul className="list-disc list-inside font-semibold text-foundation-dark-graynormal text-base leading-[26px]">
            {toolsItems.map((tool: string) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex z-[2] w-full h-[76px] items-end gap-[428px] pl-10 fixed top-0 left-0 bg-foundation-sky-bluelight-hover">
        <Link href="/">
          {/* <LetsIconsBack className="w-[53px] h-[53px]" /> */}
        </Link>

        <div className="inline-flex items-center justify-center gap-2.5 p-4">
          <h1 className="font-bold text-black text-[40px]">GREEN FOREST</h1>
        </div>
      </div>

      {/* Image */}
      <Image
        src="/images/rectangle-14.svg"
        alt="Green Forest Preview"
        width={742}
        height={551}
        className="fixed top-[131px] left-[22px] z-[3]"
        priority
      />
    </div>
  );
}