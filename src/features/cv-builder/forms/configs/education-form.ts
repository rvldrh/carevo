import type { FieldConfig } from "@/features/cv-builder/types/form.type";

export const EDUCATION_FIELDS: FieldConfig[] = [
  { name: "educationLevel", label: "Jenjang Pendidikan", type: "select", options: [
      { label: "SD", value: "SD" }, { label: "SMP", value: "SMP" }, { label: "MTS", value: "MTS" },
      { label: "SMA", value: "SMA" }, { label: "MA", value: "MA" }, { label: "SMK", value: "SMK" },
      { label: "Profesi", value: "Profesi" }, { label: "D3", value: "D3" }, { label: "D4", value: "D4" },
      { label: "S1", value: "S1" }, { label: "S2", value: "S2" }, { label: "S3", value: "S3" }
    ]
  },
  { name: "institution", label: "Institusi", type: "text" },
  { name: "studyProgram", label: "Program Studi", type: "text" },
  { name: "city", label: "Kota", type: "text" },
  { name: "startYear", label: "Tahun Mulai", type: "number" },
  { name: "endYear", label: "Tahun Selesai", type: "number" },
  { name: "score", label: "Nilai/IPK", type: "number" },
  { name: "maxScale", label: "Skala Maksimal", type: "number" },
  { name: "description", label: "Profil", type: "textarea" },
];