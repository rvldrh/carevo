import BootcampCard from "./bootcamp-card"

export default function BootcampGrid() {
  const bootcampSlots = Array.from({ length: 8 }, (_unused, slot) => `bootcamp-${slot}`);

  return (
    <section className="max-w-[1200px] mx-auto px-8 -mt-16">

      <div className="grid grid-cols-5 gap-8">

        {bootcampSlots.map((slotId) => (
          <BootcampCard key={slotId} />
        ))}

      </div>

    </section>
  )
}