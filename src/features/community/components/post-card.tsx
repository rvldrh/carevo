import Image from "next/image";
import Avatar from "@/components/ui/avatar";
import JoinButton from "@/features/community/components/join-button";
import { Post } from "@/features/community/types/post.type";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-2xl bg-[#F5F7F9] p-4 flex flex-col gap-4">
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

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-1 hover:opacity-70">
          <Image src="/icons/like.svg" alt="like" width={20} height={20} />
          <span className="text-xs">Suka</span>
        </button>

        <button className="flex items-center gap-1 hover:opacity-70">
          <Image
            src="/icons/comment.svg"
            alt="comment"
            width={20}
            height={20}
          />
          <span className="text-xs">Komentar</span>
        </button>

        <button className="flex items-center gap-1 hover:opacity-70">
          <Image src="/icons/share.svg" alt="share" width={20} height={20} />
          <span className="text-xs">Bagikan</span>
        </button>
      </div>
    </article>
  );
}
