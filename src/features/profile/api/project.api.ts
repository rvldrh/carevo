import type { UpdateProjectsBody } from "@/features/profile/types/project.type";
import { updateUserProfto } from "@carevo/contracts/api";

export async function updateProjects(userId: string, body: UpdateProjectsBody) {
  return updateUserProfto(userId, body)
}