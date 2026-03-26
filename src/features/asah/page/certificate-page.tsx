"use client";

import CertificateHero from "@/features/asah/components/certificates/certificate-hero"
import CertificateGrid from "@/features/asah/components/certificates/certificate-grid"
import { useGetCertificationsFeed } from "@/features/asah/hooks/use-asah";

export default function CertificatePage() {
  const { data: certifications, isLoading, isError } = useGetCertificationsFeed({ page: 1, limit: 12 });

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500 flex items-center justify-center">
        <div className="text-white text-xl animate-pulse font-semibold">Memuat Sertifikasi...</div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500 flex items-center justify-center">
        <div className="text-red-500 bg-white p-6 rounded-2xl shadow-lg border border-red-100">Gagal memuat sertifikasi. Silakan coba lagi.</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500">
      <CertificateHero certification={certifications?.[0]} />
      <CertificateGrid certifications={certifications || []} />
    </main>
  )
}