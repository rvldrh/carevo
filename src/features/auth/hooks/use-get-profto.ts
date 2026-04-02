import { useQuery } from "@tanstack/react-query";
import { getUserProfto } from "@carevo/contracts/api";
import type { Profile } from "../schemas/profile.schema";


export function useGetProfto(username: string) {
  return useQuery<Profile | null>({
    queryKey: ["profto", username],
    queryFn: async (): Promise<Profile | null> => {
      if (!username) return null;

      const res = await getUserProfto(username);
      if (!res) return null;

      return {
        userId: String(res.userId),
        username: username,
        email: typeof res.email === "string" ? res.email : "",

        avatarFileId:
          typeof res.avatarFileId === "string"
            ? res.avatarFileId
            : undefined,
      };
    },
    enabled: !!username,
  });
}