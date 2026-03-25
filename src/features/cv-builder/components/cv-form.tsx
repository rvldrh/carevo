"use client";

import { useState, useMemo, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AccordionItem } from "@/components/ui/accordion/accordion-item";

import { PersonalInfoForm } from "@/features/cv-builder/components/sections/personal-info";
import { EducationSection } from "@/features/cv-builder/components/sections/education/education";
import { ExperienceSection } from "@/features/cv-builder/components/sections/experience";
import { CourseSection } from "@/features/cv-builder/components/sections/course";
import { OrganizationSection } from "@/features/cv-builder/components/sections/organizatoin";

import {
  CVSchema,
  type CVFormValues,
} from "@/features/cv-builder/schemas/cv.schema";

interface CVFormProps {
  userId: string;
  onSave: (payload: CVFormValues) => void | Promise<void>;
  isSaving?: boolean;
  initialData?: any;
}

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
] as const;

type SectionKey = (typeof SECTIONS)[number]["key"];

const SECTION_COMPONENTS: Record<
  SectionKey,
  React.ComponentType<{
    isSaving?: boolean;
    onSave: (payload: CVFormValues) => void;
  }>
> = {
  personal: PersonalInfoForm,
  education: EducationSection,
  experience: ExperienceSection,
  course: CourseSection,
  organization: OrganizationSection,
};

export function CVForm({ userId: _userId, onSave, isSaving, initialData }: CVFormProps) {
  const [active, setActive] = useState<SectionKey | null>("personal");

  const methods = useForm<CVFormValues>({
    resolver: zodResolver(CVSchema),
    defaultValues: initialData || {
      personalInformation: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "+62",
        address: "",
        profile: "",
        websiteUrl: "",
      },
      skills: [],
      educations: [],
      workExperiences: [],
      courses: [],
      organizations: [],
      certifications: []
    },
  });

  useEffect(() => {
    if (initialData) {
      methods.reset(initialData);
    }
  }, [initialData, methods]);
  const renderedSections = useMemo(() => {
    return SECTIONS.map((section) => {
      const Component = SECTION_COMPONENTS[section.key];

      return (
        <AccordionItem
          key={section.key}
          title={
            active === section.key
              ? section.labelOpen
              : section.label
          }
          icon={section.icon}
          isOpen={active === section.key}
          onToggle={() =>
            setActive((prev) =>
              prev === section.key ? null : section.key
            )
          }
        >
          <div className="border-t border-gray-100">
            <Component isSaving={isSaving} onSave={onSave} />
          </div>
        </AccordionItem>
      );
    });
  }, [active, isSaving, onSave]);

  return (
    <FormProvider {...methods}>
      <div className="w-full h-full flex flex-col bg-white">
        <div className="bg-blue-400 text-white text-2xl font-bold py-6 text-center relative shrink-0">
          Bangun CV

          {isSaving && (
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {renderedSections}
        </div>
      </div>
    </FormProvider>
  );
}