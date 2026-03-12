import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="w-full rounded-[28px] bg-[#F6F8F9] overflow-hidden flex flex-col">
      <div className="bg-[#3A71BF] rounded-t-[28px] flex items-end justify-center px-6 pt-6 pb-4 relative min-h-[131px]">
        <div className="absolute left-6 -bottom-10">
          <div className="w-[100px] h-[100px] rounded-full border-4 border-[#F6F8F9] overflow-hidden">
            <Image
              src="/icons/photo-profile.svg"
              alt="Profile avatar"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        </div>

        <span className="text-white font-semibold text-2xl mb-2">
          Profile
        </span>
      </div>
      <div className="pt-14 px-8 pb-8 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-black font-semibold text-xl">
            Bagas Aditha Pratama
          </h2>

          <h3 className="text-black font-semibold text-xl">
            Informatics Engineering
          </h3>
        </div>

        <div className="flex flex-col gap-1">

          <p className="text-[#77767B] font-semibold text-base">
            UI/UX Designer
          </p>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/location.svg"
              alt="location"
              width={16}
              height={16}
            />
            <span className="text-[#77767B] text-xs">
              Malang, Jawa Timur Indonesia
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/group-profile.svg"
              alt="job"
              width={16}
              height={16}
            />
            <span className="text-[#77767B] text-xs font-semibold">
              UI/UX Designer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}