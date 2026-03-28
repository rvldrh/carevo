export type NavLink = {
  path: string
  label: string
  icon: string
  activeIcon: string
}

export const navLinks: NavLink[] = [
  {
    path: "/feed",
    label: "Home",
    icon: "/icons/home.svg",
    activeIcon: "/icons/navbar/home-active.svg",
  },
  {
    path: "/community",
    label: "Community",
    icon: "/icons/community-icon.svg",
    activeIcon: "/icons/navbar/group-active.svg",
  },
  {
    path: "/asah",
    label: "Asah",
    icon: "/icons/asah.svg",
    activeIcon: "/icons/navbar/asah-active.svg",
  },
  {
    path: "/CVBuild",
    label: "Bangun CV",
    icon: "/icons/cv.svg",
    activeIcon: "/icons/navbar/cv-active.svg",
  },
]