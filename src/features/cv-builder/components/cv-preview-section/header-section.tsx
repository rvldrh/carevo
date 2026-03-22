import { CV } from "../../schemas/cv.schema";
import { Divider } from "./divider";

type HeaderProps = CV["personalInfo"];

export function Header({
  fullName,
  title,
  email,
  phone,
  location,
  summary,
}: HeaderProps) {
  return (
    <div className="text-center space-y-3 mb-6">
      <h1 className="text-2xl md:text-3xl font-semibold">{fullName}</h1>

      <div className="flex flex-wrap justify-center items-center gap-2 text-blue-500 text-sm md:text-base">
        <span>{title}</span>
        <Divider />
        <span>{email}</span>
        <Divider />
        <span>{phone}</span>
      </div>

      <p className="text-sm text-gray-700">{location}</p>

      <p className="text-sm text-gray-800 text-justify max-w-[650px] mx-auto">
        {summary}
      </p>
    </div>
  );
}