import Avatar from "@/components/ui/avatar"

export default function CommunityWelcome() {
  return (
    <div className="w-full h-24 bg-gray-50 rounded-[20px] flex items-center justify-center gap-4">

      <Avatar
        src="https://placehold.co/52x52"
        alt="community"
        size={48}
      />

      <h2 className="text-xl font-semibold">
        Selamat Datang di Komunitas
      </h2>

    </div>
  )
}