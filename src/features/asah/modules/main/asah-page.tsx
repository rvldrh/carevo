import CompanySection from "@/features/asah/components/sections/company-section"
import CertificateSection from "@/features/asah/components/sections/certificate-section"
import BootcampSection from "@/features/asah/components/sections/bootcamp-section"
import WelcomeCard from "@/features/asah/components/sections/welcome-card"
import CategoryFilter from "@/features/asah/components/sections/category-filter"

export default function AsahPage() {
  return (
     <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500 flex justify-center">
      <div className="w-[1440px] relative">

        <WelcomeCard />

        <CategoryFilter />

        <CompanySection />

        <CertificateSection />

        <BootcampSection />

      </div>
    </main>
  )
}