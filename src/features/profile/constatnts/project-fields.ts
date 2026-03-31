import type { FieldConfig } from "@/shared/types/ModalForm";

export const projectFields: FieldConfig[] = [
  {
    type: "text",
    name: "name",
    label: "Judul",
    placeholder: "Judul projek",
  },
  {
    type: "text",
    name: "professionRole",
    label: "Peran Profesional",
    placeholder: "Contoh: UI/UX Designer",
  },
  {
    type: "file",
    name: "imageFileId",
    label: "Gambar Projek",
  },
  {
    type: "date",
    name: "date",
    label: "Tanggal Projek",
    placeholder: "HH/BB/TT",
  },
  {
    type: "text",
    name: "description",
    label: "Tentang",
    placeholder: "Deskripsi",
  },
];