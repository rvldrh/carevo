import { create } from "zustand";
import type { Project } from "@/features/profile/types/project.type";

type State = {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  addProject: (p: Project) => void;
  updateProject: (p: Project) => void;
};

export const useProjectStore = create<State>((set) => ({
  projects: [],

  setProjects: (projects) => set({ projects }),

  addProject: (p) =>
    set((s) => ({
      projects: [...s.projects, p],
    })),

  updateProject: (updated) =>
    set((s) => ({
      projects: s.projects.map((p) =>
        p.id === updated.id ? updated : p
      ),
    })),
}));