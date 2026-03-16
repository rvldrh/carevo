import PostCard from "@/features/community/components/post/post-card"
import { posts } from "@/features/community/data/post.data"

export default function PostFeed() {
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  )
}