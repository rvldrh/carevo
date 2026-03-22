"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion/accordion-item";
import { PersonalInfoForm } from "@/features/cv-builder/components/sections/personal-info";
import { EducationSection } from "@/features/cv-builder/components/sections/education/education";
import { ExperienceSection } from "./sections/experience";
import { CourseSection } from "./sections/course";
import { OrganizationSection } from "./sections/organizatoin";

const SECTIONS = [
  {
    key: "personal",
    label: "Informasi pribadi",
    labelOpen: "Informasi Pribadi",
    icon: "/icons/informasi.svg",
  },
  {
    key: "education",
    label: "Pendidikan",
    labelOpen: "Data Pendidikan",
    icon: "/icons/pendidikan.svg",
  },
  {
    key: "experience",
    label: "Riwayat Pekerjaan",
    labelOpen: "Data Riwayat Pekerjaan",
    icon: "/icons/riwayat.svg",
  },
  {
    key: "course",
    label: "Kursus",
    labelOpen: "Data Kursus",
    icon: "/icons/kursus.svg",
  },
  {
    key: "organization",
    label: "Organisasi",
    labelOpen: "Data Organisasi",
    icon: "/icons/organisasi.svg",
  },
];

export function CVForm() {
  const [active, setActive] = useState<string | null>(null);

  const renderContent = (key: string) => {
    switch (key) {
      case "personal":
        return <PersonalInfoForm />;

      case "education":
        return <EducationSection  />;
      case "experience":
        return <ExperienceSection  />;
      case "course" :
        return <CourseSection />;
      case "organization" :
        return <OrganizationSection  />


      default:
        return <div className="p-4 text-sm text-gray-500">Content {key}</div>;
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-blue-400 text-white text-2xl font-bold py-6 text-center">
        Bangun CV
      </div>

      <div className="flex flex-col gap-4 p-4">
        {SECTIONS.map((section) => (
          <AccordionItem
            key={section.key}
            title={active === section.key ? section.labelOpen : section.label}
            icon={section.icon}
            isOpen={active === section.key}
            onToggle={() =>
              setActive(active === section.key ? null : section.key)
            }
          >
            {renderContent(section.key)}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}
