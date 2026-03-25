import type { AsahItem, AsahVariant } from "@/features/asah/types/asah"
import AsahCard from "@/features/asah/components/card/asah-card"

interface Props {
  items: AsahItem[]
  variant: AsahVariant
}

export default function AsahGrid({ items, variant }: Props) {
  return (
    <section className="p-10 grid grid-cols-4 gap-6">

      {items.map((item) => (
        <AsahCard
          key={item.id}
          item={item}
          variant={variant}
        />
      ))}

    </section>
  )
}