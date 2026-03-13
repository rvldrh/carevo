import { registerUser } from "@carevo/contracts/api"
import { RegisterUserBody } from "@carevo/contracts/zod"
import { z } from "zod"

export type RegisterUserInput = z.infer<typeof RegisterUserBody>

export async function registerUserService(data: RegisterUserInput) {

  const payload = RegisterUserBody.parse(data)

  try {
    const response = await registerUser(payload)
    return response
  } catch (error) {
    throw error
  }
}