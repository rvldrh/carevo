import ProjectList from "@/features/profile/components/project/components/project-list";
import ProjectEditorClient from "@/features/profile/components/project/components/project-edit-client";

export default function ProjectSection() {
  return (
    <section className="w-full py-16 bg-[var(--blue-200)]">
      <div className="flex justify-between items-center mb-10 px-[22%]">
        <h2 className="text-2xl font-bold">Projek</h2>

        <ProjectEditorClient />
      </div>

      <ProjectList />
    </section>
  );
}