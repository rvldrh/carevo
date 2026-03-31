import type { FieldConfig } from "@/shared/types/ModalForm";

export const certificateFields: FieldConfig[] = [
  {
    type: "text",
    name: "name",
    label: "Nama Sertifikat",
    placeholder: "Contoh: Sertifikat UI/UX Design",
  },
  {
    type: "text",
    name: "publisher",
    label: "Penyelenggara",
    placeholder: "Contoh: Coursera",
  },
  {
    type: "date",
    name: "publishDate",
    label: "Tanggal",
    placeholder: "HH/BB/TT",
  },
  {
    type: "file",
    name: "imageFileId",
    label: "Unggah Sertifikat",
  },
];
