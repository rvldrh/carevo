import BootcampCard from "./bootcamp-card"

export default function BootcampGrid() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 -mt-16">

      <div className="grid grid-cols-5 gap-8">

        {Array.from({ length: 8 }).map((_, i) => (
          <BootcampCard key={i} />
        ))}

      </div>

    </section>
  )
}