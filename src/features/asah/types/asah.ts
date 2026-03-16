export type AsahVariant = "certificate" | "bootcamp"

export interface AsahItem {
  id: number
  title: string
  provider: string
  image: string
  level?: string
  date?: string
}