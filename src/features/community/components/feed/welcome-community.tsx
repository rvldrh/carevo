import Avatar from "@/components/ui/avatar"

export default function WelcomeCommunity() {
  return (
    <div className="bg-[#F5F7F9] rounded-2xl p-4 flex items-center gap-4">

      <Avatar src="/icons/photo-profile.svg" alt="profile" size={48} />

      <h2 className="text-lg font-semibold">
        Selamat Datang di Komunitas
      </h2>

    </div>
  )
}