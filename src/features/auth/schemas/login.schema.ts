import { z } from "zod"
import { LoginUserBody } from "@carevo/contracts/zod"

export const loginSchema = LoginUserBody

export type LoginSchema = z.infer<typeof loginSchema>