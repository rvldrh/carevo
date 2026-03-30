import { aiGenerateCv, AiGenerateCvBodySection, downloadCv, getCv, saveCv, updateCv } from "@carevo/contracts/api";

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
    const data  = await getCv(userId);
    const normalize = (val: unknown) => (Array.isArray(val) ? val : []);

    
    const orgs = (data.organizations && data.organizations.length > 0) ? data.organizations : data.organizations;
    data.organizations = normalize(orgs);

    
    const certs = (data.certifications && data.certifications.length > 0) ? data.certifications : data.certifications;
    data.certifications = normalize(certs);

    return data;
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

    const data = await updateCv(userId, cleanPayload);
    return data;
  },

  
  saveCV: async (userId: string) => {
    const data  = await saveCv(userId);
    return data;
  },

  
  downloadCV: async (userId: string, preview: boolean = false) => {
    const response = await downloadCv(userId, { preview });

    return response;
  },

  
  aiGenerateCV: async (payload: { input: string; section: AiGenerateCvBodySection }) => {
    const response = await aiGenerateCv({input: payload.input, section: payload.section});
    return response;
  },
};