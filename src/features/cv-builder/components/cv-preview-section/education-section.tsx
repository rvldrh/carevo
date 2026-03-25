import { Education } from "../../schemas/cv.schema";

export function EducationItem({
  educationLevel,
  institution,
  city,
  studyProgram,
  startYear,
  endYear,
  score,
  maxScale,
}: Education) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between flex-wrap text-sm font-semibold">
        <div className="flex gap-2">
          <span>{institution}</span>
          <span>—</span>
          <span>{city}</span>
        </div>
        <span className="text-xs text-gray-500">
          {startYear} – {endYear}
        </span>
      </div>

      <p className="text-sm">{educationLevel} · {studyProgram}</p>

      {score !== undefined && maxScale !== undefined && (
        <p className="text-xs text-gray-500">IPK: {score} / {maxScale}</p>
      )}
    </div>
  );
}