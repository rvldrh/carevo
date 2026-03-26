
import ProfileCard from "@/features/auth/components/setting/profile-card";
import type { Profile } from "../types/auth.types";

 const profileDummy: Profile = {
  id: "user_001",
  username: "bagas_aditha",
  email: "bagasadithapratama@gmail.com",
  avatarUrl: "/icons/profile.svg",
};

export default async function SettingsPage() {


  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100">
      <ProfileCard profile={profileDummy} />
    </div>
  );
}