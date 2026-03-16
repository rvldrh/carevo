import { communities } from "@/features/community/data/community.data"
import CommunityListItem from "@/features/community/components/sidebar/community-list-item"
import CommunitySearch from "./community-search"

export default function CommunityPanel() {
  return (
    <aside className="rounded-2xl bg-[#F6F8F9] p-4 flex flex-col gap-4">

      <h3 className="font-semibold text-center">
        Bergabung Ke Komunitas
      </h3>

      <CommunitySearch />

      <div className="flex flex-col gap-3">
        {communities.map((community) => (
          <CommunityListItem
            key={community.name}
            community={community}
          />
        ))}
      </div>

    </aside>
  )
}