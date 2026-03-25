import type { WorkExperience } from "../../schemas/cv.schema";
import { renderDescription } from "../../utils/description-renderer";

export function ExperienceItem({
  position,
  companyName,
  city,
  startYear,
  endYear,
  description,
}: WorkExperience) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between flex-wrap text-sm font-semibold text-gray-900">
        <div className="flex gap-2">
          <span>{position}</span>
          <span>—</span>
          <span>{String(companyName)}</span>
        </div>
        <span className="text-[13px] text-gray-800">
          {startYear} – {endYear}
          {city ? ` · ${city}` : ""}
        </span>
      </div>

      {renderDescription(description)}
    </div>
  );
}