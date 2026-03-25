"use client";

import { useMutation } from "@tanstack/react-query";
import { cvService } from "@/services/cv/cv.service";

export function useCreateCV() {
  return useMutation({
    mutationFn: ({ userId }: { userId: string }) =>
      cvService.saveCV(userId),
    onSuccess: (data) => {
      console.log("CV Created successfully", data);
    },
    onError: (error) => {
      console.error("Failed to create CV", error);
    },
  });
}