"use client";

import { useQuery } from "@tanstack/react-query";
import { getFile } from "@carevo/contracts/api";

export const useFileUrl = (fileId?: string) => {
  return useQuery({
    queryKey: ["file", fileId],
    queryFn: async () => {
      if (!fileId) return null;

      const blob = await getFile(fileId);
      return URL.createObjectURL(blob);
    },
    enabled: !!fileId,
    staleTime: Infinity,
  });
};