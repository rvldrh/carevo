import Avatar from "@/components/ui/avatar"
import Image from "next/image"

export default function CreatePostBox() {
  return (
    <div className="bg-[#F5F7F9] rounded-2xl p-4 flex items-center gap-4">

      <Avatar src="/icons/photo-profile.svg" alt="profile" size={48} />

      <input
        placeholder="Tulis sesuatu di sini"
        className="flex-1 bg-transparent border rounded-xl px-4 py-2 text-sm"
      />

      <button>
        <Image
          src="/icons/plus.svg"
          alt="create"
          width={24}
          height={24}
        />
      </button>

    </div>
  )
}