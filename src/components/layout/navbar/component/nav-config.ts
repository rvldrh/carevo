export type NavLink = {
  path: string
  label: string
  icon: string
}

export const navLinks: NavLink[] = [
  {
    path: "/",
    label: "Home",
    icon: "/icons/home.webp",
  },
  {
    path: "/main/community",
    label: "Community",
    icon: "/icons/Group.webp",
  },
  {
    path: "/main/asah",
    label: "Asah",
    icon: "/icons/asah.webp",
  },
  {
    path: "/buildCV",
    label: "Bangun CV",
    icon: "/icons/cv.svg",
  },
]