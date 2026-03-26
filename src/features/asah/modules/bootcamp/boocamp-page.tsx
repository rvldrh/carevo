"use client";

import BootcampHero from "@/features/asah/components/bootcamp/bootcamp-hero"
import BootcampGrid from "@/features/asah/components/bootcamp/bootcamp-grid"
import { useGetBootcampsFeed } from "@/features/asah/hooks/use-asah";

export default function BootcampPage() {
  const { data: bootcamps, isLoading, isError } = useGetBootcampsFeed({ page: 1, limit: 12 });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500 flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Memuat Bootcamp...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500 flex items-center justify-center">
        <div className="text-red-500 bg-white p-4 rounded-xl">Gagal memuat bootcamp. Silakan coba lagi.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-500">
      <BootcampHero firstBootcamp={bootcamps?.[0]} />
      <BootcampGrid bootcamps={bootcamps || []} />
    </div>
  )
}