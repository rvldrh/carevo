import CollaborationSection from "@/features/profile/components/collaborate/components/collaboration-section";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function CollaborationContainer({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  return <CollaborationSection profto={profto} userId={userId} />;
}