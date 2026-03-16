import Image from "next/image"

export default function CertificateCard() {
  return (
    <div className="w-[260px] h-[280px] bg-white rounded-2xl p-3 flex flex-col gap-2">

      <Image
        src="/illustration/card.svg"
        alt="certificate"
        width={255}
        height={118}
        className="rounded-xl"
      />

      <div className="flex flex-col gap-2">

        <div className="bg-white rounded-3xl px-3 py-1 text-xs font-semibold text-zinc-500 w-fit">
          Google
        </div>

        <h3 className="text-neutral-800 text-base font-semibold">
          UI/UX Design
        </h3>

        <p className="text-zinc-500 text-sm font-semibold">
          Professional Certificate
        </p>

      </div>

    </div>
  )
}