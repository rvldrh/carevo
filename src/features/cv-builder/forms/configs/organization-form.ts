import type { FieldConfig } from "@/features/cv-builder/types/form.type";

export const ORGANIZATION_FIELDS: FieldConfig[] = [
  { name: "organizationName", label: "Organisasi", type: "text" },
  { name: "position", label: "Jabatan", type: "text" },
  { name: "city", label: "Kota", type: "text" },
  { name: "startYear", label: "Tahun Mulai", type: "number" },
  { name: "endYear", label: "Tahun Selesai", type: "number" },
  { name: "description", label: "Deskripsi", type: "textarea" },
];