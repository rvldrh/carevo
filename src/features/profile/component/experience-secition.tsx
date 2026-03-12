"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";

import { experienceFields } from "@/features/profile/config/experience-fields";
import { ModalButtons } from "@/components/ui/modal/component/ModalButtons";

export default function ExperienceSection() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  // const handleSubmit = (data: any) => {
  //   console.log("Experience Data:", data);
  //   setOpenModal(false);
  // };

  return (
    <>
      <section className="px-[22%] py-16 border-t bg-[var(--blue-100)] border-[var(--gray-300)]">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-[var(--black)]">
            Pengalaman
          </h2>

          <div className="flex gap-4">
            <IconButton
              icon="/icons/plus.svg"
              alt="add"
              onClick={() => setOpenModalAdd(true)}
            />

            <IconButton icon="/icons/edit.svg" alt="edit" onClick={() => setOpenModalEdit(true)} />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <span className="text-lg font-semibold text-[var(--blue-500)] min-w-[120px]">
              2024 - 2026
            </span>

            <div>
              <p className="text-xl font-bold">
                UI/UX Designer & Documentation
              </p>

              <p className="text-lg text-[var(--gray-600)] mt-2">
                Merancang user flow dan interface serta dokumentasi teknis.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      { openModalAdd ? (
              <Modal
        title="Tambah Pengalaman"
        open={openModalAdd}
        onClose={() => setOpenModalAdd(false)}
      >
        <ModalForm
          title="Tambah Pengalaman"
          fields={experienceFields}
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
          fields={experienceFields}
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
      )
      }
    </>
  );
}