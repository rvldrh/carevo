import BootcampCard from "@/components/ui/card/boorcamp-card";
import { bootcamps } from "@/features/asah/data/bootcamp";

export default function BootcampSection() {
  return (
    <section className="mt-10 flex flex-col items-center gap-4 pb-20">
      <h2 className="text-xl font-semibold">
        Ikuti Bootcamp untuk meningkatkan Skill mu
      </h2>

      <div className="w-[901px] h-80 bg-gradient-to-r from-blue-500 via-purple-600 to-teal-400 rounded-2xl flex items-center justify-center gap-6">
        {bootcamps.map((card) => (
          <BootcampCard
            key={card.id}
            bootcamp={card}
          />
        ))}
      </div>
    </section>
  )
}