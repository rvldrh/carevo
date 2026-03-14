import { FieldConfig } from "@/shared/types/ModalForm";

 export const headerFields: FieldConfig[] = [
    {
      type: "text",
      name: "name",
      label: "Nama",
      defaultValue: "Bagas Adhita Pratama",
    },
    {
      type: "text",
      name: "education",
      label: "Pendidikan",
      defaultValue: "Mahasiswa Teknik Informatika",
    },
    {
      type: "text",
      name: "location",
      label: "Domisili",
      defaultValue: "Malang, Jawa Timur Indonesia",
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
      name: "about",
      label: "Tentang",
      defaultValue:
        "Mahasiswa Teknik Informatika di Universitas Brawijaya yang berfokus pada keamanan siber...",
    },
    {
      type: "text",
      name: "username",
      label: "Username",
      placeholder: "Username",
    },
    {
      type: "text",
      name: "link",
      label: "Link",
      placeholder: "Link",
    },
  ];