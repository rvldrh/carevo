import BootcampCard from "@/components/ui/card/bootcamp-card"
import type { Bootcamp } from "@/features/asah/types/asah";

export default function BootcampGrid({ bootcamps }: { bootcamps: Bootcamp[] }) {
  if (bootcamps.length === 0) {
    return (
      <section className="max-w-[1200px] mx-auto px-8 -mt-16 text-center">
        <div className="bg-white p-10 rounded-3xl text-gray-400">Belum ada bootcamp yang tersedia.</div>
      </section>
    );
  }

  return (
    <section className="max-w-[1200px] mx-auto px-8 -mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pb-20 mt-10">
        {bootcamps.map((bootcamp) => (
          <BootcampCard key={bootcamp.id} bootcamp={bootcamp} />
        ))}
      </div>
    </section>
  )
}