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
    path: "/community",
    label: "Community",
    icon: "/icons/group.webp",
  },
  {
    path: "/asah",
    label: "Asah",
    icon: "/icons/asah.webp",
  },
]