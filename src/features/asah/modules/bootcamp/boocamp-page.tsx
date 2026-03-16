import BootcampHero from "@/features/asah/components/bootcamp/bootcamp-hero"
import BootcampGrid from "@/features/asah/components/bootcamp/bootcamp-grid"

export default function BootcampPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500">

      <BootcampHero />

      <BootcampGrid />

    </div>
  )
}