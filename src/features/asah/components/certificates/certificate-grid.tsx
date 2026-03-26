import AsahCard from "@/components/ui/card/asah-card"
import type { Certification } from "@/features/asah/types/asah"

export default function CertificateGrid({ certifications }: { certifications: Certification[] }) {
  if (certifications.length === 0) {
    return (
      <section className="flex justify-center mt-10 pb-20">
         <div className="bg-white p-16 rounded-3xl text-gray-400 font-medium">Belum ada sertifikasi tersedia.</div>
      </section>
    );
  }

  return (
    <section className="flex justify-center mt-10 pb-20">
      <div className="max-w-[1200px] w-full px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <AsahCard
              key={cert.id}
              certification={cert}
            />
          ))}
        </div>
      </div>
    </section>
  )
}