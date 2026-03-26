import ExperienceList from "@/features/profile/components/experience/components/expereience-list";
import ExperienceActionsClient from "@/features/profile/components/experience/components/experience-actions-client";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function ExperienceSection({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  return (
    <section className="px-[22%] py-16 border-t bg-[var(--blue-100)] border-[var(--gray-300)]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-[var(--black)]">
          Pengalaman
        </h2>

        <ExperienceActionsClient profto={profto} userId={userId} />
      </div>

      <ExperienceList experiences={profto?.experiences || []} />
    </section>
  );
}