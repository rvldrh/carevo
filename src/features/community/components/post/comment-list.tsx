import { Comment } from "@/features/community/types/comment.type";
import CommentItem from "./comment-item";

interface Props {
  comments: Comment[];
}

export default function CommentList({ comments }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}   