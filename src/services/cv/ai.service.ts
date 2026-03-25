import axios from "axios";

export const generateProfileAI = async (
  token: string,
  context: string
): Promise<string> => {
  const response = await axios.post(
    "https://alloc001.adyuta.group/api/v1/ai/generate-cv",
    {
      input: context || "Pro",
      section: "PROFILE",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "text",
    }
  );

  return response.data;
};