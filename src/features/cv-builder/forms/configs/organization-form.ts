import { FieldConfig } from "@/features/cv-builder/types/form.type";


export const ORGANIZATION_FIELDS: FieldConfig[] = [
  { name: "role", label: "Jabatan", type: "text" },
  { name: "organization", label: "Organisasi", type: "text" },
  { name: "city", label: "Kota", type: "text" },
  { name: "startDate", label: "Tanggal Mulai", type: "date" },
  { name: "endDate", label: "Tanggal Selesai", type: "date" },
  { name: "description", label: "Deskripsi", type: "textarea" },
];