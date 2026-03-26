"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/services/user/user.service";
import type { UpdateProftoBody } from "@/features/profile/types/profto";

export function useGetProfto(username: string) {
  return useQuery({
    queryKey: ["profto", username],
    queryFn: () => userService.getUserProfto(username),
    enabled: !!username,
  });
}

export function useUpdateProfto() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, body }: { userId: string; body: UpdateProftoBody }) =>
      userService.updateUserProfto(userId, body),
    onSuccess: () => {
      
      queryClient.invalidateQueries({ queryKey: ["profto"] });
    },
  });
}
