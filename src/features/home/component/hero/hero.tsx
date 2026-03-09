import HeroContent from "./hero-content";
import HeroImage from "./hero-image";

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[70vh]">
      <HeroContent />
      <HeroImage />
    </section>
  );
}
