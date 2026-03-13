import CertificateList from "@/features/profile/components/certificate/components/certificate-list";
import CertificateActionsClient from "@/features/profile/components/certificate/components/certificate-action-client";

export default function CertificateSection() {
  return (
    <section className="w-full py-16 border-t bg-[var(--blue-200)] border-[var(--gray-300)]">
      <div className="flex justify-between items-center mb-10 px-[22%]">
        <h2 className="text-2xl font-bold">Sertifikat</h2>

        <CertificateActionsClient />
      </div>

      <CertificateList />
    </section>
  );
}