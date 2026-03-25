import type { FieldConfig } from "@/features/cv-builder/types/form.type";

export const EXPERIENCE_FIELDS: FieldConfig[] = [
  { name: "companyName", label: "URL/Nama Perusahaan", type: "text" },
  { name: "position", label: "Posisi", type: "text" },
  { name: "employmentStatus", label: "Status Pekerjaan", type: "text", placeholder: "Contoh: Full-time" },
  { name: "city", label: "Kota", type: "text" },
  { name: "startYear", label: "Tahun Mulai", type: "number" },
  { name: "endYear", label: "Tahun Selesai", type: "number" },
  { name: "description", label: "Deskripsi", type: "textarea" },
];