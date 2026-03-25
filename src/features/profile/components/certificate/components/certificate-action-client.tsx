"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalButtons } from "@/components/ui/modal/component/ModalButtons";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { certificateFields } from "@/features/profile/constatnts/certificate-fields";

export default function CertificateActionsClient() {
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
          title="Tambah Sertifikat"
          open={openModalAdd}
          onClose={() => setOpenModalAdd(false)}
        >
          <ModalForm
            title="Tambah Sertifikat"
            fields={certificateFields}
            onCancel={() => setOpenModalAdd(false)}
            onSubmit={() => console.warn("Certificate submitted")}
          />

          <ModalButtons
            cancelText="Batal"
            submitText="Simpan"
            onCancel={() => setOpenModalAdd(false)}
            onSubmit={() => console.warn("Certificate submitted")}
          />
        </Modal>
      )}

      {openModalEdit && (
        <Modal
          title="Edit Sertifikat"
          open={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
        >
          <ModalForm
            title="Edit Sertifikat"
            fields={certificateFields}
            onCancel={() => setOpenModalEdit(false)}
            onSubmit={() => console.warn("Certificate updated")}
          />

          <ModalButtons
            cancelText="Batal"
            submitText="Simpan"
            onCancel={() => setOpenModalEdit(false)}
            onSubmit={() => console.warn("Certificate updated")}
          />
        </Modal>
      )}
    </>
  );
}