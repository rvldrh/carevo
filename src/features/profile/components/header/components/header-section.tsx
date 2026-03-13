import HeaderContent from "@/features/profile/components/header/components/header-content";
import HeaderEditClient from "@/features/profile/components/header/components/header-edit-client";

export default function HeaderSection() {
  return (
    <section className="pt-[12%] pb-[15%] px-[22%] bg-[var(--white)] relative">
      <HeaderEditClient />

      <HeaderContent />
    </section>
  );
}