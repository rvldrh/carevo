import CertificateList from "@/features/profile/components/certificate/components/certificate-list";
import CertificateActionClient from "@/features/profile/components/certificate/components/certificate-action-client";
import type { ProftoResponse } from "@/features/profile/types/profto";

export default function CertificateSection({ profto, userId }: { profto: ProftoResponse | null; userId: string }) {
  return (
    <section className="px-[22%] py-16 border-t bg-[var(--blue-50)] border-[var(--gray-300)]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-[var(--black)]">
          Sertifikat
        </h2>

        <CertificateActionClient profto={profto} userId={userId} />
      </div>

      <CertificateList certificates={profto?.certificates || []} />
    </section>
  );
}