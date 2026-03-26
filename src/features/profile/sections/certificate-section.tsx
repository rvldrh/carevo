import CertificateSection from "@/features/profile/components/certificate/components/certificate-section";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function CertificateContainer({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  return <CertificateSection profto={profto} userId={userId} />;
}