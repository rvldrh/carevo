import ProjectSection from "@/features/profile/components/project/components/project-section";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function ProjectContainer({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  return <ProjectSection profto={profto} userId={userId} />;
}