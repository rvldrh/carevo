import { registerUser } from "@carevo/contracts/api"
import { RegisterUserBody } from "@carevo/contracts/zod"
import { z } from "zod"
import { apiClient } from "@/shared/utils/api/api-client";
import {
  ChangeUserPasswordBodyType,
  LoginUserBodyType,
  LoginUserResponseType,
  ResetUserPasswordBodyType,
  SendPasswordResetEmailBodyType
} from "@/features/auth/schemas/auth.schema";
import { logoutUser as logoutApi } from "@carevo/contracts/api"; 
import { authClient } from "../auth-client";
import { VerifyEmailType } from "@/features/auth/schemas/auth.schema";

export async function logoutUser() {
  return logoutApi({});
}

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

export async function loginUser(
  data: LoginUserBodyType
): Promise<LoginUserResponseType> {

  const response = await apiClient.post("/v1/auth/login", data);
  return response.data;
}

export async function refreshToken(rememberMe: boolean) {
  const response = await apiClient.post("/v1/auth/refresh", {
    rememberMe
  });

  return response.data;
}


export const verifyEmail = async (token: string) => {
  const payload: VerifyEmailType = { token };

  const res = await authClient.post("/v1/auth/email/verify", payload);

  return res.data; 
};

export async function sendPasswordResetEmail(data: SendPasswordResetEmailBodyType) {
  await apiClient.post("/v1/auth/password/forgot", data);
}

export async function resetUserPassword(data: ResetUserPasswordBodyType) {
  await apiClient.post("/v1/auth/password/reset", data);
}

export async function changeUserPassword(data: ChangeUserPasswordBodyType) {
  await apiClient.post("/v1/auth/password/change", data);
}
export function getGoogleOAuthUrl() {
  return `${process.env.NEXT_PUBLIC_API_URL}v1/auth/oauth/google`;
}

export async function loginWithGoogleToken(token: string) {
  return apiClient.post("/v1/auth/google", {
    token,
  });
}