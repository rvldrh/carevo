"use client";

import CertificateSection from "@/features/profile/sections/certificate-section";
import CollaborationSection from "@/features/profile/sections/collaboration-section";
import ExperienceSection from "@/features/profile/sections/experience-section";
import HeaderSection from "@/features/profile/sections/header-section";
import ProjectSection from "@/features/profile/sections/project-section";
import { useCurrentUser } from "@/hooks/use-user";
import { useGetProfto } from "@/features/profile/hooks/use-profto";

export default function ProfilePage() {
  const { data: user, isLoading: userLoading } = useCurrentUser();
  const { data: profto, isLoading: proftoLoading } = useGetProfto(user?.username || "");

  if (userLoading || proftoLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-[var(--white)]">
        <div className="text-xl font-semibold text-gray-500 animate-pulse">Memuat Profil...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-[var(--white)]">
        <div className="text-xl font-semibold text-red-500">Anda tidak terhubung. Silakan login.</div>
      </div>
    );
  }

  const proftoData = profto || null;

  return (
    <div className="w-full min-h-screen bg-[var(--white)] py-12">
      <div className="max-w mx-auto">
        <HeaderSection profto={proftoData} userId={user.userId} />
        <ExperienceSection profto={proftoData} userId={user.userId} />
        {}
        <ProjectSection profto={proftoData} userId={user.userId} />
        <CertificateSection profto={proftoData} userId={user.userId} />
        <CollaborationSection profto={proftoData} userId={user.userId} />
      </div>
    </div>
  );
}