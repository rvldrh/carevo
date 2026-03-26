import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://alloc001.adyuta.group/api";

export const cvApi = axios.create({
  baseURL: `${API_BASE_URL}/v1`,
});


cvApi.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


const sanitizePayload = (obj: unknown): unknown => {
  if (Array.isArray(obj)) {
    return obj.map(sanitizePayload);
  } else if (obj !== null && typeof obj === "object") {
    
    const keysToStripIfEmpty = ["email", "websiteUrl", "url", "verificationUrl"];
    const newObj: Record<string, unknown> = {};
    const sourceObj = obj as Record<string, unknown>;
    for (const key in sourceObj) {
      
      if (key === "id") continue;

      if (keysToStripIfEmpty.includes(key) && sourceObj[key] === "") {
        continue; 
      }
      newObj[key] = sanitizePayload(sourceObj[key]);
    }
    return newObj;
  }
  return obj;
};

export const cvService = {
  
  getCV: async (userId: string) => {
    const { data } = await cvApi.get(`/users/${userId}/cv`);
    const cv = data.data || data;

    
    const normalize = (val: unknown) => (Array.isArray(val) ? val : []);

    
    const orgs = (cv.organizations && cv.organizations.length > 0) ? cv.organizations : cv.organziations;
    cv.organizations = normalize(orgs);

    
    const certs = (cv.certifications && cv.certifications.length > 0) ? cv.certifications : cv.certificates;
    cv.certifications = normalize(certs);

    return cv;
  },

  
  updateCV: async (userId: string, payload: Record<string, unknown>) => {
    const cleanPayload = sanitizePayload(payload) as Record<string, unknown>;

    
    if (cleanPayload.organizations && Array.isArray(cleanPayload.organizations)) {
      const orgArray = cleanPayload.organizations.map((org: Record<string, string | number | undefined>) => ({
        ...org,
        name: org.name || org.organizationName,
        organization: org.organization || org.organizationName,
        company: org.company || org.organizationName,
        role: org.role || org.position,
        date: (org.startYear && org.endYear) ? `${org.startYear}-${org.endYear}` : org.date,
      }));
      
      cleanPayload.organziations = orgArray;
      cleanPayload.organization = orgArray;
      cleanPayload.organisations = orgArray;
      cleanPayload.organizations = orgArray;
    }
    
    if (cleanPayload.certifications && Array.isArray(cleanPayload.certifications)) {
      const certArray = cleanPayload.certifications.map((cert: Record<string, string | number | undefined>) => ({
        ...cert,
        title: cert.title || cert.name,
        organization: cert.organization || cert.publisher,
        issueDate: (cert.issueDate || cert.publishDate) as string | undefined,
      }));

      cleanPayload.certificates = certArray;
      cleanPayload.certification = certArray;
      cleanPayload.certificate = certArray;
      cleanPayload.certifications = certArray;
    }

    const { data } = await cvApi.patch(`/users/${userId}/cv`, cleanPayload);
    return data;
  },

  
  saveCV: async (userId: string) => {
    const { data } = await cvApi.post(`/users/${userId}/cv/save`);
    return data;
  },

  
  downloadCV: async (userId: string, preview: boolean = false) => {
    const response = await cvApi.get(`/users/${userId}/cv/download`, {
      params: { preview },
      responseType: "blob",
    });
    return response.data;
  },

  
  aiGenerateCV: async (payload: { input: string; section: string }) => {
    const response = await cvApi.post("/ai/generate-cv", payload, {
      responseType: "text",
    });
    return response.data;
  },
};