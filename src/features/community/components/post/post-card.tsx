"use client";

import { useState } from "react";
import Avatar from "@/components/ui/avatar";
import JoinButton from "@/features/community/components/join-button";
import type { Post } from "@/features/community/types/post.type";
import PostActions from "./post-actions";
import PostComments from "./post-comments";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <article className="rounded-2xl bg-[#F5F7F9] p-4 flex flex-col gap-4 transition-all duration-300">

      <div className="flex items-center gap-3">
        <Avatar src={post.communityAvatar} alt={post.communityName} size={50} />
        <span className="text-sm font-semibold">{post.communityName}</span>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="font-bold text-base">{post.postTitle}</h3>
        <JoinButton />
      </div>

      <p className="text-sm whitespace-pre-line">{post.postContent}</p>

      <div className="w-full h-px bg-black/20" />

      <PostActions
        onCommentClick={() => setShowComments((prev) => !prev)}
      />

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          showComments ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <PostComments />
      </div>

    </article>
  );
}