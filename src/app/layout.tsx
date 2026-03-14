import type { Metadata } from "next"
import "./globals.css"
import QueryProvider from "@/providers/react-query-provider"
import {Toaster} from 'sonner'

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
          <Toaster position="top-right" richColors />
        </QueryProvider>

      </body>
    </html>
  )
}