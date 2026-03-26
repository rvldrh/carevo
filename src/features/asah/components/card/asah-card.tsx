import Image from "next/image"
import type { AsahItem } from "@/features/asah/types/asah"

interface Props {
  item: AsahItem
}

export default function AsahCard({ item }: Props) {
  if (item.variant === "certificate") {
    return (
      <div className="bg-white rounded-xl p-3 shadow">
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={120}
          className="rounded-md"
        />

        <p className="text-xs mt-2">{item.provider}</p>

        <h3 className="font-semibold text-sm">
          {item.title}
        </h3>

        <p className="text-xs text-gray-500">
          Professional Certificate
        </p>
      </div>
    )
  }

  if (item.variant === "bootcamp") {
    return (
      <div className="bg-white rounded-xl p-3 shadow">
        <Image
          src={item.image}
          alt={item.title}
          width={220}
          height={140}
          className="rounded-md"
        />

        <h3 className="font-semibold mt-2">
          {item.title}
        </h3>

        <p className="text-xs text-gray-500">
          {item.date}
        </p>
      </div>
    )
  }

  return null
}