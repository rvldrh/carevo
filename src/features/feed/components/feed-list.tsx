import FeedItem from "@/features/feed/components/feed-item";

interface Props {
  feeds: unknown[];
}

export default function FeedList({ feeds }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {feeds.map((feed) => (
        <FeedItem key={`feed-item-${String(feed)}`} />
      ))}
    </div>
  );
}