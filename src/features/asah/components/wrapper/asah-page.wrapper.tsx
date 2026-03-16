import { AsahItem, AsahVariant } from "@/features/asah/types/asah"
import AsahHero from "@/features/asah/components/hero/asah-hero"
import AsahGrid from "@/features/asah/components/grid/asah-grid"

interface Props {
  items: AsahItem[]
  subtitle: string
  variant: AsahVariant
}

export default function AsahPageWrapper({
  items,
  subtitle,
  variant,
}: Props) {

  if (!items.length) return null

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500">

      <AsahHero
        item={items[0]}
        subtitle={subtitle}
        variant={variant}
      />

      <AsahGrid
        items={items}
        variant={variant}
      />

    </main>
  )
}