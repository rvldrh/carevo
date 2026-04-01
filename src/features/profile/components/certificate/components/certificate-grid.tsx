import { CertificateCard } from "@/features/profile/components/certificate/components/certificate-card";
import type { Certificate } from "@/features/profile/types/certificate.type";

type Props = {
  certificates: Certificate[];
};

export function CertificateGrid({ certificates }: Props) {
  if (certificates.length === 0) {
    return <p className="text-gray-500">No certificates found</p>;
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
      "
    >
      {certificates.map((cert) => (
        <CertificateCard key={`${cert.name}-${cert.publisher}`} certificate={cert} />
      ))}
    </div>
  );
}