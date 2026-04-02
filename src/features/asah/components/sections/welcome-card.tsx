import { useFileUrl } from "@/features/auth/hooks/use-fil-utl";
import type { Profile } from "@/features/auth/schemas/profile.schema";
import Image from "next/image";


export default function WelcomeCard({username, isLoading, profile}: { username: string | undefined, isLoading?: boolean, profile: Profile | null }) {
  const { data: fileUrl } = useFileUrl(profile?.avatarFileId);

  return (
    <section className="mt-16 flex justify-center">
      <div className="w-[907px] h-32 bg-blue-400 rounded-[20px] flex items-center justify-center gap-5">
        <Image
          src={fileUrl || "/icons/profile.svg"}
          alt="profile"
          width={12}
          height={12}
          className="w-12 h-12 rounded-full"
        />

        <div className="text-white text-center">
          {isLoading ? (
            <p className="text-xl font-semibold">
              Memuat...
            </p>
          ) : (
            <p className="text-xl font-semibold">
              Selamat datang di asah {username} 👋
            </p>
          )}
          <p className="text-xl font-semibold">
            Tingkatkan skill UI/UX Designer-mu
          </p>
        </div>
      </div>
    </section>
  );
}