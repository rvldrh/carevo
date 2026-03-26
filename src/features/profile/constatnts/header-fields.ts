import type { FieldConfig } from "@/shared/types/ModalForm";

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
    type: "text",
    name: "about",
    label: "Tentang",
    defaultValue:
      "Mahasiswa Teknik Informatika di Universitas Brawijaya yang berfokus pada keamanan siber...",
  },
  {
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "Email",
  },
  {
    type: "text",
    name: "link",
    label: "Link",
    placeholder: "Link",
  },
];