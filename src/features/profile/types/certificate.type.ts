export type Certificate = {
  id: string;
  name: string;
  publisher: string;
  publishDate: string;
  imageFileId: string;
};

export type UpdateCertificateBody = {
  certificates: Certificate[];
};