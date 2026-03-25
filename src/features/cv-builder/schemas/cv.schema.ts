import { z } from "zod";

export const PersonalInformationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),

  email: z.string().email(),

  phone: z.string().regex(/^\+[1-9]\d{1,14}$/, {
    message: "Format HP harus internasional (Contoh: +62812345678)",
  }),

  address: z.string().optional(),

profile: z.string().max(255).catch(""),
websiteUrl: z.string().url().or(z.literal("")).catch("")});

export const EducationSchema = z.object({
  id: z.string().optional(),

  institution: z.string().min(1),
  educationLevel: z.string().optional(),
  studyProgram: z.string().optional(),
  city: z.string().optional(),

  startYear: z.coerce.number().default(0),
  endYear: z.coerce.number().default(0),

  score: z.coerce.number().optional(),
  maxScale: z.coerce.number().optional(),

  description: z.string().optional(),
});

export const WorkExperienceSchema = z.object({
  id: z.string().optional(),

  company: z.string().min(1),
  role: z.string().min(1),

  location: z.string().optional(),

  startDate: z.string().min(1),
  endDate: z.string().optional(),

  isCurrentlyWorking: z.boolean().default(false),

  description: z.string().optional(),
});

export const CourseSchema = z.object({
  id: z.string().optional(),

  title: z.string().min(1),
  provider: z.string().min(1),

  date: z.string().optional(),
  description: z.string().optional(),
});

export const OrganizationSchema = z.object({
  id: z.string().optional(),

  organizationName: z.string().min(1),
  role: z.string().min(1),

  startDate: z.string().optional(),
  endDate: z.string().optional(),

  description: z.string().optional(),
});

export const CVSchema = z.object({
  id: z.string().optional(),

  personalInformation: PersonalInformationSchema,

  educations: z.array(EducationSchema).default([]),
  workExperiences: z.array(WorkExperienceSchema).default([]),
  courses: z.array(CourseSchema).default([]),
  organizations: z.array(OrganizationSchema).default([]),
});

export type CVFormValues = z.infer<typeof CVSchema>;
export type PersonalInformation = z.infer<typeof PersonalInformationSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type WorkExperience = z.infer<typeof WorkExperienceSchema>;
export type Course = z.infer<typeof CourseSchema>;
export type Organization = z.infer<typeof OrganizationSchema>;