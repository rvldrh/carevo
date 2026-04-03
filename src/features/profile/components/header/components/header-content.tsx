import type { ProftoResponse } from "@/features/profile/types/profto";

export default function HeaderContent({ profto }: { profto: ProftoResponse | null }) {
  if (!profto) return null;

  

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-[var(--blue-500)] text-4xl font-bold text-center">
          {profto.name?.toUpperCase() || "NAME NOT SET"}
        </h1>

        <p className="text-[var(--black)] text-4xl font-semibold text-center mt-6 whitespace-pre-line">
          {profto.professionRole || "Profession Not Set"}
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
          {profto.summary || "No summary set."}
        </p>
      </div>
    </>
  );
}