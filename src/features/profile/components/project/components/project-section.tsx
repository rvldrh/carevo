import ProjectList from "@/features/profile/components/project/components/project-list";
import ProjectEditClient from "@/features/profile/components/project/components/project-edit-client";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function ProjectSection({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  return (
    <section className="px-[22%] py-16 border-t bg-[var(--white)] border-[var(--gray-300)]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-[var(--black)]">
          Projek
        </h2>

        <ProjectEditClient profto={profto} userId={userId} />
      </div>

      <ProjectList projects={profto?.projects || []} />
    </section>
  );
}