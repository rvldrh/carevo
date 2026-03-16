import CertificatePage from '@/features/asah/page/certificate-page'
import { certificates } from '@/features/asah/data/certificate'

const page = () => {
  return <CertificatePage certificates={certificates} />
}

export default page
