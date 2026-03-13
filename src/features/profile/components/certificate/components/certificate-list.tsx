import CertificateCard from "@/components/ui/card/certificate-card";

export default function CertificateList() {
  return (
    <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <CertificateCard
        title="Certified Ethical Hacker"
        date="06 Agustus 2025"
        image="/icons/sertificate-card.svg"
      />

      <CertificateCard
        title="Bootcamp Product Design"
        date="12 Mei 2025"
        image="/icons/sertificate-card.svg"
      />
    </div>
  );
}