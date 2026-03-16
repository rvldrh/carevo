import AsahPageWrapper from "@/features/asah/components/wrapper/asah-page.wrapper";
import { certificates } from "@/features/asah/data/certificate";

export default function CertificatePage() {
  return (
    <AsahPageWrapper
      items={certificates}
      subtitle="Jelajahi Sertifikat Profesional dari Google"
      variant="certificate"
    />
  );
}
