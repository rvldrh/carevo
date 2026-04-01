import type { FieldConfig } from "@/shared/types/ModalForm";

export const projectFields: FieldConfig[] = [
  {
    type: "text",
    name: "name",
    label: "Judul",
    placeholder: "Judul projek",
  },
  {
    type: "role",
    name: "professionRole",
    label: "Role",
    defaultValue: "UI/UX Designer & Researcher",
    options: [
      { label: "Product Manager / Project Manager", value: "Product Manager / Project Manager" },
      { label: "UI/UX Designer & Researcher", value: "UI/UX Designer & Researcher" },
      { label: "Front-End (FE) Developer", value: "Front-End (FE) Developer" },
      { label: "Back-End (BE) Developer & Database Administrator", value: "Back-End (BE) Developer & Database Administrator" },
      { label: "Data Analyst & Business Intelligence (BI)", value: "Data Analyst & Business Intelligence (BI)" },
      { label: "Cybersecurity Analyst", value: "Cybersecurity Analyst" },
      { label: "Business Analyst / ERP Consultant", value: "Business Analyst / ERP Consultant" },
      { label: "IT Governance & Risk Specialist", value: "IT Governance & Risk Specialist" },
      { label: "Cloud & Infrastructure Engineer", value: "Cloud & Infrastructure Engineer" },
      { label: "Machine Learning Engineer / AI Specialist", value: "Machine Learning Engineer / AI Specialist" },
    ],
  },
  {
    type: "file",
    name: "imageFileId",
    label: "Gambar Projek",
  },
  {
    type: "date",
    name: "date",
    label: "Tanggal Projek",
    placeholder: "HH/BB/TT",
  },
  {
    type: "text",
    name: "description",
    label: "Tentang",
    placeholder: "Deskripsi",
  },
];