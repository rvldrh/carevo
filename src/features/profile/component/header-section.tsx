"use client";

import { useEffect, useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import ModalOverlay from "@/components/ui/modal/component/ModalOverlay";
import { FieldConfig } from "@/shared/types/ModalForm";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { headerFields } from "../config/header-fields";

export default function HeaderSection() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="pt-[12%] pb-[15%] px-[22%] bg-[var(--white)] relative">
      <IconButton
        icon="/icons/edit.svg"
        alt="edit"
        className="absolute right-[22%] top-[10%]"
        onClick={() => setOpenModal(true)}
      />

      <ModalOverlay open={openModal} onClose={() => setOpenModal(false)} />

      <Modal title="Edit Awalan" open={openModal} onClose={() => setOpenModal(false)}>
        <div className="p-8 w-[550px] flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>

          <ModalForm
            title="Edit Awalan"
            fields={headerFields}
            onCancel={() => setOpenModal(false)}
            onSubmit={() => console.log("halo")}
          />

          {/* <ModalButtons
            cancelText="Batal"
            submitText="Terapkan"
            onCancel={() => setOpenModal(false)}
            onSubmit={() => console.log("halo")}
          /> */}
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

      <div className="flex flex-col items-center">
        <h1 className="text-[var(--blue-500)] text-4xl font-bold text-center">
          BAGAS ADITHA PRATAMA
        </h1>

        <p className="text-[var(--black)] text-4xl font-semibold text-center mt-6 whitespace-pre-line">
          Mahasiswa Teknik Informatika | UI/UX Designer{"\n"}& Penggiat
          Cybersecurity
        </p>
        <div className="flex gap-6 mt-10">
          <button className="px-8 py-3 rounded-full bg-[var(--blue-500)] text-white font-semibold text-lg hover:bg-[var(--blue-600)] transition">
            Portoku
          </button>

          <button className="px-8 py-3 rounded-full border-2 border-[var(--blue-500)] text-[var(--blue-500)] font-semibold text-lg hover:bg-[var(--blue-600)] hover:text-white transition">
            Hubungi Aku
          </button>
        </div>
      </div>

      <div className="mt-36">
        <h2 className="text-2xl font-bold text-[var(--black)] mb-6">Tentang</h2>

        <p className="text-lg leading-relaxed text-[var(--black)] max-w-4xl">
          Mahasiswa Teknik Informatika di Universitas Brawijaya yang berfokus
          pada keamanan siber, penetration testing, serta desain UI/UX kreatif.
          <br />
          <br />
          Linux adalah lingkungan kerja utama saya dan saya berkembang dalam
          kolaborasi teknis yang berorientasi solusi.
        </p>
      </div>
    </section>
  );
}
