"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { projectFields } from "@/features/profile/constatnts/project-fields";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function ProjectEditorClient({
  profto: _profto,
  userId: _userId,
}: {
  profto: ProftoResponse | null;
  userId: string;
}) {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <div className="flex gap-4">
        <IconButton
          icon="/icons/plus.svg"
          alt="add"
          onClick={() => setOpenAdd(true)}
        />

        <IconButton
          icon="/icons/edit.svg"
          alt="edit"
          onClick={() => setOpenEdit(true)}
        />
      </div>

      {}
      <Modal
        title="Tambah projek"
        open={openAdd}
        onClose={() => setOpenAdd(false)}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>

          <ModalForm
            title="Tambah Projek"
            fields={projectFields}
            onCancel={() => setOpenAdd(false)}
            onSubmit={() => console.warn("Project added")}
          />
        </div>
      </Modal>

      {}
      <Modal
        title="Edit projek"
        open={openEdit}
        onClose={() => setOpenEdit(false)}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>

          <ModalForm
            title="Edit projek"
            fields={projectFields}
            onCancel={() => setOpenEdit(false)}
            onSubmit={() => console.warn("Project edited")}
            submitText="Edit"
          />
        </div>
      </Modal>
    </>
  );
}
