import type { Metadata } from "next"
import "./globals.css"
import QueryProvider from "@/providers/react-query-provider"

export const metadata: Metadata = {
  title: "",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body className="antialiased">

        <QueryProvider>
          {children}
        </QueryProvider>

      </body>
    </html>
  )
}