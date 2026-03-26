import CollaborationList from "@/features/profile/components/collaborate/components/collaboration-list";
import CollaborationEditClient from "@/features/profile/components/collaborate/components/collaboration-edit-client";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function CollaborationSection({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  return (
    <section className="w-full py-26 border-t bg-[var(--white)] border-[var(--gray-300)] relative">
      <CollaborationEditClient profto={profto} userId={userId} />

      <h2 className="text-3xl font-bold text-center mb-14">
        Ayo Berkolaborasi Denganku
      </h2>

      <CollaborationList profto={profto} />
    </section>
  );
}