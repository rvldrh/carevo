import Image from "next/image"

export default function BootcampCard() {
  return (
    <div className="w-56 h-72 bg-white rounded-[20px] p-3 flex flex-col gap-2">

      <Image
        src="/illustration/bootcamp-card.svg"
        alt="bootcamp"
        width={201}
        height={201}
        className="rounded-3xl"
      />

      <div className="flex flex-col">

        <h3 className="text-neutral-800 text-base font-semibold">
          Desain grafis
        </h3>

        <p className="text-zinc-500 text-xs font-medium">
          Minggu, 01 Sep 2024
        </p>

      </div>

    </div>
  )
}