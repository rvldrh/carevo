import { CV } from "@/features/cv-builder/schemas/cv.schema";

type Organization = CV["organizations"][number];

type Props = Organization;

export function OrganizationItem({
  name,
  location,
  date,
  role,
  descriptions,
}: Props) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between flex-wrap text-sm font-semibold">
        <div className="flex gap-2">
          <span>{name}</span>
          <span>—</span>
          <span>{location}</span>
        </div>
        <span className="text-xs">{date}</span>
      </div>

      <p className="text-sm font-medium">{role}</p>

      <ul className="list-disc ml-5 text-sm text-gray-700">
        {descriptions.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}