import { ProjectCard } from "@/features/profile/components/project/components/project-card";
import type { Project } from "@/features/profile/types/project.type";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return <p className="text-gray-500">No projects found</p>;
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
      "
    >
      {projects.map((project) => (
        <ProjectCard key={`${project.name}-${project.professionRole}`} project={project} />
      ))}
    </div>
  );
}