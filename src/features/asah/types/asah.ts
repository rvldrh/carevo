export interface Bootcamp {
  id: string;
  professionRole?: string;
  thumbnailUrl?: string;
  name?: string;
  redirectUrl?: string;
  publisher?: string;
  startDate?: string;
  createdAt?: string;
}

export interface Certification {
  id: string;
  professionRole?: string;
  thumbnailUrl?: string;
  name?: string;
  redirectUrl?: string;
  publisher?: string;
  createdAt?: string;
}

export interface ListBootcampsParams {
  query?: string;
  professionRole?: string;
  page?: number;
  limit?: number;
}

export interface ListCertificationsParams {
  query?: string;
  professionRole?: string;
  page?: number;
  limit?: number;
}

export type AsahVariant = "certificate" | "bootcamp"

interface BaseAsahItem {
  id: string
  title: string
  image: string
  variant: AsahVariant
  provider?: string
  date?: string
  redirectUrl?: string
}

export interface CertificateItem extends BaseAsahItem {
  variant: "certificate"
}

export interface BootcampItem extends BaseAsahItem {
  variant: "bootcamp"
}

export type AsahItem = CertificateItem | BootcampItem