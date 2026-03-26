"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { certificateFields } from "@/features/profile/constatnts/certificate-fields";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function CertificateActionsClient({ profto: _profto, userId: _userId }: { profto: ProftoResponse | null; userId: string }) {
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
            submitText="Simpan"
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
            submitText="Simpan"
          />
        </Modal>
      )}
    </>
  );
}