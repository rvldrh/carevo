"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "@carevo/contracts/api";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: getUser,
    staleTime: 1000 * 60 * 5, 
  });
}
