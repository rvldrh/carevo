import CertificateSection from "@/features/profile/component/certificate-section";
import CollaborationSection from "@/features/profile/component/collaborate-section";
import ExperienceSection from "@/features/profile/component/experience-secition";
import HeaderSection from "@/features/profile/component/header-section";
import ProjectSection from "@/features/profile/component/projects-section";
import RoleSection from "@/features/profile/component/role-section";


export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen bg-[#eef1fb]">
      <div className="max-w mx-auto">
        <HeaderSection />
        <ExperienceSection />
        <RoleSection />
        <ProjectSection />
        <RoleSection />
        <CertificateSection />
        <CollaborationSection />
      </div>
    </div>
  );
}