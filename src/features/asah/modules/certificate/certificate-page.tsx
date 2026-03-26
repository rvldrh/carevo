import AsahPageWrapper from "@/features/asah/components/wrapper/asah-page.wrapper";
import { certificates } from "@/features/asah/data/certificate";
import { mapCertificationToAsah } from "@/features/asah/utils/map-asah-item";

export default function CertificatePage() {
  const items = certificates.map(mapCertificationToAsah);
  return (
    <AsahPageWrapper
      items={items}
      subtitle="Jelajahi Sertifikat Profesional dari Google"
      variant="certificate"
    />
  );
}
