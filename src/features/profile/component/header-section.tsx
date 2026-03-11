import IconButton from "@/components/ui/button/icon-button";

export default function HeaderSection() {
  return (
    <section className="pt-[20%] pb-[15%] px-[22%] relative">
      <IconButton
        icon="/icons/edit.svg"
        alt="edit"
        className="absolute right-[22%] top-[10%]"
      />

      <div className="flex flex-col items-center">
        <h1 className="text-[#4a6cf7] text-4xl font-bold text-center">
          BAGAS ADITHA PRATAMA
        </h1>

        <p className="text-[#1a1a2e] text-4xl font-semibold text-center mt-6 whitespace-pre-line">
          Mahasiswa Teknik Informatika | UI/UX Designer{"\n"}& Penggiat
          Cybersecurity
        </p>

        <div className="flex gap-6 mt-10">
          <button className="px-8 py-3 rounded-full bg-[#4a6cf7] text-white font-semibold text-lg hover:bg-[#3d5edb] transition">
            Portoku
          </button>

          <button className="px-8 py-3 rounded-full border-2 border-[#4a6cf7] text-[#4a6cf7] font-semibold text-lg hover:bg-[#4a6cf7] hover:text-white transition">
            Hubungi Aku
          </button>
        </div>
      </div>

      <div className="mt-36">
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Tentang</h2>

        <p className="text-lg leading-relaxed text-[#444] max-w-4xl">
          Mahasiswa Teknik Informatika di Universitas Brawijaya yang berfokus
          pada keamanan siber, penetration testing, serta desain UI/UX kreatif.
          <br />
          <br />
          Linux adalah lingkungan kerja utama saya dan saya berkembang dalam
          kolaborasi teknis yang berorientasi solusi.
        </p>
      </div>
    </section>
  );
}