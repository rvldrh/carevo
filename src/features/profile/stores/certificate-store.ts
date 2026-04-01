import { create } from "zustand";
import type { Certificate } from "../types/certificate.type";

type CertificateState = {
  certificates: Certificate[];

  setCertificates: (certs: Certificate[]) => void;
  addCertificate: (cert: Certificate) => void;
  updateCertificate: (cert: Certificate) => void;
};

export const useCertificateStore = create<CertificateState>((set) => ({
  certificates: [],

  setCertificates: (certs) => set({ certificates: certs }),

  addCertificate: (cert) =>
    set((state) => ({
      certificates: [...state.certificates, cert],
    })),

  updateCertificate: (updated) =>
    set((state) => ({
      certificates: state.certificates.map((c) =>
        c.id === updated.id ? updated : c
      ),
    })),
}));