import { CV } from "../schemas/cv.schema";

export const MOCK_CV: CV = {
  personalInfo: {
    fullName: "Bagas Kara",
    title: "UI UX Enthusiast",
    email: "bagasui@gmail.com",
    phone: "082130546571",
    location: "Malang, Jawa Timur",
    summary:
      "Seorang mahasiswa Teknik Informatika yang passionate di bidang UI/UX Design. Berpengalaman dalam merancang antarmuka digital yang intuitif dan estetis menggunakan Figma.",
  },

  experiences: [
    {
      role: "UI/UX Designer",
      company: "UB-Malang",
      date: "Januari 2025",
      descriptions: [
        "Mengembangkan solusi visual inovatif",
        "Meningkatkan pengalaman pengguna",
        "Berkomunikasi dengan klien",
      ],
    },
  ],

  educations: [
    {
      university: "Universitas Brawijaya",
      location: "Malang",
      date: "Januari 2025",
      degree: "Teknik Informatika, IPK: 4.00",
      descriptions: [
        "Mempelajari UI/UX Design",
        "Menerapkan solusi berbasis user",
      ],
    },
  ],

  courses: [
    {
      name: "UI/UX Indonesia",
      location: "Jakarta",
      date: "Januari 2025",
      descriptions: [
        "Bootcamp UI/UX",
        "Belajar Figma",
        "UX Research",
      ],
    },
  ],

  organizations: [
    {
      name: "Hima Teknik Informatika",
      location: "Malang",
      date: "2024-2025",
      role: "Staff Divisi Kreatif",
      descriptions: [
        "Merancang konten visual",
        "Kolaborasi tim",
        "Kelola media sosial",
      ],
    },
  ],
};