export type SectionKey =
  | "personalInfo"
  | "experiences"
  | "educations"
  | "courses"
  | "organizations";


export const SECTIONS = [
  {
    key: "personal",
    label: "Informasi pribadi",
    icon: "/icons/informasi.svg",
  },
  {
    key: "education",
    label: "Pendidikan",
    icon: "/icons/pendidikan.svg",
  },
  {
    key: "experience",
    label: "Riwayat Pekerjaan",
    icon: "/icons/riwayat.svg",
  },
  {
    key: "course",
    label: "Kursus",
    icon: "/icons/kursus.svg",
  },
  {
    key: "organization",
    label: "Organisasi",
    icon: "/icons/organisasi.svg",
  },
] as const;