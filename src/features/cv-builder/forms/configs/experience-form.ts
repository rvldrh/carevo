import { FieldConfig } from "@/features/cv-builder/types/form.type";


export const EXPERIENCE_FIELDS: FieldConfig[] = [
  { name: "position", label: "Posisi", type: "text" },
  { name: "company", label: "Perusahaan", type: "text" },
  { name: "city", label: "Kota", type: "text" },
  { name: "isActive", label: "Masih Bekerja di sini", type: "checkbox" },
  { name: "description", label: "Profil", type: "textarea" },
];