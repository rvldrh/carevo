import type { Experience } from "@/features/profile/types/profto";

export default function ExperienceList({ experiences }: { experiences: Experience[] }) {
  if (experiences.length === 0) {
    return (
      <div className="text-center py-10 text-[var(--gray-500)]">
        Belum ada pengalaman yang ditambahkan.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {experiences.map((exp) => (
        <div key={`${exp.name}-${exp.startYear}`} className="flex gap-8">
          <span className="text-lg font-semibold text-[var(--blue-500)] min-w-[120px]">
            {exp.startYear} - {exp.endYear || "Sekarang"}
          </span>

          <div>
            <p className="text-xl font-bold">{exp.name}</p>

            {exp.description && (
              <p className="text-lg text-[var(--gray-600)] mt-2 whitespace-pre-line">
                {exp.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}