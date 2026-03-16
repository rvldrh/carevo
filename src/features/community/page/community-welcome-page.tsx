import CommunityLayout from "@/features/community/components/layout/community-layout"
import CreatePostBox from "@/features/community/components/feed/create-post-box"
import WelcomeCommunity from "@/features/community/components/feed/welcome-community"
import CommunityJoinCard from "@/features/community/components/feed/community-join-card"
import PostFeed from "@/features/community/components/post/post-feed"

export default function CommunityWelcoomePage() {
  return (
    <CommunityLayout>

      <CreatePostBox />

      <WelcomeCommunity />

      <CommunityJoinCard />

      <PostFeed />

    </CommunityLayout>
  )
}