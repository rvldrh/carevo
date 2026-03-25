export type EducationItemUI = {
  university: string;
  location: string;
  startDate: string;
  endDate?: string;
  degree: string;
  descriptions: string[];
};

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  website?: string;
  profile?: string;
}

export interface CVFormValues {
  personalInformation: PersonalInformation;
  educations?: unknown[];
  workExperiences?: unknown[];
  courses?: unknown[];
  organizations?: unknown[];
}

export interface CVPayload {
  personalInformation: {
    firstName: string;
    lastName: string;
    profile: string;
    phone: string;
    email: string;
    address?: string;
    websiteUrl?: string;
  };
  educations: unknown[];
  workExperiences: unknown[];
  courses: unknown[];
  organizations: unknown[];
}