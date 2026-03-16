import NavPublic from "@/components/layout/navbar/container/nav-public";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <NavPublic />
  {children}
  </>;
}