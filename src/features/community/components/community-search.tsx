import Avatar from "@/components/ui/avatar"

export default function CommunitySearch() {
  return (
    <div className="w-full h-24 bg-gray-50 rounded-[20px] flex items-center px-6 gap-4">

      <Avatar
        src="https://placehold.co/52x52"
        alt="user"
        size={48}
      />

      <input
        placeholder="Tulis Sesuatu di sini"
        className="flex-1 h-8 rounded-xl border border-stone-950 px-3 text-xs font-semibold"
      />

      <button className="w-10 h-10 flex items-center justify-center">
        +
      </button>

    </div>
  )
}