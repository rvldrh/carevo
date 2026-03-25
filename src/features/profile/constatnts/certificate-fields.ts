import type { FieldConfig } from "@/shared/types/ModalForm";

export const certificateFields: FieldConfig[] = [
  {
    type: "text",
    name: "name",
    label: "Nama Sertifikat",
    placeholder: "Contoh: Sertifikat UI/UX Design",
  },
  {
    type: "date",
    name: "date",
    label: "Tanggal",
    placeholder: "HH/BB/TT",
  },
  {
    type: "file",
    name: "file",
    label: "Unggah Sertifikat",
  },
];
