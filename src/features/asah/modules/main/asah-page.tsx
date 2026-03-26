"use client";

import CompanySection from "@/features/asah/components/sections/company-section"
import CertificateSection from "@/features/asah/components/sections/certificate-section"
import BootcampSection from "@/features/asah/components/sections/bootcamp-section"
import WelcomeCard from "@/features/asah/components/sections/welcome-card"
import CategoryFilter from "@/features/asah/components/sections/category-filter"
import { useGetCertifications, useGetBootcamps } from "@/features/asah/hooks/use-asah";

export default function AsahPage() {
  const { data: certifications, isLoading: certLoading } = useGetCertifications({ limit: 3 });
  const { data: bootcamps, isLoading: bootLoading } = useGetBootcamps({ limit: 3 });

  return (
     <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500 flex justify-center">
      <div className="w-[1440px] relative">
        <WelcomeCard />
        <CategoryFilter />
        <CompanySection />
        
        <CertificateSection 
          certifications={certifications || []} 
          isLoading={certLoading} 
        />

        <BootcampSection 
          bootcamps={bootcamps || []} 
          isLoading={bootLoading} 
        />
      </div>
    </main>
  )
}