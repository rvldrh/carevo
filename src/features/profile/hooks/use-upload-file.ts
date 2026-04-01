import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "@carevo/contracts/api";

export const useUploadFile = () => {
  return useMutation({
    mutationFn: async (body: { file: Blob }) => {
      return await uploadFile(body);
    },
  });
};