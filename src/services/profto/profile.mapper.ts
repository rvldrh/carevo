import type { UpdateUserProftoBody } from "@carevo/contracts/api";
import type { z } from "zod";
import type { UpdateProftoBodySchema } from "@/features/profile/types/profto";

type Input = z.infer<typeof UpdateProftoBodySchema>;

export function mapToUpdateProftoBody(data: Input): UpdateUserProftoBody {
  return {
    ...data,

    certificates: data.certificates,
    experiences: data.experiences ?? undefined,
    projects: data.projects ?? undefined,
    links: data.links ?? undefined,
  };
}