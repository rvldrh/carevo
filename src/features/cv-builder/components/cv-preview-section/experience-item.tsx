import { CV } from "../../schemas/cv.schema";

type Experience = CV["experiences"][number];

export function ExperienceItem({
  role,
  company,
  date,
  descriptions,
}: Experience) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between flex-wrap text-sm font-semibold">
        <div className="flex gap-2">
          <span>{role}</span>
          <span>—</span>
          <span>{company}</span>
        </div>
        <span className="text-xs">{date}</span>
      </div>

      <ul className="list-disc ml-5 text-sm text-gray-700">
        {descriptions.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}