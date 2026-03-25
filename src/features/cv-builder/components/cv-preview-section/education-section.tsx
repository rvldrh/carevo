import type { Education } from "../../schemas/cv.schema";
import { renderDescription } from "../../utils/description-renderer";

export function EducationItem({
  educationLevel,
  institution,
  city,
  studyProgram,
  startYear,
  endYear,
  score,
  maxScale,
  description,
}: Education) {
  return (
    <div className="space-y-1 mt-1">
      <div className="flex justify-between flex-wrap text-sm font-semibold text-gray-900">
        <div className="flex gap-2">
          <span>{institution}</span>
          <span>—</span>
          <span>{city}</span>
        </div>
        <span className="text-[13px] text-gray-800">
          {startYear} – {endYear}
        </span>
      </div>

      <p className="text-[13px] text-gray-800">
        {educationLevel}{studyProgram ? `, ${studyProgram}` : ''}
        {score !== undefined ? `, IPK: ${score}${maxScale && maxScale !== 4 ? ` / ${maxScale}` : ''}` : ''}
      </p>

      {renderDescription(description)}
    </div>
  );
}