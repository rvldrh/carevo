"use client";

import Image from "next/image";

interface Props {
  onCommentClick?: () => void;
}

export default function PostActions({ onCommentClick }: Props) {
  return (
    <div className="flex items-center gap-6">

      <button className="flex items-center gap-1 hover:opacity-70 transition">
        <Image src="/icons/like.svg" alt="like" width={20} height={20} />
        <span className="text-xs">Suka</span>
      </button>

      <button
        onClick={onCommentClick}
        className="flex items-center gap-1 hover:opacity-70 transition"
      >
        <Image src="/icons/comment.svg" alt="comment" width={20} height={20} />
        <span className="text-xs">Komentar</span>
      </button>

      <button className="flex items-center gap-1 hover:opacity-70 transition">
        <Image src="/icons/share.svg" alt="share" width={20} height={20} />
        <span className="text-xs">Bagikan</span>
      </button>

    </div>
  );
}