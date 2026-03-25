"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { CVLayout } from "../components/CVLayout";
import { CVForm } from "../components/CVForm";
import { CVPreview } from "../components/CVPreview";

import { CVFormValues } from "../schemas/cv.schema";
import { cvService } from "@/services/cv/cv.service";

interface Props {
  userId: string;
}

export function CVBuilderContainer({ userId }: Props) {
  const [isSaving, setIsSaving] = useState(false);
  const queryClient = useQueryClient();

  const handleSave = async (payload: CVFormValues) => {
    setIsSaving(true);
    try {
      await cvService.patchCV(userId, { ...payload, userId });

      queryClient.invalidateQueries({
        queryKey: ["cv", userId],
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <CVLayout
      form={
        <CVForm
          userId={userId}
          onSave={handleSave}
          isSaving={isSaving}
        />
      }
      preview={<CVPreview userId={userId} />}
    />
  );
}