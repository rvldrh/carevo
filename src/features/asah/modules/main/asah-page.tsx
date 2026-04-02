"use client";

import CompanySection from "@/features/asah/components/sections/company-section";
import CertificateSection from "@/features/asah/components/sections/certificate-section";
import BootcampSection from "@/features/asah/components/sections/bootcamp-section";
import WelcomeCard from "@/features/asah/components/sections/welcome-card";
import CategoryFilter from "@/features/asah/components/sections/category-filter";
import {
  useGetCertifications,
  useGetBootcamps,
} from "@/features/asah/hooks/use-asah";
import { useGetProfto } from "@/features/auth/hooks/use-get-profto";
import { useCurrentUser } from "@/hooks/use-user";

export default function AsahPage() {
  const { data: certifications, isLoading: certLoading } =
    useGetCertifications();
  const { data: bootcamps, isLoading: bootLoading } = useGetBootcamps();
  const { data: userData } = useCurrentUser();

  const { data: user, isLoading: userLoading } = useGetProfto(
    userData?.username ?? "",
  );

  console.log(user)

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500 flex justify-center">
      <div className="w-[1440px] relative">
        <WelcomeCard
          username={user?.username}
          isLoading={userLoading}
          profile={user}
        />
        <CategoryFilter />
        <CompanySection />

        <CertificateSection
          certifications={certifications || []}
          isLoading={certLoading}
        />

        <BootcampSection bootcamps={bootcamps || []} isLoading={bootLoading} />
      </div>
    </main>
  );
}
