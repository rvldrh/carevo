import ExperienceList from "@/features/profile/experience/components/expereience-list";
import ExperienceActionsClient from "@/features/profile/experience/components/experience-actions-client";

export default function ExperienceSection() {
  return (
    <section className="px-[22%] py-16 border-t bg-[var(--blue-100)] border-[var(--gray-300)]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-[var(--black)]">
          Pengalaman
        </h2>

        <ExperienceActionsClient />
      </div>

      <ExperienceList />
    </section>
  );
}