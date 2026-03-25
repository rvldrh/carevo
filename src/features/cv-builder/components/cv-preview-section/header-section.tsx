import type { PersonalInformation } from "../../schemas/cv.schema";

type Props = PersonalInformation;

export function Header({ firstName, lastName, profile, phone, email, address }: Props) {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="text-center mb-8">
      {/* Nama Besar & Bold */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{fullName}</h1>

      {/* Baris Info: Role | Email | Phone */}
      <div className="flex flex-wrap justify-center items-center gap-2 text-[#4A90E2] font-medium text-base mb-1">
        <span>UI UX Enthusiast</span> {/* Ganti statis ini jika ada field role di DB */}
        <span className="text-gray-400">|</span>
        {email && <span>{email}</span>}
        <span className="text-gray-400">|</span>
        {phone && <span>{phone}</span>}
      </div>

      {/* Baris Lokasi */}
      <div className="text-gray-800 text-sm mb-6">
        {address || "Malang, Jawa Timur"}
      </div>

      {/* Profil / Summary */}
      {profile && (
        <p className="text-[13px] leading-relaxed text-gray-900 text-justify w-full">
          {profile}
        </p>
      )}
    </div>
  );
}