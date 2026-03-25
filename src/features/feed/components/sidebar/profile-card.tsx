import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-[20px] shadow-md overflow-hidden">

      <div className="bg-blue-400 p-6 flex items-center gap-4">
        <Image
          src="/icons/profile.svg"
          className="w-16 h-16 rounded-full"
          alt="profile"
          width={64}
          height={64}
        />
        <span className="text-white font-semibold text-lg">
          Profile
        </span>
      </div>

      <div className="p-4">
        <h2 className="font-semibold">Bagas Aditha Pratama</h2>
        <p className="text-sm text-gray-500">
          Informatics Engineering
        </p>
      </div>

    </div>
  );
}