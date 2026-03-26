import ExperienceSection from "@/features/profile/components/experience/components/experience-section";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function ExperienceContainer({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  return <ExperienceSection profto={profto} userId={userId} />;
}