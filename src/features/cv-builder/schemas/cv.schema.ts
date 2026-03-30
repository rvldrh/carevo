import { z } from "zod";

export const PersonalInformationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().regex(/^\+[1-9]\d{1,14}$/, {
    message: "Format HP harus internasional (Contoh: +62812345678)",
  }).catch("+62"),
  address: z.string().optional(),
  profile: z.string().max(2000).catch(""),
  websiteUrl: z.string().url().or(z.literal("")).catch(""),
}).partial()

export const SkillSchema = z.object({
  name: z.string().min(1),
  score: z.coerce.number().min(0),
});

export const EducationSchema = z.object({
  educationLevel: z.enum([
    "SD", "SMP", "MTS", "SMA", "MA", "SMK", "Profesi", "D3", "D4", "S1", "S2", "S3"
  ]),
  institution: z.string().min(1),
  city: z.string().optional(),
  studyProgram: z.string().optional(),
  startYear: z.coerce.number().optional(),
  endYear: z.coerce.number().optional(),
  score: z.coerce.number().optional(),
  maxScale: z.coerce.number().optional(),
  description: z.string().optional(),
});

export const WorkExperienceSchema = z.object({
  position: z.string().min(1),
  companyName: z.string().url({ message: "Link/URL Perusahaan" }).or(z.string().min(1)), 
  employmentStatus: z.string().optional(),
  city: z.string().optional(),
  startYear: z.coerce.number().optional(),
  endYear: z.coerce.number().optional(),
  description: z.string().optional(),
});

export const CourseSchema = z.object({
  name: z.string().min(1),
  organizer: z.string().min(1),
  url: z.string().url().or(z.literal("")).optional(),
  description: z.string().optional(),
  startYear: z.coerce.number().optional(),
  endYear: z.coerce.number().optional(),
  location: z.string().optional(),
});

export const OrganizationSchema = z.object({
  position: z.string().min(1),
  organizationName: z.string().min(1),
  description: z.string().optional(),
  city: z.string().optional(),
  startYear: z.coerce.number().optional(),
  endYear: z.coerce.number().optional(),
});

export const CertificationSchema = z.object({
  name: z.string().min(1),
  publisher: z.string().min(1),
  publishDate: z.string().optional(),
  verificationUrl: z.string().url().or(z.literal("")).optional(),
  certificateNumber: z.string().optional(),
});

export const CVSchema = z.object({
  id: z.string().optional(),
  personalInformation: PersonalInformationSchema,
  skills: z.array(SkillSchema).default([]),
  educations: z.array(EducationSchema).default([]),
  workExperiences: z.array(WorkExperienceSchema).default([]),
  courses: z.array(CourseSchema).default([]),
  organizations: z.array(OrganizationSchema).default([]),
  certifications: z.array(CertificationSchema).default([]),
});

export type CVFormValues = z.input<typeof CVSchema>;
export type CVParsedValues = z.output<typeof CVSchema>;
export type PersonalInformation = z.infer<typeof PersonalInformationSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type WorkExperience = z.infer<typeof WorkExperienceSchema>;
export type Course = z.infer<typeof CourseSchema>;
export type Organization = z.infer<typeof OrganizationSchema>;
export type Certification = z.infer<typeof CertificationSchema>;
