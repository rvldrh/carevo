import Image from "next/image";
import { Certificate } from "@/features/asah/types/certificate";

interface Props {
  certificate: Certificate;
}

export default function CertificateHero({ certificate }: Props) {
  return (
    <section className="w-full bg-gradient-to-r from-fuchsia-700 via-violet-600 to-blue-500 flex justify-center">
      <div className="max-w-[1200px] w-full flex items-center justify-between py-12 px-6">
        <div className="flex items-start gap-6">

          <button
            type="button"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
          >
            <span className="text-xl">←</span>
          </button>

          <div className="flex flex-col gap-2 text-white">

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full" />

              <h1 className="text-xl font-semibold">
                {certificate.title}
              </h1>
            </div>

            <p className="text-lg font-semibold">
              Jelajahi Sertifikat Professional dari {certificate.provider}
            </p>

          </div>

        </div>

        <Image
          src={certificate.image}
          alt={certificate.title}
          width={288}
          height={288}
          className="rounded-2xl object-cover"
        />

      </div>
    </section>
  );
}