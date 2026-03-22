import { CV } from "../../schemas/cv.schema";

type Education = CV["educations"][number];

export function EducationItem({
  university,
  location,
  date,
  degree,
  descriptions,
}: Education) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between flex-wrap text-sm font-semibold">
        <div className="flex gap-2">
          <span>{university}</span>
          <span>—</span>
          <span>{location}</span>
        </div>
        <span className="text-xs">{date}</span>
      </div>

      <p className="text-sm">{degree}</p>

      <ul className="list-disc ml-5 text-sm text-gray-700">
        {descriptions.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}