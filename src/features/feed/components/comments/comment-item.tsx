"use client";

import { useState } from "react";
import type { Comment } from "@/features/feed/types/comment.type";
import Image from "next/image";
import ReplyItem from "./reply-item";
import ReplyInput from "./reply-input";

interface Props {
  comment: Comment;
}

export default function CommentItem({ comment }: Props) {
  const [showReply, setShowReply] = useState(false);
  const [replies, setReplies] = useState(comment.replies || []);

  const handleAddReply = (text: string) => {
    const newReply = {
      id: crypto.randomUUID(),
      name: "You",
      role: "Frontend Dev",
      content: text,
      createdAt: "Baru saja",
    };

    setReplies((prev) => [...prev, newReply]);
    setShowReply(false);
  };

  return (
    <div className="flex flex-col gap-4">

      <div className="flex justify-between items-end">

        <div className="flex gap-3">
          <Image
            className="w-9 h-9 rounded-full"
            src="https://placehold.co/36x36"
            alt="avatar"
            width={36}
            height={36}
          />

          <div className="flex flex-col gap-2">
            <div>
              <p className="text-sm font-semibold">{comment.name}</p>
              <p className="text-xs text-zinc-500">{comment.role}</p>
            </div>

            <p className="text-xs font-medium">
              {comment.content}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end text-[10px] text-zinc-500">
          <span>{comment.createdAt}</span>

          <button
            onClick={() => setShowReply((prev) => !prev)}
            className="hover:underline"
          >
            Balas
          </button>
        </div>

      </div>

      {replies.length > 0 && (
        <div className="flex flex-col gap-4">
          {replies.map((reply) => (
            <ReplyItem key={reply.id} reply={reply} />
          ))}
        </div>
      )}

      {showReply && (
        <ReplyInput onSubmit={handleAddReply} />
      )}

    </div>
  );
}