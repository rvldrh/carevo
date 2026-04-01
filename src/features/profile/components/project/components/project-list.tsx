"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/features/profile/types/profto";
import { getFile } from "@carevo/contracts/api";
import { useProjectStore } from "@/features/profile/stores/project-store";

function ProjectItem({ project }: { project: Project }) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  useEffect(() => {
    if (!project.imageFileId) return;
    
    let objectUrl: string;

    getFile(project.imageFileId)
    .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        setImgSrc(objectUrl);
      })
      .catch((err) => {
        console.error("Failed to load project image:", err);
      });
      
      return () => {
        if (objectUrl) {
          URL.revokeObjectURL(objectUrl);
        }
      };
    }, [project.imageFileId]); 

  return (
    <div className="group relative bg-[var(--white)] rounded-xl overflow-hidden border border-[var(--gray-200)] hover:shadow-xl transition-all duration-300">
      <div className="aspect-video bg-[var(--gray-100)] flex items-center justify-center relative">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={project.name || "Projek"}
            fill
            className="object-cover"
            unoptimized 
          />
        ) : (
          <div className="text-[var(--gray-400)]">Loading...</div>
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
  );
}

export default function ProjectList({ projects }: { projects: Project[] }) {
   const setProjects = useProjectStore((s) => s.setProjects)
   const projectsFromStore = useProjectStore((s) => s.projects)

  useEffect(() => {
    setProjects(projects.map(p => ({
      id: crypto.randomUUID(),
      name: p.name || "",
      professionRole: p.professionRole || "",
      imageFileId: p.imageFileId || "",
      date: p.date || "",
      description: p.description || "",
    })))
  }, [projects, setProjects])

  if (projects.length === 0) {
    return (
      <div className="text-center py-10 text-[var(--gray-500)]">
        Belum ada projek yang ditambahkan.
      </div>
    );
  }

  console.log(projectsFromStore)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectItem
          key={`${project.name}-${project.professionRole}-${project.date}`}
          project={project}
        />
      ))}
    </div>
  );
}