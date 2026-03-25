"use client";

import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { CVLayout } from "../components/cv-layout";
import { CVForm } from "../components/cv-form";
import { CVPreview } from "../components/cv-perview";

import type { CVFormValues } from "../schemas/cv.schema";
import { cvService } from "@/services/cv/cv.service";

interface Props {
  userId: string;
}

export function CVBuilderContainer({ userId }: Props) {
  const [isSaving, setIsSaving] = useState(false);
  const queryClient = useQueryClient();

  const { data: cvData, isLoading } = useQuery({
    queryKey: ["cv", userId],
    queryFn: () => cvService.getCV(userId),
    enabled: !!userId,
  });

  const handleSave = async (payload: CVFormValues) => {
    console.log("DEBUG: CVBuilderContainer.handleSave Payload from form:", JSON.parse(JSON.stringify(payload)));
    setIsSaving(true);
    try {
      await cvService.updateCV(userId, { ...payload, userId });

      queryClient.invalidateQueries({
        queryKey: ["cv", userId],
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="p-6 flex justify-center items-center min-h-screen text-gray-500">Memuat CV Anda...</div>;
  }

  return (
    <CVLayout
      form={
        <CVForm
          userId={userId}
          onSave={handleSave}
          isSaving={isSaving}
          initialData={cvData}
        />
      }
      preview={<CVPreview userId={userId} />}
    />
  );
}