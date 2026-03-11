import IconButton from "@/components/ui/button/icon-button";
import CertificateCard from "@/components/ui/card/certificate-card";

export default function CertificateSection() {
  return (
    <section className="w-full py-16 border-t border-[#dfe3f5]">
      <div className="flex justify-between items-center mb-10 px-[22%]">
        <h2 className="text-2xl font-bold">Sertifikat</h2>

        <div className="flex gap-4">
          <IconButton icon="/icons/plus.svg" alt="add" />
          <IconButton icon="/icons/edit.svg" alt="edit" />
        </div>
      </div>

      <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <CertificateCard
          title="Certified Ethical Hacker"
          date="06 Agustus 2025"
          image="/images/certificate-placeholder.png"
        />

        <CertificateCard
          title="Bootcamp Product Design"
          date="12 Mei 2025"
          image="/images/certificate-placeholder.png"
        />
      </div>
    </section>
  );
}