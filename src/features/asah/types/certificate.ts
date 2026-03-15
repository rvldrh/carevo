
export interface Certificate {
  id: number
  title: string
  provider: string
  level: string
  image: string
}
export interface CertificateProvider {
  name: string
  description: string
  logo?: string
  heroImage?: string
}

export interface CertificateGridProps {
  certificates: Certificate[]
}