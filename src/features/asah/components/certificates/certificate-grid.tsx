import AsahCard from "@/components/ui/card/asah-card"
import type { CertificateGridProps } from "@/features/asah/types/certificate"


export default function CertificateGrid({ certificates }: CertificateGridProps) {
  return (
    <section className="flex justify-center mt-10 pb-20">
      <div className="max-w-[1200px] w-full px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {certificates.map((certificate) => (
            <AsahCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}

        </div>

      </div>
    </section>
  )
}