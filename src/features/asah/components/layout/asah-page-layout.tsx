import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function AsahPageLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-50 to-blue-500 overflow-hidden">
      <div className="relative w-full max-w-[1440px] mx-auto">
        {children}
      </div>
    </div>
  )
}