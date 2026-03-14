import { RegisterUserBody } from "@carevo/contracts/zod"
import { z } from "zod"

export const registerFormSchema = RegisterUserBody.extend({
  username: RegisterUserBody.shape.username
    .min(3, "Username minimal 3 karakter")
    .max(30, "Username maksimal 30 karakter"),

  password: RegisterUserBody.shape.password
    .min(8, "Password minimal 8 karakter")
    .max(128, "Password maksimal 128 karakter")
})

export type RegisterFormValues = z.infer<typeof registerFormSchema>