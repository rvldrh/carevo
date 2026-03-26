import type { PersonalInformation } from "../../schemas/cv.schema";

type Props = PersonalInformation;

export function Header({ firstName, lastName, profile, phone, email, address }: Props) {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="text-center mb-8">
      {}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{fullName}</h1>

      {}
      <div className="flex flex-wrap justify-center items-center gap-2 text-[#4A90E2] font-medium text-base mb-1">
        <span>UI UX Enthusiast</span> {}
        <span className="text-gray-400">|</span>
        {email && <span>{email}</span>}
        <span className="text-gray-400">|</span>
        {phone && <span>{phone}</span>}
      </div>

      {}
      <div className="text-gray-800 text-sm mb-6">
        {address || "Malang, Jawa Timur"}
      </div>

      {}
      {profile && (
        <p className="text-[13px] leading-relaxed text-gray-900 text-justify w-full">
          {profile}
        </p>
      )}
    </div>
  );
}