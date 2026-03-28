"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import type { CVFormValues } from "@/features/cv-builder/schemas/cv.schema";

export function PersonalInfoForm({
  isSaving,
  onSave,
}: {
  isSaving?: boolean;
  onSave: (p: CVFormValues) => void;
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { isDirty },
  } = useFormContext<CVFormValues>();

  const profileValue = watch("personalInformation.profile") || "";
  const wordCount = profileValue.trim() ? profileValue.trim().split(/\s+/).length : 0;


  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return null;
  };

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    const token = getCookie("access_token");
    const formValues = getValues();

    const context = [
      `Nama: ${formValues.personalInformation?.firstName} ${formValues.personalInformation?.lastName}`,
      formValues.personalInformation?.address ? `Lokasi: ${formValues.personalInformation.address}` : "",
      formValues.educations?.length 
        ? `Pendidikan: ${formValues.educations.map(e => `${e.educationLevel} di ${e.institution}`).join(", ")}` 
        : "",
      formValues.workExperiences?.length 
        ? `Pengalaman: ${formValues.workExperiences.map(w => `${w.position} di ${w.companyName}`).join(", ")}` 
        : "",
      formValues.organizations?.length 
        ? `Organisasi: ${formValues.organizations.map(o => `${o.position} di ${o.organizationName}`).join(", ")}` 
        : "",
      formValues.courses?.length 
        ? `Kursus: ${formValues.courses.map(c => `${c.name} dari ${c.organizer}`).join(", ")}` 
        : "",
    ].filter(Boolean).join(". ");

    try {
      const response = await axios.post(
        "https://alloc001.adyuta.group/api/v1/ai/generate-cv",
        { input: context || "Pro", section: "PROFILE" },
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: 'text',
        }
      );

      let resultString = response.data;

      if (resultString) {

        if (resultString.length > 2000) {
          resultString = resultString.substring(0, 1997) + "...";
        }


        let currentText = "";
        const interval = 10;

        const typingTimer = setInterval(() => {
          if (currentText.length < resultString.length) {
            currentText += resultString[currentText.length];
            setValue("personalInformation.profile", currentText, {
              shouldDirty: true,
              shouldValidate: true
            });
          } else {
            clearInterval(typingTimer);
          }
        }, interval);
      }
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsGenerating(false);
    }
  };
  const onSubmitSection = (data: CVFormValues) => {
    const cleanPhone = (p: string) => {
      if (!p) return "";
      const digits = p.replace(/\D/g, "");
      if (p.startsWith("+")) return p;
      if (digits.startsWith("0")) return "+62" + digits.slice(1);
      return "+" + digits;
    };



    const payload: CVFormValues = {
      personalInformation: {
        firstName: data.personalInformation.firstName,
        lastName: data.personalInformation.lastName,
        profile: data.personalInformation.profile || "",
        phone: cleanPhone(data.personalInformation.phone),
        email: data.personalInformation.email,
        address: data.personalInformation.address,
        websiteUrl: data.personalInformation.websiteUrl || "",
      },
      skills: data.skills || [],
      educations: data.educations || [],
      workExperiences: data.workExperiences || [],
      courses: data.courses || [],
      organizations: data.organizations || [],
      certifications: data.certifications || [],
    };



    onSave(payload);
  };

  return (
    <div className="p-6 flex flex-col gap-4 bg-white">
      <div className="bg-blue-400 text-white rounded-t-xl px-4 py-3 font-medium text-sm">
        Informasi pribadi
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Nama Depan
            </label>
            <input
              suppressHydrationWarning
              {...register("personalInformation.firstName")}
              placeholder="Bagas"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Nama Belakang
            </label>
            <input
              suppressHydrationWarning
              {...register("personalInformation.lastName")}
              placeholder="Kara"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">Email</label>
            <input
              suppressHydrationWarning
              {...register("personalInformation.email")}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">No HP</label>
            <input
              suppressHydrationWarning
              {...register("personalInformation.phone")}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600">Alamat</label>
          <textarea
            suppressHydrationWarning
            {...register("personalInformation.address")}
            rows={2}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none resize-y"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600">Website</label>
          <input
            suppressHydrationWarning
            {...register("personalInformation.websiteUrl")}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Profil</label>
          <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-gray-50 p-3 border-b border-gray-200">
              <button
                suppressHydrationWarning
                type="button"
                onClick={handleGenerateAI}
                disabled={isGenerating}
                className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#8E64D8] to-[#6495D8] text-white text-xs font-bold rounded-lg shadow-sm hover:opacity-90 active:scale-95 disabled:opacity-50"
              >
                {isGenerating ? "Menyusun..." : "Buat dengan AI"}
              </button>
            </div>
            <textarea
              {...register("personalInformation.profile")}
              placeholder="Data profil Anda..."
              value={isGenerating ? "Menyusun profil profesional anda..." : undefined}
              className={`w-full p-4 text-sm leading-relaxed h-44 focus:outline-none resize-none transition-colors ${isGenerating ? "text-gray-400 italic bg-gray-50" : "text-gray-700"
                }`}
            />
            <div className="flex justify-between mt-1 px-1">
              <p className="text-[10px] text-gray-400">
                *Maksimal 2000 karakter agar bisa disimpan.
              </p>
              <span className={`text-[10px] font-medium ${(profileValue.length > 2000) ? "text-red-500" : "text-gray-400"
                }`}>
                {wordCount} Kata | {profileValue.length}/2000 Karakter
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={handleSubmit(onSubmitSection)}
            disabled={isSaving || !isDirty}
            className="bg-blue-400 text-white px-8 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:bg-blue-500 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          >
            {isSaving ? "Menyimpan..." : "Simpan Informasi"}
          </button>
        </div>
      </div>
    </div>
  );
}
