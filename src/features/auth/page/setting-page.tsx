"use client";

import ProfileCard from "@/features/auth/components/setting/profile-card";
import { useGetProfto } from "@/features/auth/hooks/use-get-profto";
import { useCurrentUser } from "@/hooks/use-user";

export default function SettingsPage() {
  const { data: userData } = useCurrentUser();

  const username = userData?.username;

  const { data, isLoading } = useGetProfto(username ?? "");

  if (!username) {
    return <div>User belum login</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Profile tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100">
      <ProfileCard profile={data} user={userData} />
    </div>
  );
}