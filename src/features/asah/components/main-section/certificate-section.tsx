import AsahCard from "@/components/ui/card/asah-card"
import { certificates } from "@/features/asah/data/certificate"

export default function CertificateSection() {
  return (
   <section className="mt-10 flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Dapatkan Sertifikat</h2>

      <div className="w-[899px] h-80 bg-gradient-to-r from-fuchsia-700 via-purple-600 to-blue-500 rounded-2xl flex items-center justify-center gap-6">
        {certificates.map((card) => (
          <AsahCard
            key={card.id}
            certificate={card}
          />
        ))}
      </div>
    </section>
  )
}