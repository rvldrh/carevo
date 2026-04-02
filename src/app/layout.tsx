import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/providers/react-query-provider";
import { Toaster } from "sonner";
import AuthProvider from "@/components/auth/auth-provider";

export const metadata: Metadata = {
  title: {
    default: "Carevo",
    template: "%s | Carevo",
  },
  description:
    "Platform untuk membuat CV profesional, portfolio, dan personal branding dengan mudah.",
  keywords: [
    "CV builder",
    "portfolio",
    "resume",
    "personal branding",
    "carevo",
  ],

  icons: {
    icon: "/icons/logo.svg",
  },
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
