"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { headerFields } from "@/features/profile/constatnts/header-fields";
import { useUpdateProfto } from "@/features/profile/hooks/use-profto";
import type { ProftoResponse, UpdateProftoBody } from "@/features/profile/types/profto";
import type { FormState } from "@/shared/types/ModalForm";

export default function HeaderEditClient({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  const [openModal, setOpenModal] = useState(false);
  const updateProfto = useUpdateProfto();

  const handleSubmit = async (values: FormState) => {
    const body: UpdateProftoBody = {
      name: (values.name as string)?.trim() || profto?.name || null,
      professionRole: (values.role as string)?.trim() || profto?.professionRole || null,
      summary: (values.about as string)?.trim() || profto?.summary || null,
      lastEducation: (values.education as string)?.trim() || profto?.lastEducation || null,
      email: (values.email as string)?.trim() || profto?.email || null,
      avatarFileId: profto?.avatarFileId || null,
      cvFileId: profto?.cvFileId || null,
      links: (values.link as string) ? [{ name: "Main", url: (values.link as string) }] : (profto?.links || undefined),
    };


    try {
      await updateProfto.mutateAsync({ userId, body });
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  return (
    <>
      <IconButton
        icon="/icons/edit.svg"
        alt="edit"
        className="absolute right-[22%] top-[10%]"
        onClick={() => setOpenModal(true)}
      />


      <Modal

        title="Edit Awalan"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Informasi
          </h3>

          <ModalForm
            title="Edit Awalan"
            fields={headerFields}
            onCancel={() => setOpenModal(false)}
            onSubmit={handleSubmit}
            defaultValues={{
              name: profto?.name ?? "",
              education: profto?.lastEducation ?? "",
              role: profto?.professionRole ?? "",
              about: profto?.summary ?? "",
              email: profto?.email ?? "",
              link: profto?.links?.[0]?.url ?? "",
            }}
          />

        </div>
      </Modal>

    </>
  );
}