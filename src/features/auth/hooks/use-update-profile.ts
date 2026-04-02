import { updateUserProfto } from "@carevo/contracts/api";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: async ({
      userId,
      body,
    }: {
      userId: string;
      body: {
        avatarFileId?: string;
        username?: string;
        email?: string;
      };
    }) => {
      return await updateUserProfto(userId, body);
    },
  });
};