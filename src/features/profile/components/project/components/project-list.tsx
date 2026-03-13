import ProjectCard from "@/components/ui/card/project-card";

export default function ProjectList() {
  return (
    <div className="px-[5%]">
      <p className="text-lg font-semibold mb-6">UI/UX Designer</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <ProjectCard
            key={item}
            title="Green Forest - App"
            date="20 Feb 2026"
            image="/illustration/portfolio-card.svg"
            href="/main/project/"
          />
        ))}
      </div>
    </div>
  );
}