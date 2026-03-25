import Image from "next/image";
import type { Certificate } from "@/features/asah/types/certificate";
import Link from "next/link";

interface Props {
  certificate: Certificate;
}

export default function CertificateHero({ certificate }: Props) {
  return (
    <section className="w-full bg-gradient-to-r from-fuchsia-700 via-violet-600 to-blue-500 flex justify-center">
      <div className="max-w-[1200px] w-full flex items-center justify-between py-12 px-6">
        <div className="flex items-start gap-6">
          <Link href={"/main/asah"}>
            <button
              type="button"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
            >
              <Image
                alt="logo"
                src={"/icons/back.svg"}
                width={10}
                height={10}
                className="w-10 h-10 rounded-full flex items-center justify-center"
              />
            </button>
          </Link>

          <div className="flex flex-col gap-2 text-white">
            <div className="flex items-center gap-3">
              <Image
                alt="logo"
                src={"/icons/google.svg"}
                width={8}
                height={8}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              />

              <h1 className="text-xl font-semibold">{certificate.title}</h1>
            </div>

            <p className="text-lg font-semibold">
              Jelajahi Sertifikat Professional dari {certificate.provider}
            </p>
          </div>
        </div>

        <Image
          src={"/illustration/detail-certificate.svg"}
          alt={certificate.title}
          width={288}
          height={288}
          className="rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
