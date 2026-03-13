import CertificateSection from "@/features/profile/components/certificate/container/certificate-container";
import CollaborationSection from "@/features/profile/components/collaborate/container/collaboration-container";
import ExperienceSection from "@/features/profile/components/experience/container/experience-container";
import HeaderSection from "@/features/profile/components/header/container/header-container";
import ProjectSection from "@/features/profile/components/project/container/project-container";
import RoleSection from "@/features/profile/components/role/role-section";


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