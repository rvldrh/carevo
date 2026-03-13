"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import ModalOverlay from "@/components/ui/modal/component/ModalOverlay";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { headerFields } from "@/features/profile/config/header-fields";

export default function HeaderEditClient() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <IconButton
        icon="/icons/edit.svg"
        alt="edit"
        className="absolute right-[22%] top-[10%]"
        onClick={() => setOpenModal(true)}
      />

      <ModalOverlay open={openModal} onClose={() => setOpenModal(false)} />

      <Modal
        title="Edit Awalan"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div className="p-8 w-[550px] flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Informasi
          </h3>

          <ModalForm
            title="Edit Awalan"
            fields={headerFields}
            onCancel={() => setOpenModal(false)}
            onSubmit={() => console.log("submit")}
          />

          <div className="flex justify-start pt-4">
            <button
              onClick={() => console.log("submit")}
              className="bg-[var(--blue-500)] text-white px-6 py-2 rounded-lg hover:bg-[var(--blue-600)] transition"
            >
              Terapkan
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}