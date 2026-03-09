import { apiClient } from "@/lib/axios"
import { usersSchema } from "./users.schema"

export async function getUsers() {
  const res = await apiClient.get("/users")

  return usersSchema.parse(res.data)
}