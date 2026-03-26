import Image from "next/image";
import type { Project } from "@/features/profile/types/profto";
import { FILE_BASE_URL } from "@/shared/constants/api";

export default function ProjectList({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-10 text-[var(--gray-500)]">
        Belum ada projek yang ditambahkan.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div key={`${project.name}-${project.professionRole}-${project.date}`} className="group relative bg-[var(--white)] rounded-xl overflow-hidden border border-[var(--gray-200)] hover:shadow-xl transition-all duration-300">
          <div className="aspect-video bg-[var(--gray-100)] flex items-center justify-center relative">
            {project.imageFileId ? (
              <Image 
                src={`${FILE_BASE_URL}/${project.imageFileId}`} 
                alt={project.name || "Projek"} 
                fill 
                className="object-cover" 
              />
            ) : (
              <div className="text-[var(--gray-400)]">Tanpa Gambar</div>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-[var(--black)] mb-2 group-hover:text-[var(--blue-500)] transition-colors">
              {project.name}
            </h3>

            <p className="text-md text-[var(--blue-500)] font-semibold mb-4">
              {project.professionRole}
            </p>

            <p className="text-[var(--gray-600)] line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}