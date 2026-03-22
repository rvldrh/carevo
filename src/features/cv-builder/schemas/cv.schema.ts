import { z } from "zod";

export const PersonalInfoSchema = z.object({
  fullName: z.string().min(1),
  title: z.string(),
  email: z.string().email(),
  phone: z.string(),
  location: z.string(),
  summary: z.string(),
});

export const ExperienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  date: z.string(),
  descriptions: z.array(z.string()),
});

export const EducationSchema = z.object({
  university: z.string(),
  location: z.string(),
  date: z.string(),
  degree: z.string(),
  descriptions: z.array(z.string()),
});

export const CourseSchema = z.object({
  name: z.string(),
  location: z.string(),
  date: z.string(),
  descriptions: z.array(z.string()),
});

export const OrganizationSchema = z.object({
  name: z.string(),
  location: z.string(),
  date: z.string(),
  role: z.string(),
  descriptions: z.array(z.string()),
});

export const CVSchema = z.object({
  personalInfo: PersonalInfoSchema,
  experiences: z.array(ExperienceSchema),
  educations: z.array(EducationSchema),
  courses: z.array(CourseSchema),
  organizations: z.array(OrganizationSchema),
});

export type CV = z.infer<typeof CVSchema>;