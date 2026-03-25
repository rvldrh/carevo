import ProfileCard from "@/features/feed/components/sidebar/profile-card";
import CommunitySuggestion from "@/features/feed/components/sidebar/community-sugestion";
import FeedItem from "../feed-item";

export default async function FeedPage() {
  return (
    <div className="min-h-screen bg-stone-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-3 hidden lg:block">
          <ProfileCard />
        </div>
        <div className="col-span-12 lg:col-span-6">
            <FeedItem />
        </div>
        <div className="col-span-3 hidden lg:block">
          <CommunitySuggestion />
        </div>
      </div>
    </div>
  );
}