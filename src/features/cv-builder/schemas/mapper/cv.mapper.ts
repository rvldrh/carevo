import type { CVFormValues } from "@/features/cv-builder/schemas/cv.schema";

export const mapFormToPayload = (data: CVFormValues) => {
  return {
    ...data,
    personalInformation: {
      ...data.personalInformation,
      websiteUrl: data.personalInformation.websiteUrl || "",
    },
  };
};