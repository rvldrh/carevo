import { getUserProfto, getFile } from "@carevo/contracts/api";
import { getUser } from "@carevo/contracts/api";

export type CertificateWithImage = {
  name: string;
  publisher: string;
  publishDate: string;
  imageUrl?: string;
};

export async function fetchCertificates(): Promise<CertificateWithImage[]> {
  const user = await getUser();
  const data = await getUserProfto(user.username);

  const certificates = data.certificates ?? [];

  const mapped = await Promise.all(
    certificates.map(async (cert) => {
      if (!cert.imageFileId) {
        return {
          ...cert,
          imageUrl: undefined,
        };
      }

      const file = await getFile(cert.imageFileId);

      const imageUrl = URL.createObjectURL(file);

      return {
        ...cert,
        imageUrl,
      };
    }),
  );

  return mapped;
}

export async function fetchCertificatesWithImage() {
  const user = await getUser();
  const data = await getUserProfto(user.username);

  const certs = data.certificates ?? [];

  return await Promise.all(
    certs.map(async (cert) => {
      let imageUrl: string | undefined;

      if (cert.imageFileId) {
        const file = await getFile(cert.imageFileId);

        const blob = file instanceof Blob ? file : file.data;

        imageUrl = URL.createObjectURL(blob);
      }

      return {
        name: cert.name!,
        publisher: cert.publisher!,
        publishDate: cert.publishDate!,
        imageUrl,
      };
    }),
  );
}
