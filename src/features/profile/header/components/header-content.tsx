export default function HeaderContent() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-[var(--blue-500)] text-4xl font-bold text-center">
          BAGAS ADITHA PRATAMA
        </h1>

        <p className="text-[var(--black)] text-4xl font-semibold text-center mt-6 whitespace-pre-line">
          Mahasiswa Teknik Informatika | UI/UX Designer{"\n"}& Penggiat Cybersecurity
        </p>

        <div className="flex gap-6 mt-10">
          <button className="px-8 py-3 rounded-full bg-[var(--blue-500)] text-white font-semibold text-lg hover:bg-[var(--blue-600)] transition">
            Portoku
          </button>

          <button className="px-8 py-3 rounded-full border-2 border-[var(--blue-500)] text-[var(--blue-500)] font-semibold text-lg hover:bg-[var(--blue-600)] hover:text-white transition">
            Hubungi Aku
          </button>
        </div>
      </div>

      <div className="mt-36">
        <h2 className="text-2xl font-bold text-[var(--black)] mb-6">
          Tentang
        </h2>

        <p className="text-lg leading-relaxed text-[var(--black)] max-w-4xl">
          Mahasiswa Teknik Informatika di Universitas Brawijaya yang berfokus
          pada keamanan siber, penetration testing, serta desain UI/UX kreatif.
          <br />
          <br />
          Linux adalah lingkungan kerja utama saya dan saya berkembang dalam
          kolaborasi teknis yang berorientasi solusi.
        </p>
      </div>
    </>
  );
}