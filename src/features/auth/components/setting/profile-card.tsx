import { Profile } from "@/features/auth/types/auth.types";
import ProfileForm from "@/features/auth/components/setting/profile-form";
import AvatarUpload from "@/features/auth/components/setting/avatar-uplaod";

interface Props {
  profile: Profile;
}

export default function ProfileCard({ profile }: Props) {
  return (
    <div className="w-[535px] p-8 bg-gray-50 rounded-2xl shadow">
      <div className="flex flex-col items-center gap-6">
        
        <AvatarUpload avatarUrl={profile.avatarUrl} />

        <ProfileForm profile={profile} />

      </div>
    </div>
  );
}