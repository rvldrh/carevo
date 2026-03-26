import HeaderContent from "@/features/profile/components/header/components/header-content";
import HeaderEditClient from "@/features/profile/components/header/components/header-edit-client";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function HeaderSection({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  return (
    <section className="pt-[12%] pb-[15%] px-[22%] bg-[var(--white)] relative">
      <HeaderEditClient profto={profto} userId={userId} />

      <HeaderContent profto={profto} />
    </section>
  );
}