import HeaderSection from "@/features/profile/components/header/components/header-section";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function HeaderContainer({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  return <HeaderSection profto={profto} userId={userId} />;
}