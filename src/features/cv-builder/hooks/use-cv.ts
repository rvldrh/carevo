  import { useQuery } from "@tanstack/react-query";
  import { cvService } from "@/services/cv/cv.service";

export const useGetCv = (userId: string) => {
  return useQuery({
    queryKey: ["cv", userId],
    queryFn: () => cvService.getCV(userId),
    enabled: !!userId,
    retry: false, 
    meta: {
      errorMessage: "Gagal memuat data CV (Unauthorized)",
    }
  });
};