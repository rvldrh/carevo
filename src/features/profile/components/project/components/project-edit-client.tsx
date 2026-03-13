"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { projectFields } from "@/features/profile/config/project-fields";

export default function ProjectEditorClient() {
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

      {/* ADD */}
      <Modal
        title="Tambah projek"
        open={openAdd}
        onClose={() => setOpenAdd(false)}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>

          <ModalForm
            title="Tambah projek"
            fields={projectFields}
            onCancel={() => setOpenAdd(false)}
            onSubmit={() => console.log("Project submitted")}
          />

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setOpenAdd(false)}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg"
            >
              Batal
            </button>

            <button
              onClick={() => console.log("Tambah")}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
              Tambah
            </button>
          </div>
        </div>
      </Modal>

      {/* EDIT */}
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
            onSubmit={() => console.log("Project edited")}
          />

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setOpenEdit(false)}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg"
            >
              Batal
            </button>

            <button
              onClick={() => console.log("Edit")}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
              Edit
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}