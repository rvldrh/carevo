"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { CVFormValues, CVPayload } from "@/features/cv-builder/types/cv.types";
import { normalizePhone } from "@/features/cv-builder/utils/phone";

import { PersonalInfoFields } from "@/features/cv-builder/components/sections/personal-info/personal-info-fields";
import { ProfileField } from "@/features/cv-builder/components/sections/personal-info/propfile-field";
import { SubmitButton } from "@/features/cv-builder/components/sections/personal-info/submit-button";

interface Props {
  isSaving?: boolean;
  onSave: (payload: CVPayload) => void;
}

export function PersonalInfoForm({ isSaving, onSave }: Props) {
  const [isGenerating, setIsGenerating] = useState(false);

  const { handleSubmit } = useFormContext<CVFormValues>();

  const onSubmit = (data: CVFormValues) => {
    const payload: CVPayload = {
      personalInformation: {
        firstName: data.personalInformation.firstName,
        lastName: data.personalInformation.lastName,
        profile: data.personalInformation.profile || "",
        phone: normalizePhone(data.personalInformation.phone),
        email: data.personalInformation.email,
        address: data.personalInformation.address,
      },
      educations: data.educations || [],
      workExperiences: data.workExperiences || [],
      courses: data.courses || [],
      organizations: data.organizations || [],
    };

    if (data.personalInformation.website) {
      payload.personalInformation.websiteUrl =
        data.personalInformation.website;
    }

    onSave(payload);
  };

  return (
    <div className="p-6 flex flex-col gap-4 bg-white">
      <div className="bg-blue-400 text-white rounded-t-xl px-4 py-3 font-medium text-sm">
        Informasi pribadi
      </div>

      <PersonalInfoFields />

      <ProfileField
        isGenerating={isGenerating}
        setIsGenerating={setIsGenerating}
      />

      <SubmitButton
        isSaving={isSaving}
        isGenerating={isGenerating}
        onSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
}