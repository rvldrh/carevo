const experiences = [
  {
    year: "2024 - 2026",
    title: "UI/UX Designer & Documentation",
    description:
      "Merancang user flow dan interface serta dokumentasi teknis.",
  },
];

export default function ExperienceList() {
  return (
    <div className="flex flex-col gap-8">
      {experiences.map((exp) => (
        <div key={exp.title} className="flex gap-8">
          <span className="text-lg font-semibold text-[var(--blue-500)] min-w-[120px]">
            {exp.year}
          </span>

          <div>
            <p className="text-xl font-bold">{exp.title}</p>

            <p className="text-lg text-[var(--gray-600)] mt-2">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}