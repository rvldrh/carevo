import type { UpdateUserProftoBody, UpdateUserProftoBodyProjectsItem } from "@carevo/contracts/api";
import type { z } from "zod";
import type { UpdateProftoBodySchema } from "@/features/profile/types/profto";

type Input = z.infer<typeof UpdateProftoBodySchema>;

export function mapToUpdateProftoBody(data: Input): UpdateUserProftoBody {
  return {
    ...data,

    certificates: data.certificates?.map((cert) => {
      if (
        !cert.name ||
        !cert.publisher ||
        !cert.publishDate ||
        !cert.imageFileId
      ) {
        throw new Error("Invalid certificate data");
      }

      return {
        name: cert.name,
        publisher: cert.publisher,
        publishDate: cert.publishDate,
        imageFileId: cert.imageFileId,
      };
    }),

    experiences: data.experiences?.map((exp) => {
      if (!exp.name || !exp.startYear || !exp.endYear || !exp.description) {
        throw new Error("Invalid experience data");
      }

      return {
        name: exp.name,
        startYear: exp.startYear,
        endYear: exp.endYear,
        description: exp.description,
      };
    }),

    links: data.links?.map((link) => {
      if (!link.name || !link.url) {
        throw new Error("Invalid link data");
      }

      return {
        name: link.name,
        url: link.url,
      };
    }),

    projects: data.projects?.map((proj): UpdateUserProftoBodyProjectsItem => {
      if (
        !proj.name ||
        !proj.professionRole ||
        !proj.imageFileId ||
        !proj.date ||
        !proj.description
      ) {
        throw new Error("Invalid project data");
      }

      return {
        name: proj.name,
        professionRole: proj.professionRole,
        imageFileId: proj.imageFileId,
        date: proj.date,
        description: proj.description,
      };
    }),
  };
}
