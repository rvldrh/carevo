"use client";

import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/services/auth/auth.service";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5, 
  });
}
