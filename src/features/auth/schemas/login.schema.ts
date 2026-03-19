import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),

  password: z
    .string()
    .min(6, "Password minimal 6 karakter"),

  rememberMe: z.boolean().default(false)
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;