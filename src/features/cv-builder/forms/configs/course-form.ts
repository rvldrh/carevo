import type { FieldConfig } from "@/features/cv-builder/types/form.type";

export const COURSE_FIELDS: FieldConfig[] = [
  { name: "name", label: "Nama Kursus", type: "text" },
  { name: "organizer", label: "Penyelenggara", type: "text" },
  { name: "url", label: "Sertifikat URL", type: "text" },
  { name: "location", label: "Lokasi", type: "text" },
  { name: "startYear", label: "Tahun Mulai", type: "number" },
  { name: "endYear", label: "Tahun Selesai", type: "number" },
  { name: "description", label: "Deskripsi", type: "textarea" },
];
