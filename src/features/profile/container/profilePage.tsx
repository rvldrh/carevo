import CertificateSection from "@/features/profile/certificate/container/certificate-container";
import CollaborationSection from "@/features/profile/collaborate/container/collaboration-container";
import ExperienceSection from "@/features/profile/experience/container/experience-container";
import HeaderSection from "@/features/profile/header/container/header-container";
import ProjectSection from "@/features/profile/project/container/project-container";
import RoleSection from "@/features/profile/role/role-section";


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