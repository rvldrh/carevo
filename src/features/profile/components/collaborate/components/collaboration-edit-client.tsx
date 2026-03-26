"use client";

import IconButton from "@/components/ui/button/icon-button";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function CollaborationEditClient({ profto: _profto, userId: _userId }: { profto: ProftoResponse | null; userId: string }) {
  return (
    <IconButton
      icon="/icons/edit.svg"
      alt="edit"
      className="absolute top-6 right-[22%]"
      onClick={() => console.warn("Open edit collaboration")}
    />
  );
}