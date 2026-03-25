"use client";

import type { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";

import type { CVFormValues } from "@/features/cv-builder/types/cv.types";
import { getCookie } from "@/features/cv-builder/utils/cookie";
import { generateProfileAI } from "@/services/cv/ai.service";

interface Props {
  isGenerating: boolean;
  setIsGenerating: Dispatch<SetStateAction<boolean>>;
}

export function ProfileField({ isGenerating, setIsGenerating }: Props) {
  const { register, setValue, getValues } =
    useFormContext<CVFormValues>();

  const handleGenerateAI = async () => {
    setIsGenerating(true);

    const token = getCookie("access_token");
    const values = getValues();

    const context = [
      `Nama: ${values.personalInformation.firstName} ${values.personalInformation.lastName}`,
      values.personalInformation.address
        ? `Lokasi: ${values.personalInformation.address}`
        : "",
    ]
      .filter(Boolean)
      .join(". ");

    try {
      const result = await generateProfileAI(token ?? "", context);

      const trimmed =
        result.length > 255
          ? result.substring(0, 252) + "..."
          : result;

      setValue("personalInformation.profile", trimmed, {
        shouldDirty: true,
        shouldValidate: true,
      });
    } catch (e) {
      console.error("AI Error:", e);
    } finally {
      setIsGenerating(false);
    }
  };

  const length = getValues("personalInformation.profile")?.length || 0;

  return (
    <div className="flex flex-col gap-2">
      <button onClick={handleGenerateAI} disabled={isGenerating}>
        {isGenerating ? "Menyusun..." : "Buat dengan AI"}
      </button>

      <textarea {...register("personalInformation.profile")} />

      <span>{length}/255</span>
    </div>
  );
}