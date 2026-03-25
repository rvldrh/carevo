import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "https://alloc001.adyuta.group/api/v1";

export const cvApi = axios.create({
  baseURL: API_BASE_URL,
});

// Otomatis ambil token dari cookie setiap kali request dikirim
cvApi.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const cvService = {
  // GET Data CV
  getCV: async (userId: string) => {
    const { data } = await cvApi.get(`/users/${userId}/cv`);
    return data.data || data;
  },

  // SAVE Data CV (Manual Trigger)
  saveCV: async (userId: string, payload: any) => {
    // Pastikan userId adalah string, bukan object
    const response = await cvApi.post(`/users/${userId}/cv`, payload);
    return response.data;
  },
  patchCV: async (userId: string, payload: Partial<any>) => {
    const { data } = await cvApi.patch(`/users/${userId}/cv`, payload);
    return data;
  },
};