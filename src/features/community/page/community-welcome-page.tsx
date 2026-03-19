"use client";

import CommunityLayout from "@/features/community/components/layout/community-layout";
import CreatePostBox from "@/features/community/components/feed/create-post-box";
import WelcomeCommunity from "@/features/community/components/feed/welcome-community";
import CommunityJoinCard from "@/features/community/components/feed/community-join-card";
import PostFeed from "@/features/community/components/post/post-feed";
import CreatePostModal from "@/features/community/components/feed/create-post-modal";
import { useCreatePostModal } from "@/features/community/hooks/use-create-post-modal";

export default function CommunityWelcoomePage() {
  const modal = useCreatePostModal();

  return (
    <CommunityLayout>
      <div className="flex flex-col gap-5">

        <CreatePostBox/>

        <WelcomeCommunity />

        <CommunityJoinCard />

        <PostFeed />

      </div>

      <CreatePostModal
        open={modal.isOpen}
        onClose={modal.close}
      />
    </CommunityLayout>
  );
}