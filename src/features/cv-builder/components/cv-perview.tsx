"use client";

import { useGetCv } from "@/features/cv-builder/hooks/use-cv";
import { Header } from "@/features/cv-builder/components/cv-preview-section/header-section";
import { Section } from "./cv-preview-section/section";

import { ExperienceItem } from "@/features/cv-builder/components/cv-preview-section/experience-item";
import { EducationItem } from "@/features/cv-builder/components/cv-preview-section/education-section";
import { CourseItem } from "@/features/cv-builder/components/cv-preview-section/course-item";
import { OrganizationItem } from "@/features/cv-builder/components/cv-preview-section/organization-item";


type Props = {
  userId: string;
};

export function CVPreview({ userId }: Props) {
  const { data: cv, isLoading, isError } = useGetCv(userId);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-20">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-400">Memuat CV...</p>
        </div>
      </div>
    );
  }

  if (isError || !cv) {
    return (
      <div className="w-full flex justify-center py-20">
        <p className="text-sm text-red-400">CV tidak ditemukan atau terjadi kesalahan.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[800px] bg-white p-6 md:p-10 shadow-sm min-h-[1123px]">
        
        <Header {...cv.personalInformation} />

        {cv.workExperiences && cv.workExperiences.length > 0 && (
          <Section title="Riwayat Pekerjaan">
            {cv.workExperiences.map((item, i) => (
              <ExperienceItem key={`${item.company}-${i}`} {...item} />
            ))}
          </Section>
        )}

        {cv.educations && cv.educations.length > 0 && (
          <Section title="Pendidikan">
            {cv.educations.map((item, i) => (
              <EducationItem key={`edu-${i}`} {...item} />
            ))}
          </Section>
        )}

        {cv.courses && cv.courses.length > 0 && (
          <Section title="Kursus">
            {cv.courses.map((item, i) => (
              <CourseItem key={`course-${i}`} {...item} />
            ))}
          </Section>
        )}

        {cv.organizations && cv.organizations.length > 0 && (
          <Section title="Organisasi">
            {cv.organizations.map((item, i) => (
              <OrganizationItem key={`org-${i}`} {...item} />
            ))}
          </Section>
        )}
        
      </div>
    </div>
  );
}