import { Organization } from "../../schemas/cv.schema";

export function OrganizationItem({
  position,
  organizationName,
  city,
  startYear,
  endYear,
  description,
}: Organization) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between flex-wrap text-sm font-semibold">
        <div className="flex gap-2">
          <span>{position}</span>
          <span>—</span>
          <span>{organizationName}</span>
        </div>
        <span className="text-xs text-gray-500">
          {startYear} – {endYear}
          {city && ` · ${city}`}
        </span>
      </div>

      {description && (
        <p className="text-sm text-gray-700">{description}</p>
      )}
    </div>
  );
}