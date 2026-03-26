import Image from "next/image";
import type { Certificate } from "@/features/profile/types/profto";
import { FILE_BASE_URL } from "@/shared/constants/api";

export default function CertificateList({ certificates }: { certificates: Certificate[] }) {
  if (certificates.length === 0) {
    return (
      <div className="text-center py-10 text-[var(--gray-500)]">
        Belum ada sertifikat yang ditambahkan.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {certificates.map((cert) => (
        <div key={`${cert.name}-${cert.publisher}`} className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-sm border border-[var(--gray-200)] hover:shadow-md transition">
          <div className="w-16 h-16 bg-[var(--blue-100)] rounded-lg flex items-center justify-center">
            {cert.imageFileId ? (
              <Image 
                src={`${FILE_BASE_URL}/${cert.imageFileId}`} 
                alt={cert.name || "Sertifikat"} 
                width={48} 
                height={48} 
                className="object-contain" 
              />
            ) : (
              <svg className="w-10 h-10 text-[var(--blue-500)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
              </svg>
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold text-[var(--black)]">{cert.name}</h3>
            <p className="text-md text-[var(--gray-600)]">{cert.publisher}</p>
            {cert.publishDate && (
              <p className="text-sm text-[var(--gray-400)] mt-1">Diterbitkan: {cert.publishDate}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}