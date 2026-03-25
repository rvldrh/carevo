import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://alloc001.adyuta.group/api";

export const cvApi = axios.create({
  baseURL: `${API_BASE_URL}/v1`,
});

// Otomatis ambil token dari cookie setiap kali request dikirim
cvApi.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Sanitizer function to strip out empty strings on strictly validated optional fields
const sanitizePayload = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(sanitizePayload);
  } else if (obj !== null && typeof obj === "object") {
    // Fields that backend strictly validates (e.g., Zod .url() or .email()), but are optional
    const keysToStripIfEmpty = ["email", "websiteUrl", "url", "verificationUrl"];
    const newObj: any = {};
    for (const key in obj) {
      // Strip 'id' property used by React Hook Form but not accepted by backend
      if (key === "id") continue;

      if (keysToStripIfEmpty.includes(key) && obj[key] === "") {
        continue; // skip sending empty string
      }
      newObj[key] = sanitizePayload(obj[key]);
    }
    return newObj;
  }
  return obj;
};

export const cvService = {
  // GET Data CV
  getCV: async (userId: string) => {
    const { data } = await cvApi.get(`/users/${userId}/cv`);
    const cv = data.data || data;

    // Fix backend DB typo properties on GET
    const normalize = (val: any) => (Array.isArray(val) ? val : []);

    // Support organizations vs organziations
    const orgs = (cv.organizations && cv.organizations.length > 0) ? cv.organizations : cv.organziations;
    cv.organizations = normalize(orgs);

    // Support certifications vs certificates
    const certs = (cv.certifications && cv.certifications.length > 0) ? cv.certifications : cv.certificates;
    cv.certifications = normalize(certs);

    return cv;
  },

  // PATCH Data CV (Update)
  updateCV: async (userId: string, payload: Record<string, any>) => {
    console.log("DEBUG: Original Payload in cvService.updateCV", JSON.parse(JSON.stringify(payload)));
    const cleanPayload = sanitizePayload(payload);
    console.log("DEBUG: Clean/Sanitized Payload in cvService.updateCV", JSON.parse(JSON.stringify(cleanPayload)));

    // Backend desync support: Map to all possible names (correct and known typos)
    if (cleanPayload.organizations) {
      const orgArray = cleanPayload.organizations.map((org: any) => ({
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
    
    if (cleanPayload.certifications) {
      const certArray = cleanPayload.certifications.map((cert: any) => ({
        ...cert,
        title: cert.title || cert.name,
        organization: cert.organization || cert.publisher,
        issueDate: cert.issueDate || cert.publishDate,
      }));

      cleanPayload.certificates = certArray;
      cleanPayload.certification = certArray;
      cleanPayload.certificate = certArray;
      cleanPayload.certifications = certArray;
    }

    console.log("DEBUG: Final Payload sent to PATCH API:", JSON.parse(JSON.stringify(cleanPayload)));
    const { data } = await cvApi.patch(`/users/${userId}/cv`, cleanPayload);
    return data;
  },

  // SAVE Data CV (Manual Finalize)
  saveCV: async (userId: string) => {
    const { data } = await cvApi.post(`/users/${userId}/cv/save`);
    console.log("FINAL PAYLOAD", data);
    return data;
  },

  // DOWNLOAD Data CV
  downloadCV: async (userId: string, preview: boolean = false) => {
    const response = await cvApi.get(`/users/${userId}/cv/download`, {
      params: { preview },
      responseType: "blob",
    });
    return response.data;
  },

  // AI GENERATE CV
  aiGenerateCV: async (payload: { input: string; section: string }) => {
    const response = await cvApi.post("/ai/generate-cv", payload, {
      responseType: "text",
    });
    return response.data;
  },
};