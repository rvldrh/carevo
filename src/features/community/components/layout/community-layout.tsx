import ProfileCard from "@/features/community/components/sidebar/profile-card"
import CommunityPanel from "@/features/community/components/community-panel"

interface Props {
  children: React.ReactNode
}

export default function CommunityLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF8FF] to-[#4298D5]">

      <div className="max-w-[1440px] mx-auto px-6 py-12">

        <div className="flex flex-col lg:flex-row gap-6">

          <aside className="lg:w-[300px]">
            <ProfileCard />
          </aside>

          <main className="flex-1 flex flex-col gap-5">
            {children}
          </main>

          <aside className="lg:w-[280px]">
            <CommunityPanel />
          </aside>

        </div>

      </div>

    </div>
  )
}