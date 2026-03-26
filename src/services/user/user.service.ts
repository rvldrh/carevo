import { apiClient } from "@/lib/axios";
import type { 
  ProftoResponse, 
  UpdateProftoBody, 
  ListUsersParams, 
  ListUsersResponseItem 
} from "@/features/profile/types/profto";

export const userService = {
  
  listUsers: async (params?: ListUsersParams): Promise<ListUsersResponseItem[]> => {
    const { data } = await apiClient.get("/v1/users", { params });
    return data.data || data;
  },

  
  getUserProfto: async (username: string): Promise<ProftoResponse> => {
    const { data } = await apiClient.get(`/v1/users/u/${username}/profto`);
    return data.data || data;
  },

  
  updateUserProfto: async (userId: string, body: UpdateProftoBody): Promise<{ message: string }> => {
    const { data } = await apiClient.patch(`/v1/users/${userId}/profto`, body);
    return data.data || data;
  },
};
