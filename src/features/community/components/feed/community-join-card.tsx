import Avatar from "@/components/ui/avatar"
import JoinButton from "@/features/community/components/join-button"

export default function CommunityJoinCard() {
  return (
    <div className="bg-[#F5F7F9] rounded-2xl p-6 flex flex-col gap-4">

      <div className="flex items-center gap-3">
        <Avatar src="/icons/uiux.svg" alt="uiux" size={48} />

        <span className="text-sm font-semibold">
          UI/UX Designer Community
        </span>
      </div>

      <div className="flex justify-between items-start">

        <div className="flex flex-col gap-1">
          <h3 className="font-bold">
            Gabung bersama Komunitas kami
          </h3>

          <p className="text-xs text-gray-500">
            Gabung komunitas bersama kami untuk belajar bersama
          </p>
        </div>

        <JoinButton />

      </div>

      <p className="text-sm text-gray-700">
        UI/UX Designer Community hadir untuk kamu 👋
        Mau ningkatin skill desain? Cari feedback buat project?
        Bergabung sekarang dan mulai perjalanan desainmu bersama kami 🚀
      </p>

    </div>
  )
}