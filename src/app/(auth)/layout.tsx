import QueryProvider from "@/providers/react-query-provider";
import Script from "next/script";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QueryProvider>
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="afterInteractive"
        />

        {children}
      </QueryProvider>
    </>
  );
}
