import ProfileForm from "@/features/auth/components/setting/profile-form";
import AvatarUpload from "@/features/auth/components/setting/avatar-uplaod";
import type { Profile } from "@/features/auth/types/profile.type";

interface Props {
  profile: Profile;
  user: {
    username: string;
    email?: string;
  } | null;
}
export default function ProfileCard({ profile, user }: Props) {
  return (
    <div className="w-[535px] p-8 bg-gray-50 rounded-2xl shadow">
      <div className="flex flex-col items-center gap-6">
        
        <AvatarUpload
          avatarFileId={profile.avatarFileId}
          userId={profile.userId}
        />

        {user && <ProfileForm profile={profile} />}

      </div>
    </div>
  );
}