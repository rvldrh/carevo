
import {
  loginUser as loginApi,
  logoutUser as logoutApi,
  registerUser as registerApi,
  getUser as getUserApi,
  verifyUserEmail,
  sendPasswordResetEmail as sendResetApi,
  resetUserPassword as resetPasswordApi,
  changeUserPassword as changePasswordApi,
} from "@carevo/contracts/api";

import { RegisterUserBody } from "@carevo/contracts/zod";
import type { z } from "zod";

import type {
  ChangeUserPasswordBodyType,
  LoginUserBodyType,
  LoginUserResponseType,
  ResetUserPasswordBodyType,
  SendPasswordResetEmailBodyType,
  VerifyEmailType,
} from "@/features/auth/schemas/auth.schema";

export async function loginUser(data: LoginUserBodyType): Promise<LoginUserResponseType> {
  return loginApi(data);
}

export async function logoutUser(): Promise<void> {
  await logoutApi();
}

export type RegisterUserInput = z.infer<typeof RegisterUserBody>;

export async function registerUserService(data: RegisterUserInput) {
  const payload = RegisterUserBody.parse(data);
  return registerApi(payload);
}

export async function getCurrentUser() {
  try {
    return await getUserApi();
  } catch {
    return null;
  }
}

export async function verifyEmail(token: string): Promise<unknown> {
  const payload: VerifyEmailType = { token };
  return verifyUserEmail(payload) as unknown;
}

export async function sendPasswordResetEmail(data: SendPasswordResetEmailBodyType) {
  return sendResetApi(data);
}

export async function resetUserPassword(data: ResetUserPasswordBodyType) {
  return resetPasswordApi(data);
}

export async function changeUserPassword(data: ChangeUserPasswordBodyType) {
  return changePasswordApi(data);
}

export function getGoogleOAuthUrl(): string {
  return `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/oauth/google`;
}