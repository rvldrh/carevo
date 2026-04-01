import { useCertificateStore } from "@/features/profile/stores/certificate-store";
import { updateCertificates } from "../api/certificate.api";
import { useAuthStore } from "@/shared/utils/use-auth-store";
import type { Certificate } from "@/features/profile/types/certificate.type";

export function useCertificates() {
  const {
    certificates,
    addCertificate,
    updateCertificate,
  } = useCertificateStore();

  const userId = useAuthStore((s) => s.userId);

  const add = async (newCert: Certificate): Promise<void> => {
    if (!userId) throw new Error("User not authenticated");

    const updatedCertificates = [...certificates, newCert];

    await updateCertificates(userId, {
      certificates: updatedCertificates,
    });

    addCertificate(newCert);
  };

  const edit = async (updatedCert: Certificate): Promise<void> => {
    if (!userId) throw new Error("User not authenticated");

    const updatedCertificates = certificates.map((c) =>
      c.id === updatedCert.id ? updatedCert : c
    );

    await updateCertificates(userId, {
      certificates: updatedCertificates,
    });

    updateCertificate(updatedCert); 
  };

  return {
    certificates,
    add,
    edit,
  };
}