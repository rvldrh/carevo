export const colors = {
  white: "#FFFFFF",

  blue: {
    100: "#EAF4FF",
    200: "#B8E1FF",
    300: "#7CC4FF",
    400: "#4D8BE6",
    500: "#2563EB",
  },

  purple: {
    400: "#8B5CF6",
  },

  green: {
    400: "#22C55E",
  },

  gray: {
    100: "#F3F4F6",
    200: "#E5E7EB",
    400: "#9CA3AF",
    600: "#4B5563",
  },

  dark: {
    900: "#111827",
  },
} as const;

export type Colors = typeof colors;