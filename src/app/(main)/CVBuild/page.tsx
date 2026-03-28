import { CVBuilderPage } from "@/features/cv-builder/page/cv-builder-page";
import { headers } from "next/headers";

export default async function Page() {
const headerList = headers();
  const userId = (await headerList).get("x-user-id");

  if (!userId) {
    return <div className="p-10 text-center">Sesi tidak valid, silakan login ulang.</div>;
  }

  
  return (
    <div className="w-full h-full">
      <CVBuilderPage userId={userId} />
    </div>
  );
}