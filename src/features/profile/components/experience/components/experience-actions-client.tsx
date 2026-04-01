"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { experienceFields } from "@/features/profile/constatnts/experience-fields";
import { useUpdateProfto } from "@/features/profile/hooks/use-profto";
import type { ProftoResponse, UpdateProftoBody, Experience } from "@/features/profile/types/profto";
import type { FormState } from "@/shared/types/ModalForm";

export default function ExperienceActionsClient({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const updateProfto = useUpdateProfto();

  const handleAdd = async (values: FormState) => {
    const newExperience: Experience = {
      name: values.name as string,
      startYear: Number(values.startYear) || 0,
      endYear: Number(values.endYear) || 0,
      description: values.description as string,
    };

    const body: UpdateProftoBody = {
      experiences: [...(profto?.experiences || []), newExperience],
    };

    try {
      await updateProfto.mutateAsync({ userId, body });
      setOpenModalAdd(false);
    } catch (error) {
      console.error("Failed to add experience", error);
    }
  };

  const handleEdit = async (values: FormState) => {
    const updatedExperience: Experience = {
      name: values.name as string,
      startYear: Number(values.startYear) || 0,
      endYear: Number(values.endYear) || 0,
      description: values.description as string,
    };

    const body: UpdateProftoBody = {
      experiences: [updatedExperience],
    };

    try {
      await updateProfto.mutateAsync({ userId, body });
      setOpenModalEdit(false);
    } catch (error) {
      console.error("Failed to edit experience", error);
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <IconButton
          icon="/icons/plus.svg"
          alt="add"
          onClick={() => setOpenModalAdd(true)}
        />

        <IconButton
          icon="/icons/edit.svg"
          alt="edit"
          onClick={() => setOpenModalEdit(true)}
        />
      </div>

      <Modal
        title="Tambah Pengalaman"
        open={openModalAdd}
        onClose={() => setOpenModalAdd(false)}
      >
        <div className="p-8 w-[550px]">
          <ModalForm
            title="Tambah Pengalaman"
            fields={experienceFields}
            onCancel={() => setOpenModalAdd(false)}
            onSubmit={handleAdd}
          />
        </div>
      </Modal>

      <Modal
        title="Edit Pengalaman"
        open={openModalEdit}
        onClose={() => setOpenModalEdit(false)}
      >
        <div className="p-8 w-[550px]">
          <ModalForm
            title="Edit Pengalaman"
            fields={experienceFields}
            onCancel={() => setOpenModalEdit(false)}
            onSubmit={handleEdit}
            defaultValues={profto?.experiences?.[0] ? {
              name: profto.experiences[0].name || "",
              startYear: String(profto.experiences[0].startYear || ""),
              endYear: String(profto.experiences[0].endYear || ""),
              description: profto.experiences[0].description || "",
            } : undefined}
          />
        </div>
      </Modal>
    </>
  );
}