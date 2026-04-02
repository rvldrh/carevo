import FeedList from "@/features/feed/components/feed-list";
import ProfileCard from "@/features/feed/components/sidebar/profile-card";
import CommunitySuggestion from "@/features/feed/components/sidebar/community-sugestion";

export default async function FeedPage() {
  const feeds = Array.from({ length: 6 });

  return (
    <div className="min-h-screen bg-stone-100 py-6 lg:py-10">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6">

        <div className="flex flex-col lg:flex-row gap-6">

          <aside className="hidden lg:block lg:w-[300px]">
            <ProfileCard />
          </aside>

          <main className="flex-1 w-full">
            <FeedList feeds={feeds} />
          </main>

          <aside className="hidden lg:block lg:w-[280px]">
            <CommunitySuggestion />
          </aside>

        </div>

      </div>
    </div>
  );
}