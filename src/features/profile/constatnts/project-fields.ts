import { FieldConfig } from "@/shared/types/ModalForm";

export const projectFields: FieldConfig[] = [
  {
    type: "text",
    name: "title",
    label: "Judul",
    placeholder: "Judul projek",
  },
  {
    type: "date",
    name: "date",
    label: "Tanggal Projek",
    placeholder: "HH/BB/TT",
  },
  {
   type: "role",
      name: "role",
      label: "Role",
      defaultValue: "UI/UX Designer",
      options: [
        { label: "UI/UX Designer", value: "UI/UX Designer" },
        { label: "Frontend", value: "Frontend" },
        { label: "Backend", value: "Backend" },
        { label: "Fullstack", value: "Fullstack" },
        { label: "AI/ML Engineer", value: "AI/ML Engineer" },
        { label: "Product Manager", value: "Product Manager" },
        { label: "Data Science", value: "Data Science" },
        { label: "Data Engineer", value: "Data Engineer" },
        { label: "Cyber Security", value: "Cyber Security" },
        { label: "Product Design", value: "Product Design" },
      ],
  },
  {
    type: "text",
    name: "description",
    label: "Tentang",
    placeholder: "Deskripsi",
  },
  {
    type: "file",
    name: "thumbnail",
    label: "Thumbnail",
  },
];