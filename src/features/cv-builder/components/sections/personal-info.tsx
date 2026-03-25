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
  } = useFormContext<CVFormValues>();

  // Fungsi helper untuk mengambil token dari cookie (Karena middleware pakai cookie)
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

    let aiResult = response.data;

    if (aiResult) {
      // POTONG HASIL AI JIKA LEBIH DARI 255 KARAKTER
      if (aiResult.length > 255) {
        aiResult = aiResult.substring(0, 252) + "...";
      }

      setValue("personalInformation.profile", aiResult, { 
        shouldDirty: true, 
        shouldValidate: true 
      });
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

    // Pastikan payload menggunakan data.personalInformation.summary
    // karena itu tempat kita menampung hasil AI tadi
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
  
  // Kirim payload

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
              {...register("personalInformation.profile")} // Ubah dari .summary ke .profile
              placeholder="Data profil Anda..."
              className="w-full p-4 text-sm leading-relaxed text-gray-700 h-44 focus:outline-none resize-none"
            />
            <div className="flex justify-between mt-1 px-1">
  <p className="text-[10px] text-gray-400">
    *Maksimal 255 karakter agar bisa disimpan.
  </p>
  <span className={`text-[10px] font-medium ${
    (getValues("personalInformation.profile")?.length > 255) ? "text-red-500" : "text-gray-400"
  }`}>
    {getValues("personalInformation.profile")?.length || 0}/255
  </span>
</div>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t">
        <button
          suppressHydrationWarning
          type="button"
          onClick={handleSubmit(onSubmitSection)}
          disabled={isSaving || isGenerating}
          className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold transition-all disabled:bg-blue-300"
        >
          {isSaving ? "Menyimpan..." : "Simpan Informasi Pribadi"}
        </button>
      </div>
    </div>
  );
}
