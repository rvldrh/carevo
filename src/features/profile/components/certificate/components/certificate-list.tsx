"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getFile } from "@carevo/contracts/api";
import { useCertificateStore } from "@/features/profile/stores/certificate-store";

export type CertificateWithImage = {
  name: string;
  publisher: string;
  publishDate: string;
  imageUrl?: string;
};

interface Props {
  certificates: CertificateWithImage[];
}

function CertificateItem({ cert }: { cert: CertificateWithImage }) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!cert.imageFileId) return;

    let objectUrl: string;

    getFile(cert.imageFileId)
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        setImgSrc(objectUrl);
      })
      .catch((err) => {
        console.error("Failed to load image:", err);
      });

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [cert.imageUrl]);

  return (
    <div className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-sm border border-[var(--gray-200)] hover:shadow-md transition">
      <div className="w-16 h-16 bg-[var(--blue-100)] rounded-lg flex items-center justify-center overflow-hidden">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={cert.name}
            width={58}
            height={58}
            className="w-full h-full object-contain"
            unoptimized
          />
        ) : (
          <span className="text-xs text-gray-400">Loading...</span>
        )}
      </div>

      <div>
        <h3 className="text-lg font-bold text-[var(--black)]">{cert.name}</h3>
        <p className="text-md text-[var(--gray-600)]">{cert.publisher}</p>
        {cert.publishDate && (
          <p className="text-sm text-[var(--gray-400)] mt-1">
            Diterbitkan: {cert.publishDate}
          </p>
        )}
      </div>
    </div>
  );
}

export default function CertificateList({ certificates }: Props) {
  const addCertificates = useCertificateStore((s) => s.setCertificates);
  useEffect(() => {
    addCertificates(certificates);
  }, [certificates, addCertificates]);
  if (certificates.length === 0) {
    return (
      <div className="text-center py-10 text-[var(--gray-500)]">
        Belum ada sertifikat yang ditambahkan.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {certificates.map((cert, index) => (
        <CertificateItem
          key={`${cert.name}-${cert.publisher}-${index}`}
          cert={cert}
        />
      ))}
    </div>
  );
}
