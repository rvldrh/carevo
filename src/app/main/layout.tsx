import Navbar from "@/components/layout/navbar/container/navbar";
import SearchOverlay from "@/features/search/components/search-overlay";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <SearchOverlay />
      {children}
    </>
  );
}