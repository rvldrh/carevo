"use client";

export default function PostComments() {
  return (
    <div className="flex flex-col gap-4 border-t pt-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
        <input
          placeholder="Tulis Komentar"
          className="flex-1 h-8 rounded-xl border px-3 text-xs"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <div>
              <p className="text-sm font-semibold">Pranata Chandra</p>
              <p className="text-xs text-gray-500">UI/UX Designer</p>
              <p className="text-xs mt-1">Saya tertarik dengan komunitas ini</p>
            </div>
          </div>

          <div className="text-[10px] text-gray-400 text-right">
            4 jam lalu
            <div className="cursor-pointer hover:underline">Balas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
