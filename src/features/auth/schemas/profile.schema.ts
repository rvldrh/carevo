import { z } from "zod";

export const ProfileSchema = z.object({
  userId: z.string(),
  username: z.string(),
  email: z.string(),
  avatarFileId: z.string().optional(),
});

export type Profile = z.infer<typeof ProfileSchema>;