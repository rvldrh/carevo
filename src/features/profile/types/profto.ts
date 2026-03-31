import { z } from "zod";

export const CertificateSchema = z.object({
  imageFileId: z.string().uuid().optional(),
  name: z.string().max(255).optional(),
  publishDate: z.string().optional(), 
  publisher: z.string().max(255).optional(),
});

export const ExperienceSchema = z.object({
  name: z.string().max(255).optional(),
  startYear: z.number().optional(),
  endYear: z.number().optional(),
  description: z.string().max(2000).optional(),
});

export const ProjectSchema = z.object({
  name: z.string().max(255).optional(),
  professionRole: z.string().max(255).optional(),
  imageFileId: z.string().max(255).optional(),
  date: z.string().optional(), 
  description: z.string().max(2000).optional(),
});

export const LinkSchema = z.object({
  name: z.string().max(255).optional(),
  url: z.string().url().max(500).optional(),
});

export const ProftoResponseSchema = z.object({
  avatarFileId: z.string().uuid().optional(),
  name: z.string().max(255).optional(),
  professionRole: z.string().max(255).optional(),
  lastEducation: z.string().max(255).optional(),
  email: z.string().email().max(255).optional(),
  summary: z.string().max(2000).optional(),
  cvFileId: z.string().uuid().optional(),
  certificates: z.array(CertificateSchema).optional(),
  experiences: z.array(ExperienceSchema).optional(),
  projects: z.array(ProjectSchema).optional(),
  links: z.array(LinkSchema).optional(),
  userId: z.string().uuid(),
  updatedAt: z.string(), 
}).partial()

export const UpdateProftoBodySchema = z.object({
  avatarFileId: z.string().uuid().optional().nullable(),
  name: z.string().max(255).optional().nullable(),
  professionRole: z.string().max(255).optional().nullable(),
  lastEducation: z.string().max(255).optional().nullable(),
  email: z.string().email().max(255).optional().nullable(),
  summary: z.string().max(2000).optional().nullable(),
  cvFileId: z.string().uuid().optional().nullable(),
  certificates: z.array(CertificateSchema).optional(),
  experiences: z.array(ExperienceSchema).optional(),
  projects: z.array(ProjectSchema).optional(),
  links: z.array(LinkSchema).optional(),
});

export type Certificate = z.infer<typeof CertificateSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Link = z.infer<typeof LinkSchema>;
export type ProftoResponse = z.infer<typeof ProftoResponseSchema>;
export type UpdateProftoBody = z.infer<typeof UpdateProftoBodySchema>;

export type ListUsersParams = {
  query?: string;
  page?: number;
  limit?: number;
};

export type ListUsersResponseItem = {
  userId: string;
  username: string;
  name: string;
  avatarFileId: string;
  professionRole: string;
};
