import BootcampCard from "@/components/ui/card/bootcamp-card";
import type { Bootcamp } from "@/features/asah/types/asah";

interface Props {
  bootcamps?: Bootcamp[];
  isLoading?: boolean;
}

export default function BootcampSection({ bootcamps, isLoading }: Props) {
  if (isLoading) {
    return (
      <section className="mt-10 flex flex-col items-center gap-4 pb-20">
        <h2 className="text-xl font-semibold">Ikuti Bootcamp untuk meningkatkan Skill mu</h2>
        <div className="w-[901px] h-80 bg-gray-200/50 animate-pulse rounded-2xl flex items-center justify-center text-gray-400">
           Memuat Bootcamp...
        </div>
      </section>
    );
  }

  const items = bootcamps || [];

  return (
    <section className="mt-10 flex flex-col items-center gap-4 pb-20">
      <h2 className="text-xl font-semibold">
        Ikuti Bootcamp untuk meningkatkan Skill mu
      </h2>

      <div className="w-[901px] h-80 bg-gradient-to-r from-blue-500 via-purple-600 to-teal-400 rounded-2xl flex items-center justify-center gap-6 shadow-xl">
        {items.length === 0 ? (
          <div className="text-white/70 italic text-sm">Belum tersedia.</div>
        ) : (
          items.map((card) => (
            <BootcampCard
              key={card.id}
              bootcamp={card}
            />
          )).slice(0, 3)
        )}
      </div>
    </section>
  )
}