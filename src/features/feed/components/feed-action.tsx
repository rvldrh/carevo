"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isLiked?: boolean;
  onLikeClick?: () => void;
  onCommentClick?: () => void;
}

export default function FeedActions({
  isLiked = false,
  onLikeClick,
  onCommentClick,
}: Props) {
  return (
    <div className="flex justify-around border-t pt-3 text-xs">
      <button
        onClick={onLikeClick}
        className="flex items-center gap-1 hover:opacity-70 relative"
      >
        <AnimatePresence mode="wait">
          {isLiked ? (
            <motion.div
              key="liked"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/icons/like-onclick.svg"
                alt="liked"
                width={20}
                height={20}
              />
            </motion.div>
          ) : (
            <motion.div
              key="unliked"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image src="/icons/like.svg" alt="like" width={20} height={20} />
            </motion.div>
          )}
        </AnimatePresence>

        <span className={isLiked ? "text-blue-500 font-semibold" : ""}>
          Suka
        </span>
      </button>

      <button
        onClick={onCommentClick}
        className="flex items-center gap-1 hover:opacity-70"
      >
        <Image src="/icons/comment.svg" alt="comment" width={20} height={20} />
        <span>Komentar</span>
      </button>

      <button className="flex items-center gap-1 hover:opacity-70">
        <Image src="/icons/share.svg" alt="share" width={20} height={20} />
        <span>Bagikan</span>
      </button>
    </div>
  );
}
