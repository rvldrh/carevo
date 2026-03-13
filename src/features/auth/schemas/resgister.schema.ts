import { z } from "zod"
import { RegisterUserBody } from "@carevo/contracts/zod"

export const registerSchema = RegisterUserBody

export type RegisterSchema = z.infer<typeof registerSchema>