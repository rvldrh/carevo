"use client";

import IconButton from "@/components/ui/button/icon-button";
import CertificateCard from "@/components/ui/card/certificate-card";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalButtons } from "@/components/ui/modal/ModalButtons";
import { ModalForm } from "@/components/ui/modal/ModalForm";
import { useState } from "react";
import { certificateFields } from "@/features/profile/config/certificate-fields";

export default function CertificateSection() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  return (
    <section className="w-full py-16 border-t bg-[var(--blue-200)] border-[var(--gray-300)]">
      <div className="flex justify-between items-center mb-10 px-[22%]">
        <h2 className="text-2xl font-bold">Sertifikat</h2>

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
      </div>

      <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <CertificateCard
          title="Certified Ethical Hacker"
          date="06 Agustus 2025"
          image="/icons/sertificate-card.svg"
        />

        <CertificateCard
          title="Bootcamp Product Design"
          date="12 Mei 2025"
          image="/icons/sertificate-card.svg"
        />
      </div>
      {openModalAdd ? (
        <Modal
          title="Tambah Pengalaman"
          open={openModalAdd}
          onClose={() => setOpenModalAdd(false)}
        >
          <ModalForm
            title="Tambah Pengalaman"
            fields={certificateFields}
            onCancel={() => setOpenModalAdd(false)}
            onSubmit={() => console.log("Experience Data submitted")}
          />

          <ModalButtons
            cancelText="Batal"
            submitText="Simpan"
            onCancel={() => setOpenModalAdd(false)}
            onSubmit={() => console.log("Experience Data submitted")}
          />
        </Modal>
      ) : (
        <Modal
          title="Edit Pengalaman"
          open={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
        >
          <ModalForm
            title="Edit Pengalaman"
            fields={certificateFields}
            onCancel={() => setOpenModalEdit(false)}
            onSubmit={() => console.log("Experience Data submitted")}
          />

          <ModalButtons
            cancelText="Batal"
            submitText="Simpan"
            onCancel={() => setOpenModalEdit(false)}
            onSubmit={() => console.log("Experience Data submitted")}
          />
        </Modal>
      )}
    </section>
  );
}
