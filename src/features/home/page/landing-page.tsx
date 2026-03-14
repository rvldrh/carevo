import CvPreview from "@/features/home/component/cv-preview/cv-preview";    
import Hero from "@/features/home/component/hero/hero";

export default function LandingPageSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white from-[55%] to-[#B8E1FF]">
      <main className="relative w-full px-6 lg:px-[200px]">
        <Hero />
        <CvPreview />
      </main>
    </div>
  );
}