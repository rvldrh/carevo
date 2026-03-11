import IconButton from "@/components/ui/button/icon-button";

export default function ExperienceSection() {
  return (
    <section className="px-[22%] py-16 border-t border-[#dfe3f5]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-[#1a1a2e]">Pengalaman</h2>

        <div className="flex gap-4">
          <IconButton icon="/icons/plus.svg" alt="add" />
          <IconButton icon="/icons/edit.svg" alt="edit" />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <span className="text-lg font-semibold text-[#4a6cf7] min-w-[120px]">
            2024 - 2026
          </span>

          <div>
            <p className="text-xl font-bold">
              UI/UX Designer & Documentation
            </p>

            <p className="text-lg text-gray-600 mt-2">
              Merancang user flow dan interface serta dokumentasi teknis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}