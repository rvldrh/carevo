"use client";

import { useMutation } from "@tanstack/react-query";
import { saveCV } from "@/services/cv/cv.service";

export function useCreateCV() {
  return useMutation({
    mutationFn: saveCV,
  });
}