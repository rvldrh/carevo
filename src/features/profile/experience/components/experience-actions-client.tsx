"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { ModalButtons } from "@/components/ui/modal/component/ModalButtons";
import { experienceFields } from "@/features/profile/config/experience-fields";

export default function ExperienceActionsClient() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

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

      {openModalAdd && (
        <Modal
          title="Tambah Pengalaman"
          open={openModalAdd}
          onClose={() => setOpenModalAdd(false)}
        >
          <ModalForm
            title="Tambah Pengalaman"
            fields={experienceFields}
            onCancel={() => setOpenModalAdd(false)}
            onSubmit={() => console.log("Experience submitted")}
          />

          <ModalButtons
            cancelText="Batal"
            submitText="Simpan"
            onCancel={() => setOpenModalAdd(false)}
            onSubmit={() => console.log("Experience submitted")}
          />
        </Modal>
      )}

      {openModalEdit && (
        <Modal
          title="Edit Pengalaman"
          open={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
        >
          <ModalForm
            title="Edit Pengalaman"
            fields={experienceFields}
            onCancel={() => setOpenModalEdit(false)}
            onSubmit={() => console.log("Experience updated")}
          />

          <ModalButtons
            cancelText="Batal"
            submitText="Simpan"
            onCancel={() => setOpenModalEdit(false)}
            onSubmit={() => console.log("Experience updated")}
          />
        </Modal>
      )}
    </>
  );
}