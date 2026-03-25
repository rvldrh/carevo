"use client";

import { useState } from "react";
import CommentInput from "@/features/feed/components/comments/comment-input";
import CommentList from "@/features/feed/components/comments/comment-list";
import type { Comment } from "@/features/feed/types/comment.type";

export default function CommentSection() {

  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Pranata Chandra",
      role: "UI/UX Designer",
      content: "Saya tertarik dengan komunitas anda",
      createdAt: "4 jam yang lalu"
    },
    {
      id: "2",
      name: "Pranata Chandra",
      role: "UI/UX Designer",
      content: "Keren banget komunitasnya",
      createdAt: "2 jam yang lalu"
    }
  ]);

  const handleAddComment = (value: string) => {
    const newComment: Comment = {
      id: crypto.randomUUID(),
      name: "You",
      role: "Frontend Dev",
      content: value,
      createdAt: "Baru saja"
    };

    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="w-full flex flex-col gap-4">

      <CommentInput onSubmit={handleAddComment} />

      <CommentList comments={comments} />

    </div>
  );
}