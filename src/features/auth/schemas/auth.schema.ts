import { z } from "zod";

export const LoginUserBody = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(128),
  rememberMe: z.boolean()
});

export const LoginUserResponse = z.object({
  userId: z.string().uuid().optional(),
  accessToken: z.string().optional()
});

export const RefreshUserTokenBody = z.object({
  rememberMe: z.boolean()
});

export const RefreshUserTokenResponse = z.object({
  accessToken: z.string()
});

export const SendPasswordResetEmailBody = z.object({
  email: z.string().email().max(255)
});

export const ResetUserPasswordBody = z.object({
  token: z.string(),
  newPassword: z.string().min(8).max(128)
});

export const ChangeUserPasswordBody = z.object({
  oldPassword: z.string().min(8).max(128),
  newPassword: z.string().min(8).max(128)
});

export const VerifyEmailSchema = z.object({
  token: z.string().min(1),
});

export const updateProfileSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});


export const forgotPasswordSchema = z.object({
  email: z.string().email("Email tidak valid"),
});
export const changePasswordSchema = z.object({
  oldPassword: z.string().min(6, "Minimal 6 karakter"),
  newPassword: z.string().min(6, "Minimal 6 karakter"),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type LoginUserBodyType = z.infer<typeof LoginUserBody>;
export type LoginUserResponseType = z.infer<typeof LoginUserResponse>;
export type SendPasswordResetEmailBodyType = z.infer<typeof SendPasswordResetEmailBody>;
export type ResetUserPasswordBodyType = z.infer<typeof ResetUserPasswordBody>;
export type ChangeUserPasswordBodyType = z.infer<typeof ChangeUserPasswordBody>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type VerifyEmailType = z.infer<typeof VerifyEmailSchema>;
