import CertificateSection from "@/features/profile/sections/certificate-section";
import CollaborationSection from "@/features/profile/sections/collaboration-section";
import ExperienceSection from "@/features/profile/sections/experience-section";
import HeaderSection from "@/features/profile/sections/header-section";
import ProjectSection from "@/features/profile/sections/project-section";
import RoleSection from "@/features/profile/sections/role-section";


export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen bg-[var(--white)] py-12">
      <div className="max-w mx-auto">
        <HeaderSection />
        <ExperienceSection />
        <RoleSection />
        <ProjectSection />
        <CertificateSection />
        <CollaborationSection />
      </div>
    </div>
  );
}