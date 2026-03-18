export type NavLink = {
  path: string
  label: string
  icon: string
  activeIcon: string
}

export const navLinks: NavLink[] = [
  {
    path: "/main/feed",
    label: "Home",
    icon: "/icons/home.svg",
    activeIcon: "/icons/navbar/home-active.svg",
  },
  {
    path: "/main/community",
    label: "Community",
    icon: "/icons/group.svg",
    activeIcon: "/icons/navbar/group-active.svg",
  },
  {
    path: "/main/asah",
    label: "Asah",
    icon: "/icons/asah.svg",
    activeIcon: "/icons/navbar/asah-active.svg",
  },
  {
    path: "/build-cv",
    label: "Bangun CV",
    icon: "/icons/cv.svg",
    activeIcon: "/icons/navbar/cv-active.svg",
  },
]