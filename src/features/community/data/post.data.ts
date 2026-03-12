import { Post } from "@/features/community/types/post.type"

const POST_CONTENT = `UI/UX Designer Community hadir untuk kamu! 👋
Mau ningkatin skill desain? Cari feedback buat project? Atau sekadar ngobrol soal dunia UI/UX?`

export const posts: Post[] = [
  {
    id: 1,
    communityName: "Komunitas UI/UX Designer",
    communityAvatar: "/icons/avatar-community.svg",
    postTitle: "Gabung bersama Komunitas kami",
    postContent: POST_CONTENT,
  },
]