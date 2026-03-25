"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { cvService } from "@/services/cv/cv.service";
import { CVForm } from "../components/cv-form";
import { CVPreview } from "../components/cv-perview";
import { CVFormValues } from "../schemas/cv.schema";

interface CVBuilderPageProps {
  userId: string;
}

export function CVBuilderPage({ userId }: CVBuilderPageProps) {
  const [isSaving, setIsSaving] = useState(false);
  const queryClient = useQueryClient();

  const handleManualSave = async (payload: CVFormValues): Promise<void> => {
    if (!userId) return;

    setIsSaving(true);
    try {
      const finalPayload = { ...payload, userId };
      await cvService.patchCV(userId, finalPayload);
      queryClient.invalidateQueries({ queryKey: ["cv", userId] });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-white min-h-screen">
      <div className="border rounded-2xl overflow-hidden shadow-sm h-[calc(100vh-3rem)]">
        <CVForm 
          userId={userId} 
          onSave={handleManualSave} 
          isSaving={isSaving} 
        />
      </div>
      <div className="bg-gray-50 rounded-2xl border h-[calc(100vh-3rem)] overflow-y-auto">
         <CVPreview userId={userId} />
      </div>
    </div>
  );
}