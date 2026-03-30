import { aiGenerateCv } from "@carevo/contracts/api";

export const generateProfileAI = async (
  context: string
): Promise<string> => {
      const response = await aiGenerateCv({input: context || "Pro", section: "PROFILE"});

  return response;
};
