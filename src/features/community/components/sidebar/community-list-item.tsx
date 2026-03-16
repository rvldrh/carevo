import Avatar from "@/components/ui/avatar"
import JoinButton from "@/features/community/components/join-button"

interface Props {
  community: {
    name: string
    avatar: string
  }
}

export default function CommunityListItem({ community }: Props) {
  return (
    <div className="flex items-center justify-between">

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
  )
}   