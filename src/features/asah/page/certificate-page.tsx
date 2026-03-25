import type { Certificate } from "@/features/asah/types/certificate"
import CertificateHero from "@/features/asah/components/certificates/certificate-hero"
import CertificateGrid from "@/features/asah/components/certificates/certificate-grid"

interface Props {
  certificates: Certificate[]
}

export default function CertificatePageWrapper({
  certificates,
}: Props) {

  if (!certificates.length) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>No certificates found</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500">

      <CertificateHero certificate={certificates[0]} />

      <CertificateGrid certificates={certificates} />

    </main>
  )
}