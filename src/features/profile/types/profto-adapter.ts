import type { GetUserProfto200 } from "@carevo/contracts/api";

/**
 * Normalize API response → UI-safe type
 */
export type ProftoFromApi = Omit<
  GetUserProfto200,
  | "avatarFileId"
  | "name"
  | "professionRole"
  | "lastEducation"
  | "email"
  | "summary"
  | "cvFileId"
> & {
  avatarFileId?: string;
  name?: string;
  professionRole?: string;
  lastEducation?: string;
  email?: string;
  summary?: string;
  cvFileId?: string;
};