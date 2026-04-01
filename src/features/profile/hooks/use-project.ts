import { updateProjects } from "../api/project.api";
import type { Project } from "@/features/profile/types/project.type";
import { useAuthStore } from "@/shared/utils/use-auth-store";
import { useProjectStore } from "../stores/project-store";

export function useProjects() {
  const { projects, addProject, updateProject } = useProjectStore();
  const userId = useAuthStore((s) => s.userId);

  const add = async (project: Project) => {
    const updated = [...projects, project];

    await updateProjects(userId!, { projects: updated });

    addProject(project);
  };

  const edit = async (project: Project) => {
    const updated = projects.map((p) =>
      p.id === project.id ? project : p
    );

    await updateProjects(userId!, { projects: updated });

    updateProject(project);
  };

  return {
    projects,
    add,
    edit,
  };
}