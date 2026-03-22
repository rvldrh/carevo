"use client";

import Image from "next/image";
import { AccordionModal } from "@/components/ui/modal/component/AccordionModal";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function EducationFormModal({ open, onClose }: Props) {
  return (
    <AccordionModal open={open} onClose={onClose}>
      <div className="w-[614px] bg-white rounded-[20px] flex flex-col">
        <div className="h-12 px-3 bg-blue-400 rounded-t-[20px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-white text-sm font-medium">
              Data Pendidikan
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <Input label="Jenjang Pendidikan" placeholder="Jenjang Pendidikan" />

          <Input label="Program Studi" placeholder="Teknik Informatika" />

          <Input label="Kota" placeholder="Malang" />

          <div className="flex gap-4">
            <Input label="Tanggal Mulai" placeholder="dd/mm/yy" />
            <Input label="Tanggal Selesai" placeholder="dd/mm/yy" />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-xs">Masih Bersekolah di sini</span>
          </div>

          <div className="flex gap-4">
            <Input label="Nilai/IPK" placeholder="3.8" />
            <Input label="Sekala Maksimal" placeholder="4.0" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">Profil</span>

            <div className="border rounded-xl">
              <div className="h-15 p-2 bg-gray-100 rounded-t-xl">
                <button className="h-8   self-start bg-gradient-to-br from-purple-600 to-slate-400 text-white text-xs px-3 py-1 rounded-lg">
                  Buat dengan AI
                </button>
              </div>
              <textarea
                className="w-full p-3 text-sm outline-none resize-none"
                rows={4}
                placeholder="Deskripsi pendidikan..."
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 p-6">
          <button
            onClick={onClose}
            className="w-40 h-10 bg-gray-500 text-white rounded-xl text-sm"
          >
            Batalkan
          </button>

          <button className="w-48 h-10 bg-blue-400 text-white rounded-xl text-sm">
            Tambahkan
          </button>
        </div>
      </div>
    </AccordionModal>
  );
}

type InputProps = {
  label: string;
  placeholder: string;
};

function Input({ label, placeholder }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <span className="text-xs font-medium">{label}</span>
      <input
        className="h-9 px-3 rounded-xl border outline-none text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}
