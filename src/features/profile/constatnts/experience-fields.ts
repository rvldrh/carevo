import type { FieldConfig } from "@/shared/types/ModalForm";

export const experienceFields: FieldConfig[] = [
  {
    type: "text",
    name: "name",
    label: "Nama Pekerjaan/event",
    placeholder: "Contoh: UI/UX Designer",
  },
  {
    type: "date",
    name: "startYear",
    label: "Tahun Mulai",
    placeholder: "Contoh: 2020",
  },
  {
    type: "date",
    name: "endYear",
    label: "Tahun Selesai",
    placeholder: "Contoh: 2023",
  },
  {
    type: "text",
    name: "description",
    label: "Deskripsi",
  },
];