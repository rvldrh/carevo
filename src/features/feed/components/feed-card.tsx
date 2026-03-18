import FeedActions from "@/features/feed/components/feed-action";

export default function FeedCard() {
  return (
    <div className="bg-white rounded-[20px] shadow-md p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-7 h-7 rounded-full"
            src="https://placehold.co/28x28"
            alt="avatar"
          />
          <span className="text-xs font-semibold text-zinc-800">
            Komunitas UI/UX Designer
          </span>
        </div>
        <button className="flex items-center gap-1 bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full">
          Gabung
        </button>
      </div>
      <div>
        <h3 className="text-base font-bold text-neutral-800">
          Gabung bersama Komunitas kami
        </h3>

        <p className="text-sm text-neutral-800 mt-2 leading-6">
          UI/UX Designer Community hadir untuk kamu! 👋
          Mau ningkatin skill desain? Cari feedback buat project?
          Atau sekadar ngobrol soal dunia UI/UX?
        </p>
      </div>
      <FeedActions />
    </div>
  );
}