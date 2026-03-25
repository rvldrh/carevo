import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/providers/react-query-provider";
import { Toaster } from "sonner";
import AuthProvider from "@/components/auth/auth-povider";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <QueryProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
          <Toaster position="top-right" richColors />
        </QueryProvider>
      </body>
    </html>
  );
}
