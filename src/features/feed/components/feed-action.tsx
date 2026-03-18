"use client";

export default function FeedActions() {
  return (
    <div className="flex justify-around border-t pt-3 text-xs">

      <button className="flex items-center gap-1">
        👍 <span>Suka</span>
      </button>

      <button className="flex items-center gap-1">
        💬 <span>Komentar</span>
      </button>

      <button className="flex items-center gap-1">
        🔗 <span>Bagikan</span>
      </button>

    </div>
  );
}