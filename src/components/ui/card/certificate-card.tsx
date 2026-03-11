import Image from "next/image";

interface CertificateCardProps {
  title: string;
  date: string;
  image: string;
}

export default function CertificateCard({
  title,
  date,
  image,
}: CertificateCardProps) {
  return (
    <div className="w-full max-w-[600px]">
      <div className="rounded-xl overflow-hidden border">
        <div className="h-[400px] relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

        <p className="text-sm text-blue-500 mt-1">{date}</p>
      </div>
    </div>
  );
}