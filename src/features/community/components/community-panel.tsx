import { communities } from "@/features/community/data/community.data"
import Avatar from "@/components/ui/avatar"
import JoinButton from "@/features/community/components/join-button"

export default function CommunityPanel() {
  return (
    <aside className="rounded-2xl bg-[#F6F8F9] p-4">

      <h3 className="text-center font-semibold mb-4">
        Bergabung Ke Komunitas
      </h3>

      <div className="flex flex-col gap-3">

        {communities.map((community) => (
          <div
            key={community.name}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-2">
              <Avatar
                src={community.avatar}
                alt={community.name}
                size={36}
              />

              <span className="text-xs font-semibold">
                {community.name}
              </span>
            </div>

            <JoinButton />

          </div>
        ))}

      </div>

    </aside>
  )
}