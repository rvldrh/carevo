import CertificatePageWrapper from "@/features/asah/page/certificate-page"
import { certificates } from "@/features/asah/data/certificate"

interface Props {
  params: {
    provider: string
  }
}

export default function Page({ params }: Props) {

  const filteredCertificates = certificates.filter(
    (c) => c.provider.toLowerCase() === params.provider
  )

  return (
    <CertificatePageWrapper
      certificates={filteredCertificates}
    />
  )
}