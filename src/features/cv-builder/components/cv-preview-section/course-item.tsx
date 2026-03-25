import { Course } from "../../schemas/cv.schema";

export function CourseItem({
  name,
  organizer,
  location,
  startYear,
  endYear,
  description,
  url,
}: Course) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between flex-wrap text-sm font-semibold">
        <div className="flex gap-2">
          <span>{name}</span>
          <span>—</span>
          <span>{organizer}</span>
        </div>
        <span className="text-xs text-gray-500">
          {startYear} – {endYear}
          {location && ` · ${location}`}
        </span>
      </div>

      {description && (
        <p className="text-sm text-gray-700">{description}</p>
      )}

      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer"
          className="text-xs text-blue-500 underline">
          {url}
        </a>
      )}
    </div>
  );
}