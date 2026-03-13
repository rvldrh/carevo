import Image from "next/image";

interface EmailSentViewProps {
  email: string;
}

export default function EmailSentView({ email }: EmailSentViewProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white rounded-[20px] shadow-2xl px-8 py-14 md:px-16 md:py-16 w-full max-w-180 flex flex-col items-center text-center gap-6">
        
        <Image
          src="/illustration/email-sent.svg"
          alt="Email sent"
          width={320}
          height={200}
        />

        <p className="text-[18px] font-semibold text-[#2E2E2E]">
          Kami telah mengirimkan ke alamat email{" "}
          <span className="font-bold">{email}</span>
        </p>

        <p className="text-[16px] text-[#2E2E2E]">
          Tidak mendapatkan email?
        </p>

        <button className="text-[#4D96FF] underline font-semibold hover:opacity-80">
          klik kirim ulang email
        </button>

        <p className="font-semibold text-[#2E2E2E] mt-2">
          Anda dapat mengirim ulang kode pada pukul 01:00.
        </p>

      </div>
    </div>
  );
}