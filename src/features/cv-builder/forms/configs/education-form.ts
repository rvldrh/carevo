import { FieldConfig } from "@/features/cv-builder/types/form.type";

export const EDUCATION_FIELDS: FieldConfig[] = [
  { name: "level", label: "Jenjang Pendidikan", type: "text" },
  { name: "major", label: "Program Studi", type: "text" },
  { name: "city", label: "Kota", type: "text" },
  { name: "startDate", label: "Tanggal Mulai", type: "date" },
  { name: "endDate", label: "Tanggal Selesai", type: "date" },
  { name: "isActive", label: "Masih Bersekolah di sini", type: "checkbox" },
  { name: "gpa", label: "Nilai/IPK", type: "text" },
  { name: "scale", label: "Skala Maksimal", type: "text" },
  { name: "description", label: "Profil", type: "textarea" },
];