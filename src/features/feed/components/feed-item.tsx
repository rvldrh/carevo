"use client";

import { useState } from "react";
import FeedCard from "./feed-card";
import CommentSection from "@/features/feed/components/comments/comment-section";

export default function FeedItem() {
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <FeedCard
      onCommentClick={() => setShowComments((prev) => !prev)}
      isLiked={liked}
      onLikeClick={() => setLiked((prev) => !prev)}
    >
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${showComments ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        <div className="pt-2 border-t">
          <CommentSection />
        </div>
      </div>
    </FeedCard>
  );
}
