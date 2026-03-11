import IconButton from "@/components/ui/button/icon-button";
import ProjectCard from "@/components/ui/card/project-card";

export default function ProjectSection() {
  return (
    <section className="w-full py-16">
      <div className="flex justify-between items-center mb-10 px-[22%]">
        <h2 className="text-2xl font-bold">Projek</h2>

        <div className="flex gap-4">
          <IconButton icon="/icons/plus.svg" alt="add" />
          <IconButton icon="/icons/edit.svg" alt="edit" />
        </div>
      </div>

      <div className="px-[5%]">
        <p className="text-lg font-semibold mb-6">UI/UX Designer</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <ProjectCard
              key={item}
              title="Green Forest - App"
              date="20 Feb 2026"
              image="/images/project-placeholder.png"
            />
          ))}
        </div>
      </div>

      <div className="px-[5%] mt-16">
        <p className="text-lg font-semibold mb-6">Cyber Security</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <ProjectCard
              key={item}
              title="Course english website"
              date="20 Feb 2026"
              image="/images/project-placeholder.png"
            />
          ))}
        </div>
      </div>
    </section>
  );
}