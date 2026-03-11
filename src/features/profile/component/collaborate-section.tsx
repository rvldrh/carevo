import IconButton from "@/components/ui/button/icon-button";

export default function CollaborationSection() {
  return (
    <section className="w-full py-26 border-t border-[#dfe3f5] relative">
      <IconButton
        icon="/icons/edit.svg"
        alt="edit"
        className="absolute top-6 right-[103px]"
      />

      <h2 className="text-3xl font-bold text-center mb-14">
        Ayo Berkolaborasi Denganku
      </h2>

      <div className="px-[5%] grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <h3 className="text-2xl font-semibold text-black">Instagram</h3>

          <p className="text-xl text-gray-500 mt-2">@_bagasui</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-black">Email</h3>

          <p className="text-xl text-gray-500 mt-2">bagasui2@gmail.com</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-black">Github</h3>

          <p className="text-xl text-gray-500 mt-2">Bagas-32</p>
        </div>
      </div>
    </section>
  );
}