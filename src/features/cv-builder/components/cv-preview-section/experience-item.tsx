import { WorkExperience } from "../../schemas/cv.schema";

export function ExperienceItem({
  position,
  companyName,
  employmentStatus,
  city,
  startYear,
  endYear,
  description,
}: WorkExperience) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between flex-wrap text-sm font-semibold">
        <div className="flex gap-2">
          <span>{position}</span>
          <span>—</span>
          <span>{companyName}</span>
        </div>
        <span className="text-xs text-gray-500">
          {startYear} – {endYear} · {city}
        </span>
      </div>

      <p className="text-xs text-gray-500 italic">{employmentStatus}</p>

      {description && (
        <p className="text-sm text-gray-700">{description}</p>
      )}
    </div>
  );
}