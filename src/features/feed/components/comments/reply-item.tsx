"use client";

import type { Reply } from "@/features/feed/types/comment.type";
import Image from "next/image";

interface Props {
  reply: Reply;
}

export default function ReplyItem({ reply }: Props) {
  return (
    <div className="pl-11 flex flex-col gap-3">

      <div className="flex justify-between items-end">
        <div className="flex gap-3">
          <Image
            className="w-9 h-9 rounded-full"
            src="/icons/profile.svg"
            alt="avatar"
            width={36}
            height={36}
          />

          <div className="flex flex-col gap-2">
            <div>
              <p className="text-sm font-semibold">{reply.name}</p>
              <p className="text-xs text-zinc-500">{reply.role}</p>
            </div>

            <p className="text-xs font-medium">
              {reply.content}
            </p>
          </div>
        </div>

        <div className="text-[10px] text-zinc-500">
          {reply.createdAt}
        </div>
      </div>

    </div>
  );
}