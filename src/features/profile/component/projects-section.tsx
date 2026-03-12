"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import ProjectCard from "@/components/ui/card/project-card";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";

import { projectFields } from "@/features/profile/config/project-fields";

export default function ProjectSection() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  return (
    <>
      <section className="w-full py-16 bg-[var(--blue-200)]">
        <div className="flex justify-between items-center mb-10 px-[22%]">
          <h2 className="text-2xl font-bold">Projek</h2>

          <div className="flex gap-4">
            <IconButton
              icon="/icons/plus.svg"
              alt="add"
              onClick={() => setOpenModalAdd(true)}
            />

            <IconButton
              icon="/icons/edit.svg"
              onClick={() => setOpenModalEdit(true)}
              alt="edit"
            />
          </div>
        </div>

        <div className="px-[5%]">
          <p className="text-lg font-semibold mb-6">UI/UX Designer</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <ProjectCard
                key={item}
                title="Green Forest - App"
                date="20 Feb 2026"
                image="/illustration/portfolio-card.svg"
                href="/main/project/"
                />
            ))}
          </div>
        </div>
      </section>
      {openModalAdd ? (
        <Modal
          title="Tambah projek"
          open={openModalAdd}
          onClose={() => setOpenModalAdd(false)}
        >
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>

            <ModalForm
              title="Tambah projek"
              fields={projectFields}
              onCancel={() => setOpenModalAdd(false)}
              onSubmit={() => console.log("Project Data submitted")}
            />

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setOpenModalAdd(false)}
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
      ) : (
        <Modal
          title="Edit projek"
          open={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
        >
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>

            <ModalForm
              title="Edit projek"
              fields={projectFields}
              onCancel={() => setOpenModalEdit(false)}
              onSubmit={() => console.log("Project Data submitted")}
            />

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setOpenModalEdit(false)}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg"
              >
                Batal
              </button>

              <button
                onClick={() => console.log("Tambah")}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg"
              >
                Edit
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
