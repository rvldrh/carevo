import Image from "next/image"
import { AsahItem, AsahVariant } from "@/features/asah/types/asah"

interface Props {
  item: AsahItem
  subtitle: string
  variant: AsahVariant
}

export default function AsahHero({ item, subtitle, variant }: Props) {

  if (variant === "certificate") {
    return (
      <section className="flex justify-between items-center p-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white">

        <div>
          <p className="text-sm">{item.provider}</p>
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <p className="text-sm opacity-80">{subtitle}</p>
        </div>

        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={200}
          className="rounded-xl"
        />
      </section>
    )
  }

  if (variant === "bootcamp") {
    return (
      <section className="grid grid-cols-2 items-center p-10 bg-gradient-to-r from-purple-600 to-blue-700 text-white">

        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={200}
          className="rounded-xl"
        />

        <div className="pl-10">
          <h1 className="text-3xl font-bold">Bootcamp</h1>
          <p className="mt-2 text-sm">{subtitle}</p>
        </div>

      </section>
    )
  }

  return null
}