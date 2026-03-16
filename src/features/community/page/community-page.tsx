import CommunityLayout from "@/features/community/components/layout/community-layout"
import PostFeed from "@/features/community/components/post/post-feed"

export default function CommunityPage() {
  return (
    <CommunityLayout>
      <PostFeed />
    </CommunityLayout>
  )
}