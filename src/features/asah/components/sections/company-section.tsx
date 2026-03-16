import { companies } from "@/features/asah/data/companiess"
import CompanyChip from "@/components/ui/brand/company-chip"

export default function CompanySection() {
  return (
    <section className="mt-10 flex flex-col items-center gap-6">
      <h2 className="text-xl font-semibold">
        Jelajahi Sertifikat untuk menambah di portofoliomu
      </h2>

      <div className="flex gap-5">
        {companies.map((brand) => (
          <CompanyChip key={brand.id} company={brand} />
        ))}
      </div>
    </section>
  )
}