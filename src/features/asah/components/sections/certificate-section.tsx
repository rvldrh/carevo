import AsahCard from "@/components/ui/card/asah-card"
import type { Certification } from "@/features/asah/types/asah"

interface Props {
  certifications?: Certification[];
  isLoading?: boolean;
}

export default function CertificateSection({ certifications, isLoading }: Props) {
  if (isLoading) {
    return (
      <section className="mt-10 flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Dapatkan Sertifikat</h2>
        <div className="w-[899px] h-80 bg-gray-200/50 animate-pulse rounded-2xl flex items-center justify-center text-gray-400">
           Memuat Sertifikasi...
        </div>
      </section>
    );
  }

  const items = certifications || [];

  return (
    <section className="mt-10 flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Dapatkan Sertifikat</h2>

      <div className="w-[899px] h-80 bg-gradient-to-r from-fuchsia-700 via-purple-600 to-blue-500 rounded-2xl flex items-center justify-center gap-6 shadow-xl">
        {items.length === 0 ? (
          <div className="text-white/70 italic text-sm">Belum tersedia.</div>
        ) : (
          items.map((card) => (
            <AsahCard
              key={card.id}
              certification={card}
            />
          )).slice(0, 3)
        )}
      </div>
    </section>
  )
}