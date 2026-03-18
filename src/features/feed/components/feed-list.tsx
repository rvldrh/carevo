import FeedCard from "@/features/feed/components/feed-card";

interface Props {
  feeds: unknown[];
}

export default function FeedList({ feeds }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {feeds.map((_, i) => (
        <FeedCard key={i} />
      ))}
    </div>
  );
}