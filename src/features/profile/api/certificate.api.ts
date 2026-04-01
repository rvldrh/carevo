import type { UpdateCertificateBody } from "@/features/profile/types/certificate.type";
import { updateUserProfto } from "@carevo/contracts/api";

export async function updateCertificates(
  userId: string,
  body: UpdateCertificateBody
): Promise<void> {
  await updateUserProfto(userId, body)
}