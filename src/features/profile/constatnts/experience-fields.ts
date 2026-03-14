import { FieldConfig } from "@/shared/types/ModalForm";

export const experienceFields: FieldConfig[] = [
  {
    type: "text",
    name: "position",
    label: "Posisi",
    placeholder: "Contoh: UI/UX Designer",
  },
  {
    type: "text",
    name: "type",
    label: "Jenis Pekerjaan/event",
    placeholder: "Contoh: Bootcamp UI/UX",
  },
  {
    type: "text",
    name: "company",
    label: "Perusahaan/Organisasi",
    placeholder: "Contoh: BCC",
  },
  {
    type: "year",
    name: "startYear",
    label: "Tahun Mulai",
  },
  {
    type: "year",
    name: "endYear",
    label: "Tahun Selesai",
  },
  {
    type: "text",
    name: "description",
    label: "Deskripsi",
  },
];