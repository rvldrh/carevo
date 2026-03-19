"use client";

import { useState } from "react";
import { Comment } from "@/features/community/types/comment.type";
import CommentReply from "./comment-reply";
import CommentList from "./comment-list";

interface Props {
  comment: Comment;
}

export default function CommentItem({ comment }: Props) {
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4">

      <div className="flex justify-between items-end">
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-300" />

          <div className="flex flex-col gap-1">
            <div>
              <p className="text-sm font-semibold">{comment.author}</p>
              <p className="text-xs text-gray-500">{comment.role}</p>
            </div>

            <p className="text-xs font-medium">{comment.content}</p>
          </div>
        </div>

        <div className="flex flex-col items-end text-[10px]">
          <span className="text-gray-500">{comment.createdAt}</span>

          <button
            onClick={() => setShowReply((prev) => !prev)}
            className="text-gray-400 hover:text-black transition"
          >
            Balas
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          showReply ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <CommentReply />
      </div>

      {comment.replies && (
        <div className="pl-10 border-l">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  );
}