"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cvService } from "@/services/cv/cv.service";
import { useGetCv } from "@/features/cv-builder/hooks/use-cv";
import { Header } from "@/features/cv-builder/components/cv-preview-section/header-section";
import { Section } from "./cv-preview-section/section";
import type { Course, Education, Organization, WorkExperience } from "@/features/cv-builder/schemas/cv.schema";

import { ExperienceItem } from "@/features/cv-builder/components/cv-preview-section/experience-item";
import { EducationItem } from "@/features/cv-builder/components/cv-preview-section/education-section";
import { CourseItem } from "@/features/cv-builder/components/cv-preview-section/course-item";
import { OrganizationItem } from "@/features/cv-builder/components/cv-preview-section/organization-item";

import { AISaveModal } from "@/features/cv-builder/components/ai-save-modal";

type Props = {
  userId: string;
};

export function CVPreview({ userId }: Props) {
  const router = useRouter();
  const { data: cv, isLoading, isError } = useGetCv(userId);

  const [isDownloading, setIsDownloading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);


  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const blob = await cvService.downloadCV(userId);
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `CV-${userId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (e) {
      console.error("Failed to download CV:", e);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      
      
      await cvService.saveCV(userId);

      
      setShowAIModal(true);
    } catch (error) {
      console.error("Failed to save CV:", error);
    } finally {
      setIsSaving(false);
    }
  };



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
    <div className="w-full h-full flex flex-col bg-gray-500 overflow-y-auto">
      {}
      <div className="sticky top-0 z-10 flex justify-end items-center bg-[#F0F7FF] px-6 py-4 shadow-sm w-full gap-4">
        {}
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="border-[#18A0FB] border-[2px] hover:bg-[#E1F1FF] text-[#18A0FB] px-8 py-2.5 rounded-lg shadow-sm font-bold text-[13px] transition-all disabled:opacity-50 min-w-[120px]"
        >
          {isSaving ? (
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
          ) : (
            "Simpan"
          )}
        </button>

        {}
        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className="bg-[#18A0FB] hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg shadow-sm flex items-center gap-2 font-bold text-[13px] transition-all disabled:opacity-50"
        >
          {isDownloading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto text-blue-500" />
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download
            </>
          )}
        </button>
      </div>

      <AISaveModal 
        open={showAIModal}
        onClose={() => setShowAIModal(false)}
        onLater={() => router.push("/main/profile")}
        onSeeRecommendations={() => router.push("/main/asah")}
      />


      {}
      <div className="w-full flex justify-center py-10">
        <div className="w-full max-w-[800px] bg-white p-6 md:p-10 shadow-sm min-h-[1123px] mx-4 md:mx-auto">
          <Header {...cv.personalInformation} />

          {cv.workExperiences && cv.workExperiences.length > 0 && (
            <Section title="Riwayat Pekerjaan">
              {cv.workExperiences.map((item: WorkExperience) => (
                <ExperienceItem key={`${item.companyName}-${item.position}-${item.startYear}`} {...item} />
              ))}
            </Section>
          )}

          {cv.educations && cv.educations.length > 0 && (
            <Section title="Pendidikan">
              {cv.educations.map((item: Education) => (
                <EducationItem key={`${item.institution}-${item.educationLevel}-${item.startYear}`} {...item} />
              ))}
            </Section>
          )}

          {cv.courses && cv.courses.length > 0 && (
            <Section title="Kursus">
              {cv.courses.map((item: Course) => (
                <CourseItem key={`${item.name}-${item.organizer}-${item.startYear}`} {...item} />
              ))}
            </Section>
          )}

          {cv.organizations && cv.organizations.length > 0 && (
            <Section title="Organisasi">
              {cv.organizations.map((item: Organization) => (
                <OrganizationItem key={`${item.organizationName}-${item.position}-${item.startYear}`} {...item} />
              ))}
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}