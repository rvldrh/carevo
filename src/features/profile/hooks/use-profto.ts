"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/services/user/user.service";
import type { UpdateProftoBody } from "@/features/profile/types/profto";
import { getUserProfto } from "@carevo/contracts/api";

import type { ProftoFromApi } from "../types/profto-adapter";
import type { GetUserProfto200 } from "@carevo/contracts/api";

function mapProfto(data: GetUserProfto200): ProftoFromApi {
  return {
    ...data,

    avatarFileId:
      typeof data.avatarFileId === "string"
        ? data.avatarFileId
        : undefined,

    name: typeof data.name === "string" ? data.name : undefined,

    professionRole:
      typeof data.professionRole === "string"
        ? data.professionRole
        : undefined,

    lastEducation:
      typeof data.lastEducation === "string"
        ? data.lastEducation
        : undefined,

    email: typeof data.email === "string" ? data.email : undefined,

    summary: typeof data.summary === "string" ? data.summary : undefined,

    cvFileId:
      typeof data.cvFileId === "string"
        ? data.cvFileId
        : undefined,
  };
}

export function useGetProfto(username: string) {
  return useQuery<ProftoFromApi | null>({
    queryKey: ["profto", username],
    queryFn: async () => {
      if (!username) return null;

      const res = await getUserProfto(username);

      if (!res) return null;

      return mapProfto(res); 
    },
    enabled: !!username,
  });
}

export function useUpdateProfto() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      body,
    }: {
      userId: string;
      body: UpdateProftoBody;
    }) => userService.updateUserProfto(userId, body),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profto"] });
    },
  });
}