import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="w-[453px] h-11 rounded-3xl border border-black flex items-center px-5 gap-2">
      <Image
        src="/icons/search.svg"
        alt="search"
        width={24}
        height={24}
        className="w-6 h-6"
      />

      <span className="text-zinc-500 font-semibold">
        Cari disini
      </span>
    </div>
  );
}