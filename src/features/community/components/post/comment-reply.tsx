"use client";

export default function CommentReply() {
  return (
    <div className="flex gap-3 mt-2">

      <div className="w-9 h-9 rounded-full bg-gray-300" />

      <div className="flex-1 relative">

        <input
          placeholder="Tulis balasan..."
          className="w-full h-10 rounded-xl border px-4 text-xs outline-none"
        />

        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-400 text-white text-[10px] px-3 py-1 rounded-lg">
          Balas
        </button>

      </div>
    </div>
  );
}   